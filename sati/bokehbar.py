###########################################################################
#
#   File Name      Date          Owner            Description
#   ----------    -------      ----------       ----------------
#   bokehbar.py   4/4/2015   Archana Bahuguna  Creates bar chart using bokeh lib
#
###########################################################################


from collections import OrderedDict
from bokeh.embed import autoload_static
from bokeh.resources import CDN
from random import randint
from bokeh.io import output_file, show
from bokeh.plotting import figure
from math import pi

filepath='static/bokeh/bar'

def plotbar(events, userid):


    xvalues = [x1.title for x1 in events]
    y1values=[y1.prefearfactor for y1 in events]
    y2values=[y2.postfearfactor for y2 in events]
    yr=OrderedDict(PredictedFear=y1values, ActualFear=y2values)

    plotheight=400
    plotwidth=600
    p2 = figure(x_range=xvalues, plot_width=plotwidth, plot_height=plotheight, title="Imagined vs real")
    #p2.xaxis.major_label_orientation = "vertical"
    p2.xaxis.major_label_orientation = pi/4

    p2.vbar(x=xvalues, top=y1values, width=0.5, fill_color="red")
    
    p2.vbar(x=xvalues, top=y2values, width=0.5, fill_color="blue")
      

    userfilepath=filepath+str(userid)+'.js'
    
    js, tag = autoload_static(p2, CDN, '/'+userfilepath+'?id='+str(randint(1, 1000000)))

    with open(userfilepath, 'w') as f:
        f.write(js)

    return js,tag
