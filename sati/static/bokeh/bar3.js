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
      };var element = document.getElementById("4c1d5cd3-2032-464a-b41a-e113323f33e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c1d5cd3-2032-464a-b41a-e113323f33e1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f68cf34c-a9a9-4f7e-8778-7fecf454407f":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d3233ab9-cf40-499b-bf40-67231634dc69","type":"BoxAnnotation"},{"attributes":{},"id":"72dc8678-4151-4e55-a182-8f05ac1685a4","type":"UnionRenderers"},{"attributes":{"below":[{"id":"c1dcc31d-eebd-4bac-9d29-a9de5c3e6cdc","type":"LinearAxis"}],"left":[{"id":"77777fe5-5821-433c-a66b-9ab064d0fd90","type":"LinearAxis"}],"plot_height":400,"renderers":[{"id":"c1dcc31d-eebd-4bac-9d29-a9de5c3e6cdc","type":"LinearAxis"},{"id":"39f050f1-0361-4c7e-91e8-af5ba0f33cc9","type":"Grid"},{"id":"77777fe5-5821-433c-a66b-9ab064d0fd90","type":"LinearAxis"},{"id":"5850e6c2-d354-4120-a7ef-4e13d5095935","type":"Grid"},{"id":"d3233ab9-cf40-499b-bf40-67231634dc69","type":"BoxAnnotation"},{"id":"3e2df908-cf24-4298-b764-47c53369d9ed","type":"GlyphRenderer"},{"id":"8b397de2-3b92-40de-8c72-ab04416c50c1","type":"GlyphRenderer"}],"title":{"id":"77bff493-607b-4d0b-ba89-2470df648fc3","type":"Title"},"toolbar":{"id":"9331ede9-514c-487e-88f4-bca31fc2a5d8","type":"Toolbar"},"x_range":{"id":"b1a173be-af8d-4579-84ad-fa365d779874","type":"DataRange1d"},"x_scale":{"id":"1d57ab39-8a6f-4702-9e68-97b4c8c67160","type":"LinearScale"},"y_range":{"id":"a9ac705c-411a-427b-a762-40573536ed73","type":"DataRange1d"},"y_scale":{"id":"a617891e-48a4-48a6-9893-a4361226e47a","type":"LinearScale"}},"id":"fda21d6c-ff7f-45a0-9165-4fc97f32bd5d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ed855e57-d745-4988-8131-d818869365e7","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b1a173be-af8d-4579-84ad-fa365d779874","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"fda21d6c-ff7f-45a0-9165-4fc97f32bd5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed855e57-d745-4988-8131-d818869365e7","type":"BasicTicker"}},"id":"5850e6c2-d354-4120-a7ef-4e13d5095935","type":"Grid"},{"attributes":{"callback":null,"data":{"width":[9],"x":["abc"]},"selected":{"id":"50eb36c0-2935-4922-bb11-918e58949007","type":"Selection"},"selection_policy":{"id":"72dc8678-4151-4e55-a182-8f05ac1685a4","type":"UnionRenderers"}},"id":"5268c36e-5498-4ffa-85cb-65a130f554c2","type":"ColumnDataSource"},{"attributes":{},"id":"1d57ab39-8a6f-4702-9e68-97b4c8c67160","type":"LinearScale"},{"attributes":{},"id":"710b1fd5-2b82-435e-be39-847f5f3723c6","type":"HelpTool"},{"attributes":{},"id":"699ed544-1e67-4f04-ba93-4abf4d7285c4","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"d3233ab9-cf40-499b-bf40-67231634dc69","type":"BoxAnnotation"}},"id":"f8885f2f-a8ac-49f1-b74d-9246654208ea","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"5268c36e-5498-4ffa-85cb-65a130f554c2","type":"ColumnDataSource"},"glyph":{"id":"4cc9d811-1a01-4ead-89f5-1e8bb7d9b0e5","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3171a716-58b4-4a9d-a8fa-2e15153f0e71","type":"VBar"},"selection_glyph":null,"view":{"id":"5180c73b-ae1d-482e-8160-23cd3df65714","type":"CDSView"}},"id":"3e2df908-cf24-4298-b764-47c53369d9ed","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"#1f77b4"},"top":{"value":0.4},"width":{"field":"width"},"x":{"field":"x"}},"id":"656e9f71-9706-4694-b750-b80d370bfa28","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7bbb151b-5d16-483d-997c-f0947e6d96a5","type":"PanTool"},{"id":"e35eecc5-b6c2-40db-bd8b-51776c431432","type":"WheelZoomTool"},{"id":"f8885f2f-a8ac-49f1-b74d-9246654208ea","type":"BoxZoomTool"},{"id":"c30d71a1-fd15-4f37-aed0-66b9382b7f01","type":"SaveTool"},{"id":"1045ff46-f0c0-4ee6-a4fa-c8bb3a824249","type":"ResetTool"},{"id":"710b1fd5-2b82-435e-be39-847f5f3723c6","type":"HelpTool"}]},"id":"9331ede9-514c-487e-88f4-bca31fc2a5d8","type":"Toolbar"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"#1f77b4"},"top":{"value":0.4},"width":{"field":"width"},"x":{"field":"x"}},"id":"4cc9d811-1a01-4ead-89f5-1e8bb7d9b0e5","type":"VBar"},{"attributes":{},"id":"06ff9d55-999b-4056-80bf-85b336dae29f","type":"Selection"},{"attributes":{},"id":"a617891e-48a4-48a6-9893-a4361226e47a","type":"LinearScale"},{"attributes":{},"id":"1ccd2038-5d57-4a9b-bc1c-24b981c1e593","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"5268c36e-5498-4ffa-85cb-65a130f554c2","type":"ColumnDataSource"}},"id":"5180c73b-ae1d-482e-8160-23cd3df65714","type":"CDSView"},{"attributes":{"formatter":{"id":"1ccd2038-5d57-4a9b-bc1c-24b981c1e593","type":"BasicTickFormatter"},"plot":{"id":"fda21d6c-ff7f-45a0-9165-4fc97f32bd5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c8d84eb1-8687-440e-a1ad-49a8872f85ac","type":"BasicTicker"}},"id":"c1dcc31d-eebd-4bac-9d29-a9de5c3e6cdc","type":"LinearAxis"},{"attributes":{},"id":"7bbb151b-5d16-483d-997c-f0947e6d96a5","type":"PanTool"},{"attributes":{"callback":null,"data":{"width":[3],"x":["abc"]},"selected":{"id":"06ff9d55-999b-4056-80bf-85b336dae29f","type":"Selection"},"selection_policy":{"id":"22dca56f-1c76-47b7-965d-8dea96d1eb8c","type":"UnionRenderers"}},"id":"6263de7d-eca8-4fff-82a2-6fa01ec16956","type":"ColumnDataSource"},{"attributes":{},"id":"1045ff46-f0c0-4ee6-a4fa-c8bb3a824249","type":"ResetTool"},{"attributes":{},"id":"c30d71a1-fd15-4f37-aed0-66b9382b7f01","type":"SaveTool"},{"attributes":{"data_source":{"id":"6263de7d-eca8-4fff-82a2-6fa01ec16956","type":"ColumnDataSource"},"glyph":{"id":"656e9f71-9706-4694-b750-b80d370bfa28","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3e49a22-de44-4b3b-8b76-c8c72e6818b6","type":"VBar"},"selection_glyph":null,"view":{"id":"931ff204-df5b-48f1-abef-544f6d7442e5","type":"CDSView"}},"id":"8b397de2-3b92-40de-8c72-ab04416c50c1","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"value":0.4},"width":{"field":"width"},"x":{"field":"x"}},"id":"b3e49a22-de44-4b3b-8b76-c8c72e6818b6","type":"VBar"},{"attributes":{},"id":"c8d84eb1-8687-440e-a1ad-49a8872f85ac","type":"BasicTicker"},{"attributes":{"source":{"id":"6263de7d-eca8-4fff-82a2-6fa01ec16956","type":"ColumnDataSource"}},"id":"931ff204-df5b-48f1-abef-544f6d7442e5","type":"CDSView"},{"attributes":{},"id":"22dca56f-1c76-47b7-965d-8dea96d1eb8c","type":"UnionRenderers"},{"attributes":{},"id":"e35eecc5-b6c2-40db-bd8b-51776c431432","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"699ed544-1e67-4f04-ba93-4abf4d7285c4","type":"BasicTickFormatter"},"plot":{"id":"fda21d6c-ff7f-45a0-9165-4fc97f32bd5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed855e57-d745-4988-8131-d818869365e7","type":"BasicTicker"}},"id":"77777fe5-5821-433c-a66b-9ab064d0fd90","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"value":0.4},"width":{"field":"width"},"x":{"field":"x"}},"id":"3171a716-58b4-4a9d-a8fa-2e15153f0e71","type":"VBar"},{"attributes":{"plot":{"id":"fda21d6c-ff7f-45a0-9165-4fc97f32bd5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c8d84eb1-8687-440e-a1ad-49a8872f85ac","type":"BasicTicker"}},"id":"39f050f1-0361-4c7e-91e8-af5ba0f33cc9","type":"Grid"},{"attributes":{"callback":null},"id":"a9ac705c-411a-427b-a762-40573536ed73","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Imagined vs real"},"id":"77bff493-607b-4d0b-ba89-2470df648fc3","type":"Title"},{"attributes":{},"id":"50eb36c0-2935-4922-bb11-918e58949007","type":"Selection"}],"root_ids":["fda21d6c-ff7f-45a0-9165-4fc97f32bd5d"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"f68cf34c-a9a9-4f7e-8778-7fecf454407f","elementid":"4c1d5cd3-2032-464a-b41a-e113323f33e1","modelid":"fda21d6c-ff7f-45a0-9165-4fc97f32bd5d"}];
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