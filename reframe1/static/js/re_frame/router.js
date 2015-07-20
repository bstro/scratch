// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_26026){
var state_val_26027 = (state_26026[(1)]);
if((state_val_26027 === (7))){
var inst_26011 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26028 = state_26026;
(statearr_26028[(7)] = inst_26011);

return statearr_26028;
})();
var statearr_26029_26049 = state_26026__$1;
(statearr_26029_26049[(2)] = null);

(statearr_26029_26049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (1))){
var state_26026__$1 = state_26026;
var statearr_26030_26050 = state_26026__$1;
(statearr_26030_26050[(2)] = null);

(statearr_26030_26050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (4))){
var inst_25998 = (state_26026[(8)]);
var inst_25998__$1 = (state_26026[(2)]);
var inst_25999 = cljs.core.meta.call(null,inst_25998__$1);
var inst_26000 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_25999);
var state_26026__$1 = (function (){var statearr_26031 = state_26026;
(statearr_26031[(8)] = inst_25998__$1);

return statearr_26031;
})();
if(cljs.core.truth_(inst_26000)){
var statearr_26032_26051 = state_26026__$1;
(statearr_26032_26051[(1)] = (5));

} else {
var statearr_26033_26052 = state_26026__$1;
(statearr_26033_26052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (6))){
var inst_26007 = cljs.core.async.timeout.call(null,(0));
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(9),inst_26007);
} else {
if((state_val_26027 === (3))){
var inst_26024 = (state_26026[(2)]);
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26026__$1,inst_26024);
} else {
if((state_val_26027 === (12))){
var inst_25998 = (state_26026[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(11),Object,null,(10));
var inst_26019 = re_frame.handlers.handle.call(null,inst_25998);
var state_26026__$1 = state_26026;
var statearr_26034_26053 = state_26026__$1;
(statearr_26034_26053[(2)] = inst_26019);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (2))){
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_26027 === (11))){
var inst_26012 = (state_26026[(2)]);
var inst_26013 = re_frame.router.purge_chan.call(null);
var inst_26014 = re_frame$router$router_loop.call(null);
var inst_26015 = (function(){throw inst_26012})();
var state_26026__$1 = (function (){var statearr_26035 = state_26026;
(statearr_26035[(9)] = inst_26013);

(statearr_26035[(10)] = inst_26014);

return statearr_26035;
})();
var statearr_26036_26054 = state_26026__$1;
(statearr_26036_26054[(2)] = inst_26015);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (9))){
var inst_26009 = (state_26026[(2)]);
var state_26026__$1 = state_26026;
var statearr_26037_26055 = state_26026__$1;
(statearr_26037_26055[(2)] = inst_26009);

(statearr_26037_26055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (5))){
var inst_26002 = reagent.core.flush.call(null);
var inst_26003 = cljs.core.async.timeout.call(null,(20));
var state_26026__$1 = (function (){var statearr_26038 = state_26026;
(statearr_26038[(11)] = inst_26002);

return statearr_26038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(8),inst_26003);
} else {
if((state_val_26027 === (10))){
var inst_26021 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26039 = state_26026;
(statearr_26039[(12)] = inst_26021);

return statearr_26039;
})();
var statearr_26040_26056 = state_26026__$1;
(statearr_26040_26056[(2)] = null);

(statearr_26040_26056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (8))){
var inst_26005 = (state_26026[(2)]);
var state_26026__$1 = state_26026;
var statearr_26041_26057 = state_26026__$1;
(statearr_26041_26057[(2)] = inst_26005);

(statearr_26041_26057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21284__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21284__auto____0 = (function (){
var statearr_26045 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26045[(0)] = re_frame$router$router_loop_$_state_machine__21284__auto__);

(statearr_26045[(1)] = (1));

return statearr_26045;
});
var re_frame$router$router_loop_$_state_machine__21284__auto____1 = (function (state_26026){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26046){if((e26046 instanceof Object)){
var ex__21287__auto__ = e26046;
var statearr_26047_26058 = state_26026;
(statearr_26047_26058[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26059 = state_26026;
state_26026 = G__26059;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21284__auto__ = function(state_26026){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21284__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21284__auto____1.call(this,state_26026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21284__auto____0;
re_frame$router$router_loop_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21284__auto____1;
return re_frame$router$router_loop_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_26048 = f__21346__auto__.call(null);
(statearr_26048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1437351689639