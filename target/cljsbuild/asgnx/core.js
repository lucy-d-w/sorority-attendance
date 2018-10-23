// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('asgnx.kvstore');
asgnx.core.guidelines_doc = "https://docs.google.com/spreadsheets/d/1xYCZJDbWmdA2WrtAPEBv051OtFg-gY7B8KUqLRG-1nc/edit#gid=0";
asgnx.core.my_cal = new cljs.core.PersistentArrayMap(null, 1, ["10/29",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),"10/29",new cljs.core.Keyword(null,"start","start",-355208981),(8),new cljs.core.Keyword(null,"end","end",-268185958),(18),new cljs.core.Keyword(null,"event","event",301435442),"Interview"], null)], null);
asgnx.core.sorority_cal = new cljs.core.PersistentArrayMap(null, 3, ["10/25",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"date","date",-1463434462),"10/25",new cljs.core.Keyword(null,"start","start",-355208981),(17),new cljs.core.Keyword(null,"end","end",-268185958),(19),new cljs.core.Keyword(null,"event","event",301435442),"Fall Philanthropy",new cljs.core.Keyword(null,"excuseDeadline","excuseDeadline",1727587317),"10/15",new cljs.core.Keyword(null,"fine","fine",-873037193),(75)], null),"10/29",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"date","date",-1463434462),"10/29",new cljs.core.Keyword(null,"start","start",-355208981),(18),new cljs.core.Keyword(null,"end","end",-268185958),(19),new cljs.core.Keyword(null,"event","event",301435442),"Chapter",new cljs.core.Keyword(null,"excuseDeadline","excuseDeadline",1727587317),"10/28",new cljs.core.Keyword(null,"fine","fine",-873037193),(10)], null),"11/2",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"date","date",-1463434462),"11/2",new cljs.core.Keyword(null,"start","start",-355208981),(20),new cljs.core.Keyword(null,"end","end",-268185958),(23),new cljs.core.Keyword(null,"event","event",301435442),"Semi-formal Date Party",new cljs.core.Keyword(null,"excuseDeadline","excuseDeadline",1727587317),"N/A",new cljs.core.Keyword(null,"fine","fine",-873037193),(0)], null)], null);
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
return ["On ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"date","date",-1463434462))),", you have a(n) ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"event","event",301435442)))," from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"start","start",-355208981))))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"end","end",-268185958)))),". "].join('');
});
asgnx.core.formatted_hours_sorority = (function asgnx$core$formatted_hours_sorority(hours){
return ["On ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"date","date",-1463434462))),", your sorority has ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"event","event",301435442)))," from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"start","start",-355208981))))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"end","end",-268185958)))),". The deadline to submit an excuse is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"excuseDeadline","excuseDeadline",1727587317)))," and the fine is $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"fine","fine",-873037193)))," if you skip without an excuse. "].join('');
});
asgnx.core.formatted_hours_excuse1 = (function asgnx$core$formatted_hours_excuse1(hours){
return ["Hi, I am so sorry, but I will not be able to attend ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"event","event",301435442)))," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"date","date",-1463434462))),". "].join('');
});
asgnx.core.formatted_hours_excuse2 = (function asgnx$core$formatted_hours_excuse2(hours){
return ["The reason is that I have a(n) ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,hours,new cljs.core.Keyword(null,"event","event",301435442)))," at the same time. "].join('');
});
asgnx.core.my_events = (function asgnx$core$my_events(p__16177){
var map__16178 = p__16177;
var map__16178__$1 = ((((!((map__16178 == null)))?(((((map__16178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16178):map__16178);
var args = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var cmd = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
if(cljs.core.truth_(cljs.core.get.call(null,asgnx.core.my_cal,cljs.core.first.call(null,args)))){
return asgnx.core.formatted_hours_me.call(null,cljs.core.get.call(null,asgnx.core.my_cal,cljs.core.first.call(null,args)));
} else {
return ["You have no events on this day. "].join('');
}
});
asgnx.core.sorority_events = (function asgnx$core$sorority_events(p__16180){
var map__16181 = p__16180;
var map__16181__$1 = ((((!((map__16181 == null)))?(((((map__16181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16181):map__16181);
var args = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var cmd = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
if(cljs.core.truth_(cljs.core.get.call(null,asgnx.core.sorority_cal,cljs.core.first.call(null,args)))){
return asgnx.core.formatted_hours_sorority.call(null,cljs.core.get.call(null,asgnx.core.sorority_cal,cljs.core.first.call(null,args)));
} else {
return ["Your sorority has no events on this day. "].join('');
}
});
asgnx.core.all_events = (function asgnx$core$all_events(p__16183){
var map__16184 = p__16183;
var map__16184__$1 = ((((!((map__16184 == null)))?(((((map__16184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16184):map__16184);
var args = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var cmd = cljs.core.get.call(null,map__16184__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var x = asgnx.core.my_events.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd], null));
var y = asgnx.core.sorority_events.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
});
asgnx.core.action_send_msg = (function asgnx$core$action_send_msg(to,msg){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"send","send",-652151114)], null);
});
asgnx.core.action_send_msgs = (function asgnx$core$action_send_msgs(people,msg){
return cljs.core.map.call(null,(function (p1__16186_SHARP_){
return asgnx.core.action_send_msg.call(null,p1__16186_SHARP_,msg);
}),people);
});
asgnx.core.action_insert = (function asgnx$core$action_insert(ks,v){
return cljs.core.sorted_map.call(null,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270));
});
asgnx.core.action_inserts = (function asgnx$core$action_inserts(prefix,ks,v){
return cljs.core.map.call(null,(function (p1__16187_SHARP_){
return asgnx.core.action_insert.call(null,cljs.core.conj.call(null,prefix,p1__16187_SHARP_),v);
}),ks);
});
asgnx.core.action_remove = (function asgnx$core$action_remove(ks){
return cljs.core.sorted_map.call(null,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806));
});
asgnx.core.exec_register = (function asgnx$core$exec_register(exec,topic,id,info){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.action_insert.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec","exec",1625568743),topic,id], null),info)], null);
});
asgnx.core.exec_unregister = (function asgnx$core$exec_unregister(exec,topic,id){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.action_remove.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec","exec",1625568743),topic,id], null))], null);
});
asgnx.core.submit_excuse_msg = (function asgnx$core$submit_excuse_msg(p__16188){
var map__16189 = p__16188;
var map__16189__$1 = ((((!((map__16189 == null)))?(((((map__16189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16189):map__16189);
var args = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var exec = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"exec","exec",1625568743));
var y = asgnx.core.formatted_hours_excuse1.call(null,cljs.core.get.call(null,asgnx.core.sorority_cal,cljs.core.first.call(null,args)));
var z = asgnx.core.formatted_hours_excuse2.call(null,cljs.core.get.call(null,asgnx.core.my_cal,cljs.core.first.call(null,args)));
return ["Submitting excuse to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,exec))," exec member(s) for approval: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z)].join('');
});
asgnx.core.submit_excuse = (function asgnx$core$submit_excuse(exec,p__16191){
var map__16192 = p__16191;
var map__16192__$1 = ((((!((map__16192 == null)))?(((((map__16192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16192):map__16192);
var args = cljs.core.get.call(null,map__16192__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var user_id = cljs.core.get.call(null,map__16192__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var cmd = cljs.core.get.call(null,map__16192__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
if(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,args))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"You must submit a valid excuse."], null);
} else {
if(cljs.core.empty_QMARK_.call(null,exec)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"This position does not exist."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,asgnx.core.action_send_msgs.call(null,exec,clojure.string.join.call(null," ","-Lucy")),asgnx.core.action_inserts.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conversations","conversations",-184582239)], null),exec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-question","last-question",-1559537849),clojure.string.join.call(null," ",cljs.core.rest.call(null,args)),new cljs.core.Keyword(null,"asker","asker",693515944),user_id], null))),asgnx.core.submit_excuse_msg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.rest.call(null,args),new cljs.core.Keyword(null,"exec","exec",1625568743),exec], null))], null);
}
}
});
asgnx.core.approve_excuse = (function asgnx$core$approve_excuse(conversation,p__16194){
var map__16195 = p__16194;
var map__16195__$1 = ((((!((map__16195 == null)))?(((((map__16195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16195):map__16195);
var args = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.empty_QMARK_.call(null,args)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"You did not provide an approval or rejection."], null);
} else {
if(cljs.core.empty_QMARK_.call(null,conversation)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"You haven't been asked to review an excuse."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.action_send_msg.call(null,cljs.core.get.call(null,conversation,new cljs.core.Keyword(null,"asker","asker",693515944)),clojure.string.join.call(null," ",args))], null),"Your decision was sent."], null);
}
}
});
asgnx.core.add_exec = (function asgnx$core$add_exec(exec,p__16197){
var map__16198 = p__16197;
var map__16198__$1 = ((((!((map__16198 == null)))?(((((map__16198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16198):map__16198);
var args = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var user_id = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.exec_register.call(null,exec,cljs.core.first.call(null,args),user_id,cljs.core.rest.call(null,args)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_id)," is now registered as the exec member overseeing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),"."].join('')], null);
});
asgnx.core.stateless = (function asgnx$core$stateless(f){
return (function() { 
var G__16200__delegate = function (_,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,f,args)], null);
};
var G__16200 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__16201__i = 0, G__16201__a = new Array(arguments.length -  1);
while (G__16201__i < G__16201__a.length) {G__16201__a[G__16201__i] = arguments[G__16201__i + 1]; ++G__16201__i;}
  args = new cljs.core.IndexedSeq(G__16201__a,0,null);
} 
return G__16200__delegate.call(this,_,args);};
G__16200.cljs$lang$maxFixedArity = 1;
G__16200.cljs$lang$applyTo = (function (arglist__16202){
var _ = cljs.core.first(arglist__16202);
var args = cljs.core.rest(arglist__16202);
return G__16200__delegate(_,args);
});
G__16200.cljs$core$IFn$_invoke$arity$variadic = G__16200__delegate;
return G__16200;
})()
;
});
asgnx.core.routes = cljs.core.PersistentHashMap.fromArrays(["decide","sorority","guidelines","welcome","my","exec","submit","all","default"],[asgnx.core.approve_excuse,asgnx.core.stateless.call(null,asgnx.core.sorority_events),asgnx.core.stateless.call(null,asgnx.core.guidelines),asgnx.core.stateless.call(null,asgnx.core.welcome),asgnx.core.stateless.call(null,asgnx.core.my_events),asgnx.core.add_exec,asgnx.core.submit_excuse,asgnx.core.stateless.call(null,asgnx.core.all_events),asgnx.core.stateless.call(null,(function() { 
var G__16203__delegate = function (args){
return "Unknown command.";
};
var G__16203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16204__i = 0, G__16204__a = new Array(arguments.length -  0);
while (G__16204__i < G__16204__a.length) {G__16204__a[G__16204__i] = arguments[G__16204__i + 0]; ++G__16204__i;}
  args = new cljs.core.IndexedSeq(G__16204__a,0,null);
} 
return G__16203__delegate.call(this,args);};
G__16203.cljs$lang$maxFixedArity = 0;
G__16203.cljs$lang$applyTo = (function (arglist__16205){
var args = cljs.core.seq(arglist__16205);
return G__16203__delegate(args);
});
G__16203.cljs$core$IFn$_invoke$arity$variadic = G__16203__delegate;
return G__16203;
})()
)]);
asgnx.core.exec_on_topic_query = (function asgnx$core$exec_on_topic_query(state_mgr,pmsg){
var vec__16206 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(pmsg);
var topic = cljs.core.nth.call(null,vec__16206,(0),null);
return asgnx.kvstore.list_BANG_.call(null,state_mgr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec","exec",1625568743),topic], null));
});
asgnx.core.conversations_for_user_query = (function asgnx$core$conversations_for_user_query(state_mgr,pmsg){
var user_id = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(pmsg);
return asgnx.kvstore.get_BANG_.call(null,state_mgr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conversations","conversations",-184582239),user_id], null));
});
asgnx.core.queries = new cljs.core.PersistentArrayMap(null, 3, ["exec",asgnx.core.exec_on_topic_query,"submit",asgnx.core.exec_on_topic_query,"decide",asgnx.core.conversations_for_user_query], null);
asgnx.core.read_state = (function asgnx$core$read_state(state_mgr,pmsg){
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__){
return (function (state_16220){
var state_val_16221 = (state_16220[(1)]);
if((state_val_16221 === (1))){
var inst_16210 = (state_16220[(7)]);
var inst_16209 = new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(pmsg);
var inst_16210__$1 = cljs.core.get.call(null,asgnx.core.queries,inst_16209);
var state_16220__$1 = (function (){var statearr_16222 = state_16220;
(statearr_16222[(7)] = inst_16210__$1);

return statearr_16222;
})();
if(cljs.core.truth_(inst_16210__$1)){
var statearr_16223_16231 = state_16220__$1;
(statearr_16223_16231[(1)] = (2));

} else {
var statearr_16224_16232 = state_16220__$1;
(statearr_16224_16232[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (2))){
var inst_16210 = (state_16220[(7)]);
var inst_16212 = inst_16210.call(null,state_mgr,pmsg);
var state_16220__$1 = state_16220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16220__$1,(5),inst_16212);
} else {
if((state_val_16221 === (3))){
var inst_16216 = cljs.core.PersistentHashMap.EMPTY;
var state_16220__$1 = state_16220;
var statearr_16225_16233 = state_16220__$1;
(statearr_16225_16233[(2)] = inst_16216);

(statearr_16225_16233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (4))){
var inst_16218 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16220__$1,inst_16218);
} else {
if((state_val_16221 === (5))){
var inst_16214 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
var statearr_16226_16234 = state_16220__$1;
(statearr_16226_16234[(2)] = inst_16214);

(statearr_16226_16234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15844__auto__))
;
return ((function (switch__15821__auto__,c__15844__auto__){
return (function() {
var asgnx$core$read_state_$_state_machine__15822__auto__ = null;
var asgnx$core$read_state_$_state_machine__15822__auto____0 = (function (){
var statearr_16227 = [null,null,null,null,null,null,null,null];
(statearr_16227[(0)] = asgnx$core$read_state_$_state_machine__15822__auto__);

(statearr_16227[(1)] = (1));

return statearr_16227;
});
var asgnx$core$read_state_$_state_machine__15822__auto____1 = (function (state_16220){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16228){if((e16228 instanceof Object)){
var ex__15825__auto__ = e16228;
var statearr_16229_16235 = state_16220;
(statearr_16229_16235[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16236 = state_16220;
state_16220 = G__16236;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$core$read_state_$_state_machine__15822__auto__ = function(state_16220){
switch(arguments.length){
case 0:
return asgnx$core$read_state_$_state_machine__15822__auto____0.call(this);
case 1:
return asgnx$core$read_state_$_state_machine__15822__auto____1.call(this,state_16220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$read_state_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$read_state_$_state_machine__15822__auto____0;
asgnx$core$read_state_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$read_state_$_state_machine__15822__auto____1;
return asgnx$core$read_state_$_state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__))
})();
var state__15846__auto__ = (function (){var statearr_16230 = f__15845__auto__.call(null);
(statearr_16230[(6)] = c__15844__auto__);

return statearr_16230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__))
);

return c__15844__auto__;
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
asgnx.core.invoke = (function asgnx$core$invoke(p__16237,e){
var map__16238 = p__16237;
var map__16238__$1 = ((((!((map__16238 == null)))?(((((map__16238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16238):map__16238);
var system = map__16238__$1;
var effect_handlers = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"effect-handlers","effect-handlers",1338585436));
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,map__16238,map__16238__$1,system,effect_handlers){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,map__16238,map__16238__$1,system,effect_handlers){
return (function (state_16252){
var state_val_16253 = (state_16252[(1)]);
if((state_val_16253 === (1))){
var inst_16242 = (state_16252[(7)]);
var inst_16240 = cljs.core.println.call(null,"    Invoke:",e);
var inst_16241 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(e);
var inst_16242__$1 = cljs.core.get.call(null,effect_handlers,inst_16241);
var state_16252__$1 = (function (){var statearr_16254 = state_16252;
(statearr_16254[(8)] = inst_16240);

(statearr_16254[(7)] = inst_16242__$1);

return statearr_16254;
})();
if(cljs.core.truth_(inst_16242__$1)){
var statearr_16255_16264 = state_16252__$1;
(statearr_16255_16264[(1)] = (2));

} else {
var statearr_16256_16265 = state_16252__$1;
(statearr_16256_16265[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (2))){
var inst_16242 = (state_16252[(7)]);
var inst_16244 = cljs.core.println.call(null,"    Invoking:",inst_16242,"with",e);
var inst_16245 = inst_16242.call(null,system,e);
var state_16252__$1 = (function (){var statearr_16257 = state_16252;
(statearr_16257[(9)] = inst_16244);

return statearr_16257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16252__$1,(5),inst_16245);
} else {
if((state_val_16253 === (3))){
var state_16252__$1 = state_16252;
var statearr_16258_16266 = state_16252__$1;
(statearr_16258_16266[(2)] = null);

(statearr_16258_16266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16253 === (4))){
var inst_16250 = (state_16252[(2)]);
var state_16252__$1 = state_16252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16252__$1,inst_16250);
} else {
if((state_val_16253 === (5))){
var inst_16247 = (state_16252[(2)]);
var state_16252__$1 = state_16252;
var statearr_16259_16267 = state_16252__$1;
(statearr_16259_16267[(2)] = inst_16247);

(statearr_16259_16267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15844__auto__,map__16238,map__16238__$1,system,effect_handlers))
;
return ((function (switch__15821__auto__,c__15844__auto__,map__16238,map__16238__$1,system,effect_handlers){
return (function() {
var asgnx$core$invoke_$_state_machine__15822__auto__ = null;
var asgnx$core$invoke_$_state_machine__15822__auto____0 = (function (){
var statearr_16260 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16260[(0)] = asgnx$core$invoke_$_state_machine__15822__auto__);

(statearr_16260[(1)] = (1));

return statearr_16260;
});
var asgnx$core$invoke_$_state_machine__15822__auto____1 = (function (state_16252){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16261){if((e16261 instanceof Object)){
var ex__15825__auto__ = e16261;
var statearr_16262_16268 = state_16252;
(statearr_16262_16268[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16269 = state_16252;
state_16252 = G__16269;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$core$invoke_$_state_machine__15822__auto__ = function(state_16252){
switch(arguments.length){
case 0:
return asgnx$core$invoke_$_state_machine__15822__auto____0.call(this);
case 1:
return asgnx$core$invoke_$_state_machine__15822__auto____1.call(this,state_16252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$invoke_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$invoke_$_state_machine__15822__auto____0;
asgnx$core$invoke_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$invoke_$_state_machine__15822__auto____1;
return asgnx$core$invoke_$_state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,map__16238,map__16238__$1,system,effect_handlers))
})();
var state__15846__auto__ = (function (){var statearr_16263 = f__15845__auto__.call(null);
(statearr_16263[(6)] = c__15844__auto__);

return statearr_16263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,map__16238,map__16238__$1,system,effect_handlers))
);

return c__15844__auto__;
});
asgnx.core.process_actions = (function asgnx$core$process_actions(system,actions){
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__){
return (function (state_16321){
var state_val_16322 = (state_16321[(1)]);
if((state_val_16322 === (7))){
var inst_16272 = (state_16321[(7)]);
var inst_16279 = (state_16321[(8)]);
var inst_16281 = (state_16321[(9)]);
var inst_16280 = (state_16321[(10)]);
var inst_16278 = (state_16321[(11)]);
var inst_16289 = (state_16321[(2)]);
var inst_16290 = cljs.core.swap_BANG_.call(null,inst_16272,cljs.core.conj,inst_16289);
var inst_16291 = (inst_16281 + (1));
var tmp16323 = inst_16279;
var tmp16324 = inst_16280;
var tmp16325 = inst_16278;
var inst_16278__$1 = tmp16325;
var inst_16279__$1 = tmp16323;
var inst_16280__$1 = tmp16324;
var inst_16281__$1 = inst_16291;
var state_16321__$1 = (function (){var statearr_16326 = state_16321;
(statearr_16326[(8)] = inst_16279__$1);

(statearr_16326[(12)] = inst_16290);

(statearr_16326[(9)] = inst_16281__$1);

(statearr_16326[(10)] = inst_16280__$1);

(statearr_16326[(11)] = inst_16278__$1);

return statearr_16326;
})();
var statearr_16327_16350 = state_16321__$1;
(statearr_16327_16350[(2)] = null);

(statearr_16327_16350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (1))){
var inst_16270 = cljs.core.println.call(null,"  Processing actions:",actions);
var inst_16271 = cljs.core.PersistentVector.EMPTY;
var inst_16272 = cljs.core.atom.call(null,inst_16271);
var inst_16277 = cljs.core.seq.call(null,actions);
var inst_16278 = inst_16277;
var inst_16279 = null;
var inst_16280 = (0);
var inst_16281 = (0);
var state_16321__$1 = (function (){var statearr_16328 = state_16321;
(statearr_16328[(7)] = inst_16272);

(statearr_16328[(8)] = inst_16279);

(statearr_16328[(9)] = inst_16281);

(statearr_16328[(10)] = inst_16280);

(statearr_16328[(13)] = inst_16270);

(statearr_16328[(11)] = inst_16278);

return statearr_16328;
})();
var statearr_16329_16351 = state_16321__$1;
(statearr_16329_16351[(2)] = null);

(statearr_16329_16351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (4))){
var inst_16279 = (state_16321[(8)]);
var inst_16281 = (state_16321[(9)]);
var inst_16286 = cljs.core._nth.call(null,inst_16279,inst_16281);
var inst_16287 = asgnx.core.invoke.call(null,system,inst_16286);
var state_16321__$1 = state_16321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16321__$1,(7),inst_16287);
} else {
if((state_val_16322 === (13))){
var inst_16311 = (state_16321[(2)]);
var state_16321__$1 = state_16321;
var statearr_16330_16352 = state_16321__$1;
(statearr_16330_16352[(2)] = inst_16311);

(statearr_16330_16352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (6))){
var inst_16316 = (state_16321[(2)]);
var state_16321__$1 = state_16321;
var statearr_16331_16353 = state_16321__$1;
(statearr_16331_16353[(2)] = inst_16316);

(statearr_16331_16353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (3))){
var inst_16272 = (state_16321[(7)]);
var inst_16318 = (state_16321[(2)]);
var inst_16319 = cljs.core.deref.call(null,inst_16272);
var state_16321__$1 = (function (){var statearr_16332 = state_16321;
(statearr_16332[(14)] = inst_16318);

return statearr_16332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16321__$1,inst_16319);
} else {
if((state_val_16322 === (12))){
var inst_16294 = (state_16321[(15)]);
var inst_16303 = cljs.core.first.call(null,inst_16294);
var inst_16304 = asgnx.core.invoke.call(null,system,inst_16303);
var state_16321__$1 = state_16321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16321__$1,(14),inst_16304);
} else {
if((state_val_16322 === (2))){
var inst_16281 = (state_16321[(9)]);
var inst_16280 = (state_16321[(10)]);
var inst_16283 = (inst_16281 < inst_16280);
var inst_16284 = inst_16283;
var state_16321__$1 = state_16321;
if(cljs.core.truth_(inst_16284)){
var statearr_16333_16354 = state_16321__$1;
(statearr_16333_16354[(1)] = (4));

} else {
var statearr_16334_16355 = state_16321__$1;
(statearr_16334_16355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (11))){
var inst_16294 = (state_16321[(15)]);
var inst_16298 = cljs.core.chunk_first.call(null,inst_16294);
var inst_16299 = cljs.core.chunk_rest.call(null,inst_16294);
var inst_16300 = cljs.core.count.call(null,inst_16298);
var inst_16278 = inst_16299;
var inst_16279 = inst_16298;
var inst_16280 = inst_16300;
var inst_16281 = (0);
var state_16321__$1 = (function (){var statearr_16335 = state_16321;
(statearr_16335[(8)] = inst_16279);

(statearr_16335[(9)] = inst_16281);

(statearr_16335[(10)] = inst_16280);

(statearr_16335[(11)] = inst_16278);

return statearr_16335;
})();
var statearr_16336_16356 = state_16321__$1;
(statearr_16336_16356[(2)] = null);

(statearr_16336_16356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (9))){
var state_16321__$1 = state_16321;
var statearr_16337_16357 = state_16321__$1;
(statearr_16337_16357[(2)] = null);

(statearr_16337_16357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (5))){
var inst_16294 = (state_16321[(15)]);
var inst_16278 = (state_16321[(11)]);
var inst_16294__$1 = cljs.core.seq.call(null,inst_16278);
var state_16321__$1 = (function (){var statearr_16338 = state_16321;
(statearr_16338[(15)] = inst_16294__$1);

return statearr_16338;
})();
if(inst_16294__$1){
var statearr_16339_16358 = state_16321__$1;
(statearr_16339_16358[(1)] = (8));

} else {
var statearr_16340_16359 = state_16321__$1;
(statearr_16340_16359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (14))){
var inst_16272 = (state_16321[(7)]);
var inst_16294 = (state_16321[(15)]);
var inst_16306 = (state_16321[(2)]);
var inst_16307 = cljs.core.swap_BANG_.call(null,inst_16272,cljs.core.conj,inst_16306);
var inst_16308 = cljs.core.next.call(null,inst_16294);
var inst_16278 = inst_16308;
var inst_16279 = null;
var inst_16280 = (0);
var inst_16281 = (0);
var state_16321__$1 = (function (){var statearr_16341 = state_16321;
(statearr_16341[(8)] = inst_16279);

(statearr_16341[(9)] = inst_16281);

(statearr_16341[(10)] = inst_16280);

(statearr_16341[(16)] = inst_16307);

(statearr_16341[(11)] = inst_16278);

return statearr_16341;
})();
var statearr_16342_16360 = state_16321__$1;
(statearr_16342_16360[(2)] = null);

(statearr_16342_16360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (10))){
var inst_16314 = (state_16321[(2)]);
var state_16321__$1 = state_16321;
var statearr_16343_16361 = state_16321__$1;
(statearr_16343_16361[(2)] = inst_16314);

(statearr_16343_16361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16322 === (8))){
var inst_16294 = (state_16321[(15)]);
var inst_16296 = cljs.core.chunked_seq_QMARK_.call(null,inst_16294);
var state_16321__$1 = state_16321;
if(inst_16296){
var statearr_16344_16362 = state_16321__$1;
(statearr_16344_16362[(1)] = (11));

} else {
var statearr_16345_16363 = state_16321__$1;
(statearr_16345_16363[(1)] = (12));

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
});})(c__15844__auto__))
;
return ((function (switch__15821__auto__,c__15844__auto__){
return (function() {
var asgnx$core$process_actions_$_state_machine__15822__auto__ = null;
var asgnx$core$process_actions_$_state_machine__15822__auto____0 = (function (){
var statearr_16346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16346[(0)] = asgnx$core$process_actions_$_state_machine__15822__auto__);

(statearr_16346[(1)] = (1));

return statearr_16346;
});
var asgnx$core$process_actions_$_state_machine__15822__auto____1 = (function (state_16321){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16347){if((e16347 instanceof Object)){
var ex__15825__auto__ = e16347;
var statearr_16348_16364 = state_16321;
(statearr_16348_16364[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16365 = state_16321;
state_16321 = G__16365;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$core$process_actions_$_state_machine__15822__auto__ = function(state_16321){
switch(arguments.length){
case 0:
return asgnx$core$process_actions_$_state_machine__15822__auto____0.call(this);
case 1:
return asgnx$core$process_actions_$_state_machine__15822__auto____1.call(this,state_16321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$process_actions_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$process_actions_$_state_machine__15822__auto____0;
asgnx$core$process_actions_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$process_actions_$_state_machine__15822__auto____1;
return asgnx$core$process_actions_$_state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__))
})();
var state__15846__auto__ = (function (){var statearr_16349 = f__15845__auto__.call(null);
(statearr_16349[(6)] = c__15844__auto__);

return statearr_16349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__))
);

return c__15844__auto__;
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
 *     the message (e.g., querying the list of exec, etc.)
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
asgnx.core.handle_message = (function asgnx$core$handle_message(p__16366,src,msg){
var map__16367 = p__16366;
var map__16367__$1 = ((((!((map__16367 == null)))?(((((map__16367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16367):map__16367);
var system = map__16367__$1;
var state_mgr = cljs.core.get.call(null,map__16367__$1,new cljs.core.Keyword(null,"state-mgr","state-mgr",-1839931632));
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,map__16367,map__16367__$1,system,state_mgr){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,map__16367,map__16367__$1,system,state_mgr){
return (function (state_16398){
var state_val_16399 = (state_16398[(1)]);
if((state_val_16399 === (1))){
var inst_16377 = (state_16398[(7)]);
var inst_16374 = (state_16398[(8)]);
var inst_16369 = cljs.core.println.call(null,"=========================================");
var inst_16370 = cljs.core.println.call(null,"  Processing:\"",msg,"\" from",src);
var inst_16374__$1 = asgnx.core.create_router.call(null,asgnx.core.routes);
var inst_16375 = cljs.core.println.call(null,"  Router:",inst_16374__$1);
var inst_16376 = asgnx.core.parsed_msg.call(null,msg);
var inst_16377__$1 = cljs.core.assoc.call(null,inst_16376,new cljs.core.Keyword(null,"user-id","user-id",-206822291),src);
var inst_16378 = cljs.core.println.call(null,"  Parsed msg:",inst_16377__$1);
var inst_16379 = asgnx.core.read_state.call(null,state_mgr,inst_16377__$1);
var state_16398__$1 = (function (){var statearr_16400 = state_16398;
(statearr_16400[(7)] = inst_16377__$1);

(statearr_16400[(9)] = inst_16369);

(statearr_16400[(10)] = inst_16370);

(statearr_16400[(11)] = inst_16375);

(statearr_16400[(12)] = inst_16378);

(statearr_16400[(8)] = inst_16374__$1);

return statearr_16400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16398__$1,(2),inst_16379);
} else {
if((state_val_16399 === (2))){
var inst_16377 = (state_16398[(7)]);
var inst_16387 = (state_16398[(13)]);
var inst_16374 = (state_16398[(8)]);
var inst_16381 = (state_16398[(2)]);
var inst_16382 = cljs.core.println.call(null,"  Read state:",inst_16381);
var inst_16383 = inst_16374.call(null,inst_16377);
var inst_16384 = cljs.core.println.call(null,"  Hdlr:",inst_16383);
var inst_16385 = inst_16383.call(null,inst_16381,inst_16377);
var inst_16386 = cljs.core.nth.call(null,inst_16385,(0),null);
var inst_16387__$1 = cljs.core.nth.call(null,inst_16385,(1),null);
var inst_16388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16389 = [inst_16386,inst_16387__$1];
var inst_16390 = (new cljs.core.PersistentVector(null,2,(5),inst_16388,inst_16389,null));
var inst_16391 = cljs.core.println.call(null,"  Hdlr result:",inst_16390);
var inst_16392 = asgnx.core.process_actions.call(null,system,inst_16386);
var state_16398__$1 = (function (){var statearr_16401 = state_16398;
(statearr_16401[(13)] = inst_16387__$1);

(statearr_16401[(14)] = inst_16382);

(statearr_16401[(15)] = inst_16391);

(statearr_16401[(16)] = inst_16384);

return statearr_16401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16398__$1,(3),inst_16392);
} else {
if((state_val_16399 === (3))){
var inst_16387 = (state_16398[(13)]);
var inst_16394 = (state_16398[(2)]);
var inst_16395 = cljs.core.println.call(null,"  Action results:",inst_16394);
var inst_16396 = cljs.core.println.call(null,"=========================================");
var state_16398__$1 = (function (){var statearr_16402 = state_16398;
(statearr_16402[(17)] = inst_16396);

(statearr_16402[(18)] = inst_16395);

return statearr_16402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16398__$1,inst_16387);
} else {
return null;
}
}
}
});})(c__15844__auto__,map__16367,map__16367__$1,system,state_mgr))
;
return ((function (switch__15821__auto__,c__15844__auto__,map__16367,map__16367__$1,system,state_mgr){
return (function() {
var asgnx$core$handle_message_$_state_machine__15822__auto__ = null;
var asgnx$core$handle_message_$_state_machine__15822__auto____0 = (function (){
var statearr_16403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16403[(0)] = asgnx$core$handle_message_$_state_machine__15822__auto__);

(statearr_16403[(1)] = (1));

return statearr_16403;
});
var asgnx$core$handle_message_$_state_machine__15822__auto____1 = (function (state_16398){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16404){if((e16404 instanceof Object)){
var ex__15825__auto__ = e16404;
var statearr_16405_16407 = state_16398;
(statearr_16405_16407[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16408 = state_16398;
state_16398 = G__16408;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$core$handle_message_$_state_machine__15822__auto__ = function(state_16398){
switch(arguments.length){
case 0:
return asgnx$core$handle_message_$_state_machine__15822__auto____0.call(this);
case 1:
return asgnx$core$handle_message_$_state_machine__15822__auto____1.call(this,state_16398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$handle_message_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$handle_message_$_state_machine__15822__auto____0;
asgnx$core$handle_message_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$handle_message_$_state_machine__15822__auto____1;
return asgnx$core$handle_message_$_state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,map__16367,map__16367__$1,system,state_mgr))
})();
var state__15846__auto__ = (function (){var statearr_16406 = f__15845__auto__.call(null);
(statearr_16406[(6)] = c__15844__auto__);

return statearr_16406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,map__16367,map__16367__$1,system,state_mgr))
);

return c__15844__auto__;
});

//# sourceMappingURL=core.js.map
