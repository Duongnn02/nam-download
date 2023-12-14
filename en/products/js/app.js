let _window = $(window);
let _document = $(document);

$(document).ready(function() {

    function pageReady() {
        legacySupport();
        imgToSvg();
        formSend();
        initSliders();
        initPopups();
        initMasks();
        initLazyPicture();
        burgerMenu();
        scrollTop();
        sectionNavigation();
    }

    pageReady();

    window.addEventListener('resize', () => {})

});

function activeHeaderScroll() {

    let header = $('.header');
    _window.on('scroll load', function() {
        if (_window.scrollTop() >= 10) {
            header.addClass('header_scroll');
        } else {
            header.removeClass('header_scroll');
        }
    });

}

function burgerMenu() {

    let burger = $('.burger');
    let menu = $('.burger-slide-content');

    $(document).mouseup(function(e) {

        if (burger.is(e.target) || burger.has(e.target).length === 1) {
            if (menu.hasClass('active')) {
                menu.removeClass('active');
                burger.removeClass('active');
            } else {
                menu.addClass('active');
                burger.addClass('active');
            }
        } else if (!menu.is(e.target) && menu.has(e.target).length === 0 && menu.hasClass('active')) {
            menu.removeClass('active');
            burger.removeClass('active');
        }

    });

}

function customFadeIn(elem, displayValue, msEffect) {
    if (getComputedStyle(elem).display == 'none') {
        if (!displayValue) displayValue = 'block';
        if (!msEffect) {
            msEffect = 0.4;
        } else {
            msEffect /= 1000;
        }
        elem.style.cssText = `
            transition: opacity ${msEffect}s;
            display: ${displayValue};
            opacity: 0;
        `;
        setTimeout(() => elem.style.opacity = 1);

        elem.addEventListener('transitionend', function() {
            elem.setAttribute('style', '');
            elem.style.display = displayValue;
        });

    }

}

function customFadeOut(elem, msEffect) {
    if (getComputedStyle(elem).display != 'none') {
        if (!msEffect) {
            msEffect = 0.4;
        } else {
            msEffect /= 1000;
        }
        elem.style.cssText = `
            transition: opacity ${msEffect}s;
            opacity: 1;
        `;
        setTimeout(() => elem.style.opacity = 0);

        elem.addEventListener('transitionend', function() {
            elem.setAttribute('style', '');
            elem.style.display = 'none';
        });
    }

}

function customFadeToggle(elem, displayValue, msEffect) {
    if (getComputedStyle(elem).display == 'block' || getComputedStyle(elem).display == 'flex') {
        customFadeOut(elem, msEffect);
    } else {
        customFadeIn(elem, displayValue, msEffect);
    }
}

function customSlideDown(elem, displayValue, msEffect) {
    if (getComputedStyle(elem).display == 'block' || getComputedStyle(elem).display == 'flex') {
        return;
    }
    if (!displayValue) displayValue = 'block';
    if (!msEffect) {
        msEffect = 0.4;
    } else {
        msEffect /= 1000;
    }

    elem.style.cssText = `
        opacity: 0;
        position: absolute;
        z-index: -2;
        display: ${displayValue};
    `;
    let heightElem = getComputedStyle(elem).height
    elem.setAttribute('style', '');
    elem.style.cssText = `
        transition: height ${msEffect}s;
        overflow: hidden;
        height: 0;
        display: ${displayValue};
    `;
    setTimeout(() => elem.style.height = heightElem);

    elem.addEventListener('transitionend', function() {
        elem.setAttribute('style', '');
        elem.style.display = displayValue;
    });

}

function customSlideToggle(elem, displayValue, msEffect) {
    if (getComputedStyle(elem).display == 'block' || getComputedStyle(elem).display == 'flex') {
        customSlideUp(elem, msEffect);
    } else {
        customSlideDown(elem, displayValue, msEffect);
    }

}

function customSlideUp(elem, msEffect) {
    if (getComputedStyle(elem).display == 'block' || getComputedStyle(elem).display == 'flex') {
        if (!msEffect) {
            msEffect = 0.4;
        } else {
            msEffect /= 1000;
        }

        let heightElem = getComputedStyle(elem).height
        elem.style.cssText = `
            transition: height ${msEffect}s;
            overflow: hidden;
            height: ${heightElem};
            display: ${getComputedStyle(elem).display};
        `;
        setTimeout(() => elem.style.height = 0);

        elem.addEventListener('transitionend', function() {
            elem.setAttribute('style', '');
            elem.style.display = 'none';
        });
    }
}

function formSend() {
    document.addEventListener('wpcf7mailsent', function(event) {
        let el = $('#modal-form-tnx');
        if (el.length) {
            $.magnificPopup.open({
                items: {
                    src: el
                },
                type: 'inline',
                fixedContentPos: true,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'popup-buble',
            });
        }
    }, false);
}

function getElIndex(el) {
    for (var i = 0; el = el.previousElementSibling; i++);
    return i;
}

function headerHeightFun() {
    let headerHeight = document.querySelector('.header').offsetHeight;
    document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
}

function imgToSvg() {
    $('img.svg').each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
}

function initLazyPicture() {
    $('.lazy').lazy({
        effect: 'fadeIn',
        effectTime: 200
    });
}

function initMasks() {
    $("input[type='tel']").mask("+7 (000) 000-0000");
}

function initPopups() {
    let startWindowScroll = 0;
    $('.js-popup').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'popup-buble',
        callbacks: {
            beforeOpen: function() {
                startWindowScroll = _window.scrollTop();
            },
            close: function() {
                _window.scrollTop(startWindowScroll);
            }
        }
    });

}

function initSelectric() {
    $('select').selectric({
        maxHeight: 300,
        arrowButtonMarkup: '<b class="button"></b>',

        onInit: function(element, data) {
            var $elm = $(element),
                $wrapper = $elm.closest('.' + data.classes.wrapper);

            $wrapper.find('.label').html($elm.attr('placeholder'));
        },
        onBeforeOpen: function(element, data) {
            var $elm = $(element),
                $wrapper = $elm.closest('.' + data.classes.wrapper);

            $wrapper.find('.label').data('value', $wrapper.find('.label').html()).html($elm.attr('placeholder'));
        },
        onBeforeClose: function(element, data) {
            var $elm = $(element),
                $wrapper = $elm.closest('.' + data.classes.wrapper);

            $wrapper.find('.label').html($wrapper.find('.label').data('value'));
        }
    });
}

function initSliders() {

}

function inputNumber() {

    let plusInputNumber = document.querySelectorAll('.input-counter__plus');
    let minusInputNumber = document.querySelectorAll('.input-counter__minus');

    let classWrapInputNumber = '.input-counter';
    let classInputNumber = '.input-counter__input';

    plusInputNumber.forEach(current => {
        increment_decrement(current, 'plus');
    });

    minusInputNumber.forEach(current => {
        increment_decrement(current, 'minus');
    });

    function increment_decrement(current, sign) {
        current.addEventListener('click', function() {

            let thisWrap = current.closest(classWrapInputNumber);
            let thisInput = thisWrap.querySelector(classInputNumber);

            if (sign == 'plus') {
                thisInput.value++;
            }

            if (sign == 'minus' && thisInput.value > 1) {
                thisInput.value--;
            }

        });
    }

}

function legacySupport() {
    svg4everybody();
}

function scrollTop() {
    _window.scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#back-top').fadeIn(300);
        } else {
            $('#back-top').fadeOut(300);
        }
    });

    $('#back-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 750);
        return false;
    });
}

function sectionNavigation() {
    _document
        .on('click', '[href="#"]', function(e) {
            e.preventDefault();
        })
        .on('click', 'a[href^="#section"]', function() {
            let el = $(this).attr('href');
            $('body, html').animate({
                scrollTop: $(el).offset().top
            }, 1000);
            return false;
        })
}

function vhModule() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        // headerHeightFun();
    });

}
/**
 * Modules in this bundle
 * @license
 *
 * modal-video:
 *   license: appleple
 *   author: appleple
 *   homepage: http://developer.a-blogcms.jp
 *   version: 2.4.2
 *
 * custom-event-polyfill:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   contributors: Frank Panetta, Mikhail Reenko <reenko@yandex.ru>, Joscha Feth <joscha@feth.com>
 *   homepage: https://github.com/krambuhl/custom-event-polyfill#readme
 *   version: 0.3.0
 *
 * es6-object-assign:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   author: Rubén Norte <rubennorte@gmail.com>
 *   homepage: https://github.com/rubennorte/es6-object-assign
 *   version: 1.1.0
 *
 * This header is generated by licensify (https://github.com/twada/licensify)
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.ModalVideo = e()
    }
}(function() {
    return function() {
        function e(t, n, o) {
            function i(r, a) {
                if (!n[r]) {
                    if (!t[r]) {
                        var u = "function" == typeof require && require;
                        if (!a && u) return u(r, !0);
                        if (l) return l(r, !0);
                        var d = new Error("Cannot find module '" + r + "'");
                        throw d.code = "MODULE_NOT_FOUND", d
                    }
                    var s = n[r] = {
                        exports: {}
                    };
                    t[r][0].call(s.exports, function(e) {
                        var n = t[r][1][e];
                        return i(n || e)
                    }, s, s.exports, e, t, n, o)
                }
                return n[r].exports
            }
            for (var l = "function" == typeof require && require, r = 0; r < o.length; r++) i(o[r]);
            return i
        }
        return e
    }()({
        1: [function(e, t, n) {
            try {
                var o = new window.CustomEvent("test");
                if (o.preventDefault(), !0 !== o.defaultPrevented) throw new Error("Could not prevent default")
            } catch (e) {
                var i = function(e, t) {
                    var n, o;
                    return t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    }, n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o = n.preventDefault, n.preventDefault = function() {
                        o.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            this.defaultPrevented = !0
                        }
                    }, n
                };
                i.prototype = window.Event.prototype, window.CustomEvent = i
            }
        }, {}],
        2: [function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
                for (var n = Object(e), o = 1; o < arguments.length; o++) {
                    var i = arguments[o];
                    if (void 0 !== i && null !== i)
                        for (var l = Object.keys(Object(i)), r = 0, a = l.length; r < a; r++) {
                            var u = l[r],
                                d = Object.getOwnPropertyDescriptor(i, u);
                            void 0 !== d && d.enumerable && (n[u] = i[u])
                        }
                }
                return n
            }

            function i() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: o
                })
            }
            t.exports = {
                assign: o,
                polyfill: i
            }
        }, {}],
        3: [function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }();
            e("custom-event-polyfill");
            var l = e("../lib/util"),
                r = e("es6-object-assign").assign,
                a = {
                    channel: "youtube",
                    facebook: {},
                    youtube: {
                        autoplay: 1,
                        cc_load_policy: 1,
                        color: null,
                        controls: 1,
                        disablekb: 0,
                        enablejsapi: 0,
                        end: null,
                        fs: 1,
                        h1: null,
                        iv_load_policy: 1,
                        list: null,
                        listType: null,
                        loop: 0,
                        modestbranding: null,
                        mute: 0,
                        origin: null,
                        playlist: null,
                        playsinline: null,
                        rel: 0,
                        showinfo: 1,
                        start: 0,
                        wmode: "transparent",
                        theme: "dark",
                        nocookie: !1
                    },
                    ratio: "16:9",
                    vimeo: {
                        api: !1,
                        autopause: !0,
                        autoplay: !0,
                        byline: !0,
                        callback: null,
                        color: null,
                        controls: !0,
                        height: null,
                        loop: !1,
                        maxheight: null,
                        maxwidth: null,
                        muted: !1,
                        player_id: null,
                        portrait: !0,
                        title: !0,
                        width: null,
                        xhtml: !1
                    },
                    allowFullScreen: !0,
                    allowAutoplay: !0,
                    animationSpeed: 300,
                    classNames: {
                        modalVideo: "modal-video",
                        modalVideoClose: "modal-video-close",
                        modalVideoBody: "modal-video-body",
                        modalVideoInner: "modal-video-inner",
                        modalVideoIframeWrap: "modal-video-movie-wrap",
                        modalVideoCloseBtn: "modal-video-close-btn"
                    },
                    aria: {
                        openMessage: "You just openned the modal video",
                        dismissBtnMessage: "Close the modal by clicking here"
                    }
                },
                u = function() {
                    function e(t, n) {
                        var i = this;
                        o(this, e);
                        var u = r({}, a, n),
                            d = "string" == typeof t ? document.querySelectorAll(t) : t,
                            s = document.querySelector("body"),
                            c = u.classNames,
                            f = u.animationSpeed;
                        [].forEach.call(d, function(e) {
                            e.addEventListener("click", function(t) {
                                "A" === e.tagName && t.preventDefault();
                                var n = e.dataset.videoId,
                                    o = e.dataset.channel || u.channel,
                                    r = (0, l.getUniqId)(),
                                    a = e.dataset.videoUrl || i.getVideoUrl(u, o, n),
                                    d = i.getHtml(u, a, r);
                                (0, l.append)(s, d);
                                var v = document.getElementById(r),
                                    m = v.querySelector(".js-modal-video-dismiss-btn");
                                v.focus(), v.addEventListener("click", function() {
                                    (0, l.addClass)(v, c.modalVideoClose), setTimeout(function() {
                                        (0, l.remove)(v), e.focus()
                                    }, f)
                                }), v.addEventListener("keydown", function(e) {
                                    9 === e.which && (e.preventDefault(), document.activeElement === v ? m.focus() : (v.setAttribute("aria-label", ""), v.focus()))
                                }), m.addEventListener("click", function() {
                                    (0, l.triggerEvent)(v, "click")
                                })
                            })
                        })
                    }
                    return i(e, [{
                        key: "getPadding",
                        value: function(e) {
                            var t = e.split(":"),
                                n = Number(t[0]);
                            return 100 * Number(t[1]) / n + "%"
                        }
                    }, {
                        key: "getQueryString",
                        value: function(e) {
                            var t = "";
                            return Object.keys(e).forEach(function(n) {
                                t += n + "=" + e[n] + "&"
                            }), t.substr(0, t.length - 1)
                        }
                    }, {
                        key: "getVideoUrl",
                        value: function(e, t, n) {
                            return "youtube" === t ? this.getYoutubeUrl(e.youtube, n) : "vimeo" === t ? this.getVimeoUrl(e.vimeo, n) : "facebook" === t ? this.getFacebookUrl(e.facebook, n) : ""
                        }
                    }, {
                        key: "getVimeoUrl",
                        value: function(e, t) {
                            return "//player.vimeo.com/video/" + t + "?" + this.getQueryString(e)
                        }
                    }, {
                        key: "getYoutubeUrl",
                        value: function(e, t) {
                            var n = this.getQueryString(e);
                            return !0 === e.nocookie ? "//www.youtube-nocookie.com/embed/" + t + "?" + n : "//www.youtube.com/embed/" + t + "?" + n
                        }
                    }, {
                        key: "getFacebookUrl",
                        value: function(e, t) {
                            return "//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/" + t + "&" + this.getQueryString(e)
                        }
                    }, {
                        key: "getHtml",
                        value: function(e, t, n) {
                            var o = this.getPadding(e.ratio),
                                i = e.classNames;
                            return '\n      <div class="' + i.modalVideo + '" tabindex="-1" role="dialog" aria-label="' + e.aria.openMessage + '" id="' + n + '">\n        <div class="' + i.modalVideoBody + '">\n          <div class="' + i.modalVideoInner + '">\n            <div class="' + i.modalVideoIframeWrap + '" style="padding-bottom:' + o + '">\n              <button class="' + i.modalVideoCloseBtn + ' js-modal-video-dismiss-btn" aria-label="' + e.aria.dismissBtnMessage + "\"></button>\n              <iframe width='460' height='230' src=\"https:" + t + "\" frameborder='0' allowfullscreen=" + e.allowFullScreen + ' tabindex="-1" ' + (e.allowAutoplay ? 'allow="autoplay"' : "") + "/>\n            </div>\n          </div>\n        </div>\n      </div>\n    "
                        }
                    }]), e
                }();
            n.default = u, t.exports = n.default
        }, {
            "../lib/util": 5,
            "custom-event-polyfill": 1,
            "es6-object-assign": 2
        }],
        4: [function(e, t, n) {
            "use strict";
            t.exports = e("./core/")
        }, {
            "./core/": 3
        }],
        5: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.append = function(e, t) {
                var n = document.createElement("div");
                for (n.innerHTML = t; n.children.length > 0;) e.appendChild(n.children[0])
            }, n.getUniqId = function() {
                return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
            }, n.remove = function(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }, n.addClass = function(e, t) {
                e.classList ? e.classList.add(t) : e.className += " " + t
            }, n.triggerEvent = function(e, t, n) {
                var o = void 0;
                window.CustomEvent ? o = new CustomEvent(t, {
                    cancelable: !0
                }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, !1, !1, n)), e.dispatchEvent(o)
            }
        }, {}]
    }, {}, [4])(4)
});

new ModalVideo('.js-modal-btn');