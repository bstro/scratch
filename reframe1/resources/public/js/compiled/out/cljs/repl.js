// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29572_29584 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29573_29585 = null;
var count__29574_29586 = (0);
var i__29575_29587 = (0);
while(true){
if((i__29575_29587 < count__29574_29586)){
var f_29588 = cljs.core._nth.call(null,chunk__29573_29585,i__29575_29587);
cljs.core.println.call(null,"  ",f_29588);

var G__29589 = seq__29572_29584;
var G__29590 = chunk__29573_29585;
var G__29591 = count__29574_29586;
var G__29592 = (i__29575_29587 + (1));
seq__29572_29584 = G__29589;
chunk__29573_29585 = G__29590;
count__29574_29586 = G__29591;
i__29575_29587 = G__29592;
continue;
} else {
var temp__4126__auto___29593 = cljs.core.seq.call(null,seq__29572_29584);
if(temp__4126__auto___29593){
var seq__29572_29594__$1 = temp__4126__auto___29593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29572_29594__$1)){
var c__18906__auto___29595 = cljs.core.chunk_first.call(null,seq__29572_29594__$1);
var G__29596 = cljs.core.chunk_rest.call(null,seq__29572_29594__$1);
var G__29597 = c__18906__auto___29595;
var G__29598 = cljs.core.count.call(null,c__18906__auto___29595);
var G__29599 = (0);
seq__29572_29584 = G__29596;
chunk__29573_29585 = G__29597;
count__29574_29586 = G__29598;
i__29575_29587 = G__29599;
continue;
} else {
var f_29600 = cljs.core.first.call(null,seq__29572_29594__$1);
cljs.core.println.call(null,"  ",f_29600);

var G__29601 = cljs.core.next.call(null,seq__29572_29594__$1);
var G__29602 = null;
var G__29603 = (0);
var G__29604 = (0);
seq__29572_29584 = G__29601;
chunk__29573_29585 = G__29602;
count__29574_29586 = G__29603;
i__29575_29587 = G__29604;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18121__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29576 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29577 = null;
var count__29578 = (0);
var i__29579 = (0);
while(true){
if((i__29579 < count__29578)){
var vec__29580 = cljs.core._nth.call(null,chunk__29577,i__29579);
var name = cljs.core.nth.call(null,vec__29580,(0),null);
var map__29581 = cljs.core.nth.call(null,vec__29580,(1),null);
var map__29581__$1 = ((cljs.core.seq_QMARK_.call(null,map__29581))?cljs.core.apply.call(null,cljs.core.hash_map,map__29581):map__29581);
var arglists = cljs.core.get.call(null,map__29581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29605 = seq__29576;
var G__29606 = chunk__29577;
var G__29607 = count__29578;
var G__29608 = (i__29579 + (1));
seq__29576 = G__29605;
chunk__29577 = G__29606;
count__29578 = G__29607;
i__29579 = G__29608;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29576);
if(temp__4126__auto__){
var seq__29576__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29576__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__29576__$1);
var G__29609 = cljs.core.chunk_rest.call(null,seq__29576__$1);
var G__29610 = c__18906__auto__;
var G__29611 = cljs.core.count.call(null,c__18906__auto__);
var G__29612 = (0);
seq__29576 = G__29609;
chunk__29577 = G__29610;
count__29578 = G__29611;
i__29579 = G__29612;
continue;
} else {
var vec__29582 = cljs.core.first.call(null,seq__29576__$1);
var name = cljs.core.nth.call(null,vec__29582,(0),null);
var map__29583 = cljs.core.nth.call(null,vec__29582,(1),null);
var map__29583__$1 = ((cljs.core.seq_QMARK_.call(null,map__29583))?cljs.core.apply.call(null,cljs.core.hash_map,map__29583):map__29583);
var arglists = cljs.core.get.call(null,map__29583__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29583__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29613 = cljs.core.next.call(null,seq__29576__$1);
var G__29614 = null;
var G__29615 = (0);
var G__29616 = (0);
seq__29576 = G__29613;
chunk__29577 = G__29614;
count__29578 = G__29615;
i__29579 = G__29616;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1436140473643