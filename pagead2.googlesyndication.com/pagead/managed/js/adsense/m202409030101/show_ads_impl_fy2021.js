(function(sttc) {
    'use strict';
    var ba, da = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ea(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ea(this),
        ha = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ia = {},
        la = {};

    function ma(a, b, c) {
        if (!c || a != null) {
            c = la[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function oa(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ia ? f = ia : f = fa;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? da(ia, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (la[d] === void 0 && (a = Math.random() * 1E9 >>> 0, la[d] = ha ? fa.Symbol(d) : "$jscp$" + a + "$" + d), da(f, la[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var qa = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ra;
    if (ha && typeof Object.setPrototypeOf == "function") ra = Object.setPrototypeOf;
    else {
        var sa;
        a: {
            var ta = {
                    a: !0
                },
                ua = {};
            try {
                ua.__proto__ = ta;
                sa = ua.a;
                break a
            } catch (a) {}
            sa = !1
        }
        ra = sa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var va = ra;

    function wa(a, b) {
        a.prototype = qa(b.prototype);
        a.prototype.constructor = a;
        if (va) va(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Qk = b.prototype
    }
    oa("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    oa("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    oa("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        wa(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    oa("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ia.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var q = this || self;

    function xa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = q, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ya(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Aa(a) {
        var b = ya(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }

    function Ba(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function Da(a) {
        return Object.prototype.hasOwnProperty.call(a, Ea) && a[Ea] || (a[Ea] = ++Fa)
    }
    var Ea = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Fa = 0;

    function Ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ia(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ja(a, b, c) {
        Ja = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ha : Ia;
        return Ja.apply(null, arguments)
    }

    function Ka(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function La(a, b, c) {
        a = a.split(".");
        c = c || q;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ma(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Qk = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Xo = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Na(a) {
        return a
    };
    var Pa = {
        Un: 0,
        Tn: 1,
        Sn: 2
    };
    var Qa;

    function Ra(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Sa(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ta(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Ua(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Va(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Wa(a, b, c) {
        let d = c;
        Sa(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Xa(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ya(a, b) {
        return Ra(a, b) >= 0
    }

    function Za(a, b) {
        b = Ra(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function ab(a, b) {
        let c = 0;
        Ta(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function bb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function eb(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function fb(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (Aa(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function gb(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function hb(a, b, c) {
        c = c || ib;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            h > 0 ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function jb(a, b) {
        if (!Aa(a) || !Aa(b) || a.length != b.length) return !1;
        const c = a.length,
            d = kb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function ib(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function kb(a, b) {
        return a === b
    }

    function lb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = lb.apply(null, gb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function nb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var ob = {
        dl: "google_adtest",
        il: "google_ad_client",
        wl: "google_ad_intent_query",
        vl: "google_ad_intent_qetid",
        ul: "google_ad_intent_eids",
        jl: "google_ad_format",
        ll: "google_ad_height",
        Hl: "google_ad_width",
        xl: "google_ad_layout",
        yl: "google_ad_layout_key",
        zl: "google_ad_output",
        Al: "google_ad_region",
        Dl: "google_ad_slot",
        Fl: "google_ad_type",
        Gl: "google_ad_url",
        rm: "google_gl",
        Gm: "google_enable_ose",
        Qm: "google_full_width_responsive",
        Xn: "google_rl_filtering",
        Wn: "google_rl_mode",
        Yn: "google_rt",
        Vn: "google_rl_dest_url",
        Bn: "google_max_radlink_len",
        Gn: "google_num_radlinks",
        Hn: "google_num_radlinks_per_unit",
        gl: "google_ad_channel",
        An: "google_max_num_ads",
        Cn: "google_max_responsive_height",
        dm: "google_color_border",
        Fm: "google_enable_content_recommendations",
        om: "google_content_recommendation_ui_type",
        nm: "google_source_type",
        mm: "google_content_recommendation_rows_num",
        lm: "google_content_recommendation_columns_num",
        km: "google_content_recommendation_ad_positions",
        pm: "google_content_recommendation_use_square_imgs",
        fm: "google_color_link",
        em: "google_color_line",
        hm: "google_color_url",
        el: "google_ad_block",
        Cl: "google_ad_section",
        fl: "google_ad_callback",
        am: "google_captcha_token",
        gm: "google_color_text",
        Tl: "google_alternate_ad_url",
        rl: "google_ad_host_tier_id",
        bm: "google_city",
        ml: "google_ad_host",
        ql: "google_ad_host_channel",
        Ul: "google_alternate_color",
        cm: "google_color_bg",
        Hm: "google_encoding",
        Om: "google_font_face",
        Sm: "google_hints",
        kn: "google_image_size",
        Dn: "google_mtl",
        Do: "google_cpm",
        jm: "google_contents",
        En: "google_native_settings_key",
        qm: "google_country",
        vo: "google_targeting",
        Pm: "google_font_size",
        wm: "google_disable_video_autoplay",
        Ro: "google_video_product_type",
        Qo: "google_video_doc_id",
        Po: "google_cust_gender",
        po: "google_cust_lh",
        oo: "google_cust_l",
        Co: "google_tfs",
        rn: "google_kw",
        so: "google_tag_for_child_directed_treatment",
        to: "google_tag_for_under_age_of_consent",
        ao: "google_region",
        tm: "google_cust_criteria",
        Bl: "google_safe",
        sm: "google_ctr_threshold",
        bo: "google_resizing_allowed",
        eo: "google_resizing_width",
        co: "google_resizing_height",
        Oo: "google_cust_age",
        vn: "google_language",
        sn: "google_kw_type",
        Pn: "google_pucrd",
        Nn: "google_page_url",
        uo: "google_tag_partner",
        ko: "google_restrict_data_processing",
        Yk: "google_adbreak_test",
        kl: "google_ad_frequency_hint",
        al: "google_admob_interstitial_slot",
        bl: "google_admob_rewarded_slot",
        Zk: "google_admob_ads_only",
        El: "google_ad_start_delay_hint",
        zn: "google_max_ad_content_rating",
        Rn: "google_ad_public_floor",
        Qn: "google_ad_private_floor",
        No: "google_traffic_source",
        Kn: "google_overlays",
        On: "google_privacy_treatments",
        qo: "google_special_category_data",
        So: "google_wrap_fullscreen_ad"
    };

    function pb() {
        return !1
    }

    function qb() {
        return !0
    }

    function rb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function sb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function tb(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function ub(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function vb(a, b) {
        let c = 0;
        return function(d) {
            q.clearTimeout(c);
            const e = arguments;
            c = q.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function yb(a, b) {
        function c() {
            e = q.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var zb = {
            passive: !0
        },
        Ab = tb(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                q.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Bb(a) {
        return a ? a.passive && Ab() ? a : a.capture || !1 : !1
    }

    function Cb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Bb(d)), !0) : !1
    }

    function Db(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Bb(d)), !0) : !1
    };

    function Eb(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Gb(a) {
        var b = Hb;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Ib(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Jb(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Mb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Nb(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Mb.length; f++) c = Mb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Ob(a, b) {
        this.g = a === Pb && b || "";
        this.i = Qb
    }
    Ob.prototype.toString = function() {
        return this.g
    };

    function Rb(a) {
        return a instanceof Ob && a.constructor === Ob && a.i === Qb ? a.g : "type_error:Const"
    }
    var Qb = {},
        Pb = {};

    function Sb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Tb(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };
    var Vb;

    function Wb() {
        if (Vb === void 0) {
            var a = null,
                b = q.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Na,
                        createScript: Na,
                        createScriptURL: Na
                    })
                } catch (c) {
                    q.console && q.console.error(c.message)
                }
                Vb = a
            } else Vb = a
        }
        return Vb
    };
    const Xb = {},
        Yb = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g + ""
            }
        };

    function Zb(a) {
        return a instanceof Yb && a.constructor === Yb ? a.g : "type_error:TrustedResourceUrl"
    }

    function ac(a, b) {
        const c = Rb(a);
        if (!bc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(cc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Ob ? Rb(d) : encodeURIComponent(String(d))
        });
        return dc(a)
    }
    var cc = /%{(\w+)}/g,
        bc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        ec = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;

    function fc(a, b) {
        a = ac(new Ob(Pb, "https://fundingchoicesmessages.google.com/i/%{id}"), a);
        a = ec.exec(Zb(a).toString());
        const c = a[3] || "";
        return dc(a[1] + gc("?", a[2] || "", b) + gc("#", c))
    }

    function dc(a) {
        const b = Wb();
        a = b ? b.createScriptURL(a) : a;
        return new Yb(a, Xb)
    }

    function gc(a, b, c) {
        if (c == null) return b;
        if (typeof c === "string") return c ? a + encodeURIComponent(c) : "";
        for (const e in c)
            if (Object.prototype.hasOwnProperty.call(c, e)) {
                var d = c[e];
                d = Array.isArray(d) ? d : [d];
                for (let f = 0; f < d.length; f++) {
                    const g = d[f];
                    g != null && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(e) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    var hc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        ic = new hc("about:invalid#zClosurez");

    function jc(a) {
        if (a instanceof hc) return a.g;
        throw Error("");
    };
    class kc {
        constructor(a) {
            this.ek = a
        }
    }

    function lc(a) {
        return new kc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const mc = [lc("data"), lc("http"), lc("https"), lc("mailto"), lc("ftp"), new kc(a => /^[^:]*([/?#]|$)/.test(a))];

    function nc(a, b = mc) {
        if (a instanceof hc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof kc && d.ek(a)) return new hc(a)
        }
    }
    var oc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function pc(a) {
        if (oc.test(a)) return a
    }

    function qc(a) {
        return a instanceof hc ? jc(a) : pc(a)
    };
    var rc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function sc(a) {
        const b = Wb();
        return new rc(b ? b.createHTML(a) : a)
    }

    function wc(a) {
        if (a instanceof rc) return a.g;
        throw Error("");
    };
    var xc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function yc(a) {
        if (a instanceof xc) return a.g;
        throw Error("");
    };
    var zc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function Ac(a) {
        if (a instanceof zc) return a.g;
        throw Error("");
    };
    var Bc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function Cc(a) {
        return new Bc(a[0].toLowerCase())
    };

    function Dc(a) {
        return new zc(a[0])
    };

    function Ec(a) {
        var b = {};
        if (a instanceof rc) return a;
        a = Fc(String(a));
        b.hp && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.gp && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.ip && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return sc(a)
    }

    function Fc(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function Gc(a) {
        const b = Ec("");
        return sc(a.map(c => wc(Ec(c))).join(wc(b).toString()))
    }
    const Hc = /^[a-z][a-z\d-]*$/i,
        Ic = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var Jc = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const Kc = ["action", "formaction", "href"];

    function Lc(a) {
        if (!Hc.test(a)) throw Error("");
        if (Ic.indexOf(a.toUpperCase()) !== -1) throw Error("");
    }

    function Mc(a, b, c) {
        Lc(a);
        let d = `<${a}`;
        b && (d += Nc(b));
        Array.isArray(c) || (c = c === void 0 ? [] : [c]);
        Jc.indexOf(a.toUpperCase()) !== -1 ? d += ">" : (b = Gc(c.map(e => e instanceof rc ? e : Ec(String(e)))), d += ">" + b.toString() + "</" + a + ">");
        return sc(d)
    }

    function Nc(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!Hc.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on/i.test(d)) throw Error("");
                Kc.indexOf(d.toLowerCase()) !== -1 && (e = e instanceof hc ? e.toString() : pc(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${Ec(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function Tc(a, ...b) {
        if (b.length === 0) return dc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return dc(c)
    }

    function Uc(a, b) {
        a = Zb(a).toString();
        const c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return Vc(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function Vc(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(k => e(k, h)) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        let f = b.length ? "&" : "?";
        d.constructor === Object && (d = Object.entries(d));
        Array.isArray(d) ? d.forEach(g => e(g[1], g[0])) : d.forEach(e);
        return dc(a + b + c)
    };

    function Wc(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return new xc(c)
    };
    var Xc = /^[\w+/_-]+[=]{0,2}$/;

    function Yc(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Zc(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function $c(a) {
        return Zc.apply(null, arguments) / arguments.length
    };

    function ad(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    ad.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    ad.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    ad.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    ad.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };

    function bd(a, b) {
        this.width = a;
        this.height = b
    }

    function cd(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    ba = bd.prototype;
    ba.aspectRatio = function() {
        return this.width / this.height
    };
    ba.isEmpty = function() {
        return !(this.width * this.height)
    };
    ba.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ba.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ba.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    ba.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function dd(a) {
        var b = nc("#", mc) || ic;
        b = qc(b);
        b !== void 0 && (a.href = b)
    };

    function ed(a, b, c) {
        var d = [Cc `width`, Cc `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof Bc) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    }

    function fd(a) {
        a = a.tagName;
        if (a === "SCRIPT" || a === "STYLE") throw Error("");
    };

    function gd(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function hd(a, b) {
        a.src = Zb(b);
        (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function id(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function jd(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : q.document.createElement("div");
        return a.replace(kd, function(e, f) {
            var g = c[e];
            if (g) return g;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = sc(e + " "), d.nodeType === 1 && fd(d), d.innerHTML = wc(g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var kd = /&([^;\s<&]+);?/g;

    function ld(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function nd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function od(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var pd = xa(610401301, !1),
        qd = xa(645172343, !0);

    function rd() {
        var a = q.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var sd;
    const td = q.navigator;
    sd = td ? td.userAgentData || null : null;

    function ud(a) {
        return pd ? sd ? sd.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function t(a) {
        return rd().indexOf(a) != -1
    };

    function vd() {
        return pd ? !!sd && sd.brands.length > 0 : !1
    }

    function wd() {
        return vd() ? !1 : t("Opera")
    }

    function xd() {
        return vd() ? !1 : t("Trident") || t("MSIE")
    }

    function yd() {
        return t("Firefox") || t("FxiOS")
    }

    function zd() {
        return t("Safari") && !(Ad() || (vd() ? 0 : t("Coast")) || wd() || (vd() ? 0 : t("Edge")) || (vd() ? ud("Microsoft Edge") : t("Edg/")) || (vd() ? ud("Opera") : t("OPR")) || yd() || t("Silk") || t("Android"))
    }

    function Ad() {
        return vd() ? ud("Chromium") : (t("Chrome") || t("CriOS")) && !(vd() ? 0 : t("Edge")) || t("Silk")
    }

    function Bd() {
        return t("Android") && !(Ad() || yd() || wd() || t("Silk"))
    };

    function Cd(a) {
        Cd[" "](a);
        return a
    }
    Cd[" "] = function() {};

    function Dd(a, b) {
        try {
            return Cd(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Ed = xd(),
        Fd = t("Edge") || Ed,
        Gd = t("Gecko") && !(Tb(rd(), "WebKit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge"),
        Hd = Tb(rd(), "WebKit") && !t("Edge");

    function Jd(a) {
        return a ? new Kd(Ld(a)) : Qa || (Qa = new Kd)
    }

    function Md(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new bd(a.clientWidth, a.clientHeight)
    }

    function Nd(a) {
        var b = a.scrollingElement ? a.scrollingElement : Hd || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = a.defaultView;
        return new ad(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Od(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Pd(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function Ld(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var Qd = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Rd = {
            IMG: " ",
            BR: "\n"
        };

    function Sd(a) {
        var b = [];
        Td(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Td(a, b, c) {
        if (!(a.nodeName in Qd))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Rd) b.push(Rd[a.nodeName]);
        else
            for (a = a.firstChild; a;) Td(a, b, c), a = a.nextSibling
    }

    function Ud(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Vd(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && Ya(e.className.split(/\s+/), c))
        })
    }

    function Vd(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Kd(a) {
        this.g = a || q.document || document
    }
    ba = Kd.prototype;
    ba.ui = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    ba.Xk = Kd.prototype.ui;

    function Wd(a, b) {
        return Od(a.g, b)
    }

    function Xd(a, b) {
        var c = a.g;
        a = Od(c, "DIV");
        a.innerHTML = wc(b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    ba.ea = function() {
        return this.g.defaultView
    };
    ba.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };
    ba.Hj = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (c == 1) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function Yd() {
        return pd && sd ? sd.mobile : !Zd() && (t("iPod") || t("iPhone") || t("Android") || t("IEMobile"))
    }

    function Zd() {
        return pd && sd ? !sd.mobile && (t("iPad") || t("Android") || t("Silk")) : t("iPad") || t("Android") && !t("Mobile") || t("Silk")
    };
    var $d = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ae(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        c < 0 && (c = a.length);
        var d = a.indexOf("?");
        if (d < 0 || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function be(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) be(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };

    function ce(a) {
        try {
            return !!a && a.location.href != null && Dd(a, "foo")
        } catch {
            return !1
        }
    }

    function de(a, b = q) {
        b = ee(b);
        let c = 0;
        for (; b && c++ < 40 && !a(b);) b = ee(b)
    }

    function ee(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function fe(a) {
        return ce(a.top) ? a.top : null
    }

    function ge(a, b) {
        const c = he("SCRIPT", a);
        hd(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function ie(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function je() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function ke(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function oe(a) {
        const b = [];
        ke(a, function(c) {
            b.push(c)
        });
        return b
    }

    function pe(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var re = tb(() => Xa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], qe) || Math.random() < 1E-4);
    const qe = a => rd().indexOf(a) != -1;
    var se = /^([0-9.]+)px$/,
        te = /^(-?[0-9.]{1,30})$/;

    function ue(a) {
        if (!te.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function ve(a) {
        return (a = se.exec(a)) ? +a[1] : null
    }
    var we = {
        Il: "allow-forms",
        Jl: "allow-modals",
        Kl: "allow-orientation-lock",
        Ll: "allow-pointer-lock",
        Ml: "allow-popups",
        Nl: "allow-popups-to-escape-sandbox",
        Ol: "allow-presentation",
        Pl: "allow-same-origin",
        Ql: "allow-scripts",
        Rl: "allow-top-navigation",
        Sl: "allow-top-navigation-by-user-activation"
    };
    const xe = tb(() => oe(we));

    function ye() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = xe();
        return a.length ? Ua(b, c => !Ya(a, c)) : b
    }

    function ze() {
        const a = he("IFRAME"),
            b = {};
        Sa(xe(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Ae = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Be = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (Ae(a, b)) return a;
                if (!(a = ee(a))) break
            }
            return null
        },
        Ce = tb(() => Yd() ? 2 : Zd() ? 1 : 0),
        u = (a, b) => {
            ke(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Ee = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = De(a.style.cssText), ke(a, b)
        },
        De = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Sa((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d &&
                            e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Fe = a => {
            const b = /!\s*important/i;
            Ee(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const Ge = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        He = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Ie = /.*domain\.test$/,
        Je = /\.prod\.google\.com(:\d+)?$/;
    var Ke = a => Ge[a] || He.test(a) || Ie.test(a) || Je.test(a);
    let Le = [];
    const Me = () => {
        const a = Le;
        Le = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Ne = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        Oe = (a, b) => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Ne(),
                    configurable: !1
                })
            } catch (c) {
                b && b.ba(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || a <= 0) && b.ba(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        Pe = (a, b) => {
            a.document.readyState === "complete" ? (Le.push(b), Le.length == 1 && (window.Promise ? Promise.resolve().then(Me) : window.setImmediate ? setImmediate(Me) : setTimeout(Me, 0))) : a.addEventListener("load", b)
        },
        Qe = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function he(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Re = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, ce(a) && (b = a);
            return b
        },
        Te = a => Ad() && Yd() ? Se(a) : 1,
        Se = a => {
            var b = fe(a);
            if (!b) return 1;
            a = Ce() === 0;
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (d === 0) return 1;
            const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
            return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
        };

    function Ue(a) {
        q.setTimeout(() => {
            throw a;
        }, 0)
    };
    Bd();
    Ad();
    zd();
    var Ve = {},
        We = null;

    function Xe(a) {
        var b = 3;
        b === void 0 && (b = 0);
        Ye();
        b = Ve[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function Ze(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Xe(b)
    }

    function $e(a) {
        var b = [];
        af(a, function(c) {
            b.push(c)
        });
        return b
    }

    function af(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = We[l];
                if (m != null) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Ye();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (h === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
        }
    }

    function Ye() {
        if (!We) {
            We = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                Ve[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    We[f] === void 0 && (We[f] = e)
                }
            }
        }
    };

    function bf(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const cf = /[-_.]/g,
        df = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function ef(a) {
        return df[a] || ""
    }

    function ff(a) {
        return a != null && a instanceof Uint8Array
    }
    var kf = {},
        lf = typeof structuredClone != "undefined";
    let mf;

    function nf(a) {
        if (a !== kf) throw Error("illegal external caller");
    }

    function of () {
        return mf || (mf = new pf(null, kf))
    }
    var pf = class {
        constructor(a, b) {
            nf(b);
            this.g = a;
            if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return this.g == null
        }
    };

    function qf(a, b) {
        const c = rf;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function sf(a) {
        a.cp = !0;
        return a
    }
    let rf = void 0;
    const tf = sf(a => a !== null && a !== void 0);
    var uf = sf(a => typeof a === "number"),
        vf = sf(a => typeof a === "string"),
        wf = sf(a => a === void 0);

    function xf() {
        var a = yf;
        return sf(b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    }
    var zf = sf(a => !!a && (typeof a === "object" || typeof a === "function"));

    function Af(a) {
        a.ck = !0;
        return a
    };

    function Bf(a) {
        if (vf(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
        } else if (uf(a) && !Number.isSafeInteger(a)) throw Error(String(a));
        return BigInt(a)
    }
    var Ef = sf(a => a >= Cf && a <= Df);
    const Cf = BigInt(Number.MIN_SAFE_INTEGER),
        Df = BigInt(Number.MAX_SAFE_INTEGER);
    let Ff = 0,
        Gf = 0;

    function Hf(a) {
        const b = a >>> 0;
        Ff = b;
        Gf = (a - b) / 4294967296 >>> 0
    }

    function If(a) {
        if (a < 0) {
            Hf(-a);
            a = Ff;
            var b = Gf;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Ff = c >>> 0;
            Gf = d >>> 0
        } else Hf(a)
    }

    function Jf(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Kf() {
        var a = Ff,
            b = Gf,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Jf(a, b);
        return c
    }

    function Lf(a) {
        a.length < 16 ? If(Number(a)) : (a = BigInt(a), Ff = Number(a & BigInt(4294967295)) >>> 0, Gf = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function Mf(a) {
        return Array.prototype.slice.call(a)
    };
    var v = Symbol(),
        Nf = Symbol(),
        Of = Symbol(),
        Pf = Symbol(),
        Qf = Symbol();

    function Rf(a) {
        return !!((a[v] | 0) & 2)
    }

    function Sf(a) {
        a[v] |= 34;
        return a
    }

    function Tf(a) {
        a[v] |= 32;
        return a
    }

    function Uf(a, b) {
        b[v] = (a | 0) & -14591
    }

    function Vf(a, b) {
        b[v] = (a | 34) & -14557
    };
    var Wf = {},
        Xf = {};

    function Yf(a) {
        return !(!a || typeof a !== "object" || a.ik !== Xf)
    }

    function Zf(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function $f(a, b, c) {
        if (a != null)
            if (typeof a === "string") a = a ? new pf(a, kf) : of ();
            else if (a.constructor !== pf)
            if (ff(a)) a = a.length ? new pf(c ? a : new Uint8Array(a), kf) : of ();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }

    function ag(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[v] | 0) & 1 ? !0 : !1
    }
    var bg;
    const cg = [];
    cg[v] = 55;
    bg = Object.freeze(cg);

    function dg(a) {
        if (a & 2) throw Error();
    }

    function eg(a, b) {
        if (typeof b !== "number" || b < 0 || b > a.length) throw Error();
    }
    class fg {
        constructor(a, b, c) {
            this.j = 0;
            this.g = a;
            this.i = b;
            this.l = c
        }
        next() {
            if (this.j < this.g.length) {
                const a = this.g[this.j++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new fg(this.g, this.i, this.l)
        }
    }
    var gg = Object.freeze({});
    Object.freeze({});
    var hg = Object.freeze({});
    let ig, jg;

    function kg(a) {
        if (jg) throw Error("");
        jg = b => {
            q.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function lg(a) {
        if (jg) try {
            jg(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function mg() {
        const a = Error();
        id(a, "incident");
        jg ? lg(a) : Ue(a)
    }

    function ng(a) {
        a = Error(a);
        id(a, "warning");
        lg(a);
        return a
    };

    function og(a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function pg(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${ya(a)}: ${a}`);
        return a
    }
    const qg = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function rg(a) {
        const b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : qg.test(a)
    }

    function sg(a) {
        if (!Number.isFinite(a)) throw ng("enum");
        return a | 0
    }

    function tg(a) {
        return a == null ? a : sg(a)
    }

    function ug(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function vg(a) {
        if (typeof a !== "number") throw ng("int32");
        if (!Number.isFinite(a)) throw ng("int32");
        return a | 0
    }

    function wg(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function xg(a) {
        if (typeof a !== "number") throw ng("uint32");
        if (!Number.isFinite(a)) throw ng("uint32");
        return a >>> 0
    }

    function yg(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function zg(a, b = 0) {
        if (!rg(a)) throw ng("int64");
        const c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return Ag(a);
                    case "bigint":
                        return String(BigInt.asIntN(64, a));
                    default:
                        return Bg(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return b = Math.trunc(Number(a)), Number.isSafeInteger(b) ? a = Bf(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = Bf(BigInt.asIntN(64, BigInt(a)))), a;
                    case "bigint":
                        return Bf(BigInt.asIntN(64, a));
                    default:
                        return Bf(Cg(a))
                }
            case 0:
                switch (c) {
                    case "string":
                        return Ag(a);
                    case "bigint":
                        return Bf(BigInt.asIntN(64,
                            a));
                    default:
                        return Cg(a)
                }
            default:
                return gd(b, "Unknown format requested type for int64")
        }
    }

    function Dg(a) {
        return a == null ? a : zg(a, 0)
    }

    function Eg(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function Fg(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function Gg(a) {
        if (a < 0) {
            If(a);
            const b = Jf(Ff, Gf);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Eg(String(a))) return a;
        If(a);
        return Gf * 4294967296 + (Ff >>> 0)
    }

    function Cg(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            If(a);
            var b = Ff,
                c = Gf;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Hg(a) {
        a = Math.trunc(a);
        return a >= 0 && Number.isSafeInteger(a) ? a : Gg(a)
    }

    function Bg(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Fg(b) ? a = b : (If(a), a = Kf())
            }
        }
        return a
    }

    function Ig(a) {
        a = Math.trunc(a);
        if (a >= 0 && Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Eg(b) ? a = b : (If(a), a = Jf(Ff, Gf))
            }
        }
        return a
    }

    function Ag(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Fg(a) || (Lf(a), a = Kf());
        return a
    }

    function Vg(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Eg(a) || (Lf(a), a = Jf(Ff, Gf));
        return a
    }

    function Wg(a) {
        if (a == null) return a;
        if (typeof a === "bigint") return Ef(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = Ef(a) ? Number(a) : String(a)), a;
        if (rg(a)) return typeof a === "number" ? Cg(a) : Ag(a)
    }

    function Xg(a, b = 0) {
        if (!rg(a)) throw ng("uint64");
        const c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return Vg(a);
                    case "bigint":
                        return String(BigInt.asUintN(64, a));
                    default:
                        return Ig(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return b = Math.trunc(Number(a)), Number.isSafeInteger(b) && b >= 0 ? a = Bf(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = Bf(BigInt.asUintN(64, BigInt(a)))), a;
                    case "bigint":
                        return Bf(BigInt.asUintN(64, a));
                    default:
                        return Bf(Hg(a))
                }
            case 0:
                switch (c) {
                    case "string":
                        return Vg(a);
                    case "bigint":
                        return Bf(BigInt.asUintN(64,
                            a));
                    default:
                        return Hg(a)
                }
            default:
                return gd(b, "Unknown format requested type for int64")
        }
    }

    function Yg(a) {
        return a == null ? a : Xg(a, 0)
    }

    function Zg(a) {
        const b = typeof a;
        if (a == null) return a;
        if (b === "bigint") return String(BigInt.asUintN(64, a));
        if (rg(a)) return b === "string" ? Vg(a) : Ig(a)
    }

    function $g(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function ah(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function bh(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function ch(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Td === Wf) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? dh(b) : new b : void 0;
        let e = c = a[v] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[v] = e);
        return new b(a)
    }

    function dh(a) {
        var b = a[Nf];
        if (b) return b;
        b = new a;
        Sf(b.X);
        return a[Nf] = b
    }

    function eh(a, b, c) {
        return b ? $g(a) : bh(a) ? ? (c ? "" : void 0)
    };
    const fh = {},
        gh = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function hh(a) {
        return a
    }

    function ih(a) {
        if (a.dc & 2) throw Error("Cannot mutate an immutable Map");
    }
    var mh = class extends gh {
        constructor(a, b, c = hh, d = hh) {
            super();
            let e = a[v] | 0;
            e |= 64;
            this.dc = a[v] = e;
            this.ue = b;
            this.Dc = c;
            this.kg = this.ue ? jh : d;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? k === void 0 && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        gg(a = kh) {
            if (this.size !== 0) return this.fg(a)
        }
        fg(a = kh) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            ih(this);
            super.clear()
        }
        delete(a) {
            ih(this);
            return super.delete(this.Dc(a, !0, !1))
        }
        entries() {
            var a = this.th();
            return new fg(a, lh, this)
        }
        keys() {
            return this.fk()
        }
        values() {
            var a = this.th();
            return new fg(a, mh.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            ih(this);
            a = this.Dc(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.kg(b, !0, !0, this.ue, !1, this.dc))
        }
        has(a) {
            return super.has(this.Dc(a, !1, !1))
        }
        get(a) {
            a = this.Dc(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.ue;
                return c ? (c = this.kg(b, !1, !0, c, this.Zi,
                    this.dc), c !== b && super.set(a, c), c) : b
            }
        }
        th() {
            return Array.from(super.keys())
        }
        fk() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    mh.prototype.toJSON = void 0;
    mh.prototype.ik = Xf;

    function jh(a, b, c, d, e, f) {
        a = ch(a, d, c, f);
        e && (a = nh(a));
        return a
    }

    function kh(a) {
        return a
    }

    function lh(a) {
        return [a, this.get(a)]
    }
    let oh;

    function ph() {
        return oh || (oh = new mh(Sf([]), void 0, void 0, void 0, fh))
    };
    let qh;

    function rh(a, b) {
        qh = b;
        a = new a(b);
        qh = void 0;
        return a
    };

    function sh(a, b) {
        return th(b)
    }

    function th(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return Ef(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (ag(a)) return
                    } else {
                        if (ff(a)) return bf(a);
                        if (a instanceof pf) {
                            const b = a.g;
                            return b == null ? "" : typeof b === "string" ? b : a.g = bf(b)
                        }
                        if (a instanceof mh) return a.gg()
                    }
        }
        return a
    };

    function uh(a, b, c) {
        a = Mf(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function vh(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = ag(a) ? void 0 : e && (a[v] | 0) & 2 ? a : wh(a, b, c, d !== void 0, e);
            else if (Zf(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = vh(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function wh(a, b, c, d, e) {
        const f = d || c ? a[v] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Mf(a);
        for (let g = 0; g < a.length; g++) a[g] = vh(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function xh(a) {
        return vh(a, yh, void 0, void 0, !1)
    }

    function yh(a) {
        a.Td === Wf ? a = a.toJSON() : a instanceof pf ? (a = a.g || "", a = typeof a === "string" ? a : new Uint8Array(a)) : a = ff(a) ? new Uint8Array(a) : a instanceof mh ? a.gg(xh) : a;
        return a
    }

    function zh(a) {
        return vh(a, Ah, void 0, void 0, !1)
    }

    function Ah(a) {
        return a.Td === Wf ? a.toJSON() : a instanceof mh ? a.gg(zh) : th(a)
    }
    var Bh = lf ? structuredClone : a => wh(a, yh, void 0, void 0, !1);

    function Ch(a) {
        var b = Dh ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        if (Eh === void 0)
            if (typeof Proxy !== "function") Eh = null;
            else try {
                Eh = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null
            } catch {
                Eh = null
            }
        b = Eh;
        if (!b) return a;
        b = new b(a, {
            set(c, d, e) {
                Fh();
                c[d] = e;
                return !0
            }
        });
        Gh(a, b);
        return b
    }

    function Fh() {
        mg()
    }
    let Dh = void 0,
        Hh = void 0;

    function Gh(a, b) {
        (Dh || (Dh = new WeakMap)).set(a, b);
        (Hh || (Hh = new WeakMap)).set(b, a)
    }
    let Eh = void 0;

    function Ih(a, b, c = Vf) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[v] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[v] = (d | 34) & -12293, a) : wh(a, Ih, d & 4 ? Vf : c, !0, !0)
            }
            a.Td === Wf ? (c = a.X, d = c[v], a = d & 2 ? a : rh(a.constructor, Jh(c, d, !0))) : a instanceof mh && !(a.dc & 2) && (c = Sf(a.fg(Ih)), a = new mh(c, a.ue, a.Dc, a.kg));
            return a
        }
    }

    function Kh(a) {
        const b = a.X;
        return rh(a.constructor, Jh(b, b[v], !1))
    }

    function Jh(a, b, c) {
        const d = c || b & 2 ? Vf : Uf,
            e = !!(b & 32);
        a = uh(a, b, f => Ih(f, e, d));
        a[v] = a[v] | 32 | (c ? 2 : 0);
        return a
    }

    function nh(a) {
        const b = a.X,
            c = b[v];
        return c & 2 ? rh(a.constructor, Jh(b, c, !1)) : a
    }

    function Lh(a) {
        const b = a.X,
            c = b[v];
        return c & 2 ? a : rh(a.constructor, Jh(b, c, !0))
    };

    function Mh(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[Qf] = (a.constructor[Qf] | 0) + 1) < 5 && mg();
        return c === 0 ? !1 : !(c & b)
    }

    function Nh(a, b) {
        a = a.X;
        return Oh(a, a[v], b)
    }

    function Ph(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Oh(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Ph(a, b, e, c) && Of != null && (a = ig ? ? (ig = {}), b = a[Of] || 0, b >= 4 || (a[Of] = b + 1, mg())), d) : Ph(a, b, e, c)
        }
    }

    function Qh(a, b, c) {
        const d = a.X;
        let e = d[v];
        dg(e);
        Rh(d, e, b, c);
        return a
    }

    function Rh(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !qd) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[v] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Sh(a, b, c) {
        return Th(a, b, c, !1) !== void 0
    }

    function Uh(a, b, c, d) {
        return Th(a, b, Vh(a, d, c)) !== void 0
    }

    function Wh(a, b) {
        a = a.X;
        let c = a[v];
        const d = Oh(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && Rh(a, c, b, e);
        return e
    }

    function x(a) {
        return a === gg ? 2 : 5
    }

    function Xh(a, b, c, d, e, f, g) {
        const h = a.X;
        let k = h[v];
        const l = 2 & k ? 1 : d;
        f = !!f;
        d = Yh(h, k, b, e);
        var m = d[v] | 0;
        if (Mh(a, m, g, f)) {
            if (4 & m || Object.isFrozen(d)) d = Mf(d), m = Zh(m, k), k = Rh(h, k, b, d, e);
            let p = a = 0;
            for (; a < d.length; a++) {
                const r = c(d[a]);
                r != null && (d[p++] = r)
            }
            p < a && (d.length = p);
            m = $h(m, k);
            m = (m | 20) & -4097;
            m &= -8193;
            g && (m |= g);
            d[v] = m;
            2 & m && Object.freeze(d)
        }
        let n;
        l === 1 || l === 4 && 32 & m ? ai(m) || (f = m, m |= 2, m !== f && (d[v] = m), Object.freeze(d)) : (g = l !== 5 ? !1 : !!(32 & m) || ai(m) || !!Dh ? .get(d), (l === 2 || g) && ai(m) && (d = Mf(d), m = Zh(m, k), m = bi(m, k, f),
            d[v] = m, k = Rh(h, k, b, d, e)), ai(m) || (b = m, m = bi(m, k, f), m !== b && (d[v] = m)), g && (n = Ch(d)));
        return n || d
    }

    function Yh(a, b, c, d) {
        a = Oh(a, b, c, d);
        return Array.isArray(a) ? a : bg
    }

    function $h(a, b) {
        a === 0 && (a = Zh(a, b));
        return a | 1
    }

    function ai(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function ci(a) {
        var b = di,
            c = a.X;
        const d = c[v];
        var e = Oh(c, d, 14);
        a = d & 2;
        a: {
            var f = e,
                g = d & 2;e = !1;
            if (f == null) {
                if (g) {
                    c = ph();
                    break a
                }
                f = []
            } else if (f.constructor === mh) {
                if ((f.dc & 2) == 0 || g) {
                    c = f;
                    break a
                }
                f = f.fg()
            } else Array.isArray(f) ? e = Rf(f) : f = [];
            if (g) {
                if (!f.length) {
                    c = ph();
                    break a
                }
                e || (e = !0, Sf(f))
            } else if (e) {
                e = !1;
                g = Mf(f);
                for (f = 0; f < g.length; f++) {
                    const h = g[f] = Mf(g[f]);
                    Array.isArray(h[1]) && (h[1] = Sf(h[1]))
                }
                f = g
            }
            e || ((f[v] | 0) & 64 ? f[v] &= -33 : 32 & d && Tf(f));e = new mh(f, b, eh, void 0);Rh(c, d, 14, e, !1);c = e
        }!a && b && (c.Zi = !0);
        return c
    }

    function ei(a, b, c, d) {
        const e = a.X;
        let f = e[v];
        dg(f);
        if (c == null) return Rh(e, f, b), a;
        c = Hh ? .get(c) || c;
        let g = c[v] | 0,
            h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const l = !k && (void 0 === hg || !1);
        if (Mh(a, g))
            for (g = 21, k && (c = Mf(c), h = 0, g = Zh(g, f), g = bi(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = Mf(c), h = 0, g = Zh(g, f), g = bi(g, f, !0));
        g !== h && (c[v] = g);
        Rh(e, f, b, c);
        return a
    }

    function fi(a, b, c, d) {
        const e = a.X;
        let f = e[v];
        dg(f);
        Rh(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function gi(a, b, c, d) {
        const e = a.X;
        var f = e[v];
        dg(f);
        if (d == null) {
            var g = hi(e);
            if (ii(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = hi(e);
            const h = ii(g, e, f, c);
            h !== b && (h && (f = Rh(e, f, h)), g.set(c, b))
        }
        Rh(e, f, b, d);
        return a
    }

    function Vh(a, b, c) {
        return ji(a, b) === c ? c : -1
    }

    function ji(a, b) {
        a = a.X;
        return ii(hi(a), a, a[v], b)
    }

    function hi(a) {
        return a[Pf] ? ? (a[Pf] = new Map)
    }

    function ii(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            Oh(b, c, g) != null && (e !== 0 && (c = Rh(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Th(a, b, c, d) {
        a = a.X;
        let e = a[v];
        const f = Oh(a, e, c, d);
        b = ch(f, b, !1, e);
        b !== f && b != null && Rh(a, e, c, b, d);
        return b
    }

    function ki(a, b) {
        return (a = Th(a, b, 1, !1)) ? a : dh(b)
    }

    function y(a, b, c) {
        b = Th(a, b, c, !1);
        if (b == null) return b;
        a = a.X;
        let d = a[v];
        if (!(d & 2)) {
            const e = nh(b);
            e !== b && (b = e, Rh(a, d, c, b, !1))
        }
        return b
    }

    function li(a, b, c, d, e, f, g, h) {
        var k = !!(2 & b);
        e = k ? 1 : e;
        g = !!g;
        h && (h = !k);
        k = Yh(a, b, d, f);
        var l = k[v] | 0,
            m = !!(4 & l);
        if (!m) {
            l = $h(l, b);
            var n = k,
                p = b;
            const w = !!(2 & l);
            w && (p |= 2);
            let D = !w,
                C = !0,
                I = 0,
                N = 0;
            for (; I < n.length; I++) {
                const E = ch(n[I], c, !1, p);
                if (E instanceof c) {
                    if (!w) {
                        const ca = Rf(E.X);
                        D && (D = !ca);
                        C && (C = ca)
                    }
                    n[N++] = E
                }
            }
            N < I && (n.length = N);
            l |= 4;
            l = C ? l | 16 : l & -17;
            l = D ? l | 8 : l & -9;
            n[v] = l;
            w && Object.freeze(n)
        }
        if (h && !(8 & l || !k.length && (e === 1 || e === 4 && 32 & l))) {
            ai(l) && (k = Mf(k), l = Zh(l, b), b = Rh(a, b, d, k, f));
            c = k;
            h = l;
            for (n = 0; n < c.length; n++) l =
                c[n], p = nh(l), l !== p && (c[n] = p);
            h |= 8;
            h = c.length ? h & -17 : h | 16;
            l = c[v] = h
        }
        let r;
        e === 1 || e === 4 && 32 & l ? ai(l) || (b = l, l |= !k.length || 16 & l && (!m || 32 & l) ? 2 : 2048, l !== b && (k[v] = l), Object.freeze(k)) : (m = e !== 5 ? !1 : !!(32 & l) || ai(l) || !!Dh ? .get(k), (e === 2 || m) && ai(l) && (k = Mf(k), l = Zh(l, b), l = bi(l, b, g), k[v] = l, b = Rh(a, b, d, k, f)), ai(l) || (a = l, l = bi(l, b, g), l !== a && (k[v] = l)), m && (r = Ch(k)));
        return r || k
    }

    function mi(a, b, c, d) {
        a = a.X;
        const e = a[v];
        return li(a, e, b, c, d, void 0, !1, !(2 & e))
    }

    function z(a, b, c) {
        c == null && (c = void 0);
        return Qh(a, b, c)
    }

    function A(a, b, c, d) {
        d == null && (d = void 0);
        return gi(a, b, c, d)
    }

    function ni(a, b, c) {
        const d = a.X;
        let e = d[v];
        dg(e);
        if (c == null) return Rh(d, e, b), a;
        c = Hh ? .get(c) || c;
        let f = c[v] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c),
            l = !k && (void 0 === hg || !1);
        let m = !0,
            n = !0;
        for (let r = 0; r < c.length; r++) {
            var p = c[r];
            h || (p = Rf(p.X), m && (m = !p), n && (n = p))
        }
        h || (f |= 5, f = m ? f | 8 : f & -9, f = n ? f | 16 : f & -17);
        if (l || k && f !== g) c = Mf(c), g = 0, f = Zh(f, e), f = bi(f, e, !0);
        f !== g && (c[v] = f);
        Rh(d, e, b, c);
        return a
    }

    function Zh(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function bi(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function oi(a, b, c, d, e, f, g) {
        dg(a.X[v]);
        b = e(a, b, 2, void 0, !0);
        e = b[v] | 0;
        e = (4 & e ? 4096 & e ? 4096 : 8192 & e ? 8192 : 0 : void 0) ? ? 0;
        if (g)
            if (Array.isArray(d))
                for (f = 0; f < d.length; f++) b.push(c(d[f], e));
            else
                for (const h of d) b.push(c(h, e));
        else f && eg(b), b.push(c(d, e));
        return a
    }

    function pi(a, b, c, d, e, f, g) {
        a = a.X;
        const h = a[v];
        dg(h);
        b = li(a, h, c, b, 2, f, !0);
        c = d != null ? d : new c;
        g && eg(b, e);
        e != void 0 ? b.splice(e, g, c) : b.push(c);
        b[v] = Rf(c.X) ? b[v] & -9 : b[v] & -17
    }

    function qi(a, b, c, d) {
        pi(a, b, c, d);
        return a
    }

    function ri(a, b) {
        return Wg(Nh(a, b))
    }

    function si(a, b, c, d, e) {
        return Xh(a, b, Wg, c, d, e, 0)
    }

    function ti(a, b) {
        return a ? ? b
    }

    function ui(a, b) {
        a = Nh(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function vi(a, b) {
        return wg(Nh(a, b))
    }

    function B(a, b) {
        return bh(Nh(a, b))
    }

    function wi(a, b) {
        return ug(Nh(a, b))
    }

    function F(a, b, c = !1) {
        return ti(ui(a, b), c)
    }

    function xi(a, b) {
        return ti(vi(a, b), 0)
    }

    function yi(a, b) {
        return ti(ri(a, b), 0)
    }

    function zi(a, b, c = 0) {
        return ti(Wh(a, b), c)
    }

    function G(a, b) {
        return ti(B(a, b), "")
    }

    function Ai(a, b) {
        return ti(wi(a, b), 0)
    }

    function Bi(a, b, c, d, e) {
        return Xh(a, b, bh, c, d, e)
    }

    function Ci(a, b, c, d, e) {
        return Xh(a, b, ug, c, d, e)
    }

    function Di(a, b, c, d) {
        return y(a, b, Vh(a, d, c))
    }

    function Ei(a, b) {
        a = vi(a, b);
        return a == null ? void 0 : a
    }

    function Fi(a) {
        a = Wh(a, 4);
        return a == null ? void 0 : a
    }

    function Gi(a) {
        a = B(a, 2);
        return a == null ? void 0 : a
    }

    function Hi(a, b) {
        a = wi(a, b);
        return a == null ? void 0 : a
    }

    function Ii(a, b, c) {
        return Qh(a, b, c == null ? c : pg(c))
    }

    function H(a, b, c) {
        return fi(a, b, c == null ? c : pg(c), !1)
    }

    function Ji(a, b, c) {
        return Qh(a, b, c == null ? c : vg(c))
    }

    function Ki(a, b, c) {
        return fi(a, b, c == null ? c : vg(c), 0)
    }

    function Li(a, b, c) {
        return Qh(a, b, Dg(c))
    }

    function Mi(a, b, c) {
        return fi(a, b, Dg(c), "0")
    }

    function Ni(a, b, c) {
        return Qh(a, b, ah(c))
    }

    function Oi(a, b, c) {
        return fi(a, b, ah(c), "")
    }

    function J(a, b, c) {
        return fi(a, b, tg(c), 0)
    };
    let Pi;

    function Qi(a) {
        try {
            return Pi = !0, JSON.stringify(Ri(a), sh)
        } finally {
            Pi = !1
        }
    }
    var K = class {
        constructor(a) {
            a: {
                a == null && (a = qh);qh = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[v] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, Zf(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[v] = b
            }
            this.X = a
        }
        toJSON() {
            return Ri(this)
        }
    };
    K.prototype.Td = Wf;

    function Ri(a) {
        a = Pi ? a.X : wh(a.X, Ah, void 0, void 0, !1); {
            var b = !Pi;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = Zf(c);
                d ? l-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g = {};d = !1;
                        if (f)
                            for (var h in f) {
                                if (!Object.prototype.hasOwnProperty.call(f, h)) continue;
                                if (isNaN(+h)) {
                                    g[h] = f[h];
                                    continue
                                }
                                let m = f[h];
                                Array.isArray(m) && (ag(m) || Yf(m) && m.size === 0) && (m = null);
                                m == null && (d = !0);
                                m != null && (g[h] = m)
                            }
                        if (d) {
                            for (let m in g) break b;
                            g = null
                        } else g = f
                    }
                    f = g == null ? c != null : g !== c
                }
                for (; l > 0; l--) {
                    h = e[l - 1];
                    if (!(h == null || ag(h) || Yf(h) && h.size === 0)) break;
                    var k = !0
                }
                if (e !== a || f || k) {
                    if (!b) e = Array.prototype.slice.call(e, 0, l);
                    else if (k || f || g) e.length = l;
                    g && e.push(g)
                }
                k = e
            } else k = a
        }
        return k
    }

    function Si(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[v] |= 128;
        return rh(a, Tf(b))
    };

    function Ti(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = rh(a, Tf(b))
            }
            return b
        }
    };
    Tc `https://www.google.com/recaptcha/api2/aframe`;

    function Ui(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            hd(f, a);
            b.document.readyState !== "complete" ? Cb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Vi(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.Xb}`;
        let c = void 0;
        try {
            c = await Wi(b)
        } catch (g) {}
        if (c) {
            b = a.Cc || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.j ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                Ui: c.bg_hash_basename,
                Ti: c.bg_binary,
                gk: a.g + "_" + a.i,
                Cc: b,
                Xb: a.Xb,
                Gd: d,
                ne: e,
                Ed: f
            }
        }
    }
    let Wi = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Xi(a) {
        var b = await Vi(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Ui,
                _bgp_: b.Ti,
                _li_: b.gk,
                _jk_: b.Cc,
                _st_: b.Xb,
                _rc_: b.Gd,
                _dl_: b.ne,
                _g2_: b.Ed
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Tc `https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            Ui(a)
        }
    };

    function Yi(a, b) {
        return Oi(a, 1, b)
    }
    var Zi = class extends K {
        g() {
            return G(this, 1)
        }
    };

    function $i(a, b) {
        return z(a, 5, b)
    }

    function aj(a, b) {
        return Oi(a, 3, b)
    }

    function bj(a, b) {
        return H(a, 6, b)
    }
    var cj = class extends K {
        constructor() {
            super()
        }
    };

    function dj(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var ej = class {
            constructor(a) {
                this.g = a.i;
                this.i = a.j;
                this.l = a.l;
                this.Cc = a.Cc;
                this.win = a.ea();
                this.Xb = a.Xb;
                this.Gd = a.Gd;
                this.ne = a.ne;
                this.Ed = a.Ed;
                this.j = a.g
            }
        },
        fj = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.l = c;
                this.win = window;
                this.Xb = "env";
                this.Gd = "n";
                this.ne = "0";
                this.Ed = "1";
                this.g = !0
            }
            ea() {
                return this.win
            }
            build() {
                return new ej(this)
            }
        };

    function gj(a) {
        var b = new hj;
        return Ni(b, 1, a)
    }
    var hj = class extends K {
        getValue() {
            return G(this, 1)
        }
        getVersion() {
            return Ai(this, 5)
        }
    };
    var ij = class extends K {};
    var jj = class extends K {};

    function kj(a, b, c = null, d = !1, e = !1) {
        lj(a, b, c, d, e)
    }

    function lj(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = he("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Za(a.google_image_requests, f);
                Db(f, "load", g);
                Db(f, "error", g)
            };
            Cb(f, "load", g);
            Cb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var nj = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            ke(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            mj(c)
        },
        mj = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : kj(b, a, void 0, !1, !1)
        };
    let oj = null;
    var pj = window;
    var qj = class extends K {
        constructor() {
            super()
        }
    };
    var rj = class extends K {
        constructor() {
            super()
        }
        setCorrelator(a) {
            return Mi(this, 1, a)
        }
    };
    var sj = class extends K {
        constructor() {
            super()
        }
    };

    function tj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    ba = tj.prototype;
    ba.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.Vh, g = c.je || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Md);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "")
    };
    ba.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Sb(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };

    function Mj(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Md: 0,
            path: c,
            domain: d
        })
    }
    ba.isEmpty = function() {
        return !this.g.cookie
    };
    ba.zc = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    ba.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Sb(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) Mj(this, b[a])
    };

    function Nj(a, b = window) {
        if (a.g()) try {
            return b.localStorage
        } catch {}
        return null
    }

    function Oj(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }
    let Pj;

    function Qj(a) {
        return Pj ? Pj : a.origin === "null" ? Pj = !1 : Pj = Rj(a)
    }

    function Rj(a) {
        if (!a.navigator.cookieEnabled) return !1;
        const b = new tj(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            Md: 60,
            Vh: a.isSecureContext ? "none" : void 0,
            je: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        Mj(b, "TESTCOOKIESENABLED");
        return !0
    }

    function Sj(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new tj({
            cookie: b
        })).get(a) || ""
    }

    function Tj(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = { ...c,
            Vh: "none",
            je: !0
        }), (new tj(d.document)).set(a, b, c))
    };
    let Uj = null,
        Vj = null;

    function Wj() {
        if (Uj != null) return Uj;
        Uj = !1;
        try {
            const a = fe(q);
            a && a.location.hash.indexOf("google_logging") !== -1 && (Uj = !0);
            Oj(q) ? .getItem("google_logging") && (Uj = !0)
        } catch (a) {}
        return Uj
    }

    function Xj() {
        if (Vj != null) return Vj;
        Vj = !1;
        try {
            const a = fe(q),
                b = Oj(q);
            if (a && a.location.hash.indexOf("auto_ads_logging") !== -1 || b && b.getItem("auto_ads_logging")) Vj = !0
        } catch (a) {}
        return Vj
    }
    var Yj = (a, b = []) => {
        let c = !1;
        q.google_logging_queue || (c = !0, q.google_logging_queue = []);
        q.google_logging_queue.push([a, b]);
        c && Wj() && ge(q.document, Tc `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function Zj(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ba = Zj.prototype;
    ba.getWidth = function() {
        return this.right - this.left
    };
    ba.getHeight = function() {
        return this.bottom - this.top
    };

    function ak(a) {
        return new Zj(a.top, a.right, a.bottom, a.left)
    }
    ba.contains = function(a) {
        return this && a ? a instanceof Zj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function bk(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    ba.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    ba.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    ba.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    ba.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function ck(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function dk(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new ck(c, e, d - c, a - e)
        }
        return null
    }

    function ek(a, b) {
        var c = dk(a, b);
        if (!c || !c.height || !c.width) return [new ck(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new ck(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new ck(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new ck(a.left, d, b.left - a.left, e));
        h < f && c.push(new ck(h, d, f - h, e));
        return c
    }
    ba = ck.prototype;
    ba.contains = function(a) {
        return a instanceof ad ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    ba.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ba.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ba.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    ba.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    const fk = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function gk(a = q) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function hk(a = gk()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function ik(a = gk()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(fk[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function jk() {
        var a = gk();
        return a && a.initialIntersection
    }

    function kk() {
        const a = jk();
        return a && Ba(a.rootBounds) ? new bd(a.rootBounds.width, a.rootBounds.height) : null
    }

    function lk(a = gk()) {
        return a ? ce(a.master) ? a.master : null : null
    }

    function mk(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Za(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = g.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || ge(a.document, g ? Tc `https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js` : Tc `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Cb(a, "message", f), d = () => {
            Db(a, "message", f)
        });
        return e
    };

    function nk() {
        return a => {
            a = {
                id: "unsafeurl",
                ctx: 638,
                url: a
            };
            var b = [];
            for (c in a) be(c, a[c], b);
            var c = ae("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
            navigator.sendBeacon && navigator.sendBeacon(c, "")
        }
    };

    function ok(a, b, c) {
        if (typeof b === "string")(b = pk(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = pk(c, d);
                f && (c.style[f] = e)
            }
    }
    var qk = {};

    function pk(a, b) {
        var c = qk[b];
        if (!c) {
            var d = nd(b);
            c = d;
            a.style[d] === void 0 && (d = (Hd ? "Webkit" : Gd ? "Moz" : Ed ? "ms" : null) + od(d), a.style[d] !== void 0 && (c = d));
            qk[b] = c
        }
        return c
    }

    function rk(a, b) {
        var c = a.style[nd(b)];
        return typeof c !== "undefined" ? c : a.style[pk(a, b)] || ""
    }

    function sk(a, b) {
        var c = Ld(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function tk(a, b) {
        return sk(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function uk(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function vk(a) {
        var b = Ld(a),
            c = new ad(0, 0);
        if (a == (b ? Ld(b) : document).documentElement) return c;
        a = uk(a);
        b = Nd(Jd(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function wk(a) {
        var b = xk;
        if (tk(a, "display") != "none") return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function xk(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Hd && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = uk(a), new bd(a.right - a.left, a.bottom - a.top)) : new bd(b, c)
    };
    var yk = a => typeof a === "number" && a > 0,
        Ak = (a, b) => {
            a = zk(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + (c === "?" || c === "#" ? "" : "&") + a
        },
        zk = a => Object.entries(Bk(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        Bk = a => {
            const b = {};
            ke(a, (c, d) => {
                if (c || c === 0 || c === !1) typeof c === "boolean" && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        Ck = a => {
            a = lk(gk(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        Dk = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        Ek = a => {
            let b;
            b = a.nodeType !== 9 && a.id;
            a: {
                if (a && a.nodeName &&
                    a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        Fk = a => (a = a.google_ad_format) ? a.indexOf("_0ads") > 0 : !1,
        Gk = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(b > 0 && c > 0)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f =
                                e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (g > 0 && h > 0) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = b > 0 ? b : a.width;c = c > 0 ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    var Hk = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Ik = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Jk = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        Kk = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.qh = !!c;
                this.depth = null
            }
        };
    let Lk = null;

    function Mk() {
        if (Lk === null) {
            Lk = "";
            try {
                let a = "";
                try {
                    a = q.top.location.hash
                } catch (b) {
                    a = q.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Lk = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Lk
    };

    function Nk() {
        const a = q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Ok() {
        const a = q.performance;
        return a && a.now ? a.now() : null
    };
    var Pk = class {
        constructor(a, b) {
            var c = Ok() || Nk();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Qk = q.performance,
        Rk = !!(Qk && Qk.mark && Qk.measure && Qk.clearMarks),
        Sk = tb(() => {
            var a;
            if (a = Rk) a = Mk(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function Tk(a) {
        a && Qk && Sk() && (Qk.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Qk.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Uk(a) {
        a.g = !1;
        a.i != a.j.google_js_reporting_queue && (Sk() && Sa(a.i, Tk), a.i.length = 0)
    }

    function Vk(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Tk(c), e;
        }
        a.end(c);
        return d
    }
    class Wk {
        constructor(a) {
            this.i = [];
            this.j = a || q;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Sk() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Pk(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Qk && Sk() && Qk.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (Ok() || Nk()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Qk && Sk() && Qk.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function Xk(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Yk(a, b, c, d, e) {
        const f = [];
        ke(a, function(g, h) {
            (g = Zk(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Zk(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Zk(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Yk(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function $k(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function al(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = $k(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let l = Yk(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = b == null ? g : b
                }
            }
        }
        a = "";
        b != null && (a = e + "trn=" + b);
        return c + a
    }
    class bl {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function cl(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = dl(a.stack, b));
        return b
    }

    function dl(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var fl = class {
        constructor(a, b, c = null) {
            this.I = a;
            this.A = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.C = this.ba
        }
        ag(a) {
            this.g = a
        }
        l(a) {
            this.j = a
        }
        wb(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    Tk(e), b = this.C(a, new Hk(f, {
                        message: cl(f)
                    }), void 0, c)
                } catch (g) {
                    this.ba(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Ga(a, b, c, d) {
            return (...e) => this.wb(a, () => b.apply(c, e), d)
        }
        ba(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const V = new bl;
                var g = V;
                g.g.push(1);
                g.i[1] = Xk("context", a);
                b.error && b.meta && b.id || (b = new Hk(b, {
                    message: cl(b)
                }));
                if (b.msg) {
                    g = V;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = Xk("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (na) {}
                if (d) try {
                    d(b)
                } catch (na) {}
                d = V;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = q;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (ce(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new Kk(m || "", l));
                    try {
                        d = l.parent
                    } catch (na) {
                        d = null
                    }
                } while (d && l != d);
                for (let na = 0, Fb = k.length - 1; na <= Fb; ++na) k[na].depth = Fb -
                    na;
                l = q;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.qh = !0)
                    }
                var p = k;
                let Ga = new Kk(q.location.href, q, !1);
                l = null;
                const db = p.length - 1;
                for (n = db; n >= 0; --n) {
                    var r = p[n];
                    !l && Ik.test(r.url) && (l = r);
                    if (r.url && !r.qh) {
                        Ga = r;
                        break
                    }
                }
                r = null;
                const Ub = p.length && p[db].url;
                Ga.depth != 0 && Ub && (r = p[db]);
                f = new Jk(Ga, r);
                if (f.i) {
                    p = V;
                    var w = f.i.url || "";
                    p.g.push(4);
                    p.i[4] = Xk("top", w)
                }
                var D = {
                    url: f.g.url ||
                        ""
                };
                if (f.g.url) {
                    var C = f.g.url.match($d),
                        I = C[1],
                        N = C[3],
                        E = C[4];
                    w = "";
                    I && (w += I + ":");
                    N && (w += "//", w += N, E && (w += ":" + E));
                    var ca = w
                } else ca = "";
                I = V;
                D = [D, {
                    url: ca
                }];
                I.g.push(5);
                I.i[5] = D;
                el(this.I, e, V, this.j, c)
            } catch (V) {
                try {
                    el(this.I, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: cl(V),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (Ga) {}
            }
            return this.A
        }
        pa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    var gl = class extends K {
        constructor() {
            super()
        }
    };

    function hl(a, b) {
        try {
            const c = d => [{
                [d.ig]: d.Mf
            }];
            return JSON.stringify([a.filter(d => d.Jd).map(c), Ri(b), a.filter(d => !d.Jd).map(c)])
        } catch (c) {
            return il(c, b), ""
        }
    }

    function il(a, b) {
        try {
            nj({
                m: cl(a instanceof Error ? a : Error(String(a))),
                b: Ai(b, 1) || null,
                v: G(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var jl = class {
        constructor(a, b) {
            var c = new gl;
            a = J(c, 1, a);
            b = Oi(a, 2, b);
            this.i = Lh(b)
        }
    };

    function kl(a) {
        return Math.round(a)
    };

    function ll(a, b) {
        return gi(a, 1, ml, ah(b))
    }

    function nl(a, b) {
        return gi(a, 2, ml, Dg(b))
    }

    function ol(a, b) {
        return gi(a, 3, ml, b == null ? b : pg(b))
    }
    var L = class extends K {},
        ml = [1, 2, 3];

    function pl(a, b) {
        return gi(a, 2, ql, Dg(b))
    }

    function rl(a, b) {
        return gi(a, 4, ql, og(b))
    }
    var sl = class extends K {
            constructor() {
                super()
            }
        },
        ql = [2, 4];

    function tl(a) {
        var b = new ul;
        return Oi(b, 1, a)
    }

    function vl(a, b) {
        return z(a, 3, b)
    }

    function M(a, b) {
        return qi(a, 4, L, b)
    }
    var ul = class extends K {
        constructor() {
            super()
        }
    };
    var wl = class extends K {
        getValue() {
            return Ai(this, 1)
        }
    };

    function xl(a) {
        var b = new yl;
        return Qh(b, 1, tg(a))
    }
    var yl = class extends K {
        getValue() {
            return Ai(this, 1)
        }
    };
    var zl = class extends K {
        constructor() {
            super()
        }
        getValue() {
            return Ai(this, 1)
        }
    };

    function Al(a, b) {
        return Mi(a, 1, b)
    }

    function Bl(a, b) {
        return Mi(a, 2, b)
    }

    function Cl(a, b) {
        return Mi(a, 3, b)
    }

    function Dl(a, b) {
        return Mi(a, 4, b)
    }

    function El(a, b) {
        return Mi(a, 5, b)
    }

    function Fl(a, b) {
        return fi(a, 8, og(b), 0)
    }

    function Gl(a, b) {
        return fi(a, 9, og(b), 0)
    }
    var Hl = class extends K {
        constructor() {
            super()
        }
    };

    function Il(a, b) {
        return Mi(a, 1, b)
    }

    function Jl(a, b) {
        return Mi(a, 2, b)
    }
    var Kl = class extends K {};

    function Ll(a, b) {
        qi(a, 1, Kl, b)
    }
    var di = class extends K {
        Yh(a) {
            pi(this, 1, Kl, void 0, a, !1, 1);
            return this
        }
    };
    var Ml = class extends K {
        constructor() {
            super()
        }
    };

    function Nl(a, b) {
        return ei(a, 1, b, $g)
    }

    function Ol(a, b) {
        return ei(a, 12, b, Xg)
    }

    function Pl() {
        var a = new Ql;
        return oi(a, 2, $g, "irr", Bi)
    }

    function Rl(a, b) {
        return H(a, 3, b)
    }

    function Sl(a, b) {
        return H(a, 4, b)
    }

    function Tl(a, b) {
        return H(a, 5, b)
    }

    function Ul(a, b) {
        return H(a, 7, b)
    }

    function Vl(a, b) {
        return H(a, 8, b)
    }

    function Wl(a, b) {
        return Mi(a, 9, b)
    }

    function Xl(a, b) {
        return ni(a, 10, b)
    }

    function Yl(a, b) {
        return ei(a, 11, b, zg)
    }
    var Ql = class extends K {
        constructor() {
            super()
        }
    };

    function Zl(a) {
        var b = $l();
        z(a, 1, b)
    }

    function am(a, b) {
        return Mi(a, 2, b)
    }

    function bm(a, b) {
        return ni(a, 3, b)
    }

    function cm(a, b) {
        return ni(a, 4, b)
    }

    function dm(a, b) {
        return qi(a, 4, yl, b)
    }

    function em(a, b) {
        return ni(a, 5, b)
    }

    function fm(a, b) {
        return ei(a, 6, b, $g)
    }

    function gm(a, b) {
        return Mi(a, 7, b)
    }

    function hm(a, b) {
        z(a, 9, b)
    }

    function im(a, b) {
        return H(a, 10, b)
    }

    function jm(a, b) {
        return H(a, 11, b)
    }

    function km(a, b) {
        return H(a, 12, b)
    }
    var lm = class extends K {
        constructor() {
            super()
        }
        H(a) {
            pi(this, 3, wl, void 0, a, !1, 1);
            return this
        }
        G(a) {
            return Mi(this, 8, a)
        }
    };
    var mm = class extends K {
        constructor() {
            super()
        }
    };
    var nm = class extends K {};

    function om(a) {
        var b = new pm;
        return J(b, 1, a)
    }
    var pm = class extends K {
        constructor() {
            super()
        }
    };
    var qm = class extends K {
        constructor() {
            super()
        }
    };
    var rm = class extends K {
        constructor() {
            super()
        }
    };
    var sm = class extends K {
        constructor() {
            super()
        }
    };
    var tm = class extends K {
            constructor() {
                super()
            }
        },
        um = [1, 2];
    var vm = class extends K {
        constructor() {
            super()
        }
    };
    var wm = class extends K {
            constructor() {
                super()
            }
        },
        xm = [1];

    function ym(a) {
        var b = new zm;
        return J(b, 1, a)
    }
    var zm = class extends K {
        constructor() {
            super()
        }
    };
    var Am = class extends K {
        constructor() {
            super()
        }
    };
    var Bm = class extends K {
        constructor() {
            super()
        }
    };
    var Cm = class extends K {
        constructor() {
            super()
        }
    };
    var Dm = class extends K {
        constructor() {
            super()
        }
    };
    var Em = class extends K {
        constructor() {
            super()
        }
    };
    var Fm = class extends K {
        constructor() {
            super()
        }
    };
    var Gm = class extends K {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 1)
        }
    };
    var Hm = class extends K {
        constructor() {
            super()
        }
    };

    function Im(a) {
        var b = new Jm;
        return ei(b, 1, a, sg)
    }
    var Jm = class extends K {
        constructor() {
            super()
        }
    };
    var Km = class extends K {
        constructor() {
            super()
        }
    };

    function Lm() {
        var a = new Mm,
            b = new Km;
        return A(a, 1, Nm, b)
    }

    function Om() {
        var a = new Mm,
            b = new Km;
        return A(a, 3, Nm, b)
    }

    function Pm(a, b) {
        return A(a, 14, Nm, b)
    }
    var Mm = class extends K {},
        Nm = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var Qm = class extends K {};
    var Rm = class extends K {
        constructor() {
            super()
        }
    };
    var Sm = class extends K {
        constructor() {
            super()
        }
    };
    var Tm = class extends K {
        constructor() {
            super()
        }
    };

    function Um(a, b) {
        return fi(a, 10, Yg(b), "0")
    }

    function Vm(a, b) {
        return J(a, 1, b)
    }
    var Wm = class extends K {};
    var Xm = class extends K {};
    var Ym = class extends K {
        constructor() {
            super()
        }
    };
    var $m = class extends K {
            constructor() {
                super()
            }
            i() {
                return Di(this, Xm, 4, Zm)
            }
            g() {
                return Uh(this, Xm, 4, Zm)
            }
        },
        Zm = [4, 5];

    function an(a) {
        var b = new bn;
        return Oi(b, 4, a)
    }

    function cn(a, b) {
        return Qh(a, 6, Yg(b))
    }
    var bn = class extends K {
        constructor() {
            super()
        }
    };

    function dn(a) {
        var b = new en;
        return Ki(b, 2, a)
    }
    var en = class extends K {
        constructor() {
            super()
        }
    };
    var fn = class extends K {
        constructor() {
            super()
        }
        i() {
            return y(this, Xm, 1)
        }
        g() {
            return Sh(this, Xm, 1)
        }
    };
    var gn = class extends K {
        constructor() {
            super()
        }
    };
    var hn = class extends K {
        constructor() {
            super()
        }
    };
    var jn = class extends K {};
    var kn = class extends K {};
    var ln = class extends K {
            constructor() {
                super()
            }
        },
        mn = [2, 3];
    var nn = class extends K {
            constructor() {
                super()
            }
        },
        on = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17];
    var pn = class extends K {
        constructor() {
            super()
        }
    };

    function qn(a, b) {
        return Li(a, 1, b)
    }

    function rn(a, b) {
        return Li(a, 2, b)
    }
    var sn = class extends K {
        constructor() {
            super()
        }
    };
    var tn = class extends K {
        constructor() {
            super()
        }
    };

    function un(a, b) {
        return z(a, 1, b)
    }
    var vn = class extends K {
        constructor() {
            super()
        }
    };
    var wn = class extends K {
        constructor() {
            super()
        }
    };
    var xn = class extends K {
        constructor() {
            super()
        }
    };

    function yn(a, b) {
        return A(a, 3, zn, b)
    }
    var An = class extends K {
            constructor() {
                super()
            }
        },
        zn = [1, 2, 3, 4];

    function Bn(a, b) {
        return Mi(a, 3, b)
    }
    var Cn = class extends K {
            constructor() {
                super()
            }
            Wb(a) {
                return Oi(this, 2, a)
            }
        },
        ho = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15];
    var io = class extends K {
        constructor() {
            super()
        }
    };
    var jo = class extends K {
        constructor() {
            super()
        }
    };
    var ko = class extends K {
        constructor() {
            super()
        }
    };
    var lo = class extends K {
            constructor() {
                super()
            }
        },
        mo = [4, 6];
    class no {
        constructor(a) {
            this.I = a;
            this.se = new oo(this.I)
        }
    }
    class oo {
        constructor(a) {
            this.I = a;
            this.Xc = new po(this.I)
        }
    }
    class po {
        constructor(a) {
            this.I = a;
            this.g = new qo(this.I);
            this.Zh = new ro(this.I)
        }
    }
    class qo {
        constructor(a) {
            this.I = a;
            this.i = new so(this.I);
            this.g = new to(this.I)
        }
    }
    class so {
        constructor(a) {
            this.I = a
        }
        Oc(a) {
            uo(this.I, vl(M(tl("xR0Czf"), ll(new L, a.status)), rl(new sl, a.Rc)))
        }
    }
    class to {
        constructor(a) {
            this.I = a
        }
        Oc(a) {
            uo(this.I, vl(M(tl("jM4CPd"), nl(new L, kl(a.Sk))), rl(new sl, a.Rc)))
        }
    }
    class ro {
        constructor(a) {
            this.I = a;
            this.Ai = new vo(this.I);
            this.Bi = new wo(this.I);
            this.Ci = new xo(this.I);
            this.Le = new yo(this.I);
            this.Di = new zo(this.I);
            this.Ei = new Ao(this.I);
            this.Fi = new Bo(this.I);
            this.Gi = new Co(this.I);
            this.Ne = new Do(this.I);
            this.bj = new Eo(this.I);
            this.tj = new Fo(this.I);
            this.Jj = new Go(this.I);
            this.Ck = new Ho(this.I)
        }
    }
    class vo {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(tl("VEDP7d"), ll(new L, a.language)), nl(new L, a.Ba)), pl(new sl, kl(a.ha))))
        }
    }
    class wo {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(tl("tGmaZc"), ll(new L, a.language)), nl(new L, a.Ba)), pl(new sl, kl(a.ha))))
        }
    }
    class xo {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(tl("igjuhc"), ll(new L, a.language)), nl(new L, a.Ba)), pl(new sl, kl(a.ha))))
        }
    }
    class yo {
        constructor(a) {
            this.I = a
        }
        Oc(a) {
            uo(this.I, vl(M(M(M(M(M(tl("i3zJEd"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.outcome)), ol(new L, a.Bc)), ol(new L, a.uf)), rl(new sl, a.Rc)))
        }
    }
    class zo {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(M(M(M(tl("JN0hVd"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.outcome)), ol(new L, a.Bc)), ol(new L, a.uf)), pl(new sl, kl(a.ha))))
        }
    }
    class Ao {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(M(tl("rmHfOd"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.reason)), pl(new sl, kl(a.ha))))
        }
    }
    class Bo {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(M(tl("VEyQic"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.format)), pl(new sl, kl(a.ha))))
        }
    }
    class Co {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(M(tl("QFcNxc"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.format)), pl(new sl, kl(a.ha))))
        }
    }
    class Do {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(M(M(tl("SIhp4"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.format)), ol(new L, a.Bc)), pl(new sl, kl(a.ha))))
        }
    }
    class Eo {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(M(tl("Eeiun"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.format)), pl(new sl, kl(a.ha))))
        }
    }
    class Fo {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(M(tl("SmbJl"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.type)), pl(new sl, kl(a.ha))))
        }
    }
    class Go {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(M(tl("qleBg"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.format)), pl(new sl, kl(a.ha))))
        }
    }
    class Ho {
        constructor(a) {
            this.I = a
        }
        Fa(a) {
            uo(this.I, vl(M(M(M(tl("pYLGPe"), ll(new L, a.language)), nl(new L, a.Ba)), nl(new L, a.type)), pl(new sl, kl(a.ha))))
        }
    }
    class Io extends jl {
        constructor() {
            super(...arguments);
            this.Ud = new no(this)
        }
    }

    function uo(a, ...b) {
        a.l(...b.map(c => ({
            Jd: !1,
            ig: 1,
            Mf: Ri(c)
        })))
    }

    function Jo(a, ...b) {
        a.l(...b.map(c => ({
            Jd: !0,
            ig: 3,
            Mf: Ri(c)
        })))
    }

    function Ko(a, ...b) {
        a.l(...b.map(c => ({
            Jd: !0,
            ig: 7,
            Mf: Ri(c)
        })))
    }
    var Lo = class extends Io {};
    var Mo = (a, b) => {
            globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: b.length < 65536,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(() => {})
        },
        No = class extends Lo {
            constructor(a) {
                super(2, a);
                this.g = Mo
            }
            l(...a) {
                try {
                    const b = hl(a, this.i);
                    this.g("https://pagead2.googlesyndication.com/pagead/ping?e=1", b)
                } catch (b) {
                    il(b, this.i)
                }
            }
        },
        Oo = class extends No {};

    function Po(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = hl(a.g, a.i);
            a.B("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Ro = class extends Lo {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.B = Mo;
                this.H = b;
                this.G = c;
                this.F = d;
                this.A = e;
                this.g = [];
                this.j = null;
                this.C = !1
            }
            l(...a) {
                try {
                    this.F && hl(this.g.concat(a), this.i).length >= 65536 && Po(this), this.A && !this.C && (this.C = !0, Qo(this.A, () => {
                        Po(this)
                    })), this.g.push(...a), this.g.length >= this.G && Po(this), this.g.length && this.j === null && (this.j = setTimeout(() => {
                        Po(this)
                    }, this.H))
                } catch (b) {
                    il(b, this.i)
                }
            }
        },
        So = class extends Ro {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var O = a => {
        var b = "Cf";
        if (a.Cf && a.hasOwnProperty(b)) return a.Cf;
        b = new a;
        return a.Cf = b
    };

    function To(a, b, c) {
        return b[a] || c
    };

    function Uo(a, b) {
        a.i = (c, d) => To(2, b, () => [])(c, 1, d);
        a.g = () => To(3, b, () => [])(1)
    }
    class Vo {
        i() {
            return []
        }
        g() {
            return []
        }
    }

    function Wo(a, b) {
        return O(Vo).i(a, b)
    };

    function el(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof bl ? f = c : (f = new bl, ke(c, (h, k) => {
                var l = f;
                const m = l.l++;
                h = Xk(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = al(f, "/pagead/gen_204?id=" + b + "&");
            g && kj(q, g)
        } catch (f) {}
    }

    function Xo(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Yo {
        constructor() {
            this.g = Math.random()
        }
    };
    let Zo, $o;
    const ap = new Wk(window);
    (a => {
        Zo = a ? ? new Yo;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Xo(Zo, window.google_srt);
        $o = new fl(Zo, !0, ap);
        $o.ag(() => {});
        $o.l(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || Uk(ap) : ap.g && Cb(window, "load", () => {
            window.google_measure_js_timing || Uk(ap)
        })
    })();
    let bp = (new Date).getTime();
    var cp = {
        en: 0,
        dn: 1,
        Zm: 2,
        Um: 3,
        bn: 4,
        Vm: 5,
        cn: 6,
        Xm: 7,
        Ym: 8,
        Tm: 9,
        Wm: 10,
        fn: 11
    };
    var dp = {
        hn: 0,
        jn: 1,
        gn: 2
    };

    function ep(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function fp(a) {
        a = Va(a, b => new Zj(b.top, b.right, b.bottom, b.left));
        a = gp(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function gp(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Wa(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, ak(a[0]))
    };
    var Hb = {
        Zn: 0,
        Im: 1,
        Lm: 2,
        Jm: 3,
        Km: 4,
        Rm: 8,
        mo: 9,
        xn: 10,
        yn: 11,
        jo: 16,
        vm: 17,
        um: 24,
        un: 25,
        Wl: 26,
        Vl: 27,
        wi: 30,
        mn: 32,
        qn: 40,
        ro: 41,
        no: 42
    };
    var hp = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        ip = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var jp = 728 * 1.38;

    function kp(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = lp(a, !0, !0),
                    d = P(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function mp(a, b = 420, c = !1, d = !1) {
        return (a = lp(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function np(a) {
        return Math.max(0, op(a, !0) - P(a))
    }

    function pp(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function P(a, b = !1) {
        const c = pp(a).clientHeight;
        return b ? c * Te(a) : c
    }

    function lp(a, b = !1, c = !1) {
        c = pp(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * Te(a) : c
    }

    function op(a, b) {
        const c = pp(a);
        return b ? (a = P(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function qp(a, b) {
        return rp(b) || b === 10 || !a.adCount ? !1 : b == 1 || b == 2 ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? a >= 1 : !1
    }

    function sp(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function tp(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function up(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function vp(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }

    function wp(a, b, c, d) {
        el(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function xp(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Sa(Object.keys(b), c => {
            rk(a, c) || ok(a, c, b[c])
        });
        Fe(a)
    }

    function rp(a) {
        return a === 26 || a === 27 || a === 40 || a === 41
    };

    function yp(a, b) {
        zp(a).forEach(b, void 0)
    }

    function zp(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Ap(a, b) {
        return a.g[Bp(b)] !== void 0
    }

    function Cp(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function Dp(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const Ep = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = Bp(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = Bp(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        zc() {
            return Cp(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function Bp(a) {
        return a instanceof Object ? String(Da(a)) : a + ""
    };
    const Fp = class {
        constructor(a) {
            this.g = new Ep;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return Ap(this.g, a)
        }
    };
    const Gp = new Fp("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Hp(a, {
        hb: b,
        Za: c,
        Fb: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? Ip(a, {
            hb: b,
            Za: c,
            Fb: !0
        }) : null
    }

    function Ip(a, {
        hb: b,
        Za: c,
        Fb: d = !1
    }) {
        const e = Jp({
                hb: b,
                Za: c,
                Fb: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = Hp(a, {
            hb: b,
            Za: c,
            Fb: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var Kp = class {
        constructor() {
            this.g = new Map
        }
    };

    function Jp({
        hb: a,
        Za: b,
        Fb: c
    }) {
        a = Da(a);
        b = Da(b);
        return `${a}:${b}:${c}`
    };

    function Lp(a) {
        Cd(a.document.body.offsetHeight)
    };

    function Mp(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function Q() {
        this.C = this.C;
        this.G = this.G
    }
    Q.prototype.C = !1;
    Q.prototype.dispose = function() {
        this.C || (this.C = !0, this.i())
    };
    Q.prototype[ma(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function Np(a, b) {
        Op(a, Ka(Mp, b))
    }

    function Op(a, b) {
        a.C ? b() : (a.G || (a.G = []), a.G.push(b))
    }
    Q.prototype.i = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function Pp(a) {
        a.g.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function Qp(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.g.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.g.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var Rp = class extends Q {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.g = b
        }
        i() {
            Pp(this);
            super.i()
        }
    };

    function Sp(a) {
        const b = new R(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function Tp(a, b) {
        const c = new R({
            first: a.R,
            second: b.R
        });
        a.listen(() => c.g({
            first: a.R,
            second: b.R
        }));
        b.listen(() => c.g({
            first: a.R,
            second: b.R
        }));
        return c
    }

    function Up(...a) {
        const b = [...a],
            c = () => b.every(f => f.R),
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Vp(d)
    }

    function Wp(...a) {
        const b = [...a],
            c = () => b.findIndex(f => f.R) !== -1,
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Vp(d)
    }

    function Vp(a, b = Xp) {
        var c = a.R;
        const d = new R(a.R);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function Yp(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function Zp(a, b, c) {
        if (a.R === b) return c(), () => {};
        const d = {
            ec: null
        };
        d.ec = Yp(a, b, () => {
            d.ec && (d.ec(), d.ec = null);
            c()
        });
        return d.ec
    }

    function $p(a, b, c) {
        Vp(a).listen(d => {
            d === b && c()
        })
    }

    function aq(a, b) {
        a.l && a.l();
        a.l = b.listen(c => a.g(c), !0)
    }

    function bq(a, b, c, d) {
        const e = new R(!1);
        var f = null;
        a = a.map(d);
        Yp(a, !0, () => {
            f === null && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        Yp(a, !1, () => {
            e.g(!1);
            f !== null && (b.clearTimeout(f), f = null)
        });
        return Vp(e)
    }

    function cq(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.R
        }
    }
    class R {
        constructor(a) {
            this.R = a;
            this.j = new Map;
            this.C = 1;
            this.l = null
        }
        listen(a, b = !1) {
            const c = this.C++;
            this.j.set(c, a);
            b && a(this.R);
            return () => {
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.R
        }
        g(a) {
            this.R = a;
            this.j.forEach(b => {
                b(this.R)
            })
        }
        map(a) {
            const b = new R(a(this.R));
            this.listen(c => b.g(a(c)));
            return b
        }
    }

    function Xp(a, b) {
        return a == b
    };

    function dq(a) {
        return new eq(a)
    }

    function fq(a, b) {
        Sa(a.g, c => {
            c(b)
        })
    }
    var gq = class {
        constructor() {
            this.g = []
        }
    };
    class eq {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new gq;
            this.listen(c => fq(b, a(c)));
            return dq(b)
        }
        delay(a, b) {
            const c = new gq;
            this.listen(d => {
                a.setTimeout(() => {
                    fq(c, d)
                }, b)
            });
            return dq(c)
        }
    }

    function hq(...a) {
        const b = new gq;
        a.forEach(c => {
            c.listen(d => {
                fq(b, d)
            })
        });
        return dq(b)
    };

    function iq(a) {
        return Vp(Tp(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : jq(c, b)
        }))
    }
    var lq = class {
        constructor(a) {
            this.i = a;
            this.g = new R(null);
            this.j = new R(null);
            this.l = new gq;
            this.B = b => {
                this.g.R == null && b.touches.length == 1 && this.g.g(b.touches[0])
            };
            this.A = b => {
                const c = this.g.R;
                c != null && (b = kq(c, b.changedTouches), b != null && (this.g.g(null), this.j.g(null), fq(this.l, jq(c, b))))
            };
            this.C = b => {
                var c = this.g.R;
                c != null && (c = kq(c, b.changedTouches), c != null && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function jq(a, b) {
        return {
            oi: b.pageX - a.pageX,
            ri: b.pageY - a.pageY
        }
    }

    function kq(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function mq(a) {
        return Vp(Tp(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : nq(c, b)
        }))
    }
    var oq = class {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.g = new R(null);
            this.i = new R(null);
            this.j = new gq;
            this.G = c => {
                this.g.g(c)
            };
            this.C = c => {
                const d = this.g.R;
                d != null && (this.g.g(null), this.i.g(null), fq(this.j, nq(d, c)))
            };
            this.B = c => {
                this.g.R != null && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function nq(a, b) {
        return {
            oi: b.screenX - a.screenX,
            ri: b.screenY - a.screenY
        }
    };
    var rq = (a, b, c) => {
        const d = new pq(a, b, c);
        return () => qq(d)
    };

    function qq(a) {
        if (a.g) return !1;
        if (a.i == null) return sq(a), !0;
        const b = a.i + a.A - (new Date).getTime();
        if (b < 1) return sq(a), !0;
        tq(a, b);
        return !0
    }

    function sq(a) {
        a.i = (new Date).getTime();
        a.l()
    }

    function tq(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            sq(a)
        }, b)
    }
    class pq {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    };

    function uq(a) {
        return vq(mq(a.g), iq(a.i))
    }

    function wq(a) {
        return hq(dq(a.g.j), dq(a.i.l))
    }
    var xq = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function vq(a, b) {
        return Tp(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var yq = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function zq(a) {
        a.A == null && (a.A = new R(a.B.getBoundingClientRect()));
        return a.A
    }
    class Aq extends Q {
        constructor(a, b) {
            super();
            this.j = a;
            this.B = b;
            this.F = !1;
            this.A = null;
            this.l = () => {
                zq(this).g(this.B.getBoundingClientRect())
            }
        }
        g() {
            this.F || (this.F = !0, this.j.addEventListener("resize", this.l), this.j.addEventListener("scroll", this.l));
            return zq(this)
        }
        i() {
            this.j.removeEventListener("resize", this.l);
            this.j.removeEventListener("scroll", this.l);
            super.i()
        }
    };

    function Bq(a, b) {
        return new Cq(a, b)
    }

    function Dq(a) {
        a.win.requestAnimationFrame(() => {
            a.C || a.j.g(new bd(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Eq(a) {
        a.g || (a.g = !0, a.l.observe(a.element));
        return Vp(a.j, cd)
    }
    var Cq = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.g = !1;
            this.j = new R(new bd(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                Dq(this)
            })
        }
        i() {
            this.l.disconnect();
            super.i()
        }
    };

    function Fq(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class Gq {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
    };

    function Hq(a, b) {
        a = a.getBoundingClientRect();
        return new Iq(a.top + tp(b), a.bottom - a.top)
    }

    function Jq(a) {
        return new Iq(Math.round(a.g), Math.round(a.i))
    }
    class Iq {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var Lq = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new Fp(c);
        b = b.filter(e => !d.contains(e));
        b.length && (Kq(a, b), fb(c, b))
    };

    function Kq(a, b) {
        for (const f of b) {
            b = he("LINK", a.document);
            b.type = "text/css";
            var c = Tc `//fonts.googleapis.com/css`,
                d = nk(),
                e = b;
            c = Uc(c, new Map([
                ["family", f]
            ]));
            if (c instanceof Yb) d = c;
            else a: {
                if (c instanceof hc) {
                    d = c;
                    break a
                }
                const g = nc(c, mc) || ic;g === ic && d(c);d = g
            }
            e.rel = "stylesheet";
            if (Tb("stylesheet", "stylesheet")) {
                e.href = Zb(d).toString();
                a: if (d = (e.ownerDocument && e.ownerDocument.defaultView || q).document, d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) &&
                        Xc.test(d)) break a;
                    d = ""
                } else d = "";
                d && e.setAttribute("nonce", d)
            } else d instanceof Yb ? d = Zb(d).toString() : (d = qc(d), d = d === void 0 ? ic.toString() : d), e.href = d;
            a.document.head.appendChild(b)
        }
    };

    function Mq(a, b) {
        a.F ? b(a.l) : a.j.push(b)
    }

    function Nq(a, b) {
        a.F = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    class Oq extends Q {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.F = !1;
            this.B = this.l = null;
            this.H = rq(a, 1E3, () => {
                if (this.B != null) {
                    var b = op(this.g, !0) - this.B;
                    b > 1E3 && Nq(this, b)
                }
            });
            this.A = null
        }
        K(a, b) {
            a == null ? (this.B = a = op(this.g, !0), this.g.addEventListener("scroll", this.H), b != null && b(a)) : this.A = this.g.setTimeout(() => {
                this.K(void 0, b)
            }, a)
        }
        i() {
            this.A != null && this.g.clearTimeout(this.A);
            this.g.removeEventListener("scroll", this.H);
            this.j = [];
            this.l = null;
            super.i()
        }
    };
    var Pq = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Qq {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function Rq(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new Sq(d)
    }

    function Tq(a) {
        return a.g.slice(0)
    }

    function Uq(a, b = 1) {
        a = Tq(a);
        const c = new Qq(b);
        nb(a, () => c.next());
        return new Sq(a)
    }
    const Sq = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Sq(Ua(this.g, a))
        }
        apply(a) {
            return new Sq(a(Tq(this)))
        }
        sort(a) {
            return new Sq(Tq(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = Tq(this);
            b.push(a);
            return new Sq(b)
        }
    };
    class Vq {
        constructor(a) {
            this.g = new Fp(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function Wq(a) {
        return new Xq({
            value: a
        }, null)
    }

    function Yq(a) {
        return new Xq(null, Error(a))
    }

    function Zq(a) {
        try {
            return Wq(a())
        } catch (b) {
            return new Xq(null, b)
        }
    }

    function $q(a) {
        return a.g != null ? a.getValue() : null
    }

    function ar(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function br(a, b) {
        return a.g != null ? a : new Xq(null, b(a.i))
    }

    function cr(a, b) {
        return br(a, c => Error(`${b}${c.message}`))
    }

    function dr(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class Xq {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof Xq ? a : Wq(a)) : this
        }
    };
    class er {
        constructor() {
            this.g = new Ep
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Fp, this.g.set(a, c));
            c.add(b)
        }
    };

    function fr(a) {
        return !a
    }

    function gr(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function hr(a) {
        return a !== null
    };
    var ir = class extends K {
        getId() {
            return B(this, 3)
        }
    };
    class jr {
        constructor(a, {
            yg: b,
            yi: c,
            Vj: d,
            Sh: e
        }) {
            this.A = a;
            this.j = c;
            this.l = new Sq(b || []);
            this.i = e;
            this.g = d
        }
    };
    var kr = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new Ep;
            for (const c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        mr = a => {
            var b = lr(a);
            a = [];
            for (let c of b) b = String(c.kc), a.push(c.Ab + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const lr = a => {
            const b = [],
                c = a.l;
            c && c.g.length && b.push({
                Ab: "a",
                kc: nr(c)
            });
            a.j != null && b.push({
                Ab: "as",
                kc: a.j
            });
            a.g != null && b.push({
                Ab: "i",
                kc: String(a.g)
            });
            a.i != null && b.push({
                Ab: "rp",
                kc: String(a.i)
            });
            b.sort(function(d, e) {
                return d.Ab.localeCompare(e.Ab)
            });
            b.unshift({
                Ab: "t",
                kc: or(a.A)
            });
            return b
        },
        or = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        nr = a => {
            a = Tq(a).map(pr);
            a = JSON.stringify(a);
            return pe(a)
        },
        pr = a => {
            const b = {};
            B(a, 7) != null && (b.q = B(a, 7));
            vi(a, 2) != null &&
                (b.o = vi(a, 2));
            vi(a, 5) != null && (b.p = vi(a, 5));
            return b
        };

    function qr() {
        var a = new rr;
        return Qh(a, 2, tg(1))
    }
    var rr = class extends K {
        setLocation(a) {
            return Qh(this, 1, tg(a))
        }
        g() {
            return Hi(this, 1)
        }
    };

    function sr(a) {
        const b = [].slice.call(arguments).filter(sb(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Eg || []);
            d = Object.assign(d, e.Ac())
        });
        return new tr(c, d)
    }

    function ur(a) {
        switch (a) {
            case 1:
                return new tr(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new tr(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new tr(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new tr(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function vr(a) {
        return a == null ? null : new tr(null, {
            google_ml_rank: a
        })
    }

    function wr(a) {
        return a == null ? null : new tr(null, {
            google_placement_id: mr(a)
        })
    }

    function xr({
        nj: a,
        Ej: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new tr(null, a)
    }
    class tr {
        constructor(a, b) {
            this.Eg = a;
            this.g = b
        }
        Ac() {
            return this.g
        }
    };
    var yr = class extends K {};
    var zr = class extends K {};
    var Ar = class extends K {
        A() {
            return B(this, 2)
        }
        l() {
            return B(this, 5)
        }
        g() {
            return mi(this, zr, 3, x())
        }
        i() {
            return vi(this, 4)
        }
        j() {
            return Wh(this, 6)
        }
        C() {
            return Sh(this, yr, 7)
        }
    };
    var Br = class extends K {};
    var Cr = class extends K {
        j() {
            return F(this, 12, !1)
        }
        i() {
            return ri(this, 13)
        }
        g() {
            const a = ui(this, 23);
            return a == null ? void 0 : a
        }
    };
    var Dr = class extends K {
        constructor() {
            super()
        }
    };
    var Er = class extends K {
        g() {
            return wi(this, 3)
        }
        i() {
            return ui(this, 6)
        }
    };
    var Fr = class extends K {};
    var Gr = class extends K {};
    var Hr = class extends K {
        ka() {
            return y(this, ir, 1)
        }
        g() {
            return wi(this, 2)
        }
    };
    var Ir = class extends K {};
    var Jr = class extends K {};
    var Kr = class extends K {
            getName() {
                return B(this, 4)
            }
        },
        Lr = [1, 2, 3];
    var Mr = class extends K {
        g() {
            return y(this, Er, 10)
        }
    };
    var Nr = class extends K {
        g() {
            return ui(this, 2)
        }
        i() {
            return ui(this, 3)
        }
    };
    var Or = class extends K {
        g() {
            return ri(this, 1)
        }
    };
    var Pr = class extends K {};
    var Qr = class extends K {
        g() {
            return yi(this, 1)
        }
    };
    var Rr = class extends K {
        g() {
            return G(this, 1)
        }
        i() {
            return G(this, 2)
        }
    };
    var Sr = class extends K {};
    var Tr = class extends K {
        j() {
            return F(this, 1)
        }
        l() {
            return F(this, 3)
        }
        A() {
            return F(this, 7)
        }
        g() {
            return F(this, 4)
        }
        i() {
            return F(this, 5)
        }
    };
    var Ur = class extends K {
        i() {
            return y(this, Rr, 5)
        }
        g() {
            return y(this, Qr, 6)
        }
        l() {
            return G(this, 8)
        }
        A() {
            return F(this, 9)
        }
        C() {
            return G(this, 13)
        }
        B() {
            return F(this, 11)
        }
        j() {
            return y(this, Tr, 12)
        }
    };
    var Vr = class extends K {};
    var Wr = class extends K {};
    var Xr = class extends K {};
    var Yr = class extends K {
        g(a) {
            return mi(this, Xr, 1, x(a))
        }
    };
    var Zr = class extends K {
        setProperty(a) {
            return Ni(this, 1, a)
        }
        getValue() {
            return B(this, 2)
        }
    };
    var $r = class extends K {};
    var as = class extends K {};
    var bs = class extends K {
        ka() {
            return y(this, ir, 1)
        }
        g() {
            return wi(this, 2)
        }
    };
    var cs = class extends K {};
    var ds = class extends K {};
    var es = class extends K {
        g() {
            return Bi(this, 6, x())
        }
    };
    var fs = class extends K {
        vf() {
            return Sh(this, ds, 2)
        }
    };
    var gs = class extends K {
        g() {
            return yi(this, 1)
        }
    };
    var hs = class extends K {};
    var js = class extends K {
            g() {
                return Di(this, hs, 2, is)
            }
        },
        is = [1, 2];
    var ks = class extends K {
        g() {
            return y(this, js, 3)
        }
    };
    var ls = class extends K {};
    var ms = class extends K {
        g() {
            return mi(this, ls, 1, x())
        }
    };
    var ns = class extends K {
        g() {
            return Bi(this, 1, x())
        }
        i() {
            return y(this, ks, 3)
        }
    };
    var os = Ti(class extends K {
        g() {
            return y(this, Cr, 15)
        }
    });
    var ps = class extends K {},
        qs = Ti(ps);

    function rs(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? qs(b) : null
        } catch (b) {
            return null
        }
    }

    function ss(a, b) {
        if (a.kf !== void 0) {
            var c = rs(b);
            c || (c = new ps);
            a.kf !== void 0 && Ii(c, 2, a.kf);
            a = Date.now() + 864E5;
            Number.isFinite(a) && Li(c, 1, Math.round(a));
            c = Qi(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = rs(b)) && ri(c, 1) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };
    var ts = {
            rb: "ama_success",
            Ua: .1,
            Xa: !0,
            sb: !0
        },
        us = {
            rb: "ama_failure",
            Ua: .1,
            Xa: !0,
            sb: !0
        },
        vs = {
            rb: "ama_coverage",
            Ua: .1,
            Xa: !0,
            sb: !0
        },
        ws = {
            rb: "ama_opt",
            Ua: .1,
            Xa: !0,
            sb: !1
        },
        xs = {
            rb: "ama_auto_rs",
            Ua: 1,
            Xa: !0,
            sb: !1
        },
        ys = {
            rb: "ama_improv",
            Ua: .1,
            Xa: !0,
            sb: !1
        },
        zs = {
            rb: "ama_constraints",
            Ua: 0,
            Xa: !0,
            sb: !0
        };

    function As(a, b) {
        Bs(a.i, xs, { ...b,
            evt: "place",
            vh: P(a.win),
            eid: a.g.g() ? .g() || 0,
            hl: a.g.i() ? .g() || ""
        })
    }

    function Cs(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && dl(c.stack, "") || "");
        As(a, b)
    }
    var Ds = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    };
    const Es = ["-webkit-text-fill-color"];

    function Fs(a) {
        if (Fd) {
            {
                const c = ie(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Gs(a)
                } else a = Hs()
            }
        } else a = Hs();
        return a
    }
    var Hs = () => {
        const a = {
            all: "initial"
        };
        Sa(Es, b => {
            a[b] = "unset"
        });
        return a
    };

    function Gs(a) {
        Sa(Es, b => {
            delete a[b]
        });
        return a
    };
    var Is = class {
        constructor(a) {
            this.g = a
        }
        Ma(a) {
            const b = a.document.createElement("div");
            u(b, Fs(a));
            u(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            u(c, Fs(a));
            u(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function Js(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Ks(a) {
        return zp(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var S = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        T = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Ls = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        Ms = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Ns = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var Os = new T(619278254, 10),
        Ps = new S(1325, !0),
        Qs = new S(1371),
        Rs = new S(1351, !0),
        Ss = new T(1130, 100),
        Ts = new S(1331, !0),
        Us = new S(1330, !0),
        Vs = new T(1339, .3),
        Ws = new T(1032, 200),
        Xs = new Ls(14),
        Ys = new T(1224, .01),
        Zs = new S(654220660),
        $s = new T(1346, 6),
        at = new T(1347, 3),
        bt = new S(1367),
        ct = new S(1260),
        dt = new S(1239),
        et = new S(1196),
        ft = new S(316),
        gt = new S(1290),
        ht = new S(334),
        it = new T(1263, -1),
        jt = new T(54),
        kt = new T(1323, -1),
        lt = new T(1265, -1),
        mt = new T(1264, -1),
        nt = new S(1291),
        ot = new S(1267, !0),
        pt = new S(1266),
        qt = new S(313),
        rt = new T(66, -1),
        st = new T(65, -1),
        tt = new S(1256),
        ut = new S(369),
        vt = new S(1241, !0),
        wt = new S(368),
        xt = new S(1300, !0),
        yt = new Ms(1273, ["en", "de"]),
        zt = new Ms(1261, ["44786015", "44786016"]),
        At = new S(1309),
        Bt = new S(1250),
        Ct = new S(1151),
        Dt = new S(1361),
        Et = new S(1349),
        Ft = new T(1072, .75),
        Gt = new S(290),
        Ht = new S(1368),
        It = new S(1222),
        Jt = new S(1354),
        Kt = new S(1341),
        Lt = new S(1237),
        Mt = new T(1366),
        Nt = new T(1365),
        Ot = new T(1364, 300),
        Pt = new S(1350),
        Qt = new S(1356),
        Rt = new S(1369),
        St = new S(626390500),
        Tt = new Ns(627094447, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        Ut = new T(643258048),
        Vt = new T(643258049),
        Wt = new T(579884443, .7),
        Xt = new S(665357451),
        Yt = new Ls(622128249),
        Zt = new Ls(622128250),
        $t = new Ns(641845510, ["33"]),
        au = new S(566279275),
        bu = new S(622128248, !0),
        cu = new S(566279276),
        du = new S(663664316),
        eu = new S(668056665),
        fu = new Ls(589752731, "#FFFFFF"),
        gu = new Ls(589752730, "#1A73E8"),
        hu = new Ns(635821288, ["29_18", "30_19"]),
        iu = new Ns(631402549),
        ju = new Ns(636146137, ["29_5", "30_6"]),
        ku = new S(579884441, !0),
        lu = new S(636570127),
        mu = new S(664766267),
        nu = new Ns(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        ou = new T(579884442, .7),
        pu = new S(666224299),
        qu = new S(665880209),
        ru = new T(663756190),
        su = new T(652486359),
        tu = new T(626062006, 670),
        uu = new T(666400580),
        vu = new T(658370512),
        wu = new S(626062008),
        xu = new S(643258050),
        yu = new S(506914611),
        zu = new S(655991266, !0),
        Au = new S(597181299),
        Bu = new S(626062007),
        Cu = new S(663661257),
        Du = new Ns(630330362),
        Eu = new T(618163195, 15E3),
        Fu = new T(624950166, 15E3),
        Gu = new T(623405755, 300),
        Hu = new T(508040914, 500),
        Iu = new T(547455356, 49),
        Ju = new T(650548030, 2),
        Ku = new T(650548032, 300),
        Lu =
        new T(650548031, 1),
        Mu = new T(655966487, 300),
        Nu = new T(655966486, 250),
        Ou = new T(561668774, .1),
        Pu = new T(469675170, 6E4),
        Qu = new S(562896595),
        Ru = new S(644381219),
        Su = new S(644381220),
        Tu = new S(666484068),
        Uu = new S(662976800),
        Vu = new S(570863962, !0),
        Wu = new Ls(570879859, "control_1\\.\\d"),
        Xu = new T(570863961, 50),
        Yu = new S(570879858, !0),
        Zu = new T(63, 30),
        $u = new S(1134),
        av = new S(562874197),
        bv = new S(562874196),
        cv = new S(555237685, !0),
        dv = new S(45460956),
        ev = new S(45414947, !0),
        fv = new T(472785970, 500),
        gv = new T(550718588, 250),
        hv = new S(45545710),
        iv = new T(624290870, 50),
        jv = new T(629793592, .8),
        kv = new S(506738118),
        lv = new S(77),
        mv = new S(78),
        nv = new S(83),
        ov = new S(80),
        pv = new S(76),
        qv = new S(84),
        rv = new S(1973),
        sv = new S(188),
        tv = new S(485990406);
    var uv = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.C = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.i = () => {}
        }
    };

    function U(a) {
        return O(uv).j(a.g, a.defaultValue)
    }

    function W(a) {
        return O(uv).A(a.g, a.defaultValue)
    }

    function vv(a) {
        return O(uv).C(a.g, a.defaultValue)
    }

    function wv(a) {
        return O(uv).l(a.g, a.defaultValue)
    };

    function xv(a, b) {
        a = Wd(new Kd(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function yv(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Js(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function zv(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Js(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Bv = (a, b, c, d = 0) => {
            var e = Av(b, c, d);
            if (e.K) {
                for (c = b = e.K; c = e.Bd(c);) b = c;
                e = {
                    anchor: b,
                    position: e.ce
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            yv(a, e.anchor, e.position)
        },
        Cv = (a, b, c, d = 0) => {
            U(qt) ? Bv(a, b, c, d) : yv(a, b, c)
        };

    function Av(a, b, c) {
        const d = f => {
                f = Dv(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = Dv(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    K: Ev(a.previousSibling, d),
                    Bd: f => Ev(f.previousSibling, d),
                    ce: 0
                };
            case 2:
                return {
                    K: Ev(a.lastChild, d),
                    Bd: f => Ev(f.previousSibling, d),
                    ce: 0
                };
            case 3:
                return {
                    K: Ev(a.nextSibling, e),
                    Bd: f => Ev(f.nextSibling, e),
                    ce: 3
                };
            case 1:
                return {
                    K: Ev(a.firstChild, e),
                    Bd: f => Ev(f.nextSibling, e),
                    ce: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Dv(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ev(a, b) {
        return a && b(a) ? a : null
    };

    function Fv(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function Gv(a, b) {
        const c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function Hv(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function Iv(a, b, c) {
        a = Fv(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function Jv(a, b) {
        b = b.parentElement;
        return b ? (a = ie(b, a)) ? a.direction : "" : ""
    }

    function Kv(a, b, c) {
        if (Iv(a, b, c) !== 0) {
            Hv(b, c, "0px");
            var d = Iv(a, b, c);
            Hv(b, c, `${-1*d}px`);
            a = Iv(a, b, c);
            a !== 0 && a !== d && Hv(b, c, `${d/(a-d)*d}px`)
        }
    };
    const Lv = RegExp("(^| )adsbygoogle($| )");

    function Mv(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = nd(d.property);
            a[e] = d.value
        }
    }

    function Nv(a, b, c, d, e, f) {
        a = Ov(a, e);
        a.va.setAttribute("data-ad-format", d ? d : "auto");
        Pv(a, b, c, f);
        return a
    }

    function Qv(a, b, c = null) {
        a = Ov(a, {});
        Pv(a, b, null, c);
        return a
    }

    function Pv(a, b, c, d) {
        var e = [];
        if (d = d && d.Eg) a.ob.className = d.join(" ");
        a = a.va;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function Ov(a, b) {
        const c = xv(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.be && Mv(d, b.be);
        a = Wd(new Kd(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.hg && (d.marginTop = b.hg);
        b.Se && (d.marginBottom = b.Se);
        b.Zb && Mv(d, b.Zb);
        c.appendChild(a);
        return {
            ob: c,
            va: a
        }
    }

    function Rv(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.Ac();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Sv(a) {
        const b = Ks(a.document);
        Sa(b, function(c) {
            const d = Tv(a, c);
            var e;
            if (e = d) {
                e = (e = Fv(c, a)) ? e.y : 0;
                const f = P(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Rv(a, c))
        })
    }

    function Tv(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in ob) a[ob[c]] && (b[ob[c]] = a[ob[c]]);
        return b
    };
    var Vv = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (Uv(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const Uv = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? jd(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && Gp.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Uv(a, b[c])) return !0
        }
        return !1
    };
    var Wv = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Xv = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return Nv(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return Wv(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Yv(a) {
        var b = [];
        yp(a.getElementsByTagName("p"), function(c) {
            Zv(c) >= 100 && b.push(c)
        });
        return b
    }

    function Zv(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        yp(a.childNodes, function(c) {
            b += Zv(c)
        });
        return b
    }

    function $v(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function aw(a, b) {
        if (a.g == null) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function bw(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (g) {}
        if (!c.length) return [];
        b = eb(c);
        b = aw(a, b);
        typeof a.i === "number" && (c = a.i, c < 0 && (c += b.length), b = c >= 0 && c < b.length ? [b[c]] : []);
        if (typeof a.j === "number") {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Yv(b[d]),
                    f = a.j;
                f < 0 && (f += e.length);
                f >= 0 && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const cw = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class dw {
        constructor() {
            var a = Tc `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.A = Math.random();
            this.j = this.ba;
            this.C = a
        }
        ag(a) {
            this.g = a
        }
        l(a) {
            this.i = a
        }
        ba(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new Hk(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            q.google_js_errors = q.google_js_errors || [];
            q.google_js_errors.push(b);
            q.error_rep_loaded || (ge(q.document, this.C), q.error_rep_loaded = !0);
            return !1
        }
        wb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.j(a, d, .01, c, "jserror")) throw d;
            }
        }
        Ga(a, b, c, d) {
            return (...e) => this.wb(a, () => b.apply(c, e), d)
        }
        pa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    const ew = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var fw = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = typeof queueMicrotask !== "undefined";
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = Ok();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && ew({
                        label: a.toString(),
                        value: h,
                        duration: (Ok() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        gw = (a, b, c, d = !1) => fw(a, b, (e, f) => {
            (new dw).ba(e, f)
        }, c, d);

    function hw(a, b, c) {
        return fw(a, b, void 0, c, !0).apply()
    }

    function iw(a, b) {
        return gw(754, a, b, !0).apply()
    }

    function jw(a) {
        if (!a) return null;
        var b = B(a, 7);
        if (B(a, 1) || a.getId() || Bi(a, 4, x()).length > 0) {
            var c = B(a, 3),
                d = B(a, 1),
                e = Bi(a, 4, x(gg));
            b = vi(a, 2);
            var f = vi(a, 5);
            a = kw(wi(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + $v(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + $v(e[c]);
            b = (e = g) ? new cw(e, b, f, a) : null
        } else b = b ? new cw(b, vi(a, 2), vi(a, 5), kw(wi(a, 6))) : null;
        return b
    }
    var lw = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function kw(a) {
        return a == null ? a : lw[a]
    }

    function mw(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = B(a[c], 1),
                e = B(a[c], 2);
            if (d && e != null) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function nw(a, b) {
        var c = {};
        a && (c.hg = B(a, 1), c.Se = B(a, 2), c.clearBoth = !!ui(a, 3));
        b && (c.be = mw(mi(b, Zr, 3, x(gg))), a = mi(b, Zr, 4, x(gg)), c.Zb = mw(a));
        return c
    }
    var ow = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        pw = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const qw = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return Nv(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    class rw {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.i);
            const b = Wv(a);
            return new tr(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const sw = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        i() {
            return this.l
        }
        g() {
            return this.j
        }
    };
    const tw = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = mi(this.g, $r, 9, x()).length > 0 ? mi(this.g, $r, 9, x())[0] : null,
                f = nw(y(this.g, as, 3), e);
            if (!e) return null;
            if (e = B(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = Wd(new Kd(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                g == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.be && Mv(c.style, f.be);
                d = Wd(new Kd(d), "INS");
                f.Zb && Mv(d.style, f.Zb);
                c.appendChild(d);
                f = {
                    ob: c,
                    va: d
                };
                f.va.setAttribute("data-ad-type", "text");
                f.va.setAttribute("data-native-settings-key",
                    e);
                Pv(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = mi(this.g, $r, 9, x()).length > 0 ? mi(this.g, $r, 9, x())[0] : null;
            if (!a) return null;
            a = mi(a, Zr, 3, x());
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (B(c, 1) == "height" && parseInt(B(c, 2), 10) > 0) return parseInt(B(c, 2), 10)
            }
            return null
        }
    };
    const uw = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g) return null;
            const e = this.g.google_ad_format || null,
                f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    k !== "width" && k !== "height" && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    Zb: g
                }
            } else c = {};
            a = Nv(d.document, a, f, e, c, b);
            a.va.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        Ac() {
            return this.g
        }
    };
    class vw {
        constructor(a) {
            this.i = a
        }
        g() {
            return new tr([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const ww = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g() {
            return this.j
        }
        i(a) {
            a = bw(this.l, a.document);
            return a.length > 0 ? a[0] : null
        }
    };

    function xw(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                k = e.ka();
            if (k) {
                var l = jw(k);
                if (l) {
                    var m = wi(e, 2);
                    m = ow[m];
                    var n = m === void 0 ? null : m;
                    if (n === null) e = null;
                    else {
                        m = (m = y(e, as, 3)) ? ui(m, 3) : null;
                        l = new ww(l, n);
                        n = Ci(e, 10, x()).slice(0);
                        vi(k, 5) != null && n.push(1);
                        var p = h ? h : {};
                        h = vi(e, 12);
                        k = Sh(e, rr, 4) ? y(e, rr, 4) : null;
                        wi(e, 8) == 1 ? (p = p.Ri || null, e = new yw(l, new qw(nw(y(e, as, 3), null)), p, m, 0, n, k, g, f, h, e)) : e = wi(e, 8) == 2 ? new yw(l, new tw(e), p.Wj || new vw("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e =
                null;
            e !== null && d.push(e)
        }
        return d
    }

    function zw(a) {
        return a.A
    }

    function Aw(a) {
        return a.Ja
    }

    function Bw(a) {
        return U(et) ? (a.P || (a.P = a.F.i(a.j)), a.P) : a.F.i(a.j)
    }

    function Cw(a) {
        var b = a.H;
        a = a.j.document.createElement("div");
        U(et) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function Dw(a) {
        return a.B instanceof uw ? a.B.Ac() : null
    }

    function Ew(a, b, c) {
        Ap(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }

    function Fw(a, b) {
        a.A = !0;
        U(et) && (a.i && zv(a.i), a.i = null);
        b != null && a.da.push(b)
    }

    function Gw(a) {
        return xv(a.j.document, a.H || !1)
    }

    function Hw(a) {
        return a.B.j(a.j)
    }

    function Iw(a, b = null, c = null) {
        return new yw(a.F, b || a.B, c || a.U, a.H, a.Mb, a.Ec, a.ke, a.j, a.ua, a.G, a.l, a.C, a.na)
    }
    class yw {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.F = a;
            this.B = b;
            this.U = c;
            this.H = d;
            this.Mb = e;
            this.Ec = f;
            this.ke = g ? g : new rr;
            this.j = h;
            this.ua = k;
            this.G = l;
            this.l = m;
            (a = !m) || (a = !(m.ka() && vi(m.ka(), 5) != null));
            this.Ja = !a;
            this.C = n;
            this.na = p;
            this.da = [];
            this.A = !1;
            this.L = new Ep;
            this.P = this.i = null
        }
        ea() {
            return this.j
        }
        g() {
            return this.F.g()
        }
    };

    function Jw(a, b, c, d, e, f) {
        const g = qr();
        return new yw(new sw(c, e), new Xv, new rw(a), !0, 2, [], g, d, null, null, null, b, f)
    }

    function Kw(a, b, c, d, e) {
        const f = qr();
        return new yw(new sw(b, d), new qw({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var Lw = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        ea() {
            return this.win
        }
        A(a) {
            return Jw(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return Kw(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const Mw = {
        TABLE: {
            oc: new Vq([1, 2])
        },
        THEAD: {
            oc: new Vq([0, 3, 1, 2])
        },
        TBODY: {
            oc: new Vq([0, 3, 1, 2])
        },
        TR: {
            oc: new Vq([0, 3, 1, 2])
        },
        TD: {
            oc: new Vq([0, 3])
        }
    };

    function Nw(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Ra(e, f), c < 0 || b.push(new Ow(a, [f], c, f, 3, Sd(f).trim(), d));
        return b
    }

    function Pw(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (l.nodeType == 1 || l.nodeType == 3) {
                if (l.nodeType != 1) var m = null;
                else l.tagName == "BR" ? m = l : (m = c.getComputedStyle(l).getPropertyValue("display"), m = m == "inline" || m == "inline-block" ? null : l);
                m ? (d.length && k && e.push(new Ow(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = Sd(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Ow(a, d, h, b, 2, k, c));
        return e
    }

    function Qw(a, b) {
        return a.g - b.g
    }
    class Ow {
        constructor(a, b, c, d, e, f, g) {
            this.l = a;
            this.kd = b.slice(0);
            this.g = c;
            this.we = d;
            this.xe = e;
            this.C = f;
            this.i = g
        }
        ea() {
            return this.i
        }
        A(a) {
            return Jw(a, this.l, this.we, this.i, this.xe, this.g)
        }
        j() {
            return Kw(this.l, this.we, this.i, this.xe, this.g)
        }
    };

    function Rw(a) {
        return bb(a.C ? Pw(a.i, a.g, a.j) : [], a.A ? Nw(a.i, a.A, a.g, a.j) : []).filter(b => {
            var c = b.we.tagName;
            c ? (c = Mw[c.toUpperCase()], b = c != null && c.oc.contains(b.xe)) : b = !1;
            return !b
        })
    }
    class Sw {
        constructor(a, b, c) {
            this.g = a;
            this.A = b.gd;
            this.C = b.Tg;
            this.i = b.articleStructure;
            this.j = c;
            this.l = b.xg
        }
    };

    function Tw(a, b) {
        if (!b) return !1;
        const c = Da(b),
            d = a.g.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.i.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.g.set(c, !0), !0;
        b = Tw(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function Uw(a, b) {
        return Xa(b.kd, c => Tw(a, c))
    }
    class Vw {
        constructor(a) {
            this.g = new Ep;
            this.i = a
        }
    };
    class py {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var ry = (a, {
            kh: b = !1,
            bg: c = !1,
            yh: d = c || U(dt) ? 2 : 3,
            Zf: e = null
        } = {}) => {
            a = Rw(a);
            return qy(a, {
                kh: b,
                bg: c,
                yh: d,
                Zf: e
            })
        },
        qy = (a, {
            kh: b = !1,
            bg: c = !1,
            yh: d = c || U(dt) ? 2 : 3,
            Zf: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(Qw);
            a = [];
            b = new py(b, e);
            for (const g of f) {
                e = {
                    de: g,
                    Dd: g.C.length < 51 ? !1 : b.j != null ? !Uw(b.j, g) : !0
                };
                if (b.l || e.Dd) b.g.length ? (f = b.g[b.g.length - 1].de, f = Vv(f.ea(), f.kd[f.kd.length - 1], e.de.kd[0])) : f = !0, f ? (b.g.push(e), e.Dd && b.i.push(e.de)) : (b.g = [e], b.i = e.Dd ? [e.de] : []);
                if (b.i.length >= d) {
                    e = b;
                    f = c || U(dt) ? 0 : 1;
                    if (f < 0 || f >= e.i.length) e = null;
                    else {
                        for (f = e.i[f]; e.g.length && !e.g[0].Dd;) e.g.shift();
                        e.g.shift();
                        e.i.shift();
                        e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var ty = (a, b, c = !1) => {
            a = sy(a, b);
            const d = new Vw(b);
            return Pq(a, e => ry(e, {
                bg: c,
                Zf: d
            }))
        },
        uy = (a, b) => {
            a = sy(a, b);
            const c = new Vw(b);
            return Pq(a, d => {
                if (d.l) {
                    var e = d.i;
                    var f = d.j;
                    d = d.g.querySelectorAll(d.l);
                    var g = [];
                    for (var h of d) g.push(new Lw(e, h, f));
                    e = g
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (g = 1; g < d.length; g++) {
                        const m = d[g];
                        h = f;
                        b: {
                            if (h.element.hasAttributes())
                                for (l of h.element.attributes)
                                    if (l.name.toLowerCase() === "style" && l.value.toLowerCase().includes("background-image")) {
                                        var k = !0;
                                        break b
                                    }
                            k =
                            h.element.tagName;k = k === "IMG" || k === "SVG"
                        }(k || h.element.textContent.length > 1) && !Tw(c, f.element) && Vv(m.ea(), f.element, m.element) && e.push(f);
                        f = m
                    }
                    var l = e
                } else l = [];
                return l
            })
        },
        sy = (a, b) => {
            const c = new Ep;
            a.forEach(d => {
                var e = jw(y(d, ir, 1));
                if (e) {
                    var f = e.toString();
                    Ap(c, f) || c.set(f, {
                        articleStructure: d,
                        Ki: e,
                        gd: null,
                        Tg: !1,
                        xg: null
                    });
                    e = c.get(f);
                    (f = (f = y(d, ir, 2)) ? B(f, 7) : null) ? e.gd = e.gd ? e.gd + "," + f : f: e.Tg = !0;
                    d = y(d, ir, 4);
                    e.xg = d ? B(d, 7) : null
                }
            });
            return Dp(c).map(d => {
                const e = bw(d.Ki, b.document);
                return e.length ? new Sw(e[0],
                    d, b) : null
            }).filter(d => d != null)
        };
    var vy = a => a ? .google_ad_slot ? Wq(new jr(1, {
            yi: a.google_ad_slot
        })) : Yq("Missing dimension when creating placement id"),
        xy = a => {
            switch (a.Mb) {
                case 0:
                case 1:
                    var b = a.l;
                    b == null ? a = null : (a = b.ka(), a == null ? a = null : (b = wi(b, 2), a = b == null ? null : new jr(0, {
                        yg: [a],
                        Sh: b
                    })));
                    return a != null ? Wq(a) : Yq("Missing dimension when creating placement id");
                case 2:
                    return a = wy(a), a != null ? Wq(a) : Yq("Missing dimension when creating placement id");
                default:
                    return Yq("Invalid type: " + a.Mb)
            }
        };
    const wy = a => {
        if (a == null || a.C == null) return null;
        const b = y(a.C, ir, 1),
            c = y(a.C, ir, 2);
        if (b == null || c == null) return null;
        const d = a.na;
        if (d == null) return null;
        a = a.g();
        return a == null ? null : new jr(0, {
            yg: [b, c],
            Vj: d,
            Sh: pw[a]
        })
    };

    function yy(a) {
        const b = Dw(a.ia);
        return (b ? vy(b) : xy(a.ia)).map(c => mr(c))
    }

    function zy(a) {
        a.g = a.g || yy(a);
        return a.g
    }

    function Ay(a, b) {
        if (a.ia.A) throw Error("AMA:AP:AP");
        Cv(b, a.ka(), a.ia.g());
        Fw(a.ia, b)
    }
    const By = class {
        constructor(a, b, c) {
            this.ia = a;
            this.i = b;
            this.ma = c;
            this.g = null
        }
        ka() {
            return this.i
        }
        fill(a, b) {
            var c = this.ia;
            (a = c.B.i(a, b, this.i, c.j)) && Ay(this, a.ob);
            return a
        }
    };

    function Cy(a, b) {
        return iw(() => {
            if (U(et)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = Bw(f);
                    if (g) {
                        if (!f.i && !f.A) {
                            a: {
                                var h = null;
                                try {
                                    var k = Bw(f);
                                    if (k) {
                                        h = Cw(f);
                                        Cv(h, k, f.g());
                                        var l = h;
                                        break a
                                    }
                                    l = null;
                                    break a
                                } catch (r) {
                                    throw zv(h), r;
                                }
                                l = void 0
                            }
                            f.i = l
                        }(h = f.i) && d.push({
                            zk: f,
                            anchorElement: g,
                            Gj: h
                        })
                    }
                }
                if (d.length > 0)
                    for (l = tp(b), k = up(b), e = 0; e < d.length; e++) {
                        const {
                            zk: r,
                            anchorElement: w,
                            Gj: D
                        } = d[e];
                        f = Dy(D, k, l);
                        c.push(new By(r, w, f))
                    }
                l = c
            } else {
                l = [];
                k = [];
                try {
                    const r = [];
                    for (let w = 0; w < a.length; w++) {
                        var m = a[w],
                            n = Bw(m);
                        n && r.push({
                            Lh: m,
                            anchorElement: n
                        })
                    }
                    for (n = 0; n < r.length; n++) {
                        m = k;
                        g = m.push; {
                            var p = r[n];
                            const w = p.anchorElement,
                                D = p.Lh,
                                C = Cw(D);
                            try {
                                Cv(C, w, D.g()), h = C
                            } catch (I) {
                                throw zv(C), I;
                            }
                        }
                        g.call(m, h)
                    }
                    c = tp(b);
                    d = up(b);
                    for (g = 0; g < k.length; g++) e = Dy(k[g], d, c), f = r[g], l.push(new By(f.Lh, f.anchorElement, e))
                } finally {
                    for (c = 0; c < k.length; c++) zv(k[c])
                }
            }
            return l
        }, b)
    }

    function Dy(a, b, c) {
        a = a.getBoundingClientRect();
        return new Gq(a.left + b, a.top + c, a.right - a.left)
    };
    const Ey = {
            1: "0.5vp",
            2: "300px"
        },
        Fy = {
            1: 700,
            2: 1200
        },
        Gy = {
            [1]: {
                ci: "3vp",
                cg: "1vp",
                bi: "0.3vp"
            },
            [2]: {
                ci: "900px",
                cg: "300px",
                bi: "90px"
            }
        };

    function Hy(a, b, c) {
        var d = Iy(a),
            e = P(a) || Fy[d],
            f = void 0;
        c && (f = (c = (c = Jy(mi(c, Ar, 2, x()), d)) ? y(c, yr, 7) : void 0) ? Ky(c, e) : void 0);
        c = f;
        f = Iy(a);
        a = P(a) || Fy[f];
        const g = Ly(Gy[f].cg, a);
        a = g === null ? My(f, a) : new Ny(g, g, Oy(g, 8), 8, .3, c);
        c = Ly(Gy[d].ci, e);
        f = Ly(Gy[d].cg, e);
        d = Ly(Gy[d].bi, e);
        e = a.j;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Ny(e, e, Oy(e, a.i), a.i, a.l, a.g)
    }

    function Py(a, b) {
        const c = ri(a, 4);
        a = Wh(a, 5);
        return c == null || a == null ? b : new Ny(a, 0, [], c, 1)
    }

    function Qy(a, b) {
        const c = Iy(a);
        a = P(a) || Fy[c];
        if (!b) return My(c, a);
        if (b = Jy(mi(b, Ar, 2, x()), c))
            if (b = Ry(b, a)) return b;
        return My(c, a)
    }

    function Sy(a) {
        const b = Iy(a);
        a = P(a) || Fy[b];
        return My(b, a)
    }

    function Ty(a, b) {
        let c = {
            Mc: a.j,
            ub: a.C
        };
        for (let d of a.A) d.adCount <= b && (c = d.Uc);
        return c
    }

    function Uy(a, b, c) {
        var d = ui(b, 2);
        b = y(b, Ar, 1);
        var e = Iy(c);
        var f = P(c) || Fy[e];
        c = Ly(b ? .A(), f) ? ? a.j;
        e = Ly(b ? .l(), f) ? ? a.C;
        d = d ? [] : Vy(b ? .g(), f) ? ? a.A;
        const g = b ? .i() ? ? a.i,
            h = b ? .j() ? ? a.l;
        a = (b ? .C() ? Ky(y(b, yr, 7), f) : null) ? ? a.g;
        return new Ny(c, e, d, g, h, a)
    }

    function Wy(a, b) {
        var c = Iy(b);
        const d = new Br,
            e = new Ar;
        let f = !1;
        var g = W(it);
        g >= 0 && (Ji(e, 4, g), f = !0);
        g = null;
        c === 1 ? (c = W(mt), c >= 0 && (g = c + "vp")) : (c = W(lt), c >= 0 && (g = c + "px"));
        c = W(kt);
        c >= 0 && (g = c + "px");
        g !== null && (Ni(e, 2, g), f = !0);
        c = U(ot) ? "0px" : null;
        c !== null && (Ni(e, 5, c), f = !0);
        if (U(pt)) Ii(d, 2, !0), f = !0;
        else if (c !== null || g !== null) {
            const m = [];
            for (const n of a.A) {
                var h = m,
                    k = h.push;
                var l = new zr;
                l = Ji(l, 1, n.adCount);
                l = Ni(l, 3, c ? ? n.Uc.ub + "px");
                l = Ni(l, 2, g ? ? n.Uc.Mc + "px");
                k.call(h, l)
            }
            ni(e, 3, m)
        }
        return f ? (z(d, 1, e), Uy(a, d, b)) : a
    }
    class Ny {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.C = b;
            this.A = c.sort((g, h) => g.adCount - h.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
    }

    function Jy(a, b) {
        for (let c of a)
            if (wi(c, 1) == b) return c;
        return null
    }

    function Vy(a, b) {
        if (a === void 0) return null;
        const c = [];
        for (let d of a) {
            a = vi(d, 1);
            const e = Ly(B(d, 2), b),
                f = Ly(B(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                Uc: {
                    Mc: e,
                    ub: f
                }
            })
        }
        return c
    }

    function Ry(a, b) {
        const c = Ly(B(a, 2), b),
            d = Ly(B(a, 5), b);
        if (c === null) return null;
        const e = vi(a, 4);
        if (e == null) return null;
        var f = a.g();
        f = Vy(f, b);
        if (f === null) return null;
        const g = y(a, yr, 7);
        b = g ? Ky(g, b) : void 0;
        return new Ny(c, d, f, e, Wh(a, 6), b)
    }

    function My(a, b) {
        a = Ly(Ey[a], b);
        return U(gt) ? new Ny(a === null ? Infinity : a, null, [], 8, .3) : new Ny(a === null ? Infinity : a, null, [], 3, null)
    }

    function Ly(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Iy(a) {
        a = lp(a) >= 900;
        return Yd() && !a ? 1 : 2
    }

    function Oy(a, b) {
        if (b < 4) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Uc: {
                Mc: a * 2,
                ub: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Uc: {
                Mc: a * 3,
                ub: a * 3
            }
        }]
    }

    function Ky(a, b) {
        const c = Ly(B(a, 2), b) || 0,
            d = vi(a, 3) || 1;
        a = Ly(B(a, 1), b) || 0;
        return {
            zh: c,
            wh: d,
            ic: a
        }
    };

    function Xy(a, b, c) {
        return ep({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function Yy(a) {
        if (!a.length) return null;
        const b = fp(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new Zy(b, a)
    }
    class Zy {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };
    let $y, X;
    const az = new Wk(q);
    ((a, b = !0) => {
        $y = a || new Yo;
        typeof q.google_srt !== "number" && (q.google_srt = Math.random());
        Xo($y, q.google_srt);
        X = new fl($y, b, az);
        X.l(!0);
        q.document.readyState == "complete" ? q.google_measure_js_timing || Uk(az) : az.g && Cb(q, "load", () => {
            q.google_measure_js_timing || Uk(az)
        })
    })();
    var bz = (a, b) => X.wb(a, b),
        cz = (a, b) => X.Ga(a, b),
        dz = (a, b, c) => {
            const d = O(Vo).g();
            !b.eid && d.length && (b.eid = d.toString());
            el($y, a, b, !0, c)
        },
        ez = (a, b) => {
            X.pa(1008, a, b)
        };

    function fz(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var kz = (a, b) => {
        var c = eb(b.document.querySelectorAll(".google-auto-placed"));
        const d = eb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = gz(b),
            f = hz(b),
            g = iz(b),
            h = eb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = eb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = eb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(eb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), eb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.Cd, c],
                [a.Lb, d],
                [a.Tj, e],
                [a.zf, f],
                [a.Af, g],
                [a.Rj, h],
                [a.Sj, k],
                [a.Uj, l]
            ]) n === !1 ? b = b.concat(p) : m = m.concat(p);
        a = jz(m);
        c = jz(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
        return a
    };
    const lz = a => {
            const b = fz(a);
            return b ? Ua(Va(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
        },
        gz = a => eb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        hz = a => (lz(a) || eb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(eb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        iz = a => eb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var jz = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var mz = X.Ga(453, kz),
        nz;
    nz = X.Ga(454, (a, b) => {
        const c = eb(b.document.querySelectorAll(".google-auto-placed")),
            d = eb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = gz(b),
            f = hz(b),
            g = iz(b),
            h = eb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = eb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = eb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return jz([].concat(a.Cd === !0 ? c : [], a.Lb === !0 ? d : [], a.Tj === !0 ? e : [], a.zf === !0 ? f : [], a.Af === !0 ? g : [], a.Rj === !0 ? h : [], a.Sj === !0 ? k : [], a.Uj ===
            !0 ? b : []))
    });

    function oz(a, b, c) {
        const d = pz(a);
        b = qz(d, b, c);
        return new rz(a, d, b)
    }

    function sz(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function tz(a) {
        return a.g.map(b => b.box)
    }

    function uz(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class rz {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }

    function pz(a) {
        const b = mz({
                Lb: !1
            }, a),
            c = up(a),
            d = tp(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && e.className.indexOf("google-auto-placed") != -1) || sz(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                To: e ? 1 : 0
            } : null
        }).filter(sb(e => e === null))
    }

    function qz(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? vz(a, b) : Va(a, d => new Zy(d.box, 1))
    }

    function vz(a, b) {
        a = Va(a, d => new Zy(d.box, 1));
        const c = [];
        for (; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Xy(d, a[f], b)) {
                        d = Yy([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function wz(a, b, c) {
        const d = Fq(c, b);
        return !Xa(a, e => ep(e, d))
    }

    function xz(a, b, c, d, e) {
        e = e.ma;
        const f = Fq(e, b),
            g = Fq(e, c),
            h = Fq(e, d);
        return !Xa(a, k => ep(k, g) || ep(k, f) && !ep(k, h))
    }

    function yz(a, b, c, d) {
        const e = tz(a);
        if (wz(e, b, d.ma)) return !0;
        if (!xz(e, b, c.zh, c.ic, d)) return !1;
        const f = new Zy(Fq(d.ma, 0), 1);
        a = Ua(a.l, g => Xy(g, f, c.ic));
        b = Wa(a, (g, h) => g + h.i, 1);
        return a.length === 0 || b > c.wh ? !1 : !0
    };
    var zz = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Az(a, b) {
        const c = new er,
            d = new Fp;
        b.forEach(e => {
            if (Di(e, Ir, 1, Lr)) {
                e = Di(e, Ir, 1, Lr);
                if (y(e, Hr, 1) && y(e, Hr, 1).ka() && y(e, Hr, 2) && y(e, Hr, 2).ka()) {
                    const g = Bz(a, y(e, Hr, 1).ka()),
                        h = Bz(a, y(e, Hr, 2).ka());
                    if (g && h)
                        for (var f of zz({
                                anchor: g,
                                position: wi(y(e, Hr, 1), 2)
                            }, {
                                anchor: h,
                                position: wi(y(e, Hr, 2), 2)
                            })) c.set(Da(f.anchor), f.position)
                }
                y(e, Hr, 3) && y(e, Hr, 3).ka() && (f = Bz(a, y(e, Hr, 3).ka())) && c.set(Da(f), wi(y(e, Hr, 3), 2))
            } else Di(e, Jr, 2, Lr) ? Cz(a, Di(e, Jr, 2, Lr), c) : Di(e, Gr, 3, Lr) && Dz(a, Di(e, Gr, 3, Lr), d)
        });
        return new Ez(c,
            d)
    }
    class Ez {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const Cz = (a, b, c) => {
            y(b, Hr, 2) ? (b = y(b, Hr, 2), (a = Bz(a, b.ka())) && c.set(Da(a), wi(b, 2))) : y(b, ir, 1) && (a = Fz(a, y(b, ir, 1))) && a.forEach(d => {
                d = Da(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Dz = (a, b, c) => {
            y(b, ir, 1) && (a = Fz(a, y(b, ir, 1))) && a.forEach(d => {
                c.add(Da(d))
            })
        },
        Bz = (a, b) => (a = Fz(a, b)) && a.length > 0 ? a[0] : null,
        Fz = (a, b) => (b = jw(b)) ? bw(b, a) : null;
    var Gz = class {
        constructor() {
            this.g = Ne();
            this.i = 0
        }
    };

    function Hz(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Iz(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function Jz(a) {
        a = Kz(a);
        return a.has("all") || a.has("after")
    }

    function Lz(a) {
        a = Kz(a);
        return a.has("all") || a.has("before")
    }

    function Kz(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Iz(a) {
        const b = Kz(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var Mz = class {
        constructor() {
            this.g = new Set;
            this.i = new Gz
        }
    };

    function Nz(a) {
        return function(b) {
            return Cy(b, a)
        }
    }

    function Oz(a) {
        const b = P(a);
        return b ? Ka(Pz, b + tp(a)) : pb
    }

    function Qz(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return pb;
        const d = tz(c || oz(b));
        return e => wz(d, a, e.ma)
    }

    function Rz(a, b, c, d) {
        if (a < 0 || b.zh < 0 || b.wh < 0 || b.ic < 0) throw Error("ama::ead:nd");
        return a === Infinity ? pb : e => yz(d || oz(c, b.ic), a, b, e)
    }

    function Sz(a) {
        if (!a.length) return pb;
        const b = new Vq(a);
        return c => b.contains(c.Mb)
    }

    function Tz(a) {
        return function(b) {
            for (let c of b.Ec)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function Uz(a) {
        return a.length ? function(b) {
            const c = b.Ec;
            return a.some(d => c.indexOf(d) > -1)
        } : qb
    }

    function Vz(a, b) {
        if (a <= 0) return qb;
        const c = pp(b).scrollHeight - a;
        return function(d) {
            return d.ma.g <= c
        }
    }

    function Wz(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[wi(c.ke, 2) || 0]
        }
    }

    function Xz(a) {
        return a.length ? b => a.includes(wi(b.ke, 1) || 0) : qb
    }

    function Yz(a, b) {
        const c = Az(a, b);
        return function(d) {
            var e = d.ka();
            d = pw[d.ia.g()];
            var f = c.i,
                g = Da(e);
            f = f.g.get(g);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(Da(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(Da(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Zz() {
        const a = new Mz;
        return function(b) {
            var c = b.ka(),
                d = pw[b.ia.g()];
            a: switch (d) {
                case 1:
                    b = Jz(c.previousElementSibling) || Lz(c);
                    break a;
                case 4:
                    b = Jz(c) || Lz(c.nextElementSibling);
                    break a;
                case 2:
                    b = Lz(c.firstElementChild);
                    break a;
                case 3:
                    b = Jz(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = Hz(a, c, d);
            d = a.i;
            dz("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: Ce()
            }, .1);
            return !(b || c)
        }
    }
    const Pz = (a, b) => b.ma.g >= a,
        $z = (a, b, c) => {
            c = c.ma.i;
            return a <= c && c <= b
        };

    function aA(a, b, c, d, e) {
        var f = bA(cA(a, b), a);
        if (f.length === 0) {
            var g = !!y(b, Yr, 6) ? .g() ? .length;
            f = y(b, Ur, 28) ? .j() ? .i() && g ? bA(dA(a, b), a) : f
        }
        if (f.length === 0) return Cs(d, "pfno"), [];
        b = f;
        a = e.rd ? eA(a, b, c) : {
            lb: b,
            vd: null
        };
        const {
            lb: h,
            vd: k
        } = a;
        f = h;
        return f.length === 0 && k ? (Cs(d, k), []) : [f[e.Uk ? 0 : e.Tk ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function eA(a, b, c) {
        c = c ? mi(c, Kr, 5, x(gg)) : [];
        const d = Yz(a.document, c),
            e = Zz();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            lb: [],
            vd: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            lb: [],
            vd: "pfet"
        } : {
            lb: b,
            vd: null
        }
    }

    function fA(a, b) {
        return a.ma.g - b.ma.g
    }

    function cA(a, b) {
        const c = y(b, Yr, 6);
        if (!c) return [];
        b = y(b, Ur, 28) ? .j();
        return (b ? .g() ? uy(c.g(gg), a) : ty(c.g(gg), a, !!b ? .j())).map(d => d.j())
    }

    function dA(a, b) {
        b = mi(b, bs, 1, x(gg)) || [];
        return xw(b, a, {}).filter(c => !c.Ec.includes(6))
    }

    function bA(a, b) {
        a = Cy(a, b);
        const c = Oz(b);
        a = a.filter(d => c(d));
        return a.sort(fA)
    };
    var gA = {},
        hA = {},
        iA = {},
        jA = {};

    function kA() {
        throw Error("Do not instantiate directly");
    }
    kA.prototype.Gg = null;
    kA.prototype.Ma = function() {
        return this.content
    };
    kA.prototype.toString = function() {
        return this.content
    };

    function lA(a) {
        if (a.Hg !== gA) throw Error("Sanitized content was not of kind HTML.");
        return sc(a.toString())
    }

    function mA() {
        kA.call(this)
    }
    Ma(mA, kA);
    mA.prototype.Hg = gA;

    function nA(a) {
        if (a != null) switch (a.Gg) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function oA(a) {
        return pA(a, gA) ? a : a instanceof rc ? qA(wc(a).toString()) : qA(String(String(a)).replace(rA, sA), nA(a))
    }
    var qA = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.Gg = d);
            return c
        }
    }(mA);

    function tA(a) {
        return uA(String(a), () => "").replace(vA, "&lt;")
    }
    const wA = RegExp.prototype.hasOwnProperty("sticky"),
        xA = new RegExp((wA ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", wA ? "gy" : "g");

    function uA(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            g, h, k = 0;
        for (; k < d;) {
            switch (e) {
                case 0:
                    var l = a.indexOf("<", k);
                    if (l < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(k));
                        k = d
                    } else c.push(a.substring(k, l)), h = l, k = l + 1, wA ? (xA.lastIndex = k, l = xA.exec(a)) : (xA.lastIndex = 0, l = xA.exec(a.substring(k))), l ? (f = ["<", l[0]], g = l[1], e = 1, k += l[0].length) : c.push("<");
                    break;
                case 1:
                    l = a.charAt(k++);
                    switch (l) {
                        case "'":
                        case '"':
                            let m = a.indexOf(l, k);
                            m < 0 ? k = d : (f.push(l, a.substring(k, m + 1)), k = m + 1);
                            break;
                        case ">":
                            f.push(l);
                            c.push(b(f.join(""),
                                g));
                            e = 0;
                            f = [];
                            h = g = null;
                            break;
                        default:
                            f.push(l)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && k >= d && (k = h + 1, c.push("<"), e = 0, f = [], h = g = null)
        }
        return c.join("")
    }

    function yA(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function zA(a) {
        return pA(a, gA) ? String(tA(a.Ma())).replace(AA, sA) : String(a).replace(rA, sA)
    }

    function BA(a) {
        return pA(a, gA) ? String(tA(a.Ma())).replace(CA, sA) : String(a).replace(DA, sA)
    }
    const EA = /['()]/g;

    function FA(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function Y(a) {
        pA(a, jA) ? a = yA(a.Ma()) : a == null ? a = "" : a instanceof xc ? a = yA(yc(a)) : a instanceof zc ? a = yA(Ac(a)) : (a = String(a), a = GA.test(a) ? a : "zSoyz");
        return a
    }

    function pA(a, b) {
        return a != null && a.Hg === b
    }
    const HA = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function sA(a) {
        return HA[a]
    }
    const IA = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function JA(a) {
        return IA[a]
    }
    const KA = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function LA(a) {
        return KA[a]
    }
    const rA = /[\x00\x22\x26\x27\x3c\x3e]/g,
        AA = /[\x00\x22\x27\x3c\x3e]/g,
        DA = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        CA = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        MA = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        NA = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        GA = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|repeat|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|repeat|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        OA =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        vA = /</g;
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const PA = Math.floor;
    var QA = /^xn--/,
        RA = /[\x2E\u3002\uFF0E\uFF61]/g;
    const SA = {
        Jn: "Overflow: input needs wider integers to process",
        Fn: "Illegal input >= 0x80 (not a basic code point)",
        on: "Invalid input"
    };

    function TA(a) {
        throw RangeError(SA[a]);
    }

    function UA(a, b) {
        const c = a.split("@");
        let d = "";
        c.length > 1 && (d = c[0] + "@", a = c[1]);
        a = a.replace(RA, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function VA(a) {
        return UA(a, b => {
            if (QA.test(b) && b.length > 4) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                d < 0 && (d = 0);
                for (var e = 0; e < d; ++e) b.charCodeAt(e) >= 128 && TA("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = d > 0 ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let n = 1, p = 36;; p += 36) {
                        d >= k && TA("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36;
                        (f >= 36 || f > PA((2147483647 - l) / n)) && TA("Overflow: input needs wider integers to process");
                        l += f * n;
                        var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
                        if (f < g) break;
                        f = 36 - g;
                        n > PA(2147483647 / f) && TA("Overflow: input needs wider integers to process");
                        n *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = 0;
                    c = e == 0 ? PA(c / 700) : c >> 1;
                    for (c += PA(c / f); c > 455; g += 36) c = PA(c / 35);
                    c = PA(g + 36 * c / (c + 38));
                    PA(l / f) > 2147483647 - m && TA("Overflow: input needs wider integers to process");
                    m += PA(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };
    const WA = new Ob(Pb, "558153351");

    function XA(a, b, c) {
        var d = a.Sa.contentWindow;
        const e = !a.A && typeof a.g === "number";
        a.C ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        }, e && (b.experimentId = a.g), a.i.length > 0 && (b.adfiliateWp = a.i), d.postMessage(b, "https://www.gstatic.com")) : (d = d.google.search.cse.element.getElement(a.B), c = {
            rsToken: c,
            hostName: a.host
        }, e && (c.afsExperimentId = a.g), a.i.length > 0 && (c.adfiliateWp = a.i), d.execute(b, void 0, c))
    }
    var YA = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n = !1, p = !1, r = !1, w = "") {
            this.Sa = a;
            this.l = b;
            this.B = c;
            this.j = d;
            this.P = e;
            this.host = f.host;
            this.origin = f.origin;
            this.language = g;
            this.G = h;
            this.g = k;
            this.H = n;
            this.C = l;
            this.F = m;
            this.L = p;
            this.A = r;
            this.i = w
        }
        K() {
            this.Sa.setAttribute("id", "prose-iframe");
            this.Sa.setAttribute("width", "100%");
            this.Sa.setAttribute("height", "100%");
            var a = Wc `box-sizing:border-box;border:unset;`;
            this.Sa.style.cssText = yc(a);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var b = nc(a, mc) || ic;
            var c = VA(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.B;
            var d = this.j,
                e = this.P;
            const f = this.host;
            c = this.G.replace("${website}", c);
            const g = this.L;
            var h = qA,
                k = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.H ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(MA, JA) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            pA(b, hA) || pA(b, iA) ? b = String(b).replace(NA, LA) : b instanceof hc ? b = String(jc(b)).replace(NA, LA) : b instanceof Yb ? b = String(Zb(b).toString()).replace(NA, LA) : (b = String(b), b = OA.test(b) ? b.replace(NA, LA) : "about:invalid#zSoyz");
            a = h(k + zA(b) + '" alt="' + zA(f) + ' icon"><p class="cse-header"><strong>' +
                oA(c) + '</strong></p><div class="gcse-search" data-gname="' + zA(a) + '" data-adclient="' + zA(d) + '" data-adchannel="' + zA(e) + '" data-as_sitesearch="' + zA(f) + '" data-personalizedAds="false"></div></div>' + (g ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = lA(a);
            this.C ? (a = this.Sa, d = ac(new Ob(Pb, "https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: this.F || WA,
                cxId: this.l,
                host: this.host,
                lang: this.language,
                lrh: this.G,
                client: this.j,
                origin: this.origin
            }), a.src = Zb(d).toString()) : (d = new Map([
                ["cx", this.l],
                ["language", this.language]
            ]), this.A && (e = Array.isArray(this.g) ? this.g : [this.g], e.length && d.set("fexp", e.join())), e = Uc(Tc `https://cse.google.com/cse.js`,
                d), d = {}, e = `<script src="${Fc(Zb(e).toString())}"`, d.async && (e += " async"), d.lj && (e += ` custom-element="${Fc(d.lj)}"`), d.defer && (e += " defer"), d.id && (e += ` id="${Fc(d.id)}"`), d.nonce && (e += ` nonce="${Fc(d.nonce)}"`), d.type && (e += ` type="${Fc(d.type)}"`), d.jj && (e += ` crossorigin="${Fc(d.jj)}"`), d = sc(e + ">\x3c/script>"), a = Mc("body", {
                style: Wc `margin:${0};`
            }, [a, d]), this.Sa.srcdoc = wc(a))
        }
    };

    function ZA(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new $A;
        return a.google_reactive_ads_global_state
    }
    class $A {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new aB;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.g =
                null;
            this.clickTriggeredInterstitialMayBeDisplayed = !1
        }
    }
    var aB = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function bB(a, b) {
        return new cB(a, b)
    }

    function dB(a) {
        const b = eB(a);
        Sa(a.g.maxZIndexListeners, c => c(b))
    }

    function eB(a) {
        a = oe(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function fB(a, b) {
        ab(a.g.maxZIndexListeners, c => c === b)
    }
    class gB {
        constructor(a) {
            this.g = ZA(a).floatingAdsStacking
        }
    }

    function hB(a) {
        if (a.g == null) {
            var b = a.i,
                c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            dB(b);
            a.g = d
        }
    }

    function iB(a) {
        if (a.g != null) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            dB(b);
            a.g = null
        }
    }
    class cB {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    };

    function jB(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? jB(b) || a : a
    }

    function kB(a, b) {
        return lB(b, a.document.body).flatMap(c => mB(c))
    }

    function lB(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function mB(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function nB(a) {
        a.g !== null && (a.g.Bj.forEach(b => {
            b.inert = !1
        }), a.g.Bk ? .focus(), a.g = null)
    }

    function oB(a, b) {
        nB(a);
        const c = jB(a.win.document);
        b = kB(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.g = {
            Bk: c,
            Bj: b
        }
    }
    var pB = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
        te() {
            nB(this)
        }
    };

    function qB(a) {
        return new rB(a, new Rp(a, a.document.body), new Rp(a, a.document.documentElement), new Rp(a, a.document.documentElement))
    }

    function sB(a) {
        Qp(a.j, "scroll-behavior", "auto");
        const b = tB(a.win);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.win.scrollY);
        Qp(a.g, "position", "fixed");
        Qp(a.g, "top", `${-b.previousWindowScroll}px`);
        Qp(a.g, "width", "100%");
        tB(a.win).overrideBodyHeightOnPreventScrolling && (Qp(a.g, "height", "auto"), Qp(a.g, "max-height", "none"));
        Qp(a.g, "overflow-x", "hidden");
        Qp(a.g, "overflow-y", "hidden");
        Qp(a.i, "overflow-x", "hidden");
        Qp(a.i, "overflow-y", "hidden")
    }

    function uB(a) {
        Pp(a.g);
        Pp(a.i);
        const b = tB(a.win);
        b.activePageScrollPreventers.delete(a);
        b.activePageScrollPreventers.size === 0 && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        Pp(a.j)
    }
    var rB = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    };

    function tB(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set,
            overrideBodyHeightOnPreventScrolling: !1
        }
    }

    function vB(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function wB(a, b) {
        return xB(`#${a}`, b)
    }

    function yB(a, b) {
        return xB(`.${a}`, b)
    }

    function xB(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function zB(a, b) {
        const c = a.document.createElement("div");
        u(c, Fs(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            eb: c,
            shadowRoot: a
        }
    };

    function AB(a, b) {
        b = zB(a, b);
        a.document.body.appendChild(b.eb);
        return b
    }

    function BB(a, b) {
        const c = new R(b.R);
        $p(b, !0, () => void c.g(!0));
        $p(b, !1, () => {
            a.setTimeout(() => {
                b.R || c.g(!1)
            }, 700)
        });
        return Vp(c)
    };

    function CB(a) {
        const b = a.xd;
        var c = a.Wf,
            d = a.ud;
        const e = a.jd,
            f = a.Bg,
            g = a.Ke,
            h = a.Ra;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Y(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            Y(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? h ? 20 : 16 : 0;
        a += Y(c) + "px; transition: transform " + Y(g) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + Y(c) + "px; border-bottom-right-radius: " + Y(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + Y(c) + "px; border-bottom-left-radius: " + Y(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (h ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (h ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            zA(f) + '">';
        d = h ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + zA(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + zA(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + zA(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return qA(a)
    };

    function DB(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && typeof b.pushState === "function" ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new EB(a, b);
        b.K();
        return b ? a.googNavStack = b : null
    }

    function FB(a, b) {
        return b ? b.googNavStackId === a.j ? b : null : null
    }

    function GB(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            const d = c === 0;
            a.M.requestAnimationFrame(() => void b[c].Lk({
                isFinal: d
            }))
        }
    }

    function HB(a, b) {
        b = hb(a.stack, b, (c, d) => c - d.gh.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class EB extends Q {
        constructor(a, b) {
            super();
            this.M = a;
            this.g = b;
            this.stack = [];
            this.j = Math.random() * 1E9 >>> 0;
            this.A = 0;
            this.l = c => {
                (c = FB(this, c.state)) ? GB(this, HB(this, c.googNavStackStateId + .5)): GB(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.j,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        Lk: c,
                        gh: a
                    })
                });
            this.g.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = HB(this, a.googNavStackStateId);
                    var d;
                    if (d = c.length > 0) {
                        d = c[0].gh;
                        const e = FB(this, this.g.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.g.go(-c.length);
                    GB(this, c)
                }
            }
        }
        K() {
            this.M.addEventListener("popstate", this.l)
        }
        i() {
            this.M.removeEventListener("popstate", this.l);
            super.i()
        }
    };

    function IB(a) {
        return (a = DB(a)) ? new JB(a) : null
    }

    function KB(a) {
        if (!a.g) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.g = c;
            b.then(() => {
                a.g && !a.C && (a.g = null, fq(a.j))
            })
        }
    }
    var JB = class extends Q {
        constructor(a) {
            super();
            this.l = a;
            this.j = new gq;
            this.g = null
        }
    };

    function LB(a, b, c) {
        var d = c.hf ? null : new pB(a);
        const e = bB(new gB(a), c.zIndex - 1);
        b = MB(a, b, c);
        d = new NB(a, b, d, c.xc, qB(a), e);
        d.K();
        (c.Og || c.Og === void 0) && OB(d);
        c.tc && ((a = IB(a)) ? PB(d, a, c.Pf) : c.Pf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function OB(a) {
        a.A = b => {
            b.key === "Escape" && a.g.R && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function PB(a, b, c) {
        $p(a.g, !0, () => {
            try {
                KB(b)
            } catch (d) {
                c ? .(d)
            }
        });
        $p(a.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        dq(b.j).listen(() => void a.collapse());
        Np(a, b)
    }

    function QB(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function RB(a) {
        a.win.setTimeout(() => {
            a.g.R && QB(a).La.focus()
        }, 500)
    }

    function SB(a) {
        const {
            Of: b,
            cj: c
        } = QB(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function TB(a) {
        $p(a.j, !1, () => {
            QB(a).La.classList.add("hd-hidden")
        })
    }
    var NB = class extends Q {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.B = b;
            this.l = c;
            this.xc = d;
            this.g = new R(!1);
            this.j = BB(a, this.g);
            $p(this.j, !0, () => {
                sB(e);
                hB(f)
            });
            $p(this.j, !1, () => {
                uB(e);
                iB(f)
            })
        }
        show({
            Lg: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            QB(this).La.classList.remove("hd-hidden");
            Lp(this.win);
            QB(this).La.classList.add("hd-revealed");
            this.g.g(!0);
            this.l && (oB(this.l, QB(this).gb.eb), this.xc && RB(this));
            a && $p(this.j, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            QB(this).La.classList.remove("hd-revealed");
            this.g.g(!1);
            this.l ? .te()
        }
        isVisible() {
            return this.j
        }
        K() {
            SB(this);
            TB(this)
        }
        i() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.B.gb.eb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .te();
            super.i()
        }
    };

    function MB(a, b, c) {
        const d = AB(a, c.jf),
            e = d.shadowRoot;
        e.appendChild(Xd(new Kd(a.document), lA(CB({
            xd: c.xd,
            Wf: c.Wf ? ? !0,
            ud: c.ud || !1,
            jd: c.jd,
            Bg: c.Bg || "",
            zIndex: c.zIndex,
            Ke: .5,
            Ra: c.Ra || !1
        }))));
        const f = wB("hd-drawer-container", e);
        c.qf ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = wB("hd-content-container", e);
        c.appendChild(b);
        Lp(a);
        return {
            La: f,
            Of: wB("hd-modal-background", e),
            cf: c,
            cj: wB("hd-close-button", e),
            Wo: wB("hd-back-arrow-button", e),
            gb: d
        }
    };

    function UB(a) {
        const b = a.vk,
            c = a.Lj;
        var d = a.Ke;
        const e = a.Ra;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + Y(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            Y(c) + "%; transition: transform " + Y(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += Y(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            Y(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + Y((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            Y(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + Y(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + Y(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            Y(d) + "px " + Y(d) + "px 0 0; background: white; display: flex; height: " + Y(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            VB("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + VB("ved-fixed-handle") + "</div></div></div>";
        return qA(a)
    }

    function VB(a) {
        return qA('<div class="ved-handle" id="' + zA(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function WB(a) {
        return uq(a.g).map(b => b ? XB(a, b) : 0)
    }

    function XB(a, b) {
        switch (a.direction) {
            case 0:
                return YB(-b.ri);
            case 1:
                return YB(-b.oi);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function ZB(a) {
        return wq(a.g).map(b => XB(a, b))
    }
    var $B = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function YB(a) {
        return a === 0 ? 0 : a
    };

    function Z(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function aC(a) {
        a.win.setTimeout(() => {
            a.g.R && Z(a).La.focus()
        }, 500)
    }

    function bC(a) {
        Z(a).La.classList.remove("ved-hidden");
        Lp(a.win);
        const {
            qa: b,
            bb: c
        } = Z(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || cC(a);
        Z(a).La.classList.add("ved-revealed");
        a.g.g(!0);
        a.j && (oB(a.j, Z(a).gb.eb), a.xc && aC(a))
    }

    function dC(a) {
        return BB(a.win, a.g)
    }

    function eC(a, b) {
        const c = new R(b());
        dq(a.H).listen(() => void c.g(b()));
        return Vp(c)
    }

    function fC(a) {
        const {
            qa: b,
            Yd: c
        } = Z(a);
        return eC(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function gC(a) {
        const {
            qa: b,
            Yd: c
        } = Z(a);
        return eC(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function hC(a) {
        const {
            qa: b
        } = Z(a);
        return eC(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function iC(a) {
        return Wp(fC(a), hC(a))
    }

    function jC(a) {
        const {
            qa: b,
            bb: c
        } = Z(a);
        return eC(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function cC(a) {
        Z(a).bb.classList.add("ved-snap-point-top");
        var b = kC(a, Z(a).bb);
        Z(a).qa.scrollTop = b;
        lC(a)
    }

    function mC(a) {
        Yp(fC(a), !0, () => {
            const {
                Vg: b,
                Sc: c
            } = Z(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Yp(fC(a), !1, () => {
            const {
                Vg: b,
                Sc: c
            } = Z(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function nC(a) {
        const b = Bq(a.win, Z(a).cf);
        Eq(b).i(() => void oC(a));
        Np(a, b)
    }

    function pC(a) {
        Yp(qC(a), !0, () => {
            Z(a).Fh.classList.remove("ved-hidden")
        });
        Yp(qC(a), !1, () => {
            Z(a).Fh.classList.add("ved-hidden")
        })
    }

    function rC(a) {
        const b = () => void fq(a.F),
            {
                Of: c,
                bb: d,
                Kj: e
            } = Z(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        $p(sC(a), !0, b)
    }

    function tC(a) {
        $p(dC(a), !1, () => {
            cC(a);
            Z(a).La.classList.add("ved-hidden")
        })
    }

    function lC(a) {
        Zp(a.l, !1, () => void fq(a.H))
    }

    function oC(a) {
        if (!a.l.R) {
            var {
                Ig: b,
                cf: c
            } = Z(a), d = c.getBoundingClientRect().height;
            d = Math.max(uC(a), d);
            a.l.g(!0);
            var e = vC(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function qC(a) {
        const {
            qa: b,
            bb: c
        } = Z(a);
        return eC(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function sC(a) {
        return Up(a.A.map(fr), wC(a))
    }

    function wC(a) {
        return eC(a, () => Z(a).qa.scrollTop === 0)
    }

    function kC(a, b) {
        ({
            Sc: a
        } = Z(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function xC(a, b) {
        a.A.g(!0);
        const {
            Sc: c,
            qa: d
        } = Z(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void yC(a, b)
    }

    function yC(a, b) {
        const {
            Sc: c,
            qa: d
        } = Z(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Z(a).qa.scrollTop = b;
        lC(a);
        a.A.g(!1)
    }

    function vC(a) {
        const b = Z(a).qa.scrollTop;
        xC(a, b);
        return () => void yC(a, b)
    }

    function uC(a) {
        const {
            qa: b,
            Yd: c,
            Ig: d,
            bb: e
        } = Z(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var zC = class extends Q {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.B = b;
            this.L = c;
            this.j = d;
            this.xc = e;
            this.F = new gq;
            this.H = new gq;
            this.g = new R(!1);
            this.A = new R(!1);
            this.l = new R(!1)
        }
        K() {
            cC(this);
            mC(this);
            nC(this);
            pC(this);
            rC(this);
            tC(this);
            Z(this).qa.addEventListener("scroll", () => void lC(this))
        }
        i() {
            const a = this.B.gb.eb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .te();
            super.i()
        }
    };

    function AC(a, b, c) {
        const d = AB(a, c.jf),
            e = d.shadowRoot;
        e.appendChild(Xd(new Kd(a.document), lA(UB({
            vk: c.Jh * 100,
            Lj: c.Wg * 100,
            zIndex: c.zIndex,
            Ke: .5,
            Ra: c.Ra || !1
        }))));
        const f = wB("ved-drawer-container", e);
        c.qf ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = wB("ved-content-container", e);
        c.appendChild(b);
        Lp(a);
        return {
            La: f,
            Of: wB("ved-modal-background", e),
            ii: wB("ved-ui-revealer", e),
            qa: wB("ved-scroller", e),
            Sc: wB("ved-scrolled-stack", e),
            Kj: wB("ved-fully-closed-anchor", e),
            bb: wB("ved-partially-extended-anchor", e),
            Ig: wB("ved-content-sizer",
                e),
            cf: c,
            ep: wB("ved-moving-handle", e),
            Yd: wB("ved-moving-handle-holder", e),
            Ij: wB("ved-fixed-handle", e),
            Vg: wB("ved-fixed-handle-holder", e),
            Fh: wB("ved-over-scroll-block", e),
            gb: d
        }
    };

    function BC(a, b, c) {
        var d = bB(new gB(a), c.zIndex - 1);
        b = AC(a, b, c);
        const e = c.hf ? null : new pB(a);
        var f = b.Ij;
        f = new xq(new oq(a, f), new lq(f));
        var g = f.g;
        g.A.addEventListener("mousedown", g.G);
        g.l.addEventListener("mouseup", g.C);
        g.l.addEventListener("mousemove", g.B, {
            passive: !1
        });
        g = f.i;
        g.i.addEventListener("touchstart", g.B);
        g.i.addEventListener("touchend", g.A);
        g.i.addEventListener("touchmove", g.C, {
            passive: !1
        });
        b = new zC(a, b, new $B(f), e, c.xc);
        b.K();
        d = new CC(a, b, qB(a), d);
        Np(d, b);
        d.K();
        c.tc && ((a = IB(a)) ? DC(d, a, c.Pf) :
            c.Pf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function DC(a, b, c) {
        $p(a.g.g, !0, () => {
            try {
                KB(b)
            } catch (d) {
                c ? .(d)
            }
        });
        $p(a.g.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        dq(b.j).listen(() => void a.collapse());
        Np(a, b)
    }

    function EC(a) {
        $p(Up(iC(a.g), jC(a.g)), !0, () => {
            Z(a.g).bb.classList.remove("ved-snap-point-top")
        });
        Yp(gC(a.g), !0, () => {
            Z(a.g).qa.classList.add("ved-no-snap")
        });
        Yp(gC(a.g), !1, () => {
            Z(a.g).qa.classList.remove("ved-no-snap")
        });
        $p(gC(a.g), !1, () => {
            var b = a.g;
            var c = Z(b).Yd;
            c = xC(b, kC(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function FC(a) {
        const b = a.g.L;
        WB(b).listen(c => {
            c = -c;
            if (c > 0) {
                const {
                    ii: d
                } = Z(a.g);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                ii: c
            } = Z(a.g)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        ZB(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var CC = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.g = b;
            $p(dC(b), !0, () => {
                sB(c);
                hB(d)
            });
            $p(dC(b), !1, () => {
                uB(c);
                iB(d)
            })
        }
        show({
            Lg: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            bC(this.g);
            a && $p(dC(this.g), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.g;
            Z(a).La.classList.remove("ved-revealed");
            a.g.g(!1);
            a.j ? .te()
        }
        isVisible() {
            return dC(this.g)
        }
        K() {
            dq(this.g.F).listen(() => {
                this.collapse()
            });
            EC(this);
            FC(this);
            Lp(this.win)
        }
    };

    function GC(a, b) {
        return Ce() === 2 ? BC(a.win, b, {
            Jh: .95,
            Wg: .95,
            zIndex: 2147483645,
            tc: !0,
            Ra: !0
        }) : LB(a.win, b, {
            xd: "min(65vw, 768px)",
            jd: "",
            ud: !1,
            zIndex: 2147483645,
            tc: !0,
            Wf: !1,
            Ra: !0
        })
    }

    function HC(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.U.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.H,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.B,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.Db.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.L
            };
        a.ua && (c.adLoadedCallback = a.Oa.bind(a));
        a.j && a.A instanceof
        Array && (c.fexp = a.A.join(","));
        a.win._googCsa("relatedsearch", c, b)
    }

    function IC(a) {
        a.win.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.g.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var JC = class extends Q {
        constructor(a, b, c, d, e, f, g, h, k, l = () => {}) {
            super();
            this.win = a;
            this.U = b;
            this.P = e;
            this.B = f;
            this.l = h;
            this.Ja = k;
            this.kb = l;
            this.language = d ? .g() || "en";
            this.jb = d ? .i() || "Search results from ${website}";
            this.ua = U(vt);
            this.H = c.replace("ca", "partner");
            this.da = new Kd(a.document);
            this.g = Wd(this.da, "IFRAME");
            this.L = g.i ? g.g : "9d449ff4a772956c6";
            this.A = (this.j = U(At)) ? O(Vo).g().concat(this.B) : this.B;
            this.F = new YA(this.g, this.L, "auto-rs-prose", this.H, "AutoRsVariant", a.location, this.language, this.jb,
                this.A, this.l, this.Ja, this.j);
            this.na = GC(this, this.g);
            Np(this, this.na)
        }
        K() {
            this.U.length !== 0 && (this.ua || hw(1075, () => {
                this.F.K()
            }, this.win), hw(1076, () => {
                const a = Wd(this.da, "SCRIPT");
                hd(a, Tc `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), HC(this), As(this.P, {
                sts: "ok"
            }), this.l && IC(this))
        }
        Oa(a, b) {
            b ? hw(1075, () => {
                this.F.K()
            }, this.win) : (this.kb(), Cs(this.P, "pfns"))
        }
        Db(a, b) {
            XA(this.F, a, b);
            (() => {
                if (!this.l) {
                    const c = new ResizeObserver(async e => {
                            this.g.height =
                                "0";
                            await new Promise(f => {
                                this.win.requestAnimationFrame(f)
                            });
                            this.g.height = e[0].target.scrollHeight.toString()
                        }),
                        d = () => {
                            const e = this.g.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.na.show()
            })()
        }
    };
    var KC = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };

    function LC(a) {
        const b = Gw(a.l.ia),
            c = a.C.Ma(a.G, () => a.i());
        b.appendChild(c);
        a.A && (b.className = a.A);
        return {
            yj: b,
            ij: c
        }
    }
    class MC {
        constructor(a, b, c, d) {
            this.G = a;
            this.l = b;
            this.C = c;
            this.A = d || null;
            this.g = null;
            this.j = new R(null)
        }
        K() {
            const a = LC(this);
            this.g = a.yj;
            Ay(this.l, this.g);
            this.j.g(a.ij)
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.j.g(null)
        }
        B() {
            return this.j
        }
    };
    async function NC(a) {
        await new Promise(b => {
            setTimeout(() => {
                try {
                    OC(a)
                } catch (c) {
                    Cs(a.i, "pfere", c)
                }
                b()
            })
        })
    }

    function OC(a) {
        if ((!a.rd || !PC(a.config, a.ca, a.i)) && QC(a.g ? .i(), a.i)) {
            var b = a.g ? .j();
            b = aA(a.win, a.config, a.ca, a.i, {
                Uk: !!b ? .l(),
                rd: a.rd,
                fp: !!b ? .g(),
                Tk: !!b ? .A()
            });
            b = RC(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = a.g ? .g() ? .g() || 0,
                f = SC(a.g),
                g = !!a.g ? .A(),
                h = String(a.g ? .C());
            if (!y(a.config, Nr, 25) ? .g()) {
                var k = () => {
                    d.forEach(l => {
                        l.i()
                    })
                };
                hw(1074, () => {
                    (new JC(a.win, c, a.webPropertyCode, a.g ? .i(), a.i, e, f, g, h, k)).K()
                }, a.win)
            }
        }
    }
    var TC = class {
        constructor(a, b, c, d, e) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.ca = e;
            this.rd = !0;
            this.i = new Ds(a, b, y(this.config, Ur, 28) || new Ur);
            this.g = y(this.config, Ur, 28)
        }
    };

    function PC(a, b, c) {
        a = y(a, Ur, 28) ? .g() ? .g() || 0;
        const d = O(uv).g(zt.g, zt.defaultValue);
        return d && d.includes(a.toString()) ? !1 : (b ? Ci(b, 2, x()) : []).length === 0 ? (Cs(c, "pfeu"), !0) : !1
    }

    function QC(a, b) {
        const c = O(uv).g(yt.g, yt.defaultValue);
        a = a ? .g() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (Cs(b, "pflna"), !1) : !0
    }

    function RC(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            d = new MC(b, d, new Is(g), "autors-widget");
            d.K();
            c[f] = d
        }
        return c
    }

    function SC(a) {
        const b = a ? .B() || !1;
        a = a ? .l() || "";
        return new KC(b, a)
    };
    var UC = (a, b) => {
        const c = [];
        y(a, cs, 18) && c.push(2);
        b.ca && c.push(0);
        y(a, Ur, 28) && Ai(y(a, Ur, 28), 1) == 1 && c.push(1);
        y(a, Sr, 31) && Ai(y(a, Sr, 31), 1) == 1 && c.push(5);
        y(a, Pr, 32) && c.push(6);
        y(a, fs, 34) && F(y(a, fs, 34), 3) && c.push(7);
        return c
    };

    function VC(a, b) {
        const c = Wd(Jd(a), "IMG");
        WC(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        u(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: b == null ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function XC(a, b) {
        const c = b.document.createElement("button");
        WC(b, c);
        u(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.i));
        c.addEventListener("click", d => {
            a.j();
            d.stopPropagation()
        });
        return c
    }

    function YC(a, b, c) {
        const d = Wd(Jd(b), "IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.l);
        WC(b, d);
        u(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function ZC(a) {
        const b = a.document.createElement("ins");
        WC(a, b);
        u(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class $C {
        constructor(a, b, c) {
            this.i = a;
            this.l = b;
            this.j = c;
            this.g = new R(!1)
        }
        Ma(a, b, c, d) {
            const e = VC(a, d),
                f = VC(a),
                g = XC(this, a),
                h = YC(this, a, c);
            a = ZC(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.g.listen(k => {
                u(e, {
                    display: k ? "none" : "inline"
                });
                u(f, {
                    display: k ? "inline" : "none"
                });
                k ? (u(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), u(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (u(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), u(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        Xg() {
            return 40
        }
        Dh() {
            this.g.g(!1);
            return 0
        }
        Eh() {
            this.g.g(!0)
        }
    }

    function WC(a, b) {
        u(b, Fs(a));
        u(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };
    var aD = a => a.googlefc = a.googlefc || {},
        bD = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        cD = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new Vr;
                b = Ni(b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = Ni(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = Ni(b, 3, a.defaultFloatingToolbarDismissPrivacySettings);
                a = Lh(a)
            } else a = null;
            return a
        };

    function dD(a, b) {
        const c = b.document.createElement("button");
        eD(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.i
        };
        a.g && (b["border-top"] = a.g, b["border-bottom"] = a.g);
        u(c, b);
        c.addEventListener("click", d => {
            a.C();
            d.stopPropagation()
        });
        return c
    }

    function fD(a, b, c, d) {
        const e = b.document.createElement("div");
        u(e, Fs(b));
        u(e, {
            "align-items": "center",
            "background-color": a.i,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        u(f, Fs(b));
        u(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (u(e, {
                    "flex-direction": "row"
                }), a.g && u(e, {
                    "border-top": a.g,
                    "border-bottom": a.g
                }), u(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                u(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (u(e, {
                border: "0",
                "flex-direction": "column"
            }), u(f, {
                "margin-left": "0",
                "text-align": "center"
            }), u(c, {
                "margin-right": "0",
                width: "100%"
            }), a.g && u(c, {
                "border-top": a.g,
                "border-bottom": a.g
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function eD(a, b, c) {
        u(c, Fs(b));
        u(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.B,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class gD {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.A = a;
            this.C = b;
            this.G = c;
            this.i = d;
            this.B = e;
            this.l = f;
            this.g = g;
            this.j = h
        }
        Ma(a) {
            const b = a.document.createElement("div");
            eD(this, a, b);
            u(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.i
            });
            if (this.l) {
                var c = Wd(Jd(a), "IMG");
                c.src = this.l;
                eD(this, a, c);
                u(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            eD(this, a, c);
            u(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = dD(this, a);
            c.appendChild(b);
            return this.j ? fD(this, a, c, this.j) : c
        }
    };

    function hD(a, b) {
        b = b.filter(c => y(c, rr, 4) ? .g() === 5 && Hi(c, 8) === 1);
        b = xw(b, a);
        a = Cy(b, a);
        a.sort((c, d) => d.ma.g - c.ma.g);
        return a[0] || null
    };

    function iD({
        qe: a,
        pd: b,
        Zd: c,
        re: d,
        qd: e,
        ae: f
    }) {
        const g = [];
        for (let n = 0; n < f; n++)
            for (let p = 0; p < c; p++) {
                var h = p,
                    k = c - 1,
                    l = n,
                    m = f - 1;
                g.push({
                    x: a + (k === 0 ? 0 : h / k) * (b - a),
                    y: d + (m === 0 ? 0 : l / m) * (e - d)
                })
            }
        return g
    }

    function jD(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function kD(a, b) {
        var c = iD({
            qe: b.left,
            pd: b.right,
            Zd: 10,
            re: b.top,
            qd: b.bottom,
            ae: 10
        });
        b = new Set;
        for (const d of c)(c = lD(a, d)) && b.add(c);
        return b
    }

    function mD(a, b) {
        for (const c of b)
            if (b = lD(a, c)) return b;
        return null
    }

    function nD(a, b, c) {
        if (tk(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || wk(b).width <= 1 && wk(b).height <= 1 || a.g.zj && !a.g.zj(b) ? !0 : !1;
        a.g.Ug && a.g.Ug(b, c, d);
        return d ? null : b
    }

    function lD(a, b) {
        var c = jD(a.M.document, b);
        if (c) {
            var d;
            if (!(d = nD(a, c, b))) a: {
                d = a.M.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = nD(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var oD = class {
        constructor(a, b = {}) {
            this.M = a;
            this.g = b
        }
    };

    function pD({
        M: a,
        pk: b,
        jk: c,
        aj: d,
        lp: e,
        mp: f,
        I: g
    }) {
        let h = 0;
        try {
            h |= kp(a, f);
            const m = Math.min(a.screen.width || 0, a.screen.height || 0);
            h |= m ? m < 320 ? 8192 : 0 : 2048;
            h |= a.navigator && qD(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = h;
                const n = a.innerHeight;
                var k = Te(a) * n >= b;
                var l = f | (k ? 0 : 1024)
            } else l = h | (a.innerHeight >= a.innerWidth ? 0 : 8);
            h = l;
            h |= mp(a, c, !0, e)
        } catch {
            h |= 32
        }
        switch (d) {
            case 2:
                rD(a, g) && (h |= 16777216);
                break;
            case 1:
                sD(a, g) && (h |= 16777216)
        }
        return h
    }

    function qD(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var rD = (a, b = null) => {
            const c = iD({
                qe: 0,
                pd: a.innerWidth,
                Zd: 3,
                re: 0,
                qd: Math.min(Math.round(a.innerWidth / 320 * 50), tD) + 15,
                ae: 3
            });
            return mD(uD(a, b), c) != null
        },
        sD = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), tD) + 15,
                f = iD({
                    qe: 0,
                    pd: c,
                    Zd: 3,
                    re: d - e,
                    qd: d,
                    ae: 3
                });
            e > 25 && f.push({
                x: c - 25,
                y: d - 25
            });
            return mD(uD(a, b), f) != null
        };

    function vD(a, b) {
        const c = a.innerWidth,
            d = a.innerHeight;
        let e = d;
        for (; e > b;) {
            var f = iD({
                qe: 0,
                pd: c,
                Zd: 9,
                re: e - b,
                qd: e,
                ae: 9
            });
            f = mD(uD(a), f);
            if (!f) return d - e;
            e = Math.min(f.getBoundingClientRect().top - 1, e - 1)
        }
        return null
    }

    function uD(a, b = null) {
        return new oD(a, {
            Ug: wD(a, b)
        })
    }

    function wD(a, b = null) {
        if (b) return (c, d, e) => {
            el(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const tD = 90 * 1.38;

    function xD(a) {
        a = new yD(a);
        a.K();
        return a
    }

    function zD(a) {
        if (!vB(a.win)) {
            if (a.j.R) {
                const b = tp(a.win);
                if (b > a.g + 100 || b < a.g - 100) a.j.g(!1), a.g = np(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void AD(a), 200)
        }
    }

    function AD(a) {
        if (!vB(a.win)) {
            var b = np(a.win);
            a.g && a.g > b && (a.g = b);
            b = tp(a.win);
            b >= a.g - 100 && (a.g = Math.max(a.g, b), a.j.g(!0))
        }
    }
    var yD = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = 0;
            this.l = null;
            this.A = () => void zD(this)
        }
        K() {
            this.win.addEventListener("scroll", this.A);
            this.g = np(this.win);
            AD(this)
        }
        i() {
            this.win.removeEventListener("scroll", this.A);
            this.j.g(!1);
            super.i()
        }
    };

    function BD(a) {
        a.g || (a.g = CD(a));
        u(a.g, {
            display: "block"
        });
        a.A.Eh();
        a.j.g(a.C)
    }

    function DD(a) {
        const b = a.A.Dh();
        switch (b) {
            case 0:
                a.j.g(a.C);
                break;
            case 1:
                a.g && (u(a.g, {
                    display: "none"
                }), a.j.g(null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function CD(a) {
        var b = vD(a.l, a.A.Xg() + 60);
        b = b == null ? 30 : b + 30;
        const c = a.l.document.createElement("div");
        u(c, Fs(a.l));
        u(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.C = a.A.Ma(a.l, () => a.i(), () => {
            a.G.dispose();
            DD(a)
        }, () => {
            a.G.dispose();
            BD(a)
        });
        c.appendChild(a.C);
        a.F && (c.className = a.F);
        a.l.document.body.appendChild(c);
        return c
    }
    class ED {
        constructor(a, b, c) {
            this.l = a;
            this.A = b;
            this.C = null;
            this.j = new R(null);
            this.F = c || null;
            this.G = xD(a);
            this.g = null
        }
        K() {
            const a = Vp(this.G.j);
            Yp(a, !0, () => void BD(this));
            $p(a, !1, () => void DD(this))
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.G.dispose();
            this.j.g(null)
        }
        B() {
            return this.j
        }
    };

    function FD(a) {
        a.G.g(0);
        a.l != null && (a.l.i(), a.l = null);
        a.j != null && (a.j.i(), a.j = null)
    }

    function GD(a) {
        a.j = new ED(a.C, a.L, a.F);
        a.j.K();
        aq(a.A, a.j.B());
        a.G.g(2)
    }
    class HD {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.H = b;
            this.P = c;
            this.L = d;
            this.F = e;
            this.G = new R(0);
            this.A = new R(null);
            this.j = this.l = this.g = null
        }
        K() {
            this.H ? (this.l = new MC(this.C, this.H, this.P, this.F), this.l.K(), aq(this.A, this.l.B()), this.G.g(1), this.g == null && (this.g = new Oq(this.C), this.g.K(2E3)), Mq(this.g, () => {
                FD(this);
                GD(this)
            })) : GD(this)
        }
        i() {
            FD(this);
            this.g && (this.g.dispose(), this.g = null)
        }
        B() {
            return this.A
        }
    };
    var ID = class {
        constructor(a, b, c) {
            this.position = a;
            this.Cb = b;
            this.wf = c
        }
    };

    function JD(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function KD(a, b, c) {
        var d = P(a);
        d = new ID(b.Ub.Ah(b.nb), b.Cb + 2 * b.nb, Math.min(d, b.Od) - b.Ub.zd() + 2 * b.nb);
        d = d.position.Jg(a, d.Cb, d.wf);
        var e = lp(a),
            f = P(a);
        c = LD(a, new Zj(Yc(d.top, 0, f - 1), Yc(d.right, 0, e - 1), Yc(d.bottom, 0, f - 1), Yc(d.left, 0, e - 1)), c);
        f = MD(c);
        let g = d.top;
        e = [];
        for (let h = 0; h < f.length; h++) f[h].start > g && e.push(new JD(g, f[h].start)), g = f[h].end;
        g < d.bottom && e.push(new JD(g, d.bottom));
        a = P(a);
        d = [];
        for (f = e.length - 1; f >= 0; f--) d.push(new JD(a - e[f].end, a - e[f].start));
        a: {
            for (const h of d)
                if (a = h.start + b.nb, a > b.Ub.zd() +
                    b.If ? a = null : (d = Math.min(h.end - b.nb, b.Od) - a, a = d < b.Nf ? null : {
                        position: b.Ub.ni(a),
                        Jc: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            Re: b,
            Vo: c
        }
    }

    function LD(a, b, c) {
        const d = kD(new oD(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function MD(a) {
        return Array.from(a).map(ND).sort((b, c) => b.start - c.start)
    }

    function ND(a) {
        a = a.getBoundingClientRect();
        return new JD(a.top, a.bottom)
    };

    function OD({
        ga: a,
        ta: b
    }) {
        return new PD(a, b)
    }
    var PD = class {
        constructor(a, b) {
            this.ga = a;
            this.ta = b
        }
        Ah(a) {
            return new PD(this.ga - a, this.ta - a)
        }
        Jg(a, b, c) {
            a = P(a) - this.ga - c;
            return new Zj(a, this.ta + b, a + c, this.ta)
        }
        zg(a) {
            a.bottom = `${this.ga}px`;
            a.left = `${this.ta}px`;
            a.right = ""
        }
        Yg() {
            return 0
        }
        zd() {
            return this.ga
        }
        ni(a) {
            return new PD(a, this.ta)
        }
    };

    function QD({
        ga: a,
        Ea: b
    }) {
        return new RD(a, b)
    }
    var RD = class {
        constructor(a, b) {
            this.ga = a;
            this.Ea = b
        }
        Ah(a) {
            return new RD(this.ga - a, this.Ea - a)
        }
        Jg(a, b, c) {
            var d = lp(a);
            a = P(a) - this.ga - c;
            d = d - this.Ea - b;
            return new Zj(a, d + b, a + c, d)
        }
        zg(a) {
            a.bottom = `${this.ga}px`;
            a.right = `${this.Ea}px`;
            a.left = ""
        }
        Yg() {
            return 1
        }
        zd() {
            return this.ga
        }
        ni(a) {
            return new RD(a, this.Ea)
        }
    };

    function SD(a) {
        const b = a.Dj,
            c = a.ej,
            d = a.Wi,
            e = a.Pk,
            f = a.Xi;
        a = a.Vi;
        return qA('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + Y(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            Y(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + Y(a) + "px; border-radius: " + Y(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + Y(a) + "px; margin: 0; border-radius: " + Y(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            Y(d) + "px; height: " + Y(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + Y(d) + "px; margin-bottom: " + Y(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + Y(d) + "px; width: " + Y(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            Y(d - 6) + "px; width: " + Y(d - 6) + "px; border-radius: " + Y(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            Y(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + Y(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            Y(16) + "px; max-width: calc(90vw - " + Y(d * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + Y(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + Y(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            Y(d * 2) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0; text-align: start;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            zA(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + zA(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function TD(a) {
        const b = a.googleIconName,
            c = a.ariaLabel,
            d = a.backgroundColorCss,
            e = a.iconColorCss;
        a = a.mj;
        return qA('<div class="ft-button ft-collapsible ft-collapsed ft-last-button">' + ((a instanceof kA ? a.Ma() : a) ? "<style>@scope {" + Y(a) + "}</style>" : "") + '<button class="ft-styless-button" aria-label="' + zA(c) + '" style="background-color: ' + zA(Y(d)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + zA(Y(e)) + '" aria-hidden="true">' + oA(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const UD = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function VD(a, b) {
        a = new WD(a, b, XD(a, b));
        a.K();
        return a
    }

    function YD() {
        ({
            jc: a
        } = {
            jc: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function ZD(a, b, c) {
        $D(a) === 0 && b.classList.remove("ft-collapsed");
        aE(b, c);
        Lp(a.win);
        b.classList.remove("ft-collapsed");
        bE(a);
        return () => void cE(a, b, c)
    }

    function dE(a) {
        eE(a.g.la.Lc).length === 0 ? (a.l.R ? .Fk(), a.l.g(null), a.g.la.vf.g(!1), a.g.la.oh.g(!1), a.g.la.Df.g(!1)) : (a.g.la.vf.g(!0), fE(a))
    }

    function gE(a, {
        zi: b = 0,
        Uo: c = 0
    }) {
        b = Math.max(eE(a.g.Gb).length + b, 0);
        c = Math.max(eE(a.g.mb).length + c, 0);
        const d = b + c;
        let e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.j.jc && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function $D(a) {
        const b = a.g.mb;
        return eE(a.g.Gb).length + eE(b).length
    }

    function bE(a) {
        const b = a.g.mb,
            c = a.g.separator;
        eE(a.g.Gb).length > 0 && eE(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        $D(a) >= a.j.jc ? a.g.mh.g(!0) : a.g.mh.g(!1);
        $D(a) > 1 ? a.g.fh.g(!0) : a.g.fh.g(!1);
        $D(a) > 0 ? a.g.isVisible.g(!0) : a.g.isVisible.g(!1);
        hE(a);
        iE(a)
    }

    function cE(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), bE(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function hE(a) {
        const b = eE(a.g.Gb).concat(eE(a.g.mb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        $D(a) >= a.j.jc || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function iE(a) {
        const b = eE(a.g.Gb).concat(eE(a.g.mb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.F.g(b.length > 0)
    }

    function jE(a) {
        yp(a.g.la.Lc.children, b => {
            const c = a.g.la.Pc;
            cE(a, b, a.g.la.Lc);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        dE(a)
    }

    function fE(a) {
        if (!a.l.R) {
            var b = kE(a.win, {
                googleIconName: "verified_user",
                ariaLabel: G(a.j.Ta, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.g.la.oh.g(!a.g.la.isVisible.R);
                    for (const [, c] of a.g.la.Pc) c.sh = !0;
                    a.g.la.Df.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.cd.classList.add("ft-reg-button");
            ZD(a, b.cd, a.g.mb);
            aq(b.bk, a.g.la.isVisible);
            a.l.g({
                Yo: b,
                Fk: () => void cE(a, b.cd, a.g.mb)
            })
        }
    }

    function lE(a) {
        var b = a.g.la.Df,
            c = b.g;
        a: {
            for ([, d] of a.g.la.Pc)
                if (a = d, a.showUnlessUserInControl && !a.sh) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function mE(a) {
        a.g.la.dj.listen(() => {
            jE(a)
        })
    }
    var WD = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.g = c;
            this.l = new R(null);
            this.F = new R(!1)
        }
        addButton(a) {
            a = kE(this.win, a);
            return ZD(this, a.cd, this.g.Gb)
        }
        addRegulatoryMessage(a) {
            const b = this.g.la.Lc,
                c = nE(this.win, a);
            aE(c.Lf, b);
            this.g.la.Pc.set(c.Lf, c);
            dE(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    lE(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    lE(this)
                },
                isDismissed: cq(c.isDismissed),
                removeCallback: () => {
                    var d = c.Lf;
                    const e = this.g.la.Lc;
                    d.parentNode === e && e.removeChild(d);
                    this.g.la.Pc.delete(d);
                    dE(this)
                }
            }
        }
        H() {
            return Vp(this.l.map(a => a != null))
        }
        B() {
            return Vp(this.F)
        }
        A() {
            return [this.g.container]
        }
        i() {
            const a = this.g.gb.eb;
            a.parentNode ? .removeChild(a);
            super.i()
        }
        K() {
            Lq(this.win, UD);
            aq(this.g.Wk, this.j.Kc);
            this.win.document.body.appendChild(this.g.gb.eb);
            mE(this)
        }
    };

    function XD(a, b) {
        const c = zB(a),
            d = c.shadowRoot;
        d.appendChild(Xd(new Kd(a.document), lA(SD({
            Dj: G(b.Ta, 1),
            ej: G(b.Ta, 3),
            Wi: 50,
            Pk: 11,
            Xi: 10,
            Vi: 5
        }))));
        const e = yB("ft-container", d),
            f = yB("ft-expand-toggle", d),
            g = yB("ft-expand-toggle-container", d),
            h = new R(null);
        h.i(p => {
            e.style.zIndex = String(p ? ? 2147483647)
        });
        const k = new R(!0);
        Yp(k, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        Yp(k, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                k.g(!k.R)
            });
        const l = new R(!1);
        Yp(l, !0, () => {
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        Yp(l, !1, () => {
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.g(!0)
        });
        const m = new R(!1);
        Yp(m, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        Yp(m, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(p => {
            if (p) {
                p.zg(e.style);
                p = p.Yg();
                switch (p) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${p}`);
                }
                Lp(a)
            }
        });
        const n = new R(!1);
        b = Up(oE(a, d), n, b.position.map(p => p !== null));
        Yp(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        Yp(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = pE(a, yB("ft-reg-bubble", d));
        return {
            container: e,
            Gb: yB("ft-button-holder", d),
            mb: yB("ft-bottom-button-holder", d),
            separator: yB("ft-separator", d),
            gb: c,
            Wk: h,
            bp: k,
            mh: l,
            fh: m,
            isVisible: n,
            la: b
        }
    }

    function pE(a, b) {
        const c = new R(!1),
            d = new R(!1),
            e = Wp(c, d);
        Yp(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        Yp(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new R(!1);
        Yp(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        Yp(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const g = yB("ft-reg-bubble-close", b),
            h = new gq;
        g.addEventListener("click", () => {
            fq(h)
        });
        const k = yB("ft-reg-message-holder", b);
        Eq(Bq(a, k)).i(() => {
            b.style.height = `${k.offsetHeight}px`
        });
        return {
            Lc: k,
            oh: c,
            Df: d,
            isVisible: e,
            vf: f,
            Pc: new Map,
            dj: dq(h)
        }
    }

    function kE(a, b) {
        const c = Xd(new Kd(a.document), lA(TD({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043",
            mj: b.buttonExtension ? .styleSheet
        })));
        if (b.cornerNumber !== void 0) {
            const d = Yc(Math.round(b.cornerNumber), 0, 99);
            yB("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && xB("BUTTON", c).addEventListener("click", b.onClick);
        a = new R(!1);
        Yp(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        Yp(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            cd: c,
            bk: a
        }
    }

    function nE(a, b) {
        a = new Kd(a.document);
        var c = qA('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = Xd(a, lA(c));
        c = yB("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = yB("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            Lf: a,
            showUnlessUserInControl: !1,
            sh: !1,
            isDismissed: new R(!1)
        }
    }

    function aE(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function eE(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function oE(a, b) {
        const c = new R(!1),
            d = yB("ft-symbol-font-load-test", b);
        b = yB("ft-symbol-reference", d);
        const e = yB("ft-text-reference", d),
            f = Bq(a, b);
        Zp(Eq(f).map(g => g.width > 0 && g.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function qE(a) {
        const b = new gq,
            c = rq(a, 2500, () => void fq(b));
        return new rE(a, () => void sE(a, () => void c()), dq(b))
    }

    function tE(a) {
        const b = new MutationObserver(() => {
            a.g()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        Op(a, () => void b.disconnect())
    }

    function uE(a) {
        a.win.addEventListener("resize", a.g);
        Op(a, () => void a.win.removeEventListener("resize", a.g))
    }
    var rE = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = !1
        }
    };

    function sE(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function vE(a) {
        return a.g[a.g.length - 1]
    }
    var xE = class {
        constructor() {
            this.j = wE;
            this.g = [];
            this.i = new Set
        }
        add(a) {
            if (this.i.has(a)) return !1;
            const b = hb(this.g, a, this.j);
            this.g.splice(b >= 0 ? b : -b - 1, 0, a);
            this.i.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.i.has(a)
        }
        delete(a) {
            ab(this.g, b => b === a);
            return this.i.delete(a)
        }
        clear() {
            this.i.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    };

    function yE(a) {
        var b = a.Jc.R;
        let c;
        for (; a.j.kj() > b && (c = a.i.first());) {
            var d = a,
                e = c;
            zE(d, e);
            d.g.add(e)
        }
        for (;
            (d = vE(a.g)) && a.j.Pj() <= b;) AE(a, d);
        for (;
            (d = vE(a.g)) && (c = a.i.first()) && d.priority > c.priority;) b = a, e = c, zE(b, e), b.g.add(e), AE(a, d)
    }

    function AE(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.jg = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function zE(a, b) {
        b.jg && b.jg();
        b.jg = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var BE = class {
        constructor(a, b) {
            this.Jc = a;
            this.j = b;
            this.g = new xE;
            this.i = new xE;
            this.l = 0;
            this.Jc.listen(() => void yE(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                pg: this.l++,
                isInToolbar: new R(!1)
            };
            this.g.add(b);
            yE(this);
            return {
                isInToolbar: cq(Vp(b.isInToolbar)),
                removeCallback: () => {
                    zE(this, b);
                    this.g.delete(b);
                    yE(this)
                }
            }
        }
    };

    function wE(a, b) {
        return a.priority === b.priority ? b.pg - a.pg : a.priority - b.priority
    };

    function CE(a) {
        if (!a.g) {
            const b = xD(a.win);
            a.g = Vp(b.j);
            Np(a, b)
        }
        return a.g
    }

    function DE(a, b, c) {
        const d = a.j.addRegulatoryMessage(b.messageSpec);
        b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow || EE(a, d, c);
        Zp(c, !0, () => {
            d.removeCallback()
        })
    }

    function EE(a, b, c) {
        a = CE(a);
        const d = Yp(a, !0, () => void b.showUnlessUserInControl()),
            e = Yp(a, !1, () => void b.hideUnlessUserInControl());
        Yp(Sp(b.isDismissed), !0, () => {
            d();
            e()
        });
        Zp(c, !0, () => {
            d();
            e()
        })
    }
    var FE = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.g = null
        }
        addRegulatoryMessage(a) {
            const b = new R(!1),
                c = Zp(CE(this), !0, () => {
                    DE(this, a, b)
                });
            return {
                removeCallback: () => {
                    b.g(!0);
                    c()
                }
            }
        }
    };

    function GE(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new HE(a, b));
        return a.googFloatingToolbarManager
    }

    function IE(a) {
        a.g || (a.g = JE(a.win, a.j, a.Kc), Np(a, a.g.Jb), Np(a, a.g.Rh), KE(a), LE(a, a.g.Jb));
        return a.g
    }

    function ME(a) {
        var b = [];
        a.g ? .Jb ? .B().A() ? (b.push(() => NE(a)), b.push(() => OE(a))) : (b.push(() => OE(a)), b.push(() => NE(a)));
        a.g ? .Jb ? .H() ? .A() && b.push(() => {
            const c = P(a.win);
            return {
                position: OD({
                    ga: Math.floor(c / 3),
                    ta: 10
                }),
                Jc: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function KE(a) {
        a.Kc.R === null && a.g ? .position.g(ME(a))
    }

    function LE(a, b) {
        const c = qE(a.win);
        c.j || (tE(c), uE(c), c.j = !0);
        c.l.listen(() => void KE(a));
        Np(a, c);
        b.H().listen(() => void KE(a));
        b.B().listen(() => void KE(a));
        a.Kc.listen(() => void KE(a))
    }

    function NE(a) {
        var b = a.win;
        const c = P(a.win);
        return KD(b, {
            Ub: QD({
                ga: 50,
                Ea: 10
            }),
            If: Math.floor(c / 3),
            Cb: 60,
            Nf: YD(),
            Od: Math.floor(c / 2),
            nb: 20
        }, [...(a.g ? .Jb.A() ? ? []), a.win.document.body]).Re
    }

    function OE(a) {
        var b = a.win;
        const c = P(a.win);
        return KD(b, {
            Ub: OD({
                ga: 50,
                ta: 10
            }),
            If: Math.floor(c / 3),
            Cb: 60,
            Nf: YD(),
            Od: Math.floor(c / 2),
            nb: 40
        }, [...(a.g ? .Jb.A() ? ? []), a.win.document.body]).Re
    }
    class HE extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.g = null;
            this.Kc = PE(this.win, this)
        }
        addButton(a) {
            return IE(this).qk.addButton(a)
        }
        addRegulatoryMessage(a) {
            return IE(this).Rh.addRegulatoryMessage(a)
        }
    }

    function JE(a, b, c) {
        const d = new R(null),
            e = VD(a, {
                jc: 2,
                position: d.map(f => f ? .position ? ? null),
                Ta: b,
                Kc: c
            });
        b = new BE(d.map(f => f ? .Jc || 0), {
            addButton: f => e.addButton(f),
            kj: () => gE(e, {}),
            Pj: () => gE(e, {
                zi: 1
            })
        });
        a = new FE(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Jb: e,
            position: d,
            qk: b,
            Rh: a
        }
    }

    function PE(a, b) {
        const c = new gB(a),
            d = new R(null),
            e = f => void d.g(f);
        Op(b, () => {
            fB(c, e)
        });
        c.g.maxZIndexListeners.push(e);
        d.g(eB(c));
        return d
    };
    const QE = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function RE(a, b, c, d, e) {
        a = new SE(a, b, c, d, e);
        if (a.l) {
            Lq(a.win, QE);
            var f = a.win;
            b = a.message;
            c = zB(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new Kd(f.document);
            var g = qA('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                Xd(f, lA(g)));
            d = yB("ipr-container", e);
            e = yB("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = yB("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.g = c.eb;
            Ay(a.l, a.g);
            a.j && a.j(ym(1));
            TE(a)
        } else UE(a);
        return a
    }

    function TE(a) {
        const b = new Oq(a.win);
        b.K(2E3);
        Np(a, b);
        Mq(b, () => {
            VE(a);
            UE(a);
            b.dispose()
        })
    }

    function UE(a) {
        const b = GE(a.win, a.A).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        Op(a, () => void b.removeCallback());
        a.j && a.j(ym(2))
    }

    function VE(a) {
        a.g && (a.g.parentNode ? .removeChild(a.g), a.g = null)
    }
    var SE = class extends Q {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.l = b;
            this.message = c;
            this.A = d;
            this.j = e;
            this.g = null
        }
        i() {
            VE(this);
            super.i()
        }
    };
    var YE = (a, b, c, d, e) => U(Ts) ? WE(a, b, d, e) : XE(a, b, c, d, e);

    function XE(a, b, c, d, e) {
        const f = new HD(a, hD(a, e), new gD(b, d, "#FFF", "#4A4A4A", "normal"), new $C(b, c, d), "google-dns-link-placeholder");
        f.K();
        return () => f.i()
    }

    function WE(a, b, c, d) {
        const e = RE(a, hD(a, d), {
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, ZE(a));
        return () => e.dispose()
    }

    function ZE(a) {
        if (a = cD(a)) return a;
        X.ba(1234, Error("No messages"), void 0, void 0);
        return Lh(new Vr)
    };

    function $E(a, b) {
        b && (a.g = YE(a.i, b.localizedDnsText, b.localizedDnsCollapseText, () => aF(a, b), a.l))
    }

    function bF(a) {
        const b = aD(a.i);
        b.callbackQueue = b.callbackQueue || [];
        bD(a.i).overrideDnsLink = !0;
        b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => $E(a, c)
        })
    }

    function aF(a, b) {
        hB(a.j);
        b.openConfirmationDialog(c => {
            c && a.g && (a.g(), a.g = null);
            iB(a.j)
        })
    }
    class cF {
        constructor(a, b, c) {
            this.i = a;
            this.j = bB(b, 2147483643);
            this.l = c;
            this.g = null
        }
    };

    function dF(a) {
        const b = a.document.createElement("ins");
        eF(a, b);
        u(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function fF(a, b, c, d) {
        const e = Wd(Jd(a), "IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        eF(a, e);
        u(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function gF(a, b) {
        const c = b.document.createElement("span");
        eF(b, c);
        u(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.i();
            d.stopPropagation()
        });
        return c
    }

    function hF(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.j));
        u(c, Fs(b));
        u(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function iF(a) {
        const b = a.document.createElement("div");
        u(b, Fs(a));
        u(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class jF {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.i = d;
            this.g = new R(!1)
        }
        Ma(a, b, c, d) {
            c = dF(a);
            const e = fF(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = fF(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.i),
                g = gF(this, a),
                h = fF(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            u(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = hF(this, a);
            a = iF(a);
            a.appendChild(c);
            a.appendChild(k);
            this.g.listen(l => {
                u(e, {
                    display: l ? "none" : "inline"
                });
                u(f, {
                    display: l ? "inline" : "none"
                });
                l ? (u(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), u(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), u(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (u(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), u(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), u(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        Xg() {
            return 71
        }
        Dh() {
            this.g.g(!1);
            return 0
        }
        Eh() {
            this.g.g(!0)
        }
    }

    function eF(a, b) {
        u(b, Fs(a));
        u(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function kF(a) {
        lF(a.j, b => {
                var c = a.i,
                    d = b.Mk,
                    e = b.fj,
                    f = b.Mi;
                b = b.showRevocationMessage;
                var g = a.l;
                U(Us) ? (e = hD(c, g), d = {
                    actionButton: {
                        buttonText: c.document.createTextNode(d),
                        onClick: b
                    },
                    informationText: c.document.createTextNode(f)
                }, f = cD(c), f || (X.ba(1233, Error("No messages"), void 0, void 0), f = Lh(new Vr)), RE(c, e, d, f)) : (new HD(c, hD(c, g), new gD(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new jF(d, e, f, b), "google-revocation-link-placeholder")).K()
            },
            () => {
                iB(a.g);
                mF(a)
            })
    }

    function nF(a) {
        hB(a.g);
        kF(a)
    }

    function mF(a) {
        a.i.__tcfapi ? a.i.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? hB(a.g) : iB(a.g)
        }) : X.ba(1250, Error("No TCF API function"), void 0, void 0)
    }
    class oF {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = bB(b, 2147483643);
            this.l = c;
            this.j = d
        }
    };
    var pF = a => {
            if (!a || wi(a, 1) == null) return !1;
            a = wi(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        qF = a => {
            if (!a || wi(a, 3) == null) return !1;
            a = wi(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        rF = a => a ? ui(a, 5) === !0 : !1,
        sF = a => a ? ui(a, 6) === !0 : !1;

    function tF() {
        return "m202409030101"
    };

    function uF(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Ff: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b.indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            Ff: c
        }
    };

    function vF(a, b) {
        ke(a, (c, d) => {
            b[d] = c
        })
    }

    function wF(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && ce(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function xF() {
        if (yF) return yF;
        const a = lk() || window,
            b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? yF = b : a.google_persistent_state_async = yF = new zF
    }

    function AF(a, b, c) {
        b = BF[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function CF(a, b, c) {
        return AF(a, b, () => c)
    }

    function DF(a, b, c) {
        return a.S[BF[b] || `google_ps_${b}`] = c
    }

    function EF(a, b) {
        return DF(a, b, CF(a, b, 0) + 1)
    }

    function FF() {
        var a = xF();
        return CF(a, 20, {})
    }

    function GF() {
        var a = xF();
        const b = CF(a, 31, !1);
        b || DF(a, 31, !0);
        return !b
    }

    function HF() {
        var a = xF();
        const b = CF(a, 41, !1);
        b || DF(a, 41, !0);
        return !b
    }

    function IF() {
        var a = xF();
        return CF(a, 26)
    }

    function JF() {
        var a = xF();
        return CF(a, 28, [])
    }

    function KF() {
        var a = xF();
        return AF(a, 39, LF)
    }
    var zF = class {
            constructor() {
                this.S = {}
            }
        },
        yF = null;
    const BF = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function MF(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function NF(a, b) {
        a = MF(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function Qo(a, b) {
        a.g.size > 0 || OF(a);
        const c = a.g.get(0);
        c ? c.push(b) : a.g.set(0, [b])
    }

    function PF(a, b, c, d) {
        Cb(b, c, d);
        Op(a, () => Db(b, c, d))
    }

    function QF(a, b) {
        a.j !== 1 && (a.j = 1, a.g.size > 0 && RF(a, b))
    }

    function OF(a) {
        a.win.document.visibilityState ? PF(a, a.win.document, "visibilitychange", b => {
            a.win.document.visibilityState === "hidden" && QF(a, b);
            a.win.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.win ? (PF(a, a.win, "pagehide", b => {
            QF(a, b)
        }), PF(a, a.win, "pageshow", () => {
            a.j = 0
        })) : PF(a, a.win, "beforeunload", b => {
            QF(a, b)
        })
    }

    function RF(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var SF = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function TF(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function UF(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = Oe(a.win)
    }

    function VF(a) {
        var b = a.g.wpc;
        if (b === null || b === "") b = a.g, a = a.win, a = a.google_ad_client ? String(a.google_ad_client) : MF(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? "", b = b.wpc = a;
        return b
    }

    function WF(a, b) {
        var c = new Cn;
        var d = UF(a);
        c = Mi(c, 1, d);
        c = Bn(c.Wb(VF(a)), a.g.sd);
        return Mi(c, 7, Math.round(b || a.win.performance.now()))
    }

    function XF(a, b, c) {
        b(a.I.Ud.se.Xc).Fa(c)
    }

    function YF(a, b, c) {
        b(a.I.Ud.se.Xc).Oc(c)
    }
    async function ZF(a) {
        await TF(a.win, () => !(!UF(a) || !VF(a)))
    }

    function $F() {
        var a = O(aG);
        a.i && (a.g.tar += 1)
    }

    function bG(a) {
        var b = O(aG);
        if (b.i) {
            var c = b.A;
            a(c);
            b.g.cc = Ri(c)
        }
    }
    async function cG(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await ZF(a);
            var e = a.I;
            a = WF(a, d);
            d = new mm;
            b = J(d, 1, b);
            c = ei(b, 2, c, vg);
            c = A(a, 9, ho, c);
            Ko(e, c)
        }
    }
    async function dG(a, b) {
        await ZF(a);
        var c = WF(a);
        b = A(c, 5, ho, b);
        a.i && !a.g.le.includes(2) && (a.g.le.push(2), Ko(a.I, b))
    }
    async function eG(a, b, c) {
        await ZF(a);
        var d = a.I;
        a = Bn(WF(a, c), 1);
        b = A(a, 6, ho, b);
        Ko(d, b)
    }
    async function fG(a, b, c) {
        a.j && (await ZF(a), XF(a, d => b(d.Zh), c))
    }
    async function gG(a, b, c) {
        a.j && (await ZF(a), YF(a, d => b(d.Zh), c))
    }
    async function hG(a, b) {
        await ZF(a);
        var c = a.I;
        a = Bn(WF(a), 1);
        b = A(a, 13, ho, b);
        Ko(c, b)
    }
    async function iG(a, b) {
        if (a.i) {
            await ZF(a);
            var c = a.I;
            a = WF(a);
            b = A(a, 11, ho, b);
            Ko(c, b)
        }
    }
    async function jG(a, b) {
        await ZF(a);
        var c = a.I;
        a = Bn(WF(a), 1);
        b = A(a, 14, ho, b);
        Ko(c, b)
    }
    var aG = class {
        constructor(a, b) {
            this.win = lk() || window;
            this.l = b ? ? new SF(this.win);
            this.I = a ? ? new So(tF(), 100, 100, !0, this.l);
            this.g = AF(xF(), 33, () => {
                const c = W(Ss),
                    d = c > 0 && je() < 1 / c,
                    e = W(vu);
                return {
                    sd: c,
                    ssp: d,
                    sds: e,
                    ssps: e > 0 && je() < 1 / e,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get i() {
            return this.g.ssp
        }
        get j() {
            return this.g.ssps
        }
        get ld() {
            return this.g.cu
        }
        set ld(a) {
            this.g.cu = a
        }
        get A() {
            return bz(1227, () => Si(nm, Bh(this.g.cc || []))) || new nm
        }
    };

    function kG(a) {
        var b = new lG;
        return Ii(b, 1, a)
    }
    var lG = class extends K {
        constructor() {
            super()
        }
    };

    function mG(a) {
        if (a.i.adsbygoogle_ama_fc_has_run !== !0) {
            var b = pF(a.g),
                c = qF(a.g),
                d = !1;
            b && (nF(new oF(a.i, a.A, a.l || mi(a.g, bs, 4, x(gg)), a.j)), d = !0);
            c && (bF(new cF(a.i, a.A, a.l || mi(a.g, bs, 4, x(gg)))), d = !0);
            bG(g => {
                g = H(g, 9, !0);
                g = H(g, 10, b);
                H(g, 11, c)
            });
            var e = rF(a.g),
                f = sF(a.g) || U(Ct);
            e && (d = !0);
            d && (d = kG(e && f), a.j.start(U(Ps), d), a.i.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class nG {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.A = d;
            this.l = e || null
        }
    };

    function oG(a, b, c, d, e, f) {
        try {
            const g = a.g,
                h = he("SCRIPT", g);
            h.async = !0;
            hd(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", () => {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", () => {
                c > 0 ? oG(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (g) {
            f()
        }
    }

    function pG(a, b, c = () => {}, d = () => {}) {
        oG(Jd(a), b, 0, !1, c, d)
    };

    function qG(a = null) {
        a = a || q;
        return a.googlefc || (a.googlefc = {})
    };
    Ib(cp).map(a => Number(a));
    Ib(dp).map(a => Number(a));
    const rG = q.URL;

    function sG(a) {
        const b = c => encodeURIComponent(c).replace(/[!()~']|(%20)/g, d => ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E"
        })[d]);
        return Array.from(a, c => b(c[0]) + "=" + b(c[1])).join("&")
    };

    function tG(a) {
        var b = (new rG(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function uG(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new rG(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function vG(a) {
        var b = new rG(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + sG(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol +
            "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = (new rG(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function wG(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = he("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var xG = Ti(class extends K {});

    function yG(a) {
        if (a.g) return a.g;
        a.L && a.L(a.j) ? a.g = a.j : a.g = Be(a.j, a.P);
        return a.g ? ? null
    }

    function zG(a) {
        a.l || (a.l = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.Sf,
                        e = a.F.get(d);
                    e && (e.yk || a.F.delete(d), e.Qb ? .(e.pj, c.payload))
                }
            } catch (f) {}
        }, Cb(a.j, "message", a.l))
    }

    function AG(a, b, c) {
        if (yG(a))
            if (a.g === a.j)(b = a.B.get(b)) && b(a.g, c);
            else {
                var d = a.A.get(b);
                if (d && d.Hc) {
                    zG(a);
                    var e = ++a.U;
                    a.F.set(e, {
                        Qb: d.Qb,
                        pj: d.Kd(c),
                        yk: b === "addEventListener"
                    });
                    a.g.postMessage(d.Hc(c, e), "*")
                }
            }
    }
    var BG = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.P = b;
            this.L = c;
            this.H = d;
            this.B = new Map;
            this.U = 0;
            this.A = new Map;
            this.F = new Map;
            this.l = void 0;
            this.j = a
        }
        i() {
            delete this.g;
            this.B.clear();
            this.A.clear();
            this.F.clear();
            this.l && (Db(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.H;
            super.i()
        }
    };
    const CG = (a, b) => {
            const c = {
                cb: d => {
                    d = xG(d);
                    b.Qa({
                        lc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        DG = {
            Kd: a => a.Qa,
            Hc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Qb: (a, b) => {
                a({
                    lc: b
                })
            }
        };

    function EG(a) {
        a = xG(a.data.__fciReturn);
        return {
            payload: a,
            Sf: yi(a, 1)
        }
    }

    function FG(a, b = !1) {
        if (b) return !1;
        a.j || (a.g = !!yG(a.caller), a.j = !0);
        return a.g
    }

    function GG(a) {
        return new Promise(b => {
            FG(a) && AG(a.caller, "getDataWithCallback", {
                command: "loaded",
                Qa: c => {
                    b(c.lc)
                }
            })
        })
    }

    function HG(a, b) {
        FG(a) && AG(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: Qi(b),
            Qa: () => {}
        })
    }
    var IG = class extends Q {
        constructor(a) {
            super();
            this.g = this.j = !1;
            this.caller = new BG(a, "googlefcPresent", void 0, EG);
            this.caller.B.set("getDataWithCallback", CG);
            this.caller.A.set("getDataWithCallback", DG)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };
    const JG = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function KG(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = JG(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (nj({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function LG(a, b = {}) {
        return KG(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.ap) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? MG(a, "1", 0) : !0 : !1
    }

    function MG(a, b, c) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (d !== void 0) {
                    d = d["755"];
                    break a
                }
            }
            d = void 0
        }
        if (d === 0) return !1;
        let e = c;c === 2 ? (e = 0, d === 2 && (e = 1)) : c === 3 && (e = 1, d === 1 && (e = 0));
        if (e === 0) a = a.purpose && a.vendor ? (c = NG(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && NG(a.purpose.consents, b) : !0;
        else {
            var f;
            e === 1 ? f = a.purpose && a.vendor ? NG(a.purpose.legitimateInterests, b) && NG(a.vendor.legitimateInterests, "755") : !0 : f = !0;
            a = f
        }
        return a
    }

    function NG(a, b) {
        return !(!a || !a[b])
    }

    function OG(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(d => MG(a, d, c))
    }

    function PG(a) {
        if (a.g) return a.g;
        a.g = Be(a.j, "__tcfapiLocator");
        return a.g
    }

    function QG(a) {
        return typeof a.j.__tcfapi === "function" || PG(a) != null
    }

    function RG(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (PG(a)) {
            SG(a);
            const e = ++a.H;
            a.B[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function TG(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = ub(() => b(c));
        let e = 0;
        a.F !== -1 && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        RG(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = JG(c), c.internalBlockOnErrors = a.A, KG(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), RG(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function SG(a) {
        a.l || (a.l = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Cb(a.j, "message", a.l))
    }
    class UG extends Q {
        constructor(a, b = {}) {
            super();
            this.j = a;
            this.g = null;
            this.B = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.Si ? ? !1;
            this.l = null
        }
        i() {
            this.B = {};
            this.l && (Db(this.j, "message", this.l), delete this.l);
            delete this.B;
            delete this.j;
            delete this.g;
            super.i()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = ub(() => a(b));
            let d = 0;
            this.F !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = JG(b),
                    b.internalBlockOnErrors = this.A, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                RG(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && RG(this, "removeEventListener", null, a.listenerId)
        }
    };

    function lF(a, b, c) {
        const d = qG(a.win);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = qG(a.win),
                    f = new UG(a.win);
                QG(f) && TG(f, g => {
                    g.cmpId === 300 && g.tcString && g.tcString !== "tcunavailable" && b({
                        Mk: (0, e.getDefaultConsentRevocationText)(),
                        fj: (0, e.getDefaultConsentRevocationCloseText)(),
                        Mi: (0, e.getDefaultConsentRevocationAttestationText)(),
                        showRevocationMessage: () => {
                            (0, e.showRevocationMessage)()
                        }
                    })
                });
                c()
            }
        })
    }

    function VG(a, b = !1, c) {
        const d = {};
        try {
            const f = tG(a.win),
                g = uG(a.win);
            d.fc = f;
            d.fctype = g
        } catch (f) {}
        let e;
        try {
            e = vG(a.win.location.href)
        } catch (f) {}
        b && e && (d.href = e);
        b = fc({
            id: a.g
        }, { ...d,
            ers: 2
        });
        pG(a.win, b, () => {}, () => {});
        c && HG(new IG(a.win), c)
    }
    var WG = class {
        constructor(a, b) {
            this.win = a;
            this.g = b
        }
        start(a = !1, b) {
            if (this.win === this.win.top) try {
                wG(this.win, "googlefcPresent"), VG(this, a, b)
            } catch (c) {}
        }
    };
    const XG = new Set(["ARTICLE", "SECTION"]);
    var YG = class {
        constructor(a) {
            this.g = a
        }
    };

    function ZG(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function $G(a) {
        return a.classList.length > 0
    }

    function aH(a) {
        return XG.has(a.tagName)
    };
    var bH = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function cH(a) {
        return Ba(a) && a.nodeType == 1 && a.tagName == "FIGURE" ? a : (a = a.parentNode) ? cH(a) : null
    };
    var dH = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = cH(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new bH(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var eH = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b), c.size === 0 && this.map.delete(a), b) : !1
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function() {
                return function*() {
                    for (const b of a.values()) yield* b
                }()
            }()
        }[Symbol.iterator]() {
            const a =
                this.map;
            return function() {
                return function*() {
                    for (const [b, c] of a) {
                        const d = b,
                            e = c;
                        for (const f of e) yield [d, f]
                    }
                }()
            }()
        }
    };

    function fH(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function gH(a) {
        return Array.from(hH(a).map.values()).filter(b => b.size >= 3).map(b => [...b])
    }

    function iH(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = d.height >= 50 && d.width >= a.A) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new JD(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && Ip(a.j, {
                hb: c.g,
                Za: jH,
                Fb: !0
            }) === null
        })
    }

    function kH(a) {
        return gH(a).sort(lH).find(b => iH(a, b)) || []
    }

    function hH(a) {
        return mH(Array.from(a.win.document.getElementsByTagName("IMG")).map(dH).filter(hr), b => {
            var c = [...ZG("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? ZG("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? ZG("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = Ip(a.i.g, {
                hb: b.g,
                Za: $G
            })) ? ZG("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(Ip(a.i.g, {
                hb: b.g,
                Za: aH
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var nH = class {
        constructor(a, b, c, d, e) {
            var f = new yq;
            this.win = a;
            this.l = b;
            this.A = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function mH(a, b) {
        const c = new eH;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function jH(a) {
        return a.tagName === "A" && a.hasAttribute("href")
    }

    function lH(a, b) {
        return b.length - a.length
    };

    function oH(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = pH(a.j),
            d = qH(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.A.g().i(e => {
            var f = a.j;
            const g = d.getBoundingClientRect(),
                h = g.top - e.top,
                k = g.left - e.left,
                l = g.width - e.width;
            e = g.height - e.height;
            Math.abs(h) < 1 && Math.abs(k) < 1 && Math.abs(l) < 1 && Math.abs(e) < 1 || (f = f.getComputedStyle(d), u(d, {
                top: parseInt(f.top, 10) - h + "px",
                left: parseInt(f.left, 10) - k + "px",
                width: parseInt(f.width, 10) - l + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function rH(a) {
        a.g || (a.g = oH(a));
        return a.g
    }
    var sH = class extends Q {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.A = c;
            this.g = null
        }
        i() {
            if (this.g) {
                var a = this.g;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.g = null
            }
            super.i()
        }
    };

    function qH(a) {
        const b = a.document.createElement("div");
        u(b, Fs(a));
        u(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function pH(a) {
        const b = a.document.createElement("div");
        u(b, Fs(a));
        u(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function tH(a) {
        const b = new R(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return Vp(b)
    };
    const uH = ["Google Material Icons", "Roboto"];

    function vH({
        win: a,
        Aa: b,
        Qj: c,
        webPropertyCode: d,
        Ta: e,
        O: f
    }) {
        const g = new Aq(a, c);
        c = new sH(a, c, g);
        Np(c, g);
        a = new wH(a, d, e, b, c, f);
        Np(a, c);
        a.K()
    }
    var wH = class extends Q {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Ta = c;
            this.Aa = d;
            this.j = e;
            this.O = f;
            this.g = new R(!1)
        }
        K() {
            const a = xH(this.win, this.webPropertyCode, this.Ta);
            rH(this.j).appendChild(a.Aj);
            Rv(this.win, a.va);
            tH(a.va).i(b => {
                if (b !== null) {
                    switch (b) {
                        case "unfilled":
                            this.dispose();
                            break;
                        case "filled":
                            this.g.g(!0);
                            break;
                        default:
                            this.O ? .reportError("Unhandled AdStatus: " + String(b)), this.dispose()
                    }
                    this.O ? .Ik(this.Aa, b)
                }
            });
            Zp(this.g, !0, () => void a.Yj.g(!0));
            a.vj.listen(() =>
                void this.dispose());
            a.uj.listen(() => void this.O ? .Gk(this.Aa))
        }
    };

    function xH(a, b, c) {
        const d = new R(!1),
            e = a.document.createElement("div");
        u(e, Fs(a));
        u(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        Yp(d, !0, () => void u(e, {
            opacity: "1"
        }));
        Yp(d, !1, () => void u(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        u(f, Fs(a));
        u(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            xi: g,
            Xj: h
        } = yH(a, b);
        f.appendChild(g);
        e.appendChild(zH(a, G(c, 1)));
        b = AH(a, G(c, 2));
        e.appendChild(b.Yi);
        b.bf.listen(() => void d.g(!1));
        return {
            Yj: d,
            Aj: e,
            va: h,
            uj: b.bf,
            vj: b.bf.delay(a, 450)
        }
    }

    function zH(a, b) {
        const c = a.document.createElement("div");
        u(c, Fs(a));
        u(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function AH(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        u(c, Fs(a));
        u(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new gq;
        c.addEventListener("click", () => void fq(d));
        return {
            Yi: c,
            bf: dq(d)
        }
    }

    function yH(a, b) {
        a = Nv(a.document, b, null, null, {});
        return {
            xi: a.ob,
            Xj: a.va
        }
    };

    function BH({
        target: a,
        threshold: b = 0
    }) {
        const c = new CH;
        c.K(a, b);
        return c
    }
    var CH = class extends Q {
        constructor() {
            super();
            this.g = new R(!1)
        }
        K(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.g.g(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            Op(this, () => void c.disconnect())
        }
    };

    function DH(a) {
        const b = EH(a.win, Ei(a.g, 2) ? ? 250, Ei(a.g, 3) ? ? 300);
        let c = 1;
        return kH(a.l).map(d => ({
            Aa: c++,
            image: d,
            ib: b(d)
        }))
    }

    function FH(a, b) {
        const c = BH({
            target: b.image.g,
            threshold: Fi(a.g) ? ? .8
        });
        a.j.push(c);
        Zp(bq(c.g, a.win, Ei(a.g, 5) ? ? 3E3, d => d), !0, () => {
            if (a.i < (Ei(a.g, 1) ? ? 1)) {
                vH({
                    win: a.win,
                    Aa: b.Aa,
                    Qj: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Ta: a.Ta,
                    O: a.O
                });
                a.i++;
                if (!(a.i < (Ei(a.g, 1) ? ? 1)))
                    for (; a.j.length;) a.j.pop() ? .dispose();
                a.O ? .Hk(b.Aa)
            }
        })
    }

    function GH(a) {
        const b = DH(a);
        b.filter(HH).forEach(c => void FH(a, c));
        a.O ? .Jk(b.map(c => ({
            Aa: c.Aa,
            ib: c.ib
        })))
    }
    var IH = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.g = c;
            this.Ta = d;
            this.l = e;
            this.O = f;
            this.j = [];
            this.i = 0
        }
    };

    function HH(a) {
        return a.ib.rejectionReasons.length === 0
    }

    function EH(a, b, c) {
        const d = P(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                Cb: e.width,
                wf: e.height,
                wj: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function JH(a, b) {
        a.Aa = b;
        return a
    }
    var KH = class {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.Aa = this.g = null
        }
    };

    function LH(a, b) {
        return new KH(b, a.webPropertyCode, a.hostname, a.i, a.l)
    }

    function MH(a, b, c) {
        var d = a.j++;
        a.g === null ? (a.g = Nk(), a = 0) : a = Nk() - a.g;
        var e = b.A,
            f = b.webPropertyCode,
            g = b.hostname,
            h = b.j,
            k = b.l.map(encodeURIComponent).join(",");
        if (b.g) {
            var l = {
                imcnt: b.g.length
            };
            var m = Math.min(b.g.length, 10);
            for (let n = 0; n < m; n++) {
                const p = `im${n}`;
                l[`${p}_id`] = b.g[n].Aa;
                l[`${p}_s_w`] = b.g[n].ib.Cb;
                l[`${p}_s_h`] = b.g[n].ib.wf;
                l[`${p}_s_dbf`] = b.g[n].ib.wj;
                b.g[n].ib.rejectionReasons.length > 0 && (l[`${p}_s_rej`] = b.g[n].ib.rejectionReasons.join(","))
            }
        } else l = null;
        dz("abg::imovad", {
            typ: e,
            wpc: f,
            hst: g,
            pvsid: h,
            peid: k,
            rate: c,
            num: d,
            tim: a,
            ...(b.Aa === null ? {} : {
                imid: b.Aa
            }),
            ...(b.i === null ? {} : {
                astat: b.i
            }),
            ...(b.errorMessage === null ? {} : {
                errm: b.errorMessage
            }),
            ...l
        }, c)
    }
    var NH = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        Jk(a) {
            var b = LH(this, "fndi");
            b.g = a;
            MH(this, b, a.length > 0 ? 1 : .1)
        }
        Hk(a) {
            a = JH(LH(this, "adpl"), a);
            MH(this, a, 1)
        }
        Ik(a, b) {
            a = JH(LH(this, "adst"), a);
            a.i = b;
            MH(this, a, 1)
        }
        Gk(a) {
            a = JH(LH(this, "adis"), a);
            MH(this, a, 1)
        }
        reportError(a) {
            var b = LH(this, "err");
            b.errorMessage = a;
            MH(this, b, .1)
        }
    };

    function OH(a, b, c) {
        return (a = a.g()) && ui(a, 11) ? c.map(d => d.j()) : c.map(d => d.A(b))
    };
    var PH = class extends K {
        getHeight() {
            return xi(this, 2)
        }
    };

    function QH(a, b) {
        return Ji(a, 1, b)
    }

    function RH(a, b) {
        return ni(a, 2, b)
    }
    var SH = class extends K {};
    var TH = class extends K {
        constructor() {
            super()
        }
    };
    var UH = class extends K {
            constructor() {
                super()
            }
        },
        VH = [1, 2];
    const WH = new Set([7, 1]);
    var XH = class {
        constructor() {
            this.j = new eH;
            this.l = []
        }
        g(a, b) {
            WH.has(b) || dr(ar(zy(a), c => void this.j.add(c, b)), c => void this.l.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function YH(a) {
        return new tr(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class ZH {
        g(a) {
            return YH(Math.floor(a.i))
        }
    };
    var $H = class extends K {
        constructor() {
            super()
        }
    };

    function aI(a, b) {
        var c = b.adClient;
        if (typeof c !== "string" || !c) return !1;
        a.ye = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        Ba(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.C = {};
            for (const d of b.fillMessage) a.C[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        yk(a.l) && yk(a.i) || dz("rctnosize", b);
        return !0
    }
    var bI = class {
        constructor() {
            this.C = this.D = this.j = this.ye = null;
            this.i = this.l = 0
        }
        B() {
            return !0
        }
    };

    function cI(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function dI(a, b = []) {
        const c = Date.now();
        return Ua(b, d => c - d < a * 1E3)
    }

    function eI(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Xa(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = dI(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function fI(a, b, c) {
        return b <= 0 || a == null || !cI(a) ? null : eI(a, b, c)
    };
    var gI = (a, b, c) => {
        let d = 0;
        try {
            var e = d |= kp(a);
            const h = lp(a),
                k = a.innerWidth;
            var f = h && k ? h / k : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= mp(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var g;
            if (g = b) g = fI(c, 3600, "__lsv__") ? .length !== 0;
            g && (d |= 134217728)
        } catch (h) {
            d |= 32
        }
        return d
    };
    var hI = class extends bI {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.g = null
        }
        B(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = os(a)
            } catch (c) {
                b = null
            } else b = null;
            this.g = b;
            return !0
        }
    };
    const iI = {};

    function jI(a, b, c) {
        let d = kI(a, c, b);
        if (!d) return !0;
        const e = c.B.i;
        for (; d.Sb && d.Sb.length;) {
            const f = d.Sb.shift(),
                g = Hw(f.ia);
            if (g && !(g <= d.bd)) c.C ? .g(f, 18);
            else if (lI(c, f, {
                    Ld: d.bd
                })) {
                if (d.Wc.g.length + 1 >= e) return c.C ? .i(d.Sb, 19), !0;
                d = kI(a, c, b);
                if (!d) return !0
            }
        }
        return c.l
    }
    const kI = (a, b, c) => {
        var d = b.B.i,
            e = b.B.l,
            f = b.B;
        f = oz(b.ea(), f.g ? f.g.ic : void 0, d);
        if (f.g.length >= d) return b.C ? .i(mI(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = pp(f.j).scrollHeight || null), e = !d || d < 0 ? -1 : f.i * e - uz(f)) : e = void 0;
        const g = (d = e == null || e >= 50) ? mI(b, f, {
            types: a
        }, c) : null;
        d || b.C ? .i(mI(b, f, {
            types: a
        }, c), 18);
        return {
            Wc: f,
            bd: e,
            Sb: g
        }
    };
    iI[2] = Ka(function(a, b) {
        a = mI(b, oz(b.ea()), {
            types: a,
            Eb: Sy(b.ea())
        }, 2);
        if (a.length == 0) return !0;
        for (var c = 0; c < a.length; c++)
            if (lI(b, a[c])) return !0;
        return b.l ? (b.A.push(11), !0) : !1
    }, [0]);
    iI[5] = Ka(jI, [0], 5);
    iI[10] = Ka(function(a, b) {
        a = [];
        const c = b.Oa;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && a.push(1);
        return jI(a, 10, b)
    }, 10);
    iI[3] = function(a) {
        if (!a.l) return !1;
        var b = mI(a, oz(a.ea()), {
            types: [0],
            Eb: Sy(a.ea())
        }, 3);
        if (b.length == 0) return !0;
        for (var c = b.length - 1; c >= 0; c--)
            if (lI(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const nI = a => {
            var b;
            a.j.ki ? b = U(gt) ? new Ny(0, null, [], 8, .3) : new Ny(0, null, [], 3, null) : b = Sy(a.ea());
            return {
                types: [0],
                Eb: b
            }
        },
        pI = a => {
            const b = a.ea().document.body.getBoundingClientRect().width;
            oI(a, YH(b))
        },
        rI = (a, b) => {
            var c = nI(a);
            c.Kk = [5];
            c = mI(a, oz(a.ea()), c, 8);
            qI(a, c.reverse(), b)
        },
        qI = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.ma), lI(a, d, {
                        ze: b
                    })) return !0;
            return !1
        };
    iI[8] = function(a) {
        var b = a.ea().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => iI[8](a), {
            once: !0
        }), !0;
        if (!a.l) return !1;
        if (!a.Fd()) return !0;
        b = nI(a);
        b.Uf = [2, 4, 5];
        b = mI(a, oz(a.ea()), b, 8);
        const c = new ZH;
        if (qI(a, b, c)) return !0;
        if (a.j.Pg) switch (a.j.Kh || 0) {
            case 1:
                rI(a, c);
                break;
            default:
                pI(a)
        }
        return !0
    };
    iI[6] = Ka(jI, [2], 6);
    iI[7] = Ka(jI, [1], 7);
    iI[9] = function(a) {
        const b = kI([0, 2], a, 9);
        if (!b || !b.Sb) return a.A.push(17), a.l;
        for (const d of b.Sb) {
            var c = a.j.sf || null;
            c == null ? c = null : (c = Iw(d.ia, new sI, new tI(c, a.ea())), c = new By(c, d.ka(), d.ma));
            if (c && !(Hw(c.ia) > b.bd) && lI(a, c, {
                    Ld: b.bd,
                    Ve: !0
                })) return a = c.ia.da, Fw(d.ia, a.length > 0 ? a[0] : null), !0
        }
        a.A.push(17);
        return a.l
    };
    class sI {
        i(a, b, c, d) {
            return Qv(d.document, a, b)
        }
        j(a) {
            return P(a) || 0
        }
    };
    var uI = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Wc = c
        }
        Da(a) {
            return this.g ? Rz(this.i, this.g, a, this.Wc) : Qz(this.i, a, this.Wc)
        }
        za() {
            return this.g ? 16 : 9
        }
    };
    var vI = class {
        constructor(a) {
            this.Ae = a
        }
        Da(a) {
            return Yz(a.document, this.Ae)
        }
        za() {
            return 11
        }
    };
    var wI = class {
        constructor(a) {
            this.ub = a
        }
        Da(a) {
            return Vz(this.ub, a)
        }
        za() {
            return 13
        }
    };
    var xI = class {
        Da(a) {
            return Oz(a)
        }
        za() {
            return 12
        }
    };
    var yI = class {
        constructor(a) {
            this.wc = a
        }
        Da() {
            return Tz(this.wc)
        }
        za() {
            return 2
        }
    };
    var zI = class {
        constructor(a) {
            this.g = a
        }
        Da() {
            return Wz(this.g)
        }
        za() {
            return 3
        }
    };
    var AI = class {
        Da() {
            return Zz()
        }
        za() {
            return 17
        }
    };
    var BI = class {
        constructor(a) {
            this.g = a
        }
        Da() {
            return Sz(this.g)
        }
        za() {
            return 1
        }
    };
    var CI = class {
        Da() {
            return sb(zw)
        }
        za() {
            return 7
        }
    };
    var DI = class {
        constructor(a) {
            this.Uf = a
        }
        Da() {
            return Uz(this.Uf)
        }
        za() {
            return 6
        }
    };
    var EI = class {
        constructor(a) {
            this.g = a
        }
        Da() {
            return Xz(this.g)
        }
        za() {
            return 5
        }
    };
    var FI = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Da() {
            return Ka($z, this.minWidth, this.maxWidth)
        }
        za() {
            return 10
        }
    };
    var GI = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.A = a.l;
            this.g = a.A
        }
    };

    function HI(a) {
        var b = new II;
        b.A = a;
        b.i.push(new BI(a));
        return b
    }

    function JI(a, b) {
        a.i.push(new DI(b));
        return a
    }

    function KI(a, b) {
        a.i.push(new yI(b));
        return a
    }

    function LI(a, b) {
        a.i.push(new EI(b));
        return a
    }

    function MI(a, b) {
        a.i.push(new zI(b));
        return a
    }

    function NI(a) {
        a.i.push(new CI);
        return a
    }

    function OI(a) {
        a.g.push(new xI);
        return a
    }

    function PI(a, b = 0, c, d) {
        a.g.push(new uI(b, c, d));
        return a
    }

    function QI(a, b = 0, c = Infinity) {
        a.g.push(new FI(b, c));
        return a
    }

    function RI(a) {
        a.g.push(new AI);
        return a
    }

    function SI(a, b = 0) {
        a.g.push(new wI(b));
        return a
    }

    function TI(a, b) {
        a.j = b;
        return a
    }
    var II = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new GI(this)
        }
    };
    class tI {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.D || {};
            c.google_ad_client = a.ye;
            c.google_ad_height = P(b) || 0;
            c.google_ad_width = lp(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new $H;
            b = Ii(b, 1, a.A);
            a.g && z(b, 2, a.g);
            c.google_rasc = Qi(b);
            a.j && (c.google_adtest = "on");
            return new tr(["fsi_container"], c)
        }
    };
    var UI = mr(new jr(0, {})),
        VI = mr(new jr(1, {})),
        WI = a => a === UI || a === VI;

    function XI(a, b, c) {
        Ap(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class YI {
        constructor() {
            this.g = new Ep
        }
    };

    function ZI(a, b) {
        for (var c = 0; c < b.length; c++) a.wa(b[c]);
        return a
    }

    function $I(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class aJ {
        constructor(a) {
            this.B = {};
            this.B.c = a;
            this.A = [];
            this.j = null;
            this.C = [];
            this.F = 0
        }
        Wb(a) {
            this.B.wpc = a;
            return this
        }
        wa(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        l(a) {
            var b = Jb(this.B);
            this.F > 0 && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.C.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && dl(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function bJ(a, b) {
        b && (a.g.apv = B(b, 4), Sh(b, Or, 23) && (a.g.sat = "" + ri(y(b, Or, 23), 1)));
        return a
    }

    function cJ(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var dJ = class extends aJ {
        constructor(a) {
            super(a);
            this.g = {}
        }
        H(a) {
            this.g.a = a.join(",");
            return this
        }
        G(a) {
            a != null && (this.g.allp = a);
            return this
        }
        Yh(a) {
            if (a) {
                const b = [];
                for (const c of Cp(a))
                    if (a.get(c).length > 0) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.lb, d.li].join() + ")")
                    }
                this.g.fd = b.join(",")
            }
            return this
        }
        l(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.l(a);
            Nb(a, this.g);
            return a
        }
    };

    function eJ(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function fJ(a, b, c, d = 30) {
        c.length <= d ? a[b] = gJ(c) : (a[b] = gJ(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function gJ(a) {
        const b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ma(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function hJ(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function iJ(a, b) {
        a.i.op = hJ(b)
    }

    function jJ(a, b, c) {
        fJ(a.i, "fap", b);
        a.i.fad = hJ(c)
    }

    function kJ(a, b, c) {
        fJ(a.i, "fmp", b);
        a.i.fmd = hJ(c)
    }

    function lJ(a, b, c) {
        fJ(a.i, "vap", b);
        a.i.vad = hJ(c)
    }

    function mJ(a, b, c) {
        fJ(a.i, "vmp", b);
        a.i.vmd = hJ(c)
    }

    function nJ(a, b, c) {
        fJ(a.i, "pap", b);
        a.i.pad = hJ(c)
    }

    function oJ(a, b, c) {
        fJ(a.i, "pmp", b);
        a.i.pmd = hJ(c)
    }

    function pJ(a, b) {
        fJ(a.i, "psq", b)
    }
    var qJ = class extends dJ {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            this.errors.length > 0 && (a.e = gJ(this.errors));
            return a
        }
    };

    function rJ(a, b, c) {
        const d = b.ia;
        Ap(a.g, d) || a.g.set(d, new sJ($q(zy(b)) ? ? ""));
        c(a.g.get(d))
    }

    function tJ(a, b) {
        rJ(a, b, c => {
            c.g = !0
        })
    }

    function uJ(a, b) {
        rJ(a, b, c => {
            c.i = !0
        })
    }

    function vJ(a, b) {
        rJ(a, b, c => {
            c.j = !0
        });
        a.L.push(b.ia)
    }

    function wJ(a, b, c) {
        rJ(a, b, d => {
            d.Nb = c
        })
    }

    function xJ(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) WI(f.Nb ? ? "") ? ++e : (b = a.i.get(f.Nb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Ob: e
        }
    }

    function yJ(a, b) {
        iJ(b, a.i.zc());
        var c = Dp(a.g).filter(f => (f.zb.startsWith(UI) ? 0 : 1) === 0),
            d = Dp(a.g).filter(f => (f.zb.startsWith(UI) ? 0 : 1) === 1),
            e = xJ(a, f => f.g, c);
        jJ(b, e.list, e.Ob);
        e = xJ(a, f => f.g, d);
        kJ(b, e.list, e.Ob);
        e = xJ(a, f => f.i, c);
        lJ(b, e.list, e.Ob);
        e = xJ(a, f => f.i, d);
        mJ(b, e.list, e.Ob);
        c = xJ(a, f => f.j, c);
        nJ(b, c.list, c.Ob);
        d = xJ(a, f => f.j, d);
        oJ(b, d.list, d.Ob);
        pJ(b, a.L.map(f => a.g.get(f) ? .Nb).map(f => a.i.get(f) ? ? null))
    }

    function $l() {
        var a = O(zJ);
        if (!a.A) return Pl();
        const b = Yl(Xl(Wl(Vl(Ul(Tl(Sl(Rl(Ol(Nl(new Ql, a.A ? ? []), a.H ? ? []), a.C), a.G), a.F), a.P), a.U), a.B ? ? 0), Dp(a.g).map(c => {
            var d = new Ml;
            d = Oi(d, 1, c.zb);
            var e = a.i.get(c.Nb ? ? "", -1);
            d = Mi(d, 2, e);
            d = H(d, 3, c.g);
            return H(d, 4, c.i)
        })), a.L.map(c => a.g.get(c) ? .Nb).map(c => a.i.get(c) ? ? -1));
        a.j != null && H(b, 6, a.j);
        a.l != null && fi(b, 13, Yg(a.l), "0");
        return b
    }
    var zJ = class {
        constructor() {
            this.l = this.H = this.A = null;
            this.F = this.G = !1;
            this.j = null;
            this.U = this.C = this.P = !1;
            this.B = null;
            this.i = new Ep;
            this.g = new Ep;
            this.L = []
        }
    };
    class sJ {
        constructor(a) {
            this.j = this.i = this.g = !1;
            this.Nb = null;
            this.zb = a
        }
    };
    class AJ {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function BJ(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function CJ(a, b) {
        const c = a.H.filter(d => Cp(d.md).every(e => d.md.get(e) === b.get(e)));
        return c.length === 0 ? (a.i.push(19), null) : c.reduce((d, e) => d.md.zc() > e.md.zc() ? d : e, c[0])
    }

    function DJ(a, b) {
        b = zy(b);
        if (b.g == null) return a.i.push(18), null;
        b = b.getValue();
        if (Ap(a.j, b)) return a.j.get(b);
        var c = kr(b);
        c = CJ(a, c);
        a.j.set(b, c);
        return c
    }
    var EJ = class {
        constructor(a) {
            this.g = a;
            this.j = new Ep;
            this.H = (y(a, ms, 2) ? .g() || []).map(b => {
                const c = kr(G(b, 1)),
                    d = yi(b, 2);
                return {
                    md: c,
                    Oh: d,
                    zb: G(b, 1)
                }
            });
            this.i = []
        }
        F() {
            const a = O(zJ);
            var b = this.l();
            a.A = b;
            b = this.A();
            a.H = b;
            b = this.C();
            b != null && (a.l = b);
            b = !!this.g.i() ? .g() ? .g();
            a.F = b;
            b = new Ep;
            for (const c of y(this.g, ms, 2) ? .g() ? ? []) b.set(G(c, 1), yi(c, 2));
            a.i = b
        }
        B() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        A() {
            return [...si(this.g, 4, x())]
        }
        C() {
            return y(this.g, gs, 5) ? .g() ? ? null
        }
        G(a) {
            const b = DJ(this, a);
            b ? .zb != null &&
                wJ(O(zJ), a, b.zb)
        }
        L(a) {
            const b = W(Ft) || 0;
            if (a.length == 0 || b == 0) return !0;
            const c = (new Sq(a)).filter(d => {
                d = DJ(this, d) ? .zb || "";
                return d != "" && !(d === UI || d === VI)
            });
            return b <= c.g.length / a.length
        }
    };

    function FJ(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => (DJ(a.g, c) ? .Oh ? ? Number.MAX_VALUE) - (DJ(a.g, d) ? .Oh ? ? Number.MAX_VALUE))
    }

    function GJ(a, b) {
        var c = b.ma.g,
            d = Math,
            e = d.min;
        const f = b.ka(),
            g = b.ia.g();
        c += 200 * e.call(d, 20, g == 0 || g == 3 ? BJ(f.parentElement) : BJ(f));
        a = a.i;
        a.g < 0 && (a.g = pp(a.i).scrollHeight || 0);
        a = a.g - b.ma.g;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.ka();
        return a
    }

    function HJ(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => GJ(a, c) - GJ(a, d))
    }

    function IJ(a, b) {
        return b.sort((c, d) => {
            const e = c.ia.G,
                f = d.ia.G;
            var g;
            e == null || f == null ? g = e == null && f == null ? GJ(a, c) - GJ(a, d) : e == null ? 1 : -1 : g = e - f;
            return g
        })
    }
    class JJ {
        constructor(a, b = null) {
            this.i = new AJ(a);
            this.g = b && new EJ(b)
        }
    };

    function KJ(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.l) e = Rq(e, f.Da(a.j), LJ(f.za(), c));
        f = e = e.apply(Nz(a.j));
        for (const g of b.i) f = Rq(f, g.Da(a.j), gr([MJ(g.za(), c), h => {
            d ? .g(h, g.za())
        }]));
        switch (b.j) {
            case 1:
                f = HJ(a.g, f);
                break;
            case 2:
                f = IJ(a.g, f);
                break;
            case 3:
                const g = O(zJ);
                f = FJ(a.g, f);
                e.forEach(h => {
                    tJ(g, h);
                    a.g.g ? .G(h)
                });
                f.forEach(h => uJ(g, h))
        }
        b.A && (f = Uq(f, ld(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        b.g ? .length === 1 && XI(a.l, b.g[0], {
            lb: e.g.length,
            li: f.g.length
        });
        return Tq(f)
    }
    class NJ {
        constructor(a, b, c = null) {
            this.i = new Sq(a);
            this.g = new JJ(b, c);
            this.j = b;
            this.l = new YI
        }
        A() {
            this.i.forEach(a => {
                a.i && zv(a.i);
                a.i = null
            })
        }
    }
    const LJ = (a, b) => c => Ew(c, b, a),
        MJ = (a, b) => c => Ew(c.ia, b, a);

    function OJ(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = PJ(QJ(c), a);
                    break a;
                case 3:
                    a = PJ(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = PJ(e ? e.nodeType == 1 ? e : QJ(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !RJ(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !Js(b) && b.offsetWidth <= 0);
        return d
    }

    function PJ(a, b) {
        if (!a) return !1;
        a = ie(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function QJ(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function RJ(a) {
        return !!a.nextSibling || !!a.parentNode && RJ(a.parentNode)
    };
    var SJ = !Ed && !zd();

    function TJ(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (SJ && a.dataset) {
            if (Bd() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var UJ = (a, b, c) => {
            if (!b) return null;
            const d = Od(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && e.position != "static") {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if (a.getComputedStyle(g).display != "none") {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = P(a);
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && c > 0 && g > 0 && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        VJ = a => {
            const b = a.document.body;
            var c = UJ(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; d.length >
                    0;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    h.depth > 0 && g > e && (e = g, f = k);
                    if (h.depth < 5)
                        for (g = 0; g < k.children.length; g++) {
                            const l = k.children[g],
                                m = l.getBoundingClientRect().width;
                            (m == null || c == null ? 0 : m >= c * .9 && m <= c * 1.01) && d.push({
                                element: l,
                                depth: h.depth + 1,
                                height: l.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? UJ(a, c.parentNode || b, c) : null
        },
        XJ = a => {
            let b = 0;
            try {
                b |= kp(a), Yd() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), WJ(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        WJ = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if (TJ(a[b]) == "autorelaxed") return !0;
            return !1
        };

    function YJ(a) {
        const b = op(a, !0),
            c = pp(a).scrollWidth,
            d = pp(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = tp(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let r = 0,
            w = 0,
            D = Infinity,
            C = Infinity,
            I = null;
        var N = kz({
            Lb: !1
        }, a);
        for (var E of N) {
            N = E.getBoundingClientRect();
            const Ga = b - (N.bottom + f);
            var ca = void 0,
                V = void 0;
            if (E.className && E.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                ca = E.getAttribute("google_element_uid");
                V = a.google_sv_map;
                if (!ca || !V || !V[ca]) continue;
                ca = (V = Gk(V[ca])) ? V.height : 0;
                V = V ? V.width : 0
            } else if (ca = N.bottom - N.top, V = N.right - N.left, ca <= 1 || V <= 1) continue;
            g.push(ca);
            k.push(V);
            l.push(ca * V);
            E.className && E.className.indexOf("google-auto-placed") != -1 ? (w += 1, E.className && E.className.indexOf("pedestal_container") != -1 && (I = ca)) : (D = Math.min(D, Ga), n.push(N), r += 1, h.push(ca), m.push(ca * V));
            C = Math.min(C, Ga);
            p.push(N)
        }
        D = D === Infinity ? null : D;
        C = C === Infinity ? null : C;
        f = ZJ(n);
        p = ZJ(p);
        h = $J(b, h);
        n = $J(b, g);
        m = $J(b * c, m);
        E = $J(b * c, l);
        return new aK(a, {
            xj: e,
            Nc: b,
            uk: c,
            tk: d,
            hk: r,
            Ni: w,
            Pi: bK(g),
            Qi: bK(k),
            Oi: bK(l),
            nk: f,
            mk: p,
            lk: D,
            kk: C,
            gf: h,
            ff: n,
            Ii: m,
            Hi: E,
            wk: I
        })
    }

    function cK(a, b, c, d) {
        const e = Yd() && !(lp(a.i) >= 900);
        d = Ua(d, f => Ya(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.xj,
            pg_h: dK(a.g.Nc),
            pg_w: dK(a.g.uk),
            pg_hs: dK(a.g.tk),
            c: dK(a.g.hk),
            aa_c: dK(a.g.Ni),
            av_h: dK(a.g.Pi),
            av_w: dK(a.g.Qi),
            av_a: dK(a.g.Oi),
            s: dK(a.g.nk),
            all_s: dK(a.g.mk),
            b: dK(a.g.lk),
            all_b: dK(a.g.kk),
            d: dK(a.g.gf),
            all_d: dK(a.g.ff),
            ard: dK(a.g.Ii),
            all_ard: dK(a.g.Hi),
            pd_h: dK(a.g.wk),
            dt: e ? "m" : "d"
        }
    }
    class aK {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function bK(a) {
        return $c.apply(null, Ua(a, b => b > 0)) || null
    }

    function $J(a, b) {
        return a <= 0 ? null : Zc.apply(null, b) / a
    }

    function ZJ(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }

    function dK(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function eK(a) {
        var b = mz({
            Lb: !1,
            Cd: !1
        }, a);
        a = (P(a) || 0) - tp(a);
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d].getBoundingClientRect();
            sz(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function fK(a) {
        const b = {};
        var c = mz({
            Lb: !1,
            Cd: !1,
            zf: !1,
            Af: !1
        }, a).map(d => d.getBoundingClientRect()).filter(sz);
        b.qg = c.length;
        c = nz({
            zf: !0
        }, a).map(d => d.getBoundingClientRect()).filter(sz);
        b.Ng = c.length;
        c = nz({
            Af: !0
        }, a).map(d => d.getBoundingClientRect()).filter(sz);
        b.Bh = c.length;
        c = nz({
            Cd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(sz);
        b.vg = c.length;
        c = (P(a) || 0) - tp(a);
        c = mz({
            Lb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(sz).filter(Ja(gK, null, c));
        b.rg = c.length;
        a = YJ(a);
        c = a.g.gf != null ? a.g.gf : null;
        c !=
            null && (b.uh = c);
        a = a.g.ff != null ? a.g.ff : null;
        a != null && (b.sg = a);
        return b
    }

    function lI(a, b, {
        Ld: c,
        ze: d,
        Ve: e
    } = {}) {
        return hw(997, () => hK(a, b, {
            Ld: c,
            ze: d,
            Ve: e
        }), a.g)
    }

    function mI(a, b, c, d) {
        var e = c.Eb ? c.Eb : a.B;
        const f = Ty(e, b.g.length);
        e = a.j.tg ? e.g : void 0;
        const g = RI(SI(OI(QI(PI(NI(LI(MI(JI(KI(HI(c.types), a.na), c.Uf || []), a.da), c.Kk || [])), f.Mc || void 0, e, b), c.minWidth, c.maxWidth)), f.ub || void 0));
        a.U && g.g.push(new vI(a.U));
        b = 1;
        a.j.ji ? b = 2 : a.tb() && (b = 3);
        TI(g, b);
        a.j.ai && (g.l = !0);
        return hw(995, () => KJ(a.i, g.build(), d, a.C || void 0), a.g)
    }

    function oI(a, b) {
        const c = VJ(a.g);
        if (c) {
            const d = sr(a.L, b),
                e = Nv(a.g.document, a.G, null, null, {}, d);
            e && (Cv(e.ob, c, 2, 256), hw(996, () => iK(a, e, d), a.g))
        }
    }

    function jK(a) {
        return a.F ? a.F : a.F = a.g.google_ama_state
    }

    function hK(a, b, {
        Ld: c,
        ze: d,
        Ve: e
    } = {}) {
        const f = b.ia;
        if (f.A) return !1;
        var g = b.ka(),
            h = f.g();
        if (!OJ(a.g, h, g, a.l)) return !1;
        h = null;
        f.Ec ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new tr(null, {
            google_max_responsive_height: c == null ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = c == null ? null : new tr(null, {
            google_max_responsive_height: c
        });
        c = ur(wi(f.ke, 2) || 0);
        g = vr(f.G);
        const k = kK(a, f),
            l = lK(a),
            m = sr(a.L, f.U ? f.U.g(b.ma) : null, h, d || null, c, g, k, l),
            n = b.fill(a.G, m);
        if (e && !mK(a, n, m) || !hw(996,
                () => iK(a, n, m), a.g)) return !1;
        Yj(9, [f.G, f.Mb]);
        a.tb() && vJ(O(zJ), b);
        return !0
    }

    function kK(a, b) {
        return $q(dr(xy(b).map(wr), () => {
            a.A.push(18)
        }))
    }

    function lK(a) {
        if (!a.tb()) return null;
        var b = a.i.g.g ? .A();
        if (b == null) return null;
        b = b.join("~");
        a = a.i.g.g ? .C() ? ? null;
        return xr({
            nj: b,
            Ej: a
        })
    }

    function mK(a, b, c) {
        if (!b) return !1;
        var d = b.va,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.va;
        c = c && c.Ac() || {};
        var g = W(Vs);
        if (d !== d.top) g = fe(d) ? 3 : 16;
        else if (lp(d) < 488)
            if (d.innerHeight >= d.innerWidth) {
                var h = lp(d);
                if (!h || (h - f) / h > g) g = 6;
                else {
                    if (g = c.google_full_width_responsive !== "true") b: {
                        h = e.parentElement;
                        for (g = lp(d); h; h = h.parentElement) {
                            const k = ie(h, d);
                            if (!k) continue;
                            const l = ve(k.width);
                            if (l && !(l >= g) && k.overflow !== "visible") {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
            } else g = 5;
        else g =
            4;
        if (g !== !0) f = g;
        else {
            if (!(c = c.google_full_width_responsive === "true")) a: {
                do
                    if ((c = ie(e, d)) && c.position == "fixed") {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = lp(d), f = d - f, f = d && f >= 0 ? !0 : d ? f < -10 ? 11 : f < 0 ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.va;
            if (d = Jv(a, b)) f = b.style, f.border = f.borderStyle = f.outline = f.outlineStyle = f.transition = "none", f.borderSpacing = f.padding = "0", Hv(b, d, "0px"), f.width = `${lp(a)}px`, Kv(a, b, d), f.zIndex = "30";
            return !0
        }
        zv(b.ob);
        return !1
    }

    function iK(a, b, c) {
        if (!b) return !1;
        try {
            Rv(a.g, b.va, c)
        } catch (d) {
            return zv(b.ob), a.A.push(6), !1
        }
        return !0
    }
    class nK {
        constructor(a, b, c, d, e = {}, f = [], g = !1) {
            this.i = a;
            this.G = b;
            this.g = c;
            this.B = d.Eb;
            this.na = d.wc || [];
            this.L = d.Fj || null;
            this.da = d.rj || [];
            this.U = d.Ae || [];
            this.j = e;
            this.l = !1;
            this.P = [];
            this.A = [];
            this.H = this.F = void 0;
            this.Oa = f;
            this.C = g ? new XH : null
        }
        Ja() {
            return this.i
        }
        ea() {
            return this.g
        }
        wa(a) {
            this.P.push(a)
        }
        tb() {
            if ((this.i.g.g ? .l().length ? ? 0) == 0) return !1;
            if ((W(Ft) || 0) == 0) return !0;
            if (this.H === void 0) {
                const a = TI(OI(NI(HI([0, 1, 2]))), 1).build(),
                    b = hw(995, () => KJ(this.i, a), this.g);
                this.H = this.i.g.g ? .L(b) || !1
            }
            return this.H
        }
        Ef() {
            return !!this.j.Uh
        }
        Fd() {
            return !WJ(this.g)
        }
        ua() {
            return this.C
        }
    }
    const gK = (a, b) => b.top <= a;

    function oK(a, b, c, d, e, f = 0, g = 0) {
        this.Pa = a;
        this.fe = f;
        this.ee = g;
        this.errors = b;
        this.Bb = c;
        this.g = d;
        this.i = e
    };
    var pK = (a, {
        Fd: b = !1,
        Ef: c = !1,
        Nk: d = !1,
        tb: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function qK(a, b, c) {
        a = pK(a, {
            Fd: b.Fd(),
            Ef: b.Ef(),
            Nk: !!b.j.sf,
            tb: b.tb()
        });
        return new rK(a, b, c)
    }

    function sK(a, b) {
        const c = iI[b];
        return c ? hw(998, () => c(a.g), a.A) : (a.g.wa(12), !0)
    }

    function tK(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(sK(a, b))
            })
        })
    }

    function uK(a) {
        a.g.l = !0;
        return Promise.all(a.i.map(b => tK(a, b))).then(b => {
            b.includes(!1) && a.g.wa(5);
            a.i.splice(0, a.i.length)
        })
    }
    class rK {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = Za(this.i, 1);
            this.g = b;
            this.A = c
        }
    };
    const vK = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function wK(a) {
        return uK(a).then(() => {
            var b = a.g.i.i.filter(zw).g.length;
            var c = a.g.P.slice(0);
            var d = a.g;
            d = [...d.A, ...(d.i.g.g ? .B() || [])];
            b = new oK(b, c, d, a.g.i.i.g.length, a.g.i.l.g, a.g.i.i.filter(zw).filter(Aw).g.length, a.g.i.i.filter(Aw).g.length);
            return new vK(b)
        })
    };
    var xK = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > b * .5
        },
        yK = a => {
            const b = P(a) || 0;
            return c => c.getBoundingClientRect().height >= b * .75
        };
    var zK = (a, b) => {
        b = sy(b, a);
        const c = b.map(d => d.g);
        b = b.filter(d => {
            d = d.g.getBoundingClientRect();
            return d.width > 0 && d.height > 0
        }).filter(d => xK(c)(d.g)).filter(d => yK(a)(d.g));
        b.sort((d, e) => {
            e = e.g;
            return d.g.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };

    function AK(a) {
        return a.reduce((b, c) => b.g.getBoundingClientRect().bottom < c.g.getBoundingClientRect().bottom ? c : b)
    }

    function BK(a, b, c, d) {
        let e = !1;
        const f = new IntersectionObserver(g => {
            for (const h of g)
                if (h.isIntersecting) e = !0;
                else {
                    if (g = e) g = a, g = b.getBoundingClientRect().bottom <= P(g.win) / 2;
                    g && (CK(a.O, {
                        typ: "cee",
                        cet: c
                    }), e = !1)
                }
        }, {
            rootMargin: d
        });
        f.observe(b);
        Op(a, () => {
            f.disconnect()
        })
    }
    var DK = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.O = c
        }
    };

    function EK(a, b) {
        CK(a, {
            typ: "cdr",
            af: b.Pe,
            ...(b.Pe > 0 ? {
                vh: b.W,
                ph: b.Nc,
                ah: b.Ji,
                at: b.Li
            } : {})
        })
    }

    function CK(a, b) {
        a = { ...b,
            wpc: a.webPropertyCode,
            cor: a.g,
            tim: Math.round(Ok() ? ? -1),
            num: a.i++
        };
        dz("ama_vignette", a, 1)
    }
    var FK = class {
        constructor(a) {
            var b = Ne();
            this.webPropertyCode = a;
            this.g = b;
            this.i = 0
        }
    };
    class GK {
        g() {
            return new tr([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class HK {
        g() {
            return new tr(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function IK(a) {
        return Ks(a.g.document).map(b => {
            const c = new sw(b, 3);
            b = new uw(Tv(a.g, b));
            return new yw(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    class JK {
        constructor(a) {
            var b = new HK;
            this.g = a;
            this.i = b || null
        }
    };
    const KK = {
        hg: "10px",
        Se: "10px"
    };

    function LK(a) {
        return zp(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new yw(new sw(b, 1), new qw(KK), a.i, !1, 0, [], null, a.g, null))
    }
    class MK {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function NK(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(ma(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        fJ(a.i, "cnstr", c, 80)
    }
    var OK = class extends aJ {
        constructor() {
            super(-1);
            this.i = {}
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            return a
        }
    };

    function PK(a, b) {
        return a == null ? b + "ShouldNotBeNull" : a == 0 ? b + "ShouldNotBeZero" : a < -1 ? b + "ShouldNotBeLessMinusOne" : null
    }

    function QK(a, b, c) {
        const d = PK(c.yd, "gapsMeasurementWindow") || PK(c.yc, "gapsPerMeasurementWindow") || PK(c.Ic, "maxGapsToReport");
        return d != null ? Yq(d) : c.ug || c.yc != -1 || c.Ic != -1 ? Wq(new RK(a, b, c)) : Yq("ShouldHaveLimits")
    }

    function SK(a) {
        return jK(a.j) && jK(a.j).placed || []
    }

    function TK(a) {
        return SK(a).map(b => Jq(Hq(b.element, a.g)))
    }

    function UK(a) {
        return SK(a).map(b => b.index)
    }

    function VK(a, b) {
        const c = b.ia;
        return !a.C && c.l && wi(c.l, 8) != null && wi(c.l, 8) == 1 ? [] : c.A ? (c.da || []).map(d => Jq(Hq(d, a.g))) : [Jq(new Iq(b.ma.g, 0))]
    }

    function WK(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new Iq(c, f - c)), c = d)
        }
        return b
    }

    function XK(a, b) {
        b = b.map(c => {
            var d = new PH;
            d = Ji(d, 1, c.g);
            c = c.getHeight();
            return Ji(d, 2, c)
        });
        return RH(QH(new SH, a), b)
    }

    function YK(a) {
        const b = mi(a, PH, 2, x()).map(c => `G${xi(c,1)}~${c.getHeight()}`);
        return `W${xi(a,1)}${b.join("")}`
    }

    function ZK(a, b) {
        const c = [];
        let d = 0;
        for (const e of Cp(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.B && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(XK(e, f));
            d += f.length;
            if (!a.B && d >= a.i) break
        }
        return c
    }

    function $K(a) {
        const b = mi(a, SH, 5, x()).map(c => YK(c));
        return `M${xi(a,1)}H${xi(a,2)}C${xi(a,3)}B${Number(!!F(a,4))}${b.join("")}`
    }

    function aL(a) {
        var b = Cy(Tq(a.j.i.i), a.g),
            c = TK(a),
            d = new Fp(UK(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = VK(a, b[e]);
                c.push(...f)
            }
        c.push(new Iq(0, 0));
        c.push(Jq(new Iq(pp(a.g).scrollHeight, 0)));
        b = WK(c);
        c = new Ep;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.g / a.l), Ap(c, f) || c.set(f, []), c.get(f).push(e);
        b = ZK(a, c);
        c = new TH;
        c = Ji(c, 1, a.i);
        c = Ji(c, 2, a.l);
        c = Ji(c, 3, a.A);
        a = Ii(c, 4, a.C);
        return ni(a, 5, b)
    }

    function bL(a) {
        a = aL(a);
        return $K(a)
    }
    var RK = class {
        constructor(a, b, c) {
            this.G = c.yd == -1;
            this.l = c.yd;
            this.F = c.yc == -1;
            this.A = c.yc;
            this.B = c.Ic == -1;
            this.i = c.Ic;
            this.C = c.jh;
            this.j = b;
            this.g = a
        }
    };

    function Bs(a, b, c) {
        let d = b.Ua;
        b.sb && U(tt) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.Xa || "pvc" in c || (c.pvc = Oe(a.g)), dz(b.rb, c, d))
    }

    function cL(a, b, c) {
        c = c.l(a.g);
        b.Xa && (c.pvc = Oe(a.g));
        0 <= b.Ua && (c.r = b.Ua, Bs(a, b, c))
    }
    var dL = class {
        constructor(a) {
            this.g = a
        }
    };
    const eL = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function fL(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        dz("ama", b, .01)
    }

    function gL(a) {
        const b = {};
        ke(eL, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function hL(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function iL(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function jL(a, b) {
        a = Ci(a, 2, x());
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function kL(a, b) {
        a = iL(hL(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = pe(a),
            d = lL(a);
        return b.find(e => {
            const f = Sh(e, Fr, 7) ? yg(Nh(y(e, Fr, 7), 1)) : yg(Nh(e, 1));
            e = Sh(e, Fr, 7) ? wi(y(e, Fr, 7), 2) : 2;
            if (typeof f !== "number") return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function lL(a) {
        const b = {};
        for (;;) {
            b[pe(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function mL(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            fL(a, {
                lserr: 1
            })
        }
    };
    var oL = (a, b, c, d, e = null, f = null) => {
            nL(a, new dL(a), b, c, d, e, f)
        },
        nL = (a, b, c, d, e, f = null, g = null) => {
            if (c)
                if (d) {
                    var h = UC(d, e);
                    try {
                        const k = new pL(a, b, c, d, e, h, f, g);
                        hw(990, () => qL(k), a)
                    } catch (k) {
                        Xj() && Yj(15, [k]), cL(b, us, $I(cJ(bJ((new dJ(0)).Wb(c), d), h).wa(1), k)), dG(O(aG), dm(new lm, xl(1)))
                    }
                } else cL(b, us, (new dJ(0)).Wb(c).wa(8)), dG(O(aG), dm(new lm, xl(8)));
            else cL(b, us, (new dJ(0)).wa(9)), dG(O(aG), dm(new lm, xl(9)))
        };

    function qL(a) {
        a.G.forEach(b => {
            switch (b) {
                case 0:
                    hw(991, () => rL(a), a.g);
                    break;
                case 1:
                    hw(1073, () => {
                        NC(new TC(a.g, a.C, a.l, a.A, a.i.ca))
                    }, a.g);
                    break;
                case 2:
                    sL(a);
                    break;
                case 7:
                    hw(1203, () => {
                        var c = y(a.l, fs, 34);
                        if (c) {
                            var d = a.g,
                                e = a.A,
                                f = Lh(c);
                            c = d.location.hostname;
                            var g = y(f, es, 1) ? .g() ? ? [];
                            c = new NH(e, c, Oe(q), g);
                            if (g = y(f, es, 1))
                                if (f = y(f, ds, 2)) {
                                    Lq(d, uH);
                                    const l = new Kp;
                                    var h = d.innerWidth;
                                    var k = .375 * h;
                                    h = new JD(k, h - k);
                                    k = d.innerWidth;
                                    k = lp(d) >= 900 ? .2 * k : .5 * k;
                                    GH(new IH(d, e, g, f, new nH(d, h, k, l, new YG(l)), c))
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g)
            }
        })
    }

    function rL(a) {
        var b = U(gt) ? void 0 : a.i.Ak;
        let c = null;
        c = U(gt) ? Sy(a.g) : Qy(a.g, b);
        if (a.i.ca && Sh(a.i.ca, Er, 10)) {
            var d = Wh(a.i.ca.g(), 1);
            d !== null && d !== void 0 && (c = Hy(a.g, d, b));
            U(xt) && a.i.ca.g() ? .g() === 2 && (c = Py(a.i.ca.g(), c))
        }
        Sh(a.l, Br, 26) && (c = Uy(c, y(a.l, Br, 26), a.g));
        c = Wy(c, a.g);
        b = a.i.ca ? Ci(a.i.ca, 6, x(gg)) : [];
        d = a.i.ca ? mi(a.i.ca, Kr, 5, x(gg)) : [];
        const e = a.i.ca ? Ci(a.i.ca, 2, x(gg)) : [],
            f = hw(993, () => {
                var g = a.l,
                    h = mi(g, bs, 1, x(gg)),
                    k = a.i.ca && jL(a.i.ca, 1);
                k = U(Bt) ? "" : k ? "text_image" : "text";
                var l = new GK,
                    m = xw(h, a.g, {
                        Ri: l,
                        Wj: new vw(k)
                    });
                h.length != m.length && a.H.push(13);
                m = m.concat(LK(new MK(a.g, l)));
                h = U(ut);
                l = y(g, ns, 24) ? .i() ? .g() ? .g() || !1;
                if (h || l) h = IK(new JK(a.g)), l = O(zJ), m = m.concat(h), l.P = !0, l.B = h.length, a.F === "n" && (a.F = y(g, ns, 24) ? .g() ? .length ? "o" : "p");
                h = U(xt) && a.i.ca.g() ? .g() === 2 && a.i.ca.g() ? .i();
                h = U(ct) || h;
                a: {
                    if (l = y(g, Yr, 6))
                        for (n of l.g())
                            if (Sh(n, ir, 4)) {
                                var n = !0;
                                break a
                            }
                    n = !1
                }
                h && n ? (n = m.concat, h = a.g, (l = y(g, Yr, 6)) ? (h = uy(l.g(gg), h), k = OH(g, k, h)) : k = [], k = n.call(m, k)) : (n = m.concat, h = a.g, (l = y(g, Yr, 6)) ? (h = ty(l.g(gg), h), k = OH(g,
                    k, h)) : k = [], k = n.call(m, k));
                m = k;
                g = y(g, ns, 24);
                return new NJ(m, a.g, g)
            }, a.g);
        a.j = new nK(f, a.A, a.g, {
            Eb: c,
            Fj: a.P,
            wc: a.i.wc,
            rj: b,
            Ae: d
        }, tL(a), e, U(tt));
        jK(a.j) ? .optimization ? .ablatingThisPageview && !a.j.tb() && (Sv(a.g), O(zJ).C = !0, a.F = "f");
        a.B = qK(e, a.j, a.g);
        hw(992, () => wK(a.B), a.g).then(hw(994, () => a.da.bind(a), a.g), a.U.bind(a));
        uL(a)
    }

    function sL(a) {
        const b = y(a.l, cs, 18);
        b && mG(new nG(a.g, new WG(a.g, a.A), b, new gB(a.g), mi(a.l, bs, 1, x(gg))))
    }

    function tL(a) {
        const b = U(wt);
        if (!a.l.g()) return {
            ai: b,
            ji: !1,
            sj: !1,
            ki: !1,
            Pg: !1,
            Uh: !1,
            xk: 0,
            Kh: 0,
            tg: vL(a),
            sf: a.L
        };
        const c = a.l.g();
        return {
            ai: b || F(c, 14, !1),
            ji: F(c, 2, !1),
            sj: F(c, 3, !1),
            ki: F(c, 4, !1),
            Pg: F(c, 5, !1),
            Uh: F(c, 6, !1),
            xk: zi(c, 8, 0),
            Kh: wi(c, 10),
            tg: vL(a),
            sf: a.L
        }
    }

    function uL(a) {
        if (U(hv)) {
            var b = new FK(a.A);
            const e = y(a.l, Yr, 6) ? .g(gg),
                f = e ? .length > 0;
            var c = b,
                d = !!ZA(a.g).reactiveTypeEnabledInAsfe[8];
            CK(c, {
                typ: "pv",
                asp: Number(f),
                ve: Number(d)
            });
            f && (a = new DK(a.g, e, b), b = zK(a.win, a.g), b.length === 0 ? EK(a.O, {
                Pe: 0
            }) : (c = AK(b), d = c.g.getBoundingClientRect(), EK(a.O, {
                Pe: b.length,
                W: P(a.win),
                Nc: pp(a.win).scrollHeight,
                Ji: d.height,
                Li: a.win.scrollY + d.top
            }), c = c.g, BK(a, c, 0, "-50% 0px 0px 0px"), BK(a, c, 1, "0px 0px 0px 0px")))
        }
    }

    function vL(a) {
        return U(nt) || U(xt) && a.i.ca ? .g() ? .g() === 2 ? !1 : a.i.ca && Sh(a.i.ca, Er, 10) ? (Wh(a.i.ca.g(), 1) || 0) >= .5 : !0
    }

    function wL(a, b) {
        for (var c = ZI(ZI(new dJ(b.Pa), b.errors), a.H), d = b.Bb, e = 0; e < d.length; e++) a: {
            for (var f = c, g = d[e], h = 0; h < f.C.length; h++)
                if (f.C[h] == g) break a;f.C.push(g)
        }
        c.g.pp = b.ee;
        c.g.ppp = b.fe;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.mc;
        c.g.eatfAbg = b.nc;
        c.g.reatf = b.Kb;
        c = cJ(bJ(c.H(a.B.l.slice(0)), a.l), a.G).Wb(a.A);
        if (d = b.Ka) c.g.as_count = d.qg, c.g.d_count = d.Ng, c.g.ng_count = d.Bh, c.g.am_count = d.vg, c.g.atf_count = d.rg, c.g.mdns = eJ(d.uh), c.g.alldns = eJ(d.sg);
        c = c.G(b.Rb).Yh(b.wd);
        d = b.Nc;
        d != null && (c.g.pgh = d);
        c.g.abl = b.eh;
        c.g.rr = a.F;
        b.exception !== void 0 && $I(c, b.exception).wa(1);
        return c
    }

    function xL(a, b) {
        var c = wL(a, b);
        cL(a.C, b.errors.length > 0 || a.H.length > 0 || b.exception !== void 0 ? us : ts, c);
        if (y(a.l, ns, 24)) {
            a.j.i.g.g ? .F();
            b = jK(a.j);
            const d = O(zJ);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.U = !!b ? .optimization ? .availableAbg;
            b = O(zJ);
            c = new qJ(c);
            b.A ? (c.i.sl = gJ(b.A ? ? []), c.i.daaos = gJ(b.H ? ? []), c.i.ab = hJ(b.G), c.i.rr = hJ(b.P), c.i.oab = hJ(b.F), b.j != null && (c.i.sab = hJ(b.j)), b.C && (c.i.fb = hJ(b.C)), c.i.ls = hJ(b.U), iJ(c, b.i.zc()), b.B != null && (c.i.rp = hJ(b.B)),
                b.l != null && (c.i.expl = hJ(b.l)), yJ(b, c)) : c.errors.push("irr");
            cL(a.C, ws, c)
        }
        c = a.j ? .ua();
        U(tt) && c != null && (c = new Map([...c.j.map.entries()].map(fH)), b = new OK, NK(b, c), cL(a.C, zs, b))
    }

    function yL(a, b) {
        const c = O(aG);
        if (c.i) {
            var d = new lm,
                e = b.Bb.filter(g => g !== null),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(g => g !== null);
            hm(fm(km(jm(im(gm(am(cm(em(bm(d, a.B.l.slice(0).map(g => {
                var h = new wl;
                return Qh(h, 1, tg(g))
            })), e.map(g => {
                var h = new zl;
                return Qh(h, 1, tg(g))
            })), f.map(g => xl(g))), y(a.l, Or, 23) ? .g()), b.Pa).G(b.Rb), b.Kb), b.mc), b.nc), a.G.map(g => g.toString())), Gl(Fl(El(Dl(Cl(Bl(Al(new Hl, b.Ka ? .qg), b.Ka ? .Ng), b.Ka ? .Bh), b.Ka ? .vg), b.Ka ? .rg), b.Ka ? .uh), b.Ka ? .sg));
            if (b.wd)
                for (let g of Cp(b.wd)) {
                    e =
                        new di;
                    for (let h of b.wd.get(g)) Ll(e, Jl(Il(new Kl, h.lb), h.li));
                    ci(d).set(g.toString(), e)
                }
            y(a.l, ns, 24) && Zl(d);
            dG(c, d)
        }
    }

    function zL(a, b) {
        try {
            U(et) && a.j ? .Ja() ? .A()
        } catch (c) {
            cL(a.C, ys, $I(cJ(bJ((new dJ(b)).Wb(a.A), a.l), a.G).wa(14), c))
        }
    }

    function AL(a, b, c) {
        {
            var d = jK(a.j),
                e = b.g;
            const f = e.g,
                g = e.ee;
            let h = e.Pa,
                k = e.fe,
                l = e.errors.slice(),
                m = e.Bb.slice(),
                n = b.exception;
            const p = MF(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.B.j && m.push(13), d.exception !== void 0 && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Pa: h,
                ee: g,
                fe: k,
                Rb: f,
                errors: e.errors.slice(),
                Bb: m,
                exception: n,
                Kb: c,
                mc: !!d.eatf,
                nc: !!d.eatfAbg,
                eh: p
            }) : (m.push(12), a.B.j && m.push(13), c = {
                Pa: h,
                ee: g,
                fe: k,
                Rb: f,
                errors: l,
                Bb: m,
                exception: n,
                Kb: c,
                mc: !1,
                nc: !1,
                eh: p
            })
        }
        c.Ka = fK(a.j.g);
        if (b = b.g.i) c.wd = b;
        c.Nc = pp(a.g).scrollHeight;
        if (Xj() || y(a.l, Nr, 25) ? .i()) {
            d = Tq(a.j.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.L;
                for (const g of Cp(e)) d[g] = e.get(g);
                d = {
                    anchorElement: Bw(f),
                    position: f.g(),
                    clearBoth: f.H,
                    locationType: f.Mb,
                    placed: f.A,
                    placementProto: f.l ? Ri(f.l) : null,
                    articleStructure: f.C ? Ri(f.C) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Yj(14, [{
                placementIdentifiers: b
            }, a.j.G, c.Ka])
        }
        return c
    }

    function BL(a, b) {
        var c = a.j.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Rb;
        c.numAutoAdsPlaced = b.Pa;
        c.hasAtfAd = b.Kb;
        b.exception !== void 0 && (c.exception = b.exception);
        a.j != null && (a = QK(a.g, a.j, {
            yd: -1,
            yc: -1,
            Ic: -1,
            jh: !0,
            ug: !0
        }), a.g != null ? (c.placementPositionDiffs = bL(a.getValue()), b = aL(a.getValue()), a = new UH, a = A(a, 2, VH, b), c.placementPositionDiffsReport = Qi(a)) : (b = a.i.message, c.placementPositionDiffs = "E" + b, a = new UH, a = gi(a, 1, VH, ah(b)), c.placementPositionDiffsReport = Qi(a)))
    }

    function CL(a, b) {
        xL(a, {
            Pa: 0,
            Rb: void 0,
            errors: [],
            Bb: [],
            exception: b,
            Kb: void 0,
            mc: void 0,
            nc: void 0,
            Ka: void 0
        });
        yL(a, {
            Pa: 0,
            Rb: void 0,
            errors: [],
            Bb: [],
            exception: b,
            Kb: void 0,
            mc: void 0,
            nc: void 0,
            Ka: void 0
        })
    }
    class pL {
        constructor(a, b, c, d, e, f, g, h) {
            this.g = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.i = e;
            this.G = f;
            this.P = g || null;
            this.H = [];
            this.L = h;
            this.F = "n"
        }
        da(a) {
            try {
                zL(this, a.g.Pa);
                const b = eK(this.j.g) || void 0;
                ss({
                    kf: b
                }, this.g);
                const c = AL(this, a, eK(this.j.g));
                Sh(this.l, Nr, 25) && ui(y(this.l, Nr, 25), 1) && BL(this, c);
                xL(this, c);
                yL(this, c);
                cz(753, () => {
                    if (U(ht) && this.j != null) {
                        var d = QK(this.g, this.j, {
                                yd: W(st),
                                yc: W(rt),
                                Ic: W(jt),
                                jh: !0,
                                ug: !1
                            }),
                            e = Jb(c);
                        d.g != null ? (d = bL(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs =
                            "E" + d.i.message;
                        e = wL(this, e);
                        cL(this.C, vs, e)
                    }
                })()
            } catch (b) {
                CL(this, b)
            }
        }
        U(a) {
            zL(this, 0);
            CL(this, a)
        }
    };
    var DL = class extends K {},
        EL = Ti(DL);

    function FL(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Zq(() => EL(c)) : Wq(null)
    };

    function GL(a, b) {
        return Ii(a, 5, b)
    }
    var HL = class extends K {
        constructor() {
            super()
        }
        j() {
            return B(this, 1) != null
        }
        i() {
            return B(this, 2) != null
        }
        l() {
            return F(this, 3)
        }
        g() {
            return F(this, 5)
        }
    };
    var KL = ({
        win: a,
        Na: b,
        hh: c = !1,
        ih: d = !1
    }) => IL({
        win: a,
        Na: b,
        hh: c,
        ih: d
    }) ? (b = CF(xF(), 24)) ? JL(a, GL(new HL, LG(b))) : new Xq(null, Error("tcunav")) : JL(a, GL(new HL, !0));

    function IL({
        win: a,
        Na: b,
        hh: c,
        ih: d
    }) {
        if (!(d = !d && QG(new UG(a)))) {
            if (c = !c) {
                if (b) {
                    a = FL(a);
                    if (a.g != null)
                        if ((a = a.getValue()) && wi(a, 1) != null) b: switch (a = wi(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else X.ba(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function JL(a, b) {
        return (a = Nj(b, a)) ? Wq(a) : new Xq(null, Error("unav"))
    };
    var LL = class extends K {};
    class ML {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.C = c;
            this.i = !1;
            this.j = d;
            this.A = e
        }
    };
    var NL = class extends K {
        constructor() {
            super()
        }
        Mj() {
            return Ai(this, 3)
        }
    };
    const OL = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var PL = class extends K {
        constructor() {
            super()
        }
        getVersion() {
            return xi(this, 2)
        }
    };

    function QL(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function RL(a) {
        return $e(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function SL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function TL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function UL(a, b) {
        a = RL(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function VL(a) {
        var b = RL(a),
            c = SL(b.slice(0, 6));
        a = SL(b.slice(6, 12));
        var d = new PL;
        c = Ki(d, 1, c);
        a = Ki(c, 2, a);
        b = b.slice(12);
        c = SL(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = SL(e[0]) === 0;
            e = e.slice(1);
            var g = WL(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = TL(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = WL(e, b);
                g = TL(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return ei(a, 3, d, vg)
    }

    function WL(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var XL = class extends K {
        constructor() {
            super()
        }
    };
    var YL = class extends K {
        constructor() {
            super()
        }
    };
    var ZL = class extends K {
        getVersion() {
            return xi(this, 1)
        }
    };
    var $L = class extends K {
        constructor() {
            super()
        }
    };

    function aM(a) {
        var b = new bM;
        return z(b, 1, a)
    }
    var bM = class extends K {
        constructor() {
            super()
        }
    };
    const cM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        dM = 6 + cM.reduce((a, b) => a + b);
    var eM = class extends K {
        constructor() {
            super()
        }
    };
    var fM = class extends K {
        getVersion() {
            return xi(this, 1)
        }
    };
    var gM = class extends K {
        constructor() {
            super()
        }
    };

    function hM(a) {
        var b = new iM;
        return z(b, 1, a)
    }
    var iM = class extends K {
        constructor() {
            super()
        }
    };
    const jM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        kM = 6 + jM.reduce((a, b) => a + b);
    var lM = class extends K {
        constructor() {
            super()
        }
    };
    var mM = class extends K {
        constructor() {
            super()
        }
    };
    var nM = class extends K {
        getVersion() {
            return xi(this, 1)
        }
    };
    var oM = class extends K {
        constructor() {
            super()
        }
    };

    function pM(a) {
        var b = new qM;
        return z(b, 1, a)
    }
    var qM = class extends K {
        constructor() {
            super()
        }
    };
    const rM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        sM = 6 + rM.reduce((a, b) => a + b);
    var tM = class extends K {
        constructor() {
            super()
        }
    };
    var uM = class extends K {
        constructor() {
            super()
        }
    };
    var vM = class extends K {
        getVersion() {
            return xi(this, 1)
        }
    };
    var wM = class extends K {
        constructor() {
            super()
        }
    };

    function xM(a) {
        var b = new yM;
        return z(b, 1, a)
    }
    var yM = class extends K {
        constructor() {
            super()
        }
    };
    const zM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        AM = 6 + zM.reduce((a, b) => a + b);
    var BM = class extends K {
        constructor() {
            super()
        }
    };
    var CM = class extends K {
        constructor() {
            super()
        }
        getVersion() {
            return xi(this, 1)
        }
    };
    const DM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        EM = 6 + DM.reduce((a, b) => a + b);

    function FM() {
        var a = new GM;
        return Mi(a, 1, 0)
    }

    function HM(a) {
        var b = Number; {
            var c = Nh(a, 1);
            const d = typeof c;
            c = c == null ? c : d === "bigint" ? String(BigInt.asIntN(64, c)) : rg(c) ? d === "string" ? Ag(c) : Bg(c) : void 0
        }
        b = b(c ? ? "0");
        a = xi(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var GM = class extends K {};
    var IM = "a".charCodeAt(),
        JM = Ib(cp),
        KM = Ib(dp);

    function LM(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function MM(a) {
        let b = LM(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!LM(a, 1) === !0,
                e = LM(a, 16);
            if (d)
                for (d = LM(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function NM(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (LM(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function OM(a) {
        const b = LM(a, 16);
        return !!LM(a, 1) === !0 ? (a = MM(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : NM(a, b)
    }
    class PM {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var RM = a => {
        try {
            var b = $e(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new PM(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = LM(c, 12);
            b.cmpVersion = LM(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = LM(c, 6);
            b.isServiceSpecific = !!LM(c, 1);
            b.useNonStandardStacks = !!LM(c, 1);
            b.specialFeatureOptins = QM(NM(c, 12, KM), KM);
            b.purpose = {
                consents: QM(NM(c, 24, JM), JM),
                legitimateInterests: QM(NM(c, 24, JM), JM)
            };
            b.purposeOneTreatment = !!LM(c, 1);
            b.publisherCC = String.fromCharCode(IM + LM(c, 6)) + String.fromCharCode(IM +
                LM(c, 6));
            b.vendor = {
                consents: QM(OM(c), null),
                legitimateInterests: QM(OM(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const QM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var SM = class extends K {
        g() {
            return B(this, 2) != null
        }
    };
    var TM = class extends K {
        j() {
            return B(this, 2) != null
        }
    };
    var UM = class extends K {
        i() {
            return B(this, 1) != null
        }
    };
    var VM = Ti(class extends K {});

    function WM(a) {
        a = XM(a);
        try {
            var b = a ? VM(a) : null
        } catch (c) {
            b = null
        }
        return b ? y(b, UM, 4) || null : null
    }

    function XM(a) {
        a = (new tj(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function YM(a) {
        a.__tcfapiPostMessageReady || ZM(new $M(a))
    }

    function ZM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.win.__tcfapi)(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.win.addEventListener("message", a.g);
        a.win.__tcfapiPostMessageReady = !0
    }
    var $M = class {
        constructor(a) {
            this.win = a
        }
    };

    function aN(a) {
        a.__uspapiPostMessageReady || bN(new cN(a))
    }

    function bN(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.win.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.win.addEventListener("message", a.g);
        a.win.__uspapiPostMessageReady = !0
    }
    var cN = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    };
    var dN = class extends K {};
    var eN = Ti(class extends K {
        g() {
            return B(this, 1) != null
        }
    });

    function fN(a, b, c) {
        function d(p) {
            if (p.length < 10) return null;
            var r = k(p.slice(0, 4));
            r = l(r);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + r + p + "N"
        }

        function e(p) {
            if (p.length < 10) return null;
            var r = k(p.slice(0, 6));
            r = l(r);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + r + p + "N"
        }

        function f(p) {
            if (p.length < 12) return null;
            var r = k(p.slice(0, 6));
            r = l(r);
            p = k(p.slice(8, 12));
            p = m(p);
            return "1" + r + p + "N"
        }

        function g(p) {
            if (p.length < 18) return null;
            var r = k(p.slice(0, 8));
            r = l(r);
            p = k(p.slice(12, 18));
            p = m(p);
            return "1" + r + p + "N"
        }

        function h(p) {
            if (p.length <
                10) return null;
            var r = k(p.slice(0, 6));
            r = l(r);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + r + p + "N"
        }

        function k(p) {
            const r = [];
            let w = 0;
            for (let D = 0; D < p.length / 2; D++) r.push(SL(p.slice(w, w + 2))), w += 2;
            return r
        }

        function l(p) {
            return p.every(r => r === 1) ? "Y" : "N"
        }

        function m(p) {
            return p.some(r => r === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = RL(a[0]);
        const n = SL(a.slice(0, 6));
        a = a.slice(6);
        if (n !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return g(a);
            case 13:
                return c ? h(a) : null;
            default:
                return null
        }
    };

    function gN(a) {
        var b = U(Qs);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new hN(a, b), iN(a), jN(a))
    }

    function iN(a) {
        !a.i || a.win.__uspapi || a.win.frames.__uspapiLocator || (a.win.__uspapiManager = "fc", wG(a.win, "__uspapiLocator"), La("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && d({
                version: 1,
                uspString: a.i
            }, !0)
        }, a.win), aN(a.win))
    }

    function jN(a) {
        !a.tcString || a.win.__tcfapi || a.win.frames.__tcfapiLocator || (a.win.__tcfapiManager = "fc", wG(a.win, "__tcfapiLocator"), a.win.__tcfapiEventListeners = a.win.__tcfapiEventListeners || [], La("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.win.__tcfapiEventListeners, b) {
                    case "ping":
                        d({
                            gdprApplies: !0,
                            cmpLoaded: !0,
                            cmpStatus: "loaded",
                            displayStatus: "disabled",
                            apiVersion: "2.2",
                            cmpVersion: 2,
                            cmpId: 300
                        });
                        break;
                    case "addEventListener":
                        b = c.push(d) - 1;
                        a.tcString ?
                            (e = RM(a.tcString), e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                        d(b, !0);
                        break;
                    case "removeEventListener":
                        e !== void 0 && c[e] ? (c[e] = null, d(!0)) : d(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        d(null, !1);
                        break;
                    case "getTCData":
                        d(null, !1)
                }
        }, a.win), YM(a.win))
    }

    function kN(a, b) {
        if (!b ? .g() || G(b, 1).length === 0 || mi(b, dN, 2, x()).length === 0) return null;
        const c = G(b, 1);
        let d;
        try {
            var e = VL(c.split("~")[0]);
            d = QL(c)
        } catch (f) {
            return null
        }
        b = mi(b, dN, 2, x()).reduce((f, g) => yi(lN(f), 1) > yi(lN(g), 1) ? f : g);
        e = Xh(e, 3, wg, x()).indexOf(xi(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: fN(d[e], xi(b, 1), a.j),
            ef: HM(lN(b))
        }
    }

    function mN(a) {
        a = a.find(b => b && Ai(b, 1) === 13);
        if (a ? .g()) try {
            return eN(G(a, 2))
        } catch (b) {}
        return null
    }

    function lN(a) {
        return Sh(a, GM, 2) ? y(a, GM, 2) : FM()
    }
    var hN = class {
        constructor(a, b) {
            this.win = a;
            this.j = b;
            b = XM(this.win.document);
            try {
                var c = b ? VM(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = y(b, TM, 5) || null, b = mi(b, SM, 7, x()), b = mN(b ? ? []), c = {
                Dg: c,
                Zg: b
            }) : c = {
                Dg: null,
                Zg: null
            };
            b = c;
            c = kN(this, b.Zg);
            b = b.Dg;
            if (b ? .j() && G(b, 2).length !== 0) {
                var d = Sh(b, GM, 1) ? y(b, GM, 1) : FM();
                b = {
                    uspString: G(b, 2),
                    ef: HM(d)
                }
            } else b = null;
            this.i = b && c ? c.ef > b.ef ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.tcString = (c = WM(a.document)) && c.i() ? G(c, 1) : null;
            this.g = (a = WM(a.document)) && B(a, 2) != null ?
                G(a, 2) : null
        }
    };

    function nN() {
        const a = rd();
        return a ? Xa("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), b => Tb(a, b)) || Tb(a, "OMI/") && !Tb(a, "XiaoMi/") ? !0 : Tb(a, "Presto") && Tb(a, "Linux") && !Tb(a, "X11") && !Tb(a, "Android") && !Tb(a, "Mobi") : !1
    };

    function oN(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var pN = (a, b) => {
        a = oN(a);
        b = oN(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var qN = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            Cb(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Db(a, "message", e));
                return g
            }
        },
        rN = (a, b, c, d = null) => {
            const e = qN(a, b, rb(c, () => e()), d);
            return e
        },
        sN = (a, b, c, d, e) => {
            if (!(e <= 0) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) e > 1 && sN(a[f], b, c, d, --e)
        };

    function tN(a, b, c, d) {
        return qN(a, "fullscreen", d.Ga(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    class uN {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };
    async function vN(a) {
        return a.A.promise
    }
    async function wN(a) {
        return a.j.promise
    }
    async function xN(a) {
        return a.l.promise
    }

    function yN(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.B.Rk;
        b.version = a.B.version;
        el(a.I, "fullscreen_tag", b, !1, .25)
    }
    class zN extends Q {
        constructor(a, b, c) {
            var d = X,
                e = $y,
                f = {
                    Rk: 2,
                    version: tF()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.df = c;
            this.Ca = d;
            this.I = e;
            this.B = f;
            this.g = 1;
            this.qem = null;
            this.A = new uN;
            this.j = new uN;
            this.l = new uN
        }
        K() {
            const a = tN(this.pubWin, this.df, b => {
                if (b.eventType === "adError") this.l.resolve(), this.g = 4;
                else if (b.eventType === "adReady" && this.g === 1) this.qem = b.qem, b.slotType !== this.slotType && (yN(this, {
                    cur_st: this.g,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.g = 4), this.A.resolve(), this.g = 2;
                else if (b.eventType ===
                    "adClosed" && this.g === 2) this.j.resolve(b.result), this.g = 3;
                else if (b.eventType !== "adClosed" || this.g !== 3) yN(this, {
                    cur_st: this.g,
                    evt: b.eventType
                }), this.g = 4
            }, this.Ca);
            Op(this, a)
        }
    };
    var AN = Promise;
    class BN {
        constructor(a) {
            this.j = a
        }
        i(a, b, c) {
            this.j.then(d => {
                d.i(a, b, c)
            })
        }
        g(a, b) {
            return this.j.then(c => c.g(a, b))
        }
    };
    class CN {
        constructor(a) {
            this.data = a
        }
    };

    function DN(a, b) {
        EN(a, b);
        return new FN(a)
    }
    class FN {
        constructor(a) {
            this.j = a
        }
        i(a, b, c = []) {
            const d = new MessageChannel;
            EN(d.port1, b);
            this.j.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new AN(c => {
                this.i(a, c, b)
            })
        }
    }

    function EN(a, b) {
        b && (a.onmessage = c => {
            b(new CN(c.data, DN(c.ports[0])))
        })
    };
    var GN = class {
        constructor(a) {
            this.g = a
        }
    };
    const HN = a => {
        const b = Object.create(null);
        (typeof a === "string" ? [a] : a).forEach(c => {
            if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return c => b[c] === !0
    };
    var JN = ({
        destination: a,
        Sa: b,
        origin: c,
        Ue: d = "ZNWN1d",
        onMessage: e,
        Ch: f
    }) => IN({
        destination: a,
        Nj: () => b.contentWindow,
        rk: c instanceof GN ? c : typeof c === "function" ? new GN(c) : new GN(HN(c)),
        Ue: d,
        onMessage: e,
        Ch: f
    });
    const IN = ({
        destination: a,
        Nj: b,
        rk: c,
        kp: d,
        Ue: e,
        onMessage: f,
        Ch: g
    }) => new BN(new AN((h, k) => {
        const l = m => {
            m.source && m.source === b() && c.g(m.origin) && (m.data.n || m.data) === e && (a.removeEventListener("message", l, !1), d && m.data.t !== d ? k(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${m.data.t}.`)) : (h(DN(m.ports[0], f)), g && g(m)))
        };
        a.addEventListener("message", l, !1)
    }));

    function KN() {
        const {
            promise: a,
            resolve: b
        } = new uN;
        return {
            promise: a,
            resolve: b
        }
    };

    function LN(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = KN();
        b[a] = d;
        c();
        return d
    }

    function MN(a, b, c) {
        return LN(a, b, () => {
            ge(b.document, c)
        }).promise
    };

    function NN(a, b, c, d, e, f, g = null) {
        if (e) {
            if (U(ft)) var h = null;
            else try {
                h = e.getItem("google_ama_config")
            } catch (m) {
                h = null
            }
            try {
                var k = h ? os(h) : null
            } catch (m) {
                k = null
            }
        } else k = null;
        f = k;
        a: {
            if (d) try {
                var l = os(d);
                break a
            } catch (m) {
                fL(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            l = null
        }
        if (d = l) {
            if (e) {
                l = new Dr;
                z(d, 3, l);
                f = d ? .g() ? .i() || 1;
                f = Date.now() + 864E5 * f;
                Number.isFinite(f) && Li(l, 1, Math.round(f));
                l = Kh(d);
                d.g() && (f = new Cr, k = d ? .g() ? .g(), f = Ii(f, 23, k), k = d ? .g() ? .j(), f = Ii(f, 12, k), z(l, 15, f));
                f = mi(l, bs, 1, x());
                for (k = 0; k < f.length; k++) Qh(f[k], 11);
                Qh(l, 22);
                if (U(ft)) mL(a, e);
                else try {
                    e.setItem("google_ama_config", Qi(l))
                } catch (m) {
                    fL(a, {
                        lserr: 1
                    })
                }
            }
            e = kL(a, mi(d, Mr, 7, x()));
            l = {};
            U(gt) || (l.Ak = y(d, Wr, 8) || new Wr);
            e && (l.ca = e);
            e && jL(e, 3) && (l.wc = [1]);
            e = l;
            NF(a, 2) && (Yj(5, [Ri(d)]), c = gL(c), l = (l = e.ca) && B(l, 4) || "", c.google_package = l, oL(a, b, d, e, new tr(["google-auto-placed"], c), g));
            return !0
        }
        f && (fL(a, {
            cfg: 1,
            cl: 1
        }), e != null && mL(a, e));
        return !1
    };

    function ON(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Md(a.g.ea() || window);
        if (c.bottom <= 0 || c.bottom > d.height || c.right <= 0 || c.left >= d.width) return null;
        var e = PN(a, b, c, a.g.g.elementsFromPoint(Yc(c.left + c.width / 2, c.left, c.right - 1), Yc(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = PN(a, b, c, a.g.g.elementsFromPoint(Yc(c.left + c.width / 2, c.left, c.right - 1), Yc(c.top + 2, c.top, c.bottom - 1)), 2, e.pb),
            g = PN(a, b, c, a.g.g.elementsFromPoint(Yc(c.left + 2, c.left, c.right - 1), Yc(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.pb, ...f.pb]);
        const h = PN(a, b, c, a.g.g.elementsFromPoint(Yc(c.right - 1 - 2, c.left, c.right - 1), Yc(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.pb, ...f.pb, ...g.pb]);
        var k = QN(a, b, c),
            l = n => Ya(a.j, n.vb) && Ya(a.l, n.Gh) && Ya(a.i, n.Hh);
        e = Ua([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Ua(k, l);
        k = [...e, ...l];
        f = c.left < -2 || c.right > d.width + 2;
        f = k.length > 0 || f;
        g = Nd(a.g.g);
        const m = new ck(c.left, c.top, c.width, c.height);
        e = [...Va(e, n => new ck(n.sc.left, n.sc.top, n.sc.width, n.sc.height)), ...lb(Va(l,
            n => ek(m, n.sc))), ...Ua(ek(m, new ck(0, 0, d.width, d.height)), n => n.top >= 0 && n.top + n.height <= d.height)];
        return {
            entries: k,
            rh: f,
            Wh: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            Yb: c,
            mi: {
                width: d.width,
                height: d.height
            },
            sk: e.length < 20 ? RN(m, e) : SN(c, e)
        }
    }

    function TN(a, b) {
        const c = a.g.ea(),
            d = a.g.g;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Wk,
                                        m = Vk(l, () => ON(a, k));
                                    m && (l.i.length && (m.Cj = Math.round(Number(l.i[0].duration))), h.disconnect(), e(m))
                                }, UN);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function PN(a, b, c, d, e, f) {
        if (c.width === 0 || c.height === 0) return {
            entries: [],
            pb: []
        };
        const g = [],
            h = [];
        for (let m = 0; m < d.length; m++) {
            const n = d[m];
            if (n === b) continue;
            if (Ya(f, n)) continue;
            h.push(n);
            const p = n.getBoundingClientRect();
            if (a.g.contains(n, b)) {
                g.push(VN(a, c, n, p, 1, e));
                continue
            }
            if (a.g.contains(b, n)) {
                g.push(VN(a, c, n, p, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b;
                const D = k.g.Hj(l, n);
                if (!D) {
                    k = null;
                    break a
                }
                const {
                    Ia: C,
                    Hb: I
                } = WN(k, l, D, n) || {},
                {
                    Ia: N,
                    Hb: E
                } = WN(k, n, D, l) || {};k = C && I && N && E ? I <= E ? {
                    Ia: C,
                    vb: XN[I]
                } : {
                    Ia: N,
                    vb: YN[E]
                } : C && I ? {
                    Ia: C,
                    vb: XN[I]
                } : N && E ? {
                    Ia: N,
                    vb: YN[E]
                } : null
            }
            const {
                Ia: r,
                vb: w
            } = k || {};
            r && w ? g.push(VN(a, c, n, p, w, e, r)) : g.push(VN(a, c, n, p, 9, e))
        }
        return {
            entries: g,
            pb: h
        }
    }

    function QN(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = ie(b, a.g.ea());
                e && e.overflow !== "visible" && (e.overflowY !== "auto" && e.overflowY !== "scroll" && c.bottom > f.bottom + 2 ? d.push(VN(a, c, b, f, 5, 1)) : (e = e.overflowX === "auto" || e.overflowX === "scroll", !e && c.left < f.left - 2 ? d.push(VN(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(VN(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function RN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = dk(e, b[g]), e)); g++);
            e && (c = f % 2 === 1 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function SN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function VN(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            sc: d,
            vb: e,
            Hh: f
        };
        if (Ya(a.j, e) && Ya(a.i, f)) {
            b = new Zj(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = ZN(a, c)) && bk(b, a)) c = 4;
            else {
                a = $N(c, d);
                e = sk(c, "paddingLeft");
                f = sk(c, "paddingRight");
                var k = sk(c, "paddingTop"),
                    l = sk(c, "paddingBottom");
                e = new Zj(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                bk(b, new Zj(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = $N(c, d), c = bk(b, c) ? 2 : 1)
            }
            h.Gh = c
        }
        g && (h.Ia = g);
        return h
    }

    function WN(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.ea();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = ie(h, c);
            if (g) {
                if (g.position === "fixed") return {
                    Ia: h,
                    Hb: 1
                };
                if (g.position === "sticky" && a.g.contains(h.parentElement, d)) return {
                    Ia: h,
                    Hb: 2
                };
                if (g.position === "absolute") return {
                    Ia: h,
                    Hb: 3
                };
                if (g.cssFloat !== "none") {
                    g = h === e[0];
                    const k = aO(a, e.slice(0, f), h);
                    if (g || k) return {
                        Ia: h,
                        Hb: 4
                    }
                }
            }
        }
        return (a = aO(a, e, b)) ? {
            Ia: a,
            Hb: 5
        } : null
    }

    function aO(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = ie(f, a.g.ea());
            if (h && d.bottom > g.bottom + 2 && h.overflowY === "visible") return f
        }
        return null
    }

    function ZN(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return a.width === 0 || a.height === 0 ? null : new Zj(a.top, a.right, a.bottom, a.left)
    }

    function $N(a, b) {
        var c = sk(a, "borderLeftWidth");
        var d = sk(a, "borderRightWidth"),
            e = sk(a, "borderTopWidth");
        a = sk(a, "borderBottomWidth");
        c = new Zj(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
        return new Zj(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class bO {
        constructor(a) {
            var b = cO;
            this.g = Jd(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const XN = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        YN = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Ua(oe({
        Dm: 1,
        Em: 2,
        xo: 3,
        yo: 4,
        Ao: 5,
        zm: 6,
        Am: 7,
        Cm: 8,
        In: 9,
        zo: 10,
        Bm: 11,
        wo: 12,
        ym: 13
    }), a => !Ya([1, 2], a));
    oe({
        Yl: 1,
        Ln: 2,
        im: 3,
        Bo: 4
    });
    const cO = oe({
            Zl: 1,
            Eo: 2,
            wn: 3,
            lo: 4
        }),
        UN = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function dO(a) {
        a.g != null || a.C || (a.g = new MutationObserver(b => {
            for (const c of b)
                for (const d of c.addedNodes) Ba(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && fq(b.j, d))
        }), a.g.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var eO = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new gq;
            this.g = null;
            Op(this, () => {
                this.g ? .disconnect();
                this.g = null
            })
        }
    };

    function fO(a, b) {
        b.addEventListener("click", () => {
            var c = a.g;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? Wq(om(4)) : d.startsWith("#") ? Wq(om(5)) : gO(d, c) : Yq("Empty href");
            if (c.g != null) {
                d = c.getValue();
                c = a.O;
                var e = new qm;
                d = z(e, 1, d);
                c.call(a, d)
            } else a.i(c.i)
        })
    }
    var iO = class {
        constructor(a, b, c) {
            var d = hO();
            this.win = a;
            this.g = b;
            this.O = c;
            this.i = d
        }
        K() {
            const a = new eO(this.win);
            Array.from(a.win.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                fO(this, b)
            });
            dO(a);
            dq(a.j).listen(b => {
                fO(this, b)
            })
        }
    };

    function gO(a, b) {
        return jO(a, b).map(c => jO(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = om(2);
                e = Oi(e, 2, `${c.host}${c.pathname}`);
                d = Oi(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? om(3) : om(1);
            return d
        }))
    }

    function jO(a, b) {
        return br(Zq(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function kO(a) {
        if (a < 0 || !Number.isInteger(a)) return Yq(`Not a non-negative integer: ${a}`);
        const b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return Wq(b.reverse().join(""))
    };
    class lO {
        constructor() {
            this.vi = 5E3
        }
        hj() {
            return 5E3
        }
    }

    function mO(a, b) {
        return a.g ? Math.floor(b / 5E3) * 5E3 / a.g.vi : b
    }

    function nO(a, b) {
        b = b.map(c => mO(a, c));
        return oO(b, a.i === void 0 ? void 0 : mO(a, a.i)).map(c => {
            a: {
                var d = pO;
                const e = [];
                for (const f of c) {
                    c = d(f);
                    if (c.g == null) {
                        d = new Xq(null, c.i);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = Wq(e)
            }
            return d
        }).map(c => c.join(".")).map(c => qO(c, a.g ? .hj()))
    }
    var rO = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function pO(a) {
        const b = kO(a.value);
        if (b.g == null) return b;
        const c = b.getValue();
        return a.ie === 1 ? Wq(`${c}`) : a.ie === 2 ? Wq(`${c}${"~"}`) : dr(kO(a.ie - 2), d => {
            throw d;
        }).map(d => `${c}${"~"}${d}`)
    }

    function oO(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d] ? ? b;
            if (e === void 0) return Yq("Sparse but no default");
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                ie: 1
            }) : c[c.length - 1].ie++
        }
        return Wq(c)
    }

    function qO(a, b) {
        return a === "" ? Wq("") : sO(b).map(c => `${c}${a}`)
    }

    function sO(a) {
        return a === void 0 || a === 1 ? Wq("") : cr(kO(a), "ComFactor: ").map(b => `${"~"}${b}${"."}`)
    };
    var tO = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => {
                this.j.g(this.win.document.hasFocus())
            }
        }
        K() {
            this.win.addEventListener("focus", this.g);
            this.win.addEventListener("blur", this.g);
            Op(this, () => void this.win.removeEventListener("focus", this.g));
            Op(this, () => void this.win.removeEventListener("blur", this.g));
            this.j.g(this.win.document.hasFocus())
        }
    };

    function uO(a) {
        a.j.g(a.win.document.visibilityState === "visible")
    }
    var vO = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => void uO(this)
        }
        K() {
            this.win.addEventListener("visibilitychange", this.g);
            Op(this, () => void this.win.removeEventListener("visibilitychange", this.g));
            uO(this)
        }
    };

    function wO(a) {
        return a.g !== null ? a.i + a.j() - a.g : a.i
    }
    var yO = class {
        constructor(a) {
            this.win = a;
            this.j = xO(this.win);
            this.i = 0;
            this.g = null
        }
        start() {
            this.g === null && (this.g = this.j())
        }
    };

    function xO(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function zO(a) {
        a = new AO(a);
        a.K();
        return a
    }

    function BO(a) {
        const b = rq(a.win, 1E3, () => void a.handleEvent());
        a.win.addEventListener("scroll", () => void b())
    }

    function CO(a) {
        const b = DO(a.win),
            c = () => {
                const d = DO(a.win),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.F = !0, a.win.removeEventListener("resize", c)
            };
        a.win.addEventListener("resize", c)
    }

    function EO(a) {
        a.l = !a.g.R;
        Zp(a.g, !1, () => {
            a.win.setTimeout(() => {
                a.l = !0
            }, 100)
        })
    }

    function FO(a) {
        Yp(a.g, !0, () => void a.j.start());
        Yp(a.g, !1, () => {
            var b = a.j;
            b.g !== null && (b.i += b.j() - b.g);
            b.g = null
        });
        a.G.start()
    }

    function GO(a) {
        var b = a.win.scrollY;
        var c = P(a.win);
        b = {
            pe: Math.floor(b / 100),
            od: Math.floor((b + c) / 100),
            hi: a.win.performance.now()
        };
        if (b.pe < 0 || b.od < 0 || b.pe > 1E3 || b.od > 1E3) a.B = !0, a.i = null;
        else {
            if (a.i) {
                c = a.i;
                var d = new JD(c.pe, c.od),
                    e = new JD(b.pe, b.od);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new JD(f, d) : null)
                    for (c = b.hi - c.hi, d = f.start; d <= f.end; d++) a.C[d] = (a.C[d] ? ? 0) + c
            }
            a.i = a.A.R ? b : null
        }
    }
    var AO = class {
        constructor(a) {
            this.win = a;
            this.C = [];
            a = this.win;
            var b = new tO(a);
            b.K();
            b = Vp(b.j);
            a = new vO(a);
            a.K();
            this.A = this.g = Up(b, Vp(a.j));
            this.j = new yO(this.win);
            this.G = new yO(this.win);
            this.H = new rO((new rO(new lO)).g, 0);
            this.F = this.l = this.B = !1;
            this.i = null
        }
        K() {
            BO(this);
            CO(this);
            EO(this);
            FO(this);
            this.A.listen(() => void GO(this));
            q.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.A.R && GO(this)
        }
    };

    function DO(a) {
        return new bd(lp(a), P(a))
    };

    function HO(a, {
        Na: b
    }) {
        a = new IO(a, b);
        if (!a.Na && U(Pt)) {
            b = a.win;
            var c = JO(KO(a));
            (new iO(b, b.document.baseURI, c)).K()
        }
        LO(a)
    }

    function LO(a) {
        if (U(Qt)) {
            var b = zO(a.win);
            Qo(new SF(a.win), MO(() => {
                var c = KO(a),
                    d = new tm,
                    e = nO(b.H, b.C);
                if (e.g == null) throw cr(e, "PVDC: ").i;
                var f = new sm;
                f = Ki(f, 2, 5E3);
                f = Ki(f, 1, 100);
                e = e.getValue();
                e = Oi(f, 3, e);
                f = DO(b.win);
                var g = new rm;
                g = Ki(g, 1, f.width);
                f = Ki(g, 2, f.height);
                e = z(e, 4, f);
                f = new rm;
                f = Ki(f, 1, pp(b.win).scrollWidth);
                f = Ki(f, 2, pp(b.win).scrollHeight);
                e = z(e, 5, f);
                e = H(e, 6, b.l);
                f = Math.round(wO(b.G) / 1E3);
                e = Ki(e, 8, f);
                f = Math.round(wO(b.j) / 1E3);
                e = Ki(e, 9, f);
                b.B && oi(e, 7, sg, 1, Ci);
                b.F && oi(e, 7, sg, 2, Ci);
                d = A(d, 2,
                    um, e);
                c(d)
            }))
        }
    }

    function KO(a) {
        if (!a.O) {
            const b = O(aG);
            a.O = c => {
                hG(b, c)
            }
        }
        return a.O
    }
    var IO = class {
        constructor(a, b) {
            this.win = a;
            this.Na = b;
            this.O = null
        }
    };

    function JO(a) {
        return b => {
            var c = new tm;
            b = A(c, 1, um, b);
            return void a(b)
        }
    }

    function hO() {
        return a => {
            X.ba(1243, a, void 0, NO("LCC"))
        }
    }

    function MO(a) {
        return () => void X.wb(1243, a, NO("PVC"))
    }

    function NO(a) {
        return b => {
            b.errSrc = a
        }
    };
    var PO = a => {
        const b = a.D;
        b.google_ad_output == null && (b.google_ad_output = "html");
        if (b.google_ad_client != null) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), c.substring(0, 3) != "ca-" && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        b.google_ad_slot != null && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!pj.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = OO(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = OO(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = OO(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = OO(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = OO(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = OO(a, b.google_color_line, c))
    };

    function OO(a, b, c) {
        a.i |= 2;
        return b[c % b.length]
    };
    const QO = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const RO = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        SO = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        TO = {
            Kd: a => a.listener,
            Hc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Qb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        UO = {
            Kd: a => a.listener,
            Hc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Qb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function VO(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Sf: b.__gppReturn.callId
        }
    }

    function WO(a, b) {
        if (!a) return !1;
        const c = VL(a.split("~")[0]),
            d = QL(a),
            e = Xh(c, 3, wg, x());
        for (let uj = 0; uj < e.length; ++uj) {
            const Ww = e[uj];
            if (!b.includes(Ww)) continue;
            const wb = d[uj];
            switch (Ww) {
                case 7:
                    if (wb.length === 0) throw Error("Cannot decode empty USNat section string.");
                    const Jg = wb.split(".");
                    if (Jg.length > 2) throw Error(`Expected at most 2 segments but got ${Jg.length} when decoding ${wb}.`);
                    var f = void 0,
                        g = void 0,
                        h = void 0,
                        k = void 0,
                        l = void 0,
                        m = void 0,
                        n = void 0,
                        p = void 0,
                        r = void 0,
                        w = void 0,
                        D = void 0,
                        C = void 0,
                        I = void 0,
                        N = void 0,
                        E = void 0,
                        ca = void 0,
                        V = void 0,
                        Ga = void 0,
                        db = void 0,
                        Ub = void 0,
                        na = void 0,
                        Fb = void 0,
                        Oc = void 0,
                        Pc = void 0,
                        le = void 0,
                        ja = void 0,
                        md = void 0,
                        vj = void 0,
                        wj = void 0,
                        xj = void 0,
                        yj = Jg[0];
                    if (yj.length === 0) throw Error("Cannot decode empty core segment string.");
                    let zj = UL(yj, AM);
                    const Dn = SL(zj.slice(0, 6));
                    zj = zj.slice(6);
                    if (Dn !== 1) throw Error(`Unable to decode unsupported USNat Section specification version ${Dn} - only version 1 is supported.`);
                    let En = 0;
                    const pa = [];
                    for (let ka = 0; ka < zM.length; ka++) {
                        const aa =
                            zM[ka];
                        pa.push(SL(zj.slice(En, En + aa)));
                        En += aa
                    }
                    var Fn = new vM;
                    xj = Ki(Fn, 1, Dn);
                    var Gn = pa.shift();
                    wj = J(xj, 2, Gn);
                    var Hn = pa.shift();
                    vj = J(wj, 3, Hn);
                    var In = pa.shift();
                    md = J(vj, 4, In);
                    var Jn = pa.shift();
                    ja = J(md, 5, Jn);
                    var Kn = pa.shift();
                    le = J(ja, 6, Kn);
                    var Ln = pa.shift();
                    Pc = J(le, 7, Ln);
                    var Mn = pa.shift();
                    Oc = J(Pc, 8, Mn);
                    var Nn = pa.shift();
                    Fb = J(Oc, 9, Nn);
                    var On = pa.shift();
                    na = J(Fb, 10, On);
                    var Pn = new uM,
                        Qn = pa.shift();
                    Ub = J(Pn, 1, Qn);
                    var Kg = pa.shift();
                    db = J(Ub, 2, Kg);
                    var Rn = pa.shift();
                    Ga = J(db, 3, Rn);
                    var Aj = pa.shift();
                    V = J(Ga, 4, Aj);
                    var Sn = pa.shift();
                    ca = J(V, 5, Sn);
                    var Lg = pa.shift();
                    E = J(ca, 6, Lg);
                    var Tn = pa.shift();
                    N = J(E, 7, Tn);
                    var Un = pa.shift();
                    I = J(N, 8, Un);
                    var Vn = pa.shift();
                    C = J(I, 9, Vn);
                    var mb = pa.shift();
                    D = J(C, 10, mb);
                    var Wn = pa.shift();
                    w = J(D, 11, Wn);
                    var Xn = pa.shift();
                    r = J(w, 12, Xn);
                    p = z(na, 11, r);
                    var Mg = new tM,
                        Bj = pa.shift();
                    n = J(Mg, 1, Bj);
                    var Cj = pa.shift();
                    m = J(n, 2, Cj);
                    l = z(p, 12, m);
                    var Dj = pa.shift();
                    k = J(l, 13, Dj);
                    var Ej = pa.shift();
                    h = J(k, 14, Ej);
                    var Fj = pa.shift();
                    g = J(h, 15, Fj);
                    var tc = pa.shift();
                    const Xw = f = J(g, 16, tc);
                    if (Jg.length === 1) var Qc = xM(Xw);
                    else {
                        var $b = xM(Xw),
                            xb = void 0,
                            Gj = void 0,
                            me = void 0,
                            gf = Jg[1];
                        if (gf.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ka = UL(gf, 3),
                            aa = SL(ka.slice(0, 2));
                        if (aa < 0 || aa > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${aa}.`);
                        me = aa + 1;
                        const ne = SL(ka.charAt(2));
                        var uc = new wM;
                        Gj = J(uc, 2, me);
                        xb = H(Gj, 1, !!ne);
                        Qc = z($b, 2, xb)
                    }
                    const Yn = y(Qc, vM, 1);
                    if (Ai(Yn, 8) === 1 || Ai(Yn, 9) === 1 || Ai(Yn, 10) === 1) return !0;
                    break;
                case 8:
                    if (wb.length === 0) throw Error("Cannot decode empty USCA section string.");
                    const Ng = wb.split(".");
                    if (Ng.length > 2) throw Error(`Expected at most 1 sub-section but got ${Ng.length-1} when decoding ${wb}.`);
                    var Kb = void 0,
                        vc = void 0,
                        Rc = void 0,
                        cb = void 0,
                        Lb = void 0,
                        Og = void 0,
                        Hj = void 0,
                        Pg = void 0,
                        Sc = void 0,
                        Qg = void 0,
                        hf = void 0,
                        jf = void 0,
                        Id = void 0,
                        Rg = void 0,
                        Sg = void 0,
                        Yw = void 0,
                        Zw = void 0,
                        $w = void 0,
                        ax = void 0,
                        bx = void 0,
                        cx = void 0,
                        dx = void 0,
                        ex = void 0,
                        fx = Ng[0];
                    if (fx.length === 0) throw Error("Cannot decode empty core segment string.");
                    let Ij = UL(fx, dM);
                    const Zn = SL(Ij.slice(0, 6));
                    Ij = Ij.slice(6);
                    if (Zn !== 1) throw Error(`Unable to decode unsupported USCA Section specification version ${Zn} - only version 1 is supported.`);
                    let $n = 0;
                    const za = [];
                    for (let ka = 0; ka < cM.length; ka++) {
                        const aa = cM[ka];
                        za.push(SL(Ij.slice($n, $n + aa)));
                        $n += aa
                    }
                    var MS = new ZL;
                    ex = Ki(MS, 1, Zn);
                    var NS = za.shift();
                    dx = J(ex, 2, NS);
                    var OS = za.shift();
                    cx = J(dx, 3, OS);
                    var PS = za.shift();
                    bx = J(cx, 4, PS);
                    var QS = za.shift();
                    ax = J(bx, 5, QS);
                    var RS = za.shift();
                    $w = J(ax, 6, RS);
                    var SS = new YL,
                        TS = za.shift();
                    Zw = J(SS, 1, TS);
                    var US = za.shift();
                    Yw = J(Zw, 2, US);
                    var VS =
                        za.shift();
                    Sg = J(Yw, 3, VS);
                    var WS = za.shift();
                    Rg = J(Sg, 4, WS);
                    var XS = za.shift();
                    Id = J(Rg, 5, XS);
                    var YS = za.shift();
                    jf = J(Id, 6, YS);
                    var ZS = za.shift();
                    hf = J(jf, 7, ZS);
                    var $S = za.shift();
                    Qg = J(hf, 8, $S);
                    var aT = za.shift();
                    Sc = J(Qg, 9, aT);
                    Pg = z($w, 7, Sc);
                    var bT = new XL,
                        cT = za.shift();
                    Hj = J(bT, 1, cT);
                    var dT = za.shift();
                    Og = J(Hj, 2, dT);
                    Lb = z(Pg, 8, Og);
                    var eT = za.shift();
                    cb = J(Lb, 9, eT);
                    var fT = za.shift();
                    Rc = J(cb, 10, fT);
                    var gT = za.shift();
                    vc = J(Rc, 11, gT);
                    var hT = za.shift();
                    const gx = Kb = J(vc, 12, hT);
                    if (Ng.length === 1) var hx = aM(gx);
                    else {
                        var iT =
                            aM(gx),
                            ix = void 0,
                            jx = void 0,
                            kx = void 0,
                            lx = Ng[1];
                        if (lx.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ka = UL(lx, 3),
                            aa = SL(ka.slice(0, 2));
                        if (aa < 0 || aa > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${aa}.`);
                        kx = aa + 1;
                        const ne = SL(ka.charAt(2));
                        var jT = new $L;
                        jx = J(jT, 2, kx);
                        ix = H(jx, 1, !!ne);
                        hx = z(iT, 2, ix)
                    }
                    const mx = y(hx, ZL, 1);
                    if (Ai(mx, 5) === 1 || Ai(mx, 6) === 1) return !0;
                    break;
                case 9:
                    if (wb.length === 0) throw Error("Cannot decode empty USVA section string.");
                    let Jj = UL(wb, EM);
                    const ao = SL(Jj.slice(0, 6));
                    Jj = Jj.slice(6);
                    if (ao !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${ao} - only version 1 is supported.`);
                    let bo = 0;
                    const Oa = [];
                    for (let ka = 0; ka < DM.length; ka++) {
                        const aa = DM[ka];
                        Oa.push(SL(Jj.slice(bo, bo + aa)));
                        bo += aa
                    }
                    var kT = ao,
                        lT = new CM,
                        mT = Ki(lT, 1, kT),
                        nT = Oa.shift(),
                        oT = J(mT, 2, nT),
                        pT = Oa.shift(),
                        qT = J(oT, 3, pT),
                        rT = Oa.shift(),
                        sT = J(qT, 4, rT),
                        tT = Oa.shift(),
                        uT = J(sT, 5, tT),
                        vT = Oa.shift();
                    var wT = J(uT, 6, vT);
                    var xT = new BM,
                        yT = Oa.shift(),
                        zT = J(xT, 1, yT),
                        AT = Oa.shift(),
                        BT = J(zT, 2, AT),
                        CT = Oa.shift(),
                        DT = J(BT, 3, CT),
                        ET = Oa.shift(),
                        FT = J(DT, 4, ET),
                        GT = Oa.shift(),
                        HT = J(FT, 5, GT),
                        IT = Oa.shift(),
                        JT = J(HT, 6, IT),
                        KT = Oa.shift(),
                        LT = J(JT, 7, KT),
                        MT = Oa.shift();
                    var NT = J(LT, 8, MT);
                    var OT = z(wT, 7, NT),
                        PT = Oa.shift(),
                        QT = J(OT, 8, PT),
                        RT = Oa.shift(),
                        ST = J(QT, 9, RT),
                        TT = Oa.shift(),
                        UT = J(ST, 10, TT),
                        VT = Oa.shift(),
                        nx = J(UT, 11, VT);
                    if (Ai(nx, 5) === 1 || Ai(nx, 6) === 1) return !0;
                    break;
                case 10:
                    if (wb.length === 0) throw Error("Cannot decode empty USCO section string.");
                    const Tg = wb.split(".");
                    if (Tg.length > 2) throw Error(`Expected at most 2 segments but got ${Tg.length} when decoding ${wb}.`);
                    var WT = void 0,
                        ox = void 0,
                        px = void 0,
                        qx = void 0,
                        rx = void 0,
                        sx = void 0,
                        tx = void 0,
                        ux = void 0,
                        vx = void 0,
                        wx = void 0,
                        xx = void 0,
                        yx = void 0,
                        zx = void 0,
                        Ax = void 0,
                        Bx = void 0,
                        Cx = void 0,
                        Dx = void 0,
                        Ex = void 0,
                        Fx = Tg[0];
                    if (Fx.length === 0) throw Error("Cannot decode empty core segment string.");
                    let Kj = UL(Fx, kM);
                    const co = SL(Kj.slice(0, 6));
                    Kj = Kj.slice(6);
                    if (co !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${co} - only version 1 is supported.`);
                    let eo = 0;
                    const $a = [];
                    for (let ka = 0; ka < jM.length; ka++) {
                        const aa =
                            jM[ka];
                        $a.push(SL(Kj.slice(eo, eo + aa)));
                        eo += aa
                    }
                    var XT = new fM;
                    Ex = Ki(XT, 1, co);
                    var YT = $a.shift();
                    Dx = J(Ex, 2, YT);
                    var ZT = $a.shift();
                    Cx = J(Dx, 3, ZT);
                    var $T = $a.shift();
                    Bx = J(Cx, 4, $T);
                    var aU = $a.shift();
                    Ax = J(Bx, 5, aU);
                    var bU = $a.shift();
                    zx = J(Ax, 6, bU);
                    var cU = new eM,
                        dU = $a.shift();
                    yx = J(cU, 1, dU);
                    var eU = $a.shift();
                    xx = J(yx, 2, eU);
                    var fU = $a.shift();
                    wx = J(xx, 3, fU);
                    var gU = $a.shift();
                    vx = J(wx, 4, gU);
                    var hU = $a.shift();
                    ux = J(vx, 5, hU);
                    var iU = $a.shift();
                    tx = J(ux, 6, iU);
                    var jU = $a.shift();
                    sx = J(tx, 7, jU);
                    rx = z(zx, 7, sx);
                    var kU = $a.shift();
                    qx = J(rx, 8, kU);
                    var lU = $a.shift();
                    px = J(qx, 9, lU);
                    var mU = $a.shift();
                    ox = J(px, 10, mU);
                    var nU = $a.shift();
                    const Gx = WT = J(ox, 11, nU);
                    if (Tg.length === 1) var Hx = hM(Gx);
                    else {
                        var oU = hM(Gx),
                            Ix = void 0,
                            Jx = void 0,
                            Kx = void 0,
                            Lx = Tg[1];
                        if (Lx.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ka = UL(Lx, 3),
                            aa = SL(ka.slice(0, 2));
                        if (aa < 0 || aa > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${aa}.`);
                        Kx = aa + 1;
                        const ne = SL(ka.charAt(2));
                        var pU = new gM;
                        Jx = J(pU, 2, Kx);
                        Ix = H(Jx, 1, !!ne);
                        Hx = z(oU, 2,
                            Ix)
                    }
                    const Mx = y(Hx, fM, 1);
                    if (Ai(Mx, 5) === 1 || Ai(Mx, 6) === 1) return !0;
                    break;
                case 12:
                    if (wb.length === 0) throw Error("Cannot decode empty usct section string.");
                    const Ug = wb.split(".");
                    if (Ug.length > 2) throw Error(`Expected at most 2 segments but got ${Ug.length} when decoding ${wb}.`);
                    var qU = void 0,
                        Nx = void 0,
                        Ox = void 0,
                        Px = void 0,
                        Qx = void 0,
                        Rx = void 0,
                        Sx = void 0,
                        Tx = void 0,
                        Ux = void 0,
                        Vx = void 0,
                        Wx = void 0,
                        Xx = void 0,
                        Yx = void 0,
                        Zx = void 0,
                        $x = void 0,
                        ay = void 0,
                        by = void 0,
                        cy = void 0,
                        dy = void 0,
                        ey = void 0,
                        fy = void 0,
                        gy = void 0,
                        hy = Ug[0];
                    if (hy.length === 0) throw Error("Cannot decode empty core segment string.");
                    let Lj = UL(hy, sM);
                    const fo = SL(Lj.slice(0, 6));
                    Lj = Lj.slice(6);
                    if (fo !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${fo} - only version 1 is supported.`);
                    let go = 0;
                    const Ca = [];
                    for (let ka = 0; ka < rM.length; ka++) {
                        const aa = rM[ka];
                        Ca.push(SL(Lj.slice(go, go + aa)));
                        go += aa
                    }
                    var rU = new nM;
                    gy = Ki(rU, 1, fo);
                    var sU = Ca.shift();
                    fy = J(gy, 2, sU);
                    var tU = Ca.shift();
                    ey = J(fy, 3, tU);
                    var uU = Ca.shift();
                    dy = J(ey, 4, uU);
                    var vU = Ca.shift();
                    cy = J(dy, 5, vU);
                    var wU = Ca.shift();
                    by = J(cy, 6, wU);
                    var xU = new mM,
                        yU = Ca.shift();
                    ay = J(xU, 1, yU);
                    var zU = Ca.shift();
                    $x = J(ay, 2, zU);
                    var AU = Ca.shift();
                    Zx = J($x, 3, AU);
                    var BU = Ca.shift();
                    Yx = J(Zx, 4, BU);
                    var CU = Ca.shift();
                    Xx = J(Yx, 5, CU);
                    var DU = Ca.shift();
                    Wx = J(Xx, 6, DU);
                    var EU = Ca.shift();
                    Vx = J(Wx, 7, EU);
                    var FU = Ca.shift();
                    Ux = J(Vx, 8, FU);
                    Tx = z(by, 7, Ux);
                    var GU = new lM,
                        HU = Ca.shift();
                    Sx = J(GU, 1, HU);
                    var IU = Ca.shift();
                    Rx = J(Sx, 2, IU);
                    var JU = Ca.shift();
                    Qx = J(Rx, 3, JU);
                    Px = z(Tx, 8, Qx);
                    var KU = Ca.shift();
                    Ox = J(Px, 9, KU);
                    var LU = Ca.shift();
                    Nx = J(Ox,
                        10, LU);
                    var MU = Ca.shift();
                    const iy = qU = J(Nx, 11, MU);
                    if (Ug.length === 1) var jy = pM(iy);
                    else {
                        var NU = pM(iy),
                            ky = void 0,
                            ly = void 0,
                            my = void 0,
                            ny = Ug[1];
                        if (ny.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ka = UL(ny, 3),
                            aa = SL(ka.slice(0, 2));
                        if (aa < 0 || aa > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${aa}.`);
                        my = aa + 1;
                        const ne = SL(ka.charAt(2));
                        var OU = new oM;
                        ly = J(OU, 2, my);
                        ky = H(ly, 1, !!ne);
                        jy = z(NU, 2, ky)
                    }
                    const oy = y(jy, nM, 1);
                    if (Ai(oy, 5) === 1 || Ai(oy, 6) === 1) return !0
            }
        }
        return !1
    }
    var $O = class extends Q {
        constructor(a) {
            ({
                timeoutMs: c,
                cmpInteractionEventReporter: b
            } = {});
            var b, c;
            super();
            this.caller = new BG(a, "__gppLocator", d => typeof d.__gpp === "function", VO);
            this.caller.B.set("addEventListener", RO);
            this.caller.A.set("addEventListener", TO);
            this.caller.B.set("removeEventListener", SO);
            this.caller.A.set("removeEventListener", UO);
            this.timeoutMs = c ? ? 500;
            this.cmpInteractionEventReporter = b
        }
        i() {
            this.caller.dispose();
            super.i()
        }
        addEventListener(a) {
            const b = ub(() => {
                    a(XO, !0)
                }),
                c = this.timeoutMs ===
                -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            AG(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (d.pingData ? .gppVersion === void 0 || d.pingData.gppVersion === "1" || d.pingData.gppVersion === "1.0") {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) ? f = d : (this.removeEventListener(d.listenerId), f = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                        a(f, e);
                        this.cmpInteractionEventReporter ? .g()
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(YO, !0);
                            return
                        }
                        a(ZO, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            AG(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const ZO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        XO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        YO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function aP(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function bP(a, b) {
        if (b.internalErrorState) Ni(a, 11, b.gppString);
        else if (aP(b.applicableSections)) {
            var c = ei(a, 10, b.applicableSections, zg);
            Ii(c, 12, !1)
        } else {
            c = !1;
            try {
                c = WO(b.gppString, b.applicableSections)
            } catch (d) {
                X.ba(1182, d, void 0, void 0)
            }
            a = ei(a, 10, b.applicableSections, zg);
            b = Ni(a, 11, b.gppString);
            Ii(b, 12, c)
        }
    }

    function cP(a, b) {
        a = new $O(a);
        if (!yG(a.caller)) return Promise.resolve(null);
        const c = xF(),
            d = CF(c, 35);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = CF(c, 36, []);
            g.push(f);
            DF(c, 36, g)
        });
        d || d === null || (DF(c, 35, null), a.addEventListener(f => {
            if (f.pingData.signalStatus === "ready" || aP(f.pingData.applicableSections)) {
                f = f.pingData;
                DF(c, 35, f);
                U(Tu) || bP(b, f);
                for (const g of CF(c, 36, [])) g.resolve(f);
                DF(c, 36, [])
            }
        }));
        return e
    };

    function dP(a, b, c) {
        c = GL(a, LG(b, {
            idpcApplies: c
        }));
        c = Ni(c, 2, b.tcString);
        c = Ni(c, 4, b.addtlConsent || "");
        c = Qh(c, 7, tg(b.internalErrorState));
        var d = !OG(b, ["3", "4"], 0);
        c = Ii(c, 9, d);
        d = !OG(b, ["2", "7", "9", "10"], 3);
        Ii(c, 8, d);
        b.gdprApplies != null && Ii(a, 3, b.gdprApplies)
    }

    function eP(a, b, c) {
        a = new UG(a, {
            timeoutMs: -1,
            Si: !0
        });
        if (!QG(a)) return Promise.resolve(null);
        const d = xF(),
            e = CF(d, 24);
        if (e) return Promise.resolve(e);
        const f = new Promise(g => {
            g = {
                resolve: g
            };
            const h = CF(d, 25, []);
            h.push(g);
            DF(d, 25, h)
        });
        e || e === null || (DF(d, 24, null), a.addEventListener(g => {
            if (KG(g)) {
                DF(d, 24, g);
                U(Tu) || dP(b, g, c);
                for (const h of CF(d, 25, [])) h.resolve(g);
                DF(d, 25, [])
            } else DF(d, 24, null)
        }));
        return f
    };
    const fP = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.Qa({
                    lc: c ? ? void 0,
                    Sg: d ? void 0 : 2
                })
            })
        },
        gP = {
            Kd: a => a.Qa,
            Hc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Qb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    lc: b.returnValue ? ? void 0,
                    Sg: b.success ? void 0 : 2
                })
            }
        };

    function hP(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Sf: b.__uspapiReturn.callId
        }
    }

    function iP(a, b) {
        let c = {};
        if (yG(a.caller)) {
            var d = ub(() => {
                b(c)
            });
            AG(a.caller, "getDataWithCallback", {
                Qa: e => {
                    e.Sg || (c = e.lc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var jP = class extends Q {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new BG(a, "__uspapiLocator", b => typeof b.__uspapi === "function", hP);
            this.caller.B.set("getDataWithCallback", fP);
            this.caller.A.set("getDataWithCallback", gP)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };

    function kP(a) {
        const b = new jP(a);
        return new Promise(c => {
            iP(b, d => {
                d && typeof d.uspString === "string" ? c(d.uspString) : c(null)
            })
        })
    }

    function lP(a, b, c) {
        var d = c.fi,
            e = c.uspString;
        c = c.bh;
        d && dP(a, d, b);
        e && (b = Ni(a, 1, e), e = e.toUpperCase(), e.length == 4 && (e.indexOf("-") == -1 || e.substring(1) === "---") && e[0] >= "1" && e[0] <= "9" && OL.hasOwnProperty(e[1]) && OL.hasOwnProperty(e[2]) && OL.hasOwnProperty(e[3]) ? (d = new NL, d = Ki(d, 1, parseInt(e[0], 10)), d = J(d, 2, OL[e[1]]), d = J(d, 3, OL[e[2]]), e = J(d, 4, OL[e[3]])) : e = null, e = e ? .Mj() === 2, Ii(b, 13, e));
        c && bP(a, c)
    }
    async function mP(a, {
        Na: b,
        ak: c
    }) {
        var d = !!b && !nN();
        if (U(Tu)) {
            const [f, g, h] = await Promise.all([eP(a.pubWin, void 0, d), kP(a.pubWin), cP(a.pubWin)]);
            d = GL(new HL, !d);
            c = Ii(d, 14, c && navigator.globalPrivacyControl);
            a.g = c;
            lP(a.g, b ? ? !1, {
                fi: f,
                uspString: g,
                bh: h
            })
        } else {
            var e = GL(new HL, !d);
            c = Ii(e, 14, c && navigator.globalPrivacyControl);
            a.g = c;
            c = [eP(a.pubWin, a.g, d), kP(a.pubWin), cP(a.pubWin, a.g)];
            c = await Promise.all(c);
            lP(a.g, b ? ? !1, {
                fi: c[0],
                uspString: c[1],
                bh: c[2]
            })
        }
    };
    var nP = (a, b = !1) => {
        try {
            return b ? (new bd(a.innerWidth, a.innerHeight)).round() : Md(a || window).round()
        } catch (c) {
            return new bd(-12245933, -12245933)
        }
    };

    function oP(a = q) {
        a = a.devicePixelRatio;
        return typeof a === "number" ? +a.toFixed(3) : null
    }

    function pP(a, b = q) {
        a = a.scrollingElement || (a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return new ad(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function qP(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function rP(a, b) {
        var c = X,
            d;
        var e;
        d = (e = (e = gk()) && (d = e.initialLayoutRect) && typeof d.top === "number" && typeof d.left === "number" && typeof d.width === "number" && typeof d.height === "number" ? new ck(d.left, d.top, d.width, d.height) : null) ? new ad(e.left, e.top) : (d = jk()) && Ba(d.rootBounds) ? new ad(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new ad(0, 0),
                g = Ld(b);
            var h = g ? g.defaultView : window;
            if (Dd(h, "parent")) {
                do {
                    if (h == a) var k = vk(b);
                    else {
                        var l = uk(b);
                        k = new ad(l.left, l.top)
                    }
                    g = k;
                    f.x += g.x;
                    f.y += g.y
                } while (h && h != a && h != h.parent && (b = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return c.ba(888, m), new ad(-12245933, -12245933)
        }
    };

    function sP(a, b) {
        return Qj(a.win) ? !!b.g() : !1
    }

    function tP(a, b, c) {
        c ? (a = a.win, b = c.g() ? Sj(b, a) : null) : b = null;
        return b
    }

    function uP(a, b, c, d) {
        if (d) {
            var e = yi(c, 2) - Date.now() / 1E3;
            e = {
                Md: Math.max(e, 0),
                path: G(c, 3),
                domain: G(c, 4),
                je: !1
            };
            c = c.getValue();
            a = a.win;
            d.g() && Tj(b, c, e, a)
        }
    }

    function vP(a, b, c) {
        var d;
        (d = !c) || (d = a.win, d = !(c.g() && Sj(b, d)));
        if (!d)
            for (const f of wP(a.win.location.hostname)) {
                d = b;
                var e = a.win;
                c.g() && e.origin !== "null" && Mj(new tj(e.document), d, "/", f)
            }
    }
    var xP = class {
        constructor(a) {
            this.win = a
        }
    };

    function wP(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function yP(a, b, c) {
        var d = tP(a, "__gpi_opt_out", b);
        d && (d = Ni(Li(gj(d), 2, 2147483647), 3, "/"), c = Ni(d, 4, c), uP(a, "__gpi_opt_out", c, b))
    }

    function zP(a, b, c, d) {
        const e = qN(a, "gpi-uoo", (f, g) => {
            if (g.source === c) {
                g = Ni(Li(gj(f.userOptOut ? "1" : "0"), 2, 2147483647), 3, "/");
                g = Ni(g, 4, a.location.hostname);
                var h = new xP(a);
                uP(h, "__gpi_opt_out", g, b);
                if (f.userOptOut || f.clearAdsData) vP(h, "__gads", b), vP(h, "__gpi", b)
            }
        });
        d.push(e)
    };

    function AP(a) {
        return a.length ? a.join("~") : void 0
    };
    var BP = {
            Xl: "google_ads_preview",
            xm: "google_mc_lab",
            Nm: "google_anchor_debug",
            Mm: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            ln: "google_scr_debug",
            nn: "google_ia_debug_allow_onclick",
            Mn: "googleads",
            wi: "google_pedestal_debug",
            ho: "google_responsive_slot_preview",
            fo: "google_responsive_dummy_ad"
        },
        CP = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var DP = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function EP(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = FP(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function FP(a) {
        let b = "";
        ke(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function GP() {
        var a = q.location;
        let b = !1;
        ke(BP, c => {
            EP(a, c) && (b = !0)
        });
        return b
    }

    function HP(a, b) {
        switch (a) {
            case 1:
                return EP(b, "google_ia_debug");
            case 2:
                return EP(b, "google_bottom_anchor_debug");
            case 3:
                return EP(b, "google_anchor_debug") || EP(b, "googleads")
        }
    };

    function IP(a, b) {
        return pD({
            M: a,
            jk: 3E3,
            pk: a.innerWidth > jp ? 650 : 0,
            I: $y,
            aj: b
        })
    };

    function JP(a) {
        let b = 0;
        try {
            b |= kp(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function KP(a) {
        let b = 0;
        try {
            b |= kp(a), b |= mp(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function LP() {
        const a = {};
        vv(Xs) && (a.bust = vv(Xs));
        var b = xF();
        b = CF(b, 38, "");
        b !== "" && (a.sbust = b);
        return a
    };

    function MP(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function NP(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function OP(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function PP(a, b) {
        if (MP(b) == 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                Db(b, "prerenderingchange", d);
                a()
            };
            Cb(b, "prerenderingchange", d)
        }
    };
    var QP = a => {
        let b = 0;
        try {
            b |= kp(a);
            var c;
            if (!(c = !a.navigator)) {
                var d = a.navigator;
                c = "brave" in d && "isBrave" in d.brave || !1
            }
            b |= c || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            b |= mp(a, 2500, !0)
        } catch (e) {
            b |= 32
        }
        return b
    };
    const RP = "body div footer header html main section".split(" ");

    function SP(a, b, c = null, d = !1, e = !1, f = !1) {
        let g = kp(a);
        qD(a.navigator ? .userAgent) && (g |= 1048576);
        const h = a.innerWidth;
        h < 1200 && (g |= 65536);
        const k = a.innerHeight;
        k < 650 && (g |= 2097152);
        c && g === 0 && (c = c === 3 ? "left" : "right", (b = TP({
            M: a,
            dk: b,
            Ok: 1,
            position: c,
            V: h,
            W: k,
            Ib: new Set,
            minWidth: 120,
            minHeight: 500,
            yf: d,
            Rf: e,
            Qf: f
        })) ? ZA(a).sideRailPlasParam.set(c, `${b.width}x${b.height}_${String(c).charAt(0)}`) : g |= 16);
        return g
    }

    function UP(a) {
        a = ZA(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function VP(a, b) {
        return Vd(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function WP(a, b) {
        return Vd(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function XP(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function YP(a, b) {
        const {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function ZP(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function $P(a) {
        return `${a.position}-${ZP(a.V)}x${ZP(a.W)}-${ZP(a.scrollY+a.Tb)}Y`
    }

    function aQ(a) {
        return `f-${$P({position:a.position,Tb:a.Tb,scrollY:0,V:a.V,W:a.W})}`
    }

    function bQ(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function cQ(a, b, c) {
        const d = ZA(c.M).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.W),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.V);
                for (var k = c.V * .3; f <= g; f += 10) {
                    if (e > 0 && h < k) {
                        var l = aQ({
                            position: "left",
                            Tb: f,
                            V: c.V,
                            W: c.W
                        });
                        b.set(l, bQ(b.get(l), h))
                    }
                    if (h < c.V && e > c.V - k) {
                        l = aQ({
                            position: "right",
                            Tb: f,
                            V: c.V,
                            W: c.W
                        });
                        const m = c.V - e;
                        b.set(l, bQ(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function dQ(a, b) {
        const c = b.M,
            d = b.yf,
            e = b.Qf;
        var f = `f-${ZP(b.V)}x${ZP(b.W)}`;
        a.has(f) || (a.set(f, 0), f = XP(c), d || e ? (eQ(a, b, f.filter(g => YP(c, g))), fQ(c, f.filter(g => !YP(c, g)).concat(e ? Array.from(c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : eQ(a, b, f))
    }

    function eQ(a, b, c) {
        var d = b.Ib;
        const e = b.M;
        ZA(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c) VP(f, d) || cQ(f, a, b)
    }

    function gQ(a) {
        if (a.V < 1200 || a.W < 650) return null;
        var b = ZA(a.M).sideRailAvailableSpace;
        a.dk || dQ(b, {
            M: a.M,
            V: a.V,
            W: a.W,
            Ib: a.Ib,
            yf: a.yf,
            Qf: a.Qf
        });
        const c = [];
        var d = a.W * .9,
            e = tp(a.M),
            f = (a.W - d) / 2,
            g = f,
            h = d / 7;
        for (var k = 0; k < 8; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var p = a.position,
                    r = b,
                    w = {
                        M: a.M,
                        V: a.V,
                        W: a.W,
                        Ib: a.Ib,
                        Rf: a.Rf
                    };
                const N = aQ({
                        position: p,
                        Tb: n,
                        V: w.V,
                        W: w.W
                    }),
                    E = $P({
                        position: p,
                        Tb: n,
                        scrollY: e,
                        V: w.V,
                        W: w.W
                    });
                if (r.has(E)) {
                    n = bQ(r.get(N), r.get(E));
                    break a
                }
                const ca = p === "left" ? 20 : w.V - 20;
                let V = ca;p = w.V * .3 / 5 * (p === "left" ? 1 :
                    -1);
                for (let Ga = 0; Ga < 6; Ga++) {
                    var D = jD(w.M.document, {
                            x: Math.round(V),
                            y: Math.round(n)
                        }),
                        C = VP(D, w.Ib),
                        I = WP(D, w.M);
                    if (!C && I !== null) {
                        cQ(I, r, w);
                        r.delete(E);
                        break
                    }
                    C || (C = w, D.getAttribute("google-side-rail-overlap") === "true" ? C = !0 : D.getAttribute("google-side-rail-overlap") === "false" || C.Rf && !RP.includes(D.tagName.toLowerCase()) ? C = !1 : (I = D.offsetHeight >= C.W * .25, C = D.offsetWidth >= C.V * .9 && I));
                    if (C) r.set(E, Math.round(Math.abs(V - ca) + 20));
                    else if (V !== ca) V -= p, p /= 2;
                    else {
                        r.set(E, 0);
                        break
                    }
                    V += p
                }
                n = bQ(r.get(N), r.get(E))
            }
            m.call(l,
                n);
            g += h
        }
        b = a.Ok;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = m.length === 0 ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; n >= 0; n--) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = m.length === 0 ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: e,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) *
                        d),
                    offsetY: f + h[k] * d
                }, r = n.width >= g && n.height >= a, b === 0 && r) {
                m = n;
                break
            } else b === 1 && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    }

    function fQ(a, b) {
        const c = ZA(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    hQ(a);
                    for (const e of c.sideRailMutationCallbacks) e()
                }, 500)
            });
            for (const e of b) d.observe(e, {
                attributes: !0
            });
            c.g = d
        }
    }

    function hQ(a) {
        ({
            sideRailAvailableSpace: a
        } = ZA(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b) a.delete(c)
    }

    function TP(a) {
        if (a.Ca) return a.Ca.wb(1228, () => gQ(a)) || null;
        try {
            return gQ(a)
        } catch {}
        return null
    };
    const iQ = {
        [27]: 512,
        [26]: 128
    };
    var jQ = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return IP(a, c) === 0;
                case 3:
                case 4:
                    return SP(a, !1, c, !0, U(Kt), U(Zs)) === 0;
                case 8:
                    return QP(a) == 0;
                case 9:
                    return b = !(b.google_adtest === "on" || EP(a.location, "google_scr_debug")), !gI(a, b, d);
                case 30:
                    return XJ(a) == 0;
                case 26:
                    return KP(a) === 0;
                case 27:
                    return JP(a) === 0;
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        kQ = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return IP(a, c);
                case 3:
                case 4:
                    return SP(a, U(Lt), c, !1, U(Kt));
                case 8:
                    return QP(a);
                case 9:
                    return gI(a, !(b.google_adtest === "on" || EP(a.location, "google_scr_debug")), d);
                case 16:
                    return Gv(b, a) ? 0 : 8388608;
                case 30:
                    return XJ(a);
                case 26:
                    return KP(a);
                case 27:
                    return JP(a);
                default:
                    return 32
            }
        },
        lQ = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Gb(d)) return !1;
            a = fe(a);
            if (!a || !jQ(a, b, d, c)) return !1;
            b = ZA(a);
            if (qp(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        nQ = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && mQ(a) && b !== 16 && b !== 10 && b !== 11 && b !== 40 && b !== 41
        },
        oQ = a => {
            if (!a.hash) return null;
            let b = null;
            ke(BP, c => {
                !b && EP(a, c) && (b = CP[c])
            });
            return b
        },
        qQ = (a, b) => {
            const c = ZA(a).tagSpecificState[1] || null;
            c != null && c.debugCard == null && ke(DP, d => {
                !c.debugCardRequested && typeof d === "number" && HP(d, a.location) && (c.debugCardRequested = !0, pQ(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        sQ = (a, b, c) => {
            if (!b) return null;
            const d = ZA(b);
            let e = 0;
            ke(Hb, f => {
                const g = iQ[f];
                g && rQ(a, b, f, c) === 0 && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        tQ = (a, b, c) => {
            const d = [];
            ke(Hb, e => {
                const f = rQ(b, a, e, c);
                f !== 0 && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        uQ = a => {
            const b = [],
                c = {};
            ke(a, (d, e) => {
                if ((e = hp[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        vQ = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return typeof a === "boolean" ? a ? "1" : "0" : ""
        },
        rQ = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = ZA(b),
                g = qp(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            ke(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) ===
                    String(l) && (h = !0)
            });
            return h && oQ(b.location) !== c && (e |= 128, c == 2 || c == 1 || c == 3 || c == 4 || c == 8) ? e : e | kQ(b, a, c, d)
        },
        wQ = (a, b) => {
            if (a) {
                var c = ZA(a),
                    d = {};
                ke(b, (e, f) => {
                    (f = hp[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                ke(Hb, e => {
                    d[ip[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        xQ = (a, b, c) => {
            b = X.Ga(b, c);
            return MN(1, window, Uc(a, new Map(Object.entries(LP())))).then(b)
        },
        pQ = (a, b, c) => {
            c = X.Ga(212, c);
            MN(3, a, b).then(c)
        },
        yQ = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "reserved";
            a.className += " adsbygoogle-noablate";
            c.adsbygoogle ||
                (c.adsbygoogle = [], ge(c.document, Tc `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        zQ = a => {
            a = a.google_reactive_ad_format;
            return Gb(a) ? "" + a : null
        },
        mQ = a => !!zQ(a) || a.google_pgb_reactive != null,
        AQ = a => {
            a = zQ(a);
            return a == 26 || a == 27 || a == 30 || a == 16 || a == 40 || a == 41
        };

    function BQ(a) {
        return typeof a.google_reactive_sra_index === "number"
    }

    function CQ(a, b, c) {
        const d = b.M || b.pubWin,
            e = b.D;
        var f = tQ(d, e, c);
        e.google_reactive_plat = f;
        (f = uQ(a)) && (e.google_reactive_plaf = f);
        (f = vQ(a)) && (e.google_reactive_fba = f);
        (f = UP(d)) && (e.google_plas = f);
        DQ(a, e);
        f = oQ(b.pubWin.location);
        EQ(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        e.asro = U(yu);
        e.aihb = U(St);
        e.ailel = AP(wv(nu));
        e.aiael = AP(wv(Tt));
        e.aifxl = AP(wv(hu));
        e.aiixl = AP(wv(ju));
        U(ku) && (e.slmct = W(ou), e.samct = W(Wt));
        U(bu) || (e.aiict = !0, e.aicel = AP(wv($t)));
        U(wu) && (e.aipaq = !0);
        U(Bu) && (e.aigda = !0);
        W(Ut) && (e.aiapm = W(Ut));
        W(Vt) && (e.aiapmi = W(Vt));
        U(xu) && (e.aiombap = !0);
        e.fsapi = !0;
        f !== 8 && (c && cI(c) ? (f = fI(c, 86400, "__lsv__"), f ? .length && (f = Math.floor((Date.now() - Math.max(...f)) / 6E4), f >= 0 && (e.vmsli = f))) : e.vmsli = -1);
        f = fI(c, 600, "__lsa__");
        f ? .length && Math.floor((Date.now() - Math.max(...f)) / 6E4) <= W(Os) && (e.dap = 3);
        kk() || nP(b.pubWin.top);
        f = rN(b.pubWin, "rsrai", cz(429, (g, h) => FQ(b, d, e.google_ad_client, a, g, h, c)), cz(430, (g, h) => wp(b.pubWin, "431", $y, h)));
        b.j.push(f);
        ZA(d).wasReactiveTagRequestSent = !0;
        GQ(b, a, c)
    }

    function GQ(a, b, c) {
        const d = a.D,
            e = Ba(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = rN(a.pubWin, "apcnf", cz(353, (f, g) => {
            Uc(a.xa.Qe, new Map(Object.entries(LP())));
            var h = a.pubWin,
                k = d.google_ad_client;
            return Ke(g.origin) ? NN(h, k, e, f.config, c, 0, null) : !1
        }), cz(353, (f, g) => wp(a.pubWin, "353", $y, g)));
        a.j.push(b)
    }

    function FQ(a, b, c, d, e, f, g) {
        if (!Ke(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!NF(b, 1)) return !0;
        f && Yj(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = ZA(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const p = f[n],
                r = p.adFormat;
            l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (r === 9 && e) {
                    p.pubVars = Object.assign(p.pubVars || {}, HQ(d, p));
                    const w = new hI;
                    if (aI(w, p) && w.B(p)) {
                        m = w;
                        continue
                    }
                }
                h.push(p);
                k.push(r)
            }
        }
        h.length && xQ(a.xa.Ph,
            522, n => {
                IQ(h, b, n, d, g)
            });
        e && NN(b, c, d, e, g, Uc(a.xa.Qe, new Map(Object.entries(LP()))), m);
        return !0
    }

    function HQ(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        Ba(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function IQ(a, b, c, d, e) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
            const h = a[g],
                k = h.adFormat,
                l = h.adKey,
                m = c.configProcessorForAdFormat(k);
            k && m && l && (h.pubVars = HQ(d, h), delete h.google_reactive_sra_index, f.push(k), bz(466, () => m.verifyAndProcessConfig(b, h, e)))
        }
    }

    function DQ(a, b) {
        const c = [];
        let d = !1;
        ke(hp, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function EQ(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    Cd("script");
    var JQ = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function KQ(a, b) {
        if (!Gv(b, a)) return () => {};
        a = LQ(b, a);
        if (!a) return () => {};
        const c = JF();
        b = Jb(b);
        const d = {
            xb: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Za(c, d)
    }

    function LQ(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Lv.test(a.className);) a = a.parentElement;
        return a
    }

    function MQ(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const g = {},
                h = a.childNodes[f];
            var c = h.style,
                d = ["width", "height"];
            for (let k = 0; k < d.length; k++) {
                const l = "google_ad_" + d[k];
                if (!g.hasOwnProperty(l)) {
                    var e = ve(c[d[k]]);
                    e = e === null ? null : Math.round(e);
                    e != null && (g[l] = e)
                }
            }
            if (g.google_ad_width == b.google_ad_width && g.google_ad_height == b.google_ad_height) return h
        }
        return null
    }

    function NQ(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function OQ(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.g != c) {
            a.g = c;
            a = JF();
            for (const d of a)
                if (d.xb.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.xb.offsetWidth, bz(467, () => {
                    var e = d.xb,
                        f = d.D;
                    const g = MQ(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? `${f.gfwroh}px` : "", e.style.width = f.gfwrow ? `${f.gfwrow}px` : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = MQ(e, f);
                    !h && g && e.childNodes.length == 1 ? (NQ(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", yQ(e, f, b)) : h && g && h != g && (NQ(g, !1), NQ(h, !0))
                })
        }
    }
    var PQ = class extends Q {
        constructor() {
            super(...arguments);
            this.g = null
        }
        K(a) {
            const b = xF();
            if (!CF(b, 27, !1)) {
                DF(b, 27, !0);
                this.g = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    OQ(this, a)
                };
                Cb(a, "resize", c);
                Op(this, () => {
                    Db(a, "resize", c)
                })
            }
        }
    };
    var QQ = class {
        constructor(a, b) {
            this.M = a;
            this.xb = b;
            this.g = null;
            this.j = 0
        }
        i() {
            ++this.j >= 10 && q.clearInterval(this.g);
            var a = Jv(this.M, this.xb);
            Kv(this.M, this.xb, a);
            a = Fv(this.xb, this.M);
            a != null && a.x === 0 || q.clearInterval(this.g)
        }
    };

    function RQ(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function SQ(a, b) {
        b && !a.g && (b = b.split(":"), a.g = b.find(c => c.indexOf("ID=") === 0) || null, a.j = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null)
    }
    var TQ = class {
            constructor() {
                this.l = new Date(Date.now());
                this.j = this.g = null;
                this.i = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.i[3] = {
                    [71]: (...a) => {
                        var b = this.g;
                        var c = this.l,
                            d = Number(a[0]);
                        a = Number(a[1]);
                        b = b !== null ? pe(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                        return b
                    }
                };
                this.i[4] = {
                    [15]: () => {
                        var a = Number(this.j || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(a * 1E3), a = a.getFullYear() * 1E4 + (a.getMonth() + 1) * 100 + a.getDate());
                        return a
                    }
                }
            }
        },
        UQ;
    var VQ = class extends K {
        g() {
            return F(this, 10)
        }
    };
    var WQ = class extends K {
        g() {
            return Bi(this, 1, x())
        }
        i() {
            return G(this, 4)
        }
    };
    var XQ = class extends K {},
        YQ = [13, 14];
    let ZQ = void 0;

    function $Q() {
        qf(ZQ, tf);
        return ZQ
    }

    function aR(a) {
        qf(ZQ, wf);
        ZQ = a
    };

    function bR(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Eb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function cR(a = q) {
        return a.ggeac || (a.ggeac = {})
    };

    function dR(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function eR(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function fR(a = navigator) {
        try {
            return !!a.protectedAudience ? .queryFeatureSupport ? .("deprecatedRenderURLReplacements")
        } catch (b) {
            return !1
        }
    };

    function gR(a = je()) {
        return b => pe(`${b} + ${a}`) % 1E3
    };

    function hR(a, b) {
        a.g = To(14, b, () => {})
    }
    class iR {
        constructor() {
            this.g = () => {}
        }
    }

    function jR(a) {
        O(iR).g(a)
    };

    function kR(a = cR()) {
        Uo(O(Vo), a);
        lR(a);
        hR(O(iR), a);
        O(uv).i()
    }

    function lR(a) {
        const b = O(uv);
        b.j = (c, d) => To(5, a, () => !1)(c, d, 1);
        b.A = (c, d) => To(6, a, () => 0)(c, d, 1);
        b.C = (c, d) => To(7, a, () => "")(c, d, 1);
        b.g = (c, d) => To(8, a, () => [])(c, d, 1);
        b.l = (c, d) => To(17, a, () => [])(c, d, 1);
        b.i = () => {
            To(15, a, () => {})(1)
        }
    };

    function mR(a, b, c) {
        var d = {
            [0]: gR(Oe(b).toString())
        };
        if (c) {
            c = tP(new xP(b), "__gads", c) || "";
            UQ || (UQ = new TQ);
            b = UQ;
            SQ(b, c);
            jR(b.i);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? gR(e)(f) : void 0
        }
        d = Wo(a, d);
        $o.pa(1085, cG(O(aG), a, d))
    }

    function nR(a, b) {
        mR(20, a, b);
        mR(17, a, b)
    }

    function oR(a) {
        const b = O(Vo).g();
        a = RQ(a);
        return b.concat(a).join(",")
    }

    function pR(a) {
        const b = Mk();
        b && (a.debug_experiment_id = b)
    };
    var qR = class {
        constructor(a) {
            this.i = 0;
            this.g = this.L = null;
            this.H = 0;
            this.j = [];
            this.uc = this.B = "";
            this.A = this.G = null;
            this.F = !1;
            this.M = a.M;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.ra = a.ra;
            this.xa = a.xa;
            this.Ya = a.Ya;
            this.aa = a.aa;
            this.pageState = a.pageState
        }
    };

    function rR(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    var yf = {
        Mo: 0,
        Io: 1,
        Jo: 9,
        Fo: 2,
        Go: 3,
        Lo: 5,
        Ko: 7,
        Ho: 10
    };
    var sR = class extends K {},
        tR = Ti(sR),
        uR = [1, 3];
    const vR = Tc `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function wR(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.g(h).then(({
                    data: k
                }) => k)
            }
            const e = he("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Zb(vR).toString();
            const f = (new URL(vR.toString())).origin,
                g = JN({
                    destination: a,
                    Sa: e,
                    origin: f,
                    Ue: "goog:gRpYw:doubleclick"
                });
            g.g("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                h === "goog:topics:frame:handshake:ack" &&
                    c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function xR(a, b, c) {
        var d = X,
            e = U(ev);
        const {
            ed: f,
            dd: g
        } = yR(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(h => {
            let k = g;
            if (h instanceof Uint8Array) k || (k = !(f instanceof Uint8Array && jb(h, f)));
            else if (xf()(h)) k || (k = h !== f);
            else return d.ba(989, Error(JSON.stringify(h))), 7;
            if (k && c) try {
                var l = new sR;
                var m = Li(l, 2, Nk());
                h instanceof Uint8Array ? gi(m, 1, uR, $f(h, !1, !1)) : gi(m, 3, uR, tg(h));
                c.setItem("goog:cached:topics",
                    Qi(m))
            } catch {}
            return h
        }), b.getTopicsPromise = a);
        return f && !g ? Promise.resolve(f) : b.getTopicsPromise
    }

    function yR(a) {
        if (!a) return {
            ed: null,
            dd: !0
        };
        try {
            const l = a.getItem("goog:cached:topics");
            if (!l) return {
                ed: null,
                dd: !0
            };
            const m = tR(l);
            let n;
            const p = ji(m, uR);
            switch (p) {
                case 0:
                    n = null;
                    break;
                case 1:
                    a = m;
                    var b = Vh(m, uR, 1);
                    const w = a.X;
                    let D = w[v];
                    const C = Oh(w, D, b),
                        I = $f(C, !0, !!(D & 34));
                    I != null && I !== C && Rh(w, D, b, I);
                    var c = I;
                    var d = c == null ? of () : c;
                    b = Uint8Array;
                    nf(kf);
                    var e = d.g;
                    if (e == null || ff(e)) var f = e;
                    else {
                        if (typeof e === "string") {
                            cf.test(e) && (e = e.replace(cf, ef));
                            let N;
                            N = atob(e);
                            const E = new Uint8Array(N.length);
                            for (e =
                                0; e < N.length; e++) E[e] = N.charCodeAt(e);
                            var g = E
                        } else g = null;
                        f = g
                    }
                    var h = f;
                    var k = h == null ? h : d.g = h;
                    n = new b(k || 0);
                    break;
                case 3:
                    n = Ai(m, Vh(m, uR, 3));
                    break;
                default:
                    gd(p, void 0)
            }
            const r = yi(m, 2) + 6048E5 < Nk();
            return {
                ed: n,
                dd: r
            }
        } catch {
            return {
                ed: null,
                dd: !0
            }
        }
    };

    function zR(a) {
        return U(Yu) && a ? !!a.match(vv(Wu)) : !1
    }

    function AR(a, b) {
        if (!U(cv) && b.g()) {
            b = eR("shared-storage", a.document);
            const c = eR("browsing-topics", a.document);
            if (b || c) try {
                return wR(a)
            } catch (d) {
                X.ba(984, d, void 0, void 0)
            }
        }
        return null
    }
    async function BR(a, b, c, d, e, f) {
        if (eR("browsing-topics", b.document) && e && !U(bv) && !zR(f ? .label))
            if (CR(c, d)) {
                a.A = 1;
                const g = Nj(c, b);
                c = e.then(async h => {
                    await xR(h, b, g).then(k => {
                        a.A = k
                    })
                });
                U(dv) && (d = W(fv), d > 0 ? await Promise.race([c, Qe(d)]) : await c)
            } else a.A = 5
    }

    function CR(a, b) {
        return !b.google_restrict_data_processing && b.google_tag_for_under_age_of_consent !== 1 && b.google_tag_for_child_directed_treatment !== 1 && !!a.g() && !IF() && !F(a, 9) && !F(a, 13) && !F(a, 12) && (typeof b.google_privacy_treatments !== "string" || !b.google_privacy_treatments.split(",").includes("disablePersonalization")) && !F(a, 14)
    };
    var ER = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => DR(d));
        return rN(a, "adpnt", (e, f) => {
            if (sp(f, c.contentWindow)) {
                e = vp(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function DR(a) {
        setTimeout(() => {
            a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function FR(a, b, {
        Mh: c,
        Nh: d
    }) {
        return !Qj(a.g) || F(b, 8) || (c || !b.g()) && d ? !1 : !0
    }

    function GR(a, b, {
        Mh: c,
        Nh: d
    }) {
        if (!F(b, 8) && (!c && b.g() || !d)) return Sj("__eoi", a.g) ? ? void 0
    }
    var HR = class {
        constructor(a) {
            this.g = a
        }
    };

    function IR(a, b, c) {
        try {
            if (!Ke(c.origin) || !sp(c, a.g.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        typeof d === "string" && (e = a.ua[d]) && a.Ca.wb(168, () => {
            e.call(a, b, c)
        })
    }
    class JR extends Q {
        constructor(a, b) {
            var c = X,
                d = $y;
            super();
            this.j = a;
            this.g = b;
            this.Ca = c;
            this.I = d;
            this.ua = {};
            this.Ja = this.Ca.Ga(168, (e, f) => void IR(this, e, f));
            this.kb = this.Ca.Ga(169, (e, f) => wp(this.j, "ras::xsf", this.I, f));
            this.da = [];
            this.U(this.ua);
            this.da.push(qN(this.j, "sth", this.Ja, this.kb))
        }
        i() {
            for (const a of this.da) a();
            this.da.length = 0;
            super.i()
        }
    };
    var KR = class extends JR {};

    function LR(a, b, c = null) {
        return new MR(a, b, c)
    }
    var MR = class extends KR {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.B = O(aG);
            this.l = () => {};
            Cb(this.g, "load", this.l)
        }
        i() {
            Db(this.g, "load", this.l);
            super.i()
        }
        U(a) {
            a["adsense-labs"] = b => {
                if (b = vp(b).settings)
                    if (b = Si(ij, JSON.parse(b)), B(b, 1) != null) {
                        var c = b.X;
                        if (li(c, c[v], hj, 4, 3, !1, !0).length > 0) {
                            var d = c = mi(b, hj, 4, x(gg)),
                                e = this.B;
                            const h = new vm;
                            for (var f of d) switch (f.getVersion()) {
                                case 1:
                                    Ii(h, 1, !0);
                                    break;
                                case 2:
                                    Ii(h, 2, !0)
                            }
                            f = new wm;
                            f = A(f, 1, xm, h);
                            iG(e, f);
                            f = this.j;
                            e = this.A;
                            if (!CF(xF(), 37, !1)) {
                                f = new xP(f);
                                for (var g of c) switch (g.getVersion()) {
                                    case 1:
                                        uP(f,
                                            "__gads", g, e);
                                        break;
                                    case 2:
                                        uP(f, "__gpi", g, e)
                                }
                                DF(xF(), 37, !0)
                            }
                            Qh(b, 4)
                        }
                        if (g = y(b, hj, 5)) c = this.j, CF(xF(), 40, !1) || (c = new HR(c), f = yi(g, 2) - Date.now() / 1E3, f = {
                            Md: Math.max(f, 0),
                            path: G(g, 3),
                            domain: G(g, 4),
                            je: !1
                        }, Tj("__eoi", g.getValue(), f, c.g), DF(xF(), 40, !0));
                        Qh(b, 5);
                        g = this.j;
                        c = G(b, 1) || "";
                        if (KL({
                                win: g,
                                Na: $Q()
                            }).g != null) {
                            f = KL({
                                win: g,
                                Na: $Q()
                            });
                            f = f.g != null ? bR(f.getValue()) : {};
                            b !== null && (f[c] = Ri(b));
                            try {
                                g.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (h) {}
                        }
                    }
            }
        }
    };

    function NR(a) {
        a.A = a.B;
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.g.style.transition = "height 500ms";
        OR(a)
    }

    function PR(a, b) {
        a.g.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function OR(a) {
        const b = `rect(0px, ${a.g.width}px, ${a.A}px, 0px)`;
        a.g.style.clip = b;
        a.l.style.clip = b;
        a.g.setAttribute("height", a.A);
        a.g.style.height = a.A + "px";
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function QR(a, b) {
        b = ue(b.r_nh);
        a.B = b == null ? 0 : b;
        if (a.B <= 0) return "1";
        a.L = vk(a.F).y;
        a.H = tp(a.j);
        if (a.L + a.A < a.H) return "2";
        if (a.L > op(a.j) - a.j.innerHeight) return "3";
        b = a.H;
        a.g.setAttribute("height", a.B);
        a.g.style.height = a.B + "px";
        a.l.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.g.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.L, a.A);
        ok(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.g.width}px, ${b}px, 0px)`;
        ok(a.g, {
            clip: b
        });
        ok(a.l, {
            clip: b
        });
        return "0"
    }
    class RR extends KR {
        constructor(a, b) {
            super(a.M, b);
            this.l = a.aa;
            this.F = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Oa = this.jb = !1;
            this.na = this.H = this.B = 0;
            this.Vc = this.A / 5;
            this.L = vk(this.F).y;
            this.Db = yb(cz(651, () => {
                this.L = vk(this.F).y;
                var c = this.H;
                this.H = tp(this.j);
                this.A < this.B ? (c = this.H - c, c > 0 && (this.na += c, this.na >= this.Vc ? (NR(this), PR(this, this.B)) : (this.A = Math.min(this.B, this.A + c), PR(this, c), OR(this)))) :
                    Db(this.j, "scroll", this.P)
            }), this);
            this.P = () => {
                var c = this.Db;
                pj.requestAnimationFrame ? pj.requestAnimationFrame(c) : c()
            }
        }
        U(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = vp(b);
                this.jb || (this.jb = !0, b = QR(this, b), b === "0" && Cb(this.j, "scroll", this.P, zb), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0",
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Oa || (this.Oa = !0, NR(this), Db(this.j, "scroll", this.P))
            }
        }
        i() {
            this.P && Db(this.j, "scroll", this.P, zb);
            super.i()
        }
    };

    function SR(a) {
        const b = a.L.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.j.innerHeight) && !c
    }
    class TR extends Q {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.A = b;
            this.L = c;
            this.B = 0;
            this.l = SR(this);
            this.H = vb(this.F, this);
            this.g = cz(433, () => {
                var d = this.H;
                pj.requestAnimationFrame ? pj.requestAnimationFrame(d) : d()
            });
            Cb(this.j, "scroll", this.g, zb)
        }
        F() {
            const a = SR(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (sN(c, "ig", b, "*", 2), ++this.B >= 10 && this.g && Db(this.j, "scroll", this.g, zb))
            }
            this.l = a
        }
    };

    function UR(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        ok(a, "transition", b.join(","))
    }
    var VR = tb(function() {
        var a = Od(document, "DIV"),
            b = Hd ? "-webkit" : Gd ? "-moz" : Ed ? "-ms" : null;
        let c = "transition:opacity 1s linear;";
        b && (c += b + "-transition:opacity 1s linear;");
        b = Mc("div", {
            style: c
        });
        a.nodeType === 1 && fd(a);
        a.innerHTML = wc(b);
        return rk(a.firstChild, "transition") != ""
    });

    function WR(a, b, c) {
        a.i[b].indexOf(c) < 0 && (a.i[b] += c)
    }

    function YR(a, b) {
        a.g.indexOf(b) >= 0 || (a.g = b + a.g)
    }

    function ZR(a, b, c, d) {
        return a.errors != "" || b ? null : a.g.replace($R, "") == "" ? c != null && a.i[0] || d != null && a.i[1] ? !1 : !0 : !1
    }

    function aS(a) {
        var b = ZR(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var bS = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        wa(a) {
            this.errors.indexOf(a) < 0 && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    };

    function cS(a) {
        let b = a.U;
        a.G = () => {};
        dS(a, a.C, b);
        let c = a.C.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : ie(c, b)
            } catch (g) {
                a.g.wa("c")
            }
            const f = eS(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.P = !0);
            if (d && !f && fS(e)) {
                YR(a.g, "l");
                a.F = c;
                break
            }
            d = d && f;
            if (e && gS(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !ce(b)) {
                        YR(a.g, "c");
                        break
                    }
                } catch (g) {
                    YR(a.g,
                        "c");
                    break
                }
            }
        }
        a.B && a.A && hS(a);
        return a.g
    }

    function iS(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++) ok(k, m[n], "0px")
        }

        function c() {
            jS(d, g, h);
            !k || l || h || (b(kS), b(lS))
        }
        const d = a.C;
        d.style.overflow = a.Yc ? "visible" : "hidden";
        a.B && (a.F ? (UR(d, mS()), UR(a.F, mS())) : UR(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.L !== null && (d.style.opacity = String(a.L));
        const e = a.width != null && a.j != null && (a.he || a.j > a.width) ? a.j : null,
            f = a.height != null && a.i != null && (a.he || a.i > a.height) ? a.i : null;
        if (a.H) {
            const m =
                a.H.length;
            for (let n = 0; n < m; n++) jS(a.H[n], e, f)
        }
        const g = a.j,
            h = a.i,
            k = a.F,
            l = a.P;
        a.B ? q.setTimeout(c, 1E3) : c()
    }

    function nS(a) {
        if (a.A && !a.da || a.j == null && a.i == null && a.L == null && a.A) return a.g;
        var b = a.A;
        a.A = !1;
        cS(a);
        a.A = b;
        if (!b || a.check != null && !ZR(a.g, a.check, a.j, a.i)) return a.g;
        a.g.g.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.j !== null || a.height == null && a.i !== null) a.B = !1;
        (a.j == 0 || a.i == 0) && a.g.g.indexOf("l") >= 0 && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        iS(a);
        return cS(a)
    }

    function gS(a, b) {
        let c = !1;
        b.display == "none" && (YR(a.g, "n"), a.A && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || YR(a.g, "v");
        b.overflow == "hidden" && YR(a.g, "o");
        b.position == "absolute" ? (YR(a.g, "a"), c = !0) : b.position == "fixed" && (YR(a.g, "f"), c = !0);
        return c
    }

    function dS(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = oS(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && WR(a.g, 0, "o"), d & 4 && WR(a.g, 1, "o"));
        return !(d & 1)
    }

    function eS(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (D) {
            a.g.wa("s")
        }
        var f = c.getAttribute("width"),
            g = ue(f),
            h = c.getAttribute("height"),
            k = ue(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = dS(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            r = e && e.height,
            w = ve(m) == a.width && ve(n) == a.height;
        m = w ? m : p;
        r = w ? n : r;
        p = ve(m);
        w = ve(r);
        g = a.width !== null && (p !== null && a.width >= p || g !== null && a.width >= g);
        w = a.height !== null && (w !== null && a.height >= w || k !== null && a.height >= k);
        k = !b && fS(d);
        w = b || w || k || !(f ||
            m || d && (!pS(String(d.minWidth)) || !qS(String(d.maxWidth))));
        l = b || g || k || l || !(h || r || d && (!pS(String(d.minHeight)) || !qS(String(d.maxHeight))));
        rS(a, 0, w, c, "width", f, a.width, a.j);
        sS(a, 0, "d", w, e, d, "width", m, a.width, a.j);
        sS(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        sS(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.Vf ? (c = /^html|body$/i.test(c.nodeName), f = ve(n), h = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, h = a.i != null && d && f && Math.round(f) !== a.i && !h && d.minHeight !== "100%", a.A && !c && h && (e.setProperty("height",
            "auto", "important"), d && !pS(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !qS(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (rS(a, 1, l, c, "height", h, a.height, a.i), sS(a, 1, "d", l, e, d, "height", r, a.height, a.i), sS(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.i), sS(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function hS(a) {
        function b() {
            if (c > 0) {
                var l = ie(e, d) || {
                    width: 0,
                    height: 0
                };
                const m = ve(l.width);
                l = ve(l.height);
                m !== null && f !== null && h && h(0, f - m);
                l !== null && g !== null && h && h(1, g - l);
                --c
            } else q.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.U,
            e = a.C,
            f = a.j,
            g = a.i,
            h = a.G;
        let k;
        q.setTimeout(() => {
            k = q.setInterval(b, 16)
        }, 990)
    }

    function oS(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = ie(b, c)
            } catch (e) {}
            if (d) {
                if (d.display == "none" || d.position == "fixed") return 0;
                if (d.position == "absolute") {
                    if (!a.l.boundingClientRect || d.visibility == "hidden" || d.visibility == "collapse") return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.l.boundingClientRect.left ? 2 : 0) | (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function rS(a, b, c, d, e, f, g, h) {
        if (h != null) {
            if (typeof f == "string") {
                if (f == "100%" || !f) return;
                f = ue(f);
                f == null && (a.g.wa("n"), WR(a.g, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.A)
                        if (a.B) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.G;
                            a.G = (m, n) => {
                                m == b && ed(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else ed(d, e, String(h))
                } else WR(a.g, b, "d")
        }
    }

    function sS(a, b, c, d, e, f, g, h, k, l) {
        if (l != null) {
            f = f && f[g];
            typeof f != "string" || (c == "m" ? pS(f) : qS(f)) || (f = ve(f), f == null ? YR(a.g, "p") : k != null && YR(a.g, f == k ? "E" : "e"));
            if (typeof h == "string") {
                if (c == "m" ? pS(h) : qS(h)) return;
                h = ve(h);
                h == null && (a.g.wa("p"), WR(a.g, b, c))
            }
            if (h != null)
                if (d && e) {
                    if (a.A)
                        if (a.B) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.G;
                            a.G = (p, r) => {
                                p == b && (e[g] = m - r + "px");
                                n && n(p, r)
                            }
                        } else e[g] = l + "px"
                } else WR(a.g, b, c)
        }
    }
    var xS = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.C = b;
            this.H = c;
            this.l = new tS(this.C);
            this.F = this.G = null;
            this.P = !1;
            this.U = (a = this.C.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new tS(this.C);
            this.A = g;
            this.da = uS(this.l, d.dg, d.height, d.Qc);
            this.width = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = vS(d.width);
            this.i = vS(d.height);
            this.L = this.A ? vS(d.opacity) : null;
            this.check = d.check;
            this.Qc = !!d.Qc;
            this.B = d.dg == "animate" && !wS(this.l, this.i, this.Qc) && VR();
            this.Yc = !!d.Yc;
            this.g = new bS;
            wS(this.l, this.i, this.Qc) && YR(this.g, "r");
            e = this.l;
            e.g && e.i >= e.W && YR(this.g, "b");
            this.he = !!d.he;
            this.Vf = !!d.Vf
        }
    };

    function wS(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, vS(a.getHeight())), a = a.g && b >= a.W) : a = a.g && a.i >= a.W, d = a);
        return d
    }
    var tS = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && fe(c);
            this.g = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.i = e;
            c = c || q;
            this.W = (c.document.compatMode == "CSS1Compat" ? c.document.documentElement : c.document.body).clientHeight;
            b = b && MP(b);
            this.visible = !!a && !(b == 2 || b == 3) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function uS(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return wS(a, c, d)
        }
    }

    function fS(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function yS(a, b, c, d) {
        return nS(new xS(a, b, d, c, null, null, !0))
    }
    var zS = new bS("s", ""),
        $R = RegExp("[lonvafrbpEe]", "g");

    function qS(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function pS(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function jS(a, b, c) {
        b !== null && ue(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && ue(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = b + "px");
        c !== null && (a.style.height = c + "px")
    }
    var kS = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        lS = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function mS() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = kS;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = lS;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function vS(a) {
        return typeof a === "string" ? ue(a) : typeof a === "number" && isFinite(a) ? a : null
    };
    var AS = class extends KR {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        U(a) {
            a["resize-me"] = (b, c) => {
                b = vp(b);
                var d = b.r_chk;
                if (d == null || d === "") {
                    var e = ue(b.r_nw),
                        f = ue(b.r_nh),
                        g = ue(b.r_no);
                    g != null || e !== 0 && f !== 0 || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = /^true$/.test(b.r_ao),
                            l = /^true$/.test(b.r_ifr),
                            m = /^true$/.test(b.r_cab);
                        const r = window;
                        if (r)
                            if (h === "no_rsz") b.err = "7", e = !0;
                            else {
                                var n = new tS(this.g);
                                if (n.g) {
                                    var p = n.getWidth();
                                    p != null && (b.w = p);
                                    p = n.getHeight();
                                    p != null && (b.h = p);
                                    uS(n, h, f, m) ? (n = this.l, d = yS(r, n, {
                                        width: e,
                                        height: f,
                                        opacity: g,
                                        check: d,
                                        dg: h,
                                        Yc: k,
                                        he: l,
                                        Qc: m
                                    }, [this.g]), b.r_cui && /^true$/.test(b.r_cui.toString()) && u(n, {
                                        height: (f === null ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), e != null && (b.nw = e), f != null && (b.nh = f), b.rsz = d.toString(), b.abl = aS(d), b.frsz = (h === "force").toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: h,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.g.dataset.googleQueryId || this.g.setAttribute("data-google-query-id",
                        b.qid)
                }
            }
        }
    };
    const BS = ["google_ad_client", "google_ad_format", "google_ad_height", "google_ad_width", "google_page_url"];

    function CS(a, b) {
        return new IntersectionObserver(b, a)
    }

    function DS(a, b, c) {
        Cb(a, b, c);
        return () => Db(a, b, c)
    }
    let ES = null;

    function FS() {
        ES = Nk()
    }

    function GS(a, b) {
        return b ? ES === null ? (Cb(a, "mousemove", FS, {
            passive: !0
        }), Cb(a, "scroll", FS, {
            passive: !0
        }), FS(), !1) : Nk() - ES >= b * 1E3 : !1
    }

    function HS({
        win: a,
        element: b,
        gi: c,
        ei: d,
        di: e = 0,
        Qa: f,
        Rg: g,
        options: h = {},
        xh: k = !0,
        lh: l = CS
    }) {
        let m, n = !1,
            p = !1;
        const r = [],
            w = l(h, (D, C) => {
                try {
                    const I = () => {
                        r.length || (d && (r.push(DS(b, "mouseenter", () => {
                            n = !0;
                            I()
                        })), r.push(DS(b, "mouseleave", () => {
                            n = !1;
                            I()
                        }))), r.push(DS(a.document, "visibilitychange", () => I())));
                        const N = GS(a, e),
                            E = OP(a.document);
                        if (p && !n && !N && !E) m = m || a.setTimeout(() => {
                            GS(a, e) ? I() : (f(), C.disconnect())
                        }, c * 1E3);
                        else if (k || n || N || E) a.clearTimeout(m), m = void 0
                    };
                    ({
                        isIntersecting: p
                    } = D[D.length - 1]);
                    I()
                } catch (I) {
                    g &&
                        g(I)
                }
            });
        w.observe(b);
        return () => {
            w.disconnect();
            for (const D of r) D();
            m != null && a.clearTimeout(m)
        }
    };

    function IS(a, b, c, d = null) {
        return d ? (d = Nj(d, a)) ? new JS(a, b, c, d) : null : null
    }

    function KS(a, b) {
        b = vp(b);
        jG(a.l, Lh(yn(new An, Lh(un(new vn, Lh(rn(qn(new sn, ue(b.s_w) ? ? 0), ue(b.s_h) ? ? 0)))))));
        a.A = HS({
            win: a.j,
            element: a.aa,
            gi: 1,
            ei: !Yd(),
            di: 0,
            Qa: () => {
                var c = a.l;
                var d = new An;
                var e = Lh(new xn);
                d = A(d, 4, zn, e);
                return void jG(c, Lh(d))
            },
            Rg: c => X.ba(1268, c, void 0, void 0),
            options: {
                threshold: .5
            },
            xh: !0,
            lh: void 0
        })
    }
    var JS = class extends KR {
        constructor(a, b, c, d) {
            super(a, b);
            this.aa = c;
            this.B = d;
            this.l = O(aG);
            this.A = null
        }
        U(a) {
            a["survey-submitted"] = () => {
                var b = Nk() + W(Nt) * 1E3;
                this.B.setItem("google_survey_fcap", String(b));
                b = this.l;
                var c = new An;
                var d = Lh(new wn);
                c = A(c, 2, zn, d);
                jG(b, Lh(c))
            };
            a["survey-rendered"] = b => void KS(this, b)
        }
        i() {
            this.A ? .();
            super.i()
        }
    };

    function LS(a, b, c, d, e) {
        return new PU(a, b, c, d, e)
    }

    function QU(a, b, c) {
        const d = a.g,
            e = a.F;
        if (e != null && d != null && sp(c, d.contentWindow) && (b = b.config, typeof b === "string")) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = new jj(f)
            } catch (g) {
                return
            }
            a.dispose();
            f = xi(a.l, 1);
            f <= 0 || (a.B = HS({
                win: a.j,
                element: e,
                gi: f - .2,
                ei: !Yd(),
                di: xi(a.l, 3),
                Qa: () => void RU(a, e),
                Rg: g => $o.ba(1223, g, void 0, void 0),
                options: {
                    threshold: zi(a.l, 2, 1)
                },
                xh: !0,
                lh: void 0
            }))
        }
    }

    function RU(a, b) {
        a.H();
        setTimeout($o.Ga(1224, () => {
            a.A.rc = (parseInt(a.A.rc, 10) || 0) + 1;
            var c = b.parentElement || null;
            c && Lv.test(c.className) || (c = Od(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            U(Dt) ? (SU(a, c, b), a.A.no_resize = !0, Zp(tH(c), "filled", () => {
                Pd(b)
            })) : Pd(b);
            yQ(c, a.A, a.j)
        }), 200)
    }

    function SU(a, b, c) {
        a.j.getComputedStyle(b).position == "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var PU = class extends KR {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.F = d;
            this.A = c;
            this.H = e;
            this.l = this.B = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.da.push(qN(b, "sth", this.Ja, this.kb))
        }
        U(a) {
            a.av_ref = (b, c) => QU(this, b, c)
        }
        i() {
            super.i();
            this.F = null;
            this.B && this.B()
        }
    };

    function TU(a) {
        if (U(Et)) {
            var b = a.aa.parentElement || null;
            b && Lv.test(b.className) && Zp(tH(b), "unfilled", () => {
                var c;
                if (c = U(Et))
                    if (c = !CF(xF(), 42, !1)) {
                        a: switch (a.D.google_reactive_ad_format) {
                            case 0:
                            case 27:
                            case 40:
                                c = !0;
                                break a;
                            default:
                                c = !1
                        }
                        if (c = c && a.D.google_ad_width >= W(Ot) && (a.g ? sP(new xP(a.pubWin), a.g) : !1)) c = (c = a.g ? Nj(a.g, a.pubWin) : null) ? (c.getItem("google_survey_fcap") ? Number(c.getItem("google_survey_fcap")) : 0) <= Nk() : !1;
                        if (c) a: if (U(bt) || zd() || yd()) c = !0;
                            else {
                                if (Ad() && a.l && a.l.label) switch (a.l.label) {
                                    case "treatment_1.1":
                                    case "treatment_1.2":
                                    case "treatment_1.3":
                                    case "control_2":
                                        c = !0;
                                        break a
                                }
                                c = !1
                            }
                        c && (c = (c = P(a.pubWin)) ? b.getBoundingClientRect().top > c : !1)
                    }
                if (c) {
                    c = a.pubWin.document.createElement("ins");
                    var d = b.getAttribute("style");
                    d && c.setAttribute("style", d);
                    a.D.google_ad_height && (c.style.height = `${a.D.google_ad_height}px`);
                    (d = b.getAttribute("class")) && c.setAttribute("class", d);
                    (d = b.getAttribute("id")) && c.setAttribute("id", d);
                    b.replaceWith(c);
                    d = a.D;
                    var e = {};
                    for (f of BS) d[f] && (e[f] = d[f]);
                    e.sso = !0;
                    yQ(c, e, a.pubWin);
                    var f = c;
                    DF(xF(), 42, !0);
                    if (d = a.g ? Nj(a.g, a.pubWin) : null) c = Nk() + W(Mt) *
                        1E3, d.setItem("google_survey_fcap", String(c));
                    e = up(a.pubWin);
                    var g = tp(a.pubWin);
                    const k = f.getBoundingClientRect();
                    f = O(aG);
                    c = new An;
                    d = new tn;
                    var h = new pn;
                    g = Li(h, 1, Math.round(k.top + g));
                    e = Li(g, 2, Math.round(k.left + e));
                    e = Lh(e);
                    d = z(d, 1, e);
                    e = Lh(rn(qn(new sn, Math.round(a.D.google_ad_width ? ? 0)), Math.round(a.D.google_ad_height ? ? 0)));
                    d = z(d, 2, e);
                    d = Lh(d);
                    c = A(c, 1, zn, d);
                    jG(f, Lh(c))
                }
            })
        }
    };
    const UU = /^blogger$/,
        VU = /^wordpress(.|\s|$)/i,
        WU = /^joomla!/i,
        XU = /^drupal/i,
        YU = /\/wp-content\//,
        ZU = /\/wp-content\/plugins\/advanced-ads/,
        $U = /\/wp-content\/themes\/genesis/,
        aV = /\/wp-content\/plugins\/genesis/;

    function bV(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (ZU.test(e)) return 5;
                if (aV.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", $U.test(e) || aV.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (UU.test(f)) return 1;
                if (VU.test(f)) return 2;
                if (WU.test(f)) return 3;
                if (XU.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", YU.test(d))) return 2;
        return 0
    };
    var cV = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_intent_query: "ait_q",
        google_ad_output: "output",
        google_ad_callback: "callback",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_ad_intent_qetid: "aiqeid",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        google_ad_width: "w",
        abgtt: "abgtt",
        google_captcha_token: "captok",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        google_cust_criteria: "cust_params",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_image_size: "image_size",
        google_last_modified_time: "lmt",
        google_loeid: "loeid",
        google_max_num_ads: "num_ads",
        google_max_radlink_len: "max_radlink_len",
        google_mtl: "mtl",
        google_native_settings_key: "nsk",
        google_enable_content_recommendations: "ecr",
        google_num_radlinks: "num_radlinks",
        google_num_radlinks_per_unit: "num_radlinks_per_unit",
        google_pucrd: "pucrd",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_plas: "plas",
        google_rl_dest_url: "rl_dest_url",
        google_rl_filtering: "rl_filtering",
        google_rl_mode: "rl_mode",
        google_rt: "rt",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_tfs: "tfs",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_apsail: "psa",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_cpm: "cpm",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_hints: "hints",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_ad_host_tier_id: "ht_id",
        google_kw_type: "kw_type",
        google_kw: "kw",
        google_contents: "contents",
        google_targeting: "targeting",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_alternate_ad_url: "alternate_ad_url",
        google_cust_age: "cust_age",
        google_cust_gender: "cust_gender",
        google_cust_l: "cust_l",
        google_cust_lh: "cust_lh",
        google_language: "hl",
        google_city: "gcs",
        google_country: "gl",
        google_region: "gr",
        google_content_recommendation_ad_positions: "ad_pos",
        google_content_recommendation_ui_type: "crui",
        google_content_recommendation_use_square_imgs: "cr_sq_img",
        sso: "sso",
        google_color_line: "color_line",
        google_disable_video_autoplay: "disable_video_autoplay",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        google_video_doc_id: "video_doc_id",
        google_video_product_type: "video_product_type",
        google_webgl_support: "wgl",
        aihb: "aihb",
        asro: "asro",
        ailel: "ailel",
        aiael: "aiael",
        aicel: "aicel",
        aifxl: "aifxl",
        aiixl: "aiixl",
        slmct: "aslmct",
        samct: "asamct",
        aiict: "aiict",
        aigda: "aifgd",
        aipaq: "aipaq",
        vmsli: "itsi",
        dap: "dap",
        aiapm: "aiapm",
        aiapmi: "aiapmi",
        aiombap: "aiombap"
    };

    function dV(a) {
        a.g === -1 && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var eV = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b = !0) {
            0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function fV() {
        const a = new eV;
        "SVGElement" in q && "createElementNS" in q.document && a.set(0);
        const b = ze();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        q.crypto && q.crypto.subtle && a.set(3);
        "TextDecoder" in q && "TextEncoder" in q && a.set(4);
        return dV(a)
    };
    const gV = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        hV = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function iV(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return gV.get(b.type) ? ? null
        } catch {}
        return hV.get(a.performance ? .navigation ? .type) ? ? null
    };
    var jV = class extends K {
        constructor() {
            super()
        }
    };

    function kV(a, b) {
        if (Ad()) {
            var c = a.document.documentElement.lang;
            lV(a) ? mV(b, Oe(a), !0, "", c) : (new MutationObserver((d, e) => {
                lV(a) && (mV(b, Oe(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function lV(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function mV(a, b, c, d, e) {
        nj({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function nV(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const oV = /[+, ]/;

    function pV(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document,
            g = Re(d),
            h = !1,
            k = "",
            l = 1;
        a: {
            l = c.google_ad_width || d.google_ad_width;
            var m = c.google_ad_height || d.google_ad_height;
            if (d && d.top === d) h = !1;
            else {
                h = d.document;
                k = h.documentElement;
                if (l && m) {
                    var n = 1;
                    let r = 1;
                    d.innerHeight ? (n = d.innerWidth, r = d.innerHeight) : k && k.clientHeight ? (n = k.clientWidth, r = k.clientHeight) : h.body && (n = h.body.clientWidth, r = h.body.clientHeight);
                    if (r > 2 * m || n > 2 * l) {
                        h = !1;
                        break a
                    }
                }
                h = !0
            }
        }
        k = h;
        l = uF(g).Ff;
        m = d.top == d ? 0 : ce(d.top) ? 1 : 2;
        n = 4;
        k || m !== 1 ? k ||
            m !== 2 ? k && m === 1 ? n = 7 : k && m === 2 && (n = 8) : n = 6 : n = 5;
        l && (n |= 16);
        k = String(n);
        l = wF(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        l !== 0 && (e.google_iframing_environment = l);
        if (!m && f.domain === "ad.yieldmanager.com") {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); k.indexOf("%") > -1;) try {
                k = decodeURIComponent(k)
            } catch (r) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && ce(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url =
            d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var p = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            p = null
        } else p = null;
        e.google_last_modified_time = p;
        d = g === g.top ? g.document.referrer : (d = gk()) && d.referrer || "";
        e.google_referrer_url = d;
        vF(e, c);
        b.g() ? (e = c.google_page_location || c.google_page_url, "EMPTY" === e && (e = c.google_page_url), e ? (e = e.toString(), e.indexOf("http://") == 0 ? e = e.substring(7, e.length) : e.indexOf("https://") == 0 && (e = e.substring(8,
            e.length)), d = e.indexOf("/"), d === -1 && (d = e.length), e = e.substring(0, d).split("."), d = !1, e.length >= 3 && (d = e[e.length - 3] in QO), e.length >= 2 && (d = d || e[e.length - 2] in QO), e = d) : e = !1, e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net") : e = "pagead2.googlesyndication.com";
        b = qV(a, b);
        d = a.D;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        d.google_ad_client === "ca-pub-6219811747049371" && rV.test(f) && (g = "/pagead/lopri?");
        e = `https://${e}${g}`;
        a = F(a.ra, 9) && c.google_debug_params ? c.google_debug_params : "";
        a = Ak(b, e + a);
        return c.google_ad_url =
            a
    }

    function sV(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (a.nodeType === 9) a: {
            try {
                const c = a ? a.defaultView : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && ce(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function tV(a, b) {
        var c = oR(a.pubWin);
        a.D.saaei && (c += (c === "" ? "" : ",") + a.D.saaei);
        a.D.google_ad_intent_eids && (c += `${c===""?"":","}${a.D.google_ad_intent_eids}`);
        b.eid = c;
        c = a.D.google_loeid;
        typeof c === "string" && (a.i |= 4096, b.loeid = c)
    }

    function uV(a, b) {
        a = (a = fe(a.pubWin)) && a.document ? pP(a.document, a) : new ad(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function vV(a) {
        try {
            const b = q.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function wV(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.M,
            g = Re(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = gk(e)) && Ba(h.data) && typeof h.data.type === "string" ? (h = h.data.type.toLowerCase(), h = h == "doubleclick" || h == "adsense" ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = uF(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Ff || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.uc && (b.etu = a.uc);
        c = f ? Nj(c, f) : null;
        (c = sQ(d, f, c)) && (b.fc = c);
        if (!Fk(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = Wd(new Kd(c), "IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const ja = h.contentWindow.document;
                    ja.open();
                    var k = sc("<!DOCTYPE html>");
                    ja.write(wc(k));
                    ja.close();
                    g += ja.documentMode
                } catch (ja) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, m, n, p, r, w, D, C, I, N;
        try {
            l = e.screenX, m = e.screenY
        } catch (ja) {}
        try {
            n = e.outerWidth, p = e.outerHeight
        } catch (ja) {}
        try {
            r = e.innerWidth, w = e.innerHeight
        } catch (ja) {}
        try {
            D = e.screenLeft, C = e.screenTop
        } catch (ja) {}
        try {
            r =
                e.innerWidth, w = e.innerHeight
        } catch (ja) {}
        try {
            I = e.screen.availWidth, N = e.screen.availTop
        } catch (ja) {}
        b.brdim = [D, C, l, m, I, N, n, p, r, w].join();
        k = 0;
        q.postMessage === void 0 && (k |= 1);
        k > 0 && (b.osd = k);
        b.vis = MP(e.document);
        k = a.aa;
        e = mQ(d) ? zS : nS(new xS(e, k, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = aS(e);
        if (!mQ(d) && (e = Gk(d), e != null)) {
            k = 0;
            a: {
                try {
                    {
                        var E = d.google_async_iframe_id;
                        const ja = window.document;
                        if (E) var ca = ja.getElementById(E);
                        else {
                            var V = ja.getElementsByTagName("script"),
                                Ga = V[V.length - 1];
                            ca = Ga && Ga.parentNode || null
                        }
                    }
                    if (E = ca) {
                        ca = [];
                        V = 0;
                        for (var db = Date.now(); ++V <= 100 && Date.now() - db < 50 && (E = sV(E));) E.nodeType === 1 && ca.push(E);
                        var Ub = ca;
                        b: {
                            for (db = 0; db < Ub.length; db++) {
                                c: {
                                    var na = Ub[db];
                                    try {
                                        if (na.parentNode && na.offsetWidth > 0 && na.offsetHeight > 0 && na.style && na.style.display !== "none" && na.style.visibility !== "hidden" && (!na.style.opacity || Number(na.style.opacity) !== 0)) {
                                            const ja = na.getBoundingClientRect();
                                            var Fb = ja.right > 0 && ja.bottom > 0;
                                            break c
                                        }
                                    } catch (ja) {}
                                    Fb = !1
                                }
                                if (!Fb) {
                                    var Oc = !1;
                                    break b
                                }
                            }
                            Oc = !0
                        }
                        if (Oc) {
                            b: {
                                const ja = Date.now();Oc = /^html|body$/i;Fb = /^fixed/i;
                                for (na = 0; na < Ub.length && Date.now() - ja < 50; na++) {
                                    const md = Ub[na];
                                    if (!Oc.test(md.tagName) && Fb.test(md.style.position || tk(md, "position"))) {
                                        var Pc = md;
                                        break b
                                    }
                                }
                                Pc = null
                            }
                            break a
                        }
                    }
                } catch {}
                Pc = null
            }
            Pc && Pc.offsetWidth * Pc.offsetHeight <= 4 * e.width * e.height && (k = 1);
            b.pfx = k
        }
        a: {
            if (Math.random() < .05 && f) try {
                const ja = f.document.getElementsByTagName("head")[0];
                var le = ja ? bV(ja) : 0;
                break a
            } catch (ja) {}
            le = 0
        }
        f = le;
        f !== 0 && (b.cms = f);
        d.google_lrv !== a.Ya && (b.alvm = d.google_lrv ||
            "none")
    }

    function xV(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : de(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function yV(a, b) {
        const c = CF(b, 8, {});
        b = CF(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function zV(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = bp;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = q.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (m) {}
            g = null
        }(e = (e = g) ? rR(e, q.Date.now() - bp, 1E6) : null) && (b.bdt = e);
        b.idt = rR(a.H, bp);
        e = a.D;
        b.shv = G(a.ra, 2);
        a.Ya && (b.mjsv = a.Ya);
        e.google_loader_used == "sd" ? b.ptt = 5 : e.google_loader_used == "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = gk(a.pubWin)) b.is_amp = 1, b.amp_v = hk(e), (e = ik(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new xP(a.pubWin);
        (g = tP(e, "__gads", c)) ? b.cookie = g: sP(e, c) && (b.cookie_enabled = "1");
        (g = tP(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        tP(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
        e = new HR(a.pubWin);
        g = {
            Mh: !1,
            Nh: !a.F
        };
        (f = GR(e, c, g)) ? b.eo_id_str = f: FR(e, c, g) && (b.eoidce = "1");
        c = xF();
        g = CF(c, 8, {});
        e = d.google_ad_section;
        g[e] && (b.prev_fmts = g[e]);
        g = CF(c, 9, {});
        g[e] && (b.prev_slotnames = g[e].toLowerCase());
        yV(d, c);
        e = CF(c,
            15, 0);
        e > 0 && (b.nras = String(e));
        (g = gk(window)) ? (g ? (e = g.pageViewId, g = g.clientId, typeof g === "string" && (e += g.replace(/\D/g, "").substr(0, 6))) : e = null, e = +e) : (e = Re(window), g = e.google_global_correlator, g || (e.google_global_correlator = g = 1 + Math.floor(Math.random() * Math.pow(2, 43))), e = g);
        b.correlator = CF(c, 7, e);
        U(nv) && (b.rume = 1);
        if (d.google_ad_channel) {
            e = CF(c, 10, {});
            g = "";
            f = d.google_ad_channel.split(oV);
            for (var h = 0; h < f.length; h++) {
                var k = f[h];
                e[k] ? g += k + "+" : e[k] = !0
            }
            b.pv_ch = g
        }
        if (d.google_ad_host_channel) {
            e = d.google_ad_host_channel;
            g = CF(c, 11, []);
            f = e.split("|");
            c = -1;
            e = [];
            for (h = 0; h < f.length; h++) {
                k = f[h].split(oV);
                g[h] || (g[h] = {});
                let m = "";
                for (let n = 0; n < k.length; n++) {
                    const p = k[n];
                    p !== "" && (g[h][p] ? m += "+" + p : g[h][p] = !0)
                }
                m = m.slice(1);
                e[h] = m;
                m !== "" && (c = h)
            }
            g = "";
            if (c > -1) {
                for (f = 0; f < c; f++) g += e[f] + "|";
                g += e[c]
            }
            b.pv_h_ch = g
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        a: {
            c = d.google_ad_client;
            try {
                const m = Re(window);
                let n = m.google_prev_clients;
                n || (n = m.google_prev_clients = {});
                if (c in n) {
                    var l = 1;
                    break a
                }
                n[c] = !0;
                l = 2;
                break a
            } catch {
                l =
                    0;
                break a
            }
            l = void 0
        }
        b.pv = l;
        a.M && U(It) && (l = a.M, l = Ad() && lV(l) ? l.document.documentElement.lang : void 0, l && (b.tl = l));
        U(Jt) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        xV(a.pubWin, b);
        (a = d.google_ad_layout) && JQ[a] >= 0 && (b.rplot = JQ[a])
    }

    function AV(a, b) {
        a = a.g;
        IF() && (b.npa = 1);
        if (a) {
            ui(a, 3) != null && (b.gdpr = a.l() ? "1" : "0");
            var c = B(a, 1);
            c && (b.us_privacy = c);
            (c = B(a, 2)) && (b.gdpr_consent = c);
            (c = B(a, 4)) && (b.addtl_consent = c);
            (c = wi(a, 7)) && (b.tcfe = c);
            (c = G(a, 11)) && (b.gpp = c);
            (a = si(a, 10, x())) && a.length > 0 && (b.gpp_sid = a.join(","))
        }
    }

    function BV(a, b) {
        const c = a.D;
        AV(a, b);
        ke(cV, (d, e) => {
            b[d] = c[e]
        });
        mQ(c) && (a = zQ(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = vy(c), a.g != null && (a = mr(a.getValue()), b.pi = a))
    }

    function CV(a, b) {
        var c = kk() || nP(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = nP(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function DV(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = nP(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = pe(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function EV(a, b) {
        (a = FF()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function FV(a, b) {
        (a = U(Uu) ? xi(ki(a.pageState, GV), 2) : a.pubWin.tmod) && a >= 0 && (b.tmod = a)
    }

    function HV(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Ze(a))
    }

    function IV(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                d >= 0 && (b.wsm = d + 1)
            }
        } catch {}
    }

    function JV(a, b) {
        a.D.google_ad_public_floor >= 0 && (b.pubf = a.D.google_ad_public_floor);
        a.D.google_ad_private_floor >= 0 && (b.pvtf = a.D.google_ad_private_floor)
    }

    function KV(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Pa).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function LV(a, b) {
        var c;
        if (c = !U(tv)) c = a.l ? .label, c = !(U(Yu) && c && c.match(vv(Wu)));
        c && ("runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1), c = a.pubWin.navigator, a.pubWin.isSecureContext && "runAdAuction" in c && c.runAdAuction instanceof Function && eR("run-ad-auction", a.pubWin.document) && (c = new eV, c.set(1, fR(a.pubWin.navigator)), b.tdf = dV(c)))
    }

    function MV(a, b) {
        if (a.l != null && Ad()) {
            var c = new jV,
                d = Oi(c, 3, a.l.label);
            J(d, 4, a.l.status);
            b.psd = Ze(Qi(c))
        }
    }

    function NV(a, b) {
        U(kv) || eR("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function OV(a, b) {
        if (typeof a.D.google_privacy_treatments === "string") {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.D.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function PV(a, b) {
        if (a.C) {
            a.C.Zj && (b.xatf = 1);
            try {
                a.C.xf ? .disconnect(), a.C.xf = void 0
            } catch {}
        }
    }

    function qV(a, b) {
        const c = {};
        BV(a, c);
        HV(a, c);
        zV(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        try {
            var d = pj.history.length
        } catch (e) {
            d = 0
        }
        c.u_his = d;
        c.u_h = pj.screen ? .height;
        c.u_w = pj.screen ? .width;
        c.u_ah = pj.screen ? .availHeight;
        c.u_aw = pj.screen ? .availWidth;
        c.u_cd = pj.screen ? .colorDepth;
        c.u_sd = oP(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        bz(889, () => {
            if (a.M == null) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = rP(a.M, a.aa);
                c.adx && c.adx != -12245933 && c.ady && c.ady != -12245933 || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                qP(a.aa) || (c.adx = -12245933, c.ady = -12245933, a.i |= 32768)
            }
        });
        CV(a, c);
        DV(a, c);
        uV(a, c);
        tV(a, c);
        c.oid = 2;
        EV(a, c);
        c.pvsid = Oe(a.pubWin, X);
        FV(a, c);
        IV(a, c);
        c.uas = nV(a.pubWin);
        (d = iV(a.pubWin)) && (c.nvt = d);
        a.B && (c.scar = a.B);
        a.A instanceof Uint8Array ? c.topics = Xe(a.A) : a.A && (c.topics = a.A, c.tps = a.A);
        PV(a, c);
        wV(a, c, b);
        c.fu = a.i;
        c.bc = fV();
        F(a.ra, 9) && (pR(c), c.creatives = vV(/\b(?:creatives)=([\d,]+)/), c.adgroups = vV(/\b(?:adgroups)=([\d,]+)/), c.adgroups || c.sso) && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0);
        Wj() && (c.atl = !0);
        c.bz = Se(a.pubWin);
        JV(a, c);
        KV(a, c);
        LV(a, c);
        MV(a, c);
        NV(a, c);
        OV(a, c);
        String(a.D.google_special_category_data) === "true" && (c.scd = 1);
        return c
    }
    const rV = /YtLoPri/;
    var QV = class extends K {};

    function RV(a) {
        return mi(a, QV, 15, x())
    }
    var SV = class extends K {},
        TV = Ti(SV);

    function UV() {
        var a = new VV;
        var b = new bs;
        b = Qh(b, 2, tg(4));
        b = Qh(b, 8, tg(1));
        var c = new ir;
        c = Ni(c, 7, "#dpId");
        b = z(b, 1, c);
        return qi(a, 3, bs, b)
    }
    var VV = class extends K {},
        WV = Ti(VV);
    var XV = class {
        constructor(a) {
            this.Pb = a.Pb ? ? [];
            this.Ih = a.Ih ? ? .1;
            this.lf = !!a.lf;
            this.nf = !!a.nf;
            this.Wd = a.Wd ? ? 250;
            this.Vd = a.Vd ? ? 300;
            this.Fe = a.Fe ? ? 15E3;
            this.Ce = a.Ce ? ? "";
            this.Va = a.Va ? ? "";
            this.Ee = a.Ee ? ? 15E3;
            this.Ge = a.Ge ? ? 0;
            this.me = !!a.me;
            this.mf = a.mf ? ? !0;
            this.Xe = a.Xe || "#0B57D0";
            this.hd = a.hd || "#FFFFFF";
            this.Sd = a.Sd ? ? 670;
            this.Tc = !!a.Tc;
            this.tf = a.tf ? ? [];
            this.Bf = !!a.Bf;
            this.Rd = a.Rd ? ? 0;
            this.Tf = a.Tf ? ? !0;
            this.nd = !!a.nd;
            this.yb = !!a.yb;
            this.Qd = a.Qd ? ? 0;
            this.Id = !!a.Id;
            this.Hf = !!a.Hf;
            this.Gf = !!a.Gf;
            this.We = !!a.We;
            this.Nd =
                a.Nd ? ? 0;
            this.rf = !!a.rf
        }
    };

    function YV(a, b) {
        a = Cy(xw([...b], a), a);
        if (a.length !== 0) return a.reduce((c, d) => c.ma.g > d.ma.g ? c : d)
    };

    function ZV(a, b) {
        a.language = b
    }

    function $V(a, b, c, d, e, f, g, h) {
        var k = new $m,
            l = new Gm;
        c = Oi(l, 1, c);
        d = Oi(c, 2, d);
        b = H(d, 3, b);
        k = z(k, 1, b);
        b = new Hm;
        b = Oi(b, 2, a.language);
        e = Oi(b, 3, e);
        e = z(k, 2, e);
        g = Mi(e, 3, Math.round(g));
        c = RV(f);
        e = k = b = d = 0;
        for (m of c) d += aW(G(m, 6) !== "") + aW(G(m, 7) !== ""), b += aW(G(m, 6) !== "") + aW(G(m, 7) !== ""), k += aW(G(m, 6) !== ""), e += aW(G(m, 7) !== "");
        var m = new Ym;
        m = Ji(m, 1, c.length);
        m = Ji(m, 2, d);
        m = Qh(m, 3, b == null ? b : xg(b));
        m = Qh(m, 4, k == null ? k : xg(k));
        m = Qh(m, 5, e == null ? e : xg(e));
        m = z(g, 6, m);
        if (h.length) f = new Qm, f = ni(f, 1, h), A(m, 5, Zm, f);
        else {
            a.g = a.entries.length;
            h = new Xm;
            a = a.entries;
            g = h.X;
            e = g[v];
            dg(e);
            g = li(g, e, Wm, 2, 2, !1, !0);
            k = e = 0;
            if (Array.isArray(a))
                for (var n = 0; n < a.length; n++) b = a[n], g.push(b), (b = Rf(b.X)) && !e++ && (g[v] &= -9), b || k++ || (g[v] &= -17);
            else
                for (n of a) a = n, g.push(a), (a = Rf(a.X)) && !e++ && (g[v] &= -9), a || k++ || (g[v] &= -17);
            f = RV(f).length;
            f = Mi(h, 3, f);
            A(m, 4, Zm, f)
        }
        return m
    }

    function bW(a, b) {
        const c = a.g;
        a.g = a.entries.length;
        var d = new fn,
            e = new Xm;
        a = ni(e, 2, a.entries.slice(c));
        b = RV(b).length;
        b = Mi(a, 3, b);
        return z(d, 1, b)
    }
    var cW = class {
        constructor() {
            this.entries = [];
            this.language = null;
            this.g = 0
        }
    };

    function aW(a) {
        return a ? 1 : 0
    };

    function dW(a, b) {
        return G(a, 10).replace("TERM", b)
    };

    function eW(a, b, c, d, e, f, g, h, k, l) {
        const m = l(999, a.top, n => {
            n.data.action === "init" && n.data.adChannel === "ShoppingVariant" && fW(a, b, d, c, e, f, g, h, k)
        });
        h(() => {
            a.top.removeEventListener("message", m)
        })
    }

    function fW(a, b, c, d, e, f, g, h, k) {
        F(f, 13) || XA(c, d, e);
        const l = b.contentDocument.documentElement,
            m = new ResizeObserver(() => {
                b.height = `${Math.ceil(l.offsetHeight+(g?26:22))}px`
            });
        m.observe(l);
        const n = k(1066, a, () => {
            const p = l.offsetHeight;
            p && (b.height = `${p+(g?26:22)}px`)
        }, 1E3);
        h(() => {
            m.disconnect();
            a.clearInterval(n)
        })
    }
    var gW = class {
        constructor(a) {
            this.g = a
        }
        Te(a) {
            const b = a.win.document.createElement("iframe"),
                c = a.T,
                d = new YA(b, G(c, 16), "anno-cse", this.g.replace("ca", "partner"), "ShoppingVariant", a.win.location, G(c, 7), dW(c, a.Ha), a.J.Pb.filter(e => e !== 42), !1, void 0, !0, void 0, !0, this.g);
            d.K();
            eW(a.win, b, a.Ha, d, a.Th, c, a.J.rf, a.Qh, a.Vb, a.ac);
            return b
        }
    };
    var hW = class {
        constructor(a) {
            this.g = a
        }
        Te(a) {
            var b = a.win;
            b = a.ja ? .95 * b.innerHeight - 30 : b.innerHeight;
            var c = a.Ha;
            var d = a.Qg || "",
                e = this.g,
                f = a.Mg,
                g = a.Z,
                h = !!F(a.T, 13),
                k = a.J.tf.join(",");
            const l = a.J.Tf;
            var m = qA;
            g = "<style>#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans Text'; padding-bottom: 6px;" + (g ? "padding-right: 16px;" : "padding-left: 16px;") + '}</style><div id="gda-search-term">' + oA(c) + "</div>";
            h ? d = "" : (d = "<script data-ad-intent-query=" + BA(c) + " data-ad-intent-qetid=" +
                BA(d) + " data-ad-intent-eids=" + BA(k) + ' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=', k = encodeURIComponent(String(e)), EA.lastIndex = 0, k = EA.test(k) ? k.replace(EA, FA) : k, d = d + k + '" crossorigin="anonymous">\x3c/script>');
            c = m(g + d + '<ins class="adsbygoogle" style="display:inline-block;width:' + zA(Y(f)) + "px;height:" + zA(Y(b - 30)) + 'px" data-ad-client="' + zA(e) + '"></ins>' + (l ? "<script>(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>" : "") + (h ? "<script>const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " +
                String(c).replace(MA, JA) + ' and " + "property code = ' + String(e).replace(MA, JA) + '";\x3c/script>' : ""));
            c = Mc("body", {
                dir: a.Z ? "rtl" : "ltr",
                lang: G(a.T, 7),
                style: "margin:0px;height:100%;padding-top: 0px;overflow: hidden;"
            }, lA(c));
            a = a.win.document.createElement("IFRAME");
            u(a, {
                border: "0",
                width: "100%",
                height: b + "px"
            });
            a.srcdoc = wc(c);
            return a
        }
    };
    async function iW(a, b) {
        await new Promise(c => void a.win.setTimeout(c, 0));
        a.i = a.g.sa(b) + a.j
    }
    var jW = class {
        constructor(a, b) {
            var c = W(Iu);
            this.win = a;
            this.g = b;
            this.j = c;
            this.i = b.sa(2) + c
        }
    };
    var kW = class {
            constructor(a) {
                this.performance = a
            }
            sa() {
                return this.performance.now()
            }
        },
        lW = class {
            sa() {
                return Date.now()
            }
        };
    const mW = [255, 255, 255];

    function nW(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), d.length > 4 ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if (a === "transparent" || a === "") return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function oW(a) {
        var b = getComputedStyle(a);
        if (b.backgroundImage !== "none") return null;
        b = nW(b.backgroundColor);
        var c = pW(b);
        if (c) return c;
        a = (a = a.parentElement) ? oW(a) : mW;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function pW(a) {
        return a[3] === 1 ? [a[0], a[1], a[2]] : null
    };

    function qW(a) {
        return a.Pd > 0 && a.i.j >= a.Pd
    }
    var sW = class {
        constructor(a, b, c, d) {
            this.Xf = b;
            this.Oe = c;
            this.Pd = d;
            this.g = 0;
            this.i = new rW(a)
        }
    };

    function tW(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            e > 0 && a.g.set(c, d.slice(e))
        }
    }

    function uW(a, b, c) {
        let d = [];
        a.g.has(b) && (d = a.g.get(b));
        d.push(c);
        a.i++;
        a.g.set(b, d)
    }
    class rW {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function vW(a) {
        u(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function wW(a, b) {
        a = xW(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z");
        u(a, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        return a
    }

    function yW(a, b, c, d) {
        a = xW(a, "0 -960 960 960", b, b, zW[d]);
        u(a, {
            fill: c || "white",
            cursor: "inherit"
        });
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function AW(a, b, c) {
        a = xW(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        u(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none",
            fill: c ? "#1A73E8" : "white"
        });
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }
    const zW = {
        [0]: "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z",
        [1]: "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z",
        [2]: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
        [3]: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm200-500 54-18 16-54q-32-48-77-82.5T574-786l-54 38v56l160 112Zm-400 0 160-112v-56l-54-38q-54 17-99 51.5T210-652l16 54 54 18Zm-42 308 46-4 30-54-58-174-56-20-40 30q0 65 18 118.5T238-272Zm242 112q26 0 51-4t49-12l28-60-26-44H378l-26 44 28 60q24 8 49 12t51 4Zm-90-200h180l56-160-146-102-144 102 54 160Zm332 88q42-50 60-103.5T800-494l-40-28-56 18-58 174 30 54 46 4Z",
        [4]: "M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80Zm0 640q-76-2-141.5-12.5t-114-26.5Q136-135 108-156t-28-44v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-28 44t-76.5 37q-48.5 16-114 26.5T520-80v-160h-80v160Zm40-440q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-154h240v154q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z",
        [5]: "M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z",
        [6]: "M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z",
        [7]: "M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z",
        [8]: "M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
        [9]: "M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"
    };

    function xW(a, b, c, d, e) {
        const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        u(e, Fs(a));
        e.setAttribute("viewBox", b);
        e.setAttribute("width", c);
        e.setAttribute("height", d);
        vW(e);
        e.appendChild(f);
        return e
    };

    function BW(a, b, c, d) {
        const e = document.createElement("DIV");
        e.classList.add("google-anno-skip", "google-anno-sc");
        d = a.getComputedStyle(d).fontSize || "16px";
        var f = e.appendChild,
            g = yW(a, d, b.J.hd, b.g.get(c) || 0);
        u(g, {
            position: "relative",
            top: "3px"
        });
        const h = document.createElement("SPAN");
        u(h, {
            display: "inline-block",
            "padding-left": b.Z() ? "" : "3px",
            "padding-right": b.Z() ? "3px" : ""
        });
        h.appendChild(g);
        f.call(e, h);
        f = e.appendChild;
        g = a.document.createElement("SPAN");
        g.appendChild(a.document.createTextNode(c));
        u(g, {
            position: "relative",
            left: b.Z() ? "" : "3px",
            right: b.Z() ? "3px" : "",
            "padding-left": b.Z() ? "6px" : "",
            "padding-right": b.Z() ? "" : "6px"
        });
        f.call(e, g);
        u(e, {
            display: "inline-block",
            "border-radius": "20px",
            "padding-left": b.Z() ? "7px" : "6px",
            "padding-right": b.Z() ? "6px" : "7px",
            "padding-top": "3px",
            "padding-bottom": "3px",
            "border-width": "1px",
            "border-style": "solid",
            color: b.J.hd,
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: b.J.Xe,
            cursor: "pointer"
        });
        e.tabIndex = 0;
        e.role = "link";
        e.ariaLabel = c;
        return e
    };
    const CW = [{
        Yf: "1907259590",
        Xd: 480,
        Be: 220
    }, {
        Yf: "2837189651",
        Xd: 400,
        Be: 180
    }, {
        Yf: "9211025045",
        Xd: 360,
        Be: 160
    }, {
        Yf: "6584860439",
        Xd: -Infinity,
        Be: 150
    }];

    function DW(a) {
        CW.find(b => b.Xd <= a)
    };
    const EW = new class {
        constructor() {
            this.g = []
        }
    };
    let FW = !1;

    function GW(a) {
        HW(a.config, 1065, a.win, () => {
            if (!a.g) {
                var b = new ln;
                b = Mi(b, 1, a.i);
                var c = new kn;
                b = A(b, 2, mn, c);
                a.config.O.ge(b)
            }
        }, 1E4)
    }
    class IW {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function JW(a) {
        EW.g.push(a)
    }

    function KW(a, b, c, d, e, f, g = null) {
        DW(a.document.body.clientWidth);
        d = b.ja ? LW(a, b, d, e, f, g) : MW(a, b, d, e, f, g);
        $p(d.isVisible(), !1, () => {
            FW = !1;
            for (const k of EW.g) k();
            EW.g.length = 0
        });
        d.show({
            Lg: !0
        });
        FW = !0;
        const h = new IW(a, b, c);
        GW(h);
        EW.g.push(() => {
            var k = b.O,
                l = k.ge;
            var m = new ln;
            m = Mi(m, 1, c);
            var n = new jn;
            m = A(m, 3, mn, n);
            l.call(k, m);
            h.g = !0
        })
    }

    function LW(a, b, c, d, e, f) {
        d = e.Te({
            win: a,
            Ha: c,
            Th: d,
            J: b.J,
            ja: b.ja,
            Z: b.Z(),
            T: b.T,
            Qg: f,
            Mg: b.ja ? a.innerWidth : Math.min(a.document.body.clientWidth, b.J.Sd),
            ac: b.ac.bind(b),
            Vb: b.Vb.bind(b),
            Qh: JW
        });
        return BC(a, d, {
            Jh: .95,
            Wg: .95,
            zIndex: 2147483647,
            tc: !0,
            jf: "adpub-drawer-root",
            hf: !1,
            Ra: !0,
            qf: new R(dW(b.T, c))
        })
    }

    function MW(a, b, c, d, e, f) {
        const g = b.ja ? a.innerWidth : Math.min(a.document.body.clientWidth, b.J.Sd);
        d = e.Te({
            win: a,
            Ha: c,
            Th: d,
            J: b.J,
            ja: b.ja,
            Z: b.Z(),
            T: b.T,
            Qg: f,
            Mg: g,
            ac: b.ac.bind(b),
            Vb: b.Vb.bind(b),
            Qh: JW
        });
        return LB(a, d, {
            xd: `${g}px`,
            ud: b.Z(),
            jd: G(b.T, 14),
            zIndex: 2147483647,
            tc: !0,
            Og: !0,
            jf: "adpub-drawer-root",
            hf: !1,
            Ra: !0,
            qf: new R(dW(b.T, c))
        })
    };

    function NW(a, b, c) {
        b = b.getBoundingClientRect();
        a = Vm(Um(new Wm, a), 3);
        c = Oi(a, 4, c);
        c = Ki(c, 6, Math.round(b.x));
        return Ki(c, 7, Math.round(b.y))
    }

    function OW(a) {
        a = nW(a);
        var b = new Sm;
        b = Ki(b, 1, a[0]);
        b = Ki(b, 2, a[1]);
        b = Ki(b, 3, a[2]);
        return fi(b, 4, og(a[3]), 0)
    };
    const PW = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function QW(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || PW.test(a)
        }
    };

    function RW(a, b) {
        const c = new SW(b);
        for (const d of a) G(d, 5) && Bi(d, 3, x()).forEach(e => {
            TW(c, e, e)
        });
        UW(c);
        return new VW(c)
    }

    function WW(a, b) {
        b = a.match(b);
        a = new Map;
        for (const c of b)
            if (b = c.j, a.has(b)) {
                const d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return Array.from(a.values())
    }
    var VW = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    };

    function TW(a, b, c) {
        const d = a.i.has(c) ? a.i.get(c) : a.l++;
        a.i.set(c, d);
        a.A.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.g[c].contains(f) || (a.g.push(new XW), a.g[a.size].A = c, a.g[a.size].B = f, a.g[c].j.set(f, a.size), a.size++);
            c = a.g[c].j.get(f)
        }
        a.g[c].l = !0;
        a.g[c].C = d;
        a.g[c].G = a.j.length;
        a.j.push(b.length)
    }

    function UW(a) {
        const b = [];
        for (b.push(0); b.length > 0;) {
            const f = b.shift();
            var c = a,
                d = c.g[f];
            if (f === 0) d.g = 0, d.i = 0;
            else if (d.A === 0) d.g = 0, d.i = d.l ? f : c.g[c.g[f].g].i;
            else {
                d = c.g[c.g[f].A].g;
                for (var e = c.g[f].B;;) {
                    if (c.g[d].contains(e)) {
                        c.g[f].g = c.g[d].j.get(e);
                        break
                    }
                    if (d === 0) {
                        c.g[f].g = 0;
                        break
                    }
                    d = c.g[d].g
                }
                c.g[f].i = c.g[f].l ? f : c.g[c.g[f].g].i
            }
            for (const g of a.g[f].ua) b.push(g)
        }
    }
    class SW {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.g = [new XW];
            this.j = [];
            this.i = new Map;
            this.A = new Map;
            this.l = 0
        }
        isEmpty() {
            return this.l === 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let g = 0; g < a.length; g++) {
                for (;;) {
                    var d = a.charCodeAt(g),
                        e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (b === 0) break;
                    b = e.g
                }
                let h = b;
                for (;;) {
                    h = this.g[h].i;
                    if (h === 0) break;
                    const k = g + 1 - this.j[this.g[h].G],
                        l = g;
                    d = a;
                    e = l;
                    var f = this.C;
                    QW(d.charAt(k - 1), f) && QW(d.charAt(e + 1), f) && c.push(new YW(k, l, this.A.get(this.g[h].C)));
                    h = this.g[h].g
                }
            }
            return c
        }
    }
    class XW {
        constructor() {
            this.j = new Map;
            this.L = !1;
            this.na = this.H = this.F = this.da = this.P = this.U = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set A(a) {
            this.U = a
        }
        get A() {
            return this.U
        }
        set B(a) {
            this.P = a
        }
        get B() {
            return this.P
        }
        set l(a) {
            this.L = a
        }
        get l() {
            return this.L
        }
        set C(a) {
            this.H = a
        }
        get C() {
            return this.H
        }
        set g(a) {
            this.da = a
        }
        get g() {
            return this.da
        }
        set i(a) {
            this.F = a
        }
        get i() {
            return this.F
        }
        set G(a) {
            this.na = a
        }
        get G() {
            return this.na
        }
        get ua() {
            return this.j.values()
        }
    }
    var YW = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.A = c
        }
        get j() {
            return this.i
        }
        get l() {
            return this.g
        }
        get Ha() {
            return this.A
        }
        get length() {
            return this.g - this.i
        }
    };
    async function ZW(a, b, c, d, e) {
        const f = RW(RV(b.T), b.i);
        if (!f.isEmpty()) {
            var g = new Map;
            for (const h of RV(b.T).filter(k => G(k, 5))) Bi(h, 3, x()).forEach(k => {
                g.set(k, G(h, 1))
            });
            await $W(a, a.document.body, b, f, g, new Set, c, d, b.J.Rd ? new sW(0, 0, 0, b.J.Rd) : null, e)
        }
    }
    async function $W(a, b, c, d, e, f, g, h, k, l) {
        g.g.sa(9) >= g.i && await iW(g, 10);
        if (b.nodeType !== Node.ELEMENT_NODE || !b.classList ? .contains("google-anno-skip"))
            if (c.J.Bf && f.size && b.nodeType === Node.ELEMENT_NODE && aX(a, b) && b.parentElement && !bX(a, c, b.parentElement) && cX(a, f, c, h, b.parentElement, b, k), b.nodeType === Node.TEXT_NODE && b.textContent) WW(d, b.textContent).map(m => e.get(m.Ha)).filter(m => !!m).forEach(m => void f.add(m));
            else {
                for (const m of b.childNodes) await $W(a, m, c, d, e, f, g, h, k, l);
                f.size && b.nodeType === Node.ELEMENT_NODE && ["block", "table-cell"].includes(a.getComputedStyle(b).display) && !bX(a, c, b) && cX(a, f, c, h, b, null, k)
            }
    }

    function cX(a, b, c, d, e, f, g) {
        for (const h of b) {
            if (g && qW(g)) return;
            const k = NW(c.O.Zc(), f ? ? e, h);
            d.entries.push(Kh(k));
            g && uW(g.i, h, g.g);
            if (F(c.T, 17)) continue;
            const l = BW(a, c, h, e),
                m = dX(l, c, ti(Zg(Nh(k, 10)), "0"));
            eX(c, 999, l, n => {
                try {
                    var p = c.O,
                        r = p.hc,
                        w = cn(an(h), ti(Zg(Nh(k, 10)), "0"));
                    var D = Li(w, 7, m.i);
                    const C = r.call(p, D);
                    KW(a, c, C, h, c.A.get(h) || "", c.qc);
                    return !1
                } finally {
                    n.preventDefault()
                }
            });
            e.insertBefore(l, f)
        }
        b.clear()
    }

    function aX(a, b) {
        return ["BR", "IMG", "TABLE"].includes(b.tagName) || a.getComputedStyle(b).display === "block"
    }

    function bX(a, b, c) {
        if (!b.J.Nd) return !1;
        a = ve(a.getComputedStyle(c).fontSize);
        return a !== null && a > b.J.Nd
    }
    class fX {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function dX(a, b, c) {
        const d = new fX;
        gX(b, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = c;
                    e = b.O;
                    var g = e.Ze,
                        h = new Bm;
                    f = fi(h, 1, Yg(f), "0");
                    d.g = g.call(e, f)
                } else d.g && (e = b.O, g = e.Ye, f = new Am, f = Mi(f, 1, d.g), g.call(e, f), d.g = null)
        }).observe(a);
        return d
    };

    function hX(a, b, c, d, e, f) {
        if (!a.g) {
            var g = b.document.createElement("span");
            g.appendChild(wW(b, "12px"));
            g.appendChild(b.document.createTextNode(d));
            RE(b, c || null, {
                informationText: g
            }, e, f ? h => {
                f.pf(h)
            } : f);
            a.g = !0
        }
    }
    var iX = class {
        constructor() {
            this.g = !1
        }
    };

    function jX(a, b, c) {
        const d = c.ja === c.Z;
        b = kX(a, b, c, d);
        if (!b) return null;
        b = b.position.zd();
        a = lX(a, b, c, function(f) {
            f = f.getBoundingClientRect();
            return d ? c.V - f.right : f.left
        });
        if (!a || a - 16 < 200) return null;
        const e = c.V;
        return {
            ta: d ? e - a : 16,
            Ea: d ? 16 : e - a,
            ga: b
        }
    }

    function mX(a, b) {
        const c = lp(a),
            d = P(a);
        return kD(new oD(a), new Zj(d - b.ga - 50, c - b.Ea, d - b.ga, b.ta)).size > 0
    }

    function kX(a, b, c, d) {
        c = Math.floor(c.W * .3);
        return c < 66 ? null : KD(a, {
            Ub: d ? QD({
                ga: 16,
                Ea: 16
            }) : OD({
                ga: 16,
                ta: 16
            }),
            If: c - 66,
            Cb: b.We ? 200 : 50,
            Nf: 50,
            Od: c,
            nb: 16
        }, [a.document.body]).Re
    }

    function lX(a, b, c, d) {
        a = c.ja ? nX(a, b, c) : oX(a, b, c);
        b = c.V;
        let e = c.ja ? b : b * .35;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return e < 16 ? null : e - 16
    }

    function nX(a, b, c) {
        const d = c.W;
        return kD(new oD(a), new Zj(d - b - 50, c.V - 16, d - b, 16))
    }

    function oX(a, b, c) {
        const d = c.W,
            e = c.V;
        c = c.Z;
        return kD(new oD(a), new Zj(d - b - 50, (c ? e * .35 : e) - 16, d - b, (c ? 16 : e * .65) + 16))
    }

    function pX(a, b, c) {
        const d = a.Z;
        return {
            ta: d ? qX(a, b, c) : c,
            Ea: d ? c : qX(a, b, c),
            ga: 16
        }
    }

    function qX(a, b, c) {
        const d = a.V;
        return a.ja ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function rX(a, b) {
        const c = b.Z,
            d = b.V;
        a = b.ja ? nX(a, 16, b) : oX(a, 16, b);
        return Array.from(a).map(e => new JD(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function sX(a, b, c, d, e, f, g, h, k) {
        if (b.J.nd) Pd(c);
        else {
            u(c, {
                width: "50px",
                bottom: g ? g.ga + "px" : "16px",
                left: b.Z() === b.ja ? "" : g ? g.ta + "px" : "16px",
                right: b.Z() === b.ja ? g ? g.Ea + "px" : "16px" : ""
            });
            c.role = "button";
            c.ariaLabel = G(b.T, 20);
            u(e, {
                display: "none"
            });
            u(d, {
                display: "none"
            });
            var l = yW(a, "20px", b.J.Va || "inherit", b.g.get(k.ya) || 0);
            a = a.document.createElement("SPAN");
            u(a, {
                display: "inline-block",
                position: "absolute",
                top: "14px",
                left: "15px",
                cursor: "pointer"
            });
            u(l, {
                cursor: "pointer"
            });
            c.appendChild(a);
            a.appendChild(l);
            eX(b,
                1064, c, m => {
                    h ? .();
                    l.remove();
                    u(c, {
                        bottom: g ? g.ga + "px" : "16px",
                        left: g ? g.ta + "px" : b.ja ? "16px" : b.Z() ? "16px" : "65%",
                        right: g ? g.Ea + "px" : tX(b),
                        width: ""
                    });
                    c.role = "";
                    c.ariaLabel = "";
                    u(e, {
                        display: ""
                    });
                    u(d, {
                        display: "flex"
                    });
                    f.focus();
                    m.preventDefault();
                    return !1
                });
            c.focus()
        }
    }

    function tX(a) {
        return a.Z() ? a.ja ? "16px" : "65%" : "16px"
    }

    function uX(a) {
        return {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (a.Z(), "50px"),
            right: a.Z() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: a.J.Va || "#FFFFFF",
            cursor: "pointer",
            transition: "width 5s"
        }
    }

    function vX(a) {
        return {
            "margin-left": a ? "6px" : "4px",
            "margin-right": a ? "4px" : "6px",
            "margin-top": "12px"
        }
    }

    function wX(a, b, c) {
        a.tabIndex = 0;
        a.role = "link";
        a.ariaLive = "polite";
        a.ariaLabel = c.replace("TERM", b)
    };

    function xX(a, b, c, d, e, f, g, h, k) {
        const l = document.createElement("SPAN");
        u(l, Fs(a));
        l.id = "gda";
        l.appendChild(AW(a, G(b.T, 18), b.J.Va));
        eX(b, 1064, l, m => {
            g ? .();
            sX(a, b, c, d, l, e, f, h, k);
            m.preventDefault();
            m.stopImmediatePropagation();
            return !1
        });
        return l
    }

    function yX(a, b, c, d) {
        const e = document.createElement("SPAN");
        u(e, Fs(a));
        vW(e);
        u(e, uX(b));
        b.ja || u(e, {
            "justify-content": ""
        });
        const f = yW(a, "20px", b.J.Va, b.g.get(d.ya) || 0),
            g = document.createElement("SPAN");
        u(g, {
            display: "inline-block",
            cursor: "inherit"
        });
        u(g, vX(b.Z()));
        e.appendChild(g);
        g.appendChild(f);
        c.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        wX(c, d.ya, G(b.T, 19));
        u(c, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: b.J.Va || "inherit"
        });
        eX(b, 999, e, h => {
            h.preventDefault();
            if ((d.wg ? ? 0) + 800 <= b.sa(25)) {
                h = d.ya;
                const n = b.l.get(h) || "";
                var k = b.O,
                    l = k.hc;
                var m = cn(an(h), d.Gc);
                m = Li(m, 3, d.Hd);
                k = l.call(k, m);
                KW(a, b, k, h, n, b.qc, b.J.Tc ? b.j.get(h) || "" : null)
            }
            return !1
        });
        e.appendChild(c);
        return e
    }

    function zX(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                c.type === "attributes" && a.document.body.style.paddingBottom === "0px" && u(a.document.body, {
                    "padding-bottom": "66px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function AX(a, b, c, d, e, f) {
        if (!b.J.me) {
            var g = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
            u(a.document.body, {
                "padding-bottom": (g && g.length ? Number(g[0]) : 0) + 66 + "px"
            });
            zX(a)
        }
        g = document.createElement("div");
        u(g, Fs(a));
        g.id = "google-anno-sa";
        g.dir = b.Z() ? "rtl" : "ltr";
        g.tabIndex = 0;
        var h = {
            background: b.J.Ce || "#1A73E8",
            "border-style": "solid",
            bottom: d ? d.ga + "px" : "16px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: d ? d.ta + "px" : b.ja ? "16px" : b.Z() ? "16px" : "65%",
            right: d ? d.Ea + "px" : tX(b),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        };
        u(g, h);
        u(g, {
            fill: "white"
        });
        const k = document.createElement("SPAN");
        u(k, Fs(a));
        u(k, {
            cursor: "inherit"
        });
        h = yX(a, b, k, c);
        a = xX(a, b, g, h, k, d, e, f, c);
        g.appendChild(h);
        g.appendChild(a);
        return g
    }

    function BX(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.ya);
        if ((d.g.get(e) || 0) !== (d.g.get(a.ya) || 0)) {
            b = yW(b, "20px", d.J.Va, d.g.get(a.ya) || 0);
            for (var g of c.getElementsByClassName("google-anno-sa-intent-icon")) g.replaceWith(b)
        }
        c = a.ya;
        g = G(d.T, 19);
        f.ariaLabel = g.replace("TERM", c);
        f = d.O;
        c = f.Je;
        g = new Fm;
        g = Qh(g, 2, Yg(a.Gc));
        g = Oi(g, 4, a.ya);
        a = Ni(g, 3, d.J.Id ? a.i : null);
        return c.call(f, a)
    }

    function CX(a, b, c, d) {
        if (mX(b, d)) return null;
        a.wg = c.sa(24);
        d = AX(b, c, a, d, () => {
            c.J.nd && (a.g = !0);
            var f = c.O,
                g = f.De;
            var h = new Cm;
            h = fi(h, 3, Yg(a.Gc), "0");
            h = Oi(h, 2, a.ya);
            g.call(f, h)
        }, () => c.O.He(new Dm));
        const e = BX(a, b, d, c, a.ya);
        b.document.body.appendChild(d);
        return e
    }

    function DX(a, b, c, d, e, f, g, h) {
        if (!(a.g || a.ya === e && a.Gc === d && a.j === g)) {
            if (a.Hd !== null) {
                var k = a.Hd,
                    l = c.O,
                    m = l.Ie,
                    n = new Em;
                k = Mi(n, 1, k);
                m.call(l, k)
            }
            l = a.ya;
            a.ya = e;
            a.i = f;
            a.Gc = d;
            a.j = g;
            F(c.T, 17) || (d = b.document.getElementById("google-anno-sa"), a.Hd = d ? BX(a, b, d, c, l) : CX(a, b, c, h))
        }
    }
    var EX = class {
        constructor() {
            this.ya = "";
            this.i = void 0;
            this.Gc = null;
            this.j = "";
            this.Hd = null;
            this.g = !1;
            this.wg = null
        }
    };

    function FX(a, b) {
        a.g >= a.i.length && (a.g = 0);
        if (FW) EW.g.push(() => void FX(a, b));
        else {
            var c = a.i[a.g++];
            a.j = !1;
            DX(a.A, a.win, a.config, c.i, c.Ha, c.g, c.j, a.l);
            HW(a.config, 898, a.win, () => void FX(a, b), a.eg)
        }
    }
    var GX = class {
        constructor(a, b, c) {
            var d = new EX;
            this.win = a;
            this.config = b;
            this.A = d;
            this.l = c;
            this.i = [];
            this.j = !0;
            this.g = 0;
            this.eg = b.params.eg
        }
    };
    class HX {
        constructor(a, b, c, d) {
            this.i = a;
            this.Ha = b;
            this.g = c;
            this.j = d
        }
    };
    const IX = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function JX(a, b, c, d, e) {
        d.g.sa(5) >= d.i && await iW(d, 6);
        c.J.lf || KX(a, b, c, e, RV(c.T));
        c.J.mf && !LX(a) || await c.pa(898, ZW(a, c, d, e, b));
        c.J.nf || await MX(a, c, () => new iX, d, e)
    }

    function LX(a) {
        try {
            const b = a.location ? .href ? .match(/goog_fac=1/);
            return b !== null && b !== void 0
        } catch (b) {
            return !1
        }
    }
    async function MX(a, b, c, d, e) {
        var f = RV(b.T);
        var g = new SW(b.i);
        for (const h of f) G(h, 6) !== "" && (f = G(h, 1), TW(g, f, f));
        UW(g);
        g = new VW(g);
        g.isEmpty() || await b.pa(898, NX(a, b, d, e, g, new sW(b.params.Vk, b.params.Xf, b.params.Oe, b.params.Pd), c()))
    }
    async function NX(a, b, c, d, e, f, g) {
        let h = a.document.body;
        if (F(b.T, 17) || y(b.T, Vr, 21))
            for (; h;) {
                c.g.sa(7) >= c.i && await iW(c, 8);
                if (h.nodeType === Node.TEXT_NODE && h.textContent !== "" && h.parentElement) {
                    const tc = h.parentElement;
                    a: {
                        var k = a,
                            l = b,
                            m = tc,
                            n = h.textContent,
                            p = d,
                            r = e,
                            w = f;
                        const $b = [];b: {
                            var D = n;
                            switch (l.i) {
                                case 1:
                                    var C = D;
                                    const uc = Array(C.length);
                                    let Kb = 0;
                                    for (let Lb = 0; Lb < C.length; Lb++) PW.test(C[Lb]) || Kb++, uc[Lb] = Kb;
                                    var I = uc;
                                    break b;
                                default:
                                    var N = D;
                                    const vc = Array(N.length);
                                    let Rc = 0,
                                        cb = 0;
                                    for (; cb < N.length;) {
                                        for (;
                                            /\s/.test(N[cb]);) vc[cb] =
                                            Rc, cb++;
                                        let Lb = !1;
                                        for (; cb < N.length && !/\s/.test(N[cb]);) Lb = !0, vc[cb] = Rc, cb++;
                                        Lb && (Rc++, vc[cb - 1] = Rc)
                                    }
                                    I = vc
                            }
                        }
                        const xb = I,
                            Gj = n.includes("\u00bb") ? [] : WW(r, n);
                        let me = -1;
                        for (const uc of Gj) {
                            const Kb = uc.j,
                                vc = uc.l;
                            if (Kb < me) continue;
                            var E = w,
                                ca = uc.Ha;
                            tW(E.i, E.g + xb[Kb]);
                            var V = E,
                                Ga = V.i,
                                db = ca;
                            if (!((Ga.g.has(db) ? Ga.g.get(db).length : 0) < V.Xf && E.i.j < E.Oe)) continue;
                            const Rc = k.getComputedStyle(m),
                                cb = Rc.fontSize.match(/\d+/);
                            if (!(cb && Number(cb[0]) >= 12 && Number(cb[0]) <= 22 && Ya(IX, Rc.display))) {
                                w.g += xb[xb.length - 1];
                                var Ub = [];
                                break a
                            }
                            const Lb = me + 1;
                            Lb < Kb && $b.push(k.document.createTextNode(n.substring(Lb, Kb)));
                            const Og = n.substring(Kb, vc + 1);
                            var na = n,
                                Fb = Kb,
                                Oc = vc + 1;
                            const Hj = na.substring(Math.max(Fb - 30, 0), Fb) + "~~" + na.substring(Oc, Math.min(Oc + 30, na.length));
                            var Pc = k,
                                le = l.O.Zc(),
                                ja = m,
                                md = Og,
                                vj = Hj,
                                wj = uc.Ha,
                                xj = xb[Kb];
                            const Pg = ja.getBoundingClientRect();
                            var yj = Vm(Um(new Wm, le), 2);
                            var Fn = Oi(yj, 2, md);
                            var Gn = Oi(Fn, 3, vj);
                            var Hn = Oi(Gn, 4, wj);
                            var In = Ki(Hn, 5, xj);
                            var Jn = Ki(In, 6, Math.round(Pg.x));
                            var Kn = Ki(Jn, 7, Math.round(Pg.y));
                            const Sc =
                                Pc.getComputedStyle(ja);
                            var Ln = new Tm;
                            var Mn = Oi(Ln, 1, Sc.fontFamily);
                            var Nn = OW(Sc.color);
                            var On = z(Mn, 7, Nn);
                            var Pn = OW(Sc.backgroundColor);
                            var Qn = z(On, 8, Pn);
                            const Qg = Sc.fontSize.match(/^(\d+(\.\d+)?)px$/);
                            var Kg = Ki(Qn, 4, Qg ? Math.round(Number(Qg[1])) : 0);
                            const hf = Math.round(Number(Sc.fontWeight));
                            isNaN(hf) || hf === 400 || Ki(Kg, 5, hf);
                            Sc.textDecorationLine !== "none" && Oi(Kg, 6, Sc.textDecorationLine);
                            var Rn = z(Kn, 8, Kg);
                            const jf = [];
                            let Id = ja;
                            for (; Id && jf.length < 20;) {
                                var Aj = jf,
                                    Sn = Aj.push,
                                    Lg = Id,
                                    Tn = new Rm;
                                const Sg = Oi(Tn,
                                    1, Lg.tagName);
                                Lg.className !== "" && ei(Sg, 2, Lg.className.split(" "), $g);
                                Sn.call(Aj, Sg);
                                if (Id.tagName === "BODY") break;
                                Id = Id.parentElement
                            }
                            var Un = jf.reverse();
                            const Rg = ni(Rn, 9, Un);
                            p.entries.push(Kh(Rg));
                            $b.push(OX(k, l, ti(Zg(Nh(Rg, 10)), "0"), uc.Ha, Og, m));
                            uW(w.i, uc.Ha, w.g + xb[Kb]);
                            me = vc;
                            if (qW(w)) break
                        }
                        const gf = me + 1;gf !== 0 && gf < n.length && $b.push(k.document.createTextNode(n.substring(gf)));w.g += xb[xb.length - 1];Ub = $b
                    }
                    const Qc = Ub;
                    if (Qc.length && !F(b.T, 17)) {
                        !b.J.Tc && hX(g, a, b.params.Kg ? YV(a, b.params.Kg) : void 0, G(b.T,
                            3), Lh(y(b.T, Vr, 21)), b.O);
                        for (const $b of Qc) tc.insertBefore($b, h), PX($b);
                        tc.removeChild(h);
                        for (h = Qc[Qc.length - 1]; h.lastChild;) h = h.lastChild;
                        if (qW(f)) break
                    }
                }
                a: {
                    var Vn = a,
                        mb = h,
                        Wn = f,
                        Xn = b.i,
                        Mg = b.J;
                    if (mb.firstChild && (mb.nodeType !== Node.ELEMENT_NODE ? 0 : !mb.classList ? .contains("google-anno-skip") && (mb.offsetHeight || Mg.Gf && Vn.getComputedStyle(mb).display === "contents"))) {
                        b: {
                            switch (mb.tagName ? .toUpperCase ? .()) {
                                case "IFRAME":
                                case "A":
                                case "AUDIO":
                                case "BUTTON":
                                case "CANVAS":
                                case "CITE":
                                case "CODE":
                                case "EMBED":
                                case "FOOTER":
                                case "FORM":
                                case "KBD":
                                case "LABEL":
                                case "OBJECT":
                                case "PRE":
                                case "SAMP":
                                case "SCRIPT":
                                case "SELECT":
                                case "STYLE":
                                case "SUB":
                                case "SUPER":
                                case "SVG":
                                case "TEXTAREA":
                                case "TIME":
                                case "VAR":
                                case "VIDEO":
                                case null:
                                    var Bj = !1;
                                    break b
                            }
                            Bj = !((mb.className.toUpperCase ? .() ? .includes("CRUMB") || mb.id.toUpperCase ? .() ? .includes("CRUMB")) && (Mg.Qd === 0 || mb.offsetHeight <= Mg.Qd))
                        }
                        if (Bj) {
                            h = mb.firstChild;
                            break a
                        }
                        if (mb.textContent ? .length) {
                            var Cj = Wn;
                            b: {
                                var Dj = mb.textContent;
                                switch (Xn) {
                                    case 1:
                                        var Ej = Dj;
                                        let Qc = 0;
                                        for (let xb = Ej.length - 1; xb >= 0; xb--) PW.test(Ej[xb]) || Qc++;
                                        var Fj = Qc;
                                        break b;
                                    default:
                                        const $b = Dj.trim();
                                        Fj = $b === "" ? 0 : $b.split(/\s+/).length
                                }
                            }
                            tW(Cj.i, Cj.g + Fj)
                        }
                    }
                    let tc = mb;
                    for (;;) {
                        if (tc.nextSibling) {
                            h = tc.nextSibling;
                            break a
                        }
                        if (!tc.parentNode) {
                            h =
                                null;
                            break a
                        }
                        tc = tc.parentNode
                    }
                    h = void 0
                }
            }
    }

    function QX(a, b) {
        var c = b.J;
        b = {
            Z: b.Z(),
            ja: b.ja,
            V: lp(a),
            W: P(a)
        };
        if (b.W >= 400)
            if ((c = jX(a, c, b)) != null) var d = c;
            else a: {
                c = b.V;
                var e = rX(a, b);a = 16;
                for (d of e) {
                    e = d.start;
                    const f = d.end;
                    if (e > a) {
                        if (e - a - 16 >= 200) {
                            d = pX(b, e, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                d = c - a - 16 >= 200 ? pX(b, c, a) : null
            }
        else d = null;
        return d
    }

    function KX(a, b, c, d, e) {
        function f() {
            return h ? ? (h = c.Vb(898, a, () => {
                if (!g) {
                    a.clearInterval(h);
                    g = !0;
                    var l = QX(a, c);
                    l && (RX(a, b, c, d, e, l), c.O.Fc(bW(d, c.T)))
                }
            }, c.J.Fe))
        }
        if (e.filter(l => G(l, 7).length).length) {
            var g = !1,
                h = void 0,
                k = SX(c, a, () => {
                    if (!(a.scrollY <= c.J.Ge || g)) {
                        var l = QX(a, c);
                        l ? (g = !0, a.removeEventListener("scroll", k), RX(a, b, c, d, e, l), c.O.Fc(bW(d, c.T))) : h = f()
                    }
                });
            HW(c, 898, a, () => {
                if (!g) {
                    var l = QX(a, c);
                    l ? (g = !0, RX(a, b, c, d, e, l), c.O.Fc(bW(d, c.T))) : h = f()
                }
            }, c.J.Ee)
        }
    }

    function RX(a, b, c, d, e, f) {
        e = e.filter(h => G(h, 7).length);
        if (e.length && (f = f ? ? QX(a, c))) {
            var g = new GX(a, c, f);
            e.forEach(h => {
                var k = c.O.Zc(),
                    l = G(h, 1),
                    m = Gi(h);
                var n = Ei(h, 4);
                k = Vm(Um(new Wm, k), 1);
                l = Oi(k, 4, l);
                m = Ni(l, 11, m);
                n = Ji(m, 12, n);
                d.entries.push(Kh(n));
                n = ti(Zg(Nh(n, 10)), "0");
                m = G(h, 1);
                l = c.J.Id ? Gi(h) : void 0;
                h = G(h, 1);
                g.i.push(new HX(n, m, l, h));
                g.j && FX(g, b)
            })
        }
    }

    function PX(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if (a.tagName === "A") {
                var b = pW(nW(getComputedStyle(a.parentElement).color)),
                    c = pW(nW(getComputedStyle(a).color));
                var d = oW(a);
                if (d = b && c && d ? pN(c, d) < Math.min(pN(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = b < 16 ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    u(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) PX(a.children[b])
        }
    }
    class TX {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function OX(a, b, c, d, e, f) {
        const g = a.document.createElement("SPAN");
        g.className = "google-anno-t";
        vW(g);
        u(g, {
            "text-decoration": "underline"
        });
        u(g, {
            "text-decoration-style": "dotted"
        });
        u(g, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        u(g, {
            color: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-style": "inherit",
            "font-weight": "inherit"
        });
        g.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        vW(e);
        u(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        dd(e);
        e.className = "google-anno";
        e.appendChild(wW(a, a.getComputedStyle(f).fontSize));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(g);
        const h = UX(b, c, e);
        eX(b, 999, e, k => {
            try {
                var l = b.O,
                    m = l.hc,
                    n = cn(an(d), c);
                var p = Li(n, 2, h.i);
                const r = m.call(l, p);
                KW(a, b, r, d, b.C.get(d) || "", b.qc, b.J.Tc ? b.j.get(d) || "" : null);
                return !1
            } finally {
                k.preventDefault(), k.stopImmediatePropagation()
            }
        });
        return e
    }

    function UX(a, b, c) {
        const d = new TX;
        gX(a, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.O;
                    var g = e.Kf,
                        h = new hn;
                    f = fi(h, 2, Yg(f), "0");
                    d.g = g.call(e, f)
                } else d.g && (e = a.O, g = e.Jf, f = new gn, f = Mi(f, 1, d.g), g.call(e, f), d.g = null)
        }).observe(c);
        return d
    };

    function VX(a, b, c) {
        WX(a);
        var d = new Map;
        for (const e of b) b = XX(e), d.set(b, (d.get(b) ? ? 0) + 1);
        for (const [e, f] of d) d = e, YX(a, f, d, c), ZX(a, d)
    }

    function $X(a, b, c, d) {
        a.i.forEach(e => {
            aY(e, { ...a.g,
                outcome: b,
                Bc: c,
                uf: d
            })
        })
    }

    function bY(a, b, c, d) {
        a.i.forEach(e => {
            e.Le(b, { ...a.g,
                outcome: c,
                Bc: !1,
                uf: d
            })
        })
    }

    function WX(a) {
        a.l || (a.l = !0, a.i.forEach(b => {
            cY(b, a.g)
        }))
    }

    function YX(a, b, c, d) {
        a.i.forEach(e => {
            e.Ne(b, { ...a.g,
                format: c,
                Bc: d
            })
        })
    }

    function ZX(a, b) {
        a.A.has(b) || (a.A.add(b), a.i.forEach(c => {
            dY(c, { ...a.g,
                format: b
            })
        }))
    }

    function eY(a, b) {
        a.i.forEach(c => {
            fY(c, { ...a.g,
                reason: gY(b)
            })
        })
    }
    var oY = class {
        constructor(a, b) {
            this.language = a;
            this.g = {
                language: this.language,
                Ba: Bd() ? 1 : Ad() ? 2 : (vd() ? 0 : t("Edge")) ? 3 : yd() ? 4 : xd() ? 5 : !t("iPad") && !t("iPhone") || zd() || Ad() || (vd() ? 0 : t("Coast")) || yd() || !t("AppleWebKit") ? wd() ? 6 : zd() ? 7 : t("Silk") ? 8 : 0 : 9
            };
            this.C = this.j = 1;
            this.l = !1;
            this.A = new Set;
            this.i = [...b]
        }
        Zc() {
            return this.C++
        }
        Me(a) {
            a: switch (ji(a, Zm)) {
                case 4:
                    var b = 1;
                    break a;
                case 5:
                    b = 2;
                    break a;
                default:
                    b = 0
            }
            const c = hY(a);
            var d = yi(a, 3),
                e = c.length > 0;$X(this, b, !1, e);bY(this, d, b, e);a.g() && c.length > 0 && VX(this, c, !1);
            if (Uh(a, Qm, 5, Zm)) {
                a = Di(a, Qm, 5, Zm);
                for (const f of mi(a, Mm, 1, x())) eY(this, f)
            }
            this.j++
        }
        Fc(a) {
            const b = a.g() ? 1 : 0,
                c = hY(a);
            $X(this, b, !0, c.length > 0);
            a.g() && c.length > 0 && VX(this, c, !0);
            this.j++
        }
        Kf() {
            this.i.forEach(a => {
                iY(a, { ...this.g,
                    format: 2
                })
            });
            return this.j++
        }
        Jf() {
            this.i.forEach(a => {
                jY(a, { ...this.g,
                    format: 2
                })
            });
            this.j++
        }
        Je() {
            this.i.forEach(a => {
                iY(a, { ...this.g,
                    format: 1
                })
            });
            return this.j++
        }
        Ie() {
            this.i.forEach(a => {
                jY(a, { ...this.g,
                    format: 1
                })
            });
            this.j++
        }
        Ze() {
            this.i.forEach(a => {
                iY(a, { ...this.g,
                    format: 3
                })
            });
            return this.j++
        }
        Ye() {
            this.i.forEach(a => {
                jY(a, { ...this.g,
                    format: 3
                })
            });
            this.j++
        }
        hc(a) {
            let b = 0;
            ri(a, 2) != null ? b = 2 : ri(a, 3) != null ? b = 1 : ri(a, 7) != null && (b = 3);
            this.i.forEach(c => {
                c.click({ ...this.g,
                    format: b
                })
            });
            return this.j++
        }
        ge(a) {
            let b = 0;
            Uh(a, kn, 2, mn) ? b = 1 : Uh(a, jn, 3, mn) && (b = 2);
            this.i.forEach(c => {
                kY(c, { ...this.g,
                    type: b
                })
            });
            this.j++
        }
        pf(a) {
            a: switch (Ai(a, 1)) {
                case 1:
                    a = 1;
                    break a;
                case 2:
                    a = 2;
                    break a;
                default:
                    a = 0
            }
            const b = a;this.i.forEach(c => {
                lY(c, { ...this.g,
                    type: b
                })
            });this.j++
        }
        De() {
            this.i.forEach(a => {
                mY(a, this.g)
            });
            this.j++
        }
        He() {
            this.i.forEach(a => {
                nY(a,
                    this.g)
            });
            return this.j++
        }
    };

    function hY(a) {
        a.g() ? (a = a.i(), a = [...mi(a, Wm, 2, x())]) : a = [];
        return a
    }

    function gY(a) {
        switch (ji(a, Nm)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 9:
                return 4;
            case 11:
                return 5;
            case 12:
                return 6;
            case 13:
                return 7;
            default:
                return 0
        }
    }

    function XX(a) {
        switch (Ai(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return 0
        }
    };

    function pY(a, b) {
        var c = new nn;
        var d = a.j++;
        c = Mi(c, 1, d);
        b = Mi(c, 2, Math.round(a.l.sa(b) - a.C));
        b = z(b, 10, a.B);
        return Ii(b, 15, a.G ? !0 : void 0)
    }
    var qY = class {
        constructor(a, b, c, d, e, f, g) {
            this.l = b;
            this.C = c;
            this.B = d;
            this.G = e;
            this.i = this.j = 1;
            this.A = [...f];
            this.g = g.length ? new oY(a, g) : null
        }
        Zc() {
            return this.i++
        }
        Me(a) {
            this.g ? .Me(a);
            var b = this.handle,
                c = pY(this, 11);
            a = A(c, 3, on, a);
            b.call(this, a)
        }
        Fc(a) {
            this.g ? .Fc(a);
            var b = this.handle,
                c = pY(this, 11);
            a = A(c, 14, on, a);
            b.call(this, a)
        }
        Kf(a) {
            this.g ? .Kf(a);
            var b = this.handle,
                c = pY(this, 13);
            a = A(c, 4, on, a);
            return b.call(this, a)
        }
        Jf(a) {
            this.g ? .Jf(a);
            var b = this.handle,
                c = pY(this, 14);
            a = A(c, 5, on, a);
            b.call(this, a)
        }
        Je(a) {
            this.g ? .Je(a);
            var b = this.handle,
                c = pY(this, 15);
            a = A(c, 6, on, a);
            return b.call(this, a)
        }
        Ie(a) {
            this.g ? .Ie(a);
            var b = this.handle,
                c = pY(this, 16);
            a = A(c, 7, on, a);
            b.call(this, a)
        }
        Ze(a) {
            this.g ? .Ze(a);
            var b = this.handle,
                c = pY(this, 17);
            a = A(c, 16, on, a);
            return b.call(this, a)
        }
        Ye(a) {
            this.g ? .Ye(a);
            var b = this.handle,
                c = pY(this, 18);
            a = A(c, 17, on, a);
            b.call(this, a)
        }
        hc(a) {
            this.g ? .hc(a);
            var b = this.handle,
                c = pY(this, 12);
            a = A(c, 8, on, a);
            return b.call(this, a)
        }
        ge(a) {
            this.g ? .ge(a);
            var b = this.handle,
                c = pY(this, 19);
            a = A(c, 9, on, a);
            b.call(this, a)
        }
        pf(a) {
            this.g ? .pf(a);
            var b = this.handle,
                c = pY(this, 20);
            a = A(c, 11, on, a);
            b.call(this, a)
        }
        De(a) {
            this.g ? .De(a);
            var b = this.handle,
                c = pY(this, 22);
            a = A(c, 12, on, a);
            b.call(this, a)
        }
        He(a) {
            this.g ? .He(a);
            var b = this.handle,
                c = pY(this, 23);
            a = A(c, 13, on, a);
            return b.call(this, a)
        }
        handle(a) {
            for (const b of this.A) b(a);
            return yi(a, 1)
        }
    };

    function rY(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    };

    function HW(a, b, c, d, e) {
        c.setTimeout(sY(a, b, d), e)
    }

    function eX(a, b, c, d) {
        c.addEventListener("click", sY(a, b, d))
    }

    function gX(a, b) {
        return new IntersectionObserver(sY(a, 1065, b), {
            threshold: .98
        })
    }

    function SX(a, b, c) {
        a = sY(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function sY(a, b, c) {
        return a.Ca.Ga(b, c, void 0, d => {
            d.es = a.J.Pb.join(",")
        })
    }
    var uY = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.ja = a;
            this.T = b;
            this.Ca = c;
            this.O = d;
            this.B = e;
            this.params = f;
            this.J = g;
            this.qc = h;
            this.C = new Map;
            this.l = new Map;
            this.A = new Map;
            this.g = new Map;
            this.j = new Map;
            this.i = Ya(tY, G(b, 7)) ? 1 : 0;
            for (const k of RV(this.T)) B(k, 6) != null && this.C.set(G(k, 1), G(k, 6)), B(k, 7) != null && this.l.set(G(k, 1), G(k, 7)), B(k, 5) != null && this.A.set(G(k, 1), G(k, 5)), wi(k, 10) != null && this.g.set(G(k, 1), Ai(k, 10)), B(k, 11) != null && this.j.set(G(k, 1), G(k, 11))
        }
        ac(a, b, c) {
            a = sY(this, a, c);
            b.addEventListener("message",
                a);
            return a
        }
        Vb(a, b, c, d) {
            return b.setInterval(sY(this, a, c), d)
        }
        pa(a, b) {
            this.Ca.pa(a, b, c => {
                c.es = this.J.Pb.join(",")
            });
            return b
        }
        sa(a) {
            return this.B.sa(a)
        }
        Z() {
            return Ai(this.T, 12) === 2
        }
    };
    const tY = ["ja", "zh_CN", "zh_TW"];

    function vY(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function wY(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function xY() {
        const a = new Set,
            b = fz();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function yY(a) {
        a = a.id;
        return a != null && (xY().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function zY(a, b, c) {
        if (!a.sources) return !1;
        switch (AY(a)) {
            case 2:
                const d = BY(a);
                if (d) return c.some(f => CY(d, f));
                break;
            case 1:
                const e = DY(a);
                if (e) return b.some(f => CY(e, f))
        }
        return !1
    }

    function AY(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function DY(a) {
        return EY(a, b => b.currentRect)
    }

    function BY(a) {
        return EY(a, b => b.previousRect)
    }

    function EY(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function CY(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function FY() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(yY),
            b = [...xY()].map(c => document.getElementById(c)).filter(c => c !== null);
        GY = window.scrollX;
        HY = window.scrollY;
        return IY = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function JY(a, b) {
        const c = GY !== window.scrollX || HY !== window.scrollY ? [] : IY,
            d = FY();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                KY(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Db = Math.floor(b.renderTime || b.loadTime);
                a.kb = b.size;
                break;
            case "first-input":
                b = e;
                a.Ja = Number((b.processingStart - b.startTime).toFixed(3));
                a.Oa = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || LY(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.B +=
                    b;
                a.H = Math.max(a.H, b);
                a.da += 1;
                break;
            case "event":
                LY(a, e);
                break;
            default:
                gd(b, void 0)
        }
    }

    function MY(a) {
        a.A || (a.A = new PerformanceObserver(gw(640, b => {
            JY(a, b)
        })));
        return a.A
    }

    function NY(a) {
        const b = gw(641, () => {
                MP(document) === 2 && OY(a)
            }),
            c = gw(641, () => void OY(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.ua = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            MY(a).disconnect()
        }
    }

    function OY(a) {
        if (!a.mg) {
            a.mg = !0;
            MY(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += wY("cls", a.G), b += wY("mls", a.L), b += vY("nls", a.U), window.LayoutShiftAttribution && (b += wY("cas", a.C), b += vY("nas", a.lg), b += wY("was", a.Cg)), b += wY("wls", a.na), b += wY("tls", a.Ag));
            window.LargestContentfulPaint && (b += vY("lcp", a.Db), b += vY("lcps", a.kb));
            window.PerformanceEventTiming && a.Oa && (b += vY("fid", a.Ja));
            window.PerformanceLongTaskTiming && (b += vY("cbt", a.B),
                b += vY("mbt", a.H), b += vY("nlt", a.da));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) yY(c) && d++;
            b += vY("nif", d);
            b += vY("ifi", Dk(window));
            c = O(Vo).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${q===q.top?1:0}`;
            b += a.og ? `&${"qqid"}=${encodeURIComponent(a.og)}` : vY("pvsid", Oe(q));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.A ? a.jb : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += vY("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.ua()
        }
    }

    function KY(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.G += Number(b.value);
            Number(b.value) > a.L && (a.L = Number(b.value));
            a.U += 1;
            if (c = zY(b, c, d)) a.C += b.value, a.lg++;
            if (b.startTime - a.Vc > 5E3 || b.startTime - a.ng > 1E3) a.Vc = b.startTime, a.i = 0, a.j = 0;
            a.ng = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.na && (a.na = a.i, a.Cg = a.j, a.Ag = b.startTime + b.duration)
        }
    }

    function LY(a, b) {
        PY(a, b);
        const c = a.g[a.g.length - 1],
            d = a.F[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.F[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.F[e.id]
        })
    }

    function PY(a, b) {
        b.interactionId && (a.P = Math.min(a.P, b.interactionId), a.l = Math.max(a.l, b.interactionId), a.jb = a.l ? (a.l - a.P) / 7 + 1 : 0)
    }
    var QY = class {
            constructor() {
                this.j = this.i = this.U = this.L = this.G = 0;
                this.ng = this.Vc = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.F = {};
                this.jb = 0;
                this.P = Infinity;
                this.Ja = this.kb = this.Db = this.lg = this.Cg = this.C = this.Ag = this.na = this.l = 0;
                this.Oa = !1;
                this.da = this.H = this.B = 0;
                this.A = null;
                this.mg = !1;
                this.ua = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.og = a ? a.getAttribute("data-google-query-id") : null;
                this.options = {
                    gj: !1
                }
            }
            observe() {
                var a = window;
                if (!a.google_plmetrics && window.PerformanceObserver) {
                    a.google_plmetrics = !0;
                    a = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    this.options.gj && a.push("event");
                    for (const b of a) a = {
                        type: b,
                        buffered: !0
                    }, b === "event" && (a.durationThreshold = 40), MY(this).observe(a);
                    NY(this)
                }
            }
        },
        GY, HY, IY = [];
    const RY = new Map([
        [1, 1],
        [2, 2]
    ]);
    async function SY(a, b, c, d, e, f, g, h) {
        var k = X,
            l = ((h = tP(new xP(a), "__gads", h)) ? pe(h + "t2Z7mVic") % 20 : null) ? ? Math.floor(je() * 20);
        h = f.sa(0);
        const m = lp(a) < 488,
            n = c.T;
        let p = "";
        c.J.yb && (p = rY(G(n, 7)));
        var r = p,
            w = c.J;
        l = dn(l);
        l = oi(l, 3, zg, w.Pb, si, void 0, !0);
        d = new qY(r, f, h, l, F(n, 17), d, w.yb ? e : []);
        e = new uY(m, n, k, d, f, c.params, c.J, c.qc);
        k = new cW;
        c.J.yb && (k.language = p);
        b = await TY(a, a.document, b, e, g, k);
        d.Me($V(k, m, c.ld, a.location.hostname, c.Oj, n, f.sa(11) - h, b))
    }
    async function TY(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !UY(b, d.J)) return [Lm()];
        e.g.sa(3) >= e.i && await iW(e, 4);
        d.J.yb || ZV(f, rY(G(d.T, 7)));
        b = [];
        a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]') && b.push(Om());
        (d.J.Wd && lp(a) < d.J.Wd || d.J.Vd && P(a) < d.J.Vd) && b.push(Lm());
        if (d.J.Hf && Ci(d.T, 1, x()).length) {
            const g = Ci(d.T, 1, x()).map(h => RY.get(h) ? ? 0);
            b.push(Pm(new Mm, Im(g)))
        }
        b.length || await JX(a, c, d, e, f);
        return b
    }

    function UY(a, b) {
        try {
            (new ResizeObserver(() => {})).disconnect(), b.me || (new MutationObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    }

    function VY() {
        var a = W(Ou),
            b = X;
        if (Math.random() < a) try {
            (new QY).observe()
        } catch (c) {
            b.ba(1161, c instanceof Error ? c : Error("Unknown error."))
        }
    };
    async function WY(a, b, c, d, e, f, g) {
        yd() || (VY(), d.push(async () => {
            delete window.google_plmetrics
        }));
        U(Au) || (a = await XY(a, b, c, d, e, f, g), a.qb.length && YY(b, c, g, a))
    }
    async function XY(a, b, c, d, e, f, g) {
        const h = a.performance ? .now ? new kW(a.performance) : new lW;
        a = new jW(a, h);
        if (typeof e !== "string") return e = new Mm, b = new Km, {
            Wa: null,
            qb: [A(e, 12, Nm, b)]
        };
        const k = WV(e);
        e = ki(k, SV);
        if (!b) return b = new Mm, d = new Km, b = A(b, 9, Nm, d), {
            Wa: e,
            qb: [b]
        };
        var l = c.google_ad_client;
        if (typeof l !== "string") return b = new Mm, d = new Km, b = A(b, 11, Nm, d), {
            Wa: e,
            qb: [b]
        };
        if (xd()) return {
            Wa: e,
            qb: [Lm()]
        };
        if (re()) return b = new Mm, d = new Km, b = A(b, 13, Nm, d), {
            Wa: e,
            qb: [b]
        };
        const m = U(Bu) ? new hW(l) : new gW(l);
        l = O(aG);
        c =
            ZY(c);
        var n = $Y(e);
        a: {
            try {
                const w = b ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (!w) {
                    var p = null;
                    break a
                }
                var r = decodeURIComponent(w[1]);
                p = TV(r);
                break a
            } catch (w) {
                p = null;
                break a
            }
            p = void 0
        }
        p = p || ki(k, SV);
        r = k.X;
        r = li(r, r[v], bs, 3, 1);
        r = {
            Vk: W(Hu),
            Xf: W(Lu),
            Oe: W(Ju),
            Pd: W(Ku),
            Kg: r,
            eg: W(Pu)
        };
        g = {
            T: p,
            ld: c,
            Oj: g,
            params: r,
            J: new XV({
                Pb: n,
                Ih: W(Ou),
                lf: U(au),
                nf: U(cu),
                Wd: W(Nu),
                Vd: W(Mu),
                Fe: W(Fu),
                Ce: vv(fu),
                Va: vv(gu),
                Ee: W(Eu),
                Ge: W(Gu),
                me: U(Cu),
                mf: U(bu),
                Xe: vv(Yt),
                hd: vv(Zt),
                Sd: W(tu),
                Tc: U(Bu),
                tf: wv(iu),
                Bf: U(lu),
                Rd: W(su),
                Tf: U(zu),
                nd: U(du),
                yb: W(vu) > 0,
                Qd: W(ru),
                Id: U(qu),
                Hf: U(pu),
                Gf: U(mu),
                We: U(Xt),
                Nd: W(uu),
                rf: U(eu)
            }),
            qc: m
        };
        await aZ(b, d, l, g, h, a, f);
        return {
            Wa: e,
            qb: []
        }
    }

    function $Y(a) {
        const b = O(Vo).g();
        a && b.push(...Xh(a, 24, wg, x()));
        b.push(...wv(Du).map(Number));
        b.push(42);
        b.sort((c, d) => c - d);
        return b
    }

    function YY(a, b, c, d) {
        a = $V(new cW, !!a && lp(a) < 488, ZY(b), a ? .location ? .hostname ? ? "", c, d.Wa ? ? new SV, 0, d.qb);
        c = Math.floor(je() * 20);
        b = new nn;
        b = Mi(b, 1, 1);
        b = Mi(b, 2, 0);
        c = dn(c);
        var e = $Y(d.Wa);
        c = oi(c, 3, zg, e, si, void 0, !0);
        b = z(b, 10, c);
        a = A(b, 3, on, a);
        bZ(O(aG), a, Date.now(), d.Wa)
    }
    async function aZ(a, b, c, d, e, f, g) {
        var h = ZA(a);
        h.wasReactiveAdConfigReceived[42] || (h.wasReactiveAdConfigReceived[42] = !0, h = [], d.J.yb && h.push(new cZ(c, d.T)), await SY(a, b, d, [k => {
            bZ(c, k, e.sa(21), d.T)
        }], h, e, f, g))
    }

    function bZ(a, b, c, d) {
        a && X.pa(1214, eG(a, b, c), e => void dZ(e, d))
    }

    function cY(a, b) {
        eZ(a, c => c.Ci, {
            ha: 1,
            ...b
        })
    }

    function dY(a, b) {
        eZ(a, c => c.Jj, {
            ha: 1,
            ...b
        })
    }

    function aY(a, b) {
        eZ(a, c => c.Di, {
            ha: 1,
            ...b
        })
    }

    function fY(a, b) {
        eZ(a, c => c.Ei, {
            ha: 1,
            ...b
        })
    }

    function iY(a, b) {
        eZ(a, c => c.Gi, {
            ha: 1,
            ...b
        })
    }

    function jY(a, b) {
        eZ(a, c => c.Fi, {
            ha: 1,
            ...b
        })
    }

    function kY(a, b) {
        eZ(a, c => c.Ck, {
            ha: 1,
            ...b
        })
    }

    function lY(a, b) {
        eZ(a, c => c.tj, {
            ha: 1,
            ...b
        })
    }

    function mY(a, b) {
        eZ(a, c => c.Ai, {
            ha: 1,
            ...b
        })
    }

    function nY(a, b) {
        eZ(a, c => c.Bi, {
            ha: 1,
            ...b
        })
    }

    function eZ(a, b, c) {
        a.g && a.Ca.pa(1214, fG(a.g, b, c), d => void dZ(d, a.i))
    }

    function fZ(a, b, c) {
        a.g && a.Ca.pa(1214, gG(a.g, b, c), d => void dZ(d, a.i))
    }
    class cZ {
        constructor(a, b) {
            var c = X;
            this.g = a;
            this.Ca = c;
            this.i = b
        }
        Le(a, b) {
            fZ(this, c => c.Le, {
                Rc: a,
                ...b
            })
        }
        Ne(a, b) {
            eZ(this, c => c.Ne, {
                ha: a,
                ...b
            })
        }
        click(a) {
            eZ(this, b => b.bj, {
                ha: 1,
                ...a
            })
        }
    }

    function dZ(a, b) {
        a.es = $Y(b).join(",")
    }

    function ZY(a) {
        a = a.google_page_url;
        return typeof a === "string" ? a : ""
    };
    const gZ = (a, b) => {
        const c = he("STYLE", a);
        c.textContent = Ac(Dc `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    };
    var iZ = (a, b, c) => {
        if (!a.body) return null;
        const d = new hZ;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && gZ(b.document, e);
            ok(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.j,
                position: d.l,
                top: d.A
            });
            b.scrollTo(0, d.i)
        }
    };
    class hZ {
        constructor() {
            this.g = this.A = this.l = this.j = null;
            this.i = 0
        }
        apply(a, b) {
            this.j = a.body.style.overflow;
            this.l = a.body.style.position;
            this.A = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.i = tp(b);
            ok(a.body, "top", -this.i + "px")
        }
    };

    function jZ(a, b) {
        var c;
        if (!a.j)
            for (a.j = [], c = a.g.parentElement; c;) {
                a.j.push(c);
                if (a.H(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.j.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var kZ = class extends Q {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.P = b;
            this.B = c;
            this.j = null;
            Op(this, () => this.j = null)
        }
        H(a) {
            return this.B === a
        }
    };

    function lZ(a, b) {
        const c = a.B;
        c && (b ? (hB(a.F), u(c, {
            display: "block"
        }), a.A.body && !a.l && (a.l = iZ(a.A, a.P, a.U)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.A.body.setAttribute("aria-hidden", "true")) : (iB(a.F), u(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function mZ(a) {
        lZ(a, !1);
        const b = a.B;
        if (b) {
            var c = nZ(a.L);
            jZ(a, d => {
                u(d, c);
                xp(d)
            });
            a.g.setAttribute("width", "");
            a.g.setAttribute("height", "");
            ok(a.g, c);
            ok(a.g, oZ);
            ok(b, pZ);
            ok(b, {
                background: "transparent"
            });
            u(b, {
                display: "none",
                position: "fixed"
            });
            xp(b);
            xp(a.g);
            Te(a.L) <= 1 || (ok(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Fe(b))
        }
    }
    class qZ extends kZ {
        constructor(a, b, c) {
            var d = W(gv);
            super(a, b, c);
            this.l = null;
            this.A = b.document;
            this.U = d;
            this.F = bB(new gB(b), 2147483646);
            this.L = b
        }
    }

    function nZ(a) {
        a = Te(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var pZ = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        oZ = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var rZ = class extends qZ {
        constructor(a, b, c) {
            super(b, a, c);
            mZ(this)
        }
        H(a) {
            return a.classList ? a.classList.contains("adsbygoogle") : Ya(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
        }
    };
    const sZ = {
        [1]: "closed",
        [2]: "granted",
        [3]: "cancelled"
    };
    async function tZ(a, b, c, d) {
        a = new uZ(a, b, c, d);
        await a.K();
        return a
    }

    function vZ(a) {
        return setTimeout(cz(728, () => {
            wZ(() => {
                a.A.reject()
            });
            a.dispose()
        }), W(Zu) * 1E3)
    }

    function xZ(a, b) {
        var c = vN(a.g).then(() => {
            clearTimeout(b);
            a.A.resolve()
        });
        X.pa(1005, c);
        c = wN(a.g).then(d => {
            yZ(a, sZ[d.status])
        });
        X.pa(1006, c);
        c = xN(a.g).then(() => {
            yZ(a, "error")
        });
        X.pa(1004, c)
    }

    function zZ(a) {
        if (U($u)) {
            a.win.location.hash !== "" && dz("pub_hash", {
                o_url: a.win.location.href
            }, .1);
            a.win.location.hash = "goog_fullscreen_ad";
            var b = cz(950, c => {
                c.oldURL.endsWith("#goog_fullscreen_ad") && (a.l === 10 ? yZ(a, "closed") : a.g.df.postMessage(JSON.stringify({
                    eventType: "backButton",
                    googMsgType: "fullscreen"
                }), "*"), a.win.removeEventListener("hashchange", b))
            });
            a.win.addEventListener("hashchange", b);
            Op(a, () => {
                a.win.removeEventListener("hashchange", b);
                a.win.location.hash === "#goog_fullscreen_ad" && a.win.history.back()
            })
        }
    }

    function wZ(a) {
        try {
            a()
        } catch (b) {}
    }

    function yZ(a, b) {
        lZ(a.F, !1);
        a.j && wZ(() => {
            a.j(b)
        });
        a.dispose()
    }
    var uZ = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.B = b;
            this.H = c;
            this.l = d;
            this.j = null;
            this.F = new rZ(a, c, b);
            a = new zN(this.l === 10 ? 1 : 2, this.win, this.H.contentWindow);
            a.K();
            this.g = a;
            this.A = new uN;
            this.B.dataset["slotcar" + (this.l === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async K() {
            const a = vZ(this);
            xZ(this, a);
            Op(this, () => {
                this.g.dispose();
                clearTimeout(a);
                Pd(this.B)
            });
            await this.A.promise
        }
        show(a) {
            this.C || (this.j = a, lZ(this.F, !0), q.IntersectionObserver || this.g.df.postMessage(JSON.stringify({
                eventType: "visible",
                googMsgType: "fullscreen"
            }), "*"), zZ(this))
        }
        disposeAd() {
            this.dispose()
        }
    };

    function AZ({
        Fg: a,
        Xh: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function BZ(a, b) {
        a.ag(c => {
            c.shv = String(b);
            c.mjsv = AZ({
                Fg: tF(),
                Xh: b
            });
            c.eid = oR(q)
        })
    };
    var GV = class extends K {};
    var CZ = class extends K {},
        DZ = Ti(CZ);

    function EZ() {
        var a = q.adsbygoogle;
        try {
            const b = a.pageState;
            qf(b, vf);
            return DZ(b)
        } catch (b) {
            return new CZ
        }
    };
    var FZ = typeof sttc === "undefined" ? void 0 : sttc;

    function GZ(a) {
        var b = X;
        try {
            return qf(a, vf), new XQ(JSON.parse(a))
        } catch (c) {
            b.ba(838, c instanceof Error ? c : Error(String(c)))
        }
        return new XQ
    };

    function HZ(a, b, c, d) {
        const e = new uN;
        let f = "";
        const g = k => {
            try {
                const l = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                f === l.paw_id && (Db(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (h) return Cb(a, "message", g), f = c(h), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers :
            void 0;
        return c ? (f = String(Math.floor(je() * 2147483647)), Cb(a, "message", g), b(c, f), e.promise) : null
    }

    function IZ(a) {
        return HZ(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    }(function(a) {
        return sf(b => {
            if (!zf(b)) return !1;
            for (const [c, d] of Object.entries(a)) {
                const e = c,
                    f = d;
                if (!(e in b)) {
                    if (f.ck === !0) continue;
                    return !1
                }
                if (!f(b[e])) return !1
            }
            return !0
        })
    })({
        vc: vf,
        pn: vf,
        eid: vf,
        vnm: function(a) {
            return Af(sf((b, c) => b === void 0 ? !0 : a(b, c)))
        }(vf),
        js: vf
    }, "RawGmaSdkStaticSignalObject");
    const JZ = (a, b) => {
        try {
            const k = F(b, 6) === void 0 ? !0 : F(b, 6);
            var c = dj(Ai(b, 2)),
                d = G(b, 3);
            a: switch (Ai(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new fj(c, d, e),
                g = y(b, Zi, 5) ? .g() ? ? "";
            f.Cc = g;
            f.g = k;
            f.win = a;
            var h = f.build();
            Xi(h)
        } catch {}
    };

    function KZ(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? JZ(a, b) : Cb(a, "load", () => void JZ(a, b)))
    };

    function LZ(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function MZ(a) {
        if (a === a.top || ce(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && LZ(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new uN;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                uc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function LF() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), Qe(W(Xu), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function NZ(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function OZ({
        ra: a,
        xa: b,
        Ya: c,
        slot: d,
        pageState: e
    }) {
        const f = d.vars,
            g = fe(d.pubWin),
            h = NZ(d),
            k = new qR({
                M: g,
                pubWin: d.pubWin,
                D: f,
                ra: a,
                xa: b,
                Ya: c,
                aa: h,
                pageState: e
            });
        k.H = Date.now();
        Yj(1, [k.D]);
        bz(1032, () => {
            if (g && U(rv)) {
                var l = k.D;
                CF(xF(), 32, !1) || (DF(xF(), 32, !0), kV(g, l.google_loader_used === "sd" ? 5 : 9))
            }
        });
        try {
            await PZ(k)
        } catch (l) {
            if (!X.ba(159, l, void 0, void 0)) throw l;
        }
        bz(639, () => {
            var l;
            var m = k.D;
            (l = k.M) && m.google_responsive_auto_format === 1 && m.google_full_width_responsive_allowed === !0 ? (m = (m = l.document.getElementById(m.google_async_iframe_id)) ?
                Ud(m, "INS", "adsbygoogle") : null) ? (l = new QQ(l, m), l.g = q.setInterval(Ja(l.i, l), 500), l.i(), l = !0) : l = !1 : l = !1;
            return l
        });
        g ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? ez(QZ(d.pubWin, g, f, k.j, Qi(UV()), k.g, G(a, 8)), l => void dZ(l, null)) : rN(k.pubWin, "affa", l => {
            ez(QZ(d.pubWin, g, f, k.j, l.config, k.g, G(a, 8)), m => void dZ(m, null));
            return !0
        });
        RZ(k);
        return k
    }
    async function QZ(a, b, c, d, e, f, g) {
        await WY(a, b, c, d, e, f, g)
    }

    function PZ(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        mR(13, b);
        mR(11, b);
        a.F = Di(a.ra, VQ, 13, YQ) ? .g() ? ? !0;
        b = xF();
        var c = CF(b, 23, !1);
        c || DF(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.ra;
            b = Uh(c, VQ, 13, YQ) ? y(Di(c, VQ, 13, YQ), LL, 2) : U(Rt) && Di(c, WQ, 14, YQ) ? .i() === b || jb(Di(c, WQ, 14, YQ) ? .g() ? ? [], [b]) ? y(y(Di(c, WQ, 14, YQ), VQ, 2), LL, 2) : new LL;
            c = a.pubWin;
            var d = a.D.google_ad_client,
                e = F(a.ra, 6),
                f = F(a.ra, 20);
            b = new ML(c, d, b, e, f);
            b.i = !0;
            c = y(b.C, cs, 1);
            if (b.i && (d = b.g, b.j && !pF(c) ? (e = new DL,
                    e = Qh(e, 1, tg(1))) : e = null, e)) {
                e = Qi(e);
                try {
                    d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                } catch (g) {}
            }
            d = pF(c) && (b.j || b.A);
            c && d && mG(new nG(b.g, new WG(b.g, b.l), c, new gB(b.g)))
        }
        U(Ht) && (tB(a.pubWin).overrideBodyHeightOnPreventScrolling = !0, a.M && a.M !== a.pubWin && (tB(a.M).overrideBodyHeightOnPreventScrolling = !0));
        b = !gk() && !wd();
        return !b || b && !SZ(a) ? TZ(a) : Promise.resolve()
    }

    function UZ(a, b, c = !1) {
        b = rP(a.M, b);
        const d = kk() || nP(a.pubWin.top);
        if (!b || b.y === -12245933 || d.width === -12245933 || d.height === -12245933 || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = pP(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function SZ(a) {
        return VZ(a) || WZ(a)
    }

    function VZ(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = q.setTimeout(() => {
                dz("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = cz(450, () => {
                b.google_pause_ad_requests = !1;
                q.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                if (!SZ(a)) {
                    const e = TZ(a);
                    X.pa(1222, e)
                }
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function WZ(a) {
        const b = a.pubWin.document,
            c = a.aa;
        if (MP(b) === 3) return PP(cz(332, () => {
            if (!XZ(a, YZ().visible, c)) {
                const g = TZ(a);
                X.pa(1222, g)
            }
        }), b), !0;
        const d = YZ();
        if (d.hidden < 0 && d.visible < 0) return !1;
        const e = NP(b);
        if (!e) return !1;
        if (!OP(b)) return XZ(a, d.visible, c);
        if (UZ(a, c) <= d.hidden) return !1;
        let f = cz(332, () => {
            if (!OP(b) && f) {
                Db(b, e, f);
                if (!XZ(a, d.visible, c)) {
                    const g = TZ(a);
                    X.pa(1222, g)
                }
                f = null
            }
        });
        return Cb(b, e, f)
    }

    function YZ() {
        var a = W($s);
        const b = W(at);
        return b === 3 && a === 6 ? (a = {
            hidden: 0,
            visible: 3
        }, q.IntersectionObserver || (a.visible = -1), Yd() && (a.visible *= 2), a) : {
            hidden: 0,
            visible: q.IntersectionObserver ? Yd() ? a : b : -1
        }
    }

    function XZ(a, b, c) {
        if (!c || b < 0) return !1;
        var d = a.D;
        if (!rp(d.google_reactive_ad_format) && (mQ(d) || d.google_reactive_ads_config) || !qP(c) || UZ(a, c) <= b) return !1;
        var e = xF(),
            f = CF(e, 8, {});
        e = CF(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new q.IntersectionObserver((l, m) => {
                Sa(l, n => {
                    n.intersectionRatio <= 0 || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${b*100}%`
            });
            a.L = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ma(Promise, "any").call(Promise, [f, e]).then(() => {
            bz(294, () => {
                const h = TZ(a);
                X.pa(1222, h)
            })
        });
        return !0
    }

    function TZ(a) {
        bz(326, () => {
            var c = a.pubWin,
                d = a.M,
                e = a.ra,
                f = a.xa;
            if (Dk(a.D) === 1) {
                var g = U(sv);
                if ((g || U(qv)) && c === d) {
                    var h = new rj;
                    d = new sj;
                    var k = h.setCorrelator(Oe(c));
                    var l = oR(c);
                    k = Oi(k, 5, l);
                    J(k, 2, 1);
                    h = z(d, 1, h);
                    k = new qj;
                    k = H(k, 10, !0);
                    l = U(lv);
                    k = H(k, 8, l);
                    l = U(mv);
                    k = H(k, 12, l);
                    l = U(pv);
                    k = H(k, 7, l);
                    l = U(ov);
                    k = H(k, 13, l);
                    z(h, 2, k);
                    c.google_rum_config = Ri(d);
                    e = F(e, 9) && g ? f.Dk : f.Ek;
                    ge(c.document, e)
                } else Uk(az)
            }
        });
        a.D.google_ad_channel = ZZ(a, a.D.google_ad_channel);
        a.D.google_tag_partner = $Z(a, a.D.google_tag_partner);
        a_(a);
        const b = a.D.google_start_time;
        typeof b === "number" && (bp = b, a.D.google_start_time = null);
        PO(a);
        a.M && qQ(a.M, Uc(a.xa.oj, new Map(Object.entries(LP()))));
        GF() && Uc(a.xa.Qe, new Map(Object.entries(LP())));
        mQ(a.D) && (GP() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        return b_(a)
    }

    function ZZ(a, b) {
        return (b ? [b] : []).concat(MF(a.pubWin).ad_channels || []).join("+")
    }

    function $Z(a, b) {
        return (b ? [b] : []).concat(MF(a.pubWin).tag_partners || []).join("+")
    }

    function c_(a) {
        const b = he("IFRAME");
        ke(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    }

    function d_(a, b, c) {
        return a.D.google_reactive_ad_format === 9 && Ud(a.aa, null, "fsi_container") ? (a.aa.appendChild(b), Promise.resolve(b)) : xQ(a.xa.Ph, 525, d => {
            a.aa.appendChild(b);
            const e = Nj(c, a.pubWin);
            d.createAdSlot(a.M, a.D, b, a.aa.parentElement, e);
            return b
        })
    }

    function e_(a, b, c, d) {
        $F();
        O(aG).ld = a.D.google_page_url;
        KZ(a.pubWin, bj(aj(J(J($i(new cj, Yi(new Zi, String(Oe(a.pubWin)))), 4, 1), 2, 1), G(a.ra, 2)), d.g()));
        const e = a.M;
        if (a.D.google_acr)
            if (a.D.google_wrap_fullscreen_ad) {
                const h = a.D.google_acr;
                tZ(a.pubWin, a.aa.parentElement, b, a.D.google_reactive_ad_format).then(h).catch(() => {
                    h(null)
                })
            } else a.D.google_acr(b);
        Cb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const h = e ? MF(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || h) && e && e === a.pubWin && f_(e, a, a.aa,
                b)
        });
        d = h => {
            h && a.j.push(() => {
                h.dispose()
            })
        };
        const f = g_(a, b);
        zP(a.pubWin, a.g, b.contentWindow, a.j);
        !e || mQ(a.D) && !AQ(a.D) || (a.D.no_resize || d(new AS(e, b, a.aa)), d(new RR(a, b)), d(e.IntersectionObserver ? null : new TR(e, b, a.aa)), e.IntersectionObserver && d(LS(e, b, a.D, a.aa, cz(1225, () => {
            f();
            for (const h of a.j) h();
            a.j.length = 0
        }))));
        if (e) {
            d(LR(e, b, a.g));
            if (U(Et)) {
                var g = IS(e, b, a.aa, a.g);
                g && d(g)
            }
            a.j.push(KQ(e, a.D));
            O(PQ).K(e);
            a.j.push(ER(e, a.aa, b))
        }
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        c != null &&
            (d = a.aa, g = d.parentElement, (g && Lv.test(g.className) ? g : d).setAttribute("data-auto-ad-size", c));
        b.setAttribute("tabindex", "0");
        b.setAttribute("title", "Advertisement");
        b.setAttribute("aria-label", "Advertisement");
        h_(a);
        TU(a)
    }

    function g_(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = FF();
        let f = null;
        const g = qN(c, "pvt", (h, k) => {
            typeof h.token === "string" && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
        });
        a.j.push(g);
        return () => {
            f && Array.isArray(e[d]) && (Za(e[d], f), e[d].length || delete e[d], f = null)
        }
    }

    function h_(a) {
        const b = gk(a.pubWin);
        if (b)
            if (b.container === "AMP-STICKY-AD") {
                const c = d => {
                    d.data === "fill_sticky" && b.renderStart && b.renderStart()
                };
                Cb(a.pubWin, "message", X.Ga(616, c));
                a.j.push(() => {
                    Db(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function f_(a, b, c, d) {
        TN(new bO(a), c).then(e => {
            Yj(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && Lv.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", String(e.rh));
            return e
        }).then(e => {
            const f = b.D.armr || "",
                g = e.Cj || "",
                h = b.D.iaaso == null ? "" : Number(b.D.iaaso),
                k = Number(e.rh),
                l = Va(e.entries, C => `${C.vb}:${C.Gh}:${C.Hh}`),
                m = Number(e.sk.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p = m * e.Yb.width * e.Yb.height,
                r = `${e.Wh.scrollX},${e.Wh.scrollY}`,
                w = Ek(e.target),
                D = [e.Yb.left, e.Yb.top, e.Yb.right,
                    e.Yb.bottom
                ].join();
            e = `${e.mi.width}x${e.mi.height}`;
            dz("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: oR(b.D),
                et: g,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.D.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.D.google_responsive_auto_format,
                roa: p,
                slot: b.D.google_ad_slot,
                sp: r,
                tgt: w,
                tr: D,
                url: b.D.google_page_url,
                vp: e,
                pvc: Oe(a)
            }, 1)
        }).catch(e => {
            Yj(8, ["Error:", e.message, c]);
            dz("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function i_(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }

    function j_(a, b, c) {
        var d = a.D,
            e = d.google_async_iframe_id;
        const f = d.google_ad_width,
            g = d.google_ad_height,
            h = BQ(d);
        e = {
            id: e,
            name: e
        };
        var k = a.D,
            l = a.l;
        eR("browsing-topics", a.pubWin.document) && CR(c, k) && !U(av) && !zR(l ? .label) && (e.browsingTopics = "true");
        e.style = h ? [`width:${f}px !IMPORTANT`, `height:${g}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${g}px;`;
        k = ze();
        k["allow-top-navigation-by-user-activation"] && k["allow-popups-to-escape-sandbox"] && (h || (k = "=" + encodeURIComponent("1"),
            b = ae(b, "fsb" + k)), e.sandbox = ye().join(" "));
        d.google_video_play_muted === !1 && i_("autoplay", e);
        k = b;
        k.length > 61440 && (k = k.substring(0, 61432), k = k.replace(/%\w?$/, ""), k = k.replace(/&[^=]*=?$/, ""), k += "&trunc=1");
        k !== b && (l = b.lastIndexOf("&", 61432), l === -1 && (l = b.lastIndexOf("?", 61432)), dz("trn", {
            ol: b.length,
            tr: l === -1 ? "" : b.substring(l + 1),
            url: b
        }, .01));
        b = k;
        f != null && (e.width = String(f));
        g != null && (e.height = String(g));
        e.frameborder = "0";
        e.marginwidth = "0";
        e.marginheight = "0";
        e.vspace = "0";
        e.hspace = "0";
        e.allowtransparency =
            "true";
        e.scrolling = "no";
        d.dash && (e.srcdoc = d.dash);
        dR("attribution-reporting", a.pubWin.document) && i_("attribution-reporting", e);
        dR("run-ad-auction", a.pubWin.document) && i_("run-ad-auction", e);
        U(Ru) && (d = a.pubWin, d.credentialless !== void 0 && (U(Su) || d.crossOriginIsolated) && (e.credentialless = "true"));
        if (h) e.src = b, e = c_(e), a = d_(a, e, c);
        else {
            c = {};
            c.dtd = rR((new Date).getTime(), bp);
            c = Ak(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = c_(e);
            c && a.j.push(mk(a.pubWin, e));
            a.aa.style.visibility = "visible";
            for (a = a.aa; c = a.firstChild;) a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function k_(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.g;
        l_(a);
        d.g() && yP(new xP(a.pubWin), a.g, a.pubWin.location.hostname);
        var e = Nj(d, a.pubWin);
        if (!d.g() && !a.F) return dz("afc_noc_req", {
            client: a.D.google_ad_client,
            isGdprCountry: F(a.ra, 6).toString()
        }, W(Ys)), Promise.resolve();
        var f = m_(a.xa, d);
        f && document.documentElement.appendChild(f);
        U(Vu) && d.g() && (a.l = await KF());
        a.G = AR(a.pubWin, d);
        nR(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) {
            wQ(a.M, f);
            const g = Nj(d);
            CQ(f, a, g);
            f = f.page_level_pubvars;
            Ba(f) && Nb(a.D,
                f)
        }
        f = eR("shared-storage", a.pubWin.document);
        a.G && d.g() && f && !U(Qu) && !CF(xF(), 34, !1) && (DF(xF(), 34, !0), f = a.G.then(g => {
            g({
                message: "goog:spam:client_age",
                pvsid: Oe(a.pubWin)
            })
        }), X.pa(1069, f));
        await BR(a, a.pubWin, d, a.D, a.G, a.l);
        await a.C ? .qj;
        f = "";
        BQ(b) ? (f = (d.g() ? a.xa.ti : a.xa.si).toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + zk({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), yV(b, xF()), n_(b)) : (b.google_pgb_reactive === 5 && b.google_reactive_ads_config ||
            !nQ(b) || lQ(c, b, e)) && n_(b) && (f = pV(a, d));
        Yj(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || Ck(c);
        e = Dk(b);
        b = a.pubWin === a.M ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`;
        c = UZ(a, a.aa, !0) > 0;
        e = {
            ifi: e,
            uci: b
        };
        c && (c = xF(), e.btvi = CF(c, 21, 1), EF(c, 21));
        f = Ak(e, f);
        c = j_(a, f, d);
        a.D.rpe && yS(a.pubWin, a.aa, {
            height: a.D.google_ad_height,
            dg: "force",
            Yc: !0,
            Vf: !0,
            ye: a.D.google_ad_client
        });
        c = await c;
        try {
            e_(a, c, b, d)
        } catch (g) {
            X.ba(223, g, void 0, void 0)
        }
    }

    function o_(a) {
        var b = Ae(q.top, "googlefcPresent");
        q.googlefc && !b && dz("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function p_(a, b) {
        return FG(a, b === ".google.cn") ? GG(a) : Promise.resolve(null)
    }

    function q_(a) {
        const b = W(Ws);
        if (b <= 0) return null;
        const c = Nk(),
            d = IZ(a.pubWin);
        if (!d) return null;
        a.B = "0";
        return Promise.race([d, Qe(b, "0")]).then(e => {
            dz("adsense_paw", {
                time: Nk() - c
            });
            e ? .length > 1E4 ? X.ba(809, Error(`ML:${e.length}`), void 0, void 0) : a.B = e
        }).catch(e => {
            X.ba(809, e, void 0, void 0)
        })
    }

    function l_(a) {
        var b = a.pubWin;
        const c = a.aa;
        var d = a.D;
        const e = a.Ya,
            f = W(iv);
        d = !rp(d.google_reactive_ad_format) && (mQ(d) || d.google_reactive_ads_config);
        if (!(a.C ? .xf || f <= 0 || fe(b) || !q.IntersectionObserver || d)) {
            a.C = {};
            var g = W(jv),
                h = new Oo(e),
                k = Nk();
            b = new Promise(l => {
                let m = 0;
                const n = a.C,
                    p = new q.IntersectionObserver(cz(1236, r => {
                        if (r = r.find(w => w.target === c)) h.Ud.se.Xc.g.g.Oc({
                            Rc: Nk() - k,
                            Sk: ++m
                        }), n.Zj = r.isIntersecting && r.intersectionRatio >= g, l()
                    }), {
                        threshold: [g]
                    });
                p.observe(c);
                n.xf = p
            });
            a.C.qj = Promise.race([b,
                Qe(f, null)
            ]).then(l => {
                h.Ud.se.Xc.g.i.Oc({
                    Rc: Nk() - k,
                    status: l === null ? "TIMEOUT" : "OK"
                })
            })
        }
    }

    function r_(a) {
        const b = Nk();
        return Promise.race([bz(832, () => MZ(a)), Qe(200)]).then(c => {
            dz("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: Nk() - b,
                tms: 200
            });
            return c ? .uc
        })
    }
    async function s_(a) {
        const b = Nk(),
            c = a.ra;
        bG(f => {
            if (Ai(f, 1) === 0) {
                var g = !!F(c, 6);
                f = H(f, 2, g);
                g = !!F(c, 20);
                f = H(f, 6, g);
                J(f, 1, 1)
            }
        });
        gN(a.pubWin);
        o_(a.D.google_ad_client);
        bG(f => {
            Ai(f, 1) === 1 && J(f, 1, 2)
        });
        const d = new IG(a.pubWin);
        await p_(d, G(c, 8));
        bG(f => {
            Ai(f, 1) === 2 && (f = H(f, 3, !0), J(f, 1, 3))
        });
        await mP(a, {
            Na: F(c, 6),
            ak: F(c, 25)
        });
        const e = Nk();
        bG(f => {
            if (Ai(f, 1) === 3) {
                f = H(f, 3, e - b > 500);
                var g = !!a.g ? .l();
                f = H(f, 4, g);
                g = !!a.g ? .g();
                f = H(f, 5, g);
                g = !!a.g ? .i();
                f = H(f, 7, g);
                g = !!a.g ? .j();
                f = H(f, 8, g);
                J(f, 1, 4)
            }
        })
    }
    async function t_(a) {
        const b = q_(a),
            c = bz(868, () => r_(a.pubWin));
        await s_(a);
        await b;
        a.uc = await c || "";
        await k_(a)
    }

    function b_(a) {
        Re(a.pubWin) !== a.pubWin && (a.i |= 4);
        MP(a.pubWin.document) === 3 && (a.i |= 32);
        var b;
        if (b = a.M) {
            b = a.M;
            const c = lp(b);
            b = !(pp(b).scrollWidth <= c)
        }
        b && (a.i |= 1024);
        a.pubWin.Prototype ? .Version && (a.i |= 16384);
        a.D.google_loader_features_used && (a.i |= a.D.google_loader_features_used);
        return t_(a)
    }

    function n_(a) {
        const b = xF(),
            c = a.google_ad_section;
        mQ(a) && EF(b, 15);
        if (Fk(a)) {
            if (EF(b, 5) > 100) return !1
        } else if (EF(b, 6) - CF(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }

    function m_(a, b) {
        a: {
            var c = [q.top];
            var d = [];
            let f = 0,
                g;
            for (; g = c[f++];) {
                d.push(g);
                try {
                    if (g.frames)
                        for (let h = 0; h < g.frames.length && c.length < 1024; ++h) c.push(g.frames[h])
                } catch {}
            }
            c = d;
            for (d = 0; d < c.length; d++) try {
                var e = c[d].frames.google_esf;
                if (e) {
                    oj = e;
                    break a
                }
            } catch (h) {}
            oj = null
        }
        if (oj) return null;e = he("IFRAME");e.id = "google_esf";e.name = "google_esf";a = b.g() ? a.ti : a.si;e.src = Zb(a).toString();e.style.display = "none";
        return e
    }

    function RZ(a) {
        U(Rs) && HF() && q.setTimeout(cz(1244, () => void HO(a.M || a.pubWin, {
            Na: F(a.ra, 6)
        })), 1E3)
    }

    function a_(a) {
        const b = a.M;
        if (b && !MF(b).ads_density_stats_processed && !gk(b) && (MF(b).ads_density_stats_processed = !0, U(Gt) || je() < .01)) {
            const c = () => {
                if (b) {
                    var d = cK(YJ(b), a.D.google_ad_client, b.location.hostname, oR(a.D).split(","));
                    dz("ama_stats", d, 1)
                }
            };
            Pe(b, () => {
                q.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        bz(843, () => {
            if (!q.google_sa_impl) {
                var d = new So(b);
                try {
                    kg(l => {
                        var m = new lo;
                        var n = new ko;
                        try {
                            var p = Oe(window);
                            Mi(n, 1, p)
                        } catch (C) {}
                        try {
                            var r = O(Vo).g();
                            ei(n, 2, r, vg)
                        } catch (C) {}
                        try {
                            Oi(n, 3, window.document.URL)
                        } catch (C) {}
                        m = z(m, 2, n);
                        n = new jo;
                        n = J(n, 1, 1192);
                        try {
                            var w = vf(l ? .name) ? l.name : "Unknown error";
                            Oi(n, 2, w)
                        } catch (C) {}
                        try {
                            var D = vf(l ? .message) ? l.message : `Caught ${l}`;
                            Oi(n, 3, D)
                        } catch (C) {}
                        try {
                            const C = vf(l ? .stack) ? l.stack : Error().stack;
                            C && ei(n, 4, C.split(/\n\s*/), $g)
                        } catch (C) {}
                        l = z(m, 1, n);
                        w = new io;
                        try {
                            Oi(w, 1, tF())
                        } catch {}
                        A(l, 6, mo, w);
                        Mi(l, 5, 1);
                        Jo(d, l)
                    })
                } catch (l) {}
                var e = EZ(),
                    f = GZ(a);
                BZ(X, G(f, 2));
                aR(F(f, 6));
                Yj(16, [3, Ri(f)]);
                var g = AZ({
                        Fg: b,
                        Xh: G(f, 2)
                    }),
                    h = c(g, f, xi(ki(e, GV), 1));
                q.google_sa_impl = l => OZ({
                    ra: f,
                    xa: h,
                    Ya: g,
                    slot: l,
                    pageState: e
                });
                kR(cR(q));
                q.google_process_slots ? .();
                var k = (q.Prototype || {}).Version;
                k != null && dz("prtpjs", {
                    version: k
                })
            }
        })
    })(FZ, tF(), function(a, b, c) {
        c = c > 2012 ? `_fy${c}` : "";
        const d = G(b, 3);
        b = G(b, 2);
        return {
            Ek: Tc `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            Dk: Tc `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Ph: Tc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            oj: Tc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            jp: Tc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            Zo: Tc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            Qe: Tc `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/autogames${c}.js`,
            ti: Tc `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            si: Tc `https://pagead2.googlesyndication.com/pagead/html/${b}/${d}/zrt_lookup${c}.html`
        }
    });
}).call(this, "[2021,\"r20240904\",\"r20110914\",null,null,null,null,\".google.com.pe\"]");