// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29619_SHARP_,p2__29620_SHARP_){
var and__18109__auto__ = p1__29619_SHARP_;
if(cljs.core.truth_(and__18109__auto__)){
return p2__29620_SHARP_;
} else {
return and__18109__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18121__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18121__auto__){
return or__18121__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18121__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18121__auto__){
return or__18121__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18121__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29621){
var map__29622 = p__29621;
var map__29622__$1 = ((cljs.core.seq_QMARK_.call(null,map__29622))?cljs.core.apply.call(null,cljs.core.hash_map,map__29622):map__29622);
var file = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29623){
var map__29624 = p__29623;
var map__29624__$1 = ((cljs.core.seq_QMARK_.call(null,map__29624))?cljs.core.apply.call(null,cljs.core.hash_map,map__29624):map__29624);
var namespace = cljs.core.get.call(null,map__29624__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29625){if((e29625 instanceof Error)){
var e = e29625;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29625;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29627 = arguments.length;
switch (G__29627) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29629,callback){
var map__29631 = p__29629;
var map__29631__$1 = ((cljs.core.seq_QMARK_.call(null,map__29631))?cljs.core.apply.call(null,cljs.core.hash_map,map__29631):map__29631);
var file_msg = map__29631__$1;
var request_url = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29631,map__29631__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29631,map__29631__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29632){
var map__29634 = p__29632;
var map__29634__$1 = ((cljs.core.seq_QMARK_.call(null,map__29634))?cljs.core.apply.call(null,cljs.core.hash_map,map__29634):map__29634);
var file_msg = map__29634__$1;
var meta_data = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18121__auto__ = meta_data;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18109__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18109__auto__){
var or__18121__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto____$1)){
return or__18121__auto____$1;
} else {
var and__18109__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18109__auto____$1){
var or__18121__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18121__auto____$2){
return or__18121__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18109__auto____$1;
}
}
}
} else {
return and__18109__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29635,callback){
var map__29637 = p__29635;
var map__29637__$1 = ((cljs.core.seq_QMARK_.call(null,map__29637))?cljs.core.apply.call(null,cljs.core.hash_map,map__29637):map__29637);
var file_msg = map__29637__$1;
var namespace = cljs.core.get.call(null,map__29637__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29637__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21345__auto___29724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___29724,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___29724,out){
return (function (state_29706){
var state_val_29707 = (state_29706[(1)]);
if((state_val_29707 === (7))){
var inst_29690 = (state_29706[(7)]);
var inst_29696 = (state_29706[(2)]);
var inst_29697 = cljs.core.async.put_BANG_.call(null,out,inst_29696);
var inst_29686 = inst_29690;
var state_29706__$1 = (function (){var statearr_29708 = state_29706;
(statearr_29708[(8)] = inst_29697);

(statearr_29708[(9)] = inst_29686);

return statearr_29708;
})();
var statearr_29709_29725 = state_29706__$1;
(statearr_29709_29725[(2)] = null);

(statearr_29709_29725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (6))){
var inst_29702 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29710_29726 = state_29706__$1;
(statearr_29710_29726[(2)] = inst_29702);

(statearr_29710_29726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (5))){
var inst_29700 = cljs.core.async.close_BANG_.call(null,out);
var state_29706__$1 = state_29706;
var statearr_29711_29727 = state_29706__$1;
(statearr_29711_29727[(2)] = inst_29700);

(statearr_29711_29727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (4))){
var inst_29689 = (state_29706[(10)]);
var inst_29694 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29689);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29706__$1,(7),inst_29694);
} else {
if((state_val_29707 === (3))){
var inst_29704 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29706__$1,inst_29704);
} else {
if((state_val_29707 === (2))){
var inst_29686 = (state_29706[(9)]);
var inst_29689 = (state_29706[(10)]);
var inst_29689__$1 = cljs.core.nth.call(null,inst_29686,(0),null);
var inst_29690 = cljs.core.nthnext.call(null,inst_29686,(1));
var inst_29691 = (inst_29689__$1 == null);
var inst_29692 = cljs.core.not.call(null,inst_29691);
var state_29706__$1 = (function (){var statearr_29712 = state_29706;
(statearr_29712[(7)] = inst_29690);

(statearr_29712[(10)] = inst_29689__$1);

return statearr_29712;
})();
if(inst_29692){
var statearr_29713_29728 = state_29706__$1;
(statearr_29713_29728[(1)] = (4));

} else {
var statearr_29714_29729 = state_29706__$1;
(statearr_29714_29729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (1))){
var inst_29684 = cljs.core.nth.call(null,files,(0),null);
var inst_29685 = cljs.core.nthnext.call(null,files,(1));
var inst_29686 = files;
var state_29706__$1 = (function (){var statearr_29715 = state_29706;
(statearr_29715[(11)] = inst_29684);

(statearr_29715[(12)] = inst_29685);

(statearr_29715[(9)] = inst_29686);

return statearr_29715;
})();
var statearr_29716_29730 = state_29706__$1;
(statearr_29716_29730[(2)] = null);

(statearr_29716_29730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21345__auto___29724,out))
;
return ((function (switch__21283__auto__,c__21345__auto___29724,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0 = (function (){
var statearr_29720 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29720[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__);

(statearr_29720[(1)] = (1));

return statearr_29720;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1 = (function (state_29706){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29721){if((e29721 instanceof Object)){
var ex__21287__auto__ = e29721;
var statearr_29722_29731 = state_29706;
(statearr_29722_29731[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29732 = state_29706;
state_29706 = G__29732;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__ = function(state_29706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1.call(this,state_29706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___29724,out))
})();
var state__21347__auto__ = (function (){var statearr_29723 = f__21346__auto__.call(null);
(statearr_29723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___29724);

return statearr_29723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___29724,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29733,p__29734){
var map__29737 = p__29733;
var map__29737__$1 = ((cljs.core.seq_QMARK_.call(null,map__29737))?cljs.core.apply.call(null,cljs.core.hash_map,map__29737):map__29737);
var opts = map__29737__$1;
var url_rewriter = cljs.core.get.call(null,map__29737__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29738 = p__29734;
var map__29738__$1 = ((cljs.core.seq_QMARK_.call(null,map__29738))?cljs.core.apply.call(null,cljs.core.hash_map,map__29738):map__29738);
var file_msg = map__29738__$1;
var file = cljs.core.get.call(null,map__29738__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29739){
var map__29742 = p__29739;
var map__29742__$1 = ((cljs.core.seq_QMARK_.call(null,map__29742))?cljs.core.apply.call(null,cljs.core.hash_map,map__29742):map__29742);
var file = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18109__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18109__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18109__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29743){var e = e29743;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29748,p__29749){
var map__29951 = p__29748;
var map__29951__$1 = ((cljs.core.seq_QMARK_.call(null,map__29951))?cljs.core.apply.call(null,cljs.core.hash_map,map__29951):map__29951);
var opts = map__29951__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29951__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29951__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29951__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29952 = p__29749;
var map__29952__$1 = ((cljs.core.seq_QMARK_.call(null,map__29952))?cljs.core.apply.call(null,cljs.core.hash_map,map__29952):map__29952);
var msg = map__29952__$1;
var files = cljs.core.get.call(null,map__29952__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function (state_30077){
var state_val_30078 = (state_30077[(1)]);
if((state_val_30078 === (7))){
var inst_29964 = (state_30077[(7)]);
var inst_29965 = (state_30077[(8)]);
var inst_29966 = (state_30077[(9)]);
var inst_29967 = (state_30077[(10)]);
var inst_29972 = cljs.core._nth.call(null,inst_29965,inst_29967);
var inst_29973 = figwheel.client.file_reloading.eval_body.call(null,inst_29972);
var inst_29974 = (inst_29967 + (1));
var tmp30079 = inst_29964;
var tmp30080 = inst_29965;
var tmp30081 = inst_29966;
var inst_29964__$1 = tmp30079;
var inst_29965__$1 = tmp30080;
var inst_29966__$1 = tmp30081;
var inst_29967__$1 = inst_29974;
var state_30077__$1 = (function (){var statearr_30082 = state_30077;
(statearr_30082[(7)] = inst_29964__$1);

(statearr_30082[(8)] = inst_29965__$1);

(statearr_30082[(9)] = inst_29966__$1);

(statearr_30082[(10)] = inst_29967__$1);

(statearr_30082[(11)] = inst_29973);

return statearr_30082;
})();
var statearr_30083_30152 = state_30077__$1;
(statearr_30083_30152[(2)] = null);

(statearr_30083_30152[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (20))){
var inst_30010 = (state_30077[(12)]);
var inst_30016 = (state_30077[(13)]);
var inst_30014 = (state_30077[(14)]);
var inst_30009 = (state_30077[(15)]);
var inst_30013 = (state_30077[(16)]);
var inst_30019 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30021 = (function (){var files_not_loaded = inst_30016;
var res = inst_30014;
var res_SINGLEQUOTE_ = inst_30013;
var files_SINGLEQUOTE_ = inst_30010;
var all_files = inst_30009;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30010,inst_30016,inst_30014,inst_30009,inst_30013,inst_30019,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function (p__30020){
var map__30084 = p__30020;
var map__30084__$1 = ((cljs.core.seq_QMARK_.call(null,map__30084))?cljs.core.apply.call(null,cljs.core.hash_map,map__30084):map__30084);
var file = cljs.core.get.call(null,map__30084__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__30084__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30010,inst_30016,inst_30014,inst_30009,inst_30013,inst_30019,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
})();
var inst_30022 = cljs.core.map.call(null,inst_30021,inst_30014);
var inst_30023 = cljs.core.pr_str.call(null,inst_30022);
var inst_30024 = figwheel.client.utils.log.call(null,inst_30023);
var inst_30025 = (function (){var files_not_loaded = inst_30016;
var res = inst_30014;
var res_SINGLEQUOTE_ = inst_30013;
var files_SINGLEQUOTE_ = inst_30010;
var all_files = inst_30009;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30010,inst_30016,inst_30014,inst_30009,inst_30013,inst_30019,inst_30021,inst_30022,inst_30023,inst_30024,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30010,inst_30016,inst_30014,inst_30009,inst_30013,inst_30019,inst_30021,inst_30022,inst_30023,inst_30024,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
})();
var inst_30026 = setTimeout(inst_30025,(10));
var state_30077__$1 = (function (){var statearr_30085 = state_30077;
(statearr_30085[(17)] = inst_30024);

(statearr_30085[(18)] = inst_30019);

return statearr_30085;
})();
var statearr_30086_30153 = state_30077__$1;
(statearr_30086_30153[(2)] = inst_30026);

(statearr_30086_30153[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (27))){
var inst_30036 = (state_30077[(19)]);
var state_30077__$1 = state_30077;
var statearr_30087_30154 = state_30077__$1;
(statearr_30087_30154[(2)] = inst_30036);

(statearr_30087_30154[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (1))){
var inst_29956 = (state_30077[(20)]);
var inst_29953 = before_jsload.call(null,files);
var inst_29954 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29955 = (function (){return ((function (inst_29956,inst_29953,inst_29954,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function (p1__29744_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29744_SHARP_);
});
;})(inst_29956,inst_29953,inst_29954,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
})();
var inst_29956__$1 = cljs.core.filter.call(null,inst_29955,files);
var inst_29957 = cljs.core.not_empty.call(null,inst_29956__$1);
var state_30077__$1 = (function (){var statearr_30088 = state_30077;
(statearr_30088[(21)] = inst_29953);

(statearr_30088[(20)] = inst_29956__$1);

(statearr_30088[(22)] = inst_29954);

return statearr_30088;
})();
if(cljs.core.truth_(inst_29957)){
var statearr_30089_30155 = state_30077__$1;
(statearr_30089_30155[(1)] = (2));

} else {
var statearr_30090_30156 = state_30077__$1;
(statearr_30090_30156[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (24))){
var state_30077__$1 = state_30077;
var statearr_30091_30157 = state_30077__$1;
(statearr_30091_30157[(2)] = null);

(statearr_30091_30157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (4))){
var inst_30001 = (state_30077[(2)]);
var inst_30002 = (function (){return ((function (inst_30001,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function (p1__29745_SHARP_){
var and__18109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29745_SHARP_);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29745_SHARP_));
} else {
return and__18109__auto__;
}
});
;})(inst_30001,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
})();
var inst_30003 = cljs.core.filter.call(null,inst_30002,files);
var state_30077__$1 = (function (){var statearr_30092 = state_30077;
(statearr_30092[(23)] = inst_30001);

(statearr_30092[(24)] = inst_30003);

return statearr_30092;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30093_30158 = state_30077__$1;
(statearr_30093_30158[(1)] = (16));

} else {
var statearr_30094_30159 = state_30077__$1;
(statearr_30094_30159[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (15))){
var inst_29991 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30095_30160 = state_30077__$1;
(statearr_30095_30160[(2)] = inst_29991);

(statearr_30095_30160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (21))){
var state_30077__$1 = state_30077;
var statearr_30096_30161 = state_30077__$1;
(statearr_30096_30161[(2)] = null);

(statearr_30096_30161[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (31))){
var inst_30044 = (state_30077[(25)]);
var inst_30054 = (state_30077[(2)]);
var inst_30055 = cljs.core.not_empty.call(null,inst_30044);
var state_30077__$1 = (function (){var statearr_30097 = state_30077;
(statearr_30097[(26)] = inst_30054);

return statearr_30097;
})();
if(cljs.core.truth_(inst_30055)){
var statearr_30098_30162 = state_30077__$1;
(statearr_30098_30162[(1)] = (32));

} else {
var statearr_30099_30163 = state_30077__$1;
(statearr_30099_30163[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (32))){
var inst_30044 = (state_30077[(25)]);
var inst_30057 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30044);
var inst_30058 = cljs.core.pr_str.call(null,inst_30057);
var inst_30059 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30058)].join('');
var inst_30060 = figwheel.client.utils.log.call(null,inst_30059);
var state_30077__$1 = state_30077;
var statearr_30100_30164 = state_30077__$1;
(statearr_30100_30164[(2)] = inst_30060);

(statearr_30100_30164[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (33))){
var state_30077__$1 = state_30077;
var statearr_30101_30165 = state_30077__$1;
(statearr_30101_30165[(2)] = null);

(statearr_30101_30165[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (13))){
var inst_29977 = (state_30077[(27)]);
var inst_29981 = cljs.core.chunk_first.call(null,inst_29977);
var inst_29982 = cljs.core.chunk_rest.call(null,inst_29977);
var inst_29983 = cljs.core.count.call(null,inst_29981);
var inst_29964 = inst_29982;
var inst_29965 = inst_29981;
var inst_29966 = inst_29983;
var inst_29967 = (0);
var state_30077__$1 = (function (){var statearr_30102 = state_30077;
(statearr_30102[(7)] = inst_29964);

(statearr_30102[(8)] = inst_29965);

(statearr_30102[(9)] = inst_29966);

(statearr_30102[(10)] = inst_29967);

return statearr_30102;
})();
var statearr_30103_30166 = state_30077__$1;
(statearr_30103_30166[(2)] = null);

(statearr_30103_30166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (22))){
var inst_30016 = (state_30077[(13)]);
var inst_30029 = (state_30077[(2)]);
var inst_30030 = cljs.core.not_empty.call(null,inst_30016);
var state_30077__$1 = (function (){var statearr_30104 = state_30077;
(statearr_30104[(28)] = inst_30029);

return statearr_30104;
})();
if(cljs.core.truth_(inst_30030)){
var statearr_30105_30167 = state_30077__$1;
(statearr_30105_30167[(1)] = (23));

} else {
var statearr_30106_30168 = state_30077__$1;
(statearr_30106_30168[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (36))){
var state_30077__$1 = state_30077;
var statearr_30107_30169 = state_30077__$1;
(statearr_30107_30169[(2)] = null);

(statearr_30107_30169[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (29))){
var inst_30045 = (state_30077[(29)]);
var inst_30048 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30045);
var inst_30049 = cljs.core.pr_str.call(null,inst_30048);
var inst_30050 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30049)].join('');
var inst_30051 = figwheel.client.utils.log.call(null,inst_30050);
var state_30077__$1 = state_30077;
var statearr_30108_30170 = state_30077__$1;
(statearr_30108_30170[(2)] = inst_30051);

(statearr_30108_30170[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (6))){
var inst_29998 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30109_30171 = state_30077__$1;
(statearr_30109_30171[(2)] = inst_29998);

(statearr_30109_30171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (28))){
var inst_30045 = (state_30077[(29)]);
var inst_30042 = (state_30077[(2)]);
var inst_30043 = cljs.core.get.call(null,inst_30042,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30044 = cljs.core.get.call(null,inst_30042,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30045__$1 = cljs.core.get.call(null,inst_30042,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30046 = cljs.core.not_empty.call(null,inst_30045__$1);
var state_30077__$1 = (function (){var statearr_30110 = state_30077;
(statearr_30110[(29)] = inst_30045__$1);

(statearr_30110[(25)] = inst_30044);

(statearr_30110[(30)] = inst_30043);

return statearr_30110;
})();
if(cljs.core.truth_(inst_30046)){
var statearr_30111_30172 = state_30077__$1;
(statearr_30111_30172[(1)] = (29));

} else {
var statearr_30112_30173 = state_30077__$1;
(statearr_30112_30173[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (25))){
var inst_30075 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30077__$1,inst_30075);
} else {
if((state_val_30078 === (34))){
var inst_30043 = (state_30077[(30)]);
var inst_30063 = (state_30077[(2)]);
var inst_30064 = cljs.core.not_empty.call(null,inst_30043);
var state_30077__$1 = (function (){var statearr_30113 = state_30077;
(statearr_30113[(31)] = inst_30063);

return statearr_30113;
})();
if(cljs.core.truth_(inst_30064)){
var statearr_30114_30174 = state_30077__$1;
(statearr_30114_30174[(1)] = (35));

} else {
var statearr_30115_30175 = state_30077__$1;
(statearr_30115_30175[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (17))){
var inst_30003 = (state_30077[(24)]);
var state_30077__$1 = state_30077;
var statearr_30116_30176 = state_30077__$1;
(statearr_30116_30176[(2)] = inst_30003);

(statearr_30116_30176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (3))){
var state_30077__$1 = state_30077;
var statearr_30117_30177 = state_30077__$1;
(statearr_30117_30177[(2)] = null);

(statearr_30117_30177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (12))){
var inst_29994 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30118_30178 = state_30077__$1;
(statearr_30118_30178[(2)] = inst_29994);

(statearr_30118_30178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (2))){
var inst_29956 = (state_30077[(20)]);
var inst_29963 = cljs.core.seq.call(null,inst_29956);
var inst_29964 = inst_29963;
var inst_29965 = null;
var inst_29966 = (0);
var inst_29967 = (0);
var state_30077__$1 = (function (){var statearr_30119 = state_30077;
(statearr_30119[(7)] = inst_29964);

(statearr_30119[(8)] = inst_29965);

(statearr_30119[(9)] = inst_29966);

(statearr_30119[(10)] = inst_29967);

return statearr_30119;
})();
var statearr_30120_30179 = state_30077__$1;
(statearr_30120_30179[(2)] = null);

(statearr_30120_30179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (23))){
var inst_30010 = (state_30077[(12)]);
var inst_30036 = (state_30077[(19)]);
var inst_30016 = (state_30077[(13)]);
var inst_30014 = (state_30077[(14)]);
var inst_30009 = (state_30077[(15)]);
var inst_30013 = (state_30077[(16)]);
var inst_30032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30035 = (function (){var files_not_loaded = inst_30016;
var res = inst_30014;
var res_SINGLEQUOTE_ = inst_30013;
var files_SINGLEQUOTE_ = inst_30010;
var all_files = inst_30009;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30010,inst_30036,inst_30016,inst_30014,inst_30009,inst_30013,inst_30032,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function (p__30034){
var map__30121 = p__30034;
var map__30121__$1 = ((cljs.core.seq_QMARK_.call(null,map__30121))?cljs.core.apply.call(null,cljs.core.hash_map,map__30121):map__30121);
var meta_data = cljs.core.get.call(null,map__30121__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30010,inst_30036,inst_30016,inst_30014,inst_30009,inst_30013,inst_30032,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
})();
var inst_30036__$1 = cljs.core.group_by.call(null,inst_30035,inst_30016);
var inst_30037 = cljs.core.seq_QMARK_.call(null,inst_30036__$1);
var state_30077__$1 = (function (){var statearr_30122 = state_30077;
(statearr_30122[(32)] = inst_30032);

(statearr_30122[(19)] = inst_30036__$1);

return statearr_30122;
})();
if(inst_30037){
var statearr_30123_30180 = state_30077__$1;
(statearr_30123_30180[(1)] = (26));

} else {
var statearr_30124_30181 = state_30077__$1;
(statearr_30124_30181[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (35))){
var inst_30043 = (state_30077[(30)]);
var inst_30066 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30043);
var inst_30067 = cljs.core.pr_str.call(null,inst_30066);
var inst_30068 = [cljs.core.str("not required: "),cljs.core.str(inst_30067)].join('');
var inst_30069 = figwheel.client.utils.log.call(null,inst_30068);
var state_30077__$1 = state_30077;
var statearr_30125_30182 = state_30077__$1;
(statearr_30125_30182[(2)] = inst_30069);

(statearr_30125_30182[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (19))){
var inst_30010 = (state_30077[(12)]);
var inst_30014 = (state_30077[(14)]);
var inst_30009 = (state_30077[(15)]);
var inst_30013 = (state_30077[(16)]);
var inst_30013__$1 = (state_30077[(2)]);
var inst_30014__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30013__$1);
var inst_30015 = (function (){var res = inst_30014__$1;
var res_SINGLEQUOTE_ = inst_30013__$1;
var files_SINGLEQUOTE_ = inst_30010;
var all_files = inst_30009;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30010,inst_30014,inst_30009,inst_30013,inst_30013__$1,inst_30014__$1,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function (p1__29747_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29747_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30010,inst_30014,inst_30009,inst_30013,inst_30013__$1,inst_30014__$1,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
})();
var inst_30016 = cljs.core.filter.call(null,inst_30015,inst_30013__$1);
var inst_30017 = cljs.core.not_empty.call(null,inst_30014__$1);
var state_30077__$1 = (function (){var statearr_30126 = state_30077;
(statearr_30126[(13)] = inst_30016);

(statearr_30126[(14)] = inst_30014__$1);

(statearr_30126[(16)] = inst_30013__$1);

return statearr_30126;
})();
if(cljs.core.truth_(inst_30017)){
var statearr_30127_30183 = state_30077__$1;
(statearr_30127_30183[(1)] = (20));

} else {
var statearr_30128_30184 = state_30077__$1;
(statearr_30128_30184[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (11))){
var state_30077__$1 = state_30077;
var statearr_30129_30185 = state_30077__$1;
(statearr_30129_30185[(2)] = null);

(statearr_30129_30185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (9))){
var inst_29996 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30130_30186 = state_30077__$1;
(statearr_30130_30186[(2)] = inst_29996);

(statearr_30130_30186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (5))){
var inst_29966 = (state_30077[(9)]);
var inst_29967 = (state_30077[(10)]);
var inst_29969 = (inst_29967 < inst_29966);
var inst_29970 = inst_29969;
var state_30077__$1 = state_30077;
if(cljs.core.truth_(inst_29970)){
var statearr_30131_30187 = state_30077__$1;
(statearr_30131_30187[(1)] = (7));

} else {
var statearr_30132_30188 = state_30077__$1;
(statearr_30132_30188[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (14))){
var inst_29977 = (state_30077[(27)]);
var inst_29986 = cljs.core.first.call(null,inst_29977);
var inst_29987 = figwheel.client.file_reloading.eval_body.call(null,inst_29986);
var inst_29988 = cljs.core.next.call(null,inst_29977);
var inst_29964 = inst_29988;
var inst_29965 = null;
var inst_29966 = (0);
var inst_29967 = (0);
var state_30077__$1 = (function (){var statearr_30133 = state_30077;
(statearr_30133[(7)] = inst_29964);

(statearr_30133[(33)] = inst_29987);

(statearr_30133[(8)] = inst_29965);

(statearr_30133[(9)] = inst_29966);

(statearr_30133[(10)] = inst_29967);

return statearr_30133;
})();
var statearr_30134_30189 = state_30077__$1;
(statearr_30134_30189[(2)] = null);

(statearr_30134_30189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (26))){
var inst_30036 = (state_30077[(19)]);
var inst_30039 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30036);
var state_30077__$1 = state_30077;
var statearr_30135_30190 = state_30077__$1;
(statearr_30135_30190[(2)] = inst_30039);

(statearr_30135_30190[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (16))){
var inst_30003 = (state_30077[(24)]);
var inst_30005 = (function (){var all_files = inst_30003;
return ((function (all_files,inst_30003,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function (p1__29746_SHARP_){
return cljs.core.update_in.call(null,p1__29746_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30003,state_val_30078,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
})();
var inst_30006 = cljs.core.map.call(null,inst_30005,inst_30003);
var state_30077__$1 = state_30077;
var statearr_30136_30191 = state_30077__$1;
(statearr_30136_30191[(2)] = inst_30006);

(statearr_30136_30191[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (30))){
var state_30077__$1 = state_30077;
var statearr_30137_30192 = state_30077__$1;
(statearr_30137_30192[(2)] = null);

(statearr_30137_30192[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (10))){
var inst_29977 = (state_30077[(27)]);
var inst_29979 = cljs.core.chunked_seq_QMARK_.call(null,inst_29977);
var state_30077__$1 = state_30077;
if(inst_29979){
var statearr_30138_30193 = state_30077__$1;
(statearr_30138_30193[(1)] = (13));

} else {
var statearr_30139_30194 = state_30077__$1;
(statearr_30139_30194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (18))){
var inst_30010 = (state_30077[(12)]);
var inst_30009 = (state_30077[(15)]);
var inst_30009__$1 = (state_30077[(2)]);
var inst_30010__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30009__$1);
var inst_30011 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30010__$1);
var state_30077__$1 = (function (){var statearr_30140 = state_30077;
(statearr_30140[(12)] = inst_30010__$1);

(statearr_30140[(15)] = inst_30009__$1);

return statearr_30140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30077__$1,(19),inst_30011);
} else {
if((state_val_30078 === (37))){
var inst_30072 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30141_30195 = state_30077__$1;
(statearr_30141_30195[(2)] = inst_30072);

(statearr_30141_30195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (8))){
var inst_29964 = (state_30077[(7)]);
var inst_29977 = (state_30077[(27)]);
var inst_29977__$1 = cljs.core.seq.call(null,inst_29964);
var state_30077__$1 = (function (){var statearr_30142 = state_30077;
(statearr_30142[(27)] = inst_29977__$1);

return statearr_30142;
})();
if(inst_29977__$1){
var statearr_30143_30196 = state_30077__$1;
(statearr_30143_30196[(1)] = (10));

} else {
var statearr_30144_30197 = state_30077__$1;
(statearr_30144_30197[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
;
return ((function (switch__21283__auto__,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0 = (function (){
var statearr_30148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30148[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__);

(statearr_30148[(1)] = (1));

return statearr_30148;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1 = (function (state_30077){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_30077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e30149){if((e30149 instanceof Object)){
var ex__21287__auto__ = e30149;
var statearr_30150_30198 = state_30077;
(statearr_30150_30198[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30199 = state_30077;
state_30077 = G__30199;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__ = function(state_30077){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1.call(this,state_30077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
})();
var state__21347__auto__ = (function (){var statearr_30151 = f__21346__auto__.call(null);
(statearr_30151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_30151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,map__29951,map__29951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29952,map__29952__$1,msg,files))
);

return c__21345__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30202,link){
var map__30204 = p__30202;
var map__30204__$1 = ((cljs.core.seq_QMARK_.call(null,map__30204))?cljs.core.apply.call(null,cljs.core.hash_map,map__30204):map__30204);
var file = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__30204,map__30204__$1,file){
return (function (p1__30200_SHARP_,p2__30201_SHARP_){
if(cljs.core._EQ_.call(null,p1__30200_SHARP_,p2__30201_SHARP_)){
return p1__30200_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__30204,map__30204__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30208){
var map__30209 = p__30208;
var map__30209__$1 = ((cljs.core.seq_QMARK_.call(null,map__30209))?cljs.core.apply.call(null,cljs.core.hash_map,map__30209):map__30209);
var current_url_length = cljs.core.get.call(null,map__30209__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30209__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30205_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30205_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__30211 = arguments.length;
switch (G__30211) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30213){
var map__30215 = p__30213;
var map__30215__$1 = ((cljs.core.seq_QMARK_.call(null,map__30215))?cljs.core.apply.call(null,cljs.core.hash_map,map__30215):map__30215);
var f_data = map__30215__$1;
var request_url = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18121__auto__ = request_url;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30216,files_msg){
var map__30238 = p__30216;
var map__30238__$1 = ((cljs.core.seq_QMARK_.call(null,map__30238))?cljs.core.apply.call(null,cljs.core.hash_map,map__30238):map__30238);
var opts = map__30238__$1;
var on_cssload = cljs.core.get.call(null,map__30238__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30239_30259 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30240_30260 = null;
var count__30241_30261 = (0);
var i__30242_30262 = (0);
while(true){
if((i__30242_30262 < count__30241_30261)){
var f_30263 = cljs.core._nth.call(null,chunk__30240_30260,i__30242_30262);
figwheel.client.file_reloading.reload_css_file.call(null,f_30263);

var G__30264 = seq__30239_30259;
var G__30265 = chunk__30240_30260;
var G__30266 = count__30241_30261;
var G__30267 = (i__30242_30262 + (1));
seq__30239_30259 = G__30264;
chunk__30240_30260 = G__30265;
count__30241_30261 = G__30266;
i__30242_30262 = G__30267;
continue;
} else {
var temp__4126__auto___30268 = cljs.core.seq.call(null,seq__30239_30259);
if(temp__4126__auto___30268){
var seq__30239_30269__$1 = temp__4126__auto___30268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30239_30269__$1)){
var c__18906__auto___30270 = cljs.core.chunk_first.call(null,seq__30239_30269__$1);
var G__30271 = cljs.core.chunk_rest.call(null,seq__30239_30269__$1);
var G__30272 = c__18906__auto___30270;
var G__30273 = cljs.core.count.call(null,c__18906__auto___30270);
var G__30274 = (0);
seq__30239_30259 = G__30271;
chunk__30240_30260 = G__30272;
count__30241_30261 = G__30273;
i__30242_30262 = G__30274;
continue;
} else {
var f_30275 = cljs.core.first.call(null,seq__30239_30269__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30275);

var G__30276 = cljs.core.next.call(null,seq__30239_30269__$1);
var G__30277 = null;
var G__30278 = (0);
var G__30279 = (0);
seq__30239_30259 = G__30276;
chunk__30240_30260 = G__30277;
count__30241_30261 = G__30278;
i__30242_30262 = G__30279;
continue;
}
} else {
}
}
break;
}

var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,map__30238,map__30238__$1,opts,on_cssload){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,map__30238,map__30238__$1,opts,on_cssload){
return (function (state_30249){
var state_val_30250 = (state_30249[(1)]);
if((state_val_30250 === (2))){
var inst_30245 = (state_30249[(2)]);
var inst_30246 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30247 = on_cssload.call(null,inst_30246);
var state_30249__$1 = (function (){var statearr_30251 = state_30249;
(statearr_30251[(7)] = inst_30245);

return statearr_30251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30249__$1,inst_30247);
} else {
if((state_val_30250 === (1))){
var inst_30243 = cljs.core.async.timeout.call(null,(100));
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30249__$1,(2),inst_30243);
} else {
return null;
}
}
});})(c__21345__auto__,map__30238,map__30238__$1,opts,on_cssload))
;
return ((function (switch__21283__auto__,c__21345__auto__,map__30238,map__30238__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0 = (function (){
var statearr_30255 = [null,null,null,null,null,null,null,null];
(statearr_30255[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__);

(statearr_30255[(1)] = (1));

return statearr_30255;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1 = (function (state_30249){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_30249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e30256){if((e30256 instanceof Object)){
var ex__21287__auto__ = e30256;
var statearr_30257_30280 = state_30249;
(statearr_30257_30280[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30281 = state_30249;
state_30249 = G__30281;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__ = function(state_30249){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1.call(this,state_30249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,map__30238,map__30238__$1,opts,on_cssload))
})();
var state__21347__auto__ = (function (){var statearr_30258 = f__21346__auto__.call(null);
(statearr_30258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_30258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,map__30238,map__30238__$1,opts,on_cssload))
);

return c__21345__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1436140474190