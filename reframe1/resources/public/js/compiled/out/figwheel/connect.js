// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('reframe1.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21254__delegate = function (x){
if(cljs.core.truth_(reframe1.core.mount_root)){
return cljs.core.apply.call(null,reframe1.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'reframe1.core/mount-root' is missing");
}
};
var G__21254 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21255__i = 0, G__21255__a = new Array(arguments.length -  0);
while (G__21255__i < G__21255__a.length) {G__21255__a[G__21255__i] = arguments[G__21255__i + 0]; ++G__21255__i;}
  x = new cljs.core.IndexedSeq(G__21255__a,0);
} 
return G__21254__delegate.call(this,x);};
G__21254.cljs$lang$maxFixedArity = 0;
G__21254.cljs$lang$applyTo = (function (arglist__21256){
var x = cljs.core.seq(arglist__21256);
return G__21254__delegate(x);
});
G__21254.cljs$core$IFn$_invoke$arity$variadic = G__21254__delegate;
return G__21254;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1436140795289