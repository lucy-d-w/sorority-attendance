// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.lambda');
goog.require('cljs.core');
goog.require('asgnx.core');
goog.require('asgnx.aws.s3');
goog.require('asgnx.aws.ssm');
goog.require('asgnx.kvstore');
goog.require('asgnx.twilio.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs_lambda.context');
goog.require('cljs_lambda.macros');
cljs.core.enable_console_print_BANG_.call(null);
asgnx.lambda.url_encoded_params = (function asgnx$lambda$url_encoded_params(qstr){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__17465_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__17465_SHARP_),(2));
}),cljs.core.map.call(null,(function (p){
return clojure.string.split.call(null,p,/=/);
}),clojure.string.split.call(null,qstr,/&/))));
});
asgnx.lambda.params = (function asgnx$lambda$params(event){
if(cljs.core.truth_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(event))){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(event);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(event))){
return asgnx.lambda.url_encoded_params.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(event));
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});
asgnx.lambda.decode = (function asgnx$lambda$decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
asgnx.lambda.decode_with_spaces = (function asgnx$lambda$decode_with_spaces(s){
if(cljs.core.truth_(s)){
return asgnx.lambda.decode.call(null,clojure.string.replace.call(null,s,"+"," "));
} else {
return null;
}
});
/**
 * This method parses Lambda events from API Gateway and sends the
 * processed messages on to core/handle-message.
 * 
 * This function creates an AWS Lambda-compatible version of the
 * system configuration that saves state to S3 and sends text messages
 * via Twilio. The system configuration also provides access to secret
 * credentials stored in the SSM parameter store.
 */
asgnx.lambda.handle_message = (function asgnx$lambda$handle_message(event,ctx){
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__){
return (function (state_17489){
var state_val_17490 = (state_17489[(1)]);
if((state_val_17490 === (1))){
var inst_17466 = asgnx.lambda.params.call(null,event);
var inst_17467 = cljs.core.get.call(null,inst_17466,"From");
var inst_17468 = asgnx.lambda.decode.call(null,inst_17467);
var inst_17469 = cljs.core.get.call(null,inst_17466,"To");
var inst_17470 = asgnx.lambda.decode.call(null,inst_17469);
var inst_17471 = cljs.core.get.call(null,inst_17466,"Body");
var inst_17472 = asgnx.lambda.decode_with_spaces.call(null,inst_17471);
var inst_17473 = [new cljs.core.Keyword(null,"system-phone-number","system-phone-number",-1620464289),new cljs.core.Keyword(null,"credentials-mgr","credentials-mgr",-1986375939),new cljs.core.Keyword(null,"effect-handlers","effect-handlers",1338585436),new cljs.core.Keyword(null,"state-mgr","state-mgr",-1839931632)];
var inst_17474 = cljs.core.merge.call(null,asgnx.kvstore.action_handlers,asgnx.twilio.core.action_handlers);
var inst_17475 = asgnx.aws.s3.s3_keystore.call(null,"cs4278-asgnx-state-wangld");
var inst_17476 = [inst_17470,asgnx.aws.ssm.get_secrets_BANG_,inst_17474,inst_17475];
var inst_17477 = cljs.core.PersistentHashMap.fromArrays(inst_17473,inst_17476);
var inst_17478 = asgnx.core.handle_message.call(null,inst_17477,inst_17468,inst_17472);
var state_17489__$1 = state_17489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17489__$1,(2),inst_17478);
} else {
if((state_val_17490 === (2))){
var inst_17480 = (state_17489[(2)]);
var inst_17481 = cljs.core.println.call(null,"Response: ",inst_17480);
var inst_17482 = [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_17483 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_17484 = ["text/plain"];
var inst_17485 = cljs.core.PersistentHashMap.fromArrays(inst_17483,inst_17484);
var inst_17486 = [(200),inst_17485,inst_17480];
var inst_17487 = cljs.core.PersistentHashMap.fromArrays(inst_17482,inst_17486);
var state_17489__$1 = (function (){var statearr_17491 = state_17489;
(statearr_17491[(7)] = inst_17481);

return statearr_17491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17489__$1,inst_17487);
} else {
return null;
}
}
});})(c__15840__auto__))
;
return ((function (switch__15817__auto__,c__15840__auto__){
return (function() {
var asgnx$lambda$handle_message_$_state_machine__15818__auto__ = null;
var asgnx$lambda$handle_message_$_state_machine__15818__auto____0 = (function (){
var statearr_17492 = [null,null,null,null,null,null,null,null];
(statearr_17492[(0)] = asgnx$lambda$handle_message_$_state_machine__15818__auto__);

(statearr_17492[(1)] = (1));

return statearr_17492;
});
var asgnx$lambda$handle_message_$_state_machine__15818__auto____1 = (function (state_17489){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_17489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e17493){if((e17493 instanceof Object)){
var ex__15821__auto__ = e17493;
var statearr_17494_17496 = state_17489;
(statearr_17494_17496[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17497 = state_17489;
state_17489 = G__17497;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$lambda$handle_message_$_state_machine__15818__auto__ = function(state_17489){
switch(arguments.length){
case 0:
return asgnx$lambda$handle_message_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$lambda$handle_message_$_state_machine__15818__auto____1.call(this,state_17489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$lambda$handle_message_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$lambda$handle_message_$_state_machine__15818__auto____0;
asgnx$lambda$handle_message_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$lambda$handle_message_$_state_machine__15818__auto____1;
return asgnx$lambda$handle_message_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__))
})();
var state__15842__auto__ = (function (){var statearr_17495 = f__15841__auto__.call(null);
(statearr_17495[(6)] = c__15840__auto__);

return statearr_17495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__))
);

return c__15840__auto__;
});
asgnx.lambda.receive_message = cljs_lambda.util.async_lambda_fn.call(null,(function() { 
var G__17498__delegate = function (event__17449__auto__,args__17450__auto__){
var event__17449__auto____$1 = cljs_lambda.aws.event.from_aws.call(null,cljs.core.assoc.call(null,event__17449__auto__,new cljs.core.Keyword("aws.event","type","aws.event/type",-724969211),new cljs.core.Keyword(null,"api-gateway","api-gateway",-1619869738)));
return promesa.core.then.call(null,cljs.core.apply.call(null,cljs_lambda.util.invoke_async,((function (event__17449__auto____$1){
return (function (event,ctx){
return asgnx.lambda.handle_message.call(null,event,ctx);
});})(event__17449__auto____$1))
,cljs.core.conj.call(null,args__17450__auto__,event__17449__auto____$1)),cljs.core.comp.call(null,cljs_lambda.aws.event.to_aws,((function (event__17449__auto____$1){
return (function (p1__17448__17451__auto__){
return cljs.core.assoc.call(null,p1__17448__17451__auto__,new cljs.core.Keyword("aws.event","type","aws.event/type",-724969211),new cljs.core.Keyword(null,"api-gateway","api-gateway",-1619869738));
});})(event__17449__auto____$1))
));
};
var G__17498 = function (event__17449__auto__,var_args){
var args__17450__auto__ = null;
if (arguments.length > 1) {
var G__17499__i = 0, G__17499__a = new Array(arguments.length -  1);
while (G__17499__i < G__17499__a.length) {G__17499__a[G__17499__i] = arguments[G__17499__i + 1]; ++G__17499__i;}
  args__17450__auto__ = new cljs.core.IndexedSeq(G__17499__a,0,null);
} 
return G__17498__delegate.call(this,event__17449__auto__,args__17450__auto__);};
G__17498.cljs$lang$maxFixedArity = 1;
G__17498.cljs$lang$applyTo = (function (arglist__17500){
var event__17449__auto__ = cljs.core.first(arglist__17500);
var args__17450__auto__ = cljs.core.rest(arglist__17500);
return G__17498__delegate(event__17449__auto__,args__17450__auto__);
});
G__17498.cljs$core$IFn$_invoke$arity$variadic = G__17498__delegate;
return G__17498;
})()
);
goog.exportSymbol('asgnx.lambda.receive_message', asgnx.lambda.receive_message);
asgnx.lambda.node_repl = (function asgnx$lambda$node_repl(){
return cljs.core.println.call(null,"Node repl up!");
});

//# sourceMappingURL=lambda.js.map
