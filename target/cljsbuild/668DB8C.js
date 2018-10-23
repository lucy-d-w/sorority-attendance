goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__25589__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25590__i = 0, G__25590__a = new Array(arguments.length -  0);
while (G__25590__i < G__25590__a.length) {G__25590__a[G__25590__i] = arguments[G__25590__i + 0]; ++G__25590__i;}
  args = new cljs.core.IndexedSeq(G__25590__a,0,null);
} 
return G__25589__delegate.call(this,args);};
G__25589.cljs$lang$maxFixedArity = 0;
G__25589.cljs$lang$applyTo = (function (arglist__25591){
var args = cljs.core.seq(arglist__25591);
return G__25589__delegate(args);
});
G__25589.cljs$core$IFn$_invoke$arity$variadic = G__25589__delegate;
return G__25589;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__25592__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25593__i = 0, G__25593__a = new Array(arguments.length -  0);
while (G__25593__i < G__25593__a.length) {G__25593__a[G__25593__i] = arguments[G__25593__i + 0]; ++G__25593__i;}
  args = new cljs.core.IndexedSeq(G__25593__a,0,null);
} 
return G__25592__delegate.call(this,args);};
G__25592.cljs$lang$maxFixedArity = 0;
G__25592.cljs$lang$applyTo = (function (arglist__25594){
var args = cljs.core.seq(arglist__25594);
return G__25592__delegate(args);
});
G__25592.cljs$core$IFn$_invoke$arity$variadic = G__25592__delegate;
return G__25592;
})()
);

return null;
});
