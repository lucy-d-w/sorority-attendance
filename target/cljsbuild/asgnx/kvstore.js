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
var G__16108 = arguments.length;
switch (G__16108) {
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
var vec__16110 = temp__5455__auto__;
var seq__16111 = cljs.core.seq.call(null,vec__16110);
var first__16112 = cljs.core.first.call(null,seq__16111);
var seq__16111__$1 = cljs.core.next.call(null,seq__16111);
var k = first__16112;
var ks__$1 = seq__16111__$1;
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
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,this$__$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,this$__$1){
return (function (state_16115){
var state_val_16116 = (state_16115[(1)]);
if((state_val_16116 === (1))){
var inst_16113 = cljs.core.swap_BANG_.call(null,self__.matom,asgnx.kvstore.state_put,ks,v);
var state_16115__$1 = state_16115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16115__$1,inst_16113);
} else {
return null;
}
});})(c__15844__auto__,this$__$1))
;
return ((function (switch__15821__auto__,c__15844__auto__,this$__$1){
return (function() {
var asgnx$kvstore$state_machine__15822__auto__ = null;
var asgnx$kvstore$state_machine__15822__auto____0 = (function (){
var statearr_16117 = [null,null,null,null,null,null,null];
(statearr_16117[(0)] = asgnx$kvstore$state_machine__15822__auto__);

(statearr_16117[(1)] = (1));

return statearr_16117;
});
var asgnx$kvstore$state_machine__15822__auto____1 = (function (state_16115){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16118){if((e16118 instanceof Object)){
var ex__15825__auto__ = e16118;
var statearr_16119_16156 = state_16115;
(statearr_16119_16156[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16157 = state_16115;
state_16115 = G__16157;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15822__auto__ = function(state_16115){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15822__auto____1.call(this,state_16115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15822__auto____0;
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15822__auto____1;
return asgnx$kvstore$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,this$__$1))
})();
var state__15846__auto__ = (function (){var statearr_16120 = f__15845__auto__.call(null);
(statearr_16120[(6)] = c__15844__auto__);

return statearr_16120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,this$__$1))
);

return c__15844__auto__;
});

asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$remove_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,this$__$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,this$__$1){
return (function (state_16123){
var state_val_16124 = (state_16123[(1)]);
if((state_val_16124 === (1))){
var inst_16121 = cljs.core.swap_BANG_.call(null,self__.matom,asgnx.kvstore.state_remove,ks);
var state_16123__$1 = state_16123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16123__$1,inst_16121);
} else {
return null;
}
});})(c__15844__auto__,this$__$1))
;
return ((function (switch__15821__auto__,c__15844__auto__,this$__$1){
return (function() {
var asgnx$kvstore$state_machine__15822__auto__ = null;
var asgnx$kvstore$state_machine__15822__auto____0 = (function (){
var statearr_16125 = [null,null,null,null,null,null,null];
(statearr_16125[(0)] = asgnx$kvstore$state_machine__15822__auto__);

(statearr_16125[(1)] = (1));

return statearr_16125;
});
var asgnx$kvstore$state_machine__15822__auto____1 = (function (state_16123){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16126){if((e16126 instanceof Object)){
var ex__15825__auto__ = e16126;
var statearr_16127_16158 = state_16123;
(statearr_16127_16158[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16159 = state_16123;
state_16123 = G__16159;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15822__auto__ = function(state_16123){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15822__auto____1.call(this,state_16123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15822__auto____0;
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15822__auto____1;
return asgnx$kvstore$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,this$__$1))
})();
var state__15846__auto__ = (function (){var statearr_16128 = f__15845__auto__.call(null);
(statearr_16128[(6)] = c__15844__auto__);

return statearr_16128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,this$__$1))
);

return c__15844__auto__;
});

asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$2 = (function (s,ks){
var self__ = this;
var s__$1 = this;
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,s__$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,s__$1){
return (function (state_16132){
var state_val_16133 = (state_16132[(1)]);
if((state_val_16133 === (1))){
var inst_16129 = cljs.core.deref.call(null,self__.matom);
var inst_16130 = asgnx.kvstore.state_get.call(null,inst_16129,ks);
var state_16132__$1 = state_16132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16132__$1,inst_16130);
} else {
return null;
}
});})(c__15844__auto__,s__$1))
;
return ((function (switch__15821__auto__,c__15844__auto__,s__$1){
return (function() {
var asgnx$kvstore$state_machine__15822__auto__ = null;
var asgnx$kvstore$state_machine__15822__auto____0 = (function (){
var statearr_16134 = [null,null,null,null,null,null,null];
(statearr_16134[(0)] = asgnx$kvstore$state_machine__15822__auto__);

(statearr_16134[(1)] = (1));

return statearr_16134;
});
var asgnx$kvstore$state_machine__15822__auto____1 = (function (state_16132){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16135){if((e16135 instanceof Object)){
var ex__15825__auto__ = e16135;
var statearr_16136_16160 = state_16132;
(statearr_16136_16160[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16161 = state_16132;
state_16132 = G__16161;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15822__auto__ = function(state_16132){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15822__auto____1.call(this,state_16132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15822__auto____0;
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15822__auto____1;
return asgnx$kvstore$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,s__$1))
})();
var state__15846__auto__ = (function (){var statearr_16137 = f__15845__auto__.call(null);
(statearr_16137[(6)] = c__15844__auto__);

return statearr_16137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,s__$1))
);

return c__15844__auto__;
});

asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$3 = (function (s,ks,dv){
var self__ = this;
var s__$1 = this;
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,s__$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,s__$1){
return (function (state_16141){
var state_val_16142 = (state_16141[(1)]);
if((state_val_16142 === (1))){
var inst_16138 = cljs.core.deref.call(null,self__.matom);
var inst_16139 = asgnx.kvstore.state_get.call(null,inst_16138,ks,dv);
var state_16141__$1 = state_16141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16141__$1,inst_16139);
} else {
return null;
}
});})(c__15844__auto__,s__$1))
;
return ((function (switch__15821__auto__,c__15844__auto__,s__$1){
return (function() {
var asgnx$kvstore$state_machine__15822__auto__ = null;
var asgnx$kvstore$state_machine__15822__auto____0 = (function (){
var statearr_16143 = [null,null,null,null,null,null,null];
(statearr_16143[(0)] = asgnx$kvstore$state_machine__15822__auto__);

(statearr_16143[(1)] = (1));

return statearr_16143;
});
var asgnx$kvstore$state_machine__15822__auto____1 = (function (state_16141){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16144){if((e16144 instanceof Object)){
var ex__15825__auto__ = e16144;
var statearr_16145_16162 = state_16141;
(statearr_16145_16162[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16163 = state_16141;
state_16141 = G__16163;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15822__auto__ = function(state_16141){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15822__auto____1.call(this,state_16141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15822__auto____0;
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15822__auto____1;
return asgnx$kvstore$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,s__$1))
})();
var state__15846__auto__ = (function (){var statearr_16146 = f__15845__auto__.call(null);
(statearr_16146[(6)] = c__15844__auto__);

return statearr_16146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,s__$1))
);

return c__15844__auto__;
});

asgnx.kvstore.MemStore.prototype.asgnx$kvstore$KeyStore$list_BANG_$arity$2 = (function (s,ks){
var self__ = this;
var s__$1 = this;
var c__15844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15844__auto__,s__$1){
return (function (){
var f__15845__auto__ = (function (){var switch__15821__auto__ = ((function (c__15844__auto__,s__$1){
return (function (state_16150){
var state_val_16151 = (state_16150[(1)]);
if((state_val_16151 === (1))){
var inst_16147 = cljs.core.deref.call(null,self__.matom);
var inst_16148 = asgnx.kvstore.state_keys.call(null,inst_16147,ks);
var state_16150__$1 = state_16150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16150__$1,inst_16148);
} else {
return null;
}
});})(c__15844__auto__,s__$1))
;
return ((function (switch__15821__auto__,c__15844__auto__,s__$1){
return (function() {
var asgnx$kvstore$state_machine__15822__auto__ = null;
var asgnx$kvstore$state_machine__15822__auto____0 = (function (){
var statearr_16152 = [null,null,null,null,null,null,null];
(statearr_16152[(0)] = asgnx$kvstore$state_machine__15822__auto__);

(statearr_16152[(1)] = (1));

return statearr_16152;
});
var asgnx$kvstore$state_machine__15822__auto____1 = (function (state_16150){
while(true){
var ret_value__15823__auto__ = (function (){try{while(true){
var result__15824__auto__ = switch__15821__auto__.call(null,state_16150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15824__auto__;
}
break;
}
}catch (e16153){if((e16153 instanceof Object)){
var ex__15825__auto__ = e16153;
var statearr_16154_16164 = state_16150;
(statearr_16154_16164[(5)] = ex__15825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16165 = state_16150;
state_16150 = G__16165;
continue;
} else {
return ret_value__15823__auto__;
}
break;
}
});
asgnx$kvstore$state_machine__15822__auto__ = function(state_16150){
switch(arguments.length){
case 0:
return asgnx$kvstore$state_machine__15822__auto____0.call(this);
case 1:
return asgnx$kvstore$state_machine__15822__auto____1.call(this,state_16150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$kvstore$state_machine__15822__auto____0;
asgnx$kvstore$state_machine__15822__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$kvstore$state_machine__15822__auto____1;
return asgnx$kvstore$state_machine__15822__auto__;
})()
;})(switch__15821__auto__,c__15844__auto__,s__$1))
})();
var state__15846__auto__ = (function (){var statearr_16155 = f__15845__auto__.call(null);
(statearr_16155[(6)] = c__15844__auto__);

return statearr_16155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15846__auto__);
});})(c__15844__auto__,s__$1))
);

return c__15844__auto__;
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
var G__16167 = arguments.length;
switch (G__16167) {
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

asgnx.kvstore.action_assoc_in = (function asgnx$kvstore$action_assoc_in(system,p__16169){
var map__16170 = p__16169;
var map__16170__$1 = ((((!((map__16170 == null)))?(((((map__16170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16170):map__16170);
var ks = cljs.core.get.call(null,map__16170__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var v = cljs.core.get.call(null,map__16170__$1,new cljs.core.Keyword(null,"v","v",21465059));
return asgnx.kvstore.put_BANG_.call(null,new cljs.core.Keyword(null,"state-mgr","state-mgr",-1839931632).cljs$core$IFn$_invoke$arity$1(system),ks,v);
});
asgnx.kvstore.action_dissoc_in = (function asgnx$kvstore$action_dissoc_in(system,p__16172){
var map__16173 = p__16172;
var map__16173__$1 = ((((!((map__16173 == null)))?(((((map__16173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16173):map__16173);
var ks = cljs.core.get.call(null,map__16173__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
return asgnx.kvstore.remove_BANG_.call(null,new cljs.core.Keyword(null,"state-mgr","state-mgr",-1839931632).cljs$core$IFn$_invoke$arity$1(system),ks);
});
asgnx.kvstore.action_handlers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),asgnx.kvstore.action_assoc_in,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),asgnx.kvstore.action_dissoc_in], null);

//# sourceMappingURL=kvstore.js.map
