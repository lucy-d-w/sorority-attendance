(ns asgnx.core-test
  (:require [clojure.test :refer :all]
            [clojure.core.async :refer [<!!]]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check.generators :as gen]
            [asgnx.core :refer :all]
            [asgnx.kvstore :as kvstore :refer [put! get!]]))



(deftest words-test
  (testing "that sentences can be split into their constituent words"
    (is (= ["a" "b" "c"] (words "a b c")))
    (is (= [] (words "   ")))
    (is (= [] (words nil)))
    (is (= ["a"] (words "a")))
    (is (= ["a"] (words "a ")))
    (is (= ["a" "b"] (words "a b")))))


(deftest cmd-test
  (testing "that commands can be parsed from text messages"
    (is (= "foo" (cmd "foo")))
    (is (= "foo" (cmd "foo x y")))
    (is (= nil   (cmd nil)))
    (is (= ""    (cmd "")))))


(deftest args-test
  (testing "that arguments can be parsed from text messages"
    (is (= ["x" "y"] (args "foo x y")))
    (is (= ["x"] (args "foo x")))
    (is (= [] (args "foo")))
    (is (= [] (args nil)))))


(deftest parsed-msg-test
  (testing "that text messages can be parsed into cmd/args data structures"
    (is (= {:cmd "foo"
            :args ["x" "y"]}
           (parsed-msg "foo x y")))
    (is (= {:cmd "foo"
            :args ["x"]}
           (parsed-msg "foo x")))
    (is (= {:cmd "foo"
            :args []}
           (parsed-msg "foo")))
    (is (= {:cmd "foo"
            :args ["x" "y" "z" "somereallylongthing"]}
           (parsed-msg "foo x y z somereallylongthing")))))

(deftest welcome-test
  (testing "that welcome messages are correctly formatted"
    (is (= "Welcome bob" (welcome {:cmd "welcome" :args ["bob"]})))
    (is (= "Welcome bob" (welcome {:cmd "welcome" :args ["bob" "smith"]})))
    (is (= "Welcome bob smith jr" (welcome {:cmd "welcome" :args ["bob smith jr"]})))))


(deftest guidelines-test
  (testing "that the guidelines doc is output correctly"
    (is (= guidelines-doc (guidelines {:cmd "guidelines" :args []})))))


(deftest format-hour-test
  (testing "that 0-23 hour times are converted to am/pm correctly"
    (is (= "1am" (format-hour 1)))
    (is (= "1pm" (format-hour 13)))
    (is (= "2pm" (format-hour 14)))
    (is (= "12am" (format-hour 0)))
    (is (= "12pm" (format-hour 12)))))


(deftest formatted-hours-me-test
  (testing "that the my calendar data structure is correctly converted to a string"
    (is (= "On 10/29, you have a(n) Interview from 8am to 6pm. "
           (formatted-hours-me {:date "10/29" :start 8 :end 18 :event "Interview"})))))


(deftest formatted-hours-sorority-test
   (testing "that the sorority calendar data structure is correctly converted to a string"
               (is (= "On 10/29, your sorority has Chapter from 6pm to 7pm. The deadline to submit an excuse is 10/28 and the fine is $10 if you skip without an excuse. "
                      (formatted-hours-sorority {:date "10/29" :start 18 :end 19 :event "Chapter" :excuseDeadline "10/28" :fine 10})))
        ))

(deftest my-events-for-day-test
  (testing "testing lookup of my events on a specific day"
    (is (= "On 10/29, you have a(n) Interview from 8am to 6pm. "
           (my-events {:cmd "my" :args ["10/29"]})))
    (is (= "You have no events on this day. "
           (my-events {:cmd "my" :args ["12/12"]})))))

(deftest sorority-events-for-day-test
     (testing "testing lookup of sorority events on a specific day"
               (is (= "On 10/29, your sorority has Chapter from 6pm to 7pm. The deadline to submit an excuse is 10/28 and the fine is $10 if you skip without an excuse. "
                      (sorority-events {:cmd "sorority" :args ["10/29"]})))
               (is (= "Your sorority has no events on this day. "
                      (sorority-events {:cmd "sorority" :args ["11/15"]})))))

  (deftest all-events-for-day-test
        (testing "testing lookup of all events on a specific day"
                (is (= "On 10/29, you have a(n) Interview from 8am to 6pm. On 10/29, your sorority has Chapter from 6pm to 7pm. The deadline to submit an excuse is 10/28 and the fine is $10 if you skip without an excuse. "
                            (all-events {:cmd "all" :args ["10/29"]})))
                (is (= "You have no events on this day. Your sorority has no events on this day. "
                            (all-events {:cmd "all" :args ["11/15"]})))
                (is (= "You have no events on this day. On 10/25, your sorority has Fall Philanthropy from 5pm to 7pm. The deadline to submit an excuse is 10/15 and the fine is $75 if you skip without an excuse. "
                            (all-events {:cmd "all events" :args ["10/25"]})))))


(deftest create-router-test
  (testing "correct creation of a function to lookup a handler for a parsed message"
    (let [router (create-router {"hello" #(str (:cmd %) " " "test")
                                 "argc"  #(count (:args %))
                                 "echo"  identity
                                 "default" (fn [& a] "No!")})
          msg1   {:cmd "hello"}
          msg2   {:cmd "argc" :args [1 2 3]}
          msg3   {:cmd "echo" :args ["a" "z"]}
          msg4   {:cmd "echo2" :args ["a" "z"]}]
      (is (= "hello test" ((router msg1) msg1)))
      (is (= "No!" ((router msg4) msg4)))
      (is (= 3 ((router msg2) msg2)))
      (is (= msg3 ((router msg3) msg3))))))


(deftest action-send-msg-test
  (testing "That action send msg returns a correctly formatted map"
    (is (= :send
           (:action (action-send-msg :bob "foo"))))
    (is (= :bob
           (:to (action-send-msg :bob "foo"))))
    (is (= "foo"
           (:msg (action-send-msg [:a :b] "foo"))))))


(deftest action-send-msgs-test
  (testing "That action send msgs generates a list of sends"
    (let [a (action-send-msg [:a :f :b] 1)
          b (action-send-msg [:a :f :d] 1)
          c (action-send-msg [:a :f :e] 1)
          d (action-send-msg [:a :f :c] 1)]
      (is (= [a b c d]
             (action-send-msgs [[:a :f :b]
                                [:a :f :d]
                                [:a :f :e]
                                [:a :f :c]]
                              1))))))

(deftest action-insert-test
  (testing "That action insert returns a correctly formatted map"
    (is (= #{:action :ks :v}
           (into #{}(keys (action-insert [:a :b] {:foo 1})))))
    (is (= #{:assoc-in [:a :b] {:foo 1}}
           (into #{}(vals (action-insert [:a :b] {:foo 1})))))
    (is (= :assoc-in
           (:action (action-insert [:a :b] {:foo 1}))))
    (is (= {:foo 1}
           (:v (action-insert [:a :b] {:foo 1}))))
    (is (= [:a :b]
           (:ks (action-insert [:a :b] {:foo 1}))))))


(deftest action-remove-test
  (testing "That action remove returns a correctly formatted map"
    (is (= #{:action :ks}
         (into #{} (keys (action-remove [:a :b])))))
    (is (= #{:dissoc-in [:a :b]}
          (into #{}(vals (action-remove [:a :b])))))
    (is (= :dissoc-in
           (:action (action-remove [:a :b]))))
    (is (= [:a :b]
           (:ks (action-remove [:a :b]))))))


(deftest action-inserts-test
  (testing "That action inserts generates a list of inserts"
    (let [a (action-insert [:a :f :b] 1)
          b (action-insert [:a :f :d] 1)
          c (action-insert [:a :f :e] 1)
          d (action-insert [:a :f :c] 1)]
      (is (= [a b c d]
             (action-inserts [:a :f] [:b :d :e :c] 1))))))


(defn action-send [system {:keys [to msg]}]
  (put! (:state-mgr system) [:msgs to] msg))

(defn pending-send-msgs [system to]
  (get! (:state-mgr system) [:msgs to]))

(def send-action-handlers
  {:send action-send})

(deftest handle-message-test
  (testing "the integration and handling of messages"
    (let [ehdlrs (merge
                   send-action-handlers
                   kvstore/action-handlers)
          state  (atom {})
          smgr   (kvstore/create state)
          system {:state-mgr smgr
                  :effect-handlers ehdlrs}]
      (is (= "There are no experts on that topic."
             (<!! (handle-message
                    system
                    "test-user"
                    "ask food best burger in nashville"))))
      (is (= "test-user is now an expert on food."
             (<!! (handle-message
                    system
                    "test-user"
                    "expert food"))))
      (is (= "Asking 1 expert(s) for an answer to: \"what burger\""
             (<!! (handle-message
                    system
                    "test-user"
                    "ask food what burger"))))
      (is (= "what burger"
             (<!! (pending-send-msgs system "test-user"))))
      (is (= "test-user2 is now an expert on food."
             (<!! (handle-message
                    system
                    "test-user2"
                    "expert food"))))
      (is (= "Asking 2 expert(s) for an answer to: \"what burger\""
             (<!! (handle-message
                    system
                    "test-user"
                    "ask food what burger"))))
      (is (= "what burger"
             (<!! (pending-send-msgs system "test-user"))))
      (is (= "what burger"
             (<!! (pending-send-msgs system "test-user2"))))
      (is (= "You must ask a valid question."
             (<!! (handle-message
                    system
                    "test-user"
                    "ask food "))))
      (is (= "test-user is now an expert on nashville."
             (<!! (handle-message
                    system
                    "test-user"
                    "expert nashville"))))
      (is (= "Asking 1 expert(s) for an answer to: \"what bus\""
             (<!! (handle-message
                    system
                    "test-user2"
                    "ask nashville what bus"))))
      (is (= "what bus"
             (<!! (pending-send-msgs system "test-user"))))
      (is (= "Your answer was sent."
             (<!! (handle-message
                   system
                   "test-user"
                   "answer the blue bus"))))
      (is (= "the blue bus"
             (<!! (pending-send-msgs system "test-user2"))))
      (is (= "You did not provide an answer."
             (<!! (handle-message
                   system
                   "test-user"
                   "answer"))))
      (is (= "You haven't been asked a question."
             (<!! (handle-message
                   system
                   "test-user3"
                   "answer the blue bus")))))))
