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
var c__15840__auto___16062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto___16062,r){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto___16062,r){
return (function (state_16031){
var state_val_16032 = (state_16031[(1)]);
if((state_val_16032 === (1))){
var state_16031__$1 = state_16031;
var statearr_16033_16063 = state_16031__$1;
(statearr_16033_16063[(2)] = null);

(statearr_16033_16063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16032 === (2))){
var inst_16029 = (state_16031[(2)]);
var state_16031__$1 = state_16031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16031__$1,inst_16029);
} else {
if((state_val_16032 === (3))){
var inst_16016 = (state_16031[(2)]);
var inst_16017 = cljs.core.println.call(null,"Twilio Error:",inst_16016);
var state_16031__$1 = (function (){var statearr_16034 = state_16031;
(statearr_16034[(7)] = inst_16017);

return statearr_16034;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16031__$1,(4),r,inst_16016);
} else {
if((state_val_16032 === (4))){
var inst_16019 = (state_16031[(2)]);
var state_16031__$1 = state_16031;
var statearr_16035_16064 = state_16031__$1;
(statearr_16035_16064[(2)] = inst_16019);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16031__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16032 === (5))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16031,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16023 = client.messages;
var inst_16024 = cljs.core.clj__GT_js.call(null,params);
var inst_16025 = inst_16023.create(inst_16024);
var inst_16026 = (function (){return ((function (_,inst_16023,inst_16024,inst_16025,state_val_16032,c__15840__auto___16062,r){
return (function (resp){
var c__15840__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto____$1,_,inst_16023,inst_16024,inst_16025,state_val_16032,c__15840__auto___16062,r){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto____$1,_,inst_16023,inst_16024,inst_16025,state_val_16032,c__15840__auto___16062,r){
return (function (state_16048){
var state_val_16049 = (state_16048[(1)]);
if((state_val_16049 === (1))){
var state_16048__$1 = state_16048;
var statearr_16050_16065 = state_16048__$1;
(statearr_16050_16065[(2)] = null);

(statearr_16050_16065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (2))){
var inst_16046 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16048__$1,inst_16046);
} else {
if((state_val_16049 === (3))){
var inst_16036 = (state_16048[(2)]);
var inst_16037 = cljs.core.println.call(null,"Twilio handler error: ",inst_16036);
var state_16048__$1 = state_16048;
var statearr_16051_16066 = state_16048__$1;
(statearr_16051_16066[(2)] = inst_16037);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16048,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16041 = resp.toJSON();
var inst_16042 = cljs.core.js__GT_clj.call(null,inst_16041,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16048__$1,(5),r,inst_16042);
} else {
if((state_val_16049 === (5))){
var inst_16044 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
var statearr_16052_16067 = state_16048__$1;
(statearr_16052_16067[(2)] = inst_16044);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15840__auto____$1,_,inst_16023,inst_16024,inst_16025,state_val_16032,c__15840__auto___16062,r))
;
return ((function (switch__15817__auto__,c__15840__auto____$1,_,inst_16023,inst_16024,inst_16025,state_val_16032,c__15840__auto___16062,r){
return (function() {
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__ = null;
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____0 = (function (){
var statearr_16053 = [null,null,null,null,null,null,null];
(statearr_16053[(0)] = asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__);

(statearr_16053[(1)] = (1));

return statearr_16053;
});
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____1 = (function (state_16048){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16054){if((e16054 instanceof Object)){
var ex__15821__auto__ = e16054;
var statearr_16055_16068 = state_16048;
(statearr_16055_16068[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16069 = state_16048;
state_16048 = G__16069;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__ = function(state_16048){
switch(arguments.length){
case 0:
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____1.call(this,state_16048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____0;
asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____1;
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto____$1,_,inst_16023,inst_16024,inst_16025,state_val_16032,c__15840__auto___16062,r))
})();
var state__15842__auto__ = (function (){var statearr_16056 = f__15841__auto__.call(null);
(statearr_16056[(6)] = c__15840__auto____$1);

return statearr_16056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto____$1,_,inst_16023,inst_16024,inst_16025,state_val_16032,c__15840__auto___16062,r))
);

return c__15840__auto____$1;
});
;})(_,inst_16023,inst_16024,inst_16025,state_val_16032,c__15840__auto___16062,r))
})();
var inst_16027 = inst_16025.then(inst_16026);
var state_16031__$1 = state_16031;
var statearr_16057_16070 = state_16031__$1;
(statearr_16057_16070[(2)] = inst_16027);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16031__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15840__auto___16062,r))
;
return ((function (switch__15817__auto__,c__15840__auto___16062,r){
return (function() {
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__ = null;
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____0 = (function (){
var statearr_16058 = [null,null,null,null,null,null,null,null];
(statearr_16058[(0)] = asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__);

(statearr_16058[(1)] = (1));

return statearr_16058;
});
var asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____1 = (function (state_16031){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16059){if((e16059 instanceof Object)){
var ex__15821__auto__ = e16059;
var statearr_16060_16071 = state_16031;
(statearr_16060_16071[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16072 = state_16031;
state_16031 = G__16072;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__ = function(state_16031){
switch(arguments.length){
case 0:
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____1.call(this,state_16031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____0;
asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto____1;
return asgnx$twilio$core$send_sms_BANG__$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto___16062,r))
})();
var state__15842__auto__ = (function (){var statearr_16061 = f__15841__auto__.call(null);
(statearr_16061[(6)] = c__15840__auto___16062);

return statearr_16061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto___16062,r))
);


return r;
});
asgnx.twilio.core.action_send = (function asgnx$twilio$core$action_send(p__16073,p__16074){
var map__16075 = p__16073;
var map__16075__$1 = ((((!((map__16075 == null)))?(((((map__16075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16075):map__16075);
var credentials_mgr = cljs.core.get.call(null,map__16075__$1,new cljs.core.Keyword(null,"credentials-mgr","credentials-mgr",-1986375939));
var system_phone_number = cljs.core.get.call(null,map__16075__$1,new cljs.core.Keyword(null,"system-phone-number","system-phone-number",-1620464289));
var map__16076 = p__16074;
var map__16076__$1 = ((((!((map__16076 == null)))?(((((map__16076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16076):map__16076);
var to = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"to","to",192099007));
var msg = cljs.core.get.call(null,map__16076__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,map__16075,map__16075__$1,credentials_mgr,system_phone_number,map__16076,map__16076__$1,to,msg){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,map__16075,map__16075__$1,credentials_mgr,system_phone_number,map__16076,map__16076__$1,to,msg){
return (function (state_16093){
var state_val_16094 = (state_16093[(1)]);
if((state_val_16094 === (1))){
var inst_16079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16080 = ["twilio-prod-account-sid","twilio-prod-token"];
var inst_16081 = (new cljs.core.PersistentVector(null,2,(5),inst_16079,inst_16080,null));
var inst_16082 = credentials_mgr.call(null,inst_16081);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16093__$1,(2),inst_16082);
} else {
if((state_val_16094 === (2))){
var inst_16084 = (state_16093[(2)]);
var inst_16085 = new cljs.core.Keyword(null,"twilio-prod-account-sid","twilio-prod-account-sid",174021098).cljs$core$IFn$_invoke$arity$1(inst_16084);
var inst_16086 = new cljs.core.Keyword(null,"twilio-prod-token","twilio-prod-token",-2004650586).cljs$core$IFn$_invoke$arity$1(inst_16084);
var inst_16087 = asgnx.twilio.core.client.call(null,inst_16085,inst_16086);
var inst_16088 = [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_16089 = [to,system_phone_number,msg];
var inst_16090 = cljs.core.PersistentHashMap.fromArrays(inst_16088,inst_16089);
var inst_16091 = asgnx.twilio.core.send_sms_BANG_.call(null,inst_16087,inst_16090);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16093__$1,inst_16091);
} else {
return null;
}
}
});})(c__15840__auto__,map__16075,map__16075__$1,credentials_mgr,system_phone_number,map__16076,map__16076__$1,to,msg))
;
return ((function (switch__15817__auto__,c__15840__auto__,map__16075,map__16075__$1,credentials_mgr,system_phone_number,map__16076,map__16076__$1,to,msg){
return (function() {
var asgnx$twilio$core$action_send_$_state_machine__15818__auto__ = null;
var asgnx$twilio$core$action_send_$_state_machine__15818__auto____0 = (function (){
var statearr_16095 = [null,null,null,null,null,null,null];
(statearr_16095[(0)] = asgnx$twilio$core$action_send_$_state_machine__15818__auto__);

(statearr_16095[(1)] = (1));

return statearr_16095;
});
var asgnx$twilio$core$action_send_$_state_machine__15818__auto____1 = (function (state_16093){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16096){if((e16096 instanceof Object)){
var ex__15821__auto__ = e16096;
var statearr_16097_16099 = state_16093;
(statearr_16097_16099[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16100 = state_16093;
state_16093 = G__16100;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$twilio$core$action_send_$_state_machine__15818__auto__ = function(state_16093){
switch(arguments.length){
case 0:
return asgnx$twilio$core$action_send_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$twilio$core$action_send_$_state_machine__15818__auto____1.call(this,state_16093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$twilio$core$action_send_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$twilio$core$action_send_$_state_machine__15818__auto____0;
asgnx$twilio$core$action_send_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$twilio$core$action_send_$_state_machine__15818__auto____1;
return asgnx$twilio$core$action_send_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,map__16075,map__16075__$1,credentials_mgr,system_phone_number,map__16076,map__16076__$1,to,msg))
})();
var state__15842__auto__ = (function (){var statearr_16098 = f__15841__auto__.call(null);
(statearr_16098[(6)] = c__15840__auto__);

return statearr_16098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,map__16075,map__16075__$1,credentials_mgr,system_phone_number,map__16076,map__16076__$1,to,msg))
);

return c__15840__auto__;
});
asgnx.twilio.core.action_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",-652151114),asgnx.twilio.core.action_send], null);

//# sourceMappingURL=core.js.map
