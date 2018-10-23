// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs_lambda.context');
goog.require('cljs.core');
cljs_lambda.context.json__GT_edn = (function cljs_lambda$context$json__GT_edn(json){
return cljs.core.js__GT_clj.call(null,JSON.parse(JSON.stringify(json)));
});

/**
 * @interface
 */
cljs_lambda.context.ContextHandle = function(){};

/**
 * See [[done!]]
 */
cljs_lambda.context._done_BANG_ = (function cljs_lambda$context$_done_BANG_(this$,err,result){
if(((!((this$ == null))) && (!((this$.cljs_lambda$context$ContextHandle$_done_BANG_$arity$3 == null))))){
return this$.cljs_lambda$context$ContextHandle$_done_BANG_$arity$3(this$,err,result);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cljs_lambda.context._done_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,err,result);
} else {
var m__4244__auto____$1 = (cljs_lambda.context._done_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,err,result);
} else {
throw cljs.core.missing_protocol.call(null,"ContextHandle.-done!",this$);
}
}
}
});

/**
 * The number of milliseconds remaining until the timeout of the invocation
 * associated with this context.
 */
cljs_lambda.context.msecs_remaining = (function cljs_lambda$context$msecs_remaining(this$){
if(((!((this$ == null))) && (!((this$.cljs_lambda$context$ContextHandle$msecs_remaining$arity$1 == null))))){
return this$.cljs_lambda$context$ContextHandle$msecs_remaining$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cljs_lambda.context.msecs_remaining[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (cljs_lambda.context.msecs_remaining["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ContextHandle.msecs-remaining",this$);
}
}
}
});

/**
 * Retrieve a map of environment variables.
 */
cljs_lambda.context.environment = (function cljs_lambda$context$environment(this$){
if(((!((this$ == null))) && (!((this$.cljs_lambda$context$ContextHandle$environment$arity$1 == null))))){
return this$.cljs_lambda$context$ContextHandle$environment$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cljs_lambda.context.environment[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (cljs_lambda.context.environment["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ContextHandle.environment",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs_lambda.context.ContextHandle}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_lambda.context.LambdaContext = (function (js_handle,__meta,__extmap,__hash){
this.js_handle = js_handle;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs_lambda.context.LambdaContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k24431,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__24435 = k24431;
var G__24435__$1 = (((G__24435 instanceof cljs.core.Keyword))?G__24435.fqn:null);
switch (G__24435__$1) {
case "js-handle":
return self__.js_handle;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24431,else__4206__auto__);

}
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#cljs-lambda.context.LambdaContext{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"js-handle","js-handle",-607223918),self__.js_handle],null))], null),self__.__extmap));
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24430){
var self__ = this;
var G__24430__$1 = this;
return (new cljs.core.RecordIter((0),G__24430__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-handle","js-handle",-607223918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new cljs_lambda.context.LambdaContext(self__.js_handle,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-71362913 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24432,other24433){
var self__ = this;
var this24432__$1 = this;
return ((!((other24433 == null))) && ((this24432__$1.constructor === other24433.constructor)) && (cljs.core._EQ_.call(null,this24432__$1.js_handle,other24433.js_handle)) && (cljs.core._EQ_.call(null,this24432__$1.__extmap,other24433.__extmap)));
});

cljs_lambda.context.LambdaContext.prototype.cljs_lambda$context$ContextHandle$ = cljs.core.PROTOCOL_SENTINEL;

cljs_lambda.context.LambdaContext.prototype.cljs_lambda$context$ContextHandle$_done_BANG_$arity$3 = (function (this$,err,result){
var self__ = this;
var this$__$1 = this;
return self__.js_handle.done(err,result);
});

cljs_lambda.context.LambdaContext.prototype.cljs_lambda$context$ContextHandle$msecs_remaining$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.js_handle.getRemainingTimeInMillis();
});

cljs_lambda.context.LambdaContext.prototype.cljs_lambda$context$ContextHandle$environment$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs_lambda.context.json__GT_edn.call(null,process.env);
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-handle","js-handle",-607223918),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new cljs_lambda.context.LambdaContext(self__.js_handle,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__24430){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__24436 = cljs.core.keyword_identical_QMARK_;
var expr__24437 = k__4211__auto__;
if(cljs.core.truth_(pred__24436.call(null,new cljs.core.Keyword(null,"js-handle","js-handle",-607223918),expr__24437))){
return (new cljs_lambda.context.LambdaContext(G__24430,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_lambda.context.LambdaContext(self__.js_handle,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__24430),null));
}
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"js-handle","js-handle",-607223918),self__.js_handle,null))], null),self__.__extmap));
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__24430){
var self__ = this;
var this__4202__auto____$1 = this;
return (new cljs_lambda.context.LambdaContext(self__.js_handle,G__24430,self__.__extmap,self__.__hash));
});

cljs_lambda.context.LambdaContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

cljs_lambda.context.LambdaContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js-handle","js-handle",1033307609,null)], null);
});

cljs_lambda.context.LambdaContext.cljs$lang$type = true;

cljs_lambda.context.LambdaContext.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"cljs-lambda.context/LambdaContext",null,(1),null));
});

cljs_lambda.context.LambdaContext.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"cljs-lambda.context/LambdaContext");
});

/**
 * Positional factory function for cljs-lambda.context/LambdaContext.
 */
cljs_lambda.context.__GT_LambdaContext = (function cljs_lambda$context$__GT_LambdaContext(js_handle){
return (new cljs_lambda.context.LambdaContext(js_handle,null,null,null));
});

/**
 * Factory function for cljs-lambda.context/LambdaContext, taking a map of keywords to field values.
 */
cljs_lambda.context.map__GT_LambdaContext = (function cljs_lambda$context$map__GT_LambdaContext(G__24434){
var extmap__4236__auto__ = (function (){var G__24439 = cljs.core.dissoc.call(null,G__24434,new cljs.core.Keyword(null,"js-handle","js-handle",-607223918));
if(cljs.core.record_QMARK_.call(null,G__24434)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__24439);
} else {
return G__24439;
}
})();
return (new cljs_lambda.context.LambdaContext(new cljs.core.Keyword(null,"js-handle","js-handle",-607223918).cljs$core$IFn$_invoke$arity$1(G__24434),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

/**
 * Retrieve an environment variable by name, defaulting to `nil` if not found.
 * 
 * ```clojure
 * (env ctx "USER")
 * (env ctx :USER)
 * (env ctx 'USER)
 * ```
 */
cljs_lambda.context.env = (function cljs_lambda$context$env(ctx,k){
return cljs.core.get.call(null,cljs_lambda.context.environment.call(null,ctx),cljs.core.name.call(null,k));
});
/**
 * Terminate execution of the handler associated w/ the given context, conveying
 *   the given error (if non-nil), or the given success result (if non-nil).  No
 *   arguments communicates generic success.
 * 
 * ```clojure
 * (deflambda quick [_ ctx]
 *   (ctx/done! ctx))
 * ```
 */
cljs_lambda.context.done_BANG_ = (function cljs_lambda$context$done_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24447 = arguments.length;
var i__4532__auto___24448 = (0);
while(true){
if((i__4532__auto___24448 < len__4531__auto___24447)){
args__4534__auto__.push((arguments[i__4532__auto___24448]));

var G__24449 = (i__4532__auto___24448 + (1));
i__4532__auto___24448 = G__24449;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_lambda.context.done_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_lambda.context.done_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,p__24443){
var vec__24444 = p__24443;
var err = cljs.core.nth.call(null,vec__24444,(0),null);
var result = cljs.core.nth.call(null,vec__24444,(1),null);
return cljs_lambda.context._done_BANG_.call(null,ctx,cljs.core.clj__GT_js.call(null,err),cljs.core.clj__GT_js.call(null,result));
});

cljs_lambda.context.done_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_lambda.context.done_BANG_.cljs$lang$applyTo = (function (seq24441){
var G__24442 = cljs.core.first.call(null,seq24441);
var seq24441__$1 = cljs.core.next.call(null,seq24441);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24442,seq24441__$1);
});

/**
 * Trivial wrapper around [[done!]]
 * 
 *   Terminate execution of the handler associated w/ the given context, conveying
 *   the given error, if non-nil - otherwise mark the execution as failed w/ no
 *   specific error.
 * 
 * ```clojure
 * (deflambda purchase [item-name ctx]
 *   (ctx/fail! ctx (js/Error. (str "Sorry, no more " item-name))))
 * ```
 */
cljs_lambda.context.fail_BANG_ = (function cljs_lambda$context$fail_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24456 = arguments.length;
var i__4532__auto___24457 = (0);
while(true){
if((i__4532__auto___24457 < len__4531__auto___24456)){
args__4534__auto__.push((arguments[i__4532__auto___24457]));

var G__24458 = (i__4532__auto___24457 + (1));
i__4532__auto___24457 = G__24458;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_lambda.context.fail_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_lambda.context.fail_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,p__24452){
var vec__24453 = p__24452;
var err = cljs.core.nth.call(null,vec__24453,(0),null);
return cljs_lambda.context.done_BANG_.call(null,ctx,err,null);
});

cljs_lambda.context.fail_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_lambda.context.fail_BANG_.cljs$lang$applyTo = (function (seq24450){
var G__24451 = cljs.core.first.call(null,seq24450);
var seq24450__$1 = cljs.core.next.call(null,seq24450);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24451,seq24450__$1);
});

/**
 * Trivial wrapper around [[done!]]
 * 
 *   Terminate execution of the handler associated w/ the given context, conveying
 *   the given JSON-serializable success value, if non-nil - otherwise mark the
 *   execution as successful w/ no specific result.
 * 
 * ```clojure
 * (deflambda purchase [item-name ctx]
 *   (ctx/succeed! ctx "You bought something"))
 * ```
 */
cljs_lambda.context.succeed_BANG_ = (function cljs_lambda$context$succeed_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24465 = arguments.length;
var i__4532__auto___24466 = (0);
while(true){
if((i__4532__auto___24466 < len__4531__auto___24465)){
args__4534__auto__.push((arguments[i__4532__auto___24466]));

var G__24467 = (i__4532__auto___24466 + (1));
i__4532__auto___24466 = G__24467;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_lambda.context.succeed_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_lambda.context.succeed_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,p__24461){
var vec__24462 = p__24461;
var result = cljs.core.nth.call(null,vec__24462,(0),null);
return cljs_lambda.context.done_BANG_.call(null,ctx,null,result);
});

cljs_lambda.context.succeed_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_lambda.context.succeed_BANG_.cljs$lang$applyTo = (function (seq24459){
var G__24460 = cljs.core.first.call(null,seq24459);
var seq24459__$1 = cljs.core.next.call(null,seq24459);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24460,seq24459__$1);
});

cljs_lambda.context.context_keys = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"aws-request-id","aws-request-id",1091287051),"awsRequestId",new cljs.core.Keyword(null,"client-context","client-context",1180126910),"clientContext",new cljs.core.Keyword(null,"log-group-name","log-group-name",-201650099),"logGroupName",new cljs.core.Keyword(null,"log-stream-name","log-stream-name",-673452017),"logStreamName",new cljs.core.Keyword(null,"function-name","function-name",621877630),"functionName",new cljs.core.Keyword(null,"function-arn","function-arn",-1088376409),"invokedFunctionArn"], null);
cljs_lambda.context.identity_map = (function cljs_lambda$context$identity_map(js_context){
var temp__5457__auto__ = js_context.identity;
if(cljs.core.truth_(temp__5457__auto__)){
var id = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cognito-id","cognito-id",614526197),id.cognitoIdentityId,new cljs.core.Keyword(null,"cognito-pool","cognito-pool",-1920120387),id.cognitoIdentityPoolId], null);
} else {
return null;
}
});
cljs_lambda.context.__GT_context = (function cljs_lambda$context$__GT_context(js_context){
var id = cljs_lambda.context.identity_map.call(null,js_context);
var cb = js_context.handler_callback;
var G__24468 = cljs.core.into.call(null,cljs_lambda.context.__GT_LambdaContext.call(null,js_context),(function (){var iter__4324__auto__ = ((function (id,cb){
return (function cljs_lambda$context$__GT_context_$_iter__24469(s__24470){
return (new cljs.core.LazySeq(null,((function (id,cb){
return (function (){
var s__24470__$1 = s__24470;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24470__$1);
if(temp__5457__auto__){
var s__24470__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24470__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24470__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24472 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24471 = (0);
while(true){
if((i__24471 < size__4323__auto__)){
var vec__24473 = cljs.core._nth.call(null,c__4322__auto__,i__24471);
var us = cljs.core.nth.call(null,vec__24473,(0),null);
var them = cljs.core.nth.call(null,vec__24473,(1),null);
cljs.core.chunk_append.call(null,b__24472,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [us,(js_context[them])], null));

var G__24479 = (i__24471 + (1));
i__24471 = G__24479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24472),cljs_lambda$context$__GT_context_$_iter__24469.call(null,cljs.core.chunk_rest.call(null,s__24470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24472),null);
}
} else {
var vec__24476 = cljs.core.first.call(null,s__24470__$2);
var us = cljs.core.nth.call(null,vec__24476,(0),null);
var them = cljs.core.nth.call(null,vec__24476,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [us,(js_context[them])], null),cljs_lambda$context$__GT_context_$_iter__24469.call(null,cljs.core.rest.call(null,s__24470__$2)));
}
} else {
return null;
}
break;
}
});})(id,cb))
,null,null));
});})(id,cb))
;
return iter__4324__auto__.call(null,cljs_lambda.context.context_keys);
})());
var G__24468__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,G__24468,new cljs.core.Keyword(null,"identity","identity",1647396035),id):G__24468);
if(cljs.core.truth_(cb)){
return cljs.core.assoc.call(null,G__24468__$1,new cljs.core.Keyword(null,"handler-callback","handler-callback",190882873),cb);
} else {
return G__24468__$1;
}
});

//# sourceMappingURL=context.js.map
