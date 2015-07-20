(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [reframe1.core]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :build-id "dev", :on-jsload (fn [& x] (if js/reframe1.core.mount-root (apply js/reframe1.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'reframe1.core/mount-root' is missing")))})

