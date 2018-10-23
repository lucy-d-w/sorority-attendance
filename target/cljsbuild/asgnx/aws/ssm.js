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
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__15918_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.keyword.call(null,kn.call(null,p1__15918_SHARP_))],[kv.call(null,p1__15918_SHARP_)]);
}),l));
});
asgnx.aws.ssm.get_secrets_BANG_ = (function asgnx$aws$ssm$get_secrets_BANG_(names){
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__){
return (function (state_15965){
var state_val_15966 = (state_15965[(1)]);
if((state_val_15966 === (7))){
var inst_15951 = (state_15965[(7)]);
var inst_15955 = new cljs.core.Keyword(null,"Parameters","Parameters",1567149866).cljs$core$IFn$_invoke$arity$1(inst_15951);
var state_15965__$1 = state_15965;
var statearr_15967_15995 = state_15965__$1;
(statearr_15967_15995[(2)] = inst_15955);

(statearr_15967_15995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (1))){
var inst_15920 = cljs.core.async.chan.call(null,(1));
var inst_15941 = cljs.core.async.chan.call(null,(1));
var inst_15942 = (function (){var rchan__15907__auto__ = inst_15920;
var c__15840__auto____$1 = inst_15941;
return ((function (rchan__15907__auto__,c__15840__auto____$1,inst_15920,inst_15941,state_val_15966,c__15840__auto__){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (rchan__15907__auto__,c__15840__auto____$1,inst_15920,inst_15941,state_val_15966,c__15840__auto__){
return (function (state_15939){
var state_val_15940 = (state_15939[(1)]);
if((state_val_15940 === (1))){
var state_15939__$1 = state_15939;
var statearr_15968_15996 = state_15939__$1;
(statearr_15968_15996[(2)] = null);

(statearr_15968_15996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (2))){
var inst_15937 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15939__$1,inst_15937);
} else {
if((state_val_15940 === (3))){
var inst_15921 = (state_15939[(2)]);
var inst_15922 = cljs.core.println.call(null,"Error ",inst_15921);
var inst_15923 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15924 = [inst_15921,null];
var inst_15925 = (new cljs.core.PersistentVector(null,2,(5),inst_15923,inst_15924,null));
var inst_15926 = cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,inst_15925);
var state_15939__$1 = (function (){var statearr_15969 = state_15939;
(statearr_15969[(7)] = inst_15922);

return statearr_15969;
})();
var statearr_15970_15997 = state_15939__$1;
(statearr_15970_15997[(2)] = inst_15926);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15939__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15939,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_15930 = [new cljs.core.Keyword(null,"Names","Names",-565118920),new cljs.core.Keyword(null,"WithDecryption","WithDecryption",-690104901)];
var inst_15931 = [names,true];
var inst_15932 = cljs.core.PersistentHashMap.fromArrays(inst_15930,inst_15931);
var inst_15933 = cljs.core.clj__GT_js.call(null,inst_15932);
var inst_15934 = (function (){return ((function (_,inst_15930,inst_15931,inst_15932,inst_15933,state_val_15940,rchan__15907__auto__,c__15840__auto____$1,inst_15920,inst_15941,state_val_15966,c__15840__auto__){
return (function (err__15908__auto__,d__15909__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15908__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15909__auto__))], null));
});
;})(_,inst_15930,inst_15931,inst_15932,inst_15933,state_val_15940,rchan__15907__auto__,c__15840__auto____$1,inst_15920,inst_15941,state_val_15966,c__15840__auto__))
})();
var inst_15935 = asgnx.aws.ssm.ssm_client.getParameters(inst_15933,inst_15934);
var state_15939__$1 = state_15939;
var statearr_15971_15998 = state_15939__$1;
(statearr_15971_15998[(2)] = inst_15935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15939__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15907__auto__,c__15840__auto____$1,inst_15920,inst_15941,state_val_15966,c__15840__auto__))
;
return ((function (switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_15920,inst_15941,state_val_15966,c__15840__auto__){
return (function() {
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__ = null;
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____0 = (function (){
var statearr_15972 = [null,null,null,null,null,null,null,null];
(statearr_15972[(0)] = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__);

(statearr_15972[(1)] = (1));

return statearr_15972;
});
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____1 = (function (state_15939){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_15939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e15973){if((e15973 instanceof Object)){
var ex__15821__auto__ = e15973;
var statearr_15974_15999 = state_15939;
(statearr_15974_15999[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16000 = state_15939;
state_15939 = G__16000;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__ = function(state_15939){
switch(arguments.length){
case 0:
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____1.call(this,state_15939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____0;
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____1;
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_15920,inst_15941,state_val_15966,c__15840__auto__))
})();
var state__15842__auto__ = (function (){var statearr_15975 = f__15841__auto__.call(null);
(statearr_15975[(6)] = c__15840__auto____$1);

return statearr_15975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});
;})(rchan__15907__auto__,c__15840__auto____$1,inst_15920,inst_15941,state_val_15966,c__15840__auto__))
})();
var inst_15943 = cljs.core.async.impl.dispatch.run.call(null,inst_15942);
var state_15965__$1 = (function (){var statearr_15976 = state_15965;
(statearr_15976[(8)] = inst_15943);

return statearr_15976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15965__$1,(2),inst_15920);
} else {
if((state_val_15966 === (4))){
var inst_15945 = (state_15965[(9)]);
var inst_15949 = cljs.core.second.call(null,inst_15945);
var state_15965__$1 = state_15965;
var statearr_15977_16001 = state_15965__$1;
(statearr_15977_16001[(2)] = inst_15949);

(statearr_15977_16001[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (6))){
var state_15965__$1 = state_15965;
var statearr_15978_16002 = state_15965__$1;
(statearr_15978_16002[(2)] = null);

(statearr_15978_16002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (3))){
var state_15965__$1 = state_15965;
var statearr_15979_16003 = state_15965__$1;
(statearr_15979_16003[(2)] = null);

(statearr_15979_16003[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (2))){
var inst_15945 = (state_15965[(9)]);
var inst_15945__$1 = (state_15965[(2)]);
var inst_15946 = (inst_15945__$1 == null);
var state_15965__$1 = (function (){var statearr_15980 = state_15965;
(statearr_15980[(9)] = inst_15945__$1);

return statearr_15980;
})();
if(cljs.core.truth_(inst_15946)){
var statearr_15981_16004 = state_15965__$1;
(statearr_15981_16004[(1)] = (3));

} else {
var statearr_15982_16005 = state_15965__$1;
(statearr_15982_16005[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (11))){
var inst_15963 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15965__$1,inst_15963);
} else {
if((state_val_15966 === (9))){
var state_15965__$1 = state_15965;
var statearr_15983_16006 = state_15965__$1;
(statearr_15983_16006[(2)] = null);

(statearr_15983_16006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (5))){
var inst_15951 = (state_15965[(7)]);
var inst_15951__$1 = (state_15965[(2)]);
var inst_15952 = (inst_15951__$1 == null);
var state_15965__$1 = (function (){var statearr_15984 = state_15965;
(statearr_15984[(7)] = inst_15951__$1);

return statearr_15984;
})();
if(cljs.core.truth_(inst_15952)){
var statearr_15985_16007 = state_15965__$1;
(statearr_15985_16007[(1)] = (6));

} else {
var statearr_15986_16008 = state_15965__$1;
(statearr_15986_16008[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (10))){
var inst_15957 = (state_15965[(10)]);
var inst_15961 = asgnx.aws.ssm.name_val_map.call(null,inst_15957,new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Value","Value",388561431));
var state_15965__$1 = state_15965;
var statearr_15987_16009 = state_15965__$1;
(statearr_15987_16009[(2)] = inst_15961);

(statearr_15987_16009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (8))){
var inst_15957 = (state_15965[(10)]);
var inst_15957__$1 = (state_15965[(2)]);
var inst_15958 = (inst_15957__$1 == null);
var state_15965__$1 = (function (){var statearr_15988 = state_15965;
(statearr_15988[(10)] = inst_15957__$1);

return statearr_15988;
})();
if(cljs.core.truth_(inst_15958)){
var statearr_15989_16010 = state_15965__$1;
(statearr_15989_16010[(1)] = (9));

} else {
var statearr_15990_16011 = state_15965__$1;
(statearr_15990_16011[(1)] = (10));

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
});})(c__15840__auto__))
;
return ((function (switch__15817__auto__,c__15840__auto__){
return (function() {
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__ = null;
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____0 = (function (){
var statearr_15991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15991[(0)] = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__);

(statearr_15991[(1)] = (1));

return statearr_15991;
});
var asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____1 = (function (state_15965){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_15965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e15992){if((e15992 instanceof Object)){
var ex__15821__auto__ = e15992;
var statearr_15993_16012 = state_15965;
(statearr_15993_16012[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16013 = state_15965;
state_15965 = G__16013;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__ = function(state_15965){
switch(arguments.length){
case 0:
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____1.call(this,state_15965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____0;
asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto____1;
return asgnx$aws$ssm$get_secrets_BANG__$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__))
})();
var state__15842__auto__ = (function (){var statearr_15994 = f__15841__auto__.call(null);
(statearr_15994[(6)] = c__15840__auto__);

return statearr_15994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__))
);

return c__15840__auto__;
});

//# sourceMappingURL=ssm.js.map
