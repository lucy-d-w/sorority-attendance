// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('asgnx.kvstore');
asgnx.core.guidelines_doc = "https://docs.google.com/spreadsheets/d/1xYCZJDbWmdA2WrtAPEBv051OtFg-gY7B8KUqLRG-1nc/edit#gid=0";
asgnx.core.my_cal = new cljs.core.PersistentArrayMap(null, 1, ["10/29",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"10/29",new cljs.core.Keyword(null,"start","start",-355208981),(8),new cljs.core.Keyword(null,"end","end",-268185958),(18),new cljs.core.Keyword(null,"event","event",301435442),"Interview"], null)], null);
asgnx.core.sorority_cal = new cljs.core.PersistentArrayMap(null, 3, ["10/25",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"date","date",-1463434462),"10/25",new cljs.core.Keyword(null,"start","start",-355208981),(17),new cljs.core.Keyword(null,"end","end",-268185958),(19),new cljs.core.Keyword(null,"event","event",301435442),"Fall Philanthropy",new cljs.core.Keyword(null,"excuseDeadline","excuseDeadline",1727587317),"10/15",new cljs.core.Keyword(null,"fine","fine",-873037193),(75)], null),"10/29",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"date","date",-1463434462),"10/29",new cljs.core.Keyword(null,"start","start",-355208981),(18),new cljs.core.Keyword(null,"end","end",-268185958),(19),new cljs.core.Keyword(null,"event","event",301435442),"Chapter",new cljs.core.Keyword(null,"excuseDeadline","excuseDeadline",1727587317),"10/28",new cljs.core.Keyword(null,"fine","fine",-873037193),(10)], null),"11/2",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"date","date",-1463434462),"11/2",new cljs.core.Keyword(null,"start","start",-355208981),(20),new cljs.core.Keyword(null,"end","end",-268185958),(23),new cljs.core.Keyword(null,"event","event",301435442),"Semi-formal Date Party",new cljs.core.Keyword(null,"excuseDeadline","excuseDeadline",1727587317),"No excuse required.",new cljs.core.Keyword(null,"fine","fine",-873037193),(0)], null)], null);
asgnx.core.words = (function asgnx$core$words(msg){
if(cljs.core.truth_(msg)){
return clojure.string.split.call(null,msg,/ /);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
asgnx.core.cmd = (function asgnx$core$cmd(msg){
return cljs.core.first.call(null,asgnx.core.words.call(null,msg));
});
asgnx.core.args = (function asgnx$core$args(msg){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.drop.call(null,(1),asgnx.core.words.call(null,msg)));
});
asgnx.core.parsed_msg = (function asgnx$core$parsed_msg(msg){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),asgnx.core.cmd.call(null,msg),new cljs.core.Keyword(null,"args","args",1315556576),asgnx.core.args.call(null,msg)], null);
});
asgnx.core.welcome = (function asgnx$core$welcome(pmsg){
return ["Welcome ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(pmsg),(0)))].join('');
});
asgnx.core.guidelines = (function asgnx$core$guidelines(_){
return asgnx.core.guidelines_doc;
});
asgnx.core.simplify = (function asgnx$core$simplify(h){
if(cljs.core._EQ_.call(null,(0),h)){
return "12";
} else {
if(cljs.core._EQ_.call(null,(12),h)){
return "12";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,h,(12)))].join('');
}
}
});
asgnx.core.format_hour = (function asgnx$core$format_hour(h){
if((h > (11))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.simplify.call(null,h)),"pm"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.simplify.call(null,h)),"am"].join('');
}
});
asgnx.core.formatted_hours_me = (function asgnx$core$formatted_hours_me(hours){
return ["On ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"date","date",-1463434462))),", I have a(n) ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"event","event",301435442)))," from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"start","start",-355208981))))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"end","end",-268185958)))),". "].join('');
});
asgnx.core.formatted_hours_sorority = (function asgnx$core$formatted_hours_sorority(hours){
return ["On ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"date","date",-1463434462))),", my sorority has ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"event","event",301435442)))," from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"start","start",-355208981))))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"end","end",-268185958)))),". The deadline to submit an excuse is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"excuseDeadline","excuseDeadline",1727587317)))," and the fine is $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"fine","fine",-873037193)))," if I skip without an excuse. "].join('');
});
asgnx.core.my_events = (function asgnx$core$my_events(p__16173){
var map__16174 = p__16173;
var map__16174__$1 = ((((!((map__16174 == null)))?(((((map__16174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16174):map__16174);
var args = cljs.core.get.call(null,map__16174__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var cmd = cljs.core.get.call(null,map__16174__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
if(cljs.core.truth_(cljs.core.get.call(null,asgnx.core.my_cal,cljs.core.first.call(null,args)))){
return asgnx.core.formatted_hours_me.call(null,cljs.core.get.call(null,asgnx.core.my_cal,cljs.core.first.call(null,args)));
} else {
return ["I have no events on this day. "].join('');
}
});
asgnx.core.sorority_events = (function asgnx$core$sorority_events(p__16176){
var map__16177 = p__16176;
var map__16177__$1 = ((((!((map__16177 == null)))?(((((map__16177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16177):map__16177);
var args = cljs.core.get.call(null,map__16177__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var cmd = cljs.core.get.call(null,map__16177__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
if(cljs.core.truth_(cljs.core.get.call(null,asgnx.core.sorority_cal,cljs.core.first.call(null,args)))){
return asgnx.core.formatted_hours_sorority.call(null,cljs.core.get.call(null,asgnx.core.sorority_cal,cljs.core.first.call(null,args)));
} else {
return ["My sorority has no events on this day. "].join('');
}
});
asgnx.core.all_events = (function asgnx$core$all_events(p__16179){
var map__16180 = p__16179;
var map__16180__$1 = ((((!((map__16180 == null)))?(((((map__16180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16180):map__16180);
var args = cljs.core.get.call(null,map__16180__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var cmd = cljs.core.get.call(null,map__16180__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var x = asgnx.core.my_events.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd], null));
var y = asgnx.core.sorority_events.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
});
asgnx.core.action_send_msg = (function asgnx$core$action_send_msg(to,msg){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"send","send",-652151114)], null);
});
asgnx.core.action_send_msgs = (function asgnx$core$action_send_msgs(people,msg){
return cljs.core.map.call(null,(function (p1__16182_SHARP_){
return asgnx.core.action_send_msg.call(null,p1__16182_SHARP_,msg);
}),people);
});
asgnx.core.action_insert = (function asgnx$core$action_insert(ks,v){
return cljs.core.sorted_map.call(null,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270));
});
asgnx.core.action_inserts = (function asgnx$core$action_inserts(prefix,ks,v){
return cljs.core.map.call(null,(function (p1__16183_SHARP_){
return asgnx.core.action_insert.call(null,cljs.core.conj.call(null,prefix,p1__16183_SHARP_),v);
}),ks);
});
asgnx.core.action_remove = (function asgnx$core$action_remove(ks){
return cljs.core.sorted_map.call(null,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806));
});
asgnx.core.experts_register = (function asgnx$core$experts_register(experts,topic,id,info){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.action_insert.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expert","expert",-816403615),topic,id], null),info)], null);
});
asgnx.core.experts_unregister = (function asgnx$core$experts_unregister(experts,topic,id){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.action_remove.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expert","expert",-816403615),topic,id], null))], null);
});
asgnx.core.experts_question_msg = (function asgnx$core$experts_question_msg(experts,question_words){
return ["Asking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,experts))," expert(s) for an answer to: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",question_words)),"\""].join('');
});
asgnx.core.ask_experts = (function asgnx$core$ask_experts(experts,p__16184){
var map__16185 = p__16184;
var map__16185__$1 = ((((!((map__16185 == null)))?(((((map__16185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16185):map__16185);
var args = cljs.core.get.call(null,map__16185__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var user_id = cljs.core.get.call(null,map__16185__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,args))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"You must ask a valid question."], null);
} else {
if(cljs.core.empty_QMARK_.call(null,experts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"There are no experts on that topic."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,asgnx.core.action_send_msgs.call(null,experts,clojure.string.join.call(null," ",cljs.core.rest.call(null,args))),asgnx.core.action_inserts.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conversations","conversations",-184582239)], null),experts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-question","last-question",-1559537849),clojure.string.join.call(null," ",cljs.core.rest.call(null,args)),new cljs.core.Keyword(null,"asker","asker",693515944),user_id], null))),asgnx.core.experts_question_msg.call(null,experts,cljs.core.rest.call(null,args))], null);
}
}
});
asgnx.core.answer_question = (function asgnx$core$answer_question(conversation,p__16187){
var map__16188 = p__16187;
var map__16188__$1 = ((((!((map__16188 == null)))?(((((map__16188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16188):map__16188);
var args = cljs.core.get.call(null,map__16188__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.empty_QMARK_.call(null,args)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"You did not provide an answer."], null);
} else {
if(cljs.core.empty_QMARK_.call(null,conversation)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"You haven't been asked a question."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.action_send_msg.call(null,cljs.core.get.call(null,conversation,new cljs.core.Keyword(null,"asker","asker",693515944)),clojure.string.join.call(null," ",args))], null),"Your answer was sent."], null);
}
}
});
asgnx.core.add_expert = (function asgnx$core$add_expert(experts,p__16190){
var map__16191 = p__16190;
var map__16191__$1 = ((((!((map__16191 == null)))?(((((map__16191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16191):map__16191);
var args = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var user_id = cljs.core.get.call(null,map__16191__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.experts_register.call(null,experts,cljs.core.first.call(null,args),user_id,cljs.core.rest.call(null,args)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_id)," is now an expert on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),"."].join('')], null);
});
asgnx.core.stateless = (function asgnx$core$stateless(f){
return (function() { 
var G__16193__delegate = function (_,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,f,args)], null);
};
var G__16193 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__16194__i = 0, G__16194__a = new Array(arguments.length -  1);
while (G__16194__i < G__16194__a.length) {G__16194__a[G__16194__i] = arguments[G__16194__i + 1]; ++G__16194__i;}
  args = new cljs.core.IndexedSeq(G__16194__a,0,null);
} 
return G__16193__delegate.call(this,_,args);};
G__16193.cljs$lang$maxFixedArity = 1;
G__16193.cljs$lang$applyTo = (function (arglist__16195){
var _ = cljs.core.first(arglist__16195);
var args = cljs.core.rest(arglist__16195);
return G__16193__delegate(_,args);
});
G__16193.cljs$core$IFn$_invoke$arity$variadic = G__16193__delegate;
return G__16193;
})()
;
});
asgnx.core.routes = cljs.core.PersistentHashMap.fromArrays(["expert","sorority","guidelines","welcome","my","ask","all","answer","default"],[asgnx.core.add_expert,asgnx.core.stateless.call(null,asgnx.core.sorority_events),asgnx.core.stateless.call(null,asgnx.core.guidelines),asgnx.core.stateless.call(null,asgnx.core.welcome),asgnx.core.stateless.call(null,asgnx.core.my_events),asgnx.core.ask_experts,asgnx.core.stateless.call(null,asgnx.core.all_events),asgnx.core.answer_question,asgnx.core.stateless.call(null,(function() { 
var G__16196__delegate = function (args){
return "Unknown command.";
};
var G__16196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16197__i = 0, G__16197__a = new Array(arguments.length -  0);
while (G__16197__i < G__16197__a.length) {G__16197__a[G__16197__i] = arguments[G__16197__i + 0]; ++G__16197__i;}
  args = new cljs.core.IndexedSeq(G__16197__a,0,null);
} 
return G__16196__delegate.call(this,args);};
G__16196.cljs$lang$maxFixedArity = 0;
G__16196.cljs$lang$applyTo = (function (arglist__16198){
var args = cljs.core.seq(arglist__16198);
return G__16196__delegate(args);
});
G__16196.cljs$core$IFn$_invoke$arity$variadic = G__16196__delegate;
return G__16196;
})()
)]);
asgnx.core.experts_on_topic_query = (function asgnx$core$experts_on_topic_query(state_mgr,pmsg){
var vec__16199 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(pmsg);
var topic = cljs.core.nth.call(null,vec__16199,(0),null);
return asgnx.kvstore.list_BANG_.call(null,state_mgr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expert","expert",-816403615),topic], null));
});
asgnx.core.conversations_for_user_query = (function asgnx$core$conversations_for_user_query(state_mgr,pmsg){
var user_id = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(pmsg);
return asgnx.kvstore.get_BANG_.call(null,state_mgr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conversations","conversations",-184582239),user_id], null));
});
asgnx.core.queries = new cljs.core.PersistentArrayMap(null, 3, ["expert",asgnx.core.experts_on_topic_query,"ask",asgnx.core.experts_on_topic_query,"answer",asgnx.core.conversations_for_user_query], null);
asgnx.core.read_state = (function asgnx$core$read_state(state_mgr,pmsg){
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__){
return (function (state_16213){
var state_val_16214 = (state_16213[(1)]);
if((state_val_16214 === (1))){
var inst_16203 = (state_16213[(7)]);
var inst_16202 = new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(pmsg);
var inst_16203__$1 = cljs.core.get.call(null,asgnx.core.queries,inst_16202);
var state_16213__$1 = (function (){var statearr_16215 = state_16213;
(statearr_16215[(7)] = inst_16203__$1);

return statearr_16215;
})();
if(cljs.core.truth_(inst_16203__$1)){
var statearr_16216_16224 = state_16213__$1;
(statearr_16216_16224[(1)] = (2));

} else {
var statearr_16217_16225 = state_16213__$1;
(statearr_16217_16225[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (2))){
var inst_16203 = (state_16213[(7)]);
var inst_16205 = inst_16203.call(null,state_mgr,pmsg);
var state_16213__$1 = state_16213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16213__$1,(5),inst_16205);
} else {
if((state_val_16214 === (3))){
var inst_16209 = cljs.core.PersistentHashMap.EMPTY;
var state_16213__$1 = state_16213;
var statearr_16218_16226 = state_16213__$1;
(statearr_16218_16226[(2)] = inst_16209);

(statearr_16218_16226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (4))){
var inst_16211 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16213__$1,inst_16211);
} else {
if((state_val_16214 === (5))){
var inst_16207 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16219_16227 = state_16213__$1;
(statearr_16219_16227[(2)] = inst_16207);

(statearr_16219_16227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15840__auto__))
;
return ((function (switch__15817__auto__,c__15840__auto__){
return (function() {
var asgnx$core$read_state_$_state_machine__15818__auto__ = null;
var asgnx$core$read_state_$_state_machine__15818__auto____0 = (function (){
var statearr_16220 = [null,null,null,null,null,null,null,null];
(statearr_16220[(0)] = asgnx$core$read_state_$_state_machine__15818__auto__);

(statearr_16220[(1)] = (1));

return statearr_16220;
});
var asgnx$core$read_state_$_state_machine__15818__auto____1 = (function (state_16213){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16221){if((e16221 instanceof Object)){
var ex__15821__auto__ = e16221;
var statearr_16222_16228 = state_16213;
(statearr_16222_16228[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16229 = state_16213;
state_16213 = G__16229;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$core$read_state_$_state_machine__15818__auto__ = function(state_16213){
switch(arguments.length){
case 0:
return asgnx$core$read_state_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$core$read_state_$_state_machine__15818__auto____1.call(this,state_16213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$read_state_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$read_state_$_state_machine__15818__auto____0;
asgnx$core$read_state_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$read_state_$_state_machine__15818__auto____1;
return asgnx$core$read_state_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__))
})();
var state__15842__auto__ = (function (){var statearr_16223 = f__15841__auto__.call(null);
(statearr_16223[(6)] = c__15840__auto__);

return statearr_16223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__))
);

return c__15840__auto__;
});
asgnx.core.create_router = (function asgnx$core$create_router(routes){
return (function (message){
if(cljs.core.contains_QMARK_.call(null,routes,cljs.core.get.call(null,message,new cljs.core.Keyword(null,"cmd","cmd",-302931143)))){
return cljs.core.get.call(null,routes,cljs.core.get.call(null,message,new cljs.core.Keyword(null,"cmd","cmd",-302931143)));
} else {
return cljs.core.get.call(null,routes,"default");
}
});
});
asgnx.core.output = (function asgnx$core$output(o){
return cljs.core.second.call(null,o);
});
asgnx.core.actions = (function asgnx$core$actions(o){
return cljs.core.first.call(null,o);
});
asgnx.core.invoke = (function asgnx$core$invoke(p__16230,e){
var map__16231 = p__16230;
var map__16231__$1 = ((((!((map__16231 == null)))?(((((map__16231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16231):map__16231);
var system = map__16231__$1;
var effect_handlers = cljs.core.get.call(null,map__16231__$1,new cljs.core.Keyword(null,"effect-handlers","effect-handlers",1338585436));
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,map__16231,map__16231__$1,system,effect_handlers){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,map__16231,map__16231__$1,system,effect_handlers){
return (function (state_16245){
var state_val_16246 = (state_16245[(1)]);
if((state_val_16246 === (1))){
var inst_16235 = (state_16245[(7)]);
var inst_16233 = cljs.core.println.call(null,"    Invoke:",e);
var inst_16234 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(e);
var inst_16235__$1 = cljs.core.get.call(null,effect_handlers,inst_16234);
var state_16245__$1 = (function (){var statearr_16247 = state_16245;
(statearr_16247[(8)] = inst_16233);

(statearr_16247[(7)] = inst_16235__$1);

return statearr_16247;
})();
if(cljs.core.truth_(inst_16235__$1)){
var statearr_16248_16257 = state_16245__$1;
(statearr_16248_16257[(1)] = (2));

} else {
var statearr_16249_16258 = state_16245__$1;
(statearr_16249_16258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (2))){
var inst_16235 = (state_16245[(7)]);
var inst_16237 = cljs.core.println.call(null,"    Invoking:",inst_16235,"with",e);
var inst_16238 = inst_16235.call(null,system,e);
var state_16245__$1 = (function (){var statearr_16250 = state_16245;
(statearr_16250[(9)] = inst_16237);

return statearr_16250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16245__$1,(5),inst_16238);
} else {
if((state_val_16246 === (3))){
var state_16245__$1 = state_16245;
var statearr_16251_16259 = state_16245__$1;
(statearr_16251_16259[(2)] = null);

(statearr_16251_16259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (4))){
var inst_16243 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16245__$1,inst_16243);
} else {
if((state_val_16246 === (5))){
var inst_16240 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
var statearr_16252_16260 = state_16245__$1;
(statearr_16252_16260[(2)] = inst_16240);

(statearr_16252_16260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15840__auto__,map__16231,map__16231__$1,system,effect_handlers))
;
return ((function (switch__15817__auto__,c__15840__auto__,map__16231,map__16231__$1,system,effect_handlers){
return (function() {
var asgnx$core$invoke_$_state_machine__15818__auto__ = null;
var asgnx$core$invoke_$_state_machine__15818__auto____0 = (function (){
var statearr_16253 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16253[(0)] = asgnx$core$invoke_$_state_machine__15818__auto__);

(statearr_16253[(1)] = (1));

return statearr_16253;
});
var asgnx$core$invoke_$_state_machine__15818__auto____1 = (function (state_16245){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16254){if((e16254 instanceof Object)){
var ex__15821__auto__ = e16254;
var statearr_16255_16261 = state_16245;
(statearr_16255_16261[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16262 = state_16245;
state_16245 = G__16262;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$core$invoke_$_state_machine__15818__auto__ = function(state_16245){
switch(arguments.length){
case 0:
return asgnx$core$invoke_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$core$invoke_$_state_machine__15818__auto____1.call(this,state_16245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$invoke_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$invoke_$_state_machine__15818__auto____0;
asgnx$core$invoke_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$invoke_$_state_machine__15818__auto____1;
return asgnx$core$invoke_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,map__16231,map__16231__$1,system,effect_handlers))
})();
var state__15842__auto__ = (function (){var statearr_16256 = f__15841__auto__.call(null);
(statearr_16256[(6)] = c__15840__auto__);

return statearr_16256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,map__16231,map__16231__$1,system,effect_handlers))
);

return c__15840__auto__;
});
asgnx.core.process_actions = (function asgnx$core$process_actions(system,actions){
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__){
return (function (state_16314){
var state_val_16315 = (state_16314[(1)]);
if((state_val_16315 === (7))){
var inst_16272 = (state_16314[(7)]);
var inst_16265 = (state_16314[(8)]);
var inst_16271 = (state_16314[(9)]);
var inst_16273 = (state_16314[(10)]);
var inst_16274 = (state_16314[(11)]);
var inst_16282 = (state_16314[(2)]);
var inst_16283 = cljs.core.swap_BANG_.call(null,inst_16265,cljs.core.conj,inst_16282);
var inst_16284 = (inst_16274 + (1));
var tmp16316 = inst_16272;
var tmp16317 = inst_16271;
var tmp16318 = inst_16273;
var inst_16271__$1 = tmp16317;
var inst_16272__$1 = tmp16316;
var inst_16273__$1 = tmp16318;
var inst_16274__$1 = inst_16284;
var state_16314__$1 = (function (){var statearr_16319 = state_16314;
(statearr_16319[(12)] = inst_16283);

(statearr_16319[(7)] = inst_16272__$1);

(statearr_16319[(9)] = inst_16271__$1);

(statearr_16319[(10)] = inst_16273__$1);

(statearr_16319[(11)] = inst_16274__$1);

return statearr_16319;
})();
var statearr_16320_16343 = state_16314__$1;
(statearr_16320_16343[(2)] = null);

(statearr_16320_16343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (1))){
var inst_16263 = cljs.core.println.call(null,"  Processing actions:",actions);
var inst_16264 = cljs.core.PersistentVector.EMPTY;
var inst_16265 = cljs.core.atom.call(null,inst_16264);
var inst_16270 = cljs.core.seq.call(null,actions);
var inst_16271 = inst_16270;
var inst_16272 = null;
var inst_16273 = (0);
var inst_16274 = (0);
var state_16314__$1 = (function (){var statearr_16321 = state_16314;
(statearr_16321[(7)] = inst_16272);

(statearr_16321[(8)] = inst_16265);

(statearr_16321[(9)] = inst_16271);

(statearr_16321[(10)] = inst_16273);

(statearr_16321[(13)] = inst_16263);

(statearr_16321[(11)] = inst_16274);

return statearr_16321;
})();
var statearr_16322_16344 = state_16314__$1;
(statearr_16322_16344[(2)] = null);

(statearr_16322_16344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (4))){
var inst_16272 = (state_16314[(7)]);
var inst_16274 = (state_16314[(11)]);
var inst_16279 = cljs.core._nth.call(null,inst_16272,inst_16274);
var inst_16280 = asgnx.core.invoke.call(null,system,inst_16279);
var state_16314__$1 = state_16314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16314__$1,(7),inst_16280);
} else {
if((state_val_16315 === (13))){
var inst_16304 = (state_16314[(2)]);
var state_16314__$1 = state_16314;
var statearr_16323_16345 = state_16314__$1;
(statearr_16323_16345[(2)] = inst_16304);

(statearr_16323_16345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (6))){
var inst_16309 = (state_16314[(2)]);
var state_16314__$1 = state_16314;
var statearr_16324_16346 = state_16314__$1;
(statearr_16324_16346[(2)] = inst_16309);

(statearr_16324_16346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (3))){
var inst_16265 = (state_16314[(8)]);
var inst_16311 = (state_16314[(2)]);
var inst_16312 = cljs.core.deref.call(null,inst_16265);
var state_16314__$1 = (function (){var statearr_16325 = state_16314;
(statearr_16325[(14)] = inst_16311);

return statearr_16325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16314__$1,inst_16312);
} else {
if((state_val_16315 === (12))){
var inst_16287 = (state_16314[(15)]);
var inst_16296 = cljs.core.first.call(null,inst_16287);
var inst_16297 = asgnx.core.invoke.call(null,system,inst_16296);
var state_16314__$1 = state_16314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16314__$1,(14),inst_16297);
} else {
if((state_val_16315 === (2))){
var inst_16273 = (state_16314[(10)]);
var inst_16274 = (state_16314[(11)]);
var inst_16276 = (inst_16274 < inst_16273);
var inst_16277 = inst_16276;
var state_16314__$1 = state_16314;
if(cljs.core.truth_(inst_16277)){
var statearr_16326_16347 = state_16314__$1;
(statearr_16326_16347[(1)] = (4));

} else {
var statearr_16327_16348 = state_16314__$1;
(statearr_16327_16348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (11))){
var inst_16287 = (state_16314[(15)]);
var inst_16291 = cljs.core.chunk_first.call(null,inst_16287);
var inst_16292 = cljs.core.chunk_rest.call(null,inst_16287);
var inst_16293 = cljs.core.count.call(null,inst_16291);
var inst_16271 = inst_16292;
var inst_16272 = inst_16291;
var inst_16273 = inst_16293;
var inst_16274 = (0);
var state_16314__$1 = (function (){var statearr_16328 = state_16314;
(statearr_16328[(7)] = inst_16272);

(statearr_16328[(9)] = inst_16271);

(statearr_16328[(10)] = inst_16273);

(statearr_16328[(11)] = inst_16274);

return statearr_16328;
})();
var statearr_16329_16349 = state_16314__$1;
(statearr_16329_16349[(2)] = null);

(statearr_16329_16349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (9))){
var state_16314__$1 = state_16314;
var statearr_16330_16350 = state_16314__$1;
(statearr_16330_16350[(2)] = null);

(statearr_16330_16350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (5))){
var inst_16271 = (state_16314[(9)]);
var inst_16287 = (state_16314[(15)]);
var inst_16287__$1 = cljs.core.seq.call(null,inst_16271);
var state_16314__$1 = (function (){var statearr_16331 = state_16314;
(statearr_16331[(15)] = inst_16287__$1);

return statearr_16331;
})();
if(inst_16287__$1){
var statearr_16332_16351 = state_16314__$1;
(statearr_16332_16351[(1)] = (8));

} else {
var statearr_16333_16352 = state_16314__$1;
(statearr_16333_16352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (14))){
var inst_16265 = (state_16314[(8)]);
var inst_16287 = (state_16314[(15)]);
var inst_16299 = (state_16314[(2)]);
var inst_16300 = cljs.core.swap_BANG_.call(null,inst_16265,cljs.core.conj,inst_16299);
var inst_16301 = cljs.core.next.call(null,inst_16287);
var inst_16271 = inst_16301;
var inst_16272 = null;
var inst_16273 = (0);
var inst_16274 = (0);
var state_16314__$1 = (function (){var statearr_16334 = state_16314;
(statearr_16334[(7)] = inst_16272);

(statearr_16334[(9)] = inst_16271);

(statearr_16334[(10)] = inst_16273);

(statearr_16334[(16)] = inst_16300);

(statearr_16334[(11)] = inst_16274);

return statearr_16334;
})();
var statearr_16335_16353 = state_16314__$1;
(statearr_16335_16353[(2)] = null);

(statearr_16335_16353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (10))){
var inst_16307 = (state_16314[(2)]);
var state_16314__$1 = state_16314;
var statearr_16336_16354 = state_16314__$1;
(statearr_16336_16354[(2)] = inst_16307);

(statearr_16336_16354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16315 === (8))){
var inst_16287 = (state_16314[(15)]);
var inst_16289 = cljs.core.chunked_seq_QMARK_.call(null,inst_16287);
var state_16314__$1 = state_16314;
if(inst_16289){
var statearr_16337_16355 = state_16314__$1;
(statearr_16337_16355[(1)] = (11));

} else {
var statearr_16338_16356 = state_16314__$1;
(statearr_16338_16356[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15840__auto__))
;
return ((function (switch__15817__auto__,c__15840__auto__){
return (function() {
var asgnx$core$process_actions_$_state_machine__15818__auto__ = null;
var asgnx$core$process_actions_$_state_machine__15818__auto____0 = (function (){
var statearr_16339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16339[(0)] = asgnx$core$process_actions_$_state_machine__15818__auto__);

(statearr_16339[(1)] = (1));

return statearr_16339;
});
var asgnx$core$process_actions_$_state_machine__15818__auto____1 = (function (state_16314){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16340){if((e16340 instanceof Object)){
var ex__15821__auto__ = e16340;
var statearr_16341_16357 = state_16314;
(statearr_16341_16357[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16358 = state_16314;
state_16314 = G__16358;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$core$process_actions_$_state_machine__15818__auto__ = function(state_16314){
switch(arguments.length){
case 0:
return asgnx$core$process_actions_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$core$process_actions_$_state_machine__15818__auto____1.call(this,state_16314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$process_actions_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$process_actions_$_state_machine__15818__auto____0;
asgnx$core$process_actions_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$process_actions_$_state_machine__15818__auto____1;
return asgnx$core$process_actions_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__))
})();
var state__15842__auto__ = (function (){var statearr_16342 = f__15841__auto__.call(null);
(statearr_16342[(6)] = c__15840__auto__);

return statearr_16342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__))
);

return c__15840__auto__;
});
/**
 * 
 *  This function orchestrates the processing of incoming messages
 *  and glues all of the pieces of the processing pipeline together.
 * 
 *  The basic flow to handle a message is as follows:
 * 
 *  1. Create the router that will be used later to find the
 *     function to handle the message
 *  2. Parse the message
 *  3. Load any saved state that is going to be needed to process
 *     the message (e.g., querying the list of experts, etc.)
 *  4. Find the function that can handle the message
 *  5. Call the handler function with the state from #3 and
 *     the message
 *  6. Run the different actions that the handler returned...these actions
 *     will be bound to different implementations depending on the environemnt
 *     (e.g., in test, the actions aren't going to send real text messages)
 *  7. Return the string response to the message
 * 
 *   
 */
asgnx.core.handle_message = (function asgnx$core$handle_message(p__16359,src,msg){
var map__16360 = p__16359;
var map__16360__$1 = ((((!((map__16360 == null)))?(((((map__16360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16360):map__16360);
var system = map__16360__$1;
var state_mgr = cljs.core.get.call(null,map__16360__$1,new cljs.core.Keyword(null,"state-mgr","state-mgr",-1839931632));
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,map__16360,map__16360__$1,system,state_mgr){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,map__16360,map__16360__$1,system,state_mgr){
return (function (state_16391){
var state_val_16392 = (state_16391[(1)]);
if((state_val_16392 === (1))){
var inst_16370 = (state_16391[(7)]);
var inst_16367 = (state_16391[(8)]);
var inst_16362 = cljs.core.println.call(null,"=========================================");
var inst_16363 = cljs.core.println.call(null,"  Processing:\"",msg,"\" from",src);
var inst_16367__$1 = asgnx.core.create_router.call(null,asgnx.core.routes);
var inst_16368 = cljs.core.println.call(null,"  Router:",inst_16367__$1);
var inst_16369 = asgnx.core.parsed_msg.call(null,msg);
var inst_16370__$1 = cljs.core.assoc.call(null,inst_16369,new cljs.core.Keyword(null,"user-id","user-id",-206822291),src);
var inst_16371 = cljs.core.println.call(null,"  Parsed msg:",inst_16370__$1);
var inst_16372 = asgnx.core.read_state.call(null,state_mgr,inst_16370__$1);
var state_16391__$1 = (function (){var statearr_16393 = state_16391;
(statearr_16393[(9)] = inst_16368);

(statearr_16393[(10)] = inst_16362);

(statearr_16393[(7)] = inst_16370__$1);

(statearr_16393[(8)] = inst_16367__$1);

(statearr_16393[(11)] = inst_16363);

(statearr_16393[(12)] = inst_16371);

return statearr_16393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16391__$1,(2),inst_16372);
} else {
if((state_val_16392 === (2))){
var inst_16370 = (state_16391[(7)]);
var inst_16367 = (state_16391[(8)]);
var inst_16380 = (state_16391[(13)]);
var inst_16374 = (state_16391[(2)]);
var inst_16375 = cljs.core.println.call(null,"  Read state:",inst_16374);
var inst_16376 = inst_16367.call(null,inst_16370);
var inst_16377 = cljs.core.println.call(null,"  Hdlr:",inst_16376);
var inst_16378 = inst_16376.call(null,inst_16374,inst_16370);
var inst_16379 = cljs.core.nth.call(null,inst_16378,(0),null);
var inst_16380__$1 = cljs.core.nth.call(null,inst_16378,(1),null);
var inst_16381 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16382 = [inst_16379,inst_16380__$1];
var inst_16383 = (new cljs.core.PersistentVector(null,2,(5),inst_16381,inst_16382,null));
var inst_16384 = cljs.core.println.call(null,"  Hdlr result:",inst_16383);
var inst_16385 = asgnx.core.process_actions.call(null,system,inst_16379);
var state_16391__$1 = (function (){var statearr_16394 = state_16391;
(statearr_16394[(14)] = inst_16377);

(statearr_16394[(15)] = inst_16375);

(statearr_16394[(13)] = inst_16380__$1);

(statearr_16394[(16)] = inst_16384);

return statearr_16394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16391__$1,(3),inst_16385);
} else {
if((state_val_16392 === (3))){
var inst_16380 = (state_16391[(13)]);
var inst_16387 = (state_16391[(2)]);
var inst_16388 = cljs.core.println.call(null,"  Action results:",inst_16387);
var inst_16389 = cljs.core.println.call(null,"=========================================");
var state_16391__$1 = (function (){var statearr_16395 = state_16391;
(statearr_16395[(17)] = inst_16389);

(statearr_16395[(18)] = inst_16388);

return statearr_16395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16391__$1,inst_16380);
} else {
return null;
}
}
}
});})(c__15840__auto__,map__16360,map__16360__$1,system,state_mgr))
;
return ((function (switch__15817__auto__,c__15840__auto__,map__16360,map__16360__$1,system,state_mgr){
return (function() {
var asgnx$core$handle_message_$_state_machine__15818__auto__ = null;
var asgnx$core$handle_message_$_state_machine__15818__auto____0 = (function (){
var statearr_16396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16396[(0)] = asgnx$core$handle_message_$_state_machine__15818__auto__);

(statearr_16396[(1)] = (1));

return statearr_16396;
});
var asgnx$core$handle_message_$_state_machine__15818__auto____1 = (function (state_16391){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16397){if((e16397 instanceof Object)){
var ex__15821__auto__ = e16397;
var statearr_16398_16400 = state_16391;
(statearr_16398_16400[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16401 = state_16391;
state_16391 = G__16401;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$core$handle_message_$_state_machine__15818__auto__ = function(state_16391){
switch(arguments.length){
case 0:
return asgnx$core$handle_message_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$core$handle_message_$_state_machine__15818__auto____1.call(this,state_16391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$handle_message_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$handle_message_$_state_machine__15818__auto____0;
asgnx$core$handle_message_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$handle_message_$_state_machine__15818__auto____1;
return asgnx$core$handle_message_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,map__16360,map__16360__$1,system,state_mgr))
})();
var state__15842__auto__ = (function (){var statearr_16399 = f__15841__auto__.call(null);
(statearr_16399[(6)] = c__15840__auto__);

return statearr_16399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,map__16360,map__16360__$1,system,state_mgr))
);

return c__15840__auto__;
});

//# sourceMappingURL=core.js.map
