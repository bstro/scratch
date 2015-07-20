// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28895__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28896__i = 0, G__28896__a = new Array(arguments.length -  0);
while (G__28896__i < G__28896__a.length) {G__28896__a[G__28896__i] = arguments[G__28896__i + 0]; ++G__28896__i;}
  args = new cljs.core.IndexedSeq(G__28896__a,0);
} 
return G__28895__delegate.call(this,args);};
G__28895.cljs$lang$maxFixedArity = 0;
G__28895.cljs$lang$applyTo = (function (arglist__28897){
var args = cljs.core.seq(arglist__28897);
return G__28895__delegate(args);
});
G__28895.cljs$core$IFn$_invoke$arity$variadic = G__28895__delegate;
return G__28895;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28898){
var map__28900 = p__28898;
var map__28900__$1 = ((cljs.core.seq_QMARK_.call(null,map__28900))?cljs.core.apply.call(null,cljs.core.hash_map,map__28900):map__28900);
var class$ = cljs.core.get.call(null,map__28900__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28900__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18121__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18109__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18109__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18109__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21345__auto___29029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___29029,ch){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___29029,ch){
return (function (state_29003){
var state_val_29004 = (state_29003[(1)]);
if((state_val_29004 === (7))){
var inst_28999 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
var statearr_29005_29030 = state_29003__$1;
(statearr_29005_29030[(2)] = inst_28999);

(statearr_29005_29030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (1))){
var state_29003__$1 = state_29003;
var statearr_29006_29031 = state_29003__$1;
(statearr_29006_29031[(2)] = null);

(statearr_29006_29031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (4))){
var inst_28967 = (state_29003[(7)]);
var inst_28967__$1 = (state_29003[(2)]);
var state_29003__$1 = (function (){var statearr_29007 = state_29003;
(statearr_29007[(7)] = inst_28967__$1);

return statearr_29007;
})();
if(cljs.core.truth_(inst_28967__$1)){
var statearr_29008_29032 = state_29003__$1;
(statearr_29008_29032[(1)] = (5));

} else {
var statearr_29009_29033 = state_29003__$1;
(statearr_29009_29033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (13))){
var state_29003__$1 = state_29003;
var statearr_29010_29034 = state_29003__$1;
(statearr_29010_29034[(2)] = null);

(statearr_29010_29034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (6))){
var state_29003__$1 = state_29003;
var statearr_29011_29035 = state_29003__$1;
(statearr_29011_29035[(2)] = null);

(statearr_29011_29035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (3))){
var inst_29001 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29003__$1,inst_29001);
} else {
if((state_val_29004 === (12))){
var inst_28974 = (state_29003[(8)]);
var inst_28987 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28974);
var inst_28988 = cljs.core.first.call(null,inst_28987);
var inst_28989 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28988);
var inst_28990 = console.warn("Figwheel: Not loading code with warnings - ",inst_28989);
var state_29003__$1 = state_29003;
var statearr_29012_29036 = state_29003__$1;
(statearr_29012_29036[(2)] = inst_28990);

(statearr_29012_29036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (2))){
var state_29003__$1 = state_29003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29003__$1,(4),ch);
} else {
if((state_val_29004 === (11))){
var inst_28983 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
var statearr_29013_29037 = state_29003__$1;
(statearr_29013_29037[(2)] = inst_28983);

(statearr_29013_29037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (9))){
var inst_28973 = (state_29003[(9)]);
var inst_28985 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28973,opts);
var state_29003__$1 = state_29003;
if(cljs.core.truth_(inst_28985)){
var statearr_29014_29038 = state_29003__$1;
(statearr_29014_29038[(1)] = (12));

} else {
var statearr_29015_29039 = state_29003__$1;
(statearr_29015_29039[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (5))){
var inst_28973 = (state_29003[(9)]);
var inst_28967 = (state_29003[(7)]);
var inst_28969 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28970 = (new cljs.core.PersistentArrayMap(null,2,inst_28969,null));
var inst_28971 = (new cljs.core.PersistentHashSet(null,inst_28970,null));
var inst_28972 = figwheel.client.focus_msgs.call(null,inst_28971,inst_28967);
var inst_28973__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28972);
var inst_28974 = cljs.core.first.call(null,inst_28972);
var inst_28975 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28973__$1,opts);
var state_29003__$1 = (function (){var statearr_29016 = state_29003;
(statearr_29016[(9)] = inst_28973__$1);

(statearr_29016[(8)] = inst_28974);

return statearr_29016;
})();
if(cljs.core.truth_(inst_28975)){
var statearr_29017_29040 = state_29003__$1;
(statearr_29017_29040[(1)] = (8));

} else {
var statearr_29018_29041 = state_29003__$1;
(statearr_29018_29041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (14))){
var inst_28993 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
var statearr_29019_29042 = state_29003__$1;
(statearr_29019_29042[(2)] = inst_28993);

(statearr_29019_29042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (10))){
var inst_28995 = (state_29003[(2)]);
var state_29003__$1 = (function (){var statearr_29020 = state_29003;
(statearr_29020[(10)] = inst_28995);

return statearr_29020;
})();
var statearr_29021_29043 = state_29003__$1;
(statearr_29021_29043[(2)] = null);

(statearr_29021_29043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (8))){
var inst_28974 = (state_29003[(8)]);
var inst_28977 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28978 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28974);
var inst_28979 = cljs.core.async.timeout.call(null,(1000));
var inst_28980 = [inst_28978,inst_28979];
var inst_28981 = (new cljs.core.PersistentVector(null,2,(5),inst_28977,inst_28980,null));
var state_29003__$1 = state_29003;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29003__$1,(11),inst_28981);
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
}
}
});})(c__21345__auto___29029,ch))
;
return ((function (switch__21283__auto__,c__21345__auto___29029,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29025[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1 = (function (state_29003){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__21287__auto__ = e29026;
var statearr_29027_29044 = state_29003;
(statearr_29027_29044[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29045 = state_29003;
state_29003 = G__29045;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__ = function(state_29003){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1.call(this,state_29003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___29029,ch))
})();
var state__21347__auto__ = (function (){var statearr_29028 = f__21346__auto__.call(null);
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___29029);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___29029,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29046_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29046_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29053 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29053){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29051 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29052 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29051,_STAR_print_newline_STAR_29052,base_path_29053){
return (function() { 
var G__29054__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29055__i = 0, G__29055__a = new Array(arguments.length -  0);
while (G__29055__i < G__29055__a.length) {G__29055__a[G__29055__i] = arguments[G__29055__i + 0]; ++G__29055__i;}
  args = new cljs.core.IndexedSeq(G__29055__a,0);
} 
return G__29054__delegate.call(this,args);};
G__29054.cljs$lang$maxFixedArity = 0;
G__29054.cljs$lang$applyTo = (function (arglist__29056){
var args = cljs.core.seq(arglist__29056);
return G__29054__delegate(args);
});
G__29054.cljs$core$IFn$_invoke$arity$variadic = G__29054__delegate;
return G__29054;
})()
;})(_STAR_print_fn_STAR_29051,_STAR_print_newline_STAR_29052,base_path_29053))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29052;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29051;
}}catch (e29050){if((e29050 instanceof Error)){
var e = e29050;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29053], null));
} else {
var e = e29050;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29053))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29057){
var map__29062 = p__29057;
var map__29062__$1 = ((cljs.core.seq_QMARK_.call(null,map__29062))?cljs.core.apply.call(null,cljs.core.hash_map,map__29062):map__29062);
var opts = map__29062__$1;
var build_id = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29062,map__29062__$1,opts,build_id){
return (function (p__29063){
var vec__29064 = p__29063;
var map__29065 = cljs.core.nth.call(null,vec__29064,(0),null);
var map__29065__$1 = ((cljs.core.seq_QMARK_.call(null,map__29065))?cljs.core.apply.call(null,cljs.core.hash_map,map__29065):map__29065);
var msg = map__29065__$1;
var msg_name = cljs.core.get.call(null,map__29065__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29064,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29064,map__29065,map__29065__$1,msg,msg_name,_,map__29062,map__29062__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29064,map__29065,map__29065__$1,msg,msg_name,_,map__29062,map__29062__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29062,map__29062__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29069){
var vec__29070 = p__29069;
var map__29071 = cljs.core.nth.call(null,vec__29070,(0),null);
var map__29071__$1 = ((cljs.core.seq_QMARK_.call(null,map__29071))?cljs.core.apply.call(null,cljs.core.hash_map,map__29071):map__29071);
var msg = map__29071__$1;
var msg_name = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29070,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29072){
var map__29080 = p__29072;
var map__29080__$1 = ((cljs.core.seq_QMARK_.call(null,map__29080))?cljs.core.apply.call(null,cljs.core.hash_map,map__29080):map__29080);
var on_compile_fail = cljs.core.get.call(null,map__29080__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__29080__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__29080,map__29080__$1,on_compile_fail,on_compile_warning){
return (function (p__29081){
var vec__29082 = p__29081;
var map__29083 = cljs.core.nth.call(null,vec__29082,(0),null);
var map__29083__$1 = ((cljs.core.seq_QMARK_.call(null,map__29083))?cljs.core.apply.call(null,cljs.core.hash_map,map__29083):map__29083);
var msg = map__29083__$1;
var msg_name = cljs.core.get.call(null,map__29083__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29082,(1));
var pred__29084 = cljs.core._EQ_;
var expr__29085 = msg_name;
if(cljs.core.truth_(pred__29084.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29085))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29084.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29085))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29080,map__29080__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,msg_hist,msg_names,msg){
return (function (state_29286){
var state_val_29287 = (state_29286[(1)]);
if((state_val_29287 === (7))){
var inst_29220 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29288_29329 = state_29286__$1;
(statearr_29288_29329[(2)] = inst_29220);

(statearr_29288_29329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (20))){
var inst_29248 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29248)){
var statearr_29289_29330 = state_29286__$1;
(statearr_29289_29330[(1)] = (22));

} else {
var statearr_29290_29331 = state_29286__$1;
(statearr_29290_29331[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (27))){
var inst_29260 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29261 = figwheel.client.heads_up.display_warning.call(null,inst_29260);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(30),inst_29261);
} else {
if((state_val_29287 === (1))){
var inst_29208 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29208)){
var statearr_29291_29332 = state_29286__$1;
(statearr_29291_29332[(1)] = (2));

} else {
var statearr_29292_29333 = state_29286__$1;
(statearr_29292_29333[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (24))){
var inst_29276 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29293_29334 = state_29286__$1;
(statearr_29293_29334[(2)] = inst_29276);

(statearr_29293_29334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (4))){
var inst_29284 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29286__$1,inst_29284);
} else {
if((state_val_29287 === (15))){
var inst_29236 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29237 = figwheel.client.format_messages.call(null,inst_29236);
var inst_29238 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29239 = figwheel.client.heads_up.display_error.call(null,inst_29237,inst_29238);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(18),inst_29239);
} else {
if((state_val_29287 === (21))){
var inst_29278 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29294_29335 = state_29286__$1;
(statearr_29294_29335[(2)] = inst_29278);

(statearr_29294_29335[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (31))){
var inst_29267 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(34),inst_29267);
} else {
if((state_val_29287 === (32))){
var state_29286__$1 = state_29286;
var statearr_29295_29336 = state_29286__$1;
(statearr_29295_29336[(2)] = null);

(statearr_29295_29336[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (33))){
var inst_29272 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29296_29337 = state_29286__$1;
(statearr_29296_29337[(2)] = inst_29272);

(statearr_29296_29337[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (13))){
var inst_29226 = (state_29286[(2)]);
var inst_29227 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29228 = figwheel.client.format_messages.call(null,inst_29227);
var inst_29229 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29230 = figwheel.client.heads_up.display_error.call(null,inst_29228,inst_29229);
var state_29286__$1 = (function (){var statearr_29297 = state_29286;
(statearr_29297[(7)] = inst_29226);

return statearr_29297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(14),inst_29230);
} else {
if((state_val_29287 === (22))){
var inst_29250 = figwheel.client.heads_up.clear.call(null);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(25),inst_29250);
} else {
if((state_val_29287 === (29))){
var inst_29274 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29298_29338 = state_29286__$1;
(statearr_29298_29338[(2)] = inst_29274);

(statearr_29298_29338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (6))){
var inst_29216 = figwheel.client.heads_up.clear.call(null);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(9),inst_29216);
} else {
if((state_val_29287 === (28))){
var inst_29265 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29265)){
var statearr_29299_29339 = state_29286__$1;
(statearr_29299_29339[(1)] = (31));

} else {
var statearr_29300_29340 = state_29286__$1;
(statearr_29300_29340[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (25))){
var inst_29252 = (state_29286[(2)]);
var inst_29253 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29254 = figwheel.client.heads_up.display_warning.call(null,inst_29253);
var state_29286__$1 = (function (){var statearr_29301 = state_29286;
(statearr_29301[(8)] = inst_29252);

return statearr_29301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(26),inst_29254);
} else {
if((state_val_29287 === (34))){
var inst_29269 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29302_29341 = state_29286__$1;
(statearr_29302_29341[(2)] = inst_29269);

(statearr_29302_29341[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (17))){
var inst_29280 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29303_29342 = state_29286__$1;
(statearr_29303_29342[(2)] = inst_29280);

(statearr_29303_29342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (3))){
var inst_29222 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29222)){
var statearr_29304_29343 = state_29286__$1;
(statearr_29304_29343[(1)] = (10));

} else {
var statearr_29305_29344 = state_29286__$1;
(statearr_29305_29344[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (12))){
var inst_29282 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29306_29345 = state_29286__$1;
(statearr_29306_29345[(2)] = inst_29282);

(statearr_29306_29345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (2))){
var inst_29210 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29210)){
var statearr_29307_29346 = state_29286__$1;
(statearr_29307_29346[(1)] = (5));

} else {
var statearr_29308_29347 = state_29286__$1;
(statearr_29308_29347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (23))){
var inst_29258 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29258)){
var statearr_29309_29348 = state_29286__$1;
(statearr_29309_29348[(1)] = (27));

} else {
var statearr_29310_29349 = state_29286__$1;
(statearr_29310_29349[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (19))){
var inst_29245 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29246 = figwheel.client.heads_up.append_message.call(null,inst_29245);
var state_29286__$1 = state_29286;
var statearr_29311_29350 = state_29286__$1;
(statearr_29311_29350[(2)] = inst_29246);

(statearr_29311_29350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (11))){
var inst_29234 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29234)){
var statearr_29312_29351 = state_29286__$1;
(statearr_29312_29351[(1)] = (15));

} else {
var statearr_29313_29352 = state_29286__$1;
(statearr_29313_29352[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (9))){
var inst_29218 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29314_29353 = state_29286__$1;
(statearr_29314_29353[(2)] = inst_29218);

(statearr_29314_29353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (5))){
var inst_29212 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(8),inst_29212);
} else {
if((state_val_29287 === (14))){
var inst_29232 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29315_29354 = state_29286__$1;
(statearr_29315_29354[(2)] = inst_29232);

(statearr_29315_29354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (26))){
var inst_29256 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29316_29355 = state_29286__$1;
(statearr_29316_29355[(2)] = inst_29256);

(statearr_29316_29355[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (16))){
var inst_29243 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29243)){
var statearr_29317_29356 = state_29286__$1;
(statearr_29317_29356[(1)] = (19));

} else {
var statearr_29318_29357 = state_29286__$1;
(statearr_29318_29357[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (30))){
var inst_29263 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29319_29358 = state_29286__$1;
(statearr_29319_29358[(2)] = inst_29263);

(statearr_29319_29358[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (10))){
var inst_29224 = figwheel.client.heads_up.clear.call(null);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(13),inst_29224);
} else {
if((state_val_29287 === (18))){
var inst_29241 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29320_29359 = state_29286__$1;
(statearr_29320_29359[(2)] = inst_29241);

(statearr_29320_29359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (8))){
var inst_29214 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29321_29360 = state_29286__$1;
(statearr_29321_29360[(2)] = inst_29214);

(statearr_29321_29360[(1)] = (7));


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
});})(c__21345__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21283__auto__,c__21345__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0 = (function (){
var statearr_29325 = [null,null,null,null,null,null,null,null,null];
(statearr_29325[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__);

(statearr_29325[(1)] = (1));

return statearr_29325;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1 = (function (state_29286){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29326){if((e29326 instanceof Object)){
var ex__21287__auto__ = e29326;
var statearr_29327_29361 = state_29286;
(statearr_29327_29361[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29362 = state_29286;
state_29286 = G__29362;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__ = function(state_29286){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1.call(this,state_29286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,msg_hist,msg_names,msg))
})();
var state__21347__auto__ = (function (){var statearr_29328 = f__21346__auto__.call(null);
(statearr_29328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,msg_hist,msg_names,msg))
);

return c__21345__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21345__auto___29425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___29425,ch){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___29425,ch){
return (function (state_29408){
var state_val_29409 = (state_29408[(1)]);
if((state_val_29409 === (8))){
var inst_29400 = (state_29408[(2)]);
var state_29408__$1 = (function (){var statearr_29410 = state_29408;
(statearr_29410[(7)] = inst_29400);

return statearr_29410;
})();
var statearr_29411_29426 = state_29408__$1;
(statearr_29411_29426[(2)] = null);

(statearr_29411_29426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (7))){
var inst_29404 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
var statearr_29412_29427 = state_29408__$1;
(statearr_29412_29427[(2)] = inst_29404);

(statearr_29412_29427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (6))){
var state_29408__$1 = state_29408;
var statearr_29413_29428 = state_29408__$1;
(statearr_29413_29428[(2)] = null);

(statearr_29413_29428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (5))){
var inst_29396 = (state_29408[(8)]);
var inst_29398 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29396);
var state_29408__$1 = state_29408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29408__$1,(8),inst_29398);
} else {
if((state_val_29409 === (4))){
var inst_29396 = (state_29408[(8)]);
var inst_29396__$1 = (state_29408[(2)]);
var state_29408__$1 = (function (){var statearr_29414 = state_29408;
(statearr_29414[(8)] = inst_29396__$1);

return statearr_29414;
})();
if(cljs.core.truth_(inst_29396__$1)){
var statearr_29415_29429 = state_29408__$1;
(statearr_29415_29429[(1)] = (5));

} else {
var statearr_29416_29430 = state_29408__$1;
(statearr_29416_29430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29409 === (3))){
var inst_29406 = (state_29408[(2)]);
var state_29408__$1 = state_29408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29408__$1,inst_29406);
} else {
if((state_val_29409 === (2))){
var state_29408__$1 = state_29408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29408__$1,(4),ch);
} else {
if((state_val_29409 === (1))){
var state_29408__$1 = state_29408;
var statearr_29417_29431 = state_29408__$1;
(statearr_29417_29431[(2)] = null);

(statearr_29417_29431[(1)] = (2));


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
});})(c__21345__auto___29425,ch))
;
return ((function (switch__21283__auto__,c__21345__auto___29425,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_29421 = [null,null,null,null,null,null,null,null,null];
(statearr_29421[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21284__auto__);

(statearr_29421[(1)] = (1));

return statearr_29421;
});
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1 = (function (state_29408){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29422){if((e29422 instanceof Object)){
var ex__21287__auto__ = e29422;
var statearr_29423_29432 = state_29408;
(statearr_29423_29432[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29433 = state_29408;
state_29408 = G__29433;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__ = function(state_29408){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1.call(this,state_29408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___29425,ch))
})();
var state__21347__auto__ = (function (){var statearr_29424 = f__21346__auto__.call(null);
(statearr_29424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___29425);

return statearr_29424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___29425,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_29454){
var state_val_29455 = (state_29454[(1)]);
if((state_val_29455 === (2))){
var inst_29451 = (state_29454[(2)]);
var inst_29452 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29454__$1 = (function (){var statearr_29456 = state_29454;
(statearr_29456[(7)] = inst_29451);

return statearr_29456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29454__$1,inst_29452);
} else {
if((state_val_29455 === (1))){
var inst_29449 = cljs.core.async.timeout.call(null,(3000));
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29454__$1,(2),inst_29449);
} else {
return null;
}
}
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_29460 = [null,null,null,null,null,null,null,null];
(statearr_29460[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__);

(statearr_29460[(1)] = (1));

return statearr_29460;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1 = (function (state_29454){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29461){if((e29461 instanceof Object)){
var ex__21287__auto__ = e29461;
var statearr_29462_29464 = state_29454;
(statearr_29462_29464[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29465 = state_29454;
state_29454 = G__29465;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__ = function(state_29454){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1.call(this,state_29454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29463 = f__21346__auto__.call(null);
(statearr_29463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29466){
var map__29472 = p__29466;
var map__29472__$1 = ((cljs.core.seq_QMARK_.call(null,map__29472))?cljs.core.apply.call(null,cljs.core.hash_map,map__29472):map__29472);
var ed = map__29472__$1;
var cause = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29473_29477 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29474_29478 = null;
var count__29475_29479 = (0);
var i__29476_29480 = (0);
while(true){
if((i__29476_29480 < count__29475_29479)){
var msg_29481 = cljs.core._nth.call(null,chunk__29474_29478,i__29476_29480);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29481);

var G__29482 = seq__29473_29477;
var G__29483 = chunk__29474_29478;
var G__29484 = count__29475_29479;
var G__29485 = (i__29476_29480 + (1));
seq__29473_29477 = G__29482;
chunk__29474_29478 = G__29483;
count__29475_29479 = G__29484;
i__29476_29480 = G__29485;
continue;
} else {
var temp__4126__auto___29486 = cljs.core.seq.call(null,seq__29473_29477);
if(temp__4126__auto___29486){
var seq__29473_29487__$1 = temp__4126__auto___29486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29473_29487__$1)){
var c__18906__auto___29488 = cljs.core.chunk_first.call(null,seq__29473_29487__$1);
var G__29489 = cljs.core.chunk_rest.call(null,seq__29473_29487__$1);
var G__29490 = c__18906__auto___29488;
var G__29491 = cljs.core.count.call(null,c__18906__auto___29488);
var G__29492 = (0);
seq__29473_29477 = G__29489;
chunk__29474_29478 = G__29490;
count__29475_29479 = G__29491;
i__29476_29480 = G__29492;
continue;
} else {
var msg_29493 = cljs.core.first.call(null,seq__29473_29487__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29493);

var G__29494 = cljs.core.next.call(null,seq__29473_29487__$1);
var G__29495 = null;
var G__29496 = (0);
var G__29497 = (0);
seq__29473_29477 = G__29494;
chunk__29474_29478 = G__29495;
count__29475_29479 = G__29496;
i__29476_29480 = G__29497;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29498){
var map__29500 = p__29498;
var map__29500__$1 = ((cljs.core.seq_QMARK_.call(null,map__29500))?cljs.core.apply.call(null,cljs.core.hash_map,map__29500):map__29500);
var w = map__29500__$1;
var message = cljs.core.get.call(null,map__29500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18109__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18109__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18109__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29507 = cljs.core.seq.call(null,plugins);
var chunk__29508 = null;
var count__29509 = (0);
var i__29510 = (0);
while(true){
if((i__29510 < count__29509)){
var vec__29511 = cljs.core._nth.call(null,chunk__29508,i__29510);
var k = cljs.core.nth.call(null,vec__29511,(0),null);
var plugin = cljs.core.nth.call(null,vec__29511,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29513 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29507,chunk__29508,count__29509,i__29510,pl_29513,vec__29511,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29513.call(null,msg_hist);
});})(seq__29507,chunk__29508,count__29509,i__29510,pl_29513,vec__29511,k,plugin))
);
} else {
}

var G__29514 = seq__29507;
var G__29515 = chunk__29508;
var G__29516 = count__29509;
var G__29517 = (i__29510 + (1));
seq__29507 = G__29514;
chunk__29508 = G__29515;
count__29509 = G__29516;
i__29510 = G__29517;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29507);
if(temp__4126__auto__){
var seq__29507__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29507__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__29507__$1);
var G__29518 = cljs.core.chunk_rest.call(null,seq__29507__$1);
var G__29519 = c__18906__auto__;
var G__29520 = cljs.core.count.call(null,c__18906__auto__);
var G__29521 = (0);
seq__29507 = G__29518;
chunk__29508 = G__29519;
count__29509 = G__29520;
i__29510 = G__29521;
continue;
} else {
var vec__29512 = cljs.core.first.call(null,seq__29507__$1);
var k = cljs.core.nth.call(null,vec__29512,(0),null);
var plugin = cljs.core.nth.call(null,vec__29512,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29522 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29507,chunk__29508,count__29509,i__29510,pl_29522,vec__29512,k,plugin,seq__29507__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29522.call(null,msg_hist);
});})(seq__29507,chunk__29508,count__29509,i__29510,pl_29522,vec__29512,k,plugin,seq__29507__$1,temp__4126__auto__))
);
} else {
}

var G__29523 = cljs.core.next.call(null,seq__29507__$1);
var G__29524 = null;
var G__29525 = (0);
var G__29526 = (0);
seq__29507 = G__29523;
chunk__29508 = G__29524;
count__29509 = G__29525;
i__29510 = G__29526;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__29528 = arguments.length;
switch (G__29528) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29531){
var map__29532 = p__29531;
var map__29532__$1 = ((cljs.core.seq_QMARK_.call(null,map__29532))?cljs.core.apply.call(null,cljs.core.hash_map,map__29532):map__29532);
var opts = map__29532__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29530){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29530));
});

//# sourceMappingURL=client.js.map?rel=1437351693352