! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";

    function m(e) {
        return null != e && e === e.window
    }
    var t = [],
        E = C.document,
        n = Object.getPrototypeOf,
        o = t.slice,
        v = t.concat,
        l = t.push,
        s = t.indexOf,
        i = {},
        a = i.toString,
        g = i.hasOwnProperty,
        r = g.toString,
        d = r.call(Object),
        y = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function w(e, t, i) {
        var n, s, a = (i = i || E).createElement("script");
        if (a.text = e, t)
            for (n in u)(s = t[n] || t.getAttribute && t.getAttribute(n)) && a.setAttribute(n, s);
        i.head.appendChild(a).parentNode.removeChild(a)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e
    }
    var c = "3.4.1",
        S = function(e, t) {
            return new S.fn.init(e, t)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            i = x(e);
        return !b(e) && !m(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: c,
        constructor: S,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(i) {
            return this.pushStack(S.map(this, function(e, t) {
                return i.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, i, n, s, a, r = arguments[0] || {},
            o = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof r && (d = r, r = arguments[o] || {}, o++), "object" == typeof r || b(r) || (r = {}), o === l && (r = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) n = e[t], "__proto__" !== t && r !== n && (d && n && (S.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[t], a = s && !Array.isArray(i) ? [] : s || S.isPlainObject(i) ? i : {}, s = !1, r[t] = S.extend(d, a, n)) : void 0 !== n && (r[t] = n));
        return r
    }, S.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== a.call(e) || (t = n(e)) && ("function" != typeof(i = g.call(t, "constructor") && t.constructor) || r.call(i) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            w(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var i, n = 0;
            if (p(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (p(Object(e)) ? S.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : s.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n];
            return e.length = s, e
        },
        grep: function(e, t, i) {
            for (var n = [], s = 0, a = e.length, r = !i; s < a; s++) !t(e[s], s) != r && n.push(e[s]);
            return n
        },
        map: function(e, t, i) {
            var n, s, a = 0,
                r = [];
            if (p(e))
                for (n = e.length; a < n; a++) null != (s = t(e[a], a, i)) && r.push(s);
            else
                for (a in e) null != (s = t(e[a], a, i)) && r.push(s);
            return v.apply([], r)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var f = function(i) {
        function c(e, t, i) {
            var n = "0x" + t - 65536;
            return n != n || i ? t : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }

        function s() {
            T()
        }
        var e, p, w, a, r, f, h, m, x, l, d, T, C, o, E, v, u, g, y, S = "sizzle" + +new Date,
            b = i.document,
            k = 0,
            n = 0,
            M = le(),
            P = le(),
            A = le(),
            I = le(),
            L = function(e, t) {
                return e === t && (d = !0), 0
            },
            z = {}.hasOwnProperty,
            t = [],
            D = t.pop,
            O = t.push,
            $ = t.push,
            N = t.slice,
            j = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + B + "*(" + q + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + B + "*\\]",
            F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            G = new RegExp(B + "+", "g"),
            W = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            _ = new RegExp("^" + B + "*," + B + "*"),
            X = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            V = new RegExp(B + "|>"),
            Y = new RegExp(F),
            U = new RegExp("^" + q + "$"),
            K = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            Z = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ie = /[+~]/,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            se = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ae = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = we(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            $.apply(t = N.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (e) {
            $ = {
                apply: t.length ? function(e, t) {
                    O.apply(e, N.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function oe(e, t, i, n) {
            var s, a, r, o, l, d, u, c = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return i;
            if (!n && ((t ? t.ownerDocument || t : b) !== C && T(t), t = t || C, E)) {
                if (11 !== h && (l = te.exec(e)))
                    if (s = l[1]) {
                        if (9 === h) {
                            if (!(r = t.getElementById(s))) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (c && (r = c.getElementById(s)) && y(t, r) && r.id === s) return i.push(r), i
                    } else {
                        if (l[2]) return $.apply(i, t.getElementsByTagName(e)), i;
                        if ((s = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return $.apply(i, t.getElementsByClassName(s)), i
                    }
                if (p.qsa && !I[e + " "] && (!v || !v.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (u = e, c = t, 1 === h && V.test(e)) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(se, ae) : t.setAttribute("id", o = S), a = (d = f(e)).length; a--;) d[a] = "#" + o + " " + be(d[a]);
                        u = d.join(","), c = ie.test(e) && ge(t.parentNode) || t
                    }
                    try {
                        return $.apply(i, c.querySelectorAll(u)), i
                    } catch (t) {
                        I(e, !0)
                    } finally {
                        o === S && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(W, "$1"), t, i, n)
        }

        function le() {
            var n = [];
            return function e(t, i) {
                return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
            }
        }

        function de(e) {
            return e[S] = !0, e
        }

        function ue(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function he(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function fe(i) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }

        function me(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(r) {
            return de(function(a) {
                return a = +a, de(function(e, t) {
                    for (var i, n = r([], e.length, a), s = n.length; s--;) e[i = n[s]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = oe.support = {}, r = oe.isXML = function(e) {
                var t = e.namespaceURI,
                    i = (e.ownerDocument || e).documentElement;
                return !Z.test(t || i && i.nodeName || "HTML")
            }, T = oe.setDocument = function(e) {
                var t, i, n = e ? e.ownerDocument || e : b;
                return n !== C && 9 === n.nodeType && n.documentElement && (o = (C = n).documentElement, E = !r(C), b !== C && (i = C.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", s, !1) : i.attachEvent && i.attachEvent("onunload", s)), p.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = ue(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = ee.test(C.getElementsByClassName), p.getById = ue(function(e) {
                    return o.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), p.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(ne, c);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (w.filter.ID = function(e) {
                    var i = e.replace(ne, c);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === i
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var i, n, s, a = t.getElementById(e);
                        if (a) {
                            if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                            for (s = t.getElementsByName(e), n = 0; a = s[n++];)
                                if ((i = a.getAttributeNode("id")) && i.value === e) return [a]
                        }
                        return []
                    }
                }), w.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        s = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" !== e) return a;
                    for (; i = a[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }, w.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, u = [], v = [], (p.qsa = ee.test(C.querySelectorAll)) && (ue(function(e) {
                    o.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + B + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + B + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), o.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (p.matchesSelector = ee.test(g = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ue(function(e) {
                    p.disconnectedMatch = g.call(e, "*"), g.call(e, "[s!='']:x"), u.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), u = u.length && new RegExp(u.join("|")), t = ee.test(o.compareDocumentPosition), y = t || ee.test(o.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, L = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === i ? e === C || e.ownerDocument === b && y(b, e) ? -1 : t === C || t.ownerDocument === b && y(b, t) ? 1 : l ? j(l, e) - j(l, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i, n = 0,
                        s = e.parentNode,
                        a = t.parentNode,
                        r = [e],
                        o = [t];
                    if (!s || !a) return e === C ? -1 : t === C ? 1 : s ? -1 : a ? 1 : l ? j(l, e) - j(l, t) : 0;
                    if (s === a) return he(e, t);
                    for (i = e; i = i.parentNode;) r.unshift(i);
                    for (i = t; i = i.parentNode;) o.unshift(i);
                    for (; r[n] === o[n];) n++;
                    return n ? he(r[n], o[n]) : r[n] === b ? -1 : o[n] === b ? 1 : 0
                }), C
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), p.matchesSelector && E && !I[t + " "] && (!u || !u.test(t)) && (!v || !v.test(t))) try {
                    var i = g.call(e, t);
                    if (i || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    I(t, !0)
                }
                return 0 < oe(t, C, null, [e]).length
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var i = w.attrHandle[t.toLowerCase()],
                    n = i && z.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !E) : void 0;
                return void 0 !== n ? n : p.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(se, ae)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, i = [],
                    n = 0,
                    s = 0;
                if (d = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(L), d) {
                    for (; t = e[s++];) t === e[s] && (n = i.push(s));
                    for (; n--;) e.splice(i[n], 1)
                }
                return l = null, e
            }, a = oe.getText = function(e) {
                var t, i = "",
                    n = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += a(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[n++];) i += a(t);
                return i
            }, (w = oe.selectors = {
                cacheLength: 50,
                createPseudo: de,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ne, c), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, c), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Y.test(i) && (t = f(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ne, c).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = M[e + " "];
                        return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && M(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(i, n, s) {
                        return function(e) {
                            var t = oe.attr(e, i);
                            return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === s : "!=" === n ? t !== s : "^=" === n ? s && 0 === t.indexOf(s) : "*=" === n ? s && -1 < t.indexOf(s) : "$=" === n ? s && t.slice(-s.length) === s : "~=" === n ? -1 < (" " + t.replace(G, " ") + " ").indexOf(s) : "|=" === n && (t === s || t.slice(0, s.length + 1) === s + "-"))
                        }
                    },
                    CHILD: function(f, e, t, m, v) {
                        var g = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, i) {
                            var n, s, a, r, o, l, d = g != y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                c = b && e.nodeName.toLowerCase(),
                                h = !i && !b,
                                p = !1;
                            if (u) {
                                if (g) {
                                    for (; d;) {
                                        for (r = e; r = r[d];)
                                            if (b ? r.nodeName.toLowerCase() === c : 1 === r.nodeType) return !1;
                                        l = d = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                    for (p = (o = (n = (s = (a = (r = u)[S] || (r[S] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[f] || [])[0] === k && n[1]) && n[2], r = o && u.childNodes[o]; r = ++o && r && r[d] || (p = o = 0) || l.pop();)
                                        if (1 === r.nodeType && ++p && r === e) {
                                            s[f] = [k, o, p];
                                            break
                                        }
                                } else if (h && (p = o = (n = (s = (a = (r = e)[S] || (r[S] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[f] || [])[0] === k && n[1]), !1 === p)
                                    for (;
                                        (r = ++o && r && r[d] || (p = o = 0) || l.pop()) && ((b ? r.nodeName.toLowerCase() !== c : 1 !== r.nodeType) || !++p || (h && ((s = (a = r[S] || (r[S] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[f] = [k, p]), r !== e)););
                                return (p -= v) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function(e, a) {
                        var t, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return r[S] ? r(a) : 1 < r.length ? (t = [e, e, "", a], w.setFilters.hasOwnProperty(e.toLowerCase()) ? de(function(e, t) {
                            for (var i, n = r(e, a), s = n.length; s--;) e[i = j(e, n[s])] = !(t[i] = n[s])
                        }) : function(e) {
                            return r(e, 0, t)
                        }) : r
                    }
                },
                pseudos: {
                    not: de(function(e) {
                        var n = [],
                            s = [],
                            o = h(e.replace(W, "$1"));
                        return o[S] ? de(function(e, t, i, n) {
                            for (var s, a = o(e, null, n, []), r = e.length; r--;)(s = a[r]) && (e[r] = !(t[r] = s))
                        }) : function(e, t, i) {
                            return n[0] = e, o(n, null, i, s), n[0] = null, !s.pop()
                        }
                    }),
                    has: de(function(t) {
                        return function(e) {
                            return 0 < oe(t, e).length
                        }
                    }),
                    contains: de(function(t) {
                        return t = t.replace(ne, c),
                            function(e) {
                                return -1 < (e.textContent || a(e)).indexOf(t)
                            }
                    }),
                    lang: de(function(i) {
                        return U.test(i || "") || oe.error("unsupported lang: " + i), i = i.replace(ne, c).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = i.location && i.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === o
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: ve(function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: ve(function(e, t, i) {
                        for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n;) e.push(n);
                        return e
                    }),
                    gt: ve(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[e] = pe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) w.pseudos[e] = fe(e);

        function ye() {}

        function be(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function we(o, e, t) {
            var l = e.dir,
                d = e.next,
                u = d || l,
                c = t && "parentNode" === u,
                h = n++;
            return e.first ? function(e, t, i) {
                for (; e = e[l];)
                    if (1 === e.nodeType || c) return o(e, t, i);
                return !1
            } : function(e, t, i) {
                var n, s, a, r = [k, h];
                if (i) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || c) && o(e, t, i)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || c)
                            if (s = (a = e[S] || (e[S] = {}))[e.uniqueID] || (a[e.uniqueID] = {}), d && d === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((n = s[u]) && n[0] === k && n[1] === h) return r[2] = n[2];
                                if ((s[u] = r)[2] = o(e, t, i)) return !0
                            } return !1
            }
        }

        function xe(s) {
            return 1 < s.length ? function(e, t, i) {
                for (var n = s.length; n--;)
                    if (!s[n](e, t, i)) return !1;
                return !0
            } : s[0]
        }

        function Te(e, t, i, n, s) {
            for (var a, r = [], o = 0, l = e.length, d = null != t; o < l; o++)(a = e[o]) && (i && !i(a, n, s) || (r.push(a), d && t.push(o)));
            return r
        }

        function Ce(p, f, m, v, g, e) {
            return v && !v[S] && (v = Ce(v)), g && !g[S] && (g = Ce(g, e)), de(function(e, t, i, n) {
                var s, a, r, o = [],
                    l = [],
                    d = t.length,
                    u = e || function(e, t, i) {
                        for (var n = 0, s = t.length; n < s; n++) oe(e, t[n], i);
                        return i
                    }(f || "*", i.nodeType ? [i] : i, []),
                    c = !p || !e && f ? u : Te(u, o, p, i, n),
                    h = m ? g || (e ? p : d || v) ? [] : t : c;
                if (m && m(c, h, i, n), v)
                    for (s = Te(h, l), v(s, [], i, n), a = s.length; a--;)(r = s[a]) && (h[l[a]] = !(c[l[a]] = r));
                if (e) {
                    if (g || p) {
                        if (g) {
                            for (s = [], a = h.length; a--;)(r = h[a]) && s.push(c[a] = r);
                            g(null, h = [], s, n)
                        }
                        for (a = h.length; a--;)(r = h[a]) && -1 < (s = g ? j(e, r) : o[a]) && (e[s] = !(t[s] = r))
                    }
                } else h = Te(h === t ? h.splice(d, h.length) : h), g ? g(null, t, h, n) : $.apply(t, h)
            })
        }

        function Ee(e) {
            for (var s, t, i, n = e.length, a = w.relative[e[0].type], r = a || w.relative[" "], o = a ? 1 : 0, l = we(function(e) {
                    return e === s
                }, r, !0), d = we(function(e) {
                    return -1 < j(s, e)
                }, r, !0), u = [function(e, t, i) {
                    var n = !a && (i || t !== x) || ((s = t).nodeType ? l : d)(e, t, i);
                    return s = null, n
                }]; o < n; o++)
                if (t = w.relative[e[o].type]) u = [we(xe(u), t)];
                else {
                    if ((t = w.filter[e[o].type].apply(null, e[o].matches))[S]) {
                        for (i = ++o; i < n && !w.relative[e[i].type]; i++);
                        return Ce(1 < o && xe(u), 1 < o && be(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(W, "$1"), t, o < i && Ee(e.slice(o, i)), i < n && Ee(e = e.slice(i)), i < n && be(e))
                    }
                    u.push(t)
                }
            return xe(u)
        }
        return ye.prototype = w.filters = w.pseudos, w.setFilters = new ye, f = oe.tokenize = function(e, t) {
            var i, n, s, a, r, o, l, d = P[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (r = e, o = [], l = w.preFilter; r;) {
                for (a in i && !(n = _.exec(r)) || (n && (r = r.slice(n[0].length) || r), o.push(s = [])), i = !1, (n = X.exec(r)) && (i = n.shift(), s.push({
                        value: i,
                        type: n[0].replace(W, " ")
                    }), r = r.slice(i.length)), w.filter) !(n = K[a].exec(r)) || l[a] && !(n = l[a](n)) || (i = n.shift(), s.push({
                    value: i,
                    type: a,
                    matches: n
                }), r = r.slice(i.length));
                if (!i) break
            }
            return t ? r.length : r ? oe.error(e) : P(e, o).slice(0)
        }, h = oe.compile = function(e, t) {
            var i, v, g, y, b, n, s = [],
                a = [],
                r = A[e + " "];
            if (!r) {
                for (i = (t = t || f(e)).length; i--;)(r = Ee(t[i]))[S] ? s.push(r) : a.push(r);
                (r = A(e, (v = a, y = 0 < (g = s).length, b = 0 < v.length, n = function(e, t, i, n, s) {
                    var a, r, o, l = 0,
                        d = "0",
                        u = e && [],
                        c = [],
                        h = x,
                        p = e || b && w.find.TAG("*", s),
                        f = k += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (s && (x = t === C || t || s); d !== m && null != (a = p[d]); d++) {
                        if (b && a) {
                            for (r = 0, t || a.ownerDocument === C || (T(a), i = !E); o = v[r++];)
                                if (o(a, t || C, i)) {
                                    n.push(a);
                                    break
                                }
                            s && (k = f)
                        }
                        y && ((a = !o && a) && l--, e && u.push(a))
                    }
                    if (l += d, y && d !== l) {
                        for (r = 0; o = g[r++];) o(u, c, t, i);
                        if (e) {
                            if (0 < l)
                                for (; d--;) u[d] || c[d] || (c[d] = D.call(n));
                            c = Te(c)
                        }
                        $.apply(n, c), s && !e && 0 < c.length && 1 < l + g.length && oe.uniqueSort(n)
                    }
                    return s && (k = f, x = h), u
                }, y ? de(n) : n))).selector = e
            }
            return r
        }, m = oe.select = function(e, t, i, n) {
            var s, a, r, o, l, d = "function" == typeof e && e,
                u = !n && f(e = d.selector || e);
            if (i = i || [], 1 === u.length) {
                if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (r = a[0]).type && 9 === t.nodeType && E && w.relative[a[1].type]) {
                    if (!(t = (w.find.ID(r.matches[0].replace(ne, c), t) || [])[0])) return i;
                    d && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (s = K.needsContext.test(e) ? 0 : a.length; s-- && (r = a[s], !w.relative[o = r.type]);)
                    if ((l = w.find[o]) && (n = l(r.matches[0].replace(ne, c), ie.test(a[0].type) && ge(t.parentNode) || t))) {
                        if (a.splice(s, 1), !(e = n.length && be(a))) return $.apply(i, n), i;
                        break
                    }
            }
            return (d || h(e, u))(n, t, !E, i, !t || ie.test(e) && ge(t.parentNode) || t), i
        }, p.sortStable = S.split("").sort(L).join("") === S, p.detectDuplicates = !!d, T(), p.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(H, function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), oe
    }(C);
    S.find = f, S.expr = f.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = f.uniqueSort, S.text = f.getText, S.isXMLDoc = f.isXML, S.contains = f.contains, S.escapeSelector = f.escape;

    function T(e, t, i) {
        for (var n = [], s = void 0 !== i;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (s && S(e).is(i)) break;
                n.push(e)
            }
        return n
    }

    function k(e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
    }
    var M = S.expr.match.needsContext;

    function P(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, i, n) {
        return b(i) ? S.grep(e, function(e, t) {
            return !!i.call(e, t, e) !== n
        }) : i.nodeType ? S.grep(e, function(e) {
            return e === i !== n
        }) : "string" != typeof i ? S.grep(e, function(e) {
            return -1 < s.call(i, e) !== n
        }) : S.filter(i, e, n)
    }
    S.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? S.find.matchesSelector(n, e) ? [n] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                s = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (S.contains(s[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) S.find(e, s[t], i);
            return 1 < n ? S.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && M.test(e) ? S(e) : e || [], !1).length
        }
    });
    var L, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, i) {
        var n, s;
        if (!e) return this;
        if (i = i || L, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== i.ready ? i.ready(e) : e(S) : S.makeArray(e, this);
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : z.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), A.test(n[1]) && S.isPlainObject(t))
                for (n in t) b(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        return (s = E.getElementById(n[2])) && (this[0] = s, this.length = 1), this
    }).prototype = S.fn, L = S(E);
    var D = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                s = this.length,
                a = [],
                r = "string" != typeof e && S(e);
            if (!M.test(e))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, e))) {
                            a.push(i);
                            break
                        }
            return this.pushStack(1 < a.length ? S.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(S(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return T(e, "parentNode", i)
        },
        next: function(e) {
            return $(e, "nextSibling")
        },
        prev: function(e) {
            return $(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return T(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return T(e, "previousSibling", i)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (P(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(n, s) {
        S.fn[n] = function(e, t) {
            var i = S.map(this, s, e);
            return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = S.filter(t, i)), 1 < this.length && (O[n] || S.uniqueSort(i), D.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var N = /[^\x20\t\r\n\f]+/g;

    function j(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function B(e, t, i, n) {
        var s;
        try {
            e && b(s = e.promise) ? s.call(e).done(t).fail(i) : e && b(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    S.Callbacks = function(n) {
        var i;
        n = "string" == typeof n ? (i = {}, S.each(n.match(N) || [], function(e, t) {
            i[t] = !0
        }), i) : S.extend({}, n);

        function s() {
            for (r = r || n.once, t = a = !0; l.length; d = -1)
                for (e = l.shift(); ++d < o.length;) !1 === o[d].apply(e[0], e[1]) && n.stopOnFalse && (d = o.length, e = !1);
            n.memory || (e = !1), a = !1, r && (o = e ? [] : "")
        }
        var a, e, t, r, o = [],
            l = [],
            d = -1,
            u = {
                add: function() {
                    return o && (e && !a && (d = o.length - 1, l.push(e)), function i(e) {
                        S.each(e, function(e, t) {
                            b(t) ? n.unique && u.has(t) || o.push(t) : t && t.length && "string" !== x(t) && i(t)
                        })
                    }(arguments), e && !a && s()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        for (var i; - 1 < (i = S.inArray(t, o, i));) o.splice(i, 1), i <= d && d--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, o) : 0 < o.length
                },
                empty: function() {
                    return o = o && [], this
                },
                disable: function() {
                    return r = l = [], o = e = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = l = [], e || a || (o = e = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, t) {
                    return r || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), a || s()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return u
    }, S.extend({
        Deferred: function(e) {
            var a = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                s = "pending",
                r = {
                    state: function() {
                        return s
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var s = arguments;
                        return S.Deferred(function(n) {
                            S.each(a, function(e, t) {
                                var i = b(s[t[4]]) && s[t[4]];
                                o[t[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), s = null
                        }).promise()
                    },
                    then: function(t, i, n) {
                        var l = 0;

                        function d(s, a, r, o) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(s < l)) {
                                        if ((e = r.apply(i, n)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? o ? t.call(e, d(l, a, j, o), d(l, a, H, o)) : (l++, t.call(e, d(l, a, j, o), d(l, a, H, o), d(l, a, j, a.notifyWith))) : (r !== j && (i = void 0, n = [e]), (o || a.resolveWith)(i, n))
                                    }
                                }
                                var i = this,
                                    n = arguments,
                                    t = o ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), l <= s + 1 && (r !== H && (i = void 0, n = [e]), a.rejectWith(i, n))
                                        }
                                    };
                                s ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            a[0][3].add(d(0, e, b(n) ? n : j, e.notifyWith)), a[1][3].add(d(0, e, b(t) ? t : j)), a[2][3].add(d(0, e, b(i) ? i : H))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, r) : r
                    }
                },
                o = {};
            return S.each(a, function(e, t) {
                var i = t[2],
                    n = t[5];
                r[t[1]] = i.add, n && i.add(function() {
                    s = n
                }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock), i.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = i.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    s[t] = this, a[t] = 1 < arguments.length ? o.call(arguments) : e, --i || r.resolveWith(s, a)
                }
            }
            var i = arguments.length,
                n = i,
                s = Array(n),
                a = o.call(arguments),
                r = S.Deferred();
            if (i <= 1 && (B(e, r.done(t(n)).resolve, r.reject, !i), "pending" === r.state() || b(a[n] && a[n].then))) return r.then();
            for (; n--;) B(a[n], t(n), r.reject);
            return r.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && q.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var R = S.Deferred();

    function F() {
        E.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), S.ready()
    }
    S.fn.ready = function(e) {
        return R.then(e).catch(function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || R.resolveWith(E, [S])
        }
    }), S.ready.then = R.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F));
    var G = function(e, t, i, n, s, a, r) {
            var o = 0,
                l = e.length,
                d = null == i;
            if ("object" === x(i))
                for (o in s = !0, i) G(e, t, o, i[o], !0, a, r);
            else if (void 0 !== n && (s = !0, b(n) || (r = !0), d && (t = r ? (t.call(e, n), null) : (d = t, function(e, t, i) {
                    return d.call(S(e), i)
                })), t))
                for (; o < l; o++) t(e[o], i, r ? n : n.call(e[o], o, t(e[o], i)));
            return s ? e : d ? t.call(e) : l ? t(e[0], i) : a
        },
        W = /^-ms-/,
        _ = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(W, "ms-").replace(_, X)
    }

    function Y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function U() {
        this.expando = S.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, s = this.cache(e);
            if ("string" == typeof t) s[V(t)] = i;
            else
                for (n in t) s[V(n)] = t[n];
            return s
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in n ? [t] : t.match(N) || []).length;
                    for (; i--;) delete n[t[i]]
                }
                void 0 !== t && !S.isEmptyObject(n) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var K = new U,
        Z = new U,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function ee(e, t, i) {
        var n, s;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Q.test(s) ? JSON.parse(s) : s)
                } catch (e) {}
                Z.set(e, t, i)
            } else i = void 0;
        return i
    }
    S.extend({
        hasData: function(e) {
            return Z.hasData(e) || K.hasData(e)
        },
        data: function(e, t, i) {
            return Z.access(e, t, i)
        },
        removeData: function(e, t) {
            Z.remove(e, t)
        },
        _data: function(e, t, i) {
            return K.access(e, t, i)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }), S.fn.extend({
        data: function(i, e) {
            var t, n, s, a = this[0],
                r = a && a.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function() {
                Z.set(this, i)
            }) : G(this, function(e) {
                var t;
                if (a && void 0 === e) return void 0 !== (t = Z.get(a, i)) || void 0 !== (t = ee(a, i)) ? t : void 0;
                this.each(function() {
                    Z.set(this, i, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (s = Z.get(a), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
                for (t = r.length; t--;) r[t] && 0 === (n = r[t].name).indexOf("data-") && (n = V(n.slice(5)), ee(a, n, s[n]));
                K.set(a, "hasDataAttrs", !0)
            }
            return s
        },
        removeData: function(e) {
            return this.each(function() {
                Z.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = K.get(e, t), i && (!n || Array.isArray(i) ? n = K.access(e, t, S.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = S.queue(e, t),
                n = i.length,
                s = i.shift(),
                a = S._queueHooks(e, t);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete a.stop, s.call(e, function() {
                S.dequeue(e, t)
            }, a)), !n && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return K.get(e, i) || K.access(e, i, {
                empty: S.Callbacks("once memory").add(function() {
                    K.remove(e, [t + "queue", i])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, i) {
            var e = 2;
            return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                var e = S.queue(this, t, i);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function i() {
                --s || a.resolveWith(r, [r])
            }
            var n, s = 1,
                a = S.Deferred(),
                r = this,
                o = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = K.get(r[o], e + "queueHooks")) && n.empty && (s++, n.empty.add(i));
            return i(), a.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        se = E.documentElement,
        ae = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        re = {
            composed: !0
        };
    se.getRootNode && (ae = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    });

    function oe(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === S.css(e, "display")
    }

    function le(e, t, i, n) {
        var s, a, r = {};
        for (a in t) r[a] = e.style[a], e.style[a] = t[a];
        for (a in s = i.apply(e, n || []), t) e.style[a] = r[a];
        return s
    }

    function de(e, t, i, n) {
        var s, a, r = 20,
            o = n ? function() {
                return n.cur()
            } : function() {
                return S.css(e, t, "")
            },
            l = o(),
            d = i && i[3] || (S.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (S.cssNumber[t] || "px" !== d && +l) && ie.exec(S.css(e, t));
        if (u && u[3] !== d) {
            for (l /= 2, d = d || u[3], u = +l || 1; r--;) S.style(e, t, u + d), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (r = 0), u /= a;
            u *= 2, S.style(e, t, u + d), i = i || []
        }
        return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = u, n.end = s)), s
    }
    var ue = {};

    function ce(e, t) {
        for (var i, n, s, a, r, o, l = [], d = 0, u = e.length; d < u; d++)(n = e[d]).style && (i = n.style.display, t ? ("none" === i && (l[d] = K.get(n, "display") || null, l[d] || (n.style.display = "")), "" === n.style.display && oe(n) && (l[d] = (o = a = s = void 0, a = n.ownerDocument, r = n.nodeName, (o = ue[r]) || (s = a.body.appendChild(a.createElement(r)), o = S.css(s, "display"), s.parentNode.removeChild(s), "none" === o && (o = "block"), ue[r] = o)))) : "none" !== i && (l[d] = "none", K.set(n, "display", i)));
        for (d = 0; d < u; d++) null != l[d] && (e[d].style.display = l[d]);
        return e
    }
    S.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                oe(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ve(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && P(e, t) ? S.merge([e], i) : i
    }

    function ge(e, t) {
        for (var i = 0, n = e.length; i < n; i++) K.set(e[i], "globalEval", !t || K.get(t[i], "globalEval"))
    }
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
    var ye, be, we = /<|&#?\w+;/;

    function xe(e, t, i, n, s) {
        for (var a, r, o, l, d, u, c = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((a = e[p]) || 0 === a)
                if ("object" === x(a)) S.merge(h, a.nodeType ? [a] : a);
                else if (we.test(a)) {
            for (r = r || c.appendChild(t.createElement("div")), o = (pe.exec(a) || ["", ""])[1].toLowerCase(), l = me[o] || me._default, r.innerHTML = l[1] + S.htmlPrefilter(a) + l[2], u = l[0]; u--;) r = r.lastChild;
            S.merge(h, r.childNodes), (r = c.firstChild).textContent = ""
        } else h.push(t.createTextNode(a));
        for (c.textContent = "", p = 0; a = h[p++];)
            if (n && -1 < S.inArray(a, n)) s && s.push(a);
            else if (d = ae(a), r = ve(c.appendChild(a), "script"), d && ge(r), i)
            for (u = 0; a = r[u++];) fe.test(a.type || "") && i.push(a);
        return c
    }
    ye = E.createDocumentFragment().appendChild(E.createElement("div")), (be = E.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), y.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function Se() {
        return !0
    }

    function ke() {
        return !1
    }

    function Me(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Pe(e, t, i, n, s, a) {
        var r, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (n = n || i, i = void 0), t) Pe(e, o, i, n, t[o], a);
            return e
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = ke;
        else if (!s) return e;
        return 1 === a && (r = s, (s = function(e) {
            return S().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, s, n, i)
        })
    }

    function Ae(e, s, a) {
        a ? (K.set(e, s, !1), S.event.add(e, s, {
            namespace: !1,
            handler: function(e) {
                var t, i, n = K.get(this, s);
                if (1 & e.isTrigger && this[s]) {
                    if (n.length)(S.event.special[s] || {}).delegateType && e.stopPropagation();
                    else if (n = o.call(arguments), K.set(this, s, n), t = a(this, s), this[s](), n !== (i = K.get(this, s)) || t ? K.set(this, s, !1) : i = {}, n !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                } else n.length && (K.set(this, s, {
                    value: S.event.trigger(S.extend(n[0], S.Event.prototype), n.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === K.get(e, s) && S.event.add(e, s, Se)
    }
    S.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var a, r, o, l, d, u, c, h, p, f, m, v = K.get(t);
            if (v)
                for (i.handler && (i = (a = i).handler, s = a.selector), s && S.find.matchesSelector(se, s), i.guid || (i.guid = S.guid++), (l = v.events) || (l = v.events = {}), (r = v.handle) || (r = v.handle = function(e) {
                        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }), d = (e = (e || "").match(N) || [""]).length; d--;) p = m = (o = Ee.exec(e[d]) || [])[1], f = (o[2] || "").split(".").sort(), p && (c = S.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = S.event.special[p] || {}, u = S.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && S.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, a), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), S.event.global[p] = !0)
        },
        remove: function(e, t, i, n, s) {
            var a, r, o, l, d, u, c, h, p, f, m, v = K.hasData(e) && K.get(e);
            if (v && (l = v.events)) {
                for (d = (t = (t || "").match(N) || [""]).length; d--;)
                    if (p = m = (o = Ee.exec(t[d]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                        for (c = S.event.special[p] || {}, h = l[p = (n ? c.delegateType : c.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = h.length; a--;) u = h[a], !s && m !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(a, 1), u.selector && h.delegateCount--, c.remove && c.remove.call(e, u));
                        r && !h.length && (c.teardown && !1 !== c.teardown.call(e, f, v.handle) || S.removeEvent(e, p, v.handle), delete l[p])
                    } else
                        for (p in l) S.event.remove(e, p + t[d], i, n, !0);
                S.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, s, a, r, o = S.event.fix(e),
                l = new Array(arguments.length),
                d = (K.get(this, "events") || {})[o.type] || [],
                u = S.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                for (r = S.event.handlers.call(this, o, d), t = 0;
                    (s = r[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = s.elem, i = 0;
                        (a = s.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !1 !== a.namespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (n = ((S.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var i, n, s, a, r, o = [],
                l = t.delegateCount,
                d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                for (; d !== this; d = d.parentNode || this)
                    if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                        for (a = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = t[i]).selector + " "] && (r[s] = n.needsContext ? -1 < S(s, this).index(d) : S.find(s, this, null, [d]).length), r[s] && a.push(n);
                        a.length && o.push({
                            elem: d,
                            handlers: a
                        })
                    }
            return d = this, l < t.length && o.push({
                elem: d,
                handlers: t.slice(l)
            }), o
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && P(t, "input") && Ae(t, "click", Se), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && P(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && P(t, "input") && K.get(t, "click") || P(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Me), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, s) {
        S.event.special[e] = {
            delegateType: s,
            bindType: s,
            handle: function(e) {
                var t, i = e.relatedTarget,
                    n = e.handleObj;
                return i && (i === this || S.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = s), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, i, n) {
            return Pe(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return Pe(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, s;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, S(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = ke), this.each(function() {
                S.event.remove(this, e, i, t)
            });
            for (s in e) this.off(s, t, e[s]);
            return this
        }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Le = /<script|<style|<link/i,
        ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function $e(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ne(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var i, n, s, a, r, o, l, d;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (a = K.access(e), r = K.set(t, a), d = a.events))
                for (s in delete r.handle, r.events = {}, d)
                    for (i = 0, n = d[s].length; i < n; i++) S.event.add(t, s, d[s][i]);
            Z.hasData(e) && (o = Z.access(e), l = S.extend({}, o), Z.set(t, l))
        }
    }

    function He(i, n, s, a) {
        n = v.apply([], n);
        var e, t, r, o, l, d, u = 0,
            c = i.length,
            h = c - 1,
            p = n[0],
            f = b(p);
        if (f || 1 < c && "string" == typeof p && !y.checkClone && ze.test(p)) return i.each(function(e) {
            var t = i.eq(e);
            f && (n[0] = p.call(this, e, t.html())), He(t, n, s, a)
        });
        if (c && (t = (e = xe(n, i[0].ownerDocument, !1, i, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
            for (o = (r = S.map(ve(e, "script"), $e)).length; u < c; u++) l = e, u !== h && (l = S.clone(l, !0, !0), o && S.merge(r, ve(l, "script"))), s.call(i[u], l, u);
            if (o)
                for (d = r[r.length - 1].ownerDocument, S.map(r, Ne), u = 0; u < o; u++) l = r[u], fe.test(l.type || "") && !K.access(l, "globalEval") && S.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : w(l.textContent.replace(De, ""), l, d))
        }
        return i
    }

    function Be(e, t, i) {
        for (var n, s = t ? S.filter(t, e) : e, a = 0; null != (n = s[a]); a++) i || 1 !== n.nodeType || S.cleanData(ve(n)), n.parentNode && (i && ae(n) && ge(ve(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ie, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, s, a, r, o, l, d, u = e.cloneNode(!0),
                c = ae(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (r = ve(u), n = 0, s = (a = ve(e)).length; n < s; n++) o = a[n], "input" === (d = (l = r[n]).nodeName.toLowerCase()) && he.test(o.type) ? l.checked = o.checked : "input" !== d && "textarea" !== d || (l.defaultValue = o.defaultValue);
            if (t)
                if (i)
                    for (a = a || ve(e), r = r || ve(u), n = 0, s = a.length; n < s; n++) je(a[n], r[n]);
                else je(e, u);
            return 0 < (r = ve(u, "script")).length && ge(r, !c && ve(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, i, n, s = S.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if (Y(i)) {
                    if (t = i[K.expando]) {
                        if (t.events)
                            for (n in t.events) s[n] ? S.event.remove(i, n) : S.removeEvent(i, n, t.handle);
                        i[K.expando] = void 0
                    }
                    i[Z.expando] && (i[Z.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return G(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return G(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, i) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, i)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, r) {
        S.fn[e] = function(e) {
            for (var t, i = [], n = S(e), s = n.length - 1, a = 0; a <= s; a++) t = a === s ? this : this.clone(!0), S(n[a])[r](t), l.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var qe, Re, Fe, Ge, We, _e, Xe, Ve = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Ye = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Ue = new RegExp(ne.join("|"), "i");

    function Ke(e, t, i) {
        var n, s, a, r, o = e.style;
        return (i = i || Ye(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || ae(e) || (r = S.style(e, t)), !y.pixelBoxStyles() && Ve.test(r) && Ue.test(t) && (n = o.width, s = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = i.width, o.width = n, o.minWidth = s, o.maxWidth = a)), void 0 !== r ? r + "" : r
    }

    function Ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Qe() {
        if (Xe) {
            _e.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Xe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(_e).appendChild(Xe);
            var e = C.getComputedStyle(Xe);
            qe = "1%" !== e.top, We = 12 === Je(e.marginLeft), Xe.style.right = "60%", Ge = 36 === Je(e.right), Re = 36 === Je(e.width), Xe.style.position = "absolute", Fe = 12 === Je(Xe.offsetWidth / 3), se.removeChild(_e), Xe = null
        }
    }

    function Je(e) {
        return Math.round(parseFloat(e))
    }
    _e = E.createElement("div"), (Xe = E.createElement("div")).style && (Xe.style.backgroundClip = "content-box", Xe.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Xe.style.backgroundClip, S.extend(y, {
        boxSizingReliable: function() {
            return Qe(), Re
        },
        pixelBoxStyles: function() {
            return Qe(), Ge
        },
        pixelPosition: function() {
            return Qe(), qe
        },
        reliableMarginLeft: function() {
            return Qe(), We
        },
        scrollboxSize: function() {
            return Qe(), Fe
        }
    }));
    var et = ["Webkit", "Moz", "ms"],
        tt = E.createElement("div").style,
        it = {};

    function nt(e) {
        return S.cssProps[e] || it[e] || (e in tt ? e : it[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), i = et.length; i--;)
                if ((e = et[i] + t) in tt) return e
        }(e) || e)
    }
    var st = /^(none|table(?!-c[ea]).+)/,
        at = /^--/,
        rt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ot = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function lt(e, t, i) {
        var n = ie.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function dt(e, t, i, n, s, a) {
        var r = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === i && (l += S.css(e, i + ne[r], !0, s)), n ? ("content" === i && (l -= S.css(e, "padding" + ne[r], !0, s)), "margin" !== i && (l -= S.css(e, "border" + ne[r] + "Width", !0, s))) : (l += S.css(e, "padding" + ne[r], !0, s), "padding" !== i ? l += S.css(e, "border" + ne[r] + "Width", !0, s) : o += S.css(e, "border" + ne[r] + "Width", !0, s));
        return !n && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5)) || 0), l
    }

    function ut(e, t, i) {
        var n = Ye(e),
            s = (!y.boxSizingReliable() || i) && "border-box" === S.css(e, "boxSizing", !1, n),
            a = s,
            r = Ke(e, t, n),
            o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ve.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return (!y.boxSizingReliable() && s || "auto" === r || !parseFloat(r) && "inline" === S.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === S.css(e, "boxSizing", !1, n), (a = o in e) && (r = e[o])), (r = parseFloat(r) || 0) + dt(e, t, i || (s ? "border" : "content"), a, n, r) + "px"
    }

    function ct(e, t, i, n, s) {
        return new ct.prototype.init(e, t, i, n, s)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = Ke(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, a, r, o = V(t),
                    l = at.test(t),
                    d = e.style;
                if (l || (t = nt(o)), r = S.cssHooks[t] || S.cssHooks[o], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(e, !1, n)) ? s : d[t];
                "string" == (a = typeof i) && (s = ie.exec(i)) && s[1] && (i = de(e, t, s), a = "number"), null != i && i == i && ("number" !== a || l || (i += s && s[3] || (S.cssNumber[o] ? "" : "px")), y.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var s, a, r, o = V(t);
            return at.test(t) || (t = nt(o)), (r = S.cssHooks[t] || S.cssHooks[o]) && "get" in r && (s = r.get(e, !0, i)), void 0 === s && (s = Ke(e, t, n)), "normal" === s && t in ot && (s = ot[t]), "" === i || i ? (a = parseFloat(s), !0 === i || isFinite(a) ? a || 0 : s) : s
        }
    }), S.each(["height", "width"], function(e, l) {
        S.cssHooks[l] = {
            get: function(e, t, i) {
                if (t) return !st.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, l, i) : le(e, rt, function() {
                    return ut(e, l, i)
                })
            },
            set: function(e, t, i) {
                var n, s = Ye(e),
                    a = !y.scrollboxSize() && "absolute" === s.position,
                    r = (a || i) && "border-box" === S.css(e, "boxSizing", !1, s),
                    o = i ? dt(e, l, i, r, s) : 0;
                return r && a && (o -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(s[l]) - dt(e, l, "border", !1, s) - .5)), o && (n = ie.exec(t)) && "px" !== (n[3] || "px") && (e.style[l] = t, t = S.css(e, l)), lt(0, t, o)
            }
        }
    }), S.cssHooks.marginLeft = Ze(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(s, a) {
        S.cssHooks[s + a] = {
            expand: function(e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[s + ne[t] + a] = n[t] || n[t - 2] || n[0];
                return i
            }
        }, "margin" !== s && (S.cssHooks[s + a].set = lt)
    }), S.fn.extend({
        css: function(e, t) {
            return G(this, function(e, t, i) {
                var n, s, a = {},
                    r = 0;
                if (Array.isArray(t)) {
                    for (n = Ye(e), s = t.length; r < s; r++) a[t[r]] = S.css(e, t[r], !1, n);
                    return a
                }
                return void 0 !== i ? S.style(e, t, i) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = ct).prototype = {
        constructor: ct,
        init: function(e, t, i, n, s, a) {
            this.elem = e, this.prop = i, this.easing = s || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (S.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = ct.propHooks[this.prop];
            return e && e.get ? e.get(this) : ct.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = ct.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ct.propHooks._default.set(this), this
        }
    }).init.prototype = ct.prototype, (ct.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ct.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = ct.prototype.init, S.fx.step = {};
    var ht, pt, ft, mt, vt = /^(?:toggle|show|hide)$/,
        gt = /queueHooks$/;

    function yt() {
        pt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(yt) : C.setTimeout(yt, S.fx.interval), S.fx.tick())
    }

    function bt() {
        return C.setTimeout(function() {
            ht = void 0
        }), ht = Date.now()
    }

    function wt(e, t) {
        var i, n = 0,
            s = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = ne[n])] = s["padding" + i] = e;
        return t && (s.opacity = s.width = e), s
    }

    function xt(e, t, i) {
        for (var n, s = (Tt.tweeners[t] || []).concat(Tt.tweeners["*"]), a = 0, r = s.length; a < r; a++)
            if (n = s[a].call(i, t, e)) return n
    }

    function Tt(a, e, t) {
        var i, r, n = 0,
            s = Tt.prefilters.length,
            o = S.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = ht || bt(), t = Math.max(0, d.startTime + d.duration - e), i = 1 - (t / d.duration || 0), n = 0, s = d.tweens.length; n < s; n++) d.tweens[n].run(i);
                return o.notifyWith(a, [d, i, t]), i < 1 && s ? t : (s || o.notifyWith(a, [d, 1, 0]), o.resolveWith(a, [d]), !1)
            },
            d = o.promise({
                elem: a,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ht || bt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var i = S.Tween(a, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                    return d.tweens.push(i), i
                },
                stop: function(e) {
                    var t = 0,
                        i = e ? d.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < i; t++) d.tweens[t].run(1);
                    return e ? (o.notifyWith(a, [d, 1, 0]), o.resolveWith(a, [d, e])) : o.rejectWith(a, [d, e]), this
                }
            }),
            u = d.props;
        for (function(e, t) {
                var i, n, s, a, r;
                for (i in e)
                    if (s = t[n = V(i)], a = e[i], Array.isArray(a) && (s = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (r = S.cssHooks[n]) && "expand" in r)
                        for (i in a = r.expand(a), delete e[n], a) i in e || (e[i] = a[i], t[i] = s);
                    else t[n] = s
            }(u, d.opts.specialEasing); n < s; n++)
            if (i = Tt.prefilters[n].call(d, a, u, d.opts)) return b(i.stop) && (S._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
        return S.map(u, xt, d), b(d.opts.start) && d.opts.start.call(a, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), S.fx.timer(S.extend(l, {
            elem: a,
            anim: d,
            queue: d.opts.queue
        })), d
    }
    S.Animation = S.extend(Tt, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return de(i.elem, e, ie.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            for (var i, n = 0, s = (e = b(e) ? (t = e, ["*"]) : e.match(N)).length; n < s; n++) i = e[n], Tt.tweeners[i] = Tt.tweeners[i] || [], Tt.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, s, a, r, o, l, d, u, c = "width" in t || "height" in t,
                h = this,
                p = {},
                f = e.style,
                m = e.nodeType && oe(e),
                v = K.get(e, "fxshow");
            for (n in i.queue || (null == (r = S._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, o = r.empty.fire, r.empty.fire = function() {
                    r.unqueued || o()
                }), r.unqueued++, h.always(function() {
                    h.always(function() {
                        r.unqueued--, S.queue(e, "fx").length || r.empty.fire()
                    })
                })), t)
                if (s = t[n], vt.test(s)) {
                    if (delete t[n], a = a || "toggle" === s, s === (m ? "hide" : "show")) {
                        if ("show" !== s || !v || void 0 === v[n]) continue;
                        m = !0
                    }
                    p[n] = v && v[n] || S.style(e, n)
                }
            if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                for (n in c && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = v && v.display) && (d = K.get(e, "display")), "none" === (u = S.css(e, "display")) && (d ? u = d : (ce([e], !0), d = e.style.display || d, u = S.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === S.css(e, "float") && (l || (h.done(function() {
                        f.display = d
                    }), null == d && (u = f.display, d = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    })), l = !1, p) l || (v ? "hidden" in v && (m = v.hidden) : v = K.access(e, "fxshow", {
                    display: d
                }), a && (v.hidden = !m), m && ce([e], !0), h.done(function() {
                    for (n in m || ce([e]), K.remove(e, "fxshow"), p) S.style(e, n, p[n])
                })), l = xt(m ? v[n] : 0, n, h), n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? Tt.prefilters.unshift(e) : Tt.prefilters.push(e)
        }
    }), S.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? S.extend({}, e) : {
            complete: i || !i && t || b(e) && e,
            duration: e,
            easing: i && t || t && !b(t) && t
        };
        return S.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in S.fx.speeds ? n.duration = S.fx.speeds[n.duration] : n.duration = S.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            b(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue)
        }, n
    }, S.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(t, e, i, n) {
            function s() {
                var e = Tt(this, S.extend({}, t), r);
                (a || K.get(this, "finish")) && e.stop(!0)
            }
            var a = S.isEmptyObject(t),
                r = S.speed(e, i, n);
            return s.finish = s, a || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(s, e, a) {
            function r(e) {
                var t = e.stop;
                delete e.stop, t(a)
            }
            return "string" != typeof s && (a = e, e = s, s = void 0), e && !1 !== s && this.queue(s || "fx", []), this.each(function() {
                var e = !0,
                    t = null != s && s + "queueHooks",
                    i = S.timers,
                    n = K.get(this);
                if (t) n[t] && n[t].stop && r(n[t]);
                else
                    for (t in n) n[t] && n[t].stop && gt.test(t) && r(n[t]);
                for (t = i.length; t--;) i[t].elem !== this || null != s && i[t].queue !== s || (i[t].anim.stop(a), e = !1, i.splice(t, 1));
                !e && a || S.dequeue(this, s)
            })
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"), this.each(function() {
                var e, t = K.get(this),
                    i = t[r + "queue"],
                    n = t[r + "queueHooks"],
                    s = S.timers,
                    a = i ? i.length : 0;
                for (t.finish = !0, S.queue(this, r, []), n && n.stop && n.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === r && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, n) {
        var s = S.fn[n];
        S.fn[n] = function(e, t, i) {
            return null == e || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(wt(n, !0), e, t, i)
        }
    }), S.each({
        slideDown: wt("show"),
        slideUp: wt("hide"),
        slideToggle: wt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, n) {
        S.fn[e] = function(e, t, i) {
            return this.animate(n, e, t, i)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            i = S.timers;
        for (ht = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || S.fx.stop(), ht = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        pt || (pt = !0, yt())
    }, S.fx.stop = function() {
        pt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(n, e) {
        return n = S.fx && S.fx.speeds[n] || n, e = e || "fx", this.queue(e, function(e, t) {
            var i = C.setTimeout(e, n);
            t.stop = function() {
                C.clearTimeout(i)
            }
        })
    }, ft = E.createElement("input"), mt = E.createElement("select").appendChild(E.createElement("option")), ft.type = "checkbox", y.checkOn = "" !== ft.value, y.optSelected = mt.selected, (ft = E.createElement("input")).value = "t", ft.type = "radio", y.radioValue = "t" === ft.value;
    var Ct, Et = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return G(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, i) {
            var n, s, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? S.prop(e, t, i) : (1 === a && S.isXMLDoc(e) || (s = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? Ct : void 0)), void 0 !== i ? null === i ? void S.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : !(s && "get" in s && null !== (n = s.get(e, t))) && null == (n = S.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && P(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                s = t && t.match(N);
            if (s && 1 === e.nodeType)
                for (; i = s[n++];) e.removeAttribute(i)
        }
    }), Ct = {
        set: function(e, t, i) {
            return !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = Et[t] || S.find.attr;
        Et[t] = function(e, t, i) {
            var n, s, a = t.toLowerCase();
            return i || (s = Et[a], Et[a] = n, n = null != r(e, t, i) ? a : null, Et[a] = s), n
        }
    });
    var St = /^(?:input|select|textarea|button)$/i,
        kt = /^(?:a|area)$/i;

    function Mt(e) {
        return (e.match(N) || []).join(" ")
    }

    function Pt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function At(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return G(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, i) {
            var n, s, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && S.isXMLDoc(e) || (t = S.propFix[t] || t, s = S.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, i, n, s, a, r, o, l = 0;
            if (b(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, Pt(this)))
            });
            if ((e = At(t)).length)
                for (; i = this[l++];)
                    if (s = Pt(i), n = 1 === i.nodeType && " " + Mt(s) + " ") {
                        for (r = 0; a = e[r++];) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                        s !== (o = Mt(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, a, r, o, l = 0;
            if (b(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, Pt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = At(t)).length)
                for (; i = this[l++];)
                    if (s = Pt(i), n = 1 === i.nodeType && " " + Mt(s) + " ") {
                        for (r = 0; a = e[r++];)
                            for (; - 1 < n.indexOf(" " + a + " ");) n = n.replace(" " + a + " ", " ");
                        s !== (o = Mt(n)) && i.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(s, t) {
            var a = typeof s,
                r = "string" == a || Array.isArray(s);
            return "boolean" == typeof t && r ? t ? this.addClass(s) : this.removeClass(s) : b(s) ? this.each(function(e) {
                S(this).toggleClass(s.call(this, e, Pt(this), t), t)
            }) : this.each(function() {
                var e, t, i, n;
                if (r)
                    for (t = 0, i = S(this), n = At(s); e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else void 0 !== s && "boolean" != a || ((e = Pt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== s && K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + Mt(Pt(i)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var It = /\r/g;
    S.fn.extend({
        val: function(i) {
            var n, e, s, t = this[0];
            return arguments.length ? (s = b(i), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = s ? i.call(this, e, S(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : t ? (n = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(It, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : Mt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, s = e.options,
                        a = e.selectedIndex,
                        r = "select-one" === e.type,
                        o = r ? null : [],
                        l = r ? a + 1 : s.length;
                    for (n = a < 0 ? l : r ? a : 0; n < l; n++)
                        if (((i = s[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !P(i.parentNode, "optgroup"))) {
                            if (t = S(i).val(), r) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var i, n, s = e.options, a = S.makeArray(t), r = s.length; r--;)((n = s[r]).selected = -1 < S.inArray(S.valHooks.option.get(n), a)) && (i = !0);
                    return i || (e.selectedIndex = -1), a
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;

    function Lt(e) {
        e.stopPropagation()
    }
    var zt = /^(?:focusinfocus|focusoutblur)$/;
    S.extend(S.event, {
        trigger: function(e, t, i, n) {
            var s, a, r, o, l, d, u, c, h = [i || E],
                p = g.call(e, "type") ? e.type : e,
                f = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = r = i = i || E, 3 !== i.nodeType && 8 !== i.nodeType && !zt.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[S.expando] ? e : new S.Event(p, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : S.makeArray(t, [e]), u = S.event.special[p] || {}, n || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                if (!n && !u.noBubble && !m(i)) {
                    for (o = u.delegateType || p, zt.test(o + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), r = a;
                    r === (i.ownerDocument || E) && h.push(r.defaultView || r.parentWindow || C)
                }
                for (s = 0;
                    (a = h[s++]) && !e.isPropagationStopped();) c = a, e.type = 1 < s ? o : u.bindType || p, (d = (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) && d.apply(a, t), (d = l && a[l]) && d.apply && Y(a) && (e.result = d.apply(a, t), !1 === e.result && e.preventDefault());
                return e.type = p, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !Y(i) || l && b(i[p]) && !m(i) && ((r = i[l]) && (i[l] = null), S.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, Lt), i[p](), e.isPropagationStopped() && c.removeEventListener(p, Lt), S.event.triggered = void 0, r && (i[l] = r)), e.result
            }
        },
        simulate: function(e, t, i) {
            var n = S.extend(new S.Event, i, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(n, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return S.event.trigger(e, t, i, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        function s(e) {
            S.event.simulate(n, e.target, S.event.fix(e))
        }
        S.event.special[n] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, n);
                t || e.addEventListener(i, s, !0), K.access(e, n, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, n) - 1;
                t ? K.access(e, n, t) : (e.removeEventListener(i, s, !0), K.remove(e, n))
            }
        }
    });
    var Dt = C.location,
        Ot = Date.now(),
        $t = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var Nt = /\[\]$/,
        jt = /\r?\n/g,
        Ht = /^(?:submit|button|image|reset|file)$/i,
        Bt = /^(?:input|select|textarea|keygen)/i;

    function qt(i, e, n, s) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            n || Nt.test(i) ? s(i, t) : qt(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, s)
        });
        else if (n || "object" !== x(e)) s(i, e);
        else
            for (t in e) qt(i + "[" + t + "]", e[t], n, s)
    }
    S.param = function(e, t) {
        function i(e, t) {
            var i = b(t) ? t() : t;
            s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        }
        var n, s = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) qt(n, e[n], t, i);
        return s.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Bt.test(this.nodeName) && !Ht.test(e) && (this.checked || !he.test(e))
            }).map(function(e, t) {
                var i = S(this).val();
                return null == i ? null : Array.isArray(i) ? S.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(jt, "\r\n")
                }
            }).get()
        }
    });
    var Rt = /%20/g,
        Ft = /#.*$/,
        Gt = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _t = /^(?:GET|HEAD)$/,
        Xt = /^\/\//,
        Vt = {},
        Yt = {},
        Ut = "*/".concat("*"),
        Kt = E.createElement("a");

    function Zt(a) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var i, n = 0,
                s = e.toLowerCase().match(N) || [];
            if (b(t))
                for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (a[i] = a[i] || []).unshift(t)) : (a[i] = a[i] || []).push(t)
        }
    }

    function Qt(t, s, a, r) {
        var o = {},
            l = t === Yt;

        function d(e) {
            var n;
            return o[e] = !0, S.each(t[e] || [], function(e, t) {
                var i = t(s, a, r);
                return "string" != typeof i || l || o[i] ? l ? !(n = i) : void 0 : (s.dataTypes.unshift(i), d(i), !1)
            }), n
        }
        return d(s.dataTypes[0]) || !o["*"] && d("*")
    }

    function Jt(e, t) {
        var i, n, s = S.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((s[i] ? e : n = n || {})[i] = t[i]);
        return n && S.extend(!0, e, n), e
    }
    Kt.href = Dt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Jt(Jt(e, S.ajaxSettings), t) : Jt(S.ajaxSettings, e)
        },
        ajaxPrefilter: Zt(Vt),
        ajaxTransport: Zt(Yt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, c, h, i, p, n, f, m, s, a, v = S.ajaxSetup({}, t),
                g = v.context || v,
                y = v.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                b = S.Deferred(),
                w = S.Callbacks("once memory"),
                x = v.statusCode || {},
                r = {},
                o = {},
                l = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (f) {
                            if (!i)
                                for (i = {}; t = Wt.exec(h);) i[t[1].toLowerCase() + " "] = (i[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = i[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return f ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == f && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e, r[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == f && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (f) T.always(e[T.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return u && u.abort(t), d(0, t), this
                    }
                };
            if (b.promise(T), v.url = ((e || v.url || Dt.href) + "").replace(Xt, Dt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(N) || [""], null == v.crossDomain) {
                n = E.createElement("a");
                try {
                    n.href = v.url, n.href = n.href, v.crossDomain = Kt.protocol + "//" + Kt.host != n.protocol + "//" + n.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Qt(Vt, v, t, T), f) return T;
            for (s in (m = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !_t.test(v.type), c = v.url.replace(Ft, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Rt, "+")) : (a = v.url.slice(c.length), v.data && (v.processData || "string" == typeof v.data) && (c += ($t.test(c) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (c = c.replace(Gt, "$1"), a = ($t.test(c) ? "&" : "?") + "_=" + Ot++ + a), v.url = c + a), v.ifModified && (S.lastModified[c] && T.setRequestHeader("If-Modified-Since", S.lastModified[c]), S.etag[c] && T.setRequestHeader("If-None-Match", S.etag[c])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(s, v.headers[s]);
            if (v.beforeSend && (!1 === v.beforeSend.call(g, T, v) || f)) return T.abort();
            if (l = "abort", w.add(v.complete), T.done(v.success), T.fail(v.error), u = Qt(Yt, v, t, T)) {
                if (T.readyState = 1, m && y.trigger("ajaxSend", [T, v]), f) return T;
                v.async && 0 < v.timeout && (p = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    f = !1, u.send(r, d)
                } catch (e) {
                    if (f) throw e;
                    d(-1, e)
                }
            } else d(-1, "No Transport");

            function d(e, t, i, n) {
                var s, a, r, o, l, d = t;
                f || (f = !0, p && C.clearTimeout(p), u = void 0, h = n || "", T.readyState = 0 < e ? 4 : 0, s = 200 <= e && e < 300 || 304 === e, i && (o = function(e, t, i) {
                    for (var n, s, a, r, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in o)
                            if (o[s] && o[s].test(n)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in i) a = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                a = s;
                                break
                            }
                            r = r || s
                        }
                        a = a || r
                    }
                    if (a) return a !== l[0] && l.unshift(a), i[a]
                }(v, T, i)), o = function(e, t, i, n) {
                    var s, a, r, o, l, d = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
                    for (a = u.shift(); a;)
                        if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(r = d[l + " " + a] || d["* " + a]))
                            for (s in d)
                                if ((o = s.split(" "))[1] === a && (r = d[l + " " + o[0]] || d["* " + o[0]])) {
                                    !0 === r ? r = d[s] : !0 !== d[s] && (a = o[0], u.unshift(o[1]));
                                    break
                                }
                        if (!0 !== r)
                            if (r && e.throws) t = r(t);
                            else try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, o, T, s), s ? (v.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (S.lastModified[c] = l), (l = T.getResponseHeader("etag")) && (S.etag[c] = l)), 204 === e || "HEAD" === v.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = o.state, a = o.data, s = !(r = o.error))) : (r = d, !e && d || (d = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || d) + "", s ? b.resolveWith(g, [a, d, T]) : b.rejectWith(g, [T, d, r]), T.statusCode(x), x = void 0, m && y.trigger(s ? "ajaxSuccess" : "ajaxError", [T, v, s ? a : r]), w.fireWith(g, [T, d]), m && (y.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, i) {
            return S.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, s) {
        S[s] = function(e, t, i, n) {
            return b(t) && (n = n || i, i = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: s,
                dataType: n,
                data: t,
                success: i
            }, S.isPlainObject(e) && e))
        }
    }), S._evalUrl = function(e, t) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(i) {
            return b(i) ? this.each(function(e) {
                S(this).wrapInner(i.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        },
        wrap: function(t) {
            var i = b(t);
            return this.each(function(e) {
                S(this).wrapAll(i ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var ei = {
            0: 200,
            1223: 204
        },
        ti = S.ajaxSettings.xhr();
    y.cors = !!ti && "withCredentials" in ti, y.ajax = ti = !!ti, S.ajaxTransport(function(s) {
        var a, r;
        if (y.cors || ti && !s.crossDomain) return {
            send: function(e, t) {
                var i, n = s.xhr();
                if (n.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
                    for (i in s.xhrFields) n[i] = s.xhrFields[i];
                for (i in s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType), s.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
                a = function(e) {
                    return function() {
                        a && (a = r = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(ei[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = a(), r = n.onerror = n.ontimeout = a("error"), void 0 !== n.onabort ? n.onabort = r : n.onreadystatechange = function() {
                    4 === n.readyState && C.setTimeout(function() {
                        a && r()
                    })
                }, a = a("abort");
                try {
                    n.send(s.hasContent && s.data || null)
                } catch (e) {
                    if (a) throw e
                }
            },
            abort: function() {
                a && a()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(i) {
        var n, s;
        if (i.crossDomain || i.scriptAttrs) return {
            send: function(e, t) {
                n = S("<script>").attr(i.scriptAttrs || {}).prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", s = function(e) {
                    n.remove(), s = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(n[0])
            },
            abort: function() {
                s && s()
            }
        }
    });
    var ii, ni = [],
        si = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ni.pop() || S.expando + "_" + Ot++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, i) {
        var n, s, a, r = !1 !== e.jsonp && (si.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && si.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(si, "$1" + n) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
            return a || S.error(n + " was not called"), a[0]
        }, e.dataTypes[0] = "json", s = C[n], C[n] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === s ? S(C).removeProp(n) : C[n] = s, e[n] && (e.jsonpCallback = t.jsonpCallback, ni.push(n)), a && b(s) && s(a[0]), a = s = void 0
        }), "script"
    }), y.createHTMLDocument = ((ii = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ii.childNodes.length), S.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (y.createHTMLDocument ? ((n = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(n)) : t = E), a = !i && [], (s = A.exec(e)) ? [t.createElement(s[1])] : (s = xe([e], t, a), a && a.length && S(a).remove(), S.merge([], s.childNodes)));
        var n, s, a
    }, S.fn.load = function(e, t, i) {
        var n, s, a, r = this,
            o = e.indexOf(" ");
        return -1 < o && (n = Mt(e.slice(o)), e = e.slice(0, o)), b(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < r.length && S.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, r.html(n ? S("<div>").append(S.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            r.each(function() {
                i.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, i) {
            var n, s, a, r, o, l, d = S.css(e, "position"),
                u = S(e),
                c = {};
            "static" === d && (e.style.position = "relative"), o = u.offset(), a = S.css(e, "top"), l = S.css(e, "left"), s = ("absolute" === d || "fixed" === d) && -1 < (a + l).indexOf("auto") ? (r = (n = u.position()).top, n.left) : (r = parseFloat(a) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, i, S.extend({}, o))), null != t.top && (c.top = t.top - o.top + r), null != t.left && (c.left = t.left - o.left + s), "using" in t ? t.using.call(e, c) : u.css(c)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(n, "position")) t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((s = S(e).offset()).top += S.css(e, "borderTopWidth", !0), s.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - s.top - S.css(n, "marginTop", !0),
                    left: t.left - s.left - S.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                return e || se
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, s) {
        var a = "pageYOffset" === s;
        S.fn[t] = function(e) {
            return G(this, function(e, t, i) {
                var n;
                if (m(e) ? n = e : 9 === e.nodeType && (n = e.defaultView), void 0 === i) return n ? n[s] : e[t];
                n ? n.scrollTo(a ? n.pageXOffset : i, a ? i : n.pageYOffset) : e[t] = i
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, i) {
        S.cssHooks[i] = Ze(y.pixelPosition, function(e, t) {
            if (t) return t = Ke(e, i), Ve.test(t) ? S(e).position()[i] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(r, o) {
        S.each({
            padding: "inner" + r,
            content: o,
            "": "outer" + r
        }, function(n, a) {
            S.fn[a] = function(e, t) {
                var i = arguments.length && (n || "boolean" != typeof e),
                    s = n || (!0 === e || !0 === t ? "margin" : "border");
                return G(this, function(e, t, i) {
                    var n;
                    return m(e) ? 0 === a.indexOf("outer") ? e["inner" + r] : e.document.documentElement["client" + r] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + r], n["scroll" + r], e.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? S.css(e, t, s) : S.style(e, t, i, s)
                }, o, i ? e : void 0, i)
            }
        })
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
        S.fn[i] = function(e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }), S.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), S.proxy = function(e, t) {
        var i, n, s;
        if ("string" == typeof t && (i = e[t], t = e, e = i), b(e)) return n = o.call(arguments, 2), (s = function() {
            return e.apply(t || this, n.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, s
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = P, S.isFunction = b, S.isWindow = m, S.camelCase = V, S.type = x, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var ai = C.jQuery,
        ri = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = ri), e && C.jQuery === S && (C.jQuery = ai), S
    }, e || (C.jQuery = C.$ = S), S
}),
function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return e.svg4everybody = t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, function() {
    function v(e, t, i) {
        if (i) {
            var n = document.createDocumentFragment(),
                s = !t.hasAttribute("viewBox") && i.getAttribute("viewBox");
            s && t.setAttribute("viewBox", s);
            for (var a = i.cloneNode(!0); a.childNodes.length;) n.appendChild(a.firstChild);
            e.appendChild(n)
        }
    }

    function g(n) {
        n.onreadystatechange = function() {
            if (4 === n.readyState) {
                var i = n._cachedDocument;
                i || ((i = n._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = n.responseText, n._cachedTarget = {}), n._embeds.splice(0).map(function(e) {
                    var t = n._cachedTarget[e.id];
                    t = t || (n._cachedTarget[e.id] = i.getElementById(e.id)), v(e.parent, e.svg, t)
                })
            }
        }, n.onreadystatechange()
    }

    function y(e) {
        for (var t = e;
            "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
        return t
    }
    return function(e) {
        var u, c = Object(e),
            t = window.top !== window.self;
        u = "polyfill" in c ? c.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && t;
        var h = {},
            p = window.requestAnimationFrame || setTimeout,
            f = document.getElementsByTagName("use"),
            m = 0;
        u && function e() {
            for (var t = 0; t < f.length;) {
                var i = f[t],
                    n = i.parentNode,
                    s = y(n),
                    a = i.getAttribute("xlink:href") || i.getAttribute("href");
                if (!a && c.attributeName && (a = i.getAttribute(c.attributeName)), s && a) {
                    if (u)
                        if (!c.validate || c.validate(a, s, i)) {
                            n.removeChild(i);
                            var r = a.split("#"),
                                o = r.shift(),
                                l = r.join("#");
                            if (o.length) {
                                var d = h[o];
                                d || ((d = h[o] = new XMLHttpRequest).open("GET", o), d.send(), d._embeds = []), d._embeds.push({
                                    parent: n,
                                    svg: s,
                                    id: l
                                }), g(d)
                            } else v(n, s, document.getElementById(l))
                        } else ++t, ++m
                } else ++t
            }(!f.length || 0 < f.length - m) && p(e, 67)
        }()
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function() {
    "use strict";
    var m = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        se = "undefined" == typeof window ? {
            document: m,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        l = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function I(e, t) {
        var i = [],
            n = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var s, a, r = e.trim();
                if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
                    var o = "div";
                    for (0 === r.indexOf("<li") && (o = "ul"), 0 === r.indexOf("<tr") && (o = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (o = "tr"), 0 === r.indexOf("<tbody") && (o = "table"), 0 === r.indexOf("<option") && (o = "select"), (a = m.createElement(o)).innerHTML = r, n = 0; n < a.childNodes.length; n += 1) i.push(a.childNodes[n])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || m).querySelectorAll(e.trim()) : [m.getElementById(e.trim().split("#")[1])], n = 0; n < s.length; n += 1) s[n] && i.push(s[n])
            } else if (e.nodeType || e === se || e === m) i.push(e);
        else if (0 < e.length && e[0].nodeType)
            for (n = 0; n < e.length; n += 1) i.push(e[n]);
        return new l(i)
    }

    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    I.fn = l.prototype, I.Class = l, I.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1)
                if (2 === i.length) this[n].setAttribute(e, t);
                else
                    for (var s in e) this[n][s] = e[s], this[n].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i = e[0],
                a = e[1],
                r = e[2],
                n = e[3];

            function s(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), I(t).is(a)) r.apply(t, i);
                    else
                        for (var n = I(t).parents(), s = 0; s < n.length; s += 1) I(n[s]).is(a) && r.apply(n[s], i)
                }
            }

            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            "function" == typeof e[1] && (i = e[0], r = e[1], n = e[2], a = void 0), n = n || !1;
            for (var l, d = i.split(" "), u = 0; u < this.length; u += 1) {
                var c = this[u];
                if (a)
                    for (l = 0; l < d.length; l += 1) {
                        var h = d[l];
                        c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
                            listener: r,
                            proxyListener: s
                        }), c.addEventListener(h, s, n)
                    } else
                        for (l = 0; l < d.length; l += 1) {
                            var p = d[l];
                            c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[p] || (c.dom7Listeners[p] = []), c.dom7Listeners[p].push({
                                listener: r,
                                proxyListener: o
                            }), c.addEventListener(p, o, n)
                        }
            }
            return this
        },
        off: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i = e[0],
                n = e[1],
                s = e[2],
                a = e[3];
            "function" == typeof e[1] && (i = e[0], s = e[1], a = e[2], n = void 0), a = a || !1;
            for (var r = i.split(" "), o = 0; o < r.length; o += 1)
                for (var l = r[o], d = 0; d < this.length; d += 1) {
                    var u = this[d],
                        c = void 0;
                    if (!n && u.dom7Listeners ? c = u.dom7Listeners[l] : n && u.dom7LiveListeners && (c = u.dom7LiveListeners[l]), c && c.length)
                        for (var h = c.length - 1; 0 <= h; --h) {
                            var p = c[h];
                            (s && p.listener === s || s && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === s || !s) && (u.removeEventListener(l, p.proxyListener, a), c.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = e[0].split(" "), n = e[1], s = 0; s < i.length; s += 1)
                for (var a = i[s], r = 0; r < this.length; r += 1) {
                    var o = this[r],
                        l = void 0;
                    try {
                        l = new se.CustomEvent(a, {
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = m.createEvent("Event")).initEvent(a, !0, !0), l.detail = n
                    }
                    o.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var i, n = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function a(e) {
                if (e.target === this)
                    for (t.call(this, e), i = 0; i < n.length; i += 1) s.off(n[i], a)
            }
            if (t)
                for (i = 0; i < n.length; i += 1) s.on(n[i], a);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    i = m.body,
                    n = e.clientTop || i.clientTop || 0,
                    s = e.clientLeft || i.clientLeft || 0,
                    a = e === se ? se.scrollY : e.scrollTop,
                    r = e === se ? se.scrollX : e.scrollLeft;
                return {
                    top: t.top + a - n,
                    left: t.left + r - s
                }
            }
            return null
        },
        css: function(e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var n in e) this[i].style[n] = e[n];
                    return this
                }
                if (this[0]) return se.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e) return this;
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, i, n = this[0];
            if (!n || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (n.matches) return n.matches(e);
                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                if (n.msMatchesSelector) return n.msMatchesSelector(e);
                for (t = I(e), i = 0; i < t.length; i += 1)
                    if (t[i] === n) return !0;
                return !1
            }
            if (e === m) return n === m;
            if (e === se) return n === se;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                    if (t[i] === n) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, i = this.length;
            return new l(i - 1 < e ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            for (var n = 0; n < t.length; n += 1) {
                e = t[n];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var a = m.createElement("div");
                        for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                    } else if (e instanceof l)
                    for (var r = 0; r < e.length; r += 1) this[s].appendChild(e[r]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, i;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var n = m.createElement("div");
                    for (n.innerHTML = e, i = n.childNodes.length - 1; 0 <= i; --i) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof l)
                for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && I(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = [],
                i = this[0];
            if (!i) return new l([]);
            for (; i.nextElementSibling;) {
                var n = i.nextElementSibling;
                e && !I(n).is(e) || t.push(n), i = n
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && I(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = [],
                i = this[0];
            if (!i) return new l([]);
            for (; i.previousElementSibling;) {
                var n = i.previousElementSibling;
                e && !I(n).is(e) || t.push(n), i = n
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1) null === this[i].parentNode || e && !I(this[i].parentNode).is(e) || t.push(this[i].parentNode);
            return I(a(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].parentNode; n;) e && !I(n).is(e) || t.push(n), n = n.parentNode;
            return I(a(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].querySelectorAll(e), s = 0; s < n.length; s += 1) t.push(n[s]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].childNodes, s = 0; s < n.length; s += 1) e ? 1 === n[s].nodeType && I(n[s]).is(e) && t.push(n[s]) : 1 === n[s].nodeType && t.push(n[s]);
            return new l(a(t))
        },
        filter: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1) e.call(this[i], i, this[i]) && t.push(this[i]);
            return new l(t)
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, n;
            for (i = 0; i < e.length; i += 1) {
                var s = I(e[i]);
                for (n = 0; n < s.length; n += 1) this[this.length] = s[n], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? se.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        I.fn[e] = I.fn[e] || t[e]
    });

    function e(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }
    var ae = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                var i, n, s;
                void 0 === t && (t = "x");
                var a = se.getComputedStyle(e, null);
                return se.WebKitCSSMatrix ? (6 < (n = a.transform || a.webkitTransform).split(",").length && (n = n.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), s = new se.WebKitCSSMatrix("none" === n ? "" : n)) : i = (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = se.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = se.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
            },
            parseUrlQuery: function(e) {
                var t, i, n, s, a = {},
                    r = e || se.location.href;
                if ("string" == typeof r && r.length)
                    for (s = (i = (r = -1 < r.indexOf("?") ? r.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, t = 0; t < s; t += 1) n = i[t].replace(/#\S+/g, "").split("="), a[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
                return a
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                    var s = e[n];
                    if (null != s)
                        for (var a = Object.keys(Object(s)), r = 0, o = a.length; r < o; r += 1) {
                            var l = a[r],
                                d = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== d && d.enumerable && (ae.isObject(i[l]) && ae.isObject(s[l]) ? ae.extend(i[l], s[l]) : !ae.isObject(i[l]) && ae.isObject(s[l]) ? (i[l] = {}, ae.extend(i[l], s[l])) : i[l] = s[l])
                        }
                }
                return i
            }
        },
        E = {
            touch: se.Modernizr && !0 === se.Modernizr.touch || !!(0 < se.navigator.maxTouchPoints || "ontouchstart" in se || se.DocumentTouch && m instanceof se.DocumentTouch),
            pointerEvents: !!se.PointerEvent && "maxTouchPoints" in se.navigator && 0 < se.navigator.maxTouchPoints,
            observer: "MutationObserver" in se || "WebkitMutationObserver" in se,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    se.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in se
        },
        i = {
            components: {
                configurable: !0
            }
        };
    e.prototype.on = function(e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;
        var s = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t)
        }), n
    }, e.prototype.once = function(i, n, e) {
        var s = this;
        if ("function" != typeof n) return s;

        function a() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            s.off(i, a), a.f7proxy && delete a.f7proxy, n.apply(s, e)
        }
        return a.f7proxy = n, s.on(i, a, e)
    }, e.prototype.off = function(e, n) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function(i) {
            void 0 === n ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].length && s.eventsListeners[i].forEach(function(e, t) {
                (e === n || e.f7proxy && e.f7proxy === n) && s.eventsListeners[i].splice(t, 1)
            })
        }), s
    }, e.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, n, s, a = this;
        return a.eventsListeners && (s = "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), a) : (i = e[0].events, n = e[0].data, e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (a.eventsListeners && a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(s, n)
                })
            }
        })), a
    }, e.prototype.useModulesParams = function(i) {
        var n = this;
        n.modules && Object.keys(n.modules).forEach(function(e) {
            var t = n.modules[e];
            t.params && ae.extend(i, t.params)
        })
    }, e.prototype.useModules = function(n) {
        void 0 === n && (n = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function(e) {
            var i = s.modules[e],
                t = n[e] || {};
            i.instance && Object.keys(i.instance).forEach(function(e) {
                var t = i.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }), i.on && s.on && Object.keys(i.on).forEach(function(e) {
                s.on(e, i.on[e])
            }), i.create && i.create.bind(s)(t)
        })
    }, i.components.set = function(e) {
        this.use && this.use(e)
    }, e.installModule = function(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var s = t.name || Object.keys(n.prototype.modules).length + "_" + ae.now();
        return (n.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
            n.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function(e) {
            n[e] = t.static[e]
        }), t.install && t.install.apply(n, e), n
    }, e.use = function(e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return n.installModule(e)
        }), n) : n.installModule.apply(n, [e].concat(t))
    }, Object.defineProperties(e, i);
    var n, s, r, o, d, u, c, h, p, f, v, g, y, b, w, x = {
            updateSize: function() {
                var e, t, i = this.$el;
                e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ae.extend(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t
                }))
            },
            updateSlides: function() {
                var t = this.params,
                    e = this.$wrapperEl,
                    i = this.size,
                    n = this.rtlTranslate,
                    s = this.wrongRTL,
                    a = this.virtual && t.virtual.enabled,
                    r = a ? this.virtual.slides.length : this.slides.length,
                    o = e.children("." + this.params.slideClass),
                    l = a ? this.virtual.slides.length : o.length,
                    d = [],
                    u = [],
                    c = [];

                function h(e) {
                    return !t.cssMode || e !== o.length - 1
                }
                var p = t.slidesOffsetBefore;
                "function" == typeof p && (p = t.slidesOffsetBefore.call(this));
                var f = t.slidesOffsetAfter;
                "function" == typeof f && (f = t.slidesOffsetAfter.call(this));
                var m = this.snapGrid.length,
                    v = this.snapGrid.length,
                    g = t.spaceBetween,
                    y = -p,
                    b = 0,
                    w = 0;
                if (void 0 !== i) {
                    var x, T;
                    "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), this.virtualSize = -g, n ? o.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : o.css({
                        marginRight: "",
                        marginBottom: ""
                    }), 1 < t.slidesPerColumn && (x = Math.floor(l / t.slidesPerColumn) === l / this.params.slidesPerColumn ? l : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                    for (var C, E = t.slidesPerColumn, S = x / E, k = Math.floor(l / t.slidesPerColumn), M = 0; M < l; M += 1) {
                        T = 0;
                        var P = o.eq(M);
                        if (1 < t.slidesPerColumn) {
                            var A = void 0,
                                I = void 0,
                                L = void 0;
                            if ("row" === t.slidesPerColumnFill && 1 < t.slidesPerGroup) {
                                var z = Math.floor(M / (t.slidesPerGroup * t.slidesPerColumn)),
                                    D = M - t.slidesPerColumn * t.slidesPerGroup * z,
                                    O = 0 === z ? t.slidesPerGroup : Math.min(Math.ceil((l - z * E * t.slidesPerGroup) / E), t.slidesPerGroup);
                                A = (I = D - (L = Math.floor(D / O)) * O + z * t.slidesPerGroup) + L * x / E, P.css({
                                    "-webkit-box-ordinal-group": A,
                                    "-moz-box-ordinal-group": A,
                                    "-ms-flex-order": A,
                                    "-webkit-order": A,
                                    order: A
                                })
                            } else "column" === t.slidesPerColumnFill ? (L = M - (I = Math.floor(M / E)) * E, (k < I || I === k && L === E - 1) && (L += 1) >= E && (L = 0, I += 1)) : I = M - (L = Math.floor(M / S)) * S;
                            P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px")
                        }
                        if ("none" !== P.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                var $ = se.getComputedStyle(P[0], null),
                                    N = P[0].style.transform,
                                    j = P[0].style.webkitTransform;
                                if (N && (P[0].style.transform = "none"), j && (P[0].style.webkitTransform = "none"), t.roundLengths) T = this.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                                else if (this.isHorizontal()) {
                                    var H = parseFloat($.getPropertyValue("width")),
                                        B = parseFloat($.getPropertyValue("padding-left")),
                                        q = parseFloat($.getPropertyValue("padding-right")),
                                        R = parseFloat($.getPropertyValue("margin-left")),
                                        F = parseFloat($.getPropertyValue("margin-right")),
                                        G = $.getPropertyValue("box-sizing");
                                    T = G && "border-box" === G ? H + R + F : H + B + q + R + F
                                } else {
                                    var W = parseFloat($.getPropertyValue("height")),
                                        _ = parseFloat($.getPropertyValue("padding-top")),
                                        X = parseFloat($.getPropertyValue("padding-bottom")),
                                        V = parseFloat($.getPropertyValue("margin-top")),
                                        Y = parseFloat($.getPropertyValue("margin-bottom")),
                                        U = $.getPropertyValue("box-sizing");
                                    T = U && "border-box" === U ? W + V + Y : W + _ + X + V + Y
                                }
                                N && (P[0].style.transform = N), j && (P[0].style.webkitTransform = j), t.roundLengths && (T = Math.floor(T))
                            } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), o[M] && (this.isHorizontal() ? o[M].style.width = T + "px" : o[M].style.height = T + "px");
                            o[M] && (o[M].swiperSlideSize = T), c.push(T), t.centeredSlides ? (y = y + T / 2 + b / 2 + g, 0 === b && 0 !== M && (y = y - i / 2 - g), 0 === M && (y = y - i / 2 - g), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), w % t.slidesPerGroup == 0 && d.push(y), u.push(y)) : (t.roundLengths && (y = Math.floor(y)), (w - Math.min(this.params.slidesPerGroupSkip, w)) % this.params.slidesPerGroup == 0 && d.push(y), u.push(y), y = y + T + g), this.virtualSize += T + g, b = T, w += 1
                        }
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, i) + f, n && s && ("slide" === t.effect || "coverflow" === t.effect) && e.css({
                            width: this.virtualSize + t.spaceBetween + "px"
                        }), t.setWrapperSize && (this.isHorizontal() ? e.css({
                            width: this.virtualSize + t.spaceBetween + "px"
                        }) : e.css({
                            height: this.virtualSize + t.spaceBetween + "px"
                        })), 1 < t.slidesPerColumn && (this.virtualSize = (T + t.spaceBetween) * x, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? e.css({
                            width: this.virtualSize + t.spaceBetween + "px"
                        }) : e.css({
                            height: this.virtualSize + t.spaceBetween + "px"
                        }), t.centeredSlides)) {
                        C = [];
                        for (var K = 0; K < d.length; K += 1) {
                            var Z = d[K];
                            t.roundLengths && (Z = Math.floor(Z)), d[K] < this.virtualSize + d[0] && C.push(Z)
                        }
                        d = C
                    }
                    if (!t.centeredSlides) {
                        C = [];
                        for (var Q = 0; Q < d.length; Q += 1) {
                            var J = d[Q];
                            t.roundLengths && (J = Math.floor(J)), d[Q] <= this.virtualSize - i && C.push(J)
                        }
                        d = C, 1 < Math.floor(this.virtualSize - i) - Math.floor(d[d.length - 1]) && d.push(this.virtualSize - i)
                    }
                    if (0 === d.length && (d = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? n ? o.filter(h).css({
                            marginLeft: g + "px"
                        }) : o.filter(h).css({
                            marginRight: g + "px"
                        }) : o.filter(h).css({
                            marginBottom: g + "px"
                        })), t.centeredSlides && t.centeredSlidesBounds) {
                        var ee = 0;
                        c.forEach(function(e) {
                            ee += e + (t.spaceBetween ? t.spaceBetween : 0)
                        });
                        var te = (ee -= t.spaceBetween) - i;
                        d = d.map(function(e) {
                            return e < 0 ? -p : te < e ? te + f : e
                        })
                    }
                    if (t.centerInsufficientSlides) {
                        var ie = 0;
                        if (c.forEach(function(e) {
                                ie += e + (t.spaceBetween ? t.spaceBetween : 0)
                            }), (ie -= t.spaceBetween) < i) {
                            var ne = (i - ie) / 2;
                            d.forEach(function(e, t) {
                                d[t] = e - ne
                            }), u.forEach(function(e, t) {
                                u[t] = e + ne
                            })
                        }
                    }
                    ae.extend(this, {
                        slides: o,
                        snapGrid: d,
                        slidesGrid: u,
                        slidesSizesGrid: c
                    }), l !== r && this.emit("slidesLengthChange"), d.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== v && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(e) {
                var t, i = [],
                    n = 0;
                if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && 1 < this.params.slidesPerView)
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var s = this.activeIndex + t;
                        if (s > this.slides.length) break;
                        i.push(this.slides.eq(s)[0])
                    } else i.push(this.slides.eq(this.activeIndex)[0]);
                for (t = 0; t < i.length; t += 1)
                    if (void 0 !== i[t]) {
                        var a = i[t].offsetHeight;
                        n = n < a ? a : n
                    }
                n && this.$wrapperEl.css("height", n + "px")
            },
            updateSlidesOffset: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this.params,
                    i = this.slides,
                    n = this.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var s = -e;
                    n && (s = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                    for (var a = 0; a < i.length; a += 1) {
                        var r = i[a],
                            o = (s + (t.centeredSlides ? this.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + t.spaceBetween);
                        if (t.watchSlidesVisibility) {
                            var l = -(s - r.swiperSlideOffset),
                                d = l + this.slidesSizesGrid[a];
                            (0 <= l && l < this.size - 1 || 1 < d && d <= this.size || l <= 0 && d >= this.size) && (this.visibleSlides.push(r), this.visibleSlidesIndexes.push(a), i.eq(a).addClass(t.slideVisibleClass))
                        }
                        r.progress = n ? -o : o
                    }
                    this.visibleSlides = I(this.visibleSlides)
                }
            },
            updateProgress: function(e) {
                if (void 0 === e) {
                    var t = this.rtlTranslate ? -1 : 1;
                    e = this && this.translate && this.translate * t || 0
                }
                var i = this.params,
                    n = this.maxTranslate() - this.minTranslate(),
                    s = this.progress,
                    a = this.isBeginning,
                    r = this.isEnd,
                    o = a,
                    l = r;
                r = 0 == n ? a = !(s = 0) : (a = (s = (e - this.minTranslate()) / n) <= 0, 1 <= s), ae.extend(this, {
                    progress: s,
                    isBeginning: a,
                    isEnd: r
                }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !o && this.emit("reachBeginning toEdge"), r && !l && this.emit("reachEnd toEdge"), (o && !a || l && !r) && this.emit("fromEdge"), this.emit("progress", s)
            },
            updateSlidesClasses: function() {
                var e, t = this.slides,
                    i = this.params,
                    n = this.$wrapperEl,
                    s = this.activeIndex,
                    a = this.realIndex,
                    r = this.virtual && i.virtual.enabled;
                t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = r ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
                var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                var t, i = this.rtlTranslate ? this.translate : -this.translate,
                    n = this.slidesGrid,
                    s = this.snapGrid,
                    a = this.params,
                    r = this.activeIndex,
                    o = this.realIndex,
                    l = this.snapIndex,
                    d = e;
                if (void 0 === d) {
                    for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? d = u : i >= n[u] && i < n[u + 1] && (d = u + 1) : i >= n[u] && (d = u);
                    a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (0 <= s.indexOf(i)) t = s.indexOf(i);
                else {
                    var c = Math.min(a.slidesPerGroupSkip, d);
                    t = c + Math.floor((d - c) / a.slidesPerGroup)
                }
                if (t >= s.length && (t = s.length - 1), d !== r) {
                    var h = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    ae.extend(this, {
                        snapIndex: t,
                        realIndex: h,
                        previousIndex: r,
                        activeIndex: d
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== h && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
            },
            updateClickedSlide: function(e) {
                var t = this.params,
                    i = I(e.target).closest("." + t.slideClass)[0],
                    n = !1;
                if (i)
                    for (var s = 0; s < this.slides.length; s += 1) this.slides[s] === i && (n = !0);
                if (!i || !n) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(I(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = I(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        },
        T = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params,
                    i = this.rtlTranslate,
                    n = this.translate,
                    s = this.$wrapperEl;
                if (t.virtualTranslate) return i ? -n : n;
                if (t.cssMode) return n;
                var a = ae.getTranslate(s[0], e);
                return i && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
                var i = this.rtlTranslate,
                    n = this.params,
                    s = this.$wrapperEl,
                    a = this.wrapperEl,
                    r = this.progress,
                    o = 0,
                    l = 0;
                this.isHorizontal() ? o = i ? -e : e : l = e, n.roundLengths && (o = Math.floor(o), l = Math.floor(l)), n.cssMode ? a[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : n.virtualTranslate || s.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
                var d = this.maxTranslate() - this.minTranslate();
                (0 == d ? 0 : (e - this.minTranslate()) / d) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, i, n, s) {
                var a;
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                var r = this,
                    o = r.params,
                    l = r.wrapperEl;
                if (r.animating && o.preventInteractionOnTransition) return !1;
                var d, u = r.minTranslate(),
                    c = r.maxTranslate();
                if (d = n && u < e ? u : n && e < c ? c : e, r.updateProgress(d), o.cssMode) {
                    var h = r.isHorizontal();
                    return 0 !== t && l.scrollTo ? l.scrollTo(((a = {})[h ? "left" : "top"] = -d, a.behavior = "smooth", a)) : l[h ? "scrollLeft" : "scrollTop"] = -d, !0
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(d), i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
            }
        },
        C = {
            slideTo: function(e, t, i, n) {
                var s;
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var a = this,
                    r = e;
                r < 0 && (r = 0);
                var o = a.params,
                    l = a.snapGrid,
                    d = a.slidesGrid,
                    u = a.previousIndex,
                    c = a.activeIndex,
                    h = a.rtlTranslate,
                    p = a.wrapperEl;
                if (a.animating && o.preventInteractionOnTransition) return !1;
                var f = Math.min(a.params.slidesPerGroupSkip, r),
                    m = f + Math.floor((r - f) / a.params.slidesPerGroup);
                m >= l.length && (m = l.length - 1), (c || o.initialSlide || 0) === (u || 0) && i && a.emit("beforeSlideChangeStart");
                var v, g = -l[m];
                if (a.updateProgress(g), o.normalizeSlideIndex)
                    for (var y = 0; y < d.length; y += 1) - Math.floor(100 * g) >= Math.floor(100 * d[y]) && (r = y);
                if (a.initialized && r !== c) {
                    if (!a.allowSlideNext && g < a.translate && g < a.minTranslate()) return !1;
                    if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (c || 0) !== r) return !1
                }
                if (v = c < r ? "next" : r < c ? "prev" : "reset", h && -g === a.translate || !h && g === a.translate) return a.updateActiveIndex(r), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(g), "reset" != v && (a.transitionStart(i, v), a.transitionEnd(i, v)), !1;
                if (o.cssMode) {
                    var b = a.isHorizontal();
                    return 0 !== t && p.scrollTo ? p.scrollTo(((s = {})[b ? "left" : "top"] = -g, s.behavior = "smooth", s)) : p[b ? "scrollLeft" : "scrollTop"] = -g, !0
                }
                return 0 === t ? (a.setTransition(0), a.setTranslate(g), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(i, v), a.transitionEnd(i, v)) : (a.setTransition(t), a.setTranslate(g), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(i, v), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, v))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
            },
            slideToLoop: function(e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var s = e;
                return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, i, n)
            },
            slideNext: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this.params,
                    s = this.animating,
                    a = this.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
                if (n.loop) {
                    if (s) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                return this.slideTo(this.activeIndex + a, e, t, i)
            },
            slidePrev: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this.params,
                    s = this.animating,
                    a = this.snapGrid,
                    r = this.slidesGrid,
                    o = this.rtlTranslate;
                if (n.loop) {
                    if (s) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }

                function l(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var d, u = l(o ? this.translate : -this.translate),
                    c = a.map(function(e) {
                        return l(e)
                    }),
                    h = (r.map(function(e) {
                        return l(e)
                    }), a[c.indexOf(u)], a[c.indexOf(u) - 1]);
                return void 0 === h && n.cssMode && a.forEach(function(e) {
                    !h && e <= u && (h = e)
                }), void 0 !== h && (d = r.indexOf(h)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
            },
            slideReset: function(e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function(e, t, i, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
                var s = this.activeIndex,
                    a = Math.min(this.params.slidesPerGroupSkip, s),
                    r = a + Math.floor((s - a) / this.params.slidesPerGroup),
                    o = this.rtlTranslate ? this.translate : -this.translate;
                if (o >= this.snapGrid[r]) {
                    var l = this.snapGrid[r];
                    o - l > (this.snapGrid[r + 1] - l) * n && (s += this.params.slidesPerGroup)
                } else {
                    var d = this.snapGrid[r - 1];
                    o - d <= (this.snapGrid[r] - d) * n && (s -= this.params.slidesPerGroup)
                }
                return s = Math.max(s, 0), s = Math.min(s, this.slidesGrid.length - 1), this.slideTo(s, e, t, i)
            },
            slideToClickedSlide: function() {
                var e, t = this,
                    i = t.params,
                    n = t.$wrapperEl,
                    s = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                    a = t.clickedIndex;
                if (i.loop) {
                    if (t.animating) return;
                    e = parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - s / 2 || a > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), ae.nextTick(function() {
                        t.slideTo(a)
                    })) : t.slideTo(a) : a > t.slides.length - s ? (t.loopFix(), a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), ae.nextTick(function() {
                        t.slideTo(a)
                    })) : t.slideTo(a)
                } else t.slideTo(a)
            }
        },
        S = {
            loopCreate: function() {
                var n = this,
                    e = n.params,
                    t = n.$wrapperEl;
                t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
                var s = t.children("." + e.slideClass);
                if (e.loopFillGroupWithBlank) {
                    var i = e.slidesPerGroup - s.length % e.slidesPerGroup;
                    if (i !== e.slidesPerGroup) {
                        for (var a = 0; a < i; a += 1) {
                            var r = I(m.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                            t.append(r)
                        }
                        s = t.children("." + e.slideClass)
                    }
                }
                "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), n.loopedSlides = Math.ceil(parseFloat(e.loopedSlides || e.slidesPerView, 10)), n.loopedSlides += e.loopAdditionalSlides, n.loopedSlides > s.length && (n.loopedSlides = s.length);
                var o = [],
                    l = [];
                s.each(function(e, t) {
                    var i = I(t);
                    e < n.loopedSlides && l.push(t), e < s.length && e >= s.length - n.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", e)
                });
                for (var d = 0; d < l.length; d += 1) t.append(I(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
                for (var u = o.length - 1; 0 <= u; --u) t.prepend(I(o[u].cloneNode(!0)).addClass(e.slideDuplicateClass))
            },
            loopFix: function() {
                this.emit("beforeLoopFix");
                var e, t = this.activeIndex,
                    i = this.slides,
                    n = this.loopedSlides,
                    s = this.allowSlidePrev,
                    a = this.allowSlideNext,
                    r = this.snapGrid,
                    o = this.rtlTranslate;
                this.allowSlidePrev = !0, this.allowSlideNext = !0;
                var l = -r[t] - this.getTranslate();
                t < n ? (e = i.length - 3 * n + t, e += n, this.slideTo(e, 0, !1, !0) && 0 != l && this.setTranslate((o ? -this.translate : this.translate) - l)) : t >= i.length - n && (e = -i.length + t + n, e += n, this.slideTo(e, 0, !1, !0) && 0 != l && this.setTranslate((o ? -this.translate : this.translate) - l)), this.allowSlidePrev = s, this.allowSlideNext = a, this.emit("loopFix")
            },
            loopDestroy: function() {
                var e = this.$wrapperEl,
                    t = this.params,
                    i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        k = {
            setGrabCursor: function(e) {
                if (!(E.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                    var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                E.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
            }
        },
        M = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
                else t.append(e);
                i.loop && this.loopCreate(), i.observer && E.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    n = this.activeIndex;
                t.loop && this.loopDestroy();
                var s = n + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
                    s = n + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && E.observer || this.update(), this.slideTo(s, 0, !1)
            },
            addSlide: function(e, t) {
                var i = this.$wrapperEl,
                    n = this.params,
                    s = this.activeIndex;
                n.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + n.slideClass));
                var a = this.slides.length;
                if (e <= 0) this.prependSlide(t);
                else if (a <= e) this.appendSlide(t);
                else {
                    for (var r = e < s ? s + 1 : s, o = [], l = a - 1; e <= l; --l) {
                        var d = this.slides.eq(l);
                        d.remove(), o.unshift(d)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
                        r = e < s ? s + t.length : s
                    } else i.append(t);
                    for (var c = 0; c < o.length; c += 1) i.append(o[c]);
                    n.loop && this.loopCreate(), n.observer && E.observer || this.update(), n.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    n = this.activeIndex;
                t.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                var s, a = n;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) s = e[r], this.slides[s] && this.slides.eq(s).remove(), s < a && --a;
                    a = Math.max(a, 0)
                } else s = e, this.slides[s] && this.slides.eq(s).remove(), s < a && --a, a = Math.max(a, 0);
                t.loop && this.loopCreate(), t.observer && E.observer || this.update(), t.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        P = (n = se.navigator.platform, s = se.navigator.userAgent, r = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!se.cordova && !se.phonegap),
            phonegap: !(!se.cordova && !se.phonegap),
            electron: !1
        }, o = se.screen.width, d = se.screen.height, u = s.match(/(Android);?[\s\/]+([\d.]+)?/), c = s.match(/(iPad).*OS\s([\d_]+)/), h = s.match(/(iPod)(.*OS\s([\d_]+))?/), p = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = 0 <= s.indexOf("MSIE ") || 0 <= s.indexOf("Trident/"), v = 0 <= s.indexOf("Edge/"), g = 0 <= s.indexOf("Gecko/") && 0 <= s.indexOf("Firefox/"), y = "Win32" === n, b = 0 <= s.toLowerCase().indexOf("electron"), w = "MacIntel" === n, !c && w && E.touch && (1024 === o && 1366 === d || 834 === o && 1194 === d || 834 === o && 1112 === d || 768 === o && 1024 === d) && (c = s.match(/(Version)\/([\d.]+)/), w = !1), r.ie = f, r.edge = v, r.firefox = g, u && !y && (r.os = "android", r.osVersion = u[2], r.android = !0, r.androidChrome = 0 <= s.toLowerCase().indexOf("chrome")), (c || p || h) && (r.os = "ios", r.ios = !0), p && !h && (r.osVersion = p[2].replace(/_/g, "."), r.iphone = !0), c && (r.osVersion = c[2].replace(/_/g, "."), r.ipad = !0), h && (r.osVersion = h[3] ? h[3].replace(/_/g, ".") : null, r.ipod = !0), r.ios && r.osVersion && 0 <= s.indexOf("Version/") && "10" === r.osVersion.split(".")[0] && (r.osVersion = s.toLowerCase().split("version/")[1].split(" ")[0]), r.webView = !(!(p || c || h) || !s.match(/.*AppleWebKit(?!.*Safari)/i) && !se.navigator.standalone) || se.matchMedia && se.matchMedia("(display-mode: standalone)").matches, r.webview = r.webView, r.standalone = r.webView, r.desktop = !(r.ios || r.android) || b, r.desktop && (r.electron = b, r.macos = w, r.windows = y, r.macos && (r.os = "macos"), r.windows && (r.os = "windows")), r.pixelRatio = se.devicePixelRatio || 1, r);

    function A() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                n = this.allowSlidePrev,
                s = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || 1 < e.slidesPerView) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = n, this.allowSlideNext = i, this.params.watchOverflow && s !== this.snapGrid && this.checkOverflow()
        }
    }
    var L = !1;

    function z() {}
    var D, O = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        $ = {
            update: x,
            translate: T,
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        n = this.params,
                        s = this.previousIndex;
                    if (!n.cssMode) {
                        n.autoHeight && this.updateAutoHeight();
                        var a = t;
                        if (a = a || (s < i ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), e && i !== s) {
                            if ("reset" === a) return void this.emit("slideResetTransitionStart");
                            this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                        }
                    }
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        n = this.previousIndex,
                        s = this.params;
                    if (this.animating = !1, !s.cssMode) {
                        this.setTransition(0);
                        var a = t;
                        if (a = a || (n < i ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== n) {
                            if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                            this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                        }
                    }
                }
            },
            slide: C,
            loop: S,
            grabCursor: k,
            manipulation: M,
            events: {
                attachEvents: function() {
                    var e = this.params,
                        t = this.touchEvents,
                        i = this.el,
                        n = this.wrapperEl;
                    this.onTouchStart = function(e) {
                        var t = this.touchEventsData,
                            i = this.params,
                            n = this.touches;
                        if (!this.animating || !i.preventInteractionOnTransition) {
                            var s = e;
                            s.originalEvent && (s = s.originalEvent);
                            var a = I(s.target);
                            if (("wrapper" !== i.touchEventsTarget || a.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === s.type, (t.isTouchEvent || !("which" in s) || 3 !== s.which) && !(!t.isTouchEvent && "button" in s && 0 < s.button || t.isTouched && t.isMoved)))
                                if (i.noSwiping && a.closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) this.allowClick = !0;
                                else if (!i.swipeHandler || a.closest(i.swipeHandler)[0]) {
                                n.currentX = "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX, n.currentY = "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY;
                                var r = n.currentX,
                                    o = n.currentY,
                                    l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                                    d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                                if (!l || !(r <= d || r >= se.screen.width - d)) {
                                    if (ae.extend(t, {
                                            isTouched: !0,
                                            isMoved: !1,
                                            allowTouchCallbacks: !0,
                                            isScrolling: void 0,
                                            startMoving: void 0
                                        }), n.startX = r, n.startY = o, t.touchStartTime = ae.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, 0 < i.threshold && (t.allowThresholdMove = !1), "touchstart" !== s.type) {
                                        var u = !0;
                                        a.is(t.formElements) && (u = !1), m.activeElement && I(m.activeElement).is(t.formElements) && m.activeElement !== a[0] && m.activeElement.blur();
                                        var c = u && this.allowTouchMove && i.touchStartPreventDefault;
                                        (i.touchStartForcePreventDefault || c) && s.preventDefault()
                                    }
                                    this.emit("touchStart", s)
                                }
                            }
                        }
                    }.bind(this), this.onTouchMove = function(e) {
                        var t = this.touchEventsData,
                            i = this.params,
                            n = this.touches,
                            s = this.rtlTranslate,
                            a = e;
                        if (a.originalEvent && (a = a.originalEvent), t.isTouched) {
                            if (!t.isTouchEvent || "mousemove" !== a.type) {
                                var r = "touchmove" === a.type && a.targetTouches && (a.targetTouches[0] || a.changedTouches[0]),
                                    o = "touchmove" === a.type ? r.pageX : a.pageX,
                                    l = "touchmove" === a.type ? r.pageY : a.pageY;
                                if (a.preventedByNestedSwiper) return n.startX = o, void(n.startY = l);
                                if (!this.allowTouchMove) return this.allowClick = !1, void(t.isTouched && (ae.extend(n, {
                                    startX: o,
                                    startY: l,
                                    currentX: o,
                                    currentY: l
                                }), t.touchStartTime = ae.now()));
                                if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                    if (this.isVertical()) {
                                        if (l < n.startY && this.translate <= this.maxTranslate() || l > n.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void(t.isMoved = !1)
                                    } else if (o < n.startX && this.translate <= this.maxTranslate() || o > n.startX && this.translate >= this.minTranslate()) return;
                                if (t.isTouchEvent && m.activeElement && a.target === m.activeElement && I(a.target).is(t.formElements)) return t.isMoved = !0, void(this.allowClick = !1);
                                if (t.allowTouchCallbacks && this.emit("touchMove", a), !(a.targetTouches && 1 < a.targetTouches.length)) {
                                    n.currentX = o, n.currentY = l;
                                    var d, u = n.currentX - n.startX,
                                        c = n.currentY - n.startY;
                                    if (!(this.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2)) < this.params.threshold))
                                        if (void 0 === t.isScrolling && (this.isHorizontal() && n.currentY === n.startY || this.isVertical() && n.currentX === n.startX ? t.isScrolling = !1 : 25 <= u * u + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(u)) / Math.PI, t.isScrolling = this.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), t.isScrolling && this.emit("touchMoveOpposite", a), void 0 === t.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1;
                                        else if (t.startMoving) {
                                        this.allowClick = !1, i.cssMode || a.preventDefault(), i.touchMoveStopPropagation && !i.nested && a.stopPropagation(), t.isMoved || (i.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !i.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", a)), this.emit("sliderMove", a), t.isMoved = !0;
                                        var h = this.isHorizontal() ? u : c;
                                        n.diff = h, h *= i.touchRatio, s && (h = -h), this.swipeDirection = 0 < h ? "prev" : "next", t.currentTranslate = h + t.startTranslate;
                                        var p = !0,
                                            f = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (f = 0), 0 < h && t.currentTranslate > this.minTranslate() ? (p = !1, i.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + h, f))) : h < 0 && t.currentTranslate < this.maxTranslate() && (p = !1, i.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - h, f))), p && (a.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), 0 < i.threshold) {
                                            if (!(Math.abs(h) > i.threshold || t.allowThresholdMove)) return void(t.currentTranslate = t.startTranslate);
                                            if (!t.allowThresholdMove) return t.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, t.currentTranslate = t.startTranslate, void(n.diff = this.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                                        }
                                        i.followFinger && !i.cssMode && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), i.freeMode && (0 === t.velocities.length && t.velocities.push({
                                            position: n[this.isHorizontal() ? "startX" : "startY"],
                                            time: t.touchStartTime
                                        }), t.velocities.push({
                                            position: n[this.isHorizontal() ? "currentX" : "currentY"],
                                            time: ae.now()
                                        })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
                                    }
                                }
                            }
                        } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", a)
                    }.bind(this), this.onTouchEnd = function(e) {
                        var t = this,
                            i = t.touchEventsData,
                            n = t.params,
                            s = t.touches,
                            a = t.rtlTranslate,
                            r = t.$wrapperEl,
                            o = t.slidesGrid,
                            l = t.snapGrid,
                            d = e;
                        if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                        n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var u, c = ae.now(),
                            h = c - i.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), h < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = ae.now(), ae.nextTick(function() {
                                t.destroyed || (t.allowClick = !0)
                            }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, !n.cssMode)
                            if (n.freeMode) {
                                if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                                if (u > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                                if (n.freeModeMomentum) {
                                    if (1 < i.velocities.length) {
                                        var p = i.velocities.pop(),
                                            f = i.velocities.pop(),
                                            m = p.position - f.position,
                                            v = p.time - f.time;
                                        t.velocity = m / v, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (150 < v || 300 < ae.now() - p.time) && (t.velocity = 0)
                                    } else t.velocity = 0;
                                    t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                    var g = 1e3 * n.freeModeMomentumRatio,
                                        y = t.velocity * g,
                                        b = t.translate + y;
                                    a && (b = -b);
                                    var w, x, T = !1,
                                        C = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                                    if (b < t.maxTranslate()) n.freeModeMomentumBounce ? (b + t.maxTranslate() < -C && (b = t.maxTranslate() - C), w = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), n.loop && n.centeredSlides && (x = !0);
                                    else if (b > t.minTranslate()) n.freeModeMomentumBounce ? (b - t.minTranslate() > C && (b = t.minTranslate() + C), w = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), n.loop && n.centeredSlides && (x = !0);
                                    else if (n.freeModeSticky) {
                                        for (var E, S = 0; S < l.length; S += 1)
                                            if (l[S] > -b) {
                                                E = S;
                                                break
                                            }
                                        b = -(Math.abs(l[E] - b) < Math.abs(l[E - 1] - b) || "next" === t.swipeDirection ? l[E] : l[E - 1])
                                    }
                                    if (x && t.once("transitionEnd", function() {
                                            t.loopFix()
                                        }), 0 !== t.velocity) {
                                        if (g = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), n.freeModeSticky) {
                                            var k = Math.abs((a ? -b : b) - t.translate),
                                                M = t.slidesSizesGrid[t.activeIndex];
                                            g = k < M ? n.speed : k < 2 * M ? 1.5 * n.speed : 2.5 * n.speed
                                        }
                                    } else if (n.freeModeSticky) return void t.slideToClosest();
                                    n.freeModeMomentumBounce && T ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function() {
                                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(w), r.transitionEnd(function() {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))
                                    })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
                                } else if (n.freeModeSticky) return void t.slideToClosest();
                                (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                            } else {
                                for (var P = 0, A = t.slidesSizesGrid[0], I = 0; I < o.length; I += I < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                                    var L = I < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                                    void 0 !== o[I + L] ? u >= o[I] && u < o[I + L] && (A = o[(P = I) + L] - o[I]) : u >= o[I] && (P = I, A = o[o.length - 1] - o[o.length - 2])
                                }
                                var z = (u - o[P]) / A,
                                    D = P < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                                if (h > n.longSwipesMs) {
                                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection && (z >= n.longSwipesRatio ? t.slideTo(P + D) : t.slideTo(P)), "prev" === t.swipeDirection && (z > 1 - n.longSwipesRatio ? t.slideTo(P + D) : t.slideTo(P))
                                } else {
                                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                                    !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(P + D), "prev" === t.swipeDirection && t.slideTo(P)) : d.target === t.navigation.nextEl ? t.slideTo(P + D) : t.slideTo(P)
                                }
                            }
                    }.bind(this), e.cssMode && (this.onScroll = function() {
                        var e = this.wrapperEl;
                        this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                        var t = this.maxTranslate() - this.minTranslate();
                        (0 == t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
                    }.bind(this)), this.onClick = function(e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(this);
                    var s = !!e.nested;
                    if (!E.touch && E.pointerEvents) i.addEventListener(t.start, this.onTouchStart, !1), m.addEventListener(t.move, this.onTouchMove, s), m.addEventListener(t.end, this.onTouchEnd, !1);
                    else {
                        if (E.touch) {
                            var a = !("touchstart" !== t.start || !E.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            i.addEventListener(t.start, this.onTouchStart, a), i.addEventListener(t.move, this.onTouchMove, E.passiveListener ? {
                                passive: !1,
                                capture: s
                            } : s), i.addEventListener(t.end, this.onTouchEnd, a), t.cancel && i.addEventListener(t.cancel, this.onTouchEnd, a), L || (m.addEventListener("touchstart", z), L = !0)
                        }(e.simulateTouch && !P.ios && !P.android || e.simulateTouch && !E.touch && P.ios) && (i.addEventListener("mousedown", this.onTouchStart, !1), m.addEventListener("mousemove", this.onTouchMove, s), m.addEventListener("mouseup", this.onTouchEnd, !1))
                    }(e.preventClicks || e.preventClicksPropagation) && i.addEventListener("click", this.onClick, !0), e.cssMode && n.addEventListener("scroll", this.onScroll), e.updateOnWindowResize ? this.on(P.ios || P.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : this.on("observerUpdate", A, !0)
                },
                detachEvents: function() {
                    var e = this.params,
                        t = this.touchEvents,
                        i = this.el,
                        n = this.wrapperEl,
                        s = !!e.nested;
                    if (!E.touch && E.pointerEvents) i.removeEventListener(t.start, this.onTouchStart, !1), m.removeEventListener(t.move, this.onTouchMove, s), m.removeEventListener(t.end, this.onTouchEnd, !1);
                    else {
                        if (E.touch) {
                            var a = !("onTouchStart" !== t.start || !E.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            i.removeEventListener(t.start, this.onTouchStart, a), i.removeEventListener(t.move, this.onTouchMove, s), i.removeEventListener(t.end, this.onTouchEnd, a), t.cancel && i.removeEventListener(t.cancel, this.onTouchEnd, a)
                        }(e.simulateTouch && !P.ios && !P.android || e.simulateTouch && !E.touch && P.ios) && (i.removeEventListener("mousedown", this.onTouchStart, !1), m.removeEventListener("mousemove", this.onTouchMove, s), m.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }(e.preventClicks || e.preventClicksPropagation) && i.removeEventListener("click", this.onClick, !0), e.cssMode && n.removeEventListener("scroll", this.onScroll), this.off(P.ios || P.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var n = this.params,
                        s = this.$el,
                        a = n.breakpoints;
                    if (a && (!a || 0 !== Object.keys(a).length)) {
                        var r = this.getBreakpoint(a);
                        if (r && this.currentBreakpoint !== r) {
                            var o = r in a ? a[r] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            });
                            var l = o || this.originalParams,
                                d = 1 < n.slidesPerColumn,
                                u = 1 < l.slidesPerColumn;
                            d && !u ? s.removeClass(n.containerModifierClass + "multirow " + n.containerModifierClass + "multirow-column") : !d && u && (s.addClass(n.containerModifierClass + "multirow"), "column" === l.slidesPerColumnFill && s.addClass(n.containerModifierClass + "multirow-column"));
                            var c = l.direction && l.direction !== n.direction,
                                h = n.loop && (l.slidesPerView !== n.slidesPerView || c);
                            c && t && this.changeDirection(), ae.extend(this.params, l), ae.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = r, h && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", l)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var t = !1,
                            i = Object.keys(e).map(function(e) {
                                if ("string" == typeof e && e.startsWith("@")) {
                                    var t = parseFloat(e.substr(1));
                                    return {
                                        value: se.innerHeight * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            });
                        i.sort(function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        });
                        for (var n = 0; n < i.length; n += 1) {
                            var s = i[n],
                                a = s.point;
                            s.value <= se.innerWidth && (t = a)
                        }
                        return t || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.params,
                        t = this.isLocked,
                        i = 0 < this.slides.length && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var t = this.classNames,
                        i = this.params,
                        e = this.rtl,
                        n = this.$el,
                        s = [];
                    s.push("initialized"), s.push(i.direction), i.freeMode && s.push("free-mode"), i.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < i.slidesPerColumn && (s.push("multirow"), "column" === i.slidesPerColumnFill && s.push("multirow-column")), P.android && s.push("android"), P.ios && s.push("ios"), i.cssMode && s.push("css-mode"), s.forEach(function(e) {
                        t.push(i.containerModifierClass + e)
                    }), n.addClass(t.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, i, n, s, a) {
                    var r;

                    function o() {
                        a && a()
                    }(!e.complete || !s) && t ? ((r = new se.Image).onload = o, r.onerror = o, n && (r.sizes = n), i && (r.srcset = i), t && (r.src = t)) : o()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var n = e.imagesToLoad[i];
                        e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        N = {},
        j = function(c) {
            function h() {
                for (var e, s, t = [], i = arguments.length; i--;) t[i] = arguments[i];
                s = (s = 1 === t.length && t[0].constructor && t[0].constructor === Object ? t[0] : (e = t[0], t[1])) || {}, s = ae.extend({}, s), e && !s.el && (s.el = e), c.call(this, s), Object.keys($).forEach(function(t) {
                    Object.keys($[t]).forEach(function(e) {
                        h.prototype[e] || (h.prototype[e] = $[t][e])
                    })
                });
                var a = this;
                void 0 === a.modules && (a.modules = {}), Object.keys(a.modules).forEach(function(e) {
                    var t = a.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            n = t.params[i];
                        if ("object" != typeof n || null === n) return;
                        if (!(i in s && "enabled" in n)) return;
                        !0 === s[i] && (s[i] = {
                            enabled: !0
                        }), "object" != typeof s[i] || "enabled" in s[i] || (s[i].enabled = !0), s[i] || (s[i] = {
                            enabled: !1
                        })
                    }
                });
                var n = ae.extend({}, O);
                a.useModulesParams(n), a.params = ae.extend({}, n, N, s), a.originalParams = ae.extend({}, a.params), a.passedParams = ae.extend({}, s);
                var r = (a.$ = I)(a.params.el);
                if (e = r[0]) {
                    if (1 < r.length) {
                        var o = [];
                        return r.each(function(e, t) {
                            var i = ae.extend({}, s, {
                                el: t
                            });
                            o.push(new h(i))
                        }), o
                    }
                    var l, d, u;
                    return e.swiper = a, r.data("swiper", a), e && e.shadowRoot && e.shadowRoot.querySelector ? (l = I(e.shadowRoot.querySelector("." + a.params.wrapperClass))).children = function(e) {
                        return r.children(e)
                    } : l = r.children("." + a.params.wrapperClass), ae.extend(a, {
                        $el: r,
                        el: e,
                        $wrapperEl: l,
                        wrapperEl: l[0],
                        classNames: [],
                        slides: I(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === a.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === a.params.direction
                        },
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                        rtlTranslate: "horizontal" === a.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                        wrongRTL: "-webkit-box" === l.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: a.params.allowSlideNext,
                        allowSlidePrev: a.params.allowSlidePrev,
                        touchEvents: (d = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], E.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), a.touchEventsTouch = {
                            start: d[0],
                            move: d[1],
                            end: d[2],
                            cancel: d[3]
                        }, a.touchEventsDesktop = {
                            start: u[0],
                            move: u[1],
                            end: u[2]
                        }, E.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: ae.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: a.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), a.useModules(), a.params.init && a.init(), a
                }
            }
            c && (h.__proto__ = c);
            var e = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((h.prototype = Object.create(c && c.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    n = this.size,
                    s = this.activeIndex,
                    a = 1;
                if (e.centeredSlides) {
                    for (var r, o = t[s].swiperSlideSize, l = s + 1; l < t.length; l += 1) t[l] && !r && (a += 1, (o += t[l].swiperSlideSize) > n && (r = !0));
                    for (var d = s - 1; 0 <= d; --d) t[d] && !r && (a += 1, (o += t[d].swiperSlideSize) > n && (r = !0))
                } else
                    for (var u = s + 1; u < t.length; u += 1) i[u] - i[s] < n && (a += 1);
                return a
            }, h.prototype.update = function() {
                var i = this;
                if (i && !i.destroyed) {
                    var e = i.snapGrid,
                        t = i.params;
                    t.breakpoints && i.setBreakpoint(), i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.params.freeMode ? (n(), i.params.autoHeight && i.updateAutoHeight()) : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || n(), t.watchOverflow && e !== i.snapGrid && i.checkOverflow(), i.emit("update")
                }

                function n() {
                    var e = i.rtlTranslate ? -1 * i.translate : i.translate,
                        t = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
                    i.setTranslate(t), i.updateActiveIndex(), i.updateSlidesClasses()
                }
            }, h.prototype.changeDirection = function(i, e) {
                void 0 === e && (e = !0);
                var t = this.params.direction;
                return (i = i || ("horizontal" === t ? "vertical" : "horizontal")) === t || "horizontal" !== i && "vertical" !== i || (this.$el.removeClass("" + this.params.containerModifierClass + t).addClass("" + this.params.containerModifierClass + i), this.params.direction = i, this.slides.each(function(e, t) {
                    "vertical" === i ? t.style.width = "" : t.style.height = ""
                }), this.emit("changeDirection"), e && this.update()), this
            }, h.prototype.init = function() {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, h.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    n = i.params,
                    s = i.$el,
                    a = i.$wrapperEl,
                    r = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), ae.deleteProps(i)), i.destroyed = !0), null
            }, h.extendDefaults = function(e) {
                ae.extend(N, e)
            }, e.extendedDefaults.get = function() {
                return N
            }, e.defaults.get = function() {
                return O
            }, e.Class.get = function() {
                return c
            }, e.$.get = function() {
                return I
            }, Object.defineProperties(h, e), h
        }(e),
        H = {
            name: "device",
            proto: {
                device: P
            },
            static: {
                device: P
            }
        },
        B = {
            name: "support",
            proto: {
                support: E
            },
            static: {
                support: E
            }
        },
        q = {
            isEdge: !!se.navigator.userAgent.match(/Edge/g),
            isSafari: 0 <= (D = se.navigator.userAgent.toLowerCase()).indexOf("safari") && D.indexOf("chrome") < 0 && D.indexOf("android") < 0,
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(se.navigator.userAgent)
        },
        R = {
            name: "browser",
            proto: {
                browser: q
            },
            static: {
                browser: q
            }
        },
        F = {
            name: "resize",
            create: function() {
                var e = this;
                ae.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    se.addEventListener("resize", this.resize.resizeHandler), se.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    se.removeEventListener("resize", this.resize.resizeHandler), se.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        G = {
            func: se.MutationObserver || se.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var i = this,
                    n = new G.func(function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                i.emit("observerUpdate", e[0])
                            };
                            se.requestAnimationFrame ? se.requestAnimationFrame(t) : se.setTimeout(t, 0)
                        } else i.emit("observerUpdate", e[0])
                    });
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(n)
            },
            init: function() {
                if (E.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        W = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                ae.extend(this, {
                    observer: {
                        init: G.init.bind(this),
                        attach: G.attach.bind(this),
                        destroy: G.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        _ = {
            update: function(e) {
                var t = this,
                    i = t.params,
                    n = i.slidesPerView,
                    s = i.slidesPerGroup,
                    a = i.centeredSlides,
                    r = t.params.virtual,
                    o = r.addSlidesBefore,
                    l = r.addSlidesAfter,
                    d = t.virtual,
                    u = d.from,
                    c = d.to,
                    h = d.slides,
                    p = d.slidesGrid,
                    f = d.renderSlide,
                    m = d.offset;
                t.updateActiveIndex();
                var v, g, y, b = t.activeIndex || 0;
                v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", y = a ? (g = Math.floor(n / 2) + s + o, Math.floor(n / 2) + s + l) : (g = n + (s - 1) + o, s + l);
                var w = Math.max((b || 0) - y, 0),
                    x = Math.min((b || 0) + g, h.length - 1),
                    T = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

                function C() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (ae.extend(t.virtual, {
                        from: w,
                        to: x,
                        offset: T,
                        slidesGrid: t.slidesGrid
                    }), u === w && c === x && !e) return t.slidesGrid !== p && T !== m && t.slides.css(v, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: w,
                    to: x,
                    slides: function() {
                        for (var e = [], t = w; t <= x; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void C();
                var E = [],
                    S = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var k = u; k <= c; k += 1)(k < w || x < k) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                for (var M = 0; M < h.length; M += 1) w <= M && M <= x && (void 0 === c || e ? S.push(M) : (c < M && S.push(M), M < u && E.push(M)));
                S.forEach(function(e) {
                    t.$wrapperEl.append(f(h[e], e))
                }), E.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(f(h[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(v, T + "px"), C()
            },
            renderSlide: function(e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var n = i.renderSlide ? I(i.renderSlide.call(this, e, t)) : I('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = n), n
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this.activeIndex,
                    i = t + 1,
                    n = 1;
                if (Array.isArray(e)) {
                    for (var s = 0; s < e.length; s += 1) e[s] && this.virtual.slides.unshift(e[s]);
                    i = t + e.length, n = e.length
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var a = this.virtual.cache,
                        r = {};
                    Object.keys(a).forEach(function(e) {
                        var t = a[e],
                            i = t.attr("data-swiper-slide-index");
                        i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), r[parseInt(e, 10) + n] = t
                    }), this.virtual.cache = r
                }
                this.virtual.update(!0), this.slideTo(i, 0)
            },
            removeSlide: function(e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; 0 <= i; --i) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && --t, t = Math.max(t, 0);
                    else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && --t, t = Math.max(t, 0);
                    this.virtual.update(!0), this.slideTo(t, 0)
                }
            },
            removeAllSlides: function() {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        },
        X = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                ae.extend(this, {
                    virtual: {
                        update: _.update.bind(this),
                        appendSlide: _.appendSlide.bind(this),
                        prependSlide: _.prependSlide.bind(this),
                        removeSlide: _.removeSlide.bind(this),
                        removeAllSlides: _.removeAllSlides.bind(this),
                        renderSlide: _.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {
                            watchSlidesProgress: !0
                        };
                        ae.extend(this.params, e), ae.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        V = {
            handle: function(e) {
                var t = this.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var n = i.keyCode || i.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === n || this.isVertical() && 40 === n || 34 === n)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === n || this.isVertical() && 38 === n || 33 === n)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || m.activeElement && m.activeElement.nodeName && ("input" === m.activeElement.nodeName.toLowerCase() || "textarea" === m.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (33 === n || 34 === n || 37 === n || 39 === n || 38 === n || 40 === n)) {
                        var s = !1;
                        if (0 < this.$el.parents("." + this.params.slideClass).length && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var a = se.innerWidth,
                            r = se.innerHeight,
                            o = this.$el.offset();
                        t && (o.left -= this.$el[0].scrollLeft);
                        for (var l = [
                                [o.left, o.top],
                                [o.left + this.width, o.top],
                                [o.left, o.top + this.height],
                                [o.left + this.width, o.top + this.height]
                            ], d = 0; d < l.length; d += 1) {
                            var u = l[d];
                            0 <= u[0] && u[0] <= a && 0 <= u[1] && u[1] <= r && (s = !0)
                        }
                        if (!s) return
                    }
                    this.isHorizontal() ? (33 !== n && 34 !== n && 37 !== n && 39 !== n || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (34 !== n && 39 !== n || t) && (33 !== n && 37 !== n || !t) || this.slideNext(), (33 !== n && 37 !== n || t) && (34 !== n && 39 !== n || !t) || this.slidePrev()) : (33 !== n && 34 !== n && 38 !== n && 40 !== n || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 34 !== n && 40 !== n || this.slideNext(), 33 !== n && 38 !== n || this.slidePrev()), this.emit("keyPress", n)
                }
            },
            enable: function() {
                this.keyboard.enabled || (I(m).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (I(m).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        Y = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                ae.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: V.enable.bind(this),
                        disable: V.disable.bind(this),
                        handle: V.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        },
        U = {
            lastScrollTime: ae.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                return -1 < se.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                    var e = "onwheel" in m;
                    if (!e) {
                        var t = m.createElement("div");
                        t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                    }
                    return !e && m.implementation && m.implementation.hasFeature && !0 !== m.implementation.hasFeature("", "") && (e = m.implementation.hasFeature("Events.wheel", "3.0")), e
                }() ? "wheel" : "mousewheel"
            },
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    n = 0,
                    s = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), e.shiftKey && !n && (n = s, s = 0), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: n,
                    pixelY: s
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    i = this,
                    n = i.params.mousewheel;
                i.params.cssMode && t.preventDefault();
                var s = i.$el;
                if ("container" !== i.params.mousewheel.eventsTarged && (s = I(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !s[0].contains(t.target) && !n.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var a = 0,
                    r = i.rtlTranslate ? -1 : 1,
                    o = U.normalize(t);
                if (n.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        a = o.pixelX * r
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        a = o.pixelY
                    }
                else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
                if (0 === a) return !0;
                if (n.invert && (a = -a), i.params.freeMode) {
                    var l = {
                            time: ae.now(),
                            delta: Math.abs(a),
                            direction: Math.sign(a)
                        },
                        d = i.mousewheel.lastEventBeforeSnap,
                        u = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;
                    if (!u) {
                        i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                        var c = i.getTranslate() + a * n.sensitivity,
                            h = i.isBeginning,
                            p = i.isEnd;
                        if (c >= i.minTranslate() && (c = i.minTranslate()), c <= i.maxTranslate() && (c = i.maxTranslate()), i.setTransition(0), i.setTranslate(c), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!h && i.isBeginning || !p && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                            var f = i.mousewheel.recentWheelEvents;
                            15 <= f.length && f.shift();
                            var m = f.length ? f[f.length - 1] : void 0,
                                v = f[0];
                            if (f.push(l), m && (l.delta > m.delta || l.direction !== m.direction)) f.splice(0);
                            else if (15 <= f.length && l.time - v.time < 500 && 1 <= v.delta - l.delta && l.delta <= 6) {
                                var g = 0 < a ? .8 : .2;
                                i.mousewheel.lastEventBeforeSnap = l, f.splice(0), i.mousewheel.timeout = ae.nextTick(function() {
                                    i.slideToClosest(i.params.speed, !0, void 0, g)
                                }, 0)
                            }
                            i.mousewheel.timeout || (i.mousewheel.timeout = ae.nextTick(function() {
                                i.mousewheel.lastEventBeforeSnap = l, f.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                            }, 500))
                        }
                        if (u || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), c === i.minTranslate() || c === i.maxTranslate()) return !0
                    }
                } else {
                    var y = {
                            time: ae.now(),
                            delta: Math.abs(a),
                            direction: Math.sign(a),
                            raw: e
                        },
                        b = i.mousewheel.recentWheelEvents;
                    2 <= b.length && b.shift();
                    var w = b.length ? b[b.length - 1] : void 0;
                    if (b.push(y), (!w || y.direction !== w.direction || y.delta > w.delta) && i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            animateSlider: function(e) {
                return 6 <= e.delta && ae.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new se.Date).getTime(), !1)
            },
            releaseScroll: function(e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1
            },
            enable: function() {
                var e = U.event();
                if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = I(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0
            },
            disable: function() {
                var e = U.event();
                if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = I(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
            }
        },
        K = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        n = t.$prevEl;
                    n && 0 < n.length && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && 0 < i.length && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, i = this.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = I(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = I(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", this.navigation.onNextClick), t && 0 < t.length && t.on("click", this.navigation.onPrevClick), ae.extend(this.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        Z = {
            update: function() {
                var e = this.rtl,
                    s = this.params.pagination;
                if (s.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var a, t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        n = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((a = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > t - 1 - 2 * this.loopedSlides && (a -= t - 2 * this.loopedSlides), n - 1 < a && (a -= n), a < 0 && "bullets" !== this.params.paginationType && (a = n + a)) : a = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === s.type && this.pagination.bullets && 0 < this.pagination.bullets.length) {
                        var r, o, l, d = this.pagination.bullets;
                        if (s.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += a - this.previousIndex, this.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), r = a - this.pagination.dynamicBulletIndex, l = ((o = r + (Math.min(d.length, s.dynamicMainBullets) - 1)) + r) / 2), d.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) d.each(function(e, t) {
                            var i = I(t),
                                n = i.index();
                            n === a && i.addClass(s.bulletActiveClass), s.dynamicBullets && (r <= n && n <= o && i.addClass(s.bulletActiveClass + "-main"), n === r && i.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), n === o && i.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                        });
                        else {
                            var u = d.eq(a),
                                c = u.index();
                            if (u.addClass(s.bulletActiveClass), s.dynamicBullets) {
                                for (var h = d.eq(r), p = d.eq(o), f = r; f <= o; f += 1) d.eq(f).addClass(s.bulletActiveClass + "-main");
                                if (this.params.loop)
                                    if (c >= d.length - s.dynamicMainBullets) {
                                        for (var m = s.dynamicMainBullets; 0 <= m; --m) d.eq(d.length - m).addClass(s.bulletActiveClass + "-main");
                                        d.eq(d.length - s.dynamicMainBullets - 1).addClass(s.bulletActiveClass + "-prev")
                                    } else h.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), p.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next");
                                else h.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), p.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                            }
                        }
                        if (s.dynamicBullets) {
                            var v = Math.min(d.length, s.dynamicMainBullets + 4),
                                g = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize,
                                y = e ? "right" : "left";
                            d.css(this.isHorizontal() ? y : "top", g + "px")
                        }
                    }
                    if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(a + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
                        var b;
                        b = s.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var w = (a + 1) / n,
                            x = 1,
                            T = 1;
                        "horizontal" == b ? x = w : T = w, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(this, a + 1, n)), this.emit("paginationRender", this, i[0])) : this.emit("paginationUpdate", this, i[0]), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        n = "";
                    if ("bullets" === e.type) {
                        for (var s = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < s; a += 1) e.renderBullet ? n += e.renderBullet.call(this, a, e.bulletClass) : n += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(n), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(n)), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(n)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var i = this,
                    e = i.params.pagination;
                if (e.el) {
                    var t = I(e.el);
                    0 !== t.length && (i.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === i.$el.find(e.el).length && (t = i.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), i.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                        e.preventDefault();
                        var t = I(this).index() * i.params.slidesPerGroup;
                        i.params.loop && (t += i.loopedSlides), i.slideTo(t)
                    }), ae.extend(i.pagination, {
                        $el: t,
                        el: t[0]
                    }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        },
        Q = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        n = e.dragSize,
                        s = e.trackSize,
                        a = e.$dragEl,
                        r = e.$el,
                        o = this.params.scrollbar,
                        l = n,
                        d = (s - n) * i;
                    t ? 0 < (d = -d) ? (l = n - d, d = 0) : s < -d + n && (l = s + d) : d < 0 ? (l = n + d, d = 0) : s < d + n && (l = s - d), this.isHorizontal() ? (a.transform("translate3d(" + d + "px, 0, 0)"), a[0].style.width = l + "px") : (a.transform("translate3d(0px, " + d + "px, 0)"), a[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), r[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                        r[0].style.opacity = 0, r.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var n, s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        a = this.size / this.virtualSize,
                        r = a * (s / this.size);
                    n = "auto" === this.params.scrollbar.dragSize ? s * a : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = n + "px" : t[0].style.height = n + "px", i[0].style.display = 1 <= a ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), ae.extend(e, {
                        trackSize: s,
                        divider: a,
                        moveDivider: r,
                        dragSize: n
                    }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar,
                    n = this.rtlTranslate,
                    s = i.$el,
                    a = i.dragSize,
                    r = i.trackSize,
                    o = i.dragStartPos;
                t = (i.getPointerPosition(e) - s.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : a / 2)) / (r - a), t = Math.max(Math.min(t, 1), 0), n && (t = 1 - t);
                var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    n = this.$wrapperEl,
                    s = i.$el,
                    a = i.$dragEl;
                this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === a[0] || e.target === a ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), n.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), t.hide && s.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    n = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    n = this.$wrapperEl,
                    s = i.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), n.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = ae.nextTick(function() {
                    s.css("opacity", 0), s.transition(400)
                }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.touchEventsTouch,
                        i = this.touchEventsDesktop,
                        n = this.params,
                        s = e.$el[0],
                        a = !(!E.passiveListener || !n.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        r = !(!E.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    E.touch ? (s.addEventListener(t.start, this.scrollbar.onDragStart, a), s.addEventListener(t.move, this.scrollbar.onDragMove, a), s.addEventListener(t.end, this.scrollbar.onDragEnd, r)) : (s.addEventListener(i.start, this.scrollbar.onDragStart, a), m.addEventListener(i.move, this.scrollbar.onDragMove, a), m.addEventListener(i.end, this.scrollbar.onDragEnd, r))
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.touchEventsTouch,
                        i = this.touchEventsDesktop,
                        n = this.params,
                        s = e.$el[0],
                        a = !(!E.passiveListener || !n.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        r = !(!E.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    E.touch ? (s.removeEventListener(t.start, this.scrollbar.onDragStart, a), s.removeEventListener(t.move, this.scrollbar.onDragMove, a), s.removeEventListener(t.end, this.scrollbar.onDragEnd, r)) : (s.removeEventListener(i.start, this.scrollbar.onDragStart, a), m.removeEventListener(i.move, this.scrollbar.onDragMove, a), m.removeEventListener(i.end, this.scrollbar.onDragEnd, r))
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        n = I(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && 1 < n.length && 1 === t.find(i.el).length && (n = t.find(i.el));
                    var s = n.find("." + this.params.scrollbar.dragClass);
                    0 === s.length && (s = I('<div class="' + this.params.scrollbar.dragClass + '"></div>'), n.append(s)), ae.extend(e, {
                        $el: n,
                        el: n[0],
                        $dragEl: s,
                        dragEl: s[0]
                    }), i.draggable && e.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        J = {
            setTransform: function(e, t) {
                var i = this.rtl,
                    n = I(e),
                    s = i ? -1 : 1,
                    a = n.attr("data-swiper-parallax") || "0",
                    r = n.attr("data-swiper-parallax-x"),
                    o = n.attr("data-swiper-parallax-y"),
                    l = n.attr("data-swiper-parallax-scale"),
                    d = n.attr("data-swiper-parallax-opacity");
                if (r || o ? (r = r || "0", o = o || "0") : this.isHorizontal() ? (r = a, o = "0") : (o = a, r = "0"), r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t * s + "%" : r * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                    var u = d - (d - 1) * (1 - Math.abs(t));
                    n[0].style.opacity = u
                }
                if (null == l) n.transform("translate3d(" + r + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    n.transform("translate3d(" + r + ", " + o + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var n = this,
                    e = n.$el,
                    t = n.slides,
                    s = n.progress,
                    a = n.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, t) {
                    n.parallax.setTransform(t, s)
                }), t.each(function(e, t) {
                    var i = t.progress;
                    1 < n.params.slidesPerGroup && "auto" !== n.params.slidesPerView && (i += Math.ceil(e / 2) - s * (a.length - 1)), i = Math.min(Math.max(i, -1), 1), I(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, t) {
                        n.parallax.setTransform(t, i)
                    })
                })
            },
            setTransition: function(s) {
                void 0 === s && (s = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, t) {
                    var i = I(t),
                        n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || s;
                    0 === s && (n = 0), i.transition(n)
                })
            }
        },
        ee = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    n = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !E.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, n.scaleStart = ee.getDistanceBetweenTouches(e)
                }
                n.$slideEl && n.$slideEl.length || (n.$slideEl = I(e.target).closest(".swiper-slide"), 0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0), this.zoom.isScaling = !0) : n.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!E.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, n.scaleMove = ee.getDistanceBetweenTouches(e)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = E.gestures ? e.scale * i.currentScale : n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!E.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !P.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    n = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (P.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    n = t.image,
                    s = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
                    n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = ae.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = ae.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX, n.startY = -n.startY));
                    var a = n.width * t.scale,
                        r = n.height * t.scale;
                    if (!(a < i.slideWidth && r < i.slideHeight)) {
                        if (n.minX = Math.min(i.slideWidth / 2 - a / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - r / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = n.touchesCurrent.x, s.prevPositionY = n.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    n = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var s = 300,
                        a = 300,
                        r = n.x * s,
                        o = i.currentX + r,
                        l = n.y * a,
                        d = i.currentY + l;
                    0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((d - i.currentY) / n.y));
                    var u = Math.max(s, a);
                    i.currentX = o, i.currentY = d;
                    var c = i.width * e.scale,
                        h = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - c / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, i, n, s, a, r, o, l, d, u, c, h, p, f, m, v, g = this.zoom,
                    y = this.params.zoom,
                    b = g.gesture,
                    w = g.image;
                b.$slideEl || (b.$slideEl = this.clickedSlide ? I(this.clickedSlide) : this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas"), b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)), b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass("" + y.zoomedSlideClass), i = void 0 === w.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = w.touchesStart.x, w.touchesStart.y), g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, e ? (m = b.$slideEl[0].offsetWidth, v = b.$slideEl[0].offsetHeight, n = b.$slideEl.offset().left + m / 2 - t, s = b.$slideEl.offset().top + v / 2 - i, o = b.$imageEl[0].offsetWidth, l = b.$imageEl[0].offsetHeight, d = o * g.scale, u = l * g.scale, p = -(c = Math.min(m / 2 - d / 2, 0)), f = -(h = Math.min(v / 2 - u / 2, 0)), (a = n * g.scale) < c && (a = c), p < a && (a = p), (r = s * g.scale) < h && (r = h), f < r && (r = f)) : r = a = 0, b.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + r + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (i.$slideEl = this.clickedSlide ? I(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !E.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !E.passiveListener || {
                            passive: !1,
                            capture: !0
                        };
                    E.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !E.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !E.passiveListener || {
                            passive: !1,
                            capture: !0
                        };
                    E.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            }
        },
        te = {
            loadInSlide: function(e, l) {
                void 0 === l && (l = !0);
                var d = this,
                    u = d.params.lazy;
                if (void 0 !== e && 0 !== d.slides.length) {
                    var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                        t = c.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")");
                    !c.hasClass(u.elementClass) || c.hasClass(u.loadedClass) || c.hasClass(u.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function(e, t) {
                        var n = I(t);
                        n.addClass(u.loadingClass);
                        var s = n.attr("data-background"),
                            a = n.attr("data-src"),
                            r = n.attr("data-srcset"),
                            o = n.attr("data-sizes");
                        d.loadImage(n[0], a || s, r, o, !1, function() {
                            if (null != d && d && (!d || d.params) && !d.destroyed) {
                                if (s ? (n.css("background-image", 'url("' + s + '")'), n.removeAttr("data-background")) : (r && (n.attr("srcset", r), n.removeAttr("data-srcset")), o && (n.attr("sizes", o), n.removeAttr("data-sizes")), a && (n.attr("src", a), n.removeAttr("data-src"))), n.addClass(u.loadedClass).removeClass(u.loadingClass), c.find("." + u.preloaderClass).remove(), d.params.loop && l) {
                                    var e = c.attr("data-swiper-slide-index");
                                    if (c.hasClass(d.params.slideDuplicateClass)) {
                                        var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                        d.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var i = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        d.lazy.loadInSlide(i.index(), !1)
                                    }
                                }
                                d.emit("lazyImageReady", c[0], n[0])
                            }
                        }), d.emit("lazyImageLoad", c[0], n[0])
                    })
                }
            },
            load: function() {
                var n = this,
                    t = n.$wrapperEl,
                    i = n.params,
                    s = n.slides,
                    e = n.activeIndex,
                    a = n.virtual && i.virtual.enabled,
                    r = i.lazy,
                    o = i.slidesPerView;

                function l(e) {
                    if (a) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return 1
                    } else if (s[e]) return 1
                }

                function d(e) {
                    return a ? I(e).attr("data-swiper-slide-index") : I(e).index()
                }
                if ("auto" === o && (o = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(e, t) {
                    var i = a ? I(t).attr("data-swiper-slide-index") : I(t).index();
                    n.lazy.loadInSlide(i)
                });
                else if (1 < o)
                    for (var u = e; u < e + o; u += 1) l(u) && n.lazy.loadInSlide(u);
                else n.lazy.loadInSlide(e);
                if (r.loadPrevNext)
                    if (1 < o || r.loadPrevNextAmount && 1 < r.loadPrevNextAmount) {
                        for (var c = r.loadPrevNextAmount, h = o, p = Math.min(e + h + Math.max(c, h), s.length), f = Math.max(e - Math.max(h, c), 0), m = e + o; m < p; m += 1) l(m) && n.lazy.loadInSlide(m);
                        for (var v = f; v < e; v += 1) l(v) && n.lazy.loadInSlide(v)
                    } else {
                        var g = t.children("." + i.slideNextClass);
                        0 < g.length && n.lazy.loadInSlide(d(g));
                        var y = t.children("." + i.slidePrevClass);
                        0 < y.length && n.lazy.loadInSlide(d(y))
                    }
            }
        },
        ie = {
            LinearSpline: function(e, t) {
                var i, n, s, a, r;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (r = function(e, t) {
                        for (n = -1, i = e.length; 1 < i - n;) e[s = i + n >> 1] <= t ? n = s : i = s;
                        return i
                    }(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid) : new ie.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var i, n, s = this,
                    a = s.controller.control;

                function r(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)), n && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * i + e.minTranslate()), s.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof j && r(a[o]);
                else a instanceof j && t !== a && r(a)
            },
            setTransition: function(t, e) {
                var i, n = this,
                    s = n.controller.control;

                function a(e) {
                    e.setTransition(t, n), 0 !== t && (e.transitionStart(), e.params.autoHeight && ae.nextTick(function() {
                        e.updateAutoHeight()
                    }), e.$wrapperEl.transitionEnd(function() {
                        s && (e.params.loop && "slide" === n.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }
                if (Array.isArray(s))
                    for (i = 0; i < s.length; i += 1) s[i] !== e && s[i] instanceof j && a(s[i]);
                else s instanceof j && e !== s && a(s)
            }
        },
        ne = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = I(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && 0 < i.length && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && 0 < t.length && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var n = this,
                    s = n.params.a11y;
                n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.bullets.each(function(e, t) {
                    var i = I(t);
                    n.a11y.makeElFocusable(i), n.a11y.addElRole(i, "button"), n.a11y.addElLabel(i, s.paginationBulletMessage.replace(/{{index}}/, i.index() + 1))
                })
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && 0 < this.a11y.liveRegion.length && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        re = {
            init: function() {
                if (this.params.history) {
                    if (!se.history || !se.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = re.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || se.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || se.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = re.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = se.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var i = this.slides.eq(t),
                        n = re.slugify(i.attr("data-history"));
                    se.location.pathname.includes(e) || (n = e + "/" + n);
                    var s = se.history.state;
                    s && s.value === n || (this.params.history.replaceState ? se.history.replaceState({
                        value: n
                    }, null, n) : se.history.pushState({
                        value: n
                    }, null, n))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var n = 0, s = this.slides.length; n < s; n += 1) {
                        var a = this.slides.eq(n);
                        if (re.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
                            var r = a.index();
                            this.slideTo(r, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        oe = {
            onHashCange: function() {
                var e = m.location.hash.replace("#", "");
                if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                    if (void 0 === t) return;
                    this.slideTo(t)
                }
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && se.history && se.history.replaceState) se.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                    else {
                        var e = this.slides.eq(this.activeIndex),
                            t = e.attr("data-hash") || e.attr("data-history");
                        m.location.hash = t || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var e = m.location.hash.replace("#", "");
                    if (e)
                        for (var t = 0, i = this.slides.length; t < i; t += 1) {
                            var n = this.slides.eq(t);
                            if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(this.params.slideDuplicateClass)) {
                                var s = n.index();
                                this.slideTo(s, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && I(se).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && I(se).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        le = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = ae.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                }, i)
            },
            start: function() {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
            },
            stop: function() {
                return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
            },
            pause: function(e) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
            }
        },
        de = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        n = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (n -= this.translate);
                    var s = 0;
                    this.isHorizontal() || (s = n, n = 0);
                    var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: a
                    }).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var i = this,
                    t = i.slides,
                    n = i.$wrapperEl;
                if (t.transition(e), i.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    t.transitionEnd(function() {
                        if (!s && i && !i.destroyed) {
                            s = !0, i.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) n.trigger(e[t])
                        }
                    })
                }
            }
        },
        ue = {
            setTranslate: function() {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    n = this.slides,
                    s = this.width,
                    a = this.height,
                    r = this.rtlTranslate,
                    o = this.size,
                    l = this.params.cubeEffect,
                    d = this.isHorizontal(),
                    u = this.virtual && this.params.virtual.enabled,
                    c = 0;
                l.shadow && (d ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = I('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: s + "px"
                })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = I('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var h = 0; h < n.length; h += 1) {
                    var p = n.eq(h),
                        f = h;
                    u && (f = parseInt(p.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        v = Math.floor(m / 360);
                    r && (m = -m, v = Math.floor(-m / 360));
                    var g = Math.max(Math.min(p[0].progress, 1), -1),
                        y = 0,
                        b = 0,
                        w = 0;
                    f % 4 == 0 ? (y = 4 * -v * o, w = 0) : (f - 1) % 4 == 0 ? (y = 0, w = 4 * -v * o) : (f - 2) % 4 == 0 ? (y = o + 4 * v * o, w = o) : (f - 3) % 4 == 0 && (y = -o, w = 3 * o + 4 * o * v), r && (y = -y), d || (b = y, y = 0);
                    var x = "rotateX(" + (d ? 0 : -m) + "deg) rotateY(" + (d ? m : 0) + "deg) translate3d(" + y + "px, " + b + "px, " + w + "px)";
                    if (g <= 1 && -1 < g && (c = 90 * f + 90 * g, r && (c = 90 * -f - 90 * g)), p.transform(x), l.slideShadows) {
                        var T = d ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                            C = d ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = I('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), p.append(T)), 0 === C.length && (C = I('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), p.append(C)), T.length && (T[0].style.opacity = Math.max(-g, 0)), C.length && (C[0].style.opacity = Math.max(g, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
                        "transform-origin": "50% 50% -" + o / 2 + "px"
                    }), l.shadow)
                    if (d) e.transform("translate3d(0px, " + (s / 2 + l.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + l.shadowScale + ")");
                    else {
                        var E = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            S = 1.5 - (Math.sin(2 * E * Math.PI / 360) / 2 + Math.cos(2 * E * Math.PI / 360) / 2),
                            k = l.shadowScale,
                            M = l.shadowScale / S,
                            P = l.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + M + ") translate3d(0px, " + (a / 2 + P) + "px, " + -a / 2 / M + "px) rotateX(-90deg)")
                    }
                var A = q.isSafari || q.isUiWebView ? -o / 2 : 0;
                i.transform("translate3d(0px,0," + A + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        ce = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var n = e.eq(i),
                        s = n[0].progress;
                    this.params.flipEffect.limitRotation && (s = Math.max(Math.min(n[0].progress, 1), -1));
                    var a = -180 * s,
                        r = 0,
                        o = -n[0].swiperSlideOffset,
                        l = 0;
                    if (this.isHorizontal() ? t && (a = -a) : (l = o, r = -a, a = o = 0), n[0].style.zIndex = -Math.abs(Math.round(s)) + e.length, this.params.flipEffect.slideShadows) {
                        var d = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                            u = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = I('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), n.append(d)), 0 === u.length && (u = I('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(u)), d.length && (d[0].style.opacity = Math.max(-s, 0)), u.length && (u[0].style.opacity = Math.max(s, 0))
                    }
                    n.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + r + "deg) rotateY(" + a + "deg)")
                }
            },
            setTransition: function(e) {
                var i = this,
                    t = i.slides,
                    n = i.activeIndex,
                    s = i.$wrapperEl;
                if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), i.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    t.eq(n).transitionEnd(function() {
                        if (!a && i && !i.destroyed) {
                            a = !0, i.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                        }
                    })
                }
            }
        },
        he = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, i = this.slides, n = this.$wrapperEl, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), o = this.translate, l = r ? e / 2 - o : t / 2 - o, d = r ? a.rotate : -a.rotate, u = a.depth, c = 0, h = i.length; c < h; c += 1) {
                    var p = i.eq(c),
                        f = s[c],
                        m = (l - p[0].swiperSlideOffset - f / 2) / f * a.modifier,
                        v = r ? d * m : 0,
                        g = r ? 0 : d * m,
                        y = -u * Math.abs(m),
                        b = r ? 0 : a.stretch * m,
                        w = r ? a.stretch * m : 0;
                    Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(y) < .001 && (y = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0);
                    var x = "translate3d(" + w + "px," + b + "px," + y + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg)";
                    if (p.transform(x), p[0].style.zIndex = 1 - Math.abs(Math.round(m)), a.slideShadows) {
                        var T = r ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                            C = r ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = I('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), p.append(T)), 0 === C.length && (C = I('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), p.append(C)), T.length && (T[0].style.opacity = 0 < m ? m : 0), C.length && (C[0].style.opacity = 0 < -m ? -m : 0)
                    }
                }(E.pointerEvents || E.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = l + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        pe = {
            init: function() {
                var e = this.params.thumbs,
                    t = this.constructor;
                e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, ae.extend(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), ae.extend(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : ae.isObject(e.swiper) && (this.thumbs.swiper = new t(ae.extend({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex,
                        i = e.clickedSlide;
                    if (!(i && I(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                        var n;
                        if (n = e.params.loop ? parseInt(I(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                            var s = this.activeIndex;
                            this.slides.eq(s).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, s = this.activeIndex);
                            var a = this.slides.eq(s).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(),
                                r = this.slides.eq(s).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index();
                            n = void 0 === a || void 0 !== r && r - s < s - a ? r : a
                        }
                        this.slideTo(n)
                    }
                }
            },
            update: function(e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                    if (this.realIndex !== t.realIndex) {
                        var n, s = t.activeIndex;
                        if (t.params.loop) {
                            t.slides.eq(s).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, s = t.activeIndex);
                            var a = t.slides.eq(s).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                r = t.slides.eq(s).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                            n = void 0 === a ? r : void 0 === r ? a : r - s == s - a ? s : r - s < s - a ? r : a
                        } else n = this.realIndex;
                        t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(n) < 0 && (t.params.centeredSlides ? n = s < n ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : s < n && (n = n - i + 1), t.slideTo(n, e ? 0 : void 0))
                    }
                    var o = 1,
                        l = this.params.thumbs.slideThumbActiveClass;
                    if (1 < this.params.slidesPerView && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled)
                        for (var d = 0; d < o; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);
                    else
                        for (var u = 0; u < o; u += 1) t.slides.eq(this.realIndex + u).addClass(l)
                }
            }
        },
        fe = [H, B, R, F, W, X, Y, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                ae.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: U.enable.bind(this),
                        disable: U.disable.bind(this),
                        handle: U.handle.bind(this),
                        handleMouseEnter: U.handleMouseEnter.bind(this),
                        handleMouseLeave: U.handleMouseLeave.bind(this),
                        animateSlider: U.animateSlider.bind(this),
                        releaseScroll: U.releaseScroll.bind(this),
                        lastScrollTime: ae.now(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: []
                    }
                })
            },
            on: {
                init: function() {
                    !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                ae.extend(this, {
                    navigation: {
                        init: K.init.bind(this),
                        update: K.update.bind(this),
                        destroy: K.destroy.bind(this),
                        onNextClick: K.onNextClick.bind(this),
                        onPrevClick: K.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t, i = this.navigation,
                        n = i.$nextEl,
                        s = i.$prevEl;
                    !this.params.navigation.hideOnClick || I(e.target).is(s) || I(e.target).is(n) || (n ? t = n.hasClass(this.params.navigation.hiddenClass) : s && (t = s.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), n && n.toggleClass(this.params.navigation.hiddenClass), s && s.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                ae.extend(this, {
                    pagination: {
                        init: Z.init.bind(this),
                        render: Z.render.bind(this),
                        update: Z.update.bind(this),
                        destroy: Z.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    !this.params.loop && void 0 !== this.snapIndex || this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !I(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                ae.extend(this, {
                    scrollbar: {
                        init: Q.init.bind(this),
                        destroy: Q.destroy.bind(this),
                        updateSize: Q.updateSize.bind(this),
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this),
                        enableDraggable: Q.enableDraggable.bind(this),
                        disableDraggable: Q.disableDraggable.bind(this),
                        setDragPosition: Q.setDragPosition.bind(this),
                        getPointerPosition: Q.getPointerPosition.bind(this),
                        onDragStart: Q.onDragStart.bind(this),
                        onDragMove: Q.onDragMove.bind(this),
                        onDragEnd: Q.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                ae.extend(this, {
                    parallax: {
                        setTransform: J.setTransform.bind(this),
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var n = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                    t[e] = ee[e].bind(n)
                }), ae.extend(n, {
                    zoom: t
                });
                var s = 1;
                Object.defineProperty(n.zoom, "scale", {
                    get: function() {
                        return s
                    },
                    set: function(e) {
                        if (s !== e) {
                            var t = n.zoom.gesture.$imageEl ? n.zoom.gesture.$imageEl[0] : void 0,
                                i = n.zoom.gesture.$slideEl ? n.zoom.gesture.$slideEl[0] : void 0;
                            n.emit("zoomChange", e, t, i)
                        }
                        s = e
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                },
                slideChange: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                ae.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: te.load.bind(this),
                        loadInSlide: te.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                },
                slideChange: function() {
                    this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                ae.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: ie.getInterpolateFunction.bind(this),
                        setTranslate: ie.setTranslate.bind(this),
                        setTransition: ie.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                ae.extend(t, {
                    a11y: {
                        liveRegion: I('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(ne).forEach(function(e) {
                    t.a11y[e] = ne[e].bind(t)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                ae.extend(this, {
                    history: {
                        init: re.init.bind(this),
                        setHistory: re.setHistory.bind(this),
                        setHistoryPopState: re.setHistoryPopState.bind(this),
                        scrollToSlide: re.scrollToSlide.bind(this),
                        destroy: re.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                },
                slideChange: function() {
                    this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                ae.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: oe.init.bind(this),
                        destroy: oe.destroy.bind(this),
                        setHash: oe.setHash.bind(this),
                        onHashCange: oe.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                },
                slideChange: function() {
                    this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var t = this;
                ae.extend(t, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: le.run.bind(t),
                        start: le.start.bind(t),
                        stop: le.stop.bind(t),
                        pause: le.pause.bind(t),
                        onVisibilityChange: function() {
                            "hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause(), "visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), t.autoplay.paused = !1)
                        },
                        onTransitionEnd: function(e) {
                            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                touchEnd: function() {
                    this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                ae.extend(this, {
                    fadeEffect: {
                        setTranslate: de.setTranslate.bind(this),
                        setTransition: de.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ae.extend(this.params, e), ae.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                ae.extend(this, {
                    cubeEffect: {
                        setTranslate: ue.setTranslate.bind(this),
                        setTransition: ue.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        ae.extend(this.params, e), ae.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                ae.extend(this, {
                    flipEffect: {
                        setTranslate: ce.setTranslate.bind(this),
                        setTransition: ce.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ae.extend(this.params, e), ae.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                ae.extend(this, {
                    coverflowEffect: {
                        setTranslate: he.setTranslate.bind(this),
                        setTransition: he.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    multipleActiveThumbs: !0,
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                ae.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: pe.init.bind(this),
                        update: pe.update.bind(this),
                        onThumbClick: pe.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === j.use && (j.use = j.Class.use, j.installModule = j.Class.installModule), j.use(fe), j
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(u) {
    function e() {}

    function c(e, t) {
        m.ev.on("mfp" + e + w, t)
    }

    function h(e, t, i, n) {
        var s = document.createElement("div");
        return s.className = "mfp-" + e, i && (s.innerHTML = i), n ? t && t.appendChild(s) : (s = u(s), t && s.appendTo(t)), s
    }

    function p(e, t) {
        m.ev.triggerHandler("mfp" + e, t), m.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), m.st.callbacks[e] && m.st.callbacks[e].apply(m, u.isArray(t) ? t : [t]))
    }

    function f(e) {
        return e === t && m.currTemplate.closeBtn || (m.currTemplate.closeBtn = u(m.st.closeMarkup.replace("%title%", m.st.tClose)), t = e), m.currTemplate.closeBtn
    }

    function a() {
        u.magnificPopup.instance || ((m = new e).init(), u.magnificPopup.instance = m)
    }
    var m, n, v, s, g, t, l = "Close",
        d = "BeforeClose",
        y = "MarkupParse",
        b = "Open",
        w = ".mfp",
        x = "mfp-ready",
        i = "mfp-removing",
        r = "mfp-prevent-close",
        o = !!window.jQuery,
        T = u(window);
    e.prototype = {
        constructor: e,
        init: function() {
            var e = navigator.appVersion;
            m.isLowIE = m.isIE8 = document.all && !document.addEventListener, m.isAndroid = /android/gi.test(e), m.isIOS = /iphone|ipad|ipod/gi.test(e), m.supportsTransition = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            }(), m.probablyMobile = m.isAndroid || m.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), v = u(document), m.popupsCache = {}
        },
        open: function(e) {
            var t;
            if (!1 === e.isObj) {
                m.items = e.items.toArray(), m.index = 0;
                var i, n = e.items;
                for (t = 0; t < n.length; t++)
                    if ((i = n[t]).parsed && (i = i.el[0]), i === e.el[0]) {
                        m.index = t;
                        break
                    }
            } else m.items = u.isArray(e.items) ? e.items : [e.items], m.index = e.index || 0;
            if (!m.isOpen) {
                m.types = [], g = "", e.mainEl && e.mainEl.length ? m.ev = e.mainEl.eq(0) : m.ev = v, e.key ? (m.popupsCache[e.key] || (m.popupsCache[e.key] = {}), m.currTemplate = m.popupsCache[e.key]) : m.currTemplate = {}, m.st = u.extend(!0, {}, u.magnificPopup.defaults, e), m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos, m.st.modal && (m.st.closeOnContentClick = !1, m.st.closeOnBgClick = !1, m.st.showCloseBtn = !1, m.st.enableEscapeKey = !1), m.bgOverlay || (m.bgOverlay = h("bg").on("click" + w, function() {
                    m.close()
                }), m.wrap = h("wrap").attr("tabindex", -1).on("click" + w, function(e) {
                    m._checkIfClose(e.target) && m.close()
                }), m.container = h("container", m.wrap)), m.contentContainer = h("content"), m.st.preloader && (m.preloader = h("preloader", m.container, m.st.tLoading));
                var s = u.magnificPopup.modules;
                for (t = 0; t < s.length; t++) {
                    var a = s[t];
                    a = a.charAt(0).toUpperCase() + a.slice(1), m["init" + a].call(m)
                }
                p("BeforeOpen"), m.st.showCloseBtn && (m.st.closeBtnInside ? (c(y, function(e, t, i, n) {
                    i.close_replaceWith = f(n.type)
                }), g += " mfp-close-btn-in") : m.wrap.append(f())), m.st.alignTop && (g += " mfp-align-top"), m.fixedContentPos ? m.wrap.css({
                    overflow: m.st.overflowY,
                    overflowX: "hidden",
                    overflowY: m.st.overflowY
                }) : m.wrap.css({
                    top: T.scrollTop(),
                    position: "absolute"
                }), !1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos) || m.bgOverlay.css({
                    height: v.height(),
                    position: "absolute"
                }), m.st.enableEscapeKey && v.on("keyup" + w, function(e) {
                    27 === e.keyCode && m.close()
                }), T.on("resize" + w, function() {
                    m.updateSize()
                }), m.st.closeOnContentClick || (g += " mfp-auto-cursor"), g && m.wrap.addClass(g);
                var r = m.wH = T.height(),
                    o = {};
                if (m.fixedContentPos && m._hasScrollBar(r)) {
                    var l = m._getScrollbarSize();
                    l && (o.marginRight = l)
                }
                m.fixedContentPos && (m.isIE7 ? u("body, html").css("overflow", "hidden") : o.overflow = "hidden");
                var d = m.st.mainClass;
                return m.isIE7 && (d += " mfp-ie7"), d && m._addClassToMFP(d), m.updateItemHTML(), p("BuildControls"), u("html").css(o), m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || u(document.body)), m._lastFocusedEl = document.activeElement, setTimeout(function() {
                    m.content ? (m._addClassToMFP(x), m._setFocus()) : m.bgOverlay.addClass(x), v.on("focusin" + w, m._onFocusIn)
                }, 16), m.isOpen = !0, m.updateSize(r), p(b), e
            }
            m.updateItemHTML()
        },
        close: function() {
            m.isOpen && (p(d), m.isOpen = !1, m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(i), setTimeout(function() {
                m._close()
            }, m.st.removalDelay)) : m._close())
        },
        _close: function() {
            p(l);
            var e = i + " " + x + " ";
            if (m.bgOverlay.detach(), m.wrap.detach(), m.container.empty(), m.st.mainClass && (e += m.st.mainClass + " "), m._removeClassFromMFP(e), m.fixedContentPos) {
                var t = {
                    marginRight: ""
                };
                m.isIE7 ? u("body, html").css("overflow", "") : t.overflow = "", u("html").css(t)
            }
            v.off("keyup.mfp focusin" + w), m.ev.off(w), m.wrap.attr("class", "mfp-wrap").removeAttr("style"), m.bgOverlay.attr("class", "mfp-bg"), m.container.attr("class", "mfp-container"), !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(), m.st.autoFocusLast && m._lastFocusedEl && u(m._lastFocusedEl).focus(), m.currItem = null, m.content = null, m.currTemplate = null, m.prevHeight = 0, p("AfterClose")
        },
        updateSize: function(e) {
            if (m.isIOS) {
                var t = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * t;
                m.wrap.css("height", i), m.wH = i
            } else m.wH = e || T.height();
            m.fixedContentPos || m.wrap.css("height", m.wH), p("Resize")
        },
        updateItemHTML: function() {
            var e = m.items[m.index];
            m.contentContainer.detach(), m.content && m.content.detach(), e.parsed || (e = m.parseEl(m.index));
            var t = e.type;
            if (p("BeforeChange", [m.currItem ? m.currItem.type : "", t]), m.currItem = e, !m.currTemplate[t]) {
                var i = !!m.st[t] && m.st[t].markup;
                p("FirstMarkupParse", i), m.currTemplate[t] = !i || u(i)
            }
            s && s !== e.type && m.container.removeClass("mfp-" + s + "-holder");
            var n = m["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, m.currTemplate[t]);
            m.appendContent(n, t), e.preloaded = !0, p("Change", e), s = e.type, m.container.prepend(m.contentContainer), p("AfterChange")
        },
        appendContent: function(e, t) {
            (m.content = e) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[t] ? m.content.find(".mfp-close").length || m.content.append(f()) : m.content = e: m.content = "", p("BeforeAppend"), m.container.addClass("mfp-" + t + "-holder"), m.contentContainer.append(m.content)
        },
        parseEl: function(e) {
            var t, i = m.items[e];
            if ((i = i.tagName ? {
                    el: u(i)
                } : (t = i.type, {
                    data: i,
                    src: i.src
                })).el) {
                for (var n = m.types, s = 0; s < n.length; s++)
                    if (i.el.hasClass("mfp-" + n[s])) {
                        t = n[s];
                        break
                    }
                i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = t || m.st.type || "inline", i.index = e, i.parsed = !0, m.items[e] = i, p("ElementParse", i), m.items[e]
        },
        addGroup: function(t, i) {
            function e(e) {
                e.mfpEl = this, m._openClick(e, t, i)
            }
            var n = "click.magnificPopup";
            (i = i || {}).mainEl = t, i.items ? (i.isObj = !0, t.off(n).on(n, e)) : (i.isObj = !1, i.delegate ? t.off(n).on(n, i.delegate, e) : (i.items = t).off(n).on(n, e))
        },
        _openClick: function(e, t, i) {
            if ((void 0 !== i.midClick ? i.midClick : u.magnificPopup.defaults.midClick) || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                var n = void 0 !== i.disableOn ? i.disableOn : u.magnificPopup.defaults.disableOn;
                if (n)
                    if (u.isFunction(n)) {
                        if (!n.call(m)) return !0
                    } else if (T.width() < n) return !0;
                e.type && (e.preventDefault(), m.isOpen && e.stopPropagation()), i.el = u(e.mfpEl), i.delegate && (i.items = t.find(i.delegate)), m.open(i)
            }
        },
        updateStatus: function(e, t) {
            if (m.preloader) {
                n !== e && m.container.removeClass("mfp-s-" + n), t || "loading" !== e || (t = m.st.tLoading);
                var i = {
                    status: e,
                    text: t
                };
                p("UpdateStatus", i), e = i.status, t = i.text, m.preloader.html(t), m.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), m.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(e) {
            if (!u(e).hasClass(r)) {
                var t = m.st.closeOnContentClick,
                    i = m.st.closeOnBgClick;
                if (t && i) return !0;
                if (!m.content || u(e).hasClass("mfp-close") || m.preloader && e === m.preloader[0]) return !0;
                if (e === m.content[0] || u.contains(m.content[0], e)) {
                    if (t) return !0
                } else if (i && u.contains(document, e)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            m.bgOverlay.addClass(e), m.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), m.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (m.isIE7 ? v.height() : document.body.scrollHeight) > (e || T.height())
        },
        _setFocus: function() {
            (m.st.focus ? m.content.find(m.st.focus).eq(0) : m.wrap).focus()
        },
        _onFocusIn: function(e) {
            return e.target === m.wrap[0] || u.contains(m.wrap[0], e.target) ? void 0 : (m._setFocus(), !1)
        },
        _parseMarkup: function(s, e, t) {
            var a;
            t.data && (e = u.extend(t.data, e)), p(y, [s, e, t]), u.each(e, function(e, t) {
                if (void 0 === t || !1 === t) return !0;
                if (1 < (a = e.split("_")).length) {
                    var i = s.find(w + "-" + a[0]);
                    if (0 < i.length) {
                        var n = a[1];
                        "replaceWith" === n ? i[0] !== t[0] && i.replaceWith(t) : "img" === n ? i.is("img") ? i.attr("src", t) : i.replaceWith(u("<img>").attr("src", t).attr("class", i.attr("class"))) : i.attr(a[1], t)
                    }
                } else s.find(w + "-" + e).html(t)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === m.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), m.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return m.scrollbarSize
        }
    }, u.magnificPopup = {
        instance: null,
        proto: e.prototype,
        modules: [],
        open: function(e, t) {
            return a(), (e = e ? u.extend(!0, {}, e) : {}).isObj = !0, e.index = t || 0, this.instance.open(e)
        },
        close: function() {
            return u.magnificPopup.instance && u.magnificPopup.instance.close()
        },
        registerModule: function(e, t) {
            t.options && (u.magnificPopup.defaults[e] = t.options), u.extend(this.proto, t.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, u.fn.magnificPopup = function(e) {
        a();
        var t = u(this);
        if ("string" == typeof e)
            if ("open" === e) {
                var i, n = o ? t.data("magnificPopup") : t[0].magnificPopup,
                    s = parseInt(arguments[1], 10) || 0;
                i = n.items ? n.items[s] : (i = t, n.delegate && (i = i.find(n.delegate)), i.eq(s)), m._openClick({
                    mfpEl: i
                }, t, n)
            } else m.isOpen && m[e].apply(m, Array.prototype.slice.call(arguments, 1));
        else e = u.extend(!0, {}, e), o ? t.data("magnificPopup", e) : t[0].magnificPopup = e, m.addGroup(t, e);
        return t
    };

    function C() {
        k && (S.after(k.addClass(E)).detach(), k = null)
    }
    var E, S, k, M = "inline";
    u.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                m.types.push(M), c(l + "." + M, function() {
                    C()
                })
            },
            getInline: function(e, t) {
                if (C(), e.src) {
                    var i = m.st.inline,
                        n = u(e.src);
                    if (n.length) {
                        var s = n[0].parentNode;
                        s && s.tagName && (S || (E = i.hiddenClass, S = h(E), E = "mfp-" + E), k = n.after(S).detach().removeClass(E)), m.updateStatus("ready")
                    } else m.updateStatus("error", i.tNotFound), n = u("<div>");
                    return e.inlineElement = n
                }
                return m.updateStatus("ready"), m._parseMarkup(t, {}, e), t
            }
        }
    });

    function P() {
        I && u(document.body).removeClass(I)
    }

    function A() {
        P(), m.req && m.req.abort()
    }
    var I, L = "ajax";
    u.magnificPopup.registerModule(L, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                m.types.push(L), I = m.st.ajax.cursor, c(l + "." + L, A), c("BeforeChange." + L, A)
            },
            getAjax: function(s) {
                I && u(document.body).addClass(I), m.updateStatus("loading");
                var e = u.extend({
                    url: s.src,
                    success: function(e, t, i) {
                        var n = {
                            data: e,
                            xhr: i
                        };
                        p("ParseAjax", n), m.appendContent(u(n.data), L), s.finished = !0, P(), m._setFocus(), setTimeout(function() {
                            m.wrap.addClass(x)
                        }, 16), m.updateStatus("ready"), p("AjaxContentAdded")
                    },
                    error: function() {
                        P(), s.finished = s.loadError = !0, m.updateStatus("error", m.st.ajax.tError.replace("%url%", s.src))
                    }
                }, m.st.ajax.settings);
                return m.req = u.ajax(e), ""
            }
        }
    });
    var z;
    u.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = m.st.image,
                    t = ".image";
                m.types.push("image"), c(b + t, function() {
                    "image" === m.currItem.type && e.cursor && u(document.body).addClass(e.cursor)
                }), c(l + t, function() {
                    e.cursor && u(document.body).removeClass(e.cursor), T.off("resize" + w)
                }), c("Resize" + t, m.resizeImage), m.isLowIE && c("AfterChange", m.resizeImage)
            },
            resizeImage: function() {
                var e = m.currItem;
                if (e && e.img && m.st.image.verticalFit) {
                    var t = 0;
                    m.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", m.wH - t)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, z && clearInterval(z), e.isCheckingImgSize = !1, p("ImageHasSize", e), e.imgHidden && (m.content && m.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(t) {
                var i = 0,
                    n = t.img[0],
                    s = function(e) {
                        z && clearInterval(z), z = setInterval(function() {
                            return 0 < n.naturalWidth ? void m._onImageHasSize(t) : (200 < i && clearInterval(z), void(3 === ++i ? s(10) : 40 === i ? s(50) : 100 === i && s(500)))
                        }, e)
                    };
                s(1)
            },
            getImage: function(e, t) {
                var i = 0,
                    n = function() {
                        e && (e.img[0].complete ? (e.img.off(".mfploader"), e === m.currItem && (m._onImageHasSize(e), m.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, p("ImageLoadComplete")) : ++i < 200 ? setTimeout(n, 100) : s())
                    },
                    s = function() {
                        e && (e.img.off(".mfploader"), e === m.currItem && (m._onImageHasSize(e), m.updateStatus("error", a.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0)
                    },
                    a = m.st.image,
                    r = t.find(".mfp-img");
                if (r.length) {
                    var o = document.createElement("img");
                    o.className = "mfp-img", e.el && e.el.find("img").length && (o.alt = e.el.find("img").attr("alt")), e.img = u(o).on("load.mfploader", n).on("error.mfploader", s), o.src = e.src, r.is("img") && (e.img = e.img.clone()), 0 < (o = e.img[0]).naturalWidth ? e.hasSize = !0 : o.width || (e.hasSize = !1)
                }
                return m._parseMarkup(t, {
                    title: function(e) {
                        if (e.data && void 0 !== e.data.title) return e.data.title;
                        var t = m.st.image.titleSrc;
                        if (t) {
                            if (u.isFunction(t)) return t.call(m, e);
                            if (e.el) return e.el.attr(t) || ""
                        }
                        return ""
                    }(e),
                    img_replaceWith: e.img
                }, e), m.resizeImage(), e.hasSize ? (z && clearInterval(z), e.loadError ? (t.addClass("mfp-loading"), m.updateStatus("error", a.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"), m.updateStatus("ready"))) : (m.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, t.addClass("mfp-loading"), m.findImageSize(e))), t
            }
        }
    });
    var D;
    u.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, a = m.st.zoom,
                    t = ".zoom";
                if (a.enabled && m.supportsTransition) {
                    function i(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            i = "all " + a.duration / 1e3 + "s " + a.easing,
                            n = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            },
                            s = "transition";
                        return n["-webkit-" + s] = n["-moz-" + s] = n["-o-" + s] = n[s] = i, t.css(n), t
                    }

                    function n() {
                        m.content.css("visibility", "visible")
                    }
                    var s, r, o = a.duration;
                    c("BuildControls" + t, function() {
                        if (m._allowZoom()) {
                            if (clearTimeout(s), m.content.css("visibility", "hidden"), !(e = m._getItemToZoom())) return void n();
                            (r = i(e)).css(m._getOffset()), m.wrap.append(r), s = setTimeout(function() {
                                r.css(m._getOffset(!0)), s = setTimeout(function() {
                                    n(), setTimeout(function() {
                                        r.remove(), e = r = null, p("ZoomAnimationEnded")
                                    }, 16)
                                }, o)
                            }, 16)
                        }
                    }), c(d + t, function() {
                        if (m._allowZoom()) {
                            if (clearTimeout(s), m.st.removalDelay = o, !e) {
                                if (!(e = m._getItemToZoom())) return;
                                r = i(e)
                            }
                            r.css(m._getOffset(!0)), m.wrap.append(r), m.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(m._getOffset())
                            }, 16)
                        }
                    }), c(l + t, function() {
                        m._allowZoom() && (n(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === m.currItem.type
            },
            _getItemToZoom: function() {
                return !!m.currItem.hasSize && m.currItem.img
            },
            _getOffset: function(e) {
                var t, i = (t = e ? m.currItem.img : m.st.zoom.opener(m.currItem.el || m.currItem)).offset(),
                    n = parseInt(t.css("padding-top"), 10),
                    s = parseInt(t.css("padding-bottom"), 10);
                i.top -= u(window).scrollTop() - n;
                var a = {
                    width: t.width(),
                    height: (o ? t.innerHeight() : t[0].offsetHeight) - s - n
                };
                return void 0 === D && (D = void 0 !== document.createElement("p").style.MozTransform), D ? a["-moz-transform"] = a.transform = "translate(" + i.left + "px," + i.top + "px)" : (a.left = i.left, a.top = i.top), a
            }
        }
    });

    function O(e) {
        if (m.currTemplate[$]) {
            var t = m.currTemplate[$].find("iframe");
            t.length && (e || (t[0].src = "//about:blank"), m.isIE8 && t.css("display", e ? "block" : "none"))
        }
    }
    var $ = "iframe";
    u.magnificPopup.registerModule($, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                m.types.push($), c("BeforeChange", function(e, t, i) {
                    t !== i && (t === $ ? O() : i === $ && O(!0))
                }), c(l + "." + $, function() {
                    O()
                })
            },
            getIframe: function(e, t) {
                var i = e.src,
                    n = m.st.iframe;
                u.each(n.patterns, function() {
                    return -1 < i.indexOf(this.index) ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                });
                var s = {};
                return n.srcAction && (s[n.srcAction] = i), m._parseMarkup(t, s, e), m.updateStatus("ready"), t
            }
        }
    });

    function N(e) {
        var t = m.items.length;
        return t - 1 < e ? e - t : e < 0 ? t + e : e
    }

    function j(e, t, i) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    }
    u.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var a = m.st.gallery,
                    e = ".mfp-gallery";
                return m.direction = !0, !(!a || !a.enabled) && (g += " mfp-gallery", c(b + e, function() {
                    a.navigateByImgClick && m.wrap.on("click" + e, ".mfp-img", function() {
                        return 1 < m.items.length ? (m.next(), !1) : void 0
                    }), v.on("keydown" + e, function(e) {
                        37 === e.keyCode ? m.prev() : 39 === e.keyCode && m.next()
                    })
                }), c("UpdateStatus" + e, function(e, t) {
                    t.text && (t.text = j(t.text, m.currItem.index, m.items.length))
                }), c(y + e, function(e, t, i, n) {
                    var s = m.items.length;
                    i.counter = 1 < s ? j(a.tCounter, n.index, s) : ""
                }), c("BuildControls" + e, function() {
                    if (1 < m.items.length && a.arrows && !m.arrowLeft) {
                        var e = a.arrowMarkup,
                            t = m.arrowLeft = u(e.replace(/%title%/gi, a.tPrev).replace(/%dir%/gi, "left")).addClass(r),
                            i = m.arrowRight = u(e.replace(/%title%/gi, a.tNext).replace(/%dir%/gi, "right")).addClass(r);
                        t.click(function() {
                            m.prev()
                        }), i.click(function() {
                            m.next()
                        }), m.container.append(t.add(i))
                    }
                }), c("Change" + e, function() {
                    m._preloadTimeout && clearTimeout(m._preloadTimeout), m._preloadTimeout = setTimeout(function() {
                        m.preloadNearbyImages(), m._preloadTimeout = null
                    }, 16)
                }), void c(l + e, function() {
                    v.off(e), m.wrap.off("click" + e), m.arrowRight = m.arrowLeft = null
                }))
            },
            next: function() {
                m.direction = !0, m.index = N(m.index + 1), m.updateItemHTML()
            },
            prev: function() {
                m.direction = !1, m.index = N(m.index - 1), m.updateItemHTML()
            },
            goTo: function(e) {
                m.direction = e >= m.index, m.index = e, m.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, t = m.st.gallery.preload,
                    i = Math.min(t[0], m.items.length),
                    n = Math.min(t[1], m.items.length);
                for (e = 1; e <= (m.direction ? n : i); e++) m._preloadItem(m.index + e);
                for (e = 1; e <= (m.direction ? i : n); e++) m._preloadItem(m.index - e)
            },
            _preloadItem: function(e) {
                if (e = N(e), !m.items[e].preloaded) {
                    var t = m.items[e];
                    t.parsed || (t = m.parseEl(e)), p("LazyLoad", t), "image" === t.type && (t.img = u('<img class="mfp-img" />').on("load.mfploader", function() {
                        t.hasSize = !0
                    }).on("error.mfploader", function() {
                        t.hasSize = !0, t.loadError = !0, p("LazyLoadError", t)
                    }).attr("src", t.src)), t.preloaded = !0
                }
            }
        }
    });
    var H = "retina";
    u.magnificPopup.registerModule(H, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (1 < window.devicePixelRatio) {
                    var i = m.st.retina,
                        n = i.ratio;
                    1 < (n = isNaN(n) ? n() : n) && (c("ImageHasSize." + H, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), c("ElementParse." + H, function(e, t) {
                        t.src = i.replaceSrc(t, n)
                    }))
                }
            }
        }
    }), a()
});
var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.findInternal = function(e, t, i) {
        e instanceof String && (e = String(e));
        for (var n = e.length, s = 0; s < n; s++) {
            var a = e[s];
            if (t.call(i, a, s, e)) return {
                i: s,
                v: a
            }
        }
        return {
            i: -1,
            v: void 0
        }
    }, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, i) {
        e != Array.prototype && e != Object.prototype && (e[t] = i.value)
    }, $jscomp.getGlobal = function(e) {
        return ("undefined" == typeof window || window !== e) && "undefined" != typeof global && null != global ? global : e
    }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(e, t, i, n) {
        if (t) {
            for (i = $jscomp.global, e = e.split("."), n = 0; n < e.length - 1; n++) {
                var s = e[n];
                s in i || (i[s] = {}), i = i[s]
            }(t = t(n = i[e = e[e.length - 1]])) != n && null != t && $jscomp.defineProperty(i, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    }, $jscomp.polyfill("Array.prototype.find", function(e) {
        return e || function(e, t) {
            return $jscomp.findInternal(this, e, t).v
        }
    }, "es6", "es3"),
    function(e, t, i) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports && "undefined" == typeof Meteor ? module.exports = e(require("jquery")) : e(t || i)
    }(function(r) {
        function o(d, y, b) {
            var w = {
                invalid: [],
                getCaret: function() {
                    try {
                        var e = 0,
                            t = d.get(0),
                            i = document.selection,
                            n = t.selectionStart;
                        if (i && -1 === navigator.appVersion.indexOf("MSIE 10")) {
                            var s = i.createRange();
                            s.moveStart("character", -w.val().length), e = s.text.length
                        } else !n && "0" !== n || (e = n);
                        return e
                    } catch (e) {}
                },
                setCaret: function(e) {
                    try {
                        if (d.is(":focus")) {
                            var t = d.get(0);
                            if (t.setSelectionRange) t.setSelectionRange(e, e);
                            else {
                                var i = t.createTextRange();
                                i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", e), i.select()
                            }
                        }
                    } catch (e) {}
                },
                events: function() {
                    d.on("keydown.mask", function(e) {
                        d.data("mask-keycode", e.keyCode || e.which), d.data("mask-previus-value", d.val()), d.data("mask-previus-caret-pos", w.getCaret()), w.maskDigitPosMapOld = w.maskDigitPosMap
                    }).on(r.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", w.behaviour).on("paste.mask drop.mask", function() {
                        setTimeout(function() {
                            d.keydown().keyup()
                        }, 100)
                    }).on("change.mask", function() {
                        d.data("changed", !0)
                    }).on("blur.mask", function() {
                        a === w.val() || d.data("changed") || d.trigger("change"), d.data("changed", !1)
                    }).on("blur.mask", function() {
                        a = w.val()
                    }).on("focus.mask", function(e) {
                        !0 === b.selectOnFocus && r(e.target).select()
                    }).on("focusout.mask", function() {
                        b.clearIfNotMatch && !n.test(w.val()) && w.val("")
                    })
                },
                getRegexMask: function() {
                    for (var e, t, i, n, s = [], a = 0; a < y.length; a++)(e = x.translation[y.charAt(a)]) ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = e.optional, (e = e.recursive) ? (s.push(y.charAt(a)), n = {
                        digit: y.charAt(a),
                        pattern: t
                    }) : s.push(i || e ? t + "?" : t)) : s.push(y.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                    return s = s.join(""), n && (s = s.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern)), new RegExp(s)
                },
                destroyEvents: function() {
                    d.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
                },
                val: function(e) {
                    var t = d.is("input") ? "val" : "text";
                    return t = 0 < arguments.length ? (d[t]() !== e && d[t](e), d) : d[t]()
                },
                calculateCaretPosition: function(e) {
                    var t = w.getMasked(),
                        i = w.getCaret();
                    if (e !== t) {
                        var n = d.data("mask-previus-caret-pos") || 0;
                        t = t.length;
                        var s, a = e.length,
                            r = e = 0,
                            o = 0,
                            l = 0;
                        for (s = i; s < t && w.maskDigitPosMap[s]; s++) r++;
                        for (s = i - 1; 0 <= s && w.maskDigitPosMap[s]; s--) e++;
                        for (s = i - 1; 0 <= s; s--) w.maskDigitPosMap[s] && o++;
                        for (s = n - 1; 0 <= s; s--) w.maskDigitPosMapOld[s] && l++;
                        a < i ? i = 10 * t : i <= n && n !== a ? w.maskDigitPosMapOld[i] || (i = (n = i) - (l - o) - e, w.maskDigitPosMap[i] && (i = n)) : n < i && (i = i + (o - l) + r)
                    }
                    return i
                },
                behaviour: function(e) {
                    e = e || window.event, w.invalid = [];
                    var t = d.data("mask-keycode");
                    if (-1 === r.inArray(t, x.byPassKeys)) {
                        t = w.getMasked();
                        var i = w.getCaret(),
                            n = d.data("mask-previus-value") || "";
                        return setTimeout(function() {
                            w.setCaret(w.calculateCaretPosition(n))
                        }, r.jMaskGlobals.keyStrokeCompensation), w.val(t), w.setCaret(i), w.callbacks(e)
                    }
                },
                getMasked: function(e, t) {
                    var i, n = [],
                        s = void 0 === t ? w.val() : t + "",
                        a = 0,
                        r = y.length,
                        o = 0,
                        l = s.length,
                        d = 1,
                        u = "push",
                        c = -1,
                        h = 0;
                    if (t = [], b.reverse) {
                        u = "unshift", d = -1;
                        var p = 0;
                        a = r - 1, o = l - 1;
                        var f = function() {
                            return -1 < a && -1 < o
                        }
                    } else p = r - 1, f = function() {
                        return a < r && o < l
                    };
                    for (; f();) {
                        var m = y.charAt(a),
                            v = s.charAt(o),
                            g = x.translation[m];
                        g ? (v.match(g.pattern) ? (n[u](v), g.recursive && (-1 === c ? c = a : a === p && a !== c && (a = c - d), p === c && (a -= d)), a += d) : v === i ? (h--, i = void 0) : g.optional ? (a += d, o -= d) : g.fallback ? (n[u](g.fallback), a += d, o -= d) : w.invalid.push({
                            p: o,
                            v: v,
                            e: g.pattern
                        }), o += d) : (e || n[u](m), v === m ? (t.push(o), o += d) : (i = m, t.push(o + h), h++), a += d)
                    }
                    return e = y.charAt(p), r !== l + 1 || x.translation[e] || n.push(e), n = n.join(""), w.mapMaskdigitPositions(n, t, l), n
                },
                mapMaskdigitPositions: function(e, t, i) {
                    for (e = b.reverse ? e.length - i : 0, w.maskDigitPosMap = {}, i = 0; i < t.length; i++) w.maskDigitPosMap[t[i] + e] = 1
                },
                callbacks: function(e) {
                    function t(e, t, i) {
                        "function" == typeof b[e] && t && b[e].apply(this, i)
                    }
                    var i = w.val(),
                        n = i !== a,
                        s = [i, e, d, b];
                    t("onChange", !0 == n, s), t("onKeyPress", !0 == n, s), t("onComplete", i.length === y.length, s), t("onInvalid", 0 < w.invalid.length, [i, e, d, w.invalid, b])
                }
            };
            d = r(d);
            var n, x = this,
                a = w.val();
            y = "function" == typeof y ? y(w.val(), void 0, d, b) : y, x.mask = y, x.options = b, x.remove = function() {
                var e = w.getCaret();
                return x.options.placeholder && d.removeAttr("placeholder"), d.data("mask-maxlength") && d.removeAttr("maxlength"), w.destroyEvents(), w.val(x.getCleanVal()), w.setCaret(e), d
            }, x.getCleanVal = function() {
                return w.getMasked(!0)
            }, x.getMaskedVal = function(e) {
                return w.getMasked(!1, e)
            }, x.init = function(e) {
                if (e = e || !1, b = b || {}, x.clearIfNotMatch = r.jMaskGlobals.clearIfNotMatch, x.byPassKeys = r.jMaskGlobals.byPassKeys, x.translation = r.extend({}, r.jMaskGlobals.translation, b.translation), x = r.extend(!0, {}, x, b), n = w.getRegexMask(), e) w.events(), w.val(w.getMasked());
                else {
                    b.placeholder && d.attr("placeholder", b.placeholder), d.data("mask") && d.attr("autocomplete", "off");
                    for (var t = !(e = 0); e < y.length; e++) {
                        var i = x.translation[y.charAt(e)];
                        if (i && i.recursive) {
                            t = !1;
                            break
                        }
                    }
                    t && d.attr("maxlength", y.length).data("mask-maxlength", !0), w.destroyEvents(), w.events(), e = w.getCaret(), w.val(w.getMasked()), w.setCaret(e)
                }
            }, x.init(!d.is("input"))
        }
        r.maskWatchers = {};

        function t() {
            var e = r(this),
                t = {},
                i = e.attr("data-mask");
            if (e.attr("data-mask-reverse") && (t.reverse = !0), e.attr("data-mask-clearifnotmatch") && (t.clearIfNotMatch = !0), "true" === e.attr("data-mask-selectonfocus") && (t.selectOnFocus = !0), l(e, i, t)) return e.data("mask", new o(this, i, t))
        }
        var l = function(e, t, i) {
                i = i || {};
                var n = r(e).data("mask"),
                    s = JSON.stringify;
                e = r(e).val() || r(e).text();
                try {
                    return "function" == typeof t && (t = t(e)), "object" != typeof n || s(n.options) !== s(i) || n.mask !== t
                } catch (e) {}
            },
            e = function(e) {
                var t = document.createElement("div"),
                    i = (e = "on" + e) in t;
                return i || (t.setAttribute(e, "return;"), i = "function" == typeof t[e]), i
            };
        r.fn.mask = function(e, t) {
            t = t || {};
            var i = this.selector,
                n = r.jMaskGlobals,
                s = n.watchInterval;
            n = t.watchInputs || n.watchInputs;

            function a() {
                if (l(this, e, t)) return r(this).data("mask", new o(this, e, t))
            }
            return r(this).each(a), i && "" !== i && n && (clearInterval(r.maskWatchers[i]), r.maskWatchers[i] = setInterval(function() {
                r(document).find(i).each(a)
            }, s)), this
        }, r.fn.masked = function(e) {
            return this.data("mask").getMaskedVal(e)
        }, r.fn.unmask = function() {
            return clearInterval(r.maskWatchers[this.selector]), delete r.maskWatchers[this.selector], this.each(function() {
                var e = r(this).data("mask");
                e && e.remove().removeData("mask")
            })
        }, r.fn.cleanVal = function() {
            return this.data("mask").getCleanVal()
        }, r.applyDataMask = function(e) {
            ((e = e || r.jMaskGlobals.maskElements) instanceof r ? e : r(e)).filter(r.jMaskGlobals.dataMaskAttr).each(t)
        }, e = {
            maskElements: "input,td,span,div",
            dataMaskAttr: "*[data-mask]",
            dataMask: !0,
            watchInterval: 300,
            watchInputs: !0,
            keyStrokeCompensation: 10,
            useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && e("input"),
            watchDataMask: !1,
            byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
            translation: {
                0: {
                    pattern: /\d/
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                A: {
                    pattern: /[a-zA-Z0-9]/
                },
                S: {
                    pattern: /[a-zA-Z]/
                }
            }
        }, r.jMaskGlobals = r.jMaskGlobals || {}, (e = r.jMaskGlobals = r.extend(!0, {}, e, r.jMaskGlobals)).dataMask && r.applyDataMask(), setInterval(function() {
            r.jMaskGlobals.watchDataMask && r.applyDataMask()
        }, e.watchInterval)
    }, window.jQuery, window.Zepto),
    function(O, p) {
        "use strict";

        function r(b, w, x, e, t) {
            function i() {
                var s, a, r, o;
                y = 1 < O.devicePixelRatio, x = n(x), 0 <= w.delay && setTimeout(function() {
                    l(!0)
                }, w.delay), (w.delay < 0 || w.combined) && (e.e = (s = w.throttle, a = function(e) {
                    "resize" === e.type && (E = S = -1), l(e.all)
                }, o = 0, function(e, t) {
                    function i() {
                        o = +new Date, a.call(b, e)
                    }
                    var n = new Date - o;
                    r && clearTimeout(r), s < n || !w.enableThrottle || t ? i() : r = setTimeout(i, s - n)
                }), e.a = function(e) {
                    e = n(e), x.push.apply(x, e)
                }, e.g = function() {
                    return x = $(x).filter(function() {
                        return !$(this).data(w.loadedName)
                    })
                }, e.f = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = x.filter(function() {
                            return this === e[t]
                        });
                        i.length && l(!1, i)
                    }
                }, l(), $(w.appendScroll).on("scroll." + t + " resize." + t, e.e))
            }

            function n(e) {
                for (var t = w.defaultImage, i = w.placeholder, n = w.imageBase, s = w.srcsetAttribute, a = w.loaderAttribute, r = w._f || {}, o = 0, l = (e = $(e).filter(function() {
                        var e = $(this),
                            t = C(this);
                        return !e.data(w.handledName) && (e.attr(w.attribute) || e.attr(s) || e.attr(a) || r[t] !== p)
                    }).data("plugin_" + w.name, b)).length; o < l; o++) {
                    var d = $(e[o]),
                        u = C(e[o]),
                        c = d.attr(w.imageBaseAttribute) || n;
                    u === A && c && d.attr(s) && d.attr(s, h(d.attr(s), c)), r[u] === p || d.attr(a) || d.attr(a, r[u]), u === A && t && !d.attr(I) ? d.attr(I, t) : u === A || !i || d.css(D) && "none" !== d.css(D) || d.css(D, "url('" + i + "')")
                }
                return e
            }

            function l(e, t) {
                if (x.length) {
                    for (var i = t || x, n = !1, s = w.imageBase || "", a = w.srcsetAttribute, r = w.handledName, o = 0; o < i.length; o++)
                        if (e || t || (p = i[o], 0, f = p.getBoundingClientRect(), m = w.scrollDirection, v = w.threshold, g = (0 <= S ? S : S = $(O).height()) + v > f.top && -v < f.bottom, y = (0 <= E ? E : E = $(O).width()) + v > f.left && -v < f.right, "vertical" === m ? g : ("horizontal" === m || g) && y)) {
                            var l = $(i[o]),
                                d = C(i[o]),
                                u = l.attr(w.attribute),
                                c = l.attr(w.imageBaseAttribute) || s,
                                h = l.attr(w.loaderAttribute);
                            l.data(r) || w.visibleOnly && !l.is(":visible") || !((u || l.attr(a)) && (d === A && (c + u !== l.attr(I) || l.attr(a) !== l.attr(L)) || d !== A && c + u !== l.css(D)) || h) || (n = !0, l.data(r, !0), T(l, d, c, h))
                        }
                    var p, f, m, v, g, y;
                    n && (x = $(x).filter(function() {
                        return !$(this).data(r)
                    }))
                } else w.autoDestroy && b.destroy()
            }

            function T(t, e, i, n) {
                ++g;
                var s = function() {
                    v("onError", t), m(), s = $.noop
                };
                v("beforeLoad", t);
                var a = w.attribute,
                    r = w.srcsetAttribute,
                    o = w.sizesAttribute,
                    l = w.retinaAttribute,
                    d = w.removeAttribute,
                    u = w.loadedName,
                    c = t.attr(l);
                if (n) {
                    var h = function() {
                        d && t.removeAttr(w.loaderAttribute), t.data(u, !0), v(k, t), setTimeout(m, 1), h = $.noop
                    };
                    t.off(P).one(P, s).one(M, h), v(n, t, function(e) {
                        e ? (t.off(M), h()) : (t.off(P), s())
                    }) || t.trigger(P)
                } else {
                    var p = $(new Image);
                    p.one(P, s).one(M, function() {
                        t.hide(), e === A ? t.attr(z, p.attr(z)).attr(L, p.attr(L)).attr(I, p.attr(I)) : t.css(D, "url('" + p.attr(I) + "')"), t[w.effect](w.effectTime), d && (t.removeAttr(a + " " + r + " " + l + " " + w.imageBaseAttribute), o !== z && t.removeAttr(o)), t.data(u, !0), v(k, t), p.remove(), m()
                    });
                    var f = (y && c ? c : t.attr(a)) || "";
                    p.attr(z, t.attr(o)).attr(L, t.attr(r)).attr(I, f ? i + f : null), p.complete && p.trigger(M)
                }
            }

            function C(e) {
                return e.tagName.toLowerCase()
            }

            function h(e, t) {
                if (t) {
                    var i = e.split(",");
                    e = "";
                    for (var n = 0, s = i.length; n < s; n++) e += t + i[n].trim() + (n !== s - 1 ? "," : "")
                }
                return e
            }

            function m() {
                --g, x.length || g || v("onFinishedAll")
            }

            function v(e, t, i) {
                return (e = w[e]) && (e.apply(b, [].slice.call(arguments, 1)), 1)
            }
            var g = 0,
                E = -1,
                S = -1,
                y = !1,
                k = "afterLoad",
                M = "load",
                P = "error",
                A = "img",
                I = "src",
                L = "srcset",
                z = "sizes",
                D = "background-image";
            "event" === w.bind || s ? i() : $(O).on(M + "." + t, i)
        }

        function d(e, t) {
            var i = this,
                n = $.extend({}, i.config, t),
                s = {},
                a = n.name + "-" + ++o;
            return i.config = function(e, t) {
                return t === p ? n[e] : (n[e] = t, i)
            }, i.addItems = function(e) {
                return s.a && s.a("string" === $.type(e) ? $(e) : e), i
            }, i.getItems = function() {
                return s.g ? s.g() : {}
            }, i.update = function(e) {
                return s.e && s.e({}, !e), i
            }, i.force = function(e) {
                return s.f && s.f("string" === $.type(e) ? $(e) : e), i
            }, i.loadAll = function() {
                return s.e && s.e({
                    all: !0
                }, !0), i
            }, i.destroy = function() {
                return $(n.appendScroll).off("." + a, s.e), $(O).off("." + a), s = {}, p
            }, r(i, n, e, s, a), n.chainable ? e : i
        }
        var $ = O.jQuery || O.Zepto,
            o = 0,
            s = !1;
        $.fn.Lazy = $.fn.lazy = function(e) {
            return new d(this, e)
        }, $.Lazy = $.lazy = function(e, t, i) {
            if ($.isFunction(t) && (i = t, t = []), $.isFunction(i)) {
                e = $.isArray(e) ? e : [e], t = $.isArray(t) ? t : [t];
                for (var n = d.prototype.config, s = n._f || (n._f = {}), a = 0, r = e.length; a < r; a++) n[e[a]] !== p && !$.isFunction(n[e[a]]) || (n[e[a]] = i);
                for (var o = 0, l = t.length; o < l; o++) s[t[o]] = e[0]
            }
        }, d.prototype.config = {
            name: "lazy",
            chainable: !0,
            autoDestroy: !0,
            bind: "load",
            threshold: 500,
            visibleOnly: !1,
            appendScroll: O,
            scrollDirection: "both",
            imageBase: null,
            defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
            placeholder: null,
            delay: -1,
            combined: !1,
            attribute: "data-src",
            srcsetAttribute: "data-srcset",
            sizesAttribute: "data-sizes",
            retinaAttribute: "data-retina",
            loaderAttribute: "data-loader",
            imageBaseAttribute: "data-imagebase",
            removeAttribute: !0,
            handledName: "handled",
            loadedName: "loaded",
            effect: "show",
            effectTime: 0,
            enableThrottle: !0,
            throttle: 250,
            beforeLoad: p,
            afterLoad: p,
            onError: p,
            onFinishedAll: p
        }, $(O).on("load", function() {
            s = !0
        })
    }(window);