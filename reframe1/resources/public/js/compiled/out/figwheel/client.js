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
var G__28565__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28566__i = 0, G__28566__a = new Array(arguments.length -  0);
while (G__28566__i < G__28566__a.length) {G__28566__a[G__28566__i] = arguments[G__28566__i + 0]; ++G__28566__i;}
  args = new cljs.core.IndexedSeq(G__28566__a,0);
} 
return G__28565__delegate.call(this,args);};
G__28565.cljs$lang$maxFixedArity = 0;
G__28565.cljs$lang$applyTo = (function (arglist__28567){
var args = cljs.core.seq(arglist__28567);
return G__28565__delegate(args);
});
G__28565.cljs$core$IFn$_invoke$arity$variadic = G__28565__delegate;
return G__28565;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28568){
var map__28570 = p__28568;
var map__28570__$1 = ((cljs.core.seq_QMARK_.call(null,map__28570))?cljs.core.apply.call(null,cljs.core.hash_map,map__28570):map__28570);
var class$ = cljs.core.get.call(null,map__28570__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28570__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__21345__auto___28699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28699,ch){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28699,ch){
return (function (state_28673){
var state_val_28674 = (state_28673[(1)]);
if((state_val_28674 === (7))){
var inst_28669 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
var statearr_28675_28700 = state_28673__$1;
(statearr_28675_28700[(2)] = inst_28669);

(statearr_28675_28700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (1))){
var state_28673__$1 = state_28673;
var statearr_28676_28701 = state_28673__$1;
(statearr_28676_28701[(2)] = null);

(statearr_28676_28701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (4))){
var inst_28637 = (state_28673[(7)]);
var inst_28637__$1 = (state_28673[(2)]);
var state_28673__$1 = (function (){var statearr_28677 = state_28673;
(statearr_28677[(7)] = inst_28637__$1);

return statearr_28677;
})();
if(cljs.core.truth_(inst_28637__$1)){
var statearr_28678_28702 = state_28673__$1;
(statearr_28678_28702[(1)] = (5));

} else {
var statearr_28679_28703 = state_28673__$1;
(statearr_28679_28703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (13))){
var state_28673__$1 = state_28673;
var statearr_28680_28704 = state_28673__$1;
(statearr_28680_28704[(2)] = null);

(statearr_28680_28704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (6))){
var state_28673__$1 = state_28673;
var statearr_28681_28705 = state_28673__$1;
(statearr_28681_28705[(2)] = null);

(statearr_28681_28705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (3))){
var inst_28671 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28673__$1,inst_28671);
} else {
if((state_val_28674 === (12))){
var inst_28644 = (state_28673[(8)]);
var inst_28657 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28644);
var inst_28658 = cljs.core.first.call(null,inst_28657);
var inst_28659 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28658);
var inst_28660 = console.warn("Figwheel: Not loading code with warnings - ",inst_28659);
var state_28673__$1 = state_28673;
var statearr_28682_28706 = state_28673__$1;
(statearr_28682_28706[(2)] = inst_28660);

(statearr_28682_28706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (2))){
var state_28673__$1 = state_28673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28673__$1,(4),ch);
} else {
if((state_val_28674 === (11))){
var inst_28653 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
var statearr_28683_28707 = state_28673__$1;
(statearr_28683_28707[(2)] = inst_28653);

(statearr_28683_28707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (9))){
var inst_28643 = (state_28673[(9)]);
var inst_28655 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28643,opts);
var state_28673__$1 = state_28673;
if(cljs.core.truth_(inst_28655)){
var statearr_28684_28708 = state_28673__$1;
(statearr_28684_28708[(1)] = (12));

} else {
var statearr_28685_28709 = state_28673__$1;
(statearr_28685_28709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (5))){
var inst_28643 = (state_28673[(9)]);
var inst_28637 = (state_28673[(7)]);
var inst_28639 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28640 = (new cljs.core.PersistentArrayMap(null,2,inst_28639,null));
var inst_28641 = (new cljs.core.PersistentHashSet(null,inst_28640,null));
var inst_28642 = figwheel.client.focus_msgs.call(null,inst_28641,inst_28637);
var inst_28643__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28642);
var inst_28644 = cljs.core.first.call(null,inst_28642);
var inst_28645 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28643__$1,opts);
var state_28673__$1 = (function (){var statearr_28686 = state_28673;
(statearr_28686[(9)] = inst_28643__$1);

(statearr_28686[(8)] = inst_28644);

return statearr_28686;
})();
if(cljs.core.truth_(inst_28645)){
var statearr_28687_28710 = state_28673__$1;
(statearr_28687_28710[(1)] = (8));

} else {
var statearr_28688_28711 = state_28673__$1;
(statearr_28688_28711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (14))){
var inst_28663 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
var statearr_28689_28712 = state_28673__$1;
(statearr_28689_28712[(2)] = inst_28663);

(statearr_28689_28712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (10))){
var inst_28665 = (state_28673[(2)]);
var state_28673__$1 = (function (){var statearr_28690 = state_28673;
(statearr_28690[(10)] = inst_28665);

return statearr_28690;
})();
var statearr_28691_28713 = state_28673__$1;
(statearr_28691_28713[(2)] = null);

(statearr_28691_28713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (8))){
var inst_28644 = (state_28673[(8)]);
var inst_28647 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28648 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28644);
var inst_28649 = cljs.core.async.timeout.call(null,(1000));
var inst_28650 = [inst_28648,inst_28649];
var inst_28651 = (new cljs.core.PersistentVector(null,2,(5),inst_28647,inst_28650,null));
var state_28673__$1 = state_28673;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28673__$1,(11),inst_28651);
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
});})(c__21345__auto___28699,ch))
;
return ((function (switch__21283__auto__,c__21345__auto___28699,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_28695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28695[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__);

(statearr_28695[(1)] = (1));

return statearr_28695;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1 = (function (state_28673){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28696){if((e28696 instanceof Object)){
var ex__21287__auto__ = e28696;
var statearr_28697_28714 = state_28673;
(statearr_28697_28714[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28715 = state_28673;
state_28673 = G__28715;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__ = function(state_28673){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1.call(this,state_28673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28699,ch))
})();
var state__21347__auto__ = (function (){var statearr_28698 = f__21346__auto__.call(null);
(statearr_28698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28699);

return statearr_28698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28699,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28716_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28716_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28723 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28723){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28721 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28722 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28721,_STAR_print_newline_STAR_28722,base_path_28723){
return (function() { 
var G__28724__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28725__i = 0, G__28725__a = new Array(arguments.length -  0);
while (G__28725__i < G__28725__a.length) {G__28725__a[G__28725__i] = arguments[G__28725__i + 0]; ++G__28725__i;}
  args = new cljs.core.IndexedSeq(G__28725__a,0);
} 
return G__28724__delegate.call(this,args);};
G__28724.cljs$lang$maxFixedArity = 0;
G__28724.cljs$lang$applyTo = (function (arglist__28726){
var args = cljs.core.seq(arglist__28726);
return G__28724__delegate(args);
});
G__28724.cljs$core$IFn$_invoke$arity$variadic = G__28724__delegate;
return G__28724;
})()
;})(_STAR_print_fn_STAR_28721,_STAR_print_newline_STAR_28722,base_path_28723))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28722;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28721;
}}catch (e28720){if((e28720 instanceof Error)){
var e = e28720;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28723], null));
} else {
var e = e28720;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28723))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28727){
var map__28732 = p__28727;
var map__28732__$1 = ((cljs.core.seq_QMARK_.call(null,map__28732))?cljs.core.apply.call(null,cljs.core.hash_map,map__28732):map__28732);
var opts = map__28732__$1;
var build_id = cljs.core.get.call(null,map__28732__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28732,map__28732__$1,opts,build_id){
return (function (p__28733){
var vec__28734 = p__28733;
var map__28735 = cljs.core.nth.call(null,vec__28734,(0),null);
var map__28735__$1 = ((cljs.core.seq_QMARK_.call(null,map__28735))?cljs.core.apply.call(null,cljs.core.hash_map,map__28735):map__28735);
var msg = map__28735__$1;
var msg_name = cljs.core.get.call(null,map__28735__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28734,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28734,map__28735,map__28735__$1,msg,msg_name,_,map__28732,map__28732__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28734,map__28735,map__28735__$1,msg,msg_name,_,map__28732,map__28732__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28732,map__28732__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28739){
var vec__28740 = p__28739;
var map__28741 = cljs.core.nth.call(null,vec__28740,(0),null);
var map__28741__$1 = ((cljs.core.seq_QMARK_.call(null,map__28741))?cljs.core.apply.call(null,cljs.core.hash_map,map__28741):map__28741);
var msg = map__28741__$1;
var msg_name = cljs.core.get.call(null,map__28741__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28740,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28742){
var map__28750 = p__28742;
var map__28750__$1 = ((cljs.core.seq_QMARK_.call(null,map__28750))?cljs.core.apply.call(null,cljs.core.hash_map,map__28750):map__28750);
var on_compile_fail = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28750,map__28750__$1,on_compile_fail,on_compile_warning){
return (function (p__28751){
var vec__28752 = p__28751;
var map__28753 = cljs.core.nth.call(null,vec__28752,(0),null);
var map__28753__$1 = ((cljs.core.seq_QMARK_.call(null,map__28753))?cljs.core.apply.call(null,cljs.core.hash_map,map__28753):map__28753);
var msg = map__28753__$1;
var msg_name = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28752,(1));
var pred__28754 = cljs.core._EQ_;
var expr__28755 = msg_name;
if(cljs.core.truth_(pred__28754.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28755))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28754.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28755))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28750,map__28750__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,msg_hist,msg_names,msg){
return (function (state_28956){
var state_val_28957 = (state_28956[(1)]);
if((state_val_28957 === (7))){
var inst_28890 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28958_28999 = state_28956__$1;
(statearr_28958_28999[(2)] = inst_28890);

(statearr_28958_28999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (20))){
var inst_28918 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28918)){
var statearr_28959_29000 = state_28956__$1;
(statearr_28959_29000[(1)] = (22));

} else {
var statearr_28960_29001 = state_28956__$1;
(statearr_28960_29001[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (27))){
var inst_28930 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28931 = figwheel.client.heads_up.display_warning.call(null,inst_28930);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(30),inst_28931);
} else {
if((state_val_28957 === (1))){
var inst_28878 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28878)){
var statearr_28961_29002 = state_28956__$1;
(statearr_28961_29002[(1)] = (2));

} else {
var statearr_28962_29003 = state_28956__$1;
(statearr_28962_29003[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (24))){
var inst_28946 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28963_29004 = state_28956__$1;
(statearr_28963_29004[(2)] = inst_28946);

(statearr_28963_29004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (4))){
var inst_28954 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28956__$1,inst_28954);
} else {
if((state_val_28957 === (15))){
var inst_28906 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28907 = figwheel.client.format_messages.call(null,inst_28906);
var inst_28908 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28909 = figwheel.client.heads_up.display_error.call(null,inst_28907,inst_28908);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(18),inst_28909);
} else {
if((state_val_28957 === (21))){
var inst_28948 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28964_29005 = state_28956__$1;
(statearr_28964_29005[(2)] = inst_28948);

(statearr_28964_29005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (31))){
var inst_28937 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(34),inst_28937);
} else {
if((state_val_28957 === (32))){
var state_28956__$1 = state_28956;
var statearr_28965_29006 = state_28956__$1;
(statearr_28965_29006[(2)] = null);

(statearr_28965_29006[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (33))){
var inst_28942 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28966_29007 = state_28956__$1;
(statearr_28966_29007[(2)] = inst_28942);

(statearr_28966_29007[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (13))){
var inst_28896 = (state_28956[(2)]);
var inst_28897 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28898 = figwheel.client.format_messages.call(null,inst_28897);
var inst_28899 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28900 = figwheel.client.heads_up.display_error.call(null,inst_28898,inst_28899);
var state_28956__$1 = (function (){var statearr_28967 = state_28956;
(statearr_28967[(7)] = inst_28896);

return statearr_28967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(14),inst_28900);
} else {
if((state_val_28957 === (22))){
var inst_28920 = figwheel.client.heads_up.clear.call(null);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(25),inst_28920);
} else {
if((state_val_28957 === (29))){
var inst_28944 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28968_29008 = state_28956__$1;
(statearr_28968_29008[(2)] = inst_28944);

(statearr_28968_29008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (6))){
var inst_28886 = figwheel.client.heads_up.clear.call(null);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(9),inst_28886);
} else {
if((state_val_28957 === (28))){
var inst_28935 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28935)){
var statearr_28969_29009 = state_28956__$1;
(statearr_28969_29009[(1)] = (31));

} else {
var statearr_28970_29010 = state_28956__$1;
(statearr_28970_29010[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (25))){
var inst_28922 = (state_28956[(2)]);
var inst_28923 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28924 = figwheel.client.heads_up.display_warning.call(null,inst_28923);
var state_28956__$1 = (function (){var statearr_28971 = state_28956;
(statearr_28971[(8)] = inst_28922);

return statearr_28971;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(26),inst_28924);
} else {
if((state_val_28957 === (34))){
var inst_28939 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28972_29011 = state_28956__$1;
(statearr_28972_29011[(2)] = inst_28939);

(statearr_28972_29011[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (17))){
var inst_28950 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28973_29012 = state_28956__$1;
(statearr_28973_29012[(2)] = inst_28950);

(statearr_28973_29012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (3))){
var inst_28892 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28892)){
var statearr_28974_29013 = state_28956__$1;
(statearr_28974_29013[(1)] = (10));

} else {
var statearr_28975_29014 = state_28956__$1;
(statearr_28975_29014[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (12))){
var inst_28952 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28976_29015 = state_28956__$1;
(statearr_28976_29015[(2)] = inst_28952);

(statearr_28976_29015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (2))){
var inst_28880 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28880)){
var statearr_28977_29016 = state_28956__$1;
(statearr_28977_29016[(1)] = (5));

} else {
var statearr_28978_29017 = state_28956__$1;
(statearr_28978_29017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (23))){
var inst_28928 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28928)){
var statearr_28979_29018 = state_28956__$1;
(statearr_28979_29018[(1)] = (27));

} else {
var statearr_28980_29019 = state_28956__$1;
(statearr_28980_29019[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (19))){
var inst_28915 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28916 = figwheel.client.heads_up.append_message.call(null,inst_28915);
var state_28956__$1 = state_28956;
var statearr_28981_29020 = state_28956__$1;
(statearr_28981_29020[(2)] = inst_28916);

(statearr_28981_29020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (11))){
var inst_28904 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28904)){
var statearr_28982_29021 = state_28956__$1;
(statearr_28982_29021[(1)] = (15));

} else {
var statearr_28983_29022 = state_28956__$1;
(statearr_28983_29022[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (9))){
var inst_28888 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28984_29023 = state_28956__$1;
(statearr_28984_29023[(2)] = inst_28888);

(statearr_28984_29023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (5))){
var inst_28882 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(8),inst_28882);
} else {
if((state_val_28957 === (14))){
var inst_28902 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28985_29024 = state_28956__$1;
(statearr_28985_29024[(2)] = inst_28902);

(statearr_28985_29024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (26))){
var inst_28926 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28986_29025 = state_28956__$1;
(statearr_28986_29025[(2)] = inst_28926);

(statearr_28986_29025[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (16))){
var inst_28913 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28956__$1 = state_28956;
if(cljs.core.truth_(inst_28913)){
var statearr_28987_29026 = state_28956__$1;
(statearr_28987_29026[(1)] = (19));

} else {
var statearr_28988_29027 = state_28956__$1;
(statearr_28988_29027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (30))){
var inst_28933 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28989_29028 = state_28956__$1;
(statearr_28989_29028[(2)] = inst_28933);

(statearr_28989_29028[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (10))){
var inst_28894 = figwheel.client.heads_up.clear.call(null);
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28956__$1,(13),inst_28894);
} else {
if((state_val_28957 === (18))){
var inst_28911 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28990_29029 = state_28956__$1;
(statearr_28990_29029[(2)] = inst_28911);

(statearr_28990_29029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28957 === (8))){
var inst_28884 = (state_28956[(2)]);
var state_28956__$1 = state_28956;
var statearr_28991_29030 = state_28956__$1;
(statearr_28991_29030[(2)] = inst_28884);

(statearr_28991_29030[(1)] = (7));


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
var statearr_28995 = [null,null,null,null,null,null,null,null,null];
(statearr_28995[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__);

(statearr_28995[(1)] = (1));

return statearr_28995;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1 = (function (state_28956){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28996){if((e28996 instanceof Object)){
var ex__21287__auto__ = e28996;
var statearr_28997_29031 = state_28956;
(statearr_28997_29031[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29032 = state_28956;
state_28956 = G__29032;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__ = function(state_28956){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1.call(this,state_28956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,msg_hist,msg_names,msg))
})();
var state__21347__auto__ = (function (){var statearr_28998 = f__21346__auto__.call(null);
(statearr_28998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_28998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,msg_hist,msg_names,msg))
);

return c__21345__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21345__auto___29095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___29095,ch){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___29095,ch){
return (function (state_29078){
var state_val_29079 = (state_29078[(1)]);
if((state_val_29079 === (8))){
var inst_29070 = (state_29078[(2)]);
var state_29078__$1 = (function (){var statearr_29080 = state_29078;
(statearr_29080[(7)] = inst_29070);

return statearr_29080;
})();
var statearr_29081_29096 = state_29078__$1;
(statearr_29081_29096[(2)] = null);

(statearr_29081_29096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (7))){
var inst_29074 = (state_29078[(2)]);
var state_29078__$1 = state_29078;
var statearr_29082_29097 = state_29078__$1;
(statearr_29082_29097[(2)] = inst_29074);

(statearr_29082_29097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (6))){
var state_29078__$1 = state_29078;
var statearr_29083_29098 = state_29078__$1;
(statearr_29083_29098[(2)] = null);

(statearr_29083_29098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (5))){
var inst_29066 = (state_29078[(8)]);
var inst_29068 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29066);
var state_29078__$1 = state_29078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29078__$1,(8),inst_29068);
} else {
if((state_val_29079 === (4))){
var inst_29066 = (state_29078[(8)]);
var inst_29066__$1 = (state_29078[(2)]);
var state_29078__$1 = (function (){var statearr_29084 = state_29078;
(statearr_29084[(8)] = inst_29066__$1);

return statearr_29084;
})();
if(cljs.core.truth_(inst_29066__$1)){
var statearr_29085_29099 = state_29078__$1;
(statearr_29085_29099[(1)] = (5));

} else {
var statearr_29086_29100 = state_29078__$1;
(statearr_29086_29100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (3))){
var inst_29076 = (state_29078[(2)]);
var state_29078__$1 = state_29078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29078__$1,inst_29076);
} else {
if((state_val_29079 === (2))){
var state_29078__$1 = state_29078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29078__$1,(4),ch);
} else {
if((state_val_29079 === (1))){
var state_29078__$1 = state_29078;
var statearr_29087_29101 = state_29078__$1;
(statearr_29087_29101[(2)] = null);

(statearr_29087_29101[(1)] = (2));


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
});})(c__21345__auto___29095,ch))
;
return ((function (switch__21283__auto__,c__21345__auto___29095,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_29091 = [null,null,null,null,null,null,null,null,null];
(statearr_29091[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21284__auto__);

(statearr_29091[(1)] = (1));

return statearr_29091;
});
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1 = (function (state_29078){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29092){if((e29092 instanceof Object)){
var ex__21287__auto__ = e29092;
var statearr_29093_29102 = state_29078;
(statearr_29093_29102[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29103 = state_29078;
state_29078 = G__29103;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__ = function(state_29078){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1.call(this,state_29078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___29095,ch))
})();
var state__21347__auto__ = (function (){var statearr_29094 = f__21346__auto__.call(null);
(statearr_29094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___29095);

return statearr_29094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___29095,ch))
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
return (function (state_29124){
var state_val_29125 = (state_29124[(1)]);
if((state_val_29125 === (2))){
var inst_29121 = (state_29124[(2)]);
var inst_29122 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29124__$1 = (function (){var statearr_29126 = state_29124;
(statearr_29126[(7)] = inst_29121);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29124__$1,inst_29122);
} else {
if((state_val_29125 === (1))){
var inst_29119 = cljs.core.async.timeout.call(null,(3000));
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29124__$1,(2),inst_29119);
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
var statearr_29130 = [null,null,null,null,null,null,null,null];
(statearr_29130[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__);

(statearr_29130[(1)] = (1));

return statearr_29130;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1 = (function (state_29124){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29131){if((e29131 instanceof Object)){
var ex__21287__auto__ = e29131;
var statearr_29132_29134 = state_29124;
(statearr_29132_29134[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29135 = state_29124;
state_29124 = G__29135;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__ = function(state_29124){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1.call(this,state_29124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29133 = f__21346__auto__.call(null);
(statearr_29133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29133;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29136){
var map__29142 = p__29136;
var map__29142__$1 = ((cljs.core.seq_QMARK_.call(null,map__29142))?cljs.core.apply.call(null,cljs.core.hash_map,map__29142):map__29142);
var ed = map__29142__$1;
var cause = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29143_29147 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29144_29148 = null;
var count__29145_29149 = (0);
var i__29146_29150 = (0);
while(true){
if((i__29146_29150 < count__29145_29149)){
var msg_29151 = cljs.core._nth.call(null,chunk__29144_29148,i__29146_29150);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29151);

var G__29152 = seq__29143_29147;
var G__29153 = chunk__29144_29148;
var G__29154 = count__29145_29149;
var G__29155 = (i__29146_29150 + (1));
seq__29143_29147 = G__29152;
chunk__29144_29148 = G__29153;
count__29145_29149 = G__29154;
i__29146_29150 = G__29155;
continue;
} else {
var temp__4126__auto___29156 = cljs.core.seq.call(null,seq__29143_29147);
if(temp__4126__auto___29156){
var seq__29143_29157__$1 = temp__4126__auto___29156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29143_29157__$1)){
var c__18906__auto___29158 = cljs.core.chunk_first.call(null,seq__29143_29157__$1);
var G__29159 = cljs.core.chunk_rest.call(null,seq__29143_29157__$1);
var G__29160 = c__18906__auto___29158;
var G__29161 = cljs.core.count.call(null,c__18906__auto___29158);
var G__29162 = (0);
seq__29143_29147 = G__29159;
chunk__29144_29148 = G__29160;
count__29145_29149 = G__29161;
i__29146_29150 = G__29162;
continue;
} else {
var msg_29163 = cljs.core.first.call(null,seq__29143_29157__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29163);

var G__29164 = cljs.core.next.call(null,seq__29143_29157__$1);
var G__29165 = null;
var G__29166 = (0);
var G__29167 = (0);
seq__29143_29147 = G__29164;
chunk__29144_29148 = G__29165;
count__29145_29149 = G__29166;
i__29146_29150 = G__29167;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29168){
var map__29170 = p__29168;
var map__29170__$1 = ((cljs.core.seq_QMARK_.call(null,map__29170))?cljs.core.apply.call(null,cljs.core.hash_map,map__29170):map__29170);
var w = map__29170__$1;
var message = cljs.core.get.call(null,map__29170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29177 = cljs.core.seq.call(null,plugins);
var chunk__29178 = null;
var count__29179 = (0);
var i__29180 = (0);
while(true){
if((i__29180 < count__29179)){
var vec__29181 = cljs.core._nth.call(null,chunk__29178,i__29180);
var k = cljs.core.nth.call(null,vec__29181,(0),null);
var plugin = cljs.core.nth.call(null,vec__29181,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29183 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29177,chunk__29178,count__29179,i__29180,pl_29183,vec__29181,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29183.call(null,msg_hist);
});})(seq__29177,chunk__29178,count__29179,i__29180,pl_29183,vec__29181,k,plugin))
);
} else {
}

var G__29184 = seq__29177;
var G__29185 = chunk__29178;
var G__29186 = count__29179;
var G__29187 = (i__29180 + (1));
seq__29177 = G__29184;
chunk__29178 = G__29185;
count__29179 = G__29186;
i__29180 = G__29187;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29177);
if(temp__4126__auto__){
var seq__29177__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29177__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__29177__$1);
var G__29188 = cljs.core.chunk_rest.call(null,seq__29177__$1);
var G__29189 = c__18906__auto__;
var G__29190 = cljs.core.count.call(null,c__18906__auto__);
var G__29191 = (0);
seq__29177 = G__29188;
chunk__29178 = G__29189;
count__29179 = G__29190;
i__29180 = G__29191;
continue;
} else {
var vec__29182 = cljs.core.first.call(null,seq__29177__$1);
var k = cljs.core.nth.call(null,vec__29182,(0),null);
var plugin = cljs.core.nth.call(null,vec__29182,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29192 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29177,chunk__29178,count__29179,i__29180,pl_29192,vec__29182,k,plugin,seq__29177__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29192.call(null,msg_hist);
});})(seq__29177,chunk__29178,count__29179,i__29180,pl_29192,vec__29182,k,plugin,seq__29177__$1,temp__4126__auto__))
);
} else {
}

var G__29193 = cljs.core.next.call(null,seq__29177__$1);
var G__29194 = null;
var G__29195 = (0);
var G__29196 = (0);
seq__29177 = G__29193;
chunk__29178 = G__29194;
count__29179 = G__29195;
i__29180 = G__29196;
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
var G__29198 = arguments.length;
switch (G__29198) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29201){
var map__29202 = p__29201;
var map__29202__$1 = ((cljs.core.seq_QMARK_.call(null,map__29202))?cljs.core.apply.call(null,cljs.core.hash_map,map__29202):map__29202);
var opts = map__29202__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29200){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29200));
});

//# sourceMappingURL=client.js.map?rel=1436140472796