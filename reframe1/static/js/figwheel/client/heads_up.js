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
var seq__29659_29667 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29660_29668 = null;
var count__29661_29669 = (0);
var i__29662_29670 = (0);
while(true){
if((i__29662_29670 < count__29661_29669)){
var k_29671 = cljs.core._nth.call(null,chunk__29660_29668,i__29662_29670);
e.setAttribute(cljs.core.name.call(null,k_29671),cljs.core.get.call(null,attrs,k_29671));

var G__29672 = seq__29659_29667;
var G__29673 = chunk__29660_29668;
var G__29674 = count__29661_29669;
var G__29675 = (i__29662_29670 + (1));
seq__29659_29667 = G__29672;
chunk__29660_29668 = G__29673;
count__29661_29669 = G__29674;
i__29662_29670 = G__29675;
continue;
} else {
var temp__4126__auto___29676 = cljs.core.seq.call(null,seq__29659_29667);
if(temp__4126__auto___29676){
var seq__29659_29677__$1 = temp__4126__auto___29676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29659_29677__$1)){
var c__18906__auto___29678 = cljs.core.chunk_first.call(null,seq__29659_29677__$1);
var G__29679 = cljs.core.chunk_rest.call(null,seq__29659_29677__$1);
var G__29680 = c__18906__auto___29678;
var G__29681 = cljs.core.count.call(null,c__18906__auto___29678);
var G__29682 = (0);
seq__29659_29667 = G__29679;
chunk__29660_29668 = G__29680;
count__29661_29669 = G__29681;
i__29662_29670 = G__29682;
continue;
} else {
var k_29683 = cljs.core.first.call(null,seq__29659_29677__$1);
e.setAttribute(cljs.core.name.call(null,k_29683),cljs.core.get.call(null,attrs,k_29683));

var G__29684 = cljs.core.next.call(null,seq__29659_29677__$1);
var G__29685 = null;
var G__29686 = (0);
var G__29687 = (0);
seq__29659_29667 = G__29684;
chunk__29660_29668 = G__29685;
count__29661_29669 = G__29686;
i__29662_29670 = G__29687;
continue;
}
} else {
}
}
break;
}

var seq__29663_29688 = cljs.core.seq.call(null,children);
var chunk__29664_29689 = null;
var count__29665_29690 = (0);
var i__29666_29691 = (0);
while(true){
if((i__29666_29691 < count__29665_29690)){
var ch_29692 = cljs.core._nth.call(null,chunk__29664_29689,i__29666_29691);
e.appendChild(ch_29692);

var G__29693 = seq__29663_29688;
var G__29694 = chunk__29664_29689;
var G__29695 = count__29665_29690;
var G__29696 = (i__29666_29691 + (1));
seq__29663_29688 = G__29693;
chunk__29664_29689 = G__29694;
count__29665_29690 = G__29695;
i__29666_29691 = G__29696;
continue;
} else {
var temp__4126__auto___29697 = cljs.core.seq.call(null,seq__29663_29688);
if(temp__4126__auto___29697){
var seq__29663_29698__$1 = temp__4126__auto___29697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29663_29698__$1)){
var c__18906__auto___29699 = cljs.core.chunk_first.call(null,seq__29663_29698__$1);
var G__29700 = cljs.core.chunk_rest.call(null,seq__29663_29698__$1);
var G__29701 = c__18906__auto___29699;
var G__29702 = cljs.core.count.call(null,c__18906__auto___29699);
var G__29703 = (0);
seq__29663_29688 = G__29700;
chunk__29664_29689 = G__29701;
count__29665_29690 = G__29702;
i__29666_29691 = G__29703;
continue;
} else {
var ch_29704 = cljs.core.first.call(null,seq__29663_29698__$1);
e.appendChild(ch_29704);

var G__29705 = cljs.core.next.call(null,seq__29663_29698__$1);
var G__29706 = null;
var G__29707 = (0);
var G__29708 = (0);
seq__29663_29688 = G__29705;
chunk__29664_29689 = G__29706;
count__29665_29690 = G__29707;
i__29666_29691 = G__29708;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29656){
var G__29657 = cljs.core.first.call(null,seq29656);
var seq29656__$1 = cljs.core.next.call(null,seq29656);
var G__29658 = cljs.core.first.call(null,seq29656__$1);
var seq29656__$2 = cljs.core.next.call(null,seq29656__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29657,G__29658,seq29656__$2);
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
var el_29709 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29709.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29709.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29709.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29709);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29710,st_map){
var map__29714 = p__29710;
var map__29714__$1 = ((cljs.core.seq_QMARK_.call(null,map__29714))?cljs.core.apply.call(null,cljs.core.hash_map,map__29714):map__29714);
var container_el = cljs.core.get.call(null,map__29714__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29714,map__29714__$1,container_el){
return (function (p__29715){
var vec__29716 = p__29715;
var k = cljs.core.nth.call(null,vec__29716,(0),null);
var v = cljs.core.nth.call(null,vec__29716,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29714,map__29714__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29717,dom_str){
var map__29719 = p__29717;
var map__29719__$1 = ((cljs.core.seq_QMARK_.call(null,map__29719))?cljs.core.apply.call(null,cljs.core.hash_map,map__29719):map__29719);
var c = map__29719__$1;
var content_area_el = cljs.core.get.call(null,map__29719__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29720){
var map__29722 = p__29720;
var map__29722__$1 = ((cljs.core.seq_QMARK_.call(null,map__29722))?cljs.core.apply.call(null,cljs.core.hash_map,map__29722):map__29722);
var content_area_el = cljs.core.get.call(null,map__29722__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_29764){
var state_val_29765 = (state_29764[(1)]);
if((state_val_29765 === (2))){
var inst_29749 = (state_29764[(7)]);
var inst_29758 = (state_29764[(2)]);
var inst_29759 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29760 = ["auto"];
var inst_29761 = cljs.core.PersistentHashMap.fromArrays(inst_29759,inst_29760);
var inst_29762 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29749,inst_29761);
var state_29764__$1 = (function (){var statearr_29766 = state_29764;
(statearr_29766[(8)] = inst_29758);

return statearr_29766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29764__$1,inst_29762);
} else {
if((state_val_29765 === (1))){
var inst_29749 = (state_29764[(7)]);
var inst_29749__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29750 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29751 = ["10px","10px","100%","68px","1.0"];
var inst_29752 = cljs.core.PersistentHashMap.fromArrays(inst_29750,inst_29751);
var inst_29753 = cljs.core.merge.call(null,inst_29752,style);
var inst_29754 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29749__$1,inst_29753);
var inst_29755 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29749__$1,msg);
var inst_29756 = cljs.core.async.timeout.call(null,(300));
var state_29764__$1 = (function (){var statearr_29767 = state_29764;
(statearr_29767[(9)] = inst_29755);

(statearr_29767[(7)] = inst_29749__$1);

(statearr_29767[(10)] = inst_29754);

return statearr_29767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29764__$1,(2),inst_29756);
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
var statearr_29771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29771[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__);

(statearr_29771[(1)] = (1));

return statearr_29771;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1 = (function (state_29764){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29772){if((e29772 instanceof Object)){
var ex__21287__auto__ = e29772;
var statearr_29773_29775 = state_29764;
(statearr_29773_29775[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29776 = state_29764;
state_29764 = G__29776;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__ = function(state_29764){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1.call(this,state_29764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29774 = f__21346__auto__.call(null);
(statearr_29774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29774;
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
var vec__29778 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__29778,(0),null);
var ln = cljs.core.nth.call(null,vec__29778,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29781 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29781,(0),null);
var file_line = cljs.core.nth.call(null,vec__29781,(1),null);
var file_column = cljs.core.nth.call(null,vec__29781,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29781,file_name,file_line,file_column){
return (function (p1__29779_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__29779_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__29781,file_name,file_line,file_column))
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
var map__29783 = figwheel.client.heads_up.ensure_container.call(null);
var map__29783__$1 = ((cljs.core.seq_QMARK_.call(null,map__29783))?cljs.core.apply.call(null,cljs.core.hash_map,map__29783):map__29783);
var content_area_el = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_29830){
var state_val_29831 = (state_29830[(1)]);
if((state_val_29831 === (3))){
var inst_29813 = (state_29830[(7)]);
var inst_29827 = (state_29830[(2)]);
var inst_29828 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29813,"");
var state_29830__$1 = (function (){var statearr_29832 = state_29830;
(statearr_29832[(8)] = inst_29827);

return statearr_29832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29830__$1,inst_29828);
} else {
if((state_val_29831 === (2))){
var inst_29813 = (state_29830[(7)]);
var inst_29820 = (state_29830[(2)]);
var inst_29821 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29822 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29823 = cljs.core.PersistentHashMap.fromArrays(inst_29821,inst_29822);
var inst_29824 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29813,inst_29823);
var inst_29825 = cljs.core.async.timeout.call(null,(200));
var state_29830__$1 = (function (){var statearr_29833 = state_29830;
(statearr_29833[(9)] = inst_29820);

(statearr_29833[(10)] = inst_29824);

return statearr_29833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29830__$1,(3),inst_29825);
} else {
if((state_val_29831 === (1))){
var inst_29813 = (state_29830[(7)]);
var inst_29813__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29814 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29815 = ["0.0"];
var inst_29816 = cljs.core.PersistentHashMap.fromArrays(inst_29814,inst_29815);
var inst_29817 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29813__$1,inst_29816);
var inst_29818 = cljs.core.async.timeout.call(null,(300));
var state_29830__$1 = (function (){var statearr_29834 = state_29830;
(statearr_29834[(7)] = inst_29813__$1);

(statearr_29834[(11)] = inst_29817);

return statearr_29834;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29830__$1,(2),inst_29818);
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
var statearr_29838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29838[(0)] = figwheel$client$heads_up$clear_$_state_machine__21284__auto__);

(statearr_29838[(1)] = (1));

return statearr_29838;
});
var figwheel$client$heads_up$clear_$_state_machine__21284__auto____1 = (function (state_29830){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29839){if((e29839 instanceof Object)){
var ex__21287__auto__ = e29839;
var statearr_29840_29842 = state_29830;
(statearr_29840_29842[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29843 = state_29830;
state_29830 = G__29843;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21284__auto__ = function(state_29830){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21284__auto____1.call(this,state_29830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21284__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29841 = f__21346__auto__.call(null);
(statearr_29841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29841;
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
return (function (state_29875){
var state_val_29876 = (state_29875[(1)]);
if((state_val_29876 === (4))){
var inst_29873 = (state_29875[(2)]);
var state_29875__$1 = state_29875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29875__$1,inst_29873);
} else {
if((state_val_29876 === (3))){
var inst_29870 = (state_29875[(2)]);
var inst_29871 = figwheel.client.heads_up.clear.call(null);
var state_29875__$1 = (function (){var statearr_29877 = state_29875;
(statearr_29877[(7)] = inst_29870);

return statearr_29877;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29875__$1,(4),inst_29871);
} else {
if((state_val_29876 === (2))){
var inst_29867 = (state_29875[(2)]);
var inst_29868 = cljs.core.async.timeout.call(null,(400));
var state_29875__$1 = (function (){var statearr_29878 = state_29875;
(statearr_29878[(8)] = inst_29867);

return statearr_29878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29875__$1,(3),inst_29868);
} else {
if((state_val_29876 === (1))){
var inst_29865 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29875__$1 = state_29875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29875__$1,(2),inst_29865);
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
var statearr_29882 = [null,null,null,null,null,null,null,null,null];
(statearr_29882[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__);

(statearr_29882[(1)] = (1));

return statearr_29882;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1 = (function (state_29875){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29883){if((e29883 instanceof Object)){
var ex__21287__auto__ = e29883;
var statearr_29884_29886 = state_29875;
(statearr_29884_29886[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29887 = state_29875;
state_29875 = G__29887;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__ = function(state_29875){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1.call(this,state_29875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29885 = f__21346__auto__.call(null);
(statearr_29885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1437351693895