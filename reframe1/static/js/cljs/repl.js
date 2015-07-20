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
var seq__29902_29914 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29903_29915 = null;
var count__29904_29916 = (0);
var i__29905_29917 = (0);
while(true){
if((i__29905_29917 < count__29904_29916)){
var f_29918 = cljs.core._nth.call(null,chunk__29903_29915,i__29905_29917);
cljs.core.println.call(null,"  ",f_29918);

var G__29919 = seq__29902_29914;
var G__29920 = chunk__29903_29915;
var G__29921 = count__29904_29916;
var G__29922 = (i__29905_29917 + (1));
seq__29902_29914 = G__29919;
chunk__29903_29915 = G__29920;
count__29904_29916 = G__29921;
i__29905_29917 = G__29922;
continue;
} else {
var temp__4126__auto___29923 = cljs.core.seq.call(null,seq__29902_29914);
if(temp__4126__auto___29923){
var seq__29902_29924__$1 = temp__4126__auto___29923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29902_29924__$1)){
var c__18906__auto___29925 = cljs.core.chunk_first.call(null,seq__29902_29924__$1);
var G__29926 = cljs.core.chunk_rest.call(null,seq__29902_29924__$1);
var G__29927 = c__18906__auto___29925;
var G__29928 = cljs.core.count.call(null,c__18906__auto___29925);
var G__29929 = (0);
seq__29902_29914 = G__29926;
chunk__29903_29915 = G__29927;
count__29904_29916 = G__29928;
i__29905_29917 = G__29929;
continue;
} else {
var f_29930 = cljs.core.first.call(null,seq__29902_29924__$1);
cljs.core.println.call(null,"  ",f_29930);

var G__29931 = cljs.core.next.call(null,seq__29902_29924__$1);
var G__29932 = null;
var G__29933 = (0);
var G__29934 = (0);
seq__29902_29914 = G__29931;
chunk__29903_29915 = G__29932;
count__29904_29916 = G__29933;
i__29905_29917 = G__29934;
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
var seq__29906 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29907 = null;
var count__29908 = (0);
var i__29909 = (0);
while(true){
if((i__29909 < count__29908)){
var vec__29910 = cljs.core._nth.call(null,chunk__29907,i__29909);
var name = cljs.core.nth.call(null,vec__29910,(0),null);
var map__29911 = cljs.core.nth.call(null,vec__29910,(1),null);
var map__29911__$1 = ((cljs.core.seq_QMARK_.call(null,map__29911))?cljs.core.apply.call(null,cljs.core.hash_map,map__29911):map__29911);
var arglists = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29935 = seq__29906;
var G__29936 = chunk__29907;
var G__29937 = count__29908;
var G__29938 = (i__29909 + (1));
seq__29906 = G__29935;
chunk__29907 = G__29936;
count__29908 = G__29937;
i__29909 = G__29938;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29906);
if(temp__4126__auto__){
var seq__29906__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29906__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__29906__$1);
var G__29939 = cljs.core.chunk_rest.call(null,seq__29906__$1);
var G__29940 = c__18906__auto__;
var G__29941 = cljs.core.count.call(null,c__18906__auto__);
var G__29942 = (0);
seq__29906 = G__29939;
chunk__29907 = G__29940;
count__29908 = G__29941;
i__29909 = G__29942;
continue;
} else {
var vec__29912 = cljs.core.first.call(null,seq__29906__$1);
var name = cljs.core.nth.call(null,vec__29912,(0),null);
var map__29913 = cljs.core.nth.call(null,vec__29912,(1),null);
var map__29913__$1 = ((cljs.core.seq_QMARK_.call(null,map__29913))?cljs.core.apply.call(null,cljs.core.hash_map,map__29913):map__29913);
var arglists = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29943 = cljs.core.next.call(null,seq__29906__$1);
var G__29944 = null;
var G__29945 = (0);
var G__29946 = (0);
seq__29906 = G__29943;
chunk__29907 = G__29944;
count__29908 = G__29945;
i__29909 = G__29946;
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

//# sourceMappingURL=repl.js.map?rel=1437351693950