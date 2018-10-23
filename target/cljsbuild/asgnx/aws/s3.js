// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.aws.s3');
goog.require('cljs.core');
goog.require('asgnx.kvstore');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('cognitect.transit');
asgnx.aws.s3.S3 = cljs.nodejs.require.call(null,"aws-sdk/clients/s3");
asgnx.aws.s3.s3_client = (new asgnx.aws.s3.S3());
asgnx.aws.s3.path = (function asgnx$aws$s3$path(k){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,k));
});
asgnx.aws.s3.key = (function asgnx$aws$s3$key(path){
return cljs.core.keyword.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//))));
});
asgnx.aws.s3.object_keys = (function asgnx$aws$s3$object_keys(ks){
return cljs.core.map.call(null,(function (p1__16411_SHARP_){
return asgnx.aws.s3.key.call(null,new cljs.core.Keyword(null,"Key","Key",1553874408).cljs$core$IFn$_invoke$arity$1(p1__16411_SHARP_));
}),ks);
});
asgnx.aws.s3.marshall = (function asgnx$aws$s3$marshall(v){
var w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write.call(null,w,v);
});
asgnx.aws.s3.unmarshall = (function asgnx$aws$s3$unmarshall(v){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read.call(null,r,v);
});
asgnx.aws.s3.body = (function asgnx$aws$s3$body(r){
return new cljs.core.Keyword(null,"Body","Body",-216907377).cljs$core$IFn$_invoke$arity$1(r).toString();
});
asgnx.aws.s3.data = (function asgnx$aws$s3$data(r){
return asgnx.aws.s3.unmarshall.call(null,asgnx.aws.s3.body.call(null,r));
});

/**
* @constructor
 * @implements {asgnx.kvstore.KeyStore}
*/
asgnx.aws.s3.S3Store = (function (bucket){
this.bucket = bucket;
});
asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$ = cljs.core.PROTOCOL_SENTINEL;

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$put_BANG_$arity$3 = (function (_,key,value){
var self__ = this;
var ___$1 = this;
var rchan__15911__auto__ = cljs.core.async.chan.call(null,(1));
var c__15844__auto___16660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto___16660,rchan__15911__auto__,___$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto___16660,rchan__15911__auto__,___$1){
return (function (state_16432){
var state_val_16433 = (state_16432[(1)]);
if((state_val_16433 === (1))){
var state_16432__$1 = state_16432;
var statearr_16434_16661 = state_16432__$1;
(statearr_16434_16661[(2)] = null);

(statearr_16434_16661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (2))){
var inst_16430 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16432__$1,inst_16430);
} else {
if((state_val_16433 === (3))){
var inst_16412 = (state_16432[(2)]);
var inst_16413 = cljs.core.println.call(null,"Error ",inst_16412);
var inst_16414 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16415 = [inst_16412,null];
var inst_16416 = (new cljs.core.PersistentVector(null,2,(5),inst_16414,inst_16415,null));
var inst_16417 = cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,inst_16416);
var state_16432__$1 = (function (){var statearr_16435 = state_16432;
(statearr_16435[(7)] = inst_16413);

return statearr_16435;
})();
var statearr_16436_16662 = state_16432__$1;
(statearr_16436_16662[(2)] = inst_16417);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16432__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16432,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16421 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Key","Key",1553874408),new cljs.core.Keyword(null,"Body","Body",-216907377)];
var inst_16422 = asgnx.aws.s3.path.call(null,key);
var inst_16423 = asgnx.aws.s3.marshall.call(null,value);
var inst_16424 = [self__.bucket,inst_16422,inst_16423];
var inst_16425 = cljs.core.PersistentHashMap.fromArrays(inst_16421,inst_16424);
var inst_16426 = cljs.core.clj__GT_js.call(null,inst_16425);
var inst_16427 = (function (){return ((function (___$2,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,state_val_16433,c__15844__auto___16660,rchan__15911__auto__,___$1){
return (function (err__15912__auto__,d__15913__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15912__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15913__auto__))], null));
});
;})(___$2,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,state_val_16433,c__15844__auto___16660,rchan__15911__auto__,___$1))
})();
var inst_16428 = asgnx.aws.s3.s3_client.putObject(inst_16426,inst_16427);
var state_16432__$1 = state_16432;
var statearr_16437_16663 = state_16432__$1;
(statearr_16437_16663[(2)] = inst_16428);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16432__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15844__auto___16660,rchan__15911__auto__,___$1))
;
return ((function (switch__15821__auto__,c__15844__auto___16660,rchan__15911__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15822__auto__ = null;
var asgnx$aws$s3$state_machine__15822__auto____0 = (function (){
var statearr_16438 = [null,null,null,null,null,null,null,null];
(statearr_16438[(0)] = asgnx$aws$s3$state_machine__15822__auto__);

(statearr_16438[(1)] = (1));

return statearr_16438;
});
var asgnx$aws$s3$state_machine__15822__auto____1 = (function (state_16432){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16439){if((e16439 instanceof Object)){
var ex__15825__auto__ = e16439;
var statearr_16440_16664 = state_16432;
(statearr_16440_16664[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16665 = state_16432;
state_16432 = G__16665;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15822__auto__ = function(state_16432){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15822__auto____1.call(this,state_16432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15822__auto____0;
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15822__auto____1;
return asgnx$aws$s3$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto___16660,rchan__15911__auto__,___$1))
})();
var state__15846__auto__ = (function (){var statearr_16441 = f__15845__auto__.call(null);
(statearr_16441[(6)] = c__15844__auto___16660);

return statearr_16441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto___16660,rchan__15911__auto__,___$1))
);


return rchan__15911__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$remove_BANG_$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,___$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,___$1){
return (function (state_16483){
var state_val_16484 = (state_16483[(1)]);
if((state_val_16484 === (1))){
var inst_16443 = cljs.core.async.chan.call(null,(1));
var inst_16465 = cljs.core.async.chan.call(null,(1));
var inst_16466 = (function (){var rchan__15911__auto__ = inst_16443;
var c__15844__auto____$1 = inst_16465;
return ((function (rchan__15911__auto__,c__15844__auto____$1,inst_16443,inst_16465,state_val_16484,c__15844__auto__,___$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (rchan__15911__auto__,c__15844__auto____$1,inst_16443,inst_16465,state_val_16484,c__15844__auto__,___$1){
return (function (state_16463){
var state_val_16464 = (state_16463[(1)]);
if((state_val_16464 === (1))){
var state_16463__$1 = state_16463;
var statearr_16485_16666 = state_16463__$1;
(statearr_16485_16666[(2)] = null);

(statearr_16485_16666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (2))){
var inst_16461 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16463__$1,inst_16461);
} else {
if((state_val_16464 === (3))){
var inst_16444 = (state_16463[(2)]);
var inst_16445 = cljs.core.println.call(null,"Error ",inst_16444);
var inst_16446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16447 = [inst_16444,null];
var inst_16448 = (new cljs.core.PersistentVector(null,2,(5),inst_16446,inst_16447,null));
var inst_16449 = cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,inst_16448);
var state_16463__$1 = (function (){var statearr_16486 = state_16463;
(statearr_16486[(7)] = inst_16445);

return statearr_16486;
})();
var statearr_16487_16667 = state_16463__$1;
(statearr_16487_16667[(2)] = inst_16449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16463__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16463,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16453 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Key","Key",1553874408)];
var inst_16454 = asgnx.aws.s3.path.call(null,key);
var inst_16455 = [self__.bucket,inst_16454];
var inst_16456 = cljs.core.PersistentHashMap.fromArrays(inst_16453,inst_16455);
var inst_16457 = cljs.core.clj__GT_js.call(null,inst_16456);
var inst_16458 = (function (){return ((function (___$2,inst_16453,inst_16454,inst_16455,inst_16456,inst_16457,state_val_16464,rchan__15911__auto__,c__15844__auto____$1,inst_16443,inst_16465,state_val_16484,c__15844__auto__,___$1){
return (function (err__15912__auto__,d__15913__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15912__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15913__auto__))], null));
});
;})(___$2,inst_16453,inst_16454,inst_16455,inst_16456,inst_16457,state_val_16464,rchan__15911__auto__,c__15844__auto____$1,inst_16443,inst_16465,state_val_16484,c__15844__auto__,___$1))
})();
var inst_16459 = asgnx.aws.s3.s3_client.deleteObject(inst_16457,inst_16458);
var state_16463__$1 = state_16463;
var statearr_16488_16668 = state_16463__$1;
(statearr_16488_16668[(2)] = inst_16459);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16463__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15911__auto__,c__15844__auto____$1,inst_16443,inst_16465,state_val_16484,c__15844__auto__,___$1))
;
return ((function (switch__15821__auto__,rchan__15911__auto__,c__15844__auto____$1,inst_16443,inst_16465,state_val_16484,c__15844__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15822__auto__ = null;
var asgnx$aws$s3$state_machine__15822__auto____0 = (function (){
var statearr_16489 = [null,null,null,null,null,null,null,null];
(statearr_16489[(0)] = asgnx$aws$s3$state_machine__15822__auto__);

(statearr_16489[(1)] = (1));

return statearr_16489;
});
var asgnx$aws$s3$state_machine__15822__auto____1 = (function (state_16463){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16490){if((e16490 instanceof Object)){
var ex__15825__auto__ = e16490;
var statearr_16491_16669 = state_16463;
(statearr_16491_16669[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16670 = state_16463;
state_16463 = G__16670;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15822__auto__ = function(state_16463){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15822__auto____1.call(this,state_16463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15822__auto____0;
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15822__auto____1;
return asgnx$aws$s3$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,rchan__15911__auto__,c__15844__auto____$1,inst_16443,inst_16465,state_val_16484,c__15844__auto__,___$1))
})();
var state__15846__auto__ = (function (){var statearr_16492 = f__15845__auto__.call(null);
(statearr_16492[(6)] = c__15844__auto____$1);

return statearr_16492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});
;})(rchan__15911__auto__,c__15844__auto____$1,inst_16443,inst_16465,state_val_16484,c__15844__auto__,___$1))
})();
var inst_16467 = cljs.core.async.impl.dispatch.run.call(null,inst_16466);
var state_16483__$1 = (function (){var statearr_16493 = state_16483;
(statearr_16493[(7)] = inst_16467);

return statearr_16493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16483__$1,(2),inst_16443);
} else {
if((state_val_16484 === (2))){
var inst_16469 = (state_16483[(8)]);
var inst_16469__$1 = (state_16483[(2)]);
var inst_16470 = (inst_16469__$1 == null);
var state_16483__$1 = (function (){var statearr_16494 = state_16483;
(statearr_16494[(8)] = inst_16469__$1);

return statearr_16494;
})();
if(cljs.core.truth_(inst_16470)){
var statearr_16495_16671 = state_16483__$1;
(statearr_16495_16671[(1)] = (3));

} else {
var statearr_16496_16672 = state_16483__$1;
(statearr_16496_16672[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (3))){
var state_16483__$1 = state_16483;
var statearr_16497_16673 = state_16483__$1;
(statearr_16497_16673[(2)] = null);

(statearr_16497_16673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (4))){
var inst_16469 = (state_16483[(8)]);
var inst_16473 = cljs.core.second.call(null,inst_16469);
var state_16483__$1 = state_16483;
var statearr_16498_16674 = state_16483__$1;
(statearr_16498_16674[(2)] = inst_16473);

(statearr_16498_16674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (5))){
var inst_16475 = (state_16483[(9)]);
var inst_16475__$1 = (state_16483[(2)]);
var inst_16476 = (inst_16475__$1 == null);
var state_16483__$1 = (function (){var statearr_16499 = state_16483;
(statearr_16499[(9)] = inst_16475__$1);

return statearr_16499;
})();
if(cljs.core.truth_(inst_16476)){
var statearr_16500_16675 = state_16483__$1;
(statearr_16500_16675[(1)] = (6));

} else {
var statearr_16501_16676 = state_16483__$1;
(statearr_16501_16676[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (6))){
var state_16483__$1 = state_16483;
var statearr_16502_16677 = state_16483__$1;
(statearr_16502_16677[(2)] = null);

(statearr_16502_16677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (7))){
var inst_16475 = (state_16483[(9)]);
var inst_16479 = new cljs.core.Keyword(null,"DeleteMarker","DeleteMarker",700512599).cljs$core$IFn$_invoke$arity$1(inst_16475);
var state_16483__$1 = state_16483;
var statearr_16503_16678 = state_16483__$1;
(statearr_16503_16678[(2)] = inst_16479);

(statearr_16503_16678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (8))){
var inst_16481 = (state_16483[(2)]);
var state_16483__$1 = state_16483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16483__$1,inst_16481);
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
});})(c__15844__auto__,___$1))
;
return ((function (switch__15821__auto__,c__15844__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15822__auto__ = null;
var asgnx$aws$s3$state_machine__15822__auto____0 = (function (){
var statearr_16504 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16504[(0)] = asgnx$aws$s3$state_machine__15822__auto__);

(statearr_16504[(1)] = (1));

return statearr_16504;
});
var asgnx$aws$s3$state_machine__15822__auto____1 = (function (state_16483){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16505){if((e16505 instanceof Object)){
var ex__15825__auto__ = e16505;
var statearr_16506_16679 = state_16483;
(statearr_16506_16679[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16680 = state_16483;
state_16483 = G__16680;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15822__auto__ = function(state_16483){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15822__auto____1.call(this,state_16483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15822__auto____0;
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15822__auto____1;
return asgnx$aws$s3$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,___$1))
})();
var state__15846__auto__ = (function (){var statearr_16507 = f__15845__auto__.call(null);
(statearr_16507[(6)] = c__15844__auto__);

return statearr_16507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,___$1))
);

return c__15844__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,___$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,___$1){
return (function (state_16549){
var state_val_16550 = (state_16549[(1)]);
if((state_val_16550 === (1))){
var inst_16509 = cljs.core.async.chan.call(null,(1));
var inst_16531 = cljs.core.async.chan.call(null,(1));
var inst_16532 = (function (){var rchan__15911__auto__ = inst_16509;
var c__15844__auto____$1 = inst_16531;
return ((function (rchan__15911__auto__,c__15844__auto____$1,inst_16509,inst_16531,state_val_16550,c__15844__auto__,___$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (rchan__15911__auto__,c__15844__auto____$1,inst_16509,inst_16531,state_val_16550,c__15844__auto__,___$1){
return (function (state_16529){
var state_val_16530 = (state_16529[(1)]);
if((state_val_16530 === (1))){
var state_16529__$1 = state_16529;
var statearr_16551_16681 = state_16529__$1;
(statearr_16551_16681[(2)] = null);

(statearr_16551_16681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (2))){
var inst_16527 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16529__$1,inst_16527);
} else {
if((state_val_16530 === (3))){
var inst_16510 = (state_16529[(2)]);
var inst_16511 = cljs.core.println.call(null,"Error ",inst_16510);
var inst_16512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16513 = [inst_16510,null];
var inst_16514 = (new cljs.core.PersistentVector(null,2,(5),inst_16512,inst_16513,null));
var inst_16515 = cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,inst_16514);
var state_16529__$1 = (function (){var statearr_16552 = state_16529;
(statearr_16552[(7)] = inst_16511);

return statearr_16552;
})();
var statearr_16553_16682 = state_16529__$1;
(statearr_16553_16682[(2)] = inst_16515);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16529,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16519 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Key","Key",1553874408)];
var inst_16520 = asgnx.aws.s3.path.call(null,key);
var inst_16521 = [self__.bucket,inst_16520];
var inst_16522 = cljs.core.PersistentHashMap.fromArrays(inst_16519,inst_16521);
var inst_16523 = cljs.core.clj__GT_js.call(null,inst_16522);
var inst_16524 = (function (){return ((function (___$2,inst_16519,inst_16520,inst_16521,inst_16522,inst_16523,state_val_16530,rchan__15911__auto__,c__15844__auto____$1,inst_16509,inst_16531,state_val_16550,c__15844__auto__,___$1){
return (function (err__15912__auto__,d__15913__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15912__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15913__auto__))], null));
});
;})(___$2,inst_16519,inst_16520,inst_16521,inst_16522,inst_16523,state_val_16530,rchan__15911__auto__,c__15844__auto____$1,inst_16509,inst_16531,state_val_16550,c__15844__auto__,___$1))
})();
var inst_16525 = asgnx.aws.s3.s3_client.getObject(inst_16523,inst_16524);
var state_16529__$1 = state_16529;
var statearr_16554_16683 = state_16529__$1;
(statearr_16554_16683[(2)] = inst_16525);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15911__auto__,c__15844__auto____$1,inst_16509,inst_16531,state_val_16550,c__15844__auto__,___$1))
;
return ((function (switch__15821__auto__,rchan__15911__auto__,c__15844__auto____$1,inst_16509,inst_16531,state_val_16550,c__15844__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15822__auto__ = null;
var asgnx$aws$s3$state_machine__15822__auto____0 = (function (){
var statearr_16555 = [null,null,null,null,null,null,null,null];
(statearr_16555[(0)] = asgnx$aws$s3$state_machine__15822__auto__);

(statearr_16555[(1)] = (1));

return statearr_16555;
});
var asgnx$aws$s3$state_machine__15822__auto____1 = (function (state_16529){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16556){if((e16556 instanceof Object)){
var ex__15825__auto__ = e16556;
var statearr_16557_16684 = state_16529;
(statearr_16557_16684[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16685 = state_16529;
state_16529 = G__16685;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15822__auto__ = function(state_16529){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15822__auto____1.call(this,state_16529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15822__auto____0;
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15822__auto____1;
return asgnx$aws$s3$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,rchan__15911__auto__,c__15844__auto____$1,inst_16509,inst_16531,state_val_16550,c__15844__auto__,___$1))
})();
var state__15846__auto__ = (function (){var statearr_16558 = f__15845__auto__.call(null);
(statearr_16558[(6)] = c__15844__auto____$1);

return statearr_16558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});
;})(rchan__15911__auto__,c__15844__auto____$1,inst_16509,inst_16531,state_val_16550,c__15844__auto__,___$1))
})();
var inst_16533 = cljs.core.async.impl.dispatch.run.call(null,inst_16532);
var state_16549__$1 = (function (){var statearr_16559 = state_16549;
(statearr_16559[(7)] = inst_16533);

return statearr_16559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16549__$1,(2),inst_16509);
} else {
if((state_val_16550 === (2))){
var inst_16535 = (state_16549[(8)]);
var inst_16535__$1 = (state_16549[(2)]);
var inst_16536 = (inst_16535__$1 == null);
var state_16549__$1 = (function (){var statearr_16560 = state_16549;
(statearr_16560[(8)] = inst_16535__$1);

return statearr_16560;
})();
if(cljs.core.truth_(inst_16536)){
var statearr_16561_16686 = state_16549__$1;
(statearr_16561_16686[(1)] = (3));

} else {
var statearr_16562_16687 = state_16549__$1;
(statearr_16562_16687[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16550 === (3))){
var state_16549__$1 = state_16549;
var statearr_16563_16688 = state_16549__$1;
(statearr_16563_16688[(2)] = null);

(statearr_16563_16688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16550 === (4))){
var inst_16535 = (state_16549[(8)]);
var inst_16539 = cljs.core.second.call(null,inst_16535);
var state_16549__$1 = state_16549;
var statearr_16564_16689 = state_16549__$1;
(statearr_16564_16689[(2)] = inst_16539);

(statearr_16564_16689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16550 === (5))){
var inst_16541 = (state_16549[(9)]);
var inst_16541__$1 = (state_16549[(2)]);
var inst_16542 = (inst_16541__$1 == null);
var state_16549__$1 = (function (){var statearr_16565 = state_16549;
(statearr_16565[(9)] = inst_16541__$1);

return statearr_16565;
})();
if(cljs.core.truth_(inst_16542)){
var statearr_16566_16690 = state_16549__$1;
(statearr_16566_16690[(1)] = (6));

} else {
var statearr_16567_16691 = state_16549__$1;
(statearr_16567_16691[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16550 === (6))){
var state_16549__$1 = state_16549;
var statearr_16568_16692 = state_16549__$1;
(statearr_16568_16692[(2)] = null);

(statearr_16568_16692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16550 === (7))){
var inst_16541 = (state_16549[(9)]);
var inst_16545 = asgnx.aws.s3.data.call(null,inst_16541);
var state_16549__$1 = state_16549;
var statearr_16569_16693 = state_16549__$1;
(statearr_16569_16693[(2)] = inst_16545);

(statearr_16569_16693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16550 === (8))){
var inst_16547 = (state_16549[(2)]);
var state_16549__$1 = state_16549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16549__$1,inst_16547);
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
});})(c__15844__auto__,___$1))
;
return ((function (switch__15821__auto__,c__15844__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15822__auto__ = null;
var asgnx$aws$s3$state_machine__15822__auto____0 = (function (){
var statearr_16570 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16570[(0)] = asgnx$aws$s3$state_machine__15822__auto__);

(statearr_16570[(1)] = (1));

return statearr_16570;
});
var asgnx$aws$s3$state_machine__15822__auto____1 = (function (state_16549){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16571){if((e16571 instanceof Object)){
var ex__15825__auto__ = e16571;
var statearr_16572_16694 = state_16549;
(statearr_16572_16694[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16695 = state_16549;
state_16549 = G__16695;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15822__auto__ = function(state_16549){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15822__auto____1.call(this,state_16549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15822__auto____0;
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15822__auto____1;
return asgnx$aws$s3$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,___$1))
})();
var state__15846__auto__ = (function (){var statearr_16573 = f__15845__auto__.call(null);
(statearr_16573[(6)] = c__15844__auto__);

return statearr_16573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,___$1))
);

return c__15844__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$3 = (function (s,key,not_found){
var self__ = this;
var s__$1 = this;
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,s__$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,s__$1){
return (function (state_16582){
var state_val_16583 = (state_16582[(1)]);
if((state_val_16583 === (1))){
var inst_16574 = asgnx.kvstore.get_BANG_.call(null,s__$1,key);
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16582__$1,(2),inst_16574);
} else {
if((state_val_16583 === (2))){
var inst_16576 = (state_16582[(7)]);
var inst_16576__$1 = (state_16582[(2)]);
var state_16582__$1 = (function (){var statearr_16584 = state_16582;
(statearr_16584[(7)] = inst_16576__$1);

return statearr_16584;
})();
if(cljs.core.truth_(inst_16576__$1)){
var statearr_16585_16696 = state_16582__$1;
(statearr_16585_16696[(1)] = (3));

} else {
var statearr_16586_16697 = state_16582__$1;
(statearr_16586_16697[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (3))){
var inst_16576 = (state_16582[(7)]);
var state_16582__$1 = state_16582;
var statearr_16587_16698 = state_16582__$1;
(statearr_16587_16698[(2)] = inst_16576);

(statearr_16587_16698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (4))){
var state_16582__$1 = state_16582;
var statearr_16588_16699 = state_16582__$1;
(statearr_16588_16699[(2)] = not_found);

(statearr_16588_16699[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (5))){
var inst_16580 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16582__$1,inst_16580);
} else {
return null;
}
}
}
}
}
});})(c__15844__auto__,s__$1))
;
return ((function (switch__15821__auto__,c__15844__auto__,s__$1){
return (function() {
var asgnx$aws$s3$state_machine__15822__auto__ = null;
var asgnx$aws$s3$state_machine__15822__auto____0 = (function (){
var statearr_16589 = [null,null,null,null,null,null,null,null];
(statearr_16589[(0)] = asgnx$aws$s3$state_machine__15822__auto__);

(statearr_16589[(1)] = (1));

return statearr_16589;
});
var asgnx$aws$s3$state_machine__15822__auto____1 = (function (state_16582){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16590){if((e16590 instanceof Object)){
var ex__15825__auto__ = e16590;
var statearr_16591_16700 = state_16582;
(statearr_16591_16700[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16701 = state_16582;
state_16582 = G__16701;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15822__auto__ = function(state_16582){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15822__auto____1.call(this,state_16582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15822__auto____0;
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15822__auto____1;
return asgnx$aws$s3$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,s__$1))
})();
var state__15846__auto__ = (function (){var statearr_16592 = f__15845__auto__.call(null);
(statearr_16592[(6)] = c__15844__auto__);

return statearr_16592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,s__$1))
);

return c__15844__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$list_BANG_$arity$2 = (function (_,key_prefix){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"list!",asgnx.aws.s3.path.call(null,key_prefix));

var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,___$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,___$1){
return (function (state_16635){
var state_val_16636 = (state_16635[(1)]);
if((state_val_16636 === (1))){
var inst_16594 = cljs.core.async.chan.call(null,(1));
var inst_16616 = cljs.core.async.chan.call(null,(1));
var inst_16617 = (function (){var rchan__15911__auto__ = inst_16594;
var c__15844__auto____$1 = inst_16616;
return ((function (rchan__15911__auto__,c__15844__auto____$1,inst_16594,inst_16616,state_val_16636,c__15844__auto__,___$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (rchan__15911__auto__,c__15844__auto____$1,inst_16594,inst_16616,state_val_16636,c__15844__auto__,___$1){
return (function (state_16614){
var state_val_16615 = (state_16614[(1)]);
if((state_val_16615 === (1))){
var state_16614__$1 = state_16614;
var statearr_16637_16702 = state_16614__$1;
(statearr_16637_16702[(2)] = null);

(statearr_16637_16702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16615 === (2))){
var inst_16612 = (state_16614[(2)]);
var state_16614__$1 = state_16614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16614__$1,inst_16612);
} else {
if((state_val_16615 === (3))){
var inst_16595 = (state_16614[(2)]);
var inst_16596 = cljs.core.println.call(null,"Error ",inst_16595);
var inst_16597 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16598 = [inst_16595,null];
var inst_16599 = (new cljs.core.PersistentVector(null,2,(5),inst_16597,inst_16598,null));
var inst_16600 = cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,inst_16599);
var state_16614__$1 = (function (){var statearr_16638 = state_16614;
(statearr_16638[(7)] = inst_16596);

return statearr_16638;
})();
var statearr_16639_16703 = state_16614__$1;
(statearr_16639_16703[(2)] = inst_16600);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16615 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16614,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16604 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Prefix","Prefix",146236931)];
var inst_16605 = asgnx.aws.s3.path.call(null,key_prefix);
var inst_16606 = [self__.bucket,inst_16605];
var inst_16607 = cljs.core.PersistentHashMap.fromArrays(inst_16604,inst_16606);
var inst_16608 = cljs.core.clj__GT_js.call(null,inst_16607);
var inst_16609 = (function (){return ((function (___$2,inst_16604,inst_16605,inst_16606,inst_16607,inst_16608,state_val_16615,rchan__15911__auto__,c__15844__auto____$1,inst_16594,inst_16616,state_val_16636,c__15844__auto__,___$1){
return (function (err__15912__auto__,d__15913__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15911__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15912__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15913__auto__))], null));
});
;})(___$2,inst_16604,inst_16605,inst_16606,inst_16607,inst_16608,state_val_16615,rchan__15911__auto__,c__15844__auto____$1,inst_16594,inst_16616,state_val_16636,c__15844__auto__,___$1))
})();
var inst_16610 = asgnx.aws.s3.s3_client.listObjects(inst_16608,inst_16609);
var state_16614__$1 = state_16614;
var statearr_16640_16704 = state_16614__$1;
(statearr_16640_16704[(2)] = inst_16610);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15911__auto__,c__15844__auto____$1,inst_16594,inst_16616,state_val_16636,c__15844__auto__,___$1))
;
return ((function (switch__15821__auto__,rchan__15911__auto__,c__15844__auto____$1,inst_16594,inst_16616,state_val_16636,c__15844__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15822__auto__ = null;
var asgnx$aws$s3$state_machine__15822__auto____0 = (function (){
var statearr_16641 = [null,null,null,null,null,null,null,null];
(statearr_16641[(0)] = asgnx$aws$s3$state_machine__15822__auto__);

(statearr_16641[(1)] = (1));

return statearr_16641;
});
var asgnx$aws$s3$state_machine__15822__auto____1 = (function (state_16614){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16642){if((e16642 instanceof Object)){
var ex__15825__auto__ = e16642;
var statearr_16643_16705 = state_16614;
(statearr_16643_16705[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16706 = state_16614;
state_16614 = G__16706;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15822__auto__ = function(state_16614){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15822__auto____1.call(this,state_16614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15822__auto____0;
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15822__auto____1;
return asgnx$aws$s3$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,rchan__15911__auto__,c__15844__auto____$1,inst_16594,inst_16616,state_val_16636,c__15844__auto__,___$1))
})();
var state__15846__auto__ = (function (){var statearr_16644 = f__15845__auto__.call(null);
(statearr_16644[(6)] = c__15844__auto____$1);

return statearr_16644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});
;})(rchan__15911__auto__,c__15844__auto____$1,inst_16594,inst_16616,state_val_16636,c__15844__auto__,___$1))
})();
var inst_16618 = cljs.core.async.impl.dispatch.run.call(null,inst_16617);
var state_16635__$1 = (function (){var statearr_16645 = state_16635;
(statearr_16645[(7)] = inst_16618);

return statearr_16645;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16635__$1,(2),inst_16594);
} else {
if((state_val_16636 === (2))){
var inst_16620 = (state_16635[(8)]);
var inst_16620__$1 = (state_16635[(2)]);
var inst_16621 = (inst_16620__$1 == null);
var state_16635__$1 = (function (){var statearr_16646 = state_16635;
(statearr_16646[(8)] = inst_16620__$1);

return statearr_16646;
})();
if(cljs.core.truth_(inst_16621)){
var statearr_16647_16707 = state_16635__$1;
(statearr_16647_16707[(1)] = (3));

} else {
var statearr_16648_16708 = state_16635__$1;
(statearr_16648_16708[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16636 === (3))){
var state_16635__$1 = state_16635;
var statearr_16649_16709 = state_16635__$1;
(statearr_16649_16709[(2)] = null);

(statearr_16649_16709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16636 === (4))){
var inst_16620 = (state_16635[(8)]);
var inst_16624 = cljs.core.second.call(null,inst_16620);
var state_16635__$1 = state_16635;
var statearr_16650_16710 = state_16635__$1;
(statearr_16650_16710[(2)] = inst_16624);

(statearr_16650_16710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16636 === (5))){
var inst_16626 = (state_16635[(9)]);
var inst_16626__$1 = (state_16635[(2)]);
var inst_16627 = (inst_16626__$1 == null);
var state_16635__$1 = (function (){var statearr_16651 = state_16635;
(statearr_16651[(9)] = inst_16626__$1);

return statearr_16651;
})();
if(cljs.core.truth_(inst_16627)){
var statearr_16652_16711 = state_16635__$1;
(statearr_16652_16711[(1)] = (6));

} else {
var statearr_16653_16712 = state_16635__$1;
(statearr_16653_16712[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16636 === (6))){
var state_16635__$1 = state_16635;
var statearr_16654_16713 = state_16635__$1;
(statearr_16654_16713[(2)] = null);

(statearr_16654_16713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16636 === (7))){
var inst_16626 = (state_16635[(9)]);
var inst_16630 = new cljs.core.Keyword(null,"Contents","Contents",-560485612).cljs$core$IFn$_invoke$arity$1(inst_16626);
var state_16635__$1 = state_16635;
var statearr_16655_16714 = state_16635__$1;
(statearr_16655_16714[(2)] = inst_16630);

(statearr_16655_16714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16636 === (8))){
var inst_16632 = (state_16635[(2)]);
var inst_16633 = asgnx.aws.s3.object_keys.call(null,inst_16632);
var state_16635__$1 = state_16635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16635__$1,inst_16633);
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
});})(c__15844__auto__,___$1))
;
return ((function (switch__15821__auto__,c__15844__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15822__auto__ = null;
var asgnx$aws$s3$state_machine__15822__auto____0 = (function (){
var statearr_16656 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16656[(0)] = asgnx$aws$s3$state_machine__15822__auto__);

(statearr_16656[(1)] = (1));

return statearr_16656;
});
var asgnx$aws$s3$state_machine__15822__auto____1 = (function (state_16635){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16657){if((e16657 instanceof Object)){
var ex__15825__auto__ = e16657;
var statearr_16658_16715 = state_16635;
(statearr_16658_16715[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16716 = state_16635;
state_16635 = G__16716;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15822__auto__ = function(state_16635){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15822__auto____1.call(this,state_16635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15822__auto____0;
asgnx$aws$s3$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15822__auto____1;
return asgnx$aws$s3$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,___$1))
})();
var state__15846__auto__ = (function (){var statearr_16659 = f__15845__auto__.call(null);
(statearr_16659[(6)] = c__15844__auto__);

return statearr_16659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,___$1))
);

return c__15844__auto__;
});

asgnx.aws.s3.S3Store.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bucket","bucket",-1528217403,null)], null);
});

asgnx.aws.s3.S3Store.cljs$lang$type = true;

asgnx.aws.s3.S3Store.cljs$lang$ctorStr = "asgnx.aws.s3/S3Store";

asgnx.aws.s3.S3Store.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"asgnx.aws.s3/S3Store");
});

/**
 * Positional factory function for asgnx.aws.s3/S3Store.
 */
asgnx.aws.s3.__GT_S3Store = (function asgnx$aws$s3$__GT_S3Store(bucket){
return (new asgnx.aws.s3.S3Store(bucket));
});

asgnx.aws.s3.s3_keystore = (function asgnx$aws$s3$s3_keystore(bucket){
return (new asgnx.aws.s3.S3Store(bucket));
});

//# sourceMappingURL=s3.js.map
