var currDoc=app.activeDocument;
var currLayer = currDoc.activeLayer;

// "Linear Interpolation". Wiki that to understand it.
function lerp(a,b,t){
    return (1 - t) * a + t * b;
}

function swirlThing(p_layer) {
    if (p_layer) {
        for (var i = 0; i < 10; i++) {
            var twirlAmt = lerp(90, 180, Math.random());
            p_layer.applyTwirl(twirlAmt);
            p_layer.applyOffset(Math.random() * currDoc.width, Math.random() * currDoc.height, OffsetUndefinedAreas.WRAPAROUND);
        }
    }
}

swirlThing(currLayer);