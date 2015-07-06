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
if(typeof cljs.core.async.t25918 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25918 = (function (f,fn_handler,meta25919){
this.f = f;
this.fn_handler = fn_handler;
this.meta25919 = meta25919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25918.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25920){
var self__ = this;
var _25920__$1 = this;
return self__.meta25919;
});

cljs.core.async.t25918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25920,meta25919__$1){
var self__ = this;
var _25920__$1 = this;
return (new cljs.core.async.t25918(self__.f,self__.fn_handler,meta25919__$1));
});

cljs.core.async.t25918.cljs$lang$type = true;

cljs.core.async.t25918.cljs$lang$ctorStr = "cljs.core.async/t25918";

cljs.core.async.t25918.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t25918");
});

cljs.core.async.__GT_t25918 = (function cljs$core$async$fn_handler_$___GT_t25918(f__$1,fn_handler__$1,meta25919){
return (new cljs.core.async.t25918(f__$1,fn_handler__$1,meta25919));
});

}

return (new cljs.core.async.t25918(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25922 = buff;
if(G__25922){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__25922.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25922.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25922);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25922);
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
var G__25924 = arguments.length;
switch (G__25924) {
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
var G__25927 = arguments.length;
switch (G__25927) {
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
var val_25929 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25929);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25929,ret){
return (function (){
return fn1.call(null,val_25929);
});})(val_25929,ret))
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
var G__25931 = arguments.length;
switch (G__25931) {
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
var n__19006__auto___25933 = n;
var x_25934 = (0);
while(true){
if((x_25934 < n__19006__auto___25933)){
(a[x_25934] = (0));

var G__25935 = (x_25934 + (1));
x_25934 = G__25935;
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

var G__25936 = (i + (1));
i = G__25936;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25940 = (function (flag,alt_flag,meta25941){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25941 = meta25941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25940.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25942){
var self__ = this;
var _25942__$1 = this;
return self__.meta25941;
});})(flag))
;

cljs.core.async.t25940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25942,meta25941__$1){
var self__ = this;
var _25942__$1 = this;
return (new cljs.core.async.t25940(self__.flag,self__.alt_flag,meta25941__$1));
});})(flag))
;

cljs.core.async.t25940.cljs$lang$type = true;

cljs.core.async.t25940.cljs$lang$ctorStr = "cljs.core.async/t25940";

cljs.core.async.t25940.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t25940");
});})(flag))
;

cljs.core.async.__GT_t25940 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25940(flag__$1,alt_flag__$1,meta25941){
return (new cljs.core.async.t25940(flag__$1,alt_flag__$1,meta25941));
});})(flag))
;

}

return (new cljs.core.async.t25940(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25946 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25946 = (function (cb,flag,alt_handler,meta25947){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25947 = meta25947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25946.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25948){
var self__ = this;
var _25948__$1 = this;
return self__.meta25947;
});

cljs.core.async.t25946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25948,meta25947__$1){
var self__ = this;
var _25948__$1 = this;
return (new cljs.core.async.t25946(self__.cb,self__.flag,self__.alt_handler,meta25947__$1));
});

cljs.core.async.t25946.cljs$lang$type = true;

cljs.core.async.t25946.cljs$lang$ctorStr = "cljs.core.async/t25946";

cljs.core.async.t25946.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t25946");
});

cljs.core.async.__GT_t25946 = (function cljs$core$async$alt_handler_$___GT_t25946(cb__$1,flag__$1,alt_handler__$1,meta25947){
return (new cljs.core.async.t25946(cb__$1,flag__$1,alt_handler__$1,meta25947));
});

}

return (new cljs.core.async.t25946(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25949_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25949_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25950_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25950_SHARP_,port], null));
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
var G__25951 = (i + (1));
i = G__25951;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25954){
var map__25955 = p__25954;
var map__25955__$1 = ((cljs.core.seq_QMARK_.call(null,map__25955))?cljs.core.apply.call(null,cljs.core.hash_map,map__25955):map__25955);
var opts = map__25955__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25952){
var G__25953 = cljs.core.first.call(null,seq25952);
var seq25952__$1 = cljs.core.next.call(null,seq25952);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25953,seq25952__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25957 = arguments.length;
switch (G__25957) {
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
var c__21345__auto___26006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26006){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26006){
return (function (state_25981){
var state_val_25982 = (state_25981[(1)]);
if((state_val_25982 === (7))){
var inst_25977 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
var statearr_25983_26007 = state_25981__$1;
(statearr_25983_26007[(2)] = inst_25977);

(statearr_25983_26007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (1))){
var state_25981__$1 = state_25981;
var statearr_25984_26008 = state_25981__$1;
(statearr_25984_26008[(2)] = null);

(statearr_25984_26008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (4))){
var inst_25960 = (state_25981[(7)]);
var inst_25960__$1 = (state_25981[(2)]);
var inst_25961 = (inst_25960__$1 == null);
var state_25981__$1 = (function (){var statearr_25985 = state_25981;
(statearr_25985[(7)] = inst_25960__$1);

return statearr_25985;
})();
if(cljs.core.truth_(inst_25961)){
var statearr_25986_26009 = state_25981__$1;
(statearr_25986_26009[(1)] = (5));

} else {
var statearr_25987_26010 = state_25981__$1;
(statearr_25987_26010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (13))){
var state_25981__$1 = state_25981;
var statearr_25988_26011 = state_25981__$1;
(statearr_25988_26011[(2)] = null);

(statearr_25988_26011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (6))){
var inst_25960 = (state_25981[(7)]);
var state_25981__$1 = state_25981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25981__$1,(11),to,inst_25960);
} else {
if((state_val_25982 === (3))){
var inst_25979 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25981__$1,inst_25979);
} else {
if((state_val_25982 === (12))){
var state_25981__$1 = state_25981;
var statearr_25989_26012 = state_25981__$1;
(statearr_25989_26012[(2)] = null);

(statearr_25989_26012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (2))){
var state_25981__$1 = state_25981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25981__$1,(4),from);
} else {
if((state_val_25982 === (11))){
var inst_25970 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
if(cljs.core.truth_(inst_25970)){
var statearr_25990_26013 = state_25981__$1;
(statearr_25990_26013[(1)] = (12));

} else {
var statearr_25991_26014 = state_25981__$1;
(statearr_25991_26014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (9))){
var state_25981__$1 = state_25981;
var statearr_25992_26015 = state_25981__$1;
(statearr_25992_26015[(2)] = null);

(statearr_25992_26015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (5))){
var state_25981__$1 = state_25981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25993_26016 = state_25981__$1;
(statearr_25993_26016[(1)] = (8));

} else {
var statearr_25994_26017 = state_25981__$1;
(statearr_25994_26017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (14))){
var inst_25975 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
var statearr_25995_26018 = state_25981__$1;
(statearr_25995_26018[(2)] = inst_25975);

(statearr_25995_26018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (10))){
var inst_25967 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
var statearr_25996_26019 = state_25981__$1;
(statearr_25996_26019[(2)] = inst_25967);

(statearr_25996_26019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (8))){
var inst_25964 = cljs.core.async.close_BANG_.call(null,to);
var state_25981__$1 = state_25981;
var statearr_25997_26020 = state_25981__$1;
(statearr_25997_26020[(2)] = inst_25964);

(statearr_25997_26020[(1)] = (10));


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
});})(c__21345__auto___26006))
;
return ((function (switch__21283__auto__,c__21345__auto___26006){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_26001 = [null,null,null,null,null,null,null,null];
(statearr_26001[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_26001[(1)] = (1));

return statearr_26001;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_25981){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_25981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26002){if((e26002 instanceof Object)){
var ex__21287__auto__ = e26002;
var statearr_26003_26021 = state_25981;
(statearr_26003_26021[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26022 = state_25981;
state_25981 = G__26022;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_25981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_25981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26006))
})();
var state__21347__auto__ = (function (){var statearr_26004 = f__21346__auto__.call(null);
(statearr_26004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26006);

return statearr_26004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26006))
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
return (function (p__26206){
var vec__26207 = p__26206;
var v = cljs.core.nth.call(null,vec__26207,(0),null);
var p = cljs.core.nth.call(null,vec__26207,(1),null);
var job = vec__26207;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21345__auto___26389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26389,res,vec__26207,v,p,job,jobs,results){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26389,res,vec__26207,v,p,job,jobs,results){
return (function (state_26212){
var state_val_26213 = (state_26212[(1)]);
if((state_val_26213 === (2))){
var inst_26209 = (state_26212[(2)]);
var inst_26210 = cljs.core.async.close_BANG_.call(null,res);
var state_26212__$1 = (function (){var statearr_26214 = state_26212;
(statearr_26214[(7)] = inst_26209);

return statearr_26214;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26212__$1,inst_26210);
} else {
if((state_val_26213 === (1))){
var state_26212__$1 = state_26212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26212__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21345__auto___26389,res,vec__26207,v,p,job,jobs,results))
;
return ((function (switch__21283__auto__,c__21345__auto___26389,res,vec__26207,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26218 = [null,null,null,null,null,null,null,null];
(statearr_26218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26218[(1)] = (1));

return statearr_26218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26212){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26219){if((e26219 instanceof Object)){
var ex__21287__auto__ = e26219;
var statearr_26220_26390 = state_26212;
(statearr_26220_26390[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26391 = state_26212;
state_26212 = G__26391;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26389,res,vec__26207,v,p,job,jobs,results))
})();
var state__21347__auto__ = (function (){var statearr_26221 = f__21346__auto__.call(null);
(statearr_26221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26389);

return statearr_26221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26389,res,vec__26207,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26222){
var vec__26223 = p__26222;
var v = cljs.core.nth.call(null,vec__26223,(0),null);
var p = cljs.core.nth.call(null,vec__26223,(1),null);
var job = vec__26223;
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
var n__19006__auto___26392 = n;
var __26393 = (0);
while(true){
if((__26393 < n__19006__auto___26392)){
var G__26224_26394 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26224_26394) {
case "async":
var c__21345__auto___26396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26393,c__21345__auto___26396,G__26224_26394,n__19006__auto___26392,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (__26393,c__21345__auto___26396,G__26224_26394,n__19006__auto___26392,jobs,results,process,async){
return (function (state_26237){
var state_val_26238 = (state_26237[(1)]);
if((state_val_26238 === (7))){
var inst_26233 = (state_26237[(2)]);
var state_26237__$1 = state_26237;
var statearr_26239_26397 = state_26237__$1;
(statearr_26239_26397[(2)] = inst_26233);

(statearr_26239_26397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (6))){
var state_26237__$1 = state_26237;
var statearr_26240_26398 = state_26237__$1;
(statearr_26240_26398[(2)] = null);

(statearr_26240_26398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (5))){
var state_26237__$1 = state_26237;
var statearr_26241_26399 = state_26237__$1;
(statearr_26241_26399[(2)] = null);

(statearr_26241_26399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (4))){
var inst_26227 = (state_26237[(2)]);
var inst_26228 = async.call(null,inst_26227);
var state_26237__$1 = state_26237;
if(cljs.core.truth_(inst_26228)){
var statearr_26242_26400 = state_26237__$1;
(statearr_26242_26400[(1)] = (5));

} else {
var statearr_26243_26401 = state_26237__$1;
(statearr_26243_26401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26238 === (3))){
var inst_26235 = (state_26237[(2)]);
var state_26237__$1 = state_26237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26237__$1,inst_26235);
} else {
if((state_val_26238 === (2))){
var state_26237__$1 = state_26237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26237__$1,(4),jobs);
} else {
if((state_val_26238 === (1))){
var state_26237__$1 = state_26237;
var statearr_26244_26402 = state_26237__$1;
(statearr_26244_26402[(2)] = null);

(statearr_26244_26402[(1)] = (2));


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
});})(__26393,c__21345__auto___26396,G__26224_26394,n__19006__auto___26392,jobs,results,process,async))
;
return ((function (__26393,switch__21283__auto__,c__21345__auto___26396,G__26224_26394,n__19006__auto___26392,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26248 = [null,null,null,null,null,null,null];
(statearr_26248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26248[(1)] = (1));

return statearr_26248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26237){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26249){if((e26249 instanceof Object)){
var ex__21287__auto__ = e26249;
var statearr_26250_26403 = state_26237;
(statearr_26250_26403[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26404 = state_26237;
state_26237 = G__26404;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(__26393,switch__21283__auto__,c__21345__auto___26396,G__26224_26394,n__19006__auto___26392,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26251 = f__21346__auto__.call(null);
(statearr_26251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26396);

return statearr_26251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(__26393,c__21345__auto___26396,G__26224_26394,n__19006__auto___26392,jobs,results,process,async))
);


break;
case "compute":
var c__21345__auto___26405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26393,c__21345__auto___26405,G__26224_26394,n__19006__auto___26392,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (__26393,c__21345__auto___26405,G__26224_26394,n__19006__auto___26392,jobs,results,process,async){
return (function (state_26264){
var state_val_26265 = (state_26264[(1)]);
if((state_val_26265 === (7))){
var inst_26260 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26266_26406 = state_26264__$1;
(statearr_26266_26406[(2)] = inst_26260);

(statearr_26266_26406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (6))){
var state_26264__$1 = state_26264;
var statearr_26267_26407 = state_26264__$1;
(statearr_26267_26407[(2)] = null);

(statearr_26267_26407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (5))){
var state_26264__$1 = state_26264;
var statearr_26268_26408 = state_26264__$1;
(statearr_26268_26408[(2)] = null);

(statearr_26268_26408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (4))){
var inst_26254 = (state_26264[(2)]);
var inst_26255 = process.call(null,inst_26254);
var state_26264__$1 = state_26264;
if(cljs.core.truth_(inst_26255)){
var statearr_26269_26409 = state_26264__$1;
(statearr_26269_26409[(1)] = (5));

} else {
var statearr_26270_26410 = state_26264__$1;
(statearr_26270_26410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (3))){
var inst_26262 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26264__$1,inst_26262);
} else {
if((state_val_26265 === (2))){
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26264__$1,(4),jobs);
} else {
if((state_val_26265 === (1))){
var state_26264__$1 = state_26264;
var statearr_26271_26411 = state_26264__$1;
(statearr_26271_26411[(2)] = null);

(statearr_26271_26411[(1)] = (2));


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
});})(__26393,c__21345__auto___26405,G__26224_26394,n__19006__auto___26392,jobs,results,process,async))
;
return ((function (__26393,switch__21283__auto__,c__21345__auto___26405,G__26224_26394,n__19006__auto___26392,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26275 = [null,null,null,null,null,null,null];
(statearr_26275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26275[(1)] = (1));

return statearr_26275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26264){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26276){if((e26276 instanceof Object)){
var ex__21287__auto__ = e26276;
var statearr_26277_26412 = state_26264;
(statearr_26277_26412[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26413 = state_26264;
state_26264 = G__26413;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(__26393,switch__21283__auto__,c__21345__auto___26405,G__26224_26394,n__19006__auto___26392,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26278 = f__21346__auto__.call(null);
(statearr_26278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26405);

return statearr_26278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(__26393,c__21345__auto___26405,G__26224_26394,n__19006__auto___26392,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26414 = (__26393 + (1));
__26393 = G__26414;
continue;
} else {
}
break;
}

var c__21345__auto___26415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26415,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26415,jobs,results,process,async){
return (function (state_26300){
var state_val_26301 = (state_26300[(1)]);
if((state_val_26301 === (9))){
var inst_26293 = (state_26300[(2)]);
var state_26300__$1 = (function (){var statearr_26302 = state_26300;
(statearr_26302[(7)] = inst_26293);

return statearr_26302;
})();
var statearr_26303_26416 = state_26300__$1;
(statearr_26303_26416[(2)] = null);

(statearr_26303_26416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26301 === (8))){
var inst_26286 = (state_26300[(8)]);
var inst_26291 = (state_26300[(2)]);
var state_26300__$1 = (function (){var statearr_26304 = state_26300;
(statearr_26304[(9)] = inst_26291);

return statearr_26304;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26300__$1,(9),results,inst_26286);
} else {
if((state_val_26301 === (7))){
var inst_26296 = (state_26300[(2)]);
var state_26300__$1 = state_26300;
var statearr_26305_26417 = state_26300__$1;
(statearr_26305_26417[(2)] = inst_26296);

(statearr_26305_26417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26301 === (6))){
var inst_26286 = (state_26300[(8)]);
var inst_26281 = (state_26300[(10)]);
var inst_26286__$1 = cljs.core.async.chan.call(null,(1));
var inst_26287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26288 = [inst_26281,inst_26286__$1];
var inst_26289 = (new cljs.core.PersistentVector(null,2,(5),inst_26287,inst_26288,null));
var state_26300__$1 = (function (){var statearr_26306 = state_26300;
(statearr_26306[(8)] = inst_26286__$1);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26300__$1,(8),jobs,inst_26289);
} else {
if((state_val_26301 === (5))){
var inst_26284 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26300__$1 = state_26300;
var statearr_26307_26418 = state_26300__$1;
(statearr_26307_26418[(2)] = inst_26284);

(statearr_26307_26418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26301 === (4))){
var inst_26281 = (state_26300[(10)]);
var inst_26281__$1 = (state_26300[(2)]);
var inst_26282 = (inst_26281__$1 == null);
var state_26300__$1 = (function (){var statearr_26308 = state_26300;
(statearr_26308[(10)] = inst_26281__$1);

return statearr_26308;
})();
if(cljs.core.truth_(inst_26282)){
var statearr_26309_26419 = state_26300__$1;
(statearr_26309_26419[(1)] = (5));

} else {
var statearr_26310_26420 = state_26300__$1;
(statearr_26310_26420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26301 === (3))){
var inst_26298 = (state_26300[(2)]);
var state_26300__$1 = state_26300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26300__$1,inst_26298);
} else {
if((state_val_26301 === (2))){
var state_26300__$1 = state_26300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26300__$1,(4),from);
} else {
if((state_val_26301 === (1))){
var state_26300__$1 = state_26300;
var statearr_26311_26421 = state_26300__$1;
(statearr_26311_26421[(2)] = null);

(statearr_26311_26421[(1)] = (2));


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
});})(c__21345__auto___26415,jobs,results,process,async))
;
return ((function (switch__21283__auto__,c__21345__auto___26415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26315[(1)] = (1));

return statearr_26315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26300){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26316){if((e26316 instanceof Object)){
var ex__21287__auto__ = e26316;
var statearr_26317_26422 = state_26300;
(statearr_26317_26422[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26423 = state_26300;
state_26300 = G__26423;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26415,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26318 = f__21346__auto__.call(null);
(statearr_26318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26415);

return statearr_26318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26415,jobs,results,process,async))
);


var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,jobs,results,process,async){
return (function (state_26356){
var state_val_26357 = (state_26356[(1)]);
if((state_val_26357 === (7))){
var inst_26352 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26358_26424 = state_26356__$1;
(statearr_26358_26424[(2)] = inst_26352);

(statearr_26358_26424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (20))){
var state_26356__$1 = state_26356;
var statearr_26359_26425 = state_26356__$1;
(statearr_26359_26425[(2)] = null);

(statearr_26359_26425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (1))){
var state_26356__$1 = state_26356;
var statearr_26360_26426 = state_26356__$1;
(statearr_26360_26426[(2)] = null);

(statearr_26360_26426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (4))){
var inst_26321 = (state_26356[(7)]);
var inst_26321__$1 = (state_26356[(2)]);
var inst_26322 = (inst_26321__$1 == null);
var state_26356__$1 = (function (){var statearr_26361 = state_26356;
(statearr_26361[(7)] = inst_26321__$1);

return statearr_26361;
})();
if(cljs.core.truth_(inst_26322)){
var statearr_26362_26427 = state_26356__$1;
(statearr_26362_26427[(1)] = (5));

} else {
var statearr_26363_26428 = state_26356__$1;
(statearr_26363_26428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (15))){
var inst_26334 = (state_26356[(8)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26356__$1,(18),to,inst_26334);
} else {
if((state_val_26357 === (21))){
var inst_26347 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26364_26429 = state_26356__$1;
(statearr_26364_26429[(2)] = inst_26347);

(statearr_26364_26429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (13))){
var inst_26349 = (state_26356[(2)]);
var state_26356__$1 = (function (){var statearr_26365 = state_26356;
(statearr_26365[(9)] = inst_26349);

return statearr_26365;
})();
var statearr_26366_26430 = state_26356__$1;
(statearr_26366_26430[(2)] = null);

(statearr_26366_26430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (6))){
var inst_26321 = (state_26356[(7)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26356__$1,(11),inst_26321);
} else {
if((state_val_26357 === (17))){
var inst_26342 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
if(cljs.core.truth_(inst_26342)){
var statearr_26367_26431 = state_26356__$1;
(statearr_26367_26431[(1)] = (19));

} else {
var statearr_26368_26432 = state_26356__$1;
(statearr_26368_26432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (3))){
var inst_26354 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26356__$1,inst_26354);
} else {
if((state_val_26357 === (12))){
var inst_26331 = (state_26356[(10)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26356__$1,(14),inst_26331);
} else {
if((state_val_26357 === (2))){
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26356__$1,(4),results);
} else {
if((state_val_26357 === (19))){
var state_26356__$1 = state_26356;
var statearr_26369_26433 = state_26356__$1;
(statearr_26369_26433[(2)] = null);

(statearr_26369_26433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (11))){
var inst_26331 = (state_26356[(2)]);
var state_26356__$1 = (function (){var statearr_26370 = state_26356;
(statearr_26370[(10)] = inst_26331);

return statearr_26370;
})();
var statearr_26371_26434 = state_26356__$1;
(statearr_26371_26434[(2)] = null);

(statearr_26371_26434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (9))){
var state_26356__$1 = state_26356;
var statearr_26372_26435 = state_26356__$1;
(statearr_26372_26435[(2)] = null);

(statearr_26372_26435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (5))){
var state_26356__$1 = state_26356;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26373_26436 = state_26356__$1;
(statearr_26373_26436[(1)] = (8));

} else {
var statearr_26374_26437 = state_26356__$1;
(statearr_26374_26437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (14))){
var inst_26334 = (state_26356[(8)]);
var inst_26336 = (state_26356[(11)]);
var inst_26334__$1 = (state_26356[(2)]);
var inst_26335 = (inst_26334__$1 == null);
var inst_26336__$1 = cljs.core.not.call(null,inst_26335);
var state_26356__$1 = (function (){var statearr_26375 = state_26356;
(statearr_26375[(8)] = inst_26334__$1);

(statearr_26375[(11)] = inst_26336__$1);

return statearr_26375;
})();
if(inst_26336__$1){
var statearr_26376_26438 = state_26356__$1;
(statearr_26376_26438[(1)] = (15));

} else {
var statearr_26377_26439 = state_26356__$1;
(statearr_26377_26439[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (16))){
var inst_26336 = (state_26356[(11)]);
var state_26356__$1 = state_26356;
var statearr_26378_26440 = state_26356__$1;
(statearr_26378_26440[(2)] = inst_26336);

(statearr_26378_26440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (10))){
var inst_26328 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26379_26441 = state_26356__$1;
(statearr_26379_26441[(2)] = inst_26328);

(statearr_26379_26441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (18))){
var inst_26339 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26380_26442 = state_26356__$1;
(statearr_26380_26442[(2)] = inst_26339);

(statearr_26380_26442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (8))){
var inst_26325 = cljs.core.async.close_BANG_.call(null,to);
var state_26356__$1 = state_26356;
var statearr_26381_26443 = state_26356__$1;
(statearr_26381_26443[(2)] = inst_26325);

(statearr_26381_26443[(1)] = (10));


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
var statearr_26385 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26385[(1)] = (1));

return statearr_26385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26356){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26386){if((e26386 instanceof Object)){
var ex__21287__auto__ = e26386;
var statearr_26387_26444 = state_26356;
(statearr_26387_26444[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26445 = state_26356;
state_26356 = G__26445;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26388 = f__21346__auto__.call(null);
(statearr_26388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26388;
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
var G__26447 = arguments.length;
switch (G__26447) {
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
var G__26450 = arguments.length;
switch (G__26450) {
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
var G__26453 = arguments.length;
switch (G__26453) {
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
var c__21345__auto___26505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26505,tc,fc){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26505,tc,fc){
return (function (state_26479){
var state_val_26480 = (state_26479[(1)]);
if((state_val_26480 === (7))){
var inst_26475 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26481_26506 = state_26479__$1;
(statearr_26481_26506[(2)] = inst_26475);

(statearr_26481_26506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (1))){
var state_26479__$1 = state_26479;
var statearr_26482_26507 = state_26479__$1;
(statearr_26482_26507[(2)] = null);

(statearr_26482_26507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (4))){
var inst_26456 = (state_26479[(7)]);
var inst_26456__$1 = (state_26479[(2)]);
var inst_26457 = (inst_26456__$1 == null);
var state_26479__$1 = (function (){var statearr_26483 = state_26479;
(statearr_26483[(7)] = inst_26456__$1);

return statearr_26483;
})();
if(cljs.core.truth_(inst_26457)){
var statearr_26484_26508 = state_26479__$1;
(statearr_26484_26508[(1)] = (5));

} else {
var statearr_26485_26509 = state_26479__$1;
(statearr_26485_26509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (13))){
var state_26479__$1 = state_26479;
var statearr_26486_26510 = state_26479__$1;
(statearr_26486_26510[(2)] = null);

(statearr_26486_26510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (6))){
var inst_26456 = (state_26479[(7)]);
var inst_26462 = p.call(null,inst_26456);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26462)){
var statearr_26487_26511 = state_26479__$1;
(statearr_26487_26511[(1)] = (9));

} else {
var statearr_26488_26512 = state_26479__$1;
(statearr_26488_26512[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (3))){
var inst_26477 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26479__$1,inst_26477);
} else {
if((state_val_26480 === (12))){
var state_26479__$1 = state_26479;
var statearr_26489_26513 = state_26479__$1;
(statearr_26489_26513[(2)] = null);

(statearr_26489_26513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (2))){
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(4),ch);
} else {
if((state_val_26480 === (11))){
var inst_26456 = (state_26479[(7)]);
var inst_26466 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26479__$1,(8),inst_26466,inst_26456);
} else {
if((state_val_26480 === (9))){
var state_26479__$1 = state_26479;
var statearr_26490_26514 = state_26479__$1;
(statearr_26490_26514[(2)] = tc);

(statearr_26490_26514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (5))){
var inst_26459 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26460 = cljs.core.async.close_BANG_.call(null,fc);
var state_26479__$1 = (function (){var statearr_26491 = state_26479;
(statearr_26491[(8)] = inst_26459);

return statearr_26491;
})();
var statearr_26492_26515 = state_26479__$1;
(statearr_26492_26515[(2)] = inst_26460);

(statearr_26492_26515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (14))){
var inst_26473 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26493_26516 = state_26479__$1;
(statearr_26493_26516[(2)] = inst_26473);

(statearr_26493_26516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (10))){
var state_26479__$1 = state_26479;
var statearr_26494_26517 = state_26479__$1;
(statearr_26494_26517[(2)] = fc);

(statearr_26494_26517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (8))){
var inst_26468 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26468)){
var statearr_26495_26518 = state_26479__$1;
(statearr_26495_26518[(1)] = (12));

} else {
var statearr_26496_26519 = state_26479__$1;
(statearr_26496_26519[(1)] = (13));

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
});})(c__21345__auto___26505,tc,fc))
;
return ((function (switch__21283__auto__,c__21345__auto___26505,tc,fc){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_26500 = [null,null,null,null,null,null,null,null,null];
(statearr_26500[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_26500[(1)] = (1));

return statearr_26500;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_26479){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26501){if((e26501 instanceof Object)){
var ex__21287__auto__ = e26501;
var statearr_26502_26520 = state_26479;
(statearr_26502_26520[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26521 = state_26479;
state_26479 = G__26521;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_26479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_26479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26505,tc,fc))
})();
var state__21347__auto__ = (function (){var statearr_26503 = f__21346__auto__.call(null);
(statearr_26503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26505);

return statearr_26503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26505,tc,fc))
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
return (function (state_26568){
var state_val_26569 = (state_26568[(1)]);
if((state_val_26569 === (7))){
var inst_26564 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26570_26586 = state_26568__$1;
(statearr_26570_26586[(2)] = inst_26564);

(statearr_26570_26586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (6))){
var inst_26554 = (state_26568[(7)]);
var inst_26557 = (state_26568[(8)]);
var inst_26561 = f.call(null,inst_26554,inst_26557);
var inst_26554__$1 = inst_26561;
var state_26568__$1 = (function (){var statearr_26571 = state_26568;
(statearr_26571[(7)] = inst_26554__$1);

return statearr_26571;
})();
var statearr_26572_26587 = state_26568__$1;
(statearr_26572_26587[(2)] = null);

(statearr_26572_26587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (5))){
var inst_26554 = (state_26568[(7)]);
var state_26568__$1 = state_26568;
var statearr_26573_26588 = state_26568__$1;
(statearr_26573_26588[(2)] = inst_26554);

(statearr_26573_26588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (4))){
var inst_26557 = (state_26568[(8)]);
var inst_26557__$1 = (state_26568[(2)]);
var inst_26558 = (inst_26557__$1 == null);
var state_26568__$1 = (function (){var statearr_26574 = state_26568;
(statearr_26574[(8)] = inst_26557__$1);

return statearr_26574;
})();
if(cljs.core.truth_(inst_26558)){
var statearr_26575_26589 = state_26568__$1;
(statearr_26575_26589[(1)] = (5));

} else {
var statearr_26576_26590 = state_26568__$1;
(statearr_26576_26590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (3))){
var inst_26566 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26568__$1,inst_26566);
} else {
if((state_val_26569 === (2))){
var state_26568__$1 = state_26568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26568__$1,(4),ch);
} else {
if((state_val_26569 === (1))){
var inst_26554 = init;
var state_26568__$1 = (function (){var statearr_26577 = state_26568;
(statearr_26577[(7)] = inst_26554);

return statearr_26577;
})();
var statearr_26578_26591 = state_26568__$1;
(statearr_26578_26591[(2)] = null);

(statearr_26578_26591[(1)] = (2));


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
var statearr_26582 = [null,null,null,null,null,null,null,null,null];
(statearr_26582[(0)] = cljs$core$async$reduce_$_state_machine__21284__auto__);

(statearr_26582[(1)] = (1));

return statearr_26582;
});
var cljs$core$async$reduce_$_state_machine__21284__auto____1 = (function (state_26568){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26583){if((e26583 instanceof Object)){
var ex__21287__auto__ = e26583;
var statearr_26584_26592 = state_26568;
(statearr_26584_26592[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26593 = state_26568;
state_26568 = G__26593;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21284__auto__ = function(state_26568){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21284__auto____1.call(this,state_26568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21284__auto____0;
cljs$core$async$reduce_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21284__auto____1;
return cljs$core$async$reduce_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_26585 = f__21346__auto__.call(null);
(statearr_26585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26585;
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
var G__26595 = arguments.length;
switch (G__26595) {
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
return (function (state_26620){
var state_val_26621 = (state_26620[(1)]);
if((state_val_26621 === (7))){
var inst_26602 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26622_26646 = state_26620__$1;
(statearr_26622_26646[(2)] = inst_26602);

(statearr_26622_26646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (1))){
var inst_26596 = cljs.core.seq.call(null,coll);
var inst_26597 = inst_26596;
var state_26620__$1 = (function (){var statearr_26623 = state_26620;
(statearr_26623[(7)] = inst_26597);

return statearr_26623;
})();
var statearr_26624_26647 = state_26620__$1;
(statearr_26624_26647[(2)] = null);

(statearr_26624_26647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (4))){
var inst_26597 = (state_26620[(7)]);
var inst_26600 = cljs.core.first.call(null,inst_26597);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26620__$1,(7),ch,inst_26600);
} else {
if((state_val_26621 === (13))){
var inst_26614 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26625_26648 = state_26620__$1;
(statearr_26625_26648[(2)] = inst_26614);

(statearr_26625_26648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (6))){
var inst_26605 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
if(cljs.core.truth_(inst_26605)){
var statearr_26626_26649 = state_26620__$1;
(statearr_26626_26649[(1)] = (8));

} else {
var statearr_26627_26650 = state_26620__$1;
(statearr_26627_26650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (3))){
var inst_26618 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26620__$1,inst_26618);
} else {
if((state_val_26621 === (12))){
var state_26620__$1 = state_26620;
var statearr_26628_26651 = state_26620__$1;
(statearr_26628_26651[(2)] = null);

(statearr_26628_26651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (2))){
var inst_26597 = (state_26620[(7)]);
var state_26620__$1 = state_26620;
if(cljs.core.truth_(inst_26597)){
var statearr_26629_26652 = state_26620__$1;
(statearr_26629_26652[(1)] = (4));

} else {
var statearr_26630_26653 = state_26620__$1;
(statearr_26630_26653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (11))){
var inst_26611 = cljs.core.async.close_BANG_.call(null,ch);
var state_26620__$1 = state_26620;
var statearr_26631_26654 = state_26620__$1;
(statearr_26631_26654[(2)] = inst_26611);

(statearr_26631_26654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (9))){
var state_26620__$1 = state_26620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26632_26655 = state_26620__$1;
(statearr_26632_26655[(1)] = (11));

} else {
var statearr_26633_26656 = state_26620__$1;
(statearr_26633_26656[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (5))){
var inst_26597 = (state_26620[(7)]);
var state_26620__$1 = state_26620;
var statearr_26634_26657 = state_26620__$1;
(statearr_26634_26657[(2)] = inst_26597);

(statearr_26634_26657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (10))){
var inst_26616 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26635_26658 = state_26620__$1;
(statearr_26635_26658[(2)] = inst_26616);

(statearr_26635_26658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26621 === (8))){
var inst_26597 = (state_26620[(7)]);
var inst_26607 = cljs.core.next.call(null,inst_26597);
var inst_26597__$1 = inst_26607;
var state_26620__$1 = (function (){var statearr_26636 = state_26620;
(statearr_26636[(7)] = inst_26597__$1);

return statearr_26636;
})();
var statearr_26637_26659 = state_26620__$1;
(statearr_26637_26659[(2)] = null);

(statearr_26637_26659[(1)] = (2));


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
var statearr_26641 = [null,null,null,null,null,null,null,null];
(statearr_26641[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_26641[(1)] = (1));

return statearr_26641;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_26620){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26642){if((e26642 instanceof Object)){
var ex__21287__auto__ = e26642;
var statearr_26643_26660 = state_26620;
(statearr_26643_26660[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26661 = state_26620;
state_26620 = G__26661;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_26620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_26620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_26644 = f__21346__auto__.call(null);
(statearr_26644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26644;
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

cljs.core.async.Mux = (function (){var obj26663 = {};
return obj26663;
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


cljs.core.async.Mult = (function (){var obj26665 = {};
return obj26665;
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
if(typeof cljs.core.async.t26887 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26887 = (function (cs,ch,mult,meta26888){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26888 = meta26888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26887.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26887.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26887.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26887.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26887.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26889){
var self__ = this;
var _26889__$1 = this;
return self__.meta26888;
});})(cs))
;

cljs.core.async.t26887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26889,meta26888__$1){
var self__ = this;
var _26889__$1 = this;
return (new cljs.core.async.t26887(self__.cs,self__.ch,self__.mult,meta26888__$1));
});})(cs))
;

cljs.core.async.t26887.cljs$lang$type = true;

cljs.core.async.t26887.cljs$lang$ctorStr = "cljs.core.async/t26887";

cljs.core.async.t26887.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26887");
});})(cs))
;

cljs.core.async.__GT_t26887 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26887(cs__$1,ch__$1,mult__$1,meta26888){
return (new cljs.core.async.t26887(cs__$1,ch__$1,mult__$1,meta26888));
});})(cs))
;

}

return (new cljs.core.async.t26887(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21345__auto___27108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27108,cs,m,dchan,dctr,done){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27108,cs,m,dchan,dctr,done){
return (function (state_27020){
var state_val_27021 = (state_27020[(1)]);
if((state_val_27021 === (7))){
var inst_27016 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27022_27109 = state_27020__$1;
(statearr_27022_27109[(2)] = inst_27016);

(statearr_27022_27109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (20))){
var inst_26921 = (state_27020[(7)]);
var inst_26931 = cljs.core.first.call(null,inst_26921);
var inst_26932 = cljs.core.nth.call(null,inst_26931,(0),null);
var inst_26933 = cljs.core.nth.call(null,inst_26931,(1),null);
var state_27020__$1 = (function (){var statearr_27023 = state_27020;
(statearr_27023[(8)] = inst_26932);

return statearr_27023;
})();
if(cljs.core.truth_(inst_26933)){
var statearr_27024_27110 = state_27020__$1;
(statearr_27024_27110[(1)] = (22));

} else {
var statearr_27025_27111 = state_27020__$1;
(statearr_27025_27111[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (27))){
var inst_26968 = (state_27020[(9)]);
var inst_26892 = (state_27020[(10)]);
var inst_26963 = (state_27020[(11)]);
var inst_26961 = (state_27020[(12)]);
var inst_26968__$1 = cljs.core._nth.call(null,inst_26961,inst_26963);
var inst_26969 = cljs.core.async.put_BANG_.call(null,inst_26968__$1,inst_26892,done);
var state_27020__$1 = (function (){var statearr_27026 = state_27020;
(statearr_27026[(9)] = inst_26968__$1);

return statearr_27026;
})();
if(cljs.core.truth_(inst_26969)){
var statearr_27027_27112 = state_27020__$1;
(statearr_27027_27112[(1)] = (30));

} else {
var statearr_27028_27113 = state_27020__$1;
(statearr_27028_27113[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (1))){
var state_27020__$1 = state_27020;
var statearr_27029_27114 = state_27020__$1;
(statearr_27029_27114[(2)] = null);

(statearr_27029_27114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (24))){
var inst_26921 = (state_27020[(7)]);
var inst_26938 = (state_27020[(2)]);
var inst_26939 = cljs.core.next.call(null,inst_26921);
var inst_26901 = inst_26939;
var inst_26902 = null;
var inst_26903 = (0);
var inst_26904 = (0);
var state_27020__$1 = (function (){var statearr_27030 = state_27020;
(statearr_27030[(13)] = inst_26938);

(statearr_27030[(14)] = inst_26903);

(statearr_27030[(15)] = inst_26901);

(statearr_27030[(16)] = inst_26902);

(statearr_27030[(17)] = inst_26904);

return statearr_27030;
})();
var statearr_27031_27115 = state_27020__$1;
(statearr_27031_27115[(2)] = null);

(statearr_27031_27115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (39))){
var state_27020__$1 = state_27020;
var statearr_27035_27116 = state_27020__$1;
(statearr_27035_27116[(2)] = null);

(statearr_27035_27116[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (4))){
var inst_26892 = (state_27020[(10)]);
var inst_26892__$1 = (state_27020[(2)]);
var inst_26893 = (inst_26892__$1 == null);
var state_27020__$1 = (function (){var statearr_27036 = state_27020;
(statearr_27036[(10)] = inst_26892__$1);

return statearr_27036;
})();
if(cljs.core.truth_(inst_26893)){
var statearr_27037_27117 = state_27020__$1;
(statearr_27037_27117[(1)] = (5));

} else {
var statearr_27038_27118 = state_27020__$1;
(statearr_27038_27118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (15))){
var inst_26903 = (state_27020[(14)]);
var inst_26901 = (state_27020[(15)]);
var inst_26902 = (state_27020[(16)]);
var inst_26904 = (state_27020[(17)]);
var inst_26917 = (state_27020[(2)]);
var inst_26918 = (inst_26904 + (1));
var tmp27032 = inst_26903;
var tmp27033 = inst_26901;
var tmp27034 = inst_26902;
var inst_26901__$1 = tmp27033;
var inst_26902__$1 = tmp27034;
var inst_26903__$1 = tmp27032;
var inst_26904__$1 = inst_26918;
var state_27020__$1 = (function (){var statearr_27039 = state_27020;
(statearr_27039[(18)] = inst_26917);

(statearr_27039[(14)] = inst_26903__$1);

(statearr_27039[(15)] = inst_26901__$1);

(statearr_27039[(16)] = inst_26902__$1);

(statearr_27039[(17)] = inst_26904__$1);

return statearr_27039;
})();
var statearr_27040_27119 = state_27020__$1;
(statearr_27040_27119[(2)] = null);

(statearr_27040_27119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (21))){
var inst_26942 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27044_27120 = state_27020__$1;
(statearr_27044_27120[(2)] = inst_26942);

(statearr_27044_27120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (31))){
var inst_26968 = (state_27020[(9)]);
var inst_26972 = done.call(null,null);
var inst_26973 = cljs.core.async.untap_STAR_.call(null,m,inst_26968);
var state_27020__$1 = (function (){var statearr_27045 = state_27020;
(statearr_27045[(19)] = inst_26972);

return statearr_27045;
})();
var statearr_27046_27121 = state_27020__$1;
(statearr_27046_27121[(2)] = inst_26973);

(statearr_27046_27121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (32))){
var inst_26962 = (state_27020[(20)]);
var inst_26960 = (state_27020[(21)]);
var inst_26963 = (state_27020[(11)]);
var inst_26961 = (state_27020[(12)]);
var inst_26975 = (state_27020[(2)]);
var inst_26976 = (inst_26963 + (1));
var tmp27041 = inst_26962;
var tmp27042 = inst_26960;
var tmp27043 = inst_26961;
var inst_26960__$1 = tmp27042;
var inst_26961__$1 = tmp27043;
var inst_26962__$1 = tmp27041;
var inst_26963__$1 = inst_26976;
var state_27020__$1 = (function (){var statearr_27047 = state_27020;
(statearr_27047[(20)] = inst_26962__$1);

(statearr_27047[(21)] = inst_26960__$1);

(statearr_27047[(22)] = inst_26975);

(statearr_27047[(11)] = inst_26963__$1);

(statearr_27047[(12)] = inst_26961__$1);

return statearr_27047;
})();
var statearr_27048_27122 = state_27020__$1;
(statearr_27048_27122[(2)] = null);

(statearr_27048_27122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (40))){
var inst_26988 = (state_27020[(23)]);
var inst_26992 = done.call(null,null);
var inst_26993 = cljs.core.async.untap_STAR_.call(null,m,inst_26988);
var state_27020__$1 = (function (){var statearr_27049 = state_27020;
(statearr_27049[(24)] = inst_26992);

return statearr_27049;
})();
var statearr_27050_27123 = state_27020__$1;
(statearr_27050_27123[(2)] = inst_26993);

(statearr_27050_27123[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (33))){
var inst_26979 = (state_27020[(25)]);
var inst_26981 = cljs.core.chunked_seq_QMARK_.call(null,inst_26979);
var state_27020__$1 = state_27020;
if(inst_26981){
var statearr_27051_27124 = state_27020__$1;
(statearr_27051_27124[(1)] = (36));

} else {
var statearr_27052_27125 = state_27020__$1;
(statearr_27052_27125[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (13))){
var inst_26911 = (state_27020[(26)]);
var inst_26914 = cljs.core.async.close_BANG_.call(null,inst_26911);
var state_27020__$1 = state_27020;
var statearr_27053_27126 = state_27020__$1;
(statearr_27053_27126[(2)] = inst_26914);

(statearr_27053_27126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (22))){
var inst_26932 = (state_27020[(8)]);
var inst_26935 = cljs.core.async.close_BANG_.call(null,inst_26932);
var state_27020__$1 = state_27020;
var statearr_27054_27127 = state_27020__$1;
(statearr_27054_27127[(2)] = inst_26935);

(statearr_27054_27127[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (36))){
var inst_26979 = (state_27020[(25)]);
var inst_26983 = cljs.core.chunk_first.call(null,inst_26979);
var inst_26984 = cljs.core.chunk_rest.call(null,inst_26979);
var inst_26985 = cljs.core.count.call(null,inst_26983);
var inst_26960 = inst_26984;
var inst_26961 = inst_26983;
var inst_26962 = inst_26985;
var inst_26963 = (0);
var state_27020__$1 = (function (){var statearr_27055 = state_27020;
(statearr_27055[(20)] = inst_26962);

(statearr_27055[(21)] = inst_26960);

(statearr_27055[(11)] = inst_26963);

(statearr_27055[(12)] = inst_26961);

return statearr_27055;
})();
var statearr_27056_27128 = state_27020__$1;
(statearr_27056_27128[(2)] = null);

(statearr_27056_27128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (41))){
var inst_26979 = (state_27020[(25)]);
var inst_26995 = (state_27020[(2)]);
var inst_26996 = cljs.core.next.call(null,inst_26979);
var inst_26960 = inst_26996;
var inst_26961 = null;
var inst_26962 = (0);
var inst_26963 = (0);
var state_27020__$1 = (function (){var statearr_27057 = state_27020;
(statearr_27057[(20)] = inst_26962);

(statearr_27057[(21)] = inst_26960);

(statearr_27057[(27)] = inst_26995);

(statearr_27057[(11)] = inst_26963);

(statearr_27057[(12)] = inst_26961);

return statearr_27057;
})();
var statearr_27058_27129 = state_27020__$1;
(statearr_27058_27129[(2)] = null);

(statearr_27058_27129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (43))){
var state_27020__$1 = state_27020;
var statearr_27059_27130 = state_27020__$1;
(statearr_27059_27130[(2)] = null);

(statearr_27059_27130[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (29))){
var inst_27004 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27060_27131 = state_27020__$1;
(statearr_27060_27131[(2)] = inst_27004);

(statearr_27060_27131[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (44))){
var inst_27013 = (state_27020[(2)]);
var state_27020__$1 = (function (){var statearr_27061 = state_27020;
(statearr_27061[(28)] = inst_27013);

return statearr_27061;
})();
var statearr_27062_27132 = state_27020__$1;
(statearr_27062_27132[(2)] = null);

(statearr_27062_27132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (6))){
var inst_26952 = (state_27020[(29)]);
var inst_26951 = cljs.core.deref.call(null,cs);
var inst_26952__$1 = cljs.core.keys.call(null,inst_26951);
var inst_26953 = cljs.core.count.call(null,inst_26952__$1);
var inst_26954 = cljs.core.reset_BANG_.call(null,dctr,inst_26953);
var inst_26959 = cljs.core.seq.call(null,inst_26952__$1);
var inst_26960 = inst_26959;
var inst_26961 = null;
var inst_26962 = (0);
var inst_26963 = (0);
var state_27020__$1 = (function (){var statearr_27063 = state_27020;
(statearr_27063[(29)] = inst_26952__$1);

(statearr_27063[(30)] = inst_26954);

(statearr_27063[(20)] = inst_26962);

(statearr_27063[(21)] = inst_26960);

(statearr_27063[(11)] = inst_26963);

(statearr_27063[(12)] = inst_26961);

return statearr_27063;
})();
var statearr_27064_27133 = state_27020__$1;
(statearr_27064_27133[(2)] = null);

(statearr_27064_27133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (28))){
var inst_26979 = (state_27020[(25)]);
var inst_26960 = (state_27020[(21)]);
var inst_26979__$1 = cljs.core.seq.call(null,inst_26960);
var state_27020__$1 = (function (){var statearr_27065 = state_27020;
(statearr_27065[(25)] = inst_26979__$1);

return statearr_27065;
})();
if(inst_26979__$1){
var statearr_27066_27134 = state_27020__$1;
(statearr_27066_27134[(1)] = (33));

} else {
var statearr_27067_27135 = state_27020__$1;
(statearr_27067_27135[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (25))){
var inst_26962 = (state_27020[(20)]);
var inst_26963 = (state_27020[(11)]);
var inst_26965 = (inst_26963 < inst_26962);
var inst_26966 = inst_26965;
var state_27020__$1 = state_27020;
if(cljs.core.truth_(inst_26966)){
var statearr_27068_27136 = state_27020__$1;
(statearr_27068_27136[(1)] = (27));

} else {
var statearr_27069_27137 = state_27020__$1;
(statearr_27069_27137[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (34))){
var state_27020__$1 = state_27020;
var statearr_27070_27138 = state_27020__$1;
(statearr_27070_27138[(2)] = null);

(statearr_27070_27138[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (17))){
var state_27020__$1 = state_27020;
var statearr_27071_27139 = state_27020__$1;
(statearr_27071_27139[(2)] = null);

(statearr_27071_27139[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (3))){
var inst_27018 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27020__$1,inst_27018);
} else {
if((state_val_27021 === (12))){
var inst_26947 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27072_27140 = state_27020__$1;
(statearr_27072_27140[(2)] = inst_26947);

(statearr_27072_27140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (2))){
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27020__$1,(4),ch);
} else {
if((state_val_27021 === (23))){
var state_27020__$1 = state_27020;
var statearr_27073_27141 = state_27020__$1;
(statearr_27073_27141[(2)] = null);

(statearr_27073_27141[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (35))){
var inst_27002 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27074_27142 = state_27020__$1;
(statearr_27074_27142[(2)] = inst_27002);

(statearr_27074_27142[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (19))){
var inst_26921 = (state_27020[(7)]);
var inst_26925 = cljs.core.chunk_first.call(null,inst_26921);
var inst_26926 = cljs.core.chunk_rest.call(null,inst_26921);
var inst_26927 = cljs.core.count.call(null,inst_26925);
var inst_26901 = inst_26926;
var inst_26902 = inst_26925;
var inst_26903 = inst_26927;
var inst_26904 = (0);
var state_27020__$1 = (function (){var statearr_27075 = state_27020;
(statearr_27075[(14)] = inst_26903);

(statearr_27075[(15)] = inst_26901);

(statearr_27075[(16)] = inst_26902);

(statearr_27075[(17)] = inst_26904);

return statearr_27075;
})();
var statearr_27076_27143 = state_27020__$1;
(statearr_27076_27143[(2)] = null);

(statearr_27076_27143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (11))){
var inst_26901 = (state_27020[(15)]);
var inst_26921 = (state_27020[(7)]);
var inst_26921__$1 = cljs.core.seq.call(null,inst_26901);
var state_27020__$1 = (function (){var statearr_27077 = state_27020;
(statearr_27077[(7)] = inst_26921__$1);

return statearr_27077;
})();
if(inst_26921__$1){
var statearr_27078_27144 = state_27020__$1;
(statearr_27078_27144[(1)] = (16));

} else {
var statearr_27079_27145 = state_27020__$1;
(statearr_27079_27145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (9))){
var inst_26949 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27080_27146 = state_27020__$1;
(statearr_27080_27146[(2)] = inst_26949);

(statearr_27080_27146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (5))){
var inst_26899 = cljs.core.deref.call(null,cs);
var inst_26900 = cljs.core.seq.call(null,inst_26899);
var inst_26901 = inst_26900;
var inst_26902 = null;
var inst_26903 = (0);
var inst_26904 = (0);
var state_27020__$1 = (function (){var statearr_27081 = state_27020;
(statearr_27081[(14)] = inst_26903);

(statearr_27081[(15)] = inst_26901);

(statearr_27081[(16)] = inst_26902);

(statearr_27081[(17)] = inst_26904);

return statearr_27081;
})();
var statearr_27082_27147 = state_27020__$1;
(statearr_27082_27147[(2)] = null);

(statearr_27082_27147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (14))){
var state_27020__$1 = state_27020;
var statearr_27083_27148 = state_27020__$1;
(statearr_27083_27148[(2)] = null);

(statearr_27083_27148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (45))){
var inst_27010 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27084_27149 = state_27020__$1;
(statearr_27084_27149[(2)] = inst_27010);

(statearr_27084_27149[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (26))){
var inst_26952 = (state_27020[(29)]);
var inst_27006 = (state_27020[(2)]);
var inst_27007 = cljs.core.seq.call(null,inst_26952);
var state_27020__$1 = (function (){var statearr_27085 = state_27020;
(statearr_27085[(31)] = inst_27006);

return statearr_27085;
})();
if(inst_27007){
var statearr_27086_27150 = state_27020__$1;
(statearr_27086_27150[(1)] = (42));

} else {
var statearr_27087_27151 = state_27020__$1;
(statearr_27087_27151[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (16))){
var inst_26921 = (state_27020[(7)]);
var inst_26923 = cljs.core.chunked_seq_QMARK_.call(null,inst_26921);
var state_27020__$1 = state_27020;
if(inst_26923){
var statearr_27088_27152 = state_27020__$1;
(statearr_27088_27152[(1)] = (19));

} else {
var statearr_27089_27153 = state_27020__$1;
(statearr_27089_27153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (38))){
var inst_26999 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27090_27154 = state_27020__$1;
(statearr_27090_27154[(2)] = inst_26999);

(statearr_27090_27154[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (30))){
var state_27020__$1 = state_27020;
var statearr_27091_27155 = state_27020__$1;
(statearr_27091_27155[(2)] = null);

(statearr_27091_27155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (10))){
var inst_26902 = (state_27020[(16)]);
var inst_26904 = (state_27020[(17)]);
var inst_26910 = cljs.core._nth.call(null,inst_26902,inst_26904);
var inst_26911 = cljs.core.nth.call(null,inst_26910,(0),null);
var inst_26912 = cljs.core.nth.call(null,inst_26910,(1),null);
var state_27020__$1 = (function (){var statearr_27092 = state_27020;
(statearr_27092[(26)] = inst_26911);

return statearr_27092;
})();
if(cljs.core.truth_(inst_26912)){
var statearr_27093_27156 = state_27020__$1;
(statearr_27093_27156[(1)] = (13));

} else {
var statearr_27094_27157 = state_27020__$1;
(statearr_27094_27157[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (18))){
var inst_26945 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27095_27158 = state_27020__$1;
(statearr_27095_27158[(2)] = inst_26945);

(statearr_27095_27158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (42))){
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27020__$1,(45),dchan);
} else {
if((state_val_27021 === (37))){
var inst_26892 = (state_27020[(10)]);
var inst_26979 = (state_27020[(25)]);
var inst_26988 = (state_27020[(23)]);
var inst_26988__$1 = cljs.core.first.call(null,inst_26979);
var inst_26989 = cljs.core.async.put_BANG_.call(null,inst_26988__$1,inst_26892,done);
var state_27020__$1 = (function (){var statearr_27096 = state_27020;
(statearr_27096[(23)] = inst_26988__$1);

return statearr_27096;
})();
if(cljs.core.truth_(inst_26989)){
var statearr_27097_27159 = state_27020__$1;
(statearr_27097_27159[(1)] = (39));

} else {
var statearr_27098_27160 = state_27020__$1;
(statearr_27098_27160[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (8))){
var inst_26903 = (state_27020[(14)]);
var inst_26904 = (state_27020[(17)]);
var inst_26906 = (inst_26904 < inst_26903);
var inst_26907 = inst_26906;
var state_27020__$1 = state_27020;
if(cljs.core.truth_(inst_26907)){
var statearr_27099_27161 = state_27020__$1;
(statearr_27099_27161[(1)] = (10));

} else {
var statearr_27100_27162 = state_27020__$1;
(statearr_27100_27162[(1)] = (11));

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
});})(c__21345__auto___27108,cs,m,dchan,dctr,done))
;
return ((function (switch__21283__auto__,c__21345__auto___27108,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21284__auto__ = null;
var cljs$core$async$mult_$_state_machine__21284__auto____0 = (function (){
var statearr_27104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27104[(0)] = cljs$core$async$mult_$_state_machine__21284__auto__);

(statearr_27104[(1)] = (1));

return statearr_27104;
});
var cljs$core$async$mult_$_state_machine__21284__auto____1 = (function (state_27020){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27105){if((e27105 instanceof Object)){
var ex__21287__auto__ = e27105;
var statearr_27106_27163 = state_27020;
(statearr_27106_27163[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27164 = state_27020;
state_27020 = G__27164;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21284__auto__ = function(state_27020){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21284__auto____1.call(this,state_27020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21284__auto____0;
cljs$core$async$mult_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21284__auto____1;
return cljs$core$async$mult_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27108,cs,m,dchan,dctr,done))
})();
var state__21347__auto__ = (function (){var statearr_27107 = f__21346__auto__.call(null);
(statearr_27107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27108);

return statearr_27107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27108,cs,m,dchan,dctr,done))
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
var G__27166 = arguments.length;
switch (G__27166) {
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

cljs.core.async.Mix = (function (){var obj27169 = {};
return obj27169;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27174){
var map__27175 = p__27174;
var map__27175__$1 = ((cljs.core.seq_QMARK_.call(null,map__27175))?cljs.core.apply.call(null,cljs.core.hash_map,map__27175):map__27175);
var opts = map__27175__$1;
var statearr_27176_27179 = state;
(statearr_27176_27179[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27175,map__27175__$1,opts){
return (function (val){
var statearr_27177_27180 = state;
(statearr_27177_27180[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27175,map__27175__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27178_27181 = state;
(statearr_27178_27181[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27170){
var G__27171 = cljs.core.first.call(null,seq27170);
var seq27170__$1 = cljs.core.next.call(null,seq27170);
var G__27172 = cljs.core.first.call(null,seq27170__$1);
var seq27170__$2 = cljs.core.next.call(null,seq27170__$1);
var G__27173 = cljs.core.first.call(null,seq27170__$2);
var seq27170__$3 = cljs.core.next.call(null,seq27170__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27171,G__27172,G__27173,seq27170__$3);
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
if(typeof cljs.core.async.t27301 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27301 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27302){
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
this.meta27302 = meta27302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27301.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t27301.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27303){
var self__ = this;
var _27303__$1 = this;
return self__.meta27302;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27303,meta27302__$1){
var self__ = this;
var _27303__$1 = this;
return (new cljs.core.async.t27301(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27302__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27301.cljs$lang$type = true;

cljs.core.async.t27301.cljs$lang$ctorStr = "cljs.core.async/t27301";

cljs.core.async.t27301.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27301");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27301 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27302){
return (new cljs.core.async.t27301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27302));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27301(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21345__auto___27420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27373){
var state_val_27374 = (state_27373[(1)]);
if((state_val_27374 === (7))){
var inst_27317 = (state_27373[(7)]);
var inst_27322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27317);
var state_27373__$1 = state_27373;
var statearr_27375_27421 = state_27373__$1;
(statearr_27375_27421[(2)] = inst_27322);

(statearr_27375_27421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (20))){
var inst_27332 = (state_27373[(8)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27373__$1,(23),out,inst_27332);
} else {
if((state_val_27374 === (1))){
var inst_27307 = (state_27373[(9)]);
var inst_27307__$1 = calc_state.call(null);
var inst_27308 = cljs.core.seq_QMARK_.call(null,inst_27307__$1);
var state_27373__$1 = (function (){var statearr_27376 = state_27373;
(statearr_27376[(9)] = inst_27307__$1);

return statearr_27376;
})();
if(inst_27308){
var statearr_27377_27422 = state_27373__$1;
(statearr_27377_27422[(1)] = (2));

} else {
var statearr_27378_27423 = state_27373__$1;
(statearr_27378_27423[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (24))){
var inst_27325 = (state_27373[(10)]);
var inst_27317 = inst_27325;
var state_27373__$1 = (function (){var statearr_27379 = state_27373;
(statearr_27379[(7)] = inst_27317);

return statearr_27379;
})();
var statearr_27380_27424 = state_27373__$1;
(statearr_27380_27424[(2)] = null);

(statearr_27380_27424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (4))){
var inst_27307 = (state_27373[(9)]);
var inst_27313 = (state_27373[(2)]);
var inst_27314 = cljs.core.get.call(null,inst_27313,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27315 = cljs.core.get.call(null,inst_27313,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27316 = cljs.core.get.call(null,inst_27313,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27317 = inst_27307;
var state_27373__$1 = (function (){var statearr_27381 = state_27373;
(statearr_27381[(11)] = inst_27316);

(statearr_27381[(7)] = inst_27317);

(statearr_27381[(12)] = inst_27315);

(statearr_27381[(13)] = inst_27314);

return statearr_27381;
})();
var statearr_27382_27425 = state_27373__$1;
(statearr_27382_27425[(2)] = null);

(statearr_27382_27425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (15))){
var state_27373__$1 = state_27373;
var statearr_27383_27426 = state_27373__$1;
(statearr_27383_27426[(2)] = null);

(statearr_27383_27426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (21))){
var inst_27325 = (state_27373[(10)]);
var inst_27317 = inst_27325;
var state_27373__$1 = (function (){var statearr_27384 = state_27373;
(statearr_27384[(7)] = inst_27317);

return statearr_27384;
})();
var statearr_27385_27427 = state_27373__$1;
(statearr_27385_27427[(2)] = null);

(statearr_27385_27427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (13))){
var inst_27369 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27386_27428 = state_27373__$1;
(statearr_27386_27428[(2)] = inst_27369);

(statearr_27386_27428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (22))){
var inst_27367 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27387_27429 = state_27373__$1;
(statearr_27387_27429[(2)] = inst_27367);

(statearr_27387_27429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (6))){
var inst_27371 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27373__$1,inst_27371);
} else {
if((state_val_27374 === (25))){
var state_27373__$1 = state_27373;
var statearr_27388_27430 = state_27373__$1;
(statearr_27388_27430[(2)] = null);

(statearr_27388_27430[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (17))){
var inst_27347 = (state_27373[(14)]);
var state_27373__$1 = state_27373;
var statearr_27389_27431 = state_27373__$1;
(statearr_27389_27431[(2)] = inst_27347);

(statearr_27389_27431[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (3))){
var inst_27307 = (state_27373[(9)]);
var state_27373__$1 = state_27373;
var statearr_27390_27432 = state_27373__$1;
(statearr_27390_27432[(2)] = inst_27307);

(statearr_27390_27432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (12))){
var inst_27328 = (state_27373[(15)]);
var inst_27347 = (state_27373[(14)]);
var inst_27333 = (state_27373[(16)]);
var inst_27347__$1 = inst_27328.call(null,inst_27333);
var state_27373__$1 = (function (){var statearr_27391 = state_27373;
(statearr_27391[(14)] = inst_27347__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27347__$1)){
var statearr_27392_27433 = state_27373__$1;
(statearr_27392_27433[(1)] = (17));

} else {
var statearr_27393_27434 = state_27373__$1;
(statearr_27393_27434[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (2))){
var inst_27307 = (state_27373[(9)]);
var inst_27310 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27307);
var state_27373__$1 = state_27373;
var statearr_27394_27435 = state_27373__$1;
(statearr_27394_27435[(2)] = inst_27310);

(statearr_27394_27435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (23))){
var inst_27358 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
if(cljs.core.truth_(inst_27358)){
var statearr_27395_27436 = state_27373__$1;
(statearr_27395_27436[(1)] = (24));

} else {
var statearr_27396_27437 = state_27373__$1;
(statearr_27396_27437[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (19))){
var inst_27355 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
if(cljs.core.truth_(inst_27355)){
var statearr_27397_27438 = state_27373__$1;
(statearr_27397_27438[(1)] = (20));

} else {
var statearr_27398_27439 = state_27373__$1;
(statearr_27398_27439[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (11))){
var inst_27332 = (state_27373[(8)]);
var inst_27338 = (inst_27332 == null);
var state_27373__$1 = state_27373;
if(cljs.core.truth_(inst_27338)){
var statearr_27399_27440 = state_27373__$1;
(statearr_27399_27440[(1)] = (14));

} else {
var statearr_27400_27441 = state_27373__$1;
(statearr_27400_27441[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (9))){
var inst_27325 = (state_27373[(10)]);
var inst_27325__$1 = (state_27373[(2)]);
var inst_27326 = cljs.core.get.call(null,inst_27325__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27327 = cljs.core.get.call(null,inst_27325__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27328 = cljs.core.get.call(null,inst_27325__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27373__$1 = (function (){var statearr_27401 = state_27373;
(statearr_27401[(10)] = inst_27325__$1);

(statearr_27401[(17)] = inst_27327);

(statearr_27401[(15)] = inst_27328);

return statearr_27401;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27373__$1,(10),inst_27326);
} else {
if((state_val_27374 === (5))){
var inst_27317 = (state_27373[(7)]);
var inst_27320 = cljs.core.seq_QMARK_.call(null,inst_27317);
var state_27373__$1 = state_27373;
if(inst_27320){
var statearr_27402_27442 = state_27373__$1;
(statearr_27402_27442[(1)] = (7));

} else {
var statearr_27403_27443 = state_27373__$1;
(statearr_27403_27443[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (14))){
var inst_27333 = (state_27373[(16)]);
var inst_27340 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27333);
var state_27373__$1 = state_27373;
var statearr_27404_27444 = state_27373__$1;
(statearr_27404_27444[(2)] = inst_27340);

(statearr_27404_27444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (26))){
var inst_27363 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27405_27445 = state_27373__$1;
(statearr_27405_27445[(2)] = inst_27363);

(statearr_27405_27445[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (16))){
var inst_27343 = (state_27373[(2)]);
var inst_27344 = calc_state.call(null);
var inst_27317 = inst_27344;
var state_27373__$1 = (function (){var statearr_27406 = state_27373;
(statearr_27406[(7)] = inst_27317);

(statearr_27406[(18)] = inst_27343);

return statearr_27406;
})();
var statearr_27407_27446 = state_27373__$1;
(statearr_27407_27446[(2)] = null);

(statearr_27407_27446[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (10))){
var inst_27332 = (state_27373[(8)]);
var inst_27333 = (state_27373[(16)]);
var inst_27331 = (state_27373[(2)]);
var inst_27332__$1 = cljs.core.nth.call(null,inst_27331,(0),null);
var inst_27333__$1 = cljs.core.nth.call(null,inst_27331,(1),null);
var inst_27334 = (inst_27332__$1 == null);
var inst_27335 = cljs.core._EQ_.call(null,inst_27333__$1,change);
var inst_27336 = (inst_27334) || (inst_27335);
var state_27373__$1 = (function (){var statearr_27408 = state_27373;
(statearr_27408[(8)] = inst_27332__$1);

(statearr_27408[(16)] = inst_27333__$1);

return statearr_27408;
})();
if(cljs.core.truth_(inst_27336)){
var statearr_27409_27447 = state_27373__$1;
(statearr_27409_27447[(1)] = (11));

} else {
var statearr_27410_27448 = state_27373__$1;
(statearr_27410_27448[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (18))){
var inst_27327 = (state_27373[(17)]);
var inst_27328 = (state_27373[(15)]);
var inst_27333 = (state_27373[(16)]);
var inst_27350 = cljs.core.empty_QMARK_.call(null,inst_27328);
var inst_27351 = inst_27327.call(null,inst_27333);
var inst_27352 = cljs.core.not.call(null,inst_27351);
var inst_27353 = (inst_27350) && (inst_27352);
var state_27373__$1 = state_27373;
var statearr_27411_27449 = state_27373__$1;
(statearr_27411_27449[(2)] = inst_27353);

(statearr_27411_27449[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (8))){
var inst_27317 = (state_27373[(7)]);
var state_27373__$1 = state_27373;
var statearr_27412_27450 = state_27373__$1;
(statearr_27412_27450[(2)] = inst_27317);

(statearr_27412_27450[(1)] = (9));


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
});})(c__21345__auto___27420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21283__auto__,c__21345__auto___27420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21284__auto__ = null;
var cljs$core$async$mix_$_state_machine__21284__auto____0 = (function (){
var statearr_27416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27416[(0)] = cljs$core$async$mix_$_state_machine__21284__auto__);

(statearr_27416[(1)] = (1));

return statearr_27416;
});
var cljs$core$async$mix_$_state_machine__21284__auto____1 = (function (state_27373){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27417){if((e27417 instanceof Object)){
var ex__21287__auto__ = e27417;
var statearr_27418_27451 = state_27373;
(statearr_27418_27451[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27452 = state_27373;
state_27373 = G__27452;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21284__auto__ = function(state_27373){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21284__auto____1.call(this,state_27373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21284__auto____0;
cljs$core$async$mix_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21284__auto____1;
return cljs$core$async$mix_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21347__auto__ = (function (){var statearr_27419 = f__21346__auto__.call(null);
(statearr_27419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27420);

return statearr_27419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj27454 = {};
return obj27454;
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
var G__27456 = arguments.length;
switch (G__27456) {
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
var G__27460 = arguments.length;
switch (G__27460) {
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
return (function (p1__27458_SHARP_){
if(cljs.core.truth_(p1__27458_SHARP_.call(null,topic))){
return p1__27458_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27458_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18121__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27461 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27461 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta27462){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta27462 = meta27462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27461.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27461.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27461.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t27461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27461.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27463){
var self__ = this;
var _27463__$1 = this;
return self__.meta27462;
});})(mults,ensure_mult))
;

cljs.core.async.t27461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27463,meta27462__$1){
var self__ = this;
var _27463__$1 = this;
return (new cljs.core.async.t27461(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta27462__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27461.cljs$lang$type = true;

cljs.core.async.t27461.cljs$lang$ctorStr = "cljs.core.async/t27461";

cljs.core.async.t27461.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27461");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27461 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27461(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27462){
return (new cljs.core.async.t27461(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27462));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27461(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21345__auto___27584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27584,mults,ensure_mult,p){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27584,mults,ensure_mult,p){
return (function (state_27535){
var state_val_27536 = (state_27535[(1)]);
if((state_val_27536 === (7))){
var inst_27531 = (state_27535[(2)]);
var state_27535__$1 = state_27535;
var statearr_27537_27585 = state_27535__$1;
(statearr_27537_27585[(2)] = inst_27531);

(statearr_27537_27585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (20))){
var state_27535__$1 = state_27535;
var statearr_27538_27586 = state_27535__$1;
(statearr_27538_27586[(2)] = null);

(statearr_27538_27586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (1))){
var state_27535__$1 = state_27535;
var statearr_27539_27587 = state_27535__$1;
(statearr_27539_27587[(2)] = null);

(statearr_27539_27587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (24))){
var inst_27514 = (state_27535[(7)]);
var inst_27523 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27514);
var state_27535__$1 = state_27535;
var statearr_27540_27588 = state_27535__$1;
(statearr_27540_27588[(2)] = inst_27523);

(statearr_27540_27588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (4))){
var inst_27466 = (state_27535[(8)]);
var inst_27466__$1 = (state_27535[(2)]);
var inst_27467 = (inst_27466__$1 == null);
var state_27535__$1 = (function (){var statearr_27541 = state_27535;
(statearr_27541[(8)] = inst_27466__$1);

return statearr_27541;
})();
if(cljs.core.truth_(inst_27467)){
var statearr_27542_27589 = state_27535__$1;
(statearr_27542_27589[(1)] = (5));

} else {
var statearr_27543_27590 = state_27535__$1;
(statearr_27543_27590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (15))){
var inst_27508 = (state_27535[(2)]);
var state_27535__$1 = state_27535;
var statearr_27544_27591 = state_27535__$1;
(statearr_27544_27591[(2)] = inst_27508);

(statearr_27544_27591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (21))){
var inst_27528 = (state_27535[(2)]);
var state_27535__$1 = (function (){var statearr_27545 = state_27535;
(statearr_27545[(9)] = inst_27528);

return statearr_27545;
})();
var statearr_27546_27592 = state_27535__$1;
(statearr_27546_27592[(2)] = null);

(statearr_27546_27592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (13))){
var inst_27490 = (state_27535[(10)]);
var inst_27492 = cljs.core.chunked_seq_QMARK_.call(null,inst_27490);
var state_27535__$1 = state_27535;
if(inst_27492){
var statearr_27547_27593 = state_27535__$1;
(statearr_27547_27593[(1)] = (16));

} else {
var statearr_27548_27594 = state_27535__$1;
(statearr_27548_27594[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (22))){
var inst_27520 = (state_27535[(2)]);
var state_27535__$1 = state_27535;
if(cljs.core.truth_(inst_27520)){
var statearr_27549_27595 = state_27535__$1;
(statearr_27549_27595[(1)] = (23));

} else {
var statearr_27550_27596 = state_27535__$1;
(statearr_27550_27596[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (6))){
var inst_27514 = (state_27535[(7)]);
var inst_27466 = (state_27535[(8)]);
var inst_27516 = (state_27535[(11)]);
var inst_27514__$1 = topic_fn.call(null,inst_27466);
var inst_27515 = cljs.core.deref.call(null,mults);
var inst_27516__$1 = cljs.core.get.call(null,inst_27515,inst_27514__$1);
var state_27535__$1 = (function (){var statearr_27551 = state_27535;
(statearr_27551[(7)] = inst_27514__$1);

(statearr_27551[(11)] = inst_27516__$1);

return statearr_27551;
})();
if(cljs.core.truth_(inst_27516__$1)){
var statearr_27552_27597 = state_27535__$1;
(statearr_27552_27597[(1)] = (19));

} else {
var statearr_27553_27598 = state_27535__$1;
(statearr_27553_27598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (25))){
var inst_27525 = (state_27535[(2)]);
var state_27535__$1 = state_27535;
var statearr_27554_27599 = state_27535__$1;
(statearr_27554_27599[(2)] = inst_27525);

(statearr_27554_27599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (17))){
var inst_27490 = (state_27535[(10)]);
var inst_27499 = cljs.core.first.call(null,inst_27490);
var inst_27500 = cljs.core.async.muxch_STAR_.call(null,inst_27499);
var inst_27501 = cljs.core.async.close_BANG_.call(null,inst_27500);
var inst_27502 = cljs.core.next.call(null,inst_27490);
var inst_27476 = inst_27502;
var inst_27477 = null;
var inst_27478 = (0);
var inst_27479 = (0);
var state_27535__$1 = (function (){var statearr_27555 = state_27535;
(statearr_27555[(12)] = inst_27477);

(statearr_27555[(13)] = inst_27501);

(statearr_27555[(14)] = inst_27476);

(statearr_27555[(15)] = inst_27479);

(statearr_27555[(16)] = inst_27478);

return statearr_27555;
})();
var statearr_27556_27600 = state_27535__$1;
(statearr_27556_27600[(2)] = null);

(statearr_27556_27600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (3))){
var inst_27533 = (state_27535[(2)]);
var state_27535__$1 = state_27535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27535__$1,inst_27533);
} else {
if((state_val_27536 === (12))){
var inst_27510 = (state_27535[(2)]);
var state_27535__$1 = state_27535;
var statearr_27557_27601 = state_27535__$1;
(statearr_27557_27601[(2)] = inst_27510);

(statearr_27557_27601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (2))){
var state_27535__$1 = state_27535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27535__$1,(4),ch);
} else {
if((state_val_27536 === (23))){
var state_27535__$1 = state_27535;
var statearr_27558_27602 = state_27535__$1;
(statearr_27558_27602[(2)] = null);

(statearr_27558_27602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (19))){
var inst_27466 = (state_27535[(8)]);
var inst_27516 = (state_27535[(11)]);
var inst_27518 = cljs.core.async.muxch_STAR_.call(null,inst_27516);
var state_27535__$1 = state_27535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27535__$1,(22),inst_27518,inst_27466);
} else {
if((state_val_27536 === (11))){
var inst_27476 = (state_27535[(14)]);
var inst_27490 = (state_27535[(10)]);
var inst_27490__$1 = cljs.core.seq.call(null,inst_27476);
var state_27535__$1 = (function (){var statearr_27559 = state_27535;
(statearr_27559[(10)] = inst_27490__$1);

return statearr_27559;
})();
if(inst_27490__$1){
var statearr_27560_27603 = state_27535__$1;
(statearr_27560_27603[(1)] = (13));

} else {
var statearr_27561_27604 = state_27535__$1;
(statearr_27561_27604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (9))){
var inst_27512 = (state_27535[(2)]);
var state_27535__$1 = state_27535;
var statearr_27562_27605 = state_27535__$1;
(statearr_27562_27605[(2)] = inst_27512);

(statearr_27562_27605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (5))){
var inst_27473 = cljs.core.deref.call(null,mults);
var inst_27474 = cljs.core.vals.call(null,inst_27473);
var inst_27475 = cljs.core.seq.call(null,inst_27474);
var inst_27476 = inst_27475;
var inst_27477 = null;
var inst_27478 = (0);
var inst_27479 = (0);
var state_27535__$1 = (function (){var statearr_27563 = state_27535;
(statearr_27563[(12)] = inst_27477);

(statearr_27563[(14)] = inst_27476);

(statearr_27563[(15)] = inst_27479);

(statearr_27563[(16)] = inst_27478);

return statearr_27563;
})();
var statearr_27564_27606 = state_27535__$1;
(statearr_27564_27606[(2)] = null);

(statearr_27564_27606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (14))){
var state_27535__$1 = state_27535;
var statearr_27568_27607 = state_27535__$1;
(statearr_27568_27607[(2)] = null);

(statearr_27568_27607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (16))){
var inst_27490 = (state_27535[(10)]);
var inst_27494 = cljs.core.chunk_first.call(null,inst_27490);
var inst_27495 = cljs.core.chunk_rest.call(null,inst_27490);
var inst_27496 = cljs.core.count.call(null,inst_27494);
var inst_27476 = inst_27495;
var inst_27477 = inst_27494;
var inst_27478 = inst_27496;
var inst_27479 = (0);
var state_27535__$1 = (function (){var statearr_27569 = state_27535;
(statearr_27569[(12)] = inst_27477);

(statearr_27569[(14)] = inst_27476);

(statearr_27569[(15)] = inst_27479);

(statearr_27569[(16)] = inst_27478);

return statearr_27569;
})();
var statearr_27570_27608 = state_27535__$1;
(statearr_27570_27608[(2)] = null);

(statearr_27570_27608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (10))){
var inst_27477 = (state_27535[(12)]);
var inst_27476 = (state_27535[(14)]);
var inst_27479 = (state_27535[(15)]);
var inst_27478 = (state_27535[(16)]);
var inst_27484 = cljs.core._nth.call(null,inst_27477,inst_27479);
var inst_27485 = cljs.core.async.muxch_STAR_.call(null,inst_27484);
var inst_27486 = cljs.core.async.close_BANG_.call(null,inst_27485);
var inst_27487 = (inst_27479 + (1));
var tmp27565 = inst_27477;
var tmp27566 = inst_27476;
var tmp27567 = inst_27478;
var inst_27476__$1 = tmp27566;
var inst_27477__$1 = tmp27565;
var inst_27478__$1 = tmp27567;
var inst_27479__$1 = inst_27487;
var state_27535__$1 = (function (){var statearr_27571 = state_27535;
(statearr_27571[(12)] = inst_27477__$1);

(statearr_27571[(14)] = inst_27476__$1);

(statearr_27571[(15)] = inst_27479__$1);

(statearr_27571[(16)] = inst_27478__$1);

(statearr_27571[(17)] = inst_27486);

return statearr_27571;
})();
var statearr_27572_27609 = state_27535__$1;
(statearr_27572_27609[(2)] = null);

(statearr_27572_27609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (18))){
var inst_27505 = (state_27535[(2)]);
var state_27535__$1 = state_27535;
var statearr_27573_27610 = state_27535__$1;
(statearr_27573_27610[(2)] = inst_27505);

(statearr_27573_27610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27536 === (8))){
var inst_27479 = (state_27535[(15)]);
var inst_27478 = (state_27535[(16)]);
var inst_27481 = (inst_27479 < inst_27478);
var inst_27482 = inst_27481;
var state_27535__$1 = state_27535;
if(cljs.core.truth_(inst_27482)){
var statearr_27574_27611 = state_27535__$1;
(statearr_27574_27611[(1)] = (10));

} else {
var statearr_27575_27612 = state_27535__$1;
(statearr_27575_27612[(1)] = (11));

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
});})(c__21345__auto___27584,mults,ensure_mult,p))
;
return ((function (switch__21283__auto__,c__21345__auto___27584,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27579[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27579[(1)] = (1));

return statearr_27579;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27535){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27580){if((e27580 instanceof Object)){
var ex__21287__auto__ = e27580;
var statearr_27581_27613 = state_27535;
(statearr_27581_27613[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27614 = state_27535;
state_27535 = G__27614;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27584,mults,ensure_mult,p))
})();
var state__21347__auto__ = (function (){var statearr_27582 = f__21346__auto__.call(null);
(statearr_27582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27584);

return statearr_27582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27584,mults,ensure_mult,p))
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
var G__27616 = arguments.length;
switch (G__27616) {
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
var G__27619 = arguments.length;
switch (G__27619) {
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
var G__27622 = arguments.length;
switch (G__27622) {
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
var c__21345__auto___27692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27692,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27692,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27661){
var state_val_27662 = (state_27661[(1)]);
if((state_val_27662 === (7))){
var state_27661__$1 = state_27661;
var statearr_27663_27693 = state_27661__$1;
(statearr_27663_27693[(2)] = null);

(statearr_27663_27693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (1))){
var state_27661__$1 = state_27661;
var statearr_27664_27694 = state_27661__$1;
(statearr_27664_27694[(2)] = null);

(statearr_27664_27694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (4))){
var inst_27625 = (state_27661[(7)]);
var inst_27627 = (inst_27625 < cnt);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27627)){
var statearr_27665_27695 = state_27661__$1;
(statearr_27665_27695[(1)] = (6));

} else {
var statearr_27666_27696 = state_27661__$1;
(statearr_27666_27696[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (15))){
var inst_27657 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27667_27697 = state_27661__$1;
(statearr_27667_27697[(2)] = inst_27657);

(statearr_27667_27697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (13))){
var inst_27650 = cljs.core.async.close_BANG_.call(null,out);
var state_27661__$1 = state_27661;
var statearr_27668_27698 = state_27661__$1;
(statearr_27668_27698[(2)] = inst_27650);

(statearr_27668_27698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (6))){
var state_27661__$1 = state_27661;
var statearr_27669_27699 = state_27661__$1;
(statearr_27669_27699[(2)] = null);

(statearr_27669_27699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (3))){
var inst_27659 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27661__$1,inst_27659);
} else {
if((state_val_27662 === (12))){
var inst_27647 = (state_27661[(8)]);
var inst_27647__$1 = (state_27661[(2)]);
var inst_27648 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27647__$1);
var state_27661__$1 = (function (){var statearr_27670 = state_27661;
(statearr_27670[(8)] = inst_27647__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27648)){
var statearr_27671_27700 = state_27661__$1;
(statearr_27671_27700[(1)] = (13));

} else {
var statearr_27672_27701 = state_27661__$1;
(statearr_27672_27701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (2))){
var inst_27624 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27625 = (0);
var state_27661__$1 = (function (){var statearr_27673 = state_27661;
(statearr_27673[(9)] = inst_27624);

(statearr_27673[(7)] = inst_27625);

return statearr_27673;
})();
var statearr_27674_27702 = state_27661__$1;
(statearr_27674_27702[(2)] = null);

(statearr_27674_27702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (11))){
var inst_27625 = (state_27661[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27661,(10),Object,null,(9));
var inst_27634 = chs__$1.call(null,inst_27625);
var inst_27635 = done.call(null,inst_27625);
var inst_27636 = cljs.core.async.take_BANG_.call(null,inst_27634,inst_27635);
var state_27661__$1 = state_27661;
var statearr_27675_27703 = state_27661__$1;
(statearr_27675_27703[(2)] = inst_27636);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27661__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (9))){
var inst_27625 = (state_27661[(7)]);
var inst_27638 = (state_27661[(2)]);
var inst_27639 = (inst_27625 + (1));
var inst_27625__$1 = inst_27639;
var state_27661__$1 = (function (){var statearr_27676 = state_27661;
(statearr_27676[(7)] = inst_27625__$1);

(statearr_27676[(10)] = inst_27638);

return statearr_27676;
})();
var statearr_27677_27704 = state_27661__$1;
(statearr_27677_27704[(2)] = null);

(statearr_27677_27704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (5))){
var inst_27645 = (state_27661[(2)]);
var state_27661__$1 = (function (){var statearr_27678 = state_27661;
(statearr_27678[(11)] = inst_27645);

return statearr_27678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27661__$1,(12),dchan);
} else {
if((state_val_27662 === (14))){
var inst_27647 = (state_27661[(8)]);
var inst_27652 = cljs.core.apply.call(null,f,inst_27647);
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27661__$1,(16),out,inst_27652);
} else {
if((state_val_27662 === (16))){
var inst_27654 = (state_27661[(2)]);
var state_27661__$1 = (function (){var statearr_27679 = state_27661;
(statearr_27679[(12)] = inst_27654);

return statearr_27679;
})();
var statearr_27680_27705 = state_27661__$1;
(statearr_27680_27705[(2)] = null);

(statearr_27680_27705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (10))){
var inst_27629 = (state_27661[(2)]);
var inst_27630 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27661__$1 = (function (){var statearr_27681 = state_27661;
(statearr_27681[(13)] = inst_27629);

return statearr_27681;
})();
var statearr_27682_27706 = state_27661__$1;
(statearr_27682_27706[(2)] = inst_27630);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27661__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (8))){
var inst_27643 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27683_27707 = state_27661__$1;
(statearr_27683_27707[(2)] = inst_27643);

(statearr_27683_27707[(1)] = (5));


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
});})(c__21345__auto___27692,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21283__auto__,c__21345__auto___27692,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27687[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27687[(1)] = (1));

return statearr_27687;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27661){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27688){if((e27688 instanceof Object)){
var ex__21287__auto__ = e27688;
var statearr_27689_27708 = state_27661;
(statearr_27689_27708[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27709 = state_27661;
state_27661 = G__27709;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27692,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21347__auto__ = (function (){var statearr_27690 = f__21346__auto__.call(null);
(statearr_27690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27692);

return statearr_27690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27692,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27712 = arguments.length;
switch (G__27712) {
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
var c__21345__auto___27767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27767,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27767,out){
return (function (state_27742){
var state_val_27743 = (state_27742[(1)]);
if((state_val_27743 === (7))){
var inst_27721 = (state_27742[(7)]);
var inst_27722 = (state_27742[(8)]);
var inst_27721__$1 = (state_27742[(2)]);
var inst_27722__$1 = cljs.core.nth.call(null,inst_27721__$1,(0),null);
var inst_27723 = cljs.core.nth.call(null,inst_27721__$1,(1),null);
var inst_27724 = (inst_27722__$1 == null);
var state_27742__$1 = (function (){var statearr_27744 = state_27742;
(statearr_27744[(9)] = inst_27723);

(statearr_27744[(7)] = inst_27721__$1);

(statearr_27744[(8)] = inst_27722__$1);

return statearr_27744;
})();
if(cljs.core.truth_(inst_27724)){
var statearr_27745_27768 = state_27742__$1;
(statearr_27745_27768[(1)] = (8));

} else {
var statearr_27746_27769 = state_27742__$1;
(statearr_27746_27769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (1))){
var inst_27713 = cljs.core.vec.call(null,chs);
var inst_27714 = inst_27713;
var state_27742__$1 = (function (){var statearr_27747 = state_27742;
(statearr_27747[(10)] = inst_27714);

return statearr_27747;
})();
var statearr_27748_27770 = state_27742__$1;
(statearr_27748_27770[(2)] = null);

(statearr_27748_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (4))){
var inst_27714 = (state_27742[(10)]);
var state_27742__$1 = state_27742;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27742__$1,(7),inst_27714);
} else {
if((state_val_27743 === (6))){
var inst_27738 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27749_27771 = state_27742__$1;
(statearr_27749_27771[(2)] = inst_27738);

(statearr_27749_27771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (3))){
var inst_27740 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27742__$1,inst_27740);
} else {
if((state_val_27743 === (2))){
var inst_27714 = (state_27742[(10)]);
var inst_27716 = cljs.core.count.call(null,inst_27714);
var inst_27717 = (inst_27716 > (0));
var state_27742__$1 = state_27742;
if(cljs.core.truth_(inst_27717)){
var statearr_27751_27772 = state_27742__$1;
(statearr_27751_27772[(1)] = (4));

} else {
var statearr_27752_27773 = state_27742__$1;
(statearr_27752_27773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (11))){
var inst_27714 = (state_27742[(10)]);
var inst_27731 = (state_27742[(2)]);
var tmp27750 = inst_27714;
var inst_27714__$1 = tmp27750;
var state_27742__$1 = (function (){var statearr_27753 = state_27742;
(statearr_27753[(10)] = inst_27714__$1);

(statearr_27753[(11)] = inst_27731);

return statearr_27753;
})();
var statearr_27754_27774 = state_27742__$1;
(statearr_27754_27774[(2)] = null);

(statearr_27754_27774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (9))){
var inst_27722 = (state_27742[(8)]);
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27742__$1,(11),out,inst_27722);
} else {
if((state_val_27743 === (5))){
var inst_27736 = cljs.core.async.close_BANG_.call(null,out);
var state_27742__$1 = state_27742;
var statearr_27755_27775 = state_27742__$1;
(statearr_27755_27775[(2)] = inst_27736);

(statearr_27755_27775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (10))){
var inst_27734 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27756_27776 = state_27742__$1;
(statearr_27756_27776[(2)] = inst_27734);

(statearr_27756_27776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (8))){
var inst_27723 = (state_27742[(9)]);
var inst_27714 = (state_27742[(10)]);
var inst_27721 = (state_27742[(7)]);
var inst_27722 = (state_27742[(8)]);
var inst_27726 = (function (){var c = inst_27723;
var v = inst_27722;
var vec__27719 = inst_27721;
var cs = inst_27714;
return ((function (c,v,vec__27719,cs,inst_27723,inst_27714,inst_27721,inst_27722,state_val_27743,c__21345__auto___27767,out){
return (function (p1__27710_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27710_SHARP_);
});
;})(c,v,vec__27719,cs,inst_27723,inst_27714,inst_27721,inst_27722,state_val_27743,c__21345__auto___27767,out))
})();
var inst_27727 = cljs.core.filterv.call(null,inst_27726,inst_27714);
var inst_27714__$1 = inst_27727;
var state_27742__$1 = (function (){var statearr_27757 = state_27742;
(statearr_27757[(10)] = inst_27714__$1);

return statearr_27757;
})();
var statearr_27758_27777 = state_27742__$1;
(statearr_27758_27777[(2)] = null);

(statearr_27758_27777[(1)] = (2));


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
});})(c__21345__auto___27767,out))
;
return ((function (switch__21283__auto__,c__21345__auto___27767,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27762[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27762[(1)] = (1));

return statearr_27762;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27742){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27763){if((e27763 instanceof Object)){
var ex__21287__auto__ = e27763;
var statearr_27764_27778 = state_27742;
(statearr_27764_27778[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27779 = state_27742;
state_27742 = G__27779;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27767,out))
})();
var state__21347__auto__ = (function (){var statearr_27765 = f__21346__auto__.call(null);
(statearr_27765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27767);

return statearr_27765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27767,out))
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
var G__27781 = arguments.length;
switch (G__27781) {
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
var c__21345__auto___27829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27829,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27829,out){
return (function (state_27805){
var state_val_27806 = (state_27805[(1)]);
if((state_val_27806 === (7))){
var inst_27787 = (state_27805[(7)]);
var inst_27787__$1 = (state_27805[(2)]);
var inst_27788 = (inst_27787__$1 == null);
var inst_27789 = cljs.core.not.call(null,inst_27788);
var state_27805__$1 = (function (){var statearr_27807 = state_27805;
(statearr_27807[(7)] = inst_27787__$1);

return statearr_27807;
})();
if(inst_27789){
var statearr_27808_27830 = state_27805__$1;
(statearr_27808_27830[(1)] = (8));

} else {
var statearr_27809_27831 = state_27805__$1;
(statearr_27809_27831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (1))){
var inst_27782 = (0);
var state_27805__$1 = (function (){var statearr_27810 = state_27805;
(statearr_27810[(8)] = inst_27782);

return statearr_27810;
})();
var statearr_27811_27832 = state_27805__$1;
(statearr_27811_27832[(2)] = null);

(statearr_27811_27832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (4))){
var state_27805__$1 = state_27805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27805__$1,(7),ch);
} else {
if((state_val_27806 === (6))){
var inst_27800 = (state_27805[(2)]);
var state_27805__$1 = state_27805;
var statearr_27812_27833 = state_27805__$1;
(statearr_27812_27833[(2)] = inst_27800);

(statearr_27812_27833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (3))){
var inst_27802 = (state_27805[(2)]);
var inst_27803 = cljs.core.async.close_BANG_.call(null,out);
var state_27805__$1 = (function (){var statearr_27813 = state_27805;
(statearr_27813[(9)] = inst_27802);

return statearr_27813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27805__$1,inst_27803);
} else {
if((state_val_27806 === (2))){
var inst_27782 = (state_27805[(8)]);
var inst_27784 = (inst_27782 < n);
var state_27805__$1 = state_27805;
if(cljs.core.truth_(inst_27784)){
var statearr_27814_27834 = state_27805__$1;
(statearr_27814_27834[(1)] = (4));

} else {
var statearr_27815_27835 = state_27805__$1;
(statearr_27815_27835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (11))){
var inst_27782 = (state_27805[(8)]);
var inst_27792 = (state_27805[(2)]);
var inst_27793 = (inst_27782 + (1));
var inst_27782__$1 = inst_27793;
var state_27805__$1 = (function (){var statearr_27816 = state_27805;
(statearr_27816[(10)] = inst_27792);

(statearr_27816[(8)] = inst_27782__$1);

return statearr_27816;
})();
var statearr_27817_27836 = state_27805__$1;
(statearr_27817_27836[(2)] = null);

(statearr_27817_27836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (9))){
var state_27805__$1 = state_27805;
var statearr_27818_27837 = state_27805__$1;
(statearr_27818_27837[(2)] = null);

(statearr_27818_27837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (5))){
var state_27805__$1 = state_27805;
var statearr_27819_27838 = state_27805__$1;
(statearr_27819_27838[(2)] = null);

(statearr_27819_27838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (10))){
var inst_27797 = (state_27805[(2)]);
var state_27805__$1 = state_27805;
var statearr_27820_27839 = state_27805__$1;
(statearr_27820_27839[(2)] = inst_27797);

(statearr_27820_27839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (8))){
var inst_27787 = (state_27805[(7)]);
var state_27805__$1 = state_27805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27805__$1,(11),out,inst_27787);
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
});})(c__21345__auto___27829,out))
;
return ((function (switch__21283__auto__,c__21345__auto___27829,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27824[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27824[(1)] = (1));

return statearr_27824;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27805){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27825){if((e27825 instanceof Object)){
var ex__21287__auto__ = e27825;
var statearr_27826_27840 = state_27805;
(statearr_27826_27840[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27841 = state_27805;
state_27805 = G__27841;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27829,out))
})();
var state__21347__auto__ = (function (){var statearr_27827 = f__21346__auto__.call(null);
(statearr_27827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27829);

return statearr_27827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27829,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27849 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27849 = (function (ch,f,map_LT_,meta27850){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27850 = meta27850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27852 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27852 = (function (fn1,_,meta27850,map_LT_,f,ch,meta27853){
this.fn1 = fn1;
this._ = _;
this.meta27850 = meta27850;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27853 = meta27853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27852.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27842_SHARP_){
return f1.call(null,(((p1__27842_SHARP_ == null))?null:self__.f.call(null,p1__27842_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27854){
var self__ = this;
var _27854__$1 = this;
return self__.meta27853;
});})(___$1))
;

cljs.core.async.t27852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27854,meta27853__$1){
var self__ = this;
var _27854__$1 = this;
return (new cljs.core.async.t27852(self__.fn1,self__._,self__.meta27850,self__.map_LT_,self__.f,self__.ch,meta27853__$1));
});})(___$1))
;

cljs.core.async.t27852.cljs$lang$type = true;

cljs.core.async.t27852.cljs$lang$ctorStr = "cljs.core.async/t27852";

cljs.core.async.t27852.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27852");
});})(___$1))
;

cljs.core.async.__GT_t27852 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27852(fn1__$1,___$2,meta27850__$1,map_LT___$1,f__$1,ch__$1,meta27853){
return (new cljs.core.async.t27852(fn1__$1,___$2,meta27850__$1,map_LT___$1,f__$1,ch__$1,meta27853));
});})(___$1))
;

}

return (new cljs.core.async.t27852(fn1,___$1,self__.meta27850,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t27849.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27849.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27851){
var self__ = this;
var _27851__$1 = this;
return self__.meta27850;
});

cljs.core.async.t27849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27851,meta27850__$1){
var self__ = this;
var _27851__$1 = this;
return (new cljs.core.async.t27849(self__.ch,self__.f,self__.map_LT_,meta27850__$1));
});

cljs.core.async.t27849.cljs$lang$type = true;

cljs.core.async.t27849.cljs$lang$ctorStr = "cljs.core.async/t27849";

cljs.core.async.t27849.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27849");
});

cljs.core.async.__GT_t27849 = (function cljs$core$async$map_LT__$___GT_t27849(ch__$1,f__$1,map_LT___$1,meta27850){
return (new cljs.core.async.t27849(ch__$1,f__$1,map_LT___$1,meta27850));
});

}

return (new cljs.core.async.t27849(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27858 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27858 = (function (ch,f,map_GT_,meta27859){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27859 = meta27859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27858.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27858.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27858.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27860){
var self__ = this;
var _27860__$1 = this;
return self__.meta27859;
});

cljs.core.async.t27858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27860,meta27859__$1){
var self__ = this;
var _27860__$1 = this;
return (new cljs.core.async.t27858(self__.ch,self__.f,self__.map_GT_,meta27859__$1));
});

cljs.core.async.t27858.cljs$lang$type = true;

cljs.core.async.t27858.cljs$lang$ctorStr = "cljs.core.async/t27858";

cljs.core.async.t27858.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27858");
});

cljs.core.async.__GT_t27858 = (function cljs$core$async$map_GT__$___GT_t27858(ch__$1,f__$1,map_GT___$1,meta27859){
return (new cljs.core.async.t27858(ch__$1,f__$1,map_GT___$1,meta27859));
});

}

return (new cljs.core.async.t27858(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27864 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27864 = (function (ch,p,filter_GT_,meta27865){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27865 = meta27865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27864.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27864.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27864.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27864.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27866){
var self__ = this;
var _27866__$1 = this;
return self__.meta27865;
});

cljs.core.async.t27864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27866,meta27865__$1){
var self__ = this;
var _27866__$1 = this;
return (new cljs.core.async.t27864(self__.ch,self__.p,self__.filter_GT_,meta27865__$1));
});

cljs.core.async.t27864.cljs$lang$type = true;

cljs.core.async.t27864.cljs$lang$ctorStr = "cljs.core.async/t27864";

cljs.core.async.t27864.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27864");
});

cljs.core.async.__GT_t27864 = (function cljs$core$async$filter_GT__$___GT_t27864(ch__$1,p__$1,filter_GT___$1,meta27865){
return (new cljs.core.async.t27864(ch__$1,p__$1,filter_GT___$1,meta27865));
});

}

return (new cljs.core.async.t27864(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27868 = arguments.length;
switch (G__27868) {
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
var c__21345__auto___27911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27911,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27911,out){
return (function (state_27889){
var state_val_27890 = (state_27889[(1)]);
if((state_val_27890 === (7))){
var inst_27885 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
var statearr_27891_27912 = state_27889__$1;
(statearr_27891_27912[(2)] = inst_27885);

(statearr_27891_27912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (1))){
var state_27889__$1 = state_27889;
var statearr_27892_27913 = state_27889__$1;
(statearr_27892_27913[(2)] = null);

(statearr_27892_27913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (4))){
var inst_27871 = (state_27889[(7)]);
var inst_27871__$1 = (state_27889[(2)]);
var inst_27872 = (inst_27871__$1 == null);
var state_27889__$1 = (function (){var statearr_27893 = state_27889;
(statearr_27893[(7)] = inst_27871__$1);

return statearr_27893;
})();
if(cljs.core.truth_(inst_27872)){
var statearr_27894_27914 = state_27889__$1;
(statearr_27894_27914[(1)] = (5));

} else {
var statearr_27895_27915 = state_27889__$1;
(statearr_27895_27915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (6))){
var inst_27871 = (state_27889[(7)]);
var inst_27876 = p.call(null,inst_27871);
var state_27889__$1 = state_27889;
if(cljs.core.truth_(inst_27876)){
var statearr_27896_27916 = state_27889__$1;
(statearr_27896_27916[(1)] = (8));

} else {
var statearr_27897_27917 = state_27889__$1;
(statearr_27897_27917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (3))){
var inst_27887 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27889__$1,inst_27887);
} else {
if((state_val_27890 === (2))){
var state_27889__$1 = state_27889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27889__$1,(4),ch);
} else {
if((state_val_27890 === (11))){
var inst_27879 = (state_27889[(2)]);
var state_27889__$1 = state_27889;
var statearr_27898_27918 = state_27889__$1;
(statearr_27898_27918[(2)] = inst_27879);

(statearr_27898_27918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (9))){
var state_27889__$1 = state_27889;
var statearr_27899_27919 = state_27889__$1;
(statearr_27899_27919[(2)] = null);

(statearr_27899_27919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (5))){
var inst_27874 = cljs.core.async.close_BANG_.call(null,out);
var state_27889__$1 = state_27889;
var statearr_27900_27920 = state_27889__$1;
(statearr_27900_27920[(2)] = inst_27874);

(statearr_27900_27920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (10))){
var inst_27882 = (state_27889[(2)]);
var state_27889__$1 = (function (){var statearr_27901 = state_27889;
(statearr_27901[(8)] = inst_27882);

return statearr_27901;
})();
var statearr_27902_27921 = state_27889__$1;
(statearr_27902_27921[(2)] = null);

(statearr_27902_27921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27890 === (8))){
var inst_27871 = (state_27889[(7)]);
var state_27889__$1 = state_27889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27889__$1,(11),out,inst_27871);
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
});})(c__21345__auto___27911,out))
;
return ((function (switch__21283__auto__,c__21345__auto___27911,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27906 = [null,null,null,null,null,null,null,null,null];
(statearr_27906[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27906[(1)] = (1));

return statearr_27906;
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
}catch (e27907){if((e27907 instanceof Object)){
var ex__21287__auto__ = e27907;
var statearr_27908_27922 = state_27889;
(statearr_27908_27922[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27923 = state_27889;
state_27889 = G__27923;
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
;})(switch__21283__auto__,c__21345__auto___27911,out))
})();
var state__21347__auto__ = (function (){var statearr_27909 = f__21346__auto__.call(null);
(statearr_27909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27911);

return statearr_27909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27911,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27925 = arguments.length;
switch (G__27925) {
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
return (function (state_28092){
var state_val_28093 = (state_28092[(1)]);
if((state_val_28093 === (7))){
var inst_28088 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
var statearr_28094_28135 = state_28092__$1;
(statearr_28094_28135[(2)] = inst_28088);

(statearr_28094_28135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (20))){
var inst_28058 = (state_28092[(7)]);
var inst_28069 = (state_28092[(2)]);
var inst_28070 = cljs.core.next.call(null,inst_28058);
var inst_28044 = inst_28070;
var inst_28045 = null;
var inst_28046 = (0);
var inst_28047 = (0);
var state_28092__$1 = (function (){var statearr_28095 = state_28092;
(statearr_28095[(8)] = inst_28045);

(statearr_28095[(9)] = inst_28069);

(statearr_28095[(10)] = inst_28047);

(statearr_28095[(11)] = inst_28046);

(statearr_28095[(12)] = inst_28044);

return statearr_28095;
})();
var statearr_28096_28136 = state_28092__$1;
(statearr_28096_28136[(2)] = null);

(statearr_28096_28136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (1))){
var state_28092__$1 = state_28092;
var statearr_28097_28137 = state_28092__$1;
(statearr_28097_28137[(2)] = null);

(statearr_28097_28137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (4))){
var inst_28033 = (state_28092[(13)]);
var inst_28033__$1 = (state_28092[(2)]);
var inst_28034 = (inst_28033__$1 == null);
var state_28092__$1 = (function (){var statearr_28098 = state_28092;
(statearr_28098[(13)] = inst_28033__$1);

return statearr_28098;
})();
if(cljs.core.truth_(inst_28034)){
var statearr_28099_28138 = state_28092__$1;
(statearr_28099_28138[(1)] = (5));

} else {
var statearr_28100_28139 = state_28092__$1;
(statearr_28100_28139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (15))){
var state_28092__$1 = state_28092;
var statearr_28104_28140 = state_28092__$1;
(statearr_28104_28140[(2)] = null);

(statearr_28104_28140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (21))){
var state_28092__$1 = state_28092;
var statearr_28105_28141 = state_28092__$1;
(statearr_28105_28141[(2)] = null);

(statearr_28105_28141[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (13))){
var inst_28045 = (state_28092[(8)]);
var inst_28047 = (state_28092[(10)]);
var inst_28046 = (state_28092[(11)]);
var inst_28044 = (state_28092[(12)]);
var inst_28054 = (state_28092[(2)]);
var inst_28055 = (inst_28047 + (1));
var tmp28101 = inst_28045;
var tmp28102 = inst_28046;
var tmp28103 = inst_28044;
var inst_28044__$1 = tmp28103;
var inst_28045__$1 = tmp28101;
var inst_28046__$1 = tmp28102;
var inst_28047__$1 = inst_28055;
var state_28092__$1 = (function (){var statearr_28106 = state_28092;
(statearr_28106[(14)] = inst_28054);

(statearr_28106[(8)] = inst_28045__$1);

(statearr_28106[(10)] = inst_28047__$1);

(statearr_28106[(11)] = inst_28046__$1);

(statearr_28106[(12)] = inst_28044__$1);

return statearr_28106;
})();
var statearr_28107_28142 = state_28092__$1;
(statearr_28107_28142[(2)] = null);

(statearr_28107_28142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (22))){
var state_28092__$1 = state_28092;
var statearr_28108_28143 = state_28092__$1;
(statearr_28108_28143[(2)] = null);

(statearr_28108_28143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (6))){
var inst_28033 = (state_28092[(13)]);
var inst_28042 = f.call(null,inst_28033);
var inst_28043 = cljs.core.seq.call(null,inst_28042);
var inst_28044 = inst_28043;
var inst_28045 = null;
var inst_28046 = (0);
var inst_28047 = (0);
var state_28092__$1 = (function (){var statearr_28109 = state_28092;
(statearr_28109[(8)] = inst_28045);

(statearr_28109[(10)] = inst_28047);

(statearr_28109[(11)] = inst_28046);

(statearr_28109[(12)] = inst_28044);

return statearr_28109;
})();
var statearr_28110_28144 = state_28092__$1;
(statearr_28110_28144[(2)] = null);

(statearr_28110_28144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (17))){
var inst_28058 = (state_28092[(7)]);
var inst_28062 = cljs.core.chunk_first.call(null,inst_28058);
var inst_28063 = cljs.core.chunk_rest.call(null,inst_28058);
var inst_28064 = cljs.core.count.call(null,inst_28062);
var inst_28044 = inst_28063;
var inst_28045 = inst_28062;
var inst_28046 = inst_28064;
var inst_28047 = (0);
var state_28092__$1 = (function (){var statearr_28111 = state_28092;
(statearr_28111[(8)] = inst_28045);

(statearr_28111[(10)] = inst_28047);

(statearr_28111[(11)] = inst_28046);

(statearr_28111[(12)] = inst_28044);

return statearr_28111;
})();
var statearr_28112_28145 = state_28092__$1;
(statearr_28112_28145[(2)] = null);

(statearr_28112_28145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (3))){
var inst_28090 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28092__$1,inst_28090);
} else {
if((state_val_28093 === (12))){
var inst_28078 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
var statearr_28113_28146 = state_28092__$1;
(statearr_28113_28146[(2)] = inst_28078);

(statearr_28113_28146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (2))){
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28092__$1,(4),in$);
} else {
if((state_val_28093 === (23))){
var inst_28086 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
var statearr_28114_28147 = state_28092__$1;
(statearr_28114_28147[(2)] = inst_28086);

(statearr_28114_28147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (19))){
var inst_28073 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
var statearr_28115_28148 = state_28092__$1;
(statearr_28115_28148[(2)] = inst_28073);

(statearr_28115_28148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (11))){
var inst_28044 = (state_28092[(12)]);
var inst_28058 = (state_28092[(7)]);
var inst_28058__$1 = cljs.core.seq.call(null,inst_28044);
var state_28092__$1 = (function (){var statearr_28116 = state_28092;
(statearr_28116[(7)] = inst_28058__$1);

return statearr_28116;
})();
if(inst_28058__$1){
var statearr_28117_28149 = state_28092__$1;
(statearr_28117_28149[(1)] = (14));

} else {
var statearr_28118_28150 = state_28092__$1;
(statearr_28118_28150[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (9))){
var inst_28080 = (state_28092[(2)]);
var inst_28081 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28092__$1 = (function (){var statearr_28119 = state_28092;
(statearr_28119[(15)] = inst_28080);

return statearr_28119;
})();
if(cljs.core.truth_(inst_28081)){
var statearr_28120_28151 = state_28092__$1;
(statearr_28120_28151[(1)] = (21));

} else {
var statearr_28121_28152 = state_28092__$1;
(statearr_28121_28152[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (5))){
var inst_28036 = cljs.core.async.close_BANG_.call(null,out);
var state_28092__$1 = state_28092;
var statearr_28122_28153 = state_28092__$1;
(statearr_28122_28153[(2)] = inst_28036);

(statearr_28122_28153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (14))){
var inst_28058 = (state_28092[(7)]);
var inst_28060 = cljs.core.chunked_seq_QMARK_.call(null,inst_28058);
var state_28092__$1 = state_28092;
if(inst_28060){
var statearr_28123_28154 = state_28092__$1;
(statearr_28123_28154[(1)] = (17));

} else {
var statearr_28124_28155 = state_28092__$1;
(statearr_28124_28155[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (16))){
var inst_28076 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
var statearr_28125_28156 = state_28092__$1;
(statearr_28125_28156[(2)] = inst_28076);

(statearr_28125_28156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (10))){
var inst_28045 = (state_28092[(8)]);
var inst_28047 = (state_28092[(10)]);
var inst_28052 = cljs.core._nth.call(null,inst_28045,inst_28047);
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28092__$1,(13),out,inst_28052);
} else {
if((state_val_28093 === (18))){
var inst_28058 = (state_28092[(7)]);
var inst_28067 = cljs.core.first.call(null,inst_28058);
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28092__$1,(20),out,inst_28067);
} else {
if((state_val_28093 === (8))){
var inst_28047 = (state_28092[(10)]);
var inst_28046 = (state_28092[(11)]);
var inst_28049 = (inst_28047 < inst_28046);
var inst_28050 = inst_28049;
var state_28092__$1 = state_28092;
if(cljs.core.truth_(inst_28050)){
var statearr_28126_28157 = state_28092__$1;
(statearr_28126_28157[(1)] = (10));

} else {
var statearr_28127_28158 = state_28092__$1;
(statearr_28127_28158[(1)] = (11));

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
var statearr_28131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28131[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__);

(statearr_28131[(1)] = (1));

return statearr_28131;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____1 = (function (state_28092){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28132){if((e28132 instanceof Object)){
var ex__21287__auto__ = e28132;
var statearr_28133_28159 = state_28092;
(statearr_28133_28159[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28160 = state_28092;
state_28092 = G__28160;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__ = function(state_28092){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____1.call(this,state_28092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_28134 = f__21346__auto__.call(null);
(statearr_28134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_28134;
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
var G__28162 = arguments.length;
switch (G__28162) {
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
var G__28165 = arguments.length;
switch (G__28165) {
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
var G__28168 = arguments.length;
switch (G__28168) {
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
var c__21345__auto___28218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28218,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28218,out){
return (function (state_28192){
var state_val_28193 = (state_28192[(1)]);
if((state_val_28193 === (7))){
var inst_28187 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
var statearr_28194_28219 = state_28192__$1;
(statearr_28194_28219[(2)] = inst_28187);

(statearr_28194_28219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (1))){
var inst_28169 = null;
var state_28192__$1 = (function (){var statearr_28195 = state_28192;
(statearr_28195[(7)] = inst_28169);

return statearr_28195;
})();
var statearr_28196_28220 = state_28192__$1;
(statearr_28196_28220[(2)] = null);

(statearr_28196_28220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (4))){
var inst_28172 = (state_28192[(8)]);
var inst_28172__$1 = (state_28192[(2)]);
var inst_28173 = (inst_28172__$1 == null);
var inst_28174 = cljs.core.not.call(null,inst_28173);
var state_28192__$1 = (function (){var statearr_28197 = state_28192;
(statearr_28197[(8)] = inst_28172__$1);

return statearr_28197;
})();
if(inst_28174){
var statearr_28198_28221 = state_28192__$1;
(statearr_28198_28221[(1)] = (5));

} else {
var statearr_28199_28222 = state_28192__$1;
(statearr_28199_28222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (6))){
var state_28192__$1 = state_28192;
var statearr_28200_28223 = state_28192__$1;
(statearr_28200_28223[(2)] = null);

(statearr_28200_28223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (3))){
var inst_28189 = (state_28192[(2)]);
var inst_28190 = cljs.core.async.close_BANG_.call(null,out);
var state_28192__$1 = (function (){var statearr_28201 = state_28192;
(statearr_28201[(9)] = inst_28189);

return statearr_28201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28192__$1,inst_28190);
} else {
if((state_val_28193 === (2))){
var state_28192__$1 = state_28192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28192__$1,(4),ch);
} else {
if((state_val_28193 === (11))){
var inst_28172 = (state_28192[(8)]);
var inst_28181 = (state_28192[(2)]);
var inst_28169 = inst_28172;
var state_28192__$1 = (function (){var statearr_28202 = state_28192;
(statearr_28202[(10)] = inst_28181);

(statearr_28202[(7)] = inst_28169);

return statearr_28202;
})();
var statearr_28203_28224 = state_28192__$1;
(statearr_28203_28224[(2)] = null);

(statearr_28203_28224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (9))){
var inst_28172 = (state_28192[(8)]);
var state_28192__$1 = state_28192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28192__$1,(11),out,inst_28172);
} else {
if((state_val_28193 === (5))){
var inst_28172 = (state_28192[(8)]);
var inst_28169 = (state_28192[(7)]);
var inst_28176 = cljs.core._EQ_.call(null,inst_28172,inst_28169);
var state_28192__$1 = state_28192;
if(inst_28176){
var statearr_28205_28225 = state_28192__$1;
(statearr_28205_28225[(1)] = (8));

} else {
var statearr_28206_28226 = state_28192__$1;
(statearr_28206_28226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (10))){
var inst_28184 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
var statearr_28207_28227 = state_28192__$1;
(statearr_28207_28227[(2)] = inst_28184);

(statearr_28207_28227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (8))){
var inst_28169 = (state_28192[(7)]);
var tmp28204 = inst_28169;
var inst_28169__$1 = tmp28204;
var state_28192__$1 = (function (){var statearr_28208 = state_28192;
(statearr_28208[(7)] = inst_28169__$1);

return statearr_28208;
})();
var statearr_28209_28228 = state_28192__$1;
(statearr_28209_28228[(2)] = null);

(statearr_28209_28228[(1)] = (2));


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
});})(c__21345__auto___28218,out))
;
return ((function (switch__21283__auto__,c__21345__auto___28218,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28213 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28213[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28213[(1)] = (1));

return statearr_28213;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28192){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28214){if((e28214 instanceof Object)){
var ex__21287__auto__ = e28214;
var statearr_28215_28229 = state_28192;
(statearr_28215_28229[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28230 = state_28192;
state_28192 = G__28230;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28218,out))
})();
var state__21347__auto__ = (function (){var statearr_28216 = f__21346__auto__.call(null);
(statearr_28216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28218);

return statearr_28216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28218,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28232 = arguments.length;
switch (G__28232) {
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
var c__21345__auto___28301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28301,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28301,out){
return (function (state_28270){
var state_val_28271 = (state_28270[(1)]);
if((state_val_28271 === (7))){
var inst_28266 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
var statearr_28272_28302 = state_28270__$1;
(statearr_28272_28302[(2)] = inst_28266);

(statearr_28272_28302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (1))){
var inst_28233 = (new Array(n));
var inst_28234 = inst_28233;
var inst_28235 = (0);
var state_28270__$1 = (function (){var statearr_28273 = state_28270;
(statearr_28273[(7)] = inst_28234);

(statearr_28273[(8)] = inst_28235);

return statearr_28273;
})();
var statearr_28274_28303 = state_28270__$1;
(statearr_28274_28303[(2)] = null);

(statearr_28274_28303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (4))){
var inst_28238 = (state_28270[(9)]);
var inst_28238__$1 = (state_28270[(2)]);
var inst_28239 = (inst_28238__$1 == null);
var inst_28240 = cljs.core.not.call(null,inst_28239);
var state_28270__$1 = (function (){var statearr_28275 = state_28270;
(statearr_28275[(9)] = inst_28238__$1);

return statearr_28275;
})();
if(inst_28240){
var statearr_28276_28304 = state_28270__$1;
(statearr_28276_28304[(1)] = (5));

} else {
var statearr_28277_28305 = state_28270__$1;
(statearr_28277_28305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (15))){
var inst_28260 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
var statearr_28278_28306 = state_28270__$1;
(statearr_28278_28306[(2)] = inst_28260);

(statearr_28278_28306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (13))){
var state_28270__$1 = state_28270;
var statearr_28279_28307 = state_28270__$1;
(statearr_28279_28307[(2)] = null);

(statearr_28279_28307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (6))){
var inst_28235 = (state_28270[(8)]);
var inst_28256 = (inst_28235 > (0));
var state_28270__$1 = state_28270;
if(cljs.core.truth_(inst_28256)){
var statearr_28280_28308 = state_28270__$1;
(statearr_28280_28308[(1)] = (12));

} else {
var statearr_28281_28309 = state_28270__$1;
(statearr_28281_28309[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (3))){
var inst_28268 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28270__$1,inst_28268);
} else {
if((state_val_28271 === (12))){
var inst_28234 = (state_28270[(7)]);
var inst_28258 = cljs.core.vec.call(null,inst_28234);
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28270__$1,(15),out,inst_28258);
} else {
if((state_val_28271 === (2))){
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28270__$1,(4),ch);
} else {
if((state_val_28271 === (11))){
var inst_28250 = (state_28270[(2)]);
var inst_28251 = (new Array(n));
var inst_28234 = inst_28251;
var inst_28235 = (0);
var state_28270__$1 = (function (){var statearr_28282 = state_28270;
(statearr_28282[(7)] = inst_28234);

(statearr_28282[(10)] = inst_28250);

(statearr_28282[(8)] = inst_28235);

return statearr_28282;
})();
var statearr_28283_28310 = state_28270__$1;
(statearr_28283_28310[(2)] = null);

(statearr_28283_28310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (9))){
var inst_28234 = (state_28270[(7)]);
var inst_28248 = cljs.core.vec.call(null,inst_28234);
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28270__$1,(11),out,inst_28248);
} else {
if((state_val_28271 === (5))){
var inst_28238 = (state_28270[(9)]);
var inst_28234 = (state_28270[(7)]);
var inst_28243 = (state_28270[(11)]);
var inst_28235 = (state_28270[(8)]);
var inst_28242 = (inst_28234[inst_28235] = inst_28238);
var inst_28243__$1 = (inst_28235 + (1));
var inst_28244 = (inst_28243__$1 < n);
var state_28270__$1 = (function (){var statearr_28284 = state_28270;
(statearr_28284[(11)] = inst_28243__$1);

(statearr_28284[(12)] = inst_28242);

return statearr_28284;
})();
if(cljs.core.truth_(inst_28244)){
var statearr_28285_28311 = state_28270__$1;
(statearr_28285_28311[(1)] = (8));

} else {
var statearr_28286_28312 = state_28270__$1;
(statearr_28286_28312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (14))){
var inst_28263 = (state_28270[(2)]);
var inst_28264 = cljs.core.async.close_BANG_.call(null,out);
var state_28270__$1 = (function (){var statearr_28288 = state_28270;
(statearr_28288[(13)] = inst_28263);

return statearr_28288;
})();
var statearr_28289_28313 = state_28270__$1;
(statearr_28289_28313[(2)] = inst_28264);

(statearr_28289_28313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (10))){
var inst_28254 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
var statearr_28290_28314 = state_28270__$1;
(statearr_28290_28314[(2)] = inst_28254);

(statearr_28290_28314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (8))){
var inst_28234 = (state_28270[(7)]);
var inst_28243 = (state_28270[(11)]);
var tmp28287 = inst_28234;
var inst_28234__$1 = tmp28287;
var inst_28235 = inst_28243;
var state_28270__$1 = (function (){var statearr_28291 = state_28270;
(statearr_28291[(7)] = inst_28234__$1);

(statearr_28291[(8)] = inst_28235);

return statearr_28291;
})();
var statearr_28292_28315 = state_28270__$1;
(statearr_28292_28315[(2)] = null);

(statearr_28292_28315[(1)] = (2));


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
});})(c__21345__auto___28301,out))
;
return ((function (switch__21283__auto__,c__21345__auto___28301,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28296[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28296[(1)] = (1));

return statearr_28296;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28270){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28297){if((e28297 instanceof Object)){
var ex__21287__auto__ = e28297;
var statearr_28298_28316 = state_28270;
(statearr_28298_28316[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28317 = state_28270;
state_28270 = G__28317;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28301,out))
})();
var state__21347__auto__ = (function (){var statearr_28299 = f__21346__auto__.call(null);
(statearr_28299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28301);

return statearr_28299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28301,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28319 = arguments.length;
switch (G__28319) {
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
var c__21345__auto___28392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28392,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28392,out){
return (function (state_28361){
var state_val_28362 = (state_28361[(1)]);
if((state_val_28362 === (7))){
var inst_28357 = (state_28361[(2)]);
var state_28361__$1 = state_28361;
var statearr_28363_28393 = state_28361__$1;
(statearr_28363_28393[(2)] = inst_28357);

(statearr_28363_28393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (1))){
var inst_28320 = [];
var inst_28321 = inst_28320;
var inst_28322 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28361__$1 = (function (){var statearr_28364 = state_28361;
(statearr_28364[(7)] = inst_28321);

(statearr_28364[(8)] = inst_28322);

return statearr_28364;
})();
var statearr_28365_28394 = state_28361__$1;
(statearr_28365_28394[(2)] = null);

(statearr_28365_28394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (4))){
var inst_28325 = (state_28361[(9)]);
var inst_28325__$1 = (state_28361[(2)]);
var inst_28326 = (inst_28325__$1 == null);
var inst_28327 = cljs.core.not.call(null,inst_28326);
var state_28361__$1 = (function (){var statearr_28366 = state_28361;
(statearr_28366[(9)] = inst_28325__$1);

return statearr_28366;
})();
if(inst_28327){
var statearr_28367_28395 = state_28361__$1;
(statearr_28367_28395[(1)] = (5));

} else {
var statearr_28368_28396 = state_28361__$1;
(statearr_28368_28396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (15))){
var inst_28351 = (state_28361[(2)]);
var state_28361__$1 = state_28361;
var statearr_28369_28397 = state_28361__$1;
(statearr_28369_28397[(2)] = inst_28351);

(statearr_28369_28397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (13))){
var state_28361__$1 = state_28361;
var statearr_28370_28398 = state_28361__$1;
(statearr_28370_28398[(2)] = null);

(statearr_28370_28398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (6))){
var inst_28321 = (state_28361[(7)]);
var inst_28346 = inst_28321.length;
var inst_28347 = (inst_28346 > (0));
var state_28361__$1 = state_28361;
if(cljs.core.truth_(inst_28347)){
var statearr_28371_28399 = state_28361__$1;
(statearr_28371_28399[(1)] = (12));

} else {
var statearr_28372_28400 = state_28361__$1;
(statearr_28372_28400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (3))){
var inst_28359 = (state_28361[(2)]);
var state_28361__$1 = state_28361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28361__$1,inst_28359);
} else {
if((state_val_28362 === (12))){
var inst_28321 = (state_28361[(7)]);
var inst_28349 = cljs.core.vec.call(null,inst_28321);
var state_28361__$1 = state_28361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28361__$1,(15),out,inst_28349);
} else {
if((state_val_28362 === (2))){
var state_28361__$1 = state_28361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28361__$1,(4),ch);
} else {
if((state_val_28362 === (11))){
var inst_28329 = (state_28361[(10)]);
var inst_28325 = (state_28361[(9)]);
var inst_28339 = (state_28361[(2)]);
var inst_28340 = [];
var inst_28341 = inst_28340.push(inst_28325);
var inst_28321 = inst_28340;
var inst_28322 = inst_28329;
var state_28361__$1 = (function (){var statearr_28373 = state_28361;
(statearr_28373[(7)] = inst_28321);

(statearr_28373[(11)] = inst_28341);

(statearr_28373[(8)] = inst_28322);

(statearr_28373[(12)] = inst_28339);

return statearr_28373;
})();
var statearr_28374_28401 = state_28361__$1;
(statearr_28374_28401[(2)] = null);

(statearr_28374_28401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (9))){
var inst_28321 = (state_28361[(7)]);
var inst_28337 = cljs.core.vec.call(null,inst_28321);
var state_28361__$1 = state_28361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28361__$1,(11),out,inst_28337);
} else {
if((state_val_28362 === (5))){
var inst_28329 = (state_28361[(10)]);
var inst_28322 = (state_28361[(8)]);
var inst_28325 = (state_28361[(9)]);
var inst_28329__$1 = f.call(null,inst_28325);
var inst_28330 = cljs.core._EQ_.call(null,inst_28329__$1,inst_28322);
var inst_28331 = cljs.core.keyword_identical_QMARK_.call(null,inst_28322,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28332 = (inst_28330) || (inst_28331);
var state_28361__$1 = (function (){var statearr_28375 = state_28361;
(statearr_28375[(10)] = inst_28329__$1);

return statearr_28375;
})();
if(cljs.core.truth_(inst_28332)){
var statearr_28376_28402 = state_28361__$1;
(statearr_28376_28402[(1)] = (8));

} else {
var statearr_28377_28403 = state_28361__$1;
(statearr_28377_28403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (14))){
var inst_28354 = (state_28361[(2)]);
var inst_28355 = cljs.core.async.close_BANG_.call(null,out);
var state_28361__$1 = (function (){var statearr_28379 = state_28361;
(statearr_28379[(13)] = inst_28354);

return statearr_28379;
})();
var statearr_28380_28404 = state_28361__$1;
(statearr_28380_28404[(2)] = inst_28355);

(statearr_28380_28404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (10))){
var inst_28344 = (state_28361[(2)]);
var state_28361__$1 = state_28361;
var statearr_28381_28405 = state_28361__$1;
(statearr_28381_28405[(2)] = inst_28344);

(statearr_28381_28405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (8))){
var inst_28329 = (state_28361[(10)]);
var inst_28321 = (state_28361[(7)]);
var inst_28325 = (state_28361[(9)]);
var inst_28334 = inst_28321.push(inst_28325);
var tmp28378 = inst_28321;
var inst_28321__$1 = tmp28378;
var inst_28322 = inst_28329;
var state_28361__$1 = (function (){var statearr_28382 = state_28361;
(statearr_28382[(7)] = inst_28321__$1);

(statearr_28382[(8)] = inst_28322);

(statearr_28382[(14)] = inst_28334);

return statearr_28382;
})();
var statearr_28383_28406 = state_28361__$1;
(statearr_28383_28406[(2)] = null);

(statearr_28383_28406[(1)] = (2));


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
});})(c__21345__auto___28392,out))
;
return ((function (switch__21283__auto__,c__21345__auto___28392,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28387[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28387[(1)] = (1));

return statearr_28387;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28361){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28388){if((e28388 instanceof Object)){
var ex__21287__auto__ = e28388;
var statearr_28389_28407 = state_28361;
(statearr_28389_28407[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28408 = state_28361;
state_28361 = G__28408;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28392,out))
})();
var state__21347__auto__ = (function (){var statearr_28390 = f__21346__auto__.call(null);
(statearr_28390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28392);

return statearr_28390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28392,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1436140471288