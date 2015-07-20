// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26065 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26065 = (function (f,fn_handler,meta26066){
this.f = f;
this.fn_handler = fn_handler;
this.meta26066 = meta26066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26065.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26067){
var self__ = this;
var _26067__$1 = this;
return self__.meta26066;
});

cljs.core.async.t26065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26067,meta26066__$1){
var self__ = this;
var _26067__$1 = this;
return (new cljs.core.async.t26065(self__.f,self__.fn_handler,meta26066__$1));
});

cljs.core.async.t26065.cljs$lang$type = true;

cljs.core.async.t26065.cljs$lang$ctorStr = "cljs.core.async/t26065";

cljs.core.async.t26065.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26065");
});

cljs.core.async.__GT_t26065 = (function cljs$core$async$fn_handler_$___GT_t26065(f__$1,fn_handler__$1,meta26066){
return (new cljs.core.async.t26065(f__$1,fn_handler__$1,meta26066));
});

}

return (new cljs.core.async.t26065(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26069 = buff;
if(G__26069){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__26069.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26069.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26069);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26069);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26071 = arguments.length;
switch (G__26071) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26074 = arguments.length;
switch (G__26074) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26076 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26076);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26076,ret){
return (function (){
return fn1.call(null,val_26076);
});})(val_26076,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26078 = arguments.length;
switch (G__26078) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19006__auto___26080 = n;
var x_26081 = (0);
while(true){
if((x_26081 < n__19006__auto___26080)){
(a[x_26081] = (0));

var G__26082 = (x_26081 + (1));
x_26081 = G__26082;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26083 = (i + (1));
i = G__26083;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26087 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26087 = (function (flag,alt_flag,meta26088){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26088 = meta26088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26089){
var self__ = this;
var _26089__$1 = this;
return self__.meta26088;
});})(flag))
;

cljs.core.async.t26087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26089,meta26088__$1){
var self__ = this;
var _26089__$1 = this;
return (new cljs.core.async.t26087(self__.flag,self__.alt_flag,meta26088__$1));
});})(flag))
;

cljs.core.async.t26087.cljs$lang$type = true;

cljs.core.async.t26087.cljs$lang$ctorStr = "cljs.core.async/t26087";

cljs.core.async.t26087.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26087");
});})(flag))
;

cljs.core.async.__GT_t26087 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26087(flag__$1,alt_flag__$1,meta26088){
return (new cljs.core.async.t26087(flag__$1,alt_flag__$1,meta26088));
});})(flag))
;

}

return (new cljs.core.async.t26087(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26093 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26093 = (function (cb,flag,alt_handler,meta26094){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26094 = meta26094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26093.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26095){
var self__ = this;
var _26095__$1 = this;
return self__.meta26094;
});

cljs.core.async.t26093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26095,meta26094__$1){
var self__ = this;
var _26095__$1 = this;
return (new cljs.core.async.t26093(self__.cb,self__.flag,self__.alt_handler,meta26094__$1));
});

cljs.core.async.t26093.cljs$lang$type = true;

cljs.core.async.t26093.cljs$lang$ctorStr = "cljs.core.async/t26093";

cljs.core.async.t26093.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26093");
});

cljs.core.async.__GT_t26093 = (function cljs$core$async$alt_handler_$___GT_t26093(cb__$1,flag__$1,alt_handler__$1,meta26094){
return (new cljs.core.async.t26093(cb__$1,flag__$1,alt_handler__$1,meta26094));
});

}

return (new cljs.core.async.t26093(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26096_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26096_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26097_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26097_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18121__auto__ = wport;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26098 = (i + (1));
i = G__26098;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18121__auto__ = ret;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18109__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18109__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26101){
var map__26102 = p__26101;
var map__26102__$1 = ((cljs.core.seq_QMARK_.call(null,map__26102))?cljs.core.apply.call(null,cljs.core.hash_map,map__26102):map__26102);
var opts = map__26102__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26099){
var G__26100 = cljs.core.first.call(null,seq26099);
var seq26099__$1 = cljs.core.next.call(null,seq26099);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26100,seq26099__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26104 = arguments.length;
switch (G__26104) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21345__auto___26153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26153){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26153){
return (function (state_26128){
var state_val_26129 = (state_26128[(1)]);
if((state_val_26129 === (7))){
var inst_26124 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26130_26154 = state_26128__$1;
(statearr_26130_26154[(2)] = inst_26124);

(statearr_26130_26154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (1))){
var state_26128__$1 = state_26128;
var statearr_26131_26155 = state_26128__$1;
(statearr_26131_26155[(2)] = null);

(statearr_26131_26155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (4))){
var inst_26107 = (state_26128[(7)]);
var inst_26107__$1 = (state_26128[(2)]);
var inst_26108 = (inst_26107__$1 == null);
var state_26128__$1 = (function (){var statearr_26132 = state_26128;
(statearr_26132[(7)] = inst_26107__$1);

return statearr_26132;
})();
if(cljs.core.truth_(inst_26108)){
var statearr_26133_26156 = state_26128__$1;
(statearr_26133_26156[(1)] = (5));

} else {
var statearr_26134_26157 = state_26128__$1;
(statearr_26134_26157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (13))){
var state_26128__$1 = state_26128;
var statearr_26135_26158 = state_26128__$1;
(statearr_26135_26158[(2)] = null);

(statearr_26135_26158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (6))){
var inst_26107 = (state_26128[(7)]);
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26128__$1,(11),to,inst_26107);
} else {
if((state_val_26129 === (3))){
var inst_26126 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26128__$1,inst_26126);
} else {
if((state_val_26129 === (12))){
var state_26128__$1 = state_26128;
var statearr_26136_26159 = state_26128__$1;
(statearr_26136_26159[(2)] = null);

(statearr_26136_26159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (2))){
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26128__$1,(4),from);
} else {
if((state_val_26129 === (11))){
var inst_26117 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
if(cljs.core.truth_(inst_26117)){
var statearr_26137_26160 = state_26128__$1;
(statearr_26137_26160[(1)] = (12));

} else {
var statearr_26138_26161 = state_26128__$1;
(statearr_26138_26161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (9))){
var state_26128__$1 = state_26128;
var statearr_26139_26162 = state_26128__$1;
(statearr_26139_26162[(2)] = null);

(statearr_26139_26162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (5))){
var state_26128__$1 = state_26128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26140_26163 = state_26128__$1;
(statearr_26140_26163[(1)] = (8));

} else {
var statearr_26141_26164 = state_26128__$1;
(statearr_26141_26164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (14))){
var inst_26122 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26142_26165 = state_26128__$1;
(statearr_26142_26165[(2)] = inst_26122);

(statearr_26142_26165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (10))){
var inst_26114 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26143_26166 = state_26128__$1;
(statearr_26143_26166[(2)] = inst_26114);

(statearr_26143_26166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (8))){
var inst_26111 = cljs.core.async.close_BANG_.call(null,to);
var state_26128__$1 = state_26128;
var statearr_26144_26167 = state_26128__$1;
(statearr_26144_26167[(2)] = inst_26111);

(statearr_26144_26167[(1)] = (10));


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
});})(c__21345__auto___26153))
;
return ((function (switch__21283__auto__,c__21345__auto___26153){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_26148 = [null,null,null,null,null,null,null,null];
(statearr_26148[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_26148[(1)] = (1));

return statearr_26148;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_26128){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26149){if((e26149 instanceof Object)){
var ex__21287__auto__ = e26149;
var statearr_26150_26168 = state_26128;
(statearr_26150_26168[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26169 = state_26128;
state_26128 = G__26169;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_26128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_26128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26153))
})();
var state__21347__auto__ = (function (){var statearr_26151 = f__21346__auto__.call(null);
(statearr_26151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26153);

return statearr_26151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26153))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26353){
var vec__26354 = p__26353;
var v = cljs.core.nth.call(null,vec__26354,(0),null);
var p = cljs.core.nth.call(null,vec__26354,(1),null);
var job = vec__26354;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21345__auto___26536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26536,res,vec__26354,v,p,job,jobs,results){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26536,res,vec__26354,v,p,job,jobs,results){
return (function (state_26359){
var state_val_26360 = (state_26359[(1)]);
if((state_val_26360 === (2))){
var inst_26356 = (state_26359[(2)]);
var inst_26357 = cljs.core.async.close_BANG_.call(null,res);
var state_26359__$1 = (function (){var statearr_26361 = state_26359;
(statearr_26361[(7)] = inst_26356);

return statearr_26361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26359__$1,inst_26357);
} else {
if((state_val_26360 === (1))){
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26359__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21345__auto___26536,res,vec__26354,v,p,job,jobs,results))
;
return ((function (switch__21283__auto__,c__21345__auto___26536,res,vec__26354,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26365 = [null,null,null,null,null,null,null,null];
(statearr_26365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26365[(1)] = (1));

return statearr_26365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26359){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26366){if((e26366 instanceof Object)){
var ex__21287__auto__ = e26366;
var statearr_26367_26537 = state_26359;
(statearr_26367_26537[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26538 = state_26359;
state_26359 = G__26538;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26536,res,vec__26354,v,p,job,jobs,results))
})();
var state__21347__auto__ = (function (){var statearr_26368 = f__21346__auto__.call(null);
(statearr_26368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26536);

return statearr_26368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26536,res,vec__26354,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26369){
var vec__26370 = p__26369;
var v = cljs.core.nth.call(null,vec__26370,(0),null);
var p = cljs.core.nth.call(null,vec__26370,(1),null);
var job = vec__26370;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19006__auto___26539 = n;
var __26540 = (0);
while(true){
if((__26540 < n__19006__auto___26539)){
var G__26371_26541 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26371_26541) {
case "async":
var c__21345__auto___26543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26540,c__21345__auto___26543,G__26371_26541,n__19006__auto___26539,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (__26540,c__21345__auto___26543,G__26371_26541,n__19006__auto___26539,jobs,results,process,async){
return (function (state_26384){
var state_val_26385 = (state_26384[(1)]);
if((state_val_26385 === (7))){
var inst_26380 = (state_26384[(2)]);
var state_26384__$1 = state_26384;
var statearr_26386_26544 = state_26384__$1;
(statearr_26386_26544[(2)] = inst_26380);

(statearr_26386_26544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (6))){
var state_26384__$1 = state_26384;
var statearr_26387_26545 = state_26384__$1;
(statearr_26387_26545[(2)] = null);

(statearr_26387_26545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (5))){
var state_26384__$1 = state_26384;
var statearr_26388_26546 = state_26384__$1;
(statearr_26388_26546[(2)] = null);

(statearr_26388_26546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (4))){
var inst_26374 = (state_26384[(2)]);
var inst_26375 = async.call(null,inst_26374);
var state_26384__$1 = state_26384;
if(cljs.core.truth_(inst_26375)){
var statearr_26389_26547 = state_26384__$1;
(statearr_26389_26547[(1)] = (5));

} else {
var statearr_26390_26548 = state_26384__$1;
(statearr_26390_26548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (3))){
var inst_26382 = (state_26384[(2)]);
var state_26384__$1 = state_26384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26384__$1,inst_26382);
} else {
if((state_val_26385 === (2))){
var state_26384__$1 = state_26384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26384__$1,(4),jobs);
} else {
if((state_val_26385 === (1))){
var state_26384__$1 = state_26384;
var statearr_26391_26549 = state_26384__$1;
(statearr_26391_26549[(2)] = null);

(statearr_26391_26549[(1)] = (2));


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
});})(__26540,c__21345__auto___26543,G__26371_26541,n__19006__auto___26539,jobs,results,process,async))
;
return ((function (__26540,switch__21283__auto__,c__21345__auto___26543,G__26371_26541,n__19006__auto___26539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26395 = [null,null,null,null,null,null,null];
(statearr_26395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26395[(1)] = (1));

return statearr_26395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26384){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26396){if((e26396 instanceof Object)){
var ex__21287__auto__ = e26396;
var statearr_26397_26550 = state_26384;
(statearr_26397_26550[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26551 = state_26384;
state_26384 = G__26551;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(__26540,switch__21283__auto__,c__21345__auto___26543,G__26371_26541,n__19006__auto___26539,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26398 = f__21346__auto__.call(null);
(statearr_26398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26543);

return statearr_26398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(__26540,c__21345__auto___26543,G__26371_26541,n__19006__auto___26539,jobs,results,process,async))
);


break;
case "compute":
var c__21345__auto___26552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26540,c__21345__auto___26552,G__26371_26541,n__19006__auto___26539,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (__26540,c__21345__auto___26552,G__26371_26541,n__19006__auto___26539,jobs,results,process,async){
return (function (state_26411){
var state_val_26412 = (state_26411[(1)]);
if((state_val_26412 === (7))){
var inst_26407 = (state_26411[(2)]);
var state_26411__$1 = state_26411;
var statearr_26413_26553 = state_26411__$1;
(statearr_26413_26553[(2)] = inst_26407);

(statearr_26413_26553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26412 === (6))){
var state_26411__$1 = state_26411;
var statearr_26414_26554 = state_26411__$1;
(statearr_26414_26554[(2)] = null);

(statearr_26414_26554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26412 === (5))){
var state_26411__$1 = state_26411;
var statearr_26415_26555 = state_26411__$1;
(statearr_26415_26555[(2)] = null);

(statearr_26415_26555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26412 === (4))){
var inst_26401 = (state_26411[(2)]);
var inst_26402 = process.call(null,inst_26401);
var state_26411__$1 = state_26411;
if(cljs.core.truth_(inst_26402)){
var statearr_26416_26556 = state_26411__$1;
(statearr_26416_26556[(1)] = (5));

} else {
var statearr_26417_26557 = state_26411__$1;
(statearr_26417_26557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26412 === (3))){
var inst_26409 = (state_26411[(2)]);
var state_26411__$1 = state_26411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26411__$1,inst_26409);
} else {
if((state_val_26412 === (2))){
var state_26411__$1 = state_26411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26411__$1,(4),jobs);
} else {
if((state_val_26412 === (1))){
var state_26411__$1 = state_26411;
var statearr_26418_26558 = state_26411__$1;
(statearr_26418_26558[(2)] = null);

(statearr_26418_26558[(1)] = (2));


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
});})(__26540,c__21345__auto___26552,G__26371_26541,n__19006__auto___26539,jobs,results,process,async))
;
return ((function (__26540,switch__21283__auto__,c__21345__auto___26552,G__26371_26541,n__19006__auto___26539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26422 = [null,null,null,null,null,null,null];
(statearr_26422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26422[(1)] = (1));

return statearr_26422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26411){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26423){if((e26423 instanceof Object)){
var ex__21287__auto__ = e26423;
var statearr_26424_26559 = state_26411;
(statearr_26424_26559[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26560 = state_26411;
state_26411 = G__26560;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(__26540,switch__21283__auto__,c__21345__auto___26552,G__26371_26541,n__19006__auto___26539,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26425 = f__21346__auto__.call(null);
(statearr_26425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26552);

return statearr_26425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(__26540,c__21345__auto___26552,G__26371_26541,n__19006__auto___26539,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26561 = (__26540 + (1));
__26540 = G__26561;
continue;
} else {
}
break;
}

var c__21345__auto___26562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26562,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26562,jobs,results,process,async){
return (function (state_26447){
var state_val_26448 = (state_26447[(1)]);
if((state_val_26448 === (9))){
var inst_26440 = (state_26447[(2)]);
var state_26447__$1 = (function (){var statearr_26449 = state_26447;
(statearr_26449[(7)] = inst_26440);

return statearr_26449;
})();
var statearr_26450_26563 = state_26447__$1;
(statearr_26450_26563[(2)] = null);

(statearr_26450_26563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (8))){
var inst_26433 = (state_26447[(8)]);
var inst_26438 = (state_26447[(2)]);
var state_26447__$1 = (function (){var statearr_26451 = state_26447;
(statearr_26451[(9)] = inst_26438);

return statearr_26451;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26447__$1,(9),results,inst_26433);
} else {
if((state_val_26448 === (7))){
var inst_26443 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
var statearr_26452_26564 = state_26447__$1;
(statearr_26452_26564[(2)] = inst_26443);

(statearr_26452_26564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (6))){
var inst_26428 = (state_26447[(10)]);
var inst_26433 = (state_26447[(8)]);
var inst_26433__$1 = cljs.core.async.chan.call(null,(1));
var inst_26434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26435 = [inst_26428,inst_26433__$1];
var inst_26436 = (new cljs.core.PersistentVector(null,2,(5),inst_26434,inst_26435,null));
var state_26447__$1 = (function (){var statearr_26453 = state_26447;
(statearr_26453[(8)] = inst_26433__$1);

return statearr_26453;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26447__$1,(8),jobs,inst_26436);
} else {
if((state_val_26448 === (5))){
var inst_26431 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26447__$1 = state_26447;
var statearr_26454_26565 = state_26447__$1;
(statearr_26454_26565[(2)] = inst_26431);

(statearr_26454_26565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (4))){
var inst_26428 = (state_26447[(10)]);
var inst_26428__$1 = (state_26447[(2)]);
var inst_26429 = (inst_26428__$1 == null);
var state_26447__$1 = (function (){var statearr_26455 = state_26447;
(statearr_26455[(10)] = inst_26428__$1);

return statearr_26455;
})();
if(cljs.core.truth_(inst_26429)){
var statearr_26456_26566 = state_26447__$1;
(statearr_26456_26566[(1)] = (5));

} else {
var statearr_26457_26567 = state_26447__$1;
(statearr_26457_26567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (3))){
var inst_26445 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26447__$1,inst_26445);
} else {
if((state_val_26448 === (2))){
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26447__$1,(4),from);
} else {
if((state_val_26448 === (1))){
var state_26447__$1 = state_26447;
var statearr_26458_26568 = state_26447__$1;
(statearr_26458_26568[(2)] = null);

(statearr_26458_26568[(1)] = (2));


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
});})(c__21345__auto___26562,jobs,results,process,async))
;
return ((function (switch__21283__auto__,c__21345__auto___26562,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26462[(1)] = (1));

return statearr_26462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26447){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26463){if((e26463 instanceof Object)){
var ex__21287__auto__ = e26463;
var statearr_26464_26569 = state_26447;
(statearr_26464_26569[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26570 = state_26447;
state_26447 = G__26570;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26562,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26465 = f__21346__auto__.call(null);
(statearr_26465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26562);

return statearr_26465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26562,jobs,results,process,async))
);


var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,jobs,results,process,async){
return (function (state_26503){
var state_val_26504 = (state_26503[(1)]);
if((state_val_26504 === (7))){
var inst_26499 = (state_26503[(2)]);
var state_26503__$1 = state_26503;
var statearr_26505_26571 = state_26503__$1;
(statearr_26505_26571[(2)] = inst_26499);

(statearr_26505_26571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (20))){
var state_26503__$1 = state_26503;
var statearr_26506_26572 = state_26503__$1;
(statearr_26506_26572[(2)] = null);

(statearr_26506_26572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (1))){
var state_26503__$1 = state_26503;
var statearr_26507_26573 = state_26503__$1;
(statearr_26507_26573[(2)] = null);

(statearr_26507_26573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (4))){
var inst_26468 = (state_26503[(7)]);
var inst_26468__$1 = (state_26503[(2)]);
var inst_26469 = (inst_26468__$1 == null);
var state_26503__$1 = (function (){var statearr_26508 = state_26503;
(statearr_26508[(7)] = inst_26468__$1);

return statearr_26508;
})();
if(cljs.core.truth_(inst_26469)){
var statearr_26509_26574 = state_26503__$1;
(statearr_26509_26574[(1)] = (5));

} else {
var statearr_26510_26575 = state_26503__$1;
(statearr_26510_26575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (15))){
var inst_26481 = (state_26503[(8)]);
var state_26503__$1 = state_26503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26503__$1,(18),to,inst_26481);
} else {
if((state_val_26504 === (21))){
var inst_26494 = (state_26503[(2)]);
var state_26503__$1 = state_26503;
var statearr_26511_26576 = state_26503__$1;
(statearr_26511_26576[(2)] = inst_26494);

(statearr_26511_26576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (13))){
var inst_26496 = (state_26503[(2)]);
var state_26503__$1 = (function (){var statearr_26512 = state_26503;
(statearr_26512[(9)] = inst_26496);

return statearr_26512;
})();
var statearr_26513_26577 = state_26503__$1;
(statearr_26513_26577[(2)] = null);

(statearr_26513_26577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (6))){
var inst_26468 = (state_26503[(7)]);
var state_26503__$1 = state_26503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26503__$1,(11),inst_26468);
} else {
if((state_val_26504 === (17))){
var inst_26489 = (state_26503[(2)]);
var state_26503__$1 = state_26503;
if(cljs.core.truth_(inst_26489)){
var statearr_26514_26578 = state_26503__$1;
(statearr_26514_26578[(1)] = (19));

} else {
var statearr_26515_26579 = state_26503__$1;
(statearr_26515_26579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (3))){
var inst_26501 = (state_26503[(2)]);
var state_26503__$1 = state_26503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26503__$1,inst_26501);
} else {
if((state_val_26504 === (12))){
var inst_26478 = (state_26503[(10)]);
var state_26503__$1 = state_26503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26503__$1,(14),inst_26478);
} else {
if((state_val_26504 === (2))){
var state_26503__$1 = state_26503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26503__$1,(4),results);
} else {
if((state_val_26504 === (19))){
var state_26503__$1 = state_26503;
var statearr_26516_26580 = state_26503__$1;
(statearr_26516_26580[(2)] = null);

(statearr_26516_26580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (11))){
var inst_26478 = (state_26503[(2)]);
var state_26503__$1 = (function (){var statearr_26517 = state_26503;
(statearr_26517[(10)] = inst_26478);

return statearr_26517;
})();
var statearr_26518_26581 = state_26503__$1;
(statearr_26518_26581[(2)] = null);

(statearr_26518_26581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (9))){
var state_26503__$1 = state_26503;
var statearr_26519_26582 = state_26503__$1;
(statearr_26519_26582[(2)] = null);

(statearr_26519_26582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (5))){
var state_26503__$1 = state_26503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26520_26583 = state_26503__$1;
(statearr_26520_26583[(1)] = (8));

} else {
var statearr_26521_26584 = state_26503__$1;
(statearr_26521_26584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (14))){
var inst_26481 = (state_26503[(8)]);
var inst_26483 = (state_26503[(11)]);
var inst_26481__$1 = (state_26503[(2)]);
var inst_26482 = (inst_26481__$1 == null);
var inst_26483__$1 = cljs.core.not.call(null,inst_26482);
var state_26503__$1 = (function (){var statearr_26522 = state_26503;
(statearr_26522[(8)] = inst_26481__$1);

(statearr_26522[(11)] = inst_26483__$1);

return statearr_26522;
})();
if(inst_26483__$1){
var statearr_26523_26585 = state_26503__$1;
(statearr_26523_26585[(1)] = (15));

} else {
var statearr_26524_26586 = state_26503__$1;
(statearr_26524_26586[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (16))){
var inst_26483 = (state_26503[(11)]);
var state_26503__$1 = state_26503;
var statearr_26525_26587 = state_26503__$1;
(statearr_26525_26587[(2)] = inst_26483);

(statearr_26525_26587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (10))){
var inst_26475 = (state_26503[(2)]);
var state_26503__$1 = state_26503;
var statearr_26526_26588 = state_26503__$1;
(statearr_26526_26588[(2)] = inst_26475);

(statearr_26526_26588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (18))){
var inst_26486 = (state_26503[(2)]);
var state_26503__$1 = state_26503;
var statearr_26527_26589 = state_26503__$1;
(statearr_26527_26589[(2)] = inst_26486);

(statearr_26527_26589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26504 === (8))){
var inst_26472 = cljs.core.async.close_BANG_.call(null,to);
var state_26503__$1 = state_26503;
var statearr_26528_26590 = state_26503__$1;
(statearr_26528_26590[(2)] = inst_26472);

(statearr_26528_26590[(1)] = (10));


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
});})(c__21345__auto__,jobs,results,process,async))
;
return ((function (switch__21283__auto__,c__21345__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26532[(1)] = (1));

return statearr_26532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26503){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26533){if((e26533 instanceof Object)){
var ex__21287__auto__ = e26533;
var statearr_26534_26591 = state_26503;
(statearr_26534_26591[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26592 = state_26503;
state_26503 = G__26592;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26535 = f__21346__auto__.call(null);
(statearr_26535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,jobs,results,process,async))
);

return c__21345__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__26594 = arguments.length;
switch (G__26594) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__26597 = arguments.length;
switch (G__26597) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__26600 = arguments.length;
switch (G__26600) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21345__auto___26652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26652,tc,fc){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26652,tc,fc){
return (function (state_26626){
var state_val_26627 = (state_26626[(1)]);
if((state_val_26627 === (7))){
var inst_26622 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26628_26653 = state_26626__$1;
(statearr_26628_26653[(2)] = inst_26622);

(statearr_26628_26653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (1))){
var state_26626__$1 = state_26626;
var statearr_26629_26654 = state_26626__$1;
(statearr_26629_26654[(2)] = null);

(statearr_26629_26654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (4))){
var inst_26603 = (state_26626[(7)]);
var inst_26603__$1 = (state_26626[(2)]);
var inst_26604 = (inst_26603__$1 == null);
var state_26626__$1 = (function (){var statearr_26630 = state_26626;
(statearr_26630[(7)] = inst_26603__$1);

return statearr_26630;
})();
if(cljs.core.truth_(inst_26604)){
var statearr_26631_26655 = state_26626__$1;
(statearr_26631_26655[(1)] = (5));

} else {
var statearr_26632_26656 = state_26626__$1;
(statearr_26632_26656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (13))){
var state_26626__$1 = state_26626;
var statearr_26633_26657 = state_26626__$1;
(statearr_26633_26657[(2)] = null);

(statearr_26633_26657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (6))){
var inst_26603 = (state_26626[(7)]);
var inst_26609 = p.call(null,inst_26603);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26609)){
var statearr_26634_26658 = state_26626__$1;
(statearr_26634_26658[(1)] = (9));

} else {
var statearr_26635_26659 = state_26626__$1;
(statearr_26635_26659[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (3))){
var inst_26624 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26626__$1,inst_26624);
} else {
if((state_val_26627 === (12))){
var state_26626__$1 = state_26626;
var statearr_26636_26660 = state_26626__$1;
(statearr_26636_26660[(2)] = null);

(statearr_26636_26660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (2))){
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26626__$1,(4),ch);
} else {
if((state_val_26627 === (11))){
var inst_26603 = (state_26626[(7)]);
var inst_26613 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26626__$1,(8),inst_26613,inst_26603);
} else {
if((state_val_26627 === (9))){
var state_26626__$1 = state_26626;
var statearr_26637_26661 = state_26626__$1;
(statearr_26637_26661[(2)] = tc);

(statearr_26637_26661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (5))){
var inst_26606 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26607 = cljs.core.async.close_BANG_.call(null,fc);
var state_26626__$1 = (function (){var statearr_26638 = state_26626;
(statearr_26638[(8)] = inst_26606);

return statearr_26638;
})();
var statearr_26639_26662 = state_26626__$1;
(statearr_26639_26662[(2)] = inst_26607);

(statearr_26639_26662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (14))){
var inst_26620 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
var statearr_26640_26663 = state_26626__$1;
(statearr_26640_26663[(2)] = inst_26620);

(statearr_26640_26663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (10))){
var state_26626__$1 = state_26626;
var statearr_26641_26664 = state_26626__$1;
(statearr_26641_26664[(2)] = fc);

(statearr_26641_26664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (8))){
var inst_26615 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
if(cljs.core.truth_(inst_26615)){
var statearr_26642_26665 = state_26626__$1;
(statearr_26642_26665[(1)] = (12));

} else {
var statearr_26643_26666 = state_26626__$1;
(statearr_26643_26666[(1)] = (13));

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
});})(c__21345__auto___26652,tc,fc))
;
return ((function (switch__21283__auto__,c__21345__auto___26652,tc,fc){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_26647 = [null,null,null,null,null,null,null,null,null];
(statearr_26647[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_26647[(1)] = (1));

return statearr_26647;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_26626){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26648){if((e26648 instanceof Object)){
var ex__21287__auto__ = e26648;
var statearr_26649_26667 = state_26626;
(statearr_26649_26667[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26668 = state_26626;
state_26626 = G__26668;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_26626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_26626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26652,tc,fc))
})();
var state__21347__auto__ = (function (){var statearr_26650 = f__21346__auto__.call(null);
(statearr_26650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26652);

return statearr_26650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26652,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_26715){
var state_val_26716 = (state_26715[(1)]);
if((state_val_26716 === (7))){
var inst_26711 = (state_26715[(2)]);
var state_26715__$1 = state_26715;
var statearr_26717_26733 = state_26715__$1;
(statearr_26717_26733[(2)] = inst_26711);

(statearr_26717_26733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (6))){
var inst_26701 = (state_26715[(7)]);
var inst_26704 = (state_26715[(8)]);
var inst_26708 = f.call(null,inst_26701,inst_26704);
var inst_26701__$1 = inst_26708;
var state_26715__$1 = (function (){var statearr_26718 = state_26715;
(statearr_26718[(7)] = inst_26701__$1);

return statearr_26718;
})();
var statearr_26719_26734 = state_26715__$1;
(statearr_26719_26734[(2)] = null);

(statearr_26719_26734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (5))){
var inst_26701 = (state_26715[(7)]);
var state_26715__$1 = state_26715;
var statearr_26720_26735 = state_26715__$1;
(statearr_26720_26735[(2)] = inst_26701);

(statearr_26720_26735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (4))){
var inst_26704 = (state_26715[(8)]);
var inst_26704__$1 = (state_26715[(2)]);
var inst_26705 = (inst_26704__$1 == null);
var state_26715__$1 = (function (){var statearr_26721 = state_26715;
(statearr_26721[(8)] = inst_26704__$1);

return statearr_26721;
})();
if(cljs.core.truth_(inst_26705)){
var statearr_26722_26736 = state_26715__$1;
(statearr_26722_26736[(1)] = (5));

} else {
var statearr_26723_26737 = state_26715__$1;
(statearr_26723_26737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (3))){
var inst_26713 = (state_26715[(2)]);
var state_26715__$1 = state_26715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26715__$1,inst_26713);
} else {
if((state_val_26716 === (2))){
var state_26715__$1 = state_26715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26715__$1,(4),ch);
} else {
if((state_val_26716 === (1))){
var inst_26701 = init;
var state_26715__$1 = (function (){var statearr_26724 = state_26715;
(statearr_26724[(7)] = inst_26701);

return statearr_26724;
})();
var statearr_26725_26738 = state_26715__$1;
(statearr_26725_26738[(2)] = null);

(statearr_26725_26738[(1)] = (2));


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
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21284__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21284__auto____0 = (function (){
var statearr_26729 = [null,null,null,null,null,null,null,null,null];
(statearr_26729[(0)] = cljs$core$async$reduce_$_state_machine__21284__auto__);

(statearr_26729[(1)] = (1));

return statearr_26729;
});
var cljs$core$async$reduce_$_state_machine__21284__auto____1 = (function (state_26715){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26730){if((e26730 instanceof Object)){
var ex__21287__auto__ = e26730;
var statearr_26731_26739 = state_26715;
(statearr_26731_26739[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26740 = state_26715;
state_26715 = G__26740;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21284__auto__ = function(state_26715){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21284__auto____1.call(this,state_26715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21284__auto____0;
cljs$core$async$reduce_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21284__auto____1;
return cljs$core$async$reduce_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_26732 = f__21346__auto__.call(null);
(statearr_26732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__26742 = arguments.length;
switch (G__26742) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_26767){
var state_val_26768 = (state_26767[(1)]);
if((state_val_26768 === (7))){
var inst_26749 = (state_26767[(2)]);
var state_26767__$1 = state_26767;
var statearr_26769_26793 = state_26767__$1;
(statearr_26769_26793[(2)] = inst_26749);

(statearr_26769_26793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (1))){
var inst_26743 = cljs.core.seq.call(null,coll);
var inst_26744 = inst_26743;
var state_26767__$1 = (function (){var statearr_26770 = state_26767;
(statearr_26770[(7)] = inst_26744);

return statearr_26770;
})();
var statearr_26771_26794 = state_26767__$1;
(statearr_26771_26794[(2)] = null);

(statearr_26771_26794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (4))){
var inst_26744 = (state_26767[(7)]);
var inst_26747 = cljs.core.first.call(null,inst_26744);
var state_26767__$1 = state_26767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26767__$1,(7),ch,inst_26747);
} else {
if((state_val_26768 === (13))){
var inst_26761 = (state_26767[(2)]);
var state_26767__$1 = state_26767;
var statearr_26772_26795 = state_26767__$1;
(statearr_26772_26795[(2)] = inst_26761);

(statearr_26772_26795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (6))){
var inst_26752 = (state_26767[(2)]);
var state_26767__$1 = state_26767;
if(cljs.core.truth_(inst_26752)){
var statearr_26773_26796 = state_26767__$1;
(statearr_26773_26796[(1)] = (8));

} else {
var statearr_26774_26797 = state_26767__$1;
(statearr_26774_26797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (3))){
var inst_26765 = (state_26767[(2)]);
var state_26767__$1 = state_26767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26767__$1,inst_26765);
} else {
if((state_val_26768 === (12))){
var state_26767__$1 = state_26767;
var statearr_26775_26798 = state_26767__$1;
(statearr_26775_26798[(2)] = null);

(statearr_26775_26798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (2))){
var inst_26744 = (state_26767[(7)]);
var state_26767__$1 = state_26767;
if(cljs.core.truth_(inst_26744)){
var statearr_26776_26799 = state_26767__$1;
(statearr_26776_26799[(1)] = (4));

} else {
var statearr_26777_26800 = state_26767__$1;
(statearr_26777_26800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (11))){
var inst_26758 = cljs.core.async.close_BANG_.call(null,ch);
var state_26767__$1 = state_26767;
var statearr_26778_26801 = state_26767__$1;
(statearr_26778_26801[(2)] = inst_26758);

(statearr_26778_26801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (9))){
var state_26767__$1 = state_26767;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26779_26802 = state_26767__$1;
(statearr_26779_26802[(1)] = (11));

} else {
var statearr_26780_26803 = state_26767__$1;
(statearr_26780_26803[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (5))){
var inst_26744 = (state_26767[(7)]);
var state_26767__$1 = state_26767;
var statearr_26781_26804 = state_26767__$1;
(statearr_26781_26804[(2)] = inst_26744);

(statearr_26781_26804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (10))){
var inst_26763 = (state_26767[(2)]);
var state_26767__$1 = state_26767;
var statearr_26782_26805 = state_26767__$1;
(statearr_26782_26805[(2)] = inst_26763);

(statearr_26782_26805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26768 === (8))){
var inst_26744 = (state_26767[(7)]);
var inst_26754 = cljs.core.next.call(null,inst_26744);
var inst_26744__$1 = inst_26754;
var state_26767__$1 = (function (){var statearr_26783 = state_26767;
(statearr_26783[(7)] = inst_26744__$1);

return statearr_26783;
})();
var statearr_26784_26806 = state_26767__$1;
(statearr_26784_26806[(2)] = null);

(statearr_26784_26806[(1)] = (2));


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
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_26788 = [null,null,null,null,null,null,null,null];
(statearr_26788[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_26788[(1)] = (1));

return statearr_26788;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_26767){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26789){if((e26789 instanceof Object)){
var ex__21287__auto__ = e26789;
var statearr_26790_26807 = state_26767;
(statearr_26790_26807[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26808 = state_26767;
state_26767 = G__26808;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_26767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_26767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_26791 = f__21346__auto__.call(null);
(statearr_26791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26810 = {};
return obj26810;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18109__auto__ = _;
if(and__18109__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18757__auto__ = (((_ == null))?null:_);
return (function (){var or__18121__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26812 = {};
return obj26812;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27034 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27034 = (function (cs,ch,mult,meta27035){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27035 = meta27035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27034.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27034.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27034.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27034.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27034.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27036){
var self__ = this;
var _27036__$1 = this;
return self__.meta27035;
});})(cs))
;

cljs.core.async.t27034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27036,meta27035__$1){
var self__ = this;
var _27036__$1 = this;
return (new cljs.core.async.t27034(self__.cs,self__.ch,self__.mult,meta27035__$1));
});})(cs))
;

cljs.core.async.t27034.cljs$lang$type = true;

cljs.core.async.t27034.cljs$lang$ctorStr = "cljs.core.async/t27034";

cljs.core.async.t27034.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27034");
});})(cs))
;

cljs.core.async.__GT_t27034 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27034(cs__$1,ch__$1,mult__$1,meta27035){
return (new cljs.core.async.t27034(cs__$1,ch__$1,mult__$1,meta27035));
});})(cs))
;

}

return (new cljs.core.async.t27034(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21345__auto___27255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27255,cs,m,dchan,dctr,done){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27255,cs,m,dchan,dctr,done){
return (function (state_27167){
var state_val_27168 = (state_27167[(1)]);
if((state_val_27168 === (7))){
var inst_27163 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27169_27256 = state_27167__$1;
(statearr_27169_27256[(2)] = inst_27163);

(statearr_27169_27256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (20))){
var inst_27068 = (state_27167[(7)]);
var inst_27078 = cljs.core.first.call(null,inst_27068);
var inst_27079 = cljs.core.nth.call(null,inst_27078,(0),null);
var inst_27080 = cljs.core.nth.call(null,inst_27078,(1),null);
var state_27167__$1 = (function (){var statearr_27170 = state_27167;
(statearr_27170[(8)] = inst_27079);

return statearr_27170;
})();
if(cljs.core.truth_(inst_27080)){
var statearr_27171_27257 = state_27167__$1;
(statearr_27171_27257[(1)] = (22));

} else {
var statearr_27172_27258 = state_27167__$1;
(statearr_27172_27258[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (27))){
var inst_27108 = (state_27167[(9)]);
var inst_27039 = (state_27167[(10)]);
var inst_27115 = (state_27167[(11)]);
var inst_27110 = (state_27167[(12)]);
var inst_27115__$1 = cljs.core._nth.call(null,inst_27108,inst_27110);
var inst_27116 = cljs.core.async.put_BANG_.call(null,inst_27115__$1,inst_27039,done);
var state_27167__$1 = (function (){var statearr_27173 = state_27167;
(statearr_27173[(11)] = inst_27115__$1);

return statearr_27173;
})();
if(cljs.core.truth_(inst_27116)){
var statearr_27174_27259 = state_27167__$1;
(statearr_27174_27259[(1)] = (30));

} else {
var statearr_27175_27260 = state_27167__$1;
(statearr_27175_27260[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (1))){
var state_27167__$1 = state_27167;
var statearr_27176_27261 = state_27167__$1;
(statearr_27176_27261[(2)] = null);

(statearr_27176_27261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (24))){
var inst_27068 = (state_27167[(7)]);
var inst_27085 = (state_27167[(2)]);
var inst_27086 = cljs.core.next.call(null,inst_27068);
var inst_27048 = inst_27086;
var inst_27049 = null;
var inst_27050 = (0);
var inst_27051 = (0);
var state_27167__$1 = (function (){var statearr_27177 = state_27167;
(statearr_27177[(13)] = inst_27050);

(statearr_27177[(14)] = inst_27048);

(statearr_27177[(15)] = inst_27051);

(statearr_27177[(16)] = inst_27085);

(statearr_27177[(17)] = inst_27049);

return statearr_27177;
})();
var statearr_27178_27262 = state_27167__$1;
(statearr_27178_27262[(2)] = null);

(statearr_27178_27262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (39))){
var state_27167__$1 = state_27167;
var statearr_27182_27263 = state_27167__$1;
(statearr_27182_27263[(2)] = null);

(statearr_27182_27263[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (4))){
var inst_27039 = (state_27167[(10)]);
var inst_27039__$1 = (state_27167[(2)]);
var inst_27040 = (inst_27039__$1 == null);
var state_27167__$1 = (function (){var statearr_27183 = state_27167;
(statearr_27183[(10)] = inst_27039__$1);

return statearr_27183;
})();
if(cljs.core.truth_(inst_27040)){
var statearr_27184_27264 = state_27167__$1;
(statearr_27184_27264[(1)] = (5));

} else {
var statearr_27185_27265 = state_27167__$1;
(statearr_27185_27265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (15))){
var inst_27050 = (state_27167[(13)]);
var inst_27048 = (state_27167[(14)]);
var inst_27051 = (state_27167[(15)]);
var inst_27049 = (state_27167[(17)]);
var inst_27064 = (state_27167[(2)]);
var inst_27065 = (inst_27051 + (1));
var tmp27179 = inst_27050;
var tmp27180 = inst_27048;
var tmp27181 = inst_27049;
var inst_27048__$1 = tmp27180;
var inst_27049__$1 = tmp27181;
var inst_27050__$1 = tmp27179;
var inst_27051__$1 = inst_27065;
var state_27167__$1 = (function (){var statearr_27186 = state_27167;
(statearr_27186[(13)] = inst_27050__$1);

(statearr_27186[(14)] = inst_27048__$1);

(statearr_27186[(18)] = inst_27064);

(statearr_27186[(15)] = inst_27051__$1);

(statearr_27186[(17)] = inst_27049__$1);

return statearr_27186;
})();
var statearr_27187_27266 = state_27167__$1;
(statearr_27187_27266[(2)] = null);

(statearr_27187_27266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (21))){
var inst_27089 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27191_27267 = state_27167__$1;
(statearr_27191_27267[(2)] = inst_27089);

(statearr_27191_27267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (31))){
var inst_27115 = (state_27167[(11)]);
var inst_27119 = done.call(null,null);
var inst_27120 = cljs.core.async.untap_STAR_.call(null,m,inst_27115);
var state_27167__$1 = (function (){var statearr_27192 = state_27167;
(statearr_27192[(19)] = inst_27119);

return statearr_27192;
})();
var statearr_27193_27268 = state_27167__$1;
(statearr_27193_27268[(2)] = inst_27120);

(statearr_27193_27268[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (32))){
var inst_27108 = (state_27167[(9)]);
var inst_27109 = (state_27167[(20)]);
var inst_27107 = (state_27167[(21)]);
var inst_27110 = (state_27167[(12)]);
var inst_27122 = (state_27167[(2)]);
var inst_27123 = (inst_27110 + (1));
var tmp27188 = inst_27108;
var tmp27189 = inst_27109;
var tmp27190 = inst_27107;
var inst_27107__$1 = tmp27190;
var inst_27108__$1 = tmp27188;
var inst_27109__$1 = tmp27189;
var inst_27110__$1 = inst_27123;
var state_27167__$1 = (function (){var statearr_27194 = state_27167;
(statearr_27194[(9)] = inst_27108__$1);

(statearr_27194[(20)] = inst_27109__$1);

(statearr_27194[(21)] = inst_27107__$1);

(statearr_27194[(22)] = inst_27122);

(statearr_27194[(12)] = inst_27110__$1);

return statearr_27194;
})();
var statearr_27195_27269 = state_27167__$1;
(statearr_27195_27269[(2)] = null);

(statearr_27195_27269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (40))){
var inst_27135 = (state_27167[(23)]);
var inst_27139 = done.call(null,null);
var inst_27140 = cljs.core.async.untap_STAR_.call(null,m,inst_27135);
var state_27167__$1 = (function (){var statearr_27196 = state_27167;
(statearr_27196[(24)] = inst_27139);

return statearr_27196;
})();
var statearr_27197_27270 = state_27167__$1;
(statearr_27197_27270[(2)] = inst_27140);

(statearr_27197_27270[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (33))){
var inst_27126 = (state_27167[(25)]);
var inst_27128 = cljs.core.chunked_seq_QMARK_.call(null,inst_27126);
var state_27167__$1 = state_27167;
if(inst_27128){
var statearr_27198_27271 = state_27167__$1;
(statearr_27198_27271[(1)] = (36));

} else {
var statearr_27199_27272 = state_27167__$1;
(statearr_27199_27272[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (13))){
var inst_27058 = (state_27167[(26)]);
var inst_27061 = cljs.core.async.close_BANG_.call(null,inst_27058);
var state_27167__$1 = state_27167;
var statearr_27200_27273 = state_27167__$1;
(statearr_27200_27273[(2)] = inst_27061);

(statearr_27200_27273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (22))){
var inst_27079 = (state_27167[(8)]);
var inst_27082 = cljs.core.async.close_BANG_.call(null,inst_27079);
var state_27167__$1 = state_27167;
var statearr_27201_27274 = state_27167__$1;
(statearr_27201_27274[(2)] = inst_27082);

(statearr_27201_27274[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (36))){
var inst_27126 = (state_27167[(25)]);
var inst_27130 = cljs.core.chunk_first.call(null,inst_27126);
var inst_27131 = cljs.core.chunk_rest.call(null,inst_27126);
var inst_27132 = cljs.core.count.call(null,inst_27130);
var inst_27107 = inst_27131;
var inst_27108 = inst_27130;
var inst_27109 = inst_27132;
var inst_27110 = (0);
var state_27167__$1 = (function (){var statearr_27202 = state_27167;
(statearr_27202[(9)] = inst_27108);

(statearr_27202[(20)] = inst_27109);

(statearr_27202[(21)] = inst_27107);

(statearr_27202[(12)] = inst_27110);

return statearr_27202;
})();
var statearr_27203_27275 = state_27167__$1;
(statearr_27203_27275[(2)] = null);

(statearr_27203_27275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (41))){
var inst_27126 = (state_27167[(25)]);
var inst_27142 = (state_27167[(2)]);
var inst_27143 = cljs.core.next.call(null,inst_27126);
var inst_27107 = inst_27143;
var inst_27108 = null;
var inst_27109 = (0);
var inst_27110 = (0);
var state_27167__$1 = (function (){var statearr_27204 = state_27167;
(statearr_27204[(9)] = inst_27108);

(statearr_27204[(27)] = inst_27142);

(statearr_27204[(20)] = inst_27109);

(statearr_27204[(21)] = inst_27107);

(statearr_27204[(12)] = inst_27110);

return statearr_27204;
})();
var statearr_27205_27276 = state_27167__$1;
(statearr_27205_27276[(2)] = null);

(statearr_27205_27276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (43))){
var state_27167__$1 = state_27167;
var statearr_27206_27277 = state_27167__$1;
(statearr_27206_27277[(2)] = null);

(statearr_27206_27277[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (29))){
var inst_27151 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27207_27278 = state_27167__$1;
(statearr_27207_27278[(2)] = inst_27151);

(statearr_27207_27278[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (44))){
var inst_27160 = (state_27167[(2)]);
var state_27167__$1 = (function (){var statearr_27208 = state_27167;
(statearr_27208[(28)] = inst_27160);

return statearr_27208;
})();
var statearr_27209_27279 = state_27167__$1;
(statearr_27209_27279[(2)] = null);

(statearr_27209_27279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (6))){
var inst_27099 = (state_27167[(29)]);
var inst_27098 = cljs.core.deref.call(null,cs);
var inst_27099__$1 = cljs.core.keys.call(null,inst_27098);
var inst_27100 = cljs.core.count.call(null,inst_27099__$1);
var inst_27101 = cljs.core.reset_BANG_.call(null,dctr,inst_27100);
var inst_27106 = cljs.core.seq.call(null,inst_27099__$1);
var inst_27107 = inst_27106;
var inst_27108 = null;
var inst_27109 = (0);
var inst_27110 = (0);
var state_27167__$1 = (function (){var statearr_27210 = state_27167;
(statearr_27210[(9)] = inst_27108);

(statearr_27210[(20)] = inst_27109);

(statearr_27210[(29)] = inst_27099__$1);

(statearr_27210[(21)] = inst_27107);

(statearr_27210[(12)] = inst_27110);

(statearr_27210[(30)] = inst_27101);

return statearr_27210;
})();
var statearr_27211_27280 = state_27167__$1;
(statearr_27211_27280[(2)] = null);

(statearr_27211_27280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (28))){
var inst_27126 = (state_27167[(25)]);
var inst_27107 = (state_27167[(21)]);
var inst_27126__$1 = cljs.core.seq.call(null,inst_27107);
var state_27167__$1 = (function (){var statearr_27212 = state_27167;
(statearr_27212[(25)] = inst_27126__$1);

return statearr_27212;
})();
if(inst_27126__$1){
var statearr_27213_27281 = state_27167__$1;
(statearr_27213_27281[(1)] = (33));

} else {
var statearr_27214_27282 = state_27167__$1;
(statearr_27214_27282[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (25))){
var inst_27109 = (state_27167[(20)]);
var inst_27110 = (state_27167[(12)]);
var inst_27112 = (inst_27110 < inst_27109);
var inst_27113 = inst_27112;
var state_27167__$1 = state_27167;
if(cljs.core.truth_(inst_27113)){
var statearr_27215_27283 = state_27167__$1;
(statearr_27215_27283[(1)] = (27));

} else {
var statearr_27216_27284 = state_27167__$1;
(statearr_27216_27284[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (34))){
var state_27167__$1 = state_27167;
var statearr_27217_27285 = state_27167__$1;
(statearr_27217_27285[(2)] = null);

(statearr_27217_27285[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (17))){
var state_27167__$1 = state_27167;
var statearr_27218_27286 = state_27167__$1;
(statearr_27218_27286[(2)] = null);

(statearr_27218_27286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (3))){
var inst_27165 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27167__$1,inst_27165);
} else {
if((state_val_27168 === (12))){
var inst_27094 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27219_27287 = state_27167__$1;
(statearr_27219_27287[(2)] = inst_27094);

(statearr_27219_27287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (2))){
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27167__$1,(4),ch);
} else {
if((state_val_27168 === (23))){
var state_27167__$1 = state_27167;
var statearr_27220_27288 = state_27167__$1;
(statearr_27220_27288[(2)] = null);

(statearr_27220_27288[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (35))){
var inst_27149 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27221_27289 = state_27167__$1;
(statearr_27221_27289[(2)] = inst_27149);

(statearr_27221_27289[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (19))){
var inst_27068 = (state_27167[(7)]);
var inst_27072 = cljs.core.chunk_first.call(null,inst_27068);
var inst_27073 = cljs.core.chunk_rest.call(null,inst_27068);
var inst_27074 = cljs.core.count.call(null,inst_27072);
var inst_27048 = inst_27073;
var inst_27049 = inst_27072;
var inst_27050 = inst_27074;
var inst_27051 = (0);
var state_27167__$1 = (function (){var statearr_27222 = state_27167;
(statearr_27222[(13)] = inst_27050);

(statearr_27222[(14)] = inst_27048);

(statearr_27222[(15)] = inst_27051);

(statearr_27222[(17)] = inst_27049);

return statearr_27222;
})();
var statearr_27223_27290 = state_27167__$1;
(statearr_27223_27290[(2)] = null);

(statearr_27223_27290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (11))){
var inst_27048 = (state_27167[(14)]);
var inst_27068 = (state_27167[(7)]);
var inst_27068__$1 = cljs.core.seq.call(null,inst_27048);
var state_27167__$1 = (function (){var statearr_27224 = state_27167;
(statearr_27224[(7)] = inst_27068__$1);

return statearr_27224;
})();
if(inst_27068__$1){
var statearr_27225_27291 = state_27167__$1;
(statearr_27225_27291[(1)] = (16));

} else {
var statearr_27226_27292 = state_27167__$1;
(statearr_27226_27292[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (9))){
var inst_27096 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27227_27293 = state_27167__$1;
(statearr_27227_27293[(2)] = inst_27096);

(statearr_27227_27293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (5))){
var inst_27046 = cljs.core.deref.call(null,cs);
var inst_27047 = cljs.core.seq.call(null,inst_27046);
var inst_27048 = inst_27047;
var inst_27049 = null;
var inst_27050 = (0);
var inst_27051 = (0);
var state_27167__$1 = (function (){var statearr_27228 = state_27167;
(statearr_27228[(13)] = inst_27050);

(statearr_27228[(14)] = inst_27048);

(statearr_27228[(15)] = inst_27051);

(statearr_27228[(17)] = inst_27049);

return statearr_27228;
})();
var statearr_27229_27294 = state_27167__$1;
(statearr_27229_27294[(2)] = null);

(statearr_27229_27294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (14))){
var state_27167__$1 = state_27167;
var statearr_27230_27295 = state_27167__$1;
(statearr_27230_27295[(2)] = null);

(statearr_27230_27295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (45))){
var inst_27157 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27231_27296 = state_27167__$1;
(statearr_27231_27296[(2)] = inst_27157);

(statearr_27231_27296[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (26))){
var inst_27099 = (state_27167[(29)]);
var inst_27153 = (state_27167[(2)]);
var inst_27154 = cljs.core.seq.call(null,inst_27099);
var state_27167__$1 = (function (){var statearr_27232 = state_27167;
(statearr_27232[(31)] = inst_27153);

return statearr_27232;
})();
if(inst_27154){
var statearr_27233_27297 = state_27167__$1;
(statearr_27233_27297[(1)] = (42));

} else {
var statearr_27234_27298 = state_27167__$1;
(statearr_27234_27298[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (16))){
var inst_27068 = (state_27167[(7)]);
var inst_27070 = cljs.core.chunked_seq_QMARK_.call(null,inst_27068);
var state_27167__$1 = state_27167;
if(inst_27070){
var statearr_27235_27299 = state_27167__$1;
(statearr_27235_27299[(1)] = (19));

} else {
var statearr_27236_27300 = state_27167__$1;
(statearr_27236_27300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (38))){
var inst_27146 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27237_27301 = state_27167__$1;
(statearr_27237_27301[(2)] = inst_27146);

(statearr_27237_27301[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (30))){
var state_27167__$1 = state_27167;
var statearr_27238_27302 = state_27167__$1;
(statearr_27238_27302[(2)] = null);

(statearr_27238_27302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (10))){
var inst_27051 = (state_27167[(15)]);
var inst_27049 = (state_27167[(17)]);
var inst_27057 = cljs.core._nth.call(null,inst_27049,inst_27051);
var inst_27058 = cljs.core.nth.call(null,inst_27057,(0),null);
var inst_27059 = cljs.core.nth.call(null,inst_27057,(1),null);
var state_27167__$1 = (function (){var statearr_27239 = state_27167;
(statearr_27239[(26)] = inst_27058);

return statearr_27239;
})();
if(cljs.core.truth_(inst_27059)){
var statearr_27240_27303 = state_27167__$1;
(statearr_27240_27303[(1)] = (13));

} else {
var statearr_27241_27304 = state_27167__$1;
(statearr_27241_27304[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (18))){
var inst_27092 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27242_27305 = state_27167__$1;
(statearr_27242_27305[(2)] = inst_27092);

(statearr_27242_27305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (42))){
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27167__$1,(45),dchan);
} else {
if((state_val_27168 === (37))){
var inst_27039 = (state_27167[(10)]);
var inst_27126 = (state_27167[(25)]);
var inst_27135 = (state_27167[(23)]);
var inst_27135__$1 = cljs.core.first.call(null,inst_27126);
var inst_27136 = cljs.core.async.put_BANG_.call(null,inst_27135__$1,inst_27039,done);
var state_27167__$1 = (function (){var statearr_27243 = state_27167;
(statearr_27243[(23)] = inst_27135__$1);

return statearr_27243;
})();
if(cljs.core.truth_(inst_27136)){
var statearr_27244_27306 = state_27167__$1;
(statearr_27244_27306[(1)] = (39));

} else {
var statearr_27245_27307 = state_27167__$1;
(statearr_27245_27307[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (8))){
var inst_27050 = (state_27167[(13)]);
var inst_27051 = (state_27167[(15)]);
var inst_27053 = (inst_27051 < inst_27050);
var inst_27054 = inst_27053;
var state_27167__$1 = state_27167;
if(cljs.core.truth_(inst_27054)){
var statearr_27246_27308 = state_27167__$1;
(statearr_27246_27308[(1)] = (10));

} else {
var statearr_27247_27309 = state_27167__$1;
(statearr_27247_27309[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21345__auto___27255,cs,m,dchan,dctr,done))
;
return ((function (switch__21283__auto__,c__21345__auto___27255,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21284__auto__ = null;
var cljs$core$async$mult_$_state_machine__21284__auto____0 = (function (){
var statearr_27251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27251[(0)] = cljs$core$async$mult_$_state_machine__21284__auto__);

(statearr_27251[(1)] = (1));

return statearr_27251;
});
var cljs$core$async$mult_$_state_machine__21284__auto____1 = (function (state_27167){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27252){if((e27252 instanceof Object)){
var ex__21287__auto__ = e27252;
var statearr_27253_27310 = state_27167;
(statearr_27253_27310[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27311 = state_27167;
state_27167 = G__27311;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21284__auto__ = function(state_27167){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21284__auto____1.call(this,state_27167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21284__auto____0;
cljs$core$async$mult_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21284__auto____1;
return cljs$core$async$mult_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27255,cs,m,dchan,dctr,done))
})();
var state__21347__auto__ = (function (){var statearr_27254 = f__21346__auto__.call(null);
(statearr_27254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27255);

return statearr_27254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27255,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27313 = arguments.length;
switch (G__27313) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27316 = {};
return obj27316;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27321){
var map__27322 = p__27321;
var map__27322__$1 = ((cljs.core.seq_QMARK_.call(null,map__27322))?cljs.core.apply.call(null,cljs.core.hash_map,map__27322):map__27322);
var opts = map__27322__$1;
var statearr_27323_27326 = state;
(statearr_27323_27326[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27322,map__27322__$1,opts){
return (function (val){
var statearr_27324_27327 = state;
(statearr_27324_27327[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27322,map__27322__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27325_27328 = state;
(statearr_27325_27328[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27317){
var G__27318 = cljs.core.first.call(null,seq27317);
var seq27317__$1 = cljs.core.next.call(null,seq27317);
var G__27319 = cljs.core.first.call(null,seq27317__$1);
var seq27317__$2 = cljs.core.next.call(null,seq27317__$1);
var G__27320 = cljs.core.first.call(null,seq27317__$2);
var seq27317__$3 = cljs.core.next.call(null,seq27317__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27318,G__27319,G__27320,seq27317__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27448 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27448 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27449){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27449 = meta27449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27448.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27448.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27448.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27448.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27448.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27448.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27448.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27450){
var self__ = this;
var _27450__$1 = this;
return self__.meta27449;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27450,meta27449__$1){
var self__ = this;
var _27450__$1 = this;
return (new cljs.core.async.t27448(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27449__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27448.cljs$lang$type = true;

cljs.core.async.t27448.cljs$lang$ctorStr = "cljs.core.async/t27448";

cljs.core.async.t27448.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27448");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27448 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27448(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27449){
return (new cljs.core.async.t27448(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27449));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27448(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21345__auto___27567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27520){
var state_val_27521 = (state_27520[(1)]);
if((state_val_27521 === (7))){
var inst_27464 = (state_27520[(7)]);
var inst_27469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27464);
var state_27520__$1 = state_27520;
var statearr_27522_27568 = state_27520__$1;
(statearr_27522_27568[(2)] = inst_27469);

(statearr_27522_27568[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (20))){
var inst_27479 = (state_27520[(8)]);
var state_27520__$1 = state_27520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27520__$1,(23),out,inst_27479);
} else {
if((state_val_27521 === (1))){
var inst_27454 = (state_27520[(9)]);
var inst_27454__$1 = calc_state.call(null);
var inst_27455 = cljs.core.seq_QMARK_.call(null,inst_27454__$1);
var state_27520__$1 = (function (){var statearr_27523 = state_27520;
(statearr_27523[(9)] = inst_27454__$1);

return statearr_27523;
})();
if(inst_27455){
var statearr_27524_27569 = state_27520__$1;
(statearr_27524_27569[(1)] = (2));

} else {
var statearr_27525_27570 = state_27520__$1;
(statearr_27525_27570[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (24))){
var inst_27472 = (state_27520[(10)]);
var inst_27464 = inst_27472;
var state_27520__$1 = (function (){var statearr_27526 = state_27520;
(statearr_27526[(7)] = inst_27464);

return statearr_27526;
})();
var statearr_27527_27571 = state_27520__$1;
(statearr_27527_27571[(2)] = null);

(statearr_27527_27571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (4))){
var inst_27454 = (state_27520[(9)]);
var inst_27460 = (state_27520[(2)]);
var inst_27461 = cljs.core.get.call(null,inst_27460,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27462 = cljs.core.get.call(null,inst_27460,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27463 = cljs.core.get.call(null,inst_27460,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27464 = inst_27454;
var state_27520__$1 = (function (){var statearr_27528 = state_27520;
(statearr_27528[(11)] = inst_27462);

(statearr_27528[(12)] = inst_27463);

(statearr_27528[(7)] = inst_27464);

(statearr_27528[(13)] = inst_27461);

return statearr_27528;
})();
var statearr_27529_27572 = state_27520__$1;
(statearr_27529_27572[(2)] = null);

(statearr_27529_27572[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (15))){
var state_27520__$1 = state_27520;
var statearr_27530_27573 = state_27520__$1;
(statearr_27530_27573[(2)] = null);

(statearr_27530_27573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (21))){
var inst_27472 = (state_27520[(10)]);
var inst_27464 = inst_27472;
var state_27520__$1 = (function (){var statearr_27531 = state_27520;
(statearr_27531[(7)] = inst_27464);

return statearr_27531;
})();
var statearr_27532_27574 = state_27520__$1;
(statearr_27532_27574[(2)] = null);

(statearr_27532_27574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (13))){
var inst_27516 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27533_27575 = state_27520__$1;
(statearr_27533_27575[(2)] = inst_27516);

(statearr_27533_27575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (22))){
var inst_27514 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27534_27576 = state_27520__$1;
(statearr_27534_27576[(2)] = inst_27514);

(statearr_27534_27576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (6))){
var inst_27518 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27520__$1,inst_27518);
} else {
if((state_val_27521 === (25))){
var state_27520__$1 = state_27520;
var statearr_27535_27577 = state_27520__$1;
(statearr_27535_27577[(2)] = null);

(statearr_27535_27577[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (17))){
var inst_27494 = (state_27520[(14)]);
var state_27520__$1 = state_27520;
var statearr_27536_27578 = state_27520__$1;
(statearr_27536_27578[(2)] = inst_27494);

(statearr_27536_27578[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (3))){
var inst_27454 = (state_27520[(9)]);
var state_27520__$1 = state_27520;
var statearr_27537_27579 = state_27520__$1;
(statearr_27537_27579[(2)] = inst_27454);

(statearr_27537_27579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (12))){
var inst_27475 = (state_27520[(15)]);
var inst_27480 = (state_27520[(16)]);
var inst_27494 = (state_27520[(14)]);
var inst_27494__$1 = inst_27475.call(null,inst_27480);
var state_27520__$1 = (function (){var statearr_27538 = state_27520;
(statearr_27538[(14)] = inst_27494__$1);

return statearr_27538;
})();
if(cljs.core.truth_(inst_27494__$1)){
var statearr_27539_27580 = state_27520__$1;
(statearr_27539_27580[(1)] = (17));

} else {
var statearr_27540_27581 = state_27520__$1;
(statearr_27540_27581[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (2))){
var inst_27454 = (state_27520[(9)]);
var inst_27457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27454);
var state_27520__$1 = state_27520;
var statearr_27541_27582 = state_27520__$1;
(statearr_27541_27582[(2)] = inst_27457);

(statearr_27541_27582[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (23))){
var inst_27505 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
if(cljs.core.truth_(inst_27505)){
var statearr_27542_27583 = state_27520__$1;
(statearr_27542_27583[(1)] = (24));

} else {
var statearr_27543_27584 = state_27520__$1;
(statearr_27543_27584[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (19))){
var inst_27502 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
if(cljs.core.truth_(inst_27502)){
var statearr_27544_27585 = state_27520__$1;
(statearr_27544_27585[(1)] = (20));

} else {
var statearr_27545_27586 = state_27520__$1;
(statearr_27545_27586[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (11))){
var inst_27479 = (state_27520[(8)]);
var inst_27485 = (inst_27479 == null);
var state_27520__$1 = state_27520;
if(cljs.core.truth_(inst_27485)){
var statearr_27546_27587 = state_27520__$1;
(statearr_27546_27587[(1)] = (14));

} else {
var statearr_27547_27588 = state_27520__$1;
(statearr_27547_27588[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (9))){
var inst_27472 = (state_27520[(10)]);
var inst_27472__$1 = (state_27520[(2)]);
var inst_27473 = cljs.core.get.call(null,inst_27472__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27474 = cljs.core.get.call(null,inst_27472__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27475 = cljs.core.get.call(null,inst_27472__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27520__$1 = (function (){var statearr_27548 = state_27520;
(statearr_27548[(17)] = inst_27474);

(statearr_27548[(15)] = inst_27475);

(statearr_27548[(10)] = inst_27472__$1);

return statearr_27548;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27520__$1,(10),inst_27473);
} else {
if((state_val_27521 === (5))){
var inst_27464 = (state_27520[(7)]);
var inst_27467 = cljs.core.seq_QMARK_.call(null,inst_27464);
var state_27520__$1 = state_27520;
if(inst_27467){
var statearr_27549_27589 = state_27520__$1;
(statearr_27549_27589[(1)] = (7));

} else {
var statearr_27550_27590 = state_27520__$1;
(statearr_27550_27590[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (14))){
var inst_27480 = (state_27520[(16)]);
var inst_27487 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27480);
var state_27520__$1 = state_27520;
var statearr_27551_27591 = state_27520__$1;
(statearr_27551_27591[(2)] = inst_27487);

(statearr_27551_27591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (26))){
var inst_27510 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27552_27592 = state_27520__$1;
(statearr_27552_27592[(2)] = inst_27510);

(statearr_27552_27592[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (16))){
var inst_27490 = (state_27520[(2)]);
var inst_27491 = calc_state.call(null);
var inst_27464 = inst_27491;
var state_27520__$1 = (function (){var statearr_27553 = state_27520;
(statearr_27553[(7)] = inst_27464);

(statearr_27553[(18)] = inst_27490);

return statearr_27553;
})();
var statearr_27554_27593 = state_27520__$1;
(statearr_27554_27593[(2)] = null);

(statearr_27554_27593[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (10))){
var inst_27480 = (state_27520[(16)]);
var inst_27479 = (state_27520[(8)]);
var inst_27478 = (state_27520[(2)]);
var inst_27479__$1 = cljs.core.nth.call(null,inst_27478,(0),null);
var inst_27480__$1 = cljs.core.nth.call(null,inst_27478,(1),null);
var inst_27481 = (inst_27479__$1 == null);
var inst_27482 = cljs.core._EQ_.call(null,inst_27480__$1,change);
var inst_27483 = (inst_27481) || (inst_27482);
var state_27520__$1 = (function (){var statearr_27555 = state_27520;
(statearr_27555[(16)] = inst_27480__$1);

(statearr_27555[(8)] = inst_27479__$1);

return statearr_27555;
})();
if(cljs.core.truth_(inst_27483)){
var statearr_27556_27594 = state_27520__$1;
(statearr_27556_27594[(1)] = (11));

} else {
var statearr_27557_27595 = state_27520__$1;
(statearr_27557_27595[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (18))){
var inst_27474 = (state_27520[(17)]);
var inst_27475 = (state_27520[(15)]);
var inst_27480 = (state_27520[(16)]);
var inst_27497 = cljs.core.empty_QMARK_.call(null,inst_27475);
var inst_27498 = inst_27474.call(null,inst_27480);
var inst_27499 = cljs.core.not.call(null,inst_27498);
var inst_27500 = (inst_27497) && (inst_27499);
var state_27520__$1 = state_27520;
var statearr_27558_27596 = state_27520__$1;
(statearr_27558_27596[(2)] = inst_27500);

(statearr_27558_27596[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (8))){
var inst_27464 = (state_27520[(7)]);
var state_27520__$1 = state_27520;
var statearr_27559_27597 = state_27520__$1;
(statearr_27559_27597[(2)] = inst_27464);

(statearr_27559_27597[(1)] = (9));


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
});})(c__21345__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21283__auto__,c__21345__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21284__auto__ = null;
var cljs$core$async$mix_$_state_machine__21284__auto____0 = (function (){
var statearr_27563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27563[(0)] = cljs$core$async$mix_$_state_machine__21284__auto__);

(statearr_27563[(1)] = (1));

return statearr_27563;
});
var cljs$core$async$mix_$_state_machine__21284__auto____1 = (function (state_27520){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27564){if((e27564 instanceof Object)){
var ex__21287__auto__ = e27564;
var statearr_27565_27598 = state_27520;
(statearr_27565_27598[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27599 = state_27520;
state_27520 = G__27599;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21284__auto__ = function(state_27520){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21284__auto____1.call(this,state_27520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21284__auto____0;
cljs$core$async$mix_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21284__auto____1;
return cljs$core$async$mix_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21347__auto__ = (function (){var statearr_27566 = f__21346__auto__.call(null);
(statearr_27566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27567);

return statearr_27566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27601 = {};
return obj27601;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27603 = arguments.length;
switch (G__27603) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__27607 = arguments.length;
switch (G__27607) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18121__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18121__auto__,mults){
return (function (p1__27605_SHARP_){
if(cljs.core.truth_(p1__27605_SHARP_.call(null,topic))){
return p1__27605_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27605_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18121__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27608 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27608 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta27609){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta27609 = meta27609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27608.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27608.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27608.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27608.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27610){
var self__ = this;
var _27610__$1 = this;
return self__.meta27609;
});})(mults,ensure_mult))
;

cljs.core.async.t27608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27610,meta27609__$1){
var self__ = this;
var _27610__$1 = this;
return (new cljs.core.async.t27608(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta27609__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27608.cljs$lang$type = true;

cljs.core.async.t27608.cljs$lang$ctorStr = "cljs.core.async/t27608";

cljs.core.async.t27608.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27608");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27608 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27608(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27609){
return (new cljs.core.async.t27608(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27609));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27608(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21345__auto___27731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27731,mults,ensure_mult,p){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27731,mults,ensure_mult,p){
return (function (state_27682){
var state_val_27683 = (state_27682[(1)]);
if((state_val_27683 === (7))){
var inst_27678 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
var statearr_27684_27732 = state_27682__$1;
(statearr_27684_27732[(2)] = inst_27678);

(statearr_27684_27732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (20))){
var state_27682__$1 = state_27682;
var statearr_27685_27733 = state_27682__$1;
(statearr_27685_27733[(2)] = null);

(statearr_27685_27733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (1))){
var state_27682__$1 = state_27682;
var statearr_27686_27734 = state_27682__$1;
(statearr_27686_27734[(2)] = null);

(statearr_27686_27734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (24))){
var inst_27661 = (state_27682[(7)]);
var inst_27670 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27661);
var state_27682__$1 = state_27682;
var statearr_27687_27735 = state_27682__$1;
(statearr_27687_27735[(2)] = inst_27670);

(statearr_27687_27735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (4))){
var inst_27613 = (state_27682[(8)]);
var inst_27613__$1 = (state_27682[(2)]);
var inst_27614 = (inst_27613__$1 == null);
var state_27682__$1 = (function (){var statearr_27688 = state_27682;
(statearr_27688[(8)] = inst_27613__$1);

return statearr_27688;
})();
if(cljs.core.truth_(inst_27614)){
var statearr_27689_27736 = state_27682__$1;
(statearr_27689_27736[(1)] = (5));

} else {
var statearr_27690_27737 = state_27682__$1;
(statearr_27690_27737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (15))){
var inst_27655 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
var statearr_27691_27738 = state_27682__$1;
(statearr_27691_27738[(2)] = inst_27655);

(statearr_27691_27738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (21))){
var inst_27675 = (state_27682[(2)]);
var state_27682__$1 = (function (){var statearr_27692 = state_27682;
(statearr_27692[(9)] = inst_27675);

return statearr_27692;
})();
var statearr_27693_27739 = state_27682__$1;
(statearr_27693_27739[(2)] = null);

(statearr_27693_27739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (13))){
var inst_27637 = (state_27682[(10)]);
var inst_27639 = cljs.core.chunked_seq_QMARK_.call(null,inst_27637);
var state_27682__$1 = state_27682;
if(inst_27639){
var statearr_27694_27740 = state_27682__$1;
(statearr_27694_27740[(1)] = (16));

} else {
var statearr_27695_27741 = state_27682__$1;
(statearr_27695_27741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (22))){
var inst_27667 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
if(cljs.core.truth_(inst_27667)){
var statearr_27696_27742 = state_27682__$1;
(statearr_27696_27742[(1)] = (23));

} else {
var statearr_27697_27743 = state_27682__$1;
(statearr_27697_27743[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (6))){
var inst_27663 = (state_27682[(11)]);
var inst_27613 = (state_27682[(8)]);
var inst_27661 = (state_27682[(7)]);
var inst_27661__$1 = topic_fn.call(null,inst_27613);
var inst_27662 = cljs.core.deref.call(null,mults);
var inst_27663__$1 = cljs.core.get.call(null,inst_27662,inst_27661__$1);
var state_27682__$1 = (function (){var statearr_27698 = state_27682;
(statearr_27698[(11)] = inst_27663__$1);

(statearr_27698[(7)] = inst_27661__$1);

return statearr_27698;
})();
if(cljs.core.truth_(inst_27663__$1)){
var statearr_27699_27744 = state_27682__$1;
(statearr_27699_27744[(1)] = (19));

} else {
var statearr_27700_27745 = state_27682__$1;
(statearr_27700_27745[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (25))){
var inst_27672 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
var statearr_27701_27746 = state_27682__$1;
(statearr_27701_27746[(2)] = inst_27672);

(statearr_27701_27746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (17))){
var inst_27637 = (state_27682[(10)]);
var inst_27646 = cljs.core.first.call(null,inst_27637);
var inst_27647 = cljs.core.async.muxch_STAR_.call(null,inst_27646);
var inst_27648 = cljs.core.async.close_BANG_.call(null,inst_27647);
var inst_27649 = cljs.core.next.call(null,inst_27637);
var inst_27623 = inst_27649;
var inst_27624 = null;
var inst_27625 = (0);
var inst_27626 = (0);
var state_27682__$1 = (function (){var statearr_27702 = state_27682;
(statearr_27702[(12)] = inst_27624);

(statearr_27702[(13)] = inst_27623);

(statearr_27702[(14)] = inst_27648);

(statearr_27702[(15)] = inst_27625);

(statearr_27702[(16)] = inst_27626);

return statearr_27702;
})();
var statearr_27703_27747 = state_27682__$1;
(statearr_27703_27747[(2)] = null);

(statearr_27703_27747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (3))){
var inst_27680 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27682__$1,inst_27680);
} else {
if((state_val_27683 === (12))){
var inst_27657 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
var statearr_27704_27748 = state_27682__$1;
(statearr_27704_27748[(2)] = inst_27657);

(statearr_27704_27748[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (2))){
var state_27682__$1 = state_27682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27682__$1,(4),ch);
} else {
if((state_val_27683 === (23))){
var state_27682__$1 = state_27682;
var statearr_27705_27749 = state_27682__$1;
(statearr_27705_27749[(2)] = null);

(statearr_27705_27749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (19))){
var inst_27663 = (state_27682[(11)]);
var inst_27613 = (state_27682[(8)]);
var inst_27665 = cljs.core.async.muxch_STAR_.call(null,inst_27663);
var state_27682__$1 = state_27682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27682__$1,(22),inst_27665,inst_27613);
} else {
if((state_val_27683 === (11))){
var inst_27623 = (state_27682[(13)]);
var inst_27637 = (state_27682[(10)]);
var inst_27637__$1 = cljs.core.seq.call(null,inst_27623);
var state_27682__$1 = (function (){var statearr_27706 = state_27682;
(statearr_27706[(10)] = inst_27637__$1);

return statearr_27706;
})();
if(inst_27637__$1){
var statearr_27707_27750 = state_27682__$1;
(statearr_27707_27750[(1)] = (13));

} else {
var statearr_27708_27751 = state_27682__$1;
(statearr_27708_27751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (9))){
var inst_27659 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
var statearr_27709_27752 = state_27682__$1;
(statearr_27709_27752[(2)] = inst_27659);

(statearr_27709_27752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (5))){
var inst_27620 = cljs.core.deref.call(null,mults);
var inst_27621 = cljs.core.vals.call(null,inst_27620);
var inst_27622 = cljs.core.seq.call(null,inst_27621);
var inst_27623 = inst_27622;
var inst_27624 = null;
var inst_27625 = (0);
var inst_27626 = (0);
var state_27682__$1 = (function (){var statearr_27710 = state_27682;
(statearr_27710[(12)] = inst_27624);

(statearr_27710[(13)] = inst_27623);

(statearr_27710[(15)] = inst_27625);

(statearr_27710[(16)] = inst_27626);

return statearr_27710;
})();
var statearr_27711_27753 = state_27682__$1;
(statearr_27711_27753[(2)] = null);

(statearr_27711_27753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (14))){
var state_27682__$1 = state_27682;
var statearr_27715_27754 = state_27682__$1;
(statearr_27715_27754[(2)] = null);

(statearr_27715_27754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (16))){
var inst_27637 = (state_27682[(10)]);
var inst_27641 = cljs.core.chunk_first.call(null,inst_27637);
var inst_27642 = cljs.core.chunk_rest.call(null,inst_27637);
var inst_27643 = cljs.core.count.call(null,inst_27641);
var inst_27623 = inst_27642;
var inst_27624 = inst_27641;
var inst_27625 = inst_27643;
var inst_27626 = (0);
var state_27682__$1 = (function (){var statearr_27716 = state_27682;
(statearr_27716[(12)] = inst_27624);

(statearr_27716[(13)] = inst_27623);

(statearr_27716[(15)] = inst_27625);

(statearr_27716[(16)] = inst_27626);

return statearr_27716;
})();
var statearr_27717_27755 = state_27682__$1;
(statearr_27717_27755[(2)] = null);

(statearr_27717_27755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (10))){
var inst_27624 = (state_27682[(12)]);
var inst_27623 = (state_27682[(13)]);
var inst_27625 = (state_27682[(15)]);
var inst_27626 = (state_27682[(16)]);
var inst_27631 = cljs.core._nth.call(null,inst_27624,inst_27626);
var inst_27632 = cljs.core.async.muxch_STAR_.call(null,inst_27631);
var inst_27633 = cljs.core.async.close_BANG_.call(null,inst_27632);
var inst_27634 = (inst_27626 + (1));
var tmp27712 = inst_27624;
var tmp27713 = inst_27623;
var tmp27714 = inst_27625;
var inst_27623__$1 = tmp27713;
var inst_27624__$1 = tmp27712;
var inst_27625__$1 = tmp27714;
var inst_27626__$1 = inst_27634;
var state_27682__$1 = (function (){var statearr_27718 = state_27682;
(statearr_27718[(17)] = inst_27633);

(statearr_27718[(12)] = inst_27624__$1);

(statearr_27718[(13)] = inst_27623__$1);

(statearr_27718[(15)] = inst_27625__$1);

(statearr_27718[(16)] = inst_27626__$1);

return statearr_27718;
})();
var statearr_27719_27756 = state_27682__$1;
(statearr_27719_27756[(2)] = null);

(statearr_27719_27756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (18))){
var inst_27652 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
var statearr_27720_27757 = state_27682__$1;
(statearr_27720_27757[(2)] = inst_27652);

(statearr_27720_27757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (8))){
var inst_27625 = (state_27682[(15)]);
var inst_27626 = (state_27682[(16)]);
var inst_27628 = (inst_27626 < inst_27625);
var inst_27629 = inst_27628;
var state_27682__$1 = state_27682;
if(cljs.core.truth_(inst_27629)){
var statearr_27721_27758 = state_27682__$1;
(statearr_27721_27758[(1)] = (10));

} else {
var statearr_27722_27759 = state_27682__$1;
(statearr_27722_27759[(1)] = (11));

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
});})(c__21345__auto___27731,mults,ensure_mult,p))
;
return ((function (switch__21283__auto__,c__21345__auto___27731,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27726[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27726[(1)] = (1));

return statearr_27726;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27682){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27727){if((e27727 instanceof Object)){
var ex__21287__auto__ = e27727;
var statearr_27728_27760 = state_27682;
(statearr_27728_27760[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27761 = state_27682;
state_27682 = G__27761;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27731,mults,ensure_mult,p))
})();
var state__21347__auto__ = (function (){var statearr_27729 = f__21346__auto__.call(null);
(statearr_27729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27731);

return statearr_27729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27731,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__27763 = arguments.length;
switch (G__27763) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__27766 = arguments.length;
switch (G__27766) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__27769 = arguments.length;
switch (G__27769) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21345__auto___27839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27839,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27839,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27808){
var state_val_27809 = (state_27808[(1)]);
if((state_val_27809 === (7))){
var state_27808__$1 = state_27808;
var statearr_27810_27840 = state_27808__$1;
(statearr_27810_27840[(2)] = null);

(statearr_27810_27840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (1))){
var state_27808__$1 = state_27808;
var statearr_27811_27841 = state_27808__$1;
(statearr_27811_27841[(2)] = null);

(statearr_27811_27841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (4))){
var inst_27772 = (state_27808[(7)]);
var inst_27774 = (inst_27772 < cnt);
var state_27808__$1 = state_27808;
if(cljs.core.truth_(inst_27774)){
var statearr_27812_27842 = state_27808__$1;
(statearr_27812_27842[(1)] = (6));

} else {
var statearr_27813_27843 = state_27808__$1;
(statearr_27813_27843[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (15))){
var inst_27804 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
var statearr_27814_27844 = state_27808__$1;
(statearr_27814_27844[(2)] = inst_27804);

(statearr_27814_27844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (13))){
var inst_27797 = cljs.core.async.close_BANG_.call(null,out);
var state_27808__$1 = state_27808;
var statearr_27815_27845 = state_27808__$1;
(statearr_27815_27845[(2)] = inst_27797);

(statearr_27815_27845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (6))){
var state_27808__$1 = state_27808;
var statearr_27816_27846 = state_27808__$1;
(statearr_27816_27846[(2)] = null);

(statearr_27816_27846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (3))){
var inst_27806 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27808__$1,inst_27806);
} else {
if((state_val_27809 === (12))){
var inst_27794 = (state_27808[(8)]);
var inst_27794__$1 = (state_27808[(2)]);
var inst_27795 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27794__$1);
var state_27808__$1 = (function (){var statearr_27817 = state_27808;
(statearr_27817[(8)] = inst_27794__$1);

return statearr_27817;
})();
if(cljs.core.truth_(inst_27795)){
var statearr_27818_27847 = state_27808__$1;
(statearr_27818_27847[(1)] = (13));

} else {
var statearr_27819_27848 = state_27808__$1;
(statearr_27819_27848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (2))){
var inst_27771 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27772 = (0);
var state_27808__$1 = (function (){var statearr_27820 = state_27808;
(statearr_27820[(9)] = inst_27771);

(statearr_27820[(7)] = inst_27772);

return statearr_27820;
})();
var statearr_27821_27849 = state_27808__$1;
(statearr_27821_27849[(2)] = null);

(statearr_27821_27849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (11))){
var inst_27772 = (state_27808[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27808,(10),Object,null,(9));
var inst_27781 = chs__$1.call(null,inst_27772);
var inst_27782 = done.call(null,inst_27772);
var inst_27783 = cljs.core.async.take_BANG_.call(null,inst_27781,inst_27782);
var state_27808__$1 = state_27808;
var statearr_27822_27850 = state_27808__$1;
(statearr_27822_27850[(2)] = inst_27783);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27808__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (9))){
var inst_27772 = (state_27808[(7)]);
var inst_27785 = (state_27808[(2)]);
var inst_27786 = (inst_27772 + (1));
var inst_27772__$1 = inst_27786;
var state_27808__$1 = (function (){var statearr_27823 = state_27808;
(statearr_27823[(10)] = inst_27785);

(statearr_27823[(7)] = inst_27772__$1);

return statearr_27823;
})();
var statearr_27824_27851 = state_27808__$1;
(statearr_27824_27851[(2)] = null);

(statearr_27824_27851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (5))){
var inst_27792 = (state_27808[(2)]);
var state_27808__$1 = (function (){var statearr_27825 = state_27808;
(statearr_27825[(11)] = inst_27792);

return statearr_27825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27808__$1,(12),dchan);
} else {
if((state_val_27809 === (14))){
var inst_27794 = (state_27808[(8)]);
var inst_27799 = cljs.core.apply.call(null,f,inst_27794);
var state_27808__$1 = state_27808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27808__$1,(16),out,inst_27799);
} else {
if((state_val_27809 === (16))){
var inst_27801 = (state_27808[(2)]);
var state_27808__$1 = (function (){var statearr_27826 = state_27808;
(statearr_27826[(12)] = inst_27801);

return statearr_27826;
})();
var statearr_27827_27852 = state_27808__$1;
(statearr_27827_27852[(2)] = null);

(statearr_27827_27852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (10))){
var inst_27776 = (state_27808[(2)]);
var inst_27777 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27808__$1 = (function (){var statearr_27828 = state_27808;
(statearr_27828[(13)] = inst_27776);

return statearr_27828;
})();
var statearr_27829_27853 = state_27808__$1;
(statearr_27829_27853[(2)] = inst_27777);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27808__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (8))){
var inst_27790 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
var statearr_27830_27854 = state_27808__$1;
(statearr_27830_27854[(2)] = inst_27790);

(statearr_27830_27854[(1)] = (5));


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
});})(c__21345__auto___27839,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21283__auto__,c__21345__auto___27839,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27834[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27834[(1)] = (1));

return statearr_27834;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27808){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27835){if((e27835 instanceof Object)){
var ex__21287__auto__ = e27835;
var statearr_27836_27855 = state_27808;
(statearr_27836_27855[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27856 = state_27808;
state_27808 = G__27856;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27839,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21347__auto__ = (function (){var statearr_27837 = f__21346__auto__.call(null);
(statearr_27837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27839);

return statearr_27837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27839,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__27859 = arguments.length;
switch (G__27859) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___27914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27914,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27914,out){
return (function (state_27889){
var state_val_27890 = (state_27889[(1)]);
if((state_val_27890 === (7))){
var inst_27868 = (state_27889[(7)]);
var inst_27869 = (state_27889[(8)]);
var inst_27868__$1 = (state_27889[(2)]);
var inst_27869__$1 = cljs.core.nth.call(null,inst_27868__$1,(0),null);
var inst_27870 = cljs.core.nth.call(null,inst_27868__$1,(1),null);
var inst_27871 = (inst_27869__$1 == null);
var state_27889__$1 = (function (){var statearr_27891 = state_27889;
(statearr_27891[(7)] = inst_27868__$1);

(statearr_27891[(8)] = inst_27869__$1);

(statearr_27891[(9)] = inst_27870);

return statearr_27891;
})();
if(cljs.core.truth_(inst_27871)){
var statearr_27892_27915 = state_27889__$1;
(statearr_27892_27915[(1)] = (8));

} else {
var statearr_27893_27916 = state_27889__$1;
(statearr_27893_27916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (1))){
var inst_27860 = cljs.core.vec.call(null,chs);
var inst_27861 = inst_27860;
var state_27889__$1 = (function (){var statearr_27894 = state_27889;
(statearr_27894[(10)] = inst_27861);

return statearr_27894;
})();
var statearr_27895_27917 = state_27889__$1;
(statearr_27895_27917[(2)] = null);

(statearr_27895_27917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (4))){
var inst_27861 = (state_27889[(10)]);
var state_27889__$1 = state_27889;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27889__$1,(7),inst_27861);
} else {
if((state_val_27890 === (6))){
var inst_27885 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
var statearr_27896_27918 = state_27889__$1;
(statearr_27896_27918[(2)] = inst_27885);

(statearr_27896_27918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (3))){
var inst_27887 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27889__$1,inst_27887);
} else {
if((state_val_27890 === (2))){
var inst_27861 = (state_27889[(10)]);
var inst_27863 = cljs.core.count.call(null,inst_27861);
var inst_27864 = (inst_27863 > (0));
var state_27889__$1 = state_27889;
if(cljs.core.truth_(inst_27864)){
var statearr_27898_27919 = state_27889__$1;
(statearr_27898_27919[(1)] = (4));

} else {
var statearr_27899_27920 = state_27889__$1;
(statearr_27899_27920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (11))){
var inst_27861 = (state_27889[(10)]);
var inst_27878 = (state_27889[(2)]);
var tmp27897 = inst_27861;
var inst_27861__$1 = tmp27897;
var state_27889__$1 = (function (){var statearr_27900 = state_27889;
(statearr_27900[(10)] = inst_27861__$1);

(statearr_27900[(11)] = inst_27878);

return statearr_27900;
})();
var statearr_27901_27921 = state_27889__$1;
(statearr_27901_27921[(2)] = null);

(statearr_27901_27921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (9))){
var inst_27869 = (state_27889[(8)]);
var state_27889__$1 = state_27889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27889__$1,(11),out,inst_27869);
} else {
if((state_val_27890 === (5))){
var inst_27883 = cljs.core.async.close_BANG_.call(null,out);
var state_27889__$1 = state_27889;
var statearr_27902_27922 = state_27889__$1;
(statearr_27902_27922[(2)] = inst_27883);

(statearr_27902_27922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (10))){
var inst_27881 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
var statearr_27903_27923 = state_27889__$1;
(statearr_27903_27923[(2)] = inst_27881);

(statearr_27903_27923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (8))){
var inst_27868 = (state_27889[(7)]);
var inst_27869 = (state_27889[(8)]);
var inst_27870 = (state_27889[(9)]);
var inst_27861 = (state_27889[(10)]);
var inst_27873 = (function (){var c = inst_27870;
var v = inst_27869;
var vec__27866 = inst_27868;
var cs = inst_27861;
return ((function (c,v,vec__27866,cs,inst_27868,inst_27869,inst_27870,inst_27861,state_val_27890,c__21345__auto___27914,out){
return (function (p1__27857_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27857_SHARP_);
});
;})(c,v,vec__27866,cs,inst_27868,inst_27869,inst_27870,inst_27861,state_val_27890,c__21345__auto___27914,out))
})();
var inst_27874 = cljs.core.filterv.call(null,inst_27873,inst_27861);
var inst_27861__$1 = inst_27874;
var state_27889__$1 = (function (){var statearr_27904 = state_27889;
(statearr_27904[(10)] = inst_27861__$1);

return statearr_27904;
})();
var statearr_27905_27924 = state_27889__$1;
(statearr_27905_27924[(2)] = null);

(statearr_27905_27924[(1)] = (2));


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
});})(c__21345__auto___27914,out))
;
return ((function (switch__21283__auto__,c__21345__auto___27914,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27909 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27909[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27909[(1)] = (1));

return statearr_27909;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27889){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27910){if((e27910 instanceof Object)){
var ex__21287__auto__ = e27910;
var statearr_27911_27925 = state_27889;
(statearr_27911_27925[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27926 = state_27889;
state_27889 = G__27926;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27914,out))
})();
var state__21347__auto__ = (function (){var statearr_27912 = f__21346__auto__.call(null);
(statearr_27912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27914);

return statearr_27912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27914,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27928 = arguments.length;
switch (G__27928) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___27976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27976,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27976,out){
return (function (state_27952){
var state_val_27953 = (state_27952[(1)]);
if((state_val_27953 === (7))){
var inst_27934 = (state_27952[(7)]);
var inst_27934__$1 = (state_27952[(2)]);
var inst_27935 = (inst_27934__$1 == null);
var inst_27936 = cljs.core.not.call(null,inst_27935);
var state_27952__$1 = (function (){var statearr_27954 = state_27952;
(statearr_27954[(7)] = inst_27934__$1);

return statearr_27954;
})();
if(inst_27936){
var statearr_27955_27977 = state_27952__$1;
(statearr_27955_27977[(1)] = (8));

} else {
var statearr_27956_27978 = state_27952__$1;
(statearr_27956_27978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (1))){
var inst_27929 = (0);
var state_27952__$1 = (function (){var statearr_27957 = state_27952;
(statearr_27957[(8)] = inst_27929);

return statearr_27957;
})();
var statearr_27958_27979 = state_27952__$1;
(statearr_27958_27979[(2)] = null);

(statearr_27958_27979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (4))){
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27952__$1,(7),ch);
} else {
if((state_val_27953 === (6))){
var inst_27947 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27959_27980 = state_27952__$1;
(statearr_27959_27980[(2)] = inst_27947);

(statearr_27959_27980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (3))){
var inst_27949 = (state_27952[(2)]);
var inst_27950 = cljs.core.async.close_BANG_.call(null,out);
var state_27952__$1 = (function (){var statearr_27960 = state_27952;
(statearr_27960[(9)] = inst_27949);

return statearr_27960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27952__$1,inst_27950);
} else {
if((state_val_27953 === (2))){
var inst_27929 = (state_27952[(8)]);
var inst_27931 = (inst_27929 < n);
var state_27952__$1 = state_27952;
if(cljs.core.truth_(inst_27931)){
var statearr_27961_27981 = state_27952__$1;
(statearr_27961_27981[(1)] = (4));

} else {
var statearr_27962_27982 = state_27952__$1;
(statearr_27962_27982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (11))){
var inst_27929 = (state_27952[(8)]);
var inst_27939 = (state_27952[(2)]);
var inst_27940 = (inst_27929 + (1));
var inst_27929__$1 = inst_27940;
var state_27952__$1 = (function (){var statearr_27963 = state_27952;
(statearr_27963[(8)] = inst_27929__$1);

(statearr_27963[(10)] = inst_27939);

return statearr_27963;
})();
var statearr_27964_27983 = state_27952__$1;
(statearr_27964_27983[(2)] = null);

(statearr_27964_27983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (9))){
var state_27952__$1 = state_27952;
var statearr_27965_27984 = state_27952__$1;
(statearr_27965_27984[(2)] = null);

(statearr_27965_27984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (5))){
var state_27952__$1 = state_27952;
var statearr_27966_27985 = state_27952__$1;
(statearr_27966_27985[(2)] = null);

(statearr_27966_27985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (10))){
var inst_27944 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27967_27986 = state_27952__$1;
(statearr_27967_27986[(2)] = inst_27944);

(statearr_27967_27986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (8))){
var inst_27934 = (state_27952[(7)]);
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27952__$1,(11),out,inst_27934);
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
});})(c__21345__auto___27976,out))
;
return ((function (switch__21283__auto__,c__21345__auto___27976,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27971[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27971[(1)] = (1));

return statearr_27971;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27952){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27972){if((e27972 instanceof Object)){
var ex__21287__auto__ = e27972;
var statearr_27973_27987 = state_27952;
(statearr_27973_27987[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27988 = state_27952;
state_27952 = G__27988;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27976,out))
})();
var state__21347__auto__ = (function (){var statearr_27974 = f__21346__auto__.call(null);
(statearr_27974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27976);

return statearr_27974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27976,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27996 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27996 = (function (ch,f,map_LT_,meta27997){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27997 = meta27997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27996.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27996.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27999 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27999 = (function (fn1,_,meta27997,map_LT_,f,ch,meta28000){
this.fn1 = fn1;
this._ = _;
this.meta27997 = meta27997;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28000 = meta28000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27989_SHARP_){
return f1.call(null,(((p1__27989_SHARP_ == null))?null:self__.f.call(null,p1__27989_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28001){
var self__ = this;
var _28001__$1 = this;
return self__.meta28000;
});})(___$1))
;

cljs.core.async.t27999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28001,meta28000__$1){
var self__ = this;
var _28001__$1 = this;
return (new cljs.core.async.t27999(self__.fn1,self__._,self__.meta27997,self__.map_LT_,self__.f,self__.ch,meta28000__$1));
});})(___$1))
;

cljs.core.async.t27999.cljs$lang$type = true;

cljs.core.async.t27999.cljs$lang$ctorStr = "cljs.core.async/t27999";

cljs.core.async.t27999.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27999");
});})(___$1))
;

cljs.core.async.__GT_t27999 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27999(fn1__$1,___$2,meta27997__$1,map_LT___$1,f__$1,ch__$1,meta28000){
return (new cljs.core.async.t27999(fn1__$1,___$2,meta27997__$1,map_LT___$1,f__$1,ch__$1,meta28000));
});})(___$1))
;

}

return (new cljs.core.async.t27999(fn1,___$1,self__.meta27997,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18109__auto__ = ret;
if(cljs.core.truth_(and__18109__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18109__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27996.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27996.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27998){
var self__ = this;
var _27998__$1 = this;
return self__.meta27997;
});

cljs.core.async.t27996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27998,meta27997__$1){
var self__ = this;
var _27998__$1 = this;
return (new cljs.core.async.t27996(self__.ch,self__.f,self__.map_LT_,meta27997__$1));
});

cljs.core.async.t27996.cljs$lang$type = true;

cljs.core.async.t27996.cljs$lang$ctorStr = "cljs.core.async/t27996";

cljs.core.async.t27996.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27996");
});

cljs.core.async.__GT_t27996 = (function cljs$core$async$map_LT__$___GT_t27996(ch__$1,f__$1,map_LT___$1,meta27997){
return (new cljs.core.async.t27996(ch__$1,f__$1,map_LT___$1,meta27997));
});

}

return (new cljs.core.async.t27996(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28005 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28005 = (function (ch,f,map_GT_,meta28006){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28006 = meta28006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28005.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28005.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28005.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28007){
var self__ = this;
var _28007__$1 = this;
return self__.meta28006;
});

cljs.core.async.t28005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28007,meta28006__$1){
var self__ = this;
var _28007__$1 = this;
return (new cljs.core.async.t28005(self__.ch,self__.f,self__.map_GT_,meta28006__$1));
});

cljs.core.async.t28005.cljs$lang$type = true;

cljs.core.async.t28005.cljs$lang$ctorStr = "cljs.core.async/t28005";

cljs.core.async.t28005.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28005");
});

cljs.core.async.__GT_t28005 = (function cljs$core$async$map_GT__$___GT_t28005(ch__$1,f__$1,map_GT___$1,meta28006){
return (new cljs.core.async.t28005(ch__$1,f__$1,map_GT___$1,meta28006));
});

}

return (new cljs.core.async.t28005(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28011 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28011 = (function (ch,p,filter_GT_,meta28012){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28012 = meta28012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28011.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28011.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28011.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28013){
var self__ = this;
var _28013__$1 = this;
return self__.meta28012;
});

cljs.core.async.t28011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28013,meta28012__$1){
var self__ = this;
var _28013__$1 = this;
return (new cljs.core.async.t28011(self__.ch,self__.p,self__.filter_GT_,meta28012__$1));
});

cljs.core.async.t28011.cljs$lang$type = true;

cljs.core.async.t28011.cljs$lang$ctorStr = "cljs.core.async/t28011";

cljs.core.async.t28011.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28011");
});

cljs.core.async.__GT_t28011 = (function cljs$core$async$filter_GT__$___GT_t28011(ch__$1,p__$1,filter_GT___$1,meta28012){
return (new cljs.core.async.t28011(ch__$1,p__$1,filter_GT___$1,meta28012));
});

}

return (new cljs.core.async.t28011(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28015 = arguments.length;
switch (G__28015) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___28058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28058,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28058,out){
return (function (state_28036){
var state_val_28037 = (state_28036[(1)]);
if((state_val_28037 === (7))){
var inst_28032 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28038_28059 = state_28036__$1;
(statearr_28038_28059[(2)] = inst_28032);

(statearr_28038_28059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (1))){
var state_28036__$1 = state_28036;
var statearr_28039_28060 = state_28036__$1;
(statearr_28039_28060[(2)] = null);

(statearr_28039_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (4))){
var inst_28018 = (state_28036[(7)]);
var inst_28018__$1 = (state_28036[(2)]);
var inst_28019 = (inst_28018__$1 == null);
var state_28036__$1 = (function (){var statearr_28040 = state_28036;
(statearr_28040[(7)] = inst_28018__$1);

return statearr_28040;
})();
if(cljs.core.truth_(inst_28019)){
var statearr_28041_28061 = state_28036__$1;
(statearr_28041_28061[(1)] = (5));

} else {
var statearr_28042_28062 = state_28036__$1;
(statearr_28042_28062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (6))){
var inst_28018 = (state_28036[(7)]);
var inst_28023 = p.call(null,inst_28018);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_28023)){
var statearr_28043_28063 = state_28036__$1;
(statearr_28043_28063[(1)] = (8));

} else {
var statearr_28044_28064 = state_28036__$1;
(statearr_28044_28064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (3))){
var inst_28034 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28036__$1,inst_28034);
} else {
if((state_val_28037 === (2))){
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(4),ch);
} else {
if((state_val_28037 === (11))){
var inst_28026 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28045_28065 = state_28036__$1;
(statearr_28045_28065[(2)] = inst_28026);

(statearr_28045_28065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (9))){
var state_28036__$1 = state_28036;
var statearr_28046_28066 = state_28036__$1;
(statearr_28046_28066[(2)] = null);

(statearr_28046_28066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (5))){
var inst_28021 = cljs.core.async.close_BANG_.call(null,out);
var state_28036__$1 = state_28036;
var statearr_28047_28067 = state_28036__$1;
(statearr_28047_28067[(2)] = inst_28021);

(statearr_28047_28067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (10))){
var inst_28029 = (state_28036[(2)]);
var state_28036__$1 = (function (){var statearr_28048 = state_28036;
(statearr_28048[(8)] = inst_28029);

return statearr_28048;
})();
var statearr_28049_28068 = state_28036__$1;
(statearr_28049_28068[(2)] = null);

(statearr_28049_28068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (8))){
var inst_28018 = (state_28036[(7)]);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28036__$1,(11),out,inst_28018);
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
});})(c__21345__auto___28058,out))
;
return ((function (switch__21283__auto__,c__21345__auto___28058,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28053 = [null,null,null,null,null,null,null,null,null];
(statearr_28053[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28053[(1)] = (1));

return statearr_28053;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28036){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28054){if((e28054 instanceof Object)){
var ex__21287__auto__ = e28054;
var statearr_28055_28069 = state_28036;
(statearr_28055_28069[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28070 = state_28036;
state_28036 = G__28070;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28058,out))
})();
var state__21347__auto__ = (function (){var statearr_28056 = f__21346__auto__.call(null);
(statearr_28056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28058);

return statearr_28056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28058,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28072 = arguments.length;
switch (G__28072) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_28239){
var state_val_28240 = (state_28239[(1)]);
if((state_val_28240 === (7))){
var inst_28235 = (state_28239[(2)]);
var state_28239__$1 = state_28239;
var statearr_28241_28282 = state_28239__$1;
(statearr_28241_28282[(2)] = inst_28235);

(statearr_28241_28282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (20))){
var inst_28205 = (state_28239[(7)]);
var inst_28216 = (state_28239[(2)]);
var inst_28217 = cljs.core.next.call(null,inst_28205);
var inst_28191 = inst_28217;
var inst_28192 = null;
var inst_28193 = (0);
var inst_28194 = (0);
var state_28239__$1 = (function (){var statearr_28242 = state_28239;
(statearr_28242[(8)] = inst_28193);

(statearr_28242[(9)] = inst_28191);

(statearr_28242[(10)] = inst_28216);

(statearr_28242[(11)] = inst_28194);

(statearr_28242[(12)] = inst_28192);

return statearr_28242;
})();
var statearr_28243_28283 = state_28239__$1;
(statearr_28243_28283[(2)] = null);

(statearr_28243_28283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (1))){
var state_28239__$1 = state_28239;
var statearr_28244_28284 = state_28239__$1;
(statearr_28244_28284[(2)] = null);

(statearr_28244_28284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (4))){
var inst_28180 = (state_28239[(13)]);
var inst_28180__$1 = (state_28239[(2)]);
var inst_28181 = (inst_28180__$1 == null);
var state_28239__$1 = (function (){var statearr_28245 = state_28239;
(statearr_28245[(13)] = inst_28180__$1);

return statearr_28245;
})();
if(cljs.core.truth_(inst_28181)){
var statearr_28246_28285 = state_28239__$1;
(statearr_28246_28285[(1)] = (5));

} else {
var statearr_28247_28286 = state_28239__$1;
(statearr_28247_28286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (15))){
var state_28239__$1 = state_28239;
var statearr_28251_28287 = state_28239__$1;
(statearr_28251_28287[(2)] = null);

(statearr_28251_28287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (21))){
var state_28239__$1 = state_28239;
var statearr_28252_28288 = state_28239__$1;
(statearr_28252_28288[(2)] = null);

(statearr_28252_28288[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (13))){
var inst_28193 = (state_28239[(8)]);
var inst_28191 = (state_28239[(9)]);
var inst_28194 = (state_28239[(11)]);
var inst_28192 = (state_28239[(12)]);
var inst_28201 = (state_28239[(2)]);
var inst_28202 = (inst_28194 + (1));
var tmp28248 = inst_28193;
var tmp28249 = inst_28191;
var tmp28250 = inst_28192;
var inst_28191__$1 = tmp28249;
var inst_28192__$1 = tmp28250;
var inst_28193__$1 = tmp28248;
var inst_28194__$1 = inst_28202;
var state_28239__$1 = (function (){var statearr_28253 = state_28239;
(statearr_28253[(8)] = inst_28193__$1);

(statearr_28253[(9)] = inst_28191__$1);

(statearr_28253[(14)] = inst_28201);

(statearr_28253[(11)] = inst_28194__$1);

(statearr_28253[(12)] = inst_28192__$1);

return statearr_28253;
})();
var statearr_28254_28289 = state_28239__$1;
(statearr_28254_28289[(2)] = null);

(statearr_28254_28289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (22))){
var state_28239__$1 = state_28239;
var statearr_28255_28290 = state_28239__$1;
(statearr_28255_28290[(2)] = null);

(statearr_28255_28290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (6))){
var inst_28180 = (state_28239[(13)]);
var inst_28189 = f.call(null,inst_28180);
var inst_28190 = cljs.core.seq.call(null,inst_28189);
var inst_28191 = inst_28190;
var inst_28192 = null;
var inst_28193 = (0);
var inst_28194 = (0);
var state_28239__$1 = (function (){var statearr_28256 = state_28239;
(statearr_28256[(8)] = inst_28193);

(statearr_28256[(9)] = inst_28191);

(statearr_28256[(11)] = inst_28194);

(statearr_28256[(12)] = inst_28192);

return statearr_28256;
})();
var statearr_28257_28291 = state_28239__$1;
(statearr_28257_28291[(2)] = null);

(statearr_28257_28291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (17))){
var inst_28205 = (state_28239[(7)]);
var inst_28209 = cljs.core.chunk_first.call(null,inst_28205);
var inst_28210 = cljs.core.chunk_rest.call(null,inst_28205);
var inst_28211 = cljs.core.count.call(null,inst_28209);
var inst_28191 = inst_28210;
var inst_28192 = inst_28209;
var inst_28193 = inst_28211;
var inst_28194 = (0);
var state_28239__$1 = (function (){var statearr_28258 = state_28239;
(statearr_28258[(8)] = inst_28193);

(statearr_28258[(9)] = inst_28191);

(statearr_28258[(11)] = inst_28194);

(statearr_28258[(12)] = inst_28192);

return statearr_28258;
})();
var statearr_28259_28292 = state_28239__$1;
(statearr_28259_28292[(2)] = null);

(statearr_28259_28292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (3))){
var inst_28237 = (state_28239[(2)]);
var state_28239__$1 = state_28239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28239__$1,inst_28237);
} else {
if((state_val_28240 === (12))){
var inst_28225 = (state_28239[(2)]);
var state_28239__$1 = state_28239;
var statearr_28260_28293 = state_28239__$1;
(statearr_28260_28293[(2)] = inst_28225);

(statearr_28260_28293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (2))){
var state_28239__$1 = state_28239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28239__$1,(4),in$);
} else {
if((state_val_28240 === (23))){
var inst_28233 = (state_28239[(2)]);
var state_28239__$1 = state_28239;
var statearr_28261_28294 = state_28239__$1;
(statearr_28261_28294[(2)] = inst_28233);

(statearr_28261_28294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (19))){
var inst_28220 = (state_28239[(2)]);
var state_28239__$1 = state_28239;
var statearr_28262_28295 = state_28239__$1;
(statearr_28262_28295[(2)] = inst_28220);

(statearr_28262_28295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (11))){
var inst_28205 = (state_28239[(7)]);
var inst_28191 = (state_28239[(9)]);
var inst_28205__$1 = cljs.core.seq.call(null,inst_28191);
var state_28239__$1 = (function (){var statearr_28263 = state_28239;
(statearr_28263[(7)] = inst_28205__$1);

return statearr_28263;
})();
if(inst_28205__$1){
var statearr_28264_28296 = state_28239__$1;
(statearr_28264_28296[(1)] = (14));

} else {
var statearr_28265_28297 = state_28239__$1;
(statearr_28265_28297[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (9))){
var inst_28227 = (state_28239[(2)]);
var inst_28228 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28239__$1 = (function (){var statearr_28266 = state_28239;
(statearr_28266[(15)] = inst_28227);

return statearr_28266;
})();
if(cljs.core.truth_(inst_28228)){
var statearr_28267_28298 = state_28239__$1;
(statearr_28267_28298[(1)] = (21));

} else {
var statearr_28268_28299 = state_28239__$1;
(statearr_28268_28299[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (5))){
var inst_28183 = cljs.core.async.close_BANG_.call(null,out);
var state_28239__$1 = state_28239;
var statearr_28269_28300 = state_28239__$1;
(statearr_28269_28300[(2)] = inst_28183);

(statearr_28269_28300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (14))){
var inst_28205 = (state_28239[(7)]);
var inst_28207 = cljs.core.chunked_seq_QMARK_.call(null,inst_28205);
var state_28239__$1 = state_28239;
if(inst_28207){
var statearr_28270_28301 = state_28239__$1;
(statearr_28270_28301[(1)] = (17));

} else {
var statearr_28271_28302 = state_28239__$1;
(statearr_28271_28302[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (16))){
var inst_28223 = (state_28239[(2)]);
var state_28239__$1 = state_28239;
var statearr_28272_28303 = state_28239__$1;
(statearr_28272_28303[(2)] = inst_28223);

(statearr_28272_28303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28240 === (10))){
var inst_28194 = (state_28239[(11)]);
var inst_28192 = (state_28239[(12)]);
var inst_28199 = cljs.core._nth.call(null,inst_28192,inst_28194);
var state_28239__$1 = state_28239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28239__$1,(13),out,inst_28199);
} else {
if((state_val_28240 === (18))){
var inst_28205 = (state_28239[(7)]);
var inst_28214 = cljs.core.first.call(null,inst_28205);
var state_28239__$1 = state_28239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28239__$1,(20),out,inst_28214);
} else {
if((state_val_28240 === (8))){
var inst_28193 = (state_28239[(8)]);
var inst_28194 = (state_28239[(11)]);
var inst_28196 = (inst_28194 < inst_28193);
var inst_28197 = inst_28196;
var state_28239__$1 = state_28239;
if(cljs.core.truth_(inst_28197)){
var statearr_28273_28304 = state_28239__$1;
(statearr_28273_28304[(1)] = (10));

} else {
var statearr_28274_28305 = state_28239__$1;
(statearr_28274_28305[(1)] = (11));

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
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_28278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28278[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__);

(statearr_28278[(1)] = (1));

return statearr_28278;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____1 = (function (state_28239){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object)){
var ex__21287__auto__ = e28279;
var statearr_28280_28306 = state_28239;
(statearr_28280_28306[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28307 = state_28239;
state_28239 = G__28307;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__ = function(state_28239){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____1.call(this,state_28239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_28281 = f__21346__auto__.call(null);
(statearr_28281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28309 = arguments.length;
switch (G__28309) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28312 = arguments.length;
switch (G__28312) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28315 = arguments.length;
switch (G__28315) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___28365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28365,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28365,out){
return (function (state_28339){
var state_val_28340 = (state_28339[(1)]);
if((state_val_28340 === (7))){
var inst_28334 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28341_28366 = state_28339__$1;
(statearr_28341_28366[(2)] = inst_28334);

(statearr_28341_28366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (1))){
var inst_28316 = null;
var state_28339__$1 = (function (){var statearr_28342 = state_28339;
(statearr_28342[(7)] = inst_28316);

return statearr_28342;
})();
var statearr_28343_28367 = state_28339__$1;
(statearr_28343_28367[(2)] = null);

(statearr_28343_28367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (4))){
var inst_28319 = (state_28339[(8)]);
var inst_28319__$1 = (state_28339[(2)]);
var inst_28320 = (inst_28319__$1 == null);
var inst_28321 = cljs.core.not.call(null,inst_28320);
var state_28339__$1 = (function (){var statearr_28344 = state_28339;
(statearr_28344[(8)] = inst_28319__$1);

return statearr_28344;
})();
if(inst_28321){
var statearr_28345_28368 = state_28339__$1;
(statearr_28345_28368[(1)] = (5));

} else {
var statearr_28346_28369 = state_28339__$1;
(statearr_28346_28369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (6))){
var state_28339__$1 = state_28339;
var statearr_28347_28370 = state_28339__$1;
(statearr_28347_28370[(2)] = null);

(statearr_28347_28370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (3))){
var inst_28336 = (state_28339[(2)]);
var inst_28337 = cljs.core.async.close_BANG_.call(null,out);
var state_28339__$1 = (function (){var statearr_28348 = state_28339;
(statearr_28348[(9)] = inst_28336);

return statearr_28348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28339__$1,inst_28337);
} else {
if((state_val_28340 === (2))){
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28339__$1,(4),ch);
} else {
if((state_val_28340 === (11))){
var inst_28319 = (state_28339[(8)]);
var inst_28328 = (state_28339[(2)]);
var inst_28316 = inst_28319;
var state_28339__$1 = (function (){var statearr_28349 = state_28339;
(statearr_28349[(7)] = inst_28316);

(statearr_28349[(10)] = inst_28328);

return statearr_28349;
})();
var statearr_28350_28371 = state_28339__$1;
(statearr_28350_28371[(2)] = null);

(statearr_28350_28371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (9))){
var inst_28319 = (state_28339[(8)]);
var state_28339__$1 = state_28339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28339__$1,(11),out,inst_28319);
} else {
if((state_val_28340 === (5))){
var inst_28316 = (state_28339[(7)]);
var inst_28319 = (state_28339[(8)]);
var inst_28323 = cljs.core._EQ_.call(null,inst_28319,inst_28316);
var state_28339__$1 = state_28339;
if(inst_28323){
var statearr_28352_28372 = state_28339__$1;
(statearr_28352_28372[(1)] = (8));

} else {
var statearr_28353_28373 = state_28339__$1;
(statearr_28353_28373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (10))){
var inst_28331 = (state_28339[(2)]);
var state_28339__$1 = state_28339;
var statearr_28354_28374 = state_28339__$1;
(statearr_28354_28374[(2)] = inst_28331);

(statearr_28354_28374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28340 === (8))){
var inst_28316 = (state_28339[(7)]);
var tmp28351 = inst_28316;
var inst_28316__$1 = tmp28351;
var state_28339__$1 = (function (){var statearr_28355 = state_28339;
(statearr_28355[(7)] = inst_28316__$1);

return statearr_28355;
})();
var statearr_28356_28375 = state_28339__$1;
(statearr_28356_28375[(2)] = null);

(statearr_28356_28375[(1)] = (2));


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
});})(c__21345__auto___28365,out))
;
return ((function (switch__21283__auto__,c__21345__auto___28365,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28360[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28360[(1)] = (1));

return statearr_28360;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28339){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28361){if((e28361 instanceof Object)){
var ex__21287__auto__ = e28361;
var statearr_28362_28376 = state_28339;
(statearr_28362_28376[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28377 = state_28339;
state_28339 = G__28377;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28365,out))
})();
var state__21347__auto__ = (function (){var statearr_28363 = f__21346__auto__.call(null);
(statearr_28363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28365);

return statearr_28363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28365,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28379 = arguments.length;
switch (G__28379) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___28448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28448,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28448,out){
return (function (state_28417){
var state_val_28418 = (state_28417[(1)]);
if((state_val_28418 === (7))){
var inst_28413 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
var statearr_28419_28449 = state_28417__$1;
(statearr_28419_28449[(2)] = inst_28413);

(statearr_28419_28449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (1))){
var inst_28380 = (new Array(n));
var inst_28381 = inst_28380;
var inst_28382 = (0);
var state_28417__$1 = (function (){var statearr_28420 = state_28417;
(statearr_28420[(7)] = inst_28382);

(statearr_28420[(8)] = inst_28381);

return statearr_28420;
})();
var statearr_28421_28450 = state_28417__$1;
(statearr_28421_28450[(2)] = null);

(statearr_28421_28450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (4))){
var inst_28385 = (state_28417[(9)]);
var inst_28385__$1 = (state_28417[(2)]);
var inst_28386 = (inst_28385__$1 == null);
var inst_28387 = cljs.core.not.call(null,inst_28386);
var state_28417__$1 = (function (){var statearr_28422 = state_28417;
(statearr_28422[(9)] = inst_28385__$1);

return statearr_28422;
})();
if(inst_28387){
var statearr_28423_28451 = state_28417__$1;
(statearr_28423_28451[(1)] = (5));

} else {
var statearr_28424_28452 = state_28417__$1;
(statearr_28424_28452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (15))){
var inst_28407 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
var statearr_28425_28453 = state_28417__$1;
(statearr_28425_28453[(2)] = inst_28407);

(statearr_28425_28453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (13))){
var state_28417__$1 = state_28417;
var statearr_28426_28454 = state_28417__$1;
(statearr_28426_28454[(2)] = null);

(statearr_28426_28454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (6))){
var inst_28382 = (state_28417[(7)]);
var inst_28403 = (inst_28382 > (0));
var state_28417__$1 = state_28417;
if(cljs.core.truth_(inst_28403)){
var statearr_28427_28455 = state_28417__$1;
(statearr_28427_28455[(1)] = (12));

} else {
var statearr_28428_28456 = state_28417__$1;
(statearr_28428_28456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (3))){
var inst_28415 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28417__$1,inst_28415);
} else {
if((state_val_28418 === (12))){
var inst_28381 = (state_28417[(8)]);
var inst_28405 = cljs.core.vec.call(null,inst_28381);
var state_28417__$1 = state_28417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28417__$1,(15),out,inst_28405);
} else {
if((state_val_28418 === (2))){
var state_28417__$1 = state_28417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28417__$1,(4),ch);
} else {
if((state_val_28418 === (11))){
var inst_28397 = (state_28417[(2)]);
var inst_28398 = (new Array(n));
var inst_28381 = inst_28398;
var inst_28382 = (0);
var state_28417__$1 = (function (){var statearr_28429 = state_28417;
(statearr_28429[(7)] = inst_28382);

(statearr_28429[(10)] = inst_28397);

(statearr_28429[(8)] = inst_28381);

return statearr_28429;
})();
var statearr_28430_28457 = state_28417__$1;
(statearr_28430_28457[(2)] = null);

(statearr_28430_28457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (9))){
var inst_28381 = (state_28417[(8)]);
var inst_28395 = cljs.core.vec.call(null,inst_28381);
var state_28417__$1 = state_28417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28417__$1,(11),out,inst_28395);
} else {
if((state_val_28418 === (5))){
var inst_28385 = (state_28417[(9)]);
var inst_28382 = (state_28417[(7)]);
var inst_28381 = (state_28417[(8)]);
var inst_28390 = (state_28417[(11)]);
var inst_28389 = (inst_28381[inst_28382] = inst_28385);
var inst_28390__$1 = (inst_28382 + (1));
var inst_28391 = (inst_28390__$1 < n);
var state_28417__$1 = (function (){var statearr_28431 = state_28417;
(statearr_28431[(12)] = inst_28389);

(statearr_28431[(11)] = inst_28390__$1);

return statearr_28431;
})();
if(cljs.core.truth_(inst_28391)){
var statearr_28432_28458 = state_28417__$1;
(statearr_28432_28458[(1)] = (8));

} else {
var statearr_28433_28459 = state_28417__$1;
(statearr_28433_28459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (14))){
var inst_28410 = (state_28417[(2)]);
var inst_28411 = cljs.core.async.close_BANG_.call(null,out);
var state_28417__$1 = (function (){var statearr_28435 = state_28417;
(statearr_28435[(13)] = inst_28410);

return statearr_28435;
})();
var statearr_28436_28460 = state_28417__$1;
(statearr_28436_28460[(2)] = inst_28411);

(statearr_28436_28460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (10))){
var inst_28401 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
var statearr_28437_28461 = state_28417__$1;
(statearr_28437_28461[(2)] = inst_28401);

(statearr_28437_28461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (8))){
var inst_28381 = (state_28417[(8)]);
var inst_28390 = (state_28417[(11)]);
var tmp28434 = inst_28381;
var inst_28381__$1 = tmp28434;
var inst_28382 = inst_28390;
var state_28417__$1 = (function (){var statearr_28438 = state_28417;
(statearr_28438[(7)] = inst_28382);

(statearr_28438[(8)] = inst_28381__$1);

return statearr_28438;
})();
var statearr_28439_28462 = state_28417__$1;
(statearr_28439_28462[(2)] = null);

(statearr_28439_28462[(1)] = (2));


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
});})(c__21345__auto___28448,out))
;
return ((function (switch__21283__auto__,c__21345__auto___28448,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28443[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28443[(1)] = (1));

return statearr_28443;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28417){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28444){if((e28444 instanceof Object)){
var ex__21287__auto__ = e28444;
var statearr_28445_28463 = state_28417;
(statearr_28445_28463[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28464 = state_28417;
state_28417 = G__28464;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28448,out))
})();
var state__21347__auto__ = (function (){var statearr_28446 = f__21346__auto__.call(null);
(statearr_28446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28448);

return statearr_28446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28448,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28466 = arguments.length;
switch (G__28466) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___28539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28539,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28539,out){
return (function (state_28508){
var state_val_28509 = (state_28508[(1)]);
if((state_val_28509 === (7))){
var inst_28504 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28510_28540 = state_28508__$1;
(statearr_28510_28540[(2)] = inst_28504);

(statearr_28510_28540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (1))){
var inst_28467 = [];
var inst_28468 = inst_28467;
var inst_28469 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28508__$1 = (function (){var statearr_28511 = state_28508;
(statearr_28511[(7)] = inst_28469);

(statearr_28511[(8)] = inst_28468);

return statearr_28511;
})();
var statearr_28512_28541 = state_28508__$1;
(statearr_28512_28541[(2)] = null);

(statearr_28512_28541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (4))){
var inst_28472 = (state_28508[(9)]);
var inst_28472__$1 = (state_28508[(2)]);
var inst_28473 = (inst_28472__$1 == null);
var inst_28474 = cljs.core.not.call(null,inst_28473);
var state_28508__$1 = (function (){var statearr_28513 = state_28508;
(statearr_28513[(9)] = inst_28472__$1);

return statearr_28513;
})();
if(inst_28474){
var statearr_28514_28542 = state_28508__$1;
(statearr_28514_28542[(1)] = (5));

} else {
var statearr_28515_28543 = state_28508__$1;
(statearr_28515_28543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (15))){
var inst_28498 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28516_28544 = state_28508__$1;
(statearr_28516_28544[(2)] = inst_28498);

(statearr_28516_28544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (13))){
var state_28508__$1 = state_28508;
var statearr_28517_28545 = state_28508__$1;
(statearr_28517_28545[(2)] = null);

(statearr_28517_28545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (6))){
var inst_28468 = (state_28508[(8)]);
var inst_28493 = inst_28468.length;
var inst_28494 = (inst_28493 > (0));
var state_28508__$1 = state_28508;
if(cljs.core.truth_(inst_28494)){
var statearr_28518_28546 = state_28508__$1;
(statearr_28518_28546[(1)] = (12));

} else {
var statearr_28519_28547 = state_28508__$1;
(statearr_28519_28547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (3))){
var inst_28506 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28508__$1,inst_28506);
} else {
if((state_val_28509 === (12))){
var inst_28468 = (state_28508[(8)]);
var inst_28496 = cljs.core.vec.call(null,inst_28468);
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28508__$1,(15),out,inst_28496);
} else {
if((state_val_28509 === (2))){
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28508__$1,(4),ch);
} else {
if((state_val_28509 === (11))){
var inst_28472 = (state_28508[(9)]);
var inst_28476 = (state_28508[(10)]);
var inst_28486 = (state_28508[(2)]);
var inst_28487 = [];
var inst_28488 = inst_28487.push(inst_28472);
var inst_28468 = inst_28487;
var inst_28469 = inst_28476;
var state_28508__$1 = (function (){var statearr_28520 = state_28508;
(statearr_28520[(11)] = inst_28488);

(statearr_28520[(7)] = inst_28469);

(statearr_28520[(8)] = inst_28468);

(statearr_28520[(12)] = inst_28486);

return statearr_28520;
})();
var statearr_28521_28548 = state_28508__$1;
(statearr_28521_28548[(2)] = null);

(statearr_28521_28548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (9))){
var inst_28468 = (state_28508[(8)]);
var inst_28484 = cljs.core.vec.call(null,inst_28468);
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28508__$1,(11),out,inst_28484);
} else {
if((state_val_28509 === (5))){
var inst_28472 = (state_28508[(9)]);
var inst_28476 = (state_28508[(10)]);
var inst_28469 = (state_28508[(7)]);
var inst_28476__$1 = f.call(null,inst_28472);
var inst_28477 = cljs.core._EQ_.call(null,inst_28476__$1,inst_28469);
var inst_28478 = cljs.core.keyword_identical_QMARK_.call(null,inst_28469,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28479 = (inst_28477) || (inst_28478);
var state_28508__$1 = (function (){var statearr_28522 = state_28508;
(statearr_28522[(10)] = inst_28476__$1);

return statearr_28522;
})();
if(cljs.core.truth_(inst_28479)){
var statearr_28523_28549 = state_28508__$1;
(statearr_28523_28549[(1)] = (8));

} else {
var statearr_28524_28550 = state_28508__$1;
(statearr_28524_28550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (14))){
var inst_28501 = (state_28508[(2)]);
var inst_28502 = cljs.core.async.close_BANG_.call(null,out);
var state_28508__$1 = (function (){var statearr_28526 = state_28508;
(statearr_28526[(13)] = inst_28501);

return statearr_28526;
})();
var statearr_28527_28551 = state_28508__$1;
(statearr_28527_28551[(2)] = inst_28502);

(statearr_28527_28551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (10))){
var inst_28491 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28528_28552 = state_28508__$1;
(statearr_28528_28552[(2)] = inst_28491);

(statearr_28528_28552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (8))){
var inst_28472 = (state_28508[(9)]);
var inst_28476 = (state_28508[(10)]);
var inst_28468 = (state_28508[(8)]);
var inst_28481 = inst_28468.push(inst_28472);
var tmp28525 = inst_28468;
var inst_28468__$1 = tmp28525;
var inst_28469 = inst_28476;
var state_28508__$1 = (function (){var statearr_28529 = state_28508;
(statearr_28529[(7)] = inst_28469);

(statearr_28529[(8)] = inst_28468__$1);

(statearr_28529[(14)] = inst_28481);

return statearr_28529;
})();
var statearr_28530_28553 = state_28508__$1;
(statearr_28530_28553[(2)] = null);

(statearr_28530_28553[(1)] = (2));


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
});})(c__21345__auto___28539,out))
;
return ((function (switch__21283__auto__,c__21345__auto___28539,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28534[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28534[(1)] = (1));

return statearr_28534;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28508){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28535){if((e28535 instanceof Object)){
var ex__21287__auto__ = e28535;
var statearr_28536_28554 = state_28508;
(statearr_28536_28554[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28555 = state_28508;
state_28508 = G__28555;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28539,out))
})();
var state__21347__auto__ = (function (){var statearr_28537 = f__21346__auto__.call(null);
(statearr_28537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28539);

return statearr_28537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28539,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1437351691392