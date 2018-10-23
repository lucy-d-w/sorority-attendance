// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.kvstore');
goog.require('cljs.core');
goog.require('cljs.core.async');

/**
 * @interface
 */
asgnx.kvstore.KeyStore = function(){};

asgnx.kvstore.put_BANG_ = (function asgnx$kvstore$put_BANG_(s,key,value){
if(((!((s == null))) && (!((s.asgnx$kvstore$KeyStore$put_BANG_$arity$3 == null))))){
return s.asgnx$kvstore$KeyStore$put_BANG_$arity$3(s,key,value);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (asgnx.kvstore.put_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,s,key,value);
} else {
var m__4244__auto____$1 = (asgnx.kvstore.put_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,s,key,value);
} else {
throw cljs.core.missing_protocol.call(null,"KeyStore.put!",s);
}
}
}
});

asgnx.kvstore.remove_BANG_ = (function asgnx$kvstore$remove_BANG_(s,key){
if(((!((s == null))) && (!((s.asgnx$kvstore$KeyStore$remove_BANG_$arity$2 == null))))){
return s.asgnx$kvstore$KeyStore$remove_BANG_$arity$2(s,key);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (asgnx.kvstore.remove_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,s,key);
} else {
var m__4244__auto____$1 = (asgnx.kvstore.remove_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,s,key);
} else {
throw cljs.core.missing_protocol.call(null,"KeyStore.remove!",s);
}
}
}
});

asgnx.kvstore.get_BANG_ = (function asgnx$kvstore$get_BANG_(var_args){
var G__16104 = arguments.length;
switch (G__16104) {
case 2:
return asgnx.kvstore.get_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return asgnx.kvstore.get_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

asgnx.kvstore.get_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,key){
if(((!((s == null))) && (!((s.asgnx$kvstore$KeyStore$get_BANG_$arity$2 == null))))){
return s.asgnx$kvstore$KeyStore$get_BANG_$arity$2(s,key);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (asgnx.kvstore.get_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,s,key);
} else {
var m__4244__auto____$1 = (asgnx.kvstore.get_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,s,key);
} else {
throw cljs.core.missing_protocol.call(null,"KeyStore.get!",s);
}
}
}
});

asgnx.kvstore.get_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,key,not_found){
if(((!((s == null))) && (!((s.asgnx$kvstore$KeyStore$get_BANG_$arity$3 == null))))){
return s.asgnx$kvstore$KeyStore$get_BANG_$arity$3(s,key,not_found);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (asgnx.kvstore.get_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,s,key,not_found);
} else {
var m__4244__auto____$1 = (asgnx.kvstore.get_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,s,key,not_found);
} else {
throw cljs.core.missing_protocol.call(null,"KeyStore.get!",s);
}
}
}
});

asgnx.kvstore.get_BANG_.cljs$lang$maxFixedArity = 3;


asgnx.kvstore.list_BANG_ = (function asgnx$kvstore$list_BANG_(s,key_prefix){
if(((!((s == null))) && (!((s.asgnx$kvstore$KeyStore$list_BANG_$arity$2 == null))))){
return s.asgnx$kvstore$KeyStore$list_BANG_$arity$2(s,key_prefix);
} else {
var x__4243__auto__ = (((s == null))?null:s);
var m__4244__auto__ = (asgnx.kvstore.list_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,s,key_prefix);
} else {
var m__4244__auto____$1 = (asgnx.kvstore.list_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,s,key_prefix);
} else {
throw cljs.core.missing_protocol.call(null,"KeyStore.list!",s);
}
}
}
});

asgnx.kvstore.state_put = (function asgnx$kvstore$state_put(m,ks,v){
return cljs.core.assoc_in.call(null,m,ks,v);
});
asgnx.kvstore.dissoc_in = (function asgnx$kvstore$dissoc_in(m,ks){
var temp__5455__auto__ = cljs.core.seq.call(null,ks);
if(temp__5455__auto__){
var vec__16106 = temp__5455__auto__;
var seq__16107 = cljs.core.seq.call(null,vec__16106);
var first__16108 = cljs.core.first.call(null,seq__16107);
var seq__16107__$1 = cljs.core.next.call(null,seq__16107);
var k = first__16108;
var ks__$1 = seq__16107__$1;
if(cljs.core.seq.call(null,ks__$1)){
var v = asgnx.kvstore.dissoc_in.call(null,cljs.core.get.call(null,m,k),ks__$1);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
});
asgnx.kvstore.state_remove = (function asgnx$kvstore$state_remove(m,ks){
return asgnx.kvstore.dissoc_in.call(null,m,ks);
});
asgnx.kvstore.state_get = (function asgnx$kvstore$state_get(m,ks){
return cljs.core.get_in.call(null,m,ks);
});
asgnx.kvstore.state_keys = (function asgnx$kvstore$state_keys(m,ks){
return cljs.core.keys.call(null,cljs.core.get_in.call(null,m,ks));
});

/**
* @constructor
 * @implements {asgnx.kvstore.KeyStore}
*/
asgnx.kvstore.MemStore = (function (matom){
this.matom = matom;
});
asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$ = cljs.core.PROTOCOL_SENTINEL;

asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$put_BANG_$arity$3 = (function (this$,ks,v){
var self__ = this;
var this$__$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,this$__$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,this$__$1){
return (function (state_16111){
var state_val_16112 = (state_16111[(1)]);
if((state_val_16112 === (1))){
var inst_16109 = cljs.core.swap_BANG_.call(null,self__.matom,asgnx.kvstore.state_put,ks,v);
var state_16111__$1 = state_16111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16111__$1,inst_16109);
} else {
return null;
}
});})(c__15840__auto__,this$__$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,this$__$1){
return (function() {
var asgnx$kvstore$state_machine__15818__auto__ = null;
var asgnx$kvstore$state_machine__15818__auto____0 = (function (){
var statearr_16113 = [null,null,null,null,null,null,null];
(statearr_16113[(0)] = asgnx$kvstore$state_machine__15818__auto__);

(statearr_16113[(1)] = (1));

return statearr_16113;
});
var asgnx$kvstore$state_machine__15818__auto____1 = (function (state_16111){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16114){if((e16114 instanceof Object)){
var ex__15821__auto__ = e16114;
var statearr_16115_16152 = state_16111;
(statearr_16115_16152[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16153 = state_16111;
state_16111 = G__16153;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15818__auto__ = function(state_16111){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15818__auto____1.call(this,state_16111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15818__auto____0;
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15818__auto____1;
return asgnx$kvstore$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,this$__$1))
})();
var state__15842__auto__ = (function (){var statearr_16116 = f__15841__auto__.call(null);
(statearr_16116[(6)] = c__15840__auto__);

return statearr_16116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,this$__$1))
);

return c__15840__auto__;
});

asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$remove_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,this$__$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,this$__$1){
return (function (state_16119){
var state_val_16120 = (state_16119[(1)]);
if((state_val_16120 === (1))){
var inst_16117 = cljs.core.swap_BANG_.call(null,self__.matom,asgnx.kvstore.state_remove,ks);
var state_16119__$1 = state_16119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16119__$1,inst_16117);
} else {
return null;
}
});})(c__15840__auto__,this$__$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,this$__$1){
return (function() {
var asgnx$kvstore$state_machine__15818__auto__ = null;
var asgnx$kvstore$state_machine__15818__auto____0 = (function (){
var statearr_16121 = [null,null,null,null,null,null,null];
(statearr_16121[(0)] = asgnx$kvstore$state_machine__15818__auto__);

(statearr_16121[(1)] = (1));

return statearr_16121;
});
var asgnx$kvstore$state_machine__15818__auto____1 = (function (state_16119){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16122){if((e16122 instanceof Object)){
var ex__15821__auto__ = e16122;
var statearr_16123_16154 = state_16119;
(statearr_16123_16154[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16155 = state_16119;
state_16119 = G__16155;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15818__auto__ = function(state_16119){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15818__auto____1.call(this,state_16119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15818__auto____0;
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15818__auto____1;
return asgnx$kvstore$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,this$__$1))
})();
var state__15842__auto__ = (function (){var statearr_16124 = f__15841__auto__.call(null);
(statearr_16124[(6)] = c__15840__auto__);

return statearr_16124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,this$__$1))
);

return c__15840__auto__;
});

asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$2 = (function (s,ks){
var self__ = this;
var s__$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,s__$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,s__$1){
return (function (state_16128){
var state_val_16129 = (state_16128[(1)]);
if((state_val_16129 === (1))){
var inst_16125 = cljs.core.deref.call(null,self__.matom);
var inst_16126 = asgnx.kvstore.state_get.call(null,inst_16125,ks);
var state_16128__$1 = state_16128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16128__$1,inst_16126);
} else {
return null;
}
});})(c__15840__auto__,s__$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,s__$1){
return (function() {
var asgnx$kvstore$state_machine__15818__auto__ = null;
var asgnx$kvstore$state_machine__15818__auto____0 = (function (){
var statearr_16130 = [null,null,null,null,null,null,null];
(statearr_16130[(0)] = asgnx$kvstore$state_machine__15818__auto__);

(statearr_16130[(1)] = (1));

return statearr_16130;
});
var asgnx$kvstore$state_machine__15818__auto____1 = (function (state_16128){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16131){if((e16131 instanceof Object)){
var ex__15821__auto__ = e16131;
var statearr_16132_16156 = state_16128;
(statearr_16132_16156[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16157 = state_16128;
state_16128 = G__16157;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15818__auto__ = function(state_16128){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15818__auto____1.call(this,state_16128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15818__auto____0;
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15818__auto____1;
return asgnx$kvstore$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,s__$1))
})();
var state__15842__auto__ = (function (){var statearr_16133 = f__15841__auto__.call(null);
(statearr_16133[(6)] = c__15840__auto__);

return statearr_16133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,s__$1))
);

return c__15840__auto__;
});

asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$3 = (function (s,ks,dv){
var self__ = this;
var s__$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,s__$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,s__$1){
return (function (state_16137){
var state_val_16138 = (state_16137[(1)]);
if((state_val_16138 === (1))){
var inst_16134 = cljs.core.deref.call(null,self__.matom);
var inst_16135 = asgnx.kvstore.state_get.call(null,inst_16134,ks,dv);
var state_16137__$1 = state_16137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16137__$1,inst_16135);
} else {
return null;
}
});})(c__15840__auto__,s__$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,s__$1){
return (function() {
var asgnx$kvstore$state_machine__15818__auto__ = null;
var asgnx$kvstore$state_machine__15818__auto____0 = (function (){
var statearr_16139 = [null,null,null,null,null,null,null];
(statearr_16139[(0)] = asgnx$kvstore$state_machine__15818__auto__);

(statearr_16139[(1)] = (1));

return statearr_16139;
});
var asgnx$kvstore$state_machine__15818__auto____1 = (function (state_16137){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16140){if((e16140 instanceof Object)){
var ex__15821__auto__ = e16140;
var statearr_16141_16158 = state_16137;
(statearr_16141_16158[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16159 = state_16137;
state_16137 = G__16159;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15818__auto__ = function(state_16137){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15818__auto____1.call(this,state_16137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15818__auto____0;
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15818__auto____1;
return asgnx$kvstore$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,s__$1))
})();
var state__15842__auto__ = (function (){var statearr_16142 = f__15841__auto__.call(null);
(statearr_16142[(6)] = c__15840__auto__);

return statearr_16142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,s__$1))
);

return c__15840__auto__;
});

asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$list_BANG_$arity$2 = (function (s,ks){
var self__ = this;
var s__$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,s__$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,s__$1){
return (function (state_16146){
var state_val_16147 = (state_16146[(1)]);
if((state_val_16147 === (1))){
var inst_16143 = cljs.core.deref.call(null,self__.matom);
var inst_16144 = asgnx.kvstore.state_keys.call(null,inst_16143,ks);
var state_16146__$1 = state_16146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16146__$1,inst_16144);
} else {
return null;
}
});})(c__15840__auto__,s__$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,s__$1){
return (function() {
var asgnx$kvstore$state_machine__15818__auto__ = null;
var asgnx$kvstore$state_machine__15818__auto____0 = (function (){
var statearr_16148 = [null,null,null,null,null,null,null];
(statearr_16148[(0)] = asgnx$kvstore$state_machine__15818__auto__);

(statearr_16148[(1)] = (1));

return statearr_16148;
});
var asgnx$kvstore$state_machine__15818__auto____1 = (function (state_16146){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16149){if((e16149 instanceof Object)){
var ex__15821__auto__ = e16149;
var statearr_16150_16160 = state_16146;
(statearr_16150_16160[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16161 = state_16146;
state_16146 = G__16161;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15818__auto__ = function(state_16146){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15818__auto____1.call(this,state_16146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15818__auto____0;
asgnx$kvstore$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15818__auto____1;
return asgnx$kvstore$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,s__$1))
})();
var state__15842__auto__ = (function (){var statearr_16151 = f__15841__auto__.call(null);
(statearr_16151[(6)] = c__15840__auto__);

return statearr_16151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,s__$1))
);

return c__15840__auto__;
});

asgnx.kvstore.MemStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matom","matom",108957577,null)], null);
});

asgnx.kvstore.MemStore.cljs$lang$type = true;

asgnx.kvstore.MemStore.cljs$lang$ctorStr = "asgnx.kvstore/MemStore";

asgnx.kvstore.MemStore.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"asgnx.kvstore/MemStore");
});

/**
 * Positional factory function for asgnx.kvstore/MemStore.
 */
asgnx.kvstore.__GT_MemStore = (function asgnx$kvstore$__GT_MemStore(matom){
return (new asgnx.kvstore.MemStore(matom));
});

asgnx.kvstore.create = (function asgnx$kvstore$create(var_args){
var G__16163 = arguments.length;
switch (G__16163) {
case 0:
return asgnx.kvstore.create.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return asgnx.kvstore.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

asgnx.kvstore.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new asgnx.kvstore.MemStore(cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)));
});

asgnx.kvstore.create.cljs$core$IFn$_invoke$arity$1 = (function (matom){
return (new asgnx.kvstore.MemStore(matom));
});

asgnx.kvstore.create.cljs$lang$maxFixedArity = 1;

asgnx.kvstore.action_assoc_in = (function asgnx$kvstore$action_assoc_in(system,p__16165){
var map__16166 = p__16165;
var map__16166__$1 = ((((!((map__16166 == null)))?(((((map__16166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16166):map__16166);
var ks = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var v = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"v","v",21465059));
return asgnx.kvstore.put_BANG_.call(null,new cljs.core.Keyword(null,"state-mgr","state-mgr",-1839931632).cljs$core$IFn$_invoke$arity$1(system),ks,v);
});
asgnx.kvstore.action_dissoc_in = (function asgnx$kvstore$action_dissoc_in(system,p__16168){
var map__16169 = p__16168;
var map__16169__$1 = ((((!((map__16169 == null)))?(((((map__16169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16169):map__16169);
var ks = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
return asgnx.kvstore.remove_BANG_.call(null,new cljs.core.Keyword(null,"state-mgr","state-mgr",-1839931632).cljs$core$IFn$_invoke$arity$1(system),ks);
});
asgnx.kvstore.action_handlers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),asgnx.kvstore.action_assoc_in,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),asgnx.kvstore.action_dissoc_in], null);

//# sourceMappingURL=kvstore.js.map
