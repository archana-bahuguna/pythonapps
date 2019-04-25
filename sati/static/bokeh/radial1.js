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
      };var element = document.getElementById("16fc4c4c-b602-4c59-957c-3c34f8a826a4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '16fc4c4c-b602-4c59-957c-3c34f8a826a4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"093e69dc-88ac-46b9-b990-33deec031c8a":{"roots":{"references":[{"attributes":{},"id":"16b0d8e0-a53e-43c3-8812-2ab1bad3eb49","type":"Selection"},{"attributes":{"text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"57d90783-e498-48a1-b579-e0d56356ae5b","type":"Text"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"73fbe773-6602-49ef-9dc7-bcfd402c8a3e","type":"PanTool"},{"id":"17197965-cea2-4dfd-b783-4bdbe0475702","type":"WheelZoomTool"},{"id":"7d42841d-77f2-4c77-8903-82c3e93961ba","type":"BoxZoomTool"},{"id":"9e5e1fea-b8dd-43ce-b15d-d9fc2bdb5177","type":"SaveTool"},{"id":"450ca789-c98c-42b8-a7df-97a57bb27866","type":"ResetTool"},{"id":"a48b96cf-0b73-4076-a488-ebab546305fa","type":"HelpTool"}]},"id":"941c8d2e-0016-454b-9e9d-bad1b756f244","type":"Toolbar"},{"attributes":{"source":{"id":"214657b3-ae36-4024-a35b-68af448c0307","type":"ColumnDataSource"}},"id":"e32529ad-4cff-4750-89cb-42f1a679cc98","type":"CDSView"},{"attributes":{},"id":"024efe8f-65a3-429e-912b-d999e58c06e0","type":"UnionRenderers"},{"attributes":{"text_color":{"value":"black"},"text_font_size":{"value":"10pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb31734c-e6e9-4d5c-8deb-2f1b6349724b","type":"Text"},{"attributes":{},"id":"80f0e14d-f169-4b3e-a9f3-87ca2cc9321c","type":"Selection"},{"attributes":{},"id":"dff183b1-92e6-4a66-93fb-65c22bd00f8a","type":"Selection"},{"attributes":{"source":{"id":"e608ebe4-bb05-402f-a001-f1cd9b7ea225","type":"ColumnDataSource"}},"id":"bade2706-1ac2-496c-bccb-c3c16146d873","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["Actualfear","Predictedfear"],"x":[200,200],"y":[365,325]},"selected":{"id":"16b0d8e0-a53e-43c3-8812-2ab1bad3eb49","type":"Selection"},"selection_policy":{"id":"9bd986a5-b3b0-46bc-8806-72c21e1d5b8c","type":"UnionRenderers"}},"id":"cabcf09f-765e-4847-ad37-9ec7f9ceda06","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":60},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d60c967e-f704-48ce-a4c9-c278131d9608","type":"AnnularWedge"},{"attributes":{"source":{"id":"a2e8ff3f-afdf-44a8-9d39-671e12660f8a","type":"ColumnDataSource"}},"id":"04a51ae3-5b24-49f9-af94-9aafa0627367","type":"CDSView"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":20},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7401616-8061-45a9-9c57-765b2b1cc771","type":"Rect"},{"attributes":{},"id":"73fbe773-6602-49ef-9dc7-bcfd402c8a3e","type":"PanTool"},{"attributes":{"source":{"id":"cabcf09f-765e-4847-ad37-9ec7f9ceda06","type":"ColumnDataSource"}},"id":"39352ed9-224d-482e-b545-af0a8a40f972","type":"CDSView"},{"attributes":{"data_source":{"id":"a2e8ff3f-afdf-44a8-9d39-671e12660f8a","type":"ColumnDataSource"},"glyph":{"id":"ef95918e-622d-4d2e-b08d-ec38b261b34c","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dc858d84-9ae1-4260-8a89-1f794f9cf85e","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"04a51ae3-5b24-49f9-af94-9aafa0627367","type":"CDSView"}},"id":"dbf28e95-346f-449b-b03a-06d4ff1df529","type":"GlyphRenderer"},{"attributes":{},"id":"4de29182-60b7-4d8f-83cd-678a74fcfbb9","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bba28b2-1b2c-41f5-9bb4-afaf0a381504","type":"Rect"},{"attributes":{},"id":"9bd986a5-b3b0-46bc-8806-72c21e1d5b8c","type":"UnionRenderers"},{"attributes":{},"id":"a48b96cf-0b73-4076-a488-ebab546305fa","type":"HelpTool"},{"attributes":{},"id":"0644fb1e-cac8-4c8e-a87a-e8bddb87991b","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"a29a02ae-b848-4c4d-b329-8954eef1cad5","type":"ColumnDataSource"},"glyph":{"id":"f7401616-8061-45a9-9c57-765b2b1cc771","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6bba28b2-1b2c-41f5-9bb4-afaf0a381504","type":"Rect"},"selection_glyph":null,"view":{"id":"9f51a2cb-5324-4bfb-b00c-5ade17c9a745","type":"CDSView"}},"id":"9a58c7c2-d166-447f-ae6f-cee7f60030ca","type":"GlyphRenderer"},{"attributes":{},"id":"17197965-cea2-4dfd-b783-4bdbe0475702","type":"WheelZoomTool"},{"attributes":{},"id":"450ca789-c98c-42b8-a7df-97a57bb27866","type":"ResetTool"},{"attributes":{},"id":"5d2f11fa-2b9a-4121-a8c4-1fe1b9db928b","type":"UnionRenderers"},{"attributes":{},"id":"700c23df-c5bf-49bb-937d-8c3f3d8771a1","type":"Selection"},{"attributes":{},"id":"a06168f7-c348-4dd1-9b83-6dfcfa352d84","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"dae76bv99T9eOFUpemrvP9IhM3982eI/GC1EVPshyT8YLURU+yHJv9IhM3982eK/XjhVKXpq7791p7vpu/31v7uyzL46Rvy/AN/uyVxHAcCkZHc0nGsEwEbq/57bjwfA6m+ICRu0CsCO9RB0WtgNwJi9TO9MfhDAaQCRpGwQEsA=","dtype":"float64","shape":[16]},"outer_radius":[150,132,114,96,186,204,150,132,114,168,186,150,150,132,114,168],"start_angle":{"__ndarray__":"XjhVKXpq7z/SITN/fNniPxgtRFT7Ick/GC1EVPshyb/SITN/fNniv144VSl6au+/dae76bv99b+7ssy+Okb8vwDf7slcRwHAo2R3NJxrBMBH6v+e248HwOlviAkbtArAjfUQdFrYDcCYvUzvTH4QwGoAkaRsEBLAOkPVWYyiE8A=","dtype":"float64","shape":[16]},"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[16]}},"selected":{"id":"7d8d837c-5a9d-4a37-8695-482e0562bc7f","type":"Selection"},"selection_policy":{"id":"a06168f7-c348-4dd1-9b83-6dfcfa352d84","type":"UnionRenderers"}},"id":"214657b3-ae36-4024-a35b-68af448c0307","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#b7feea"},"inner_radius":{"field":"inner_radius","units":"data"},"line_color":{"value":"#b7feea"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fbed416-a710-462a-a19a-e1204c91e871","type":"AnnularWedge"},{"attributes":{"callback":null,"data":{"fill_color":["#c1ff55","#b7feea"],"line_color":["#c1ff55","#b7feea"],"x":[180,180],"y":[380,340]},"selected":{"id":"700c23df-c5bf-49bb-937d-8c3f3d8771a1","type":"Selection"},"selection_policy":{"id":"024efe8f-65a3-429e-912b-d999e58c06e0","type":"UnionRenderers"}},"id":"a29a02ae-b848-4c4d-b329-8954eef1cad5","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"dae76bv99T9eOFUpemrvP9IhM3982eI/GC1EVPshyT8YLURU+yHJv9IhM3982eK/XjhVKXpq7791p7vpu/31v7uyzL46Rvy/AN/uyVxHAcCkZHc0nGsEwEbq/57bjwfA6m+ICRu0CsCO9RB0WtgNwJi9TO9MfhDAaQCRpGwQEsA=","dtype":"float64","shape":[16]},"inner_radius":[150,132,114,96,186,204,150,132,114,168,186,150,150,132,114,168],"outer_radius":[294,276,240,240,330,348,276,276,258,312,312,294,276,276,258,312],"start_angle":{"__ndarray__":"XjhVKXpq7z/SITN/fNniPxgtRFT7Ick/GC1EVPshyb/SITN/fNniv144VSl6au+/dae76bv99b+7ssy+Okb8vwDf7slcRwHAo2R3NJxrBMBH6v+e248HwOlviAkbtArAjfUQdFrYDcCYvUzvTH4QwGoAkaRsEBLAOkPVWYyiE8A=","dtype":"float64","shape":[16]},"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[16]}},"selected":{"id":"80f0e14d-f169-4b3e-a9f3-87ca2cc9321c","type":"Selection"},"selection_policy":{"id":"0644fb1e-cac8-4c8e-a87a-e8bddb87991b","type":"UnionRenderers"}},"id":"e608ebe4-bb05-402f-a001-f1cd9b7ea225","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":60},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":420},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc858d84-9ae1-4260-8a89-1f794f9cf85e","type":"AnnularWedge"},{"attributes":{},"id":"e891ebb5-35a4-40a9-9ab8-016acca8ee35","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4fa996fc-4ada-407d-8265-1ee3dd1942ff","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"f25e77d3-7e33-440c-8007-f7af1a1162ce","type":"Range1d"},{"attributes":{},"id":"9e5e1fea-b8dd-43ce-b15d-d9fc2bdb5177","type":"SaveTool"},{"attributes":{"plot":null,"text":"Imagined vs real fear"},"id":"448d5c1b-cb0a-4261-a030-24ed87e8cb3d","type":"Title"},{"attributes":{},"id":"7d8d837c-5a9d-4a37-8695-482e0562bc7f","type":"Selection"},{"attributes":{"data_source":{"id":"cabcf09f-765e-4847-ad37-9ec7f9ceda06","type":"ColumnDataSource"},"glyph":{"id":"cb31734c-e6e9-4d5c-8deb-2f1b6349724b","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57d90783-e498-48a1-b579-e0d56356ae5b","type":"Text"},"selection_glyph":null,"view":{"id":"39352ed9-224d-482e-b545-af0a8a40f972","type":"CDSView"}},"id":"839171d5-f583-4b91-995e-0e1e6b5e0f3c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"214657b3-ae36-4024-a35b-68af448c0307","type":"ColumnDataSource"},"glyph":{"id":"36402d5f-d00d-40bc-86c4-6c9f724fd2e6","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d60c967e-f704-48ce-a4c9-c278131d9608","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"e32529ad-4cff-4750-89cb-42f1a679cc98","type":"CDSView"}},"id":"c4382784-6f4a-42f1-bc87-c7541e7a6916","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#f8f8f8"},"border_fill_color":{"value":"#f8f8f8"},"min_border":0,"outline_line_color":{"value":null},"plot_height":420,"plot_width":500,"renderers":[{"id":"4fa996fc-4ada-407d-8265-1ee3dd1942ff","type":"BoxAnnotation"},{"id":"c4382784-6f4a-42f1-bc87-c7541e7a6916","type":"GlyphRenderer"},{"id":"a894a13f-c9d9-4ff5-8cdf-16a091ff8f26","type":"GlyphRenderer"},{"id":"dbf28e95-346f-449b-b03a-06d4ff1df529","type":"GlyphRenderer"},{"id":"9a58c7c2-d166-447f-ae6f-cee7f60030ca","type":"GlyphRenderer"},{"id":"839171d5-f583-4b91-995e-0e1e6b5e0f3c","type":"GlyphRenderer"}],"title":{"id":"448d5c1b-cb0a-4261-a030-24ed87e8cb3d","type":"Title"},"toolbar":{"id":"941c8d2e-0016-454b-9e9d-bad1b756f244","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d4d0d16d-6540-4e2f-bf20-935c20328868","type":"Range1d"},"x_scale":{"id":"4de29182-60b7-4d8f-83cd-678a74fcfbb9","type":"LinearScale"},"y_range":{"id":"f25e77d3-7e33-440c-8007-f7af1a1162ce","type":"Range1d"},"y_scale":{"id":"e891ebb5-35a4-40a9-9ab8-016acca8ee35","type":"LinearScale"}},"id":"c3e341ba-8cf2-40db-9e2e-c7a7a4a4529f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"d4d0d16d-6540-4e2f-bf20-935c20328868","type":"Range1d"},{"attributes":{"data_source":{"id":"e608ebe4-bb05-402f-a001-f1cd9b7ea225","type":"ColumnDataSource"},"glyph":{"id":"7fbed416-a710-462a-a19a-e1204c91e871","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1b6292b8-7edd-4ca3-b5bd-c1a2cff58d8e","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"bade2706-1ac2-496c-bccb-c3c16146d873","type":"CDSView"}},"id":"a894a13f-c9d9-4ff5-8cdf-16a091ff8f26","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"XjhVKXpq7z/SITN/fNniPxgtRFT7Ick/GC1EVPshyb/SITN/fNniv144VSl6au+/dae76bv99b+7ssy+Okb8vwDf7slcRwHAo2R3NJxrBMBH6v+e248HwOlviAkbtArAjfUQdFrYDcCYvUzvTH4QwGoAkaRsEBLAOkPVWYyiE8A=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"XjhVKXpq7z/SITN/fNniPxgtRFT7Ick/GC1EVPshyb/SITN/fNniv144VSl6au+/dae76bv99b+7ssy+Okb8vwDf7slcRwHAo2R3NJxrBMBH6v+e248HwOlviAkbtArAjfUQdFrYDcCYvUzvTH4QwGoAkaRsEBLAOkPVWYyiE8A=","dtype":"float64","shape":[16]},"x":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[16]}},"selected":{"id":"dff183b1-92e6-4a66-93fb-65c22bd00f8a","type":"Selection"},"selection_policy":{"id":"5d2f11fa-2b9a-4121-a8c4-1fe1b9db928b","type":"UnionRenderers"}},"id":"a2e8ff3f-afdf-44a8-9d39-671e12660f8a","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"field":"inner_radius","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b6292b8-7edd-4ca3-b5bd-c1a2cff58d8e","type":"AnnularWedge"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c2c2d6"},"inner_radius":{"units":"data","value":60},"line_color":{"value":"#c2c2d6"},"outer_radius":{"units":"data","value":420},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef95918e-622d-4d2e-b08d-ec38b261b34c","type":"AnnularWedge"},{"attributes":{"source":{"id":"a29a02ae-b848-4c4d-b329-8954eef1cad5","type":"ColumnDataSource"}},"id":"9f51a2cb-5324-4bfb-b00c-5ade17c9a745","type":"CDSView"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c1ff55"},"inner_radius":{"units":"data","value":60},"line_color":{"value":"#c1ff55"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"field":"x"},"y":{"field":"y"}},"id":"36402d5f-d00d-40bc-86c4-6c9f724fd2e6","type":"AnnularWedge"},{"attributes":{"overlay":{"id":"4fa996fc-4ada-407d-8265-1ee3dd1942ff","type":"BoxAnnotation"}},"id":"7d42841d-77f2-4c77-8903-82c3e93961ba","type":"BoxZoomTool"}],"root_ids":["c3e341ba-8cf2-40db-9e2e-c7a7a4a4529f"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"093e69dc-88ac-46b9-b990-33deec031c8a","elementid":"16fc4c4c-b602-4c59-957c-3c34f8a826a4","modelid":"c3e341ba-8cf2-40db-9e2e-c7a7a4a4529f"}];
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