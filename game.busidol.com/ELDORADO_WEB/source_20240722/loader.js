"use strict";
(function() {
    function e(n) {
        var t = [].concat(r),
            i = 0,
            u;
        t.forEach(function(r, f) {
            var e = document.createElement("script");
            e.async = !1;
            e.type = "text/javascript";
            e.language = "javascript";
            e.src = r;
            e.onload = function() {
                i++;
                u = i / t.length;
                n && n.call(this, 1, this.src, u)
            };
            e.onerror = function() {
                n && n.call(this, 0, this.src)
            };
            document.body.appendChild(e);
            t[f] = e
        })
    }

    function o() {
        var t = {},
            n, i;
        t.VERSION_DATE = "";
        t.SITE_CODE = "";
        t.NETWORK = "";
        n = new XMLHttpRequest;
        n.timeout = 15e3;
        n.ontimeout = function() {
            u(n.status)
        };
        n.onreadystatechange = function() {
            n.readyState == XMLHttpRequest.DONE && (n.status == 200 ? (console.log("[configs] getJsFileAjax  response :" + n.responseText), r = n.responseText.split("|"), e(s.bind(this))) : u(n.statusText))
        };
        n.open("POST", "https://game.busidol.com/ELDORADO_WEB/get_app_file.php", !0);
        n.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
        i = h(t);
        n.send(i)
    }

    function s(n, t, i) {
        i == 1 && (f(), temporary_run(), Main.onLoad());
        c(Math.round(i * 100))
    }

    function u() {
        var i = 1,
            e = 364 * i,
            o = 395 / 2 * i,
            t = n.createElement("div"),
            r, u;
        t.setAttribute("class", "network_error_bg");
        t.style.left = e * i + "px";
        t.style.top = o * i + "px";
        t.style.transform = "scale(" + i + "," + i + ")";
        n.body.appendChild(t);
        r = n.createElement("div");
        r.setAttribute("class", "network_error_title");
        t.appendChild(r);
        r.innerHTML = "서비스 이용 장애 안내";
        u = n.createElement("div");
        u.setAttribute("class", "network_error_text");
        t.appendChild(u);
        u.innerHTML = "접속상태가 원활하지 않습니다.<br>잠시 후 다시 접속해 주십시오.<br>자동으로 앱이 종료됩니다.";
        setTimeout(function() {
            window.loaction.replace()
        }, 3e3);
        f()
    }

    function h(n) {
        var t = "";
        for (var i in n) t += i + "=" + n[i] + "&";
        return t.slice(0, -1), t
    }

    function t() {
        var r = window.innerHeight,
            i = document.getElementById("loader_temp_spinner"),
            t = document.getElementById("loader_temp_spinner_text");
        i ? (i.style.top = (r - 200) / 2 + "px", t.style.top = (r + 300) / 2 + "px") : (i = document.createElement("DIV"), i.setAttribute("id", "loader_temp_spinner"), i.className = "loader1", i.style.top = (r - 200) / 2 + "px", t = document.createElement("DIV"), t.setAttribute("id", "loader_temp_spinner_text"), t.style.position = "absolute", t.style.width = "100%", t.style.color = "#ffffff", t.style.fontSize = "15px", t.style.textAlign = "center", t.style.left = "0px", t.style.top = (r + 300) / 2 + "px", n.body.appendChild(t), n.body.appendChild(i));
        a()
    }

    function c(n) {
        var t = document.getElementById("loader_temp_spinner_text");
        t && (t.innerHTML = "Loading " + n + "%")
    }

    function f() {
        var r = document.getElementById("loader_temp_spinner"),
            i;
        n.body.removeChild(r);
        i = document.getElementById("loader_temp_spinner_text");
        n.body.removeChild(i);
        window.removeEventListener("orientationchange", t);
        window.removeEventListener("resize", t)
    }

    function l() {
        window.addEventListener("orientationchange", t);
        window.addEventListener("resize", t)
    }

    function a() {
        var b = v(),
            e = y(),
            k = parseInt($("#AD_BOX_LEFT").css("height")),
            o = parseInt($("#GAME_BOX").css("width")),
            n, l, s, w, p, u, f;
        if ($("#AD_FIT_BG").attr({
                width: b,
                height: e
            }), k == 0 && i() != "Samsung") {
            var s = parseInt($("#AD_BOX_RIGHT").css("width")),
                c = parseInt($(".kakao_ad_area").css("width")),
                a = parseInt($(".kakao_ad_area").css("height")),
                h = (s - c) / 2;
            h < 0 && (h = 0);
            n = (e - a) / 2;
            n < 0 && (n = 0);
            $("#ad-block-right").css({
                "padding-left": h + "px",
                "padding-top": n + "px"
            });
            var d = o / 1280,
                t = o * 720 / 1280,
                r = (e - t) / 2,
                p = (t + r * 2) / 720;
            r < 0 && (r = 0);
            l = 10;
            i() == "Samsung" && (r = 0)
        } else {
            i() == "Samsung" && (o = document.body.clientWidth);
            var s = parseInt($("#AD_BOX_LEFT").css("width")),
                c = parseInt($(".kakao_ad_area").css("width")),
                a = parseInt($(".kakao_ad_area").css("height")),
                h = (s - c + 15) / 2,
                n = (e - a) / 2;
            n < 0 && (n = 0);
            $("#ad-block-left").css({
                "padding-left": h + "px",
                "padding-top": n + "px"
            });
            s = parseInt($("#AD_BOX_RIGHT").css("width"));
            w = (s - c - 15) / 2;
            $("#ad-block-right").css({
                "padding-left": w + "px",
                "padding-top": n + "px"
            });
            var d = o / 1280,
                t = o * 720 / 1280,
                l = 0,
                r = (e - t) / 2;
            i() == "Samsung" && (t = t - 90, l = 15, r = 0);
            p = t / 720
        }
        u = "0% 0%";
        f = "scale(" + d + "," + p + ")";
        $("#div_body").css({
            left: l + "px",
            top: r + "px",
            transform: f,
            "-ms-transform": f,
            "-webkit-transform": f,
            "-o-transform": f,
            "-moz-transform": f,
            "transform-origin": u,
            "-ms-transform-origin": u,
            "-webkit-transform-origin": u,
            "-o-transform-origin": u,
            "-moz-transform-origin": u
        })
    }

    function v() {
        return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body ? document.body.clientWidth : void 0
    }

    function y() {
        return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body ? document.body.clientHeight : void 0
    }

    function i() {
        var n = navigator.userAgent.toLowerCase(),
            i = navigator.appName,
            t;
        return i === "Microsoft Internet Explorer" || n.indexOf("trident") > -1 || n.indexOf("edge/") > -1 ? (t = "ie", i === "Microsoft Internet Explorer" ? (n = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(n), t += parseInt(n[1])) : n.indexOf("trident") > -1 ? t += 11 : n.indexOf("edge/") > -1 && (t = "edge")) : n.indexOf("safari") > -1 ? t = n.indexOf("opr") > -1 ? "Opera" : n.indexOf("chrome") > -1 || n.indexOf("cr") > -1 ? n.indexOf("samsung") > -1 ? "Samsung" : "Chrome" : n.indexOf("firefox") > -1 || n.indexOf("fx") > -1 ? "Firefox" : n.indexOf("samsung") > -1 ? "Samsung" : "Safari" : n.indexOf("naver") && (t = "naver"), t
    }
    var r = [],
        n = document;
    window.onload = function() {
        t();
        l();
        o()
    }
})()