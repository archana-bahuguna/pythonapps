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
      };var element = document.getElementById("23c01a7a-e5ad-4cb7-be2b-92ea54d4ab82");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '23c01a7a-e5ad-4cb7-be2b-92ea54d4ab82' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"58126009-d5e7-4e6d-86e5-b8df7d2d920a":{"roots":{"references":[{"attributes":{"callback":null},"id":"de4efd91-03d4-4029-90c1-2eb319a53958","type":"DataRange1d"},{"attributes":{"overlay":{"id":"fb53e817-322d-4b90-96c9-37346e63be15","type":"BoxAnnotation"}},"id":"b708849a-199d-4f2d-8216-ad10cd8f68e5","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"top":[5,4,3,2,7,8,5,4,3,6,7,5,5,4,3,6],"x":["Business Leadership&#x27;s pitch","VCU exam","Toastmasters speech","Sky diving","Speech2","Public speaking2","Toastmasters speech2","Sky diving2","Speech3","Public speaking3","Toastmasters speech3","Sky diving3","Toastmasters speech4","Sky diving4","Speech4","Public speaking4"]},"selected":{"id":"f0fe5bca-4d38-4cf4-9259-c37404ba3c04","type":"Selection"},"selection_policy":{"id":"d39b5263-617e-4370-95a4-c29673d5fa32","type":"UnionRenderers"}},"id":"2182f196-602b-483c-bf7f-2b70d5cb68dc","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Business Leadership&#x27;s pitch","VCU exam","Toastmasters speech","Sky diving","Speech2","Public speaking2","Toastmasters speech2","Sky diving2","Speech3","Public speaking3","Toastmasters speech3","Sky diving3","Toastmasters speech4","Sky diving4","Speech4","Public speaking4"]},"id":"0be9fda0-b2ba-41cc-a654-8a1f4c7bfdc3","type":"FactorRange"},{"attributes":{"source":{"id":"d3f0776f-de03-4537-8ff2-37c3c22882b2","type":"ColumnDataSource"}},"id":"41f68e3f-6057-4170-9ecf-208ddca40366","type":"CDSView"},{"attributes":{"data_source":{"id":"d3f0776f-de03-4537-8ff2-37c3c22882b2","type":"ColumnDataSource"},"glyph":{"id":"b3c75c2a-efce-4ac7-8fe6-a14cc0babb25","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f00e1d4e-d40b-499e-a31b-af239c306556","type":"VBar"},"selection_glyph":null,"view":{"id":"41f68e3f-6057-4170-9ecf-208ddca40366","type":"CDSView"}},"id":"49f598dd-c70a-44b3-be56-250589fe152e","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d1be4570-1323-4189-9721-5746bce2a9f6","type":"PanTool"},{"id":"beb44e91-4130-4b5f-9873-8479268ecc2c","type":"WheelZoomTool"},{"id":"b708849a-199d-4f2d-8216-ad10cd8f68e5","type":"BoxZoomTool"},{"id":"1d06fee0-9c85-4d7e-9aa3-0998548038c4","type":"SaveTool"},{"id":"46688a09-5263-42b6-8d06-cf5af2d057c1","type":"ResetTool"},{"id":"b0b76a59-955f-4577-af2a-1d0aa59b229e","type":"HelpTool"}]},"id":"72eface8-ef31-4cc9-a342-074cfa214a69","type":"Toolbar"},{"attributes":{"plot":{"id":"d055a3d6-d770-4615-a154-99dd9f992fc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"09bfc8f0-fe45-4d59-8773-221ca6d1caf7","type":"CategoricalTicker"}},"id":"fa120508-d6d5-4e8f-9bcf-89e3ffafd12b","type":"Grid"},{"attributes":{"plot":null,"text":"Imagined vs real"},"id":"8b48e6e6-bfce-438a-8cdc-dc7be277b908","type":"Title"},{"attributes":{},"id":"d39b5263-617e-4370-95a4-c29673d5fa32","type":"UnionRenderers"},{"attributes":{},"id":"beb44e91-4130-4b5f-9873-8479268ecc2c","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2182f196-602b-483c-bf7f-2b70d5cb68dc","type":"ColumnDataSource"},"glyph":{"id":"cd20d0ea-639a-4ca4-8777-9b705ecd8950","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2fe736e5-dfa4-4142-b4e3-00c5b5f7f60e","type":"VBar"},"selection_glyph":null,"view":{"id":"54a9ca3c-abb4-459b-801b-46bf5f75ae4e","type":"CDSView"}},"id":"88680aee-e7b2-462c-af88-425f0adae73b","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5164362a-8c98-4662-ad41-5a6848214964","type":"BasicTickFormatter"},"plot":{"id":"d055a3d6-d770-4615-a154-99dd9f992fc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d95e053-5042-4c0f-bce3-f90d099c5ba0","type":"BasicTicker"}},"id":"62d667bf-daf4-4905-a6b3-03116453465b","type":"LinearAxis"},{"attributes":{},"id":"0d95e053-5042-4c0f-bce3-f90d099c5ba0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"01160d40-1544-4cbb-bcb2-28ed39fc209e","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d055a3d6-d770-4615-a154-99dd9f992fc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"09bfc8f0-fe45-4d59-8773-221ca6d1caf7","type":"CategoricalTicker"}},"id":"51f30c44-63cb-4e6e-9146-fdbae07577f0","type":"CategoricalAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fb53e817-322d-4b90-96c9-37346e63be15","type":"BoxAnnotation"},{"attributes":{},"id":"b0b76a59-955f-4577-af2a-1d0aa59b229e","type":"HelpTool"},{"attributes":{},"id":"46688a09-5263-42b6-8d06-cf5af2d057c1","type":"ResetTool"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"cd20d0ea-639a-4ca4-8777-9b705ecd8950","type":"VBar"},{"attributes":{"source":{"id":"2182f196-602b-483c-bf7f-2b70d5cb68dc","type":"ColumnDataSource"}},"id":"54a9ca3c-abb4-459b-801b-46bf5f75ae4e","type":"CDSView"},{"attributes":{"below":[{"id":"51f30c44-63cb-4e6e-9146-fdbae07577f0","type":"CategoricalAxis"}],"left":[{"id":"62d667bf-daf4-4905-a6b3-03116453465b","type":"LinearAxis"}],"plot_height":400,"renderers":[{"id":"51f30c44-63cb-4e6e-9146-fdbae07577f0","type":"CategoricalAxis"},{"id":"fa120508-d6d5-4e8f-9bcf-89e3ffafd12b","type":"Grid"},{"id":"62d667bf-daf4-4905-a6b3-03116453465b","type":"LinearAxis"},{"id":"7924bd37-83df-49cf-8a57-e296f3ef7258","type":"Grid"},{"id":"fb53e817-322d-4b90-96c9-37346e63be15","type":"BoxAnnotation"},{"id":"49f598dd-c70a-44b3-be56-250589fe152e","type":"GlyphRenderer"},{"id":"88680aee-e7b2-462c-af88-425f0adae73b","type":"GlyphRenderer"}],"title":{"id":"8b48e6e6-bfce-438a-8cdc-dc7be277b908","type":"Title"},"toolbar":{"id":"72eface8-ef31-4cc9-a342-074cfa214a69","type":"Toolbar"},"x_range":{"id":"0be9fda0-b2ba-41cc-a654-8a1f4c7bfdc3","type":"FactorRange"},"x_scale":{"id":"cfe3e226-eafb-439a-b115-666db0745ac1","type":"CategoricalScale"},"y_range":{"id":"de4efd91-03d4-4029-90c1-2eb319a53958","type":"DataRange1d"},"y_scale":{"id":"57d67e2b-c85f-43cd-9bbb-3bbd3234651a","type":"LinearScale"}},"id":"d055a3d6-d770-4615-a154-99dd9f992fc7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"57d67e2b-c85f-43cd-9bbb-3bbd3234651a","type":"LinearScale"},{"attributes":{"callback":null,"data":{"top":[8,8,7,8,8,8,7,8,8,8,7,8,7,8,8,8],"x":["Business Leadership&#x27;s pitch","VCU exam","Toastmasters speech","Sky diving","Speech2","Public speaking2","Toastmasters speech2","Sky diving2","Speech3","Public speaking3","Toastmasters speech3","Sky diving3","Toastmasters speech4","Sky diving4","Speech4","Public speaking4"]},"selected":{"id":"2ecfdbf0-4c9f-40c4-a586-2edcaf55f18c","type":"Selection"},"selection_policy":{"id":"ba5076d5-9851-48dc-903d-42da7dc43687","type":"UnionRenderers"}},"id":"d3f0776f-de03-4537-8ff2-37c3c22882b2","type":"ColumnDataSource"},{"attributes":{},"id":"2ecfdbf0-4c9f-40c4-a586-2edcaf55f18c","type":"Selection"},{"attributes":{},"id":"ba5076d5-9851-48dc-903d-42da7dc43687","type":"UnionRenderers"},{"attributes":{},"id":"f0fe5bca-4d38-4cf4-9259-c37404ba3c04","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"2fe736e5-dfa4-4142-b4e3-00c5b5f7f60e","type":"VBar"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"b3c75c2a-efce-4ac7-8fe6-a14cc0babb25","type":"VBar"},{"attributes":{},"id":"01160d40-1544-4cbb-bcb2-28ed39fc209e","type":"CategoricalTickFormatter"},{"attributes":{},"id":"5164362a-8c98-4662-ad41-5a6848214964","type":"BasicTickFormatter"},{"attributes":{},"id":"1d06fee0-9c85-4d7e-9aa3-0998548038c4","type":"SaveTool"},{"attributes":{},"id":"09bfc8f0-fe45-4d59-8773-221ca6d1caf7","type":"CategoricalTicker"},{"attributes":{},"id":"cfe3e226-eafb-439a-b115-666db0745ac1","type":"CategoricalScale"},{"attributes":{},"id":"d1be4570-1323-4189-9721-5746bce2a9f6","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"f00e1d4e-d40b-499e-a31b-af239c306556","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"d055a3d6-d770-4615-a154-99dd9f992fc7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d95e053-5042-4c0f-bce3-f90d099c5ba0","type":"BasicTicker"}},"id":"7924bd37-83df-49cf-8a57-e296f3ef7258","type":"Grid"}],"root_ids":["d055a3d6-d770-4615-a154-99dd9f992fc7"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"58126009-d5e7-4e6d-86e5-b8df7d2d920a","elementid":"23c01a7a-e5ad-4cb7-be2b-92ea54d4ab82","modelid":"d055a3d6-d770-4615-a154-99dd9f992fc7"}];
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