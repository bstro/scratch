// Compiled by ClojureScript 0.0-3211 {}
goog.provide('matchbox.registry');
goog.require('cljs.core');
goog.require('clojure.walk');
if(typeof matchbox.registry.unsubs !== 'undefined'){
} else {
matchbox.registry.unsubs = cljs.core.atom.call(null,null);
}
if(typeof matchbox.registry.unsubs_flat !== 'undefined'){
} else {
matchbox.registry.unsubs_flat = cljs.core.atom.call(null,null);
}
matchbox.registry.register_listener = (function matchbox$registry$register_listener(ref,type,unsub_BANG_){
cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(ref)].join(''),type], null),(function (p1__28841_SHARP_){
return cljs.core.set.call(null,cljs.core.conj.call(null,p1__28841_SHARP_,unsub_BANG_));
}));

return cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs_flat,cljs.core.assoc,unsub_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(ref)].join(''),type], null));
});
matchbox.registry.flatten_vals = (function matchbox$registry$flatten_vals(xs){
if(!(cljs.core.map_QMARK_.call(null,xs))){
return xs;
} else {
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.map.call(null,matchbox$registry$flatten_vals,cljs.core.vals.call(null,xs)));
}
});
matchbox.registry.disable_all_BANG_ = (function matchbox$registry$disable_all_BANG_(fs){
cljs.core.apply.call(null,cljs.core.swap_BANG_,matchbox.registry.unsubs_flat,cljs.core.dissoc,fs);

var seq__28846 = cljs.core.seq.call(null,fs);
var chunk__28847 = null;
var count__28848 = (0);
var i__28849 = (0);
while(true){
if((i__28849 < count__28848)){
var f = cljs.core._nth.call(null,chunk__28847,i__28849);
f.call(null);

var G__28850 = seq__28846;
var G__28851 = chunk__28847;
var G__28852 = count__28848;
var G__28853 = (i__28849 + (1));
seq__28846 = G__28850;
chunk__28847 = G__28851;
count__28848 = G__28852;
i__28849 = G__28853;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28846);
if(temp__4126__auto__){
var seq__28846__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28846__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__28846__$1);
var G__28854 = cljs.core.chunk_rest.call(null,seq__28846__$1);
var G__28855 = c__18906__auto__;
var G__28856 = cljs.core.count.call(null,c__18906__auto__);
var G__28857 = (0);
seq__28846 = G__28854;
chunk__28847 = G__28855;
count__28848 = G__28856;
i__28849 = G__28857;
continue;
} else {
var f = cljs.core.first.call(null,seq__28846__$1);
f.call(null);

var G__28858 = cljs.core.next.call(null,seq__28846__$1);
var G__28859 = null;
var G__28860 = (0);
var G__28861 = (0);
seq__28846 = G__28858;
chunk__28847 = G__28859;
count__28848 = G__28860;
i__28849 = G__28861;
continue;
}
} else {
return null;
}
}
break;
}
});
matchbox.registry._cleanup_BANG_ = (function matchbox$registry$_cleanup_BANG_(data){
return clojure.walk.postwalk.call(null,(function (x){
if(!((cljs.core.coll_QMARK_.call(null,x)) && (cljs.core.empty_QMARK_.call(null,x)))){
if(cljs.core.map_QMARK_.call(null,x)){
var temp__4124__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.second,x));
if(temp__4124__auto__){
var remains = temp__4124__auto__;
return cljs.core.into.call(null,cljs.core.empty.call(null,x),remains);
} else {
return null;
}
} else {
return x;
}
} else {
return null;
}
}),data);
});
/**
 * Remove empty branches in `unsubs`
 */
matchbox.registry.cleanup_BANG_ = (function matchbox$registry$cleanup_BANG_(){
return cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,matchbox.registry._cleanup_BANG_);
});
matchbox.registry.disable_listener_BANG_ = (function matchbox$registry$disable_listener_BANG_(unsub_BANG_){
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,matchbox.registry.unsubs_flat),unsub_BANG_);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__28864 = temp__4126__auto__;
var ref = cljs.core.nth.call(null,vec__28864,(0),null);
var type = cljs.core.nth.call(null,vec__28864,(1),null);
unsub_BANG_.call(null);

cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs_flat,cljs.core.dissoc,unsub_BANG_);

cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,type], null),((function (vec__28864,ref,type,temp__4126__auto__){
return (function (p1__28862_SHARP_){
return cljs.core.disj.call(null,p1__28862_SHARP_,unsub_BANG_);
});})(vec__28864,ref,type,temp__4126__auto__))
);

return matchbox.registry.cleanup_BANG_.call(null);
} else {
return null;
}
});
/**
 * Remove all known listeners within appropriate scope.
 * 
 * By known listeners, we mean listeners that were added with Matchbox.
 * 
 * The scope is determined by the args:
 * 
 * 0-arity: remove all listeners
 * 1-arity: remove all listeners on a given `ref`
 * 2-arity: remove all listeners of `type` on a given `ref`
 * 
 * For removing a single listener, see `disable-listener!`
 */
matchbox.registry.disable_listeners_BANG_ = (function matchbox$registry$disable_listeners_BANG_(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matchbox.registry.disable_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

matchbox.registry.disable_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28867){
var vec__28868 = p__28867;
var ref = cljs.core.nth.call(null,vec__28868,(0),null);
var type = cljs.core.nth.call(null,vec__28868,(1),null);
var path = vec__28868;
var ref__$1 = (cljs.core.truth_(ref)?[cljs.core.str(ref)].join(''):null);
var G__28869_28870 = cljs.core.count.call(null,path);
switch (G__28869_28870) {
case (0):
matchbox.registry.disable_all_BANG_.call(null,matchbox.registry.flatten_vals.call(null,cljs.core.deref.call(null,matchbox.registry.unsubs)));

cljs.core.reset_BANG_.call(null,matchbox.registry.unsubs,cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
matchbox.registry.disable_all_BANG_.call(null,matchbox.registry.flatten_vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,matchbox.registry.unsubs),ref__$1)));

cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,cljs.core.dissoc,ref__$1);

break;
case (2):
matchbox.registry.disable_all_BANG_.call(null,matchbox.registry.flatten_vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,matchbox.registry.unsubs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1,type], null))));

cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1], null),((function (G__28869_28870,ref__$1,vec__28868,ref,type,path){
return (function (p1__28865_SHARP_){
return cljs.core.dissoc.call(null,p1__28865_SHARP_,type);
});})(G__28869_28870,ref__$1,vec__28868,ref,type,path))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count.call(null,path))].join('')));

}

return matchbox.registry.cleanup_BANG_.call(null);
});

matchbox.registry.disable_listeners_BANG_.cljs$lang$maxFixedArity = (0);

matchbox.registry.disable_listeners_BANG_.cljs$lang$applyTo = (function (seq28866){
return matchbox.registry.disable_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28866));
});

//# sourceMappingURL=registry.js.map?rel=1437351692858