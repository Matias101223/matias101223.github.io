(function() {
    var p, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        t = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var f = a[d];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    t("Symbol", function(a) {
        if (a) return a;
        var b = function(e, g) {
            this.la = e;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.la
        };
        a = Math.random() * 1E9 >>> 0;
        var c = "jscomp_symbol_" + a + "_",
            d = 0,
            f = function(e) {
                if (this instanceof f) throw new TypeError("Symbol is not a constructor");
                return new b(c + (e || "") + "_" + d++, e)
            };
        return f
    }, "es6", "es3");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    }, "es6", "es3");
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        v = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        fa = function(a) {
            if (!(a instanceof Array)) {
                a = v(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        y = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ha = typeof Object.create ==
        "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia = function() {
            function a() {
                function f() {}

                function e() {}
                new f;
                Reflect.construct(f, [], e);
                return new f instanceof f
            }

            function b(f, e, g) {
                g === void 0 && (g = f);
                g = g.prototype || Object.prototype;
                g = ha(g);
                var k = Function.prototype.apply;
                return (f = k.call(f, g, e)) || g
            }
            if (typeof Reflect != "undefined" && Reflect.construct) {
                if (a()) return Reflect.construct;
                var c = Reflect.construct,
                    d = function(f, e, g) {
                        f = c(f, e);
                        g && Reflect.setPrototypeOf(f, g.prototype);
                        return f
                    };
                return d
            }
            return b
        },
        ja = {
            valueOf: ia
        }.valueOf(),
        ka;
    if (typeof Object.setPrototypeOf == "function") ka = Object.setPrototypeOf;
    else {
        var la;
        a: {
            var ma = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = ma;
                la = qa.a;
                break a
            } catch (a) {}
            la = !1
        }
        ka = la ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var A = ka,
        ra = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (A) A(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.tb = b.prototype
        };
    t("Reflect", function(a) {
        return a ? a : {}
    }, "es6", "es3");
    t("Reflect.construct", function() {
        return ja
    }, "es6", "es3");
    t("Reflect.setPrototypeOf", function(a) {
        return a ? a : A ? a = function(b, c) {
            try {
                return A(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6", "es5");
    t("Object.setPrototypeOf", function(a) {
        return a || A
    }, "es6", "es5");
    t("WeakMap", function(a) {
        function b() {
            if (!a || !Object.seal) return !1;
            try {
                var m = Object.seal({}),
                    l = Object.seal({}),
                    n = new a([
                        [m, 2],
                        [l, 3]
                    ]);
                if (n.get(m) != 2 || n.get(l) != 3) return !1;
                n.delete(m);
                n.set(l, 4);
                return !n.has(m) && n.get(l) == 4
            } catch (r) {
                return !1
            }
        }

        function c() {}

        function d(m) {
            var l = typeof m;
            return l === "object" && m !== null || l === "function"
        }

        function f(m) {
            if (!y(m, g)) {
                var l = new c;
                ba(m, g, {
                    value: l
                })
            }
        }

        function e(m) {
            var l = Object[m];
            l && (Object[m] = function(n) {
                if (n instanceof c) return n;
                Object.isExtensible(n) && f(n);
                return l(n)
            })
        }
        if (b()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var k = 0,
            h = function(m) {
                this.I = (k += Math.random() + 1).toString();
                if (m) {
                    m = v(m);
                    for (var l; !(l = m.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(m, l) {
            if (!d(m)) throw Error("Invalid WeakMap key");
            f(m);
            if (!y(m, g)) throw Error("WeakMap key fail: " + m);
            m[g][this.I] = l;
            return this
        };
        h.prototype.get = function(m) {
            return d(m) && y(m, g) ? m[g][this.I] : void 0
        };
        h.prototype.has = function(m) {
            return d(m) && y(m,
                g) && y(m[g], this.I)
        };
        h.prototype.delete = function(m) {
            return d(m) && y(m, g) && y(m[g], this.I) ? delete m[g][this.I] : !1
        };
        return h
    }, "es6", "es3");
    t("Map", function(a) {
        function b() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
            try {
                var h = Object.seal({
                        x: 4
                    }),
                    m = new a(v([
                        [h, "s"]
                    ]));
                if (m.get(h) != "s" || m.size != 1 || m.get({
                        x: 4
                    }) || m.set({
                        x: 4
                    }, "t") != m || m.size != 2) return !1;
                var l = m.entries(),
                    n = l.next();
                if (n.done || n.value[0] != h || n.value[1] != "s") return !1;
                n = l.next();
                return n.done || n.value[0].x != 4 || n.value[1] != "t" || !l.next().done ? !1 : !0
            } catch (r) {
                return !1
            }
        }
        if (b()) return a;
        var c = new WeakMap,
            d = function(h) {
                this[0] = {};
                this[1] =
                    g();
                this.size = 0;
                if (h) {
                    h = v(h);
                    for (var m; !(m = h.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
        d.prototype.set = function(h, m) {
            h = h === 0 ? 0 : h;
            var l = f(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.j ? l.j.value = m : (l.j = {
                next: this[1],
                u: this[1].u,
                head: this[1],
                key: h,
                value: m
            }, l.list.push(l.j), this[1].u.next = l.j, this[1].u = l.j, this.size++);
            return this
        };
        d.prototype.delete = function(h) {
            h = f(this, h);
            return h.j && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.j.u.next = h.j.next, h.j.next.u = h.j.u, h.j.head =
                null, this.size--, !0) : !1
        };
        d.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].u = g();
            this.size = 0
        };
        d.prototype.has = function(h) {
            return !!f(this, h).j
        };
        d.prototype.get = function(h) {
            return (h = f(this, h).j) && h.value
        };
        d.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        d.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        d.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        d.prototype.forEach = function(h, m) {
            for (var l = this.entries(), n; !(n = l.next()).done;) n =
                n.value, h.call(m, n[1], n[0], this)
        };
        d.prototype[Symbol.iterator] = d.prototype.entries;
        var f = function(h, m) {
                var l;
                var n = (l = m) && typeof l;
                n == "object" || n == "function" ? c.has(l) ? l = c.get(l) : (n = "" + ++k, c.set(l, n), l = n) : l = "p_" + l;
                if ((n = h[0][l]) && y(h[0], l))
                    for (h = 0; h < n.length; h++) {
                        var r = n[h];
                        if (m !== m && r.key !== r.key || m === r.key) return {
                            id: l,
                            list: n,
                            index: h,
                            j: r
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    j: void 0
                }
            },
            e = function(h, m) {
                var l = h[1];
                return ea(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.u;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: m(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            g = function() {
                var h = {};
                return h.u = h.next = h.head = h
            },
            k = 0;
        return d
    }, "es6", "es3");
    t("Set", function(a) {
        function b() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
            try {
                var d = Object.seal({
                        x: 4
                    }),
                    f = new a(v([d]));
                if (!f.has(d) || f.size != 1 || f.add(d) != f || f.size != 1 || f.add({
                        x: 4
                    }) != f || f.size != 2) return !1;
                var e = f.entries(),
                    g = e.next();
                if (g.done || g.value[0] != d || g.value[1] != d) return !1;
                g = e.next();
                return g.done || g.value[0] == d || g.value[0].x != 4 || g.value[1] != g.value[0] ? !1 : e.next().done
            } catch (k) {
                return !1
            }
        }
        if (b()) return a;
        var c = function(d) {
            this.o = new Map;
            if (d) {
                d =
                    v(d);
                for (var f; !(f = d.next()).done;) f = f.value, this.add(f)
            }
            this.size = this.o.size
        };
        c.prototype.add = function(d) {
            d = d === 0 ? 0 : d;
            this.o.set(d, d);
            this.size = this.o.size;
            return this
        };
        c.prototype.delete = function(d) {
            d = this.o.delete(d);
            this.size = this.o.size;
            return d
        };
        c.prototype.clear = function() {
            this.o.clear();
            this.size = 0
        };
        c.prototype.has = function(d) {
            return this.o.has(d)
        };
        c.prototype.entries = function() {
            return this.o.entries()
        };
        c.prototype.values = function() {
            return this.o.values()
        };
        c.prototype.keys = c.prototype.values;
        c.prototype[Symbol.iterator] = c.prototype.values;
        c.prototype.forEach = function(d, f) {
            var e = this;
            this.o.forEach(function(g) {
                return d.call(f, g, g, e)
            })
        };
        return c
    }, "es6", "es3");
    t("Object.values", function(a) {
        return a ? a : a = function(b) {
            var c = [],
                d;
            for (d in b) y(b, d) && c.push(b[d]);
            return c
        }
    }, "es8", "es3");
    t("Object.is", function(a) {
        return a ? a : a = function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6", "es3");
    t("Array.prototype.includes", function(a) {
        return a ? a : a = function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var f = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + f, 0)); c < f; c++) {
                var e = d[c];
                if (e === b || Object.is(e, b)) return !0
            }
            return !1
        }
    }, "es7", "es3");
    t("String.prototype.includes", function(a) {
        return a ? a : a = function(b, c) {
            var d = this;
            var f = b,
                e = "includes";
            if (d == null) throw new TypeError("The 'this' value for String.prototype." + e + " must not be null or undefined");
            if (f instanceof RegExp) throw new TypeError("First argument to String.prototype." + e + " must not be a regular expression");
            d += "";
            return d.indexOf(b, c || 0) !== -1
        }
    }, "es6", "es3");
    t("Object.entries", function(a) {
        return a ? a : a = function(b) {
            var c = [],
                d;
            for (d in b) y(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8", "es3");
    t("Number.isFinite", function(a) {
        return a ? a : a = function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    }, "es6", "es3");
    t("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6", "es3");
    t("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    }, "es6", "es3");
    t("Number.isInteger", function(a) {
        return a ? a : a = function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    }, "es6", "es3");
    t("Number.isSafeInteger", function(a) {
        return a ? a : a = function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    }, "es6", "es3");
    var sa = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            f = {
                next: function() {
                    if (!d && c < a.length) {
                        var e = c++;
                        return {
                            value: b(e, a[e]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    };
    t("Array.prototype.entries", function(a) {
        return a ? a : a = function() {
            return sa(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6", "es3");
    t("Math.imul", function(a) {
        return a ? a : a = function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b >>> 16 & 65535;
            b &= 65535;
            var f = c >>> 16 & 65535;
            c &= 65535;
            d = d * c + b * f << 16 >>> 0;
            return b * c + d | 0
        }
    }, "es6", "es3");
    t("Array.prototype.values", function(a) {
        return a ? a : a = function() {
            return sa(this, function(b, c) {
                return c
            })
        }
    }, "es8", "es3");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var B = this || self,
        ua = function(a, b, c, d) {
            a = a.split(".");
            d = d || B;
            a[0] in d || typeof d.execScript == "undefined" || d.execScript("var " + a[0]);
            for (var f; a.length && (f = a.shift());)
                if (a.length || b === void 0) d = d[f] && d[f] !== Object.prototype[f] ? d[f] : d[f] = {};
                else if (!c && ta(b) && ta(d[f]))
                for (var e in b) b.hasOwnProperty(e) && (d[f][e] = b[e]);
            else d[f] = b
        },
        va = function(a, b) {
            a: {
                var c = ["CLOSURE_FLAGS"];
                for (var d = B, f = 0; f < c.length; f++)
                    if (d = d[c[f]], d == null) {
                        c = null;
                        break a
                    }
                c = d
            }
            a = c && c[a];
            return a != null ? a : b
        },
        ta = function(a) {
            var b = typeof a;
            return b == "object" && a != null || b == "function"
        },
        wa = function(a) {
            return a
        };

    function xa(a) {
        B.setTimeout(function() {
            throw a;
        }, 0)
    };
    var ya = va(610401301, !1),
        za = va(645172343, !0);
    var Aa = !1;

    function Ba() {
        var a = B.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ca = null,
        Da, Ea = B.navigator;
    Da = Ea ? Ea.userAgentData || null : null;

    function Fa(a) {
        if (!ya && !Aa) return !1;
        var b = Da;
        return b ? b.brands.some(function(c) {
            return (c = c.brand) && c.indexOf(a) != -1
        }) : !1
    }

    function C(a) {
        var b = Ca == null ? Ba() : Ca;
        return b.indexOf(a) != -1
    };

    function D(a) {
        a = a === void 0 ? !1 : a;
        if (!a && !ya && !Aa) return !1;
        a = Da;
        return !!a && a.brands.length > 0
    }

    function Ga() {
        return D() ? Fa("Chromium") : (C("Chrome") || C("CriOS")) && !(D() ? 0 : C("Edge")) || C("Silk")
    };
    var Ha = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = c == null ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
            if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ia = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, f = typeof a === "string" ? a.split("") : a, e = 0; e < d; e++) e in f && b.call(c, f[e], e, a)
        };
    var Ja = D() ? !1 : C("Trident") || C("MSIE"),
        Ka;
    if (Ka = C("Gecko")) {
        var La, Ma = Ca == null ? Ba() : Ca;
        La = Ma.toLowerCase().indexOf("webkit") != -1;
        Ka = !(La && !C("Edge"))
    }
    var Na = Ka && !(C("Trident") || C("MSIE")) && !C("Edge");
    !C("Android") || Ga();
    Ga();
    !C("Safari") || Ga() || (D() ? 0 : C("Coast")) || (D() ? 0 : C("Opera")) || (D() ? 0 : C("Edge")) || (D() ? Fa("Microsoft Edge") : C("Edg/")) || D() && Fa("Opera");
    var Oa = {},
        Pa = null;
    var Qa = typeof Uint8Array !== "undefined",
        Ra = !Ja && typeof btoa === "function";
    var Sa, Ta;
    var Ua = typeof Symbol === "function" && typeof Symbol() === "symbol";

    function Va(a, b) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : b
    }
    var E = Va("INTERNAL_ARRAY_STATE", void 0),
        Wa = Va("defaultInstance", "0di"),
        Xa = Va("DUPLICATED_EXTENSION_SYMBOL", "2ex");
    var Ya = Ua ? function(a, b) {
            return a[E] |= b
        } : function(a, b) {
            var c = a;
            if (c.v !== void 0) return c.v |= b;
            Object.defineProperties(a, {
                v: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return b
        },
        F = Ua ? function(a) {
            return a[E] | 0
        } : function(a) {
            return a.v | 0
        },
        G = Ua ? function(a) {
            return a = a[E]
        } : function(a) {
            return a = a.v
        },
        H = Ua ? function(a, b) {
            a[E] = b
        } : function(a, b) {
            var c = a;
            c.v !== void 0 ? c.v = b : Object.defineProperties(a, {
                v: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function Za(a, b) {
        H(b, (a | 0) & -14591)
    }

    function $a(a, b) {
        H(b, (a | 34) & -14557)
    };
    var ab = {};

    function bb(a) {
        return a = a.Oa === ab
    }
    var cb = {};

    function db(a) {
        return a = !(!a || typeof a !== "object" || a.nb !== cb)
    }

    function eb(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function I(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = F(a);
        if (d & 1) return !0;
        c = !!b && (Array.isArray(b) ? b.includes(c) : b.has(c));
        if (!c) return !1;
        H(a, d | 1);
        return !0
    }
    var J, fb = Object.freeze({});

    function L(a) {
        a.La = !0;
        return a
    }
    L(function(a) {
        return a !== null && a !== void 0
    }, "exists");
    L(function(a) {
        return typeof a === "number"
    }, "number");
    gb(0);
    L(function(a) {
        return Number.isSafeInteger(a)
    }, "isSafeInteger");
    L(function(a) {
        return Number.isInteger(a)
    }, "isInteger");
    L(function(a) {
        return Number.isFinite(a)
    }, "isFinite");
    var hb = L(function(a) {
        return typeof a === "string"
    }, "string");
    gb("");
    L(function(a) {
        return a.trim() !== ""
    }, "isNotBlank");
    L(function(a) {
        return a.trim() === ""
    }, "isBlank");
    L(function(a) {
        return typeof a === "boolean"
    }, "boolean");
    var ib = L(function(a) {
        return typeof a === "bigint"
    }, "bigint");
    L(function(a) {
        return a === null
    }, "null");
    L(function(a) {
        return a === void 0
    }, "undefined");
    L(function(a) {
        return a == null
    }, "null | undefined");

    function gb(a) {
        return L(function(b) {
            return b === a
        }, function() {
            throw Error("basicPrettyPrint should only be used in DEBUG mode");
        })
    }
    L(function(a) {
        return a != null && typeof a === "object" && typeof a.then === "function"
    }, "Thenable");
    var jb = L(function(a) {
        return typeof a === "function"
    }, "Function");
    L(function(a) {
        return jb(a) ? a.La === !0 : !1
    }, "isGuard");
    kb(Date);
    L(function(a) {
        return !isNaN(a)
    }, "isValidDate");
    L(function(a) {
        return a.global
    }, "isGlobalRegExp");
    L(function(a) {
        return a.sticky
    }, "isStickyRegExp");
    L(function(a) {
        return !!a && (typeof a === "object" || typeof a === "function")
    }, "object");

    function kb(a) {
        return L(function(b) {
            return b instanceof a
        }, function() {
            var b = a.displayName;
            b && typeof b === "string" || (b = a.name, b && typeof b === "string" || (b = String(a), b = (b = /function\s+([^\(]+)/m.exec(b)) ? b[1] : "(Anonymous)"));
            return b
        })
    }
    L(function() {
        return !0
    }, "unknown");
    lb();
    lb();

    function lb() {
        return L(function(a) {
            return Array.isArray(a)
        }, "Array<unknown>")
    }
    mb();
    mb();

    function mb() {
        return L(function(a) {
            return a instanceof Set
        }, "Set<unknown>")
    }
    nb();
    nb();

    function nb() {
        return L(function(a) {
            return a instanceof Map
        }, "Map<unknown, unknown>")
    };
    var M = typeof B.BigInt === "function" && typeof B.BigInt(0) === "bigint";
    var ob = function(a) {
        this.ja = a
    };
    ob.prototype.toString = function(a) {
        return this.ja.toString(a)
    };
    ob.prototype.valueOf = function() {
        throw Error("Convert JSBI instances to native numbers using `toNumber`.");
    };
    ob.prototype[Symbol.toPrimitive] = function() {
        return this.ja
    };
    /* 
     
     Copyright 2018 Google Inc 
     SPDX-License-Identifier: Apache-2.0 
    */
    var N = function(a, b) {
        var c = ja(Array, [a], this.constructor);
        c.sign = b;
        Object.setPrototypeOf(c, N.prototype);
        if (a > pb) throw new RangeError("Maximum BigInt size exceeded");
        return c
    };
    ra(N, Array);
    N.prototype.toString = function(a) {
        a = a === void 0 ? 10 : a;
        if (a < 2 || a > 36) throw new RangeError("toString() radix argument must be between 2 and 36");
        if (this.length === 0) var b = "0";
        else if ((a & a - 1) === 0) {
            b = this.length;
            var c = a - 1;
            c = (c >>> 1 & 85) + (c & 85);
            c = (c >>> 2 & 51) + (c & 51);
            c = (c >>> 4 & 15) + (c & 15);
            --a;
            var d = this.g(b - 1),
                f = qb(d);
            f = b * 30 - f;
            var e = (f + c - 1) / c | 0;
            this.sign && e++;
            if (e > 268435456) throw Error("string too long");
            f = Array(e);
            --e;
            for (var g = 0, k = 0, h = 0; h < b - 1; h++) {
                var m = this.g(h);
                g = (g | m << k) & a;
                f[e--] = rb[g];
                k = c - k;
                g = m >>> k;
                for (k = 30 -
                    k; k >= c;) f[e--] = rb[g & a], g >>>= c, k -= c
            }
            b = (g | d << k) & a;
            f[e--] = rb[b];
            for (g = d >>> c - k; g !== 0;) f[e--] = rb[g & a], g >>>= c;
            this.sign && (f[e--] = "-");
            if (e !== -1) throw Error("implementation bug");
            b = f.join("")
        } else b = sb(this, a, !1);
        return b
    };
    N.prototype.valueOf = function() {
        throw Error("Convert JSBI instances to native numbers using `toNumber`.");
    };
    var wb = function(a, b) {
            if (b.sign) throw new RangeError("Exponent must be positive");
            if (b.length === 0) return tb(1, !1);
            if (a.length === 0) return a;
            if (a.length === 1 && a.g(0) === 1) return a.sign && (b.g(0) & 1) === 0 ? (b = a, b.length !== 0 && (a = b.ma(), a.sign = !b.sign, b = a)) : b = a, b;
            if (b.length > 1) throw new RangeError("BigInt too big");
            b = b.J(0);
            if (b === 1) return a;
            if (b >= ub) throw new RangeError("BigInt too big");
            if (a.length === 1 && a.g(0) === 2) {
                var c = 1 + (b / 30 | 0);
                a = a.sign && (b & 1) !== 0;
                a = new N(c, a);
                a.F();
                b = 1 << b % 30;
                a.h(c - 1, b);
                return a
            }
            c = null;
            var d = a;
            (b & 1) !== 0 && (c = a);
            for (b >>= 1; b !== 0; b >>= 1) d = vb(d, d), (b & 1) !== 0 && (c = c === null ? d : vb(c, d));
            return c
        },
        vb = function(a, b) {
            if (a.length === 0) return a;
            if (b.length === 0) return b;
            var c = a.length + b.length;
            a.V() + b.V() >= 30 && c--;
            c = new N(c, a.sign !== b.sign);
            c.F();
            for (var d = 0; d < a.length; d++) {
                var f = b,
                    e = a.g(d),
                    g = c,
                    k = d;
                if (e !== 0) {
                    for (var h = e & 32767, m = e >>> 15, l = e = 0, n = 0; n < f.length; n++, k++) {
                        var r = g.g(k),
                            w = f.g(n),
                            q = w & 32767,
                            u = w >>> 15;
                        w = O(q, h);
                        q = O(q, m);
                        var x = O(u, h);
                        u = O(u, m);
                        r += l + w + e;
                        e = r >>> 30;
                        r &= 1073741823;
                        r += ((q & 32767) << 15) + ((x &
                            32767) << 15);
                        e += r >>> 30;
                        l = u + (q >>> 15) + (x >>> 15);
                        g.h(k, r & 1073741823)
                    }
                    for (; e !== 0 || l !== 0; k++) f = g.g(k), f += e + l, l = 0, e = f >>> 30, g.h(k, f & 1073741823)
                }
            }
            return c.O()
        },
        tb = function(a, b) {
            b = new N(1, b);
            b.h(0, a);
            return b
        };
    N.prototype.ma = function() {
        for (var a = new N(this.length, this.sign), b = 0; b < this.length; b++) a[b] = this[b];
        return a
    };
    N.prototype.O = function() {
        for (var a = this.length, b = this[a - 1]; b === 0;) a--, b = this[a - 1], this.pop();
        a === 0 && (this.sign = !1);
        return this
    };
    N.prototype.F = function() {
        for (var a = 0; a < this.length; a++) this[a] = 0
    };
    var sb = function(a, b, c) {
        var d = a.length;
        if (d === 0) return "";
        if (d === 1) return b = a.J(0).toString(b), c === !1 && a.sign && (b = "-" + b), b;
        d = d * 30 - qb(a.g(d - 1));
        var f = xb[b];
        --f;
        d *= yb;
        d += f - 1;
        d = d / f | 0;
        d = d + 1 >> 1;
        f = wb(tb(b, !1), tb(d, !1));
        var e = f.J(0);
        if (f.length === 1 && e <= 32767) {
            f = new N(a.length, !1);
            f.F();
            for (var g = 0, k = a.length * 2 - 1; k >= 0; k--) g = g << 15 | a.m(k), f.N(k, g / e | 0), g = g % e | 0;
            e = g.toString(b)
        } else {
            var h = a;
            e = f.W();
            k = f.length;
            var m = h.W() - e;
            g = new N(m + 2 >>> 1, !1);
            g.F();
            var l = new N(e + 2 >>> 1, !1);
            l.F();
            var n = qb(f.m(e - 1)) - 15;
            n > 0 && (f = zb(f,
                n, 0));
            h = zb(h, n, 1);
            for (var r = f.m(e - 1), w = 0; m >= 0; m--) {
                var q = 32767,
                    u = h.m(m + e);
                if (u !== r) {
                    u = (u << 15 | h.m(m + e - 1)) >>> 0;
                    q = u / r | 0;
                    u = u % r | 0;
                    for (var x = f.m(e - 2), z = h.m(m + e - 2); O(q, x) >>> 0 > (u << 16 | z) >>> 0 && !(q--, u += r, u > 32767););
                }
                u = f;
                x = q;
                var K = 0;
                z = k;
                for (var na = 0, oa = 0; oa < z; oa++) {
                    var W = u.g(oa),
                        pa = O(W & 32767, x);
                    W = O(W >>> 15, x);
                    pa = pa + ((W & 32767) << 15) + na + K;
                    K = pa >>> 30;
                    na = W >>> 15;
                    l.h(oa, pa & 1073741823)
                }
                if (l.length > z)
                    for (l.h(z++, K + na); z < l.length;) l.h(z++, 0);
                else if (K + na !== 0) throw Error("implementation bug");
                u = h.pa(l, m, e + 1);
                u !== 0 && (u = h.na(f,
                    m, e), h.N(m + e, h.m(m + e) + u & 32767), q--);
                m & 1 ? w = q << 15 : g.h(m >>> 1, w | q)
            }
            h.oa(n);
            f = {
                Xa: g,
                Za: h
            };
            e = f;
            f = e.Xa;
            e = e.Za.O();
            e = sb(e, b, !0)
        }
        f.O();
        for (b = sb(f, b, !0); e.length < d;) e = "0" + e;
        c === !1 && a.sign && (b = "-" + b);
        return b + e
    };
    p = N.prototype;
    p.V = function() {
        return qb(this.g(this.length - 1))
    };
    p.kb = function(a, b, c) {
        c > this.length && (c = this.length);
        var d = a & 32767;
        a >>>= 15;
        for (var f = 0, e = 0; e < c; e++) {
            var g = this.g(e),
                k = g & 32767,
                h = g >>> 15;
            g = O(k, d);
            k = O(k, a);
            var m = O(h, d);
            h = O(h, a);
            g = b + g + f;
            f = g >>> 30;
            g &= 1073741823;
            g += ((k & 32767) << 15) + ((m & 32767) << 15);
            f += g >>> 30;
            b = h + (k >>> 15) + (m >>> 15);
            this.h(e, g & 1073741823)
        }
        if (f !== 0 || b !== 0) throw Error("implementation bug");
    };
    p.na = function(a, b, c) {
        for (var d = 0, f = 0; f < c; f++) {
            var e = this.m(b + f) + a.m(f) + d;
            d = e >>> 15;
            this.N(b + f, e & 32767)
        }
        return d
    };
    p.pa = function(a, b, c) {
        var d = c - 1 >>> 1,
            f = 0;
        if (b & 1) {
            b >>= 1;
            for (var e = this.g(b), g = e & 32767, k = 0; k < d; k++) {
                var h = a.g(k);
                e = (e >>> 15) - (h & 32767) - f;
                f = e >>> 15 & 1;
                this.h(b + k, (e & 32767) << 15 | g & 32767);
                e = this.g(b + k + 1);
                g = (e & 32767) - (h >>> 15) - f;
                f = g >>> 15 & 1
            }
            d = a.g(k);
            e = (e >>> 15) - (d & 32767) - f;
            f = e >>> 15 & 1;
            this.h(b + k, (e & 32767) << 15 | g & 32767);
            g = d >>> 15;
            if (b + k + 1 >= this.length) throw new RangeError("out of bounds");
            (c & 1) === 0 && (e = this.g(b + k + 1), g = (e & 32767) - g - f, f = g >>> 15 & 1, this.h(b + a.length, e & 1073709056 | g & 32767))
        } else {
            b >>= 1;
            for (k = 0; k < a.length - 1; k++) e =
                this.g(b + k), d = a.g(k), g = (e & 32767) - (d & 32767) - f, f = g >>> 15 & 1, e = (e >>> 15) - (d >>> 15) - f, f = e >>> 15 & 1, this.h(b + k, (e & 32767) << 15 | g & 32767);
            g = this.g(b + k);
            a = a.g(k);
            e = (g & 32767) - (a & 32767) - f;
            f = e >>> 15 & 1;
            d = 0;
            (c & 1) === 0 && (d = (g >>> 15) - (a >>> 15) - f, f = d >>> 15 & 1);
            this.h(b + k, (d & 32767) << 15 | e & 32767)
        }
        return f
    };
    p.oa = function(a) {
        if (a !== 0) {
            for (var b = this.g(0) >>> a, c = this.length - 1, d = 0; d < c; d++) {
                var f = this.g(d + 1);
                this.h(d, f << 30 - a & 1073741823 | b);
                b = f >>> a
            }
            this.h(c, b)
        }
    };
    var zb = function(a, b, c) {
        var d = a.length,
            f = d + c;
        f = new N(f, !1);
        if (b === 0) {
            for (b = 0; b < d; b++) f.h(b, a.g(b));
            c > 0 && f.h(d, 0);
            return f
        }
        for (var e = 0, g = 0; g < d; g++) {
            var k = a.g(g);
            f.h(g, k << b & 1073741823 | e);
            e = k >>> 30 - b
        }
        c > 0 && f.h(d, e);
        return f
    };
    p = N.prototype;
    p.g = function(a) {
        return this[a]
    };
    p.J = function(a) {
        return this[a] >>> 0
    };
    p.h = function(a, b) {
        this[a] = b | 0
    };
    p.lb = function(a, b) {
        this[a] = b | 0
    };
    p.W = function() {
        var a = this.length;
        return this.J(a - 1) <= 32767 ? a * 2 - 1 : a * 2
    };
    p.m = function(a) {
        return this[a >>> 1] >>> (a & 1) * 15 & 32767
    };
    p.N = function(a, b) {
        var c = a >>> 1,
            d = this.g(c);
        a = a & 1 ? d & 32767 | b << 15 : d & 1073709056 | b & 32767;
        this.h(c, a)
    };
    var pb = 33554432,
        ub = pb << 5,
        xb = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166],
        Ab = 5,
        yb = 1 << Ab,
        rb = "0123456789abcdefghijklmnopqrstuvwxyz".split(""),
        qb = Math.clz32 ? function(a) {
            return Math.clz32(a) - 2
        } : function(a) {
            return a === 0 ? 30 : 29 - (Math.log(a >>> 0) / Math.LN2 | 0) | 0
        },
        O = Math.imul || function(a, b) {
            return a * b | 0
        };
    L(function(a) {
        return typeof a === "bigint"
    }, "bigint");
    kb(N);
    kb(ob);
    L(function(a) {
        return M ? ib(a) : hb(a) && /^(?:-?[1-9]\d*|0)$/.test(a)
    }, "gbigint");
    var Fb = L(function(a) {
            return M ? a >= Bb && a <= Cb : a[0] === "-" ? P(a, Db) : P(a, Eb)
        }, "isSafeInt52"),
        Db = Number.MIN_SAFE_INTEGER.toString(),
        Bb = M ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
        Eb = Number.MAX_SAFE_INTEGER.toString(),
        Cb = M ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
    L(function(a) {
        return M ? a >= Gb && a <= Hb : a[0] === "-" ? P(a, "-9223372036854775808") : P(a, "9223372036854775807")
    }, "isValidSignedInt64");
    var Gb = M ? BigInt("-9223372036854775808") : void 0,
        Hb = M ? BigInt("9223372036854775807") : void 0;
    L(function(a) {
        return M ? a >= Ib && a <= Jb : a[0] === "-" ? !1 : P(a, "18446744073709551615")
    }, "isValidUnsignedInt64");
    var Ib = M ? BigInt(0) : void 0,
        Jb = M ? BigInt("18446744073709551615") : void 0;

    function P(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c],
                f = b[c];
            if (d > f) return !1;
            if (d < f) return !0
        }
    };
    var Kb;

    function Lb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return Fb(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (I(a, void 0, 0)) return
                    } else if (Qa && a != null && a instanceof Uint8Array) {
                    if (Ra) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        b = void 0;
                        b === void 0 && (b = 0);
                        if (!Pa) {
                            Pa = {};
                            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                            d = ["+/=", "+/", "-_=", "-_.", "-_"];
                            for (var f = 0; f < 5; f++) {
                                var e = c.concat(d[f].split(""));
                                Oa[f] = e;
                                for (var g = 0; g < e.length; g++) {
                                    var k = e[g],
                                        h = Pa[k];
                                    h === void 0 && (Pa[k] = g)
                                }
                            }
                        }
                        f = Oa[b];
                        b = Array(Math.floor(a.length / 3));
                        c = f[64] || "";
                        for (d = e = 0; e < a.length - 2; e += 3) {
                            h = a[e];
                            var m = a[e + 1];
                            k = a[e + 2];
                            g = f[h >> 2];
                            h = f[(h & 3) << 4 | m >> 4];
                            m = f[(m & 15) << 2 | k >> 6];
                            k = f[k & 63];
                            b[d++] = "" + g + h + m + k
                        }
                        k = 0;
                        g = c;
                        switch (a.length - e) {
                            case 2:
                                k = a[e + 1], g = f[(k & 15) << 2] || c;
                            case 1:
                                e = a[e], a = f[e >> 2], f = f[(e & 3) << 4 | k >> 4], b[d] = "" + a + f + g + c
                        }
                        a = b.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Mb(a, b, c) {
        var d = Array.prototype.slice.call(a),
            f = d.length,
            e = b & 256 ? d[f - 1] : void 0;
        f += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < f; b++) d[b] = c(d[b]);
        if (e) {
            b = d[b] = {};
            for (var g in e) b[g] = c(e[g])
        }(a = J ? a[J] : void 0) && (d[J] = Array.prototype.slice.call(a));
        return d
    }

    function Nb(a, b, c, d, f) {
        if (a != null) {
            if (Array.isArray(a)) var e = I(a, void 0, 0) ? void 0 : f && F(a) & 2 ? a : Ob(a, b, c, d !== void 0, f);
            else if (eb(a)) {
                var g = {};
                for (e in a) g[e] = Nb(a[e], b, c, d, f);
                e = g
            } else e = b(a, d);
            return e
        }
    }

    function Ob(a, b, c, d, f) {
        var e = d || c ? F(a) : 0,
            g = d ? !!(e & 32) : void 0;
        d = Array.prototype.slice.call(a);
        for (var k = 0; k < d.length; k++) d[k] = Nb(d[k], b, c, g, f);
        c && ((a = J ? a[J] : void 0) && (d[J] = Array.prototype.slice.call(a)), c(e, d));
        return d
    }

    function Pb(a) {
        return bb(a) ? a.toJSON() : Qa && a != null && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function Qb(a) {
        return bb(a) ? a.toJSON() : Lb(a)
    };

    function Rb(a, b, c) {
        c = c === void 0 ? $a : c;
        if (a != null) {
            if (Qa && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = F(a);
                if (d & 2) return a;
                if (b) {
                    b = d === 0;
                    var f = !!(d & 32),
                        e = !!(d & 64) || !(d & 16);
                    b = b || f && !e
                }
                return b ? (H(a, (d | 34) & -12293), a) : Ob(a, Rb, d & 4 ? $a : c, !0, !0)
            }
            bb(a) && (c = a.l, d = G(c), a = d & 2 ? a : Sb(a, c, d, !0));
            return a
        }
    }

    function Sb(a, b, c, d) {
        a = a.constructor;
        Kb = b = Tb(b, c, d);
        b = new a(b);
        Kb = void 0;
        return b
    }

    function Tb(a, b, c) {
        var d = c || b & 2 ? $a : Za,
            f = !!(b & 32);
        a = Mb(a, b, function(e) {
            return Rb(e, f, d)
        });
        Ya(a, 32 | (c ? 2 : 0));
        return a
    };

    function Ub(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Vb(a, b, c, d, f) {
        var e = b >> 14 & 1023 || 536870912;
        if (c >= e || f && !za) {
            var g = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (d == null) return g;
                f = a[e + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            f[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && H(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Wb(a, b, c, d) {
        a = a.l;
        var f = G(a);
        a: {
            var e = a,
                g = f,
                k = c;
            if (k === -1) var h = null;
            else {
                var m = g >> 14 & 1023 || 536870912;
                if (k >= m) h = g & 256 ? e[e.length - 1][k] : void 0;
                else {
                    h = e.length;
                    if (d && g & 256 && (h = e[h - 1][k], h != null)) {
                        if (Ub(e, g, m, k) && Xa != null) {
                            var l;
                            e = (l = Sa) != null ? l : Sa = {};
                            l = e[Xa] || 0;
                            if (!(l >= 4))
                                if (e[Xa] = l + 1, l = Error(), l.__closure__error__context__984382 || (l.__closure__error__context__984382 = {}), l.__closure__error__context__984382.severity = "incident", Ta) {
                                    if (Ta) try {
                                        Ta(l)
                                    } catch (n) {
                                        throw n.cause = l, n;
                                    }
                                } else xa(l)
                        }
                        break a
                    }
                    h =
                        Ub(e, g, m, k)
                }
            }
        }
        l = h;
        g = !1;
        e = f;
        l != null && typeof l === "object" && bb(l) ? b = l : Array.isArray(l) ? (k = g = F(l), k === 0 && (k |= e & 32), k |= e & 2, k !== g && H(l, k), b = new b(l)) : g ? e & 2 ? (l = b[Wa]) ? b = l : (l = new b, e = l.l, Ya(e, 34), b = b[Wa] = l) : b = new b : b = void 0;
        (h = b !== h && b != null) && Vb(a, f, c, b, d);
        return b
    }
    var Xb = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            b = Wb(a, b, c, d);
            if (b == null) return b;
            a = a.l;
            var f = G(a);
            if (!(f & 2)) {
                var e = b;
                var g = e.l,
                    k = G(g);
                e = k & 2 ? Sb(e, g, k, !1) : e;
                e !== b && (b = e, Vb(a, f, c, b, d))
            }
            return b
        },
        Yb = function(a, b, c, d, f) {
            d == null && (d = void 0);
            b = a.l;
            var e = G(b);
            if (e & 2) throw Error();
            Vb(b, e, c, d, f);
            return a
        };

    function Zb(a) {
        return a
    };
    var $b = !1;
    if ($b && typeof Proxy !== "undefined") {
        var Q = ac;
        new Proxy({}, {
            getPrototypeOf: Q,
            setPrototypeOf: Q,
            isExtensible: Q,
            preventExtensions: Q,
            getOwnPropertyDescriptor: Q,
            defineProperty: Q,
            has: Q,
            get: Q,
            set: Q,
            deleteProperty: Q,
            apply: Q,
            construct: Q
        })
    }

    function ac() {
        throw Error();
    };
    var bc, cc, dc, ec = function(a, b, c) {
        a: {
            var d = c;a == null && (a = Kb);Kb = void 0;
            if (a == null) c = 96,
            d ? (a = [d], c |= 512) : a = [],
            b && (c = c & -16760833 | (b & 1023) << 14);
            else {
                if (!Array.isArray(a)) throw Error("narr");
                c = F(a);
                if (c & 2048) throw Error("farr");
                if (c & 64) break a;
                c |= 64;
                if (d && (c |= 512, d !== a[0])) throw Error("mid");
                b: {
                    var f = a;
                    if (d = f.length) {
                        var e = d - 1;
                        f = f[e];
                        if (eb(f)) {
                            c |= 256;
                            b = +!!(c & 512) - 1;
                            b = e - b;
                            if (b >= 1024) throw Error("pvtlmt");
                            c = c & -16760833 | (b & 1023) << 14;
                            break b
                        }
                    }
                    if (b) {
                        e = +!!(c & 512) - 1;
                        b = Math.max(b, d - e);
                        if (b > 1024) throw Error("spvt");
                        c = c & -16760833 | (b & 1023) << 14
                    }
                }
            }
            H(a, c)
        }
        this.l = a
    };
    p = ec.prototype;
    p.toJSON = function() {
        return fc(this)
    };
    p.getExtension = function(a) {
        var b = this;
        b = a.A ? a.aa ? a.D(b, a.A, a.B, void 0 === fb ? 2 : 4, !0) : a.D(b, a.A, a.B, !0) : a.aa ? a.D(b, a.B, void 0 === fb ? 2 : 4, !0) : a.D(b, a.B, a.defaultValue, !0);
        return a.Ka && b == null ? a.defaultValue : b
    };
    p.Da = function(a) {
        var b = this;
        a = a.A ? a.D(b, a.A, a.B, !0) : a.D(b, a.B, null, !0);
        return a === null ? void 0 : a
    };
    p.hasExtension = function(a) {
        if (a.A) {
            var b = this;
            var c = a.A;
            a = a.B;
            var d = !0;
            d = d === void 0 ? !1 : d;
            b = Wb(b, c, a, d) !== void 0
        } else b = this.Da(a) !== void 0;
        return b
    };
    p.clone = function() {
        var a = this,
            b = a.l;
        return a = Sb(a, b, G(b), !1)
    };
    p.Oa = ab;
    p.toString = function() {
        try {
            return cc = !0, fc(this).toString()
        } finally {
            cc = !1
        }
    };

    function fc(a) {
        var b = cc ? a.l : dc ? Ob(a.l, Pb, void 0, void 0, !1) : Ob(a.l, Qb, void 0, void 0, !1);
        var c = a;
        a = !cc;
        var d = G(a ? c.l : b);
        if (c = b.length) {
            var f = b[c - 1],
                e = eb(f);
            e ? c-- : f = void 0;
            var g = +!!(d & 512) - 1,
                k = c - g;
            d = !!bc && za && !(d & 512);
            var h, m = (h = bc) != null ? h : Zb;
            m = d ? m(k, g, b, f) : k;
            k = (h = d && k !== m) ? Array.prototype.slice.call(b, 0, c) : b;
            if (e || h) {
                b: {
                    var l = m;
                    var n = g;e = k;d = f;m = {};
                    var r = !1;
                    if (h)
                        for (var w = Math.max(0, l + n); w < e.length; w++) {
                            var q = e[w],
                                u = w - n;
                            q == null || I(q, void 0, u) || db(q) && q.size === 0 || (e[w] = void 0, m[u] = q, r = !0)
                        }
                    if (d)
                        for (var x in d)
                            if (w = +x, isNaN(w)) m[x] = d[x];
                            else if (q = d[x], Array.isArray(q) && (I(q, void 0, +x) || db(q) && q.size === 0) && (q = null), q == null && (r = !0), h && w < l) {
                        r = !0;
                        q = w + n;
                        for (u = e.length; u <= q; u++) e.push(void 0);
                        e[q] = d[w]
                    } else q != null && (m[x] = q);
                    if (r) {
                        for (var z in m) {
                            n = m;
                            break b
                        }
                        n = null
                    } else n = d
                }
                l = n == null ? f != null : n !== f
            }
            h && (c = k.length);
            for (; c > 0; c--) {
                z = c - 1;
                x = k[z];
                z -= g;
                if (!(x == null || I(x, void 0, z) || db(x) && x.size === 0)) break;
                var K = !0
            }
            if (k !== b || l || K) {
                if (!h && !a) k = Array.prototype.slice.call(k, 0, c);
                else if (K || l || n) k.length = c;
                n && k.push(n)
            }
            K = k
        } else K =
            b;
        return K
    };
    var gc = function(a, b, c, d, f, e, g, k, h, m, l, n) {
        n = n === void 0 ? !1 : n;
        this.B = a;
        this.A = c;
        this.aa = d;
        this.D = f;
        this.defaultValue = l;
        this.Ka = n
    };
    var hc = ec;
    var ic = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var jc = ic(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            B.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function kc(a) {
        return a ? a.passive && jc() ? a : a.capture || !1 : !1
    }
    var lc = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, kc(d)), !0) : !1
        },
        mc = function(a, b, c, d) {
            return a.removeEventListener ? (a.removeEventListener(b, c, kc(d)), !0) : !1
        };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    function R(a) {
        return {
            valueOf: a
        }.valueOf()
    };
    var nc;
    var S = {};
    var oc = function(a, b) {
        this.Va = b
    };
    oc.prototype.toString = function() {
        return this.Va
    };
    new oc(S, "about:blank");
    new oc(S, "about:invalid#zClosurez");
    var pc = R(function() {
            return typeof URL === "function"
        }),
        qc = ["data:", "http:", "https:", "mailto:", "ftp:"];
    var rc = function(a, b) {
        this.ca = b
    };
    rc.prototype.toString = function() {
        return this.ca + ""
    };

    function sc(a) {
        if (nc === void 0) {
            var b = null;
            var c = B.trustedTypes;
            if (c && c.createPolicy) try {
                b = c.createPolicy("goog#html", {
                    createHTML: wa,
                    createScript: wa,
                    createScriptURL: wa
                })
            } catch (d) {
                B.console && B.console.error(d.message)
            }
            nc = b
        }
        b = nc;
        return new rc(S, b ? b.createHTML(a) : a)
    }

    function tc(a) {
        if (a instanceof rc) return a.ca;
        a = "";
        throw Error(a);
    };
    var uc = function(a, b) {
        this.Ta = b
    };
    uc.prototype.toString = function() {
        return this.Ta
    };
    var vc = function(a, b) {
        this.Ua = b
    };
    vc.prototype.toString = function() {
        return this.Ua
    };
    new uc(S, "");
    new vc(S, "");

    function wc(a) {
        try {
            return new URL(a, window.document.baseURI)
        } catch (b) {
            return new URL("about:invalid")
        }
    };

    function xc(a, b) {
        var c = b.createRange();
        c.selectNode(b.body);
        a = sc(a);
        return c.createContextualFragment(tc(a))
    };

    function yc(a) {
        a = a.nodeName;
        return typeof a === "string" ? a : "FORM"
    }

    function zc(a) {
        a = a.nodeType;
        return a === 1 || typeof a !== "number"
    };
    var T = function(a, b, c, d, f) {
        this.ua = a;
        this.X = b;
        this.va = c;
        this.Ha = d;
        this.Y = f
    };
    T.prototype.Ja = function(a) {
        return a !== "FORM" && (this.ua.has(a) || this.X.has(a))
    };
    T.prototype.Ca = function(a, b) {
        b = this.X.get(b);
        var c;
        return ((c = b) == null ? 0 : c.has(a)) ? b.get(a) : this.va.has(a) ? {
            i: 1
        } : (c = this.Ha.get(a)) ? c : this.Y && [].concat(fa(this.Y)).some(function(d) {
            return a.indexOf(d) === 0
        }) ? {
            i: 1
        } : {
            i: 0
        }
    };
    var Ac = "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
        Bc = [
            ["A", new Map([
                ["href", {
                    i: 2
                }]
            ])],
            ["AREA", new Map([
                ["href", {
                    i: 2
                }]
            ])],
            ["LINK", new Map([
                ["href", {
                    i: 5,
                    conditions: new Map([
                        ["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]
                    ])
                }]
            ])],
            ["SOURCE", new Map([
                ["src", {
                    i: 5
                }],
                ["srcset", {
                    i: 6
                }]
            ])],
            ["IMG", new Map([
                ["src", {
                    i: 5
                }],
                ["srcset", {
                    i: 6
                }]
            ])],
            ["VIDEO", new Map([
                ["src", {
                    i: 5
                }]
            ])],
            ["AUDIO", new Map([
                ["src", {
                    i: 5
                }]
            ])]
        ],
        Cc = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
        Dc = [
            ["dir", {
                i: 3,
                conditions: R(function() {
                    return new Map([
                        ["dir", new Set(["auto", "ltr", "rtl"])]
                    ])
                })
            }],
            ["async", {
                i: 3,
                conditions: R(function() {
                    return new Map([
                        ["async", new Set(["async"])]
                    ])
                })
            }],
            ["cite", {
                i: 2
            }],
            ["loading", {
                i: 3,
                conditions: R(function() {
                    return new Map([
                        ["loading", new Set(["eager", "lazy"])]
                    ])
                })
            }],
            ["poster", {
                i: 2
            }],
            ["target", {
                i: 3,
                conditions: R(function() {
                    return new Map([
                        ["target", new Set(["_self", "_blank"])]
                    ])
                })
            }]
        ],
        Ec = new T(new Set(Ac), new Map(Bc), new Set(Cc), new Map(Dc)),
        Fc = new T(new Set(Ac.concat(["BUTTON",
            "INPUT"
        ])), new Map(Bc), new Set(R(function() {
            return Cc.concat(["class", "id", "name"])
        })), new Map(R(function() {
            return Dc.concat([
                ["style", {
                    i: 1
                }]
            ])
        }))),
        Gc = new T(new Set(R(function() {
            return Ac.concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "))
        })), new Map(Bc), new Set(R(function() {
            return Cc.concat(["class", "id", "tabindex", "contenteditable", "name"])
        })), new Map(R(function() {
            return Dc.concat([
                ["style", {
                    i: 1
                }]
            ])
        })), new Set(["data-", "aria-"]));
    var Hc = function(a, b, c, d, f) {
        this.ea = a;
        this.ha = c;
        this.ga = d;
        this.M = f
    };
    p = Hc.prototype;
    p.U = function(a) {
        return a = this.ab(a)
    };
    p.ab = function(a) {
        var b = document.implementation.createHTMLDocument("");
        a = this.eb(a, b);
        b = b.body;
        b.appendChild(a);
        b = (new XMLSerializer).serializeToString(b);
        b = b.slice(b.indexOf(">") + 1, b.lastIndexOf("</"));
        return b = sc(b)
    };
    p.eb = function(a, b) {
        var c = this;
        a = xc(a, b);
        a = document.createTreeWalker(a, 5, function(k) {
            return c.Qa(k)
        });
        for (var d = a.nextNode(), f = b.createDocumentFragment(), e = f; d !== null;) {
            var g = void 0;
            if (d.nodeType === 3) this.ha && e.nodeName === "STYLE" ? (d = this.ha(d.data), g = this.createTextNode(d)) : g = this.cb(d);
            else if (zc(d)) g = this.bb(d, b);
            else throw b = "", Error(b);
            e.appendChild(g);
            if (d = a.firstChild()) e = g;
            else
                for (; !(d = a.nextSibling()) && (d = a.parentNode());) e = e.parentNode
        }
        return f
    };
    p.createTextNode = function(a) {
        return document.createTextNode(a)
    };
    p.cb = function(a) {
        return this.createTextNode(a.data)
    };
    p.bb = function(a, b) {
        var c = yc(a);
        b = b.createElement(c);
        a = a.attributes;
        for (var d = v(a), f = d.next(); !f.done; f = d.next()) {
            var e = f = f.value;
            f = e.name;
            var g = e.value;
            e = this.ea.Ca(f, c);
            if (this.fb(e.conditions, a)) switch (e.i) {
                case 1:
                    U(b, f, g);
                    break;
                case 2:
                    a: if (e = void 0, pc) {
                        try {
                            e = new URL(g)
                        } catch (l) {
                            e = "https:";
                            break a
                        }
                        e = e.protocol
                    } else b: {
                        e = document.createElement("a");
                        try {
                            e.href = g
                        } catch (l) {
                            e = void 0;
                            break b
                        }
                        e = e.protocol;e = e === ":" || e === "" ? "https:" : e
                    }
                    e = e !== void 0 && qc.indexOf(e.toLowerCase()) !== -1 ? g : "about:invalid#zClosurez";
                    U(b, f, e);
                    break;
                case 3:
                    U(b, f, g.toLowerCase());
                    break;
                case 4:
                    this.ga ? (e = this.ga(g), U(b, f, e)) : U(b, f, g);
                    break;
                case 5:
                    if (this.M) {
                        e = {
                            type: 2,
                            attributeName: f,
                            Aa: c
                        };
                        var k = wc(g);
                        (e = this.M(k, e)) && U(b, f, e.toString())
                    } else U(b, f, g);
                    break;
                case 6:
                    if (this.M) {
                        e = {
                            type: 2,
                            attributeName: f,
                            Aa: c
                        };
                        k = [];
                        g = v(g.split(","));
                        for (var h = g.next(); !h.done; h = g.next()) {
                            h = h.value;
                            var m = v(h.trim().split(/\s+/, 2));
                            h = m.next().value;
                            m = m.next().value;
                            k.push({
                                url: h,
                                R: m
                            })
                        }
                        g = k = {
                            L: k
                        };
                        k = {
                            L: []
                        };
                        g = v(g.L);
                        for (h = g.next(); !h.done; h = g.next()) h = h.value,
                            m = wc(h.url), (m = this.M(m, e)) && k.L.push({
                                url: m.toString(),
                                R: h.R
                            });
                        U(b, f, Ic(k))
                    } else U(b, f, g)
            }
        }
        return b
    };
    p.Qa = function(a) {
        if (a.nodeType === 3) return 1;
        if (!zc(a)) return 2;
        a = yc(a);
        return a === null ? 2 : this.ea.Ja(a) ? 1 : 2
    };
    p.fb = function(a, b) {
        if (!a) return !0;
        a = v(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = v(c);
            c = d.next().value;
            d = d.next().value;
            var f = void 0;
            if ((c = (f = b.getNamedItem(c)) == null ? void 0 : f.value) && !d.has(c)) return !1
        }
        return !0
    };

    function U(a, b, c) {
        a.setAttribute(b, c)
    }

    function Ic(a) {
        return a.L.map(function(b) {
            var c = b;
            b = c.url;
            c = c.R;
            return "" + b + (c ? " " + c : "")
        }).join(" , ")
    }
    var Jc = R(function() {
            return new Hc(Ec, S)
        }),
        Kc = R(function() {
            return new Hc(Fc, S)
        }),
        Lc = R(function() {
            return new Hc(Gc, S)
        });
    var Mc = {
            0: 1,
            1: 1
        },
        Nc = {
            0: .1,
            1: .1
        };

    function Oc(a, b) {
        try {
            Lc.U(a)
        } catch (c) {
            return V(b, "H_SLSANITIZE"), !0
        }
        try {
            Kc.U(a)
        } catch (c) {
            return V(b, "H_RSANITIZE"), !0
        }
        try {
            Jc.U(a)
        } catch (c) {
            return V(b, "H_SANITIZE"), !0
        }
        return !1
    }

    function V(a, b, c) {
        var d = Pc ? Pc : typeof window !== "undefined" && window.navigator && window.navigator.sendBeacon !== void 0 ? navigator.sendBeacon.bind(navigator) : Qc;
        b = {
            host: window.location.hostname,
            type: b,
            additionalData: c
        };
        d("https://csp.withgoogle.com/csp/lcreport/" + a.da, JSON.stringify(b))
    }

    function Qc(a, b) {
        var c = new XMLHttpRequest;
        c.open("POST", a);
        c.setRequestHeader("Content-Type", "application/json");
        c.send(b)
    }
    var Pc;

    function Rc(a, b) {
        if (a.nodeType === 1) {
            var c = "",
                d = a.tagName;
            if (d === "SCRIPT" || d === "STYLE") throw Error(c);
        }
        a.innerHTML = tc(b)
    };
    var Sc = function(a, b) {
        return typeof b === "string" ? a.getElementById(b) : b
    };
    var Tc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Uc = function(a, b) {
            b = b === void 0 ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    var Wc = function(a, b, c, d, f) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? !1 : d;
        f = f === void 0 ? !1 : f;
        return Vc(a, b, c, !1, d, f)
    };

    function Vc(a, b, c, d, f, e) {
        e = e === void 0 ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var g = Uc("IMG", a.document);
        if (c || f) {
            var k = function(h) {
                c && c(h);
                if (f) {
                    h = a.google_image_requests;
                    var m = Ha(h, g);
                    m >= 0 && Array.prototype.splice.call(h, m, 1)
                }
                mc(g, "load", k);
                mc(g, "error", k)
            };
            lc(g, "load", k);
            lc(g, "error", k)
        }
        d && (g.referrerPolicy = "no-referrer");
        e && (g.attributionSrc = "");
        g.src = b;
        a.google_image_requests.push(g);
        return g
    }

    function Xc(a, b, c) {
        c = c === void 0 ? !1 : c;
        var d;
        if (d = a.navigator) d = a.navigator.userAgent, d = /Chrome/.test(d) && !/Edge/.test(d) ? !0 : !1;
        d && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : Wc(a, b, void 0, c)
    };
    var Yc = document,
        X = window;
    var Zc = null;

    function $c(a) {
        a = a === void 0 ? B : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function ad(a) {
        a = a === void 0 ? B : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var bd = function(a, b, c, d, f, e) {
        d = d === void 0 ? 0 : d;
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = d;
        this.slotId = f;
        this.taskId = e;
        this.uniqueId = Math.random()
    };
    var Y = B.performance,
        cd = !!(Y && Y.mark && Y.measure && Y.clearMarks),
        dd = ic(function() {
            var a;
            if (a = cd) {
                var b;
                if (Zc === null) {
                    Zc = "";
                    try {
                        a = "";
                        try {
                            a = B.top.location.hash
                        } catch (c) {
                            a = B.location.hash
                        }
                        a && (Zc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Zc;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        }),
        ed = function(a, b) {
            this.C = [];
            this.Ia = b || B;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.C = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.H = dd() || (c != null ? c : Math.random() <
                a)
        };
    ed.prototype.disable = function() {
        this.H = !1;
        this.C != this.Ia.google_js_reporting_queue && (dd() && Ia(this.C, fd), this.C.length = 0)
    };
    ed.prototype.Ya = function(a) {
        !this.H || this.C.length > 2048 || this.C.push(a)
    };
    var fd = function(a) {
        a && Y && dd() && (Y.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Y.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    ed.prototype.start = function(a, b) {
        if (!this.H) return null;
        var c = ad() || $c();
        a = new bd(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Y && dd() && Y.mark(b);
        return a
    };
    ed.prototype.end = function(a) {
        if (this.H && typeof a.value === "number") {
            var b = ad() || $c();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Y && dd() && Y.mark(b);
            this.Ya(a)
        }
    };
    var Z = function(a, b) {
            a = a === void 0 ? 4E3 : a;
            b = b === void 0 ? "&" : b;
            this.Ma = a;
            this.T = b;
            this.P = {};
            this.Pa = 0;
            this.K = []
        },
        hd = function(a, b, c, d, f) {
            var e = [];
            Tc(a, function(g, k) {
                (g = gd(g, b, c, d, f)) && e.push(k + "=" + g)
            });
            return e.join(b)
        },
        gd = function(a, b, c, d, f) {
            if (a == null) return "";
            b = b || "&";
            c = c || ",$";
            typeof c == "string" && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var e = [], g = 0; g < a.length; g++) e.push(gd(a[g], b, c, d + 1, f));
                    return e.join(c[d])
                }
            } else if (typeof a == "object") return f = f || 0, f < 2 ? encodeURIComponent(hd(a,
                b, c, d, f + 1)) : "...";
            return encodeURIComponent(String(a))
        };
    Z.prototype.sa = function(a, b) {
        this.K.push(a);
        this.P[a] = b
    };
    Z.prototype.ra = function(a, b) {
        var c = this.Pa++,
            d = {};
        d[a] = b;
        a = [d];
        this.sa(c, a)
    };
    Z.prototype.Ga = function(a, b, c) {
        a = a + "//" + b + c;
        var d = this.Ea() - c.length;
        if (d < 0) return "";
        this.K.sort(function(m, l) {
            return m - l
        });
        c = null;
        b = "";
        for (var f = 0; f < this.K.length; f++)
            for (var e = this.K[f], g = this.P[e], k = 0; k < g.length; k++) {
                if (!d) {
                    c = c == null ? e : c;
                    break
                }
                var h = hd(g[k], this.T, ",$");
                if (h) {
                    h = b + h;
                    if (d >= h.length) {
                        d -= h.length;
                        a += h;
                        b = this.T;
                        break
                    }
                    c = c == null ? e : c
                }
            }
        d = "";
        c != null && (d = b + "trn=" + c);
        return a + d
    };
    Z.prototype.Ea = function() {
        var a = 1,
            b;
        for (b in this.P) a = b.length > a ? b.length : a;
        return this.Ma - 3 - a - this.T.length - 1
    };
    var id = function(a) {
        hc.call(this, a)
    };
    ra(id, hc);
    var jd = function(a) {
        hc.call(this, a, 1)
    };
    ra(jd, hc);
    var kd, ld = {},
        md = kd = ld;
    var nd = new gc(4156379, jd, id, 0, Xb, void 0, void 0, Yb, void 0, void 0, void 0);
    md[4156379] = {
        ob: nd
    };
    var od = function() {};
    var pd = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        this.za = a;
        this.Sa = b;
        this.ya = c;
        this.ta = d;
        this.Wa = "https:";
        this.fa = Math.random()
    };
    pd.prototype.gb = function(a) {
        a >= 0 && a <= 1 && (this.fa = a)
    };
    pd.prototype.Na = function(a, b, c, d, f) {
        c = c === void 0 ? !1 : c;
        if (this.hb(c, d)) try {
            if (b instanceof Z) var e = b;
            else e = new Z, Tc(b, function(k, h) {
                e.ra(h, k)
            });
            var g = e.Ga(this.Wa, this.za, this.Sa + a + "&");
            g && (typeof f !== "undefined" ? Wc(B, g, f) : this.ta ? Xc(B, g) : Wc(B, g))
        } catch (k) {}
    };
    pd.prototype.hb = function(a, b) {
        b = b || this.ya;
        a = a ? this.fa : Math.random();
        return a < b
    };
    var qd, rd = new ed(1, window),
        sd = function(a) {
            var b = window;
            a != null && (b.google_measure_js_timing = a);
            b.google_measure_js_timing || rd.disable()
        },
        td = function(a) {
            var b;
            qd = (b = a) != null ? b : new pd("pagead2.googlesyndication.com", "/pagead/gen_204?id=", .01);
            typeof window.google_srt !== "number" && (window.google_srt = Math.random());
            qd.gb(window.google_srt);
            window.document.readyState == "complete" ? sd() : rd.H && lc(window, "load", function() {
                sd()
            })
        };
    td();

    function ud(a, b) {
        a = a === null ? "null" : a === void 0 ? "undefined" : a;
        var c;
        if (c = b) {
            var d, f;
            c = Math.random() < ((f = (d = b.sb) != null ? d : Mc[b.da[0]]) != null ? f : 0)
        }
        if (c && window.SAFEVALUES_REPORTING !== !1 && "DocumentFragment" in window) {
            var e, g;
            Math.random() < ((g = (e = b.mb) != null ? e : Nc[b.da[0]]) != null ? g : 0) && V(b, "HEARTBEAT");
            d = Oc(a, b);
            d || (d = a, e = d, f = void 0, f = f === void 0 ? {} : f, e instanceof rc ? f = e : (e = String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"), f.qb && (e = e.replace(/(^|[\r\n\t ]) /g,
                "$1&#160;")), f.pb && (e = e.replace(/(\r\n|\n|\r)/g, "<br>")), f.rb && (e = e.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')), f = sc(e)), f.toString() !== d && V(b, "H_ESCAPE"))
        }
        return sc(a)
    };
    var vd = function(a, b) {
        b = b === void 0 ? null : b;
        this.s = null;
        this.ba = !1;
        this.G = null;
        this.ia = b || "gam";
        this.ka = a + "_" + this.ia
    };
    p = vd.prototype;
    p.Fa = function() {
        var a = (new Date).valueOf();
        this.G == null && (X.gdbg_offset ? this.G = X.gdbg_offset : (this.G = a, X.gdbg_offset = this.G));
        return a - this.G
    };
    p.Ba = function(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    };
    p.xa = function() {
        if (this.s == null && !this.ba)
            if (this.s = X.open("", "GoogleDebug_" + this.ka, "width=1100, height=600, status=no,resizable=yes, scrollbars=yes")) {
                var a = "Google Ad Manager Debug Output";
                this.ia != "gam" && (a = "Google Debug Output");
                var b = this.s.document,
                    c = "";
                c += "<html>";
                c += "<head><title>" + a + "</title><style>";
                c += "h2 {font-size: 1em;margin: 0 0 0.5em 0;color: #353C43}";
                c += "th {background: #e5e5e5;font-weight: normal;color: #444444;";
                c += "text-align: left;}";
                c += "td {border-bottom: 1px solid #dddddd}";
                c += "tbody tr:hover {background: #ffffcc}";
                c += ".dn {display: none;} .lightText {color: #a0a0a0;}";
                c += "</style>";
                c += "</head>";
                c += "<body><h2>" + a + "</h2><br/>";
                c += 'Page URL: <span id="pageUrl"></span><br/><br/>';
                c += '<form action="" method="post">';
                c += '<table id="google_slot_table" width="100%" class="dn" ';
                c += 'cellspacing="0">';
                c += "<thead><tr><th>&nbsp;";
                c += '<span id="numSlots">0</span> slots on page</th>';
                c += "<th>&nbsp;</th>";
                c += "<th>&nbsp;</th>";
                c += "</tr><tr>";
                c += "<th>&nbsp;&nbsp;Ad Slot Name</th>";
                c += "<th>Ad Request URL</th>";
                c += "<th>Delivery Analysis ";
                c += '<span class="lightText">(login required)</span></th>';
                c += "</tr></thead>";
                c += "<tbody>";
                c += '<tr class="dn"><td></td>';
                c += "<td></td></tr>";
                c += "</tbody></table><br/>";
                c += '<table id="google_msg_table" width="100%" cellspacing="0">';
                c += "<thead><tr><th>Offset (msec)</th><th>Type</th>";
                c += "<th>Message</th></tr></thead>";
                c += '<tbody id="google_msg_body">';
                c += '<tr class="dn"><td></td><td></td><td></td></tr>';
                c += "</tbody></table></form></body></html>";
                a = b;
                c = ud(c);
                a.write(tc(c));
                b.getElementById("pageUrl").textContent = Yc.URL;
                b.close();
                b.getElementById("google_slot_table")
            } else this.ba = !0
    };
    p.S = function(a, b) {
        return '<font color="' + wd[a] + '">' + b + "</font>"
    };
    p.jb = function(a, b, c) {
        var d = this.s;
        if (d)
            if (d = this.s.document.getElementById("google_msg_table"), d != null) {
                d = d.insertRow(-1);
                var f = d.insertCell(0);
                Rc(f, ud(this.S(a, "" + this.Fa())));
                f = d.insertCell(1);
                Rc(f, ud(this.S(a, a + "&nbsp;&nbsp;")));
                d = d.insertCell(2);
                c || (b = this.Ba(b));
                Rc(d, ud(this.S(a, b)))
            } else alert("fails to add to console: " + a + ", " + b)
    };
    p.qa = function() {
        if (this.s == null) {
            var a = "gdbg_console_" + this.ka;
            X[a] ? this.s = X[a] : (this.xa(), X[a] = this.s)
        }
    };
    p.ib = function(a) {
        this.jb("Error", a, !1)
    };
    var wd = {
        Information: "black",
        Warning: "orange",
        Error: "red",
        Internal: "green"
    };
    var xd = null;

    function yd(a) {
        if (!xd) {
            var b = "showcompanionads",
                c = void 0;
            c = c === void 0 ? null : c;
            b = b || "default";
            var d = c || "gam";
            c = "gdbg_logger_" + b + "_" + d;
            if (!X[c]) {
                X[c] = new vd(b, d);
                b = Yc.URL;
                if (d = !!b) {
                    a: {
                        if (b) {
                            d = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                            try {
                                var f = d.exec(decodeURIComponent(b));
                                if (f) {
                                    var e = f[1] && f[1].length > 1 ? f[1].substring(1) : "true";
                                    break a
                                }
                            } catch (g) {}
                        }
                        e = ""
                    }
                    d = e.length > 0
                }(e = d) && X[c].qa()
            }
            xd = X[c]
        }
        xd.ib(a)
    }
    var zd = function() {
            var a = [],
                b = document.getElementsByTagName("base");
            if (b)
                for (var c = b.length, d = 0; d < c; ++d) {
                    var f = b[d],
                        e = f.getAttribute("target");
                    e && (a.push({
                        wa: f,
                        Ra: e
                    }), f.removeAttribute("target"))
                }
            return a
        },
        Ad = function(a) {
            if (a)
                for (var b = a.length, c = 0; c < b; ++c) {
                    var d = a[c];
                    d.wa.setAttribute("target", d.Ra)
                }
        };

    function Bd() {
        return !0
    }

    function Cd() {
        var a = [],
            b = Dd();
        if (b && (b = b.getSlots())) {
            b = v(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = {};
                if (d) {
                    c.slotId = d.getSlotId().getId();
                    c.adType = d.get("ad_type");
                    d = d.getSizes();
                    var f = [];
                    if (d && Array.isArray(d))
                        for (var e = 0, g = d.length; e < g; e++) {
                            var k = {};
                            typeof d[e] !== "string" && (k.adWidth = d[e].getWidth(), k.adHeight = d[e].getHeight(), f.push(k))
                        }
                    d = f;
                    c.adSizes = d
                }
                a.push(c)
            }
        }
        return a
    }

    function Ed(a, b, c) {
        b = {
            method: "gscac",
            caller: c
        };
        var d = od;
        c = d;
        var f = "Z";
        c.Z && c.hasOwnProperty(f) || (d = new d, c.Z = d);
        c = [];
        !b.eid && c.length && (b.eid = c.toString());
        qd.Na("gpt_sca", b, !0, .001, void 0);
        if ((b = Dd()) && a && Array.isArray(a) && (c = b.getSlotIdMap()))
            for (d = 0, f = a.length; d < f; d++) {
                var e = a[d],
                    g = e.slotId;
                if (g in c) {
                    g = c[g];
                    var k = (k = Dd()) && k.isSlotAPersistentRoadblock != null ? k.isSlotAPersistentRoadblock(g) : !1;
                    if (!k && e.adContent) {
                        k = g.getSlotId().getDomId();
                        if (k = Sc(document, k)) k.style.display = "";
                        if (e.friendlyIframeRendering) {
                            var h =
                                g;
                            k = e.adContent;
                            var m = e.adWidth,
                                l = e.adHeight,
                                n = h.getSlotId().getDomId(),
                                r = Sc(document, n);
                            if (r) {
                                if (n = Sc(document, n)) n.textContent = "";
                                n = "google_companion_" + h.getSlotId().getId();
                                m = m ? m : h.getSizes()[0].getWidth();
                                h = l ? l : h.getSizes()[0].getHeight();
                                l = document;
                                l = l.createElement("iframe");
                                l.id = n;
                                l.name = n;
                                m != null && h != null && (l.width = String(m), l.height = String(h));
                                l.vspace = "0";
                                l.hspace = "0";
                                l.allowTransparency = "true";
                                l.scrolling = "no";
                                l.marginWidth = "0";
                                l.marginHeight = "0";
                                l.frameBorder = "0";
                                l.style.border = "0";
                                l.style.verticalAlign =
                                    "bottom";
                                l.src = "about:blank";
                                r.appendChild(l);
                                h = l;
                                if (Ja) {
                                    try {
                                        var w = !!h.contentWindow.document
                                    } catch (z) {
                                        w = !1
                                    }
                                    if (w) {
                                        l = zd();
                                        try {
                                            window.frames[h.name].contents = k, h.src = 'javascript:window["contents"]'
                                        } catch (z) {
                                            yd("Could not write third party content into IE iframe: " + z.message)
                                        } finally {
                                            Ad(l)
                                        }
                                    } else {
                                        l = zd();
                                        r = "google-ad-content-" + (Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36));
                                        try {
                                            window[r] = k;
                                            var q = 'document.domain = "' + document.domain +
                                                '";var adContent = window.parent["' + (r + '"];window.parent["') + (r + '"] = null;document.write(adContent);document.close();');
                                            h.src = 'javascript:\'<script type="text/javascript">' + q + "\x3c/script>'"
                                        } catch (z) {
                                            window[r] = null, yd("Could not write third party content into IE iframe with modified document.domain: " + z.message)
                                        } finally {
                                            Ad(l)
                                        }
                                    }
                                } else try {
                                    var u = h.contentWindow ? h.contentWindow.document : h.contentDocument;
                                    Na && u.open("text/html", "replace");
                                    h = u;
                                    var x = ud(k);
                                    h.write(tc(x));
                                    u.close()
                                } catch (z) {
                                    yd("Could not write content into iframe using the DOM standards method. " +
                                        z.message)
                                }
                            }
                            b.slotRenderEnded(g, e.adWidth, e.adHeight)
                        }
                        if (e.onAdContentSet != null) e.onAdContentSet(Sc(document, g.getSlotId().getDomId()))
                    }
                }
            }
    }

    function Dd() {
        if (typeof googletag != "undefined" && googletag && typeof googletag.companionAds == "function") {
            var a = googletag.companionAds();
            return a
        }
        return null
    }

    function Fd(a) {
        a && (a += "&label=elementview&value=0", Wc(X, a))
    }
    ua("googleCompanionsServicePresent", Bd, !0, void 0);
    ua("googleGetCompanionAdSlots", Cd, !0, void 0);
    ua("googleSetCompanionAdContents", Ed, !0, void 0);
    ua("google_companion_error", Fd, !0, void 0);
    var Gd = Dd();
    if (Gd && Gd.onImplementationLoaded) Gd.onImplementationLoaded();
}).call(this);