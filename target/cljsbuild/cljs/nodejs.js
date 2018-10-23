// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__23617__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23618__i = 0, G__23618__a = new Array(arguments.length -  0);
while (G__23618__i < G__23618__a.length) {G__23618__a[G__23618__i] = arguments[G__23618__i + 0]; ++G__23618__i;}
  args = new cljs.core.IndexedSeq(G__23618__a,0,null);
} 
return G__23617__delegate.call(this,args);};
G__23617.cljs$lang$maxFixedArity = 0;
G__23617.cljs$lang$applyTo = (function (arglist__23619){
var args = cljs.core.seq(arglist__23619);
return G__23617__delegate(args);
});
G__23617.cljs$core$IFn$_invoke$arity$variadic = G__23617__delegate;
return G__23617;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__23620__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23621__i = 0, G__23621__a = new Array(arguments.length -  0);
while (G__23621__i < G__23621__a.length) {G__23621__a[G__23621__i] = arguments[G__23621__i + 0]; ++G__23621__i;}
  args = new cljs.core.IndexedSeq(G__23621__a,0,null);
} 
return G__23620__delegate.call(this,args);};
G__23620.cljs$lang$maxFixedArity = 0;
G__23620.cljs$lang$applyTo = (function (arglist__23622){
var args = cljs.core.seq(arglist__23622);
return G__23620__delegate(args);
});
G__23620.cljs$core$IFn$_invoke$arity$variadic = G__23620__delegate;
return G__23620;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
