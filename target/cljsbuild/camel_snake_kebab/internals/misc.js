// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23979 = arguments.length;
var i__4532__auto___23980 = (0);
while(true){
if((i__4532__auto___23980 < len__4531__auto___23979)){
args__4534__auto__.push((arguments[i__4532__auto___23980]));

var G__23981 = (i__4532__auto___23980 + (1));
i__4532__auto___23980 = G__23981;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__23973){
var map__23974 = p__23973;
var map__23974__$1 = ((((!((map__23974 == null)))?(((((map__23974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23974):map__23974);
var separator = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__23976 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__23977 = cljs.core.seq.call(null,vec__23976);
var first__23978 = cljs.core.first.call(null,seq__23977);
var seq__23977__$1 = cljs.core.next.call(null,seq__23977);
var first = first__23978;
var rest = seq__23977__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq23968){
var G__23969 = cljs.core.first.call(null,seq23968);
var seq23968__$1 = cljs.core.next.call(null,seq23968);
var G__23970 = cljs.core.first.call(null,seq23968__$1);
var seq23968__$2 = cljs.core.next.call(null,seq23968__$1);
var G__23971 = cljs.core.first.call(null,seq23968__$2);
var seq23968__$3 = cljs.core.next.call(null,seq23968__$2);
var G__23972 = cljs.core.first.call(null,seq23968__$3);
var seq23968__$4 = cljs.core.next.call(null,seq23968__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23969,G__23970,G__23971,G__23972,seq23968__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__3949__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map
