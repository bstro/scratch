// Compiled by ClojureScript 0.0-3211 {}
goog.provide('reframe1.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reframe1.views');
goog.require('reframe1.handlers');
goog.require('reframe1.routes');
goog.require('reframe1.subs');
goog.require('re_frame.core');
reframe1.core.mount_root = (function reframe1$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe1.views.main_panel], null),document.getElementById("app"));
});
reframe1.core.init = (function reframe1$core$init(){
reframe1.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return reframe1.core.mount_root.call(null);
});
goog.exportSymbol('reframe1.core.init', reframe1.core.init);

//# sourceMappingURL=core.js.map?rel=1437353311355