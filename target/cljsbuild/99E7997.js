goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__17506__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17507__i = 0, G__17507__a = new Array(arguments.length -  0);
while (G__17507__i < G__17507__a.length) {G__17507__a[G__17507__i] = arguments[G__17507__i + 0]; ++G__17507__i;}
  args = new cljs.core.IndexedSeq(G__17507__a,0,null);
} 
return G__17506__delegate.call(this,args);};
G__17506.cljs$lang$maxFixedArity = 0;
G__17506.cljs$lang$applyTo = (function (arglist__17508){
var args = cljs.core.seq(arglist__17508);
return G__17506__delegate(args);
});
G__17506.cljs$core$IFn$_invoke$arity$variadic = G__17506__delegate;
return G__17506;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__17509__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17510__i = 0, G__17510__a = new Array(arguments.length -  0);
while (G__17510__i < G__17510__a.length) {G__17510__a[G__17510__i] = arguments[G__17510__i + 0]; ++G__17510__i;}
  args = new cljs.core.IndexedSeq(G__17510__a,0,null);
} 
return G__17509__delegate.call(this,args);};
G__17509.cljs$lang$maxFixedArity = 0;
G__17509.cljs$lang$applyTo = (function (arglist__17511){
var args = cljs.core.seq(arglist__17511);
return G__17509__delegate(args);
});
G__17509.cljs$core$IFn$_invoke$arity$variadic = G__17509__delegate;
return G__17509;
})()
);

return null;
});
