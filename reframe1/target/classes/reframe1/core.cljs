(ns reframe1.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [reframe1.handlers]
              [reframe1.subs]
              [reframe1.routes :as routes]
              [reframe1.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
