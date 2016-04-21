/**
 * @name        jQuery FullScreen Plugin
 * @author      Martin Angelov, Morten SjÃ¸gren
 * @version     1.2
 * @url         http://tutorialzine.com/2012/02/enhance-your-website-fullscreen-api/
 * @license     MIT License
 */

/*jshint browser: true, jquery: true */
(function($){
    "use strict";

    // These helper functions available only to our plugin scope.
    function supportFullScreen(){
        var doc = document.documentElement;

        return ('requestFullscreen' in doc) ||
                ('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
                ('webkitRequestFullScreen' in doc);
    }

    function requestFullScreen(elem){
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }

    function fullScreenStatus(){
        return document.fullscreen ||
                document.mozFullScreen ||
                document.webkitIsFullScreen ||
                false;
    }

    function cancelFullScreen(){
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }

    function onFullScreenEvent(callback){
        $(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function(){
            // The full screen status is automatically
            // passed to our callback as an argument.
            callback(fullScreenStatus());
        });
    }

    // Adding a new test to the jQuery support object
    $.support.fullscreen = supportFullScreen();

    // Creating the plugin
    $.fn.fullScreen = function(props){
        if(!$.support.fullscreen || this.length !== 1) {
            // The plugin can be called only
            // on one element at a time

            return this;
        }

        if(fullScreenStatus()){
            // if we are already in fullscreen, exit
            cancelFullScreen();
            return this;
        }

        // You can potentially pas two arguments a color
        // for the background and a callback function

        var options = $.extend({
            'background'      : '#111',
            'callback'        : $.noop( ),
            'fullscreenClass' : 'fullScreen'
        }, props),

        elem = this,

        // This temporary div is the element that is
        // actually going to be enlarged in full screen

        fs = $('<div>', {
            'css' : {
                'overflow-y' : 'auto',
                'background' : options.background,
                'width'      : '100%',
                'height'     : '100%'
            }
        })
            .insertBefore(elem)
            .append(elem);

        // You can use the .fullScreen class to
        // apply styling to your element
        elem.addClass( options.fullscreenClass );

        // Inserting our element in the temporary
        // div, after which we zoom it in fullscreen

        requestFullScreen(fs.get(0));

        fs.click(function(e){
            if(e.target == this){
                // If the black bar was clicked
                cancelFullScreen();
            }
        });

        elem.cancel = function(){
            cancelFullScreen();
            return elem;
        };

        onFullScreenEvent(function(fullScreen){
            if(!fullScreen){
                // We have exited full screen.
                    // Detach event listener
                    $(document).off( 'fullscreenchange mozfullscreenchange webkitfullscreenchange' );
                // Remove the class and destroy
                // the temporary div

                elem.removeClass( options.fullscreenClass ).insertBefore(fs);
                fs.remove();
            }

            // Calling the facultative user supplied callback
            if(options.callback) {
                            options.callback(fullScreen);
                        }
        });

        return elem;
    };

    $.fn.cancelFullScreen = function( ) {
            cancelFullScreen();

            return this;
    };
}(jQuery));




/*global Element */
(function (window, document) {
    'use strict';

    var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element, // IE6 throws without typeof check

        fn = (function () {
            var val, valLength;
            var fnMap = [
                [
                    'requestFullscreen',
                    'exitFullscreen',
                    'fullscreenElement',
                    'fullscreenEnabled',
                    'fullscreenchange',
                    'fullscreenerror'
                ],
                // new WebKit
                [
                    'webkitRequestFullscreen',
                    'webkitExitFullscreen',
                    'webkitFullscreenElement',
                    'webkitFullscreenEnabled',
                    'webkitfullscreenchange',
                    'webkitfullscreenerror'

                ],
                // old WebKit (Safari 5.1)
                [
                    'webkitRequestFullScreen',
                    'webkitCancelFullScreen',
                    'webkitCurrentFullScreenElement',
                    'webkitCancelFullScreen',
                    'webkitfullscreenchange',
                    'webkitfullscreenerror'

                ],
                [
                    'mozRequestFullScreen',
                    'mozCancelFullScreen',
                    'mozFullScreenElement',
                    'mozFullScreenEnabled',
                    'mozfullscreenchange',
                    'mozfullscreenerror'
                ],
                [
                    'msRequestFullscreen',
                    'msExitFullscreen',
                    'msFullscreenElement',
                    'msFullscreenEnabled',
                    'MSFullscreenchange',
                    'MSFullscreenerror'
                ]
            ];
            var i = 0;
            var l = fnMap.length;
            var ret = {};

            for (; i < l; i++) {
                val = fnMap[i];
                if (val && val[1] in document) {
                    for (i = 0, valLength = val.length; i < valLength; i++) {
                        ret[fnMap[0][i]] = val[i];
                    }
                    return ret;
                }
            }
            return false;
        })(),

        screenfull = {
            request: function (elem) {
                var request = fn.requestFullscreen;

                elem = elem || document.documentElement;

                // Work around Safari 5.1 bug: reports support for
                // keyboard in fullscreen even though it doesn't.
                // Browser sniffing, since the alternative with
                // setTimeout is even worse.
                if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
                    elem[request]();
                } else {
                    elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
                }
            },
            exit: function () {
                document[fn.exitFullscreen]();
            },
            toggle: function (elem) {
                if (this.isFullscreen) {
                    this.exit();
                } else {
                    this.request(elem);
                }
            },
            onchange: function () {},
            onerror: function () {},
            raw: fn
        };

    if (!fn) {
        window.screenfull = false;
        return;
    }

    Object.defineProperties(screenfull, {
        isFullscreen: {
            get: function () {
                return !!document[fn.fullscreenElement];
            }
        },
        element: {
            enumerable: true,
            get: function () {
                return document[fn.fullscreenElement];
            }
        },
        enabled: {
            enumerable: true,
            get: function () {
                // Coerce to boolean in case of old WebKit
                return !!document[fn.fullscreenEnabled];
            }
        }
    });

    document.addEventListener(fn.fullscreenchange, function (e) {
        screenfull.onchange.call(screenfull, e);
    });

    document.addEventListener(fn.fullscreenerror, function (e) {
        screenfull.onerror.call(screenfull, e);
    });

    window.screenfull = screenfull;
})(window, document);

