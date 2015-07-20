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
return cljs.core.reduce.call(null,(function (p1__29949_SHARP_,p2__29950_SHARP_){
var and__18109__auto__ = p1__29949_SHARP_;
if(cljs.core.truth_(and__18109__auto__)){
return p2__29950_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29951){
var map__29952 = p__29951;
var map__29952__$1 = ((cljs.core.seq_QMARK_.call(null,map__29952))?cljs.core.apply.call(null,cljs.core.hash_map,map__29952):map__29952);
var file = cljs.core.get.call(null,map__29952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29953){
var map__29954 = p__29953;
var map__29954__$1 = ((cljs.core.seq_QMARK_.call(null,map__29954))?cljs.core.apply.call(null,cljs.core.hash_map,map__29954):map__29954);
var namespace = cljs.core.get.call(null,map__29954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e29955){if((e29955 instanceof Error)){
var e = e29955;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29955;

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
var G__29957 = arguments.length;
switch (G__29957) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29959,callback){
var map__29961 = p__29959;
var map__29961__$1 = ((cljs.core.seq_QMARK_.call(null,map__29961))?cljs.core.apply.call(null,cljs.core.hash_map,map__29961):map__29961);
var file_msg = map__29961__$1;
var request_url = cljs.core.get.call(null,map__29961__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29961,map__29961__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29961,map__29961__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29962){
var map__29964 = p__29962;
var map__29964__$1 = ((cljs.core.seq_QMARK_.call(null,map__29964))?cljs.core.apply.call(null,cljs.core.hash_map,map__29964):map__29964);
var file_msg = map__29964__$1;
var meta_data = cljs.core.get.call(null,map__29964__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29964__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29965,callback){
var map__29967 = p__29965;
var map__29967__$1 = ((cljs.core.seq_QMARK_.call(null,map__29967))?cljs.core.apply.call(null,cljs.core.hash_map,map__29967):map__29967);
var file_msg = map__29967__$1;
var namespace = cljs.core.get.call(null,map__29967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29967__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__21345__auto___30054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___30054,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___30054,out){
return (function (state_30036){
var state_val_30037 = (state_30036[(1)]);
if((state_val_30037 === (7))){
var inst_30020 = (state_30036[(7)]);
var inst_30026 = (state_30036[(2)]);
var inst_30027 = cljs.core.async.put_BANG_.call(null,out,inst_30026);
var inst_30016 = inst_30020;
var state_30036__$1 = (function (){var statearr_30038 = state_30036;
(statearr_30038[(8)] = inst_30016);

(statearr_30038[(9)] = inst_30027);

return statearr_30038;
})();
var statearr_30039_30055 = state_30036__$1;
(statearr_30039_30055[(2)] = null);

(statearr_30039_30055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (6))){
var inst_30032 = (state_30036[(2)]);
var state_30036__$1 = state_30036;
var statearr_30040_30056 = state_30036__$1;
(statearr_30040_30056[(2)] = inst_30032);

(statearr_30040_30056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (5))){
var inst_30030 = cljs.core.async.close_BANG_.call(null,out);
var state_30036__$1 = state_30036;
var statearr_30041_30057 = state_30036__$1;
(statearr_30041_30057[(2)] = inst_30030);

(statearr_30041_30057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (4))){
var inst_30019 = (state_30036[(10)]);
var inst_30024 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30019);
var state_30036__$1 = state_30036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30036__$1,(7),inst_30024);
} else {
if((state_val_30037 === (3))){
var inst_30034 = (state_30036[(2)]);
var state_30036__$1 = state_30036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30036__$1,inst_30034);
} else {
if((state_val_30037 === (2))){
var inst_30016 = (state_30036[(8)]);
var inst_30019 = (state_30036[(10)]);
var inst_30019__$1 = cljs.core.nth.call(null,inst_30016,(0),null);
var inst_30020 = cljs.core.nthnext.call(null,inst_30016,(1));
var inst_30021 = (inst_30019__$1 == null);
var inst_30022 = cljs.core.not.call(null,inst_30021);
var state_30036__$1 = (function (){var statearr_30042 = state_30036;
(statearr_30042[(7)] = inst_30020);

(statearr_30042[(10)] = inst_30019__$1);

return statearr_30042;
})();
if(inst_30022){
var statearr_30043_30058 = state_30036__$1;
(statearr_30043_30058[(1)] = (4));

} else {
var statearr_30044_30059 = state_30036__$1;
(statearr_30044_30059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (1))){
var inst_30014 = cljs.core.nth.call(null,files,(0),null);
var inst_30015 = cljs.core.nthnext.call(null,files,(1));
var inst_30016 = files;
var state_30036__$1 = (function (){var statearr_30045 = state_30036;
(statearr_30045[(11)] = inst_30015);

(statearr_30045[(8)] = inst_30016);

(statearr_30045[(12)] = inst_30014);

return statearr_30045;
})();
var statearr_30046_30060 = state_30036__$1;
(statearr_30046_30060[(2)] = null);

(statearr_30046_30060[(1)] = (2));


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
});})(c__21345__auto___30054,out))
;
return ((function (switch__21283__auto__,c__21345__auto___30054,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0 = (function (){
var statearr_30050 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30050[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__);

(statearr_30050[(1)] = (1));

return statearr_30050;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1 = (function (state_30036){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_30036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e30051){if((e30051 instanceof Object)){
var ex__21287__auto__ = e30051;
var statearr_30052_30061 = state_30036;
(statearr_30052_30061[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30062 = state_30036;
state_30036 = G__30062;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__ = function(state_30036){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1.call(this,state_30036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___30054,out))
})();
var state__21347__auto__ = (function (){var statearr_30053 = f__21346__auto__.call(null);
(statearr_30053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___30054);

return statearr_30053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___30054,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__30063,p__30064){
var map__30067 = p__30063;
var map__30067__$1 = ((cljs.core.seq_QMARK_.call(null,map__30067))?cljs.core.apply.call(null,cljs.core.hash_map,map__30067):map__30067);
var opts = map__30067__$1;
var url_rewriter = cljs.core.get.call(null,map__30067__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30068 = p__30064;
var map__30068__$1 = ((cljs.core.seq_QMARK_.call(null,map__30068))?cljs.core.apply.call(null,cljs.core.hash_map,map__30068):map__30068);
var file_msg = map__30068__$1;
var file = cljs.core.get.call(null,map__30068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30069){
var map__30072 = p__30069;
var map__30072__$1 = ((cljs.core.seq_QMARK_.call(null,map__30072))?cljs.core.apply.call(null,cljs.core.hash_map,map__30072):map__30072);
var file = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__30072__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e30073){var e = e30073;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30078,p__30079){
var map__30281 = p__30078;
var map__30281__$1 = ((cljs.core.seq_QMARK_.call(null,map__30281))?cljs.core.apply.call(null,cljs.core.hash_map,map__30281):map__30281);
var opts = map__30281__$1;
var load_unchanged_files = cljs.core.get.call(null,map__30281__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__30281__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30281__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30282 = p__30079;
var map__30282__$1 = ((cljs.core.seq_QMARK_.call(null,map__30282))?cljs.core.apply.call(null,cljs.core.hash_map,map__30282):map__30282);
var msg = map__30282__$1;
var files = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function (state_30407){
var state_val_30408 = (state_30407[(1)]);
if((state_val_30408 === (7))){
var inst_30297 = (state_30407[(7)]);
var inst_30294 = (state_30407[(8)]);
var inst_30296 = (state_30407[(9)]);
var inst_30295 = (state_30407[(10)]);
var inst_30302 = cljs.core._nth.call(null,inst_30295,inst_30297);
var inst_30303 = figwheel.client.file_reloading.eval_body.call(null,inst_30302);
var inst_30304 = (inst_30297 + (1));
var tmp30409 = inst_30294;
var tmp30410 = inst_30296;
var tmp30411 = inst_30295;
var inst_30294__$1 = tmp30409;
var inst_30295__$1 = tmp30411;
var inst_30296__$1 = tmp30410;
var inst_30297__$1 = inst_30304;
var state_30407__$1 = (function (){var statearr_30412 = state_30407;
(statearr_30412[(7)] = inst_30297__$1);

(statearr_30412[(8)] = inst_30294__$1);

(statearr_30412[(11)] = inst_30303);

(statearr_30412[(9)] = inst_30296__$1);

(statearr_30412[(10)] = inst_30295__$1);

return statearr_30412;
})();
var statearr_30413_30482 = state_30407__$1;
(statearr_30413_30482[(2)] = null);

(statearr_30413_30482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (20))){
var inst_30344 = (state_30407[(12)]);
var inst_30343 = (state_30407[(13)]);
var inst_30339 = (state_30407[(14)]);
var inst_30346 = (state_30407[(15)]);
var inst_30340 = (state_30407[(16)]);
var inst_30349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30351 = (function (){var files_not_loaded = inst_30346;
var res = inst_30344;
var res_SINGLEQUOTE_ = inst_30343;
var files_SINGLEQUOTE_ = inst_30340;
var all_files = inst_30339;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30344,inst_30343,inst_30339,inst_30346,inst_30340,inst_30349,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function (p__30350){
var map__30414 = p__30350;
var map__30414__$1 = ((cljs.core.seq_QMARK_.call(null,map__30414))?cljs.core.apply.call(null,cljs.core.hash_map,map__30414):map__30414);
var file = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30344,inst_30343,inst_30339,inst_30346,inst_30340,inst_30349,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
})();
var inst_30352 = cljs.core.map.call(null,inst_30351,inst_30344);
var inst_30353 = cljs.core.pr_str.call(null,inst_30352);
var inst_30354 = figwheel.client.utils.log.call(null,inst_30353);
var inst_30355 = (function (){var files_not_loaded = inst_30346;
var res = inst_30344;
var res_SINGLEQUOTE_ = inst_30343;
var files_SINGLEQUOTE_ = inst_30340;
var all_files = inst_30339;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30344,inst_30343,inst_30339,inst_30346,inst_30340,inst_30349,inst_30351,inst_30352,inst_30353,inst_30354,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30344,inst_30343,inst_30339,inst_30346,inst_30340,inst_30349,inst_30351,inst_30352,inst_30353,inst_30354,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
})();
var inst_30356 = setTimeout(inst_30355,(10));
var state_30407__$1 = (function (){var statearr_30415 = state_30407;
(statearr_30415[(17)] = inst_30354);

(statearr_30415[(18)] = inst_30349);

return statearr_30415;
})();
var statearr_30416_30483 = state_30407__$1;
(statearr_30416_30483[(2)] = inst_30356);

(statearr_30416_30483[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (27))){
var inst_30366 = (state_30407[(19)]);
var state_30407__$1 = state_30407;
var statearr_30417_30484 = state_30407__$1;
(statearr_30417_30484[(2)] = inst_30366);

(statearr_30417_30484[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (1))){
var inst_30286 = (state_30407[(20)]);
var inst_30283 = before_jsload.call(null,files);
var inst_30284 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30285 = (function (){return ((function (inst_30286,inst_30283,inst_30284,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function (p1__30074_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30074_SHARP_);
});
;})(inst_30286,inst_30283,inst_30284,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
})();
var inst_30286__$1 = cljs.core.filter.call(null,inst_30285,files);
var inst_30287 = cljs.core.not_empty.call(null,inst_30286__$1);
var state_30407__$1 = (function (){var statearr_30418 = state_30407;
(statearr_30418[(20)] = inst_30286__$1);

(statearr_30418[(21)] = inst_30283);

(statearr_30418[(22)] = inst_30284);

return statearr_30418;
})();
if(cljs.core.truth_(inst_30287)){
var statearr_30419_30485 = state_30407__$1;
(statearr_30419_30485[(1)] = (2));

} else {
var statearr_30420_30486 = state_30407__$1;
(statearr_30420_30486[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (24))){
var state_30407__$1 = state_30407;
var statearr_30421_30487 = state_30407__$1;
(statearr_30421_30487[(2)] = null);

(statearr_30421_30487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (4))){
var inst_30331 = (state_30407[(2)]);
var inst_30332 = (function (){return ((function (inst_30331,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function (p1__30075_SHARP_){
var and__18109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30075_SHARP_);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30075_SHARP_));
} else {
return and__18109__auto__;
}
});
;})(inst_30331,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
})();
var inst_30333 = cljs.core.filter.call(null,inst_30332,files);
var state_30407__$1 = (function (){var statearr_30422 = state_30407;
(statearr_30422[(23)] = inst_30333);

(statearr_30422[(24)] = inst_30331);

return statearr_30422;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30423_30488 = state_30407__$1;
(statearr_30423_30488[(1)] = (16));

} else {
var statearr_30424_30489 = state_30407__$1;
(statearr_30424_30489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (15))){
var inst_30321 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30425_30490 = state_30407__$1;
(statearr_30425_30490[(2)] = inst_30321);

(statearr_30425_30490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (21))){
var state_30407__$1 = state_30407;
var statearr_30426_30491 = state_30407__$1;
(statearr_30426_30491[(2)] = null);

(statearr_30426_30491[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (31))){
var inst_30374 = (state_30407[(25)]);
var inst_30384 = (state_30407[(2)]);
var inst_30385 = cljs.core.not_empty.call(null,inst_30374);
var state_30407__$1 = (function (){var statearr_30427 = state_30407;
(statearr_30427[(26)] = inst_30384);

return statearr_30427;
})();
if(cljs.core.truth_(inst_30385)){
var statearr_30428_30492 = state_30407__$1;
(statearr_30428_30492[(1)] = (32));

} else {
var statearr_30429_30493 = state_30407__$1;
(statearr_30429_30493[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (32))){
var inst_30374 = (state_30407[(25)]);
var inst_30387 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30374);
var inst_30388 = cljs.core.pr_str.call(null,inst_30387);
var inst_30389 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30388)].join('');
var inst_30390 = figwheel.client.utils.log.call(null,inst_30389);
var state_30407__$1 = state_30407;
var statearr_30430_30494 = state_30407__$1;
(statearr_30430_30494[(2)] = inst_30390);

(statearr_30430_30494[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (33))){
var state_30407__$1 = state_30407;
var statearr_30431_30495 = state_30407__$1;
(statearr_30431_30495[(2)] = null);

(statearr_30431_30495[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (13))){
var inst_30307 = (state_30407[(27)]);
var inst_30311 = cljs.core.chunk_first.call(null,inst_30307);
var inst_30312 = cljs.core.chunk_rest.call(null,inst_30307);
var inst_30313 = cljs.core.count.call(null,inst_30311);
var inst_30294 = inst_30312;
var inst_30295 = inst_30311;
var inst_30296 = inst_30313;
var inst_30297 = (0);
var state_30407__$1 = (function (){var statearr_30432 = state_30407;
(statearr_30432[(7)] = inst_30297);

(statearr_30432[(8)] = inst_30294);

(statearr_30432[(9)] = inst_30296);

(statearr_30432[(10)] = inst_30295);

return statearr_30432;
})();
var statearr_30433_30496 = state_30407__$1;
(statearr_30433_30496[(2)] = null);

(statearr_30433_30496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (22))){
var inst_30346 = (state_30407[(15)]);
var inst_30359 = (state_30407[(2)]);
var inst_30360 = cljs.core.not_empty.call(null,inst_30346);
var state_30407__$1 = (function (){var statearr_30434 = state_30407;
(statearr_30434[(28)] = inst_30359);

return statearr_30434;
})();
if(cljs.core.truth_(inst_30360)){
var statearr_30435_30497 = state_30407__$1;
(statearr_30435_30497[(1)] = (23));

} else {
var statearr_30436_30498 = state_30407__$1;
(statearr_30436_30498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (36))){
var state_30407__$1 = state_30407;
var statearr_30437_30499 = state_30407__$1;
(statearr_30437_30499[(2)] = null);

(statearr_30437_30499[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (29))){
var inst_30375 = (state_30407[(29)]);
var inst_30378 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30375);
var inst_30379 = cljs.core.pr_str.call(null,inst_30378);
var inst_30380 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30379)].join('');
var inst_30381 = figwheel.client.utils.log.call(null,inst_30380);
var state_30407__$1 = state_30407;
var statearr_30438_30500 = state_30407__$1;
(statearr_30438_30500[(2)] = inst_30381);

(statearr_30438_30500[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (6))){
var inst_30328 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30439_30501 = state_30407__$1;
(statearr_30439_30501[(2)] = inst_30328);

(statearr_30439_30501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (28))){
var inst_30375 = (state_30407[(29)]);
var inst_30372 = (state_30407[(2)]);
var inst_30373 = cljs.core.get.call(null,inst_30372,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30374 = cljs.core.get.call(null,inst_30372,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30375__$1 = cljs.core.get.call(null,inst_30372,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30376 = cljs.core.not_empty.call(null,inst_30375__$1);
var state_30407__$1 = (function (){var statearr_30440 = state_30407;
(statearr_30440[(25)] = inst_30374);

(statearr_30440[(29)] = inst_30375__$1);

(statearr_30440[(30)] = inst_30373);

return statearr_30440;
})();
if(cljs.core.truth_(inst_30376)){
var statearr_30441_30502 = state_30407__$1;
(statearr_30441_30502[(1)] = (29));

} else {
var statearr_30442_30503 = state_30407__$1;
(statearr_30442_30503[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (25))){
var inst_30405 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30407__$1,inst_30405);
} else {
if((state_val_30408 === (34))){
var inst_30373 = (state_30407[(30)]);
var inst_30393 = (state_30407[(2)]);
var inst_30394 = cljs.core.not_empty.call(null,inst_30373);
var state_30407__$1 = (function (){var statearr_30443 = state_30407;
(statearr_30443[(31)] = inst_30393);

return statearr_30443;
})();
if(cljs.core.truth_(inst_30394)){
var statearr_30444_30504 = state_30407__$1;
(statearr_30444_30504[(1)] = (35));

} else {
var statearr_30445_30505 = state_30407__$1;
(statearr_30445_30505[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (17))){
var inst_30333 = (state_30407[(23)]);
var state_30407__$1 = state_30407;
var statearr_30446_30506 = state_30407__$1;
(statearr_30446_30506[(2)] = inst_30333);

(statearr_30446_30506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (3))){
var state_30407__$1 = state_30407;
var statearr_30447_30507 = state_30407__$1;
(statearr_30447_30507[(2)] = null);

(statearr_30447_30507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (12))){
var inst_30324 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30448_30508 = state_30407__$1;
(statearr_30448_30508[(2)] = inst_30324);

(statearr_30448_30508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (2))){
var inst_30286 = (state_30407[(20)]);
var inst_30293 = cljs.core.seq.call(null,inst_30286);
var inst_30294 = inst_30293;
var inst_30295 = null;
var inst_30296 = (0);
var inst_30297 = (0);
var state_30407__$1 = (function (){var statearr_30449 = state_30407;
(statearr_30449[(7)] = inst_30297);

(statearr_30449[(8)] = inst_30294);

(statearr_30449[(9)] = inst_30296);

(statearr_30449[(10)] = inst_30295);

return statearr_30449;
})();
var statearr_30450_30509 = state_30407__$1;
(statearr_30450_30509[(2)] = null);

(statearr_30450_30509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (23))){
var inst_30344 = (state_30407[(12)]);
var inst_30343 = (state_30407[(13)]);
var inst_30339 = (state_30407[(14)]);
var inst_30346 = (state_30407[(15)]);
var inst_30340 = (state_30407[(16)]);
var inst_30366 = (state_30407[(19)]);
var inst_30362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30365 = (function (){var files_not_loaded = inst_30346;
var res = inst_30344;
var res_SINGLEQUOTE_ = inst_30343;
var files_SINGLEQUOTE_ = inst_30340;
var all_files = inst_30339;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30344,inst_30343,inst_30339,inst_30346,inst_30340,inst_30366,inst_30362,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function (p__30364){
var map__30451 = p__30364;
var map__30451__$1 = ((cljs.core.seq_QMARK_.call(null,map__30451))?cljs.core.apply.call(null,cljs.core.hash_map,map__30451):map__30451);
var meta_data = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30344,inst_30343,inst_30339,inst_30346,inst_30340,inst_30366,inst_30362,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
})();
var inst_30366__$1 = cljs.core.group_by.call(null,inst_30365,inst_30346);
var inst_30367 = cljs.core.seq_QMARK_.call(null,inst_30366__$1);
var state_30407__$1 = (function (){var statearr_30452 = state_30407;
(statearr_30452[(32)] = inst_30362);

(statearr_30452[(19)] = inst_30366__$1);

return statearr_30452;
})();
if(inst_30367){
var statearr_30453_30510 = state_30407__$1;
(statearr_30453_30510[(1)] = (26));

} else {
var statearr_30454_30511 = state_30407__$1;
(statearr_30454_30511[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (35))){
var inst_30373 = (state_30407[(30)]);
var inst_30396 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30373);
var inst_30397 = cljs.core.pr_str.call(null,inst_30396);
var inst_30398 = [cljs.core.str("not required: "),cljs.core.str(inst_30397)].join('');
var inst_30399 = figwheel.client.utils.log.call(null,inst_30398);
var state_30407__$1 = state_30407;
var statearr_30455_30512 = state_30407__$1;
(statearr_30455_30512[(2)] = inst_30399);

(statearr_30455_30512[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (19))){
var inst_30344 = (state_30407[(12)]);
var inst_30343 = (state_30407[(13)]);
var inst_30339 = (state_30407[(14)]);
var inst_30340 = (state_30407[(16)]);
var inst_30343__$1 = (state_30407[(2)]);
var inst_30344__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30343__$1);
var inst_30345 = (function (){var res = inst_30344__$1;
var res_SINGLEQUOTE_ = inst_30343__$1;
var files_SINGLEQUOTE_ = inst_30340;
var all_files = inst_30339;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30344,inst_30343,inst_30339,inst_30340,inst_30343__$1,inst_30344__$1,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function (p1__30077_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30077_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30344,inst_30343,inst_30339,inst_30340,inst_30343__$1,inst_30344__$1,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
})();
var inst_30346 = cljs.core.filter.call(null,inst_30345,inst_30343__$1);
var inst_30347 = cljs.core.not_empty.call(null,inst_30344__$1);
var state_30407__$1 = (function (){var statearr_30456 = state_30407;
(statearr_30456[(12)] = inst_30344__$1);

(statearr_30456[(13)] = inst_30343__$1);

(statearr_30456[(15)] = inst_30346);

return statearr_30456;
})();
if(cljs.core.truth_(inst_30347)){
var statearr_30457_30513 = state_30407__$1;
(statearr_30457_30513[(1)] = (20));

} else {
var statearr_30458_30514 = state_30407__$1;
(statearr_30458_30514[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (11))){
var state_30407__$1 = state_30407;
var statearr_30459_30515 = state_30407__$1;
(statearr_30459_30515[(2)] = null);

(statearr_30459_30515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (9))){
var inst_30326 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30460_30516 = state_30407__$1;
(statearr_30460_30516[(2)] = inst_30326);

(statearr_30460_30516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (5))){
var inst_30297 = (state_30407[(7)]);
var inst_30296 = (state_30407[(9)]);
var inst_30299 = (inst_30297 < inst_30296);
var inst_30300 = inst_30299;
var state_30407__$1 = state_30407;
if(cljs.core.truth_(inst_30300)){
var statearr_30461_30517 = state_30407__$1;
(statearr_30461_30517[(1)] = (7));

} else {
var statearr_30462_30518 = state_30407__$1;
(statearr_30462_30518[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (14))){
var inst_30307 = (state_30407[(27)]);
var inst_30316 = cljs.core.first.call(null,inst_30307);
var inst_30317 = figwheel.client.file_reloading.eval_body.call(null,inst_30316);
var inst_30318 = cljs.core.next.call(null,inst_30307);
var inst_30294 = inst_30318;
var inst_30295 = null;
var inst_30296 = (0);
var inst_30297 = (0);
var state_30407__$1 = (function (){var statearr_30463 = state_30407;
(statearr_30463[(7)] = inst_30297);

(statearr_30463[(8)] = inst_30294);

(statearr_30463[(33)] = inst_30317);

(statearr_30463[(9)] = inst_30296);

(statearr_30463[(10)] = inst_30295);

return statearr_30463;
})();
var statearr_30464_30519 = state_30407__$1;
(statearr_30464_30519[(2)] = null);

(statearr_30464_30519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (26))){
var inst_30366 = (state_30407[(19)]);
var inst_30369 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30366);
var state_30407__$1 = state_30407;
var statearr_30465_30520 = state_30407__$1;
(statearr_30465_30520[(2)] = inst_30369);

(statearr_30465_30520[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (16))){
var inst_30333 = (state_30407[(23)]);
var inst_30335 = (function (){var all_files = inst_30333;
return ((function (all_files,inst_30333,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function (p1__30076_SHARP_){
return cljs.core.update_in.call(null,p1__30076_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30333,state_val_30408,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
})();
var inst_30336 = cljs.core.map.call(null,inst_30335,inst_30333);
var state_30407__$1 = state_30407;
var statearr_30466_30521 = state_30407__$1;
(statearr_30466_30521[(2)] = inst_30336);

(statearr_30466_30521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (30))){
var state_30407__$1 = state_30407;
var statearr_30467_30522 = state_30407__$1;
(statearr_30467_30522[(2)] = null);

(statearr_30467_30522[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (10))){
var inst_30307 = (state_30407[(27)]);
var inst_30309 = cljs.core.chunked_seq_QMARK_.call(null,inst_30307);
var state_30407__$1 = state_30407;
if(inst_30309){
var statearr_30468_30523 = state_30407__$1;
(statearr_30468_30523[(1)] = (13));

} else {
var statearr_30469_30524 = state_30407__$1;
(statearr_30469_30524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (18))){
var inst_30339 = (state_30407[(14)]);
var inst_30340 = (state_30407[(16)]);
var inst_30339__$1 = (state_30407[(2)]);
var inst_30340__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30339__$1);
var inst_30341 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30340__$1);
var state_30407__$1 = (function (){var statearr_30470 = state_30407;
(statearr_30470[(14)] = inst_30339__$1);

(statearr_30470[(16)] = inst_30340__$1);

return statearr_30470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30407__$1,(19),inst_30341);
} else {
if((state_val_30408 === (37))){
var inst_30402 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30471_30525 = state_30407__$1;
(statearr_30471_30525[(2)] = inst_30402);

(statearr_30471_30525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (8))){
var inst_30307 = (state_30407[(27)]);
var inst_30294 = (state_30407[(8)]);
var inst_30307__$1 = cljs.core.seq.call(null,inst_30294);
var state_30407__$1 = (function (){var statearr_30472 = state_30407;
(statearr_30472[(27)] = inst_30307__$1);

return statearr_30472;
})();
if(inst_30307__$1){
var statearr_30473_30526 = state_30407__$1;
(statearr_30473_30526[(1)] = (10));

} else {
var statearr_30474_30527 = state_30407__$1;
(statearr_30474_30527[(1)] = (11));

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
});})(c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
;
return ((function (switch__21283__auto__,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0 = (function (){
var statearr_30478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30478[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__);

(statearr_30478[(1)] = (1));

return statearr_30478;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1 = (function (state_30407){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_30407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e30479){if((e30479 instanceof Object)){
var ex__21287__auto__ = e30479;
var statearr_30480_30528 = state_30407;
(statearr_30480_30528[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30529 = state_30407;
state_30407 = G__30529;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__ = function(state_30407){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1.call(this,state_30407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
})();
var state__21347__auto__ = (function (){var statearr_30481 = f__21346__auto__.call(null);
(statearr_30481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,map__30281,map__30281__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30282,map__30282__$1,msg,files))
);

return c__21345__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30532,link){
var map__30534 = p__30532;
var map__30534__$1 = ((cljs.core.seq_QMARK_.call(null,map__30534))?cljs.core.apply.call(null,cljs.core.hash_map,map__30534):map__30534);
var file = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__30534,map__30534__$1,file){
return (function (p1__30530_SHARP_,p2__30531_SHARP_){
if(cljs.core._EQ_.call(null,p1__30530_SHARP_,p2__30531_SHARP_)){
return p1__30530_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__30534,map__30534__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30538){
var map__30539 = p__30538;
var map__30539__$1 = ((cljs.core.seq_QMARK_.call(null,map__30539))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);
var current_url_length = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30535_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30535_SHARP_);
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
var G__30541 = arguments.length;
switch (G__30541) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30543){
var map__30545 = p__30543;
var map__30545__$1 = ((cljs.core.seq_QMARK_.call(null,map__30545))?cljs.core.apply.call(null,cljs.core.hash_map,map__30545):map__30545);
var f_data = map__30545__$1;
var request_url = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30546,files_msg){
var map__30568 = p__30546;
var map__30568__$1 = ((cljs.core.seq_QMARK_.call(null,map__30568))?cljs.core.apply.call(null,cljs.core.hash_map,map__30568):map__30568);
var opts = map__30568__$1;
var on_cssload = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30569_30589 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30570_30590 = null;
var count__30571_30591 = (0);
var i__30572_30592 = (0);
while(true){
if((i__30572_30592 < count__30571_30591)){
var f_30593 = cljs.core._nth.call(null,chunk__30570_30590,i__30572_30592);
figwheel.client.file_reloading.reload_css_file.call(null,f_30593);

var G__30594 = seq__30569_30589;
var G__30595 = chunk__30570_30590;
var G__30596 = count__30571_30591;
var G__30597 = (i__30572_30592 + (1));
seq__30569_30589 = G__30594;
chunk__30570_30590 = G__30595;
count__30571_30591 = G__30596;
i__30572_30592 = G__30597;
continue;
} else {
var temp__4126__auto___30598 = cljs.core.seq.call(null,seq__30569_30589);
if(temp__4126__auto___30598){
var seq__30569_30599__$1 = temp__4126__auto___30598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30569_30599__$1)){
var c__18906__auto___30600 = cljs.core.chunk_first.call(null,seq__30569_30599__$1);
var G__30601 = cljs.core.chunk_rest.call(null,seq__30569_30599__$1);
var G__30602 = c__18906__auto___30600;
var G__30603 = cljs.core.count.call(null,c__18906__auto___30600);
var G__30604 = (0);
seq__30569_30589 = G__30601;
chunk__30570_30590 = G__30602;
count__30571_30591 = G__30603;
i__30572_30592 = G__30604;
continue;
} else {
var f_30605 = cljs.core.first.call(null,seq__30569_30599__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30605);

var G__30606 = cljs.core.next.call(null,seq__30569_30599__$1);
var G__30607 = null;
var G__30608 = (0);
var G__30609 = (0);
seq__30569_30589 = G__30606;
chunk__30570_30590 = G__30607;
count__30571_30591 = G__30608;
i__30572_30592 = G__30609;
continue;
}
} else {
}
}
break;
}

var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,map__30568,map__30568__$1,opts,on_cssload){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,map__30568,map__30568__$1,opts,on_cssload){
return (function (state_30579){
var state_val_30580 = (state_30579[(1)]);
if((state_val_30580 === (2))){
var inst_30575 = (state_30579[(2)]);
var inst_30576 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30577 = on_cssload.call(null,inst_30576);
var state_30579__$1 = (function (){var statearr_30581 = state_30579;
(statearr_30581[(7)] = inst_30575);

return statearr_30581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30579__$1,inst_30577);
} else {
if((state_val_30580 === (1))){
var inst_30573 = cljs.core.async.timeout.call(null,(100));
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30579__$1,(2),inst_30573);
} else {
return null;
}
}
});})(c__21345__auto__,map__30568,map__30568__$1,opts,on_cssload))
;
return ((function (switch__21283__auto__,c__21345__auto__,map__30568,map__30568__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0 = (function (){
var statearr_30585 = [null,null,null,null,null,null,null,null];
(statearr_30585[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__);

(statearr_30585[(1)] = (1));

return statearr_30585;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1 = (function (state_30579){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_30579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e30586){if((e30586 instanceof Object)){
var ex__21287__auto__ = e30586;
var statearr_30587_30610 = state_30579;
(statearr_30587_30610[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30611 = state_30579;
state_30579 = G__30611;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__ = function(state_30579){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1.call(this,state_30579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,map__30568,map__30568__$1,opts,on_cssload))
})();
var state__21347__auto__ = (function (){var statearr_30588 = f__21346__auto__.call(null);
(statearr_30588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,map__30568,map__30568__$1,opts,on_cssload))
);

return c__21345__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1437351694497