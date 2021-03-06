(defproject reframe1 "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [matchbox "0.0.6"]
                 [reagent "0.5.0"]
                 [re-frame "0.4.1"]
                 [secretary "1.2.3"]
                 [figwheel "0.3.6"]
                 [figwheel-sidecar "0.3.6"]]

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.0.6"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds {:dev {:source-paths ["src/cljs"]
                             :figwheel {:on-jsload "reframe1.core/mount-root"}

                             :compiler {:main reframe1.core
                                        :output-to "static/app.js"
                                        :output-dir "static/js"
                                        :asset-path "js"
                                        :optimizations :none
                                        :source-map true
                                        :source-map-timestamp true}}

                       :prod {:source-paths ["src/cljs"]
                              :compiler {:output-to "resources/public/js/compiled/app.js"
                                         :output-dir "resources/public/js/compiled/out"
                                         :asset-path "js/compiled/out"
                                         :optimizations :advanced
                                         :elide-asserts true
                                         :closure-defines {:goog.DEBUG false}
                                         :pretty-print false}}}}

  :figwheel {:server-port 3449
             :server-ip "127.0.0.1"
             :css-dirs ["resources/public/css"]
             :nrepl-port 7888 })
