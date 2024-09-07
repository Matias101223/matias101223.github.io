(function(sttc) {
    'use strict';
    var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ea = {},
        fa = {};

    function ha(a, b, c) {
        if (!c || a != null) {
            c = fa[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ia(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ea ? f = ea : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (fa[d] === void 0 && (a = Math.random() * 1E9 >>> 0, fa[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ia("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var p = this || self;

    function ja(a, b) {
        var c = ka("CLOSURE_FLAGS");
        a = c && c[a];
        return a != null ? a : b
    }

    function ka(a) {
        a = a.split(".");
        for (var b = p, c = 0; c < a.length; c++)
            if (b = b[a[c]], b == null) return null;
        return b
    }

    function la(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function ma(a) {
        return Object.prototype.hasOwnProperty.call(a, na) && a[na] || (a[na] = ++oa)
    }
    var na = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        oa = 0;

    function pa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function qa(a, b, c) {
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

    function ra(a, b, c) {
        ra = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? pa : qa;
        return ra.apply(null, arguments)
    }

    function sa(a, b, c) {
        a = a.split(".");
        c = c || p;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ta(a) {
        return a
    };
    let ua = (new Date).getTime();

    function va(a) {
        p.setTimeout(() => {
            throw a;
        }, 0)
    };

    function wa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function xa(a, b) {
        let c = 0;
        a = wa(String(a)).split(".");
        b = wa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; c == 0 && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (e[0].length == 0 && f[0].length == 0) break;
                c = ya(e[1].length == 0 ? 0 : parseInt(e[1], 10), f[1].length == 0 ? 0 : parseInt(f[1], 10)) || ya(e[2].length == 0, f[2].length == 0) || ya(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (c == 0)
        }
        return c
    }

    function ya(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var za = ja(610401301, !1),
        Aa = ja(645172343, !0);

    function Ba() {
        var a = p.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ca;
    const Da = p.navigator;
    Ca = Da ? Da.userAgentData || null : null;

    function Ea(a) {
        return za ? Ca ? Ca.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function r(a) {
        return Ba().indexOf(a) != -1
    };

    function Fa() {
        return za ? !!Ca && Ca.brands.length > 0 : !1
    }

    function Ga() {
        return Fa() ? !1 : r("Trident") || r("MSIE")
    }

    function Ha() {
        return Fa() ? Ea("Microsoft Edge") : r("Edg/")
    }

    function Ia() {
        !r("Safari") || Ja() || (Fa() ? 0 : r("Coast")) || (Fa() ? 0 : r("Opera")) || (Fa() ? 0 : r("Edge")) || Ha() || Fa() && Ea("Opera")
    }

    function Ja() {
        return Fa() ? Ea("Chromium") : (r("Chrome") || r("CriOS")) && !(Fa() ? 0 : r("Edge")) || r("Silk")
    }

    function Ka(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function La() {
        var a = Ba();
        if (Ga()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), c[1] == "7.0")
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ka(b);
        return (Fa() ? 0 : r("Opera")) ? a(["Version",
            "Opera"
        ]) : (Fa() ? 0 : r("Edge")) ? a(["Edge"]) : Ha() ? a(["Edg"]) : r("Silk") ? a(["Silk"]) : Ja() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ma(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Na(a, b) {
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

    function Oa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Pa(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Qa(a, b) {
        a: {
            var c = a.length;
            const d = typeof a === "string" ? a.split("") : a;
            for (--c; c >= 0; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function Ra(a, b) {
        return Ma(a, b) >= 0
    }

    function Sa(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ta(a) {
        Ta[" "](a);
        return a
    }
    Ta[" "] = function() {};
    var Ua = Ga();
    !r("Android") || Ja();
    Ja();
    Ia();
    var Va = null;

    function Wa(a) {
        var b = [];
        Xa(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Xa(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = Va[l];
                if (m != null) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Za();
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

    function Za() {
        if (!Va) {
            Va = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    Va[f] === void 0 && (Va[f] = e)
                }
        }
    };

    function $a(a, b) {
        const c = ab;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function bb(a) {
        a.lc = !0;
        return a
    }
    let ab = void 0;
    const cb = bb(a => a !== null && a !== void 0);
    var db = bb(a => typeof a === "number"),
        eb = bb(a => typeof a === "string"),
        fb = bb(a => a === void 0);
    var kb = bb(a => a >= ib && a <= jb);
    const ib = BigInt(Number.MIN_SAFE_INTEGER),
        jb = BigInt(Number.MAX_SAFE_INTEGER);
    let lb = 0,
        mb = 0;

    function nb(a) {
        const b = a >>> 0;
        lb = b;
        mb = (a - b) / 4294967296 >>> 0
    }

    function ob(a) {
        if (a < 0) {
            nb(-a);
            a = lb;
            var b = mb;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            lb = c >>> 0;
            mb = d >>> 0
        } else nb(a)
    }

    function pb() {
        var a = lb,
            b = mb;
        if (b & 2147483648) var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else b >>>= 0, a >>>= 0, b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    };

    function qb(a) {
        return Array.prototype.slice.call(a)
    };
    var u = Symbol(),
        rb = Symbol(),
        sb = Symbol(),
        tb = Symbol(),
        ub = Symbol();

    function vb(a) {
        a[u] |= 32;
        return a
    }

    function wb(a, b) {
        b[u] = (a | 0) & -14591
    }

    function xb(a, b) {
        b[u] = (a | 34) & -14557
    };
    var yb = {},
        zb = {};

    function Ab(a) {
        return !(!a || typeof a !== "object" || a.g !== zb)
    }

    function Bb(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Cb(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[u] | 0) & 1 ? !0 : !1
    }
    var Db;
    const Eb = [];
    Eb[u] = 55;
    Db = Object.freeze(Eb);

    function Fb(a) {
        if (a & 2) throw Error();
    }
    var Gb = Object.freeze({});
    Object.freeze({});
    var Hb = Object.freeze({});

    function Ib(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let Jb, Kb;

    function Lb(a) {
        if (Kb) throw Error("");
        Kb = b => {
            p.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function Mb(a) {
        if (Kb) try {
            Kb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function Nb() {
        const a = Error();
        Ib(a, "incident");
        Kb ? Mb(a) : va(a)
    }

    function Ob(a) {
        a = Error(a);
        Ib(a, "warning");
        Mb(a);
        return a
    };

    function Pb(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function Qb(a) {
        if (a != null && typeof a !== "boolean") {
            var b = typeof a;
            throw Error(`Expected boolean but got ${b!="object"?b:a?Array.isArray(a)?"array":b:"null"}: ${a}`);
        }
        return a
    }
    const Rb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Sb(a) {
        const b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : Rb.test(a)
    }

    function w(a) {
        if (a != null) {
            if (!Number.isFinite(a)) throw Ob("enum");
            a |= 0
        }
        return a
    }

    function Tb(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Ub(a) {
        if (typeof a !== "number") throw Ob("int32");
        if (!Number.isFinite(a)) throw Ob("int32");
        return a | 0
    }

    function Vb(a) {
        return a == null ? a : Ub(a)
    }

    function Wb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Xb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Yb(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function $b(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            ob(a);
            var b = lb,
                c = mb;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function ac(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Yb(a) || (a.length < 16 ? ob(Number(a)) : (a = BigInt(a), lb = Number(a & BigInt(4294967295)) >>> 0, mb = Number(a >> BigInt(32) & BigInt(4294967295))), a = pb());
        return a
    }

    function bc(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function cc(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function dc(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function ec(a, b, c, d) {
        if (a != null && typeof a === "object" && a.pa === yb) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? fc(b) : new b : void 0;
        let e = c = a[u] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[u] = e);
        return new b(a)
    }

    function fc(a) {
        var b = a[rb];
        if (b) return b;
        b = new a;
        var c = b.C;
        c[u] |= 34;
        return a[rb] = b
    };
    let gc;

    function hc(a, b) {
        gc = b;
        a = new a(b);
        gc = void 0;
        return a
    };

    function ic(a, b) {
        return jc(b)
    }

    function jc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return kb(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Cb(a)) return
                    } else if (a != null && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function kc(a, b, c) {
        a = qb(a);
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

    function lc(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Cb(a) ? void 0 : e && (a[u] | 0) & 2 ? a : mc(a, b, c, d !== void 0, e);
            else if (Bb(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = lc(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function mc(a, b, c, d, e) {
        const f = d || c ? a[u] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = qb(a);
        for (let g = 0; g < a.length; g++) a[g] = lc(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function nc(a) {
        return a.pa === yb ? a.toJSON() : a != null && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function oc(a) {
        return a.pa === yb ? a.toJSON() : jc(a)
    }
    var pc = typeof structuredClone != "undefined" ? structuredClone : a => mc(a, nc, void 0, void 0, !1);

    function qc(a) {
        var b = rc ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        if (sc === void 0)
            if (typeof Proxy !== "function") sc = null;
            else try {
                sc = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null
            } catch {
                sc = null
            }
        b = sc;
        if (!b) return a;
        b = new b(a, {
            set(c, d, e) {
                tc();
                c[d] = e;
                return !0
            }
        });
        uc(a, b);
        return b
    }

    function tc() {
        Nb()
    }
    let rc = void 0,
        vc = void 0;

    function uc(a, b) {
        (rc || (rc = new WeakMap)).set(a, b);
        (vc || (vc = new WeakMap)).set(b, a)
    }
    let sc = void 0;

    function wc(a, b, c = xb) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[u] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[u] = (d | 34) & -12293, a) : mc(a, wc, d & 4 ? xb : c, !0, !0)
            }
            a.pa === yb && (c = a.C, d = c[u], a = d & 2 ? a : hc(a.constructor, xc(c, d, !0)));
            return a
        }
    }

    function xc(a, b, c) {
        const d = c || b & 2 ? xb : wb,
            e = !!(b & 32);
        a = kc(a, b, f => wc(f, e, d));
        a[u] = a[u] | 32 | (c ? 2 : 0);
        return a
    }

    function yc(a) {
        const b = a.C,
            c = b[u];
        return c & 2 ? hc(a.constructor, xc(b, c, !1)) : a
    };

    function zc(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[ub] = (a.constructor[ub] | 0) + 1) < 5 && Nb();
        return c === 0 ? !1 : !(c & b)
    }

    function Ac(a, b) {
        a = a.C;
        return Bc(a, a[u], b)
    }

    function Cc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Bc(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Cc(a, b, e, c) && sb != null && (a = Jb ? ? (Jb = {}), b = a[sb] || 0, b >= 4 || (a[sb] = b + 1, Nb())), d) : Cc(a, b, e, c)
        }
    }

    function y(a, b, c) {
        const d = a.C;
        let e = d[u];
        Fb(e);
        z(d, e, b, c);
        return a
    }

    function z(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Aa) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[u] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Dc(a, b, c) {
        return Ec(a, b, c, !1) !== void 0
    }

    function A(a) {
        return a === Gb ? 2 : 5
    }

    function Fc(a, b, c, d, e, f) {
        const g = a.C;
        let h = g[u];
        const k = 2 & h ? 1 : d;
        f = !!f;
        d = Gc(g, h, b, e);
        var l = d[u] | 0;
        if (zc(a, l, void 0, f)) {
            if (4 & l || Object.isFrozen(d)) d = qb(d), l = Hc(l, h), h = z(g, h, b, d, e);
            let x = a = 0;
            for (; a < d.length; a++) {
                const n = c(d[a]);
                n != null && (d[x++] = n)
            }
            x < a && (d.length = x);
            l = Ic(l, h);
            l = (l | 20) & -4097;
            l &= -8193;
            d[u] = l;
            2 & l && Object.freeze(d)
        }
        let m;
        k === 1 || k === 4 && 32 & l ? Jc(l) || (f = l, l |= 2, l !== f && (d[u] = l), Object.freeze(d)) : (c = k !== 5 ? !1 : !!(32 & l) || Jc(l) || !!rc ? .get(d), (k === 2 || c) && Jc(l) && (d = qb(d), l = Hc(l, h), l = Kc(l, h, f), d[u] = l,
            h = z(g, h, b, d, e)), Jc(l) || (b = l, l = Kc(l, h, f), l !== b && (d[u] = l)), c && (m = qc(d)));
        return m || d
    }

    function Gc(a, b, c, d) {
        a = Bc(a, b, c, d);
        return Array.isArray(a) ? a : Db
    }

    function Ic(a, b) {
        a === 0 && (a = Hc(a, b));
        return a | 1
    }

    function Jc(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Lc(a, b, c, d) {
        const e = a.C;
        let f = e[u];
        Fb(f);
        if (c == null) return z(e, f, b), a;
        c = vc ? .get(c) || c;
        let g = c[u] | 0,
            h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const l = !k && (void 0 === Hb || !1);
        if (zc(a, g))
            for (g = 21, k && (c = qb(c), h = 0, g = Hc(g, f), g = Kc(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = qb(c), h = 0, g = Hc(g, f), g = Kc(g, f, !0));
        g !== h && (c[u] = g);
        z(e, f, b, c);
        return a
    }

    function B(a, b, c, d) {
        const e = a.C;
        let f = e[u];
        Fb(f);
        z(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Mc(a, b, c, d) {
        const e = a.C;
        var f = e[u];
        Fb(f);
        if (d == null) {
            var g = Nc(e);
            if (Oc(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = Nc(e);
            const h = Oc(g, e, f, c);
            h !== b && (h && (f = z(e, f, h)), g.set(c, b))
        }
        z(e, f, b, d);
        return a
    }

    function Pc(a, b, c) {
        return Qc(a, b) === c ? c : -1
    }

    function Qc(a, b) {
        a = a.C;
        return Oc(Nc(a), a, a[u], b)
    }

    function Nc(a) {
        return a[tb] ? ? (a[tb] = new Map)
    }

    function Oc(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            Bc(b, c, g) != null && (e !== 0 && (c = z(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Rc(a, b, c) {
        a = a.C;
        let d = a[u];
        Fb(d);
        const e = Bc(a, d, c);
        b = yc(ec(e, b, !0, d));
        e !== b && z(a, d, c, b);
        return b
    }

    function Ec(a, b, c, d) {
        a = a.C;
        let e = a[u];
        const f = Bc(a, e, c, d);
        b = ec(f, b, !1, e);
        b !== f && b != null && z(a, e, c, b, d);
        return b
    }

    function Tc(a) {
        var b = Uc;
        return (a = Ec(a, b, 4, !1)) ? a : fc(b)
    }

    function D(a, b, c) {
        b = Ec(a, b, c, !1);
        if (b == null) return b;
        a = a.C;
        let d = a[u];
        if (!(d & 2)) {
            const e = yc(b);
            e !== b && (b = e, z(a, d, c, b, !1))
        }
        return b
    }

    function E(a, b, c, d) {
        const e = a.C;
        var f = e[u];
        a = f;
        var g = !(2 & f),
            h = !!(2 & a);
        f = h ? 1 : d;
        g && (g = !h);
        d = Gc(e, a, c);
        var k = d[u] | 0;
        h = !!(4 & k);
        if (!h) {
            k = Ic(k, a);
            var l = d,
                m = a;
            const n = !!(2 & k);
            n && (m |= 2);
            let q = !n,
                t = !0,
                v = 0,
                L = 0;
            for (; v < l.length; v++) {
                const C = ec(l[v], b, !1, m);
                if (C instanceof b) {
                    if (!n) {
                        const gb = !!((C.C[u] | 0) & 2);
                        q && (q = !gb);
                        t && (t = gb)
                    }
                    l[L++] = C
                }
            }
            L < v && (l.length = L);
            k |= 4;
            k = t ? k | 16 : k & -17;
            k = q ? k | 8 : k & -9;
            l[u] = k;
            n && Object.freeze(l)
        }
        if (g && !(8 & k || !d.length && (f === 1 || f === 4 && 32 & k))) {
            Jc(k) && (d = qb(d), k = Hc(k, a), a = z(e, a, c, d));
            b = d;
            g = k;
            for (l = 0; l < b.length; l++) k = b[l], m = yc(k), k !== m && (b[l] = m);
            g |= 8;
            g = b.length ? g & -17 : g | 16;
            k = b[u] = g
        }
        let x;
        f === 1 || f === 4 && 32 & k ? Jc(k) || (c = k, k |= !d.length || 16 & k && (!h || 32 & k) ? 2 : 2048, k !== c && (d[u] = k), Object.freeze(d)) : (h = f !== 5 ? !1 : !!(32 & k) || Jc(k) || !!rc ? .get(d), (f === 2 || h) && Jc(k) && (d = qb(d), k = Hc(k, a), k = Kc(k, a, !1), d[u] = k, a = z(e, a, c, d)), Jc(k) || (c = k, k = Kc(k, a, !1), k !== c && (d[u] = k)), h && (x = qc(d)));
        return x || d
    }

    function Vc(a, b, c) {
        c == null && (c = void 0);
        return y(a, b, c)
    }

    function Wc(a, b, c, d) {
        d == null && (d = void 0);
        return Mc(a, b, c, d)
    }

    function Xc(a, b, c) {
        const d = a.C;
        let e = d[u];
        Fb(e);
        if (c == null) return z(d, e, b), a;
        c = vc ? .get(c) || c;
        let f = c[u] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c),
            l = !k && (void 0 === Hb || !1);
        let m = !0,
            x = !0;
        for (let q = 0; q < c.length; q++) {
            var n = c[q];
            h || (n = !!((n.C[u] | 0) & 2), m && (m = !n), x && (x = n))
        }
        h || (f |= 5, f = m ? f | 8 : f & -9, f = x ? f | 16 : f & -17);
        if (l || k && f !== g) c = qb(c), g = 0, f = Hc(f, e), f = Kc(f, e, !0);
        f !== g && (c[u] = f);
        z(d, e, b, c);
        return a
    }

    function Hc(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Kc(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function Yc(a, b) {
        var c = Zc;
        Fb(a.C[u]);
        a = c(a, 4, 2, void 0, !0);
        c = a[u] | 0;
        c = (4 & c ? 4096 & c ? 4096 : 8192 & c ? 8192 : 0 : void 0) ? ? 0;
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) a.push(bc(b[d], c));
        else
            for (d of b) a.push(bc(d, c))
    }

    function $c(a, b) {
        a = Ac(a, b);
        a != null && (typeof a === "bigint" ? kb(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = kb(a) ? Number(a) : String(a)) : a = Sb(a) ? typeof a === "number" ? $b(a) : ac(a) : void 0);
        return a
    }

    function ad(a, b) {
        return a ? ? b
    }

    function bd(a, b) {
        a = Ac(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function cd(a, b) {
        return Wb(Ac(a, b))
    }

    function F(a, b) {
        return dc(Ac(a, b))
    }

    function G(a, b) {
        return Tb(Ac(a, b))
    }

    function H(a, b, c = !1) {
        return ad(bd(a, b), c)
    }

    function dd(a, b) {
        return ad(cd(a, b), 0)
    }

    function ed(a, b) {
        return ad($c(a, b), 0)
    }

    function fd(a, b) {
        a = a.C;
        let c = a[u];
        const d = Bc(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && z(a, c, b, e);
        return e ? ? 0
    }

    function I(a, b) {
        return ad(F(a, b), "")
    }

    function J(a, b) {
        return ad(G(a, b), 0)
    }

    function Zc(a, b, c, d, e) {
        return Fc(a, b, dc, c, d, e)
    }

    function gd(a, b, c) {
        return J(a, Pc(a, c, b))
    }

    function hd(a, b, c, d) {
        return D(a, b, Pc(a, d, c))
    }

    function id(a) {
        a = F(a, 4);
        return a == null ? void 0 : a
    }

    function K(a, b, c) {
        if (c != null) a: {
            if (!Sb(c)) throw Ob("int64");
            switch (typeof c) {
                case "string":
                    c = ac(c);
                    break a;
                case "bigint":
                    c = BigInt.asIntN(64, c);
                    if (eb(c)) {
                        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(c)) throw Error(String(c));
                    } else if (db(c) && !Number.isSafeInteger(c)) throw Error(String(c));
                    c = BigInt(c);
                    break a;
                default:
                    c = $b(c)
            }
        }
        return B(a, b, c, "0")
    }

    function jd(a, b) {
        var c = performance.now();
        if (c != null && typeof c !== "number") throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        B(a, b, c, 0)
    }

    function kd(a, b, c) {
        return B(a, b, cc(c), "")
    };
    let ld;

    function md(a) {
        try {
            return ld = !0, JSON.stringify(nd(a), ic)
        } finally {
            ld = !1
        }
    }
    var M = class {
        constructor(a) {
            a: {
                a == null && (a = gc);gc = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[u] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, Bb(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[u] = b
            }
            this.C = a
        }
        toJSON() {
            return nd(this)
        }
    };
    M.prototype.pa = yb;

    function nd(a) {
        a = ld ? a.C : mc(a.C, oc, void 0, void 0, !1); {
            var b = !ld;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = Bb(c);
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
                                Array.isArray(m) && (Cb(m) || Ab(m) && m.size === 0) && (m = null);
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
                    if (!(h == null || Cb(h) || Ab(h) && h.size === 0)) break;
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

    function od(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[u] |= 128;
        return hc(a, vb(b))
    };

    function pd(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = hc(a, vb(b))
            }
            return b
        }
    };
    var qd = class extends M {};
    var rd = class extends M {};

    function sd(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function td(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function ud(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function vd(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function wd(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function xd(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function yd(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function zd(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Ad(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var Bd;
    const Cd = {},
        Dd = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g + ""
            }
        };

    function Ed(a) {
        return a instanceof Dd && a.constructor === Dd ? a.g : "type_error:TrustedResourceUrl"
    }

    function Fd(a) {
        if (Bd === void 0) {
            var b = null;
            var c = p.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ta,
                        createScript: ta,
                        createScriptURL: ta
                    })
                } catch (d) {
                    p.console && p.console.error(d.message)
                }
                Bd = b
            } else Bd = b
        }
        a = (b = Bd) ? b.createScriptURL(a) : a;
        return new Dd(a, Cd)
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    function Gd(a, ...b) {
        if (b.length === 0) return Fd(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Fd(c)
    }

    function Hd(a, b) {
        a = Ed(a).toString();
        const c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return Id(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function Id(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(k => e(k, h)) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        let f = b.length ? "&" : "?";
        d.constructor === Object && (d = Object.entries(d));
        Array.isArray(d) ? d.forEach(g => e(g[1], g[0])) : d.forEach(e);
        return Fd(a + b + c)
    };

    function Jd(a, b) {
        this.width = a;
        this.height = b
    }
    Jd.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Jd.prototype.isEmpty = function() {
        return !(this.width * this.height)
    };
    Jd.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Jd.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Jd.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    Jd.prototype.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function Kd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Ld(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Md(a) {
        this.g = a || p.document || document
    }
    Md.prototype.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };

    function Nd() {
        return za && Ca ? Ca.mobile : !Od() && (r("iPod") || r("iPhone") || r("Android") || r("IEMobile"))
    }

    function Od() {
        return za && Ca ? !Ca.mobile && (r("iPad") || r("Android") || r("Silk")) : r("iPad") || r("Android") && !r("Mobile") || r("Silk")
    };
    var Pd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Qd = /#|$/;

    function Rd(a, b) {
        var c = a.search(Qd);
        a: {
            var d = 0;
            for (var e = b.length;
                (d = a.indexOf(b, d)) >= 0 && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (f == 38 || f == 63)
                    if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                d += e + 1
            }
            d = -1
        }
        if (d < 0) return null;
        e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    };

    function Sd(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Ta(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function Td(a) {
        return Sd(a.top) ? a.top : null
    }

    function Ud(a, b) {
        const c = Vd("SCRIPT", a);
        c.src = Ed(b);
        (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Wd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Xd() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Yd(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Zd(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var $d = /^([0-9.]+)px$/,
        ae = /^(-?[0-9.]{1,30})$/;

    function be(a) {
        if (!ae.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function ce(a) {
        return (a = $d.exec(a)) ? +a[1] : null
    }
    var de = td(() => Nd() ? 2 : Od() ? 1 : 0),
        ee = a => {
            Yd({
                display: "none"
            }, (b, c) => {
                a.style.setProperty(c, b, "important")
            })
        };
    let fe = [];
    const ge = () => {
        const a = fe;
        fe = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function ie() {
        var a = N(je).A(ke.g, ke.defaultValue),
            b = O.document;
        if (a.length && b.head)
            for (const c of a) c && b.head && (a = Vd("META"), b.head.appendChild(a), a.httpEquiv = "origin-trial", a.content = c)
    }
    var le = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        me = a => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: le(),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        oe = a => {
            var b = ne;
            b.readyState === "complete" || b.readyState === "interactive" ? (fe.push(a), fe.length == 1 && (window.Promise ? Promise.resolve().then(ge) : window.setImmediate ? setImmediate(ge) : setTimeout(ge, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function Vd(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function pe(a, b, c = null, d = !1, e = !1) {
        qe(a, b, c, d, e)
    }

    function qe(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Vd("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Ma(h, f);
                    k >= 0 && Array.prototype.splice.call(h, k, 1)
                }
                wd(f, "load", g);
                wd(f, "error", g)
            };
            vd(f, "load", g);
            vd(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var se = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Yd(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            re(c)
        },
        re = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : pe(b, a, void 0, !1, !1)
        };
    var ne = document,
        O = window;

    function te(a) {
        this.g = a || {
            cookie: ""
        }
    }
    te.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.mc, g = c.nc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.zb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "")
    };
    te.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = wa(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    te.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    te.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = wa(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; c >= 0; c--) a = b[c], this.get(a), this.set(a, "", {
            zb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function ue(a, b = window) {
        if (H(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function ve(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    };
    let we = null;
    var xe = (a, b = []) => {
        let c = !1;
        p.google_logging_queue || (c = !0, p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        if (a = c) {
            if (we == null) {
                we = !1;
                try {
                    const d = Td(p);
                    d && d.location.hash.indexOf("google_logging") !== -1 && (we = !0);
                    ve(p) ? .getItem("google_logging") && (we = !0)
                } catch (d) {}
            }
            a = we
        }
        a && Ud(p.document, Gd `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function ye(a = p) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function ze(a = ye()) {
        return a ? Sd(a.master) ? a.master : null : null
    };
    var Ae = a => {
            a = ze(ye(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        Be = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        Ce = a => {
            if (!a) return "";
            a = a.toLowerCase();
            a.substring(0, 3) != "ca-" && (a = "ca-" + a);
            return a
        };
    var De = class {
            constructor(a, b) {
                this.error = a;
                this.context = b.context;
                this.msg = b.message || "";
                this.id = b.id || "jserror";
                this.meta = {}
            }
        },
        Ee = a => !!(a.error && a.meta && a.id);
    const Fe = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Ge = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        He = class {
            constructor(a, b, c) {
                this.url = a;
                this.l = b;
                this.ab = !!c;
                this.depth = null
            }
        };
    let Ie = null;

    function Je() {
        if (Ie === null) {
            Ie = "";
            try {
                let a = "";
                try {
                    a = p.top.location.hash
                } catch (b) {
                    a = p.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Ie = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Ie
    };

    function Ke() {
        const a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Le() {
        const a = p.performance;
        return a && a.now ? a.now() : null
    };
    var Me = class {
        constructor(a, b) {
            var c = Le() || Ke();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Ne = p.performance,
        Oe = !!(Ne && Ne.mark && Ne.measure && Ne.clearMarks),
        Pe = td(() => {
            var a;
            if (a = Oe) a = Je(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function Qe(a) {
        a && Ne && Pe() && (Ne.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Ne.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Re(a) {
        a.g = !1;
        if (a.i != a.j.google_js_reporting_queue) {
            if (Pe()) {
                var b = a.i;
                const c = b.length;
                b = typeof b === "string" ? b.split("") : b;
                for (let d = 0; d < c; d++) d in b && Qe.call(void 0, b[d])
            }
            a.i.length = 0
        }
    }
    class Se {
        constructor(a) {
            this.i = [];
            this.j = a || p;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Pe() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Me(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Ne && Pe() && Ne.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (Le() || Ke()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Ne && Pe() && Ne.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function Te(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Ue(a, b, c, d, e) {
        const f = [];
        Yd(a, function(g, h) {
            (g = Ve(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Ve(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Ve(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Ue(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function We(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Xe(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = We(a) - b.length;
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
                let l = Ue(h[k], a.j, ",$");
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
    class Ye {
        constructor() {
            this.j = "&";
            this.i = {};
            this.u = 0;
            this.g = []
        }
    };

    function Ze(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (d) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    }
    var af = class {
        constructor(a, b, c = null) {
            this.B = a;
            this.D = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.A = this.R
        }
        ib(a) {
            this.A = a
        }
        Fa(a) {
            this.g = a
        }
        u(a) {
            this.j = a
        }
        ga(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.D;
                try {
                    Qe(e), b = this.A(a, new De(f, {
                        message: Ze(f)
                    }), void 0, c)
                } catch (g) {
                    this.R(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        ra(a, b) {
            return (...c) => this.ga(a, () => b.apply(void 0, c))
        }
        R(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Ya = new Ye;
                var g = Ya;
                g.g.push(1);
                g.i[1] = Te("context", a);
                Ee(b) || (b = new De(b, {
                    message: Ze(b)
                }));
                if (b.msg) {
                    g = Ya;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = Te("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (hb) {}
                if (d) try {
                    d(b)
                } catch (hb) {}
                d = Ya;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = p;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Sd(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new He(m || "", l));
                    try {
                        d = l.parent
                    } catch (hb) {
                        d = null
                    }
                } while (d && l != d);
                for (let hb = 0, Dg = k.length - 1; hb <= Dg; ++hb) k[hb].depth =
                    Dg - hb;
                l = p;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var x = k[m];
                        x.url || (x.url = l.location.ancestorOrigins[m - 1] || "", x.ab = !0)
                    }
                var n = k;
                let Sc = new He(p.location.href, p, !1);
                l = null;
                const he = n.length - 1;
                for (x = he; x >= 0; --x) {
                    var q = n[x];
                    !l && Fe.test(q.url) && (l = q);
                    if (q.url && !q.ab) {
                        Sc = q;
                        break
                    }
                }
                q = null;
                const pk = n.length && n[he].url;
                Sc.depth != 0 && pk && (q = n[he]);
                f = new Ge(Sc, q);
                if (f.i) {
                    n = Ya;
                    var t = f.i.url || "";
                    n.g.push(4);
                    n.i[4] = Te("top", t)
                }
                var v = {
                    url: f.g.url ||
                        ""
                };
                if (f.g.url) {
                    var L = f.g.url.match(Pd),
                        C = L[1],
                        gb = L[3],
                        Zb = L[4];
                    t = "";
                    C && (t += C + ":");
                    gb && (t += "//", t += gb, Zb && (t += ":" + Zb));
                    var Eg = t
                } else Eg = "";
                C = Ya;
                v = [v, {
                    url: Eg
                }];
                C.g.push(5);
                C.i[5] = v;
                $e(this.B, e, Ya, this.j, c)
            } catch (Ya) {
                try {
                    $e(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ze(Ya),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (Sc) {}
            }
            return this.D
        }
        ca(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.R(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    var bf = class extends M {
            constructor() {
                super()
            }
        },
        cf = [2, 3, 4];
    var df = class extends M {},
        ef = [3, 4, 5],
        ff = [6, 7];
    var gf = class extends M {
            constructor() {
                super()
            }
        },
        hf = [4, 5];

    function jf(a, b) {
        var c = E(a, df, 2, A());
        if (!c.length) return kf(a, b);
        a = J(a, 1);
        if (a === 1) return c = jf(c[0], b), c.success ? {
            success: !0,
            value: !c.value
        } : c;
        c = Oa(c, d => jf(d, b));
        switch (a) {
            case 2:
                return c.find(d => d.success && !d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !0
                };
            case 3:
                return c.find(d => d.success && d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !1
                };
            default:
                return {
                    success: !1,
                    N: 3
                }
        }
    }

    function kf(a, b) {
        var c = Qc(a, ef);
        a: {
            switch (c) {
                case 3:
                    var d = gd(a, 3, ef);
                    break a;
                case 4:
                    d = gd(a, 4, ef);
                    break a;
                case 5:
                    d = gd(a, 5, ef);
                    break a
            }
            d = void 0
        }
        if (!d) return {
            success: !1,
            N: 2
        };
        b = (b = b[c]) && b[d];
        if (!b) return {
            success: !1,
            property: d,
            fa: c,
            N: 1
        };
        let e;
        try {
            var f = Zc(a, 8, A());
            e = b(...f)
        } catch (g) {
            return {
                success: !1,
                property: d,
                fa: c,
                N: 2
            }
        }
        f = J(a, 1);
        if (f === 4) return {
            success: !0,
            value: !!e
        };
        if (f === 5) return {
            success: !0,
            value: e != null
        };
        if (f === 12) a = I(a, Pc(a, ff, 7));
        else a: {
            switch (c) {
                case 4:
                    a = fd(a, Pc(a, ff, 6));
                    break a;
                case 5:
                    a = I(a,
                        Pc(a, ff, 7));
                    break a
            }
            a = void 0
        }
        if (a == null) return {
            success: !1,
            property: d,
            fa: c,
            N: 3
        };
        if (f === 6) return {
            success: !0,
            value: e === a
        };
        if (f === 9) return {
            success: !0,
            value: e != null && xa(String(e), a) === 0
        };
        if (e == null) return {
            success: !1,
            property: d,
            fa: c,
            N: 4
        };
        switch (f) {
            case 7:
                c = e < a;
                break;
            case 8:
                c = e > a;
                break;
            case 12:
                c = eb(a) && eb(e) && (new RegExp(a)).test(e);
                break;
            case 10:
                c = e != null && xa(String(e), a) === -1;
                break;
            case 11:
                c = e != null && xa(String(e), a) === 1;
                break;
            default:
                return {
                    success: !1,
                    N: 3
                }
        }
        return {
            success: !0,
            value: c
        }
    }

    function lf(a, b) {
        return a ? b ? jf(a, b) : {
            success: !1,
            N: 1
        } : {
            success: !0,
            value: !0
        }
    };
    var Uc = class extends M {};
    var mf = class extends M {
        getValue() {
            return D(this, Uc, 2)
        }
    };
    var nf = class extends M {},
        of = pd(nf),
        pf = [1, 2, 3, 6, 7, 8];
    var qf = class extends M {
        constructor() {
            super()
        }
    };

    function rf(a, b) {
        try {
            const c = d => [{
                [d.Ga]: d.Da
            }];
            return JSON.stringify([a.filter(d => d.oa).map(c), nd(b), a.filter(d => !d.oa).map(c)])
        } catch (c) {
            return sf(c, b), ""
        }
    }

    function sf(a, b) {
        try {
            se({
                m: Ze(a instanceof Error ? a : Error(String(a))),
                b: J(b, 1) || null,
                v: I(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var tf = class {
        constructor(a, b) {
            var c = new qf;
            a = B(c, 1, w(a), 0);
            b = kd(a, 2, b);
            a = b.C;
            c = a[u];
            this.j = c & 2 ? b : hc(b.constructor, xc(a, c, !0))
        }
    };
    var uf = class extends M {
        constructor() {
            super()
        }
    };
    var vf = class extends M {
        constructor() {
            super()
        }
        getValue() {
            return J(this, 1)
        }
    };
    var wf = class extends M {
        constructor() {
            super()
        }
    };
    var xf = class extends M {
        constructor() {
            super()
        }
        getContentUrl() {
            return I(this, 4)
        }
    };
    var yf = class extends M {};

    function zf(a) {
        return Rc(a, yf, 3)
    }
    var Af = class extends M {};

    function Bf(a, b) {
        return kd(a, 1, b)
    }
    var Cf = class extends M {
        constructor() {
            super()
        }
        getContentUrl() {
            return I(this, 1)
        }
    };
    var Df = class extends M {};

    function Ef(a) {
        var b = new Ff;
        return B(b, 1, w(a), 0)
    }
    var Ff = class extends M {
        constructor() {
            super()
        }
    };
    var Gf = class extends M {
            constructor() {
                super()
            }
        },
        Hf = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15];
    var If = class extends M {
        constructor() {
            super()
        }
    };

    function Jf(a, b) {
        return B(a, 1, w(b), 0)
    }

    function Kf(a, b) {
        return B(a, 2, w(b), 0)
    }
    var Lf = class extends M {
        constructor() {
            super()
        }
    };
    var Mf = class extends M {
            constructor() {
                super()
            }
        },
        Nf = [1, 2];

    function Of(a, b) {
        return Vc(a, 1, b)
    }

    function Pf(a, b) {
        return Xc(a, 2, b)
    }

    function Qf(a, b) {
        return Lc(a, 4, b, Ub)
    }

    function Rf(a, b) {
        return Xc(a, 5, b)
    }

    function Sf(a, b) {
        return B(a, 6, w(b), 0)
    }
    var Tf = class extends M {
        constructor() {
            super()
        }
    };
    var Uf = class extends M {
            constructor() {
                super()
            }
        },
        Vf = [1, 2, 3, 4, 6];
    var Wf = class extends M {
        constructor() {
            super()
        }
    };

    function Xf(a) {
        var b = new Yf;
        return Wc(b, 4, Zf, a)
    }
    var Yf = class extends M {
            constructor() {
                super()
            }
        },
        Zf = [4, 5, 7, 8, 9];
    var $f = class extends M {
        constructor() {
            super()
        }
    };
    var ag = class extends M {
        constructor() {
            super()
        }
    };
    var bg = class extends M {
        constructor() {
            super()
        }
    };
    var cg = class extends M {
            constructor() {
                super()
            }
        },
        dg = [4, 6];
    class eg extends tf {
        constructor() {
            super(...arguments)
        }
    }

    function fg(a, ...b) {
        gg(a, ...b.map(c => ({
            oa: !0,
            Ga: 3,
            Da: nd(c)
        })))
    }

    function hg(a, ...b) {
        gg(a, ...b.map(c => ({
            oa: !0,
            Ga: 4,
            Da: nd(c)
        })))
    }

    function ig(a, ...b) {
        gg(a, ...b.map(c => ({
            oa: !0,
            Ga: 7,
            Da: nd(c)
        })))
    }
    var jg = class extends eg {};
    var kg = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function gg(a, ...b) {
        try {
            a.D && rf(a.g.concat(b), a.j).length >= 65536 && lg(a), a.u && !a.A && (a.A = !0, mg(a.u, () => {
                lg(a)
            })), a.g.push(...b), a.g.length >= a.B && lg(a), a.g.length && a.i === null && (a.i = setTimeout(() => {
                lg(a)
            }, a.I))
        } catch (c) {
            sf(c, a.j)
        }
    }

    function lg(a) {
        a.i !== null && (clearTimeout(a.i), a.i = null);
        if (a.g.length) {
            var b = rf(a.g, a.j);
            a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var ng = class extends jg {
            constructor(a, b, c, d, e, f) {
                super(a, b);
                this.H = kg;
                this.I = c;
                this.B = d;
                this.D = e;
                this.u = f;
                this.g = [];
                this.i = null;
                this.A = !1
            }
        },
        og = class extends ng {
            constructor(a, b, c = 1E3, d = 100, e = !1, f) {
                super(a, b, c, d, e && !0, f)
            }
        };

    function pg(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = K(b, 1, c);
        c = me(window);
        b = K(b, 2, c);
        return K(b, 6, a.A)
    }

    function qg(a, b, c, d, e, f) {
        if (a.j) {
            var g = Kf(Jf(new Lf, b), c);
            b = Sf(Pf(Of(Rf(Qf(new Tf, d), e), g), a.g.slice()), f);
            b = Xf(b);
            hg(a.i, pg(a, b));
            if (f === 1 || f === 3 || f === 4 && !a.g.some(h => J(h, 1) === J(g, 1) && J(h, 2) === c)) a.g.push(g), a.g.length > 100 && a.g.shift()
        }
    }

    function rg(a, b, c, d) {
        if (a.j) {
            var e = new If;
            b = y(e, 1, Vb(b));
            c = y(b, 2, Vb(c));
            d = y(c, 3, w(d));
            c = new Yf;
            d = Wc(c, 8, Zf, d);
            hg(a.i, pg(a, d))
        }
    }

    function sg(a, b, c, d, e) {
        if (a.j) {
            var f = new gf;
            b = Vc(f, 1, b);
            c = y(b, 2, w(c));
            d = y(c, 3, Vb(d));
            if (e.fa === void 0) Mc(d, 4, hf, w(e.N));
            else switch (e.fa) {
                case 3:
                    c = new bf;
                    c = Mc(c, 2, cf, w(e.property));
                    e = y(c, 1, w(e.N));
                    Wc(d, 5, hf, e);
                    break;
                case 4:
                    c = new bf;
                    c = Mc(c, 3, cf, w(e.property));
                    e = y(c, 1, w(e.N));
                    Wc(d, 5, hf, e);
                    break;
                case 5:
                    c = new bf, c = Mc(c, 4, cf, w(e.property)), e = y(c, 1, w(e.N)), Wc(d, 5, hf, e)
            }
            e = new Yf;
            e = Wc(e, 9, Zf, d);
            hg(a.i, pg(a, e))
        }
    }
    var tg = class {
        constructor(a, b, c, d = new og(6, "unknown", b)) {
            this.A = a;
            this.u = c;
            this.i = d;
            this.g = [];
            this.j = a > 0 && Xd() < 1 / a
        }
    };
    var N = a => {
        var b = "Ca";
        if (a.Ca && a.hasOwnProperty(b)) return a.Ca;
        b = new a;
        return a.Ca = b
    };
    var ug = class {
        constructor() {
            this.M = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var vg = /^true$/.test("false");

    function wg(a, b) {
        switch (b) {
            case 1:
                return gd(a, 1, pf);
            case 2:
                return gd(a, 2, pf);
            case 3:
                return gd(a, 3, pf);
            case 6:
                return gd(a, 6, pf);
            case 8:
                return gd(a, 8, pf);
            default:
                return null
        }
    }

    function xg(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return H(a, 1);
            case 7:
                return I(a, 3);
            case 2:
                return fd(a, 2);
            case 3:
                return I(a, 3);
            case 6:
                return Zc(a, 4, A());
            case 8:
                return Zc(a, 4, A());
            default:
                return null
        }
    }
    const yg = td(() => {
        if (!vg) return {};
        try {
            var a = window;
            try {
                var b = a.sessionStorage
            } catch {
                b = null
            }
            if (b = b ? .getItem("GGDFSSK")) return JSON.parse(b)
        } catch {}
        return {}
    });

    function zg(a, b, c, d = 0) {
        N(Ag).j[d] = N(Ag).j[d] ? .add(b) ? ? (new Set).add(b);
        const e = yg();
        if (e[b] != null) return e[b];
        b = Bg(d)[b];
        if (!b) return c;
        b = of (JSON.stringify(b));
        b = Cg(b);
        a = xg(b, a);
        return a != null ? a : c
    }

    function Cg(a) {
        const b = N(ug).M;
        if (b && Qc(a, pf) !== 8) {
            const c = Qa(E(a, mf, 5, A()), d => {
                d = lf(D(d, df, 1), b);
                return d.success && d.value
            });
            if (c) return c.getValue() ? ? null
        }
        return D(a, Uc, 4) ? ? null
    }
    class Ag {
        constructor() {
            this.i = {};
            this.u = [];
            this.j = {};
            this.g = new Map
        }
    }

    function Fg(a, b = !1, c) {
        return !!zg(1, a, b, c)
    }

    function Gg(a, b = 0, c) {
        a = Number(zg(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Hg(a, b = "", c) {
        a = zg(3, a, b, c);
        return typeof a === "string" ? a : b
    }

    function Ig(a, b = [], c) {
        a = zg(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Jg(a, b = [], c) {
        a = zg(8, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Bg(a) {
        return N(Ag).i[a] || (N(Ag).i[a] = {})
    }

    function Kg(a, b) {
        const c = Bg(b);
        Yd(a, (d, e) => {
            if (c[e]) {
                const g = of (JSON.stringify(d));
                if (G(g, Pc(g, pf, 8)) != null) {
                    var f = of (JSON.stringify(c[e]));
                    d = Rc(g, Uc, 4);
                    f = Zc(Tc(f), 4, A());
                    Yc(d, f)
                }
                c[e] = nd(g)
            } else c[e] = d
        })
    }

    function Lg(a, b, c, d, e = !1) {
        var f = [],
            g = [];
        for (const x of b) {
            b = Bg(x);
            for (const n of a) {
                var h = Qc(n, pf);
                const q = wg(n, h);
                if (q) {
                    a: {
                        var k = q;
                        var l = h,
                            m = N(Ag).g.get(x) ? .get(q) ? .slice(0) ? ? [];
                        const t = new Uf;
                        switch (l) {
                            case 1:
                                Mc(t, 1, Vf, w(k));
                                break;
                            case 2:
                                Mc(t, 2, Vf, w(k));
                                break;
                            case 3:
                                Mc(t, 3, Vf, w(k));
                                break;
                            case 6:
                                Mc(t, 4, Vf, w(k));
                                break;
                            case 8:
                                Mc(t, 6, Vf, w(k));
                                break;
                            default:
                                k = void 0;
                                break a
                        }
                        Lc(t, 5, m, Ub);k = t
                    }
                    k && N(Ag).j[x] ? .has(q) && f.push(k);h === 8 && b[q] ? (k = of (JSON.stringify(b[q])), h = Rc(n, Uc, 4), k = Zc(Tc(k), 4, A()), Yc(h, k)) :
                    k && N(Ag).g.get(x) ? .has(q) && g.push(k);e || (h = q, k = x, l = d, m = N(Ag), m.g.has(k) || m.g.set(k, new Map), m.g.get(k).has(h) || m.g.get(k).set(h, []), l && m.g.get(k).get(h).push(l));b[q] = nd(n)
                }
            }
        }
        if (f.length || g.length) a = d ? ? void 0, c.j && c.u && (d = new Wf, f = Xc(d, 2, f), g = Xc(f, 3, g), a && B(g, 1, Vb(a), 0), f = new Yf, g = Wc(f, 7, Zf, g), hg(c.i, pg(c, g)))
    }

    function Mg(a, b) {
        b = Bg(b);
        for (const c of a) {
            a = of (JSON.stringify(c));
            const d = Qc(a, pf);
            (a = wg(a, d)) && (b[a] || (b[a] = c))
        }
    }

    function Ng() {
        return Object.keys(N(Ag).i).map(a => Number(a))
    }

    function Og(a) {
        N(Ag).u.includes(a) || Kg(Bg(4), a)
    };

    function P(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Pg(a, b, c) {
        return b[a] || c
    }

    function Qg(a) {
        P(5, Fg, a);
        P(6, Gg, a);
        P(7, Hg, a);
        P(8, Ig, a);
        P(17, Jg, a);
        P(13, Mg, a);
        P(15, Og, a)
    }

    function Rg(a) {
        P(4, b => {
            N(ug).M = b
        }, a);
        P(9, (b, c) => {
            var d = N(ug);
            d.M[3][b] == null && (d.M[3][b] = c)
        }, a);
        P(10, (b, c) => {
            var d = N(ug);
            d.M[4][b] == null && (d.M[4][b] = c)
        }, a);
        P(11, (b, c) => {
            var d = N(ug);
            d.M[5][b] == null && (d.M[5][b] = c)
        }, a);
        P(14, b => {
            var c = N(ug);
            for (const d of [3, 4, 5]) Object.assign(c.M[d], b[d])
        }, a)
    }

    function Sg(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Tg(a, b, c) {
        a.j = Pg(1, b, () => {});
        a.u = (d, e) => Pg(2, b, () => [])(d, c, e);
        a.g = () => Pg(3, b, () => [])(c);
        a.i = d => {
            Pg(16, b, () => {})(d, c)
        }
    }
    class Ug {
        j() {}
        i() {}
        u() {
            return []
        }
        g() {
            return []
        }
    };

    function $e(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Ye ? f = c : (f = new Ye, Yd(c, (h, k) => {
                var l = f;
                const m = l.u++;
                h = Te(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = Xe(f, "/pagead/gen_204?id=" + b + "&");
            g && pe(p, g)
        } catch (f) {}
    }

    function Vg(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Wg {
        constructor() {
            this.g = Math.random()
        }
    };
    let Xg, Yg;
    const Zg = new Se(window);
    (a => {
        Xg = a ? ? new Wg;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Vg(Xg, window.google_srt);
        Yg = new af(Xg, !0, Zg);
        Yg.Fa(() => {});
        Yg.u(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || Re(Zg) : Zg.g && vd(window, "load", () => {
            window.google_measure_js_timing || Re(Zg)
        })
    })();
    var $g = {
        Ub: 0,
        Tb: 1,
        Qb: 2,
        Lb: 3,
        Rb: 4,
        Mb: 5,
        Sb: 6,
        Ob: 7,
        Pb: 8,
        Kb: 9,
        Nb: 10,
        Vb: 11
    };
    var ah = {
        Xb: 0,
        Yb: 1,
        Wb: 2
    };

    function bh(a) {
        if (a.g != 0) throw Error("Already resolved/rejected.");
    }
    var eh = class {
        constructor() {
            this.i = new ch(this);
            this.g = 0
        }
        resolve(a) {
            bh(this);
            this.g = 1;
            this.u = a;
            dh(this.i)
        }
        reject(a) {
            bh(this);
            this.g = 2;
            this.j = a;
            dh(this.i)
        }
    };

    function dh(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.g.u);
                break;
            case 2:
                a.j && a.j(a.g.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var ch = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.i) throw Error("Then functions already set.");
            this.i = a;
            this.j = b;
            dh(this)
        }
    };
    const fh = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new fh(Na(this.g, a))
        }
        apply(a) {
            return new fh(a(this.g.slice(0)))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new fh(b)
        }
    };

    function gh(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const ih = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = hh(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = hh(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function hh(a) {
        return a instanceof Object ? String(ma(a)) : a + ""
    };

    function jh(a) {
        return new kh({
            value: a
        }, null)
    }

    function lh(a) {
        return new kh(null, a)
    }

    function mh(a) {
        try {
            return jh(a())
        } catch (b) {
            return lh(b)
        }
    }

    function nh(a) {
        return a.g != null ? a.getValue() : null
    }

    function oh(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function ph(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class kh {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof kh ? a : jh(a)) : this
        }
    };
    const qh = class {
        constructor(a) {
            this.g = new ih;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return this.g.g[hh(a)] !== void 0
        }
    };
    class rh {
        constructor() {
            this.g = new ih
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new qh, this.g.set(a, c));
            c.add(b)
        }
    };
    var Q = class extends M {
        getId() {
            return F(this, 3)
        }
    };
    class sh {
        constructor({
            ob: a,
            Zb: b,
            kc: c,
            Cb: d
        }) {
            this.g = b;
            this.u = new fh(a || []);
            this.j = d;
            this.i = c
        }
    };
    const uh = a => {
            const b = [],
                c = a.u;
            c && c.g.length && b.push({
                aa: "a",
                ea: th(c)
            });
            a.g != null && b.push({
                aa: "as",
                ea: a.g
            });
            a.i != null && b.push({
                aa: "i",
                ea: String(a.i)
            });
            a.j != null && b.push({
                aa: "rp",
                ea: String(a.j)
            });
            b.sort(function(d, e) {
                return d.aa.localeCompare(e.aa)
            });
            b.unshift({
                aa: "t",
                ea: "aa"
            });
            return b
        },
        th = a => {
            a = a.g.slice(0).map(vh);
            a = JSON.stringify(a);
            return Zd(a)
        },
        vh = a => {
            const b = {};
            F(a, 7) != null && (b.q = F(a, 7));
            cd(a, 2) != null && (b.o = cd(a, 2));
            cd(a, 5) != null && (b.p = cd(a, 5));
            return b
        };
    var wh = class extends M {
        setLocation(a) {
            return y(this, 1, w(a))
        }
    };

    function xh(a) {
        const b = [].slice.call(arguments).filter(sd(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Xa || []);
            d = Object.assign(d, e.hb)
        });
        return new yh(c, d)
    }

    function zh(a) {
        switch (a) {
            case 1:
                return new yh(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new yh(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new yh(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new yh(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Ah(a) {
        if (a == null) var b = null;
        else {
            var c = uh(a);
            a = [];
            for (b of c) c = String(b.ea), a.push(b.aa + "." + (c.length <= 20 ? c : c.slice(0, 19) + "_"));
            b = new yh(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class yh {
        constructor(a, b) {
            this.Xa = a;
            this.hb = b
        }
    };
    const Bh = new yh(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var Ch = pd(class extends M {});
    var Dh = class extends M {};
    var Eh = class extends M {};
    var Fh = class extends M {};
    var Gh = class extends M {};
    var Hh = class extends M {
        constructor() {
            super()
        }
    };

    function Ih(a) {
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
    };
    var R = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        S = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Jh = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var Kh = new R(1333),
        Lh = new S(1359),
        Mh = new S(1358),
        Nh = new R(1360),
        Oh = new S(1357),
        Ph = new R(1345),
        Qh = new R(1371),
        Rh = new R(1332),
        Sh = new S(1130, 100),
        Th = new S(1340, .2),
        Uh = new S(1338, .3),
        Vh = new S(1336, 1.2),
        Wh = new S(1339, .3),
        Xh = new R(1337),
        Yh = new class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        }(14),
        Zh = new R(1370),
        $h = new R(1342),
        ai = new R(1344),
        bi = new S(1343, 300),
        ci = new R(316),
        di = new R(1207, !0),
        ei = new R(313),
        fi = new R(369),
        gi = new R(1318, !0),
        hi = new R(217),
        ii = new R(1369),
        ji = new R(626390500),
        ki = new Jh(627094447,
            "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        li = new S(643258048),
        mi = new S(643258049),
        ni = new S(579884443, .7),
        oi = new Jh(641845510, ["33"]),
        pi = new R(622128248, !0),
        qi = new Jh(635821288, ["29_18", "30_19"]),
        ri = new Jh(636146137, ["29_5", "30_6"]),
        si = new R(579884441, !0),
        ti = new Jh(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        ui = new S(579884442, .7),
        vi = new S(658370512),
        wi = new R(626062008),
        xi = new R(643258050),
        yi = new R(506914611),
        zi = new R(626062007),
        Ai = new R(662976800),
        Bi = new R(662101537),
        Ci = new S(1079, 5),
        Di = new R(10009, !0),
        Ei = new R(10013),
        ke = new class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        }(1934, ["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
            "A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ]),
        Fi = new R(84);
    var je = class {
        constructor() {
            const a = {};
            this.i = (b, c) => a[b] != null ? a[b] : c;
            this.u = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.j = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.B = () => {}
        }
    };

    function T(a) {
        return N(je).i(a.g, a.defaultValue)
    }

    function U(a) {
        return N(je).u(a.g, a.defaultValue)
    }

    function Gi(a) {
        return N(je).j(a.g, a.defaultValue)
    };

    function Hi(a, b, c) {
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
        Ih(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Ii(a, b) {
        const c = e => {
                e = Ji(e);
                return e == null ? !1 : 0 < e
            },
            d = e => {
                e = Ji(e);
                return e == null ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: Ki(a.previousSibling, c),
                    ka: e => Ki(e.previousSibling, c),
                    qa: 0
                };
            case 2:
                return {
                    init: Ki(a.lastChild, c),
                    ka: e => Ki(e.previousSibling, c),
                    qa: 0
                };
            case 3:
                return {
                    init: Ki(a.nextSibling, d),
                    ka: e => Ki(e.nextSibling, d),
                    qa: 3
                };
            case 1:
                return {
                    init: Ki(a.firstChild, d),
                    ka: e => Ki(e.nextSibling, d),
                    qa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Ji(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ki(a, b) {
        return a && b(a) ? a : null
    };
    var Li = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Mi = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Ni(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function Oi(a) {
        return Ni(a).clientWidth ? ? void 0
    };

    function Pi(a, b) {
        do {
            const c = Wd(a, b);
            if (c && c.position == "fixed") return !1
        } while (a = a.parentElement);
        return !0
    };

    function Qi(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = ce(a[c[e]]);
                d = d === null ? null : Math.round(d);
                d != null && (b[f] = d)
            }
        }
    }

    function Ri(a, b) {
        return !((ae.test(b.google_ad_width) || $d.test(a.style.width)) && (ae.test(b.google_ad_height) || $d.test(a.style.height)))
    }

    function Si(a, b) {
        return (a = Ti(a, b)) ? a.y : 0
    }

    function Ti(a, b) {
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

    function Ui(a, b, c, d, e) {
        if (a !== a.top) return Td(a) ? 3 : 16;
        if (!(Oi(a) < 488)) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        const f = Oi(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = e.google_full_width_responsive !== "true") a: {
                c = b.parentElement;
                for (b = Oi(a); c; c = c.parentElement)
                    if ((d = Wd(c, a)) && (e = ce(d.width)) && !(e >= b) && d.overflow !== "visible") {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Vi(a, b, c, d) {
        const e = Ui(b, c, a, U(Wh), d);
        e !== !0 ? a = e : d.google_full_width_responsive === "true" || Pi(c, b) ? (b = Oi(b), a = b - a, a = b && a >= 0 ? !0 : b ? a < -10 ? 11 : a < 0 ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Wi(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function Xi(a, b) {
        if (b.nodeType === 3) return /\S/.test(b.data);
        if (b.nodeType === 1) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            let c;
            try {
                c = Wd(b, a)
            } catch (d) {}
            return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
        }
        return !1
    }

    function Yi(a, b, c) {
        a = Ti(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function Zi(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Wd(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            Wi(b, c, "0px");
            d.width = `${Oi(a)}px`;
            if (Yi(a, b, c) !== 0) {
                Wi(b, c, "0px");
                var e = Yi(a, b, c);
                Wi(b, c, `${-1*e}px`);
                a = Yi(a, b, c);
                a !== 0 && a !== e && Wi(b, c, `${e/(a-e)*e}px`)
            }
            d.zIndex = "30"
        }
    };
    var $i = class {
        constructor(a, b) {
            this.Z = a;
            this.j = b
        }
        height() {
            return this.j
        }
        g(a) {
            return a > U(bi) && this.j > 300 ? this.Z : Math.min(1200, Math.round(a))
        }
        i() {}
    };
    var aj = (a, b, c) => {
            let d;
            return a.style && !!a.style[c] && ce(a.style[c]) || (d = Wd(a, b)) && !!d[c] && ce(d[c]) || null
        },
        bj = (a, b) => {
            let c;
            return a.style && a.style.zIndex || (c = Wd(a, b)) && c.zIndex || null
        },
        cj = a => b => b.Z <= a,
        fj = (a, b, c, d) => {
            const e = a && dj(c, b),
                f = ej(b, d);
            return g => !(e && g.height() >= f)
        },
        gj = a => b => b.height() <= a,
        dj = (a, b) => Si(a, b) < Ni(b).clientHeight - 100,
        hj = (a, b) => {
            var c = aj(b, a, "height");
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = aj(b, a, "height");
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style &&
                ce(b.style.height)) && (c = Math.min(c, d)), (d = aj(b, a, "maxHeight")) && (c = Math.min(c, d)); while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
            return c
        };
    const ej = (a, b) => {
        const c = Be(a) === 0;
        return b && c ? Math.max(250, 2 * Ni(a).clientHeight / 3) : 250
    };
    var ij = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_ad_start_delay_hint: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0,
        google_privacy_treatments: !0,
        google_special_category_data: !0,
        google_ad_intent_query: !0,
        google_ad_intent_qetid: !0,
        google_ad_intent_eids: !0
    };
    const jj = RegExp("(^| )adsbygoogle($| )");

    function kj(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Kd(d.property);
            a[e] = d.value
        }
    };
    var lj = class extends M {
        g() {
            return bd(this, 23)
        }
    };
    var mj = class extends M {
        g() {
            return $c(this, 1)
        }
    };
    var nj = class extends M {};
    var oj = class extends M {};
    var pj = class extends M {};
    var qj = class extends M {};
    var rj = class extends M {
            getName() {
                return F(this, 4)
            }
        },
        sj = [1, 2, 3];
    var tj = class extends M {};
    var uj = class extends M {};
    var wj = class extends M {
            g() {
                return hd(this, uj, 2, vj)
            }
        },
        vj = [1, 2];
    var xj = class extends M {
        g() {
            return D(this, wj, 3)
        }
    };
    var yj = class extends M {},
        zj = pd(yj);

    function Aj(a) {
        var b = [];
        gh(a.getElementsByTagName("p"), function(c) {
            Bj(c) >= 100 && b.push(c)
        });
        return b
    }

    function Bj(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        gh(a.childNodes, function(c) {
            b += Bj(c)
        });
        return b
    }

    function Cj(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Dj(a, b) {
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

    function Ej(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.u)
        } catch (g) {}
        if (!c.length) return [];
        b = Sa(c);
        b = Dj(a, b);
        typeof a.i === "number" && (c = a.i, c < 0 && (c += b.length), b = c >= 0 && c < b.length ? [b[c]] : []);
        if (typeof a.j === "number") {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Aj(b[d]),
                    f = a.j;
                f < 0 && (f += e.length);
                f >= 0 && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Fj = class {
        constructor(a, b, c, d) {
            this.u = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.u,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class Gj {
        constructor() {
            var a = Gd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.j = !1;
            this.A = Math.random();
            this.i = this.R;
            this.B = a
        }
        Fa(a) {
            this.g = a
        }
        u(a) {
            this.j = a
        }
        ib(a) {
            this.i = a
        }
        R(a, b, c = .01, d, e = "jserror") {
            if ((this.j ? this.A : Math.random()) > c) return !1;
            Ee(b) || (b = new De(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            p.google_js_errors = p.google_js_errors || [];
            p.google_js_errors.push(b);
            p.error_rep_loaded || (Ud(p.document, this.B), p.error_rep_loaded = !0);
            return !1
        }
        ga(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.i(a, d, .01, c, "jserror")) throw d;
            }
        }
        ra(a, b) {
            return (...c) => this.ga(a, () => b.apply(void 0, c))
        }
        ca(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.R(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    const Hj = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var Ij = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = typeof queueMicrotask !== "undefined";
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = Le();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && Hj({
                        label: a.toString(),
                        value: h,
                        duration: (Le() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        Jj = (a, b) => Ij(a, b, (c, d) => {
            (new Gj).R(c, d)
        }, void 0, !1);

    function Kj(a, b, c) {
        return Ij(a, b, void 0, c, !0).apply()
    }

    function Lj(a) {
        if (!a) return null;
        var b = F(a, 7);
        if (F(a, 1) || a.getId() || Zc(a, 4, A()).length > 0) {
            var c = F(a, 3),
                d = F(a, 1),
                e = Zc(a, 4, A(Gb));
            b = cd(a, 2);
            var f = cd(a, 5);
            a = Mj(G(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Cj(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Cj(e[c]);
            b = (e = g) ? new Fj(e, b, f, a) : null
        } else b = b ? new Fj(b, cd(a, 2), cd(a, 5), Mj(G(a, 6))) : null;
        return b
    }
    var Nj = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Mj(a) {
        return a == null ? a : Nj[a]
    }
    var Oj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Pj(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Qj(a) {
        a = Pj(a);
        return a.optimization = a.optimization || {}
    };
    var Rj = a => {
        switch (G(a, 8)) {
            case 1:
            case 2:
                if (a == null) var b = null;
                else b = D(a, Q, 1), b == null ? b = null : (a = G(a, 2), b = a == null ? null : new sh({
                    ob: [b],
                    Cb: a
                }));
                return b != null ? jh(b) : lh(Error("Missing dimension when creating placement id"));
            case 3:
                return lh(Error("Missing dimension when creating placement id"));
            default:
                return lh(Error("Invalid type: " + G(a, 8)))
        }
    };
    var Sj = (a, b) => {
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

    function Tj(a, b) {
        const c = new rh,
            d = new qh;
        b.forEach(e => {
            if (hd(e, pj, 1, sj)) {
                e = hd(e, pj, 1, sj);
                if (D(e, Dh, 1) && D(D(e, Dh, 1), Q, 1) && D(e, Dh, 2) && D(D(e, Dh, 2), Q, 1)) {
                    const g = Uj(a, D(D(e, Dh, 1), Q, 1)),
                        h = Uj(a, D(D(e, Dh, 2), Q, 1));
                    if (g && h)
                        for (var f of Sj({
                                anchor: g,
                                position: G(D(e, Dh, 1), 2)
                            }, {
                                anchor: h,
                                position: G(D(e, Dh, 2), 2)
                            })) c.set(ma(f.anchor), f.position)
                }
                D(e, Dh, 3) && D(D(e, Dh, 3), Q, 1) && (f = Uj(a, D(D(e, Dh, 3), Q, 1))) && c.set(ma(f), G(D(e, Dh, 3), 2))
            } else hd(e, qj, 2, sj) ? Vj(a, hd(e, qj, 2, sj), c) : hd(e, oj, 3, sj) && Wj(a, hd(e, oj, 3, sj), d)
        });
        return new Xj(c,
            d)
    }
    class Xj {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const Vj = (a, b, c) => {
            D(b, Dh, 2) ? (b = D(b, Dh, 2), (a = Uj(a, D(b, Q, 1))) && c.set(ma(a), G(b, 2))) : D(b, Q, 1) && (a = Yj(a, D(b, Q, 1))) && a.forEach(d => {
                d = ma(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Wj = (a, b, c) => {
            D(b, Q, 1) && (a = Yj(a, D(b, Q, 1))) && a.forEach(d => {
                c.add(ma(d))
            })
        },
        Uj = (a, b) => (a = Yj(a, b)) && a.length > 0 ? a[0] : null,
        Yj = (a, b) => (b = Lj(b)) ? Ej(b, a) : null;
    var V = class extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
        }
    };
    let Zj, W;
    const ak = new Se(p);
    var bk = a => {
        a != null && (p.google_measure_js_timing = a);
        p.google_measure_js_timing || Re(ak)
    };
    ((a, b = !0) => {
        Zj = a || new Wg;
        typeof p.google_srt !== "number" && (p.google_srt = Math.random());
        Vg(Zj, p.google_srt);
        W = new af(Zj, b, ak);
        W.u(!0);
        p.document.readyState == "complete" ? bk() : ak.g && vd(p, "load", () => {
            bk()
        })
    })();
    var ck = (a, b, c) => W.ga(a, b, c),
        dk = (a, b, c) => {
            const d = N(Ug).g();
            !b.eid && d.length && (b.eid = d.toString());
            $e(Zj, a, b, !0, c)
        },
        ek = (a, b) => {
            W.ca(a, b)
        },
        fk = (a, b, c, d) => (Ee(b) ? b.msg || Ze(b.error) : Ze(b)).indexOf("TagError") === 0 ? ((Ee(b) ? b.error : b).pbr = !0, !1) : W.R(a, b, c, d);
    var gk = class {
        constructor() {
            this.g = le();
            this.i = 0
        }
    };

    function hk(a, b, c) {
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
            if (ik(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function jk(a) {
        a = kk(a);
        return a.has("all") || a.has("after")
    }

    function lk(a) {
        a = kk(a);
        return a.has("all") || a.has("before")
    }

    function kk(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function ik(a) {
        const b = kk(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var mk = class {
        constructor() {
            this.g = new Set;
            this.i = new gk
        }
    };

    function nk(a, b) {
        if (!a) return !1;
        a = Wd(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function ok(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function qk(a) {
        return !!a.nextSibling || !!a.parentNode && qk(a.parentNode)
    };

    function rk(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    const sk = a => {
        const b = rk(a);
        return b ? Na(Oa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
    };
    var tk = a => {
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

    function uk(a, b) {
        if (a.u) return !0;
        a.u = !0;
        const c = E(a.j, Fh, 1, A());
        a.i = 0;
        const d = vk(a.H);
        var e = a.g;
        var f;
        try {
            var g = (f = e.localStorage.getItem("google_ama_settings")) ? Ch(f) : null
        } catch (x) {
            g = null
        }
        f = g !== null && H(g, 2, !1);
        g = Pj(e);
        f && (g.eatf = !0, xe(7, [!0, 0, !1]));
        b: {
            var h = {
                    wb: !1,
                    xb: !1
                },
                k = Sa(e.document.querySelectorAll(".google-auto-placed"));
            const x = Sa(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
                n = Sa(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var l = (sk(e) ||
                Sa(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Sa(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const q = Sa(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                t = Sa(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                v = Sa(e.document.querySelectorAll("div.googlepublisherpluginad")),
                L = Sa(e.document.querySelectorAll("html > ins.adsbygoogle"));
            let C = [].concat(Sa(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Sa(e.document.querySelectorAll("body ins.adsbygoogle")));f = [];
            for (const [gb, Zb] of [
                    [h.ec, k],
                    [h.wb, x],
                    [h.ic, n],
                    [h.fc, l],
                    [h.jc, q],
                    [h.dc, t],
                    [h.hc, v],
                    [h.xb, L]
                ]) gb === !1 ? f = f.concat(Zb) : C = C.concat(Zb);h = tk(C);f = tk(f);
            h = h.slice(0);
            for (m of f)
                for (f = 0; f < h.length; f++)(m.contains(h[f]) || h[f].contains(m)) && h.splice(f, 1);
            var m = h;e = Ni(e).clientHeight;
            for (f = 0; f < m.length; f++)
                if (!(m[f].getBoundingClientRect().top > e)) {
                    e = !0;
                    break b
                }
            e = !1
        }
        e = e ? g.eatfAbg = !0 : !1;
        if (e) return !0;
        e = new qh([2]);
        for (g = 0; g < c.length; g++) {
            m = a;
            h = c[g];
            f = g;
            l = b;
            if (D(h, wh, 4) && e.contains(G(D(h, wh, 4), 1)) && G(h, 8) === 1 && wk(h, d)) {
                m.i++;
                if (l = xk(m, h, l, d)) k = Pj(m.g), k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0), D(h, Q, 1) && cd(D(h, Q, 1), 5) != null && (k.numPostPlacementsPlaced ? k.numPostPlacementsPlaced++ :
                    k.numPostPlacementsPlaced = 1), k.placed == null && (k.placed = []), k.numAutoAdsPlaced++, k.placed.push({
                    index: f,
                    element: l.ia
                }), xe(7, [!1, m.i, !0]);
                m = l
            } else m = null;
            if (m) return !0
        }
        xe(7, [!1, a.i, !1]);
        return !1
    }

    function xk(a, b, c, d) {
        if (!wk(b, d) || G(b, 8) != 1) return null;
        d = D(b, Q, 1);
        if (!d) return null;
        d = Lj(d);
        if (!d) return null;
        d = Ej(d, a.g.document);
        if (d.length == 0) return null;
        d = d[0];
        var e = G(b, 2);
        e = Oj[e];
        e = e === void 0 ? null : e;
        var f;
        if (!(f = e == null)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = nk(ok(d), f);
                        break a;
                    case 3:
                        f = nk(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = nk(g ? g.nodeType == 1 ? g : ok(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && e == 2 && !qk(d))) c = e == 1 || e == 2 ? d : d.parentNode,
            c = !(c && !Ih(c) && c.offsetWidth <= 0);f = !c
        }
        if (!(c = f)) {
            c = a.B;
            f = G(b, 2);
            g =
                c.i;
            var h = ma(d);
            g = g.g.get(h);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(ma(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(ma(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.D;
            g = G(b, 2);
            a: switch (g) {
                case 1:
                    f = jk(d.previousElementSibling) || lk(d);
                    break a;
                case 4:
                    f = jk(d) || lk(d.nextElementSibling);
                    break a;
                case 2:
                    f = lk(d.firstElementChild);
                    break a;
                case 3:
                    f = jk(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + g);
            }
            g =
                hk(c, d, g);
            c = c.i;
            dk("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.i++,
                dvc: de()
            }, .1);
            c = f || g
        }
        if (c) return null;
        f = D(b, Eh, 3);
        c = {};
        f && (c.lb = F(f, 1), c.Va = F(f, 2), c.sb = !!bd(f, 3));
        f = D(b, wh, 4) && G(D(b, wh, 4), 2) ? G(D(b, wh, 4), 2) : null;
        f = zh(f);
        g = cd(b, 12) != null ? cd(b, 12) : null;
        g = g == null ? null : new yh(null, {
            google_ml_rank: g
        });
        b = yk(a, b);
        b = xh(a.A, f, g, b);
        f = a.g;
        a = a.I;
        h = f.document;
        var k = c.sb || !1;
        g = Ld((new Md(h)).g, "DIV");
        const l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.Bb && kj(k, c.Bb);
        h = Ld((new Md(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.lb && (k.marginTop = c.lb);
        c.Va && (k.marginBottom = c.Va);
        c.nb && kj(k, c.nb);
        g.appendChild(h);
        c = {
            Aa: g,
            ia: h
        };
        c.ia.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Xa) c.Aa.className = h.join(" ");
        h = c.ia;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = c.Aa;
                if (T(ei)) {
                    {
                        const v = Ii(d, e);
                        if (v.init) {
                            var x =
                                v.init;
                            for (d = x; d = v.ka(d);) x = d;
                            var n = {
                                anchor: x,
                                position: v.qa
                            }
                        } else n = {
                            anchor: d,
                            position: e
                        }
                    }
                    m["google-ama-order-assurance"] = 0;
                    Hi(m, n.anchor, n.position)
                } else Hi(m, d, e);
                b: {
                    var q = c.ia;q.dataset.adsbygoogleStatus = "reserved";q.className += " adsbygoogle-noablate";m = {
                        element: q
                    };
                    var t = b && b.hb;
                    if (q.hasAttribute("data-pub-vars")) {
                        try {
                            t = JSON.parse(q.getAttribute("data-pub-vars"))
                        } catch (v) {
                            break b
                        }
                        q.removeAttribute("data-pub-vars")
                    }
                    t && (m.params = t);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (v) {
                (q = c.Aa) && q.parentNode &&
                    (t = q.parentNode, t.removeChild(q), Ih(t) && (t.style.display = t.getAttribute("data-init-display") || "none"));
                q = !1;
                break a
            }
            q = !0
        }
        return q ? c : null
    }

    function yk(a, b) {
        return nh(ph(Rj(b).map(Ah), c => {
            Pj(a.g).exception = c
        }))
    }
    const zk = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.I = b;
            this.j = c;
            this.A = e || null;
            (this.H = d) ? (a = a.document, d = E(d, rj, 5, A(Gb)), d = Tj(a, d)) : d = Tj(a.document, []);
            this.B = d;
            this.D = new mk;
            this.i = 0;
            this.u = !1
        }
    };

    function vk(a) {
        const b = {};
        a && Fc(a, 6, Tb, A()).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function wk(a, b) {
        return a && Dc(a, wh, 4) && b[G(D(a, wh, 4), 2)] ? !1 : !0
    };
    var Ak = pd(class extends M {});

    function Bk(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? mh(() => Ak(c)) : jh(null)
    };

    function Ck() {
        if (Dk) return Dk;
        var a = ze() || window;
        const b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? Dk = b : a.google_persistent_state_async = Dk = new Ek
    }

    function Fk(a, b, c) {
        b = Gk[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function Hk(a, b, c) {
        return Fk(a, b, () => c)
    }

    function Ik(a, b, c) {
        a.S[Gk[b] || `google_ps_${b}`] = c
    }

    function Jk(a, b) {
        Ik(a, 38, b)
    }
    var Ek = class {
            constructor() {
                this.S = {}
            }
        },
        Dk = null;
    const Gk = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Kk(a) {
        var b = new Lk;
        return y(b, 5, Qb(a))
    }
    var Lk = class extends M {
        constructor() {
            super()
        }
    };

    function Mk() {
        this.A = this.A;
        this.i = this.i
    }
    Mk.prototype.A = !1;
    Mk.prototype.dispose = function() {
        this.A || (this.A = !0, this.D())
    };
    Mk.prototype[ha(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function Nk(a, b) {
        a.A ? b() : (a.i || (a.i = []), a.i.push(b))
    }
    Mk.prototype.D = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };
    const Ok = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function Pk(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = Ok(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (se({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function Qk(a) {
        if (a.g) return a.g;
        a: {
            let d = a.j;
            for (let e = 0; e < 50; ++e) {
                try {
                    var b = !(!d.frames || !d.frames.__tcfapiLocator)
                } catch {
                    b = !1
                }
                if (b) {
                    b = d;
                    break a
                }
                b: {
                    try {
                        const f = d.parent;
                        if (f && f != d) {
                            var c = f;
                            break b
                        }
                    } catch {}
                    c = null
                }
                if (!(d = c)) break
            }
            b = null
        }
        a.g = b;
        return a.g
    }

    function Rk(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (Qk(a)) {
            Sk(a);
            const e = ++a.W;
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

    function Sk(a) {
        a.u || (a.u = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, vd(a.j, "message", a.u))
    }
    class Tk extends Mk {
        constructor(a) {
            var b = {};
            super();
            this.j = a;
            this.g = null;
            this.B = {};
            this.W = 0;
            this.I = b.kb ? ? 500;
            this.H = b.ac ? ? !1;
            this.u = null
        }
        D() {
            this.B = {};
            this.u && (wd(this.j, "message", this.u), delete this.u);
            delete this.B;
            delete this.j;
            delete this.g;
            super.D()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.H
            };
            const c = ud(() => a(b));
            let d = 0;
            this.I !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.I));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Ok(b),
                    b.internalBlockOnErrors = this.H, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Rk(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Rk(this, "removeEventListener", null, a.listenerId)
        }
    };
    var Yk = ({
            l: a,
            X: b,
            kb: c,
            rb: d,
            la: e = !1,
            ma: f = !1
        }) => {
            b = Uk({
                l: a,
                X: b,
                la: e,
                ma: f
            });
            b.g != null || b.i.message != "tcunav" ? d(b) : Vk(a, c).then(g => g.map(Wk)).then(g => g.map(h => Xk(a, h))).then(d)
        },
        Uk = ({
            l: a,
            X: b,
            la: c = !1,
            ma: d = !1
        }) => {
            if (!Zk({
                    l: a,
                    X: b,
                    la: c,
                    ma: d
                })) return Xk(a, Kk(!0));
            b = Ck();
            return (b = Hk(b, 24)) ? Xk(a, Wk(b)) : lh(Error("tcunav"))
        };

    function Zk({
        l: a,
        X: b,
        la: c,
        ma: d
    }) {
        if (d = !d) d = new Tk(a), d = typeof d.j.__tcfapi === "function" || Qk(d) != null;
        if (!d) {
            if (c = !c) {
                if (b) {
                    a = Bk(a);
                    if (a.g != null)
                        if ((a = a.getValue()) && G(a, 1) != null) b: switch (a = G(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else W.R(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function Vk(a, b) {
        return Promise.race([$k(), al(a, b)])
    }

    function $k() {
        return (new Promise(a => {
            var b = Ck();
            a = {
                resolve: a
            };
            const c = Hk(b, 25, []);
            c.push(a);
            Ik(b, 25, c)
        })).then(bl)
    }

    function al(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, lh(Error("tcto")))
        })
    }

    function bl(a) {
        return a ? jh(a) : lh(Error("tcnull"))
    }

    function Wk(a) {
        var b = {};
        if (Pk(a))
            if (a.gdprApplies === !1) a = !0;
            else if (a.tcString === "tcunavailable") a = !b.Za;
        else if ((b.Za || a.gdprApplies !== void 0 || b.bc) && (b.Za || typeof a.tcString === "string" && a.tcString.length)) {
            b: {
                if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], b !== void 0)) {
                    b = b["755"];
                    break b
                }
                b = void 0
            }
            b === 0 ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && a.publisherCC === "CH" ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
        }
        else a = !0;
        else a = !1;
        return Kk(a)
    }

    function Xk(a, b) {
        return (a = ue(b, a)) ? jh(a) : lh(Error("unav"))
    };
    var cl = class extends M {};
    var dl = class extends M {};
    var el = class extends M {
        g() {
            return D(this, cl, 2)
        }
        i() {
            return D(this, dl, 3)
        }
    };
    const fl = class {
        constructor(a) {
            this.exception = a
        }
    };

    function gl(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.g;
            Pj(e.g);
            E(e.j, Fh, 1, A());
            d.call(c, new fl(b))
        } catch (f) {
            a.i.reject(f)
        }
    }
    var hl = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
        start() {
            this.u()
        }
        u() {
            try {
                switch (this.j.document.readyState) {
                    case "complete":
                    case "interactive":
                        uk(this.g, !0);
                        gl(this);
                        break;
                    default:
                        uk(this.g, !1) ? gl(this) : this.j.setTimeout(ra(this.u, this), 100)
                }
            } catch (a) {
                gl(this, a)
            }
        }
    };
    var il = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return dd(this, 2)
        }
    };

    function jl(a) {
        return Wa(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function kl(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function ll(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function ml(a) {
        var b = jl(a),
            c = kl(b.slice(0, 6));
        a = kl(b.slice(6, 12));
        var d = new il;
        c = B(d, 1, Vb(c), 0);
        a = B(c, 2, Vb(a), 0);
        b = b.slice(12);
        c = kl(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = kl(e[0]) === 0;
            e = e.slice(1);
            var g = nl(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = ll(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = nl(e, b);
                g = ll(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Lc(a, 3, d, Ub)
    }

    function nl(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var ol = "a".charCodeAt(),
        pl = zd($g),
        ql = zd(ah);

    function rl() {
        var a = new sl;
        return K(a, 1, 0)
    }

    function tl(a) {
        var b = Number;
        var c = Ac(a, 1),
            d = typeof c;
        c != null && (d === "bigint" ? c = String(BigInt.asIntN(64, c)) : Sb(c) ? d === "string" ? c = ac(c) : (c = Math.trunc(c), Number.isSafeInteger(c) ? c = String(c) : (d = String(c), Yb(d) ? c = d : (ob(c), c = pb()))) : c = void 0);
        b = b(c ? ? "0");
        a = dd(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var sl = class extends M {};

    function ul(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function vl(a) {
        let b = ul(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!ul(a, 1) === !0,
                e = ul(a, 16);
            if (d)
                for (d = ul(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function wl(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (ul(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function xl(a) {
        const b = ul(a, 16);
        return !!ul(a, 1) === !0 ? (a = vl(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : wl(a, b)
    }
    class yl {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var Al = a => {
        try {
            var b = Wa(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new yl(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = ul(c, 12);
            b.cmpVersion = ul(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = ul(c, 6);
            b.isServiceSpecific = !!ul(c, 1);
            b.useNonStandardStacks = !!ul(c, 1);
            b.specialFeatureOptins = zl(wl(c, 12, ql), ql);
            b.purpose = {
                consents: zl(wl(c, 24, pl), pl),
                legitimateInterests: zl(wl(c, 24, pl), pl)
            };
            b.purposeOneTreatment = !!ul(c, 1);
            b.publisherCC = String.fromCharCode(ol + ul(c, 6)) + String.fromCharCode(ol +
                ul(c, 6));
            b.vendor = {
                consents: zl(xl(c), null),
                legitimateInterests: zl(xl(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const zl = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function Bl() {
        return "m202409030101"
    };
    var Cl = class extends M {
        g() {
            return F(this, 2) != null
        }
    };
    var Dl = class extends M {
        g() {
            return F(this, 2) != null
        }
    };
    var El = class extends M {};
    var Fl = pd(class extends M {});

    function Gl(a) {
        a = Hl(a);
        try {
            var b = a ? Fl(a) : null
        } catch (c) {
            b = null
        }
        return b ? D(b, El, 4) || null : null
    }

    function Hl(a) {
        a = (new te(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    zd($g).map(a => Number(a));
    zd(ah).map(a => Number(a));

    function Il(a) {
        a.__tcfapiPostMessageReady || Jl(new Kl(a))
    }

    function Jl(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.l.__tcfapi)(e.command, e.version, (f, g) => {
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
        a.l.addEventListener("message", a.g);
        a.l.__tcfapiPostMessageReady = !0
    }
    var Kl = class {
        constructor(a) {
            this.l = a
        }
    };

    function Ll(a) {
        a.__uspapiPostMessageReady || Ml(new Nl(a))
    }

    function Ml(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.l.__uspapi(e.command, e.version, (f, g) => {
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
        a.l.addEventListener("message", a.g);
        a.l.__uspapiPostMessageReady = !0
    }
    var Nl = class {
        constructor(a) {
            this.l = a;
            this.g = null
        }
    };
    var Ol = class extends M {};
    var Pl = pd(class extends M {
        g() {
            return F(this, 1) != null
        }
    });

    function Ql(a, b, c) {
        function d(n) {
            if (n.length < 10) return null;
            var q = k(n.slice(0, 4));
            q = l(q);
            n = k(n.slice(6, 10));
            n = m(n);
            return "1" + q + n + "N"
        }

        function e(n) {
            if (n.length < 10) return null;
            var q = k(n.slice(0, 6));
            q = l(q);
            n = k(n.slice(6, 10));
            n = m(n);
            return "1" + q + n + "N"
        }

        function f(n) {
            if (n.length < 12) return null;
            var q = k(n.slice(0, 6));
            q = l(q);
            n = k(n.slice(8, 12));
            n = m(n);
            return "1" + q + n + "N"
        }

        function g(n) {
            if (n.length < 18) return null;
            var q = k(n.slice(0, 8));
            q = l(q);
            n = k(n.slice(12, 18));
            n = m(n);
            return "1" + q + n + "N"
        }

        function h(n) {
            if (n.length <
                10) return null;
            var q = k(n.slice(0, 6));
            q = l(q);
            n = k(n.slice(6, 10));
            n = m(n);
            return "1" + q + n + "N"
        }

        function k(n) {
            const q = [];
            let t = 0;
            for (let v = 0; v < n.length / 2; v++) q.push(kl(n.slice(t, t + 2))), t += 2;
            return q
        }

        function l(n) {
            return n.every(q => q === 1) ? "Y" : "N"
        }

        function m(n) {
            return n.some(q => q === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = jl(a[0]);
        const x = kl(a.slice(0, 6));
        a = a.slice(6);
        if (x !== 1) return null;
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

    function Rl(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Vd("IFRAME", c);
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

    function Sl() {
        var a = T(Qh);
        O !== O.top || O.__uspapi || O.frames.__uspapiLocator || (a = new Tl(a), Ul(a), Vl(a))
    }

    function Ul(a) {
        !a.i || a.l.__uspapi || a.l.frames.__uspapiLocator || (a.l.__uspapiManager = "fc", Rl(a.l, "__uspapiLocator"), sa("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && d({
                version: 1,
                uspString: a.i
            }, !0)
        }, a.l), Ll(a.l))
    }

    function Vl(a) {
        !a.tcString || a.l.__tcfapi || a.l.frames.__tcfapiLocator || (a.l.__tcfapiManager = "fc", Rl(a.l, "__tcfapiLocator"), a.l.__tcfapiEventListeners = a.l.__tcfapiEventListeners || [], sa("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.l.__tcfapiEventListeners, b) {
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
                        a.tcString ? (e = Al(a.tcString),
                            e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
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
        }, a.l), Il(a.l))
    }

    function Wl(a, b) {
        if (!b ? .g() || I(b, 1).length === 0 || E(b, Ol, 2, A()).length === 0) return null;
        const c = I(b, 1);
        let d;
        try {
            var e = ml(c.split("~")[0]);
            d = c.includes("~") ? c.split("~").slice(1) : []
        } catch (f) {
            return null
        }
        b = E(b, Ol, 2, A()).reduce((f, g) => ed(Xl(f), 1) > ed(Xl(g), 1) ? f : g);
        e = Fc(e, 3, Wb, A()).indexOf(dd(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: Ql(d[e], dd(b, 1), a.j),
            za: tl(Xl(b))
        }
    }

    function Yl(a) {
        a = a.find(b => b && J(b, 1) === 13);
        if (a ? .g()) try {
            return Pl(I(a, 2))
        } catch (b) {}
        return null
    }

    function Xl(a) {
        return Dc(a, sl, 2) ? D(a, sl, 2) : rl()
    }
    var Tl = class {
        constructor(a) {
            var b = O;
            this.l = b;
            this.j = a;
            a = Hl(this.l.document);
            try {
                var c = a ? Fl(a) : null
            } catch (e) {
                c = null
            }(a = c) ? (c = D(a, Dl, 5) || null, a = E(a, Cl, 7, A()), a = Yl(a ? ? []), c = {
                Wa: c,
                Ya: a
            }) : c = {
                Wa: null,
                Ya: null
            };
            a = c;
            c = Wl(this, a.Ya);
            a = a.Wa;
            if (a ? .g() && I(a, 2).length !== 0) {
                var d = Dc(a, sl, 1) ? D(a, sl, 1) : rl();
                a = {
                    uspString: I(a, 2),
                    za: tl(d)
                }
            } else a = null;
            this.i = a && c ? c.za > a.za ? c.uspString : a.uspString : a ? a.uspString : c ? c.uspString : null;
            this.tcString = (c = Gl(b.document)) && F(c, 1) != null ? I(c, 1) : null;
            this.g = (b = Gl(b.document)) && F(b,
                2) != null ? I(b, 2) : null
        }
    };
    const Zl = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function $l(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        dk("ama", b, .01)
    }

    function am(a) {
        const b = {};
        Yd(Zl, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function bm(a) {
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

    function cm(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function dm(a) {
        a = Fc(a, 2, Tb, A());
        if (!a) return !1;
        for (let b = 0; b < a.length; b++)
            if (a[b] == 1) return !0;
        return !1
    }

    function em(a, b) {
        a = cm(bm(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = Zd(a),
            d = fm(a);
        return b.find(e => {
            if (Dc(e, nj, 7)) {
                var f = D(e, nj, 7);
                f = Xb(Ac(f, 1))
            } else f = Xb(Ac(e, 1));
            e = Dc(e, nj, 7) ? G(D(e, nj, 7), 2) : 2;
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

    function fm(a) {
        const b = {};
        for (;;) {
            b[Zd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var gm = class extends M {
        g() {
            return D(this, el, 2)
        }
        i() {
            return H(this, 3)
        }
    };
    var hm = class extends M {
        g() {
            return Zc(this, 1, A())
        }
        i() {
            return D(this, gm, 2)
        }
        j() {
            return I(this, 4)
        }
        u() {
            return J(this, 5)
        }
    };
    var im = class extends M {
        getId() {
            return dd(this, 1)
        }
    };

    function jm(a) {
        return E(a, im, 2, A())
    }
    var km = class extends M {};
    var lm = class extends M {};
    var mm = class extends M {
        g() {
            return ed(this, 2)
        }
        i() {
            return ed(this, 4)
        }
        j() {
            return H(this, 3)
        }
    };
    var nm = class extends M {};
    var pm = class extends M {
            j() {
                return hd(this, gm, 13, om)
            }
            u() {
                return Ec(this, gm, Pc(this, om, 13)) !== void 0
            }
            g() {
                return hd(this, hm, 14, om)
            }
            i() {
                return Ec(this, hm, Pc(this, om, 14)) !== void 0
            }
        },
        om = [13, 14];
    let qm = void 0;

    function rm(a) {
        $a(qm, fb);
        qm = a
    };

    function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function sm(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ua: !0,
            Hb: b,
            xa: a.ablation_viewport_offset
        } : null
    }

    function tm(a) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = 1
    }

    function um(a) {
        X(O).allow_second_reactive_tag = a
    }

    function vm() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function wm(a) {
        return X(a) ? .head_tag_slot_vars ? .google_ad_host ? ? xm(a)
    }

    function xm(a) {
        return a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };
    const ym = [2, 7, 1];
    var Bm = (a, b, c = "", d = null) => b === 1 && zm(c, d) ? !0 : Am(a, c, e => Pa(E(e, qd, 2, A()), f => G(f, 1) === b)),
        zm = (a, b) => b ? b.u() ? H(b.j(), 1) : T(ii) && b.i() && a !== "" && b.g().j() === a || b.i() && a !== "" && b.g().g().length === 1 && b.g().g()[0] === a ? H(b.g().i(), 1) : !1 : !1,
        Cm = (a, b) => {
            b = dd(b, 18);
            b !== -1 && (a.tmod = b)
        },
        Em = a => {
            const b = Td(O) || O;
            return Dm(b, a) ? !0 : Am(O, "", c => Pa(Fc(c, 3, Tb, A()), d => d === a))
        };

    function Dm(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ra(a.split(","), b.toString())
    }

    function Am(a, b, c) {
        a = Td(a) || a;
        const d = Fm(a);
        b && (b = Ce(String(b)));
        return yd(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Fm(a) {
        a = Gm(a);
        const b = {};
        Yd(a, (c, d) => {
            try {
                const e = new rd(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Gm = a => {
        $a(qm, cb);
        a = Uk({
            l: a,
            X: qm
        });
        return a.g != null ? Hm(a.getValue()) : {}
    };

    function Hm(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : xd(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Im(a) {
        dk("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Jm = a => !!a && (E(a, Fh, 1, A()).length > 0 || T(di) && E(a, Gh, 3, A()).length > 0);
    var Km = (a, b, c) => {
        if (c ? .u()) return a = c ? .j() ? .g() ? .g(), Jm(a) ? (Im(!1), a) : null;
        if (T(ii) && c ? .i()) {
            var d = c ? .g() ? .i() ? .g() ? .g();
            if (c ? .g().j() === b && Jm(d) && I(c, 17) === a.location.host) return Im(!0), d
        }
        if (c ? .i()) {
            d = c ? .g() ? .g();
            const e = c ? .g() ? .i() ? .g() ? .g();
            if (d && d.length === 1 && d[0] === b && Jm(e) && I(c, 17) === a.location.host) return Im(!0), e
        }
        return null
    };
    const Lm = a => {
            dk("overlay_settings_from_ppabg", {
                p_s: a
            }, .01)
        },
        Mm = (a, b) => {
            if (wm(p)) return ym;
            if (b ? .u()) {
                var c = I(b.j(), 9);
                b = b ? .j() ? .g() ? .i();
                if (!a || c != a || !b) return ym;
                Lm(!1);
                return Fc(b, 3, Tb, A(Gb))
            }
            if (b ? .i()) {
                if (T(ii) && b ? .g() ? .j() === a && I(b, 17) == p.location.host) {
                    a = b ? .g() ? .i() ? .g() ? .i();
                    if (!a) return ym;
                    Lm(!0);
                    return Fc(a, 3, Tb, A(Gb))
                }
                c = b ? .g() ? .g();
                if (!c || c.length !== 1 || !a || c[0] !== a || I(b, 17) != p.location.host) return ym;
                a = b ? .g() ? .i() ? .g() ? .i();
                if (!a) return ym;
                Lm(!0);
                return Fc(a, 3, Tb, A(Gb))
            }
            return ym
        };
    var Nm = (a, b) => {
        const c = [];
        a = Mm(a, b);
        a.includes(1) || c.push(1);
        a.includes(2) || c.push(2);
        a.includes(7) || c.push(7);
        return c
    };

    function Om(a, b, c, d) {
        Pm(new Qm(a, b, c, d))
    }

    function Pm(a) {
        ph(oh(Uk({
            l: a.l,
            X: H(a.g, 6)
        }), b => {
            Rm(a, b, !0)
        }), () => {
            Sm(a)
        })
    }

    function Rm(a, b, c) {
        ph(oh(Tm(b), d => {
            Um("ok");
            a.i(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                $l(d, {
                    lserr: 1
                })
            }
            c ? Sm(a) : a.i(null, null)
        })
    }

    function Sm(a) {
        ph(oh(Vm(a), b => {
            a.i(b, {
                fromPABGSettings: !0
            })
        }), () => {
            Wm(a)
        })
    }

    function Tm(a) {
        if (T(ci)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? zj(b) : null
        } catch (d) {
            c = null
        }
        return (a = (a = c) ? (D(a, mj, 3) ? .g() ? ? 0) > Date.now() ? a : null : null) ? jh(a) : lh(Error("invlocst"))
    }

    function Vm(a) {
        if (wm(a.l) && !H(a.g, 22)) return lh(Error("invtag"));
        if (a = Km(a.l, a.j, a.g)) {
            var b = new yj;
            var c = E(a, Fh, 1, A());
            b = Xc(b, 1, c);
            c = E(a, tj, 2, A());
            b = Xc(b, 7, c);
            T(di) && E(a, Gh, 3, A()).length > 0 && (c = new Hh, a = E(a, Gh, 3, A()), a = Xc(c, 1, a), Vc(b, 6, a));
            a = jh(b)
        } else a = lh(Error("invtag"));
        return a
    }

    function Wm(a) {
        Yk({
            l: a.l,
            X: H(a.g, 6),
            kb: 50,
            rb: b => {
                Xm(a, b)
            }
        })
    }

    function Xm(a, b) {
        ph(oh(b, c => {
            Rm(a, c, !1)
        }), c => {
            Um(c.message);
            a.i(null, null)
        })
    }

    function Um(a) {
        dk("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class Qm {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = b;
            this.j = c;
            this.i = d
        }
    };
    var Ym = (a, b, c, d) => {
        try {
            const e = em(a, E(c, tj, 7, A()));
            if (e && dm(e)) {
                if (id(e)) {
                    const g = new yh(null, {
                        google_package: id(e)
                    });
                    d = xh(d, g)
                }
                const f = new zk(a, b, c, e, d);
                Kj(1E3, () => {
                    var g = new eh;
                    (new hl(a, f, g)).start();
                    return g.i
                }, a).then(() => {
                    $l(a, {
                        atf: 1
                    })
                }, g => {
                    (a.google_ama_state = a.google_ama_state || {}).exception = g;
                    $l(a, {
                        atf: 0
                    })
                })
            }
        } catch (e) {
            $l(a, {
                atf: -1
            })
        }
    };

    function Zm(a) {
        return a.length ? a.join("~") : void 0
    };

    function $m(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = an(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function an(a) {
        let b = "";
        Yd(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    Ua || Ia();

    function bn() {
        const a = {};
        N(je).g(Yh.g, Yh.defaultValue) && (a.bust = N(je).g(Yh.g, Yh.defaultValue));
        var b = Ck();
        b = Hk(b, 38, "");
        b !== "" && (a.sbust = b);
        return a
    };
    class cn {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function dn() {
        const {
            promise: a,
            resolve: b
        } = new cn;
        return {
            promise: a,
            resolve: b
        }
    };

    function en(a = () => {}) {
        p.google_llp || (p.google_llp = {});
        const b = p.google_llp;
        let c = b[7];
        if (c) return c;
        c = dn();
        b[7] = c;
        a();
        return c
    }

    function fn(a) {
        return en(() => {
            Ud(p.document, a)
        }).promise
    };

    function gn(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new hn;
        return a.google_reactive_ads_global_state
    }
    class hn {
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
            this.floatingAdsStacking = new jn;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.clickTriggeredInterstitialMayBeDisplayed = !1
        }
    }
    var jn = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var kn = a => {
        if (p.google_apltlad || a.google_ad_intent_query) return null;
        var b = a.google_loader_used !== "sd" && T(gi) && (p.top == p ? 0 : Sd(p.top) ? 1 : 2) === 1;
        if (p !== p.top && !b || !a.google_ad_client) return null;
        p.google_apltlad = !0;
        b = {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.google_ad_client
        };
        const c = b.enable_page_level_ads;
        Yd(a, (d, e) => {
            ij[e] && e !== "google_ad_client" && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        c.asro = T(yi);
        c.aihb = T(ji);
        c.ailel = Zm(Gi(ti));
        c.aiael = Zm(Gi(ki));
        c.aifxl = Zm(Gi(qi));
        c.aiixl = Zm(Gi(ri));
        T(si) &&
            (c.slmct = U(ui), c.samct = U(ni));
        T(pi) || (c.aiict = !0, c.aicel = Zm(Gi(oi)));
        T(wi) && (c.aipaq = !0);
        T(zi) && (c.aigda = !0);
        U(li) && (c.aiapm = U(li));
        U(mi) && (c.aiapmi = U(mi));
        T(xi) && (c.aiombap = !0);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function ln(a, b) {
        X(O).ama_ran_on_page || Kj(1001, () => {
            mn(new nn(a, b))
        }, p)
    }

    function mn(a) {
        Om(a.l, a.i, a.g.google_ad_client || "", (b, c) => {
            var d = a.l,
                e = a.g;
            X(O).ama_ran_on_page || b && on(d, e, b, c)
        })
    }
    class nn {
        constructor(a, b) {
            this.l = p;
            this.g = a;
            this.i = b
        }
    }

    function on(a, b, c, d) {
        d && (Pj(a).configSourceInAbg = d);
        Dc(c, xj, 24) && (d = Qj(a), d.availableAbg = !0, d.ablationFromStorage = !!D(c, xj, 24) ? .g() ? .g());
        if (la(b.enable_page_level_ads) && b.enable_page_level_ads.google_pgb_reactive === 7) {
            if (!em(a, E(c, tj, 7, A()))) {
                dk("amaait", {
                    value: "true"
                });
                return
            }
            dk("amaait", {
                value: "false"
            })
        }
        X(O).ama_ran_on_page = !0;
        D(c, lj, 15) ? .g() && (X(a).enable_overlap_observer = !0);
        D(c, xj, 24) ? .g() ? .g() && (Qj(a).ablatingThisPageview = !0, tm(a));
        xe(3, [nd(c)]);
        const e = b.google_ad_client || "";
        b = am(la(b.enable_page_level_ads) ?
            b.enable_page_level_ads : {});
        const f = xh(Bh, new yh(null, b));
        ck(782, () => {
            Ym(a, e, c, f)
        })
    };

    function pn(a, b) {
        a = a.document;
        for (var c = void 0, d = 0; !c || a.getElementById(c + "_host");) c = "aswift_" + d++;
        a = c;
        c = Number(b.google_ad_width || 0);
        b = Number(b.google_ad_height || 0);
        d = document.createElement("div");
        d.id = a + "_host";
        const e = d.style;
        e.border = "none";
        e.height = `${b}px`;
        e.width = `${c}px`;
        e.margin = "0px";
        e.padding = "0px";
        e.position = "relative";
        e.visibility = "visible";
        e.backgroundColor = "transparent";
        e.display = "inline-block";
        return {
            vb: a,
            Jb: d
        }
    };

    function qn({
        ya: a,
        Ea: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function rn(a) {
        return a.google_ad_client ? String(a.google_ad_client) : X(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? ""
    };
    var sn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function tn(a, b) {
        if (b == 15) {
            if (a >= 728) return 728;
            if (a >= 468) return 468
        } else if (b == 90) {
            if (a >= 200) return 200;
            if (a >= 180) return 180;
            if (a >= 160) return 160;
            if (a >= 120) return 120
        }
        return null
    };
    var un = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return I(this, 2)
        }
    };

    function vn(a, b) {
        return y(a, 2, cc(b))
    }

    function wn(a, b) {
        return y(a, 3, cc(b))
    }

    function xn(a, b) {
        return y(a, 4, cc(b))
    }

    function yn(a, b) {
        return y(a, 5, cc(b))
    }

    function zn(a, b) {
        return y(a, 9, cc(b))
    }

    function An(a, b) {
        return Xc(a, 10, b)
    }

    function Bn(a, b) {
        return y(a, 11, Qb(b))
    }

    function Cn(a, b) {
        return y(a, 1, cc(b))
    }

    function Dn(a, b) {
        return y(a, 7, Qb(b))
    }
    var En = class extends M {
        constructor() {
            super()
        }
    };
    const Fn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Gn() {
        var a = O;
        if (typeof a.navigator ? .userAgentData ? .getHighEntropyValues !== "function") return null;
        const b = a.google_tag_data ? ? (a.google_tag_data = {});
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Fn).then(c => {
            b.uach ? ? (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function Hn(a) {
        return Bn(An(yn(vn(Cn(xn(Dn(zn(wn(new En, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new un;
            c = y(c, 1, cc(b.brand));
            return y(c, 2, cc(b.version))
        }) || []), a.wow64 || !1)
    }

    function In() {
        return Gn() ? .then(a => Hn(a)) ? ? null
    };

    function Jn(a, b) {
        b.google_ad_host || (a = xm(a)) && (b.google_ad_host = a)
    }

    function Kn(a, b, c = "") {
        O.google_sa_queue || (O.google_sa_queue = [], O.google_process_slots = W.ra(215, () => {
            Ln(O.google_sa_queue)
        }), a = Mn(c, a, b), Ud(O.document, a))
    }

    function Ln(a) {
        const b = a.shift();
        typeof b === "function" && W.ga(216, b);
        a.length && p.setTimeout(W.ra(215, () => {
            Ln(a)
        }), 0)
    }

    function Nn(a, b) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? b() : a.google_sa_queue.push(b)
    }

    function Mn(a, b, c) {
        var d = O;
        b = H(c, 4) ? b.Db : b.Eb;
        a: {
            if (H(c, 4)) {
                if (a = a || rn(d)) {
                    d = {
                        client: Ce(a),
                        plah: d.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            d = {}
        }
        d = { ...d,
            ...bn()
        };
        return Hd(b, new Map(Object.entries(d)))
    }

    function On(a, b, c, d) {
        const {
            vb: e,
            Jb: f
        } = pn(a, b);
        c.appendChild(f);
        Pn(a, c, b);
        c = b.google_start_time ? ? ua;
        const g = (new Date).getTime();
        b.google_lrv = qn({
            ya: Bl(),
            Ea: I(d, 2)
        });
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        Nn(a, () => {
            var h = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), h == null) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && W.ca(911,
                h)
        })
    }

    function Pn(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || d !== "html" && d != null || (e = `${f}x${g}`);
        T(Ei) && (c.google_reactive_ad_format === 10 ? e = "interstitial" : c.google_reactive_ad_format === 11 && (e = "rewarded"));
        d = !c.google_ad_slot || c.google_override_format || !sn[c.google_ad_width + "x" + c.google_ad_height] && c.google_loader_used === "aa";
        e = e && d ? e.toLowerCase() : "";
        c.google_ad_format = e;
        if (typeof c.google_reactive_sra_index !== "number" || !c.google_ad_unit_key) {
            e = [c.google_ad_slot,
                c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && f < 25; g = g.parentNode, ++f) g.nodeType === 9 ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Zd(e.join(":")).toString();
            e = [];
            for (d = 0; b && d < 25; ++d) {
                f = (f = b.nodeType !== 9 && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let l = 0; l < h.length; ++l) {
                            const m =
                                h[l];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                                if (b === m) {
                                    g = "." + k;
                                    break a
                                }++k
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && d < 25; ++d) {
                    const k = h.frames;
                    for (f = 0; f < k.length; ++f)
                        if (a === k[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = Zd(b + e.join()).toString()
        }
    }

    function Qn() {
        var a = Td(p);
        a && (a = gn(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Rn() {
        const a = In();
        a != null && a.then(b => {
            O.google_user_agent_client_hint = md(b)
        });
        ie()
    };

    function Sn(a) {
        return b => !!(b.ha & a)
    }
    class Y extends $i {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.ha = c;
            this.u = d
        }
        sa() {
            return this.ha
        }
        i(a, b, c) {
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    };
    const Tn = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        Un = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        Vn = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function Wn(a) {
        var b = 0;
        a.O && b++;
        a.J && b++;
        a.K && b++;
        if (b < 3) return {
            V: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.O.split(",");
        const c = a.K.split(",");
        a = a.J.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            V: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (b.length > 2) return {
            V: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || f === 0) return {
                V: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || f === 0) return {
                V: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            K: d,
            J: e,
            eb: b
        }
    }

    function Xn(a) {
        return a >= 1200 ? {
            width: 1200,
            height: 600
        } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
        } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
        } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
        } : {
            width: a,
            height: Math.floor(a * 3.44)
        }
    }

    function Yn(a, b, c, d) {
        b = Math.floor(((a - 8 * b - 8) / b * Tn[d] + Un[d]) * c + 8 * c + 8);
        return a > 1500 ? {
            width: 0,
            height: 0,
            Fb: `Calculated slot width is too large: ${a}`
        } : b > 1500 ? {
            width: 0,
            height: 0,
            Fb: `Calculated slot height is too large: ${b}`
        } : {
            width: a,
            height: b
        }
    }

    function Zn(a, b) {
        const c = a - 8 - 8;
        --b;
        return {
            width: a,
            height: Math.floor(c / 1.91 + 70) + Math.floor((c * Tn.mobile_banner_image_sidebyside + Un.mobile_banner_image_sidebyside) * b + 8 * b + 8)
        }
    };
    const $n = Ta("script");
    class ao {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, x = null) {
            this.B = a;
            this.da = b;
            this.ha = c;
            this.g = d;
            this.W = e;
            this.i = f;
            this.j = g;
            this.D = h;
            this.H = k;
            this.u = l;
            this.A = m;
            this.I = x
        }
        size() {
            return this.da
        }
    };
    const bo = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var co = class extends $i {
        g(a) {
            return Math.min(1200, Math.max(this.Z, Math.round(a)))
        }
    };

    function eo(a, b) {
        fo(a, b);
        if (b.google_content_recommendation_ui_type === "pedestal") return new ao(9, new co(a, Math.floor(a * b.google_phwr)));
        if (T(Nh)) {
            var c = Nd();
            var d = U(Oh);
            var e = U(Mh),
                f = U(Lh);
            a < 468 ? c ? (a = Zn(a, d), d = {
                U: a.width,
                T: a.height,
                J: 1,
                K: d,
                O: "mobile_banner_image_sidebyside"
            }) : (a = Yn(a, 1, d, "image_sidebyside"), d = {
                U: a.width,
                T: a.height,
                J: 1,
                K: d,
                O: "image_sidebyside"
            }) : (d = Xn(a), e === 1 && (d.height = Math.floor(d.height * .5)), d = {
                U: d.width,
                T: d.height,
                J: f,
                K: e,
                O: "image_stacked"
            })
        } else d = Nd(), a < 468 ? d ? (d = Zn(a, 12), d = {
            U: d.width,
            T: d.height,
            J: 1,
            K: 12,
            O: "mobile_banner_image_sidebyside"
        }) : (d = Xn(a), d = {
            U: d.width,
            T: d.height,
            J: 1,
            K: 13,
            O: "image_sidebyside"
        }) : (d = Xn(a), d = {
            U: d.width,
            T: d.height,
            J: 4,
            K: 2,
            O: "image_stacked"
        });
        go(b, d);
        return new ao(9, new co(d.U, d.T))
    }

    function ho(a, b) {
        fo(a, b); {
            const f = Wn({
                K: b.google_content_recommendation_rows_num,
                J: b.google_content_recommendation_columns_num,
                O: b.google_content_recommendation_ui_type
            });
            if (f.V) a = {
                U: 0,
                T: 0,
                J: 0,
                K: 0,
                O: "image_stacked",
                V: f.V
            };
            else {
                var c = f.eb.length === 2 && a >= 468 ? 1 : 0;
                var d = f.eb[c];
                d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
                var e = Vn[d];
                let g = f.J[c];
                for (; a / g < e && g > 1;) g--;
                e = g;
                c = f.K[c];
                a = Yn(a, e, c, d);
                a = {
                    U: a.width,
                    T: a.height,
                    J: e,
                    K: c,
                    O: d
                }
            }
        }
        if (a.V) throw new V(a.V);
        go(b, a);
        return new ao(9, new co(a.U, a.T))
    }

    function fo(a, b) {
        if (a <= 0) throw new V(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }

    function go(a, b) {
        a.google_content_recommendation_ui_type = b.O;
        a.google_content_recommendation_columns_num = b.J;
        a.google_content_recommendation_rows_num = b.K
    };
    var io = class extends $i {
        g() {
            return this.Z
        }
        i(a, b, c) {
            Zi(a, c);
            c.style.height = `${this.height()}px`;
            b.rpe = !0
        }
    };
    const jo = {
        "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
        "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
        "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
        "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
        "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
    };
    var ko = class extends $i {
        g() {
            return Math.min(1200, this.Z)
        }
    };

    function lo(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if (f === "in-article") {
            var g = a;
            if (e.google_full_width_responsive === "false") a = g;
            else if (a = Ui(b, c, g, U(Th), e), a !== !0) e.gfwrnwer = a, a = g;
            else if (a = Oi(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; h < 100 && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let l = 0; l < k.length; ++l) {
                                const m = k[l];
                                if (m !== g && Xi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Zi(b, c)
                }
            else a = g;
            else a =
                g
        }
        if (a < 250) throw new V("Fluid responsive ads must be at least 250px wide: " + `availableWidth=${a}`);
        a = Math.min(1200, Math.floor(a));
        if (d && f !== "in-article") {
            f = Math.ceil(d);
            if (f < 50) throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            return new ao(11, new $i(a, f))
        }
        if (f !== "in-article" && (d = e.google_ad_layout_key)) {
            f = `${d}`;
            c = Math.pow(10, 3);
            if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
            else b = null;
            if (!b) throw new V(`Invalid data-ad-layout-key value: ${f}`);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(c * 1E3 - -725 + 10);
            if (isNaN(f)) throw new V(`Invalid height: height=${f}`);
            if (f < 50) throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            if (f > 1200) throw new V("Fluid responsive ads must be at most 1200px tall: " + `height=${f}`);
            return new ao(11, new $i(a, f))
        }
        d = jo[f];
        if (!d) throw new V("Invalid data-ad-layout value: " + f);
        c = dj(c, b);
        b = Oi(b);
        b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
        return new ao(11, f === "in-article" ? new ko(a, b) : new $i(a, b))
    };

    function mo(a) {
        return b => {
            for (let c = a.length - 1; c >= 0; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function no(a, b) {
        var c = oo.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (b == null || b(g)) return g;
                e === null && (e = g)
            }
        }
        return e
    };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        oo = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];

    function po(a, b, c, d, e) {
        e.google_full_width_responsive == "false" ? c = {
            F: a,
            G: 1
        } : b === "autorelaxed" && e.google_full_width_responsive || qo(b) || e.google_ad_resize ? (b = Vi(a, c, d, e), c = b !== !0 ? {
            F: a,
            G: b
        } : {
            F: Oi(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        const {
            F: f,
            G: g
        } = c;
        return g !== !0 ? {
            F: a,
            G: g
        } : d.parentElement ? {
            F: f,
            G: g
        } : {
            F: a,
            G: g
        }
    }

    function ro(a, b, c, d, e) {
        const {
            F: f,
            G: g
        } = ck(247, () => po(a, b, c, d, e));
        var h = g === !0;
        const k = ce(d.style.width),
            l = ce(d.style.height),
            {
                ba: m,
                Y: x,
                sa: n,
                bb: q
            } = so(f, b, c, d, e, h);
        h = to(b, n);
        var t;
        const v = (t = aj(d, c, "marginLeft")) ? `${t}px` : "",
            L = (t = aj(d, c, "marginRight")) ? `${t}px` : "";
        t = bj(d, c) || "";
        return new ao(h, m, n, null, q, g, x, v, L, l, k, t)
    }

    function qo(a) {
        return a === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function so(a, b, c, d, e, f) {
        b = uo(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var l = Oi(c) < 488;
        if (l) {
            g = Pi(d, c);
            var m = dj(d, c);
            h = !m && g;
            k = m && g
        }
        m = [cj(a), Sn(b)];
        T($h) || m.push(fj(l, c, d, k));
        e.google_max_responsive_height != null && m.push(gj(e.google_max_responsive_height));
        l = [t => !t.u];
        if (h || k) h = hj(c, d), l.push(gj(h));
        const x = no(mo(m), mo(l));
        if (!x) throw new V(`No slot size for availableWidth=${a}`);
        const {
            ba: n,
            Y: q
        } = ck(248, () => {
            var t;
            a: if (f) {
                if (e.gfwrnh && (t = ce(e.gfwrnh))) {
                    t = {
                        ba: new io(a, t),
                        Y: !0
                    };
                    break a
                }
                t = U(Vh);
                t = t > 0 ? a / t : a / 1.2;
                if (e.google_resizing_allowed || e.google_full_width_responsive == "true") var v = Infinity;
                else {
                    v = d;
                    let C = Infinity;
                    do {
                        var L = aj(v, c, "height");
                        L && (C = Math.min(C, L));
                        (L = aj(v, c, "maxHeight")) && (C = Math.min(C, L))
                    } while (v.parentElement && (v = v.parentElement) && v.tagName !== "HTML");
                    v = C
                }!(T(Xh) && v <= t * 2) && (v = Math.min(t, v), v < t * .5 || v < 100) && (v = t);
                t = {
                    ba: new io(a, Math.floor(v)),
                    Y: v < t ? 102 : !0
                }
            } else t = {
                ba: x,
                Y: 100
            };
            return t
        });
        return e.google_ad_layout === "in-article" && vo(c) ? {
            ba: wo(a, c, d, n, e),
            Y: !1,
            sa: b,
            bb: g
        } : {
            ba: n,
            Y: q,
            sa: b,
            bb: g
        }
    }

    function to(a, b) {
        if (a === "auto") return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8;
            default:
                throw Error("bad mask");
        }
    }

    function uo(a, b, c) {
        if (c === "auto") c = Math.min(1200, Oi(a)), b = b / c <= .25 ? 4 : 3;
        else {
            b = 0;
            for (const d in Li) c.indexOf(d) !== -1 && (b |= Li[d])
        }
        return b
    }

    function wo(a, b, c, d, e) {
        const f = e.google_ad_height || aj(c, b, "height");
        b = lo(a, b, c, f, e).size();
        return b.Z * b.height() > a * d.height() ? new Y(b.Z, b.height(), 1) : d
    }

    function vo(a) {
        return T(Kh) || a.location && a.location.hash === "#hffwroe2etoq"
    };

    function xo(a, b, c, d, e) {
        var f;
        (f = Oi(b)) ? Oi(b) < 488 ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Zi(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        }: f = {
            F: a,
            G: 10
        };
        const {
            F: g,
            G: h
        } = f;
        if (h !== !0 || a === g) return new ao(12, new $i(a, d), null, null, !0, h, 100);
        const {
            ba: k,
            Y: l,
            sa: m
        } = so(g, "auto", b, c, e, !0);
        return new ao(1, k, m, 2, !0, h, l)
    };
    var zo = (a, b) => {
            var c = b.google_ad_format;
            if (c === "autorelaxed") {
                a: {
                    if (b.google_content_recommendation_ui_type !== "pedestal")
                        for (const d of bo)
                            if (b[d] != null) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (qo(c)) return 1;
            if (c === "link") return 4;
            if (c === "fluid") {
                if (c = b.google_ad_layout === "in-article") c = T(Rh) || a.location && (a.location.hash == "#hffwroe2etop" || a.location.hash == "#hffwroe2etoq");
                return c ? (yo(b), 1) : 8
            }
            if (b.google_reactive_ad_format === 27) return yo(b), 1
        },
        Bo = (a, b, c, d, e = !1) => {
            var f = b.offsetWidth || (c.google_ad_resize ||
                e) && aj(b, d, "width") || c.google_ad_width || 0;
            a === 4 && (c.google_ad_format = "auto", a = 1);
            e = (e = Ao(a, f, b, c, d)) ? e : ro(f, c.google_ad_format, d, b, c);
            e.size().i(d, c, b);
            e.ha != null && (c.google_responsive_formats = e.ha);
            e.W != null && (c.google_safe_for_responsive_override = e.W);
            e.i != null && (e.i === !0 ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = e.i));
            e.j != null && e.j !== !0 && (c.gfwrnher = e.j);
            d = e.A || c.google_ad_width;
            d != null && (c.google_resizing_width = d);
            d = e.u || c.google_ad_height;
            d != null && (c.google_resizing_height = d);
            d = e.size().g(f);
            const g = e.size().height();
            c.google_ad_width = d;
            c.google_ad_height = g;
            var h = e.size();
            f = h.g(f) + "x" + h.height();
            c.google_ad_format = f;
            c.google_responsive_auto_format = e.B;
            e.g != null && (c.armr = e.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            e.i === !0 && (c.gfwrnh = e.size().height() + "px");
            e.D != null && (c.gfwroml = e.D);
            e.H != null && (c.gfwromr = e.H);
            e.u != null && (c.gfwroh = e.u);
            e.A != null && (c.gfwrow = e.A);
            e.I != null && (c.gfwroz = e.I);
            f = Td(window) || window;
            $m(f.location, "google_responsive_dummy_ad") && (Ra([1, 2, 3, 4, 5, 6, 7, 8], e.B) || e.g === 1) && e.g !== 2 && (f = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${$n}>window.top.postMessage('${f}', '*'); 
          </${$n}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`);
            a != 1 && (a = e.size().height(), b.style.height = a + "px")
        };
    const Ao = (a, b, c, d, e) => {
            const f = d.google_ad_height || aj(c, e, "height");
            switch (a) {
                case 5:
                    const {
                        F: g,
                        G: h
                    } = ck(247, () => po(b, d.google_ad_format, e, c, d));
                    h === !0 && b != g && Zi(e, c);
                    h === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return eo(g, d);
                case 9:
                    return ho(b, d);
                case 8:
                    return lo(b, e, c, f, d);
                case 10:
                    return xo(b, e, c, f, d)
            }
        },
        yo = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function Co(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };

    function Do(a, b) {
        var c = Td(b);
        if (c) {
            c = Oi(c);
            const d = Wd(a, b) || {},
                e = d.direction;
            if (d.width === "0px" && d.cssFloat !== "none") return -1;
            if (e === "ltr" && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if (e === "rtl" && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Eo(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            default:
                return b
        }
    }

    function Fo(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Rd(c, "client");
            d && (b.google_ad_client = Eo("google_ad_client", d));
            (c = Rd(c, "host")) && (b.google_ad_host = Eo("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = wa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Eo(f, e.value), e !== null && (b[f] = e))
            }
        }
    }

    function Go(a) {
        if (a = ye(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Ho(a, b, c, d) {
        Fo(a, b);
        if (c.document && c.document.body && !zo(c, b) && !b.google_reactive_ad_format && !b.google_ad_intent_query) {
            var e = parseInt(a.style.width, 10),
                f = Do(a, c);
            if (f > 0 && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!sn[e + "x" + g];
                let h = f;
                if (e) {
                    const k = tn(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new V("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                Co(b, 4)
            }
        }
        if (T(Ph) ||
            Oi(c) < 488) {
            f = Td(c) || c;
            g = a.offsetWidth || aj(a, c, "width") || b.google_ad_width || 0;
            e = b.google_ad_client;
            if (d = $m(f.location, "google_responsive_slot_preview") || T(hi) || Bm(f, 1, e, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || zo(c, b) || Ri(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = Wd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Ra(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    if (!T(ai) && (d = U(Uh), d = Ui(c, a, g, d, b), d !== !0)) {
                        b.gfwrnwer = d;
                        d = !1;
                        break b
                    }
                    d = c === c.top ? !0 : !1
                }
            d ? (Co(b, 1), d = !0) :
                d = !1
        } else d = !1;
        if (g = zo(c, b)) Bo(g, a, b, c, d);
        else {
            if (Ri(a, b)) {
                if (d = Wd(a, c)) a.style.width = d.width, a.style.height = d.height, Qi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Go(c)
            } else Qi(a.style, b);
            c.location && c.location.hash === "#gfwmrp" || b.google_responsive_auto_format === 12 && b.google_full_width_responsive === "true" ? Bo(10, a, b, c, !1) : Math.random() < .01 && b.google_responsive_auto_format ===
                12 && (a = Vi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), a !== !0 ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Io(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && Sd(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function mg(a, b, c = 0) {
        a.g.size > 0 || Jo(a);
        c = Math.min(Math.max(0, c), 9);
        const d = a.g.get(c);
        d ? d.push(b) : a.g.set(c, [b])
    }

    function Ko(a, b, c, d) {
        vd(b, c, d);
        Nk(a, () => wd(b, c, d))
    }

    function Lo(a, b) {
        a.j !== 1 && (a.j = 1, a.g.size > 0 && Mo(a, b))
    }

    function Jo(a) {
        a.l.document.visibilityState ? Ko(a, a.l.document, "visibilitychange", b => {
            a.l.document.visibilityState === "hidden" && Lo(a, b);
            a.l.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.l ? (Ko(a, a.l, "pagehide", b => {
            Lo(a, b)
        }), Ko(a, a.l, "pageshow", () => {
            a.j = 0
        })) : Ko(a, a.l, "beforeunload", b => {
            Lo(a, b)
        })
    }

    function Mo(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var No = class extends Mk {
        constructor(a) {
            super();
            this.l = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function Oo(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function Po(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = me(a.l)
    }

    function Qo(a) {
        const b = a.g.wpc;
        return b !== null && b !== "" ? b : a.g.wpc = rn(a.l)
    }

    function Ro(a, b) {
        var c = new Gf;
        var d = Po(a);
        c = K(c, 1, d);
        d = Qo(a);
        c = kd(c, 2, d);
        c = K(c, 3, a.g.sd);
        return K(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function So(a) {
        await Oo(a.l, () => !(!Po(a) || !Qo(a)))
    }

    function To(a) {
        var b = N(Uo);
        if (b.j) {
            var c = b.B;
            a(c);
            b.g.psi = nd(c)
        }
    }

    function Vo(a) {
        mg(a.u, () => {
            var b = Ro(a);
            b = Wc(b, 12, Hf, a.D);
            a.j && !a.g.le.includes(3) && (a.g.le.push(3), ig(a.i, b))
        }, 9)
    }

    function Wo(a) {
        const b = Bf(new Cf, a.A);
        mg(a.u, () => {
            Vc(b, 2, a.B);
            K(b, 3, a.g.tar);
            var c = a.i;
            var d = Ro(a);
            d = Wc(d, 8, Hf, b);
            ig(c, d)
        }, 9)
    }
    async function Xo(a) {
        var b = N(Uo);
        if (b.j && !b.g.le.includes(1)) {
            b.g.le.push(1);
            var c = b.l.performance.now();
            await So(b);
            var d = new xf;
            a = B(d, 5, Qb(a), !1);
            d = new wf;
            d = K(d, 1, Ni(b.l).scrollWidth);
            d = K(d, 2, Ni(b.l).scrollHeight);
            a = Vc(a, 2, d);
            d = new wf;
            var e = Oi(b.l);
            d = K(d, 1, e);
            d = K(d, 2, Ni(b.l).clientHeight);
            a = Vc(a, 1, d);
            a = kd(a, 4, b.A);
            d = Io(b.l);
            d !== 0 && (e = new vf, d = y(e, 1, w(d)), Vc(a, 3, d));
            d = b.i;
            c = Ro(b, c);
            c = Wc(c, 4, Hf, a);
            ig(d, c);
            Vo(b);
            Wo(b)
        }
    }
    async function Yo(a, b, c) {
        if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await So(a);
            var e = a.i;
            a = Ro(a, d);
            d = new uf;
            b = B(d, 1, w(b), 0);
            c = Lc(b, 2, c, Ub);
            c = Wc(a, 9, Hf, c);
            ig(e, c)
        }
    }
    async function Zo(a, b) {
        await So(a);
        var c = a.i;
        a = Ro(a);
        a = K(a, 3, 1);
        b = Wc(a, 10, Hf, b);
        ig(c, b)
    }
    var Uo = class {
        constructor(a, b) {
            this.l = ze() || window;
            this.u = b ? ? new No(this.l);
            this.i = a ? ? new og(2, Bl(), 100, 100, !0, this.u);
            this.g = Fk(Ck(), 33, () => {
                const c = U(Sh),
                    d = c > 0 && Xd() < 1 / c,
                    e = U(vi);
                return {
                    sd: c,
                    ssp: d,
                    sds: e,
                    ssps: e > 0 && Xd() < 1 / e,
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
        get j() {
            return this.g.ssp
        }
        get A() {
            return this.g.cu
        }
        set A(a) {
            this.g.cu = a
        }
        get B() {
            return ck(1178, () => od(Af, pc(this.g.psi || []))) || new Af
        }
        get D() {
            return ck(1227, () => od(Df, pc(this.g.cc || []))) || new Df
        }
    };

    function $o() {
        var a = window;
        return p.google_adtest === "on" || p.google_adbreak_test === "on" || a.location.host.endsWith("h5games.usercontent.goog") || a.location.host === "gamesnacks.com" ? a.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && b > 0) || [] : []
    };

    function ap(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function bp(a) {
        var b = O.document;
        if (b.currentScript) return ap(b.currentScript, a);
        for (const c of b.scripts)
            if (ap(c, a) === 0) return 0;
        return 1
    };

    function cp(a, b) {
        return {
            [3]: {
                [55]: () => a === 0,
                [23]: c => Bm(O, Number(c)),
                [24]: c => Em(Number(c)),
                [61]: () => H(b, 6),
                [63]: () => H(b, 6) || I(b, 8) === ".google.ch"
            },
            [4]: {},
            [5]: {
                [6]: () => I(b, 15)
            }
        }
    };

    function dp(a = p) {
        return a.ggeac || (a.ggeac = {})
    };

    function ep(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function fp(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function gp(a, b = navigator) {
        try {
            return !!b.protectedAudience ? .queryFeatureSupport ? .(a)
        } catch (c) {
            return !1
        }
    };

    function hp(a, b) {
        try {
            const d = a.split(".");
            a = p;
            let e = 0,
                f;
            for (; a != null && e < d.length; e++) f = a, a = a[d[e]], typeof a === "function" && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var ip = {
        [3]: {
            [8]: a => {
                try {
                    return ka(a) != null
                } catch {}
            },
            [9]: a => {
                try {
                    var b = ka(a)
                } catch {
                    return
                }
                if (a = typeof b === "function") b = b && b.toString && b.toString(), a = typeof b === "string" && b.indexOf("[native code]") != -1;
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Ra(N(Ug).g(), Number(a)),
            [27]: a => {
                a = hp(a, "boolean");
                return a !== void 0 ? a : void 0
            },
            [60]: a => {
                try {
                    return !!p.document.querySelector(a)
                } catch {}
            },
            [80]: a => {
                try {
                    return !!p.matchMedia(a).matches
                } catch {}
            },
            [69]: a => ep(a, p.document),
            [70]: a => fp(a, p.document),
            [79]: a => gp(a,
                p.navigator)
        },
        [4]: {
            [3]: () => de(),
            [6]: a => {
                a = hp(a, "number");
                return a !== void 0 ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = hp(a, "string");
                return a !== void 0 ? a : void 0
            }
        }
    };

    function jp(a, b) {
        const c = new Map;
        for (const [f, g] of a[1].entries()) {
            var d = f,
                e = g;
            const {
                jb: h,
                fb: k,
                gb: l
            } = e[e.length - 1];
            c.set(d, h + k * l)
        }
        for (const f of b)
            for (const g of E(f, km, 2, A()))
                if (jm(g).length !== 0) {
                    b = ad(Xb(Ac(g, 8)), 0);
                    !J(g, 4) || J(g, 13) || J(g, 14) || (b = c.get(J(g, 4)) ? ? 0, d = ad(Xb(Ac(g, 1)), 0) * jm(g).length, c.set(J(g, 4), b + d));
                    d = [];
                    for (e = 0; e < jm(g).length; e++) {
                        const h = {
                            jb: b,
                            fb: ad(Xb(Ac(g, 1)), 0),
                            gb: jm(g).length,
                            Ab: e,
                            ja: J(f, 1),
                            ta: g,
                            P: jm(g)[e]
                        };
                        d.push(h)
                    }
                    kp(a[2], J(g, 10), d) || kp(a[1], J(g, 4), d) || kp(a[0], jm(g)[0].getId(),
                        d)
                }
        return a
    }

    function kp(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    };

    function lp(a = Xd()) {
        return b => Zd(`${b} + ${a}`) % 1E3
    };
    const mp = [12, 13, 20];

    function np(a, b) {
        var c = N(ug).M;
        const d = lf(D(b.ta, df, 3), c);
        if (!d.success) return sg(a.L, D(b.ta, df, 3), b.ja, b.P.getId(), d), !1;
        if (!d.value) return !1;
        c = lf(D(b.P, df, 3), c);
        return c.success ? c.value ? !0 : !1 : (sg(a.L, D(b.P, df, 3), b.ja, b.P.getId(), c), !1)
    }

    function op(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }

    function pp(a, b, c, d) {
        const e = [];
        var f;
        if (f = b !== 9) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) return qg(a.L, b, c, e, [], 4), e;
        f = mp.includes(b);
        const g = [],
            h = [];
        for (const x of [0, 1, 2])
            for (const [n, q] of a.na[x].entries()) {
                var k = n,
                    l = q;
                const t = new Mf;
                var m = l.filter(v => v.ja === b && a.i[v.P.getId()] && np(a, v));
                if (m.length)
                    for (const v of m) h.push(v.P);
                else if (!a.Ba && (x === 2 ? (m = d[1], Mc(t, 2, Nf, w(k))) : m = d[0], k = m ? .(String(k)) ? ? (x === 2 && J(l[0].ta, 11) === 1 ? void 0 : d[0](String(k))), k !== void 0)) {
                    for (const v of l) {
                        if (v.ja !== b) continue;
                        l =
                            k - v.jb;
                        m = v.fb;
                        const L = v.gb,
                            C = v.Ab;
                        l < 0 || l >= m * L || l % L !== C || !np(a, v) || (l = J(v.ta, 13), l !== 0 && l !== void 0 && (m = a.j[String(l)], m !== void 0 && m !== v.P.getId() ? rg(a.L, a.j[String(l)], v.P.getId(), l) : a.j[String(l)] = v.P.getId()), h.push(v.P))
                    }
                    Qc(t, Nf) !== 0 && (B(t, 3, Vb(k), 0), g.push(t))
                }
            }
        for (const x of h) d = x.getId(), e.push(d), op(a, d, f ? 4 : c), Lg(E(x, nf, 2, A()), f ? Ng() : [c], a.L, d);
        qg(a.L, b, c, e, g, 1);
        return e
    }

    function qp(a, b) {
        b = b.map(c => new lm(c)).filter(c => !mp.includes(J(c, 1)));
        a.na = jp(a.na, b)
    }

    function rp(a, b) {
        P(1, c => {
            a.i[c] = !0
        }, b);
        P(2, (c, d, e) => pp(a, c, d, e), b);
        P(3, c => (a.g[c] || []).concat(a.g[4]), b);
        P(12, c => void qp(a, c), b);
        P(16, (c, d) => void op(a, c, d), b)
    }
    var sp = class {
        constructor(a, b, c, {
            Ba: d = !1,
            oc: e = []
        } = {}) {
            this.na = a;
            this.L = c;
            this.u = {};
            this.Ba = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.i = {};
            this.j = {};
            if (a = Je()) {
                a = a.split(",") || [];
                for (const f of a)(a = Number(f)) && (this.i[a] = !0)
            }
            for (const f of e) this.i[f] = !0
        }
    };

    function tp(a, b) {
        a.g = Pg(14, b, () => {})
    }
    class up {
        constructor() {
            this.g = () => {}
        }
    }

    function vp(a) {
        N(up).g(a)
    };

    function wp({
        ub: a,
        M: b,
        config: c,
        pb: d = dp(),
        qb: e = 0,
        L: f = new tg(D(a, mm, 5) ? .g() ? ? 0, D(a, mm, 5) ? .i() ? ? 0, D(a, mm, 5) ? .j() ? ? !1),
        na: g = jp({
            [0]: new Map,
            [1]: new Map,
            [2]: new Map
        }, E(a, lm, 2, A(Gb)))
    }) {
        d.hasOwnProperty("init-done") ? (Pg(12, d, () => {})(E(a, lm, 2, A()).map(h => nd(h))), Pg(13, d, () => {})(E(a, nf, 1, A()).map(h => nd(h)), e), b && Pg(14, d, () => {})(b), xp(e, d)) : (rp(new sp(g, e, f, c), d), Qg(d), Rg(d), Sg(d), xp(e, d), Lg(E(a, nf, 1, A(Gb)), [e], f, void 0, !0), vg = vg || !(!c || !c.yb), vp(ip), b && vp(b))
    }

    function xp(a, b = dp()) {
        Tg(N(Ug), b, a);
        yp(b, a);
        tp(N(up), b);
        N(je).B()
    }

    function yp(a, b) {
        const c = N(je);
        c.i = (d, e) => Pg(5, a, () => !1)(d, e, b);
        c.u = (d, e) => Pg(6, a, () => 0)(d, e, b);
        c.g = (d, e) => Pg(7, a, () => "")(d, e, b);
        c.A = (d, e) => Pg(8, a, () => [])(d, e, b);
        c.j = (d, e) => Pg(17, a, () => [])(d, e, b);
        c.B = () => {
            Pg(15, a, () => {})(b)
        }
    };

    function zp(a, b) {
        b = {
            [0]: lp(me(b).toString())
        };
        b = N(Ug).u(a, b);
        Yg.ca(1085, Yo(N(Uo), a, b))
    }

    function Ap(a, b, c) {
        var d = X(a);
        if (d.plle) xp(1, dp(a));
        else {
            d.plle = !0;
            d = D(b, nm, 12);
            var e = H(b, 9);
            wp({
                ub: d,
                M: cp(c, b),
                config: {
                    Ba: e && !!a.google_disable_experiments,
                    yb: e
                },
                pb: dp(a),
                qb: 1
            });
            if (c = I(b, 15)) c = Number(c), N(Ug).j(c);
            for (const f of Fc(b, 19, Wb, A())) N(Ug).i(f);
            zp(12, a);
            zp(10, a);
            a = Td(a) || a;
            $m(a.location, "google_mc_lab") && N(Ug).i(44738307)
        }
    };

    function Bp(a, b) {
        a.Fa(c => {
            c.shv = String(b);
            c.mjsv = qn({
                ya: Bl(),
                Ea: b
            });
            const d = N(Ug).g(),
                e = $o();
            c.eid = d.concat(e).join(",")
        })
    };
    var Cp = class extends M {
        constructor() {
            super()
        }
    };
    var Dp = class extends M {
        constructor() {
            super()
        }
    };

    function Ep(a) {
        const b = new Dp;
        var c = new Cp;
        var d = dd(a, 1);
        c = y(c, 1, Vb(d));
        T(Ai) && (a = dd(a, 18), y(c, 2, Vb(a)));
        Vc(b, 1, c);
        return b
    };
    var Fp = {
        google_pause_ad_requests: !0,
        google_user_agent_client_hint: !0
    };

    function Gp(a) {
        var b = W;
        try {
            return $a(a, eb), new pm(JSON.parse(a))
        } catch (c) {
            b.R(838, c instanceof Error ? c : Error(String(c)))
        }
        return new pm
    };

    function Hp(a, b) {
        if (H(b, 22)) return 7;
        if (H(b, 16)) return 6;
        var c = b.g() ? .j();
        const d = b.g() ? .u() ? ? 0;
        c = c === a;
        switch (d) {
            case 1:
                return c ? 9 : 8;
            case 2:
                return c ? 11 : 10;
            case 3:
                return c ? 13 : 12
        }
        b = b.g() ? .g() ? ? [];
        return b.length === 0 ? 1 : b.length === 1 ? a === b[0] ? 3 : 2 : b.includes(a) ? 5 : 4
    }

    function Ip(a, b, c) {
        b.google_loader_used !== "sd" && (b.abgtt = Hp(a, c))
    };
    var Jp = a => {
        vd(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || c.googMsgType !== "sc-cnf" || a(c, b)
        })
    };

    function Kp(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function Lp(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function Mp() {
        const a = new Set,
            b = rk();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function Np(a) {
        a = a.id;
        return a != null && (Mp().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function Op(a, b, c) {
        if (!a.sources) return !1;
        switch (Pp(a)) {
            case 2:
                const d = Qp(a);
                if (d) return c.some(f => Rp(d, f));
                break;
            case 1:
                const e = Sp(a);
                if (e) return b.some(f => Rp(e, f))
        }
        return !1
    }

    function Pp(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Sp(a) {
        return Tp(a, b => b.currentRect)
    }

    function Qp(a) {
        return Tp(a, b => b.previousRect)
    }

    function Tp(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Rp(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function Up() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(Np),
            b = [...Mp()].map(c => document.getElementById(c)).filter(c => c !== null);
        Vp = window.scrollX;
        Wp = window.scrollY;
        return Xp = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function Yp() {
        var a = new Zp;
        if (T(Bi)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.mb.tb && b.push("event");
                for (const c of b) b = {
                    type: c,
                    buffered: !0
                }, c === "event" && (b.durationThreshold = 40), $p(a).observe(b);
                aq(a)
            }
        }
    }

    function bq(a, b) {
        const c = Vp !== window.scrollX || Wp !== window.scrollY ? [] : Xp,
            d = Up();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                cq(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Ma = Math.floor(b.renderTime || b.loadTime);
                a.La = b.size;
                break;
            case "first-input":
                b = e;
                a.Ia = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ja = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || dq(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.B +=
                    b;
                a.I = Math.max(a.I, b);
                a.va += 1;
                break;
            case "event":
                dq(a, e);
                break;
            default:
                Pb(b, void 0)
        }
    }

    function $p(a) {
        a.L || (a.L = new PerformanceObserver(Jj(640, b => {
            bq(a, b)
        })));
        return a.L
    }

    function aq(a) {
        const b = Jj(641, () => {
                var d = document;
                (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) === 2 && eq(a)
            }),
            c = Jj(641, () => void eq(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Ha = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            $p(a).disconnect()
        }
    }

    function eq(a) {
        if (!a.Pa) {
            a.Pa = !0;
            $p(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Lp("cls", a.D), b += Lp("mls", a.W), b += Kp("nls", a.ua), window.LayoutShiftAttribution && (b += Lp("cas", a.A), b += Kp("nas", a.Oa), b += Lp("was", a.Ta)), b += Lp("wls", a.wa), b += Lp("tls", a.Sa));
            window.LargestContentfulPaint && (b += Kp("lcp", a.Ma), b += Kp("lcps", a.La));
            window.PerformanceEventTiming && a.Ja && (b += Kp("fid", a.Ia));
            window.PerformanceLongTaskTiming && (b += Kp("cbt", a.B),
                b += Kp("mbt", a.I), b += Kp("nlt", a.va));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) Np(c) && d++;
            b += Kp("nif", d);
            b += Kp("ifi", Be(window));
            c = N(Ug).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${p===p.top?1:0}`;
            b += a.Ra ? `&${"qqid"}=${encodeURIComponent(a.Ra)}` : Kp("pvsid", me(p));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.L ? a.Ka : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += Kp("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Ha()
        }
    }

    function cq(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.D += Number(b.value);
            Number(b.value) > a.W && (a.W = Number(b.value));
            a.ua += 1;
            if (c = Op(b, c, d)) a.A += b.value, a.Oa++;
            if (b.startTime - a.Na > 5E3 || b.startTime - a.Qa > 1E3) a.Na = b.startTime, a.i = 0, a.j = 0;
            a.Qa = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.wa && (a.wa = a.i, a.Ta = a.j, a.Sa = b.startTime + b.duration)
        }
    }

    function dq(a, b) {
        fq(a, b);
        const c = a.g[a.g.length - 1],
            d = a.H[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.H[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.H[e.id]
        })
    }

    function fq(a, b) {
        b.interactionId && (a.da = Math.min(a.da, b.interactionId), a.u = Math.max(a.u, b.interactionId), a.Ka = a.u ? (a.u - a.da) / 7 + 1 : 0)
    }
    var Zp = class {
            constructor() {
                this.j = this.i = this.ua = this.W = this.D = 0;
                this.Qa = this.Na = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.H = {};
                this.Ka = 0;
                this.da = Infinity;
                this.Ia = this.La = this.Ma = this.Oa = this.Ta = this.A = this.Sa = this.wa = this.u = 0;
                this.Ja = !1;
                this.va = this.I = this.B = 0;
                this.L = null;
                this.Pa = !1;
                this.Ha = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Ra = a ? a.getAttribute("data-google-query-id") : null;
                this.mb = {
                    tb: !0
                }
            }
        },
        Vp, Wp, Xp = [];
    let gq = null;
    const hq = [],
        iq = new Map;
    let jq = -1;

    function kq(a) {
        return jj.test(a.className) && a.dataset.adsbygoogleStatus !== "done"
    }

    function lq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        mq(a, b, c)
    }

    function mq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Ho);
        var e = b.google_reactive_ads_config;
        e || Ho(a, b, d, c);
        Jn(d, b);
        if (!nq(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(O).page_contains_reactive_tag && !X(O).allow_second_reactive_tag) {
                    if (e.pltais) {
                        um(!1);
                        return
                    }
                    throw new V("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(O).page_contains_reactive_tag = !0;
                um(e.google_pgb_reactive === 7)
            }
            b.google_unique_id = Ae(d);
            Yd(Fp, (f, g) => {
                b[g] = b[g] || d[g]
            });
            b.google_loader_used !== "sd" && (b.google_loader_used =
                "aa");
            b.google_reactive_tag_first = (X(O).first_tag_on_page || 0) === 1;
            ck(164, () => {
                On(d, b, a, c)
            })
        }
    }

    function nq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = typeof a.className === "string" && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = sm(c);
        if (f && f.Ua && b.google_adtest !== "on" && !e) {
            e = Si(a, c);
            const g = Ni(c).clientHeight;
            e = g === 0 ? null : e / g;
            if (!f.xa || f.xa && (e || 0) >= f.xa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = ma(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), f.Hb === "slot" && (be(a.getAttribute("width")) !==
                null && a.setAttribute("width", "0"), be(a.getAttribute("height")) !== null && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Wd(a, c)) && f.display === "none" && !(b.google_adtest === "on" || b.google_reactive_ad_format > 0 || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = b.google_pgb_reactive == null || b.google_pgb_reactive === 3;
        return b.google_reactive_ad_format !== 1 && b.google_reactive_ad_format !==
            8 || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function oq(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (kq(c) && c.dataset.adsbygoogleStatus !== "reserved" && (!a || e.id === a)) return e
        }
        return null
    }

    function pq(a, b, c) {
        if (a && "shift" in a) {
            To(e => {
                fd(zf(e), 2) || (e = zf(e), jd(e, 2))
            });
            for (var d = 20; a.length > 0 && d > 0;) {
                try {
                    qq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    }

    function rq() {
        const a = Vd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        ee(a);
        return a
    }

    function sq(a, b) {
        const c = {},
            d = Nm(a.google_ad_client, b);
        Yd(Mi, (g, h) => {
            a.enable_page_level_ads === !1 ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        la(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = rq();
        ne.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(O).pause_ad_requests;
        Ip(tq(a) || rn(O), f, b);
        lq(e, f, b);
        To(g => {
            fd(zf(g), 6) || (g = zf(g), jd(g, 6))
        })
    }

    function uq(a, b) {
        gn(p).wasPlaTagProcessed = !0;
        const c = () => {
                sq(a, b)
            },
            d = p.document;
        if (d.body || d.readyState === "complete" || d.readyState === "interactive") sq(a, b);
        else {
            const e = ud(W.ra(191, c));
            vd(d, "DOMContentLoaded", e);
            p.MutationObserver != null && (new p.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function qq(a, b, c) {
        const d = {};
        ck(165, () => {
            vq(a, d, b, c)
        }, e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function wq(a) {
        delete a.google_checked_head;
        Yd(a, (b, c) => {
            ij[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), p.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function xq(a, b) {
        var c = O.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || O.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) yq(c);
            else {
                To(g => {
                    g = zf(g);
                    B(g, 7, Qb(!0), !1)
                });
                var e = {};
                Fo(c, e);
                wq(e);
                var f = Ad(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                e.google_ad_intent_query &&
                    (c.enable_ad_intent_display_ads = !0);
                e.google_overlays === "bottom" && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                O.adsbygoogle || (O.adsbygoogle = []);
                d = O.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.j() ? .i() ? zq(f, a) : Jp(() => {
                    zq(f, a)
                })
            }
        }
    }

    function yq(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Rd(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function Aq(a) {
        if (typeof a === "object" && a != null) {
            if (typeof a.type === "string") return 2;
            if (typeof a.sound === "string" || typeof a.preloadAdBreaks === "string") return 3
        }
        return 0
    }

    function vq(a, b, c, d) {
        if (a == null) throw new V("push() called with no parameters.");
        To(f => {
            fd(zf(f), 3) || (f = zf(f), jd(f, 3))
        });
        d.i() && Bq(a, d.g().g(), I(d, 2));
        var e = Aq(a);
        if (e !== 0)
            if (d = vm(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = ua), gq == null) Cq(a), hq.push(a);
            else if (e === 3) {
            const f = gq;
            ck(787, () => {
                f.handleAdConfig(a)
            })
        } else ek(730, gq.handleAdBreak(a));
        else {
            ua = (new Date).getTime();
            Kn(c, d, tq(a));
            Dq();
            a: {
                if (!a.enable_ad_intent_display_ads &&
                    a.enable_page_level_ads != void 0) {
                    if (typeof a.google_ad_client === "string") {
                        e = !0;
                        break a
                    }
                    throw new V("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) To(f => {
                fd(zf(f), 4) || (f = zf(f), jd(f, 4))
            }), Eq(a, d);
            else if ((e = a.params) && Yd(e, (f, g) => {
                    b[g] = f
                }), b.google_ad_output === "js") console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                Ip(tq(a) || rn(O), b, d);
                e = Fq(b, a);
                Fo(e, b);
                c = X(p).head_tag_slot_vars || {};
                Yd(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") && !X(p).head_tag_slot_vars) throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new V("Ad client is missing from the slot.");
                if (c = (X(O).first_tag_on_page || 0) === 0 && kn(b)) To(f => {
                    fd(zf(f), 5) || (f = zf(f), jd(f, 5))
                }), Gq(c);
                (X(O).first_tag_on_page || 0) === 0 && (X(O).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(O).pause_ad_requests;
                lq(e, b, d)
            }
        }
    }
    let Hq = !1;

    function Bq(a, b, c) {
        Hq || (Hq = !0, a = tq(a) || rn(O), dk("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function tq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Dq() {
        if (T(fi)) {
            const a = sm(O);
            a && a.Ua || tm(O)
        }
    }

    function Gq(a) {
        oe(() => {
            gn(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
        })
    }

    function Eq(a, b) {
        (X(O).first_tag_on_page || 0) === 0 && (X(O).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(p);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        ln(a, b);
        uq(a, b)
    }

    function Fq(a, b) {
        T(Zh) && a.google_ad_format === "rewarded" && (a.google_reactive_ad_format = 11, a.google_wrap_fullscreen_ad = !0, a.google_video_play_muted = !1, delete a.google_ad_format);
        var c = !!a.google_wrap_fullscreen_ad;
        if (c) b = rq(), b.dataset.adsbygoogleStatus = "reserved", ne.documentElement.appendChild(b);
        else if (b = b.element) {
            if (!kq(b) && (b.id ? b = oq(b.id) : b = null, !b)) throw new V("'element' has already been filled.");
            if (!("innerHTML" in b)) throw new V("'element' is not a good DOM element.");
        } else if (b = oq(), !b) throw new V("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
        if (c) {
            c = O;
            try {
                var d = (c || window).document,
                    e = d.compatMode == "CSS1Compat" ? d.documentElement : d.body;
                var f = (new Jd(e.clientWidth, e.clientHeight)).round()
            } catch (g) {
                f = new Jd(-12245933, -12245933)
            }
            a.google_ad_height = f.height;
            a.google_ad_width = f.width;
            a.fsapi = !0
        }
        return b
    }

    function Iq(a) {
        a = {
            value: `${H(a,16)}`,
            host_v: `${H(a,22)}`,
            frequency: .01
        };
        dk("new_abg_tag", a, .01)
    }

    function Jq(a) {
        var b = Ck();
        Ik(b, 26, !!Number(a))
    }

    function Kq(a) {
        Number(a) ? X(O).pause_ad_requests = !0 : (X(O).pause_ad_requests = !1, a = () => {
            if (!X(O).pause_ad_requests) {
                var b = {};
                let c;
                typeof window.CustomEvent === "function" ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                O.dispatchEvent(c)
            }
        }, p.setTimeout(a, 0), p.setTimeout(a, 1E3))
    }

    function Lq(a) {
        a && a.call && typeof a === "function" && window.setTimeout(a, 0)
    }

    function zq(a, b) {
        b = fn(Hd(b.Gb, new Map(Object.entries(bn())))).then(c => {
            gq == null && (c.init(a), gq = c, Mq(c))
        });
        W.ca(723, b);
        b.finally(() => {
            hq.length = 0;
            dk("slotcar", {
                event: "api_ld",
                time: Date.now() - ua,
                time_pr: Date.now() - jq
            });
            T(Di) && Zo(N(Uo), Ef(23))
        })
    }

    function Mq(a) {
        for (const [c, d] of iq) {
            var b = c;
            const e = d;
            e !== -1 && (p.clearTimeout(e), iq.delete(b))
        }
        for (b = 0; b < hq.length; b++) {
            if (iq.has(b)) continue;
            const c = hq[b],
                d = Aq(c);
            ck(723, () => {
                if (d === 3) a.handleAdConfig(c);
                else if (d === 2) {
                    var e = a.handleAdBreakBeforeReady(c);
                    W.ca(730, e)
                }
            })
        }
    }

    function Cq(a) {
        var b = hq.length;
        if (Aq(a) === 2 && a.type === "preroll" && a.adBreakDone != null) {
            var c = a.adBreakDone;
            jq === -1 && (jq = Date.now());
            var d = p.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), iq.set(b, -1), dk("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    }), T(Di) && Zo(N(Uo), Ef(22))
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, U(Ci) * 1E3);
            iq.set(b, d)
        }
    };
    (function(a, b, c, d = () => {}) {
        W.ib(fk);
        ck(166, () => {
            const e = new og(2, a);
            try {
                Lb(m => {
                    var x = new cg;
                    var n = new bg;
                    try {
                        var q = me(window);
                        K(n, 1, q)
                    } catch (C) {}
                    try {
                        var t = N(Ug).g();
                        Lc(n, 2, t, Ub)
                    } catch (C) {}
                    try {
                        kd(n, 3, window.document.URL)
                    } catch (C) {}
                    x = Vc(x, 2, n);
                    n = new ag;
                    n = B(n, 1, w(1191), 0);
                    try {
                        var v = eb(m ? .name) ? m.name : "Unknown error";
                        kd(n, 2, v)
                    } catch (C) {}
                    try {
                        var L = eb(m ? .message) ? m.message : `Caught ${m}`;
                        kd(n, 3, L)
                    } catch (C) {}
                    try {
                        const C = eb(m ? .stack) ? m.stack : Error().stack;
                        C && Lc(n, 4, C.split(/\n\s*/), bc)
                    } catch (C) {}
                    m = Vc(x, 1, n);
                    v = new $f;
                    try {
                        kd(v, 1, Bl())
                    } catch {}
                    Wc(m, 6, dg, v);
                    K(m, 5, 1);
                    fg(e, m)
                })
            } catch (m) {}
            const f = Gp(b);
            Bp(W, I(f, 2));
            rm(H(f, 6));
            Jk(Ck(), I(f, 24));
            d();
            xe(16, [1, nd(f)]);
            var g = ze(ye(O)) || O,
                h = qn({
                    ya: a,
                    Ea: I(f, 2)
                });
            const k = c(h, f);
            var l = O.document.currentScript === null ? 1 : bp(k.Ib);
            Ap(g, f, l);
            h = Ep(f);
            T(Ai) || Cm(g, f);
            To(m => {
                var x = dd(m, 1) + 1;
                B(m, 1, Vb(x), 0);
                O.top === O && (x = dd(m, 2) + 1, B(m, 2, Vb(x), 0));
                fd(zf(m), 1) || (m = zf(m), jd(m, 1))
            });
            ek(1086, Xo(l === 0));
            if (!Ga() || xa(La(), 11) >= 0) {
                bk(T(Fi));
                Rn();
                Sl();
                try {
                    Yp()
                } catch {}
                Qn();
                xq(k, f);
                g = window;
                l = g.adsbygoogle;
                if (!l || !l.loaded) {
                    Iq(f);
                    h = {
                        push: m => {
                            qq(m, k, f)
                        },
                        loaded: !0,
                        pageState: md(h)
                    };
                    try {
                        Object.defineProperty(h, "requestNonPersonalizedAds", {
                            set: Jq
                        }), Object.defineProperty(h, "pauseAdRequests", {
                            set: Kq
                        }), Object.defineProperty(h, "onload", {
                            set: Lq
                        })
                    } catch {}
                    if (l)
                        for (const m of ["requestNonPersonalizedAds", "pauseAdRequests"]) l[m] !== void 0 && (h[m] = l[m]);
                    pq(l, k, f);
                    g.adsbygoogle = h;
                    l && (h.onload = l.onload)
                }
            }
        })
    })(Bl(), typeof sttc === "undefined" ? void 0 : sttc, function(a, b) {
        b = dd(b, 1) > 2012 ? `_fy${dd(b,1)}` : "";
        Gd `data:text/javascript,//show_ads_impl_preview.js`;
        return {
            Gb: Gd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${b}.js`,
            Eb: Gd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${b}.js`,
            Db: Gd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${b}.js`,
            Ib: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20240904\",\"r20190131\",null,null,null,null,\".google.com.pe\",null,null,null,[[[null,661029237,null,[]],[null,619278254,null,[null,10]],[1325,null,null,[1]],[1351,null,null,[1]],[null,1130,null,[null,100]],[null,1340,null,[null,0.2]],[null,1338,null,[null,0.3]],[1331,null,null,[1]],[1330,null,null,[1]],[null,1336,null,[null,1.2]],[null,1339,null,[null,0.3]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[614048763,null,null,[1]],[null,1224,null,[null,0.01]],[null,1346,null,[null,6]],[null,1347,null,[null,3]],[null,1343,null,[null,300]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1323,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\",\"fr\",\"es\",\"ja\"]],null,1273],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1318,null,null,[1]],[null,1072,null,[null,0.75]],[null,1364,null,[null,300]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"29\",\"30\",\"34\"]],null,null,null,627094447],[null,579884443,null,[null,0.7]],[665357451,null,null,[1]],[null,null,null,[null,null,null,[\"33\"]],null,null,null,641845510],[622128248,null,null,[1]],[null,null,589752731,[null,null,\"#FFFFFF\"]],[null,null,589752730,[null,null,\"#1A73E8\"]],[null,null,null,[null,null,null,[\"29_18\",\"30_19\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"29_5\",\"30_6\"]],null,null,null,636146137],[579884441,null,null,[1]],[664766267,null,null,[1]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"29\",\"30\",\"34\"]],null,null,null,627094446],[null,579884442,null,[null,0.7]],[666224299,null,null,[1]],[665880209,null,null,[1]],[null,663756190,null,[null,50]],[null,626062006,null,[null,670]],[655991266,null,null,[1]],[null,618163195,null,[null,15000]],[null,624950166,null,[null,15000]],[null,623405755,null,[null,300]],[null,508040914,null,[null,500]],[null,547455356,null,[null,49]],[null,650548030,null,[null,2]],[null,650548032,null,[null,300]],[null,650548031,null,[null,1]],[null,655966487,null,[null,300]],[null,655966486,null,[null,250]],[null,561668774,null,[null,0.1]],[null,469675170,null,[null,60000]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\.\\\\d\"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[595827158,null,null,[1]],[null,550718588,null,[null,250]],[null,624290870,null,[null,50]],[null,629793592,null,[null,0.8]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0\/9AORwCSapUO\/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv\/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg\/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[12,[[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[40,[[95340252],[95340253,[[662101537,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5],[40,[[95340254],[95340255,[[662101539,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31083552],[44776368]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31084127],[31084128]]],[200,[[31086547],[31086548,[[663661257,null,null,[1]]]]]],[200,[[31086551],[31086552,[[1369,null,null,[1]]]]]],[500,[[31086638],[31086639,[[10015,null,null,[1]]]]]],[50,[[31086690],[31086691,[[10016,null,null,[1]]]]]],[200,[[31086709],[31086710,[[1371,null,null,[1]]]]]],[1000,[[31086780,[[null,null,14,[null,null,\"31086780\"]]],[6,null,null,null,6,null,\"31086780\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31086781,[[null,null,14,[null,null,\"31086781\"]]],[6,null,null,null,6,null,\"31086781\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31086842,[[null,null,14,[null,null,\"31086842\"]]],[6,null,null,null,6,null,\"31086842\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31086843,[[null,null,14,[null,null,\"31086843\"]]],[6,null,null,null,6,null,\"31086843\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31086852],[31086853,[[654220660,null,null,[1]]]]]],[10,[[31086863],[31086864,[[666484068,null,null,[1]]]]]],[10,[[31086865],[31086866,[[662976800,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[42532741],[42532742,[[1260,null,null,[1]],[null,1263,null,[null,16]],[null,1323,null,[null,50]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532743,[[1260,null,null,[1]],[null,1263,null,[null,13]],[null,1323,null,[null,180]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532744,[[1260,null,null,[1]],[null,1263,null,[null,11]],[null,1323,null,[null,350]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532745,[[1260,null,null,[1]],[null,1263,null,[null,10]],[null,1323,null,[null,420]],[1291,null,null,[1]],[1266,null,null,[1]]]]]],[null,[[42532746],[42532747],[42532748],[42532749],[42532750]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[200,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[10,[[95330276],[95330278,[[null,1336,null,[null,1]]]],[95330279,[[null,1336,null,[null,0.8]]]],[95332928,[[null,1336,null,[null,0.5]]]]]],[50,[[95331687,[[null,null,null,[null,null,null,[\"95331691\"]],null,null,null,630330362]]],[95331688,[[566279275,null,null,[1]],[null,null,null,[null,null,null,[\"95331692\"]],null,null,null,630330362]]],[95331689,[[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95331693\"]],null,null,null,630330362]]],[95331690,[[566279275,null,null,[1]],[566279276,null,null,[1]],[null,561668774,null,[]],[null,null,null,[null,null,null,[\"95331694\"]],null,null,null,630330362]]]],[4,null,55]],[50,[[95331832],[95331833,[[1342,null,null,[1]]]]]],[10,[[95332584],[95332585,[[null,1343,null,[null,600]]]],[95332586,[[null,1343,null,[null,900]]]],[95332587,[[null,1343,null,[null,1200]]]]]],[10,[[95332589],[95332590,[[1344,null,null,[1]]]]]],[10,[[95332923],[95332924,[[null,1338,null,[null,0.8]]]],[95332925,[[null,1339,null,[null,0.8]]]],[95332926,[[null,1340,null,[null,0.8]]]],[95332927,[[null,1340,null,[null,0.8]],[null,1338,null,[null,0.8]],[null,1339,null,[null,0.8]]]]]],[10,[[95333409],[95333410,[[null,1346,null,[null,-1]],[null,1347,null,[null,-1]]]],[95333411,[[null,1346,null,[null,3]],[null,1347,null,[null,1]]]],[95333412,[[null,1346,null,[null,8]],[null,1347,null,[null,5]]]]]],[399,[[95334516,[[null,null,null,[null,null,null,[\"95334518\"]],null,null,null,630330362]]],[95334517,[[626390500,null,null,[1]],[null,null,null,[null,null,null,[\"95334519\"]],null,null,null,630330362]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"bjsvp14\\\\.space\/|bjsvp15\\\\.space\/|buzzfun\\\\.me\/|buzzsight\\\\.co\/|couponpac\\\\.com\/|darada\\\\.co\/|diggfun\\\\.co\/|dreamsnest\\\\.com\/|games2kings\\\\.com\/|gegen-hartz\\\\.de\/|indiaimagine\\\\.com\/|pepigame\\\\.com\/|postfunny\\\\.com\/|testname\\\\.me\/|yashbharat\\\\.com\/\"]]]],[50,[[95335245,[[null,null,null,[null,null,null,[\"95335250\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335246,[[626062008,null,null,[1]],[null,null,null,[null,null,null,[\"95335251\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335247,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335252\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335247\",\"95335252\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[10,[[95335248,[[null,null,null,[null,null,null,[\"95335253\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335249,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335254\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335249\",\"95335254\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95340662,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95340663\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95340662\",\"95340663\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[1,[[95336911,null,[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]],[95336912,null,[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]],[95336913,[[1361,null,null,[1]]],[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]],[95336914,null,[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]],[95336915,[[1361,null,null,[1]]],[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]]]],[250,[[95338226,[[null,null,null,[null,null,null,[\"95338230\"]],null,null,null,630330362]]],[95338227,[[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338231\"]],null,null,null,630330362]]],[95338228,[[null,643258048,null,[null,0.41421]],[null,643258049,null,[null,0.44357]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338232\"]],null,null,null,630330362]]],[95338229,[[null,643258048,null,[null,0.46927]],[null,643258049,null,[null,0.48129]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338233\"]],null,null,null,630330362]]]],[4,null,55]],[50,[[95338242],[95338243,[[1318,null,null,[]]]]]],[10,[[95339860,[[null,null,null,[null,null,null,[\"95339862\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95339861,[[626062008,null,null,[1]],[655991266,null,null,[]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95339863\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95339861\",\"95339863\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[333,[[95341662,[[null,null,null,[null,null,null,[\"95341665\"]],null,null,null,630330362]]],[95341663,[[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"32_24\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"32_9\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95341666\"]],null,null,null,630330362]]],[95341664,[[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"32_25\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"32_9\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95341667\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[30,[[95341873,[[null,null,null,[null,null,null,[\"95341877\"]],null,null,null,630330362]]],[95341874,[[null,null,622128249,[null,null,\"#FFFFFF\"]],[null,null,622128250,[null,null,\"#1A73E8\"]],[622128248,null,null,[]],[636570127,null,null,[1]],[null,652486359,null,[null,1]],[null,666400580,null,[null,22]],[null,null,null,[null,null,null,[\"95341878\"]],null,null,null,630330362]]],[95341875,[[622128248,null,null,[]],[636570127,null,null,[1]],[null,652486359,null,[null,1]],[null,666400580,null,[null,22]],[null,null,null,[null,null,null,[\"95341879\"]],null,null,null,630330362]]],[95341876,[[622128248,null,null,[]],[636570127,null,null,[1]],[null,652486359,null,[null,5]],[null,666400580,null,[null,22]],[null,null,null,[null,null,null,[\"95341880\"]],null,null,null,630330362]]]],[4,null,55]],[1,[[95341936],[95341937,[[1368,null,null,[1]]]]],[4,null,55]],[1,[[95342015],[95342016]],[4,null,55]],[250,[[95342032,[[null,null,null,[null,null,null,[\"95342034\"]],null,null,null,630330362]]],[95342033,[[null,null,null,[null,null,null,[\"3\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"3\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95342035\"]],null,null,null,630330362]]]],[4,null,55]]]],[17,[[10,[[31084487],[31084488]],null,null,null,null,32,null,null,142,1],[500,[[95340844,[[null,null,null,[null,null,null,[\"95340846\"]],null,null,null,630330362]]],[95340845,[[663664316,null,null,[1]],[null,null,null,[null,null,null,[\"95340847\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,177],[10,[[95341670,[[null,null,null,[null,null,null,[\"95341672\"]],null,null,null,630330362]]],[95341671,[[668056665,null,null,[1]],[null,null,null,[null,null,null,[\"95341673\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,180]]],[11,[[100,[[31086139],[31086140],[31086141],[31086142]],null,122,null,null,null,null,null,null,null,null,null,4],[null,[[95339678],[95339679]],null,127,null,null,null,null,null,null,null,null,null,3]]]],null,null,[null,1000,1,1000]],null,[[\"ca-pub-4567312917908978\"],[1,[null,null,[null,null,[1,2,7]]]]],null,null,\"game.busidol.com\",1988906687,[44759875,44759926,44759837]]");