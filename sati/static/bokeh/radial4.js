(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("e2ade3a8-cdfa-4dfe-a208-41fa87b744d6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e2ade3a8-cdfa-4dfe-a208-41fa87b744d6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"22944945-e5a1-4117-9f66-8a6be9f7d3ea":{"roots":{"references":[{"attributes":{"plot":null,"text":"Imagined vs real fear"},"id":"554851e2-2b10-4c89-b0b1-cc1e4d06ece1","type":"Title"},{"attributes":{},"id":"21f714a8-c9b9-4608-9515-6e54fe12203c","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"a01d9070-a782-49b7-8112-03793b20803c","type":"ColumnDataSource"},"glyph":{"id":"2df817b2-4135-49ac-995a-302122f51933","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d4740ee9-5935-49d5-8e28-7b69ba3f6b8e","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"a676c670-7827-45ef-918c-a3a0af408b71","type":"CDSView"}},"id":"3928f42e-d9d3-42cc-800c-038852ede4ca","type":"GlyphRenderer"},{"attributes":{"source":{"id":"13282e00-cd19-42c3-af03-1d24783149e2","type":"ColumnDataSource"}},"id":"daa0dd11-20a5-4ec6-9b66-daa3caa783ec","type":"CDSView"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c1ff55"},"inner_radius":{"units":"data","value":60},"line_color":{"value":"#c1ff55"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38c929d1-b832-4b56-99f0-90514e786a13","type":"AnnularWedge"},{"attributes":{},"id":"ff3b49c9-a02e-448a-a75f-b0b36cd1d283","type":"LinearScale"},{"attributes":{"data_source":{"id":"aa69f689-5546-4d5d-8b4f-1e325cdda8a0","type":"ColumnDataSource"},"glyph":{"id":"38c929d1-b832-4b56-99f0-90514e786a13","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c46a488f-4fb5-4e68-bcdf-a5fdd38a5d03","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"ab519609-d845-4c15-966f-3706fcf201e4","type":"CDSView"}},"id":"ab95d0f7-aae9-4f28-8303-b8a3bdd2d09d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4abf76a9-7553-4889-a022-99b4e65e15e8","type":"ColumnDataSource"}},"id":"bbe5c2f9-40ef-4c3b-9616-5f398f8ef4b7","type":"CDSView"},{"attributes":{},"id":"35bc788a-991d-4e6d-a0ca-a4f530e18a48","type":"PanTool"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"field":"inner_radius","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4740ee9-5935-49d5-8e28-7b69ba3f6b8e","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#b7feea"},"inner_radius":{"field":"inner_radius","units":"data"},"line_color":{"value":"#b7feea"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2df817b2-4135-49ac-995a-302122f51933","type":"AnnularWedge"},{"attributes":{"source":{"id":"a01d9070-a782-49b7-8112-03793b20803c","type":"ColumnDataSource"}},"id":"a676c670-7827-45ef-918c-a3a0af408b71","type":"CDSView"},{"attributes":{},"id":"5d95168c-7487-4749-9d78-3cef9e4600cd","type":"Selection"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"GC1EVPsh+b8=","dtype":"float64","shape":[1]},"inner_radius":[78],"outer_radius":[186],"start_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"x":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]},"y":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]}},"selected":{"id":"f3434064-f90b-4ac1-8dc6-2200cd8ba8f7","type":"Selection"},"selection_policy":{"id":"3f7048cc-08e8-4574-9bec-9ccb064ed6e3","type":"UnionRenderers"}},"id":"a01d9070-a782-49b7-8112-03793b20803c","type":"ColumnDataSource"},{"attributes":{},"id":"530eb27b-e5aa-4926-b05d-a7877f26be1e","type":"Selection"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a054c2e-8828-48c9-b29a-6ad4ea4d70f2","type":"Text"},{"attributes":{"data_source":{"id":"ba2c4c55-57e9-448a-a2fc-90a1b60a7c0c","type":"ColumnDataSource"},"glyph":{"id":"a60e41fc-2f8a-4dc8-ac1f-5e928b198afb","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0d188226-75c8-4788-8974-6eb4f54be7c4","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"54bed905-9fc3-4388-bf33-dc67f6e599e5","type":"CDSView"}},"id":"c0b5a340-d9c8-4af8-87d6-06ff1d093acc","type":"GlyphRenderer"},{"attributes":{},"id":"3f50dac6-a8aa-4d37-a067-8d8b6a65b205","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"fill_color":["#c1ff55","#b7feea"],"line_color":["#c1ff55","#b7feea"],"x":[180,180],"y":[380,340]},"selected":{"id":"adf6ff40-9d9a-4762-81bc-96bb1396a497","type":"Selection"},"selection_policy":{"id":"0f30e4a1-c69c-4f35-ba2d-e2299face225","type":"UnionRenderers"}},"id":"4abf76a9-7553-4889-a022-99b4e65e15e8","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78fc179f-ef22-4e72-acb5-7ff428655fed","type":"BoxAnnotation"},{"attributes":{},"id":"ded6976e-2a5c-4e1e-9711-72558857b75b","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"35bc788a-991d-4e6d-a0ca-a4f530e18a48","type":"PanTool"},{"id":"2b31a9df-e4b0-4cf6-8451-1e46d43f286c","type":"WheelZoomTool"},{"id":"6222da84-b5f4-478d-8fed-02fa3070ad3b","type":"BoxZoomTool"},{"id":"66c0d32f-c2ce-4292-9a68-7a8a6421fe4d","type":"SaveTool"},{"id":"87648345-f99b-4886-adb6-eac37cb8ca0f","type":"ResetTool"},{"id":"ded6976e-2a5c-4e1e-9711-72558857b75b","type":"HelpTool"}]},"id":"c26b674b-db80-458b-b303-6247c418e3e7","type":"Toolbar"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"9ef5e0e4-f8bd-48ca-bf72-f6a1d0f12475","type":"Range1d"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":20},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8366226-ac61-4c21-855c-f5288be07ded","type":"Rect"},{"attributes":{},"id":"adf6ff40-9d9a-4762-81bc-96bb1396a497","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c2c2d6"},"inner_radius":{"units":"data","value":60},"line_color":{"value":"#c2c2d6"},"outer_radius":{"units":"data","value":420},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a60e41fc-2f8a-4dc8-ac1f-5e928b198afb","type":"AnnularWedge"},{"attributes":{},"id":"2b31a9df-e4b0-4cf6-8451-1e46d43f286c","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"4abf76a9-7553-4889-a022-99b4e65e15e8","type":"ColumnDataSource"},"glyph":{"id":"c8366226-ac61-4c21-855c-f5288be07ded","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"922bc0ad-de95-4899-a1d5-b7dd03e4b8e6","type":"Rect"},"selection_glyph":null,"view":{"id":"bbe5c2f9-40ef-4c3b-9616-5f398f8ef4b7","type":"CDSView"}},"id":"db04a1dd-9f52-4de4-8f53-bede05d1fa90","type":"GlyphRenderer"},{"attributes":{},"id":"de9bb50f-c5e8-490f-8f37-b0c9c2bbfcd5","type":"UnionRenderers"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"45bd47db-b7f6-4586-ba24-ca8ce0d860e5","type":"Range1d"},{"attributes":{"callback":null,"data":{"text":["Actualfear","Predictedfear"],"x":[200,200],"y":[365,325]},"selected":{"id":"6b2068be-472d-400d-b64e-91817df994cc","type":"Selection"},"selection_policy":{"id":"3f50dac6-a8aa-4d37-a067-8d8b6a65b205","type":"UnionRenderers"}},"id":"13282e00-cd19-42c3-af03-1d24783149e2","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#f8f8f8"},"border_fill_color":{"value":"#f8f8f8"},"min_border":0,"outline_line_color":{"value":null},"plot_height":420,"plot_width":500,"renderers":[{"id":"78fc179f-ef22-4e72-acb5-7ff428655fed","type":"BoxAnnotation"},{"id":"ab95d0f7-aae9-4f28-8303-b8a3bdd2d09d","type":"GlyphRenderer"},{"id":"3928f42e-d9d3-42cc-800c-038852ede4ca","type":"GlyphRenderer"},{"id":"c0b5a340-d9c8-4af8-87d6-06ff1d093acc","type":"GlyphRenderer"},{"id":"db04a1dd-9f52-4de4-8f53-bede05d1fa90","type":"GlyphRenderer"},{"id":"9d275198-40cd-4dd5-b5ef-cca6fbbece8e","type":"GlyphRenderer"}],"title":{"id":"554851e2-2b10-4c89-b0b1-cc1e4d06ece1","type":"Title"},"toolbar":{"id":"c26b674b-db80-458b-b303-6247c418e3e7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"45bd47db-b7f6-4586-ba24-ca8ce0d860e5","type":"Range1d"},"x_scale":{"id":"c3e7215a-1c57-40be-abc9-e9f4e41b9439","type":"LinearScale"},"y_range":{"id":"9ef5e0e4-f8bd-48ca-bf72-f6a1d0f12475","type":"Range1d"},"y_scale":{"id":"ff3b49c9-a02e-448a-a75f-b0b36cd1d283","type":"LinearScale"}},"id":"9143b968-c9e0-405d-a070-80a6f661ce00","subtype":"Figure","type":"Plot"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1509d1d7-dbe4-4fb5-9bd7-81ecec5d9514","type":"Text"},{"attributes":{},"id":"c3e7215a-1c57-40be-abc9-e9f4e41b9439","type":"LinearScale"},{"attributes":{"source":{"id":"aa69f689-5546-4d5d-8b4f-1e325cdda8a0","type":"ColumnDataSource"}},"id":"ab519609-d845-4c15-966f-3706fcf201e4","type":"CDSView"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"GC1EVPsh+b8=","dtype":"float64","shape":[1]},"outer_radius":[78],"start_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"x":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]},"y":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]}},"selected":{"id":"5d95168c-7487-4749-9d78-3cef9e4600cd","type":"Selection"},"selection_policy":{"id":"21f714a8-c9b9-4608-9515-6e54fe12203c","type":"UnionRenderers"}},"id":"aa69f689-5546-4d5d-8b4f-1e325cdda8a0","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"78fc179f-ef22-4e72-acb5-7ff428655fed","type":"BoxAnnotation"}},"id":"6222da84-b5f4-478d-8fed-02fa3070ad3b","type":"BoxZoomTool"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":60},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c46a488f-4fb5-4e68-bcdf-a5fdd38a5d03","type":"AnnularWedge"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"922bc0ad-de95-4899-a1d5-b7dd03e4b8e6","type":"Rect"},{"attributes":{},"id":"0f30e4a1-c69c-4f35-ba2d-e2299face225","type":"UnionRenderers"},{"attributes":{},"id":"87648345-f99b-4886-adb6-eac37cb8ca0f","type":"ResetTool"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"start_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"x":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]},"y":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]}},"selected":{"id":"530eb27b-e5aa-4926-b05d-a7877f26be1e","type":"Selection"},"selection_policy":{"id":"de9bb50f-c5e8-490f-8f37-b0c9c2bbfcd5","type":"UnionRenderers"}},"id":"ba2c4c55-57e9-448a-a2fc-90a1b60a7c0c","type":"ColumnDataSource"},{"attributes":{},"id":"6b2068be-472d-400d-b64e-91817df994cc","type":"Selection"},{"attributes":{},"id":"3f7048cc-08e8-4574-9bec-9ccb064ed6e3","type":"UnionRenderers"},{"attributes":{"source":{"id":"ba2c4c55-57e9-448a-a2fc-90a1b60a7c0c","type":"ColumnDataSource"}},"id":"54bed905-9fc3-4388-bf33-dc67f6e599e5","type":"CDSView"},{"attributes":{"data_source":{"id":"13282e00-cd19-42c3-af03-1d24783149e2","type":"ColumnDataSource"},"glyph":{"id":"1509d1d7-dbe4-4fb5-9bd7-81ecec5d9514","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3a054c2e-8828-48c9-b29a-6ad4ea4d70f2","type":"Text"},"selection_glyph":null,"view":{"id":"daa0dd11-20a5-4ec6-9b66-daa3caa783ec","type":"CDSView"}},"id":"9d275198-40cd-4dd5-b5ef-cca6fbbece8e","type":"GlyphRenderer"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":60},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":420},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d188226-75c8-4788-8974-6eb4f54be7c4","type":"AnnularWedge"},{"attributes":{},"id":"f3434064-f90b-4ac1-8dc6-2200cd8ba8f7","type":"Selection"},{"attributes":{},"id":"66c0d32f-c2ce-4292-9a68-7a8a6421fe4d","type":"SaveTool"}],"root_ids":["9143b968-c9e0-405d-a070-80a6f661ce00"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"22944945-e5a1-4117-9f66-8a6be9f7d3ea","elementid":"e2ade3a8-cdfa-4dfe-a208-41fa87b744d6","modelid":"9143b968-c9e0-405d-a070-80a6f661ce00"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.16.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();