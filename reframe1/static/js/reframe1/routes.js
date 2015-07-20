// Compiled by ClojureScript 0.0-3211 {}
goog.provide('reframe1.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
reframe1.routes.hook_browser_navigation_BANG_ = (function reframe1$routes$hook_browser_navigation_BANG_(){
var G__20546 = (new goog.History());
goog.events.listen(G__20546,goog.history.EventType.NAVIGATE,((function (G__20546){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__20546))
);

G__20546.setEnabled(true);

return G__20546;
});
reframe1.routes.app_routes = (function reframe1$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__20510__auto___20555 = (function (params__20511__auto__){
if(cljs.core.map_QMARK_.call(null,params__20511__auto__)){
var map__20551 = params__20511__auto__;
var map__20551__$1 = ((cljs.core.seq_QMARK_.call(null,map__20551))?cljs.core.apply.call(null,cljs.core.hash_map,map__20551):map__20551);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20511__auto__)){
var vec__20552 = params__20511__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__20510__auto___20555);


var action__20510__auto___20556 = (function (params__20511__auto__){
if(cljs.core.map_QMARK_.call(null,params__20511__auto__)){
var map__20553 = params__20511__auto__;
var map__20553__$1 = ((cljs.core.seq_QMARK_.call(null,map__20553))?cljs.core.apply.call(null,cljs.core.hash_map,map__20553):map__20553);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20511__auto__)){
var vec__20554 = params__20511__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__20510__auto___20556);


return reframe1.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1437352808987