// Compiled by ClojureScript 0.0-3211 {}
goog.provide('reframe1.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
reframe1.routes.hook_browser_navigation_BANG_ = (function reframe1$routes$hook_browser_navigation_BANG_(){
var G__23817 = (new goog.History());
goog.events.listen(G__23817,goog.history.EventType.NAVIGATE,((function (G__23817){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__23817))
);

G__23817.setEnabled(true);

return G__23817;
});
reframe1.routes.app_routes = (function reframe1$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__23726__auto___23826 = (function (params__23727__auto__){
if(cljs.core.map_QMARK_.call(null,params__23727__auto__)){
var map__23822 = params__23727__auto__;
var map__23822__$1 = ((cljs.core.seq_QMARK_.call(null,map__23822))?cljs.core.apply.call(null,cljs.core.hash_map,map__23822):map__23822);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23727__auto__)){
var vec__23823 = params__23727__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23726__auto___23826);


var action__23726__auto___23827 = (function (params__23727__auto__){
if(cljs.core.map_QMARK_.call(null,params__23727__auto__)){
var map__23824 = params__23727__auto__;
var map__23824__$1 = ((cljs.core.seq_QMARK_.call(null,map__23824))?cljs.core.apply.call(null,cljs.core.hash_map,map__23824):map__23824);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23727__auto__)){
var vec__23825 = params__23727__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__23726__auto___23827);


return reframe1.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1436140466731