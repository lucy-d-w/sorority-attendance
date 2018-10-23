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
return cljs.core.map.call(null,(function (p1__16404_SHARP_){
return asgnx.aws.s3.key.call(null,new cljs.core.Keyword(null,"Key","Key",1553874408).cljs$core$IFn$_invoke$arity$1(p1__16404_SHARP_));
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
var rchan__15907__auto__ = cljs.core.async.chan.call(null,(1));
var c__15840__auto___16653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto___16653,rchan__15907__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto___16653,rchan__15907__auto__,___$1){
return (function (state_16425){
var state_val_16426 = (state_16425[(1)]);
if((state_val_16426 === (1))){
var state_16425__$1 = state_16425;
var statearr_16427_16654 = state_16425__$1;
(statearr_16427_16654[(2)] = null);

(statearr_16427_16654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (2))){
var inst_16423 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16425__$1,inst_16423);
} else {
if((state_val_16426 === (3))){
var inst_16405 = (state_16425[(2)]);
var inst_16406 = cljs.core.println.call(null,"Error ",inst_16405);
var inst_16407 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16408 = [inst_16405,null];
var inst_16409 = (new cljs.core.PersistentVector(null,2,(5),inst_16407,inst_16408,null));
var inst_16410 = cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,inst_16409);
var state_16425__$1 = (function (){var statearr_16428 = state_16425;
(statearr_16428[(7)] = inst_16406);

return statearr_16428;
})();
var statearr_16429_16655 = state_16425__$1;
(statearr_16429_16655[(2)] = inst_16410);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16425__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16425,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16414 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Key","Key",1553874408),new cljs.core.Keyword(null,"Body","Body",-216907377)];
var inst_16415 = asgnx.aws.s3.path.call(null,key);
var inst_16416 = asgnx.aws.s3.marshall.call(null,value);
var inst_16417 = [self__.bucket,inst_16415,inst_16416];
var inst_16418 = cljs.core.PersistentHashMap.fromArrays(inst_16414,inst_16417);
var inst_16419 = cljs.core.clj__GT_js.call(null,inst_16418);
var inst_16420 = (function (){return ((function (___$2,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,state_val_16426,c__15840__auto___16653,rchan__15907__auto__,___$1){
return (function (err__15908__auto__,d__15909__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15908__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15909__auto__))], null));
});
;})(___$2,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,state_val_16426,c__15840__auto___16653,rchan__15907__auto__,___$1))
})();
var inst_16421 = asgnx.aws.s3.s3_client.putObject(inst_16419,inst_16420);
var state_16425__$1 = state_16425;
var statearr_16430_16656 = state_16425__$1;
(statearr_16430_16656[(2)] = inst_16421);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16425__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15840__auto___16653,rchan__15907__auto__,___$1))
;
return ((function (switch__15817__auto__,c__15840__auto___16653,rchan__15907__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16431 = [null,null,null,null,null,null,null,null];
(statearr_16431[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16431[(1)] = (1));

return statearr_16431;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16425){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16432){if((e16432 instanceof Object)){
var ex__15821__auto__ = e16432;
var statearr_16433_16657 = state_16425;
(statearr_16433_16657[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16658 = state_16425;
state_16425 = G__16658;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16425){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto___16653,rchan__15907__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16434 = f__15841__auto__.call(null);
(statearr_16434[(6)] = c__15840__auto___16653);

return statearr_16434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto___16653,rchan__15907__auto__,___$1))
);


return rchan__15907__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$remove_BANG_$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,___$1){
return (function (state_16476){
var state_val_16477 = (state_16476[(1)]);
if((state_val_16477 === (1))){
var inst_16436 = cljs.core.async.chan.call(null,(1));
var inst_16458 = cljs.core.async.chan.call(null,(1));
var inst_16459 = (function (){var rchan__15907__auto__ = inst_16436;
var c__15840__auto____$1 = inst_16458;
return ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16436,inst_16458,state_val_16477,c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16436,inst_16458,state_val_16477,c__15840__auto__,___$1){
return (function (state_16456){
var state_val_16457 = (state_16456[(1)]);
if((state_val_16457 === (1))){
var state_16456__$1 = state_16456;
var statearr_16478_16659 = state_16456__$1;
(statearr_16478_16659[(2)] = null);

(statearr_16478_16659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (2))){
var inst_16454 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16456__$1,inst_16454);
} else {
if((state_val_16457 === (3))){
var inst_16437 = (state_16456[(2)]);
var inst_16438 = cljs.core.println.call(null,"Error ",inst_16437);
var inst_16439 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16440 = [inst_16437,null];
var inst_16441 = (new cljs.core.PersistentVector(null,2,(5),inst_16439,inst_16440,null));
var inst_16442 = cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,inst_16441);
var state_16456__$1 = (function (){var statearr_16479 = state_16456;
(statearr_16479[(7)] = inst_16438);

return statearr_16479;
})();
var statearr_16480_16660 = state_16456__$1;
(statearr_16480_16660[(2)] = inst_16442);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16456,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16446 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Key","Key",1553874408)];
var inst_16447 = asgnx.aws.s3.path.call(null,key);
var inst_16448 = [self__.bucket,inst_16447];
var inst_16449 = cljs.core.PersistentHashMap.fromArrays(inst_16446,inst_16448);
var inst_16450 = cljs.core.clj__GT_js.call(null,inst_16449);
var inst_16451 = (function (){return ((function (___$2,inst_16446,inst_16447,inst_16448,inst_16449,inst_16450,state_val_16457,rchan__15907__auto__,c__15840__auto____$1,inst_16436,inst_16458,state_val_16477,c__15840__auto__,___$1){
return (function (err__15908__auto__,d__15909__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15908__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15909__auto__))], null));
});
;})(___$2,inst_16446,inst_16447,inst_16448,inst_16449,inst_16450,state_val_16457,rchan__15907__auto__,c__15840__auto____$1,inst_16436,inst_16458,state_val_16477,c__15840__auto__,___$1))
})();
var inst_16452 = asgnx.aws.s3.s3_client.deleteObject(inst_16450,inst_16451);
var state_16456__$1 = state_16456;
var statearr_16481_16661 = state_16456__$1;
(statearr_16481_16661[(2)] = inst_16452);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15907__auto__,c__15840__auto____$1,inst_16436,inst_16458,state_val_16477,c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16436,inst_16458,state_val_16477,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16482 = [null,null,null,null,null,null,null,null];
(statearr_16482[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16482[(1)] = (1));

return statearr_16482;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16456){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16483){if((e16483 instanceof Object)){
var ex__15821__auto__ = e16483;
var statearr_16484_16662 = state_16456;
(statearr_16484_16662[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16663 = state_16456;
state_16456 = G__16663;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16456){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16436,inst_16458,state_val_16477,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16485 = f__15841__auto__.call(null);
(statearr_16485[(6)] = c__15840__auto____$1);

return statearr_16485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});
;})(rchan__15907__auto__,c__15840__auto____$1,inst_16436,inst_16458,state_val_16477,c__15840__auto__,___$1))
})();
var inst_16460 = cljs.core.async.impl.dispatch.run.call(null,inst_16459);
var state_16476__$1 = (function (){var statearr_16486 = state_16476;
(statearr_16486[(7)] = inst_16460);

return statearr_16486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16476__$1,(2),inst_16436);
} else {
if((state_val_16477 === (2))){
var inst_16462 = (state_16476[(8)]);
var inst_16462__$1 = (state_16476[(2)]);
var inst_16463 = (inst_16462__$1 == null);
var state_16476__$1 = (function (){var statearr_16487 = state_16476;
(statearr_16487[(8)] = inst_16462__$1);

return statearr_16487;
})();
if(cljs.core.truth_(inst_16463)){
var statearr_16488_16664 = state_16476__$1;
(statearr_16488_16664[(1)] = (3));

} else {
var statearr_16489_16665 = state_16476__$1;
(statearr_16489_16665[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (3))){
var state_16476__$1 = state_16476;
var statearr_16490_16666 = state_16476__$1;
(statearr_16490_16666[(2)] = null);

(statearr_16490_16666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (4))){
var inst_16462 = (state_16476[(8)]);
var inst_16466 = cljs.core.second.call(null,inst_16462);
var state_16476__$1 = state_16476;
var statearr_16491_16667 = state_16476__$1;
(statearr_16491_16667[(2)] = inst_16466);

(statearr_16491_16667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (5))){
var inst_16468 = (state_16476[(9)]);
var inst_16468__$1 = (state_16476[(2)]);
var inst_16469 = (inst_16468__$1 == null);
var state_16476__$1 = (function (){var statearr_16492 = state_16476;
(statearr_16492[(9)] = inst_16468__$1);

return statearr_16492;
})();
if(cljs.core.truth_(inst_16469)){
var statearr_16493_16668 = state_16476__$1;
(statearr_16493_16668[(1)] = (6));

} else {
var statearr_16494_16669 = state_16476__$1;
(statearr_16494_16669[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (6))){
var state_16476__$1 = state_16476;
var statearr_16495_16670 = state_16476__$1;
(statearr_16495_16670[(2)] = null);

(statearr_16495_16670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (7))){
var inst_16468 = (state_16476[(9)]);
var inst_16472 = new cljs.core.Keyword(null,"DeleteMarker","DeleteMarker",700512599).cljs$core$IFn$_invoke$arity$1(inst_16468);
var state_16476__$1 = state_16476;
var statearr_16496_16671 = state_16476__$1;
(statearr_16496_16671[(2)] = inst_16472);

(statearr_16496_16671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (8))){
var inst_16474 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16476__$1,inst_16474);
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
});})(c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16497 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16497[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16497[(1)] = (1));

return statearr_16497;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16476){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16498){if((e16498 instanceof Object)){
var ex__15821__auto__ = e16498;
var statearr_16499_16672 = state_16476;
(statearr_16499_16672[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16673 = state_16476;
state_16476 = G__16673;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16476){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16500 = f__15841__auto__.call(null);
(statearr_16500[(6)] = c__15840__auto__);

return statearr_16500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,___$1))
);

return c__15840__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,___$1){
return (function (state_16542){
var state_val_16543 = (state_16542[(1)]);
if((state_val_16543 === (1))){
var inst_16502 = cljs.core.async.chan.call(null,(1));
var inst_16524 = cljs.core.async.chan.call(null,(1));
var inst_16525 = (function (){var rchan__15907__auto__ = inst_16502;
var c__15840__auto____$1 = inst_16524;
return ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16502,inst_16524,state_val_16543,c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16502,inst_16524,state_val_16543,c__15840__auto__,___$1){
return (function (state_16522){
var state_val_16523 = (state_16522[(1)]);
if((state_val_16523 === (1))){
var state_16522__$1 = state_16522;
var statearr_16544_16674 = state_16522__$1;
(statearr_16544_16674[(2)] = null);

(statearr_16544_16674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (2))){
var inst_16520 = (state_16522[(2)]);
var state_16522__$1 = state_16522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16522__$1,inst_16520);
} else {
if((state_val_16523 === (3))){
var inst_16503 = (state_16522[(2)]);
var inst_16504 = cljs.core.println.call(null,"Error ",inst_16503);
var inst_16505 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16506 = [inst_16503,null];
var inst_16507 = (new cljs.core.PersistentVector(null,2,(5),inst_16505,inst_16506,null));
var inst_16508 = cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,inst_16507);
var state_16522__$1 = (function (){var statearr_16545 = state_16522;
(statearr_16545[(7)] = inst_16504);

return statearr_16545;
})();
var statearr_16546_16675 = state_16522__$1;
(statearr_16546_16675[(2)] = inst_16508);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16522__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16523 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16522,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16512 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Key","Key",1553874408)];
var inst_16513 = asgnx.aws.s3.path.call(null,key);
var inst_16514 = [self__.bucket,inst_16513];
var inst_16515 = cljs.core.PersistentHashMap.fromArrays(inst_16512,inst_16514);
var inst_16516 = cljs.core.clj__GT_js.call(null,inst_16515);
var inst_16517 = (function (){return ((function (___$2,inst_16512,inst_16513,inst_16514,inst_16515,inst_16516,state_val_16523,rchan__15907__auto__,c__15840__auto____$1,inst_16502,inst_16524,state_val_16543,c__15840__auto__,___$1){
return (function (err__15908__auto__,d__15909__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15908__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15909__auto__))], null));
});
;})(___$2,inst_16512,inst_16513,inst_16514,inst_16515,inst_16516,state_val_16523,rchan__15907__auto__,c__15840__auto____$1,inst_16502,inst_16524,state_val_16543,c__15840__auto__,___$1))
})();
var inst_16518 = asgnx.aws.s3.s3_client.getObject(inst_16516,inst_16517);
var state_16522__$1 = state_16522;
var statearr_16547_16676 = state_16522__$1;
(statearr_16547_16676[(2)] = inst_16518);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16522__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15907__auto__,c__15840__auto____$1,inst_16502,inst_16524,state_val_16543,c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16502,inst_16524,state_val_16543,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16548 = [null,null,null,null,null,null,null,null];
(statearr_16548[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16548[(1)] = (1));

return statearr_16548;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16522){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16549){if((e16549 instanceof Object)){
var ex__15821__auto__ = e16549;
var statearr_16550_16677 = state_16522;
(statearr_16550_16677[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16678 = state_16522;
state_16522 = G__16678;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16522){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16502,inst_16524,state_val_16543,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16551 = f__15841__auto__.call(null);
(statearr_16551[(6)] = c__15840__auto____$1);

return statearr_16551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});
;})(rchan__15907__auto__,c__15840__auto____$1,inst_16502,inst_16524,state_val_16543,c__15840__auto__,___$1))
})();
var inst_16526 = cljs.core.async.impl.dispatch.run.call(null,inst_16525);
var state_16542__$1 = (function (){var statearr_16552 = state_16542;
(statearr_16552[(7)] = inst_16526);

return statearr_16552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16542__$1,(2),inst_16502);
} else {
if((state_val_16543 === (2))){
var inst_16528 = (state_16542[(8)]);
var inst_16528__$1 = (state_16542[(2)]);
var inst_16529 = (inst_16528__$1 == null);
var state_16542__$1 = (function (){var statearr_16553 = state_16542;
(statearr_16553[(8)] = inst_16528__$1);

return statearr_16553;
})();
if(cljs.core.truth_(inst_16529)){
var statearr_16554_16679 = state_16542__$1;
(statearr_16554_16679[(1)] = (3));

} else {
var statearr_16555_16680 = state_16542__$1;
(statearr_16555_16680[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16543 === (3))){
var state_16542__$1 = state_16542;
var statearr_16556_16681 = state_16542__$1;
(statearr_16556_16681[(2)] = null);

(statearr_16556_16681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16543 === (4))){
var inst_16528 = (state_16542[(8)]);
var inst_16532 = cljs.core.second.call(null,inst_16528);
var state_16542__$1 = state_16542;
var statearr_16557_16682 = state_16542__$1;
(statearr_16557_16682[(2)] = inst_16532);

(statearr_16557_16682[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16543 === (5))){
var inst_16534 = (state_16542[(9)]);
var inst_16534__$1 = (state_16542[(2)]);
var inst_16535 = (inst_16534__$1 == null);
var state_16542__$1 = (function (){var statearr_16558 = state_16542;
(statearr_16558[(9)] = inst_16534__$1);

return statearr_16558;
})();
if(cljs.core.truth_(inst_16535)){
var statearr_16559_16683 = state_16542__$1;
(statearr_16559_16683[(1)] = (6));

} else {
var statearr_16560_16684 = state_16542__$1;
(statearr_16560_16684[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16543 === (6))){
var state_16542__$1 = state_16542;
var statearr_16561_16685 = state_16542__$1;
(statearr_16561_16685[(2)] = null);

(statearr_16561_16685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16543 === (7))){
var inst_16534 = (state_16542[(9)]);
var inst_16538 = asgnx.aws.s3.data.call(null,inst_16534);
var state_16542__$1 = state_16542;
var statearr_16562_16686 = state_16542__$1;
(statearr_16562_16686[(2)] = inst_16538);

(statearr_16562_16686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16543 === (8))){
var inst_16540 = (state_16542[(2)]);
var state_16542__$1 = state_16542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16542__$1,inst_16540);
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
});})(c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16563 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16563[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16563[(1)] = (1));

return statearr_16563;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16542){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16564){if((e16564 instanceof Object)){
var ex__15821__auto__ = e16564;
var statearr_16565_16687 = state_16542;
(statearr_16565_16687[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16688 = state_16542;
state_16542 = G__16688;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16542){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16566 = f__15841__auto__.call(null);
(statearr_16566[(6)] = c__15840__auto__);

return statearr_16566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,___$1))
);

return c__15840__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$3 = (function (s,key,not_found){
var self__ = this;
var s__$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,s__$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,s__$1){
return (function (state_16575){
var state_val_16576 = (state_16575[(1)]);
if((state_val_16576 === (1))){
var inst_16567 = asgnx.kvstore.get_BANG_.call(null,s__$1,key);
var state_16575__$1 = state_16575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16575__$1,(2),inst_16567);
} else {
if((state_val_16576 === (2))){
var inst_16569 = (state_16575[(7)]);
var inst_16569__$1 = (state_16575[(2)]);
var state_16575__$1 = (function (){var statearr_16577 = state_16575;
(statearr_16577[(7)] = inst_16569__$1);

return statearr_16577;
})();
if(cljs.core.truth_(inst_16569__$1)){
var statearr_16578_16689 = state_16575__$1;
(statearr_16578_16689[(1)] = (3));

} else {
var statearr_16579_16690 = state_16575__$1;
(statearr_16579_16690[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16576 === (3))){
var inst_16569 = (state_16575[(7)]);
var state_16575__$1 = state_16575;
var statearr_16580_16691 = state_16575__$1;
(statearr_16580_16691[(2)] = inst_16569);

(statearr_16580_16691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16576 === (4))){
var state_16575__$1 = state_16575;
var statearr_16581_16692 = state_16575__$1;
(statearr_16581_16692[(2)] = not_found);

(statearr_16581_16692[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16576 === (5))){
var inst_16573 = (state_16575[(2)]);
var state_16575__$1 = state_16575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16575__$1,inst_16573);
} else {
return null;
}
}
}
}
}
});})(c__15840__auto__,s__$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,s__$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16582 = [null,null,null,null,null,null,null,null];
(statearr_16582[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16582[(1)] = (1));

return statearr_16582;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16575){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16583){if((e16583 instanceof Object)){
var ex__15821__auto__ = e16583;
var statearr_16584_16693 = state_16575;
(statearr_16584_16693[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16694 = state_16575;
state_16575 = G__16694;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16575){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,s__$1))
})();
var state__15842__auto__ = (function (){var statearr_16585 = f__15841__auto__.call(null);
(statearr_16585[(6)] = c__15840__auto__);

return statearr_16585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,s__$1))
);

return c__15840__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$list_BANG_$arity$2 = (function (_,key_prefix){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"list!",asgnx.aws.s3.path.call(null,key_prefix));

var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,___$1){
return (function (state_16628){
var state_val_16629 = (state_16628[(1)]);
if((state_val_16629 === (1))){
var inst_16587 = cljs.core.async.chan.call(null,(1));
var inst_16609 = cljs.core.async.chan.call(null,(1));
var inst_16610 = (function (){var rchan__15907__auto__ = inst_16587;
var c__15840__auto____$1 = inst_16609;
return ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16587,inst_16609,state_val_16629,c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16587,inst_16609,state_val_16629,c__15840__auto__,___$1){
return (function (state_16607){
var state_val_16608 = (state_16607[(1)]);
if((state_val_16608 === (1))){
var state_16607__$1 = state_16607;
var statearr_16630_16695 = state_16607__$1;
(statearr_16630_16695[(2)] = null);

(statearr_16630_16695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (2))){
var inst_16605 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16607__$1,inst_16605);
} else {
if((state_val_16608 === (3))){
var inst_16588 = (state_16607[(2)]);
var inst_16589 = cljs.core.println.call(null,"Error ",inst_16588);
var inst_16590 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16591 = [inst_16588,null];
var inst_16592 = (new cljs.core.PersistentVector(null,2,(5),inst_16590,inst_16591,null));
var inst_16593 = cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,inst_16592);
var state_16607__$1 = (function (){var statearr_16631 = state_16607;
(statearr_16631[(7)] = inst_16589);

return statearr_16631;
})();
var statearr_16632_16696 = state_16607__$1;
(statearr_16632_16696[(2)] = inst_16593);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16607__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16607,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16597 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Prefix","Prefix",146236931)];
var inst_16598 = asgnx.aws.s3.path.call(null,key_prefix);
var inst_16599 = [self__.bucket,inst_16598];
var inst_16600 = cljs.core.PersistentHashMap.fromArrays(inst_16597,inst_16599);
var inst_16601 = cljs.core.clj__GT_js.call(null,inst_16600);
var inst_16602 = (function (){return ((function (___$2,inst_16597,inst_16598,inst_16599,inst_16600,inst_16601,state_val_16608,rchan__15907__auto__,c__15840__auto____$1,inst_16587,inst_16609,state_val_16629,c__15840__auto__,___$1){
return (function (err__15908__auto__,d__15909__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15908__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15909__auto__))], null));
});
;})(___$2,inst_16597,inst_16598,inst_16599,inst_16600,inst_16601,state_val_16608,rchan__15907__auto__,c__15840__auto____$1,inst_16587,inst_16609,state_val_16629,c__15840__auto__,___$1))
})();
var inst_16603 = asgnx.aws.s3.s3_client.listObjects(inst_16601,inst_16602);
var state_16607__$1 = state_16607;
var statearr_16633_16697 = state_16607__$1;
(statearr_16633_16697[(2)] = inst_16603);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16607__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15907__auto__,c__15840__auto____$1,inst_16587,inst_16609,state_val_16629,c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16587,inst_16609,state_val_16629,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16634 = [null,null,null,null,null,null,null,null];
(statearr_16634[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16634[(1)] = (1));

return statearr_16634;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16607){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16635){if((e16635 instanceof Object)){
var ex__15821__auto__ = e16635;
var statearr_16636_16698 = state_16607;
(statearr_16636_16698[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16699 = state_16607;
state_16607 = G__16699;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16607){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16587,inst_16609,state_val_16629,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16637 = f__15841__auto__.call(null);
(statearr_16637[(6)] = c__15840__auto____$1);

return statearr_16637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});
;})(rchan__15907__auto__,c__15840__auto____$1,inst_16587,inst_16609,state_val_16629,c__15840__auto__,___$1))
})();
var inst_16611 = cljs.core.async.impl.dispatch.run.call(null,inst_16610);
var state_16628__$1 = (function (){var statearr_16638 = state_16628;
(statearr_16638[(7)] = inst_16611);

return statearr_16638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16628__$1,(2),inst_16587);
} else {
if((state_val_16629 === (2))){
var inst_16613 = (state_16628[(8)]);
var inst_16613__$1 = (state_16628[(2)]);
var inst_16614 = (inst_16613__$1 == null);
var state_16628__$1 = (function (){var statearr_16639 = state_16628;
(statearr_16639[(8)] = inst_16613__$1);

return statearr_16639;
})();
if(cljs.core.truth_(inst_16614)){
var statearr_16640_16700 = state_16628__$1;
(statearr_16640_16700[(1)] = (3));

} else {
var statearr_16641_16701 = state_16628__$1;
(statearr_16641_16701[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16629 === (3))){
var state_16628__$1 = state_16628;
var statearr_16642_16702 = state_16628__$1;
(statearr_16642_16702[(2)] = null);

(statearr_16642_16702[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16629 === (4))){
var inst_16613 = (state_16628[(8)]);
var inst_16617 = cljs.core.second.call(null,inst_16613);
var state_16628__$1 = state_16628;
var statearr_16643_16703 = state_16628__$1;
(statearr_16643_16703[(2)] = inst_16617);

(statearr_16643_16703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16629 === (5))){
var inst_16619 = (state_16628[(9)]);
var inst_16619__$1 = (state_16628[(2)]);
var inst_16620 = (inst_16619__$1 == null);
var state_16628__$1 = (function (){var statearr_16644 = state_16628;
(statearr_16644[(9)] = inst_16619__$1);

return statearr_16644;
})();
if(cljs.core.truth_(inst_16620)){
var statearr_16645_16704 = state_16628__$1;
(statearr_16645_16704[(1)] = (6));

} else {
var statearr_16646_16705 = state_16628__$1;
(statearr_16646_16705[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16629 === (6))){
var state_16628__$1 = state_16628;
var statearr_16647_16706 = state_16628__$1;
(statearr_16647_16706[(2)] = null);

(statearr_16647_16706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16629 === (7))){
var inst_16619 = (state_16628[(9)]);
var inst_16623 = new cljs.core.Keyword(null,"Contents","Contents",-560485612).cljs$core$IFn$_invoke$arity$1(inst_16619);
var state_16628__$1 = state_16628;
var statearr_16648_16707 = state_16628__$1;
(statearr_16648_16707[(2)] = inst_16623);

(statearr_16648_16707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16629 === (8))){
var inst_16625 = (state_16628[(2)]);
var inst_16626 = asgnx.aws.s3.object_keys.call(null,inst_16625);
var state_16628__$1 = state_16628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16628__$1,inst_16626);
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
});})(c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16649 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16649[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16649[(1)] = (1));

return statearr_16649;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16628){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16650){if((e16650 instanceof Object)){
var ex__15821__auto__ = e16650;
var statearr_16651_16708 = state_16628;
(statearr_16651_16708[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16709 = state_16628;
state_16628 = G__16709;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16628){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16652 = f__15841__auto__.call(null);
(statearr_16652[(6)] = c__15840__auto__);

return statearr_16652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,___$1))
);

return c__15840__auto__;
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
