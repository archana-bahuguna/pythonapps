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
      };var element = document.getElementById("6d91fe92-e068-4215-a748-da0a752d7359");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6d91fe92-e068-4215-a748-da0a752d7359' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5da0d097-d66f-4206-9d74-30ab5af8f9df":{"roots":{"references":[{"attributes":{},"id":"1e0d9ff2-aab4-428d-b5dd-904f67843a15","type":"CategoricalTickFormatter"},{"attributes":{},"id":"564f4510-0f40-4745-b781-4d2c2d985c86","type":"UnionRenderers"},{"attributes":{},"id":"c269d01a-bff1-4a8d-8a20-dad002416cf5","type":"PanTool"},{"attributes":{"source":{"id":"ec3cc8d2-80ce-488e-979e-28625c109df8","type":"ColumnDataSource"}},"id":"f85c3359-2079-4c22-af17-7f04182cd8a2","type":"CDSView"},{"attributes":{},"id":"e9030a25-911d-473e-91c3-eef81a054407","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"03ed67ca-458f-4810-947b-313de7f55f5c","type":"BoxAnnotation"},{"attributes":{},"id":"a925f308-8b01-44ef-b95b-1d5ee1185c4e","type":"Selection"},{"attributes":{"callback":null,"data":{"top":[6],"x":["Testing my app"]},"selected":{"id":"a925f308-8b01-44ef-b95b-1d5ee1185c4e","type":"Selection"},"selection_policy":{"id":"564f4510-0f40-4745-b781-4d2c2d985c86","type":"UnionRenderers"}},"id":"ec3cc8d2-80ce-488e-979e-28625c109df8","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":[1],"x":["Testing my app"]},"selected":{"id":"28d79a79-dc30-4ea1-acf7-d1388b81cd2b","type":"Selection"},"selection_policy":{"id":"990ff0b9-871d-4502-8ced-e5a2afa1c462","type":"UnionRenderers"}},"id":"5c332ce5-670b-4b10-ae74-eea38504df17","type":"ColumnDataSource"},{"attributes":{},"id":"ccc1c1a2-099d-44b3-a7b8-505fd6f5dfa3","type":"HelpTool"},{"attributes":{"below":[{"id":"c561c0d1-0505-4183-984e-2bc356974c88","type":"CategoricalAxis"}],"left":[{"id":"e9552a39-c0cd-4e93-9531-e47d0ff0a08c","type":"LinearAxis"}],"plot_height":400,"renderers":[{"id":"c561c0d1-0505-4183-984e-2bc356974c88","type":"CategoricalAxis"},{"id":"a77a8521-2b6f-4656-a969-2bd9c1e38ee9","type":"Grid"},{"id":"e9552a39-c0cd-4e93-9531-e47d0ff0a08c","type":"LinearAxis"},{"id":"7dc6127f-01b0-433e-84e4-4c7e5aadce6d","type":"Grid"},{"id":"03ed67ca-458f-4810-947b-313de7f55f5c","type":"BoxAnnotation"},{"id":"956fecde-7f19-4799-be1b-ac950ab497c0","type":"GlyphRenderer"},{"id":"2f5927a9-c5cb-436b-bcf7-68fff8cc5df0","type":"GlyphRenderer"}],"title":{"id":"dff6b982-46eb-45b1-8402-7b61d70faaac","type":"Title"},"toolbar":{"id":"e55f6b49-ef24-4910-b366-0efa8e44ec07","type":"Toolbar"},"x_range":{"id":"de0a4021-c197-458c-b569-d389891314e8","type":"FactorRange"},"x_scale":{"id":"4fbb0fe6-5cf3-41e5-b604-56fef79a4093","type":"CategoricalScale"},"y_range":{"id":"11241cd9-49ff-4e35-8252-3648047bb9db","type":"DataRange1d"},"y_scale":{"id":"2d64909f-c357-4834-88a4-f3582de08412","type":"LinearScale"}},"id":"4f8a44a8-39ea-40c3-816b-3c0a428d640a","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"de1f354d-5843-45af-9db7-cc088582944d","type":"VBar"},{"attributes":{},"id":"c9a1ab4a-67ff-4592-9e77-eb813a956c03","type":"BasicTickFormatter"},{"attributes":{},"id":"c871d4d5-4dbd-4db8-9884-52ae2048327f","type":"CategoricalTicker"},{"attributes":{"source":{"id":"5c332ce5-670b-4b10-ae74-eea38504df17","type":"ColumnDataSource"}},"id":"3534b409-c0e3-4ef7-9c01-238291d0fdb6","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"cc94fc31-6a07-4393-8a94-12696245d029","type":"VBar"},{"attributes":{},"id":"28d79a79-dc30-4ea1-acf7-d1388b81cd2b","type":"Selection"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"715f7a45-62f9-4256-ae23-25a99adb2431","type":"VBar"},{"attributes":{"plot":{"id":"4f8a44a8-39ea-40c3-816b-3c0a428d640a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c871d4d5-4dbd-4db8-9884-52ae2048327f","type":"CategoricalTicker"}},"id":"a77a8521-2b6f-4656-a969-2bd9c1e38ee9","type":"Grid"},{"attributes":{"data_source":{"id":"ec3cc8d2-80ce-488e-979e-28625c109df8","type":"ColumnDataSource"},"glyph":{"id":"715f7a45-62f9-4256-ae23-25a99adb2431","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"de1f354d-5843-45af-9db7-cc088582944d","type":"VBar"},"selection_glyph":null,"view":{"id":"f85c3359-2079-4c22-af17-7f04182cd8a2","type":"CDSView"}},"id":"956fecde-7f19-4799-be1b-ac950ab497c0","type":"GlyphRenderer"},{"attributes":{},"id":"021c7f88-6dab-43c5-8eac-85d664a82fa9","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Imagined vs real"},"id":"dff6b982-46eb-45b1-8402-7b61d70faaac","type":"Title"},{"attributes":{"formatter":{"id":"1e0d9ff2-aab4-428d-b5dd-904f67843a15","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"4f8a44a8-39ea-40c3-816b-3c0a428d640a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c871d4d5-4dbd-4db8-9884-52ae2048327f","type":"CategoricalTicker"}},"id":"c561c0d1-0505-4183-984e-2bc356974c88","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"03ed67ca-458f-4810-947b-313de7f55f5c","type":"BoxAnnotation"}},"id":"a0dc26ba-36c6-4885-a2c7-d103aae0500f","type":"BoxZoomTool"},{"attributes":{},"id":"196b019f-2d2a-4888-b80a-a0f53ea0d8eb","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"4f8a44a8-39ea-40c3-816b-3c0a428d640a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad0bfea4-fd54-4d32-b6b8-5cd73a035074","type":"BasicTicker"}},"id":"7dc6127f-01b0-433e-84e4-4c7e5aadce6d","type":"Grid"},{"attributes":{"data_source":{"id":"5c332ce5-670b-4b10-ae74-eea38504df17","type":"ColumnDataSource"},"glyph":{"id":"25d43974-997b-49ff-9512-f1fcb5da36d1","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cc94fc31-6a07-4393-8a94-12696245d029","type":"VBar"},"selection_glyph":null,"view":{"id":"3534b409-c0e3-4ef7-9c01-238291d0fdb6","type":"CDSView"}},"id":"2f5927a9-c5cb-436b-bcf7-68fff8cc5df0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"11241cd9-49ff-4e35-8252-3648047bb9db","type":"DataRange1d"},{"attributes":{"callback":null,"factors":["Testing my app"]},"id":"de0a4021-c197-458c-b569-d389891314e8","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c269d01a-bff1-4a8d-8a20-dad002416cf5","type":"PanTool"},{"id":"021c7f88-6dab-43c5-8eac-85d664a82fa9","type":"WheelZoomTool"},{"id":"a0dc26ba-36c6-4885-a2c7-d103aae0500f","type":"BoxZoomTool"},{"id":"196b019f-2d2a-4888-b80a-a0f53ea0d8eb","type":"SaveTool"},{"id":"e9030a25-911d-473e-91c3-eef81a054407","type":"ResetTool"},{"id":"ccc1c1a2-099d-44b3-a7b8-505fd6f5dfa3","type":"HelpTool"}]},"id":"e55f6b49-ef24-4910-b366-0efa8e44ec07","type":"Toolbar"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"25d43974-997b-49ff-9512-f1fcb5da36d1","type":"VBar"},{"attributes":{},"id":"4fbb0fe6-5cf3-41e5-b604-56fef79a4093","type":"CategoricalScale"},{"attributes":{},"id":"2d64909f-c357-4834-88a4-f3582de08412","type":"LinearScale"},{"attributes":{},"id":"ad0bfea4-fd54-4d32-b6b8-5cd73a035074","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c9a1ab4a-67ff-4592-9e77-eb813a956c03","type":"BasicTickFormatter"},"plot":{"id":"4f8a44a8-39ea-40c3-816b-3c0a428d640a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad0bfea4-fd54-4d32-b6b8-5cd73a035074","type":"BasicTicker"}},"id":"e9552a39-c0cd-4e93-9531-e47d0ff0a08c","type":"LinearAxis"},{"attributes":{},"id":"990ff0b9-871d-4502-8ced-e5a2afa1c462","type":"UnionRenderers"}],"root_ids":["4f8a44a8-39ea-40c3-816b-3c0a428d640a"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"5da0d097-d66f-4206-9d74-30ab5af8f9df","elementid":"6d91fe92-e068-4215-a748-da0a752d7359","modelid":"4f8a44a8-39ea-40c3-816b-3c0a428d640a"}];
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