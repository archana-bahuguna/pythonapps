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
      };var element = document.getElementById("f5d4623b-f9b2-4411-8bd0-4311d1506e9b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f5d4623b-f9b2-4411-8bd0-4311d1506e9b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3dbcbccf-c71d-4d41-9803-163b2d0f9989":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"82777f41-dec9-459a-ae04-bb3ce34a1f79","subtype":"Figure","type":"Plot"},"ticker":{"id":"737c0a1b-fb3a-4e65-ba0f-265600e6c983","type":"BasicTicker"}},"id":"bffb5c36-0cb0-4486-aeb2-0213a743991d","type":"Grid"},{"attributes":{},"id":"3eaec9a4-48ce-4249-8cc2-3c4f439089a6","type":"UnionRenderers"},{"attributes":{},"id":"9125d029-379a-46a5-bc79-0a1b440626c4","type":"PanTool"},{"attributes":{},"id":"2116c11d-851b-47c9-8bc0-901138e17ae1","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"94e87fb3-e6d3-479e-ad5c-2627d3a78e43","type":"DataRange1d"},{"attributes":{"below":[{"id":"17b1b5c0-fcf5-44f4-8385-9ea40475dd93","type":"LinearAxis"}],"left":[{"id":"aaa23424-7764-4b3a-b525-8b21436bf091","type":"LinearAxis"}],"plot_height":400,"renderers":[{"id":"17b1b5c0-fcf5-44f4-8385-9ea40475dd93","type":"LinearAxis"},{"id":"e70dc5f1-ddb2-484a-bc45-e9adfbf9ab58","type":"Grid"},{"id":"aaa23424-7764-4b3a-b525-8b21436bf091","type":"LinearAxis"},{"id":"bffb5c36-0cb0-4486-aeb2-0213a743991d","type":"Grid"},{"id":"b723c1cb-a275-44e5-b9e1-47ab92c577f2","type":"BoxAnnotation"},{"id":"2bc633ec-f7e3-4dc4-9ca0-379dd5d59904","type":"GlyphRenderer"},{"id":"cf084260-1452-437b-9c32-c481779e111d","type":"GlyphRenderer"}],"title":{"id":"1679e086-e4e5-45a4-8bd9-de6f0f1d37b1","type":"Title"},"toolbar":{"id":"29b8d20e-edc4-43c4-8d12-76cb2e1af2c3","type":"Toolbar"},"x_range":{"id":"569f7f57-f70b-4916-bfec-89a218e993e4","type":"DataRange1d"},"x_scale":{"id":"1b08f92c-8440-4ce9-ae81-8f396d29668c","type":"LinearScale"},"y_range":{"id":"94e87fb3-e6d3-479e-ad5c-2627d3a78e43","type":"DataRange1d"},"y_scale":{"id":"06a8ea2b-1896-4da7-bc21-cf7c3aa230b4","type":"LinearScale"}},"id":"82777f41-dec9-459a-ae04-bb3ce34a1f79","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"74523b65-4f0c-46bf-94dd-177ab1654b87","type":"BasicTickFormatter"},"plot":{"id":"82777f41-dec9-459a-ae04-bb3ce34a1f79","subtype":"Figure","type":"Plot"},"ticker":{"id":"f257531b-00a5-4c92-a670-545951e39905","type":"BasicTicker"}},"id":"17b1b5c0-fcf5-44f4-8385-9ea40475dd93","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"value":0.4},"width":{"field":"width"},"x":{"field":"x"}},"id":"5f54953e-349c-4915-8ea8-1aaf8aaf887b","type":"VBar"},{"attributes":{},"id":"343386d5-15bd-4bbb-b7df-ae42dc519de2","type":"ResetTool"},{"attributes":{"overlay":{"id":"b723c1cb-a275-44e5-b9e1-47ab92c577f2","type":"BoxAnnotation"}},"id":"a1e78d5c-4069-48b5-907a-ce9e472566c0","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"82777f41-dec9-459a-ae04-bb3ce34a1f79","subtype":"Figure","type":"Plot"},"ticker":{"id":"f257531b-00a5-4c92-a670-545951e39905","type":"BasicTicker"}},"id":"e70dc5f1-ddb2-484a-bc45-e9adfbf9ab58","type":"Grid"},{"attributes":{},"id":"06a8ea2b-1896-4da7-bc21-cf7c3aa230b4","type":"LinearScale"},{"attributes":{"source":{"id":"d2995bdf-9401-4841-9c16-2c2eeb15bea9","type":"ColumnDataSource"}},"id":"506525ec-20f4-4b73-871a-396eafb013b3","type":"CDSView"},{"attributes":{},"id":"74523b65-4f0c-46bf-94dd-177ab1654b87","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"7523601b-db66-4e4a-858a-fc66966f3e69","type":"ColumnDataSource"}},"id":"ac766b55-910c-42d6-87f6-35bafee3030f","type":"CDSView"},{"attributes":{"formatter":{"id":"5b3b7ae2-9848-45ff-9570-7134bc3940fa","type":"BasicTickFormatter"},"plot":{"id":"82777f41-dec9-459a-ae04-bb3ce34a1f79","subtype":"Figure","type":"Plot"},"ticker":{"id":"737c0a1b-fb3a-4e65-ba0f-265600e6c983","type":"BasicTicker"}},"id":"aaa23424-7764-4b3a-b525-8b21436bf091","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9125d029-379a-46a5-bc79-0a1b440626c4","type":"PanTool"},{"id":"39f4899a-85d3-4a0b-8474-4627463bd704","type":"WheelZoomTool"},{"id":"a1e78d5c-4069-48b5-907a-ce9e472566c0","type":"BoxZoomTool"},{"id":"a5b49b1f-6872-4f95-a3b2-0a7408543e66","type":"SaveTool"},{"id":"343386d5-15bd-4bbb-b7df-ae42dc519de2","type":"ResetTool"},{"id":"a94986b1-4c75-4972-8eea-dece645aa941","type":"HelpTool"}]},"id":"29b8d20e-edc4-43c4-8d12-76cb2e1af2c3","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b723c1cb-a275-44e5-b9e1-47ab92c577f2","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Imagined vs real"},"id":"1679e086-e4e5-45a4-8bd9-de6f0f1d37b1","type":"Title"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"#1f77b4"},"top":{"value":0.4},"width":{"field":"width"},"x":{"field":"x"}},"id":"9bd60fdd-0f29-49b3-8a15-d2021c370751","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"value":0.4},"width":{"field":"width"},"x":{"field":"x"}},"id":"293fecef-23f2-4564-b53a-2dfaa57068ca","type":"VBar"},{"attributes":{},"id":"a94986b1-4c75-4972-8eea-dece645aa941","type":"HelpTool"},{"attributes":{},"id":"1b08f92c-8440-4ce9-ae81-8f396d29668c","type":"LinearScale"},{"attributes":{},"id":"f257531b-00a5-4c92-a670-545951e39905","type":"BasicTicker"},{"attributes":{},"id":"5b3b7ae2-9848-45ff-9570-7134bc3940fa","type":"BasicTickFormatter"},{"attributes":{},"id":"737c0a1b-fb3a-4e65-ba0f-265600e6c983","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"width":[2],"x":["New something"]},"selected":{"id":"8fcd5ecc-25f4-4c96-a407-c7940f7ade17","type":"Selection"},"selection_policy":{"id":"2116c11d-851b-47c9-8bc0-901138e17ae1","type":"UnionRenderers"}},"id":"7523601b-db66-4e4a-858a-fc66966f3e69","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"569f7f57-f70b-4916-bfec-89a218e993e4","type":"DataRange1d"},{"attributes":{"data_source":{"id":"d2995bdf-9401-4841-9c16-2c2eeb15bea9","type":"ColumnDataSource"},"glyph":{"id":"9bd60fdd-0f29-49b3-8a15-d2021c370751","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5f54953e-349c-4915-8ea8-1aaf8aaf887b","type":"VBar"},"selection_glyph":null,"view":{"id":"506525ec-20f4-4b73-871a-396eafb013b3","type":"CDSView"}},"id":"2bc633ec-f7e3-4dc4-9ca0-379dd5d59904","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7523601b-db66-4e4a-858a-fc66966f3e69","type":"ColumnDataSource"},"glyph":{"id":"0addf72c-52d7-4a51-aec9-962832acd2f9","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"293fecef-23f2-4564-b53a-2dfaa57068ca","type":"VBar"},"selection_glyph":null,"view":{"id":"ac766b55-910c-42d6-87f6-35bafee3030f","type":"CDSView"}},"id":"cf084260-1452-437b-9c32-c481779e111d","type":"GlyphRenderer"},{"attributes":{},"id":"39f4899a-85d3-4a0b-8474-4627463bd704","type":"WheelZoomTool"},{"attributes":{},"id":"bd34b8e2-cdd1-48cb-9dbe-592d21a8615a","type":"Selection"},{"attributes":{},"id":"a5b49b1f-6872-4f95-a3b2-0a7408543e66","type":"SaveTool"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"#1f77b4"},"top":{"value":0.4},"width":{"field":"width"},"x":{"field":"x"}},"id":"0addf72c-52d7-4a51-aec9-962832acd2f9","type":"VBar"},{"attributes":{"callback":null,"data":{"width":[7],"x":["New something"]},"selected":{"id":"bd34b8e2-cdd1-48cb-9dbe-592d21a8615a","type":"Selection"},"selection_policy":{"id":"3eaec9a4-48ce-4249-8cc2-3c4f439089a6","type":"UnionRenderers"}},"id":"d2995bdf-9401-4841-9c16-2c2eeb15bea9","type":"ColumnDataSource"},{"attributes":{},"id":"8fcd5ecc-25f4-4c96-a407-c7940f7ade17","type":"Selection"}],"root_ids":["82777f41-dec9-459a-ae04-bb3ce34a1f79"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"3dbcbccf-c71d-4d41-9803-163b2d0f9989","elementid":"f5d4623b-f9b2-4411-8bd0-4311d1506e9b","modelid":"82777f41-dec9-459a-ae04-bb3ce34a1f79"}];
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