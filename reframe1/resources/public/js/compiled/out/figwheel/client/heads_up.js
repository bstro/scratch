// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29329_29337 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29330_29338 = null;
var count__29331_29339 = (0);
var i__29332_29340 = (0);
while(true){
if((i__29332_29340 < count__29331_29339)){
var k_29341 = cljs.core._nth.call(null,chunk__29330_29338,i__29332_29340);
e.setAttribute(cljs.core.name.call(null,k_29341),cljs.core.get.call(null,attrs,k_29341));

var G__29342 = seq__29329_29337;
var G__29343 = chunk__29330_29338;
var G__29344 = count__29331_29339;
var G__29345 = (i__29332_29340 + (1));
seq__29329_29337 = G__29342;
chunk__29330_29338 = G__29343;
count__29331_29339 = G__29344;
i__29332_29340 = G__29345;
continue;
} else {
var temp__4126__auto___29346 = cljs.core.seq.call(null,seq__29329_29337);
if(temp__4126__auto___29346){
var seq__29329_29347__$1 = temp__4126__auto___29346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29329_29347__$1)){
var c__18906__auto___29348 = cljs.core.chunk_first.call(null,seq__29329_29347__$1);
var G__29349 = cljs.core.chunk_rest.call(null,seq__29329_29347__$1);
var G__29350 = c__18906__auto___29348;
var G__29351 = cljs.core.count.call(null,c__18906__auto___29348);
var G__29352 = (0);
seq__29329_29337 = G__29349;
chunk__29330_29338 = G__29350;
count__29331_29339 = G__29351;
i__29332_29340 = G__29352;
continue;
} else {
var k_29353 = cljs.core.first.call(null,seq__29329_29347__$1);
e.setAttribute(cljs.core.name.call(null,k_29353),cljs.core.get.call(null,attrs,k_29353));

var G__29354 = cljs.core.next.call(null,seq__29329_29347__$1);
var G__29355 = null;
var G__29356 = (0);
var G__29357 = (0);
seq__29329_29337 = G__29354;
chunk__29330_29338 = G__29355;
count__29331_29339 = G__29356;
i__29332_29340 = G__29357;
continue;
}
} else {
}
}
break;
}

var seq__29333_29358 = cljs.core.seq.call(null,children);
var chunk__29334_29359 = null;
var count__29335_29360 = (0);
var i__29336_29361 = (0);
while(true){
if((i__29336_29361 < count__29335_29360)){
var ch_29362 = cljs.core._nth.call(null,chunk__29334_29359,i__29336_29361);
e.appendChild(ch_29362);

var G__29363 = seq__29333_29358;
var G__29364 = chunk__29334_29359;
var G__29365 = count__29335_29360;
var G__29366 = (i__29336_29361 + (1));
seq__29333_29358 = G__29363;
chunk__29334_29359 = G__29364;
count__29335_29360 = G__29365;
i__29336_29361 = G__29366;
continue;
} else {
var temp__4126__auto___29367 = cljs.core.seq.call(null,seq__29333_29358);
if(temp__4126__auto___29367){
var seq__29333_29368__$1 = temp__4126__auto___29367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29333_29368__$1)){
var c__18906__auto___29369 = cljs.core.chunk_first.call(null,seq__29333_29368__$1);
var G__29370 = cljs.core.chunk_rest.call(null,seq__29333_29368__$1);
var G__29371 = c__18906__auto___29369;
var G__29372 = cljs.core.count.call(null,c__18906__auto___29369);
var G__29373 = (0);
seq__29333_29358 = G__29370;
chunk__29334_29359 = G__29371;
count__29335_29360 = G__29372;
i__29336_29361 = G__29373;
continue;
} else {
var ch_29374 = cljs.core.first.call(null,seq__29333_29368__$1);
e.appendChild(ch_29374);

var G__29375 = cljs.core.next.call(null,seq__29333_29368__$1);
var G__29376 = null;
var G__29377 = (0);
var G__29378 = (0);
seq__29333_29358 = G__29375;
chunk__29334_29359 = G__29376;
count__29335_29360 = G__29377;
i__29336_29361 = G__29378;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29326){
var G__29327 = cljs.core.first.call(null,seq29326);
var seq29326__$1 = cljs.core.next.call(null,seq29326);
var G__29328 = cljs.core.first.call(null,seq29326__$1);
var seq29326__$2 = cljs.core.next.call(null,seq29326__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29327,G__29328,seq29326__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__,hierarchy__19020__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__,hierarchy__19020__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29379 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29379.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29379.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29379.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29379);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29380,st_map){
var map__29384 = p__29380;
var map__29384__$1 = ((cljs.core.seq_QMARK_.call(null,map__29384))?cljs.core.apply.call(null,cljs.core.hash_map,map__29384):map__29384);
var container_el = cljs.core.get.call(null,map__29384__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29384,map__29384__$1,container_el){
return (function (p__29385){
var vec__29386 = p__29385;
var k = cljs.core.nth.call(null,vec__29386,(0),null);
var v = cljs.core.nth.call(null,vec__29386,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29384,map__29384__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29387,dom_str){
var map__29389 = p__29387;
var map__29389__$1 = ((cljs.core.seq_QMARK_.call(null,map__29389))?cljs.core.apply.call(null,cljs.core.hash_map,map__29389):map__29389);
var c = map__29389__$1;
var content_area_el = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29390){
var map__29392 = p__29390;
var map__29392__$1 = ((cljs.core.seq_QMARK_.call(null,map__29392))?cljs.core.apply.call(null,cljs.core.hash_map,map__29392):map__29392);
var content_area_el = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_29434){
var state_val_29435 = (state_29434[(1)]);
if((state_val_29435 === (2))){
var inst_29419 = (state_29434[(7)]);
var inst_29428 = (state_29434[(2)]);
var inst_29429 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29430 = ["auto"];
var inst_29431 = cljs.core.PersistentHashMap.fromArrays(inst_29429,inst_29430);
var inst_29432 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29419,inst_29431);
var state_29434__$1 = (function (){var statearr_29436 = state_29434;
(statearr_29436[(8)] = inst_29428);

return statearr_29436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29434__$1,inst_29432);
} else {
if((state_val_29435 === (1))){
var inst_29419 = (state_29434[(7)]);
var inst_29419__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29420 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29421 = ["10px","10px","100%","68px","1.0"];
var inst_29422 = cljs.core.PersistentHashMap.fromArrays(inst_29420,inst_29421);
var inst_29423 = cljs.core.merge.call(null,inst_29422,style);
var inst_29424 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29419__$1,inst_29423);
var inst_29425 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29419__$1,msg);
var inst_29426 = cljs.core.async.timeout.call(null,(300));
var state_29434__$1 = (function (){var statearr_29437 = state_29434;
(statearr_29437[(9)] = inst_29424);

(statearr_29437[(10)] = inst_29425);

(statearr_29437[(7)] = inst_29419__$1);

return statearr_29437;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29434__$1,(2),inst_29426);
} else {
return null;
}
}
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0 = (function (){
var statearr_29441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29441[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__);

(statearr_29441[(1)] = (1));

return statearr_29441;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1 = (function (state_29434){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object)){
var ex__21287__auto__ = e29442;
var statearr_29443_29445 = state_29434;
(statearr_29443_29445[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29446 = state_29434;
state_29434 = G__29446;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__ = function(state_29434){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1.call(this,state_29434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29444 = f__21346__auto__.call(null);
(statearr_29444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__29448 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__29448,(0),null);
var ln = cljs.core.nth.call(null,vec__29448,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29451 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29451,(0),null);
var file_line = cljs.core.nth.call(null,vec__29451,(1),null);
var file_column = cljs.core.nth.call(null,vec__29451,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29451,file_name,file_line,file_column){
return (function (p1__29449_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__29449_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__29451,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18121__auto__ = file_line;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
var and__18109__auto__ = cause;
if(cljs.core.truth_(and__18109__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18109__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29453 = figwheel.client.heads_up.ensure_container.call(null);
var map__29453__$1 = ((cljs.core.seq_QMARK_.call(null,map__29453))?cljs.core.apply.call(null,cljs.core.hash_map,map__29453):map__29453);
var content_area_el = cljs.core.get.call(null,map__29453__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_29500){
var state_val_29501 = (state_29500[(1)]);
if((state_val_29501 === (3))){
var inst_29483 = (state_29500[(7)]);
var inst_29497 = (state_29500[(2)]);
var inst_29498 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29483,"");
var state_29500__$1 = (function (){var statearr_29502 = state_29500;
(statearr_29502[(8)] = inst_29497);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29500__$1,inst_29498);
} else {
if((state_val_29501 === (2))){
var inst_29483 = (state_29500[(7)]);
var inst_29490 = (state_29500[(2)]);
var inst_29491 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29492 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29493 = cljs.core.PersistentHashMap.fromArrays(inst_29491,inst_29492);
var inst_29494 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29483,inst_29493);
var inst_29495 = cljs.core.async.timeout.call(null,(200));
var state_29500__$1 = (function (){var statearr_29503 = state_29500;
(statearr_29503[(9)] = inst_29490);

(statearr_29503[(10)] = inst_29494);

return statearr_29503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29500__$1,(3),inst_29495);
} else {
if((state_val_29501 === (1))){
var inst_29483 = (state_29500[(7)]);
var inst_29483__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29484 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29485 = ["0.0"];
var inst_29486 = cljs.core.PersistentHashMap.fromArrays(inst_29484,inst_29485);
var inst_29487 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29483__$1,inst_29486);
var inst_29488 = cljs.core.async.timeout.call(null,(300));
var state_29500__$1 = (function (){var statearr_29504 = state_29500;
(statearr_29504[(11)] = inst_29487);

(statearr_29504[(7)] = inst_29483__$1);

return statearr_29504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29500__$1,(2),inst_29488);
} else {
return null;
}
}
}
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21284__auto____0 = (function (){
var statearr_29508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29508[(0)] = figwheel$client$heads_up$clear_$_state_machine__21284__auto__);

(statearr_29508[(1)] = (1));

return statearr_29508;
});
var figwheel$client$heads_up$clear_$_state_machine__21284__auto____1 = (function (state_29500){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29509){if((e29509 instanceof Object)){
var ex__21287__auto__ = e29509;
var statearr_29510_29512 = state_29500;
(statearr_29510_29512[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29513 = state_29500;
state_29500 = G__29513;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21284__auto__ = function(state_29500){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21284__auto____1.call(this,state_29500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21284__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29511 = f__21346__auto__.call(null);
(statearr_29511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_29545){
var state_val_29546 = (state_29545[(1)]);
if((state_val_29546 === (4))){
var inst_29543 = (state_29545[(2)]);
var state_29545__$1 = state_29545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29545__$1,inst_29543);
} else {
if((state_val_29546 === (3))){
var inst_29540 = (state_29545[(2)]);
var inst_29541 = figwheel.client.heads_up.clear.call(null);
var state_29545__$1 = (function (){var statearr_29547 = state_29545;
(statearr_29547[(7)] = inst_29540);

return statearr_29547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29545__$1,(4),inst_29541);
} else {
if((state_val_29546 === (2))){
var inst_29537 = (state_29545[(2)]);
var inst_29538 = cljs.core.async.timeout.call(null,(400));
var state_29545__$1 = (function (){var statearr_29548 = state_29545;
(statearr_29548[(8)] = inst_29537);

return statearr_29548;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29545__$1,(3),inst_29538);
} else {
if((state_val_29546 === (1))){
var inst_29535 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29545__$1 = state_29545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29545__$1,(2),inst_29535);
} else {
return null;
}
}
}
}
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0 = (function (){
var statearr_29552 = [null,null,null,null,null,null,null,null,null];
(statearr_29552[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__);

(statearr_29552[(1)] = (1));

return statearr_29552;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1 = (function (state_29545){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29553){if((e29553 instanceof Object)){
var ex__21287__auto__ = e29553;
var statearr_29554_29556 = state_29545;
(statearr_29554_29556[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29557 = state_29545;
state_29545 = G__29557;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__ = function(state_29545){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1.call(this,state_29545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29555 = f__21346__auto__.call(null);
(statearr_29555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1436140473555