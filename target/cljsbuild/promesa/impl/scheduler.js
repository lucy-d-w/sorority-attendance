// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('promesa.impl.proto');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_.call(null,false);
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler23930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.impl.proto.ICancellable}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler23930 = (function (cur,done_QMARK_,cancelled,meta23931){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta23931 = meta23931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
promesa.impl.scheduler.t_promesa$impl$scheduler23930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_23932,meta23931__$1){
var self__ = this;
var _23932__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler23930(self__.cur,self__.done_QMARK_,self__.cancelled,meta23931__$1));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler23930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_23932){
var self__ = this;
var _23932__$1 = this;
return self__.meta23931;
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler23930.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.done_QMARK_);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler23930.prototype.promesa$impl$proto$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler23930.prototype.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.cancelled);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler23930.prototype.promesa$impl$proto$ICancellable$_cancel$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_.call(null,self__.cancelled,true);

return clearTimeout(self__.cur);
}
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler23930.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"cancelled","cancelled",2129257751,null),new cljs.core.Symbol(null,"meta23931","meta23931",-2001645119,null)], null);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler23930.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler23930.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler23930";

promesa.impl.scheduler.t_promesa$impl$scheduler23930.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler23930");
});})(cancelled))
;

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler23930.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler23930 = ((function (cancelled){
return (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler23930(cur__$1,done_QMARK___$1,cancelled__$1,meta23931){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler23930(cur__$1,done_QMARK___$1,cancelled__$1,meta23931));
});})(cancelled))
;

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler23930(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler23933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {promesa.impl.proto.IScheduler}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler23933 = (function (meta23934){
this.meta23934 = meta23934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
promesa.impl.scheduler.t_promesa$impl$scheduler23933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23935,meta23934__$1){
var self__ = this;
var _23935__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler23933(meta23934__$1));
});

promesa.impl.scheduler.t_promesa$impl$scheduler23933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23935){
var self__ = this;
var _23935__$1 = this;
return self__.meta23934;
});

promesa.impl.scheduler.t_promesa$impl$scheduler23933.prototype.promesa$impl$proto$IScheduler$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler23933.prototype.promesa$impl$proto$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_.call(null,false);
var task = ((function (done_QMARK_,___$1){
return (function (){
try{return func.call(null);
}finally {cljs.core.vreset_BANG_.call(null,done_QMARK_,true);
}});})(done_QMARK_,___$1))
;
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task.call(null,cur,done_QMARK_);
});

promesa.impl.scheduler.t_promesa$impl$scheduler23933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23934","meta23934",-423231167,null)], null);
});

promesa.impl.scheduler.t_promesa$impl$scheduler23933.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler23933.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler23933";

promesa.impl.scheduler.t_promesa$impl$scheduler23933.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler23933");
});

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler23933.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler23933 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler23933(meta23934){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler23933(meta23934));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler23933(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default lazy scheduler instance.
 */
promesa.impl.scheduler._PLUS_scheduler_PLUS_ = (new cljs.core.Delay((function (){
return promesa.impl.scheduler.scheduler.call(null);
}),null));
promesa.impl.scheduler.schedule = (function promesa$impl$scheduler$schedule(ms,func){
return promesa.impl.proto._schedule.call(null,cljs.core.deref.call(null,promesa.impl.scheduler._PLUS_scheduler_PLUS_),ms,func);
});

//# sourceMappingURL=scheduler.js.map
