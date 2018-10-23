(ns asgnx.core
  (:require [clojure.string :as string]
            [clojure.core.async :as async :refer [go chan <! >!]]
            [asgnx.kvstore :as kvstore
             :refer [put! get! list! remove!]]))


;; Do not edit!
;; A def for the rules doc.
(def guidelines-doc "https://docs.google.com/spreadsheets/d/1xYCZJDbWmdA2WrtAPEBv051OtFg-gY7B8KUqLRG-1nc/edit#gid=0")


;; Do not edit!
;; Maps specifying my calendar and the organization's calendar

  (def my-cal {"10/29" {:date "10/29"
                            :start 8
                            :end 18
                            :event "Interview"}})

  (def sorority-cal {
              "10/25" {  :date "10/25"
                                  :start 17
                                  :end 19
                                  :event "Fall Philanthropy"
                                  :excuseDeadline "10/15"
                                  :fine 75}
              "10/29" {  :date "10/29"
                                  :start 18
                                  :end 19
                                  :event "Chapter"
                                  :excuseDeadline "10/28"
                                  :fine 10}
              "11/2" {   :date "11/2"
                                  :start 20
                                  :end 23
                                  :event "Semi-formal Date Party"
                                  :excuseDeadline "N/A"
                                  :fine 0}})


;; This is a helper function that you might want to use to implement
;; `cmd` and `args`.
(defn words [msg]
  (if msg
      (string/split msg #" ")
      []))

;; Asgn 1.
;;
;; @Todo: Fill in this function to return the first word in a text
;; message.
;;
;; Example: (cmd "foo bar") => "foo"
;;
;; See the cmd-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn cmd [msg] (first (words msg)))

;; Asgn 1.
;;
;; @Todo: Fill in this function to return the list of words following
;; the command in a text message.
;;
;; Example: (args "foo bar baz") => ("bar" "baz")
;;
;; See the args-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn args [msg] (into [](drop 1(words msg))))

;; Asgn 1.
;;
;; @Todo: Fill in this function to return a map with keys for the
;; :cmd and :args parsed from the msg.
;;
;; Example:
;;
;; (parsed-msg "foo bar baz") => {:cmd "foo" :args ["bar" "baz"]}
;;
;; See the parsed-msg-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn parsed-msg [msg] {:cmd (cmd msg) :args (args msg)})

;; Asgn 1.
;;
;; @Todo: Fill in this function to prefix the first of the args
;; in a parsed message with "Welcome " and return the result.
;;
;; Example:
;;
;; (welcome {:cmd "welcome" :args ["foo"]}) => "Welcome foo"
;;
;; See the welcome-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn welcome [pmsg] (str "Welcome " (get (:args pmsg) 0)))

;; Asgn 1.
;;
;; @Todo: Fill in this function to return the guidelines doc.
;; Use the `guidelines-doc` def to produce the output.
;;
;;
(defn guidelines [_] guidelines-doc)

(defn simplify [h] (if (= 0 h) "12" (if (= 12 h) "12" (str (mod h 12)))))
;; Asgn 1.
;;
;; @Todo: Fill in this function to convert from 0-23hr format
;; to AM/PM format.
;;
;; Example: (format-hour 14) => "2pm"
;;
;; See the format-hour-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn format-hour [h] (if (> h 11) (str (simplify h) "pm") (str (simplify h) "am")))

;; Asgn 1.
;;
;; @Todo: This function should take a map in the format of
;; the calendars and convert it to a string format.
;;
;; You should use your format-hour function to implement this.
;;
;; See the formatted-hours-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn formatted-hours-me [hours]
  (str "On " (get hours :date) ", you have a(n) "
  (get hours :event) " from "(format-hour (get hours :start)) " to " (format-hour (get hours :end)) ". "))

(defn formatted-hours-sorority [hours]
    (str "On " (get hours :date) ", your sorority has " (get hours :event)
    " from "(format-hour (get hours :start)) " to " (format-hour (get hours :end))
    ". The deadline to submit an excuse is " (get hours :excuseDeadline) " and the fine is $" (get hours :fine) " if you skip without an excuse. "))

;; Formats the excuse that is to be sent.
  (defn formatted-hours-excuse1 [hours]
      (str "Hi, I am so sorry, but I will not be able to attend " (get hours :event) " on "
      (get hours :date) ". "))

    (defn formatted-hours-excuse2 [hours]
        (str "The reason is that I have a(n) " (get hours :event) " at the same time. "))


;; Asgn 1.
;;
;; @Todo: This function should lookup and see if there are any personal or
;; sorority events on the day specified by the first of the `args`
;; in the parsed message. If so, the function should return a formatted
;;  representation of the calendar. If not,
;; the function should return "You/your sorority have/has no events on this day".
;;

(defn my-events [{:keys [args cmd]}]
  (if (get my-cal(first args))
    (formatted-hours-me (get my-cal (first args)))
    (str "You have no events on this day. ")))

  (defn sorority-events [{:keys [args cmd]}]
    (if (get sorority-cal(first args))
    (formatted-hours-sorority (get sorority-cal (first args)))
    (str "Your sorority has no events on this day. ")))

  (defn all-events [{:keys [args cmd]}]
    (let [
      x (my-events {:args args :cmd cmd})
      y (sorority-events {:args args :cmd cmd})
      ]
      (str x y)
      ))


;; Asgn 2.
;;
;; @Todo: Create a function called action-send-msg that takes
;; a destination for the msg in a parameter called `to`
;; and the message in a parameter called `msg` and returns
;; a map with the keys :to and :msg bound to each parameter.
;; The map should also have the key :action bound to the value
;; :send.
;;
(defn action-send-msg [to msg] {:to to :msg msg :action :send})

;; Asgn 2.
;;
;; @Todo: Create a function called action-send-msgs that takes
;; takes a list of people to receive a message in a `people`
;; parameter and a message to send them in a `msg` parmaeter
;; and returns a list produced by invoking the above `action-send-msg`
;; function on each person in the people list.
;;
;; java-like pseudo code:
;;
;; output = new list
;; for person in people:
;;   output.add( action-send-msg(person, msg) )
;; return output
;;
(defn action-send-msgs [people msg] (map #(action-send-msg % msg) people))



;; Asgn 2.
;;
;; @Todo: Create a function called action-insert that takes
;; a list of keys in a `ks` parameter, a value to bind to that
;; key path to in a `v` parameter, and returns a map with
;; the key :ks bound to the `ks` parameter value and the key :v
;; vound to the `v` parameter value.)
;; The map should also have the key :action bound to the value
;; :assoc-in.
;;
(defn action-insert [ks v] (sorted-map :ks ks :v v :action :assoc-in))

;; Asgn 2.
;;
;; @Todo: Create a function called action-inserts that takes:
;; 1. a key prefix (e.g., [:a :b])
;; 2. a list of suffixes for the key (e.g., [:c :d])
;; 3. a value to bind
;;
;; and calls (action-insert combined-key value) for each possible
;; combined-key that can be produced by appending one of the suffixes
;; to the prefix.
;;
;; In other words, this invocation:
;;
;; (action-inserts [:foo :bar] [:a :b :c] 32)
;;
;; would be equivalent to this:
;;
;; [(action-insert [:foo :bar :a] 32)
;;  (action-insert [:foo :bar :b] 32)
;;  (action-insert [:foo :bar :c] 32)]
;;
(defn action-inserts [prefix ks v] (map #(action-insert (conj prefix %) v) ks))

;; Asgn 2.
;;
;; @Todo: Create a function called action-remove that takes
;; a list of keys in a `ks` parameter and returns a map with
;; the key :ks bound to the `ks` parameter value.
;; The map should also have the key :action bound to the value
;; :dissoc-in.
;;
(defn action-remove [ks] (sorted-map :ks ks :action :dissoc-in))

;; Asgn 3.
;;
;; @Todo: Create a function called "exec-register"
;; that takes the current application `state`, a `topic`
;; the exec's `id` (e.g., unique name), and information
;; about the exec (`info`) and registers them as an exec board member overseeing
;; the specified topic.
;;
(defn exec-register [exec topic id info] [(action-insert [:exec topic id] info)])

;; Asgn 3.
;;
;; @Todo: Create a function called "exec-unregister"
;; that takes the current application `state`, a `topic`
;; and the exec's `id` (e.g., unique name) and then
;; removes the exec from the list of exec on that topic.
;; Look at the associated test to see the expected function signature.
;;
;;
(defn exec-unregister [exec topic id] [(action-remove [:exec topic id])])

;; If the user chooses to submit an excuse, this will format the excuse with
;; the event being missed and the reason why.
(defn submit-excuse-msg [{:keys [args exec]}]
 (let [
   y (formatted-hours-excuse1 (get sorority-cal (first args)))
   z (formatted-hours-excuse2 (get my-cal (first args)))
   ]
   (str "Submitting excuse to " (count exec) " exec member(s) for approval: \"" y z)
   ))

;; Asgn 3.
;;
;; @Todo: Create a function called "submit-excuse."
;;
;; The sender of the message will be identified by their phone number
;; in the user-id parameter. This is the phone number that you will need
;; to forward decisions on whether or not they are excused from events to.
;;
;; The excuse being sent is compiled from data in both calendars.
;;
;; The actions in the list are the *side effects* that need to take place
;; to ask the question (e.g., sending messages to the exec). The string
;; is the response that is going to be sent back to the person that asked
;; the question.
;;
;; The correct string response to a valid question should be produced with
;; the `exec-question-msg` function above.
;;
;; If there are no registered exec on a topic, you should return an
;; empty list of actions and "This position does not exist"
;;
;; If there isn't a question, you should return "You must submit a valid excuse."
;;
;;


(defn submit-excuse [exec {:keys [args user-id cmd]}]
  (if(empty? (rest args))[[]"You must submit a valid excuse."]
  (if (empty? exec)[[]"This position does not exist."]
  [(concat(action-send-msgs exec (string/join " " "-Lucy"))(action-inserts [:conversations] exec
  {:last-question (string/join " " (rest args)) :asker user-id}))(submit-excuse-msg {:args (rest args) :exec exec})])))


;; Asgn 3.
;;
;; @Todo: Create a function called "approve-excuse"
;; that takes two parameters:
;;
;; 1. the last conversation describing the last question that was routed
;;    to the exec
;; 2. a parsed message with the format:
;;    {:cmd "ask"
;;     :user-id "+15555555555"
;;     :args [topic answer-word1 answer-word2 ... answer-wordN]}
;;
;; The parsed message is generated by breaking up the words in the ask
;; text message. For example, if someone sent the message:
;;
;; "answer joey's house of pizza"
;;
;; The conversation will be data that you store as a side-effect in
;; ask-exec. You probably want this data to be information about the
;; last question asked to each exec. See the "think about" comment above.
;;
;; The parsed message would be:
;;
;; {:cmd "ask"
;;  :user-id "+15555555555"
;;  :args ["joey's" "house" "of" "pizza"]}
;;
;; This function needs to return a list with two elements:
;; [[actions...] "response to exec answering"]
;;
;; The actions in the list are the *side effects* that need to take place
;; to send the answer to the original question asker. The string
;; is the response that is going to be sent back to the exec answering
;; the question.
;;
;; Think about how you are going to figure out where to route messages
;; when an exec answers (see the conversations query) and make sure you
;; handle the needed side effect for storing the conversation state.
;;
;; If there are no registered exec on a topic, you should return an
;; empty list of actions and "There are no exec on that topic."
;;
;; If there isn't a question, you should return "You must ask a valid question."
;;
;; Why this strange architecture? By returning a list of the actions to take,
;; rather than directly taking that action, we can keep this function pure.
;; Pure functions are WAY easier to test / maintain. Also, we can isolate our
;; messy impure action handling at the "edges" of the application, where it is
;; easier to track and reason about.
;;
;; You should look at `handle-message` to get an idea of the way that this
;; function is going to be used, its expected signature, and how the actions
;; and output are going to work.
;;
;; See the integration test in See handle-message-test for the
;; expectations on how your code operates
;;
(defn approve-excuse [conversation {:keys
  [args]}](if(empty? args) [[] "You did not provide an approval or rejection."]
  (if (empty? conversation) [[]"You haven't been asked to review an excuse."]
  [[(action-send-msg (get conversation :asker) (string/join " " args))]"Your decision was sent."])))

;; Asgn 3.
;;
;; @Todo: Create a function called "add-exec"
;; that takes two parameters:
;;
;; 1. the current list of exec on the topic
;; 2. a parsed message with the format:
;;    {:cmd "exec"
;;     :user-id "+15555555555"
;;     :args [topic]
;;
;;
;; The parsed message is generated by breaking up the words in the exec
;; text message. For example, if someone sent the message:
;;
;; "exec social"
;;
;; The parsed message would be:
;;
;; {:cmd "exec"
;;  :user-id "+15555555555"))
;;  :args ["social"]}
;;
;; This function needs to add "sara" to the list of exec overseeing "social" and
;; associate her phone number with her ID.
;;
;; This function needs to
;; return the updated `state`, which should now have the exec registered
;; under the specified topic (e.g., "sara" under "social"). The output to
;; send back to the user should be (str exec-id " is now an exec on " topic)
;;
;; The last line of your function should be something like:
;;
;; [new-state (str exec-id " is now an exec on " topic)]
;;
;; See the integration test in See handle-message-test for the
;; expectations on how your code operates
;;
(defn add-exec [exec {:keys [args user-id]}]
  [(exec-register exec (first args) user-id (rest args))(str user-id " is now registered as the exec member overseeing " (first args) ".")])

;; Don't edit!
(defn stateless [f]
  (fn [_ & args]
    [[] (apply f args)]))


(def routes {"default"  (stateless (fn [& args] "Unknown command."))
             "welcome"  (stateless welcome)
             "guidelines" (stateless guidelines)
             "my"   (stateless my-events)
             "sorority"   (stateless sorority-events)
             "all"   (stateless all-events)
             "exec"   add-exec
             "submit"      submit-excuse
             "decide"   approve-excuse})
;; Asgn 3.
;;
;; @Todo: Add mappings of the cmds "exec", "submit", and "decide" to
;; to the `routes` map so that the functions that you
;; created will be invoked when the corresponding text message
;; commands are received.
;;})


;; Don't edit!
(defn exec-on-topic-query [state-mgr pmsg]
  (let [[topic]  (:args pmsg)]
    (list! state-mgr [:exec topic])))


;; Don't edit!
(defn conversations-for-user-query [state-mgr pmsg]
  (let [user-id (:user-id pmsg)]
    (get! state-mgr [:conversations user-id])))


;; Don't edit!
(def queries
  {"exec" exec-on-topic-query
   "submit"    exec-on-topic-query
   "decide" conversations-for-user-query})


;; Don't edit!
(defn read-state [state-mgr pmsg]
  (go
    (if-let [qfn (get queries (:cmd pmsg))]
      (<! (qfn state-mgr pmsg))
      {})))


;; Asgn 1.
;;
;; @Todo: This function should return a function (<== pay attention to the
;; return type) that takes a parsed message as input and returns the
;; function in the `routes` map that is associated with a key matching
;; the `:cmd` in the parsed message. The returned function would return
;; `welcome` if invoked with `{:cmd "welcome"}`.
;;
;; Example:
;;
;; (let [msg {:cmd "welcome" :args ["bob"]}]
;;   (((create-router {"welcome" welcome}) msg) msg) => "Welcome bob"
;;
;; If there isn't a function in the routes map that is mapped to a
;; corresponding key for the command, you should return the function
;; mapped to the key "default".
;;
;; See the create-router-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn create-router [routes] (fn [message] (if (contains? routes
  (get message :cmd)) (get routes (get message :cmd))(get routes "default"))))

;; Don't edit!
(defn output [o]
  (second o))


;; Don't edit!
(defn actions [o]
  (first o))


;; Don't edit!
(defn invoke [{:keys [effect-handlers] :as system} e]
  (go
    (println "    Invoke:" e)
    (if-let [action (get effect-handlers (:action e))]
      (do
        (println "    Invoking:" action "with" e)
        (<! (action system e))))))


;; Don't edit!
(defn process-actions [system actions]
  (go
    (println "  Processing actions:" actions)
    (let [results (atom [])]
      (doseq [action actions]
        (let [result (<! (invoke system action))]
          (swap! results conj result)))
      @results)))


;; Don't edit!
(defn handle-message
  "
    This function orchestrates the processing of incoming messages
    and glues all of the pieces of the processing pipeline together.

    The basic flow to handle a message is as follows:

    1. Create the router that will be used later to find the
       function to handle the message
    2. Parse the message
    3. Load any saved state that is going to be needed to process
       the message (e.g., querying the list of exec, etc.)
    4. Find the function that can handle the message
    5. Call the handler function with the state from #3 and
       the message
    6. Run the different actions that the handler returned...these actions
       will be bound to different implementations depending on the environemnt
       (e.g., in test, the actions aren't going to send real text messages)
    7. Return the string response to the message

  "
  [{:keys [state-mgr] :as system} src msg]
  (go
    (println "=========================================")
    (println "  Processing:\"" msg "\" from" src)
    (let [rtr    (create-router routes)
          _      (println "  Router:" rtr)
          pmsg   (assoc (parsed-msg msg) :user-id src)
          _      (println "  Parsed msg:" pmsg)
          state  (<! (read-state state-mgr pmsg))
          _      (println "  Read state:" state)
          hdlr   (rtr pmsg)
          _      (println "  Hdlr:" hdlr)
          [as o] (hdlr state pmsg)
          _      (println "  Hdlr result:" [as o])
          arslt  (<! (process-actions system as))
          _      (println "  Action results:" arslt)]
      (println "=========================================")
      o)))
