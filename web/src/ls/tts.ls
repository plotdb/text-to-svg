(->
  opentype-layout = require("opentype-layout")
  tts = (text, opt) ->
    opt = { fontSize: 16, lineHeight: 1.5, width: 500 } <<< opt
    promise = if tts.{}font[opt.font] =>
      Promise.resolve(tts.{}font[opt.font])
    else new Promise (res, rej) ->
      opentype.load "/assets/font/#{opt.font}.ttf", (e, font) -> res(tts.font[opt.font] = font)
    promise.then (font) ->
      scale = opt.fontSize / font.unitsPerEm
      layout = opentype-layout font, text, {
        lineHeight: opt.lineHeight * font.unitsPerEm
        width: opt.width / scale
      }
      paths = []
      for i from 0 til layout.glyphs.length =>
        g = layout.glyphs[i]
        d = g.data.path.toPathData!
        p = document.createElementNS("http://www.w3.org/2000/svg", "path")
        p.setAttribute \d, d
        pos = g.position
        p.setAttribute \transform, "scale(#{scale},-#{scale}) translate(#{pos.0},#{pos.1})"
        paths.push p
        if opt.container => that.appendChild p
      return paths
  window.tts = tts
)!
