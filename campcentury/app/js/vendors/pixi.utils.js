
/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 *
 * The ColorMatrixFilter2 class lets you apply a 4x4 matrix transformation on the RGBA
 * color and alpha values of every pixel on your displayObject to produce a result
 * with a new set of RGBA color and alpha values. Its pretty powerful!
 * @class ColorMatrixFilter
 * @contructor
 */
PIXI.ColorMatrixFilter2 = function()
{
  'use strict';
  PIXI.AbstractFilter.call( this );

  this.passes = [this];

  // set the uniforms
  this.uniforms = {
    matrix: {type: 'mat4', value: [1,0,0,0,
                                   0,1,0,0,
                                   0,0,1,0,
                                   0,0,0,1]},
    shift: {type: '4fv', value:  [0.0,0.0,0.0,0.0]},
  };

  this.fragmentSrc = [
    'precision mediump float;',
    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',
    'uniform float invert;',
    'uniform mat4 matrix;',
    'uniform vec4 shift;',
    'uniform sampler2D uSampler;',

    'void main(void) {',
    '   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix + shift;',
    //  '   gl_FragColor = gl_FragColor;',
    '}'
  ];
};

PIXI.ColorMatrixFilter2.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.ColorMatrixFilter2.prototype.constructor = PIXI.ColorMatrixFilter2;

/**
 * Sets the matrix of the color matrix filter
 *
 * @property matrix
 * @type Array and array of 16 numbers
 * @default [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
 */
Object.defineProperty(PIXI.ColorMatrixFilter2.prototype, 'matrix', {
  get: function() {
    return this.uniforms.matrix.value;
  },
  set: function(value) {
    this.uniforms.matrix.value = value;
  }
});

/**
 * Sets the constant channel shift
 *
 * @property shift
 * @type Array and array of 26 numbers
 * @default [0,0,0,0]
 */
Object.defineProperty(PIXI.ColorMatrixFilter2.prototype, 'shift', {
  get: function() {
    return this.uniforms.shift.value;
  },
  set: function(value) {
    this.uniforms.shift.value = value;
  }
});



/**

  Experimental shader giving perspective effect on image with depthmap.

  Quality is controlled by defined profiles 1, 2 and 3.

  ---------------
  The MIT License

  Copyright (c) 2014 Rafał Lindemann. http://panrafal.github.com/depthy

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

 */

PIXI.DepthPerspectiveFilter = function(texture, quality)
{
  PIXI.AbstractFilter.call( this );
 
  this.passes = [this];

  // set the uniforms
  this.uniforms = {
    displacementMap: {type: 'sampler2D', value:texture},
    scale:           {type: '1f', value:0.015},
    offset:          {type: '2f', value:{x:0, y:0}},
    mapDimensions:   {type: '2f', value:{x:1, y:5112}},
    dimensions:      {type: '4fv', value:[0,0,0,0]},
    focus:           {type: '1f', value:0.5},
    enlarge:         {type: '1f', value:1.06}
  };
 
  if(texture.baseTexture.hasLoaded)
  {
    this.uniforms.mapDimensions.value.x = texture.width;
    this.uniforms.mapDimensions.value.y = texture.height;
  }
  else
  {
    this.boundLoadedFunction = this.onTextureLoaded.bind(this);
 
    texture.baseTexture.on('loaded', this.boundLoadedFunction);
  }
 
  this.fragmentSrc = [


'// Copyright (c) 2014 Rafał Lindemann. http://panrafal.github.com/depthy',
'precision mediump float;',
'',
'varying vec2 vTextureCoord;',
'varying vec4 vColor;',
'uniform sampler2D displacementMap;',
'uniform sampler2D uSampler;',
'uniform vec4 dimensions;',
'uniform vec2 mapDimensions;',
'uniform float scale;',
'uniform vec2 offset;',
'uniform float focus;',
'uniform float enlarge;',
'',
'#if !defined(QUALITY)',
'',
'  #define METHOD 1',
'  #define CORRECT',
'//     #define COLORAVG',
'  #define UPSCALE 1.5',
'  #define ANTIALIAS 1',
'  #define AA_TRIGGER 0.8',
'  #define AA_POWER 1.0',
'  #define AA_MAXITER 8.0',
'  #define MAXSTEPS 16.0',
'  #define CONFIDENCE_MAX 2.5',
'',
'#elif QUALITY == 2',
'',
'  #define METHOD 1',
'  #define CORRECT',
'//     #define COLORAVG',
'  #define MAXSTEPS 4.0',
'  #define UPSCALE 0.8',
'//   #define ANTIALIAS 2',
'  #define CONFIDENCE_MAX 2.5',
'',
'#elif QUALITY == 3',
'',
'  #define METHOD 1',
'  #define CORRECT',
'//     #define COLORAVG',
'  #define MAXSTEPS 6.0',
'  #define UPSCALE 1.0',
'  #define ANTIALIAS 2',
'  #define CONFIDENCE_MAX 2.5',
'',
'#elif QUALITY == 4',
'',
'  #define METHOD 1',
'  #define CORRECT',
'//     #define COLORAVG',
'  #define MAXSTEPS 16.0',
'  #define UPSCALE 1.5',
'  #define ANTIALIAS 2',
'  #define CONFIDENCE_MAX 2.5',
'',
'#elif QUALITY == 5',
'',
'  #define METHOD 1',
'  #define CORRECT',
'  #define COLORAVG',
'  #define MAXSTEPS 40.0',
'  #define UPSCALE 1.5',
'//     #define ANTIALIAS 2',
'  #define AA_TRIGGER 0.8',
'  #define AA_POWER 1.0',
'  #define AA_MAXITER 8.0',
'  #define CONFIDENCE_MAX 4.5',
'',
'#endif',
'',
'',
'#define BRANCHLOOP  ',
'#define BRANCHSAMPLE ',
'#define DEBUG 0',
'//#define DEBUGBREAK 4',
'',
'#ifndef METHOD',
'  #define METHOD 1',
'#endif',
'#ifndef MAXSTEPS',
'  #define MAXSTEPS 8.0',
'#endif',
'#ifndef UPSCALE',
'  #define UPSCALE 1.2',
'#endif',
'#ifndef PERSPECTIVE',
'  #define PERSPECTIVE 0.0',
'#endif',
'#ifndef UPSCALE',
'  #define UPSCALE 1.06',
'#endif',
'#ifndef CONFIDENCE_MAX',
'  #define CONFIDENCE_MAX 0.2',
'#endif',
'#ifndef COMPRESSION',
'  #define COMPRESSION 0.8',
'#endif',
'',
'const float perspective = PERSPECTIVE;',
'// float steps = clamp( ceil( max(abs(offset.x), abs(offset.y)) * maxSteps ), 1.0, maxSteps);',
'float steps = MAXSTEPS;',
'',
'#ifdef COLORAVG',
'float maskPower = steps * 2.0;// 32.0;',
'#else ',
'float maskPower = steps * 1.0;// 32.0;',
'#endif',
'float correctPower = 1.0;//max(1.0, steps / 8.0);',
'',
'const float compression = COMPRESSION;',
'const float dmin = (1.0 - compression) / 2.0;',
'const float dmax = (1.0 + compression) / 2.0;',
'',
'const float vectorCutoff = 0.0 + dmin - 0.0001;',
'',
'float aspect = dimensions.x / dimensions.y;',
'vec2 scale2 = vec2(scale * min(1.0, 1.0 / aspect), scale * min(1.0, aspect)) * vec2(1, -1) * vec2(UPSCALE);',
'// mat2 baseVector = mat2(vec2(-focus * offset) * scale2, vec2(offset - focus * offset) * scale2);',
'mat2 baseVector = mat2(vec2((0.5 - focus) * offset - offset/2.0) * scale2, ',
'                       vec2((0.5 - focus) * offset + offset/2.0) * scale2);',
'',
'',
'void main(void) {',
'',
'  vec2 pos = (vTextureCoord - vec2(0.5)) / vec2(enlarge) + vec2(0.5);',
'  mat2 vector = baseVector;',
'  // perspective shift',
'  vector[1] += (vec2(2.0) * pos - vec2(1.0)) * vec2(perspective);',
'  ',
'  float dstep = compression / (steps - 1.0);',
'  vec2 vstep = (vector[1] - vector[0]) / vec2((steps - 1.0)) ;',
'  ',
'  #ifdef COLORAVG',
'    vec4 colSum = vec4(0.0);',
'  #else',
'    vec2 posSum = vec2(0.0);',
'  #endif',
'',
'  float confidenceSum = 0.0;',
'  float minConfidence = dstep / 2.0;',
'    ',
'  #ifdef ANTIALIAS',
'    #ifndef AA_TRIGGER',
'      #define AA_TRIGGER 0.8',
'    #endif',
'    #if ANTIALIAS == 11 || ANTIALIAS == 12',
'      #ifndef AA_POWER',
'        #define AA_POWER 0.5',
'      #endif',
'      #ifndef AA_MAXITER',
'        #define AA_MAXITER 16.0',
'      #endif',
'      float loopStep = 1.0;',
'    #endif',
'    ',
'    #define LOOP_INDEX j',
'    float j = 0.0;',
'  #endif',
'',
'  #ifndef LOOP_INDEX',
'    #define LOOP_INDEX i',
'  #endif',
'',
'',
'  for(float i = 0.0; i < MAXSTEPS; ++i) {',
'    vec2 vpos = pos + vector[1] - LOOP_INDEX * vstep;',
'    float dpos = 0.5 + compression / 2.0 - LOOP_INDEX * dstep;',
'    #ifdef BRANCHLOOP',
'    if (dpos >= vectorCutoff && confidenceSum < CONFIDENCE_MAX) {',
'    #endif',
'      float depth = 1.0 - texture2D(displacementMap, vpos * vec2(1, -1) + vec2(0, 1)).r;',
'      depth = clamp(depth, dmin + 0.001, dmax); // add 0.001 for htc one+meth 1',
'      float confidence;',
'',
'      #if METHOD == 1',
'        confidence = step(dpos, depth);',
'',
'      #elif METHOD == 3',
'        confidence = 1.0 - abs(dpos - depth);',
'        if (confidence < 1.0 - minConfidence * 2.0) confidence = 0.0;',
'',
'      #elif METHOD == 5',
'        confidence = 1.0 - abs(dpos - depth);',
'        confidence = pow(confidence, maskPower);',
'',
'      #endif',
'',
'      #ifndef BRANCHLOOP',
'       confidence *= step(vectorCutoff, dpos);',
'       confidence *= step(confidenceSum, CONFIDENCE_MAX);',
'      #endif',
'',
'      #ifdef ANTIALIAS',
'        #if ANTIALIAS == 1 // go back halfstep, go forward fullstep - branched',
'',
'          if (confidence > AA_TRIGGER && i == j) {',
'            j -= 0.5;',
'          } else {',
'            j += 1.0;',
'          }',
'          // confidence *= CONFIDENCE_MAX / 3.0;',
'',
'        #elif ANTIALIAS == 2 // go back halfstep, go forward fullstep - mult',
'          j += 1.0 + step(AA_TRIGGER, confidence) ',
'               * step(i, j) * -1.5; ',
'          // confidence *= CONFIDENCE_MAX / 3.0;',
'',
'        #elif ANTIALIAS == 11',
'          if (confidence >= AA_TRIGGER && i == j && steps - i > 1.0) {',
'            loopStep = AA_POWER * 2.0 / min(AA_MAXITER, steps - i - 1.0);',
'            j -= AA_POWER + loopStep;',
'          }',
'          confidence *= loopStep;',
'          j += loopStep;',
'        #elif ANTIALIAS == 12',
'          float _if_aa = step(AA_TRIGGER, confidence)',
'                       * step(i, j)',
'                       * step(1.5, steps - i);',
'          loopStep = _if_aa * (AA_POWER * 2.0 / min(AA_MAXITER, max(0.1, steps - i - 1.0)) - 1.0) + 1.0;',
'          confidence *= loopStep;',
'          j += _if_aa * -(AA_POWER + loopStep) + loopStep;',
'        #endif',
'      #endif',
'',
'',
'      #ifdef BRANCHSAMPLE',
'      if (confidence > 0.0) {',
'      #endif',
'',
'        #ifdef CORRECT',
'          #define CORRECTION_MATH +( ( vec2((depth - dpos) / (dstep * correctPower)) * vstep ))',
'        #else',
'          #define CORRECTION_MATH',
'        #endif',
'          ',
'        #ifdef COLORAVG    ',
'          colSum += texture2D(uSampler, vpos CORRECTION_MATH) * confidence;',
'        #else',
'          posSum += (vpos CORRECTION_MATH) * confidence;    ',
'        #endif',
'          confidenceSum += confidence;',
'          ',
'      #ifdef BRANCHSAMPLE',
'      }',
'      #endif',
'',
'        ',
'      #if DEBUG > 2',
'        gl_FragColor = vec4(vector[0] / 2.0 + 1.0, vector[1].xy / 2.0 + 1.0);',
'      #elif DEBUG > 1',
'        gl_FragColor = vec4(confidenceSum, depth, dpos, 0);',
'      #elif DEBUG > 0',
'        gl_FragColor = vec4(confidence, depth, dpos, 0);',
'      #endif',
'      #ifdef DEBUGBREAK ',
'      if (i == float(DEBUGBREAK)) {',
'          dstep = 1.0;',
'      }     ',
'      #endif',
'',
'    #ifdef BRANCHLOOP',
'    }',
'    #endif',
'  };',
'',
'  #if defined(COLORAVG) && DEBUG == 0',
'    gl_FragColor = colSum / vec4(confidenceSum);',
'  #elif !defined(COLORAVG) && DEBUG == 0',
'    gl_FragColor = texture2D(uSampler, posSum / confidenceSum);',
'  #endif',
'',
'}',


  ];

  this.quality = quality;
  if (quality) {
    this.fragmentSrc.unshift('#define QUALITY ' + quality);
  }
};
 
PIXI.DepthPerspectiveFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.DepthPerspectiveFilter.prototype.constructor = PIXI.DepthPerspectiveFilter;
 
PIXI.DepthPerspectiveFilter.prototype.onTextureLoaded = function()
{
  this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width;
  this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height;
 
  this.uniforms.displacementMap.value.baseTexture.off('loaded', this.boundLoadedFunction);
};
 
/**
 * The texture used for the displacemtent map * must be power of 2 texture at the moment
 *
 * @property map
 * @type Texture
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'map', {
  get: function() {
    return this.uniforms.displacementMap.value;
  },
  set: function(value) {
    this.uniforms.displacementMap.value = value;
  }
});
 
/**
 * The multiplier used to scale the displacement result from the map calculation.
 *
 * @property scale
 * @type Point
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'scale', {
  get: function() {
    return this.uniforms.scale.value;
  },
  set: function(value) {
    this.uniforms.scale.value = value;
  }
});
 
/**
 * Focus point in paralax
 *
 * @property focus
 * @type float
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'focus', {
  get: function() {
    return this.uniforms.focus.value;
  },
  set: function(value) {
    this.uniforms.focus.value = Math.min(1,Math.max(0,value));
  }
}); 

/**
 * Image enlargment
 *
 * @property enlarge
 * @type float
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'enlarge', {
  get: function() {
    return this.uniforms.enlarge.value;
  },
  set: function(value) {
    this.uniforms.enlarge.value = value;
  }
});

/**
 * The offset used to move the displacement map.
 *
 * @property offset
 * @type Point
 */
Object.defineProperty(PIXI.DepthPerspectiveFilter.prototype, 'offset', {
  get: function() {
    return this.uniforms.offset.value;
  },
  set: function(value) {
    this.uniforms.offset.value = value;
  }
});

/**
 *
 * The DepthDisplacementFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g propery of the texture is used to offset the y.
 * @class DepthDisplacementFilter
 * @contructor
 * @param texture {Texture} The texture used for the displacemtent map * must be power of 2 texture at the moment
 */

PIXI.DepthDisplacementFilter = function(texture)
{
  PIXI.AbstractFilter.call( this );
 
  this.passes = [this];
  // texture.baseTexture._powerOf2 = true;
 
  // set the uniforms
  this.uniforms = {
    displacementMap: {type: 'sampler2D', value:texture},
    scale:           {type: '1f', value:0.015},
    offset:          {type: '2f', value:{x:0, y:0}},
    mapDimensions:   {type: '2f', value:{x:1, y:5112}},
    dimensions:      {type: '4fv', value:[0,0,0,0]},
    focus:           {type: '1f', value:0.5}
  };
 
  if(texture.baseTexture.hasLoaded)
  {
    this.uniforms.mapDimensions.value.x = texture.width;
    this.uniforms.mapDimensions.value.y = texture.height;
  }
  else
  {
    this.boundLoadedFunction = this.onTextureLoaded.bind(this);
 
    texture.baseTexture.on('loaded', this.boundLoadedFunction);
  }
 
  this.fragmentSrc = [
    'precision mediump float;',
    'varying vec2 vTextureCoord;',
    'varying vec4 vColor;',
    'uniform sampler2D displacementMap;',
    'uniform sampler2D uSampler;',
    'uniform float scale;',
    'uniform vec2 offset;',
    'uniform vec4 dimensions;',
    'uniform vec2 mapDimensions;',
    'uniform float focus;',
 
    'void main(void) {',
    '   float aspect = dimensions.x / dimensions.y;',
    '   vec2 scale2 = vec2(scale * min(1.0, 1.0 / aspect), scale * min(1.0, aspect)) * vec2(1, -1) * vec2(1);',
    '   vec2 mapCords = vTextureCoord;',
    '   mapCords.y *= -1.0;',
    '   mapCords.y += 1.0;',
    '   float map = texture2D(displacementMap, mapCords).r;',
    '   map = map * -1.0 + focus;',
    '   vec2 disCords = vTextureCoord;',
    '   disCords += offset * map * scale2;',
    '   gl_FragColor = texture2D(uSampler, disCords) * vColor;',
    // '   gl_FragColor = vec4(1,1,1,0.5);',
    // '   gl_FragColor *= texture2D(displacementMap, mapCords);',
    '}'
  ];
};
 
PIXI.DepthDisplacementFilter.prototype = Object.create( PIXI.AbstractFilter.prototype );
PIXI.DepthDisplacementFilter.prototype.constructor = PIXI.DepthDisplacementFilter;
 
PIXI.DepthDisplacementFilter.prototype.onTextureLoaded = function()
{
  this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width;
  this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height;
 
  this.uniforms.displacementMap.value.baseTexture.off('loaded', this.boundLoadedFunction);
};
 
/**
 * The texture used for the displacemtent map * must be power of 2 texture at the moment
 *
 * @property map
 * @type Texture
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'map', {
  get: function() {
    return this.uniforms.displacementMap.value;
  },
  set: function(value) {
    this.uniforms.displacementMap.value = value;
  }
});
 
/**
 * The multiplier used to scale the displacement result from the map calculation.
 *
 * @property scale
 * @type Point
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'scale', {
  get: function() {
    return this.uniforms.scale.value;
  },
  set: function(value) {
    this.uniforms.scale.value = value;
  }
});
 
/**
 * Focus point in paralax
 *
 * @property focus
 * @type float
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'focus', {
  get: function() {
    return this.uniforms.focus.value;
  },
  set: function(value) {
    this.uniforms.focus.value = Math.min(1,Math.max(0,value));
  }
});

/**
 * The offset used to move the displacement map.
 *
 * @property offset
 * @type Point
 */
Object.defineProperty(PIXI.DepthDisplacementFilter.prototype, 'offset', {
  get: function() {
    return this.uniforms.offset.value;
  },
  set: function(value) {
    this.uniforms.offset.value = value;
  }
});


PIXI.glReadPixels = function(gl, frameBuffer, x, y, width, height, pixels) {
  if (!pixels) pixels = new Uint8Array(4 * width * height);

  if (frameBuffer instanceof PIXI.RenderTexture) {
    frameBuffer = frameBuffer.textureBuffer.frameBuffer;
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);        
  gl.viewport(0, 0, width, height);
  gl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);    

  return pixels;
};

PIXI.glReadPixelsToCanvas = function(gl, frameBuffer, x, y, width, height) {
  var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      imgdata = ctx.createImageData(width, height);

  canvas.width = width;
  canvas.height = height;

  PIXI.glReadPixels(gl, frameBuffer, x, y, width, height, new Uint8Array(imgdata.data.buffer));

  ctx.putImageData(imgdata, 0, 0);

  return canvas;
};

