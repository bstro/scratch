// Compiled by ClojureScript 0.0-3211 {}
goog.provide('matchbox.utils');
goog.require('cljs.core');
goog.require('clojure.string');
matchbox.utils.kebab__GT_underscore = (function matchbox$utils$kebab__GT_underscore(keyword){
return clojure.string.replace.call(null,cljs.core.name.call(null,keyword),"-","_");
});
matchbox.utils.underscore__GT_kebab = (function matchbox$utils$underscore__GT_kebab(string){
return cljs.core.keyword.call(null,clojure.string.replace.call(null,string,"_","-"));
});
matchbox.utils.korks__GT_path = (function matchbox$utils$korks__GT_path(korks){
if(cljs.core.sequential_QMARK_.call(null,korks)){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,korks));
} else {
if(cljs.core.truth_(korks)){
return cljs.core.name.call(null,korks);
} else {
return null;
}
}
});
matchbox.utils.no_op = (function matchbox$utils$no_op(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matchbox.utils.no_op.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

matchbox.utils.no_op.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
});

matchbox.utils.no_op.cljs$lang$maxFixedArity = (0);

matchbox.utils.no_op.cljs$lang$applyTo = (function (seq28874){
return matchbox.utils.no_op.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28874));
});
matchbox.utils.extract_cb = (function matchbox$utils$extract_cb(args){
if((((2) >= cljs.core.count.call(null,args))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.take_last.call(null,(2),args)),new cljs.core.Keyword(null,"callback","callback",-705136228)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,args),cljs.core.drop_last.call(null,(2),args)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null);
}
});

//# sourceMappingURL=utils.js.map?rel=1437351692880