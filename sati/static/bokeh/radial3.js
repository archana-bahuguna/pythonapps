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
      };var element = document.getElementById("195182aa-f3dd-4eb5-a6b9-200c8f71c2d8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '195182aa-f3dd-4eb5-a6b9-200c8f71c2d8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"479b1c79-c894-43ae-bc5a-e7a6048bbfd9":{"roots":{"references":[{"attributes":{"background_fill_color":{"value":"#f8f8f8"},"border_fill_color":{"value":"#f8f8f8"},"min_border":0,"outline_line_color":{"value":null},"plot_height":420,"plot_width":500,"renderers":[{"id":"433e9f1e-099d-47c0-be67-d8e08176ea88","type":"BoxAnnotation"},{"id":"ef7e1220-e193-49a3-988f-2a34a0d5db67","type":"GlyphRenderer"},{"id":"e77b0932-921d-46bc-8e62-b2ea5df9d025","type":"GlyphRenderer"},{"id":"e4535611-196c-4da3-9432-12e6f178c2ed","type":"GlyphRenderer"},{"id":"bdea0cd1-3b94-401f-a66f-3626b4057a5c","type":"GlyphRenderer"},{"id":"9a17d396-084d-4435-bd7f-5da3c07429ea","type":"GlyphRenderer"}],"title":{"id":"eab32585-7599-4040-915d-1ebf5ee80f2b","type":"Title"},"toolbar":{"id":"188b8b30-46ee-46e4-85e6-9c4f430ecc84","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f0d143d7-b2de-425e-b527-d52baae86359","type":"Range1d"},"x_scale":{"id":"b204e059-1907-4600-ab22-7ddfdc79ee6a","type":"LinearScale"},"y_range":{"id":"066ee293-cf7e-4ec8-b5cd-74a04665f24a","type":"Range1d"},"y_scale":{"id":"b8bd85d5-0429-418a-bf2d-d868cdcc52a3","type":"LinearScale"}},"id":"97590b28-4653-493f-bc77-f5ef8c55bcac","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"0efbc34b-f396-4117-a601-3093b6fadcc6","type":"ColumnDataSource"}},"id":"ed682f0d-3ac3-4279-b64e-6615a33b5ae4","type":"CDSView"},{"attributes":{},"id":"b204e059-1907-4600-ab22-7ddfdc79ee6a","type":"LinearScale"},{"attributes":{},"id":"5961b084-78ca-451c-907d-abcd79a883f2","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#b7feea"},"inner_radius":{"field":"inner_radius","units":"data"},"line_color":{"value":"#b7feea"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7aa90e2f-9821-42cd-9703-98e9338db965","type":"AnnularWedge"},{"attributes":{},"id":"85c14641-e098-4472-8ab0-53efa07f5f62","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":60},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"991d2e29-a278-4437-ab08-de976882f673","type":"AnnularWedge"},{"attributes":{},"id":"274ed406-1afb-4091-828d-ed9cd74fc01e","type":"UnionRenderers"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba30c381-9852-4c97-a3fd-f4d956f1e8ff","type":"Text"},{"attributes":{"source":{"id":"68168620-bf40-47de-b684-92a2c197c568","type":"ColumnDataSource"}},"id":"8277414a-60d1-49ec-802d-b821c996c001","type":"CDSView"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1eddc57-36c2-4d50-9d27-1422bd5b5e1b","type":"Text"},{"attributes":{"overlay":{"id":"433e9f1e-099d-47c0-be67-d8e08176ea88","type":"BoxAnnotation"}},"id":"648c5f5c-a209-4756-8ce5-95de82998942","type":"BoxZoomTool"},{"attributes":{},"id":"0d093177-eafd-47d3-b80c-c1de61c07018","type":"PanTool"},{"attributes":{"callback":null,"data":{"fill_color":["#c1ff55","#b7feea"],"line_color":["#c1ff55","#b7feea"],"x":[180,180],"y":[380,340]},"selected":{"id":"5961b084-78ca-451c-907d-abcd79a883f2","type":"Selection"},"selection_policy":{"id":"140cf2eb-e376-4b53-a2fa-ae2b8b15127c","type":"UnionRenderers"}},"id":"68168620-bf40-47de-b684-92a2c197c568","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"field":"inner_radius","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa98d273-5826-472e-a47e-20cf1936f388","type":"AnnularWedge"},{"attributes":{"source":{"id":"623826f7-1fc7-4f22-a20e-4b421be72449","type":"ColumnDataSource"}},"id":"2b3cadfc-e02d-435d-96b0-e7c473ee9e80","type":"CDSView"},{"attributes":{"data_source":{"id":"623826f7-1fc7-4f22-a20e-4b421be72449","type":"ColumnDataSource"},"glyph":{"id":"7aa90e2f-9821-42cd-9703-98e9338db965","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aa98d273-5826-472e-a47e-20cf1936f388","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"2b3cadfc-e02d-435d-96b0-e7c473ee9e80","type":"CDSView"}},"id":"e77b0932-921d-46bc-8e62-b2ea5df9d025","type":"GlyphRenderer"},{"attributes":{},"id":"b8bd85d5-0429-418a-bf2d-d868cdcc52a3","type":"LinearScale"},{"attributes":{},"id":"51ac1655-d919-443e-9162-59db16977bd8","type":"UnionRenderers"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"066ee293-cf7e-4ec8-b5cd-74a04665f24a","type":"Range1d"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"start_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"x":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]},"y":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]}},"selected":{"id":"ce55691e-07d6-481c-af73-045de6e3dc8b","type":"Selection"},"selection_policy":{"id":"b38cfb41-d492-4ab4-b2bd-a09e2fd2efa2","type":"UnionRenderers"}},"id":"c19a41c2-fb00-4e32-a04c-6cf8e6d42a74","type":"ColumnDataSource"},{"attributes":{},"id":"813ec402-d2e5-4028-b557-69b727a21122","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"c19a41c2-fb00-4e32-a04c-6cf8e6d42a74","type":"ColumnDataSource"},"glyph":{"id":"2a4a49a5-db03-4bd7-80ee-1677efbad148","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc2e374b-97d5-4e89-9760-f7d9e76048f3","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"7a84d75c-1c37-49b2-abca-19dbbfdcaaac","type":"CDSView"}},"id":"e4535611-196c-4da3-9432-12e6f178c2ed","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"GC1EVPsh+b8=","dtype":"float64","shape":[1]},"outer_radius":[114],"start_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"x":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]},"y":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]}},"selected":{"id":"32d7eac3-9155-42a5-b5af-1a114b515fbf","type":"Selection"},"selection_policy":{"id":"274ed406-1afb-4091-828d-ed9cd74fc01e","type":"UnionRenderers"}},"id":"1128b14d-c36d-4918-9599-0e6dcba1e930","type":"ColumnDataSource"},{"attributes":{},"id":"b38cfb41-d492-4ab4-b2bd-a09e2fd2efa2","type":"UnionRenderers"},{"attributes":{},"id":"fc51930d-c022-4492-88b5-5bfa8d1aec1a","type":"SaveTool"},{"attributes":{"callback":null,"data":{"text":["Actualfear","Predictedfear"],"x":[200,200],"y":[365,325]},"selected":{"id":"28bda94d-78d3-49c6-a1a4-e004a29832b2","type":"Selection"},"selection_policy":{"id":"51ac1655-d919-443e-9162-59db16977bd8","type":"UnionRenderers"}},"id":"0efbc34b-f396-4117-a601-3093b6fadcc6","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"GC1EVPsh+b8=","dtype":"float64","shape":[1]},"inner_radius":[114],"outer_radius":[276],"start_angle":{"__ndarray__":"XjhVKXpqH8A=","dtype":"float64","shape":[1]},"x":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]},"y":{"__ndarray__":"AAAAAAAAAAA=","dtype":"float64","shape":[1]}},"selected":{"id":"85c14641-e098-4472-8ab0-53efa07f5f62","type":"Selection"},"selection_policy":{"id":"813ec402-d2e5-4028-b557-69b727a21122","type":"UnionRenderers"}},"id":"623826f7-1fc7-4f22-a20e-4b421be72449","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1128b14d-c36d-4918-9599-0e6dcba1e930","type":"ColumnDataSource"},"glyph":{"id":"bcf38f9e-3f8e-4e5d-b59d-eb6bea9371ff","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"991d2e29-a278-4437-ab08-de976882f673","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"dcd8055b-47b2-4a65-a634-4fd85259e214","type":"CDSView"}},"id":"ef7e1220-e193-49a3-988f-2a34a0d5db67","type":"GlyphRenderer"},{"attributes":{},"id":"32d7eac3-9155-42a5-b5af-1a114b515fbf","type":"Selection"},{"attributes":{"data_source":{"id":"0efbc34b-f396-4117-a601-3093b6fadcc6","type":"ColumnDataSource"},"glyph":{"id":"b1eddc57-36c2-4d50-9d27-1422bd5b5e1b","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ba30c381-9852-4c97-a3fd-f4d956f1e8ff","type":"Text"},"selection_glyph":null,"view":{"id":"ed682f0d-3ac3-4279-b64e-6615a33b5ae4","type":"CDSView"}},"id":"9a17d396-084d-4435-bd7f-5da3c07429ea","type":"GlyphRenderer"},{"attributes":{},"id":"bc97fbe2-ba78-45cd-a583-5b5b91d838c6","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0d093177-eafd-47d3-b80c-c1de61c07018","type":"PanTool"},{"id":"d2abe7e6-679d-4454-8fee-db3a954ac5e8","type":"WheelZoomTool"},{"id":"648c5f5c-a209-4756-8ce5-95de82998942","type":"BoxZoomTool"},{"id":"fc51930d-c022-4492-88b5-5bfa8d1aec1a","type":"SaveTool"},{"id":"0a996465-4435-44ff-919e-80ed7aba85c8","type":"ResetTool"},{"id":"bc97fbe2-ba78-45cd-a583-5b5b91d838c6","type":"HelpTool"}]},"id":"188b8b30-46ee-46e4-85e6-9c4f430ecc84","type":"Toolbar"},{"attributes":{},"id":"0a996465-4435-44ff-919e-80ed7aba85c8","type":"ResetTool"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":20},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"1804a89e-902f-4ecc-aae1-504fcce5f6c3","type":"Rect"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c2c2d6"},"inner_radius":{"units":"data","value":60},"line_color":{"value":"#c2c2d6"},"outer_radius":{"units":"data","value":420},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a4a49a5-db03-4bd7-80ee-1677efbad148","type":"AnnularWedge"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"f0d143d7-b2de-425e-b527-d52baae86359","type":"Range1d"},{"attributes":{},"id":"ce55691e-07d6-481c-af73-045de6e3dc8b","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c1ff55"},"inner_radius":{"units":"data","value":60},"line_color":{"value":"#c1ff55"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bcf38f9e-3f8e-4e5d-b59d-eb6bea9371ff","type":"AnnularWedge"},{"attributes":{},"id":"28bda94d-78d3-49c6-a1a4-e004a29832b2","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":60},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":420},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc2e374b-97d5-4e89-9760-f7d9e76048f3","type":"AnnularWedge"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"433e9f1e-099d-47c0-be67-d8e08176ea88","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9887f47-5cac-4dd5-9854-1105a564fa4e","type":"Rect"},{"attributes":{"data_source":{"id":"68168620-bf40-47de-b684-92a2c197c568","type":"ColumnDataSource"},"glyph":{"id":"1804a89e-902f-4ecc-aae1-504fcce5f6c3","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a9887f47-5cac-4dd5-9854-1105a564fa4e","type":"Rect"},"selection_glyph":null,"view":{"id":"8277414a-60d1-49ec-802d-b821c996c001","type":"CDSView"}},"id":"bdea0cd1-3b94-401f-a66f-3626b4057a5c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Imagined vs real fear"},"id":"eab32585-7599-4040-915d-1ebf5ee80f2b","type":"Title"},{"attributes":{"source":{"id":"1128b14d-c36d-4918-9599-0e6dcba1e930","type":"ColumnDataSource"}},"id":"dcd8055b-47b2-4a65-a634-4fd85259e214","type":"CDSView"},{"attributes":{},"id":"d2abe7e6-679d-4454-8fee-db3a954ac5e8","type":"WheelZoomTool"},{"attributes":{"source":{"id":"c19a41c2-fb00-4e32-a04c-6cf8e6d42a74","type":"ColumnDataSource"}},"id":"7a84d75c-1c37-49b2-abca-19dbbfdcaaac","type":"CDSView"},{"attributes":{},"id":"140cf2eb-e376-4b53-a2fa-ae2b8b15127c","type":"UnionRenderers"}],"root_ids":["97590b28-4653-493f-bc77-f5ef8c55bcac"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"479b1c79-c894-43ae-bc5a-e7a6048bbfd9","elementid":"195182aa-f3dd-4eb5-a6b9-200c8f71c2d8","modelid":"97590b28-4653-493f-bc77-f5ef8c55bcac"}];
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