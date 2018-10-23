// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.twilio.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('cognitect.transit');
asgnx.twilio.core.Twilio = cljs.nodejs.require.call(null,"twilio");
asgnx.twilio.core.client = (function asgnx$twilio$core$client(account_sid,token){
return (new asgnx.twilio.core.Twilio(account_sid,token));
});
asgnx.twilio.core.send_sms_BANG_ = (function asgnx$twilio$core$send_sms_BANG_(client,params){
var r = cljs.core.async.chan.call(null,(1));
var c__15844__auto___16066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto___16066,r){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto___16066,r){
return (function (state_16035){
var state_val_16036 = (state_16035[(1)]);
if((state_val_16036 === (1))){
var state_16035__$1 = state_16035;
var statearr_16037_16067 = state_16035__$1;
(statearr_16037_16067[(2)] = null);

(statearr_16037_16067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (2))){
var inst_16033 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16035__$1,inst_16033);
} else {
if((state_val_16036 === (3))){
var inst_16020 = (state_16035[(2)]);
var inst_16021 = cljs.core.println.call(null,"Twilio Error:",inst_16020);
var state_16035__$1 = (function (){var statearr_16038 = state_16035;
(statearr_16038[(7)] = inst_16021);

return statearr_16038;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16035__$1,(4),r,inst_16020);
} else {
if((state_val_16036 === (4))){
var inst_16023 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
var statearr_16039_16068 = state_16035__$1;
(statearr_16039_16068[(2)] = inst_16023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16035__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (5))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16035,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16027 = client.messages;
var inst_16028 = cljs.core.clj__GT_js.call(null,params);
var inst_16029 = inst_16027.create(inst_16028);
var inst_16030 = (function (){return ((function (_,inst_16027,inst_16028,inst_16029,state_val_16036,c__15844__auto___16066,r){
return (function (resp){
var c__15844__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto____$1,_,inst_16027,inst_16028,inst_16029,state_val_16036,c__15844__auto___16066,r){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto____$1,_,inst_16027,inst_16028,inst_16029,state_val_16036,c__15844__auto___16066,r){
return (function (state_16052){
var state_val_16053 = (state_16052[(1)]);
if((state_val_16053 === (1))){
var state_16052__$1 = state_16052;
var statearr_16054_16069 = state_16052__$1;
(statearr_16054_16069[(2)] = null);

(statearr_16054_16069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16053 === (2))){
var inst_16050 = (state_16052[(2)]);
var state_16052__$1 = state_16052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16052__$1,inst_16050);
} else {
if((state_val_16053 === (3))){
var inst_16040 = (state_16052[(2)]);
var inst_16041 = cljs.core.println.call(null,"Twilio handler error: ",inst_16040);
var state_16052__$1 = state_16052;
var statearr_16055_16070 = state_16052__$1;
(statearr_16055_16070[(2)] = inst_16041);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16053 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16052,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16045 = resp.toJSON();
var inst_16046 = cljs.core.js__GT_clj.call(null,inst_16045,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var state_16052__$1 = state_16052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16052__$1,(5),r,inst_16046);
} else {
if((state_val_16053 === (5))){
var inst_16048 = (state_16052[(2)]);
var state_16052__$1 = state_16052;
var statearr_16056_16071 = state_16052__$1;
(statearr_16056_16071[(2)] = inst_16048);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15844__auto____$1,_,inst_16027,inst_16028,inst_16029,state_val_16036,c__15844__auto___16066,r))
;
return ((function (switch__15821__auto__,c__15844__auto____$1,_,inst_16027,inst_16028,inst_16029,state_val_16036,c__15844__auto___16066,r){
return (function() {
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__ = null;
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____0 = (function (){
var statearr_16057 = [null,null,null,null,null,null,null];
(statearr_16057[(0)] = asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__);

(statearr_16057[(1)] = (1));

return statearr_16057;
});
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____1 = (function (state_16052){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16058){if((e16058 instanceof Object)){
var ex__15825__auto__ = e16058;
var statearr_16059_16072 = state_16052;
(statearr_16059_16072[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16073 = state_16052;
state_16052 = G__16073;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__ = function(state_16052){
switch(arguments.length){
case 0:
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____0.call(this);
case 1:
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____1.call(this,state_16052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____0;
asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____1;
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto____$1,_,inst_16027,inst_16028,inst_16029,state_val_16036,c__15844__auto___16066,r))
})();
var state__15846__auto__ = (function (){var statearr_16060 = f__15845__auto__.call(null);
(statearr_16060[(6)] = c__15844__auto____$1);

return statearr_16060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto____$1,_,inst_16027,inst_16028,inst_16029,state_val_16036,c__15844__auto___16066,r))
);

return c__15844__auto____$1;
});
;})(_,inst_16027,inst_16028,inst_16029,state_val_16036,c__15844__auto___16066,r))
})();
var inst_16031 = inst_16029.then(inst_16030);
var state_16035__$1 = state_16035;
var statearr_16061_16074 = state_16035__$1;
(statearr_16061_16074[(2)] = inst_16031);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16035__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15844__auto___16066,r))
;
return ((function (switch__15821__auto__,c__15844__auto___16066,r){
return (function() {
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__ = null;
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____0 = (function (){
var statearr_16062 = [null,null,null,null,null,null,null,null];
(statearr_16062[(0)] = asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__);

(statearr_16062[(1)] = (1));

return statearr_16062;
});
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____1 = (function (state_16035){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16063){if((e16063 instanceof Object)){
var ex__15825__auto__ = e16063;
var statearr_16064_16075 = state_16035;
(statearr_16064_16075[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16076 = state_16035;
state_16035 = G__16076;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__ = function(state_16035){
switch(arguments.length){
case 0:
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____0.call(this);
case 1:
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____1.call(this,state_16035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____0;
asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto____1;
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto___16066,r))
})();
var state__15846__auto__ = (function (){var statearr_16065 = f__15845__auto__.call(null);
(statearr_16065[(6)] = c__15844__auto___16066);

return statearr_16065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto___16066,r))
);


return r;
});
asgnx.twilio.core.action_send = (function asgnx$twilio$core$action_send(p__16077,p__16078){
var map__16079 = p__16077;
var map__16079__$1 = ((((!((map__16079 == null)))?(((((map__16079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16079):map__16079);
var credentials_mgr = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"credentials-mgr","credentials-mgr",-1986375939));
var system_phone_number = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"system-phone-number","system-phone-number",-1620464289));
var map__16080 = p__16078;
var map__16080__$1 = ((((!((map__16080 == null)))?(((((map__16080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16080):map__16080);
var to = cljs.core.get.call(null,map__16080__$1,new cljs.core.Keyword(null,"to","to",192099007));
var msg = cljs.core.get.call(null,map__16080__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,map__16079,map__16079__$1,credentials_mgr,system_phone_number,map__16080,map__16080__$1,to,msg){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,map__16079,map__16079__$1,credentials_mgr,system_phone_number,map__16080,map__16080__$1,to,msg){
return (function (state_16097){
var state_val_16098 = (state_16097[(1)]);
if((state_val_16098 === (1))){
var inst_16083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16084 = ["twilio-prod-account-sid","twilio-prod-token"];
var inst_16085 = (new cljs.core.PersistentVector(null,2,(5),inst_16083,inst_16084,null));
var inst_16086 = credentials_mgr.call(null,inst_16085);
var state_16097__$1 = state_16097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16097__$1,(2),inst_16086);
} else {
if((state_val_16098 === (2))){
var inst_16088 = (state_16097[(2)]);
var inst_16089 = new cljs.core.Keyword(null,"twilio-prod-account-sid","twilio-prod-account-sid",174021098).cljs$core$IFn$_invoke$arity$1(inst_16088);
var inst_16090 = new cljs.core.Keyword(null,"twilio-prod-token","twilio-prod-token",-2004650586).cljs$core$IFn$_invoke$arity$1(inst_16088);
var inst_16091 = asgnx.twilio.core.client.call(null,inst_16089,inst_16090);
var inst_16092 = [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_16093 = [to,system_phone_number,msg];
var inst_16094 = cljs.core.PersistentHashMap.fromArrays(inst_16092,inst_16093);
var inst_16095 = asgnx.twilio.core.send_sms_BANG_.call(null,inst_16091,inst_16094);
var state_16097__$1 = state_16097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16097__$1,inst_16095);
} else {
return null;
}
}
});})(c__15844__auto__,map__16079,map__16079__$1,credentials_mgr,system_phone_number,map__16080,map__16080__$1,to,msg))
;
return ((function (switch__15821__auto__,c__15844__auto__,map__16079,map__16079__$1,credentials_mgr,system_phone_number,map__16080,map__16080__$1,to,msg){
return (function() {
var asgnx$twilio$core$action_send_$_state_machine__15822__auto__ = null;
var asgnx$twilio$core$action_send_$_state_machine__15822__auto____0 = (function (){
var statearr_16099 = [null,null,null,null,null,null,null];
(statearr_16099[(0)] = asgnx$twilio$core$action_send_$_state_machine__15822__auto__);

(statearr_16099[(1)] = (1));

return statearr_16099;
});
var asgnx$twilio$core$action_send_$_state_machine__15822__auto____1 = (function (state_16097){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16100){if((e16100 instanceof Object)){
var ex__15825__auto__ = e16100;
var statearr_16101_16103 = state_16097;
(statearr_16101_16103[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16104 = state_16097;
state_16097 = G__16104;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$twilio$core$action_send_$_state_machine__15822__auto__ = function(state_16097){
switch(arguments.length){
case 0:
return asgnx$twilio$core$action_send_$_state_machine__15822__auto____0.call(this);
case 1:
return asgnx$twilio$core$action_send_$_state_machine__15822__auto____1.call(this,state_16097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$twilio$core$action_send_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$twilio$core$action_send_$_state_machine__15822__auto____0;
asgnx$twilio$core$action_send_$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$twilio$core$action_send_$_state_machine__15822__auto____1;
return asgnx$twilio$core$action_send_$_state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,map__16079,map__16079__$1,credentials_mgr,system_phone_number,map__16080,map__16080__$1,to,msg))
})();
var state__15846__auto__ = (function (){var statearr_16102 = f__15845__auto__.call(null);
(statearr_16102[(6)] = c__15844__auto__);

return statearr_16102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,map__16079,map__16079__$1,credentials_mgr,system_phone_number,map__16080,map__16080__$1,to,msg))
);

return c__15844__auto__;
});
asgnx.twilio.core.action_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",-652151114),asgnx.twilio.core.action_send], null);

//# sourceMappingURL=core.js.map
