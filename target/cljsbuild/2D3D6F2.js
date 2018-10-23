goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__17525__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17526__i = 0, G__17526__a = new Array(arguments.length -  0);
while (G__17526__i < G__17526__a.length) {G__17526__a[G__17526__i] = arguments[G__17526__i + 0]; ++G__17526__i;}
  args = new cljs.core.IndexedSeq(G__17526__a,0,null);
} 
return G__17525__delegate.call(this,args);};
G__17525.cljs$lang$maxFixedArity = 0;
G__17525.cljs$lang$applyTo = (function (arglist__17527){
var args = cljs.core.seq(arglist__17527);
return G__17525__delegate(args);
});
G__17525.cljs$core$IFn$_invoke$arity$variadic = G__17525__delegate;
return G__17525;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__17528__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17529__i = 0, G__17529__a = new Array(arguments.length -  0);
while (G__17529__i < G__17529__a.length) {G__17529__a[G__17529__i] = arguments[G__17529__i + 0]; ++G__17529__i;}
  args = new cljs.core.IndexedSeq(G__17529__a,0,null);
} 
return G__17528__delegate.call(this,args);};
G__17528.cljs$lang$maxFixedArity = 0;
G__17528.cljs$lang$applyTo = (function (arglist__17530){
var args = cljs.core.seq(arglist__17530);
return G__17528__delegate(args);
});
G__17528.cljs$core$IFn$_invoke$arity$variadic = G__17528__delegate;
return G__17528;
})()
);

return null;
});
