// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21611 = arguments.length;
switch (G__21611) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21612 = (function (f,blockable,meta21613){
this.f = f;
this.blockable = blockable;
this.meta21613 = meta21613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21614,meta21613__$1){
var self__ = this;
var _21614__$1 = this;
return (new cljs.core.async.t_cljs$core$async21612(self__.f,self__.blockable,meta21613__$1));
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21614){
var self__ = this;
var _21614__$1 = this;
return self__.meta21613;
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21613","meta21613",998462064,null)], null);
});

cljs.core.async.t_cljs$core$async21612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21612";

cljs.core.async.t_cljs$core$async21612.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21612");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21612.
 */
cljs.core.async.__GT_t_cljs$core$async21612 = (function cljs$core$async$__GT_t_cljs$core$async21612(f__$1,blockable__$1,meta21613){
return (new cljs.core.async.t_cljs$core$async21612(f__$1,blockable__$1,meta21613));
});

}

return (new cljs.core.async.t_cljs$core$async21612(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21618 = arguments.length;
switch (G__21618) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21621 = arguments.length;
switch (G__21621) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21624 = arguments.length;
switch (G__21624) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21626 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21626);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21626,ret){
return (function (){
return fn1.call(null,val_21626);
});})(val_21626,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21628 = arguments.length;
switch (G__21628) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___21630 = n;
var x_21631 = (0);
while(true){
if((x_21631 < n__4408__auto___21630)){
(a[x_21631] = (0));

var G__21632 = (x_21631 + (1));
x_21631 = G__21632;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21633 = (i + (1));
i = G__21633;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21634 = (function (flag,meta21635){
this.flag = flag;
this.meta21635 = meta21635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21636,meta21635__$1){
var self__ = this;
var _21636__$1 = this;
return (new cljs.core.async.t_cljs$core$async21634(self__.flag,meta21635__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21636){
var self__ = this;
var _21636__$1 = this;
return self__.meta21635;
});})(flag))
;

cljs.core.async.t_cljs$core$async21634.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21634.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21634.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21635","meta21635",1052689718,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21634";

cljs.core.async.t_cljs$core$async21634.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21634");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21634.
 */
cljs.core.async.__GT_t_cljs$core$async21634 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21634(flag__$1,meta21635){
return (new cljs.core.async.t_cljs$core$async21634(flag__$1,meta21635));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21634(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21637 = (function (flag,cb,meta21638){
this.flag = flag;
this.cb = cb;
this.meta21638 = meta21638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21639,meta21638__$1){
var self__ = this;
var _21639__$1 = this;
return (new cljs.core.async.t_cljs$core$async21637(self__.flag,self__.cb,meta21638__$1));
});

cljs.core.async.t_cljs$core$async21637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21639){
var self__ = this;
var _21639__$1 = this;
return self__.meta21638;
});

cljs.core.async.t_cljs$core$async21637.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21638","meta21638",-1224176488,null)], null);
});

cljs.core.async.t_cljs$core$async21637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21637";

cljs.core.async.t_cljs$core$async21637.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21637");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21637.
 */
cljs.core.async.__GT_t_cljs$core$async21637 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21637(flag__$1,cb__$1,meta21638){
return (new cljs.core.async.t_cljs$core$async21637(flag__$1,cb__$1,meta21638));
});

}

return (new cljs.core.async.t_cljs$core$async21637(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21640_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21640_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21641_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21641_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21642 = (i + (1));
i = G__21642;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21648 = arguments.length;
var i__4532__auto___21649 = (0);
while(true){
if((i__4532__auto___21649 < len__4531__auto___21648)){
args__4534__auto__.push((arguments[i__4532__auto___21649]));

var G__21650 = (i__4532__auto___21649 + (1));
i__4532__auto___21649 = G__21650;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21645){
var map__21646 = p__21645;
var map__21646__$1 = ((((!((map__21646 == null)))?(((((map__21646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21646):map__21646);
var opts = map__21646__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21643){
var G__21644 = cljs.core.first.call(null,seq21643);
var seq21643__$1 = cljs.core.next.call(null,seq21643);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21644,seq21643__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21652 = arguments.length;
switch (G__21652) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21551__auto___21698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___21698){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___21698){
return (function (state_21676){
var state_val_21677 = (state_21676[(1)]);
if((state_val_21677 === (7))){
var inst_21672 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
var statearr_21678_21699 = state_21676__$1;
(statearr_21678_21699[(2)] = inst_21672);

(statearr_21678_21699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (1))){
var state_21676__$1 = state_21676;
var statearr_21679_21700 = state_21676__$1;
(statearr_21679_21700[(2)] = null);

(statearr_21679_21700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (4))){
var inst_21655 = (state_21676[(7)]);
var inst_21655__$1 = (state_21676[(2)]);
var inst_21656 = (inst_21655__$1 == null);
var state_21676__$1 = (function (){var statearr_21680 = state_21676;
(statearr_21680[(7)] = inst_21655__$1);

return statearr_21680;
})();
if(cljs.core.truth_(inst_21656)){
var statearr_21681_21701 = state_21676__$1;
(statearr_21681_21701[(1)] = (5));

} else {
var statearr_21682_21702 = state_21676__$1;
(statearr_21682_21702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (13))){
var state_21676__$1 = state_21676;
var statearr_21683_21703 = state_21676__$1;
(statearr_21683_21703[(2)] = null);

(statearr_21683_21703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (6))){
var inst_21655 = (state_21676[(7)]);
var state_21676__$1 = state_21676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21676__$1,(11),to,inst_21655);
} else {
if((state_val_21677 === (3))){
var inst_21674 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21676__$1,inst_21674);
} else {
if((state_val_21677 === (12))){
var state_21676__$1 = state_21676;
var statearr_21684_21704 = state_21676__$1;
(statearr_21684_21704[(2)] = null);

(statearr_21684_21704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (2))){
var state_21676__$1 = state_21676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21676__$1,(4),from);
} else {
if((state_val_21677 === (11))){
var inst_21665 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
if(cljs.core.truth_(inst_21665)){
var statearr_21685_21705 = state_21676__$1;
(statearr_21685_21705[(1)] = (12));

} else {
var statearr_21686_21706 = state_21676__$1;
(statearr_21686_21706[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (9))){
var state_21676__$1 = state_21676;
var statearr_21687_21707 = state_21676__$1;
(statearr_21687_21707[(2)] = null);

(statearr_21687_21707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (5))){
var state_21676__$1 = state_21676;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21688_21708 = state_21676__$1;
(statearr_21688_21708[(1)] = (8));

} else {
var statearr_21689_21709 = state_21676__$1;
(statearr_21689_21709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (14))){
var inst_21670 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
var statearr_21690_21710 = state_21676__$1;
(statearr_21690_21710[(2)] = inst_21670);

(statearr_21690_21710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (10))){
var inst_21662 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
var statearr_21691_21711 = state_21676__$1;
(statearr_21691_21711[(2)] = inst_21662);

(statearr_21691_21711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21677 === (8))){
var inst_21659 = cljs.core.async.close_BANG_.call(null,to);
var state_21676__$1 = state_21676;
var statearr_21692_21712 = state_21676__$1;
(statearr_21692_21712[(2)] = inst_21659);

(statearr_21692_21712[(1)] = (10));


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
});})(c__21551__auto___21698))
;
return ((function (switch__21460__auto__,c__21551__auto___21698){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_21693 = [null,null,null,null,null,null,null,null];
(statearr_21693[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_21693[(1)] = (1));

return statearr_21693;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_21676){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_21676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e21694){if((e21694 instanceof Object)){
var ex__21464__auto__ = e21694;
var statearr_21695_21713 = state_21676;
(statearr_21695_21713[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21714 = state_21676;
state_21676 = G__21714;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_21676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_21676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___21698))
})();
var state__21553__auto__ = (function (){var statearr_21696 = f__21552__auto__.call(null);
(statearr_21696[(6)] = c__21551__auto___21698);

return statearr_21696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___21698))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21715){
var vec__21716 = p__21715;
var v = cljs.core.nth.call(null,vec__21716,(0),null);
var p = cljs.core.nth.call(null,vec__21716,(1),null);
var job = vec__21716;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21551__auto___21887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___21887,res,vec__21716,v,p,job,jobs,results){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___21887,res,vec__21716,v,p,job,jobs,results){
return (function (state_21723){
var state_val_21724 = (state_21723[(1)]);
if((state_val_21724 === (1))){
var state_21723__$1 = state_21723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21723__$1,(2),res,v);
} else {
if((state_val_21724 === (2))){
var inst_21720 = (state_21723[(2)]);
var inst_21721 = cljs.core.async.close_BANG_.call(null,res);
var state_21723__$1 = (function (){var statearr_21725 = state_21723;
(statearr_21725[(7)] = inst_21720);

return statearr_21725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21723__$1,inst_21721);
} else {
return null;
}
}
});})(c__21551__auto___21887,res,vec__21716,v,p,job,jobs,results))
;
return ((function (switch__21460__auto__,c__21551__auto___21887,res,vec__21716,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0 = (function (){
var statearr_21726 = [null,null,null,null,null,null,null,null];
(statearr_21726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__);

(statearr_21726[(1)] = (1));

return statearr_21726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1 = (function (state_21723){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_21723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e21727){if((e21727 instanceof Object)){
var ex__21464__auto__ = e21727;
var statearr_21728_21888 = state_21723;
(statearr_21728_21888[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21889 = state_21723;
state_21723 = G__21889;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = function(state_21723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1.call(this,state_21723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___21887,res,vec__21716,v,p,job,jobs,results))
})();
var state__21553__auto__ = (function (){var statearr_21729 = f__21552__auto__.call(null);
(statearr_21729[(6)] = c__21551__auto___21887);

return statearr_21729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___21887,res,vec__21716,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21730){
var vec__21731 = p__21730;
var v = cljs.core.nth.call(null,vec__21731,(0),null);
var p = cljs.core.nth.call(null,vec__21731,(1),null);
var job = vec__21731;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___21890 = n;
var __21891 = (0);
while(true){
if((__21891 < n__4408__auto___21890)){
var G__21734_21892 = type;
var G__21734_21893__$1 = (((G__21734_21892 instanceof cljs.core.Keyword))?G__21734_21892.fqn:null);
switch (G__21734_21893__$1) {
case "compute":
var c__21551__auto___21895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21891,c__21551__auto___21895,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (__21891,c__21551__auto___21895,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async){
return (function (state_21747){
var state_val_21748 = (state_21747[(1)]);
if((state_val_21748 === (1))){
var state_21747__$1 = state_21747;
var statearr_21749_21896 = state_21747__$1;
(statearr_21749_21896[(2)] = null);

(statearr_21749_21896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21748 === (2))){
var state_21747__$1 = state_21747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21747__$1,(4),jobs);
} else {
if((state_val_21748 === (3))){
var inst_21745 = (state_21747[(2)]);
var state_21747__$1 = state_21747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21747__$1,inst_21745);
} else {
if((state_val_21748 === (4))){
var inst_21737 = (state_21747[(2)]);
var inst_21738 = process.call(null,inst_21737);
var state_21747__$1 = state_21747;
if(cljs.core.truth_(inst_21738)){
var statearr_21750_21897 = state_21747__$1;
(statearr_21750_21897[(1)] = (5));

} else {
var statearr_21751_21898 = state_21747__$1;
(statearr_21751_21898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21748 === (5))){
var state_21747__$1 = state_21747;
var statearr_21752_21899 = state_21747__$1;
(statearr_21752_21899[(2)] = null);

(statearr_21752_21899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21748 === (6))){
var state_21747__$1 = state_21747;
var statearr_21753_21900 = state_21747__$1;
(statearr_21753_21900[(2)] = null);

(statearr_21753_21900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21748 === (7))){
var inst_21743 = (state_21747[(2)]);
var state_21747__$1 = state_21747;
var statearr_21754_21901 = state_21747__$1;
(statearr_21754_21901[(2)] = inst_21743);

(statearr_21754_21901[(1)] = (3));


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
});})(__21891,c__21551__auto___21895,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async))
;
return ((function (__21891,switch__21460__auto__,c__21551__auto___21895,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0 = (function (){
var statearr_21755 = [null,null,null,null,null,null,null];
(statearr_21755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__);

(statearr_21755[(1)] = (1));

return statearr_21755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1 = (function (state_21747){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_21747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e21756){if((e21756 instanceof Object)){
var ex__21464__auto__ = e21756;
var statearr_21757_21902 = state_21747;
(statearr_21757_21902[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21903 = state_21747;
state_21747 = G__21903;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = function(state_21747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1.call(this,state_21747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__;
})()
;})(__21891,switch__21460__auto__,c__21551__auto___21895,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async))
})();
var state__21553__auto__ = (function (){var statearr_21758 = f__21552__auto__.call(null);
(statearr_21758[(6)] = c__21551__auto___21895);

return statearr_21758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(__21891,c__21551__auto___21895,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async))
);


break;
case "async":
var c__21551__auto___21904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21891,c__21551__auto___21904,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (__21891,c__21551__auto___21904,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async){
return (function (state_21771){
var state_val_21772 = (state_21771[(1)]);
if((state_val_21772 === (1))){
var state_21771__$1 = state_21771;
var statearr_21773_21905 = state_21771__$1;
(statearr_21773_21905[(2)] = null);

(statearr_21773_21905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (2))){
var state_21771__$1 = state_21771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21771__$1,(4),jobs);
} else {
if((state_val_21772 === (3))){
var inst_21769 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21771__$1,inst_21769);
} else {
if((state_val_21772 === (4))){
var inst_21761 = (state_21771[(2)]);
var inst_21762 = async.call(null,inst_21761);
var state_21771__$1 = state_21771;
if(cljs.core.truth_(inst_21762)){
var statearr_21774_21906 = state_21771__$1;
(statearr_21774_21906[(1)] = (5));

} else {
var statearr_21775_21907 = state_21771__$1;
(statearr_21775_21907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (5))){
var state_21771__$1 = state_21771;
var statearr_21776_21908 = state_21771__$1;
(statearr_21776_21908[(2)] = null);

(statearr_21776_21908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (6))){
var state_21771__$1 = state_21771;
var statearr_21777_21909 = state_21771__$1;
(statearr_21777_21909[(2)] = null);

(statearr_21777_21909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21772 === (7))){
var inst_21767 = (state_21771[(2)]);
var state_21771__$1 = state_21771;
var statearr_21778_21910 = state_21771__$1;
(statearr_21778_21910[(2)] = inst_21767);

(statearr_21778_21910[(1)] = (3));


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
});})(__21891,c__21551__auto___21904,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async))
;
return ((function (__21891,switch__21460__auto__,c__21551__auto___21904,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0 = (function (){
var statearr_21779 = [null,null,null,null,null,null,null];
(statearr_21779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__);

(statearr_21779[(1)] = (1));

return statearr_21779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1 = (function (state_21771){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_21771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e21780){if((e21780 instanceof Object)){
var ex__21464__auto__ = e21780;
var statearr_21781_21911 = state_21771;
(statearr_21781_21911[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21912 = state_21771;
state_21771 = G__21912;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = function(state_21771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1.call(this,state_21771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__;
})()
;})(__21891,switch__21460__auto__,c__21551__auto___21904,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async))
})();
var state__21553__auto__ = (function (){var statearr_21782 = f__21552__auto__.call(null);
(statearr_21782[(6)] = c__21551__auto___21904);

return statearr_21782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(__21891,c__21551__auto___21904,G__21734_21892,G__21734_21893__$1,n__4408__auto___21890,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21734_21893__$1)].join('')));

}

var G__21913 = (__21891 + (1));
__21891 = G__21913;
continue;
} else {
}
break;
}

var c__21551__auto___21914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___21914,jobs,results,process,async){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___21914,jobs,results,process,async){
return (function (state_21804){
var state_val_21805 = (state_21804[(1)]);
if((state_val_21805 === (1))){
var state_21804__$1 = state_21804;
var statearr_21806_21915 = state_21804__$1;
(statearr_21806_21915[(2)] = null);

(statearr_21806_21915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (2))){
var state_21804__$1 = state_21804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21804__$1,(4),from);
} else {
if((state_val_21805 === (3))){
var inst_21802 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21804__$1,inst_21802);
} else {
if((state_val_21805 === (4))){
var inst_21785 = (state_21804[(7)]);
var inst_21785__$1 = (state_21804[(2)]);
var inst_21786 = (inst_21785__$1 == null);
var state_21804__$1 = (function (){var statearr_21807 = state_21804;
(statearr_21807[(7)] = inst_21785__$1);

return statearr_21807;
})();
if(cljs.core.truth_(inst_21786)){
var statearr_21808_21916 = state_21804__$1;
(statearr_21808_21916[(1)] = (5));

} else {
var statearr_21809_21917 = state_21804__$1;
(statearr_21809_21917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (5))){
var inst_21788 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21804__$1 = state_21804;
var statearr_21810_21918 = state_21804__$1;
(statearr_21810_21918[(2)] = inst_21788);

(statearr_21810_21918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (6))){
var inst_21790 = (state_21804[(8)]);
var inst_21785 = (state_21804[(7)]);
var inst_21790__$1 = cljs.core.async.chan.call(null,(1));
var inst_21791 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21792 = [inst_21785,inst_21790__$1];
var inst_21793 = (new cljs.core.PersistentVector(null,2,(5),inst_21791,inst_21792,null));
var state_21804__$1 = (function (){var statearr_21811 = state_21804;
(statearr_21811[(8)] = inst_21790__$1);

return statearr_21811;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21804__$1,(8),jobs,inst_21793);
} else {
if((state_val_21805 === (7))){
var inst_21800 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
var statearr_21812_21919 = state_21804__$1;
(statearr_21812_21919[(2)] = inst_21800);

(statearr_21812_21919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (8))){
var inst_21790 = (state_21804[(8)]);
var inst_21795 = (state_21804[(2)]);
var state_21804__$1 = (function (){var statearr_21813 = state_21804;
(statearr_21813[(9)] = inst_21795);

return statearr_21813;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21804__$1,(9),results,inst_21790);
} else {
if((state_val_21805 === (9))){
var inst_21797 = (state_21804[(2)]);
var state_21804__$1 = (function (){var statearr_21814 = state_21804;
(statearr_21814[(10)] = inst_21797);

return statearr_21814;
})();
var statearr_21815_21920 = state_21804__$1;
(statearr_21815_21920[(2)] = null);

(statearr_21815_21920[(1)] = (2));


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
});})(c__21551__auto___21914,jobs,results,process,async))
;
return ((function (switch__21460__auto__,c__21551__auto___21914,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0 = (function (){
var statearr_21816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__);

(statearr_21816[(1)] = (1));

return statearr_21816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1 = (function (state_21804){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_21804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e21817){if((e21817 instanceof Object)){
var ex__21464__auto__ = e21817;
var statearr_21818_21921 = state_21804;
(statearr_21818_21921[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21922 = state_21804;
state_21804 = G__21922;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = function(state_21804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1.call(this,state_21804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___21914,jobs,results,process,async))
})();
var state__21553__auto__ = (function (){var statearr_21819 = f__21552__auto__.call(null);
(statearr_21819[(6)] = c__21551__auto___21914);

return statearr_21819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___21914,jobs,results,process,async))
);


var c__21551__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto__,jobs,results,process,async){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto__,jobs,results,process,async){
return (function (state_21857){
var state_val_21858 = (state_21857[(1)]);
if((state_val_21858 === (7))){
var inst_21853 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21859_21923 = state_21857__$1;
(statearr_21859_21923[(2)] = inst_21853);

(statearr_21859_21923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (20))){
var state_21857__$1 = state_21857;
var statearr_21860_21924 = state_21857__$1;
(statearr_21860_21924[(2)] = null);

(statearr_21860_21924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (1))){
var state_21857__$1 = state_21857;
var statearr_21861_21925 = state_21857__$1;
(statearr_21861_21925[(2)] = null);

(statearr_21861_21925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (4))){
var inst_21822 = (state_21857[(7)]);
var inst_21822__$1 = (state_21857[(2)]);
var inst_21823 = (inst_21822__$1 == null);
var state_21857__$1 = (function (){var statearr_21862 = state_21857;
(statearr_21862[(7)] = inst_21822__$1);

return statearr_21862;
})();
if(cljs.core.truth_(inst_21823)){
var statearr_21863_21926 = state_21857__$1;
(statearr_21863_21926[(1)] = (5));

} else {
var statearr_21864_21927 = state_21857__$1;
(statearr_21864_21927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (15))){
var inst_21835 = (state_21857[(8)]);
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21857__$1,(18),to,inst_21835);
} else {
if((state_val_21858 === (21))){
var inst_21848 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21865_21928 = state_21857__$1;
(statearr_21865_21928[(2)] = inst_21848);

(statearr_21865_21928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (13))){
var inst_21850 = (state_21857[(2)]);
var state_21857__$1 = (function (){var statearr_21866 = state_21857;
(statearr_21866[(9)] = inst_21850);

return statearr_21866;
})();
var statearr_21867_21929 = state_21857__$1;
(statearr_21867_21929[(2)] = null);

(statearr_21867_21929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (6))){
var inst_21822 = (state_21857[(7)]);
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21857__$1,(11),inst_21822);
} else {
if((state_val_21858 === (17))){
var inst_21843 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
if(cljs.core.truth_(inst_21843)){
var statearr_21868_21930 = state_21857__$1;
(statearr_21868_21930[(1)] = (19));

} else {
var statearr_21869_21931 = state_21857__$1;
(statearr_21869_21931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (3))){
var inst_21855 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21857__$1,inst_21855);
} else {
if((state_val_21858 === (12))){
var inst_21832 = (state_21857[(10)]);
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21857__$1,(14),inst_21832);
} else {
if((state_val_21858 === (2))){
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21857__$1,(4),results);
} else {
if((state_val_21858 === (19))){
var state_21857__$1 = state_21857;
var statearr_21870_21932 = state_21857__$1;
(statearr_21870_21932[(2)] = null);

(statearr_21870_21932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (11))){
var inst_21832 = (state_21857[(2)]);
var state_21857__$1 = (function (){var statearr_21871 = state_21857;
(statearr_21871[(10)] = inst_21832);

return statearr_21871;
})();
var statearr_21872_21933 = state_21857__$1;
(statearr_21872_21933[(2)] = null);

(statearr_21872_21933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (9))){
var state_21857__$1 = state_21857;
var statearr_21873_21934 = state_21857__$1;
(statearr_21873_21934[(2)] = null);

(statearr_21873_21934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (5))){
var state_21857__$1 = state_21857;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21874_21935 = state_21857__$1;
(statearr_21874_21935[(1)] = (8));

} else {
var statearr_21875_21936 = state_21857__$1;
(statearr_21875_21936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (14))){
var inst_21835 = (state_21857[(8)]);
var inst_21837 = (state_21857[(11)]);
var inst_21835__$1 = (state_21857[(2)]);
var inst_21836 = (inst_21835__$1 == null);
var inst_21837__$1 = cljs.core.not.call(null,inst_21836);
var state_21857__$1 = (function (){var statearr_21876 = state_21857;
(statearr_21876[(8)] = inst_21835__$1);

(statearr_21876[(11)] = inst_21837__$1);

return statearr_21876;
})();
if(inst_21837__$1){
var statearr_21877_21937 = state_21857__$1;
(statearr_21877_21937[(1)] = (15));

} else {
var statearr_21878_21938 = state_21857__$1;
(statearr_21878_21938[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (16))){
var inst_21837 = (state_21857[(11)]);
var state_21857__$1 = state_21857;
var statearr_21879_21939 = state_21857__$1;
(statearr_21879_21939[(2)] = inst_21837);

(statearr_21879_21939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (10))){
var inst_21829 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21880_21940 = state_21857__$1;
(statearr_21880_21940[(2)] = inst_21829);

(statearr_21880_21940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (18))){
var inst_21840 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21881_21941 = state_21857__$1;
(statearr_21881_21941[(2)] = inst_21840);

(statearr_21881_21941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (8))){
var inst_21826 = cljs.core.async.close_BANG_.call(null,to);
var state_21857__$1 = state_21857;
var statearr_21882_21942 = state_21857__$1;
(statearr_21882_21942[(2)] = inst_21826);

(statearr_21882_21942[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__21551__auto__,jobs,results,process,async))
;
return ((function (switch__21460__auto__,c__21551__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0 = (function (){
var statearr_21883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__);

(statearr_21883[(1)] = (1));

return statearr_21883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1 = (function (state_21857){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_21857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e21884){if((e21884 instanceof Object)){
var ex__21464__auto__ = e21884;
var statearr_21885_21943 = state_21857;
(statearr_21885_21943[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21944 = state_21857;
state_21857 = G__21944;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__ = function(state_21857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1.call(this,state_21857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto__,jobs,results,process,async))
})();
var state__21553__auto__ = (function (){var statearr_21886 = f__21552__auto__.call(null);
(statearr_21886[(6)] = c__21551__auto__);

return statearr_21886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto__,jobs,results,process,async))
);

return c__21551__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21946 = arguments.length;
switch (G__21946) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21949 = arguments.length;
switch (G__21949) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21952 = arguments.length;
switch (G__21952) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21551__auto___22001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___22001,tc,fc){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___22001,tc,fc){
return (function (state_21978){
var state_val_21979 = (state_21978[(1)]);
if((state_val_21979 === (7))){
var inst_21974 = (state_21978[(2)]);
var state_21978__$1 = state_21978;
var statearr_21980_22002 = state_21978__$1;
(statearr_21980_22002[(2)] = inst_21974);

(statearr_21980_22002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (1))){
var state_21978__$1 = state_21978;
var statearr_21981_22003 = state_21978__$1;
(statearr_21981_22003[(2)] = null);

(statearr_21981_22003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (4))){
var inst_21955 = (state_21978[(7)]);
var inst_21955__$1 = (state_21978[(2)]);
var inst_21956 = (inst_21955__$1 == null);
var state_21978__$1 = (function (){var statearr_21982 = state_21978;
(statearr_21982[(7)] = inst_21955__$1);

return statearr_21982;
})();
if(cljs.core.truth_(inst_21956)){
var statearr_21983_22004 = state_21978__$1;
(statearr_21983_22004[(1)] = (5));

} else {
var statearr_21984_22005 = state_21978__$1;
(statearr_21984_22005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (13))){
var state_21978__$1 = state_21978;
var statearr_21985_22006 = state_21978__$1;
(statearr_21985_22006[(2)] = null);

(statearr_21985_22006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (6))){
var inst_21955 = (state_21978[(7)]);
var inst_21961 = p.call(null,inst_21955);
var state_21978__$1 = state_21978;
if(cljs.core.truth_(inst_21961)){
var statearr_21986_22007 = state_21978__$1;
(statearr_21986_22007[(1)] = (9));

} else {
var statearr_21987_22008 = state_21978__$1;
(statearr_21987_22008[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (3))){
var inst_21976 = (state_21978[(2)]);
var state_21978__$1 = state_21978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21978__$1,inst_21976);
} else {
if((state_val_21979 === (12))){
var state_21978__$1 = state_21978;
var statearr_21988_22009 = state_21978__$1;
(statearr_21988_22009[(2)] = null);

(statearr_21988_22009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (2))){
var state_21978__$1 = state_21978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21978__$1,(4),ch);
} else {
if((state_val_21979 === (11))){
var inst_21955 = (state_21978[(7)]);
var inst_21965 = (state_21978[(2)]);
var state_21978__$1 = state_21978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21978__$1,(8),inst_21965,inst_21955);
} else {
if((state_val_21979 === (9))){
var state_21978__$1 = state_21978;
var statearr_21989_22010 = state_21978__$1;
(statearr_21989_22010[(2)] = tc);

(statearr_21989_22010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (5))){
var inst_21958 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21959 = cljs.core.async.close_BANG_.call(null,fc);
var state_21978__$1 = (function (){var statearr_21990 = state_21978;
(statearr_21990[(8)] = inst_21958);

return statearr_21990;
})();
var statearr_21991_22011 = state_21978__$1;
(statearr_21991_22011[(2)] = inst_21959);

(statearr_21991_22011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (14))){
var inst_21972 = (state_21978[(2)]);
var state_21978__$1 = state_21978;
var statearr_21992_22012 = state_21978__$1;
(statearr_21992_22012[(2)] = inst_21972);

(statearr_21992_22012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (10))){
var state_21978__$1 = state_21978;
var statearr_21993_22013 = state_21978__$1;
(statearr_21993_22013[(2)] = fc);

(statearr_21993_22013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (8))){
var inst_21967 = (state_21978[(2)]);
var state_21978__$1 = state_21978;
if(cljs.core.truth_(inst_21967)){
var statearr_21994_22014 = state_21978__$1;
(statearr_21994_22014[(1)] = (12));

} else {
var statearr_21995_22015 = state_21978__$1;
(statearr_21995_22015[(1)] = (13));

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
});})(c__21551__auto___22001,tc,fc))
;
return ((function (switch__21460__auto__,c__21551__auto___22001,tc,fc){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_21996 = [null,null,null,null,null,null,null,null,null];
(statearr_21996[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_21996[(1)] = (1));

return statearr_21996;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_21978){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_21978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e21997){if((e21997 instanceof Object)){
var ex__21464__auto__ = e21997;
var statearr_21998_22016 = state_21978;
(statearr_21998_22016[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22017 = state_21978;
state_21978 = G__22017;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_21978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_21978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___22001,tc,fc))
})();
var state__21553__auto__ = (function (){var statearr_21999 = f__21552__auto__.call(null);
(statearr_21999[(6)] = c__21551__auto___22001);

return statearr_21999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___22001,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21551__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto__){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto__){
return (function (state_22038){
var state_val_22039 = (state_22038[(1)]);
if((state_val_22039 === (7))){
var inst_22034 = (state_22038[(2)]);
var state_22038__$1 = state_22038;
var statearr_22040_22058 = state_22038__$1;
(statearr_22040_22058[(2)] = inst_22034);

(statearr_22040_22058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (1))){
var inst_22018 = init;
var state_22038__$1 = (function (){var statearr_22041 = state_22038;
(statearr_22041[(7)] = inst_22018);

return statearr_22041;
})();
var statearr_22042_22059 = state_22038__$1;
(statearr_22042_22059[(2)] = null);

(statearr_22042_22059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (4))){
var inst_22021 = (state_22038[(8)]);
var inst_22021__$1 = (state_22038[(2)]);
var inst_22022 = (inst_22021__$1 == null);
var state_22038__$1 = (function (){var statearr_22043 = state_22038;
(statearr_22043[(8)] = inst_22021__$1);

return statearr_22043;
})();
if(cljs.core.truth_(inst_22022)){
var statearr_22044_22060 = state_22038__$1;
(statearr_22044_22060[(1)] = (5));

} else {
var statearr_22045_22061 = state_22038__$1;
(statearr_22045_22061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (6))){
var inst_22018 = (state_22038[(7)]);
var inst_22025 = (state_22038[(9)]);
var inst_22021 = (state_22038[(8)]);
var inst_22025__$1 = f.call(null,inst_22018,inst_22021);
var inst_22026 = cljs.core.reduced_QMARK_.call(null,inst_22025__$1);
var state_22038__$1 = (function (){var statearr_22046 = state_22038;
(statearr_22046[(9)] = inst_22025__$1);

return statearr_22046;
})();
if(inst_22026){
var statearr_22047_22062 = state_22038__$1;
(statearr_22047_22062[(1)] = (8));

} else {
var statearr_22048_22063 = state_22038__$1;
(statearr_22048_22063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (3))){
var inst_22036 = (state_22038[(2)]);
var state_22038__$1 = state_22038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22038__$1,inst_22036);
} else {
if((state_val_22039 === (2))){
var state_22038__$1 = state_22038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22038__$1,(4),ch);
} else {
if((state_val_22039 === (9))){
var inst_22025 = (state_22038[(9)]);
var inst_22018 = inst_22025;
var state_22038__$1 = (function (){var statearr_22049 = state_22038;
(statearr_22049[(7)] = inst_22018);

return statearr_22049;
})();
var statearr_22050_22064 = state_22038__$1;
(statearr_22050_22064[(2)] = null);

(statearr_22050_22064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (5))){
var inst_22018 = (state_22038[(7)]);
var state_22038__$1 = state_22038;
var statearr_22051_22065 = state_22038__$1;
(statearr_22051_22065[(2)] = inst_22018);

(statearr_22051_22065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (10))){
var inst_22032 = (state_22038[(2)]);
var state_22038__$1 = state_22038;
var statearr_22052_22066 = state_22038__$1;
(statearr_22052_22066[(2)] = inst_22032);

(statearr_22052_22066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (8))){
var inst_22025 = (state_22038[(9)]);
var inst_22028 = cljs.core.deref.call(null,inst_22025);
var state_22038__$1 = state_22038;
var statearr_22053_22067 = state_22038__$1;
(statearr_22053_22067[(2)] = inst_22028);

(statearr_22053_22067[(1)] = (10));


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
});})(c__21551__auto__))
;
return ((function (switch__21460__auto__,c__21551__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21461__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21461__auto____0 = (function (){
var statearr_22054 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22054[(0)] = cljs$core$async$reduce_$_state_machine__21461__auto__);

(statearr_22054[(1)] = (1));

return statearr_22054;
});
var cljs$core$async$reduce_$_state_machine__21461__auto____1 = (function (state_22038){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_22038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e22055){if((e22055 instanceof Object)){
var ex__21464__auto__ = e22055;
var statearr_22056_22068 = state_22038;
(statearr_22056_22068[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22069 = state_22038;
state_22038 = G__22069;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21461__auto__ = function(state_22038){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21461__auto____1.call(this,state_22038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21461__auto____0;
cljs$core$async$reduce_$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21461__auto____1;
return cljs$core$async$reduce_$_state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto__))
})();
var state__21553__auto__ = (function (){var statearr_22057 = f__21552__auto__.call(null);
(statearr_22057[(6)] = c__21551__auto__);

return statearr_22057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto__))
);

return c__21551__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21551__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto__,f__$1){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto__,f__$1){
return (function (state_22075){
var state_val_22076 = (state_22075[(1)]);
if((state_val_22076 === (1))){
var inst_22070 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22075__$1 = state_22075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22075__$1,(2),inst_22070);
} else {
if((state_val_22076 === (2))){
var inst_22072 = (state_22075[(2)]);
var inst_22073 = f__$1.call(null,inst_22072);
var state_22075__$1 = state_22075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22075__$1,inst_22073);
} else {
return null;
}
}
});})(c__21551__auto__,f__$1))
;
return ((function (switch__21460__auto__,c__21551__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21461__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21461__auto____0 = (function (){
var statearr_22077 = [null,null,null,null,null,null,null];
(statearr_22077[(0)] = cljs$core$async$transduce_$_state_machine__21461__auto__);

(statearr_22077[(1)] = (1));

return statearr_22077;
});
var cljs$core$async$transduce_$_state_machine__21461__auto____1 = (function (state_22075){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_22075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e22078){if((e22078 instanceof Object)){
var ex__21464__auto__ = e22078;
var statearr_22079_22081 = state_22075;
(statearr_22079_22081[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22082 = state_22075;
state_22075 = G__22082;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21461__auto__ = function(state_22075){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21461__auto____1.call(this,state_22075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21461__auto____0;
cljs$core$async$transduce_$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21461__auto____1;
return cljs$core$async$transduce_$_state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto__,f__$1))
})();
var state__21553__auto__ = (function (){var statearr_22080 = f__21552__auto__.call(null);
(statearr_22080[(6)] = c__21551__auto__);

return statearr_22080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto__,f__$1))
);

return c__21551__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__22084 = arguments.length;
switch (G__22084) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21551__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto__){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto__){
return (function (state_22109){
var state_val_22110 = (state_22109[(1)]);
if((state_val_22110 === (7))){
var inst_22091 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
var statearr_22111_22132 = state_22109__$1;
(statearr_22111_22132[(2)] = inst_22091);

(statearr_22111_22132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (1))){
var inst_22085 = cljs.core.seq.call(null,coll);
var inst_22086 = inst_22085;
var state_22109__$1 = (function (){var statearr_22112 = state_22109;
(statearr_22112[(7)] = inst_22086);

return statearr_22112;
})();
var statearr_22113_22133 = state_22109__$1;
(statearr_22113_22133[(2)] = null);

(statearr_22113_22133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (4))){
var inst_22086 = (state_22109[(7)]);
var inst_22089 = cljs.core.first.call(null,inst_22086);
var state_22109__$1 = state_22109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22109__$1,(7),ch,inst_22089);
} else {
if((state_val_22110 === (13))){
var inst_22103 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
var statearr_22114_22134 = state_22109__$1;
(statearr_22114_22134[(2)] = inst_22103);

(statearr_22114_22134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (6))){
var inst_22094 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
if(cljs.core.truth_(inst_22094)){
var statearr_22115_22135 = state_22109__$1;
(statearr_22115_22135[(1)] = (8));

} else {
var statearr_22116_22136 = state_22109__$1;
(statearr_22116_22136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (3))){
var inst_22107 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22109__$1,inst_22107);
} else {
if((state_val_22110 === (12))){
var state_22109__$1 = state_22109;
var statearr_22117_22137 = state_22109__$1;
(statearr_22117_22137[(2)] = null);

(statearr_22117_22137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (2))){
var inst_22086 = (state_22109[(7)]);
var state_22109__$1 = state_22109;
if(cljs.core.truth_(inst_22086)){
var statearr_22118_22138 = state_22109__$1;
(statearr_22118_22138[(1)] = (4));

} else {
var statearr_22119_22139 = state_22109__$1;
(statearr_22119_22139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (11))){
var inst_22100 = cljs.core.async.close_BANG_.call(null,ch);
var state_22109__$1 = state_22109;
var statearr_22120_22140 = state_22109__$1;
(statearr_22120_22140[(2)] = inst_22100);

(statearr_22120_22140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (9))){
var state_22109__$1 = state_22109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22121_22141 = state_22109__$1;
(statearr_22121_22141[(1)] = (11));

} else {
var statearr_22122_22142 = state_22109__$1;
(statearr_22122_22142[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (5))){
var inst_22086 = (state_22109[(7)]);
var state_22109__$1 = state_22109;
var statearr_22123_22143 = state_22109__$1;
(statearr_22123_22143[(2)] = inst_22086);

(statearr_22123_22143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (10))){
var inst_22105 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
var statearr_22124_22144 = state_22109__$1;
(statearr_22124_22144[(2)] = inst_22105);

(statearr_22124_22144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (8))){
var inst_22086 = (state_22109[(7)]);
var inst_22096 = cljs.core.next.call(null,inst_22086);
var inst_22086__$1 = inst_22096;
var state_22109__$1 = (function (){var statearr_22125 = state_22109;
(statearr_22125[(7)] = inst_22086__$1);

return statearr_22125;
})();
var statearr_22126_22145 = state_22109__$1;
(statearr_22126_22145[(2)] = null);

(statearr_22126_22145[(1)] = (2));


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
});})(c__21551__auto__))
;
return ((function (switch__21460__auto__,c__21551__auto__){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_22127 = [null,null,null,null,null,null,null,null];
(statearr_22127[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_22127[(1)] = (1));

return statearr_22127;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_22109){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_22109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e22128){if((e22128 instanceof Object)){
var ex__21464__auto__ = e22128;
var statearr_22129_22146 = state_22109;
(statearr_22129_22146[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22147 = state_22109;
state_22109 = G__22147;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_22109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_22109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto__))
})();
var state__21553__auto__ = (function (){var statearr_22130 = f__21552__auto__.call(null);
(statearr_22130[(6)] = c__21551__auto__);

return statearr_22130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto__))
);

return c__21551__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22148 = (function (ch,cs,meta22149){
this.ch = ch;
this.cs = cs;
this.meta22149 = meta22149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22150,meta22149__$1){
var self__ = this;
var _22150__$1 = this;
return (new cljs.core.async.t_cljs$core$async22148(self__.ch,self__.cs,meta22149__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22150){
var self__ = this;
var _22150__$1 = this;
return self__.meta22149;
});})(cs))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22148.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22148.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22149","meta22149",796443214,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22148";

cljs.core.async.t_cljs$core$async22148.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22148");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22148.
 */
cljs.core.async.__GT_t_cljs$core$async22148 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22148(ch__$1,cs__$1,meta22149){
return (new cljs.core.async.t_cljs$core$async22148(ch__$1,cs__$1,meta22149));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22148(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21551__auto___22370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___22370,cs,m,dchan,dctr,done){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___22370,cs,m,dchan,dctr,done){
return (function (state_22285){
var state_val_22286 = (state_22285[(1)]);
if((state_val_22286 === (7))){
var inst_22281 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22287_22371 = state_22285__$1;
(statearr_22287_22371[(2)] = inst_22281);

(statearr_22287_22371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (20))){
var inst_22184 = (state_22285[(7)]);
var inst_22196 = cljs.core.first.call(null,inst_22184);
var inst_22197 = cljs.core.nth.call(null,inst_22196,(0),null);
var inst_22198 = cljs.core.nth.call(null,inst_22196,(1),null);
var state_22285__$1 = (function (){var statearr_22288 = state_22285;
(statearr_22288[(8)] = inst_22197);

return statearr_22288;
})();
if(cljs.core.truth_(inst_22198)){
var statearr_22289_22372 = state_22285__$1;
(statearr_22289_22372[(1)] = (22));

} else {
var statearr_22290_22373 = state_22285__$1;
(statearr_22290_22373[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (27))){
var inst_22228 = (state_22285[(9)]);
var inst_22233 = (state_22285[(10)]);
var inst_22226 = (state_22285[(11)]);
var inst_22153 = (state_22285[(12)]);
var inst_22233__$1 = cljs.core._nth.call(null,inst_22226,inst_22228);
var inst_22234 = cljs.core.async.put_BANG_.call(null,inst_22233__$1,inst_22153,done);
var state_22285__$1 = (function (){var statearr_22291 = state_22285;
(statearr_22291[(10)] = inst_22233__$1);

return statearr_22291;
})();
if(cljs.core.truth_(inst_22234)){
var statearr_22292_22374 = state_22285__$1;
(statearr_22292_22374[(1)] = (30));

} else {
var statearr_22293_22375 = state_22285__$1;
(statearr_22293_22375[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (1))){
var state_22285__$1 = state_22285;
var statearr_22294_22376 = state_22285__$1;
(statearr_22294_22376[(2)] = null);

(statearr_22294_22376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (24))){
var inst_22184 = (state_22285[(7)]);
var inst_22203 = (state_22285[(2)]);
var inst_22204 = cljs.core.next.call(null,inst_22184);
var inst_22162 = inst_22204;
var inst_22163 = null;
var inst_22164 = (0);
var inst_22165 = (0);
var state_22285__$1 = (function (){var statearr_22295 = state_22285;
(statearr_22295[(13)] = inst_22164);

(statearr_22295[(14)] = inst_22203);

(statearr_22295[(15)] = inst_22163);

(statearr_22295[(16)] = inst_22162);

(statearr_22295[(17)] = inst_22165);

return statearr_22295;
})();
var statearr_22296_22377 = state_22285__$1;
(statearr_22296_22377[(2)] = null);

(statearr_22296_22377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (39))){
var state_22285__$1 = state_22285;
var statearr_22300_22378 = state_22285__$1;
(statearr_22300_22378[(2)] = null);

(statearr_22300_22378[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (4))){
var inst_22153 = (state_22285[(12)]);
var inst_22153__$1 = (state_22285[(2)]);
var inst_22154 = (inst_22153__$1 == null);
var state_22285__$1 = (function (){var statearr_22301 = state_22285;
(statearr_22301[(12)] = inst_22153__$1);

return statearr_22301;
})();
if(cljs.core.truth_(inst_22154)){
var statearr_22302_22379 = state_22285__$1;
(statearr_22302_22379[(1)] = (5));

} else {
var statearr_22303_22380 = state_22285__$1;
(statearr_22303_22380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (15))){
var inst_22164 = (state_22285[(13)]);
var inst_22163 = (state_22285[(15)]);
var inst_22162 = (state_22285[(16)]);
var inst_22165 = (state_22285[(17)]);
var inst_22180 = (state_22285[(2)]);
var inst_22181 = (inst_22165 + (1));
var tmp22297 = inst_22164;
var tmp22298 = inst_22163;
var tmp22299 = inst_22162;
var inst_22162__$1 = tmp22299;
var inst_22163__$1 = tmp22298;
var inst_22164__$1 = tmp22297;
var inst_22165__$1 = inst_22181;
var state_22285__$1 = (function (){var statearr_22304 = state_22285;
(statearr_22304[(13)] = inst_22164__$1);

(statearr_22304[(18)] = inst_22180);

(statearr_22304[(15)] = inst_22163__$1);

(statearr_22304[(16)] = inst_22162__$1);

(statearr_22304[(17)] = inst_22165__$1);

return statearr_22304;
})();
var statearr_22305_22381 = state_22285__$1;
(statearr_22305_22381[(2)] = null);

(statearr_22305_22381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (21))){
var inst_22207 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22309_22382 = state_22285__$1;
(statearr_22309_22382[(2)] = inst_22207);

(statearr_22309_22382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (31))){
var inst_22233 = (state_22285[(10)]);
var inst_22237 = done.call(null,null);
var inst_22238 = cljs.core.async.untap_STAR_.call(null,m,inst_22233);
var state_22285__$1 = (function (){var statearr_22310 = state_22285;
(statearr_22310[(19)] = inst_22237);

return statearr_22310;
})();
var statearr_22311_22383 = state_22285__$1;
(statearr_22311_22383[(2)] = inst_22238);

(statearr_22311_22383[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (32))){
var inst_22227 = (state_22285[(20)]);
var inst_22228 = (state_22285[(9)]);
var inst_22225 = (state_22285[(21)]);
var inst_22226 = (state_22285[(11)]);
var inst_22240 = (state_22285[(2)]);
var inst_22241 = (inst_22228 + (1));
var tmp22306 = inst_22227;
var tmp22307 = inst_22225;
var tmp22308 = inst_22226;
var inst_22225__$1 = tmp22307;
var inst_22226__$1 = tmp22308;
var inst_22227__$1 = tmp22306;
var inst_22228__$1 = inst_22241;
var state_22285__$1 = (function (){var statearr_22312 = state_22285;
(statearr_22312[(20)] = inst_22227__$1);

(statearr_22312[(9)] = inst_22228__$1);

(statearr_22312[(22)] = inst_22240);

(statearr_22312[(21)] = inst_22225__$1);

(statearr_22312[(11)] = inst_22226__$1);

return statearr_22312;
})();
var statearr_22313_22384 = state_22285__$1;
(statearr_22313_22384[(2)] = null);

(statearr_22313_22384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (40))){
var inst_22253 = (state_22285[(23)]);
var inst_22257 = done.call(null,null);
var inst_22258 = cljs.core.async.untap_STAR_.call(null,m,inst_22253);
var state_22285__$1 = (function (){var statearr_22314 = state_22285;
(statearr_22314[(24)] = inst_22257);

return statearr_22314;
})();
var statearr_22315_22385 = state_22285__$1;
(statearr_22315_22385[(2)] = inst_22258);

(statearr_22315_22385[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (33))){
var inst_22244 = (state_22285[(25)]);
var inst_22246 = cljs.core.chunked_seq_QMARK_.call(null,inst_22244);
var state_22285__$1 = state_22285;
if(inst_22246){
var statearr_22316_22386 = state_22285__$1;
(statearr_22316_22386[(1)] = (36));

} else {
var statearr_22317_22387 = state_22285__$1;
(statearr_22317_22387[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (13))){
var inst_22174 = (state_22285[(26)]);
var inst_22177 = cljs.core.async.close_BANG_.call(null,inst_22174);
var state_22285__$1 = state_22285;
var statearr_22318_22388 = state_22285__$1;
(statearr_22318_22388[(2)] = inst_22177);

(statearr_22318_22388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (22))){
var inst_22197 = (state_22285[(8)]);
var inst_22200 = cljs.core.async.close_BANG_.call(null,inst_22197);
var state_22285__$1 = state_22285;
var statearr_22319_22389 = state_22285__$1;
(statearr_22319_22389[(2)] = inst_22200);

(statearr_22319_22389[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (36))){
var inst_22244 = (state_22285[(25)]);
var inst_22248 = cljs.core.chunk_first.call(null,inst_22244);
var inst_22249 = cljs.core.chunk_rest.call(null,inst_22244);
var inst_22250 = cljs.core.count.call(null,inst_22248);
var inst_22225 = inst_22249;
var inst_22226 = inst_22248;
var inst_22227 = inst_22250;
var inst_22228 = (0);
var state_22285__$1 = (function (){var statearr_22320 = state_22285;
(statearr_22320[(20)] = inst_22227);

(statearr_22320[(9)] = inst_22228);

(statearr_22320[(21)] = inst_22225);

(statearr_22320[(11)] = inst_22226);

return statearr_22320;
})();
var statearr_22321_22390 = state_22285__$1;
(statearr_22321_22390[(2)] = null);

(statearr_22321_22390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (41))){
var inst_22244 = (state_22285[(25)]);
var inst_22260 = (state_22285[(2)]);
var inst_22261 = cljs.core.next.call(null,inst_22244);
var inst_22225 = inst_22261;
var inst_22226 = null;
var inst_22227 = (0);
var inst_22228 = (0);
var state_22285__$1 = (function (){var statearr_22322 = state_22285;
(statearr_22322[(20)] = inst_22227);

(statearr_22322[(27)] = inst_22260);

(statearr_22322[(9)] = inst_22228);

(statearr_22322[(21)] = inst_22225);

(statearr_22322[(11)] = inst_22226);

return statearr_22322;
})();
var statearr_22323_22391 = state_22285__$1;
(statearr_22323_22391[(2)] = null);

(statearr_22323_22391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (43))){
var state_22285__$1 = state_22285;
var statearr_22324_22392 = state_22285__$1;
(statearr_22324_22392[(2)] = null);

(statearr_22324_22392[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (29))){
var inst_22269 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22325_22393 = state_22285__$1;
(statearr_22325_22393[(2)] = inst_22269);

(statearr_22325_22393[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (44))){
var inst_22278 = (state_22285[(2)]);
var state_22285__$1 = (function (){var statearr_22326 = state_22285;
(statearr_22326[(28)] = inst_22278);

return statearr_22326;
})();
var statearr_22327_22394 = state_22285__$1;
(statearr_22327_22394[(2)] = null);

(statearr_22327_22394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (6))){
var inst_22217 = (state_22285[(29)]);
var inst_22216 = cljs.core.deref.call(null,cs);
var inst_22217__$1 = cljs.core.keys.call(null,inst_22216);
var inst_22218 = cljs.core.count.call(null,inst_22217__$1);
var inst_22219 = cljs.core.reset_BANG_.call(null,dctr,inst_22218);
var inst_22224 = cljs.core.seq.call(null,inst_22217__$1);
var inst_22225 = inst_22224;
var inst_22226 = null;
var inst_22227 = (0);
var inst_22228 = (0);
var state_22285__$1 = (function (){var statearr_22328 = state_22285;
(statearr_22328[(20)] = inst_22227);

(statearr_22328[(9)] = inst_22228);

(statearr_22328[(30)] = inst_22219);

(statearr_22328[(21)] = inst_22225);

(statearr_22328[(11)] = inst_22226);

(statearr_22328[(29)] = inst_22217__$1);

return statearr_22328;
})();
var statearr_22329_22395 = state_22285__$1;
(statearr_22329_22395[(2)] = null);

(statearr_22329_22395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (28))){
var inst_22225 = (state_22285[(21)]);
var inst_22244 = (state_22285[(25)]);
var inst_22244__$1 = cljs.core.seq.call(null,inst_22225);
var state_22285__$1 = (function (){var statearr_22330 = state_22285;
(statearr_22330[(25)] = inst_22244__$1);

return statearr_22330;
})();
if(inst_22244__$1){
var statearr_22331_22396 = state_22285__$1;
(statearr_22331_22396[(1)] = (33));

} else {
var statearr_22332_22397 = state_22285__$1;
(statearr_22332_22397[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (25))){
var inst_22227 = (state_22285[(20)]);
var inst_22228 = (state_22285[(9)]);
var inst_22230 = (inst_22228 < inst_22227);
var inst_22231 = inst_22230;
var state_22285__$1 = state_22285;
if(cljs.core.truth_(inst_22231)){
var statearr_22333_22398 = state_22285__$1;
(statearr_22333_22398[(1)] = (27));

} else {
var statearr_22334_22399 = state_22285__$1;
(statearr_22334_22399[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (34))){
var state_22285__$1 = state_22285;
var statearr_22335_22400 = state_22285__$1;
(statearr_22335_22400[(2)] = null);

(statearr_22335_22400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (17))){
var state_22285__$1 = state_22285;
var statearr_22336_22401 = state_22285__$1;
(statearr_22336_22401[(2)] = null);

(statearr_22336_22401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (3))){
var inst_22283 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22285__$1,inst_22283);
} else {
if((state_val_22286 === (12))){
var inst_22212 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22337_22402 = state_22285__$1;
(statearr_22337_22402[(2)] = inst_22212);

(statearr_22337_22402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (2))){
var state_22285__$1 = state_22285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22285__$1,(4),ch);
} else {
if((state_val_22286 === (23))){
var state_22285__$1 = state_22285;
var statearr_22338_22403 = state_22285__$1;
(statearr_22338_22403[(2)] = null);

(statearr_22338_22403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (35))){
var inst_22267 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22339_22404 = state_22285__$1;
(statearr_22339_22404[(2)] = inst_22267);

(statearr_22339_22404[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (19))){
var inst_22184 = (state_22285[(7)]);
var inst_22188 = cljs.core.chunk_first.call(null,inst_22184);
var inst_22189 = cljs.core.chunk_rest.call(null,inst_22184);
var inst_22190 = cljs.core.count.call(null,inst_22188);
var inst_22162 = inst_22189;
var inst_22163 = inst_22188;
var inst_22164 = inst_22190;
var inst_22165 = (0);
var state_22285__$1 = (function (){var statearr_22340 = state_22285;
(statearr_22340[(13)] = inst_22164);

(statearr_22340[(15)] = inst_22163);

(statearr_22340[(16)] = inst_22162);

(statearr_22340[(17)] = inst_22165);

return statearr_22340;
})();
var statearr_22341_22405 = state_22285__$1;
(statearr_22341_22405[(2)] = null);

(statearr_22341_22405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (11))){
var inst_22184 = (state_22285[(7)]);
var inst_22162 = (state_22285[(16)]);
var inst_22184__$1 = cljs.core.seq.call(null,inst_22162);
var state_22285__$1 = (function (){var statearr_22342 = state_22285;
(statearr_22342[(7)] = inst_22184__$1);

return statearr_22342;
})();
if(inst_22184__$1){
var statearr_22343_22406 = state_22285__$1;
(statearr_22343_22406[(1)] = (16));

} else {
var statearr_22344_22407 = state_22285__$1;
(statearr_22344_22407[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (9))){
var inst_22214 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22345_22408 = state_22285__$1;
(statearr_22345_22408[(2)] = inst_22214);

(statearr_22345_22408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (5))){
var inst_22160 = cljs.core.deref.call(null,cs);
var inst_22161 = cljs.core.seq.call(null,inst_22160);
var inst_22162 = inst_22161;
var inst_22163 = null;
var inst_22164 = (0);
var inst_22165 = (0);
var state_22285__$1 = (function (){var statearr_22346 = state_22285;
(statearr_22346[(13)] = inst_22164);

(statearr_22346[(15)] = inst_22163);

(statearr_22346[(16)] = inst_22162);

(statearr_22346[(17)] = inst_22165);

return statearr_22346;
})();
var statearr_22347_22409 = state_22285__$1;
(statearr_22347_22409[(2)] = null);

(statearr_22347_22409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (14))){
var state_22285__$1 = state_22285;
var statearr_22348_22410 = state_22285__$1;
(statearr_22348_22410[(2)] = null);

(statearr_22348_22410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (45))){
var inst_22275 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22349_22411 = state_22285__$1;
(statearr_22349_22411[(2)] = inst_22275);

(statearr_22349_22411[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (26))){
var inst_22217 = (state_22285[(29)]);
var inst_22271 = (state_22285[(2)]);
var inst_22272 = cljs.core.seq.call(null,inst_22217);
var state_22285__$1 = (function (){var statearr_22350 = state_22285;
(statearr_22350[(31)] = inst_22271);

return statearr_22350;
})();
if(inst_22272){
var statearr_22351_22412 = state_22285__$1;
(statearr_22351_22412[(1)] = (42));

} else {
var statearr_22352_22413 = state_22285__$1;
(statearr_22352_22413[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (16))){
var inst_22184 = (state_22285[(7)]);
var inst_22186 = cljs.core.chunked_seq_QMARK_.call(null,inst_22184);
var state_22285__$1 = state_22285;
if(inst_22186){
var statearr_22353_22414 = state_22285__$1;
(statearr_22353_22414[(1)] = (19));

} else {
var statearr_22354_22415 = state_22285__$1;
(statearr_22354_22415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (38))){
var inst_22264 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22355_22416 = state_22285__$1;
(statearr_22355_22416[(2)] = inst_22264);

(statearr_22355_22416[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (30))){
var state_22285__$1 = state_22285;
var statearr_22356_22417 = state_22285__$1;
(statearr_22356_22417[(2)] = null);

(statearr_22356_22417[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (10))){
var inst_22163 = (state_22285[(15)]);
var inst_22165 = (state_22285[(17)]);
var inst_22173 = cljs.core._nth.call(null,inst_22163,inst_22165);
var inst_22174 = cljs.core.nth.call(null,inst_22173,(0),null);
var inst_22175 = cljs.core.nth.call(null,inst_22173,(1),null);
var state_22285__$1 = (function (){var statearr_22357 = state_22285;
(statearr_22357[(26)] = inst_22174);

return statearr_22357;
})();
if(cljs.core.truth_(inst_22175)){
var statearr_22358_22418 = state_22285__$1;
(statearr_22358_22418[(1)] = (13));

} else {
var statearr_22359_22419 = state_22285__$1;
(statearr_22359_22419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (18))){
var inst_22210 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22360_22420 = state_22285__$1;
(statearr_22360_22420[(2)] = inst_22210);

(statearr_22360_22420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (42))){
var state_22285__$1 = state_22285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22285__$1,(45),dchan);
} else {
if((state_val_22286 === (37))){
var inst_22244 = (state_22285[(25)]);
var inst_22153 = (state_22285[(12)]);
var inst_22253 = (state_22285[(23)]);
var inst_22253__$1 = cljs.core.first.call(null,inst_22244);
var inst_22254 = cljs.core.async.put_BANG_.call(null,inst_22253__$1,inst_22153,done);
var state_22285__$1 = (function (){var statearr_22361 = state_22285;
(statearr_22361[(23)] = inst_22253__$1);

return statearr_22361;
})();
if(cljs.core.truth_(inst_22254)){
var statearr_22362_22421 = state_22285__$1;
(statearr_22362_22421[(1)] = (39));

} else {
var statearr_22363_22422 = state_22285__$1;
(statearr_22363_22422[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (8))){
var inst_22164 = (state_22285[(13)]);
var inst_22165 = (state_22285[(17)]);
var inst_22167 = (inst_22165 < inst_22164);
var inst_22168 = inst_22167;
var state_22285__$1 = state_22285;
if(cljs.core.truth_(inst_22168)){
var statearr_22364_22423 = state_22285__$1;
(statearr_22364_22423[(1)] = (10));

} else {
var statearr_22365_22424 = state_22285__$1;
(statearr_22365_22424[(1)] = (11));

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
}
}
}
});})(c__21551__auto___22370,cs,m,dchan,dctr,done))
;
return ((function (switch__21460__auto__,c__21551__auto___22370,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21461__auto__ = null;
var cljs$core$async$mult_$_state_machine__21461__auto____0 = (function (){
var statearr_22366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22366[(0)] = cljs$core$async$mult_$_state_machine__21461__auto__);

(statearr_22366[(1)] = (1));

return statearr_22366;
});
var cljs$core$async$mult_$_state_machine__21461__auto____1 = (function (state_22285){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_22285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e22367){if((e22367 instanceof Object)){
var ex__21464__auto__ = e22367;
var statearr_22368_22425 = state_22285;
(statearr_22368_22425[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22426 = state_22285;
state_22285 = G__22426;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21461__auto__ = function(state_22285){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21461__auto____1.call(this,state_22285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21461__auto____0;
cljs$core$async$mult_$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21461__auto____1;
return cljs$core$async$mult_$_state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___22370,cs,m,dchan,dctr,done))
})();
var state__21553__auto__ = (function (){var statearr_22369 = f__21552__auto__.call(null);
(statearr_22369[(6)] = c__21551__auto___22370);

return statearr_22369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___22370,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22428 = arguments.length;
switch (G__22428) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22440 = arguments.length;
var i__4532__auto___22441 = (0);
while(true){
if((i__4532__auto___22441 < len__4531__auto___22440)){
args__4534__auto__.push((arguments[i__4532__auto___22441]));

var G__22442 = (i__4532__auto___22441 + (1));
i__4532__auto___22441 = G__22442;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22434){
var map__22435 = p__22434;
var map__22435__$1 = ((((!((map__22435 == null)))?(((((map__22435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22435):map__22435);
var opts = map__22435__$1;
var statearr_22437_22443 = state;
(statearr_22437_22443[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__22435,map__22435__$1,opts){
return (function (val){
var statearr_22438_22444 = state;
(statearr_22438_22444[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22435,map__22435__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_22439_22445 = state;
(statearr_22439_22445[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22430){
var G__22431 = cljs.core.first.call(null,seq22430);
var seq22430__$1 = cljs.core.next.call(null,seq22430);
var G__22432 = cljs.core.first.call(null,seq22430__$1);
var seq22430__$2 = cljs.core.next.call(null,seq22430__$1);
var G__22433 = cljs.core.first.call(null,seq22430__$2);
var seq22430__$3 = cljs.core.next.call(null,seq22430__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22431,G__22432,G__22433,seq22430__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22446 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22447){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22447 = meta22447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22448,meta22447__$1){
var self__ = this;
var _22448__$1 = this;
return (new cljs.core.async.t_cljs$core$async22446(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22447__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22448){
var self__ = this;
var _22448__$1 = this;
return self__.meta22447;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22446.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22446.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22447","meta22447",-669680830,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22446";

cljs.core.async.t_cljs$core$async22446.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22446");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22446.
 */
cljs.core.async.__GT_t_cljs$core$async22446 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22446(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22447){
return (new cljs.core.async.t_cljs$core$async22446(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22447));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22446(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21551__auto___22610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___22610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___22610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22550){
var state_val_22551 = (state_22550[(1)]);
if((state_val_22551 === (7))){
var inst_22465 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22552_22611 = state_22550__$1;
(statearr_22552_22611[(2)] = inst_22465);

(statearr_22552_22611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (20))){
var inst_22477 = (state_22550[(7)]);
var state_22550__$1 = state_22550;
var statearr_22553_22612 = state_22550__$1;
(statearr_22553_22612[(2)] = inst_22477);

(statearr_22553_22612[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (27))){
var state_22550__$1 = state_22550;
var statearr_22554_22613 = state_22550__$1;
(statearr_22554_22613[(2)] = null);

(statearr_22554_22613[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (1))){
var inst_22452 = (state_22550[(8)]);
var inst_22452__$1 = calc_state.call(null);
var inst_22454 = (inst_22452__$1 == null);
var inst_22455 = cljs.core.not.call(null,inst_22454);
var state_22550__$1 = (function (){var statearr_22555 = state_22550;
(statearr_22555[(8)] = inst_22452__$1);

return statearr_22555;
})();
if(inst_22455){
var statearr_22556_22614 = state_22550__$1;
(statearr_22556_22614[(1)] = (2));

} else {
var statearr_22557_22615 = state_22550__$1;
(statearr_22557_22615[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (24))){
var inst_22524 = (state_22550[(9)]);
var inst_22510 = (state_22550[(10)]);
var inst_22501 = (state_22550[(11)]);
var inst_22524__$1 = inst_22501.call(null,inst_22510);
var state_22550__$1 = (function (){var statearr_22558 = state_22550;
(statearr_22558[(9)] = inst_22524__$1);

return statearr_22558;
})();
if(cljs.core.truth_(inst_22524__$1)){
var statearr_22559_22616 = state_22550__$1;
(statearr_22559_22616[(1)] = (29));

} else {
var statearr_22560_22617 = state_22550__$1;
(statearr_22560_22617[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (4))){
var inst_22468 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22468)){
var statearr_22561_22618 = state_22550__$1;
(statearr_22561_22618[(1)] = (8));

} else {
var statearr_22562_22619 = state_22550__$1;
(statearr_22562_22619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (15))){
var inst_22495 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22495)){
var statearr_22563_22620 = state_22550__$1;
(statearr_22563_22620[(1)] = (19));

} else {
var statearr_22564_22621 = state_22550__$1;
(statearr_22564_22621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (21))){
var inst_22500 = (state_22550[(12)]);
var inst_22500__$1 = (state_22550[(2)]);
var inst_22501 = cljs.core.get.call(null,inst_22500__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22502 = cljs.core.get.call(null,inst_22500__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22503 = cljs.core.get.call(null,inst_22500__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22550__$1 = (function (){var statearr_22565 = state_22550;
(statearr_22565[(12)] = inst_22500__$1);

(statearr_22565[(13)] = inst_22502);

(statearr_22565[(11)] = inst_22501);

return statearr_22565;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22550__$1,(22),inst_22503);
} else {
if((state_val_22551 === (31))){
var inst_22532 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22532)){
var statearr_22566_22622 = state_22550__$1;
(statearr_22566_22622[(1)] = (32));

} else {
var statearr_22567_22623 = state_22550__$1;
(statearr_22567_22623[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (32))){
var inst_22509 = (state_22550[(14)]);
var state_22550__$1 = state_22550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22550__$1,(35),out,inst_22509);
} else {
if((state_val_22551 === (33))){
var inst_22500 = (state_22550[(12)]);
var inst_22477 = inst_22500;
var state_22550__$1 = (function (){var statearr_22568 = state_22550;
(statearr_22568[(7)] = inst_22477);

return statearr_22568;
})();
var statearr_22569_22624 = state_22550__$1;
(statearr_22569_22624[(2)] = null);

(statearr_22569_22624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (13))){
var inst_22477 = (state_22550[(7)]);
var inst_22484 = inst_22477.cljs$lang$protocol_mask$partition0$;
var inst_22485 = (inst_22484 & (64));
var inst_22486 = inst_22477.cljs$core$ISeq$;
var inst_22487 = (cljs.core.PROTOCOL_SENTINEL === inst_22486);
var inst_22488 = ((inst_22485) || (inst_22487));
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22488)){
var statearr_22570_22625 = state_22550__$1;
(statearr_22570_22625[(1)] = (16));

} else {
var statearr_22571_22626 = state_22550__$1;
(statearr_22571_22626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (22))){
var inst_22510 = (state_22550[(10)]);
var inst_22509 = (state_22550[(14)]);
var inst_22508 = (state_22550[(2)]);
var inst_22509__$1 = cljs.core.nth.call(null,inst_22508,(0),null);
var inst_22510__$1 = cljs.core.nth.call(null,inst_22508,(1),null);
var inst_22511 = (inst_22509__$1 == null);
var inst_22512 = cljs.core._EQ_.call(null,inst_22510__$1,change);
var inst_22513 = ((inst_22511) || (inst_22512));
var state_22550__$1 = (function (){var statearr_22572 = state_22550;
(statearr_22572[(10)] = inst_22510__$1);

(statearr_22572[(14)] = inst_22509__$1);

return statearr_22572;
})();
if(cljs.core.truth_(inst_22513)){
var statearr_22573_22627 = state_22550__$1;
(statearr_22573_22627[(1)] = (23));

} else {
var statearr_22574_22628 = state_22550__$1;
(statearr_22574_22628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (36))){
var inst_22500 = (state_22550[(12)]);
var inst_22477 = inst_22500;
var state_22550__$1 = (function (){var statearr_22575 = state_22550;
(statearr_22575[(7)] = inst_22477);

return statearr_22575;
})();
var statearr_22576_22629 = state_22550__$1;
(statearr_22576_22629[(2)] = null);

(statearr_22576_22629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (29))){
var inst_22524 = (state_22550[(9)]);
var state_22550__$1 = state_22550;
var statearr_22577_22630 = state_22550__$1;
(statearr_22577_22630[(2)] = inst_22524);

(statearr_22577_22630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (6))){
var state_22550__$1 = state_22550;
var statearr_22578_22631 = state_22550__$1;
(statearr_22578_22631[(2)] = false);

(statearr_22578_22631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (28))){
var inst_22520 = (state_22550[(2)]);
var inst_22521 = calc_state.call(null);
var inst_22477 = inst_22521;
var state_22550__$1 = (function (){var statearr_22579 = state_22550;
(statearr_22579[(7)] = inst_22477);

(statearr_22579[(15)] = inst_22520);

return statearr_22579;
})();
var statearr_22580_22632 = state_22550__$1;
(statearr_22580_22632[(2)] = null);

(statearr_22580_22632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (25))){
var inst_22546 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22581_22633 = state_22550__$1;
(statearr_22581_22633[(2)] = inst_22546);

(statearr_22581_22633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (34))){
var inst_22544 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22582_22634 = state_22550__$1;
(statearr_22582_22634[(2)] = inst_22544);

(statearr_22582_22634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (17))){
var state_22550__$1 = state_22550;
var statearr_22583_22635 = state_22550__$1;
(statearr_22583_22635[(2)] = false);

(statearr_22583_22635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (3))){
var state_22550__$1 = state_22550;
var statearr_22584_22636 = state_22550__$1;
(statearr_22584_22636[(2)] = false);

(statearr_22584_22636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (12))){
var inst_22548 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22550__$1,inst_22548);
} else {
if((state_val_22551 === (2))){
var inst_22452 = (state_22550[(8)]);
var inst_22457 = inst_22452.cljs$lang$protocol_mask$partition0$;
var inst_22458 = (inst_22457 & (64));
var inst_22459 = inst_22452.cljs$core$ISeq$;
var inst_22460 = (cljs.core.PROTOCOL_SENTINEL === inst_22459);
var inst_22461 = ((inst_22458) || (inst_22460));
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22461)){
var statearr_22585_22637 = state_22550__$1;
(statearr_22585_22637[(1)] = (5));

} else {
var statearr_22586_22638 = state_22550__$1;
(statearr_22586_22638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (23))){
var inst_22509 = (state_22550[(14)]);
var inst_22515 = (inst_22509 == null);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22515)){
var statearr_22587_22639 = state_22550__$1;
(statearr_22587_22639[(1)] = (26));

} else {
var statearr_22588_22640 = state_22550__$1;
(statearr_22588_22640[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (35))){
var inst_22535 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22535)){
var statearr_22589_22641 = state_22550__$1;
(statearr_22589_22641[(1)] = (36));

} else {
var statearr_22590_22642 = state_22550__$1;
(statearr_22590_22642[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (19))){
var inst_22477 = (state_22550[(7)]);
var inst_22497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22477);
var state_22550__$1 = state_22550;
var statearr_22591_22643 = state_22550__$1;
(statearr_22591_22643[(2)] = inst_22497);

(statearr_22591_22643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (11))){
var inst_22477 = (state_22550[(7)]);
var inst_22481 = (inst_22477 == null);
var inst_22482 = cljs.core.not.call(null,inst_22481);
var state_22550__$1 = state_22550;
if(inst_22482){
var statearr_22592_22644 = state_22550__$1;
(statearr_22592_22644[(1)] = (13));

} else {
var statearr_22593_22645 = state_22550__$1;
(statearr_22593_22645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (9))){
var inst_22452 = (state_22550[(8)]);
var state_22550__$1 = state_22550;
var statearr_22594_22646 = state_22550__$1;
(statearr_22594_22646[(2)] = inst_22452);

(statearr_22594_22646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (5))){
var state_22550__$1 = state_22550;
var statearr_22595_22647 = state_22550__$1;
(statearr_22595_22647[(2)] = true);

(statearr_22595_22647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (14))){
var state_22550__$1 = state_22550;
var statearr_22596_22648 = state_22550__$1;
(statearr_22596_22648[(2)] = false);

(statearr_22596_22648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (26))){
var inst_22510 = (state_22550[(10)]);
var inst_22517 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22510);
var state_22550__$1 = state_22550;
var statearr_22597_22649 = state_22550__$1;
(statearr_22597_22649[(2)] = inst_22517);

(statearr_22597_22649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (16))){
var state_22550__$1 = state_22550;
var statearr_22598_22650 = state_22550__$1;
(statearr_22598_22650[(2)] = true);

(statearr_22598_22650[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (38))){
var inst_22540 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22599_22651 = state_22550__$1;
(statearr_22599_22651[(2)] = inst_22540);

(statearr_22599_22651[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (30))){
var inst_22510 = (state_22550[(10)]);
var inst_22502 = (state_22550[(13)]);
var inst_22501 = (state_22550[(11)]);
var inst_22527 = cljs.core.empty_QMARK_.call(null,inst_22501);
var inst_22528 = inst_22502.call(null,inst_22510);
var inst_22529 = cljs.core.not.call(null,inst_22528);
var inst_22530 = ((inst_22527) && (inst_22529));
var state_22550__$1 = state_22550;
var statearr_22600_22652 = state_22550__$1;
(statearr_22600_22652[(2)] = inst_22530);

(statearr_22600_22652[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (10))){
var inst_22452 = (state_22550[(8)]);
var inst_22473 = (state_22550[(2)]);
var inst_22474 = cljs.core.get.call(null,inst_22473,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22475 = cljs.core.get.call(null,inst_22473,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22476 = cljs.core.get.call(null,inst_22473,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22477 = inst_22452;
var state_22550__$1 = (function (){var statearr_22601 = state_22550;
(statearr_22601[(7)] = inst_22477);

(statearr_22601[(16)] = inst_22474);

(statearr_22601[(17)] = inst_22476);

(statearr_22601[(18)] = inst_22475);

return statearr_22601;
})();
var statearr_22602_22653 = state_22550__$1;
(statearr_22602_22653[(2)] = null);

(statearr_22602_22653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (18))){
var inst_22492 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22603_22654 = state_22550__$1;
(statearr_22603_22654[(2)] = inst_22492);

(statearr_22603_22654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (37))){
var state_22550__$1 = state_22550;
var statearr_22604_22655 = state_22550__$1;
(statearr_22604_22655[(2)] = null);

(statearr_22604_22655[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22551 === (8))){
var inst_22452 = (state_22550[(8)]);
var inst_22470 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22452);
var state_22550__$1 = state_22550;
var statearr_22605_22656 = state_22550__$1;
(statearr_22605_22656[(2)] = inst_22470);

(statearr_22605_22656[(1)] = (10));


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
});})(c__21551__auto___22610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21460__auto__,c__21551__auto___22610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21461__auto__ = null;
var cljs$core$async$mix_$_state_machine__21461__auto____0 = (function (){
var statearr_22606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22606[(0)] = cljs$core$async$mix_$_state_machine__21461__auto__);

(statearr_22606[(1)] = (1));

return statearr_22606;
});
var cljs$core$async$mix_$_state_machine__21461__auto____1 = (function (state_22550){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_22550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e22607){if((e22607 instanceof Object)){
var ex__21464__auto__ = e22607;
var statearr_22608_22657 = state_22550;
(statearr_22608_22657[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22658 = state_22550;
state_22550 = G__22658;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21461__auto__ = function(state_22550){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21461__auto____1.call(this,state_22550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21461__auto____0;
cljs$core$async$mix_$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21461__auto____1;
return cljs$core$async$mix_$_state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___22610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21553__auto__ = (function (){var statearr_22609 = f__21552__auto__.call(null);
(statearr_22609[(6)] = c__21551__auto___22610);

return statearr_22609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___22610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22660 = arguments.length;
switch (G__22660) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22664 = arguments.length;
switch (G__22664) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__22662_SHARP_){
if(cljs.core.truth_(p1__22662_SHARP_.call(null,topic))){
return p1__22662_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22662_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22665 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22666){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22666 = meta22666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22667,meta22666__$1){
var self__ = this;
var _22667__$1 = this;
return (new cljs.core.async.t_cljs$core$async22665(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22666__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22667){
var self__ = this;
var _22667__$1 = this;
return self__.meta22666;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22665.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22666","meta22666",-1094681433,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22665";

cljs.core.async.t_cljs$core$async22665.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22665");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22665.
 */
cljs.core.async.__GT_t_cljs$core$async22665 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22666){
return (new cljs.core.async.t_cljs$core$async22665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22666));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22665(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21551__auto___22785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___22785,mults,ensure_mult,p){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___22785,mults,ensure_mult,p){
return (function (state_22739){
var state_val_22740 = (state_22739[(1)]);
if((state_val_22740 === (7))){
var inst_22735 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
var statearr_22741_22786 = state_22739__$1;
(statearr_22741_22786[(2)] = inst_22735);

(statearr_22741_22786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (20))){
var state_22739__$1 = state_22739;
var statearr_22742_22787 = state_22739__$1;
(statearr_22742_22787[(2)] = null);

(statearr_22742_22787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (1))){
var state_22739__$1 = state_22739;
var statearr_22743_22788 = state_22739__$1;
(statearr_22743_22788[(2)] = null);

(statearr_22743_22788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (24))){
var inst_22718 = (state_22739[(7)]);
var inst_22727 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22718);
var state_22739__$1 = state_22739;
var statearr_22744_22789 = state_22739__$1;
(statearr_22744_22789[(2)] = inst_22727);

(statearr_22744_22789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (4))){
var inst_22670 = (state_22739[(8)]);
var inst_22670__$1 = (state_22739[(2)]);
var inst_22671 = (inst_22670__$1 == null);
var state_22739__$1 = (function (){var statearr_22745 = state_22739;
(statearr_22745[(8)] = inst_22670__$1);

return statearr_22745;
})();
if(cljs.core.truth_(inst_22671)){
var statearr_22746_22790 = state_22739__$1;
(statearr_22746_22790[(1)] = (5));

} else {
var statearr_22747_22791 = state_22739__$1;
(statearr_22747_22791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (15))){
var inst_22712 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
var statearr_22748_22792 = state_22739__$1;
(statearr_22748_22792[(2)] = inst_22712);

(statearr_22748_22792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (21))){
var inst_22732 = (state_22739[(2)]);
var state_22739__$1 = (function (){var statearr_22749 = state_22739;
(statearr_22749[(9)] = inst_22732);

return statearr_22749;
})();
var statearr_22750_22793 = state_22739__$1;
(statearr_22750_22793[(2)] = null);

(statearr_22750_22793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (13))){
var inst_22694 = (state_22739[(10)]);
var inst_22696 = cljs.core.chunked_seq_QMARK_.call(null,inst_22694);
var state_22739__$1 = state_22739;
if(inst_22696){
var statearr_22751_22794 = state_22739__$1;
(statearr_22751_22794[(1)] = (16));

} else {
var statearr_22752_22795 = state_22739__$1;
(statearr_22752_22795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (22))){
var inst_22724 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
if(cljs.core.truth_(inst_22724)){
var statearr_22753_22796 = state_22739__$1;
(statearr_22753_22796[(1)] = (23));

} else {
var statearr_22754_22797 = state_22739__$1;
(statearr_22754_22797[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (6))){
var inst_22718 = (state_22739[(7)]);
var inst_22720 = (state_22739[(11)]);
var inst_22670 = (state_22739[(8)]);
var inst_22718__$1 = topic_fn.call(null,inst_22670);
var inst_22719 = cljs.core.deref.call(null,mults);
var inst_22720__$1 = cljs.core.get.call(null,inst_22719,inst_22718__$1);
var state_22739__$1 = (function (){var statearr_22755 = state_22739;
(statearr_22755[(7)] = inst_22718__$1);

(statearr_22755[(11)] = inst_22720__$1);

return statearr_22755;
})();
if(cljs.core.truth_(inst_22720__$1)){
var statearr_22756_22798 = state_22739__$1;
(statearr_22756_22798[(1)] = (19));

} else {
var statearr_22757_22799 = state_22739__$1;
(statearr_22757_22799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (25))){
var inst_22729 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
var statearr_22758_22800 = state_22739__$1;
(statearr_22758_22800[(2)] = inst_22729);

(statearr_22758_22800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (17))){
var inst_22694 = (state_22739[(10)]);
var inst_22703 = cljs.core.first.call(null,inst_22694);
var inst_22704 = cljs.core.async.muxch_STAR_.call(null,inst_22703);
var inst_22705 = cljs.core.async.close_BANG_.call(null,inst_22704);
var inst_22706 = cljs.core.next.call(null,inst_22694);
var inst_22680 = inst_22706;
var inst_22681 = null;
var inst_22682 = (0);
var inst_22683 = (0);
var state_22739__$1 = (function (){var statearr_22759 = state_22739;
(statearr_22759[(12)] = inst_22680);

(statearr_22759[(13)] = inst_22682);

(statearr_22759[(14)] = inst_22705);

(statearr_22759[(15)] = inst_22683);

(statearr_22759[(16)] = inst_22681);

return statearr_22759;
})();
var statearr_22760_22801 = state_22739__$1;
(statearr_22760_22801[(2)] = null);

(statearr_22760_22801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (3))){
var inst_22737 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22739__$1,inst_22737);
} else {
if((state_val_22740 === (12))){
var inst_22714 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
var statearr_22761_22802 = state_22739__$1;
(statearr_22761_22802[(2)] = inst_22714);

(statearr_22761_22802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (2))){
var state_22739__$1 = state_22739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22739__$1,(4),ch);
} else {
if((state_val_22740 === (23))){
var state_22739__$1 = state_22739;
var statearr_22762_22803 = state_22739__$1;
(statearr_22762_22803[(2)] = null);

(statearr_22762_22803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (19))){
var inst_22720 = (state_22739[(11)]);
var inst_22670 = (state_22739[(8)]);
var inst_22722 = cljs.core.async.muxch_STAR_.call(null,inst_22720);
var state_22739__$1 = state_22739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22739__$1,(22),inst_22722,inst_22670);
} else {
if((state_val_22740 === (11))){
var inst_22680 = (state_22739[(12)]);
var inst_22694 = (state_22739[(10)]);
var inst_22694__$1 = cljs.core.seq.call(null,inst_22680);
var state_22739__$1 = (function (){var statearr_22763 = state_22739;
(statearr_22763[(10)] = inst_22694__$1);

return statearr_22763;
})();
if(inst_22694__$1){
var statearr_22764_22804 = state_22739__$1;
(statearr_22764_22804[(1)] = (13));

} else {
var statearr_22765_22805 = state_22739__$1;
(statearr_22765_22805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (9))){
var inst_22716 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
var statearr_22766_22806 = state_22739__$1;
(statearr_22766_22806[(2)] = inst_22716);

(statearr_22766_22806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (5))){
var inst_22677 = cljs.core.deref.call(null,mults);
var inst_22678 = cljs.core.vals.call(null,inst_22677);
var inst_22679 = cljs.core.seq.call(null,inst_22678);
var inst_22680 = inst_22679;
var inst_22681 = null;
var inst_22682 = (0);
var inst_22683 = (0);
var state_22739__$1 = (function (){var statearr_22767 = state_22739;
(statearr_22767[(12)] = inst_22680);

(statearr_22767[(13)] = inst_22682);

(statearr_22767[(15)] = inst_22683);

(statearr_22767[(16)] = inst_22681);

return statearr_22767;
})();
var statearr_22768_22807 = state_22739__$1;
(statearr_22768_22807[(2)] = null);

(statearr_22768_22807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (14))){
var state_22739__$1 = state_22739;
var statearr_22772_22808 = state_22739__$1;
(statearr_22772_22808[(2)] = null);

(statearr_22772_22808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (16))){
var inst_22694 = (state_22739[(10)]);
var inst_22698 = cljs.core.chunk_first.call(null,inst_22694);
var inst_22699 = cljs.core.chunk_rest.call(null,inst_22694);
var inst_22700 = cljs.core.count.call(null,inst_22698);
var inst_22680 = inst_22699;
var inst_22681 = inst_22698;
var inst_22682 = inst_22700;
var inst_22683 = (0);
var state_22739__$1 = (function (){var statearr_22773 = state_22739;
(statearr_22773[(12)] = inst_22680);

(statearr_22773[(13)] = inst_22682);

(statearr_22773[(15)] = inst_22683);

(statearr_22773[(16)] = inst_22681);

return statearr_22773;
})();
var statearr_22774_22809 = state_22739__$1;
(statearr_22774_22809[(2)] = null);

(statearr_22774_22809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (10))){
var inst_22680 = (state_22739[(12)]);
var inst_22682 = (state_22739[(13)]);
var inst_22683 = (state_22739[(15)]);
var inst_22681 = (state_22739[(16)]);
var inst_22688 = cljs.core._nth.call(null,inst_22681,inst_22683);
var inst_22689 = cljs.core.async.muxch_STAR_.call(null,inst_22688);
var inst_22690 = cljs.core.async.close_BANG_.call(null,inst_22689);
var inst_22691 = (inst_22683 + (1));
var tmp22769 = inst_22680;
var tmp22770 = inst_22682;
var tmp22771 = inst_22681;
var inst_22680__$1 = tmp22769;
var inst_22681__$1 = tmp22771;
var inst_22682__$1 = tmp22770;
var inst_22683__$1 = inst_22691;
var state_22739__$1 = (function (){var statearr_22775 = state_22739;
(statearr_22775[(12)] = inst_22680__$1);

(statearr_22775[(17)] = inst_22690);

(statearr_22775[(13)] = inst_22682__$1);

(statearr_22775[(15)] = inst_22683__$1);

(statearr_22775[(16)] = inst_22681__$1);

return statearr_22775;
})();
var statearr_22776_22810 = state_22739__$1;
(statearr_22776_22810[(2)] = null);

(statearr_22776_22810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (18))){
var inst_22709 = (state_22739[(2)]);
var state_22739__$1 = state_22739;
var statearr_22777_22811 = state_22739__$1;
(statearr_22777_22811[(2)] = inst_22709);

(statearr_22777_22811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22740 === (8))){
var inst_22682 = (state_22739[(13)]);
var inst_22683 = (state_22739[(15)]);
var inst_22685 = (inst_22683 < inst_22682);
var inst_22686 = inst_22685;
var state_22739__$1 = state_22739;
if(cljs.core.truth_(inst_22686)){
var statearr_22778_22812 = state_22739__$1;
(statearr_22778_22812[(1)] = (10));

} else {
var statearr_22779_22813 = state_22739__$1;
(statearr_22779_22813[(1)] = (11));

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
});})(c__21551__auto___22785,mults,ensure_mult,p))
;
return ((function (switch__21460__auto__,c__21551__auto___22785,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_22780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22780[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_22780[(1)] = (1));

return statearr_22780;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_22739){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_22739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e22781){if((e22781 instanceof Object)){
var ex__21464__auto__ = e22781;
var statearr_22782_22814 = state_22739;
(statearr_22782_22814[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22815 = state_22739;
state_22739 = G__22815;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_22739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_22739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___22785,mults,ensure_mult,p))
})();
var state__21553__auto__ = (function (){var statearr_22783 = f__21552__auto__.call(null);
(statearr_22783[(6)] = c__21551__auto___22785);

return statearr_22783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___22785,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22817 = arguments.length;
switch (G__22817) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22820 = arguments.length;
switch (G__22820) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22823 = arguments.length;
switch (G__22823) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21551__auto___22890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___22890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___22890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22862){
var state_val_22863 = (state_22862[(1)]);
if((state_val_22863 === (7))){
var state_22862__$1 = state_22862;
var statearr_22864_22891 = state_22862__$1;
(statearr_22864_22891[(2)] = null);

(statearr_22864_22891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (1))){
var state_22862__$1 = state_22862;
var statearr_22865_22892 = state_22862__$1;
(statearr_22865_22892[(2)] = null);

(statearr_22865_22892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (4))){
var inst_22826 = (state_22862[(7)]);
var inst_22828 = (inst_22826 < cnt);
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22828)){
var statearr_22866_22893 = state_22862__$1;
(statearr_22866_22893[(1)] = (6));

} else {
var statearr_22867_22894 = state_22862__$1;
(statearr_22867_22894[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (15))){
var inst_22858 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22868_22895 = state_22862__$1;
(statearr_22868_22895[(2)] = inst_22858);

(statearr_22868_22895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (13))){
var inst_22851 = cljs.core.async.close_BANG_.call(null,out);
var state_22862__$1 = state_22862;
var statearr_22869_22896 = state_22862__$1;
(statearr_22869_22896[(2)] = inst_22851);

(statearr_22869_22896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (6))){
var state_22862__$1 = state_22862;
var statearr_22870_22897 = state_22862__$1;
(statearr_22870_22897[(2)] = null);

(statearr_22870_22897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (3))){
var inst_22860 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22862__$1,inst_22860);
} else {
if((state_val_22863 === (12))){
var inst_22848 = (state_22862[(8)]);
var inst_22848__$1 = (state_22862[(2)]);
var inst_22849 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22848__$1);
var state_22862__$1 = (function (){var statearr_22871 = state_22862;
(statearr_22871[(8)] = inst_22848__$1);

return statearr_22871;
})();
if(cljs.core.truth_(inst_22849)){
var statearr_22872_22898 = state_22862__$1;
(statearr_22872_22898[(1)] = (13));

} else {
var statearr_22873_22899 = state_22862__$1;
(statearr_22873_22899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (2))){
var inst_22825 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22826 = (0);
var state_22862__$1 = (function (){var statearr_22874 = state_22862;
(statearr_22874[(7)] = inst_22826);

(statearr_22874[(9)] = inst_22825);

return statearr_22874;
})();
var statearr_22875_22900 = state_22862__$1;
(statearr_22875_22900[(2)] = null);

(statearr_22875_22900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (11))){
var inst_22826 = (state_22862[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22862,(10),Object,null,(9));
var inst_22835 = chs__$1.call(null,inst_22826);
var inst_22836 = done.call(null,inst_22826);
var inst_22837 = cljs.core.async.take_BANG_.call(null,inst_22835,inst_22836);
var state_22862__$1 = state_22862;
var statearr_22876_22901 = state_22862__$1;
(statearr_22876_22901[(2)] = inst_22837);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (9))){
var inst_22826 = (state_22862[(7)]);
var inst_22839 = (state_22862[(2)]);
var inst_22840 = (inst_22826 + (1));
var inst_22826__$1 = inst_22840;
var state_22862__$1 = (function (){var statearr_22877 = state_22862;
(statearr_22877[(7)] = inst_22826__$1);

(statearr_22877[(10)] = inst_22839);

return statearr_22877;
})();
var statearr_22878_22902 = state_22862__$1;
(statearr_22878_22902[(2)] = null);

(statearr_22878_22902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (5))){
var inst_22846 = (state_22862[(2)]);
var state_22862__$1 = (function (){var statearr_22879 = state_22862;
(statearr_22879[(11)] = inst_22846);

return statearr_22879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22862__$1,(12),dchan);
} else {
if((state_val_22863 === (14))){
var inst_22848 = (state_22862[(8)]);
var inst_22853 = cljs.core.apply.call(null,f,inst_22848);
var state_22862__$1 = state_22862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22862__$1,(16),out,inst_22853);
} else {
if((state_val_22863 === (16))){
var inst_22855 = (state_22862[(2)]);
var state_22862__$1 = (function (){var statearr_22880 = state_22862;
(statearr_22880[(12)] = inst_22855);

return statearr_22880;
})();
var statearr_22881_22903 = state_22862__$1;
(statearr_22881_22903[(2)] = null);

(statearr_22881_22903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (10))){
var inst_22830 = (state_22862[(2)]);
var inst_22831 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22862__$1 = (function (){var statearr_22882 = state_22862;
(statearr_22882[(13)] = inst_22830);

return statearr_22882;
})();
var statearr_22883_22904 = state_22862__$1;
(statearr_22883_22904[(2)] = inst_22831);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (8))){
var inst_22844 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22884_22905 = state_22862__$1;
(statearr_22884_22905[(2)] = inst_22844);

(statearr_22884_22905[(1)] = (5));


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
}
}
});})(c__21551__auto___22890,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21460__auto__,c__21551__auto___22890,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_22885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22885[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_22885[(1)] = (1));

return statearr_22885;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_22862){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_22862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e22886){if((e22886 instanceof Object)){
var ex__21464__auto__ = e22886;
var statearr_22887_22906 = state_22862;
(statearr_22887_22906[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22907 = state_22862;
state_22862 = G__22907;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_22862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_22862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___22890,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21553__auto__ = (function (){var statearr_22888 = f__21552__auto__.call(null);
(statearr_22888[(6)] = c__21551__auto___22890);

return statearr_22888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___22890,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22910 = arguments.length;
switch (G__22910) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21551__auto___22964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___22964,out){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___22964,out){
return (function (state_22942){
var state_val_22943 = (state_22942[(1)]);
if((state_val_22943 === (7))){
var inst_22921 = (state_22942[(7)]);
var inst_22922 = (state_22942[(8)]);
var inst_22921__$1 = (state_22942[(2)]);
var inst_22922__$1 = cljs.core.nth.call(null,inst_22921__$1,(0),null);
var inst_22923 = cljs.core.nth.call(null,inst_22921__$1,(1),null);
var inst_22924 = (inst_22922__$1 == null);
var state_22942__$1 = (function (){var statearr_22944 = state_22942;
(statearr_22944[(7)] = inst_22921__$1);

(statearr_22944[(9)] = inst_22923);

(statearr_22944[(8)] = inst_22922__$1);

return statearr_22944;
})();
if(cljs.core.truth_(inst_22924)){
var statearr_22945_22965 = state_22942__$1;
(statearr_22945_22965[(1)] = (8));

} else {
var statearr_22946_22966 = state_22942__$1;
(statearr_22946_22966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (1))){
var inst_22911 = cljs.core.vec.call(null,chs);
var inst_22912 = inst_22911;
var state_22942__$1 = (function (){var statearr_22947 = state_22942;
(statearr_22947[(10)] = inst_22912);

return statearr_22947;
})();
var statearr_22948_22967 = state_22942__$1;
(statearr_22948_22967[(2)] = null);

(statearr_22948_22967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (4))){
var inst_22912 = (state_22942[(10)]);
var state_22942__$1 = state_22942;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22942__$1,(7),inst_22912);
} else {
if((state_val_22943 === (6))){
var inst_22938 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
var statearr_22949_22968 = state_22942__$1;
(statearr_22949_22968[(2)] = inst_22938);

(statearr_22949_22968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (3))){
var inst_22940 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22942__$1,inst_22940);
} else {
if((state_val_22943 === (2))){
var inst_22912 = (state_22942[(10)]);
var inst_22914 = cljs.core.count.call(null,inst_22912);
var inst_22915 = (inst_22914 > (0));
var state_22942__$1 = state_22942;
if(cljs.core.truth_(inst_22915)){
var statearr_22951_22969 = state_22942__$1;
(statearr_22951_22969[(1)] = (4));

} else {
var statearr_22952_22970 = state_22942__$1;
(statearr_22952_22970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (11))){
var inst_22912 = (state_22942[(10)]);
var inst_22931 = (state_22942[(2)]);
var tmp22950 = inst_22912;
var inst_22912__$1 = tmp22950;
var state_22942__$1 = (function (){var statearr_22953 = state_22942;
(statearr_22953[(10)] = inst_22912__$1);

(statearr_22953[(11)] = inst_22931);

return statearr_22953;
})();
var statearr_22954_22971 = state_22942__$1;
(statearr_22954_22971[(2)] = null);

(statearr_22954_22971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (9))){
var inst_22922 = (state_22942[(8)]);
var state_22942__$1 = state_22942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22942__$1,(11),out,inst_22922);
} else {
if((state_val_22943 === (5))){
var inst_22936 = cljs.core.async.close_BANG_.call(null,out);
var state_22942__$1 = state_22942;
var statearr_22955_22972 = state_22942__$1;
(statearr_22955_22972[(2)] = inst_22936);

(statearr_22955_22972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (10))){
var inst_22934 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
var statearr_22956_22973 = state_22942__$1;
(statearr_22956_22973[(2)] = inst_22934);

(statearr_22956_22973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (8))){
var inst_22912 = (state_22942[(10)]);
var inst_22921 = (state_22942[(7)]);
var inst_22923 = (state_22942[(9)]);
var inst_22922 = (state_22942[(8)]);
var inst_22926 = (function (){var cs = inst_22912;
var vec__22917 = inst_22921;
var v = inst_22922;
var c = inst_22923;
return ((function (cs,vec__22917,v,c,inst_22912,inst_22921,inst_22923,inst_22922,state_val_22943,c__21551__auto___22964,out){
return (function (p1__22908_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22908_SHARP_);
});
;})(cs,vec__22917,v,c,inst_22912,inst_22921,inst_22923,inst_22922,state_val_22943,c__21551__auto___22964,out))
})();
var inst_22927 = cljs.core.filterv.call(null,inst_22926,inst_22912);
var inst_22912__$1 = inst_22927;
var state_22942__$1 = (function (){var statearr_22957 = state_22942;
(statearr_22957[(10)] = inst_22912__$1);

return statearr_22957;
})();
var statearr_22958_22974 = state_22942__$1;
(statearr_22958_22974[(2)] = null);

(statearr_22958_22974[(1)] = (2));


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
});})(c__21551__auto___22964,out))
;
return ((function (switch__21460__auto__,c__21551__auto___22964,out){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_22959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22959[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_22959[(1)] = (1));

return statearr_22959;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_22942){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_22942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e22960){if((e22960 instanceof Object)){
var ex__21464__auto__ = e22960;
var statearr_22961_22975 = state_22942;
(statearr_22961_22975[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22976 = state_22942;
state_22942 = G__22976;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_22942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_22942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___22964,out))
})();
var state__21553__auto__ = (function (){var statearr_22962 = f__21552__auto__.call(null);
(statearr_22962[(6)] = c__21551__auto___22964);

return statearr_22962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___22964,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22978 = arguments.length;
switch (G__22978) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21551__auto___23023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___23023,out){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___23023,out){
return (function (state_23002){
var state_val_23003 = (state_23002[(1)]);
if((state_val_23003 === (7))){
var inst_22984 = (state_23002[(7)]);
var inst_22984__$1 = (state_23002[(2)]);
var inst_22985 = (inst_22984__$1 == null);
var inst_22986 = cljs.core.not.call(null,inst_22985);
var state_23002__$1 = (function (){var statearr_23004 = state_23002;
(statearr_23004[(7)] = inst_22984__$1);

return statearr_23004;
})();
if(inst_22986){
var statearr_23005_23024 = state_23002__$1;
(statearr_23005_23024[(1)] = (8));

} else {
var statearr_23006_23025 = state_23002__$1;
(statearr_23006_23025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (1))){
var inst_22979 = (0);
var state_23002__$1 = (function (){var statearr_23007 = state_23002;
(statearr_23007[(8)] = inst_22979);

return statearr_23007;
})();
var statearr_23008_23026 = state_23002__$1;
(statearr_23008_23026[(2)] = null);

(statearr_23008_23026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (4))){
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23002__$1,(7),ch);
} else {
if((state_val_23003 === (6))){
var inst_22997 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23009_23027 = state_23002__$1;
(statearr_23009_23027[(2)] = inst_22997);

(statearr_23009_23027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (3))){
var inst_22999 = (state_23002[(2)]);
var inst_23000 = cljs.core.async.close_BANG_.call(null,out);
var state_23002__$1 = (function (){var statearr_23010 = state_23002;
(statearr_23010[(9)] = inst_22999);

return statearr_23010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23002__$1,inst_23000);
} else {
if((state_val_23003 === (2))){
var inst_22979 = (state_23002[(8)]);
var inst_22981 = (inst_22979 < n);
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22981)){
var statearr_23011_23028 = state_23002__$1;
(statearr_23011_23028[(1)] = (4));

} else {
var statearr_23012_23029 = state_23002__$1;
(statearr_23012_23029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (11))){
var inst_22979 = (state_23002[(8)]);
var inst_22989 = (state_23002[(2)]);
var inst_22990 = (inst_22979 + (1));
var inst_22979__$1 = inst_22990;
var state_23002__$1 = (function (){var statearr_23013 = state_23002;
(statearr_23013[(8)] = inst_22979__$1);

(statearr_23013[(10)] = inst_22989);

return statearr_23013;
})();
var statearr_23014_23030 = state_23002__$1;
(statearr_23014_23030[(2)] = null);

(statearr_23014_23030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (9))){
var state_23002__$1 = state_23002;
var statearr_23015_23031 = state_23002__$1;
(statearr_23015_23031[(2)] = null);

(statearr_23015_23031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (5))){
var state_23002__$1 = state_23002;
var statearr_23016_23032 = state_23002__$1;
(statearr_23016_23032[(2)] = null);

(statearr_23016_23032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (10))){
var inst_22994 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23017_23033 = state_23002__$1;
(statearr_23017_23033[(2)] = inst_22994);

(statearr_23017_23033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (8))){
var inst_22984 = (state_23002[(7)]);
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23002__$1,(11),out,inst_22984);
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
});})(c__21551__auto___23023,out))
;
return ((function (switch__21460__auto__,c__21551__auto___23023,out){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_23018 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23018[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_23018[(1)] = (1));

return statearr_23018;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_23002){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_23002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e23019){if((e23019 instanceof Object)){
var ex__21464__auto__ = e23019;
var statearr_23020_23034 = state_23002;
(statearr_23020_23034[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23035 = state_23002;
state_23002 = G__23035;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_23002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_23002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___23023,out))
})();
var state__21553__auto__ = (function (){var statearr_23021 = f__21552__auto__.call(null);
(statearr_23021[(6)] = c__21551__auto___23023);

return statearr_23021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___23023,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23037 = (function (f,ch,meta23038){
this.f = f;
this.ch = ch;
this.meta23038 = meta23038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23039,meta23038__$1){
var self__ = this;
var _23039__$1 = this;
return (new cljs.core.async.t_cljs$core$async23037(self__.f,self__.ch,meta23038__$1));
});

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23039){
var self__ = this;
var _23039__$1 = this;
return self__.meta23038;
});

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23040 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23040 = (function (f,ch,meta23038,_,fn1,meta23041){
this.f = f;
this.ch = ch;
this.meta23038 = meta23038;
this._ = _;
this.fn1 = fn1;
this.meta23041 = meta23041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23042,meta23041__$1){
var self__ = this;
var _23042__$1 = this;
return (new cljs.core.async.t_cljs$core$async23040(self__.f,self__.ch,self__.meta23038,self__._,self__.fn1,meta23041__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23042){
var self__ = this;
var _23042__$1 = this;
return self__.meta23041;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23036_SHARP_){
return f1.call(null,(((p1__23036_SHARP_ == null))?null:self__.f.call(null,p1__23036_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23040.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23038","meta23038",-1900713474,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23037","cljs.core.async/t_cljs$core$async23037",1317812522,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23041","meta23041",-1373053288,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23040";

cljs.core.async.t_cljs$core$async23040.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23040");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23040.
 */
cljs.core.async.__GT_t_cljs$core$async23040 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23040(f__$1,ch__$1,meta23038__$1,___$2,fn1__$1,meta23041){
return (new cljs.core.async.t_cljs$core$async23040(f__$1,ch__$1,meta23038__$1,___$2,fn1__$1,meta23041));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23040(self__.f,self__.ch,self__.meta23038,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23038","meta23038",-1900713474,null)], null);
});

cljs.core.async.t_cljs$core$async23037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23037";

cljs.core.async.t_cljs$core$async23037.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23037");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23037.
 */
cljs.core.async.__GT_t_cljs$core$async23037 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23037(f__$1,ch__$1,meta23038){
return (new cljs.core.async.t_cljs$core$async23037(f__$1,ch__$1,meta23038));
});

}

return (new cljs.core.async.t_cljs$core$async23037(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23043 = (function (f,ch,meta23044){
this.f = f;
this.ch = ch;
this.meta23044 = meta23044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23045,meta23044__$1){
var self__ = this;
var _23045__$1 = this;
return (new cljs.core.async.t_cljs$core$async23043(self__.f,self__.ch,meta23044__$1));
});

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23045){
var self__ = this;
var _23045__$1 = this;
return self__.meta23044;
});

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23044","meta23044",-1074676276,null)], null);
});

cljs.core.async.t_cljs$core$async23043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23043";

cljs.core.async.t_cljs$core$async23043.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23043");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23043.
 */
cljs.core.async.__GT_t_cljs$core$async23043 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23043(f__$1,ch__$1,meta23044){
return (new cljs.core.async.t_cljs$core$async23043(f__$1,ch__$1,meta23044));
});

}

return (new cljs.core.async.t_cljs$core$async23043(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23046 = (function (p,ch,meta23047){
this.p = p;
this.ch = ch;
this.meta23047 = meta23047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23048,meta23047__$1){
var self__ = this;
var _23048__$1 = this;
return (new cljs.core.async.t_cljs$core$async23046(self__.p,self__.ch,meta23047__$1));
});

cljs.core.async.t_cljs$core$async23046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23048){
var self__ = this;
var _23048__$1 = this;
return self__.meta23047;
});

cljs.core.async.t_cljs$core$async23046.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23046.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23046.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23046.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23047","meta23047",907200946,null)], null);
});

cljs.core.async.t_cljs$core$async23046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23046";

cljs.core.async.t_cljs$core$async23046.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23046");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23046.
 */
cljs.core.async.__GT_t_cljs$core$async23046 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23046(p__$1,ch__$1,meta23047){
return (new cljs.core.async.t_cljs$core$async23046(p__$1,ch__$1,meta23047));
});

}

return (new cljs.core.async.t_cljs$core$async23046(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23050 = arguments.length;
switch (G__23050) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21551__auto___23090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___23090,out){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___23090,out){
return (function (state_23071){
var state_val_23072 = (state_23071[(1)]);
if((state_val_23072 === (7))){
var inst_23067 = (state_23071[(2)]);
var state_23071__$1 = state_23071;
var statearr_23073_23091 = state_23071__$1;
(statearr_23073_23091[(2)] = inst_23067);

(statearr_23073_23091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23072 === (1))){
var state_23071__$1 = state_23071;
var statearr_23074_23092 = state_23071__$1;
(statearr_23074_23092[(2)] = null);

(statearr_23074_23092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23072 === (4))){
var inst_23053 = (state_23071[(7)]);
var inst_23053__$1 = (state_23071[(2)]);
var inst_23054 = (inst_23053__$1 == null);
var state_23071__$1 = (function (){var statearr_23075 = state_23071;
(statearr_23075[(7)] = inst_23053__$1);

return statearr_23075;
})();
if(cljs.core.truth_(inst_23054)){
var statearr_23076_23093 = state_23071__$1;
(statearr_23076_23093[(1)] = (5));

} else {
var statearr_23077_23094 = state_23071__$1;
(statearr_23077_23094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23072 === (6))){
var inst_23053 = (state_23071[(7)]);
var inst_23058 = p.call(null,inst_23053);
var state_23071__$1 = state_23071;
if(cljs.core.truth_(inst_23058)){
var statearr_23078_23095 = state_23071__$1;
(statearr_23078_23095[(1)] = (8));

} else {
var statearr_23079_23096 = state_23071__$1;
(statearr_23079_23096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23072 === (3))){
var inst_23069 = (state_23071[(2)]);
var state_23071__$1 = state_23071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23071__$1,inst_23069);
} else {
if((state_val_23072 === (2))){
var state_23071__$1 = state_23071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23071__$1,(4),ch);
} else {
if((state_val_23072 === (11))){
var inst_23061 = (state_23071[(2)]);
var state_23071__$1 = state_23071;
var statearr_23080_23097 = state_23071__$1;
(statearr_23080_23097[(2)] = inst_23061);

(statearr_23080_23097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23072 === (9))){
var state_23071__$1 = state_23071;
var statearr_23081_23098 = state_23071__$1;
(statearr_23081_23098[(2)] = null);

(statearr_23081_23098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23072 === (5))){
var inst_23056 = cljs.core.async.close_BANG_.call(null,out);
var state_23071__$1 = state_23071;
var statearr_23082_23099 = state_23071__$1;
(statearr_23082_23099[(2)] = inst_23056);

(statearr_23082_23099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23072 === (10))){
var inst_23064 = (state_23071[(2)]);
var state_23071__$1 = (function (){var statearr_23083 = state_23071;
(statearr_23083[(8)] = inst_23064);

return statearr_23083;
})();
var statearr_23084_23100 = state_23071__$1;
(statearr_23084_23100[(2)] = null);

(statearr_23084_23100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23072 === (8))){
var inst_23053 = (state_23071[(7)]);
var state_23071__$1 = state_23071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23071__$1,(11),out,inst_23053);
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
});})(c__21551__auto___23090,out))
;
return ((function (switch__21460__auto__,c__21551__auto___23090,out){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_23085 = [null,null,null,null,null,null,null,null,null];
(statearr_23085[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_23085[(1)] = (1));

return statearr_23085;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_23071){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_23071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e23086){if((e23086 instanceof Object)){
var ex__21464__auto__ = e23086;
var statearr_23087_23101 = state_23071;
(statearr_23087_23101[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23102 = state_23071;
state_23071 = G__23102;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_23071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_23071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___23090,out))
})();
var state__21553__auto__ = (function (){var statearr_23088 = f__21552__auto__.call(null);
(statearr_23088[(6)] = c__21551__auto___23090);

return statearr_23088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___23090,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23104 = arguments.length;
switch (G__23104) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21551__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto__){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto__){
return (function (state_23167){
var state_val_23168 = (state_23167[(1)]);
if((state_val_23168 === (7))){
var inst_23163 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23169_23207 = state_23167__$1;
(statearr_23169_23207[(2)] = inst_23163);

(statearr_23169_23207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (20))){
var inst_23133 = (state_23167[(7)]);
var inst_23144 = (state_23167[(2)]);
var inst_23145 = cljs.core.next.call(null,inst_23133);
var inst_23119 = inst_23145;
var inst_23120 = null;
var inst_23121 = (0);
var inst_23122 = (0);
var state_23167__$1 = (function (){var statearr_23170 = state_23167;
(statearr_23170[(8)] = inst_23144);

(statearr_23170[(9)] = inst_23121);

(statearr_23170[(10)] = inst_23122);

(statearr_23170[(11)] = inst_23120);

(statearr_23170[(12)] = inst_23119);

return statearr_23170;
})();
var statearr_23171_23208 = state_23167__$1;
(statearr_23171_23208[(2)] = null);

(statearr_23171_23208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (1))){
var state_23167__$1 = state_23167;
var statearr_23172_23209 = state_23167__$1;
(statearr_23172_23209[(2)] = null);

(statearr_23172_23209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (4))){
var inst_23108 = (state_23167[(13)]);
var inst_23108__$1 = (state_23167[(2)]);
var inst_23109 = (inst_23108__$1 == null);
var state_23167__$1 = (function (){var statearr_23173 = state_23167;
(statearr_23173[(13)] = inst_23108__$1);

return statearr_23173;
})();
if(cljs.core.truth_(inst_23109)){
var statearr_23174_23210 = state_23167__$1;
(statearr_23174_23210[(1)] = (5));

} else {
var statearr_23175_23211 = state_23167__$1;
(statearr_23175_23211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (15))){
var state_23167__$1 = state_23167;
var statearr_23179_23212 = state_23167__$1;
(statearr_23179_23212[(2)] = null);

(statearr_23179_23212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (21))){
var state_23167__$1 = state_23167;
var statearr_23180_23213 = state_23167__$1;
(statearr_23180_23213[(2)] = null);

(statearr_23180_23213[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (13))){
var inst_23121 = (state_23167[(9)]);
var inst_23122 = (state_23167[(10)]);
var inst_23120 = (state_23167[(11)]);
var inst_23119 = (state_23167[(12)]);
var inst_23129 = (state_23167[(2)]);
var inst_23130 = (inst_23122 + (1));
var tmp23176 = inst_23121;
var tmp23177 = inst_23120;
var tmp23178 = inst_23119;
var inst_23119__$1 = tmp23178;
var inst_23120__$1 = tmp23177;
var inst_23121__$1 = tmp23176;
var inst_23122__$1 = inst_23130;
var state_23167__$1 = (function (){var statearr_23181 = state_23167;
(statearr_23181[(9)] = inst_23121__$1);

(statearr_23181[(10)] = inst_23122__$1);

(statearr_23181[(11)] = inst_23120__$1);

(statearr_23181[(14)] = inst_23129);

(statearr_23181[(12)] = inst_23119__$1);

return statearr_23181;
})();
var statearr_23182_23214 = state_23167__$1;
(statearr_23182_23214[(2)] = null);

(statearr_23182_23214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (22))){
var state_23167__$1 = state_23167;
var statearr_23183_23215 = state_23167__$1;
(statearr_23183_23215[(2)] = null);

(statearr_23183_23215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (6))){
var inst_23108 = (state_23167[(13)]);
var inst_23117 = f.call(null,inst_23108);
var inst_23118 = cljs.core.seq.call(null,inst_23117);
var inst_23119 = inst_23118;
var inst_23120 = null;
var inst_23121 = (0);
var inst_23122 = (0);
var state_23167__$1 = (function (){var statearr_23184 = state_23167;
(statearr_23184[(9)] = inst_23121);

(statearr_23184[(10)] = inst_23122);

(statearr_23184[(11)] = inst_23120);

(statearr_23184[(12)] = inst_23119);

return statearr_23184;
})();
var statearr_23185_23216 = state_23167__$1;
(statearr_23185_23216[(2)] = null);

(statearr_23185_23216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (17))){
var inst_23133 = (state_23167[(7)]);
var inst_23137 = cljs.core.chunk_first.call(null,inst_23133);
var inst_23138 = cljs.core.chunk_rest.call(null,inst_23133);
var inst_23139 = cljs.core.count.call(null,inst_23137);
var inst_23119 = inst_23138;
var inst_23120 = inst_23137;
var inst_23121 = inst_23139;
var inst_23122 = (0);
var state_23167__$1 = (function (){var statearr_23186 = state_23167;
(statearr_23186[(9)] = inst_23121);

(statearr_23186[(10)] = inst_23122);

(statearr_23186[(11)] = inst_23120);

(statearr_23186[(12)] = inst_23119);

return statearr_23186;
})();
var statearr_23187_23217 = state_23167__$1;
(statearr_23187_23217[(2)] = null);

(statearr_23187_23217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (3))){
var inst_23165 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23167__$1,inst_23165);
} else {
if((state_val_23168 === (12))){
var inst_23153 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23188_23218 = state_23167__$1;
(statearr_23188_23218[(2)] = inst_23153);

(statearr_23188_23218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (2))){
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23167__$1,(4),in$);
} else {
if((state_val_23168 === (23))){
var inst_23161 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23189_23219 = state_23167__$1;
(statearr_23189_23219[(2)] = inst_23161);

(statearr_23189_23219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (19))){
var inst_23148 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23190_23220 = state_23167__$1;
(statearr_23190_23220[(2)] = inst_23148);

(statearr_23190_23220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (11))){
var inst_23133 = (state_23167[(7)]);
var inst_23119 = (state_23167[(12)]);
var inst_23133__$1 = cljs.core.seq.call(null,inst_23119);
var state_23167__$1 = (function (){var statearr_23191 = state_23167;
(statearr_23191[(7)] = inst_23133__$1);

return statearr_23191;
})();
if(inst_23133__$1){
var statearr_23192_23221 = state_23167__$1;
(statearr_23192_23221[(1)] = (14));

} else {
var statearr_23193_23222 = state_23167__$1;
(statearr_23193_23222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (9))){
var inst_23155 = (state_23167[(2)]);
var inst_23156 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23167__$1 = (function (){var statearr_23194 = state_23167;
(statearr_23194[(15)] = inst_23155);

return statearr_23194;
})();
if(cljs.core.truth_(inst_23156)){
var statearr_23195_23223 = state_23167__$1;
(statearr_23195_23223[(1)] = (21));

} else {
var statearr_23196_23224 = state_23167__$1;
(statearr_23196_23224[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (5))){
var inst_23111 = cljs.core.async.close_BANG_.call(null,out);
var state_23167__$1 = state_23167;
var statearr_23197_23225 = state_23167__$1;
(statearr_23197_23225[(2)] = inst_23111);

(statearr_23197_23225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (14))){
var inst_23133 = (state_23167[(7)]);
var inst_23135 = cljs.core.chunked_seq_QMARK_.call(null,inst_23133);
var state_23167__$1 = state_23167;
if(inst_23135){
var statearr_23198_23226 = state_23167__$1;
(statearr_23198_23226[(1)] = (17));

} else {
var statearr_23199_23227 = state_23167__$1;
(statearr_23199_23227[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (16))){
var inst_23151 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23200_23228 = state_23167__$1;
(statearr_23200_23228[(2)] = inst_23151);

(statearr_23200_23228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (10))){
var inst_23122 = (state_23167[(10)]);
var inst_23120 = (state_23167[(11)]);
var inst_23127 = cljs.core._nth.call(null,inst_23120,inst_23122);
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23167__$1,(13),out,inst_23127);
} else {
if((state_val_23168 === (18))){
var inst_23133 = (state_23167[(7)]);
var inst_23142 = cljs.core.first.call(null,inst_23133);
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23167__$1,(20),out,inst_23142);
} else {
if((state_val_23168 === (8))){
var inst_23121 = (state_23167[(9)]);
var inst_23122 = (state_23167[(10)]);
var inst_23124 = (inst_23122 < inst_23121);
var inst_23125 = inst_23124;
var state_23167__$1 = state_23167;
if(cljs.core.truth_(inst_23125)){
var statearr_23201_23229 = state_23167__$1;
(statearr_23201_23229[(1)] = (10));

} else {
var statearr_23202_23230 = state_23167__$1;
(statearr_23202_23230[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__21551__auto__))
;
return ((function (switch__21460__auto__,c__21551__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21461__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21461__auto____0 = (function (){
var statearr_23203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23203[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21461__auto__);

(statearr_23203[(1)] = (1));

return statearr_23203;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21461__auto____1 = (function (state_23167){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_23167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e23204){if((e23204 instanceof Object)){
var ex__21464__auto__ = e23204;
var statearr_23205_23231 = state_23167;
(statearr_23205_23231[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23232 = state_23167;
state_23167 = G__23232;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21461__auto__ = function(state_23167){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21461__auto____1.call(this,state_23167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21461__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21461__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto__))
})();
var state__21553__auto__ = (function (){var statearr_23206 = f__21552__auto__.call(null);
(statearr_23206[(6)] = c__21551__auto__);

return statearr_23206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto__))
);

return c__21551__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23234 = arguments.length;
switch (G__23234) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23237 = arguments.length;
switch (G__23237) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23240 = arguments.length;
switch (G__23240) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21551__auto___23287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___23287,out){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___23287,out){
return (function (state_23264){
var state_val_23265 = (state_23264[(1)]);
if((state_val_23265 === (7))){
var inst_23259 = (state_23264[(2)]);
var state_23264__$1 = state_23264;
var statearr_23266_23288 = state_23264__$1;
(statearr_23266_23288[(2)] = inst_23259);

(statearr_23266_23288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23265 === (1))){
var inst_23241 = null;
var state_23264__$1 = (function (){var statearr_23267 = state_23264;
(statearr_23267[(7)] = inst_23241);

return statearr_23267;
})();
var statearr_23268_23289 = state_23264__$1;
(statearr_23268_23289[(2)] = null);

(statearr_23268_23289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23265 === (4))){
var inst_23244 = (state_23264[(8)]);
var inst_23244__$1 = (state_23264[(2)]);
var inst_23245 = (inst_23244__$1 == null);
var inst_23246 = cljs.core.not.call(null,inst_23245);
var state_23264__$1 = (function (){var statearr_23269 = state_23264;
(statearr_23269[(8)] = inst_23244__$1);

return statearr_23269;
})();
if(inst_23246){
var statearr_23270_23290 = state_23264__$1;
(statearr_23270_23290[(1)] = (5));

} else {
var statearr_23271_23291 = state_23264__$1;
(statearr_23271_23291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23265 === (6))){
var state_23264__$1 = state_23264;
var statearr_23272_23292 = state_23264__$1;
(statearr_23272_23292[(2)] = null);

(statearr_23272_23292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23265 === (3))){
var inst_23261 = (state_23264[(2)]);
var inst_23262 = cljs.core.async.close_BANG_.call(null,out);
var state_23264__$1 = (function (){var statearr_23273 = state_23264;
(statearr_23273[(9)] = inst_23261);

return statearr_23273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23264__$1,inst_23262);
} else {
if((state_val_23265 === (2))){
var state_23264__$1 = state_23264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23264__$1,(4),ch);
} else {
if((state_val_23265 === (11))){
var inst_23244 = (state_23264[(8)]);
var inst_23253 = (state_23264[(2)]);
var inst_23241 = inst_23244;
var state_23264__$1 = (function (){var statearr_23274 = state_23264;
(statearr_23274[(7)] = inst_23241);

(statearr_23274[(10)] = inst_23253);

return statearr_23274;
})();
var statearr_23275_23293 = state_23264__$1;
(statearr_23275_23293[(2)] = null);

(statearr_23275_23293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23265 === (9))){
var inst_23244 = (state_23264[(8)]);
var state_23264__$1 = state_23264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23264__$1,(11),out,inst_23244);
} else {
if((state_val_23265 === (5))){
var inst_23244 = (state_23264[(8)]);
var inst_23241 = (state_23264[(7)]);
var inst_23248 = cljs.core._EQ_.call(null,inst_23244,inst_23241);
var state_23264__$1 = state_23264;
if(inst_23248){
var statearr_23277_23294 = state_23264__$1;
(statearr_23277_23294[(1)] = (8));

} else {
var statearr_23278_23295 = state_23264__$1;
(statearr_23278_23295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23265 === (10))){
var inst_23256 = (state_23264[(2)]);
var state_23264__$1 = state_23264;
var statearr_23279_23296 = state_23264__$1;
(statearr_23279_23296[(2)] = inst_23256);

(statearr_23279_23296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23265 === (8))){
var inst_23241 = (state_23264[(7)]);
var tmp23276 = inst_23241;
var inst_23241__$1 = tmp23276;
var state_23264__$1 = (function (){var statearr_23280 = state_23264;
(statearr_23280[(7)] = inst_23241__$1);

return statearr_23280;
})();
var statearr_23281_23297 = state_23264__$1;
(statearr_23281_23297[(2)] = null);

(statearr_23281_23297[(1)] = (2));


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
});})(c__21551__auto___23287,out))
;
return ((function (switch__21460__auto__,c__21551__auto___23287,out){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_23282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23282[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_23282[(1)] = (1));

return statearr_23282;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_23264){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_23264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e23283){if((e23283 instanceof Object)){
var ex__21464__auto__ = e23283;
var statearr_23284_23298 = state_23264;
(statearr_23284_23298[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23299 = state_23264;
state_23264 = G__23299;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_23264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_23264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___23287,out))
})();
var state__21553__auto__ = (function (){var statearr_23285 = f__21552__auto__.call(null);
(statearr_23285[(6)] = c__21551__auto___23287);

return statearr_23285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___23287,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23301 = arguments.length;
switch (G__23301) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21551__auto___23367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___23367,out){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___23367,out){
return (function (state_23339){
var state_val_23340 = (state_23339[(1)]);
if((state_val_23340 === (7))){
var inst_23335 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23341_23368 = state_23339__$1;
(statearr_23341_23368[(2)] = inst_23335);

(statearr_23341_23368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (1))){
var inst_23302 = (new Array(n));
var inst_23303 = inst_23302;
var inst_23304 = (0);
var state_23339__$1 = (function (){var statearr_23342 = state_23339;
(statearr_23342[(7)] = inst_23304);

(statearr_23342[(8)] = inst_23303);

return statearr_23342;
})();
var statearr_23343_23369 = state_23339__$1;
(statearr_23343_23369[(2)] = null);

(statearr_23343_23369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (4))){
var inst_23307 = (state_23339[(9)]);
var inst_23307__$1 = (state_23339[(2)]);
var inst_23308 = (inst_23307__$1 == null);
var inst_23309 = cljs.core.not.call(null,inst_23308);
var state_23339__$1 = (function (){var statearr_23344 = state_23339;
(statearr_23344[(9)] = inst_23307__$1);

return statearr_23344;
})();
if(inst_23309){
var statearr_23345_23370 = state_23339__$1;
(statearr_23345_23370[(1)] = (5));

} else {
var statearr_23346_23371 = state_23339__$1;
(statearr_23346_23371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (15))){
var inst_23329 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23347_23372 = state_23339__$1;
(statearr_23347_23372[(2)] = inst_23329);

(statearr_23347_23372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (13))){
var state_23339__$1 = state_23339;
var statearr_23348_23373 = state_23339__$1;
(statearr_23348_23373[(2)] = null);

(statearr_23348_23373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (6))){
var inst_23304 = (state_23339[(7)]);
var inst_23325 = (inst_23304 > (0));
var state_23339__$1 = state_23339;
if(cljs.core.truth_(inst_23325)){
var statearr_23349_23374 = state_23339__$1;
(statearr_23349_23374[(1)] = (12));

} else {
var statearr_23350_23375 = state_23339__$1;
(statearr_23350_23375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (3))){
var inst_23337 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23339__$1,inst_23337);
} else {
if((state_val_23340 === (12))){
var inst_23303 = (state_23339[(8)]);
var inst_23327 = cljs.core.vec.call(null,inst_23303);
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23339__$1,(15),out,inst_23327);
} else {
if((state_val_23340 === (2))){
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23339__$1,(4),ch);
} else {
if((state_val_23340 === (11))){
var inst_23319 = (state_23339[(2)]);
var inst_23320 = (new Array(n));
var inst_23303 = inst_23320;
var inst_23304 = (0);
var state_23339__$1 = (function (){var statearr_23351 = state_23339;
(statearr_23351[(7)] = inst_23304);

(statearr_23351[(10)] = inst_23319);

(statearr_23351[(8)] = inst_23303);

return statearr_23351;
})();
var statearr_23352_23376 = state_23339__$1;
(statearr_23352_23376[(2)] = null);

(statearr_23352_23376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (9))){
var inst_23303 = (state_23339[(8)]);
var inst_23317 = cljs.core.vec.call(null,inst_23303);
var state_23339__$1 = state_23339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23339__$1,(11),out,inst_23317);
} else {
if((state_val_23340 === (5))){
var inst_23307 = (state_23339[(9)]);
var inst_23312 = (state_23339[(11)]);
var inst_23304 = (state_23339[(7)]);
var inst_23303 = (state_23339[(8)]);
var inst_23311 = (inst_23303[inst_23304] = inst_23307);
var inst_23312__$1 = (inst_23304 + (1));
var inst_23313 = (inst_23312__$1 < n);
var state_23339__$1 = (function (){var statearr_23353 = state_23339;
(statearr_23353[(12)] = inst_23311);

(statearr_23353[(11)] = inst_23312__$1);

return statearr_23353;
})();
if(cljs.core.truth_(inst_23313)){
var statearr_23354_23377 = state_23339__$1;
(statearr_23354_23377[(1)] = (8));

} else {
var statearr_23355_23378 = state_23339__$1;
(statearr_23355_23378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (14))){
var inst_23332 = (state_23339[(2)]);
var inst_23333 = cljs.core.async.close_BANG_.call(null,out);
var state_23339__$1 = (function (){var statearr_23357 = state_23339;
(statearr_23357[(13)] = inst_23332);

return statearr_23357;
})();
var statearr_23358_23379 = state_23339__$1;
(statearr_23358_23379[(2)] = inst_23333);

(statearr_23358_23379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (10))){
var inst_23323 = (state_23339[(2)]);
var state_23339__$1 = state_23339;
var statearr_23359_23380 = state_23339__$1;
(statearr_23359_23380[(2)] = inst_23323);

(statearr_23359_23380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23340 === (8))){
var inst_23312 = (state_23339[(11)]);
var inst_23303 = (state_23339[(8)]);
var tmp23356 = inst_23303;
var inst_23303__$1 = tmp23356;
var inst_23304 = inst_23312;
var state_23339__$1 = (function (){var statearr_23360 = state_23339;
(statearr_23360[(7)] = inst_23304);

(statearr_23360[(8)] = inst_23303__$1);

return statearr_23360;
})();
var statearr_23361_23381 = state_23339__$1;
(statearr_23361_23381[(2)] = null);

(statearr_23361_23381[(1)] = (2));


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
}
});})(c__21551__auto___23367,out))
;
return ((function (switch__21460__auto__,c__21551__auto___23367,out){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_23362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23362[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_23362[(1)] = (1));

return statearr_23362;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_23339){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_23339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e23363){if((e23363 instanceof Object)){
var ex__21464__auto__ = e23363;
var statearr_23364_23382 = state_23339;
(statearr_23364_23382[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23383 = state_23339;
state_23339 = G__23383;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_23339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_23339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___23367,out))
})();
var state__21553__auto__ = (function (){var statearr_23365 = f__21552__auto__.call(null);
(statearr_23365[(6)] = c__21551__auto___23367);

return statearr_23365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___23367,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23385 = arguments.length;
switch (G__23385) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21551__auto___23455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21551__auto___23455,out){
return (function (){
var f__21552__auto__ = (function (){var switch__21460__auto__ = ((function (c__21551__auto___23455,out){
return (function (state_23427){
var state_val_23428 = (state_23427[(1)]);
if((state_val_23428 === (7))){
var inst_23423 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23429_23456 = state_23427__$1;
(statearr_23429_23456[(2)] = inst_23423);

(statearr_23429_23456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (1))){
var inst_23386 = [];
var inst_23387 = inst_23386;
var inst_23388 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23427__$1 = (function (){var statearr_23430 = state_23427;
(statearr_23430[(7)] = inst_23387);

(statearr_23430[(8)] = inst_23388);

return statearr_23430;
})();
var statearr_23431_23457 = state_23427__$1;
(statearr_23431_23457[(2)] = null);

(statearr_23431_23457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (4))){
var inst_23391 = (state_23427[(9)]);
var inst_23391__$1 = (state_23427[(2)]);
var inst_23392 = (inst_23391__$1 == null);
var inst_23393 = cljs.core.not.call(null,inst_23392);
var state_23427__$1 = (function (){var statearr_23432 = state_23427;
(statearr_23432[(9)] = inst_23391__$1);

return statearr_23432;
})();
if(inst_23393){
var statearr_23433_23458 = state_23427__$1;
(statearr_23433_23458[(1)] = (5));

} else {
var statearr_23434_23459 = state_23427__$1;
(statearr_23434_23459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (15))){
var inst_23417 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23435_23460 = state_23427__$1;
(statearr_23435_23460[(2)] = inst_23417);

(statearr_23435_23460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (13))){
var state_23427__$1 = state_23427;
var statearr_23436_23461 = state_23427__$1;
(statearr_23436_23461[(2)] = null);

(statearr_23436_23461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (6))){
var inst_23387 = (state_23427[(7)]);
var inst_23412 = inst_23387.length;
var inst_23413 = (inst_23412 > (0));
var state_23427__$1 = state_23427;
if(cljs.core.truth_(inst_23413)){
var statearr_23437_23462 = state_23427__$1;
(statearr_23437_23462[(1)] = (12));

} else {
var statearr_23438_23463 = state_23427__$1;
(statearr_23438_23463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (3))){
var inst_23425 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23427__$1,inst_23425);
} else {
if((state_val_23428 === (12))){
var inst_23387 = (state_23427[(7)]);
var inst_23415 = cljs.core.vec.call(null,inst_23387);
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23427__$1,(15),out,inst_23415);
} else {
if((state_val_23428 === (2))){
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23427__$1,(4),ch);
} else {
if((state_val_23428 === (11))){
var inst_23391 = (state_23427[(9)]);
var inst_23395 = (state_23427[(10)]);
var inst_23405 = (state_23427[(2)]);
var inst_23406 = [];
var inst_23407 = inst_23406.push(inst_23391);
var inst_23387 = inst_23406;
var inst_23388 = inst_23395;
var state_23427__$1 = (function (){var statearr_23439 = state_23427;
(statearr_23439[(7)] = inst_23387);

(statearr_23439[(11)] = inst_23407);

(statearr_23439[(8)] = inst_23388);

(statearr_23439[(12)] = inst_23405);

return statearr_23439;
})();
var statearr_23440_23464 = state_23427__$1;
(statearr_23440_23464[(2)] = null);

(statearr_23440_23464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (9))){
var inst_23387 = (state_23427[(7)]);
var inst_23403 = cljs.core.vec.call(null,inst_23387);
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23427__$1,(11),out,inst_23403);
} else {
if((state_val_23428 === (5))){
var inst_23391 = (state_23427[(9)]);
var inst_23388 = (state_23427[(8)]);
var inst_23395 = (state_23427[(10)]);
var inst_23395__$1 = f.call(null,inst_23391);
var inst_23396 = cljs.core._EQ_.call(null,inst_23395__$1,inst_23388);
var inst_23397 = cljs.core.keyword_identical_QMARK_.call(null,inst_23388,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23398 = ((inst_23396) || (inst_23397));
var state_23427__$1 = (function (){var statearr_23441 = state_23427;
(statearr_23441[(10)] = inst_23395__$1);

return statearr_23441;
})();
if(cljs.core.truth_(inst_23398)){
var statearr_23442_23465 = state_23427__$1;
(statearr_23442_23465[(1)] = (8));

} else {
var statearr_23443_23466 = state_23427__$1;
(statearr_23443_23466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (14))){
var inst_23420 = (state_23427[(2)]);
var inst_23421 = cljs.core.async.close_BANG_.call(null,out);
var state_23427__$1 = (function (){var statearr_23445 = state_23427;
(statearr_23445[(13)] = inst_23420);

return statearr_23445;
})();
var statearr_23446_23467 = state_23427__$1;
(statearr_23446_23467[(2)] = inst_23421);

(statearr_23446_23467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (10))){
var inst_23410 = (state_23427[(2)]);
var state_23427__$1 = state_23427;
var statearr_23447_23468 = state_23427__$1;
(statearr_23447_23468[(2)] = inst_23410);

(statearr_23447_23468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23428 === (8))){
var inst_23387 = (state_23427[(7)]);
var inst_23391 = (state_23427[(9)]);
var inst_23395 = (state_23427[(10)]);
var inst_23400 = inst_23387.push(inst_23391);
var tmp23444 = inst_23387;
var inst_23387__$1 = tmp23444;
var inst_23388 = inst_23395;
var state_23427__$1 = (function (){var statearr_23448 = state_23427;
(statearr_23448[(7)] = inst_23387__$1);

(statearr_23448[(14)] = inst_23400);

(statearr_23448[(8)] = inst_23388);

return statearr_23448;
})();
var statearr_23449_23469 = state_23427__$1;
(statearr_23449_23469[(2)] = null);

(statearr_23449_23469[(1)] = (2));


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
}
});})(c__21551__auto___23455,out))
;
return ((function (switch__21460__auto__,c__21551__auto___23455,out){
return (function() {
var cljs$core$async$state_machine__21461__auto__ = null;
var cljs$core$async$state_machine__21461__auto____0 = (function (){
var statearr_23450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23450[(0)] = cljs$core$async$state_machine__21461__auto__);

(statearr_23450[(1)] = (1));

return statearr_23450;
});
var cljs$core$async$state_machine__21461__auto____1 = (function (state_23427){
while(true){
var ret_value__21462__auto__ = (function (){try{while(true){
var result__21463__auto__ = switch__21460__auto__.call(null,state_23427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21463__auto__;
}
break;
}
}catch (e23451){if((e23451 instanceof Object)){
var ex__21464__auto__ = e23451;
var statearr_23452_23470 = state_23427;
(statearr_23452_23470[(5)] = ex__21464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23471 = state_23427;
state_23427 = G__23471;
continue;
} else {
return ret_value__21462__auto__;
}
break;
}
});
cljs$core$async$state_machine__21461__auto__ = function(state_23427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21461__auto____1.call(this,state_23427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21461__auto____0;
cljs$core$async$state_machine__21461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21461__auto____1;
return cljs$core$async$state_machine__21461__auto__;
})()
;})(switch__21460__auto__,c__21551__auto___23455,out))
})();
var state__21553__auto__ = (function (){var statearr_23453 = f__21552__auto__.call(null);
(statearr_23453[(6)] = c__21551__auto___23455);

return statearr_23453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21553__auto__);
});})(c__21551__auto___23455,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
