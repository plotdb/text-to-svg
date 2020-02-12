// Generated by LiveScript 1.3.1
(function(){
  var opentypeLayout, tts;
  opentypeLayout = require("opentype-layout");
  tts = function(text, opt){
    var promise;
    opt = import$({
      fontSize: 16,
      lineHeight: 1.5,
      width: 500
    }, opt);
    promise = (tts.font || (tts.font = {}))[opt.font]
      ? Promise.resolve((tts.font || (tts.font = {}))[opt.font])
      : new Promise(function(res, rej){
        return opentype.load("/assets/font/" + opt.font + ".ttf", function(e, font){
          return res(tts.font[opt.font] = font);
        });
      });
    return promise.then(function(font){
      var scale, layout, paths, i$, to$, i, g, d, p, pos, that;
      scale = opt.fontSize / font.unitsPerEm;
      layout = opentypeLayout(font, text, {
        lineHeight: opt.lineHeight * font.unitsPerEm,
        width: opt.width / scale
      });
      paths = [];
      for (i$ = 0, to$ = layout.glyphs.length; i$ < to$; ++i$) {
        i = i$;
        g = layout.glyphs[i];
        d = g.data.path.toPathData();
        p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        p.setAttribute('d', d);
        pos = g.position;
        p.setAttribute('transform', "scale(" + scale + ",-" + scale + ") translate(" + pos[0] + "," + pos[1] + ")");
        paths.push(p);
        if (that = opt.container) {
          that.appendChild(p);
        }
      }
      return paths;
    });
  };
  return window.tts = tts;
})();
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}