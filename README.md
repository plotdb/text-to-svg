# text-to-svg

convert text to svg path. WIP.


## Current Progress

there are already libraries doing this, such as

 * text-to-svg - convert text to svg path data
 * opentype-layout - calculate the position of each glyph in a multiple line manner.

We simply browserify them to tts.bundle.min.js and ol.bundle.min.js and it works.

For now to render text to svg we actually don't need text-to-svg, instead we only need opentype.js to parse font files / get path data, and opentype-layout for getting glyph position and calculating word-break ( which is provided by mattldesl/word-wrapper ). 

Yet, we might want to derive a direct lib from multi-line text to svg that are handy in online text-editing environment.

## TODO

 * API - whether using 3rd party library or not, we can have a common interface for rendering.
   - tts(text, option) - return svg path nodes corresponding to each glyph in the text, as an array. options:
     container: append path to this container if provided. ( is this necessary? TBD )
     font: font name. ( We also need the font url. can be derived from choosefont. TBD )
     fontSize: font size. default 16 ( in px )
     lineHeight: line height. default 1.5 ( in em )
     width: used by opentype-layout. use to wrap the texts.

 * Merge / Minimize code - combine text-to-svg and opentype-layout to provide our own version of text-to-svg.
   - seems opentype-layout already does a good job, and we don't need text-to-svg. (TBD)

 * fallback fonts
   - cjk characters won't be rendered correctly if chosen font doesn't support them. should we add fallback mechanism and load default fonts if need? (TBD)

## LICENSE

MIT
