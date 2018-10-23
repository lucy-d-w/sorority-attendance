// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs_lambda.aws.event');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
goog.require('clojure.set');
goog.require('clojure.string');
if((typeof cljs_lambda !== 'undefined') && (typeof cljs_lambda.aws !== 'undefined') && (typeof cljs_lambda.aws.event !== 'undefined') && (typeof cljs_lambda.aws.event.from_aws !== 'undefined')){
} else {
/**
 * Interpret input map `event` as an AWS event input.  The map's
 *   `:aws.event/type` key will be used to inform transformations.
 */
cljs_lambda.aws.event.from_aws = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-lambda.aws.event","from-aws"),new cljs.core.Keyword("aws.event","type","aws.event/type",-724969211),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs_lambda.aws.event.ag_renames = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"queryStringParameters","queryStringParameters",-2124043163),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"statusCode","statusCode",-34606052),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"httpMethod","httpMethod",-967300902),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"resourcePath","resourcePath",1301588715),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"isBase64Encoded","isBase64Encoded",-1997347722),new cljs.core.Keyword(null,"base64?","base64?",-334648167),new cljs.core.Keyword(null,"requestContext","requestContext",-1278844454),new cljs.core.Keyword(null,"context","context",-830191113)], null);
cljs_lambda.aws.event.apply_keys = (function cljs_lambda$aws$event$apply_keys(m,f){
return camel_snake_kebab.extras.transform_keys.call(null,f,m);
});
cljs_lambda.aws.event.lower_case_k = (function cljs_lambda$aws$event$lower_case_k(k){
return cljs.core.keyword.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,k)));
});
cljs_lambda.aws.event.unmethod = (function cljs_lambda$aws$event$unmethod(s){
var G__24383 = s;
if((G__24383 == null)){
return null;
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,G__24383);
}
});
cljs_lambda.aws.event.rekey = (function cljs_lambda$aws$event$rekey(k,renames){
var temp__5455__auto__ = renames.call(null,k);
if(cljs.core.truth_(temp__5455__auto__)){
var k__$1 = temp__5455__auto__;
return k__$1;
} else {
var G__24384 = k;
if(cljs.core.not.call(null,cljs.core.namespace.call(null,k))){
return camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,G__24384);
} else {
return G__24384;
}
}
});
cljs_lambda.aws.event.unfuck = (function cljs_lambda$aws$event$unfuck(var_args){
var G__24386 = arguments.length;
switch (G__24386) {
case 1:
return cljs_lambda.aws.event.unfuck.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs_lambda.aws.event.unfuck.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_lambda.aws.event.unfuck.cljs$core$IFn$_invoke$arity$1 = (function (m){
return cljs_lambda.aws.event.unfuck.call(null,m,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});

cljs_lambda.aws.event.unfuck.cljs$core$IFn$_invoke$arity$3 = (function (m,ignore_QMARK_,renames){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
var k__$1 = cljs_lambda.aws.event.rekey.call(null,k,renames);
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc_BANG_.call(null,m__$1,k__$1,(cljs.core.truth_(ignore_QMARK_.call(null,k__$1))?v:((cljs.core.map_QMARK_.call(null,v))?cljs_lambda.aws.event.unfuck.call(null,v,ignore_QMARK_,renames):v
)));
}
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
});

cljs_lambda.aws.event.unfuck.cljs$lang$maxFixedArity = 3;

cljs.core._add_method.call(null,cljs_lambda.aws.event.from_aws,new cljs.core.Keyword(null,"api-gateway","api-gateway",-1619869738),(function (m){
return cljs.core.update_in.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs_lambda.aws.event.unfuck.call(null,m,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),cljs_lambda.aws.event.ag_renames),new cljs.core.Keyword(null,"method","method",55703592),cljs_lambda.aws.event.unmethod),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_lambda.aws.event.apply_keys,cljs_lambda.aws.event.lower_case_k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"method","method",55703592)], null),cljs_lambda.aws.event.unmethod);
}));
cljs_lambda.aws.event.source__GT_key = (function cljs_lambda$aws$event$source__GT_key(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24396 = arguments.length;
var i__4532__auto___24397 = (0);
while(true){
if((i__4532__auto___24397 < len__4531__auto___24396)){
args__4534__auto__.push((arguments[i__4532__auto___24397]));

var G__24398 = (i__4532__auto___24397 + (1));
i__4532__auto___24397 = G__24398;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_lambda.aws.event.source__GT_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_lambda.aws.event.source__GT_key.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__24390){
var vec__24391 = p__24390;
var map__24394 = cljs.core.nth.call(null,vec__24391,(0),null);
var map__24394__$1 = ((((!((map__24394 == null)))?(((((map__24394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24394):map__24394);
var delim = cljs.core.get.call(null,map__24394__$1,new cljs.core.Keyword(null,"delim","delim",1621565472),":");
if(cljs.core.truth_(s)){
var temp__5455__auto__ = clojure.string.index_of.call(null,s,delim);
if(cljs.core.truth_(temp__5455__auto__)){
var i = temp__5455__auto__;
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(0),i),cljs.core.subs.call(null,s,(i + (1))));
} else {
return cljs.core.keyword.call(null,s);
}
} else {
return null;
}
});

cljs_lambda.aws.event.source__GT_key.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_lambda.aws.event.source__GT_key.cljs$lang$applyTo = (function (seq24388){
var G__24389 = cljs.core.first.call(null,seq24388);
var seq24388__$1 = cljs.core.next.call(null,seq24388);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24389,seq24388__$1);
});

if((typeof cljs_lambda !== 'undefined') && (typeof cljs_lambda.aws !== 'undefined') && (typeof cljs_lambda.aws.event !== 'undefined') && (typeof cljs_lambda.aws.event.notification__GT_cljs !== 'undefined')){
} else {
cljs_lambda.aws.event.notification__GT_cljs = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-lambda.aws.event","notification->cljs"),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs_lambda.aws.event.sns_attrs__GT_cljs = (function cljs_lambda$aws$event$sns_attrs__GT_cljs(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function cljs_lambda$aws$event$sns_attrs__GT_cljs_$_iter__24399(s__24400){
return (new cljs.core.LazySeq(null,(function (){
var s__24400__$1 = s__24400;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24400__$1);
if(temp__5457__auto__){
var s__24400__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24400__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24400__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24402 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24401 = (0);
while(true){
if((i__24401 < size__4323__auto__)){
var vec__24403 = cljs.core._nth.call(null,c__4322__auto__,i__24401);
var k = cljs.core.nth.call(null,vec__24403,(0),null);
var attr = cljs.core.nth.call(null,vec__24403,(1),null);
cljs.core.chunk_append.call(null,b__24402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,attr.call(null,new cljs.core.Keyword(null,"Type","Type",-1483634215))),new cljs.core.Keyword(null,"value","value",305978217),attr.call(null,new cljs.core.Keyword(null,"Value","Value",388561431))], null)], null));

var G__24409 = (i__24401 + (1));
i__24401 = G__24409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24402),cljs_lambda$aws$event$sns_attrs__GT_cljs_$_iter__24399.call(null,cljs.core.chunk_rest.call(null,s__24400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24402),null);
}
} else {
var vec__24406 = cljs.core.first.call(null,s__24400__$2);
var k = cljs.core.nth.call(null,vec__24406,(0),null);
var attr = cljs.core.nth.call(null,vec__24406,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,attr.call(null,new cljs.core.Keyword(null,"Type","Type",-1483634215))),new cljs.core.Keyword(null,"value","value",305978217),attr.call(null,new cljs.core.Keyword(null,"Value","Value",388561431))], null)], null),cljs_lambda$aws$event$sns_attrs__GT_cljs_$_iter__24399.call(null,cljs.core.rest.call(null,s__24400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,m);
})());
});
cljs.core._add_method.call(null,cljs_lambda.aws.event.notification__GT_cljs,new cljs.core.Keyword("aws","sns","aws/sns",-873087609),(function (p__24410){
var map__24411 = p__24410;
var map__24411__$1 = ((((!((map__24411 == null)))?(((((map__24411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24411):map__24411);
var m = map__24411__$1;
var sns = cljs.core.get.call(null,map__24411__$1,new cljs.core.Keyword(null,"Sns","Sns",-1947656007));
var sns__$1 = cljs.core.update.call(null,cljs.core.update.call(null,cljs_lambda.aws.event.unfuck.call(null,sns,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"MessageAttributes","MessageAttributes",525892349),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"TopicArn","TopicArn",-1275685401),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"MessageId","MessageId",1398961230),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"type","type",1174270348),camel_snake_kebab.core.__GT_kebab_case_keyword),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs_lambda.aws.event.sns_attrs__GT_cljs);
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"Sns","Sns",-1947656007)),new cljs.core.Keyword(null,"sns","sns",-873381754),sns__$1);
}));
cljs_lambda.aws.event.update_when = (function cljs_lambda$aws$event$update_when(m,k,f){
var G__24413 = m;
if(!((m.call(null,k) == null))){
return cljs.core.update.call(null,G__24413,k,f);
} else {
return G__24413;
}
});
var renames_24414 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"responseElements","responseElements",1111574374),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"requestParameters","requestParameters",769634282),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"userIdentity","userIdentity",1040485874),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"eTag","eTag",-359698611),new cljs.core.Keyword(null,"etag","etag",-329255476),new cljs.core.Keyword(null,"s3","s3",969970109),new cljs.core.Keyword(null,"s3","s3",969970109),new cljs.core.Keyword(null,"s3SchemaVersion","s3SchemaVersion",-1843087039),new cljs.core.Keyword(null,"s3-schema-version","s3-schema-version",-2141960197)], null);
cljs.core._add_method.call(null,cljs_lambda.aws.event.notification__GT_cljs,new cljs.core.Keyword("aws","s3","aws/s3",970399474),((function (renames_24414){
return (function (m){
return cljs_lambda.aws.event.update_when.call(null,cljs_lambda.aws.event.unfuck.call(null,m,cljs.core.PersistentHashSet.EMPTY,renames_24414),new cljs.core.Keyword(null,"region","region",270415120),cljs.core.keyword);
});})(renames_24414))
);
var renames_24422 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"EventSource","EventSource",1567379144),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"eventSource","eventSource",618437337),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"awsRegion","awsRegion",1400325988),new cljs.core.Keyword(null,"region","region",270415120),new cljs.core.Keyword(null,"EventVersion","EventVersion",-1088568897),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"EventSubscriptionArn","EventSubscriptionArn",-809532944),new cljs.core.Keyword(null,"subscription","subscription",1949009182)], null);
cljs.core._add_method.call(null,cljs_lambda.aws.event.from_aws,new cljs.core.Keyword(null,"notification","notification",-222338233),((function (renames_24422){
return (function (p__24415){
var map__24416 = p__24415;
var map__24416__$1 = ((((!((map__24416 == null)))?(((((map__24416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24416):map__24416);
var records = cljs.core.get.call(null,map__24416__$1,new cljs.core.Keyword(null,"Records","Records",-1562168015));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"records","records",1326822832),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4324__auto__ = ((function (map__24416,map__24416__$1,records,renames_24422){
return (function cljs_lambda$aws$event$iter__24418(s__24419){
return (new cljs.core.LazySeq(null,((function (map__24416,map__24416__$1,records,renames_24422){
return (function (){
var s__24419__$1 = s__24419;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24419__$1);
if(temp__5457__auto__){
var s__24419__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24419__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24419__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24421 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24420 = (0);
while(true){
if((i__24420 < size__4323__auto__)){
var record = cljs.core._nth.call(null,c__4322__auto__,i__24420);
cljs.core.chunk_append.call(null,b__24421,cljs_lambda.aws.event.notification__GT_cljs.call(null,cljs.core.update.call(null,clojure.set.rename_keys.call(null,record,renames_24422),new cljs.core.Keyword(null,"source","source",-433931539),cljs_lambda.aws.event.source__GT_key)));

var G__24423 = (i__24420 + (1));
i__24420 = G__24423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24421),cljs_lambda$aws$event$iter__24418.call(null,cljs.core.chunk_rest.call(null,s__24419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24421),null);
}
} else {
var record = cljs.core.first.call(null,s__24419__$2);
return cljs.core.cons.call(null,cljs_lambda.aws.event.notification__GT_cljs.call(null,cljs.core.update.call(null,clojure.set.rename_keys.call(null,record,renames_24422),new cljs.core.Keyword(null,"source","source",-433931539),cljs_lambda.aws.event.source__GT_key)),cljs_lambda$aws$event$iter__24418.call(null,cljs.core.rest.call(null,s__24419__$2)));
}
} else {
return null;
}
break;
}
});})(map__24416,map__24416__$1,records,renames_24422))
,null,null));
});})(map__24416,map__24416__$1,records,renames_24422))
;
return iter__4324__auto__.call(null,records);
})()),new cljs.core.Keyword("aws.event","type","aws.event/type",-724969211),new cljs.core.Keyword(null,"notification","notification",-222338233)], null);
});})(renames_24422))
);
cljs.core._add_method.call(null,cljs_lambda.aws.event.from_aws,new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (m){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"source","source",-433931539),cljs_lambda.aws.event.source__GT_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delim","delim",1621565472),"."], null)),new cljs.core.Keyword(null,"region","region",270415120),cljs.core.keyword);
}));
if((typeof cljs_lambda !== 'undefined') && (typeof cljs_lambda.aws !== 'undefined') && (typeof cljs_lambda.aws.event !== 'undefined') && (typeof cljs_lambda.aws.event.to_aws_STAR_ !== 'undefined')){
} else {
/**
 * Interpret input map `event` as an AWS event output.  The map's
 *   `:aws.event/type` key will be used to inform transformations.
 */
cljs_lambda.aws.event.to_aws_STAR_ = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-lambda.aws.event","to-aws*"),new cljs.core.Keyword("aws.event","type","aws.event/type",-724969211),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
var ag_renames_24424 = clojure.set.map_invert.call(null,cljs_lambda.aws.event.ag_renames);
cljs.core._add_method.call(null,cljs_lambda.aws.event.to_aws_STAR_,new cljs.core.Keyword(null,"api-gateway","api-gateway",-1619869738),((function (ag_renames_24424){
return (function (m){
return clojure.set.rename_keys.call(null,m,ag_renames_24424);
});})(ag_renames_24424))
);
/**
 * Inverse of [[from-aws]], for response/output events.  Defers
 *   to [[to-aws*]], and removes `:aws.event/type`, on the assumption that the
 *   returned map will be passed to AWS.
 */
cljs_lambda.aws.event.to_aws = (function cljs_lambda$aws$event$to_aws(p__24425){
var map__24426 = p__24425;
var map__24426__$1 = ((((!((map__24426 == null)))?(((((map__24426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24426):map__24426);
var event = map__24426__$1;
var type = cljs.core.get.call(null,map__24426__$1,new cljs.core.Keyword("aws.event","type","aws.event/type",-724969211));
return cljs.core.dissoc.call(null,cljs_lambda.aws.event.to_aws_STAR_.call(null,event),new cljs.core.Keyword("aws.event","type","aws.event/type",-724969211));
});

//# sourceMappingURL=event.js.map
