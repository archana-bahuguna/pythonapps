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
      };var element = document.getElementById("b5d943d9-3b9f-48fa-9da5-22b39ce82b01");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b5d943d9-3b9f-48fa-9da5-22b39ce82b01' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b89181b1-7067-4f9a-a85b-638b8f4b6c55":{"roots":{"references":[{"attributes":{"source":{"id":"40c25658-06bb-4920-aa18-74b6306aa9fc","type":"ColumnDataSource"}},"id":"7d3ac83d-d9e4-4b24-aae7-8836c5bf4237","type":"CDSView"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e1f8129-a3b5-4d77-b677-d4859d727244","type":"Text"},{"attributes":{"data_source":{"id":"64e6d108-3dd2-4af4-bc78-8f8e986878d4","type":"ColumnDataSource"},"glyph":{"id":"e4638dca-b122-4ff4-82f6-10d614b1c09d","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1af74aab-ea62-41a3-beac-2782166634b0","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"76a66a9a-31e2-459f-9f46-f9cd8d530aa3","type":"CDSView"}},"id":"61e229c4-2b6e-4001-8969-fcacf924550a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6ab96534-7649-435c-8a6e-0ba51cddd1b0","type":"ColumnDataSource"}},"id":"81d0eb9e-b176-4283-8acd-cbd4246c3e0a","type":"CDSView"},{"attributes":{},"id":"745a9f88-4906-456d-af05-f113805ee42c","type":"LinearScale"},{"attributes":{"data_source":{"id":"f8dbf271-f7d5-4e9c-bdc5-a3eab173d8ff","type":"ColumnDataSource"},"glyph":{"id":"3221c7c3-d257-478a-bb09-830a7b2d7f5f","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1e035774-53c7-443c-8f64-3e04ea60e185","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"7b713570-6514-43f5-8e1d-f72ded6e0157","type":"CDSView"}},"id":"fd9f655f-dd70-4f12-9916-38258417e5c1","type":"GlyphRenderer"},{"attributes":{},"id":"3b30df24-1760-4d68-a15d-65ae4aac932b","type":"SaveTool"},{"attributes":{"source":{"id":"f8dbf271-f7d5-4e9c-bdc5-a3eab173d8ff","type":"ColumnDataSource"}},"id":"7b713570-6514-43f5-8e1d-f72ded6e0157","type":"CDSView"},{"attributes":{},"id":"d805f82c-ad24-4c10-8722-94f6302873eb","type":"UnionRenderers"},{"attributes":{},"id":"fad4d00d-e48f-45f5-8056-848b349c462c","type":"PanTool"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"4ef39034-124c-4bfe-93f9-bc2857b702c5","type":"Range1d"},{"attributes":{"source":{"id":"64e6d108-3dd2-4af4-bc78-8f8e986878d4","type":"ColumnDataSource"}},"id":"76a66a9a-31e2-459f-9f46-f9cd8d530aa3","type":"CDSView"},{"attributes":{"callback":null,"data":{"fill_color":["#c1ff55","#b7feea"],"line_color":["#c1ff55","#b7feea"],"x":[180,180],"y":[380,340]},"selected":{"id":"c8f5243f-426c-432f-b670-e3d61f46b8c7","type":"Selection"},"selection_policy":{"id":"d805f82c-ad24-4c10-8722-94f6302873eb","type":"UnionRenderers"}},"id":"40c25658-06bb-4920-aa18-74b6306aa9fc","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fad4d00d-e48f-45f5-8056-848b349c462c","type":"PanTool"},{"id":"18b0ba81-6256-4bc2-b212-50f36cde90b7","type":"WheelZoomTool"},{"id":"9f192879-6f92-4682-81b9-502cca044ad9","type":"BoxZoomTool"},{"id":"3b30df24-1760-4d68-a15d-65ae4aac932b","type":"SaveTool"},{"id":"a38da137-46eb-43a2-bd37-4cc9c3c4c6fd","type":"ResetTool"},{"id":"80b89da1-22e1-4e38-b7f2-b1aa20d383e3","type":"HelpTool"}]},"id":"16075248-c68f-4926-a2de-df5518e0aa4f","type":"Toolbar"},{"attributes":{"overlay":{"id":"a8cf9b78-91ea-4061-9914-a5d3c92b2be0","type":"BoxAnnotation"}},"id":"9f192879-6f92-4682-81b9-502cca044ad9","type":"BoxZoomTool"},{"attributes":{},"id":"18b0ba81-6256-4bc2-b212-50f36cde90b7","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"40c25658-06bb-4920-aa18-74b6306aa9fc","type":"ColumnDataSource"},"glyph":{"id":"64b7c506-15df-46a6-803f-a1e189ffacda","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9adbeff9-5fcb-4784-bb09-b12d9dff7a0a","type":"Rect"},"selection_glyph":null,"view":{"id":"7d3ac83d-d9e4-4b24-aae7-8836c5bf4237","type":"CDSView"}},"id":"c79aa914-973b-46a3-81b1-f549f4bb28f1","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"9adbeff9-5fcb-4784-bb09-b12d9dff7a0a","type":"Rect"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":20},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"64b7c506-15df-46a6-803f-a1e189ffacda","type":"Rect"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"7cea75c3-594c-4d90-be49-c51ed376b665","type":"Range1d"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"GC1EVPsh+b8=","dtype":"float64","shape":[1]},"outer_radius":[96],"start_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"x":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]},"y":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]}},"selected":{"id":"8df22b68-561e-4e13-99d0-bba1362df177","type":"Selection"},"selection_policy":{"id":"3e07cea4-d4d3-4145-8338-1064fbe7a501","type":"UnionRenderers"}},"id":"6ab96534-7649-435c-8a6e-0ba51cddd1b0","type":"ColumnDataSource"},{"attributes":{},"id":"264f488a-c25a-4ded-b378-8552841b4e00","type":"Selection"},{"attributes":{"source":{"id":"6c8efb15-ab39-4f55-a3bc-f17e127e4603","type":"ColumnDataSource"}},"id":"7c2af136-02b5-407a-bbee-f24cc381f200","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["Actualfear","Predictedfear"],"x":[200,200],"y":[365,325]},"selected":{"id":"f9072dc9-79c5-4a27-81cc-0ece0b935a2a","type":"Selection"},"selection_policy":{"id":"7e4dd8a8-b52f-4e9b-8508-faf445c2ef8e","type":"UnionRenderers"}},"id":"6c8efb15-ab39-4f55-a3bc-f17e127e4603","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a8cf9b78-91ea-4061-9914-a5d3c92b2be0","type":"BoxAnnotation"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"557fb4eb-8338-41d0-b35e-a0e337528d7a","type":"Text"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":60},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f463394-3c48-42af-b456-265c73908a52","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c1ff55"},"inner_radius":{"units":"data","value":60},"line_color":{"value":"#c1ff55"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8f4c385-206c-402f-98da-94ebf4d70858","type":"AnnularWedge"},{"attributes":{},"id":"c8f5243f-426c-432f-b670-e3d61f46b8c7","type":"Selection"},{"attributes":{},"id":"80b89da1-22e1-4e38-b7f2-b1aa20d383e3","type":"HelpTool"},{"attributes":{},"id":"7e4dd8a8-b52f-4e9b-8508-faf445c2ef8e","type":"UnionRenderers"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":60},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":420},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1af74aab-ea62-41a3-beac-2782166634b0","type":"AnnularWedge"},{"attributes":{},"id":"c2040f0a-38d1-4fab-a1fb-970db6df83e7","type":"LinearScale"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#b7feea"},"inner_radius":{"field":"inner_radius","units":"data"},"line_color":{"value":"#b7feea"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3221c7c3-d257-478a-bb09-830a7b2d7f5f","type":"AnnularWedge"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"start_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"x":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]},"y":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]}},"selected":{"id":"b1922093-d407-4d64-943c-4b40002798cf","type":"Selection"},"selection_policy":{"id":"50c7bf79-da03-40e6-a146-1be3094097af","type":"UnionRenderers"}},"id":"64e6d108-3dd2-4af4-bc78-8f8e986878d4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6ab96534-7649-435c-8a6e-0ba51cddd1b0","type":"ColumnDataSource"},"glyph":{"id":"b8f4c385-206c-402f-98da-94ebf4d70858","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3f463394-3c48-42af-b456-265c73908a52","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"81d0eb9e-b176-4283-8acd-cbd4246c3e0a","type":"CDSView"}},"id":"353970e9-7b1f-4d8d-8eb7-67d5f3413bf2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6c8efb15-ab39-4f55-a3bc-f17e127e4603","type":"ColumnDataSource"},"glyph":{"id":"557fb4eb-8338-41d0-b35e-a0e337528d7a","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9e1f8129-a3b5-4d77-b677-d4859d727244","type":"Text"},"selection_glyph":null,"view":{"id":"7c2af136-02b5-407a-bbee-f24cc381f200","type":"CDSView"}},"id":"06de60ea-cdef-4e22-ad3b-dd0fe2ea5a8b","type":"GlyphRenderer"},{"attributes":{},"id":"50c7bf79-da03-40e6-a146-1be3094097af","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Imagined vs real fear"},"id":"51febdd7-e196-42b8-acc5-bfe5f60909f5","type":"Title"},{"attributes":{},"id":"b1922093-d407-4d64-943c-4b40002798cf","type":"Selection"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"GC1EVPsh+b8=","dtype":"float64","shape":[1]},"inner_radius":[96],"outer_radius":[222],"start_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"x":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]},"y":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]}},"selected":{"id":"264f488a-c25a-4ded-b378-8552841b4e00","type":"Selection"},"selection_policy":{"id":"fc5a2a5c-896e-45d5-9bc8-dc1c292358f5","type":"UnionRenderers"}},"id":"f8dbf271-f7d5-4e9c-bdc5-a3eab173d8ff","type":"ColumnDataSource"},{"attributes":{},"id":"8df22b68-561e-4e13-99d0-bba1362df177","type":"Selection"},{"attributes":{},"id":"fc5a2a5c-896e-45d5-9bc8-dc1c292358f5","type":"UnionRenderers"},{"attributes":{"background_fill_color":{"value":"#f8f8f8"},"border_fill_color":{"value":"#f8f8f8"},"min_border":0,"outline_line_color":{"value":null},"plot_height":420,"plot_width":500,"renderers":[{"id":"a8cf9b78-91ea-4061-9914-a5d3c92b2be0","type":"BoxAnnotation"},{"id":"353970e9-7b1f-4d8d-8eb7-67d5f3413bf2","type":"GlyphRenderer"},{"id":"fd9f655f-dd70-4f12-9916-38258417e5c1","type":"GlyphRenderer"},{"id":"61e229c4-2b6e-4001-8969-fcacf924550a","type":"GlyphRenderer"},{"id":"c79aa914-973b-46a3-81b1-f549f4bb28f1","type":"GlyphRenderer"},{"id":"06de60ea-cdef-4e22-ad3b-dd0fe2ea5a8b","type":"GlyphRenderer"}],"title":{"id":"51febdd7-e196-42b8-acc5-bfe5f60909f5","type":"Title"},"toolbar":{"id":"16075248-c68f-4926-a2de-df5518e0aa4f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7cea75c3-594c-4d90-be49-c51ed376b665","type":"Range1d"},"x_scale":{"id":"745a9f88-4906-456d-af05-f113805ee42c","type":"LinearScale"},"y_range":{"id":"4ef39034-124c-4bfe-93f9-bc2857b702c5","type":"Range1d"},"y_scale":{"id":"c2040f0a-38d1-4fab-a1fb-970db6df83e7","type":"LinearScale"}},"id":"3a6b07b4-93dc-4bf4-ac26-09ee04f570f4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a38da137-46eb-43a2-bd37-4cc9c3c4c6fd","type":"ResetTool"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"field":"inner_radius","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e035774-53c7-443c-8f64-3e04ea60e185","type":"AnnularWedge"},{"attributes":{},"id":"f9072dc9-79c5-4a27-81cc-0ece0b935a2a","type":"Selection"},{"attributes":{},"id":"3e07cea4-d4d3-4145-8338-1064fbe7a501","type":"UnionRenderers"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c2c2d6"},"inner_radius":{"units":"data","value":60},"line_color":{"value":"#c2c2d6"},"outer_radius":{"units":"data","value":420},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4638dca-b122-4ff4-82f6-10d614b1c09d","type":"AnnularWedge"}],"root_ids":["3a6b07b4-93dc-4bf4-ac26-09ee04f570f4"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"b89181b1-7067-4f9a-a85b-638b8f4b6c55","elementid":"b5d943d9-3b9f-48fa-9da5-22b39ce82b01","modelid":"3a6b07b4-93dc-4bf4-ac26-09ee04f570f4"}];
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