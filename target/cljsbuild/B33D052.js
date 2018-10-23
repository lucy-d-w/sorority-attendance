goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__17518__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17519__i = 0, G__17519__a = new Array(arguments.length -  0);
while (G__17519__i < G__17519__a.length) {G__17519__a[G__17519__i] = arguments[G__17519__i + 0]; ++G__17519__i;}
  args = new cljs.core.IndexedSeq(G__17519__a,0,null);
} 
return G__17518__delegate.call(this,args);};
G__17518.cljs$lang$maxFixedArity = 0;
G__17518.cljs$lang$applyTo = (function (arglist__17520){
var args = cljs.core.seq(arglist__17520);
return G__17518__delegate(args);
});
G__17518.cljs$core$IFn$_invoke$arity$variadic = G__17518__delegate;
return G__17518;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__17521__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17522__i = 0, G__17522__a = new Array(arguments.length -  0);
while (G__17522__i < G__17522__a.length) {G__17522__a[G__17522__i] = arguments[G__17522__i + 0]; ++G__17522__i;}
  args = new cljs.core.IndexedSeq(G__17522__a,0,null);
} 
return G__17521__delegate.call(this,args);};
G__17521.cljs$lang$maxFixedArity = 0;
G__17521.cljs$lang$applyTo = (function (arglist__17523){
var args = cljs.core.seq(arglist__17523);
return G__17521__delegate(args);
});
G__17521.cljs$core$IFn$_invoke$arity$variadic = G__17521__delegate;
return G__17521;
})()
);

return null;
});
