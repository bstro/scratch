// Compiled by ClojureScript 0.0-3211 {}
goog.provide('matchbox.core');
goog.require('cljs.core');
goog.require('cljsjs.firebase');
goog.require('clojure.walk');
goog.require('matchbox.registry');
goog.require('matchbox.utils');
goog.require('clojure.string');
matchbox.core.child_events = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-added","child-added",117696479),new cljs.core.Keyword(null,"child-changed","child-changed",-1341750948),new cljs.core.Keyword(null,"child-moved","child-moved",-1952562040),new cljs.core.Keyword(null,"child-removed","child-removed",-739888431)], null);
matchbox.core.all_events = cljs.core.conj.call(null,matchbox.core.child_events,new cljs.core.Keyword(null,"value","value",305978217));
matchbox.core.SERVER_TIMESTAMP = Firebase.ServerValue.TIMESTAMP;
matchbox.core.keywords__GT_strings = (function matchbox$core$keywords__GT_strings(x){
if((x instanceof cljs.core.Keyword)){
return [cljs.core.str(x)].join('');
} else {
return x;
}
});
matchbox.core.hydrate_keywords = (function matchbox$core$hydrate_keywords(x){
if((typeof x === 'string') && (cljs.core._EQ_.call(null,":",cljs.core.first.call(null,x)))){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,x)));
} else {
return x;
}
});
matchbox.core.hydrate = (function matchbox$core$hydrate(v){
return clojure.walk.postwalk.call(null,matchbox.core.hydrate_keywords,cljs.core.js__GT_clj.call(null,v,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
matchbox.core.serialize = (function matchbox$core$serialize(v){
return cljs.core.clj__GT_js.call(null,clojure.walk.postwalk.call(null,matchbox.core.keywords__GT_strings,clojure.walk.stringify_keys.call(null,v)));
});
/**
 * Last segment in reference or snapshot path
 */
matchbox.core.key = (function matchbox$core$key(ref){
return ref.key();
});
/**
 * Data stored within snapshot
 */
matchbox.core.value = (function matchbox$core$value(snapshot){
return matchbox.core.hydrate.call(null,snapshot.val());
});
matchbox.core.wrap_snapshot = (function matchbox$core$wrap_snapshot(snapshot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchbox.core.key.call(null,snapshot),matchbox.core.value.call(null,snapshot)], null);
});
/**
 * Obtain child reference from base by following korks
 */
matchbox.core.get_in = (function matchbox$core$get_in(ref,korks){
var path = matchbox.utils.korks__GT_path.call(null,korks);
if(cljs.core.not.call(null,cljs.core.seq.call(null,path))){
return ref;
} else {
return ref.child(path);
}
});
/**
 * Create a reference for firebase
 */
matchbox.core.connect = (function matchbox$core$connect(){
var G__28695 = arguments.length;
switch (G__28695) {
case 1:
return matchbox.core.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return matchbox.core.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

matchbox.core.connect.cljs$core$IFn$_invoke$arity$1 = (function (url){
return (new Firebase(url));
});

matchbox.core.connect.cljs$core$IFn$_invoke$arity$2 = (function (url,korks){
return matchbox.core.get_in.call(null,matchbox.core.connect.call(null,url),korks);
});

matchbox.core.connect.cljs$lang$maxFixedArity = 2;
/**
 * Immediate ancestor of reference, if any
 */
matchbox.core.parent = (function matchbox$core$parent(ref){
var and__18109__auto__ = ref;
if(cljs.core.truth_(and__18109__auto__)){
return ref.parent();
} else {
return and__18109__auto__;
}
});
/**
 * Probably don't need this. Or maybe we want more zipper nav (siblings, in-order, etc)
 */
matchbox.core.parents = (function matchbox$core$parents(ref){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,matchbox.core.parent,matchbox.core.parent.call(null,ref)));
});
matchbox.core.deref = (function matchbox$core$deref(ref,cb){
return ref.once("value",cljs.core.comp.call(null,cb,matchbox.core.value));
});
matchbox.core.deref_list = (function matchbox$core$deref_list(ref,cb){
return ref.once("value",cljs.core.comp.call(null,cb,(function (p1__28697_SHARP_){
return p1__28697_SHARP_.getChildren();
})));
});
matchbox.core.reset_BANG_ = (function matchbox$core$reset_BANG_(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matchbox.core.reset_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

matchbox.core.reset_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,val,p__28701){
var vec__28702 = p__28701;
var cb = cljs.core.nth.call(null,vec__28702,(0),null);
return ref.set(matchbox.core.serialize.call(null,val),(function (){var or__18121__auto__ = cb;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.reset_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.reset_BANG_.cljs$lang$applyTo = (function (seq28698){
var G__28699 = cljs.core.first.call(null,seq28698);
var seq28698__$1 = cljs.core.next.call(null,seq28698);
var G__28700 = cljs.core.first.call(null,seq28698__$1);
var seq28698__$2 = cljs.core.next.call(null,seq28698__$1);
return matchbox.core.reset_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28699,G__28700,seq28698__$2);
});
matchbox.core.reset_with_priority_BANG_ = (function matchbox$core$reset_with_priority_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return matchbox.core.reset_with_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

matchbox.core.reset_with_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,val,priority,p__28707){
var vec__28708 = p__28707;
var cb = cljs.core.nth.call(null,vec__28708,(0),null);
return ref.setWithPriority(matchbox.core.serialize.call(null,val),priority,(function (){var or__18121__auto__ = cb;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.reset_with_priority_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.reset_with_priority_BANG_.cljs$lang$applyTo = (function (seq28703){
var G__28704 = cljs.core.first.call(null,seq28703);
var seq28703__$1 = cljs.core.next.call(null,seq28703);
var G__28705 = cljs.core.first.call(null,seq28703__$1);
var seq28703__$2 = cljs.core.next.call(null,seq28703__$1);
var G__28706 = cljs.core.first.call(null,seq28703__$2);
var seq28703__$3 = cljs.core.next.call(null,seq28703__$2);
return matchbox.core.reset_with_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28704,G__28705,G__28706,seq28703__$3);
});
matchbox.core.merge_BANG_ = (function matchbox$core$merge_BANG_(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matchbox.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

matchbox.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,val,p__28712){
var vec__28713 = p__28712;
var cb = cljs.core.nth.call(null,vec__28713,(0),null);
return ref.update(matchbox.core.serialize.call(null,val),(function (){var or__18121__auto__ = cb;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.merge_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.merge_BANG_.cljs$lang$applyTo = (function (seq28709){
var G__28710 = cljs.core.first.call(null,seq28709);
var seq28709__$1 = cljs.core.next.call(null,seq28709);
var G__28711 = cljs.core.first.call(null,seq28709__$1);
var seq28709__$2 = cljs.core.next.call(null,seq28709__$1);
return matchbox.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28710,G__28711,seq28709__$2);
});
matchbox.core.conj_BANG_ = (function matchbox$core$conj_BANG_(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matchbox.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

matchbox.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,val,p__28717){
var vec__28718 = p__28717;
var cb = cljs.core.nth.call(null,vec__28718,(0),null);
return ref.push(matchbox.core.serialize.call(null,val),(function (){var or__18121__auto__ = cb;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.conj_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.conj_BANG_.cljs$lang$applyTo = (function (seq28714){
var G__28715 = cljs.core.first.call(null,seq28714);
var seq28714__$1 = cljs.core.next.call(null,seq28714);
var G__28716 = cljs.core.first.call(null,seq28714__$1);
var seq28714__$2 = cljs.core.next.call(null,seq28714__$1);
return matchbox.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28715,G__28716,seq28714__$2);
});
/**
 * Update value atomically, with local optimistic writes
 */
matchbox.core.swap_BANG_ = (function matchbox$core$swap_BANG_(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matchbox.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

matchbox.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
var vec__28723 = matchbox.utils.extract_cb.call(null,args);
var cb = cljs.core.nth.call(null,vec__28723,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__28723,(1),null);
var f_SINGLEQUOTE_ = ((function (vec__28723,cb,args__$1){
return (function (p1__28719_SHARP_){
return matchbox.core.serialize.call(null,((function (vec__28723,cb,args__$1){
return (function (x){
return cljs.core.apply.call(null,f,x,args__$1);
});})(vec__28723,cb,args__$1))
.call(null,matchbox.core.hydrate.call(null,p1__28719_SHARP_)));
});})(vec__28723,cb,args__$1))
;
return ref.transaction(f_SINGLEQUOTE_,(function (){var or__18121__auto__ = cb;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.swap_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.swap_BANG_.cljs$lang$applyTo = (function (seq28720){
var G__28721 = cljs.core.first.call(null,seq28720);
var seq28720__$1 = cljs.core.next.call(null,seq28720);
var G__28722 = cljs.core.first.call(null,seq28720__$1);
var seq28720__$2 = cljs.core.next.call(null,seq28720__$1);
return matchbox.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28721,G__28722,seq28720__$2);
});
matchbox.core.dissoc_BANG_ = (function matchbox$core$dissoc_BANG_(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matchbox.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

matchbox.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,p__28726){
var vec__28727 = p__28726;
var cb = cljs.core.nth.call(null,vec__28727,(0),null);
return ref.remove((function (){var or__18121__auto__ = cb;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.dissoc_BANG_.cljs$lang$maxFixedArity = (1);

matchbox.core.dissoc_BANG_.cljs$lang$applyTo = (function (seq28724){
var G__28725 = cljs.core.first.call(null,seq28724);
var seq28724__$1 = cljs.core.next.call(null,seq28724);
return matchbox.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28725,seq28724__$1);
});
matchbox.core.remove_BANG_ = matchbox.core.dissoc_BANG_;
matchbox.core.set_priority_BANG_ = (function matchbox$core$set_priority_BANG_(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matchbox.core.set_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

matchbox.core.set_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,priority,p__28731){
var vec__28732 = p__28731;
var cb = cljs.core.nth.call(null,vec__28732,(0),null);
return ref.setPriority(priority,(function (){var or__18121__auto__ = cb;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.set_priority_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.set_priority_BANG_.cljs$lang$applyTo = (function (seq28728){
var G__28729 = cljs.core.first.call(null,seq28728);
var seq28728__$1 = cljs.core.next.call(null,seq28728);
var G__28730 = cljs.core.first.call(null,seq28728__$1);
var seq28728__$2 = cljs.core.next.call(null,seq28728__$1);
return matchbox.core.set_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28729,G__28730,seq28728__$2);
});
matchbox.core.order_by_priority = (function matchbox$core$order_by_priority(ref){
return ref.orderByPriority();
});
matchbox.core.order_by_key = (function matchbox$core$order_by_key(ref){
return ref.orderByKey();
});
matchbox.core.order_by_value = (function matchbox$core$order_by_value(ref){
return ref.orderByValue();
});
matchbox.core.order_by_child = (function matchbox$core$order_by_child(ref,key){
return ref.orderByChild(cljs.core.name.call(null,key));
});
/**
 * Limit query to start at `value` (inclusive). By default `value` is compared against
 * priorities, but reacts to the `order-by-*` scope. This also affects what types
 * `value can take on.
 * 
 * `key` is the child key to start at, and is supported only when ordering by priority.
 */
matchbox.core.start_at = (function matchbox$core$start_at(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matchbox.core.start_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

matchbox.core.start_at.cljs$core$IFn$_invoke$arity$variadic = (function (ref,value,p__28736){
var vec__28737 = p__28736;
var key = cljs.core.nth.call(null,vec__28737,(0),null);
var value__$1 = ((typeof value === 'number')?value:value);
if(cljs.core.truth_(key)){
return ref.startAt(value__$1,cljs.core.name.call(null,key));
} else {
return ref.startAt(value__$1);
}
});

matchbox.core.start_at.cljs$lang$maxFixedArity = (2);

matchbox.core.start_at.cljs$lang$applyTo = (function (seq28733){
var G__28734 = cljs.core.first.call(null,seq28733);
var seq28733__$1 = cljs.core.next.call(null,seq28733);
var G__28735 = cljs.core.first.call(null,seq28733__$1);
var seq28733__$2 = cljs.core.next.call(null,seq28733__$1);
return matchbox.core.start_at.cljs$core$IFn$_invoke$arity$variadic(G__28734,G__28735,seq28733__$2);
});
/**
 * Limit query to end at `value` (inclusive). By default `value` is compared against
 * priorities, but reacts to the `order-by-*` scope. This also affects what types
 * `value can take on.
 * 
 * `key` is the child key to end at, and is supported only when ordering by priority.
 */
matchbox.core.end_at = (function matchbox$core$end_at(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matchbox.core.end_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

matchbox.core.end_at.cljs$core$IFn$_invoke$arity$variadic = (function (ref,value,p__28741){
var vec__28742 = p__28741;
var key = cljs.core.nth.call(null,vec__28742,(0),null);
var value__$1 = ((typeof value === 'number')?value:value);
if(cljs.core.truth_(key)){
return ref.endAt(value__$1,cljs.core.name.call(null,key));
} else {
return ref.endAt(value__$1);
}
});

matchbox.core.end_at.cljs$lang$maxFixedArity = (2);

matchbox.core.end_at.cljs$lang$applyTo = (function (seq28738){
var G__28739 = cljs.core.first.call(null,seq28738);
var seq28738__$1 = cljs.core.next.call(null,seq28738);
var G__28740 = cljs.core.first.call(null,seq28738__$1);
var seq28738__$2 = cljs.core.next.call(null,seq28738__$1);
return matchbox.core.end_at.cljs$core$IFn$_invoke$arity$variadic(G__28739,G__28740,seq28738__$2);
});
/**
 * Limit query to `value` (inclusive). By default `value` is compared against
 * priorities, but reacts to the `order-by-*` scope. This also affects what types
 * `value can take on.
 * 
 * `key` is the child key to end at, and is supported only when ordering by priority.
 */
matchbox.core.equal_to = (function matchbox$core$equal_to(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matchbox.core.equal_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

matchbox.core.equal_to.cljs$core$IFn$_invoke$arity$variadic = (function (ref,value,p__28746){
var vec__28747 = p__28746;
var key = cljs.core.nth.call(null,vec__28747,(0),null);
var value__$1 = ((typeof value === 'number')?value:value);
if(cljs.core.truth_(key)){
return ref.equalTo(value__$1,cljs.core.name.call(null,key));
} else {
return ref.equalTo(value__$1);
}
});

matchbox.core.equal_to.cljs$lang$maxFixedArity = (2);

matchbox.core.equal_to.cljs$lang$applyTo = (function (seq28743){
var G__28744 = cljs.core.first.call(null,seq28743);
var seq28743__$1 = cljs.core.next.call(null,seq28743);
var G__28745 = cljs.core.first.call(null,seq28743__$1);
var seq28743__$2 = cljs.core.next.call(null,seq28743__$1);
return matchbox.core.equal_to.cljs$core$IFn$_invoke$arity$variadic(G__28744,G__28745,seq28743__$2);
});
/**
 * Limit scope to the first `limit` items
 */
matchbox.core.take = (function matchbox$core$take(ref,limit){
return ref.limitToFirst(limit);
});
/**
 * Limit scope to the last `limit` items
 */
matchbox.core.take_last = (function matchbox$core$take_last(ref,limit){
return ref.limitToLast(limit);
});
if(typeof matchbox.core.connected !== 'undefined'){
} else {
matchbox.core.connected = cljs.core.atom.call(null,true);
}
matchbox.core.disconnect_BANG_ = (function matchbox$core$disconnect_BANG_(){
Firebase.goOffline();

return cljs.core.reset_BANG_.call(null,matchbox.core.connected,false);
});
matchbox.core.reconnect_BANG_ = (function matchbox$core$reconnect_BANG_(){
Firebase.goOnline();

return cljs.core.reset_BANG_.call(null,matchbox.core.connected,true);
});
/**
 * Returns boolean around whether client is set to synchronise with server.
 * Says nothing about actual connectivity.
 */
matchbox.core.connected_QMARK_ = (function matchbox$core$connected_QMARK_(){
return cljs.core.deref.call(null,matchbox.core.connected);
});
/**
 * Return an on
 */
matchbox.core.on_disconnect = (function matchbox$core$on_disconnect(ref){
return ref.onDisconnect();
});
matchbox.core.cancel = (function matchbox$core$cancel(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matchbox.core.cancel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

matchbox.core.cancel.cljs$core$IFn$_invoke$arity$variadic = (function (ref_disconnect,p__28750){
var vec__28751 = p__28750;
var cb = cljs.core.nth.call(null,vec__28751,(0),null);
return ref_disconnect.cancel((function (){var or__18121__auto__ = cb;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.cancel.cljs$lang$maxFixedArity = (1);

matchbox.core.cancel.cljs$lang$applyTo = (function (seq28748){
var G__28749 = cljs.core.first.call(null,seq28748);
var seq28748__$1 = cljs.core.next.call(null,seq28748);
return matchbox.core.cancel.cljs$core$IFn$_invoke$arity$variadic(G__28749,seq28748__$1);
});
matchbox.core.build_opts = (function matchbox$core$build_opts(session_only_QMARK_){
if(cljs.core.truth_(session_only_QMARK_)){
return {"remember": "sessionOnly"};
} else {
return matchbox.core.undefined;
}
});
/**
 * Coerce java.util.HashMap and friends to keywordized maps
 */
matchbox.core.ensure_kw_map = (function matchbox$core$ensure_kw_map(data){
return clojure.walk.keywordize_keys.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,data));
});
matchbox.core.auth_data__GT_map = (function matchbox$core$auth_data__GT_map(auth_data){
return matchbox.core.hydrate.call(null,auth_data);
});
matchbox.core.wrap_auth_cb = (function matchbox$core$wrap_auth_cb(cb){
if(cljs.core.truth_(cb)){
return (function (err,info){
return cb.call(null,err,matchbox.core.hydrate.call(null,info));
});
} else {
return matchbox.core.undefined;
}
});
matchbox.core.auth = (function matchbox$core$auth(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return matchbox.core.auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

matchbox.core.auth.cljs$core$IFn$_invoke$arity$variadic = (function (ref,email,password,p__28756){
var vec__28757 = p__28756;
var cb = cljs.core.nth.call(null,vec__28757,(0),null);
var session_only_QMARK_ = cljs.core.nth.call(null,vec__28757,(1),null);
return ref.authWithPassword({"password": password, "email": email},matchbox.core.wrap_auth_cb.call(null,cb),matchbox.core.build_opts.call(null,session_only_QMARK_));
});

matchbox.core.auth.cljs$lang$maxFixedArity = (3);

matchbox.core.auth.cljs$lang$applyTo = (function (seq28752){
var G__28753 = cljs.core.first.call(null,seq28752);
var seq28752__$1 = cljs.core.next.call(null,seq28752);
var G__28754 = cljs.core.first.call(null,seq28752__$1);
var seq28752__$2 = cljs.core.next.call(null,seq28752__$1);
var G__28755 = cljs.core.first.call(null,seq28752__$2);
var seq28752__$3 = cljs.core.next.call(null,seq28752__$2);
return matchbox.core.auth.cljs$core$IFn$_invoke$arity$variadic(G__28753,G__28754,G__28755,seq28752__$3);
});
matchbox.core.auth_anon = (function matchbox$core$auth_anon(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matchbox.core.auth_anon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

matchbox.core.auth_anon.cljs$core$IFn$_invoke$arity$variadic = (function (ref,p__28760){
var vec__28761 = p__28760;
var cb = cljs.core.nth.call(null,vec__28761,(0),null);
var session_only_QMARK_ = cljs.core.nth.call(null,vec__28761,(1),null);
return ref.authAnonymously(matchbox.core.wrap_auth_cb.call(null,cb),matchbox.core.build_opts.call(null,session_only_QMARK_));
});

matchbox.core.auth_anon.cljs$lang$maxFixedArity = (1);

matchbox.core.auth_anon.cljs$lang$applyTo = (function (seq28758){
var G__28759 = cljs.core.first.call(null,seq28758);
var seq28758__$1 = cljs.core.next.call(null,seq28758);
return matchbox.core.auth_anon.cljs$core$IFn$_invoke$arity$variadic(G__28759,seq28758__$1);
});
/**
 * Returns a map of uid, provider, token, expires - or nil if there is no session
 */
matchbox.core.auth_info = (function matchbox$core$auth_info(ref){
return matchbox.core.auth_data__GT_map.call(null,ref.getAuth());
});
matchbox.core.unauth = (function matchbox$core$unauth(ref){
return ref.unauth();
});
matchbox.core.deref_in = (function matchbox$core$deref_in(ref,korks,cb){
return matchbox.core.deref.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});
matchbox.core.deref_list_in = (function matchbox$core$deref_list_in(ref,korks,cb){
return matchbox.core.deref_list.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});
matchbox.core.reset_in_BANG_ = (function matchbox$core$reset_in_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return matchbox.core.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

matchbox.core.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,val,p__28766){
var vec__28767 = p__28766;
var cb = cljs.core.nth.call(null,vec__28767,(0),null);
return matchbox.core.reset_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),val,cb);
});

matchbox.core.reset_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.reset_in_BANG_.cljs$lang$applyTo = (function (seq28762){
var G__28763 = cljs.core.first.call(null,seq28762);
var seq28762__$1 = cljs.core.next.call(null,seq28762);
var G__28764 = cljs.core.first.call(null,seq28762__$1);
var seq28762__$2 = cljs.core.next.call(null,seq28762__$1);
var G__28765 = cljs.core.first.call(null,seq28762__$2);
var seq28762__$3 = cljs.core.next.call(null,seq28762__$2);
return matchbox.core.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28763,G__28764,G__28765,seq28762__$3);
});
matchbox.core.reset_with_priority_in_BANG_ = (function matchbox$core$reset_with_priority_in_BANG_(){
var argseq__19161__auto__ = ((((4) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(4)),(0))):null);
return matchbox.core.reset_with_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19161__auto__);
});

matchbox.core.reset_with_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,val,priority,p__28773){
var vec__28774 = p__28773;
var cb = cljs.core.nth.call(null,vec__28774,(0),null);
return matchbox.core.reset_with_priority_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),val,priority,cb);
});

matchbox.core.reset_with_priority_in_BANG_.cljs$lang$maxFixedArity = (4);

matchbox.core.reset_with_priority_in_BANG_.cljs$lang$applyTo = (function (seq28768){
var G__28769 = cljs.core.first.call(null,seq28768);
var seq28768__$1 = cljs.core.next.call(null,seq28768);
var G__28770 = cljs.core.first.call(null,seq28768__$1);
var seq28768__$2 = cljs.core.next.call(null,seq28768__$1);
var G__28771 = cljs.core.first.call(null,seq28768__$2);
var seq28768__$3 = cljs.core.next.call(null,seq28768__$2);
var G__28772 = cljs.core.first.call(null,seq28768__$3);
var seq28768__$4 = cljs.core.next.call(null,seq28768__$3);
return matchbox.core.reset_with_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28769,G__28770,G__28771,G__28772,seq28768__$4);
});
matchbox.core.merge_in_BANG_ = (function matchbox$core$merge_in_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return matchbox.core.merge_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

matchbox.core.merge_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,val,p__28779){
var vec__28780 = p__28779;
var cb = cljs.core.nth.call(null,vec__28780,(0),null);
return matchbox.core.merge_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),val,cb);
});

matchbox.core.merge_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.merge_in_BANG_.cljs$lang$applyTo = (function (seq28775){
var G__28776 = cljs.core.first.call(null,seq28775);
var seq28775__$1 = cljs.core.next.call(null,seq28775);
var G__28777 = cljs.core.first.call(null,seq28775__$1);
var seq28775__$2 = cljs.core.next.call(null,seq28775__$1);
var G__28778 = cljs.core.first.call(null,seq28775__$2);
var seq28775__$3 = cljs.core.next.call(null,seq28775__$2);
return matchbox.core.merge_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28776,G__28777,G__28778,seq28775__$3);
});
matchbox.core.conj_in_BANG_ = (function matchbox$core$conj_in_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return matchbox.core.conj_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

matchbox.core.conj_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,val,p__28785){
var vec__28786 = p__28785;
var cb = cljs.core.nth.call(null,vec__28786,(0),null);
return matchbox.core.conj_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),val,cb);
});

matchbox.core.conj_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.conj_in_BANG_.cljs$lang$applyTo = (function (seq28781){
var G__28782 = cljs.core.first.call(null,seq28781);
var seq28781__$1 = cljs.core.next.call(null,seq28781);
var G__28783 = cljs.core.first.call(null,seq28781__$1);
var seq28781__$2 = cljs.core.next.call(null,seq28781__$1);
var G__28784 = cljs.core.first.call(null,seq28781__$2);
var seq28781__$3 = cljs.core.next.call(null,seq28781__$2);
return matchbox.core.conj_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28782,G__28783,G__28784,seq28781__$3);
});
matchbox.core.swap_in_BANG_ = (function matchbox$core$swap_in_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return matchbox.core.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

matchbox.core.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,f,args){
return cljs.core.apply.call(null,matchbox.core.swap_BANG_,matchbox.core.get_in.call(null,ref,korks),f,args);
});

matchbox.core.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.swap_in_BANG_.cljs$lang$applyTo = (function (seq28787){
var G__28788 = cljs.core.first.call(null,seq28787);
var seq28787__$1 = cljs.core.next.call(null,seq28787);
var G__28789 = cljs.core.first.call(null,seq28787__$1);
var seq28787__$2 = cljs.core.next.call(null,seq28787__$1);
var G__28790 = cljs.core.first.call(null,seq28787__$2);
var seq28787__$3 = cljs.core.next.call(null,seq28787__$2);
return matchbox.core.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28788,G__28789,G__28790,seq28787__$3);
});
matchbox.core.dissoc_in_BANG_ = (function matchbox$core$dissoc_in_BANG_(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matchbox.core.dissoc_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

matchbox.core.dissoc_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,p__28794){
var vec__28795 = p__28794;
var cb = cljs.core.nth.call(null,vec__28795,(0),null);
return matchbox.core.dissoc_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});

matchbox.core.dissoc_in_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.dissoc_in_BANG_.cljs$lang$applyTo = (function (seq28791){
var G__28792 = cljs.core.first.call(null,seq28791);
var seq28791__$1 = cljs.core.next.call(null,seq28791);
var G__28793 = cljs.core.first.call(null,seq28791__$1);
var seq28791__$2 = cljs.core.next.call(null,seq28791__$1);
return matchbox.core.dissoc_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28792,G__28793,seq28791__$2);
});
matchbox.core.remove_in_BANG_ = matchbox.core.dissoc_in_BANG_;
matchbox.core.set_priority_in_BANG_ = (function matchbox$core$set_priority_in_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return matchbox.core.set_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

matchbox.core.set_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,priority,p__28800){
var vec__28801 = p__28800;
var cb = cljs.core.nth.call(null,vec__28801,(0),null);
return matchbox.core.set_priority_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),priority,cb);
});

matchbox.core.set_priority_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.set_priority_in_BANG_.cljs$lang$applyTo = (function (seq28796){
var G__28797 = cljs.core.first.call(null,seq28796);
var seq28796__$1 = cljs.core.next.call(null,seq28796);
var G__28798 = cljs.core.first.call(null,seq28796__$1);
var seq28796__$2 = cljs.core.next.call(null,seq28796__$1);
var G__28799 = cljs.core.first.call(null,seq28796__$2);
var seq28796__$3 = cljs.core.next.call(null,seq28796__$2);
return matchbox.core.set_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28797,G__28798,G__28799,seq28796__$3);
});
matchbox.core.__listen_to = (function matchbox$core$__listen_to(ref,type,cb,render_fn){
var type__$1 = matchbox.utils.kebab__GT_underscore.call(null,type);
var listener = cljs.core.comp.call(null,cb,render_fn);
ref.on(type__$1,listener);

return ((function (listener,type__$1){
return (function (){
return ref.off(type__$1,listener);
});
;})(listener,type__$1))
});
matchbox.core._listen_to = (function matchbox$core$_listen_to(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return matchbox.core._listen_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

matchbox.core._listen_to.cljs$core$IFn$_invoke$arity$variadic = (function (ref,type,cb,p__28806){
var vec__28807 = p__28806;
var render_fn = cljs.core.nth.call(null,vec__28807,(0),null);
var render_fn__$1 = (function (){var or__18121__auto__ = render_fn;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return matchbox.core.wrap_snapshot;
}
})();
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([type], true),matchbox.core.all_events))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown type: "),cljs.core.str(type)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"type","type",-1480165421,null),null], null), null),new cljs.core.Symbol(null,"all-events","all-events",804885970,null))))].join('')));
}

var unsub_BANG_ = matchbox.core.__listen_to.call(null,ref,type,cb,render_fn__$1);
matchbox.registry.register_listener.call(null,ref,type,unsub_BANG_);

return unsub_BANG_;
});

matchbox.core._listen_to.cljs$lang$maxFixedArity = (3);

matchbox.core._listen_to.cljs$lang$applyTo = (function (seq28802){
var G__28803 = cljs.core.first.call(null,seq28802);
var seq28802__$1 = cljs.core.next.call(null,seq28802);
var G__28804 = cljs.core.first.call(null,seq28802__$1);
var seq28802__$2 = cljs.core.next.call(null,seq28802__$1);
var G__28805 = cljs.core.first.call(null,seq28802__$2);
var seq28802__$3 = cljs.core.next.call(null,seq28802__$2);
return matchbox.core._listen_to.cljs$core$IFn$_invoke$arity$variadic(G__28803,G__28804,G__28805,seq28802__$3);
});
matchbox.core._listen_children = (function matchbox$core$_listen_children(ref,cb){
var cbs = cljs.core.map.call(null,(function (p1__28809_SHARP_){
return cljs.core.comp.call(null,cb,p1__28809_SHARP_);
}),cljs.core.map.call(null,(function (type){
return (function (p1__28808_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[type,p1__28808_SHARP_],null));
});
}),matchbox.core.child_events));
var unsubs = cljs.core.doall.call(null,cljs.core.map.call(null,matchbox.core._listen_to,cljs.core.repeat.call(null,ref),matchbox.core.child_events,cbs));
return ((function (cbs,unsubs){
return (function (){
var seq__28814 = cljs.core.seq.call(null,unsubs);
var chunk__28815 = null;
var count__28816 = (0);
var i__28817 = (0);
while(true){
if((i__28817 < count__28816)){
var unsub_BANG_ = cljs.core._nth.call(null,chunk__28815,i__28817);
unsub_BANG_.call(null);

var G__28818 = seq__28814;
var G__28819 = chunk__28815;
var G__28820 = count__28816;
var G__28821 = (i__28817 + (1));
seq__28814 = G__28818;
chunk__28815 = G__28819;
count__28816 = G__28820;
i__28817 = G__28821;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28814);
if(temp__4126__auto__){
var seq__28814__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28814__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__28814__$1);
var G__28822 = cljs.core.chunk_rest.call(null,seq__28814__$1);
var G__28823 = c__18906__auto__;
var G__28824 = cljs.core.count.call(null,c__18906__auto__);
var G__28825 = (0);
seq__28814 = G__28822;
chunk__28815 = G__28823;
count__28816 = G__28824;
i__28817 = G__28825;
continue;
} else {
var unsub_BANG_ = cljs.core.first.call(null,seq__28814__$1);
unsub_BANG_.call(null);

var G__28826 = cljs.core.next.call(null,seq__28814__$1);
var G__28827 = null;
var G__28828 = (0);
var G__28829 = (0);
seq__28814 = G__28826;
chunk__28815 = G__28827;
count__28816 = G__28828;
i__28817 = G__28829;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(cbs,unsubs))
});
/**
 * Subscribe to notifications of given type
 * Callback receives [<key> <value>] as only argument
 * Returns an unsubscribe function
 */
matchbox.core.listen_to = (function matchbox$core$listen_to(){
var G__28831 = arguments.length;
switch (G__28831) {
case 3:
return matchbox.core.listen_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return matchbox.core.listen_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

matchbox.core.listen_to.cljs$core$IFn$_invoke$arity$3 = (function (ref,type,cb){
return matchbox.core._listen_to.call(null,ref,type,cb);
});

matchbox.core.listen_to.cljs$core$IFn$_invoke$arity$4 = (function (ref,korks,type,cb){
return matchbox.core._listen_to.call(null,matchbox.core.get_in.call(null,ref,korks),type,cb);
});

matchbox.core.listen_to.cljs$lang$maxFixedArity = 4;
/**
 * Subscribe to updates containing full vector or children
 */
matchbox.core.listen_list = (function matchbox$core$listen_list(){
var G__28834 = arguments.length;
switch (G__28834) {
case 2:
return matchbox.core.listen_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return matchbox.core.listen_list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

matchbox.core.listen_list.cljs$core$IFn$_invoke$arity$2 = (function (ref,cb){
var get_children = (function (ds){
return cljs.core.mapv.call(null,matchbox.core.value,ds.getChildren());
});
return matchbox.core._listen_to.call(null,ref,new cljs.core.Keyword(null,"value","value",305978217),cb,get_children);
});

matchbox.core.listen_list.cljs$core$IFn$_invoke$arity$3 = (function (ref,korks,cb){
return matchbox.core.listen_list.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});

matchbox.core.listen_list.cljs$lang$maxFixedArity = 3;
/**
 * Subscribe to all children notifications on a reference.
 * Callback receives [:event-type [<key> <value>]] as only argument
 * Returns an unsubscribe function
 */
matchbox.core.listen_children = (function matchbox$core$listen_children(){
var G__28837 = arguments.length;
switch (G__28837) {
case 2:
return matchbox.core.listen_children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return matchbox.core.listen_children.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

matchbox.core.listen_children.cljs$core$IFn$_invoke$arity$2 = (function (ref,cb){
return matchbox.core._listen_children.call(null,ref,cb);
});

matchbox.core.listen_children.cljs$core$IFn$_invoke$arity$3 = (function (ref,korks,cb){
return matchbox.core._listen_children.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});

matchbox.core.listen_children.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map?rel=1437351692780