// Compiled by ClojureScript 0.0-3211 {}
goog.provide('reframe1.handlers');
goog.require('cljs.core');
goog.require('reframe1.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return reframe1.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__23832){
var vec__23833 = p__23832;
var _ = cljs.core.nth.call(null,vec__23833,(0),null);
var active_panel = cljs.core.nth.call(null,vec__23833,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=handlers.js.map?rel=1436140466751