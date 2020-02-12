# text-to-svg

convert text to svg path. WIP.


## Current Progress

there are already libraries doing this, such as

 * text-to-svg - convert text to svg path data
 * opentype-layout - calculate the position of each glyph in a multiple line manner.

We simply browserify them to tts.bundle.min.js and ol.bundle.min.js and it works.

Yet, we might want to derive a direct lib from multi-line text to svg that are handy in online text-editing environment.

## TODO

 * API - whether using 3rd party library or not, we can have a common interface for rendering.
 * Merge / Minimize code - combine text-to-svg and opentype-layout to provide our own version of text-to-svg.


## LICENSE

MIT
