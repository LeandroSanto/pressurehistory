import React from 'react';
import { View, Text } from 'react-native';

import Chart from "react-native-f2chart";

export default function History(){
    (function(){
        chart =  new F2.Chart({
            id: 'chart',
            pixelRatio: window.devicePixelRatio,
        });
        chart.source(${JSON.stringify(data)}, {
        value: {
        tickCount: 5,
        min: 0
        },
        date: {
        type: 'timeCat',
        range: [0, 1],
        tickCount: 3
        }
        });
        chart.tooltip({
        custom: true,
        showXTip: true,
        showYTip: true,
        snap: true,
        onChange: function(obj) {
            window.postMessage(stringify(obj))
        },
        crosshairsType: 'xy',
        crosshairsStyle: {
        lineDash: [2]
        }
        });
        chart.axis('date', {
        label: function label(text, index, total) {
        var textCfg = {};
        if (index === 0) {
            textCfg.textAlign = 'left';
        } else if (index === total - 1) {
            textCfg.textAlign = 'right';
        }
        return textCfg;
        }
        });
        chart.line().position('date*value');
        chart.render();
    })();
    ;
 
            return (
                <View style={{ height: 350 }}>
                <Chart initScript={initScript(data)} />
                </View>
            )
        }
       
    )
}