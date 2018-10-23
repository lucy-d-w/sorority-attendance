// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24170 = arguments.length;
var i__4532__auto___24171 = (0);
while(true){
if((i__4532__auto___24171 < len__4531__auto___24170)){
args__4534__auto__.push((arguments[i__4532__auto___24171]));

var G__24172 = (i__4532__auto___24171 + (1));
i__4532__auto___24171 = G__24172;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq24165){
var G__24166 = cljs.core.first.call(null,seq24165);
var seq24165__$1 = cljs.core.next.call(null,seq24165);
var G__24167 = cljs.core.first.call(null,seq24165__$1);
var seq24165__$2 = cljs.core.next.call(null,seq24165__$1);
var G__24168 = cljs.core.first.call(null,seq24165__$2);
var seq24165__$3 = cljs.core.next.call(null,seq24165__$2);
var G__24169 = cljs.core.first.call(null,seq24165__$3);
var seq24165__$4 = cljs.core.next.call(null,seq24165__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24166,G__24167,G__24168,G__24169,seq24165__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24181 = arguments.length;
var i__4532__auto___24182 = (0);
while(true){
if((i__4532__auto___24182 < len__4531__auto___24181)){
args__4534__auto__.push((arguments[i__4532__auto___24182]));

var G__24183 = (i__4532__auto___24182 + (1));
i__4532__auto___24182 = G__24183;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24128__auto__,rest__24129__auto__){
var convert_case__24130__auto__ = (function (p1__24127__24131__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24127__24131__auto__,rest__24129__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24128__auto__,convert_case__24130__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24173){
var G__24174 = cljs.core.first.call(null,seq24173);
var seq24173__$1 = cljs.core.next.call(null,seq24173);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24174,seq24173__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24184 = arguments.length;
var i__4532__auto___24185 = (0);
while(true){
if((i__4532__auto___24185 < len__4531__auto___24184)){
args__4534__auto__.push((arguments[i__4532__auto___24185]));

var G__24186 = (i__4532__auto___24185 + (1));
i__4532__auto___24185 = G__24186;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24175){
var G__24176 = cljs.core.first.call(null,seq24175);
var seq24175__$1 = cljs.core.next.call(null,seq24175);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24176,seq24175__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24187 = arguments.length;
var i__4532__auto___24188 = (0);
while(true){
if((i__4532__auto___24188 < len__4531__auto___24187)){
args__4534__auto__.push((arguments[i__4532__auto___24188]));

var G__24189 = (i__4532__auto___24188 + (1));
i__4532__auto___24188 = G__24189;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24177){
var G__24178 = cljs.core.first.call(null,seq24177);
var seq24177__$1 = cljs.core.next.call(null,seq24177);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24178,seq24177__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24190 = arguments.length;
var i__4532__auto___24191 = (0);
while(true){
if((i__4532__auto___24191 < len__4531__auto___24190)){
args__4534__auto__.push((arguments[i__4532__auto___24191]));

var G__24192 = (i__4532__auto___24191 + (1));
i__4532__auto___24191 = G__24192;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq24179){
var G__24180 = cljs.core.first.call(null,seq24179);
var seq24179__$1 = cljs.core.next.call(null,seq24179);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24180,seq24179__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24201 = arguments.length;
var i__4532__auto___24202 = (0);
while(true){
if((i__4532__auto___24202 < len__4531__auto___24201)){
args__4534__auto__.push((arguments[i__4532__auto___24202]));

var G__24203 = (i__4532__auto___24202 + (1));
i__4532__auto___24202 = G__24203;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24128__auto__,rest__24129__auto__){
var convert_case__24130__auto__ = (function (p1__24127__24131__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24127__24131__auto__,rest__24129__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24128__auto__,convert_case__24130__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24193){
var G__24194 = cljs.core.first.call(null,seq24193);
var seq24193__$1 = cljs.core.next.call(null,seq24193);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24194,seq24193__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24204 = arguments.length;
var i__4532__auto___24205 = (0);
while(true){
if((i__4532__auto___24205 < len__4531__auto___24204)){
args__4534__auto__.push((arguments[i__4532__auto___24205]));

var G__24206 = (i__4532__auto___24205 + (1));
i__4532__auto___24205 = G__24206;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24195){
var G__24196 = cljs.core.first.call(null,seq24195);
var seq24195__$1 = cljs.core.next.call(null,seq24195);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24196,seq24195__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24207 = arguments.length;
var i__4532__auto___24208 = (0);
while(true){
if((i__4532__auto___24208 < len__4531__auto___24207)){
args__4534__auto__.push((arguments[i__4532__auto___24208]));

var G__24209 = (i__4532__auto___24208 + (1));
i__4532__auto___24208 = G__24209;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24197){
var G__24198 = cljs.core.first.call(null,seq24197);
var seq24197__$1 = cljs.core.next.call(null,seq24197);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24198,seq24197__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24210 = arguments.length;
var i__4532__auto___24211 = (0);
while(true){
if((i__4532__auto___24211 < len__4531__auto___24210)){
args__4534__auto__.push((arguments[i__4532__auto___24211]));

var G__24212 = (i__4532__auto___24211 + (1));
i__4532__auto___24211 = G__24212;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq24199){
var G__24200 = cljs.core.first.call(null,seq24199);
var seq24199__$1 = cljs.core.next.call(null,seq24199);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24200,seq24199__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24221 = arguments.length;
var i__4532__auto___24222 = (0);
while(true){
if((i__4532__auto___24222 < len__4531__auto___24221)){
args__4534__auto__.push((arguments[i__4532__auto___24222]));

var G__24223 = (i__4532__auto___24222 + (1));
i__4532__auto___24222 = G__24223;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24128__auto__,rest__24129__auto__){
var convert_case__24130__auto__ = (function (p1__24127__24131__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24127__24131__auto__,rest__24129__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24128__auto__,convert_case__24130__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24213){
var G__24214 = cljs.core.first.call(null,seq24213);
var seq24213__$1 = cljs.core.next.call(null,seq24213);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24214,seq24213__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24224 = arguments.length;
var i__4532__auto___24225 = (0);
while(true){
if((i__4532__auto___24225 < len__4531__auto___24224)){
args__4534__auto__.push((arguments[i__4532__auto___24225]));

var G__24226 = (i__4532__auto___24225 + (1));
i__4532__auto___24225 = G__24226;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24215){
var G__24216 = cljs.core.first.call(null,seq24215);
var seq24215__$1 = cljs.core.next.call(null,seq24215);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24216,seq24215__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24227 = arguments.length;
var i__4532__auto___24228 = (0);
while(true){
if((i__4532__auto___24228 < len__4531__auto___24227)){
args__4534__auto__.push((arguments[i__4532__auto___24228]));

var G__24229 = (i__4532__auto___24228 + (1));
i__4532__auto___24228 = G__24229;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24217){
var G__24218 = cljs.core.first.call(null,seq24217);
var seq24217__$1 = cljs.core.next.call(null,seq24217);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24218,seq24217__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24230 = arguments.length;
var i__4532__auto___24231 = (0);
while(true){
if((i__4532__auto___24231 < len__4531__auto___24230)){
args__4534__auto__.push((arguments[i__4532__auto___24231]));

var G__24232 = (i__4532__auto___24231 + (1));
i__4532__auto___24231 = G__24232;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq24219){
var G__24220 = cljs.core.first.call(null,seq24219);
var seq24219__$1 = cljs.core.next.call(null,seq24219);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24220,seq24219__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24241 = arguments.length;
var i__4532__auto___24242 = (0);
while(true){
if((i__4532__auto___24242 < len__4531__auto___24241)){
args__4534__auto__.push((arguments[i__4532__auto___24242]));

var G__24243 = (i__4532__auto___24242 + (1));
i__4532__auto___24242 = G__24243;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24128__auto__,rest__24129__auto__){
var convert_case__24130__auto__ = (function (p1__24127__24131__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24127__24131__auto__,rest__24129__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24128__auto__,convert_case__24130__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24233){
var G__24234 = cljs.core.first.call(null,seq24233);
var seq24233__$1 = cljs.core.next.call(null,seq24233);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24234,seq24233__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24244 = arguments.length;
var i__4532__auto___24245 = (0);
while(true){
if((i__4532__auto___24245 < len__4531__auto___24244)){
args__4534__auto__.push((arguments[i__4532__auto___24245]));

var G__24246 = (i__4532__auto___24245 + (1));
i__4532__auto___24245 = G__24246;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24235){
var G__24236 = cljs.core.first.call(null,seq24235);
var seq24235__$1 = cljs.core.next.call(null,seq24235);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24236,seq24235__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24247 = arguments.length;
var i__4532__auto___24248 = (0);
while(true){
if((i__4532__auto___24248 < len__4531__auto___24247)){
args__4534__auto__.push((arguments[i__4532__auto___24248]));

var G__24249 = (i__4532__auto___24248 + (1));
i__4532__auto___24248 = G__24249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24237){
var G__24238 = cljs.core.first.call(null,seq24237);
var seq24237__$1 = cljs.core.next.call(null,seq24237);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24238,seq24237__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24250 = arguments.length;
var i__4532__auto___24251 = (0);
while(true){
if((i__4532__auto___24251 < len__4531__auto___24250)){
args__4534__auto__.push((arguments[i__4532__auto___24251]));

var G__24252 = (i__4532__auto___24251 + (1));
i__4532__auto___24251 = G__24252;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq24239){
var G__24240 = cljs.core.first.call(null,seq24239);
var seq24239__$1 = cljs.core.next.call(null,seq24239);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24240,seq24239__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24261 = arguments.length;
var i__4532__auto___24262 = (0);
while(true){
if((i__4532__auto___24262 < len__4531__auto___24261)){
args__4534__auto__.push((arguments[i__4532__auto___24262]));

var G__24263 = (i__4532__auto___24262 + (1));
i__4532__auto___24262 = G__24263;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24128__auto__,rest__24129__auto__){
var convert_case__24130__auto__ = (function (p1__24127__24131__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24127__24131__auto__,rest__24129__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24128__auto__,convert_case__24130__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24253){
var G__24254 = cljs.core.first.call(null,seq24253);
var seq24253__$1 = cljs.core.next.call(null,seq24253);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24254,seq24253__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24264 = arguments.length;
var i__4532__auto___24265 = (0);
while(true){
if((i__4532__auto___24265 < len__4531__auto___24264)){
args__4534__auto__.push((arguments[i__4532__auto___24265]));

var G__24266 = (i__4532__auto___24265 + (1));
i__4532__auto___24265 = G__24266;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24255){
var G__24256 = cljs.core.first.call(null,seq24255);
var seq24255__$1 = cljs.core.next.call(null,seq24255);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24256,seq24255__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24267 = arguments.length;
var i__4532__auto___24268 = (0);
while(true){
if((i__4532__auto___24268 < len__4531__auto___24267)){
args__4534__auto__.push((arguments[i__4532__auto___24268]));

var G__24269 = (i__4532__auto___24268 + (1));
i__4532__auto___24268 = G__24269;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24257){
var G__24258 = cljs.core.first.call(null,seq24257);
var seq24257__$1 = cljs.core.next.call(null,seq24257);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24258,seq24257__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24270 = arguments.length;
var i__4532__auto___24271 = (0);
while(true){
if((i__4532__auto___24271 < len__4531__auto___24270)){
args__4534__auto__.push((arguments[i__4532__auto___24271]));

var G__24272 = (i__4532__auto___24271 + (1));
i__4532__auto___24271 = G__24272;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq24259){
var G__24260 = cljs.core.first.call(null,seq24259);
var seq24259__$1 = cljs.core.next.call(null,seq24259);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24260,seq24259__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24281 = arguments.length;
var i__4532__auto___24282 = (0);
while(true){
if((i__4532__auto___24282 < len__4531__auto___24281)){
args__4534__auto__.push((arguments[i__4532__auto___24282]));

var G__24283 = (i__4532__auto___24282 + (1));
i__4532__auto___24282 = G__24283;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24128__auto__,rest__24129__auto__){
var convert_case__24130__auto__ = (function (p1__24127__24131__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24127__24131__auto__,rest__24129__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24128__auto__,convert_case__24130__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24273){
var G__24274 = cljs.core.first.call(null,seq24273);
var seq24273__$1 = cljs.core.next.call(null,seq24273);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24274,seq24273__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24284 = arguments.length;
var i__4532__auto___24285 = (0);
while(true){
if((i__4532__auto___24285 < len__4531__auto___24284)){
args__4534__auto__.push((arguments[i__4532__auto___24285]));

var G__24286 = (i__4532__auto___24285 + (1));
i__4532__auto___24285 = G__24286;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24275){
var G__24276 = cljs.core.first.call(null,seq24275);
var seq24275__$1 = cljs.core.next.call(null,seq24275);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24276,seq24275__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24287 = arguments.length;
var i__4532__auto___24288 = (0);
while(true){
if((i__4532__auto___24288 < len__4531__auto___24287)){
args__4534__auto__.push((arguments[i__4532__auto___24288]));

var G__24289 = (i__4532__auto___24288 + (1));
i__4532__auto___24288 = G__24289;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24277){
var G__24278 = cljs.core.first.call(null,seq24277);
var seq24277__$1 = cljs.core.next.call(null,seq24277);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24278,seq24277__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24290 = arguments.length;
var i__4532__auto___24291 = (0);
while(true){
if((i__4532__auto___24291 < len__4531__auto___24290)){
args__4534__auto__.push((arguments[i__4532__auto___24291]));

var G__24292 = (i__4532__auto___24291 + (1));
i__4532__auto___24291 = G__24292;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq24279){
var G__24280 = cljs.core.first.call(null,seq24279);
var seq24279__$1 = cljs.core.next.call(null,seq24279);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24280,seq24279__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24301 = arguments.length;
var i__4532__auto___24302 = (0);
while(true){
if((i__4532__auto___24302 < len__4531__auto___24301)){
args__4534__auto__.push((arguments[i__4532__auto___24302]));

var G__24303 = (i__4532__auto___24302 + (1));
i__4532__auto___24302 = G__24303;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24128__auto__,rest__24129__auto__){
var convert_case__24130__auto__ = (function (p1__24127__24131__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24127__24131__auto__,rest__24129__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24128__auto__,convert_case__24130__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24293){
var G__24294 = cljs.core.first.call(null,seq24293);
var seq24293__$1 = cljs.core.next.call(null,seq24293);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24294,seq24293__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24304 = arguments.length;
var i__4532__auto___24305 = (0);
while(true){
if((i__4532__auto___24305 < len__4531__auto___24304)){
args__4534__auto__.push((arguments[i__4532__auto___24305]));

var G__24306 = (i__4532__auto___24305 + (1));
i__4532__auto___24305 = G__24306;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24295){
var G__24296 = cljs.core.first.call(null,seq24295);
var seq24295__$1 = cljs.core.next.call(null,seq24295);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24296,seq24295__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24307 = arguments.length;
var i__4532__auto___24308 = (0);
while(true){
if((i__4532__auto___24308 < len__4531__auto___24307)){
args__4534__auto__.push((arguments[i__4532__auto___24308]));

var G__24309 = (i__4532__auto___24308 + (1));
i__4532__auto___24308 = G__24309;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24297){
var G__24298 = cljs.core.first.call(null,seq24297);
var seq24297__$1 = cljs.core.next.call(null,seq24297);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24298,seq24297__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24310 = arguments.length;
var i__4532__auto___24311 = (0);
while(true){
if((i__4532__auto___24311 < len__4531__auto___24310)){
args__4534__auto__.push((arguments[i__4532__auto___24311]));

var G__24312 = (i__4532__auto___24311 + (1));
i__4532__auto___24311 = G__24312;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24133__auto__,rest__24134__auto__){
if(!((s__24133__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24133__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__24133__auto__),rest__24134__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24299){
var G__24300 = cljs.core.first.call(null,seq24299);
var seq24299__$1 = cljs.core.next.call(null,seq24299);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24300,seq24299__$1);
});


//# sourceMappingURL=core.js.map
