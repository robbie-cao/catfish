! function(e, t, n) {
    function o(e) {
        return "[object Function]" == g.call(e)
    }

    function r(e) {
        return "string" == typeof e
    }

    function i() {}

    function s(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function a() {
        var e = h.shift();
        v = 1, e ? e.t ? m(function() {
            ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), a()) : v = 0
    }

    function c(e, n, o, r, i, c, l) {
        function p(t) {
            if (!f && s(u.readyState) && (b.r = f = 1, !v && a(), u.onload = u.onreadystatechange = null, t)) {
                "img" != e && m(function() {
                    w.removeChild(u)
                }, 50);
                for (var o in A[n]) A[n].hasOwnProperty(o) && A[n][o].onload()
            }
        }
        var l = l || d.errorTimeout,
            u = t.createElement(e),
            f = 0,
            g = 0,
            b = {
                t: o,
                s: n,
                e: i,
                a: c,
                x: l
            };
        1 === A[n] && (g = 1, A[n] = []), "object" == e ? u.data = n : (u.src = n, u.type = e), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function() {
            p.call(this, g)
        }, h.splice(r, 0, b), "img" != e && (g || 2 === A[n] ? (w.insertBefore(u, j ? null : y), m(p, l)) : A[n].push(u))
    }

    function l(e, t, n, o, i) {
        return v = 0, t = t || "j", r(e) ? c("c" == t ? x : E, e, t, this.i++, n, o, i) : (h.splice(this.i++, 0, e), 1 == h.length && a()), this
    }

    function p() {
        var e = d;
        return e.loader = {
            load: l,
            i: 0
        }, e
    }
    var u, d, f = t.documentElement,
        m = e.setTimeout,
        y = t.getElementsByTagName("script")[0],
        g = {}.toString,
        h = [],
        v = 0,
        b = "MozAppearance" in f.style,
        j = b && !!t.createRange().compareNode,
        w = j ? f : y.parentNode,
        f = e.opera && "[object Opera]" == g.call(e.opera),
        f = !!t.attachEvent && !f,
        E = b ? "object" : f ? "script" : "img",
        x = f ? "script" : E,
        O = Array.isArray || function(e) {
            return "[object Array]" == g.call(e)
        },
        S = [],
        A = {},
        C = {
            timeout: function(e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        };
    d = function(e) {
        function t(e) {
            var t, n, o, e = e.split("!"),
                r = S.length,
                i = e.pop(),
                s = e.length,
                i = {
                    url: i,
                    origUrl: i,
                    prefixes: e
                };
            for (n = 0; s > n; n++) o = e[n].split("="), (t = C[o.shift()]) && (i = t(i, o));
            for (n = 0; r > n; n++) i = S[n](i);
            return i
        }

        function s(e, r, i, s, a) {
            var c = t(e),
                l = c.autoCallback;
            c.url.split(".").pop().split("?").shift(), c.bypass || (r && (r = o(r) ? r : r[e] || r[s] || r[e.split("/").pop().split("?")[0]]), c.instead ? c.instead(e, r, i, s, a) : (A[c.url] ? c.noexec = !0 : A[c.url] = 1, i.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout), (o(r) || o(l)) && i.load(function() {
                p(), r && r(c.origUrl, a, s), l && l(c.origUrl, a, s), A[c.url] = 2
            })))
        }

        function a(e, t) {
            function n(e, n) {
                if (e) {
                    if (r(e)) n || (u = function() {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), f()
                    }), s(e, u, t, 0, l);
                    else if (Object(e) === e)
                        for (c in a = function() {
                                var t, n = 0;
                                for (t in e) e.hasOwnProperty(t) && n++;
                                return n
                            }(), e) e.hasOwnProperty(c) && (!n && !--a && (o(u) ? u = function() {
                            var e = [].slice.call(arguments);
                            d.apply(this, e), f()
                        } : u[c] = function(e) {
                            return function() {
                                var t = [].slice.call(arguments);
                                e && e.apply(this, t), f()
                            }
                        }(d[c])), s(e[c], u, t, c, l))
                } else !n && f()
            }
            var a, c, l = !!e.test,
                p = e.load || e.both,
                u = e.callback || i,
                d = u,
                f = e.complete || i;
            n(l ? e.yep : e.nope, !!p), p && n(p)
        }
        var c, l, u = this.yepnope.loader;
        if (r(e)) s(e, 0, u, 0);
        else if (O(e))
            for (c = 0; c < e.length; c++) l = e[c], r(l) ? s(l, 0, u, 0) : O(l) ? d(l) : Object(l) === l && a(l, u);
        else Object(e) === e && a(e, u)
    }, d.addPrefix = function(e, t) {
        C[e] = t
    }, d.addFilter = function(e) {
        S.push(e)
    }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", u = function() {
        t.removeEventListener("DOMContentLoaded", u, 0), t.readyState = "complete"
    }, 0)), e.yepnope = p(), e.yepnope.executeStack = a, e.yepnope.injectJs = function(e, n, o, r, c, l) {
        var p, u, f = t.createElement("script"),
            r = r || d.errorTimeout;
        f.src = e;
        for (u in o) f.setAttribute(u, o[u]);
        n = l ? a : n || i, f.onreadystatechange = f.onload = function() {
            !p && s(f.readyState) && (p = 1, n(), f.onload = f.onreadystatechange = null)
        }, m(function() {
            p || (p = 1, n(1))
        }, r), c ? f.onload() : y.parentNode.insertBefore(f, y)
    }, e.yepnope.injectCss = function(e, n, o, r, s, c) {
        var l, r = t.createElement("link"),
            n = c ? a : n || i;
        r.href = e, r.rel = "stylesheet", r.type = "text/css";
        for (l in o) r.setAttribute(l, o[l]);
        s || (y.parentNode.insertBefore(r, y), m(n, 0))
    }
}(this, document),
function() {
    "use strict";
    var e = document.getElementById("webplate-content"),
        t = document.getElementById("webplate").getAttribute("src").replace("start.js", ""),
        n = t + "engine/",
        o = t + "project/",
        r = {
            component: o + "component/",
            config: o + "config.json",
            engine: {
                css: n + "css/",
                js: n + "js/"
            },
            project: {
                css: o + "css/",
                iconFont: {
                    fontAwesome: o + "icon-font/font-awesome/css/font-awesome.min.css",
                    icoMoon: o + "icon-font/icomoon/style.css"
                },
                js: o + "js/",
                ui: o + "ui/"
            },
            root: t
        },
        i = [],
        s = [],
        a = [],
        c = [],
        l = [r.engine.js + "scripts.min.js", r.engine.css + "styles.css"];
    if (null !== e) {
        var p = document.createElement("div"),
            u = "Loading",
            d = 0;
        e.style.display = "none", p.id = "web-page-loader", p.style.width = "140px", p.style.margin = "0px auto", p.style.paddingLeft = "38px", p.style.paddingTop = "150px", p.style.color = "#ccd1d9", p.style.fontSize = "20px", p.style.fontFamily = "Arial, Helvetica, sans-serif", document.getElementsByTagName("body")[0].appendChild(p);
        var f = setInterval(function() {
            d++, null !== document.getElementById("web-page-loader") ? document.getElementById("web-page-loader").innerHTML = u + new Array(d % 5).join(".") : clearInterval(f)
        }, 500)
    }
    var m = {
        init: function() {
            yepnope([{
                load: l,
                complete: function() {
                    Modernizr.touchevents && yepnope({
                        load: r.engine.js + "touch.min.js",
                        complete: function() {
                            "addEventListener" in document && document.addEventListener("DOMContentLoaded", function() {
                                FastClick.attach(document.body)
                            }, !1)
                        }
                    }), web.overlayAdd(), web.scrollWatch(), web.windowWatch();
                    var e = web.url();
                    m.loadJSON(r.config, function() {
                        if (4 == this.readyState && 200 == this.status) {
                            var t = this.responseText,
                                n = JSON.parse(t),
                                o = !1,
                                i = n.project["body-class"] || !1,
                                s = n.project["component-first"] || [],
                                l = n.project.component || [],
                                p = n.project["form-colour"] || "blue",
                                u = n.project["icon-font"] || !1,
                                d = n.project.css || [],
                                f = n.project.js || [],
                                y = n.project.ui || !1;
                            if (n.project.page)
                                for (var g = n.project.page.length - 1; g >= 0; g--) {
                                    var h = n.project.page[g];
                                    if (h.url.indexOf("*") > -1 ? e.currentUrl.indexOf(h.url.substring(0, h.url.length - 1)) > -1 && (o = !0) : e.currentUrl === e.baseUrl + h.url && (o = !0), o === !0) {
                                        var v = h["config-type"] || "merge";
                                        if ("new" == v) i = h["body-class"] || !1, s = h["component-first"] || [], l = h.component || [], p = h["form-colour"] || "blue", u = h["icon-font"] || !1, d = h.css || [], f = h.js || [], y = h.ui || !1;
                                        else {
                                            if (i = h["body-class"] ? h["body-class"] : i, p = h["form-colour"] ? h["form-colour"] : p, u = h["form-colour"] ? h["icon-font"] : u, y = h.ui ? h.ui : y, h["component-first"])
                                                for (var g = 0, b = h["component-first"].length; b > g; g++) {
                                                    var j = h["component-first"][g]; - 1 == s.indexOf(j) && s.push(j)
                                                }
                                            if (h.component)
                                                for (var g = 0, b = h.component.length; b > g; g++) {
                                                    var w = h.component[g]; - 1 == l.indexOf(w) && l.push(w)
                                                }
                                            if (h.css)
                                                for (var g = 0, b = h.css.length; b > g; g++) {
                                                    var E = h.css[g]; - 1 === d.indexOf(E) && d.push(E)
                                                }
                                            if (h.js)
                                                for (var g = 0, b = h.js.length; b > g; g++) {
                                                    var x = h.js[g]; - 1 === f.indexOf(x) && f.push(x)
                                                }
                                        }
                                        break
                                    }
                                }
                            i !== !1 && web.classAdd(web.element.body, i.trim()), t.indexOf("formplate") > -1 && web.element.body.setAttribute("data-formplate-colour", p), "icomoon" == u ? yepnope({
                                load: r.project.iconFont.icoMoon
                            }) : "font-awesome" == u && yepnope({
                                load: r.project.iconFont.fontAwesome
                            }), 0 != y && (a.push(r.project.ui + y + "/style.css"), c.push(r.project.ui + y + "/script.min.js")), s.length > 0 ? m.loadComponentsFirst(s, l, d, f) : l.length > 0 ? m.loadComponents(l, d, f) : m.loadProjectFiles(d, f)
                        }
                    })
                }
            }])
        },
        loadComponents: function(e, t, n) {
            for (var o = 0, i = e.length; i > o; o++) ! function(i) {
                var a = e[i++];
                m.loadJSON(r.component + a + "/.bower.json", function() {
                    if (4 == this.readyState && 200 == this.status) {
                        var c = JSON.parse(this.responseText);
                        if ("object" == typeof c.main)
                            for (o = 0; o < c.main.length; o++) s.push(r.component + a + "/" + c.main[o]);
                        else s.push(r.component + a + "/" + c.main);
                        i == e.length && yepnope({
                            load: s,
                            complete: function() {
                                m.loadProjectFiles(t, n)
                            }
                        })
                    }
                })
            }(o)
        },
        loadComponentsFirst: function(e, t, n, o) {
            for (var s = 0, a = e.length; a > s; s++) ! function(s) {
                var a = e[s++];
                m.loadJSON(r.component + a + "/.bower.json", function() {
                    if (4 == this.readyState && 200 == this.status) {
                        var c = JSON.parse(this.responseText);
                        if ("object" == typeof c.main)
                            for (var l = 0, p = c.main.length; p > l; l++) i.push(r.component + a + "/" + c.main[l]);
                        else i.push(r.component + a + "/" + c.main);
                        s == e.length && yepnope({
                            load: i,
                            complete: function() {
                                t.length > 0 ? m.loadComponents(t, n, o) : m.loadProjectFiles(n, o)
                            }
                        })
                    }
                })
            }(s)
        },
        loadJSON: function(e, t) {
            var n = new XMLHttpRequest;
            n.onreadystatechange = t, n.open("GET", e, !0), n.send()
        },
        loadProjectFiles: function(t, n) {
            for (var o = 0, i = t.length; i > o; o++) {
                var s = t[o].trim();
                "css" === web.getExtension(s) && a.push(r.project.css + s)
            }
            for (o = 0; o < n.length; o++) {
                var s = n[o].trim();
                "js" === web.getExtension(s) && (0 === o && c.push(r.engine.js + "overwrite.min.js"), c.push(r.project.js + s))
            }
            a.length > 0 ? yepnope({
                load: a,
                complete: function() {
                    null !== e ? (e.removeAttribute("style"), document.getElementById("web-page-loader").parentNode.removeChild(document.getElementById("web-page-loader"))) : web.element.body.removeAttribute("style"), setTimeout(function() {
                        yepnope({
                            load: c
                        })
                    }, 50)
                }
            }) : c.length > 0 ? (null !== e ? (e.removeAttribute("style"), document.getElementById("web-page-loader").parentNode.removeChild(document.getElementById("web-page-loader"))) : web.element.body.removeAttribute("style"), setTimeout(function() {
                yepnope({
                    load: c
                })
            }, 50)) : null !== e ? (e.removeAttribute("style"), document.getElementById("web-page-loader").parentNode.removeChild(document.getElementById("web-page-loader"))) : web.element.body.removeAttribute("style")
        }
    };
    m.init()
}();
