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
return (function (state_25879){
var state_val_25880 = (state_25879[(1)]);
if((state_val_25880 === (7))){
var inst_25864 = (state_25879[(2)]);
var state_25879__$1 = (function (){var statearr_25881 = state_25879;
(statearr_25881[(7)] = inst_25864);

return statearr_25881;
})();
var statearr_25882_25902 = state_25879__$1;
(statearr_25882_25902[(2)] = null);

(statearr_25882_25902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (1))){
var state_25879__$1 = state_25879;
var statearr_25883_25903 = state_25879__$1;
(statearr_25883_25903[(2)] = null);

(statearr_25883_25903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (4))){
var inst_25851 = (state_25879[(8)]);
var inst_25851__$1 = (state_25879[(2)]);
var inst_25852 = cljs.core.meta.call(null,inst_25851__$1);
var inst_25853 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_25852);
var state_25879__$1 = (function (){var statearr_25884 = state_25879;
(statearr_25884[(8)] = inst_25851__$1);

return statearr_25884;
})();
if(cljs.core.truth_(inst_25853)){
var statearr_25885_25904 = state_25879__$1;
(statearr_25885_25904[(1)] = (5));

} else {
var statearr_25886_25905 = state_25879__$1;
(statearr_25886_25905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (6))){
var inst_25860 = cljs.core.async.timeout.call(null,(0));
var state_25879__$1 = state_25879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25879__$1,(9),inst_25860);
} else {
if((state_val_25880 === (3))){
var inst_25877 = (state_25879[(2)]);
var state_25879__$1 = state_25879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25879__$1,inst_25877);
} else {
if((state_val_25880 === (12))){
var inst_25851 = (state_25879[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25879,(11),Object,null,(10));
var inst_25872 = re_frame.handlers.handle.call(null,inst_25851);
var state_25879__$1 = state_25879;
var statearr_25887_25906 = state_25879__$1;
(statearr_25887_25906[(2)] = inst_25872);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25879__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (2))){
var state_25879__$1 = state_25879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25879__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_25880 === (11))){
var inst_25865 = (state_25879[(2)]);
var inst_25866 = re_frame.router.purge_chan.call(null);
var inst_25867 = re_frame$router$router_loop.call(null);
var inst_25868 = (function(){throw inst_25865})();
var state_25879__$1 = (function (){var statearr_25888 = state_25879;
(statearr_25888[(9)] = inst_25867);

(statearr_25888[(10)] = inst_25866);

return statearr_25888;
})();
var statearr_25889_25907 = state_25879__$1;
(statearr_25889_25907[(2)] = inst_25868);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25879__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (9))){
var inst_25862 = (state_25879[(2)]);
var state_25879__$1 = state_25879;
var statearr_25890_25908 = state_25879__$1;
(statearr_25890_25908[(2)] = inst_25862);

(statearr_25890_25908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (5))){
var inst_25855 = reagent.core.flush.call(null);
var inst_25856 = cljs.core.async.timeout.call(null,(20));
var state_25879__$1 = (function (){var statearr_25891 = state_25879;
(statearr_25891[(11)] = inst_25855);

return statearr_25891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25879__$1,(8),inst_25856);
} else {
if((state_val_25880 === (10))){
var inst_25874 = (state_25879[(2)]);
var state_25879__$1 = (function (){var statearr_25892 = state_25879;
(statearr_25892[(12)] = inst_25874);

return statearr_25892;
})();
var statearr_25893_25909 = state_25879__$1;
(statearr_25893_25909[(2)] = null);

(statearr_25893_25909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25880 === (8))){
var inst_25858 = (state_25879[(2)]);
var state_25879__$1 = state_25879;
var statearr_25894_25910 = state_25879__$1;
(statearr_25894_25910[(2)] = inst_25858);

(statearr_25894_25910[(1)] = (7));


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
var statearr_25898 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25898[(0)] = re_frame$router$router_loop_$_state_machine__21284__auto__);

(statearr_25898[(1)] = (1));

return statearr_25898;
});
var re_frame$router$router_loop_$_state_machine__21284__auto____1 = (function (state_25879){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_25879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e25899){if((e25899 instanceof Object)){
var ex__21287__auto__ = e25899;
var statearr_25900_25911 = state_25879;
(statearr_25900_25911[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25912 = state_25879;
state_25879 = G__25912;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21284__auto__ = function(state_25879){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21284__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21284__auto____1.call(this,state_25879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21284__auto____0;
re_frame$router$router_loop_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21284__auto____1;
return re_frame$router$router_loop_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_25901 = f__21346__auto__.call(null);
(statearr_25901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_25901;
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

//# sourceMappingURL=router.js.map?rel=1436140469551