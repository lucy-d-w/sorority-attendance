// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.aws.ssm');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('cognitect.transit');
asgnx.aws.ssm.AWS = cljs.nodejs.require.call(null,"aws-sdk");
(asgnx.aws.ssm.AWS["config"]).update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"region","region",270415120),"us-east-1"], null)));
asgnx.aws.ssm.SSM = cljs.nodejs.require.call(null,"aws-sdk/clients/ssm");
asgnx.aws.ssm.ssm_client = (new asgnx.aws.ssm.SSM());
/**
 * Converts a list of the form [{kn s1 kv s2}...{kn s3 kv s4}]]
 * to {s1 s2
 *     s3 s4}
 * 
 * Example:
 * 
 *   (name-val-map [{:Name foo :Value 1} {:Name bar :Value 2}] :Name :Value)
 * =>
 * {:foo 1 :bar 2}
 *   
 */
asgnx.aws.ssm.name_val_map = (function asgnx$aws$ssm$name_val_map(l,kn,kv){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__15922_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.keyword.call(null,kn.call(null,p1__15922_SHARP_))],[kv.call(null,p1__15922_SHARP_)]);
}),l));
});
asgnx.aws.ssm.get_secrets_BANG_ = (function asgnx$aws$ssm$get_secrets_BANG_(names){
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__){
return (function (state_15969){
var state_val_15970 = (state_15969[(1)]);
if((state_val_15970 === (7))){
var inst_15955 = (state_15969[(7)]);
var inst_15959 = new cljs.core.Keyword(null,"Parameters","Parameters",1567149866).cljs$core$IFn$_invoke$arity$1(inst_15955);
var state_15969__$1 = state_15969;
var statearr_15971_15999 = state_15969__$1;
(statearr_15971_15999[(2)] = inst_15959);

(statearr_15971_15999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (1))){
var inst_15924 = cljs.core.async.chan.call(null,(1));
var inst_15945 = cljs.core.async.chan.call(null,(1));
var inst_15946 = (function (){var rchan__15911__auto__ = inst_15924;
var c__15844__auto____$1 = inst_15945;
return ((function (rchan__15911__auto__,c__15844__auto____$1,inst_15924,inst_15945,state_val_15970,c__15844__auto__){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (rchan__15911__auto__,c__15844__auto____$1,inst_15924,inst_15945,state_val_15970,c__15844__auto__){
return (function (state_15943){
var state_val_15944 = (state_15943[(1)]);
if((state_val_15944 === (1))){
var state_15943__$1 = state_15943;
var statearr_15972_16000 = state_15943__$1;
(statearr_15972_16000[(2)] = null);

(statearr_15972_16000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15944 === (2))){
var inst_15941 = (state_15943[(2)]);
var state_15943__$1 = state_15943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15943__$1,inst_15941);
} else {
if((state_val_15944 === (3))){
var inst_15925 = (state_15943[(2)]);
var inst_15926 = cljs.core.println.call(null,"Error ",inst_15925);
var inst_15927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15928 = [inst_15925,null];
var inst_15929 = (new cljs.core.PersistentVector(null,2,(5),inst_15927,inst_15928,null));
var inst_15930 = cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,inst_15929);
var state_15943__$1 = (function (){var statearr_15973 = state_15943;
(statearr_15973[(7)] = inst_15926);

return statearr_15973;
})();
var statearr_15974_16001 = state_15943__$1;
(statearr_15974_16001[(2)] = inst_15930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15943__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15944 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15943,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_15934 = [new cljs.core.Keyword(null,"Names","Names",-565118920),new cljs.core.Keyword(null,"WithDecryption","WithDecryption",-690104901)];
var inst_15935 = [names,true];
var inst_15936 = cljs.core.PersistentHashMap.fromArrays(inst_15934,inst_15935);
var inst_15937 = cljs.core.clj__GT_js.call(null,inst_15936);
var inst_15938 = (function (){return ((function (_,inst_15934,inst_15935,inst_15936,inst_15937,state_val_15944,rchan__15911__auto__,c__15844__auto____$1,inst_15924,inst_15945,state_val_15970,c__15844__auto__){
return (function (err__15912__auto__,d__15913__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15912__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15913__auto__))], null));
});
;})(_,inst_15934,inst_15935,inst_15936,inst_15937,state_val_15944,rchan__15911__auto__,c__15844__auto____$1,inst_15924,inst_15945,state_val_15970,c__15844__auto__))
})();
var inst_15939 = asgnx.aws.ssm.ssm_client.getParameters(inst_15937,inst_15938);
var state_15943__$1 = state_15943;
var statearr_15975_16002 = state_15943__$1;
(statearr_15975_16002[(2)] = inst_15939);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15943__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15911__auto__,c__15844__auto____$1,inst_15924,inst_15945,state_val_15970,c__15844__auto__))
;
return ((function (switch__15821__auto__,rchan__15911__auto__,c__15844__auto____$1,inst_15924,inst_15945,state_val_15970,c__15844__auto__){
return (function() {
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__ = null;
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____0 = (function (){
var statearr_15976 = [null,null,null,null,null,null,null,null];
(statearr_15976[(0)] = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__);

(statearr_15976[(1)] = (1));

return statearr_15976;
});
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____1 = (function (state_15943){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_15943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e15977){if((e15977 instanceof Object)){
var ex__15825__auto__ = e15977;
var statearr_15978_16003 = state_15943;
(statearr_15978_16003[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16004 = state_15943;
state_15943 = G__16004;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__ = function(state_15943){
switch(arguments.length){
case 0:
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____1.call(this,state_15943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____0;
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____1;
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__;
})()
;})(switch__15821__auto__,rchan__15911__auto__,c__15844__auto____$1,inst_15924,inst_15945,state_val_15970,c__15844__auto__))
})();
var state__15846__auto__ = (function (){var statearr_15979 = f__15845__auto__.call(null);
(statearr_15979[(6)] = c__15844__auto____$1);

return statearr_15979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});
;})(rchan__15911__auto__,c__15844__auto____$1,inst_15924,inst_15945,state_val_15970,c__15844__auto__))
})();
var inst_15947 = cljs.core.async.impl.dispatch.run.call(null,inst_15946);
var state_15969__$1 = (function (){var statearr_15980 = state_15969;
(statearr_15980[(8)] = inst_15947);

return statearr_15980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15969__$1,(2),inst_15924);
} else {
if((state_val_15970 === (4))){
var inst_15949 = (state_15969[(9)]);
var inst_15953 = cljs.core.second.call(null,inst_15949);
var state_15969__$1 = state_15969;
var statearr_15981_16005 = state_15969__$1;
(statearr_15981_16005[(2)] = inst_15953);

(statearr_15981_16005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (6))){
var state_15969__$1 = state_15969;
var statearr_15982_16006 = state_15969__$1;
(statearr_15982_16006[(2)] = null);

(statearr_15982_16006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (3))){
var state_15969__$1 = state_15969;
var statearr_15983_16007 = state_15969__$1;
(statearr_15983_16007[(2)] = null);

(statearr_15983_16007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (2))){
var inst_15949 = (state_15969[(9)]);
var inst_15949__$1 = (state_15969[(2)]);
var inst_15950 = (inst_15949__$1 == null);
var state_15969__$1 = (function (){var statearr_15984 = state_15969;
(statearr_15984[(9)] = inst_15949__$1);

return statearr_15984;
})();
if(cljs.core.truth_(inst_15950)){
var statearr_15985_16008 = state_15969__$1;
(statearr_15985_16008[(1)] = (3));

} else {
var statearr_15986_16009 = state_15969__$1;
(statearr_15986_16009[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (11))){
var inst_15967 = (state_15969[(2)]);
var state_15969__$1 = state_15969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15969__$1,inst_15967);
} else {
if((state_val_15970 === (9))){
var state_15969__$1 = state_15969;
var statearr_15987_16010 = state_15969__$1;
(statearr_15987_16010[(2)] = null);

(statearr_15987_16010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (5))){
var inst_15955 = (state_15969[(7)]);
var inst_15955__$1 = (state_15969[(2)]);
var inst_15956 = (inst_15955__$1 == null);
var state_15969__$1 = (function (){var statearr_15988 = state_15969;
(statearr_15988[(7)] = inst_15955__$1);

return statearr_15988;
})();
if(cljs.core.truth_(inst_15956)){
var statearr_15989_16011 = state_15969__$1;
(statearr_15989_16011[(1)] = (6));

} else {
var statearr_15990_16012 = state_15969__$1;
(statearr_15990_16012[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (10))){
var inst_15961 = (state_15969[(10)]);
var inst_15965 = asgnx.aws.ssm.name_val_map.call(null,inst_15961,new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Value","Value",388561431));
var state_15969__$1 = state_15969;
var statearr_15991_16013 = state_15969__$1;
(statearr_15991_16013[(2)] = inst_15965);

(statearr_15991_16013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15970 === (8))){
var inst_15961 = (state_15969[(10)]);
var inst_15961__$1 = (state_15969[(2)]);
var inst_15962 = (inst_15961__$1 == null);
var state_15969__$1 = (function (){var statearr_15992 = state_15969;
(statearr_15992[(10)] = inst_15961__$1);

return statearr_15992;
})();
if(cljs.core.truth_(inst_15962)){
var statearr_15993_16014 = state_15969__$1;
(statearr_15993_16014[(1)] = (9));

} else {
var statearr_15994_16015 = state_15969__$1;
(statearr_15994_16015[(1)] = (10));

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
});})(c__15844__auto__))
;
return ((function (switch__15821__auto__,c__15844__auto__){
return (function() {
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__ = null;
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____0 = (function (){
var statearr_15995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15995[(0)] = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__);

(statearr_15995[(1)] = (1));

return statearr_15995;
});
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____1 = (function (state_15969){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_15969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e15996){if((e15996 instanceof Object)){
var ex__15825__auto__ = e15996;
var statearr_15997_16016 = state_15969;
(statearr_15997_16016[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16017 = state_15969;
state_15969 = G__16017;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__ = function(state_15969){
switch(arguments.length){
case 0:
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____1.call(this,state_15969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____0;
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto____1;
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__))
})();
var state__15846__auto__ = (function (){var statearr_15998 = f__15845__auto__.call(null);
(statearr_15998[(6)] = c__15844__auto__);

return statearr_15998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__))
);

return c__15844__auto__;
});

//# sourceMappingURL=ssm.js.map
