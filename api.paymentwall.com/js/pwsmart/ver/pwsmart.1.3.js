/* Paymentwall Smart TV JavaScript SDK (version 1.3.0) */
function pwImportGoogleAnalytics(a) {
    a = a && a.length > 0 ? a : PW_GA_ID;
    var b = new Function("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','_pwSmartTracker');; _pwSmartTracker('create', '" + a + "', 'auto');");
    b()
}

function pwTrackEvent(a, b, c, d) {
    a = a || "", b = b || "", c = c || '{"UID":"' + (PWSmartGateway && PWSmartGateway._userId ? PWSmartGateway._userId : "") + '"}';
    var e = new Function("try {_pwSmartTracker('send', 'event', '" + a + "', '" + b + "', '" + c + "');} catch(e) {}");
    e()
}

function pwTrackException(a) {
    var b = a.message || a;
    try {
        _pwSmartTracker("send", "exception", {
            exDescription: b,
            exFatal: !0
        })
    } catch (c) {}
}

function pwImportJS(a, b) {
    var c = document.createElement("script");
    c.type = "text/javascript", a = a || this, a.document.getElementsByTagName("head")[0].appendChild(c), c.onload = function() {
        try {
            PWSmartGatewayOnLoadedCallback()
        } catch (a) {}
    }, c.src = b + "?ts=" + (new Date).getTime()
}

function pwImportCSS(a, b) {
    var c = document.createElement("link");
    c.rel = "stylesheet", c.type = "text/css", c.href = b + "?ts=" + (new Date).getTime(), a = a || this, a.document.getElementsByTagName("head")[0].appendChild(c)
}

function pwSmartHubPlatform() {
    return userAgent.search(/SmartHub/i) >= 0 && userAgent.search(/SMART-TV/i) >= 0
}

function pwNetCastPlatform() {
    return userAgent.search(/NetCast|Web0S|WebOS/i) >= 0
}

function pwSmartTvAPlatform() {
    return !pwSmartHubPlatform() && !pwNetCastPlatform() && !pwDesktopPlatform()
}

function pwDesktopPlatform() {
    return !!window.PWTestMode
}

function pwSmartGetPlatform() {
    return pwSmartHubPlatform() ? PLATFORM_SMART_HUB : pwNetCastPlatform() ? PLATFORM_LG : pwSmartTvAPlatform() ? PLATFORM_SMART_TV_A : pwDesktopPlatform() ? PLATFORM_HTML5 : void 0
}

function pwSmartGetPlatformRelatedJsPath() {
    return PW_BASE_URL + "src/platforms/" + pwSmartGetPlatform() + ".js"
}

function pwSmartScriptsInit() {
    pwSmartTvAPlatform() || pwImportCSS(window, PW_BASE_URL + "ver/pwsmart_animation.1.1.css"), pwImportCSS(window, PW_BASE_URL + "ver/1.2/pwsmart.css"), pwImportJS(window, pwSmartGetPlatformRelatedJsPath())
}
var PW_BASE_HOST = "https://api.paymentwall.com",
    PW_BASE_URL = PW_BASE_HOST + "/js/pwsmart/",
    PW_GA_ID = "UA-16073820-6",
    PLATFORM_SMART_HUB = "SmartHub",
    PLATFORM_HTML5 = "html5",
    PLATFORM_LG = "NetCast",
    PLATFORM_SMART_TV_A = "SmartTvA",
    userAgent = window.navigator.userAgent;
pwSmartScriptsInit();
var PWSmartGateway = {
    PW_VERSION: 1,
    SAVED_CC_MODE_ACTIVE: 1,
    RECOVER_MY_PAYMENT_ID_LENGTH: 18,
    OPTION_PREPAID: "option_prepaid",
    OPTION_MOBILE: "option_mobile",
    OPTION_LOCAL: "option_local",
    OPTION_CHECKBOX: "option_checkbox",
    INPUT_REMOTE: "input_remote",
    INPUT_LINK: "input_link",
    INPUT_QR: "input_qr",
    INPUT_RECOVER_PAYMENT: "input_recover_payment",
    STATE_CHOOSE_INPUT: "choose_input",
    STATE_PAY_BY_LINK: "paybylink",
    STATE_PAY_BY_PW_LOCAL: "pay_by_pwlocal",
    STATE_TRANSACTION_COMPLETED: "transaction_completed",
    STATE_PAY_BY_QR: "pay_by_qr",
    STATE_PAY_BY_MINT: "pay_by_mint",
    STATE_PAY_BY_MOBIAMO: "pay_by_mobiamo",
    STATE_CC_MAIN_WINDOW: "cc_main_window",
    STATE_SAVED_CC_WINDOW: "saved_cc_window",
    STATE_PAID_BEFORE_WINDOW: "paid_before_window",
    STATE_CANCEL_SUBSCRIPTION_WINDOW: "cancel_subscription_window",
    CC_NUMBER: "card_number",
    CC_EXP_MONTH: "card_exp_month",
    CC_EXP_YEAR: "card_exp_year",
    CC_CVV: "card_cvv",
    CC_PAY_BUTTON: "pay_cc_button",
    SUCCESS_BUTTON: "success_button",
    BACK_BUTTON: "pw_back_button",
    ALREADY_PAID_BEFORE_BUTTON: "pw_paid_before_button",
    RECOVER_PAYMENT_CONTINUE_BUTTON: "pw_recover_payment_continue_button",
    SAVED_CC_ADD_NEW_BUTTON: "saved_cc_add_new_button",
    SAVED_CC_PAY_NOW_BUTTON: "saved_cc_pay_now_button",
    SUBSCRIPTION_KEEP: "keep_subscription_btn",
    SUBSCRIPTION_CANCEL: "cancel_subscription_btn",
    MINT_FIRST_INPUT: "mint_first",
    MINT_SECOND_INPUT: "mint_second",
    MINT_THIRD_INPUT: "mint_third",
    MINT_FOURTH_INPUT: "mint_fourth",
    MINT_PAY_BUTTON: "mint_pay",
    MOBIAMO_PIN: "mobiamo_pin",
    MOBIAMO_PAY_BUTTON: "pay_button",
    SMART_TV_BASE_URL: PW_BASE_HOST,
    languageCodeByDefault: "en",
    mobiamoChosen: !1,
    prepaidChosen: !1,
    ERROR_CODE_USER_EXITS_PAYMENT_PROCESS: 1e3,
    ERROR_CODE_NO_PRODUCTS_FOUND: 1001,
    _errorsMap: {
        1e3: "User cancelled payment process",
        1001: "Product is not found"
    },
    _appKey: "",
    _state: "",
    _focusedElement: null,
    _selectedPaymentMethod: "",
    _selectedStateMethod: "",
    _containerId: "",
    _googleAnalyticsWebPropertyId: "",
    _options: [],
    _interval: null,
    _initStarted: !1,
    _transactionCompleted: !1,
    _defaultEmptyFields: 0,
    _translations: {},
    getAppKey: function() {
        return this._appKey
    },
    init: function(a) {
        a && a.key && (this._appKey = a.key), a && a.countryCode && (this._countryCode = a.countryCode), a && a.lang && (this._language = a.lang), a && a.containerId && (this._containerId = a.containerId), a && a.gaWebPropertyId && (this._googleAnalyticsWebPropertyId = a.gaWebPropertyId), this._widget = a.widget || "tv", 0 !== this._googleAnalyticsWebPropertyId && this._googleAnalyticsWebPropertyId !== !1 && pwImportGoogleAnalytics(this._googleAnalyticsWebPropertyId)
    },
    showPaymentForm: function(a, b, c) {
        var d = this;
        this._initStarted || (this._transactionCompleted && (this.onClose(), this._transactionCompleted = !1), this._successCallback = b, this._failureCallback = c, this._wsKey = "", this._shortKey = "", this._savedCard = 0, this._lastFour = "", this._token = "", PWSmartPlatform.replaceEventHandler(), this.showPreloadScreeAnimation(), a && (this._userId = a.userId && a.userId.length > 0 ? a.userId : PWSmartPlatform.generateUserId(), this._backButton = !0, this._recoverMyPaymentFlow = a.enablePaymentRecoverFlow ? a.enablePaymentRecoverFlow : !1, this._hidePaymentMethods = a.hidePaymentMethods ? a.hidePaymentMethods : !1, this._titles = a.titles, a.onExit && "function" == typeof a.onExit && (this._onExitCallback = a.onExit), this.setTranslations(), !a.productId || a.amount && a.currency ? (this.setDefaults(a), this.initSession(), this._initStarted = !0) : this.getProductDetails({
            productId: a.productId
        }, function(a) {
            d._productName = a.name, d._productId = a.id, d._amount = a.amount, d._currency = a.currency, a.period_length && (d._period = a.period_type, d._duration = a.period_length), d.initSession(), d._initStarted = !0
        }, function() {
            d._failureCallback(d.prepareErrorResponse(d.ERROR_CODE_NO_PRODUCTS_FOUND))
        })))
    },
    checkPaymentStatus: function(a, b, c) {
        try {
            var d = this.SMART_TV_BASE_URL + "/api/rest/payment",
                e = "key=" + this.getAppKey();
            e += a.ref ? "&ref=" + a.ref : "&uid=" + (a.userId && a.userId.length > 0 ? a.userId : PWSmartPlatform.generateUserId()) + "&ag_external_id=" + (a && a.productId ? a.productId : 0), PWSmartGateway.log("checkPaymentStatus: start"), PWSmartHelper.PWXMLHttpRequest("GET", d, e, !0, this, function(a) {
                var d = this.parseWithEval(a);
                a && a.length > 0 && (!d.hasOwnProperty("type") || "Error" !== d.type) && (d.length > 0 || d.hasOwnProperty("id")) ? b && "function" == typeof b && (PWSmartGateway.log("checkPaymentStatus: finish, success"), b(a)) : c && "function" == typeof c && (PWSmartGateway.log("checkPaymentStatus: finish, error"), c(a))
            })
        } catch (f) {
            pwTrackException(f), PWSmartGateway.log("checkPaymentStatus error: " + f.message)
        }
    },
    setDefaults: function(a) {
        this._productName = a.productName ? a.productName : "", this._productId = a.productId ? a.productId : 0, this._amount = a.amount ? a.amount : 0, this._currency = a.currency ? a.currency : "", this._period = a.period ? a.period : "", this._duration = a.duration ? a.duration : ""
    },
    getProductDetails: function(a, b, c) {
        try {
            var d = this.SMART_TV_BASE_URL + "/api/rest/product",
                e = ["key=" + this.getAppKey(), "ag_external_id=" + (a && a.productId ? a.productId : 0)];
            this._countryCode && e.push("country_code=" + this._countryCode), PWSmartHelper.PWXMLHttpRequest("GET", d, e.join("&"), !0, this, function(a) {
                var d = this.parseWithEval(a);
                d.hasOwnProperty("type") && "Error" === d.type || "[]" == a ? c && "function" == typeof c && c(a) : b && "function" == typeof b && b(d)
            })
        } catch (f) {
            throw pwTrackException(f), new Error("getProductDetails error")
        }
    },
    setTranslations: function() {
        var a = this._language ? this._language.toLowerCase() : this.languageCodeByDefault,
            b = PW_BASE_URL + "lang/" + a + "/" + a + ".json";
        this.getJSONForTranslation(b)
    },
    getJSONForTranslation: function(a) {
        var b = new XMLHttpRequest,
            c = this;
        PWSmartGateway.log("getJSONForTranslation: start"), pwTrackEvent("init-session", "get-translations-json-start"), b.open("GET", a + "?ts=" + (new Date).getTime(), !0), b.onreadystatechange = function() {
            4 == b.readyState && (c._translations = c.parseWithEval(b.responseText), PWSmartGateway.log("getJSONForTranslation: finish"), pwTrackEvent("init-session", "get-translations-json-finish"))
        }, b.send(null)
    },
    subscriptionMode: function() {
        return this._period && this._period.length > 0 && this._duration
    },
    pluralize: function(a, b) {
        var c = {
            day: "days",
            week: "weeks",
            month: "months",
            year: "years"
        };
        return 1 == b ? this._tx(a) : b + " " + this._tx(c[a])
    },
    calculateDate: function(a, b) {
        var c = new Date;
        "year" === a && c.setYear(c.getYear() + b), "month" === a && c.setMonth(c.getMonth() + b), "week" === a && c.setDate(c.getDate + 7 * b), "day" === a && c.setDate(c.getDate() + b);
        var d = c.getDate(),
            e = c.getMonth() + 1,
            f = c.getFullYear();
        return 10 > d && (d = "0" + d), 10 > e && (e = "0" + e), f + "/" + e + "/" + d
    },
    showCancelSubscriptionForm: function(a, b, c) {
        var d = (this.SMART_TV_BASE_URL + "/api/smart-tv/get-subscription-details", this);
        PWSmartPlatform.replaceEventHandler(), this._onCancelSubscriptionCallback = b, this._onKeepSubscriptionCallback = c, this.prepareCancelSubscriptionForm(a, function(b) {
            d.getProductDetails({
                productId: a.productId
            }, function(a) {
                a.subscription = b[0], a.subscription && a.subscription.active ? d.renderCancelSubscriptionForm(a) : d._onCancelSubscriptionCallback()
            })
        })
    },
    keepSubscription: function() {
        this.onCloseCancelSubscriptionForm()
    },
    tryToRecoverPayment: function() {
        var a = document.getElementById(this.INPUT_RECOVER_PAYMENT);
        if (a && a.innerHTML.length > 0) {
            this.hideErrorOnEmpty(), this.showPreloader();
            var b = this.prefixize(a.innerHTML),
                c = this;
            this.checkPaymentStatus({
                ref: b
            }, function(a) {
                c.hidePreloader();
                var b = c.parseWithEval(a);
                PWSmartHelper.updateUserId(b.uid), c.callSuccessCallback(), c.onClose()
            }, function(a) {
                c.hidePreloader();
                var b = document.getElementsByClassName("recover_error_notification")[0],
                    d = document.getElementsByClassName("recover_error_message_container")[0];
                c.fadeIn(b), d.innerHTML = "Payment not found"
            })
        } else this.showErrorOnEmpty()
    },
    prefixize: function(a) {
        return (0 === this.getAppKey().indexOf("t_") ? "t" : "b") + a
    },
    cancelSubscription: function(a) {
        var b = this.SMART_TV_BASE_URL + "/api/smart-tv/cancel-subscription",
            c = this,
            d = ["app_key=" + this.getAppKey(), "subscription_id=" + a];
        try {
            c._onClose(), PWSmartHelper.PWXMLHttpRequest("POST", b, d.join("&"), !0, this, function(a) {
                var b = c.parseWithEval(a);
                b && b.success && c._onCancelSubscriptionCallback()
            })
        } catch (e) {
            pwTrackException(e)
        }
    },
    prepareCancelSubscriptionForm: function(a, b) {
        var c = this,
            d = a && a.productId ? a.productId : 0,
            e = a && a.subscriptionId ? a.subscriptionId : "",
            f = a && a.userId ? a.userId : "",
            g = [];
        if (!e) {
            var h = {
                productId: d
            };
            f && f.length > 0 && (h.userId = f), this.checkPaymentStatus(h, function(a) {
                for (var d = c.parseWithEval(a), e = 0, f = d.length; f > e; e++) d[e].subscription && d[e].subscription.id && g.push(d[e].subscription);
                b(g)
            }, function() {})
        }
    },
    renderCancelSubscriptionForm: function(a, b) {
        var c = document.getElementById("pw_smart_wrapper"),
            d = "";
        if (!c) {
            var e = document.createElement("div");
            e.setAttribute("id", "pw_smart_wrapper"), c = this.getPwSmartWrapperAppendLocation(c, e)
        }
        b = b || !1, d += '<div class="cancel_form_wrapper" id="' + this.STATE_CANCEL_SUBSCRIPTION_WINDOW + '">', d += '<div class="cancel_form_poweredby"></div>', d += "You are about to cancel your subscription for " + a.name;
        var f = new Date(1e3 * (a.subscription.date_next - 60));
        d += "<br><br>After cancellation your service will remain active until " + f.getFullYear() + "/" + ("0" + (f.getMonth() + 1)).slice(-2) + "/" + ("0" + f.getDate()).slice(-2) + " " + ("0" + f.getHours()).slice(-2) + ":" + ("0" + f.getMinutes()).slice(-2), d += "<br><br>Would you like to cancel the subscription now?", d += '<br><a href="#" id="' + this.SUBSCRIPTION_KEEP + '" class="keep_subscription_btn" onclick="PWSmartGateway.keepSubscription();">Keep Subscription</a>', d += '<br><a href="#" id="' + this.SUBSCRIPTION_CANCEL + '" class="cancel_subscription_btn" onclick="PWSmartGateway.cancelSubscription(\'' + a.subscription.id + "');\">Cancel Subscription</a>", d += "</div>", c.innerHTML = d, this.setFocus(this.SUBSCRIPTION_KEEP), this._options = [this.SUBSCRIPTION_KEEP, this.SUBSCRIPTION_CANCEL], this._state = this.STATE_CANCEL_SUBSCRIPTION_WINDOW
    },
    showCreditCardMainWindow: function() {
        PWSmartGateway.log("showCreditCardMainWindow: start"), pwTrackEvent("init-session", "payment-form-start");
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), this._hidePaymentMethods && c.setAttribute("class", "pw_smart_payment_methods_hide"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="error_notification"><div class="error_message_container"></div></div>', b += '<div class="add_card credit_card" id="' + this.STATE_CC_MAIN_WINDOW + '">', b += '<div class="card_bg">';
        var d = {
            product: PWSmartGateway._productName,
            price: PWSmartGateway.getProductPrice(PWSmartGateway._amount),
            period: PWSmartGateway.pluralize(PWSmartGateway._period, PWSmartGateway._duration)
        };
        b += '<div class="add_text add_text_heading">' + PWSmartGateway._tx(this._titles && this._titles.buyHeading ? this._titles.buyHeading : "Buy #product for #price", d) + "</div>", this.subscriptionMode() && (b += this._titles && this._titles.buyHeadingRecurring ? '<div class="add_text add_text_subscription">' + PWSmartGateway._tx(this._titles.buyHeadingRecurring, d) + "</div>" : '<div class="add_text add_text_subscription">' + PWSmartGateway._tx("Charged every #period. Next charge:", d) + " " + PWSmartGateway.calculateDate(PWSmartGateway._period, PWSmartGateway._duration) + "</div>"), b += '<div class="cc_row first_row "><div class="cc_number">' + PWSmartGateway._tx("Credit Card Number") + '</div><div id="cc_icon"></div></div>', b += '<div id="card_number" class="number_input"></div>', b += '<div class="cc_row"><div class="exp_date">' + PWSmartGateway._tx("Expiration Date") + '</div><div class="cvv_code">' + PWSmartGateway._tx("CVV Code") + "</div></div>", b += '<div class="cc_row"><div id="card_exp_month" class="month_input">MM</div><div id="card_exp_year" class="year_input">YY</div><div class="cvv_logo"></div><div id="card_cvv" class="cvv_input"></div></div>', b += '<div class="cc_row checkbox_row clear"><div id="option_checkbox" class="cc_checkbox checkbox_mark"></div><div class="checkbox_text">' + PWSmartGateway._tx("Save my credit card details for future purchases") + '</div><div class="pay_btn" id="pay_cc_button">' + PWSmartGateway._tx("Pay Now") + "</div></div>", b += "</div>", b += '<div class="bottom_info clear">', this._hidePaymentMethods || (b += "<p>" + PWSmartGateway._tx("Use another payment option") + "</p>", b += '<div class="options_container options_small clear">', b += '<div id="option_mobile" class="option mobile"><div class="option_img"></div><div class="option_type">' + PWSmartGateway._tx("Mobile Carrier Billing") + "</div></div>", b += '<div id="option_prepaid" class="option prepaid"><div class="option_img"></div><div class="option_type">' + PWSmartGateway._tx("Prepaid Cards") + "</div></div>", b += '<div id="option_local" class="option local"><div class="option_img"></div><div class="option_type">' + PWSmartGateway._tx("Local Payment Options") + "</div></div>", b += "</div>"), b += '<div class="powered_by"></div>', b += '<div class="secured_footer"><div class="pcidss_img"></div><div class="trustwave_img"></div><div class="pwsecure_img"></div></div>', b += "</div>", b += "</div>", PWSmartGateway.log("showCreditCardMainWindow: inserting HTML"), pwTrackEvent("init-session", "payment-form-html-insert"), a.innerHTML = b, this.setFocus(this.CC_NUMBER), this._options = [this.CC_NUMBER, this.CC_EXP_MONTH, this.CC_EXP_YEAR, this.CC_CVV, this.OPTION_CHECKBOX, this.CC_PAY_BUTTON], this._hidePaymentMethods || this._options.push(this.OPTION_MOBILE, this.OPTION_PREPAID, this.OPTION_LOCAL), this._state = this.STATE_CC_MAIN_WINDOW, this._backButton && (this.showBackButton(), this._options.push(this.BACK_BUTTON)), this._recoverMyPaymentFlow && (this.showAlreadyPaidBeforeButton(), this._options.push(this.ALREADY_PAID_BEFORE_BUTTON)), PWSmartGateway.log("showCreditCardMainWindow: finish"), pwTrackEvent("init-session", "payment-form-finish"), pwTrackEvent("Payment Form Open")
    },
    showCreditCardSavedWindow: function() {
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), this._hidePaymentMethods && c.setAttribute("class", "pw_smart_payment_methods_hide"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="saved_cc_error_notification"><div class="saved_cc_error_message_container"></div></div>', b += '<div class="saved_payment" id="' + this.STATE_SAVED_CC_WINDOW + '">', b += '<div class="top_info">', b += '<div class="cc_container clear"><div class="icon"></div><p>' + PWSmartGateway._tx("Would you like to use the saved credit card ending in") + '  </p><div class="saved_cc_number">**** **** **** ' + PWSmartGateway._lastFour + '<span>?</span></div><div class="cancel_btn add_new_card" id="saved_cc_add_new_button">Add new</div><div class="pay_btn" id="saved_cc_pay_now_button">' + PWSmartGateway._tx("Pay Now") + "</div></div>", b += "</div>", b += '<div class="bottom_info">', this._hidePaymentMethods || (b += "<p>" + PWSmartGateway._tx("Use another payment option") + "</p>", b += '<div class="options_container options_small clear">', b += '<div id="option_mobile" class="option mobile"><div class="option_img"></div><div class="option_type">' + PWSmartGateway._tx("Mobile Carrier Billing") + "</div></div>", b += '<div id="option_prepaid" class="option prepaid"><div class="option_img"></div><div class="option_type">' + PWSmartGateway._tx("Prepaid Cards") + "</div></div>", b += '<div id="option_local" class="option local"><div class="option_img"></div><div class="option_type">' + PWSmartGateway._tx("Local Payment Options") + "</div></div>"), b += '<div class="powered_by_saved"></div>', b += "</div>", b += "</div>", a.innerHTML = b, this.setFocus(this.SAVED_CC_PAY_NOW_BUTTON), this._options = [this.SAVED_CC_ADD_NEW_BUTTON, this.SAVED_CC_PAY_NOW_BUTTON], this._hidePaymentMethods || this._options.push(this.OPTION_MOBILE, this.OPTION_PREPAID, this.OPTION_LOCAL), this._state = this.STATE_SAVED_CC_WINDOW, this._selectedStateMethod = this._state, this._backButton && (this.showBackButton(), this._options.push(this.BACK_BUTTON))
    },
    showAlreadyPaidBeforeWindow: function() {
        this.hideBackButton(), this.hideAlreadyPaidBeforeButton();
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="paid_before_form_wrapper">', b += '<div class="already_paid_form_header">' + PWSmartGateway._tx("Recover My Payment") + "</div>", b += '<div class="cancel_form_poweredby"></div>', b += PWSmartGateway._tx('If you have already made a payment for #product, please contact our customer support team at +1 415 707-9920 and mention "SMART TV Issue".', {
            product: this._productName
        }), b += "<br><br>" + PWSmartGateway._tx('You can also contact us via support@paymentwall.com. Please mention "SMART TV" in email subject line.'), b += "<br><br>" + PWSmartGateway._tx("Our team will guide you through the recovery process and will let you know the numeric Payment Reference ID (CID) to enter below."), b += "<br><br>", b += '<div><div id="' + this.INPUT_RECOVER_PAYMENT + '" class="number_input"></div></div>', b += "<br><br>", b += '<div class="recover_error_notification"><div class="recover_error_message_container"></div></div>', b += '<div id="' + this.RECOVER_PAYMENT_CONTINUE_BUTTON + '" class="recover_payment_continue_btn">' + PWSmartGateway._tx("Continue") + "</div>", b += "</div>", a.innerHTML = b, this.setFocus(this.INPUT_RECOVER_PAYMENT), this._state = this.STATE_PAID_BEFORE_WINDOW, this._selectedStateMethod = this._state
    },
    showInputMethodsPopup: function() {
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (this._recoverMyPaymentFlow && this.hideAlreadyPaidBeforeButton(), !a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="' + this.STATE_CHOOSE_INPUT + '">', b += '<div class="choose_text">' + PWSmartGateway._tx("Choose your input method") + "</div>", b += '<div class="powered_by"></div><div class="tips_text">' + PWSmartGateway._tx("Choose one of the following 3 input methods you would like to use to input your payment information") + "</div>", b += '<div class="options_container clear">', this.mobiamoChosen || (b += '<div class="input_container first"><div id="input_remote" class="input_img remote"></div><div class="input_type">' + PWSmartGateway._tx("Pay using remote") + "</div></div>"), b += '<div class="input_container"><div id="input_link" class="input_img link"></div><div class="input_type">' + PWSmartGateway._tx("Pay easily on another device") + "</div></div>", b += '<div class="input_container"><div id="input_qr" class="input_img qr"></div><div class="input_type">' + PWSmartGateway._tx("Pay using QR Code") + "</div></div>", b += "</div>", b += "</div>", a.innerHTML = b, this._state = this.STATE_CHOOSE_INPUT, this._backButton && this.showBackButton(), this._options = [this.INPUT_REMOTE, this.INPUT_LINK, this.INPUT_QR], this.mobiamoChosen ? (document.getElementsByClassName("options_container")[0].className += " hide-option", this._options.splice(0, 1), this.setFocus(this.INPUT_LINK)) : this.setFocus(this.INPUT_REMOTE)
    },
    showPayByLinkPopup: function() {
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="choose_input url" id="' + this.STATE_PAY_BY_LINK + '">', b += '<div class="choose_text">' + PWSmartGateway._tx("Pay easily on another device") + "</div>", b += ' <div class="powered_by"></div>', b += '<div class="tips_text">' + PWSmartGateway._tx("From your PC, tablet or smartphone, go to the link below"), b += '<span class="url_link">http://www.paymentwall.com/smarttv</span>', b += "</div>", b += '<div class="code_container">', b += "<span>" + PWSmartGateway._tx("Then enter this code") + '</span><div class="code_input">' + PWSmartGateway._shortKey + "</span></div>", b += "</div>", b += '<div class="link_container"></div>', b += '<div class="tips_text bottom">', b += PWSmartGateway._tx("This screen will update automatically once you complete the transaction on your PC, tablet or smartphone"), b += "</div>", b += "</div>", a.innerHTML = b, this._backButton && this.setFocus(this.BACK_BUTTON), this._state = this.STATE_PAY_BY_LINK, this.showPreloader(), this.enableRemotePaymentTimer()
    },
    showTransactionCompletedPopup: function() {
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (this._recoverMyPaymentFlow && this.hideAlreadyPaidBeforeButton(), !a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="final_step" id="' + this.STATE_TRANSACTION_COMPLETED + '">', b += '<div class="powered_by"></div>', b += '<div class="complete_container">', b += '<div class="complete_icon"></div>', b += "<span>" + PWSmartGateway._tx("Transaction Complete") + "</span>", b += '<div class="pay_btn" id="' + PWSmartGateway.SUCCESS_BUTTON + '">' + PWSmartGateway._tx("Continue") + "</div>", b += "</div>", b += "</div>", a.innerHTML = b, this._state = this.STATE_TRANSACTION_COMPLETED, this.setFocus(this.SUCCESS_BUTTON), this._initStarted = !1, this._transactionCompleted = !0, pwTrackEvent("Payment Form Success"), this.hidePreloader(), this._backButton && this.hideBackButton(), this.callSuccessCallback()
    },
    showQRCodePopup: function() {
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="choose_input qr-qr" id="' + this.INPUT_QR + '">', b += '<div class="choose_text">' + PWSmartGateway._tx("Pay using QR Code") + "</div>", b += '<div class="powered_by"></div>', b += '<div class="tips_text">' + PWSmartGateway._tx("Scan the QR Code below using your smartphone to access the payment screen") + "</div>", b += '<div class="qr_container" id="qr_container"></div>', b += '<div class="tips_text bottom">' + PWSmartGateway._tx("This screen will update automatically once you complete the transaction on your smartphone") + "</div>", b += "</div", a.innerHTML = b, PWSmartHelper.QRCodeGenerator("qr_container", PWSmartGateway._shortKey), this._backButton && this.setFocus(this.BACK_BUTTON), this._state = this.STATE_PAY_BY_QR, this.showPreloader(), this.enableRemotePaymentTimer()
    },
    getProductPrice: function(a) {
        return a + " " + PWSmartGateway._currency
    },
    showMobiamoPopup: function() {
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="add_card mobiamo" id="' + this.STATE_PAY_BY_MOBIAMO + '">', b += '<div class="card_bg">', b += '<div class="add_text">' + PWSmartGateway._tx("Buy #product for #price").replace("#product", PWSmartGateway._productName).replace("#price", PWSmartGateway.getProductPrice(PWSmartGateway._amount)) + '</div><div class="mobiamo_logo"></div>', b += '<div class="mobiamo_data">', b += '<div class="enter_number please_text">' + PWSmartGateway._tx("Please text #phrase to #number and enter the received PIN below").replace("#phrase", "MONEY").replace("#number", "1234") + ':</div><div class="mobiamo_row"><div class="input clear"><div class="tel_input" id="mobiamo_pin">Enter received pin</div></div></div>', b += '<div class="supported">' + PWSmartGateway._tx("supported carriers") + ':</div><div class="carriers">AT&T, T-Mobile, Verizone</div>', b += "</div>", b += "</div>", b += '<div id="pay_button" class="pay_btn mobiamo_btn">' + PWSmartGateway._tx("Continue") + "</div>", b += "</div>", a.innerHTML = b, this._state = this.STATE_PAY_BY_MOBIAMO, document.getElementById(this.MOBIAMO_PIN).innerHTML = "", this._options = [this.MOBIAMO_PIN, this.MOBIAMO_PAY_BUTTON], this.selectMobiamoPinField()
    },
    showPWLocalPopup: function() {
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (this._recoverMyPaymentFlow && this.hideAlreadyPaidBeforeButton(), !a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="choose_input local" id="' + this.STATE_PAY_BY_PW_LOCAL + '">', b += '<div class="choose_text">' + PWSmartGateway._tx("Get access to 100+ payment options") + '</div><div class="powered_by"></div>', b += '<div class="options_row clear"><div class="payment_option" id="mint"></div><div class="payment_option" id="ukash"></div><div class="payment_option" id="boleto"></div><div class="payment_option" id="paysafecard"></div><div class="payment_option" id="ideal"></div><div class="payment_option" id="yandex_money"></div><div class="payment_option" id="qiwi"></div><div class="payment_option" id="mister_cash"></div></div>', b += '<div class="tips_text">' + PWSmartGateway._tx("From your PC, tablet or smartphone, go to the link below") + '<span class="url_link">http://www.paymentwall.com/smarttv</span></div>', b += '<div class="code_container"><span>' + PWSmartGateway._tx("Then enter this code") + ':</span><div class="code_input">' + PWSmartGateway._shortKey + "</div></div>", b += '<div class="link_container"></div><div class="tips_text bottom">' + PWSmartGateway._tx("This screen will update automatically once you complete the transaction on your PC, tablet or smartphone") + "</div>", b += "</div>", a.innerHTML = b, this._state = this.STATE_PAY_BY_PW_LOCAL, this._backButton && (this.showBackButton(), this.setFocus(this.BACK_BUTTON)), this.showPreloader(), this.enableRemotePaymentTimer()
    },
    showMintPopup: function() {
        var a = document.getElementById("pw_smart_wrapper"),
            b = "";
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_smart_wrapper"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="mint_error_notification"><div class="mint_error_message_container"></div></div>', b += '<div class="add_card prepaid_card mint_card" id="' + this.STATE_PAY_BY_MINT + '">', b += '<div class="card_bg">', b += '<div class="add_text">' + PWSmartGateway._tx("MINT Prepaid Card") + "</div>", b += '<div class="powered_by"></div>', b += '<div class="cc_row "><div class="cc_number prepaid_number">MINT PIN</div><div class="prepaid_icon"></div></div>', b += '<div class="cc_row padding">', b += '<div id="mint_first" class="prepaid_input first"></div>', b += '<div id="mint_second" class="prepaid_input"></div>', b += '<div id="mint_third" class="prepaid_input"></div>', b += '<div id="mint_fourth" class="prepaid_input"></div>', b += "</div>", b += "</div>", b += '<div class="pay_btn" id="mint_pay">' + PWSmartGateway._tx("Continue") + "</div>", b += "</div>", a.innerHTML = b, this._state = this.STATE_PAY_BY_MINT, this.setFocus(this.MINT_FIRST_INPUT), this._options = [this.MINT_FIRST_INPUT, this.MINT_SECOND_INPUT, this.MINT_THIRD_INPUT, this.MINT_FOURTH_INPUT, this.BACK_BUTTON, this.MINT_PAY_BUTTON], this._backButton && this.showBackButton()
    },
    setFocus: function(a) {
        var b = document.getElementById(a);
        this._focusedElement = a, b.className += " pw-smart-selected", this.isCSSPropertySupported("box-shadow") || (b.className += " pw-smart-selected-old")
    },
    removeFocus: function(a) {
        var b = document.getElementById(a);
        b.className = b.className.replace("pw-smart-selected", ""), -1 != (" " + b.className + " ").indexOf("pw-smart-selected-old") && (b.className = b.className.replace("pw-smart-selected-old", ""))
    },
    onMoveRight: function() {
        var a = 0,
            b = 0;
        switch (this._state) {
            case this.STATE_PAY_BY_PW_LOCAL:
            case this.STATE_PAY_BY_LINK:
            case this.STATE_PAY_BY_QR:
            case this.STATE_TRANSACTION_COMPLETED:
                break;
            case this.STATE_CC_MAIN_WINDOW:
            case this.STATE_PAY_BY_MOBIAMO:
            case this.STATE_PAY_BY_MINT:
            case this.STATE_PAID_BEFORE_WINDOW:
            default:
                try {
                    PWNumPad.isVisible ? PWNumPad.moveRight() : (a = this._options.indexOf(this._focusedElement), b = a + 1, b > this._options.length - 1 && (b = 0), this.removeFocus(this._focusedElement), this.setFocus(this._options[b]))
                } catch (c) {
                    pwTrackException(c), PWSmartGateway.log(c)
                }
        }
    },
    onMoveLeft: function() {
        if (this._state === this.STATE_CC_MAIN_WINDOW) switch (this._focusedElement) {
            case this.CC_NUMBER:
                var a = document.getElementById(this.CC_NUMBER);
                PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(a) : PWSmartGateway.onMoveLeftDelete(this._focusedElement) && (this._recoverMyPaymentFlow ? this.setFocus(this.ALREADY_PAID_BEFORE_BUTTON) : this._backButton ? this.setFocus(this.BACK_BUTTON) : this._hidePaymentMethods ? this.selectPayButton() : this.selectLocalOption());
                break;
            case this.CC_EXP_MONTH:
                var b = document.getElementById(this.CC_EXP_MONTH);
                PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(b) : PWSmartGateway.onMoveLeftDelete(this._focusedElement) && this.selectCreditCardNumberField();
                break;
            case this.CC_EXP_YEAR:
                var c = document.getElementById(this.CC_EXP_YEAR);
                PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(c) : PWSmartGateway.onMoveLeftDelete(this._focusedElement) && this.selectMonthField();
                break;
            case this.CC_CVV:
                var d = document.getElementById(this.CC_CVV);
                PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(d) : PWSmartGateway.onMoveLeftDelete(this._focusedElement) && this.selectYearField();
                break;
            case this.OPTION_CHECKBOX:
                this.removeFocus(this.OPTION_CHECKBOX), this.selectCvvField();
                break;
            case this.CC_PAY_BUTTON:
                this.removeFocus(this.CC_PAY_BUTTON), this.selectCheckbox();
                break;
            case this.BACK_BUTTON:
                this.removeFocus(this.BACK_BUTTON), this._hidePaymentMethods ? this.selectPayButton() : this.selectLocalOption();
                break;
            case this.ALREADY_PAID_BEFORE_BUTTON:
                this.removeFocus(this.ALREADY_PAID_BEFORE_BUTTON), this._backButton ? this.setFocus(this.BACK_BUTTON) : this._hidePaymentMethods ? this.selectPayButton() : this.selectLocalOption();
                break;
            case this.OPTION_MOBILE:
                this.removeFocus(this.OPTION_MOBILE), this.selectPayButton();
                break;
            case this.OPTION_PREPAID:
                this.removeFocus(this.OPTION_PREPAID), this.selectMobileOption();
                break;
            case this.OPTION_LOCAL:
                this.removeFocus(this.OPTION_LOCAL), this.selectPrepaidOption()
        } else if (this._state === this.STATE_PAY_BY_MOBIAMO) switch (this._focusedElement) {
            case this.MOBIAMO_PIN:
                var e = document.getElementById(this.MOBIAMO_PIN);
                PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(e) : PWSmartGateway.onMoveLeftDelete(this._focusedElement) && this.selectMobiamoPayButton();
                break;
            case this.MOBIAMO_PAY_BUTTON:
                this.removeFocus(this._focusedElement), this.selectMobiamoPinField()
        } else if (this._state === this.STATE_PAY_BY_MINT) switch (this._focusedElement) {
            case this.MINT_FIRST_INPUT:
                var f = document.getElementById(this.MINT_FIRST_INPUT);
                PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(f) : PWSmartGateway.onMoveLeftDelete(this._focusedElement) && this.selectMintPayButton();
                break;
            case this.MINT_SECOND_INPUT:
                var g = document.getElementById(this.MINT_SECOND_INPUT);
                PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(g) : PWSmartGateway.onMoveLeftDelete(this._focusedElement) && this.selectMintFirstInput();
                break;
            case this.MINT_THIRD_INPUT:
                var h = document.getElementById(this.MINT_THIRD_INPUT);
                PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(h) : PWSmartGateway.onMoveLeftDelete(this._focusedElement) && this.selectMintSecondInput();
                break;
            case this.MINT_FOURTH_INPUT:
                var i = document.getElementById(this.MINT_FOURTH_INPUT);
                PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(i) : PWSmartGateway.onMoveLeftDelete(this._focusedElement) && this.selectMintThirdInput();
                break;
            case this.MINT_PAY_BUTTON:
                this.removeFocus(this.MINT_PAY_BUTTON), this.setFocus(this.BACK_BUTTON), this._focusedElement = this.BACK_BUTTON;
                break;
            case this.BACK_BUTTON:
                this.removeFocus(this.BACK_BUTTON), this.selectMintFourthInput()
        } else if (this._state == this.STATE_PAID_BEFORE_WINDOW) {
            var j = document.getElementById(this.INPUT_RECOVER_PAYMENT);
            PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.moveLeft(j) : this._focusedElement === this.INPUT_RECOVER_PAYMENT && PWSmartGateway.onMoveLeftDelete(this._focusedElement) && this.setFocus(this.RECOVER_PAYMENT_CONTINUE_BUTTON)
        } else if (this._state == this.STATE_PAY_BY_PW_LOCAL || this._state == this.STATE_PAY_BY_LINK || this._state == this.STATE_PAY_BY_QR || this._state === this.STATE_TRANSACTION_COMPLETED);
        else {
            var k = this._options.indexOf(this._focusedElement),
                l = k - 1;
            0 > l && (l = this._options.length - 1), this.removeFocus(this._focusedElement), this.setFocus(this._options[l])
        }
    },
    onSelect: function() {
        if (PWSmartPlatform.useNumpad && PWNumPad.isVisible) PWNumPad.select();
        else switch (this._state) {
            case this.STATE_CC_MAIN_WINDOW:
                if (this._selectedPaymentMethod = this._focusedElement, (this._focusedElement === this.CC_NUMBER || this._focusedElement === this.CC_EXP_MONTH || this._focusedElement === this.CC_EXP_YEAR || this._focusedElement === this.CC_CVV) && (PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.show() : (PWNumPad.setTarget(this), PWNumPad.show())), this._focusedElement === this.CC_PAY_BUTTON && (this.isNotEmptyFields() ? (this.hideErrorOnEmpty(), this.pay(this.showTransactionCompletedPopup), pwTrackEvent("Page1", "Credit Card", "Submit")) : this.showErrorOnEmpty()), this._focusedElement === this.BACK_BUTTON && (this.onClose(), this._failureCallback(this.prepareErrorResponse(this.ERROR_CODE_USER_EXITS_PAYMENT_PROCESS))), this._focusedElement === this.ALREADY_PAID_BEFORE_BUTTON && this.showAlreadyPaidBeforeWindow(), this._focusedElement == this.OPTION_MOBILE && (this.mobiamoChosen = !0, this.showInputMethodsPopup(), pwTrackEvent("Page1", "Mobile Payments", "Open")), this._focusedElement === this.OPTION_PREPAID && (this.prepaidChosen = !0, this.showInputMethodsPopup(), pwTrackEvent("Page1", "Prepaid Cards", "Open")), this._focusedElement === this.OPTION_LOCAL && (this.showPWLocalPopup(), pwTrackEvent("Page1", "Credit Card", "Navigate To Alternative Payments")), this._focusedElement === this.OPTION_CHECKBOX) {
                    var a = document.getElementById(this.OPTION_CHECKBOX); - 1 == (" " + a.className + " ").indexOf("checkbox_mark") ? a.className += " checkbox_mark" : a.className = a.className.replace("checkbox_mark", "")
                }
                break;
            case this.STATE_SAVED_CC_WINDOW:
                this._selectedPaymentMethod = this._focusedElement, this._focusedElement === this.SAVED_CC_ADD_NEW_BUTTON && (this._selectedStateMethod = "", this.showCreditCardMainWindow()), this._focusedElement === this.SAVED_CC_PAY_NOW_BUTTON && (this.isNotEmptyFields() ? (this.hideErrorOnEmpty(), this.pay(this.showTransactionCompletedPopup)) : this.showErrorOnEmpty()), this._focusedElement === this.BACK_BUTTON && this.onClose(), this._focusedElement == this.OPTION_MOBILE && (this.mobiamoChosen = !0, this.showInputMethodsPopup()), this._focusedElement == this.OPTION_PREPAID && this.showInputMethodsPopup(), this._focusedElement === this.OPTION_LOCAL && this.showPWLocalPopup();
                break;
            case this.STATE_CHOOSE_INPUT:
                this._focusedElement === this.INPUT_LINK ? (this.showPayByLinkPopup(), this.mobiamoChosen && pwTrackEvent("Page2", "Mobile Payments", "Another Device"), this.prepaidChosen && pwTrackEvent("Page2", "Prepaid Cards", "Another Device")) : this._focusedElement === this.INPUT_QR ? (this.showQRCodePopup(), this.mobiamoChosen && pwTrackEvent("Page2", "Mobile Payments", "QR"), this.prepaidChosen && pwTrackEvent("Page2", "Prepaid Cards", "QR")) : this._focusedElement === this.BACK_BUTTON ? (this._backButton && this.hideBackButton(), this.mobiamoChosen && (this.mobiamoChosen = !1), this._selectedStateMethod === this.STATE_SAVED_CC_WINDOW ? this.showCreditCardSavedWindow() : this.showCreditCardMainWindow()) : this._selectedPaymentMethod === this.OPTION_MOBILE ? this.showMobiamoPopup() : this._selectedPaymentMethod === this.OPTION_PREPAID && (this.showMintPopup(), pwTrackEvent("Page2", "Prepaid Cards", "Remote - Open"));
                break;
            case this.STATE_PAY_BY_LINK:
            case this.STATE_PAY_BY_QR:
                this._backButton && this._focusedElement == this.BACK_BUTTON && (this.hidePreloader(), this.removeFocus(this.BACK_BUTTON), this.showInputMethodsPopup());
                break;
            case this.STATE_PAY_BY_PW_LOCAL:
                this._backButton && this._focusedElement == this.BACK_BUTTON && (this.hidePreloader(), this._backButton && this.hideBackButton(), this._selectedStateMethod === this.STATE_SAVED_CC_WINDOW ? this.showCreditCardSavedWindow() : this.showCreditCardMainWindow());
            case this.STATE_PAY_BY_MOBIAMO:
                this._focusedElement === this.MOBIAMO_PIN && (PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.show() : (PWNumPad.setTarget(this), PWNumPad.show())), this._focusedElement === this.MOBIAMO_PAY_BUTTON && this.showTransactionCompletedPopup();
                break;
            case this.STATE_TRANSACTION_COMPLETED:
                this._focusedElement === this.SUCCESS_BUTTON && this.onClose();
                break;
            case this.STATE_PAY_BY_MINT:
                (this._focusedElement === this.MINT_FIRST_INPUT || this._focusedElement === this.MINT_SECOND_INPUT || this._focusedElement === this.MINT_THIRD_INPUT || this._focusedElement === this.MINT_FOURTH_INPUT) && (PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.show() : (PWNumPad.setTarget(this), PWNumPad.show())), this._focusedElement === this.MINT_PAY_BUTTON && (this.isNotEmptyFields() ? (this.hideErrorOnEmpty(), this.payByMint(this.showTransactionCompletedPopup), pwTrackEvent("Page3", "Prepaid Cards", "Remote - Submit")) : this.showErrorOnEmpty()), this._focusedElement === this.BACK_BUTTON && (this.hidePreloader(), this.showInputMethodsPopup(), this.removeFocus(this.BACK_BUTTON), document.getElementById("pw_back_button").removeAttribute("class"));
                break;
            case this.STATE_PAID_BEFORE_WINDOW:
                this._focusedElement === this.INPUT_RECOVER_PAYMENT && (PWSmartPlatform.useNumpad && PWNumPad.isVisible ? PWNumPad.show() : (PWNumPad.setTarget(this), PWNumPad.show())), this._focusedElement === this.RECOVER_PAYMENT_CONTINUE_BUTTON && this.tryToRecoverPayment();
                break;
            case this.STATE_CANCEL_SUBSCRIPTION_WINDOW:
                (this._focusedElement === this.SUBSCRIPTION_CANCEL || this._focusedElement == this.SUBSCRIPTION_KEEP) && document.getElementById(this._focusedElement).click()
        }
    },
    onNumber: function(a) {
        switch (this._state) {
            case this.STATE_PAID_BEFORE_WINDOW:
                if (this._focusedElement === this.INPUT_RECOVER_PAYMENT) {
                    var b = document.getElementById(this.INPUT_RECOVER_PAYMENT);
                    b && b.innerHTML.length < 18 && (b.innerHTML += a.toString()), b && 18 === b.innerHTML.length && (PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this.INPUT_RECOVER_PAYMENT), this.setFocus(this.RECOVER_PAYMENT_CONTINUE_BUTTON))
                }
                break;
            case this.STATE_CC_MAIN_WINDOW:
                switch (this._focusedElement) {
                    case this.CC_NUMBER:
                        var c = document.getElementById(this.CC_NUMBER);
                        c && c.innerHTML.replace(/-/g, "").length < 16 && (c.innerHTML.replace(/-/g, "").length % 4 === 0 && c.innerHTML.replace(/-/g, "").length > 0 && (c.innerHTML += "-"), c.innerHTML += a.toString()), c && 1 == c.innerHTML.length && pwTrackEvent("Page1", "Credit Card", "Number - Start Entry"), c && 16 === c.innerHTML.replace(/-/g, "").length && (PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this.CC_NUMBER), this.selectMonthField(), pwTrackEvent("Page1", "Credit Card", "Number - Finish Entry")), document.getElementById("cc_icon").className = PWSmartHelper.getCreditCardImageClass(c.innerHTML.replace(/-/g, ""));
                        break;
                    case this.CC_EXP_MONTH:
                        var d = document.getElementById(this.CC_EXP_MONTH);
                        d && 2 === d.innerHTML.length && (d.innerHTML = ""), d && d.innerHTML + a.toString() <= 12 && d.innerHTML + a.toString() !== "00" && (d.innerHTML += a.toString()), (d && d.innerHTML > 1 || 2 === d.innerHTML.length) && (1 === d.innerHTML.length && (pwTrackEvent("Page1", "Credit Card", "Expiration - Start Entry"), d.innerHTML = "0" + d.innerHTML), PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this.CC_EXP_MONTH), this.selectYearField());
                        break;
                    case this.CC_EXP_YEAR:
                        var e = document.getElementById(this.CC_EXP_YEAR);
                        e && 2 === e.innerHTML.length && (e.innerHTML = ""), e && e.innerHTML + a.toString() <= 99 && e.innerHTML + a.toString() !== "00" && (e.innerHTML += a.toString()), e && 2 === e.innerHTML.length && (PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this.CC_EXP_YEAR), this.selectCvvField(), pwTrackEvent("Page1", "Credit Card", "Expiration - Finish Entry"));
                        break;
                    case this.CC_CVV:
                        var f = document.getElementById(this.CC_CVV);
                        f && 3 === f.innerHTML.length && (f.innerHTML = ""), f && 1 == f.innerHTML.length && pwTrackEvent("Page1", "Credit Card", "CVV - Start Entry"), f && f.innerHTML.length < 3 && (f.innerHTML += a.toString()), f && 3 === f.innerHTML.length && (PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this._focusedElement), this.selectPayButton(), pwTrackEvent("Page1", "Credit Card", "CVV - Finish Entry"))
                }
                break;
            case this.STATE_PAY_BY_MOBIAMO:
                switch (this._focusedElement) {
                    case this.MOBIAMO_PIN:
                        var g = document.getElementById(this.MOBIAMO_PIN);
                        g && g.innerHTML.length < 6 && (g.innerHTML += a.toString()), g && 6 === g.innerHTML.length && (PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this._focusedElement), this.selectMobiamoPayButton())
                }
                break;
            case this.STATE_PAY_BY_MINT:
                switch (this._focusedElement) {
                    case this.MINT_FIRST_INPUT:
                        var h = document.getElementById(this.MINT_FIRST_INPUT);
                        h && h.innerHTML.length < 4 && (h.innerHTML += a.toString()), h && 4 === h.innerHTML.length && (PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this._focusedElement), this.selectMintSecondInput());
                        break;
                    case this.MINT_SECOND_INPUT:
                        var i = document.getElementById(this.MINT_SECOND_INPUT);
                        i && i.innerHTML.length < 4 && (i.innerHTML += a.toString()), i && 4 === i.innerHTML.length && (PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this._focusedElement), this.selectMintThirdInput());
                        break;
                    case this.MINT_THIRD_INPUT:
                        var j = document.getElementById(this.MINT_THIRD_INPUT);
                        j && j.innerHTML.length < 4 && (j.innerHTML += a.toString()), j && 4 === j.innerHTML.length && (PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this._focusedElement), this.selectMintFourthInput());
                        break;
                    case this.MINT_FOURTH_INPUT:
                        var k = document.getElementById(this.MINT_FOURTH_INPUT);
                        k && k.innerHTML.length < 4 && (k.innerHTML += a.toString()), k && 4 === k.innerHTML.length && (PWSmartPlatform.useNumpad && PWNumPad.close(), this.removeFocus(this._focusedElement), this.selectMintPayButton())
                }
        }
    },
    onText: function(a, b) {},
    onMoveDown: function() {
        if (PWSmartPlatform.useNumpad && PWNumPad.isVisible) PWNumPad.moveDown();
        else switch (this._state) {
            case this.STATE_TRANSACTION_COMPLETED:
                break;
            case this.STATE_CC_MAIN_WINDOW:
                switch (this._focusedElement) {
                    case this.CC_NUMBER:
                        this.removeFocus(this.CC_NUMBER), this.selectMonthField();
                        break;
                    case this.CC_EXP_MONTH:
                        this.removeFocus(this.CC_EXP_MONTH), this.selectCheckbox();
                        break;
                    case this.CC_EXP_YEAR:
                        this.removeFocus(this.CC_EXP_YEAR), this.selectCheckbox();
                        break;
                    case this.CC_CVV:
                        this.removeFocus(this.CC_CVV), this.selectPayButton();
                        break;
                    case this.OPTION_CHECKBOX:
                        this.removeFocus(this.OPTION_CHECKBOX), this._hidePaymentMethods ? this._backButton ? this.setFocus(this.BACK_BUTTON) : this.selectCreditCardNumberField() : this.selectMobileOption();
                        break;
                    case this.CC_PAY_BUTTON:
                        this.removeFocus(this.CC_PAY_BUTTON), this._hidePaymentMethods ? this._recoverMyPaymentFlow ? this.setFocus(this.ALREADY_PAID_BEFORE_BUTTON) : this.selectCreditCardNumberField() : this.selectLocalOption();
                        break;
                    case this.OPTION_MOBILE:
                        this.removeFocus(this.OPTION_MOBILE), this.setFocus(this.BACK_BUTTON);
                        break;
                    case this.OPTION_PREPAID:
                        this.removeFocus(this.OPTION_PREPAID), this._recoverMyPaymentFlow ? this.setFocus(this.ALREADY_PAID_BEFORE_BUTTON) : this.setFocus(this.BACK_BUTTON);
                        break;
                    case this.OPTION_LOCAL:
                        this.removeFocus(this.OPTION_LOCAL), this._recoverMyPaymentFlow ? this.setFocus(this.ALREADY_PAID_BEFORE_BUTTON) : this.setFocus(this.BACK_BUTTON);
                        break;
                    case this.BACK_BUTTON:
                        this.removeFocus(this.BACK_BUTTON), this._recoverMyPaymentFlow ? this.setFocus(this.ALREADY_PAID_BEFORE_BUTTON) : this.selectCreditCardNumberField();
                        break;
                    case this.ALREADY_PAID_BEFORE_BUTTON:
                        this.removeFocus(this.ALREADY_PAID_BEFORE_BUTTON), this.selectCreditCardNumberField()
                }
            case this.STATE_PAY_BY_MOBIAMO:
                switch (this._focusedElement) {
                    case this.MOBIAMO_PIN:
                        this.removeFocus(this.MOBIAMO_PIN), this.selectMobiamoPayButton();
                        break;
                    case this.MOBIAMO_PAY_BUTTON:
                        this.removeFocus(this.MOBIAMO_PAY_BUTTON), this.selectMobiamoPinField()
                }
            case this.STATE_CHOOSE_INPUT:
                if (this._backButton) switch (this._focusedElement) {
                    case this.INPUT_REMOTE:
                        this.removeFocus(this.INPUT_REMOTE), this.setFocus(this.BACK_BUTTON);
                        break;
                    case this.INPUT_LINK:
                        this.removeFocus(this.INPUT_LINK), this.setFocus(this.BACK_BUTTON);
                        break;
                    case this.INPUT_QR:
                        this.removeFocus(this.INPUT_QR), this.setFocus(this.BACK_BUTTON)
                }
            case this.STATE_PAY_BY_MINT:
                switch (this._focusedElement) {
                    case this.MINT_FIRST_INPUT:
                        this.removeFocus(this.MINT_FIRST_INPUT), this.setFocus(this.BACK_BUTTON);
                        break;
                    case this.MINT_SECOND_INPUT:
                        this.removeFocus(this.MINT_SECOND_INPUT), this.selectMintPayButton();
                        break;
                    case this.MINT_THIRD_INPUT:
                        this.removeFocus(this.MINT_THIRD_INPUT), this.selectMintPayButton();
                        break;
                    case this.MINT_FOURTH_INPUT:
                        this.removeFocus(this.MINT_FOURTH_INPUT), this.selectMintPayButton();
                        break;
                    case this.MINT_PAY_BUTTON:
                        this.removeFocus(this.MINT_PAY_BUTTON), this.selectMintFirstInput()
                }
            case this.STATE_PAID_BEFORE_WINDOW:
                switch (this._focusedElement) {
                    case this.INPUT_RECOVER_PAYMENT:
                        this.removeFocus(this.INPUT_RECOVER_PAYMENT), this.setFocus(this.RECOVER_PAYMENT_CONTINUE_BUTTON);
                        break;
                    case this.RECOVER_PAYMENT_CONTINUE_BUTTON:
                        this.removeFocus(this.RECOVER_PAYMENT_CONTINUE_BUTTON), this.setFocus(this.INPUT_RECOVER_PAYMENT)
                }
        }
    },
    onMoveUp: function() {
        if (PWSmartPlatform.useNumpad && PWNumPad.isVisible) PWNumPad.moveUp();
        else switch (this._state) {
            case this.STATE_TRANSACTION_COMPLETED:
                break;
            case this.STATE_CC_MAIN_WINDOW:
                switch (this._focusedElement) {
                    case this.ALREADY_PAID_BEFORE_BUTTON:
                        this.removeFocus(this.ALREADY_PAID_BEFORE_BUTTON), this.setFocus(this.BACK_BUTTON);
                        break;
                    case this.BACK_BUTTON:
                        this.removeFocus(this.BACK_BUTTON), this._hidePaymentMethods ? this.selectCheckbox() : this.selectMobileOption();
                        break;
                    case this.OPTION_MOBILE:
                        this.removeFocus(this.OPTION_MOBILE), this.selectCheckbox();
                        break;
                    case this.OPTION_PREPAID:
                        this.removeFocus(this.OPTION_PREPAID), this.selectYearField();
                        break;
                    case this.OPTION_LOCAL:
                        this.removeFocus(this.OPTION_LOCAL), this.selectPayButton();
                        break;
                    case this.OPTION_CHECKBOX:
                        this.removeFocus(this.OPTION_CHECKBOX), this.selectMonthField();
                        break;
                    case this.CC_PAY_BUTTON:
                        this.removeFocus(this.CC_PAY_BUTTON), this.selectCvvField();
                        break;
                    case this.CC_EXP_MONTH:
                        this.removeFocus(this.CC_EXP_MONTH), this.selectCreditCardNumberField();
                        break;
                    case this.CC_EXP_YEAR:
                        this.removeFocus(this.CC_EXP_YEAR), this.selectCreditCardNumberField();
                        break;
                    case this.CC_CVV:
                        this.removeFocus(this.CC_CVV), this.selectCreditCardNumberField();
                        break;
                    case this.CC_NUMBER:
                        this.removeFocus(this.CC_NUMBER), this._backButton ? this._recoverMyPaymentFlow ? this.setFocus(this.ALREADY_PAID_BEFORE_BUTTON) : this.setFocus(this.BACK_BUTTON) : this.selectMobileOption()
                }
                break;
            case this.STATE_CHOOSE_INPUT:
                if (this._backButton) switch (this._focusedElement) {
                    case this.BACK_BUTTON:
                        this.removeFocus(this.BACK_BUTTON), this.mobiamoChosen ? this.setFocus(this.INPUT_LINK) : this.setFocus(this.INPUT_REMOTE)
                }
                break;
            case this.STATE_PAY_BY_MOBIAMO:
                switch (this._focusedElement) {
                    case this.MOBIAMO_PIN:
                        this.removeFocus(this.MOBIAMO_PIN), this.selectMobiamoPayButton();
                        break;
                    case this.MOBIAMO_PAY_BUTTON:
                        this.removeFocus(this.MOBIAMO_PAY_BUTTON), this.selectMobiamoPinField()
                }
                break;
            case this.STATE_PAY_BY_MINT:
                switch (this._focusedElement) {
                    case this.MINT_FIRST_INPUT:
                        this.removeFocus(this.MINT_FIRST_INPUT), this.selectMintPayButton();
                        break;
                    case this.MINT_SECOND_INPUT:
                        this.removeFocus(this.MINT_SECOND_INPUT), this.selectMintPayButton();
                        break;
                    case this.MINT_THIRD_INPUT:
                        this.removeFocus(this.MINT_THIRD_INPUT), this.selectMintPayButton();
                        break;
                    case this.MINT_FOURTH_INPUT:
                        this.removeFocus(this.MINT_FOURTH_INPUT), this.selectMintPayButton();
                        break;
                    case this.MINT_PAY_BUTTON:
                        this.removeFocus(this.MINT_PAY_BUTTON), this.selectMintFirstInput();
                        break;
                    case this.BACK_BUTTON:
                        this.removeFocus(this.BACK_BUTTON), this.selectMintFirstInput()
                }
                break;
            case this.STATE_PAID_BEFORE_WINDOW:
                switch (this._focusedElement) {
                    case this.INPUT_RECOVER_PAYMENT:
                        this.removeFocus(this.INPUT_RECOVER_PAYMENT), this.setFocus(this.RECOVER_PAYMENT_CONTINUE_BUTTON);
                        break;
                    case this.RECOVER_PAYMENT_CONTINUE_BUTTON:
                        this.removeFocus(this.RECOVER_PAYMENT_CONTINUE_BUTTON), this.setFocus(this.INPUT_RECOVER_PAYMENT)
                }
        }
    },
    onReturn: function() {
        if (PWSmartPlatform.useNumpad && PWNumPad.isVisible) PWNumPad.close();
        else switch (this._state) {
            case this.STATE_CC_MAIN_WINDOW:
                this.onClose(), this._failureCallback(this.prepareErrorResponse(this.ERROR_CODE_USER_EXITS_PAYMENT_PROCESS));
                break;
            case this.STATE_SAVED_CC_WINDOW:
                this.onClose();
                break;
            case this.STATE_CHOOSE_INPUT:
                this._backButton && this.hideBackButton(), this.mobiamoChosen && (this.mobiamoChosen = !1), this._selectedStateMethod === this.STATE_SAVED_CC_WINDOW ? this.showCreditCardSavedWindow() : this.showCreditCardMainWindow();
                break;
            case this.STATE_PAY_BY_MOBIAMO:
            case this.STATE_PAY_BY_LINK:
            case this.STATE_PAY_BY_QR:
            case this.STATE_PAY_BY_MINT:
                this.hidePreloader(), this.showInputMethodsPopup();
                break;
            case this.STATE_PAY_BY_PW_LOCAL:
                this.hidePreloader(), this._backButton && this.hideBackButton(), this._selectedStateMethod === this.STATE_SAVED_CC_WINDOW ? this.showCreditCardSavedWindow() : this.showCreditCardMainWindow();
                break;
            case this.STATE_PAID_BEFORE_WINDOW:
                this.showCreditCardMainWindow();
                break;
            case this.STATE_TRANSACTION_COMPLETED:
                this.onClose();
                break;
            case this.STATE_CANCEL_SUBSCRIPTION_WINDOW:
                this.onCloseCancelSubscriptionForm()
        }
    },
    _onClose: function() {
        this.hidePreloader();
        var a = document.getElementById("pw_smart_wrapper");
        a && a.parentNode.removeChild(a), this._backButton && this.hideBackButton(), this._recoverMyPaymentFlow && this.hideAlreadyPaidBeforeButton(), this._initStarted = !1, this._focusedElement = !1, PWSmartPlatform.releaseEventHandler(), PWNumPad.isVisible && PWNumPad.close()
    },
    onCloseCancelSubscriptionForm: function() {
        this._onClose(), "function" == typeof this._onKeepSubscriptionCallback && this._onKeepSubscriptionCallback()
    },
    onClose: function() {
        this._onClose(), "function" == typeof this._onExitCallback && this._onExitCallback()
    },
    isNotEmptyFields: function() {
        if (this._state === PWSmartGateway.STATE_CC_MAIN_WINDOW) {
            var a = document.getElementById(this.CC_NUMBER),
                b = document.getElementById(this.CC_EXP_MONTH),
                c = document.getElementById(this.CC_EXP_YEAR),
                d = document.getElementById(this.CC_CVV);
            if (0 === a.innerHTML.length || a.innerHTML.replace(/-/g, "").length < 13 || 0 === b.innerHTML.length || b.innerHTML.length < 2 || 0 === c.innerHTML.length || c.innerHTML.length < 2 || 0 === d.innerHTML.length || d.innerHTML.length < 3) return !1
        } else if (this._state === PWSmartGateway.STATE_PAY_BY_MOBIAMO);
        else if (this._state === PWSmartGateway.STATE_PAY_BY_MINT) {
            var a = document.getElementById(this.MINT_FIRST_INPUT),
                b = document.getElementById(this.MINT_SECOND_INPUT),
                c = document.getElementById(this.MINT_THIRD_INPUT),
                d = document.getElementById(this.MINT_FOURTH_INPUT);
            if (0 === a.innerHTML.length || a.innerHTML.length < 4 || 0 === b.innerHTML.length || b.innerHTML.length < 4 || 0 === c.innerHTML.length || c.innerHTML.length < 4 || 0 === d.innerHTML.length || d.innerHTML.length < 4) return !1
        }
        return !0
    },
    selectMobiamoPinField: function() {
        this.setFocus(this.MOBIAMO_PIN)
    },
    selectCreditCardNumberField: function() {
        this.removeFocus(this._focusedElement), this.setFocus(this.CC_NUMBER)
    },
    selectMonthField: function() {
        this.removeFocus(this._focusedElement), this.setFocus(this.CC_EXP_MONTH)
    },
    selectYearField: function() {
        this.removeFocus(this._focusedElement), this.setFocus(this.CC_EXP_YEAR)
    },
    selectCvvField: function() {
        this.removeFocus(this._focusedElement), this.setFocus(this.CC_CVV)
    },
    selectPayButton: function() {
        this.removeFocus(this._focusedElement), this.setFocus(this.CC_PAY_BUTTON)
    },
    selectMobiamoPayButton: function() {
        this.setFocus(this.MOBIAMO_PAY_BUTTON)
    },
    selectMobileOption: function() {
        this.setFocus(this.OPTION_MOBILE)
    },
    selectPrepaidOption: function() {
        this.setFocus(this.OPTION_PREPAID)
    },
    selectLocalOption: function() {
        this.setFocus(this.OPTION_LOCAL)
    },
    selectMintFirstInput: function() {
        this.setFocus(this.MINT_FIRST_INPUT)
    },
    selectMintSecondInput: function() {
        this.setFocus(this.MINT_SECOND_INPUT)
    },
    selectMintThirdInput: function() {
        this.setFocus(this.MINT_THIRD_INPUT)
    },
    selectMintFourthInput: function() {
        this.setFocus(this.MINT_FOURTH_INPUT)
    },
    selectMintPayButton: function() {
        this.setFocus(this.MINT_PAY_BUTTON)
    },
    selectCheckbox: function() {
        this.setFocus(this.OPTION_CHECKBOX)
    },
    onSelectField: function(a) {
        if ("REMOVE" === a) {
            var b = document.getElementById(this.target._focusedElement);
            0 === b.innerHTML.length ? PWNumPad.close() : (("-" === b.innerHTML.charAt(b.innerHTML.length - 1) || "-" === b.innerHTML.charAt(b.innerHTML.length - 2)) && (b.innerHTML = PWSmartHelper.removeCharacter(b.innerHTML)), b.innerHTML.length > 0 && (b.innerHTML = PWSmartHelper.removeCharacter(b.innerHTML)), this._focusedElement === this.CC_NUMBER && 0 === b.innerHTML.length && (document.getElementById("cc_icon").className = ""))
        }
        "OK" === a && PWNumPad.close()
    },
    onMoveLeftDelete: function(a) {
        var b = !1,
            c = document.getElementById(a);
        return 0 === c.innerHTML.length || "MM" == c.innerHTML || "YY" == c.innerHTML ? (a === this.CC_NUMBER && (document.getElementById("cc_icon").className = ""), this.removeFocus(a), b = !0) : (("-" === c.innerHTML.charAt(c.innerHTML.length - 1) || "-" === c.innerHTML.charAt(c.innerHTML.length - 2)) && (c.innerHTML = PWSmartHelper.removeCharacter(c.innerHTML)), c.innerHTML.length > 0 && (c.innerHTML = PWSmartHelper.removeCharacter(c.innerHTML))), b
    },
    callSuccessCallback: function() {
        "function" == typeof this._successCallback && this._successCallback()
    },
    callFailureCallback: function() {
        "function" == typeof this._failureCallback && this._failureCallback()
    },
    showPreloadScreeAnimation: function() {
        var a = document.getElementById("pw_preloader_wrapper_screen"),
            b = "";
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_preloader_wrapper_screen"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        b += window.pwSmartTvAPlatform() ? '<div class="preloader_main_wrapper"><div class="preloader_gif_circle"></div></div>' : '<div class="preloader_main_wrapper"><div id="floatingCirclesG"><div class="f_circleG" id="frotateG_01"></div><div class="f_circleG" id="frotateG_02"></div><div class="f_circleG" id="frotateG_03"></div><div class="f_circleG" id="frotateG_04"></div><div class="f_circleG" id="frotateG_05"></div><div class="f_circleG" id="frotateG_06"></div><div class="f_circleG" id="frotateG_07"></div><div class="f_circleG" id="frotateG_08"></div></div></div>', a.innerHTML = b, a.style.display = "block"
    },
    hidePreloadScreenAnimation: function() {
        var a = document.getElementById("pw_preloader_wrapper_screen");
        a && a.parentNode.removeChild(a)
    },
    showErrorOnEmpty: function() {
        var a = "",
            b = "",
            c = PWSmartGateway._tx("Please fill in all fields");
        this._state === PWSmartGateway.STATE_CC_MAIN_WINDOW ? (a = document.getElementsByClassName("error_notification")[0], b = document.getElementsByClassName("error_message_container")[0], b.innerHTML = c) : this._state === PWSmartGateway.STATE_PAY_BY_MOBIAMO || (this._state === PWSmartGateway.STATE_PAY_BY_MINT ? (a = document.getElementsByClassName("mint_error_notification")[0], b = document.getElementsByClassName("mint_error_message_container")[0], b.innerHTML = c) : this._state === PWSmartGateway.STATE_PAID_BEFORE_WINDOW && (a = document.getElementsByClassName("recover_error_notification")[0], b = document.getElementsByClassName("recover_error_message_container")[0], b.innerHTML = c)), this.fadeIn(a)
    },
    hideErrorOnEmpty: function() {
        var a = "";
        this._state === PWSmartGateway.STATE_CC_MAIN_WINDOW ? a = document.getElementsByClassName("error_notification")[0] : this._state === PWSmartGateway.STATE_PAY_BY_MOBIAMO || (this._state === PWSmartGateway.STATE_PAY_BY_MINT ? a = document.getElementsByClassName("mint_error_notification")[0] : this._state === PWSmartGateway.STATE_PAID_BEFORE_WINDOW && (a = document.getElementsByClassName("recover_error_notification")[0])), a && (a.style.opacity = 0)
    },
    showPreloader: function() {
        (this._state === this.STATE_CC_MAIN_WINDOW || this._state === this.STATE_PAY_BY_MINT) && PWSmartPlatform.releaseEventHandler();
        var a = document.getElementById("pw_preloader_wrapper"),
            b = "",
            c = window.pwSmartTvAPlatform(),
            d = {
                pw_preloader_wrapper_link: PWSmartGateway.STATE_PAY_BY_LINK,
                pw_preloader_wrapper_local: PWSmartGateway.STATE_PAY_BY_PW_LOCAL,
                pw_preloader_wrapper_cc: PWSmartGateway.STATE_CC_MAIN_WINDOW,
                pw_preloader_wrapper_saved_cc: PWSmartGateway.STATE_SAVED_CC_WINDOW,
                pw_preloader_wrapper_mint: PWSmartGateway.STATE_PAY_BY_MINT,
                pw_preloader_wrapper_qr: PWSmartGateway.STATE_PAY_BY_QR,
                pw_preloader_wrapper_recover: PWSmartGateway.STATE_PAID_BEFORE_WINDOW
            };
        if (c)
            for (var e in d) d.hasOwnProperty(e) && (Object.defineProperty(d, e + "_gif", Object.getOwnPropertyDescriptor(d, e)), delete d[e]);
        if (!a) {
            var f = document.createElement("div"),
                g = PWSmartHelper.swap(d);
            f.setAttribute("id", "pw_preloader_wrapper"), f.setAttribute("class", g[this._state]), a = this.getPwSmartWrapperAppendLocation(a, f)
        }
        b += c ? '<div class="preloader_gif_line"></div>' : '<div id="fountainG"><div id="fountainG_1" class="fountainG"></div><div id="fountainG_2" class="fountainG"></div><div id="fountainG_3" class="fountainG"></div><div id="fountainG_4" class="fountainG"></div><div id="fountainG_5" class="fountainG"></div><div id="fountainG_6" class="fountainG"></div><div id="fountainG_7" class="fountainG"></div><div id="fountainG_8" class="fountainG"></div></div>', a.innerHTML = b, a.style.display = "block"
    },
    hidePreloader: function() {
        var a = document.getElementById("pw_preloader_wrapper");
        a && a.parentNode.removeChild(a), PWSmartPlatform.releaseEventHandler(), PWSmartPlatform.replaceEventHandler()
    },
    showAlreadyPaidBeforeButton: function() {
        var a = document.getElementById("pw_paid_before_button"),
            b = PWSmartGateway._tx("Already Paid Before?");
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_paid_before_button"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        this._hidePaymentMethods && (a.className += " pw_already_paid_before_payment_methods_hide_active"), a.innerHTML = b
    },
    hideAlreadyPaidBeforeButton: function() {
        var a = document.getElementById(this.ALREADY_PAID_BEFORE_BUTTON);
        a && a.parentNode.removeChild(a)
    },
    showBackButton: function() {
        var a = document.getElementById("pw_back_button"),
            b = PWSmartGateway._tx("Back");
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "pw_back_button"), a = this.getPwSmartWrapperAppendLocation(a, c)
        }
        a.setAttribute("class", "pw_back_button_" + this._state), this._hidePaymentMethods && (a.className += " pw_back_button_payment_methods_hide_active"), a.innerHTML = b
    },
    hideBackButton: function() {
        var a = document.getElementById("pw_back_button");
        a && a.parentNode.removeChild(a)
    },
    initSession: function() {
        try {
            PWSmartGateway.log("initSession: start");
            var a = this.SMART_TV_BASE_URL + "/api/smart-tv/init-session",
                b = "key=" + this.getAppKey() + "&uid=" + PWSmartGateway._userId + "&amount=" + PWSmartGateway._amount + "&currencyCode=" + PWSmartGateway._currency + "&ag_name=" + PWSmartGateway._productName + "&ag_external_id=" + PWSmartGateway._productId + "&widget=" + PWSmartGateway._widget + "&lang=" + PWSmartGateway._language;
            PWSmartHelper.PWXMLHttpRequest("GET", a, b, !0, this, function(a) {
                if (a) {
                    PWSmartGateway.log("initSession: response received."), pwTrackEvent("init-session", "response-received");
                    var b = !1;
                    try {
                        b = this.parseWithEval(a)
                    } catch (c) {
                        pwTrackException(c), PWSmartGateway.log("initSession: response looks incorrect. Check if you are using the correct public project key. Also check with devsupport@paymentwall.com if Smart TV SDK is set up for your project."), pwTrackEvent("init-session", "response-incorrect")
                    }
                    b && (PWSmartGateway.log("initSession: response processed successfully."), pwTrackEvent("init-session", "response-processed"), PWSmartGateway._shortKey = b.short_key, PWSmartGateway._wsKey = b.ws_key, b.saved_card && (PWSmartGateway._savedCard = b.saved_card, PWSmartGateway._lastFour = b.card.last4, PWSmartGateway._token = b.card.token), PWSmartGateway.hidePreloadScreenAnimation(), PWSmartGateway._savedCard === PWSmartGateway.SAVED_CC_MODE_ACTIVE ? this.showCreditCardSavedWindow() : this.showCreditCardMainWindow())
                } else PWSmartGateway.log("initSession: response has no data. Check that Smart TV SDK is activated for your project."), pwTrackEvent("init-session", "response-no-data")
            })
        } catch (c) {
            pwTrackException(c), PWSmartGateway.log(c)
        }
    },
    pay: function(a) {
        try {
            var b = "",
                c = "",
                d = "",
                e = null,
                f = "";
            this._state === PWSmartGateway.STATE_CC_MAIN_WINDOW ? (b = this.SMART_TV_BASE_URL + "/api/smart-tv/charge", c = "key=" + this.getAppKey() + "&uid=" + PWSmartGateway._userId + "&amount=" + PWSmartGateway._amount + "&currency=" + PWSmartGateway._currency + "&cnumber=" + this.getCreditCardNumberFieldValue() + "&exp_month=" + this.getFieldValue(this.CC_EXP_MONTH) + "&exp_year=" + this.getFieldValue(this.CC_EXP_YEAR) + "&cvv=" + this.getFieldValue(this.CC_CVV) + "&store_card=" + PWSmartGateway.isCreditCardAllowedForStoring() + "&description=" + encodeURIComponent(PWSmartGateway._productName) + "&plan=" + PWSmartGateway._productId + "&widget=" + PWSmartGateway._widget, PWSmartGateway.subscriptionMode() && (c += "&period=" + PWSmartGateway._period + "&period_duration=" + PWSmartGateway._duration), d = document.getElementsByClassName("error_notification")[0], e = document.getElementsByClassName("error_message_container")[0], f = document.getElementById(this.CC_PAY_BUTTON)) : this._state === PWSmartGateway.STATE_SAVED_CC_WINDOW && (b = this.SMART_TV_BASE_URL + "/api/smart-tv/charge", c = "key=" + this.getAppKey() + "&uid=" + PWSmartGateway._userId + "&token=" + PWSmartGateway._token + "&amount=" + PWSmartGateway._amount + "&currency=" + PWSmartGateway._currency + "&description=" + encodeURIComponent(PWSmartGateway._productName) + "&plan=" + PWSmartGateway._productId + "&widget=" + PWSmartGateway._widget, d = document.getElementsByClassName("saved_cc_error_notification")[0], e = document.getElementsByClassName("saved_cc_error_message_container")[0], f = document.getElementById(this.SAVED_CC_PAY_NOW_BUTTON)), d.style.opacity = 0, this._state === PWSmartGateway.STATE_CC_MAIN_WINDOW ? this.removeFocus(this.CC_PAY_BUTTON) : this._state === PWSmartGateway.STATE_SAVED_CC_WINDOW && this.removeFocus(this.SAVED_CC_PAY_NOW_BUTTON), f.style.background = "rgba(69, 78, 89, 1)", f.style.color = "#000000", PWSmartGateway.showPreloader(), PWSmartHelper.PWXMLHttpRequest("POST", b, c, !0, this, function(b) {
                if (b) {
                    PWSmartGateway.hidePreloader();
                    var c = this.parseWithEval(b);
                    1 === c.status ? a.call(PWSmartGateway) : d ? (this.fadeIn(d), c && c.message ? e.innerHTML = c.message : e.innerHTML = "Transaction failed. Please check your card details", pwTrackEvent("Page1", "Credit Card", "Error"), PWSmartGateway._state == PWSmartGateway.STATE_CC_MAIN_WINDOW ? PWSmartGateway.setFocus(PWSmartGateway.CC_PAY_BUTTON) : PWSmartGateway._state == PWSmartGateway.STATE_SAVED_CC_WINDOW && PWSmartGateway.setFocus(PWSmartGateway.SAVED_CC_PAY_NOW_BUTTON), f.style.color = "#5b4000", f.style.background = "#FFC802") : alert("'pay' function error")
                }
            })
        } catch (g) {
            pwTrackException(g), PWSmartGateway.log(g)
        }
    },
    payByMint: function(a) {
        try {
            var b = this.SMART_TV_BASE_URL + "/api/pure-mint/payment",
                c = "amount=" + PWSmartGateway._amount + "&currency=" + PWSmartGateway._currency + "&epin[]=" + this.getMintCardNumberConcatenated() + "&app_key=" + this.getAppKey() + "&user_id=" + PWSmartGateway._userId + "&description=" + encodeURIComponent(PWSmartGateway._productName) + "&plan=" + PWSmartGateway._productId + "&widget=" + PWSmartGateway._widget,
                d = document.getElementsByClassName("mint_error_notification")[0],
                e = document.getElementsByClassName("mint_error_message_container")[0],
                f = document.getElementById(this.MINT_PAY_BUTTON);
            d.style.opacity = 0, f.style.background = "rgba(69, 78, 89, 1)", f.style.color = "#000000", PWSmartGateway.showPreloader(), PWSmartHelper.PWXMLHttpRequest("POST", b, c, !0, this, function(b) {
                if (b) {
                    PWSmartGateway.hidePreloader();
                    var c = this.parseWithEval(b);
                    1 === c.success ? a.call(PWSmartGateway) : 0 === c.success ? d && (pwTrackEvent("Page3", "Prepaid Cards", "Remote - Error"), this.fadeIn(d), e.innerHTML = c.error_message,
                        f.style.color = "#5b4000", f.style.background = "#FFC802") : alert("'payByMint' function error")
                }
            })
        } catch (g) {
            pwTrackException(g), PWSmartGateway.log(g)
        }
    },
    isRemotePaymentCompleted: function() {
        try {
            var a = PWSmartGateway.SMART_TV_BASE_URL + "/api/account/get-recent-payment",
                b = "key=" + PWSmartGateway.getAppKey() + "&uid=" + PWSmartGateway._userId + "&skey=" + PWSmartGateway._wsKey;
            PWSmartHelper.PWXMLHttpRequest("GET", a, b, !0, this, function(a) {
                if (a) {
                    var b = PWSmartGateway.parseWithEval(a);
                    1 === b.status && (PWSmartGateway.showTransactionCompletedPopup(), clearInterval(PWSmartGateway._interval))
                }
            })
        } catch (c) {
            pwTrackException(c), PWSmartGateway.log(c)
        }
    },
    enableRemotePaymentTimer: function() {
        PWSmartGateway._interval = setInterval(PWSmartGateway.isRemotePaymentCompleted, 5e3)
    },
    getFieldValue: function(a) {
        return document.getElementById(a).innerHTML
    },
    getCreditCardNumberFieldValue: function() {
        return this.getFieldValue(this.CC_NUMBER).replace(/-/g, "")
    },
    getMintCardNumberConcatenated: function() {
        var a = this.getFieldValue(this.MINT_FIRST_INPUT),
            b = this.getFieldValue(this.MINT_SECOND_INPUT),
            c = this.getFieldValue(this.MINT_THIRD_INPUT),
            d = this.getFieldValue(this.MINT_FOURTH_INPUT);
        return a && b && c && d ? a + b + c + d : void 0
    },
    isCreditCardAllowedForStoring: function() {
        var a = document.getElementById(this.OPTION_CHECKBOX);
        return a.className && -1 != (" " + a.className + " ").indexOf("checkbox_mark") ? 1 : 0
    },
    isStoringModeActive: function() {
        return PWSmartGateway._savedCard && PWSmartGateway._savedCard === PWSmartGateway.SAVED_CC_MODE_ACTIVE
    },
    fadeIn: function(a) {
        a.style.opacity = 0;
        var b = +new Date,
            c = function() {
                a.style.opacity = +a.style.opacity + (new Date - b) / 400, b = +new Date, +a.style.opacity < 1 && (window.requestAnimationFrame && requestAnimationFrame(c) || setTimeout(c, 16))
            };
        c()
    },
    getPwSmartWrapperAppendLocation: function(a, b) {
        return a = this._containerId.length > 0 ? document.getElementById(this._containerId).appendChild(b) : document.body.appendChild(b)
    },
    parseWithEval: function(text) {
        return eval("(" + text + ")")
    },
    getErrorMessageByErrorCode: function(a) {
        return this._errorsMap[a]
    },
    _tx: function(a, b) {
        if (this._translations && this._translations[a] && (a = this._translations[a]), b = b || {}, Object.keys(b).length > 0)
            for (var c in b) b.hasOwnProperty(c) && (a = a.replace("#" + c, b[c]));
        return a
    },
    isCSSPropertySupported: function(a) {
        return a in document.body.style
    },
    log: function(a) {
        return window.console ? console.log(a) : alert(a)
    },
    prepareErrorResponse: function(a) {
        return {
            type: "error",
            code: a,
            message: this.getErrorMessageByErrorCode(a)
        }
    },
    shakeEffect: function(a) {
        var b = "15 30 15 0 -15 -30 -15 0".split(" ");
        b.forEach(function(b, c) {
            var d = 40;
            setTimeout(function() {
                a.style.left = c + "px"
            }, d * b)
        })
    }
};
window.PWSmartGateway = PWSmartGateway;
var PWSmartHelper = {
    objectPluginNetworkId: "pluginNetwork",
    PWXMLHttpRequest: function(a, b, c, d, e, f) {
        var g = new XMLHttpRequest,
            h = null;
        "POST" === a ? (g.open(a, b, d), g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")) : "GET" === a && g.open(a, b + "?" + c, d), "function" == typeof f && (g.onreadystatechange = function() {
            4 == g.readyState && ("string" == typeof g.responseText ? h = g.responseText : "object" == typeof g.responseText && (h = g.responseXML), f.call(e, h), delete g.onreadystatechange, g.onreadystatechange = null)
        }), g.send(c)
    },
    QRCodeGenerator: function(a, b) {
        return new QRCode(document.getElementById(a), {
            text: PWSmartGateway.SMART_TV_BASE_URL + "/api/shortcode?short_key=" + b,
            width: 180,
            height: 180,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.L
        })
    },
    removeCharacter: function(a) {
        return a.length > 0 && (a = a.substring(0, a.length - 1)), a
    },
    mapKeyToActualCharacter: function(a, b) {
        if (27 === b || 8 === b || 9 === b || 20 === b || 16 === b || 17 === b || 91 === b || 13 === b || 92 === b || 18 === b) return "";
        if ("boolean" != typeof a || "number" != typeof b) return "";
        var c = [];
        c[192] = "~", c[49] = "!", c[50] = "@", c[51] = "#", c[52] = "$", c[53] = "%", c[54] = "^", c[55] = "&", c[56] = "*", c[57] = "(", c[48] = ")", c[189] = "_", c[107] = "+", c[219] = "{", c[221] = "}", c[220] = "|", c[59] = ":", c[222] = '"', c[188] = "<", c[190] = ">", c[191] = "?", c[32] = " ";
        var d = "";
        return d = a ? b >= 65 && 90 >= b ? String.fromCharCode(b) : c[b] : b >= 65 && 90 >= b ? String.fromCharCode(b).toLowerCase() : String.fromCharCode(b)
    },
    getCreditCardImageClass: function(a) {
        var b = "";
        return /^4/.test(a) ? b = "cc_icon cc-visa" : /^5[1-5]/.test(a) ? b = "cc_icon cc-mastercard" : /^3[47]/.test(a) ? b = "cc_icon cc-amex" : /^(6011|65|64[4-9]|622)/.test(a) ? b = "cc_icon cc-discover" : /^35/.test(a) && (b = "cc_icon cc-jcb"), b
    },
    generateValue: function(a) {
        for (var b = "0123456789ABCDEFGIJKLMNOPQRSTUVVWXYZ", c = a, d = "", e = c; e > 0; e--) d += b[Math.round(Math.random() * (b.length - 1))];
        return d + Date.now()
    },
    generateId: function(a, b) {
        if (0 == a.length) {
            PWSmartGateway.log(PWSmartPlatform.name + ": cookies generation");
            var c = this.generateValue(5);
            return PWSmartGateway.log(PWSmartPlatform.name + ": cookies setup"), this.setCookies(b, c), c
        }
        return PWSmartGateway.log(PWSmartPlatform.name + ": cookies get"), a
    },
    getFromString: function(a, b) {
        if ("string" == typeof b) {
            var c, d, e = a + "=",
                f = b.split(/[;&]/);
            for (c = 0; c < f.length; c++) {
                for (d = f[c];
                    " " === d.charAt(0);) d = d.substr(1, d.length);
                if (0 === d.indexOf(e)) return d.substr(e.length, d.length)
            }
            return ""
        }
    },
    getCookies: function(a) {
        return this.getFromString(a, document.cookie)
    },
    setCookies: function(a, b) {
        var c = new Date;
        c.setFullYear(c.getFullYear() + 1), document.cookie = a + "=" + b + "; path=/; expires=" + c.toUTCString()
    },
    getUserIdSmartTvA: function(a) {
        return this.generateId(this.getCookies(a), a)
    },
    getUserIdLg: function(a) {
        var b = this,
            c = "";
        return this.appendLgInfoObject(function() {
            var d = document.getElementById(b.objectPluginNetworkId);
            if (d && d.net_macAddress) {
                PWSmartGateway.log(PWSmartPlatform.name + ": getting device info");
                var e = d.net_macAddress.replace(/:/g, ""),
                    f = d.serialNumber;
                c = e + f, d.parentNode.removeChild(d)
            } else c = b.generateId(b.getCookies(a), a)
        }), c
    },
    updateUserId: function(a) {
        var b = "uid_" + PWSmartPlatform.name.toLowerCase();
        this.setCookies(b, a)
    },
    appendLgInfoObject: function(a) {
        var b = document.createElement("object");
        b.type = "application/x-netcast-info", b.id = this.objectPluginNetworkId, b.width = 0, b.height = 0, b.style.display = "none", b.style.position = "absolute", document.getElementsByTagName("body")[0].appendChild(b), a && "function" == typeof a && a()
    },
    swap: function(a) {
        var b = {};
        for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
        return b
    }
};
window.PWSmartHelper = PWSmartHelper;
var PWNumPad = {
    isVisible: !1,
    target: null,
    selectedX: 0,
    selectedY: 0,
    selectedButton: null,
    buttons: [
        [{
            action: "1",
            "class": "one"
        }, {
            action: "2",
            "class": "two"
        }, {
            action: "3",
            "class": "three"
        }],
        [{
            action: "4",
            "class": "four"
        }, {
            action: "5",
            "class": "five"
        }, {
            action: "6",
            "class": "six"
        }],
        [{
            action: "7",
            "class": "seven"
        }, {
            action: "8",
            "class": "eight"
        }, {
            action: "9",
            "class": "nine"
        }],
        [{
            action: "0",
            "class": "zero"
        }, {
            action: "REMOVE",
            "class": "backspace"
        }, {
            action: "OK",
            "class": "ok_btn"
        }]
    ],
    show: function() {
        this.selectedButton = this.buttons[this.selectedY][this.selectedX];
        var a = document.getElementById("keyboard_wrapper"),
            b = "";
        if (!a) {
            var c = document.createElement("div");
            c.setAttribute("id", "keyboard_wrapper"), c.setAttribute("class", "keyboard_container"), a = PWSmartGateway.getPwSmartWrapperAppendLocation(a, c)
        }
        b += '<div class="numbers_container clear">';
        for (var d = 0, e = this.buttons.length; e > d; d++)
            for (var f = this.buttons[d], g = 0, h = f.length; h > g; g++) {
                var i = f[g],
                    j = this.selectedButton.action === i.action;
                b += '<div onmouseover="PWNumPad.onMouseMoveEvent(' + g + ", " + d + ')" onmouseup="PWNumPad.select()" class="pw_button ' + i["class"] + " " + (j ? PWNumPad.highlight() : "") + '"></div>'
            }
        b += "</div>", a.innerHTML = b, a.style.visibility = "visible", this.isVisible = !0
    },
    refresh: function() {
        var a = PWNumPad.highlight(),
            b = "pw-smart-selected-old" === a,
            c = document.getElementsByClassName(a + " pw_button")[0];
        c || (c = document.querySelectorAll("." + a + ".pw_button")[0]), c && (c.className = b ? c.className.replace(/\bpw-smart-selected-old\b/, "") : c.className.replace(/\bpw-smart-selected\b/, "")), this.selectedButton = this.buttons[this.selectedY][this.selectedX];
        var d = document.getElementsByClassName("pw_button " + this.selectedButton["class"])[0];
        d || document.querySelectorAll(".pw_button." + this.selectedButton["class"]), d && (d.className += " " + a)
    },
    highlight: function() {
        return PWSmartGateway.isCSSPropertySupported("box-shadow") ? "pw-smart-selected" : "pw-smart-selected-old"
    },
    close: function() {
        var a = document.getElementById("keyboard_wrapper");
        a && (a.style.visibility = "hidden", this.isVisible = !1)
    },
    select: function() {
        this.selectedButton.action >= 0 && this.selectedButton.action <= 9 && this.target.onNumber(this.selectedButton.action), this.onSelect(this.selectedButton.action)
    },
    setTarget: function(a) {
        this.onSelect = a.onSelectField, this.target = a
    },
    onMouseMoveEvent: function(a, b) {
        PWNumPad.selectedX = a, PWNumPad.selectedY = b, PWNumPad.show()
    },
    moveLeft: function(a) {
        this.selectedX > 0 ? (this.selectedX--, 1 === this.selectedX && 4 === this.selectedY && (this.selectedX = 0), this.show()) : a ? (document.getElementsByClassName(PWNumPad.selectedButton["class"])[0].classList.remove("pw-smart-selected"), a.innerHTML.length > 1 && document.getElementsByClassName("backspace")[0].classList.add("pw-smart-selected"), ("-" === a.innerHTML.charAt(a.innerHTML.length - 1) || "-" === a.innerHTML.charAt(a.innerHTML.length - 2)) && (a.innerHTML = PWSmartHelper.removeCharacter(a.innerHTML)), 1 === a.innerHTML.length && PWSmartGateway._focusedElement === PWSmartGateway.CC_NUMBER && (PWSmartGateway.CC_NUMBER && (document.getElementById("cc_icon").className = ""), PWNumPad.close()), 0 === a.innerHTML.length && PWNumPad.close(), a.innerHTML = PWSmartHelper.removeCharacter(a.innerHTML)) : this.close()
    },
    moveRight: function() {
        this.selectedX < this.buttons[this.selectedY].length - 1 && (this.selectedX++, 4 === this.selectedY && 1 === this.selectedX && this.selectedX++, this.show())
    },
    moveUp: function() {
        this.selectedY > 0 && (this.selectedY--, 3 === this.selectedX && (this.selectedY = 0), this.show())
    },
    moveDown: function() {
        this.selectedY < this.buttons.length - 1 && (this.selectedY++, 3 === this.selectedX && (this.selectedY = 3), this.show())
    },
    onSelect: function() {}
};
window.PWNumPad = PWNumPad;
var QRCode;
! function() {
    function a(a) {
        this.mode = j.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];
        for (var b = [], c = 0, d = this.data.length; d > c; c++) {
            var e = this.data.charCodeAt(c);
            e > 65536 ? (b[0] = 240 | (1835008 & e) >>> 18, b[1] = 128 | (258048 & e) >>> 12, b[2] = 128 | (4032 & e) >>> 6, b[3] = 128 | 63 & e) : e > 2048 ? (b[0] = 224 | (61440 & e) >>> 12, b[1] = 128 | (4032 & e) >>> 6, b[2] = 128 | 63 & e) : e > 128 ? (b[0] = 192 | (1984 & e) >>> 6, b[1] = 128 | 63 & e) : b[0] = e, this.parsedData = this.parsedData.concat(b)
        }
        this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function b(a, b) {
        this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    function c(a, b) {
        if (void 0 == a.length) throw new Error(a.length + "/" + b);
        for (var c = 0; c < a.length && 0 == a[c];) c++;
        this.num = new Array(a.length - c + b);
        for (var d = 0; d < a.length - c; d++) this.num[d] = a[d + c]
    }

    function d(a, b) {
        this.totalCount = a, this.dataCount = b
    }

    function e() {
        this.buffer = [], this.length = 0
    }

    function f() {
        return "undefined" != typeof CanvasRenderingContext2D
    }

    function g() {
        var a = !1,
            b = navigator.userAgent;
        return /android/i.test(b) && (a = !0, aMat = b.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (a = parseFloat(aMat[1]))), a
    }

    function h(a, b) {
        for (var c = 1, d = i(a), e = 0, f = p.length; f >= e; e++) {
            var g = 0;
            switch (b) {
                case k.L:
                    g = p[e][0];
                    break;
                case k.M:
                    g = p[e][1];
                    break;
                case k.Q:
                    g = p[e][2];
                    break;
                case k.H:
                    g = p[e][3]
            }
            if (g >= d) break;
            c++
        }
        if (c > p.length) throw new Error("Too long data");
        return c
    }

    function i(a) {
        var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return b.length + (b.length != a ? 3 : 0)
    }
    a.prototype = {
        getLength: function() {
            return this.parsedData.length
        },
        write: function(a) {
            for (var b = 0, c = this.parsedData.length; c > b; b++) a.put(this.parsedData[b], 8)
        }
    }, b.prototype = {
        addData: function(b) {
            var c = new a(b);
            this.dataList.push(c), this.dataCache = null
        },
        isDark: function(a, b) {
            if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b);
            return this.modules[a][b]
        },
        getModuleCount: function() {
            return this.moduleCount
        },
        make: function() {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function(a, c) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var d = 0; d < this.moduleCount; d++) {
                this.modules[d] = new Array(this.moduleCount);
                for (var e = 0; e < this.moduleCount; e++) this.modules[d][e] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c)
        },
        setupPositionProbePattern: function(a, b) {
            for (var c = -1; 7 >= c; c++)
                if (!(-1 >= a + c || this.moduleCount <= a + c))
                    for (var d = -1; 7 >= d; d++) - 1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1)
        },
        getBestMaskPattern: function() {
            for (var a = 0, b = 0, c = 0; 8 > c; c++) {
                this.makeImpl(!0, c);
                var d = m.getLostPoint(this);
                (0 == c || a > d) && (a = d, b = c)
            }
            return b
        },
        createMovieClip: function(a, b, c) {
            var d = a.createEmptyMovieClip(b, c),
                e = 1;
            this.make();
            for (var f = 0; f < this.modules.length; f++)
                for (var g = f * e, h = 0; h < this.modules[f].length; h++) {
                    var i = h * e,
                        j = this.modules[f][h];
                    j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill())
                }
            return d
        },
        setupTimingPattern: function() {
            for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
            for (var b = 8; b < this.moduleCount - 8; b++) null == this.modules[6][b] && (this.modules[6][b] = 0 == b % 2)
        },
        setupPositionAdjustPattern: function() {
            for (var a = m.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
                for (var c = 0; c < a.length; c++) {
                    var d = a[b],
                        e = a[c];
                    if (null == this.modules[d][e])
                        for (var f = -2; 2 >= f; f++)
                            for (var g = -2; 2 >= g; g++) this.modules[d + f][e + g] = -2 == f || 2 == f || -2 == g || 2 == g || 0 == f && 0 == g ? !0 : !1
                }
        },
        setupTypeNumber: function(a) {
            for (var b = m.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
                var d = !a && 1 == (1 & b >> c);
                this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d
            }
            for (var c = 0; 18 > c; c++) {
                var d = !a && 1 == (1 & b >> c);
                this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
            }
        },
        setupTypeInfo: function(a, b) {
            for (var c = this.errorCorrectLevel << 3 | b, d = m.getBCHTypeInfo(c), e = 0; 15 > e; e++) {
                var f = !a && 1 == (1 & d >> e);
                6 > e ? this.modules[e][8] = f : 8 > e ? this.modules[e + 1][8] = f : this.modules[this.moduleCount - 15 + e][8] = f
            }
            for (var e = 0; 15 > e; e++) {
                var f = !a && 1 == (1 & d >> e);
                8 > e ? this.modules[8][this.moduleCount - e - 1] = f : 9 > e ? this.modules[8][15 - e - 1 + 1] = f : this.modules[8][15 - e - 1] = f
            }
            this.modules[this.moduleCount - 8][8] = !a
        },
        mapData: function(a, b) {
            for (var c = -1, d = this.moduleCount - 1, e = 7, f = 0, g = this.moduleCount - 1; g > 0; g -= 2)
                for (6 == g && g--;;) {
                    for (var h = 0; 2 > h; h++)
                        if (null == this.modules[d][g - h]) {
                            var i = !1;
                            f < a.length && (i = 1 == (1 & a[f] >>> e));
                            var j = m.getMask(b, d, g - h);
                            j && (i = !i), this.modules[d][g - h] = i, e--, -1 == e && (f++, e = 7)
                        }
                    if (d += c, 0 > d || this.moduleCount <= d) {
                        d -= c, c = -c;
                        break
                    }
                }
        }
    }, b.PAD0 = 236, b.PAD1 = 17, b.createData = function(a, c, f) {
        for (var g = d.getRSBlocks(a, c), h = new e, i = 0; i < f.length; i++) {
            var j = f[i];
            h.put(j.mode, 4), h.put(j.getLength(), m.getLengthInBits(j.mode, a)), j.write(h)
        }
        for (var k = 0, i = 0; i < g.length; i++) k += g[i].dataCount;
        if (h.getLengthInBits() > 8 * k) throw new Error("code length overflow. (" + h.getLengthInBits() + ">" + 8 * k + ")");
        for (h.getLengthInBits() + 4 <= 8 * k && h.put(0, 4); 0 != h.getLengthInBits() % 8;) h.putBit(!1);
        for (; !(h.getLengthInBits() >= 8 * k) && (h.put(b.PAD0, 8), !(h.getLengthInBits() >= 8 * k));) h.put(b.PAD1, 8);
        return b.createBytes(h, g)
    }, b.createBytes = function(a, b) {
        for (var d = 0, e = 0, f = 0, g = new Array(b.length), h = new Array(b.length), i = 0; i < b.length; i++) {
            var j = b[i].dataCount,
                k = b[i].totalCount - j;
            e = Math.max(e, j), f = Math.max(f, k), g[i] = new Array(j);
            for (var l = 0; l < g[i].length; l++) g[i][l] = 255 & a.buffer[l + d];
            d += j;
            var n = m.getErrorCorrectPolynomial(k),
                o = new c(g[i], n.getLength() - 1),
                p = o.mod(n);
            h[i] = new Array(n.getLength() - 1);
            for (var l = 0; l < h[i].length; l++) {
                var q = l + p.getLength() - h[i].length;
                h[i][l] = q >= 0 ? p.get(q) : 0
            }
        }
        for (var r = 0, l = 0; l < b.length; l++) r += b[l].totalCount;
        for (var s = new Array(r), t = 0, l = 0; e > l; l++)
            for (var i = 0; i < b.length; i++) l < g[i].length && (s[t++] = g[i][l]);
        for (var l = 0; f > l; l++)
            for (var i = 0; i < b.length; i++) l < h[i].length && (s[t++] = h[i][l]);
        return s
    };
    for (var j = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, k = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, l = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, m = {
            PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(a) {
                for (var b = a << 10; m.getBCHDigit(b) - m.getBCHDigit(m.G15) >= 0;) b ^= m.G15 << m.getBCHDigit(b) - m.getBCHDigit(m.G15);
                return (a << 10 | b) ^ m.G15_MASK
            },
            getBCHTypeNumber: function(a) {
                for (var b = a << 12; m.getBCHDigit(b) - m.getBCHDigit(m.G18) >= 0;) b ^= m.G18 << m.getBCHDigit(b) - m.getBCHDigit(m.G18);
                return a << 12 | b
            },
            getBCHDigit: function(a) {
                for (var b = 0; 0 != a;) b++, a >>>= 1;
                return b
            },
            getPatternPosition: function(a) {
                return m.PATTERN_POSITION_TABLE[a - 1]
            },
            getMask: function(a, b, c) {
                switch (a) {
                    case l.PATTERN000:
                        return 0 == (b + c) % 2;
                    case l.PATTERN001:
                        return 0 == b % 2;
                    case l.PATTERN010:
                        return 0 == c % 3;
                    case l.PATTERN011:
                        return 0 == (b + c) % 3;
                    case l.PATTERN100:
                        return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
                    case l.PATTERN101:
                        return 0 == b * c % 2 + b * c % 3;
                    case l.PATTERN110:
                        return 0 == (b * c % 2 + b * c % 3) % 2;
                    case l.PATTERN111:
                        return 0 == (b * c % 3 + (b + c) % 2) % 2;
                    default:
                        throw new Error("bad maskPattern:" + a)
                }
            },
            getErrorCorrectPolynomial: function(a) {
                for (var b = new c([1], 0), d = 0; a > d; d++) b = b.multiply(new c([1, n.gexp(d)], 0));
                return b
            },
            getLengthInBits: function(a, b) {
                if (b >= 1 && 10 > b) switch (a) {
                    case j.MODE_NUMBER:
                        return 10;
                    case j.MODE_ALPHA_NUM:
                        return 9;
                    case j.MODE_8BIT_BYTE:
                        return 8;
                    case j.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + a)
                } else if (27 > b) switch (a) {
                    case j.MODE_NUMBER:
                        return 12;
                    case j.MODE_ALPHA_NUM:
                        return 11;
                    case j.MODE_8BIT_BYTE:
                        return 16;
                    case j.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + a)
                } else {
                    if (!(41 > b)) throw new Error("type:" + b);
                    switch (a) {
                        case j.MODE_NUMBER:
                            return 14;
                        case j.MODE_ALPHA_NUM:
                            return 13;
                        case j.MODE_8BIT_BYTE:
                            return 16;
                        case j.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + a)
                    }
                }
            },
            getLostPoint: function(a) {
                for (var b = a.getModuleCount(), c = 0, d = 0; b > d; d++)
                    for (var e = 0; b > e; e++) {
                        for (var f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)
                            if (!(0 > d + h || d + h >= b))
                                for (var i = -1; 1 >= i; i++) 0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
                        f > 5 && (c += 3 + f - 5)
                    }
                for (var d = 0; b - 1 > d; d++)
                    for (var e = 0; b - 1 > e; e++) {
                        var j = 0;
                        a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += 3)
                    }
                for (var d = 0; b > d; d++)
                    for (var e = 0; b - 6 > e; e++) a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
                for (var e = 0; b > e; e++)
                    for (var d = 0; b - 6 > d; d++) a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
                for (var k = 0, e = 0; b > e; e++)
                    for (var d = 0; b > d; d++) a.isDark(d, e) && k++;
                var l = Math.abs(100 * k / b / b - 50) / 5;
                return c += 10 * l
            }
        }, n = {
            glog: function(a) {
                if (1 > a) throw new Error("glog(" + a + ")");
                return n.LOG_TABLE[a]
            },
            gexp: function(a) {
                for (; 0 > a;) a += 255;
                for (; a >= 256;) a -= 255;
                return n.EXP_TABLE[a]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, o = 0; 8 > o; o++) n.EXP_TABLE[o] = 1 << o;
    for (var o = 8; 256 > o; o++) n.EXP_TABLE[o] = n.EXP_TABLE[o - 4] ^ n.EXP_TABLE[o - 5] ^ n.EXP_TABLE[o - 6] ^ n.EXP_TABLE[o - 8];
    for (var o = 0; 255 > o; o++) n.LOG_TABLE[n.EXP_TABLE[o]] = o;
    c.prototype = {
        get: function(a) {
            return this.num[a]
        },
        getLength: function() {
            return this.num.length
        },
        multiply: function(a) {
            for (var b = new Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)
                for (var e = 0; e < a.getLength(); e++) b[d + e] ^= n.gexp(n.glog(this.get(d)) + n.glog(a.get(e)));
            return new c(b, 0)
        },
        mod: function(a) {
            if (this.getLength() - a.getLength() < 0) return this;
            for (var b = n.glog(this.get(0)) - n.glog(a.get(0)), d = new Array(this.getLength()), e = 0; e < this.getLength(); e++) d[e] = this.get(e);
            for (var e = 0; e < a.getLength(); e++) d[e] ^= n.gexp(n.glog(a.get(e)) + b);
            return new c(d, 0).mod(a)
        }
    }, d.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], d.getRSBlocks = function(a, b) {
        var c = d.getRsBlockTable(a, b);
        if (void 0 == c) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
        for (var e = c.length / 3, f = [], g = 0; e > g; g++)
            for (var h = c[3 * g + 0], i = c[3 * g + 1], j = c[3 * g + 2], k = 0; h > k; k++) f.push(new d(i, j));
        return f
    }, d.getRsBlockTable = function(a, b) {
        switch (b) {
            case k.L:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case k.M:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case k.Q:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case k.H:
                return d.RS_BLOCK_TABLE[4 * (a - 1) + 3];
            default:
                return void 0
        }
    }, e.prototype = {
        get: function(a) {
            var b = Math.floor(a / 8);
            return 1 == (1 & this.buffer[b] >>> 7 - a % 8)
        },
        put: function(a, b) {
            for (var c = 0; b > c; c++) this.putBit(1 == (1 & a >>> b - c - 1))
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(a) {
            var b = Math.floor(this.length / 8);
            this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
        }
    };
    var p = [
            [17, 14, 11, 7],
            [32, 26, 20, 14],
            [53, 42, 32, 24],
            [78, 62, 46, 34],
            [106, 84, 60, 44],
            [134, 106, 74, 58],
            [154, 122, 86, 64],
            [192, 152, 108, 84],
            [230, 180, 130, 98],
            [271, 213, 151, 119],
            [321, 251, 177, 137],
            [367, 287, 203, 155],
            [425, 331, 241, 177],
            [458, 362, 258, 194],
            [520, 412, 292, 220],
            [586, 450, 322, 250],
            [644, 504, 364, 280],
            [718, 560, 394, 310],
            [792, 624, 442, 338],
            [858, 666, 482, 382],
            [929, 711, 509, 403],
            [1003, 779, 565, 439],
            [1091, 857, 611, 461],
            [1171, 911, 661, 511],
            [1273, 997, 715, 535],
            [1367, 1059, 751, 593],
            [1465, 1125, 805, 625],
            [1528, 1190, 868, 658],
            [1628, 1264, 908, 698],
            [1732, 1370, 982, 742],
            [1840, 1452, 1030, 790],
            [1952, 1538, 1112, 842],
            [2068, 1628, 1168, 898],
            [2188, 1722, 1228, 958],
            [2303, 1809, 1283, 983],
            [2431, 1911, 1351, 1051],
            [2563, 1989, 1423, 1093],
            [2699, 2099, 1499, 1139],
            [2809, 2213, 1579, 1219],
            [2953, 2331, 1663, 1273]
        ],
        q = function() {
            var a = function(a, b) {
                this._el = a, this._htOption = b
            };
            return a.prototype.draw = function(a) {
                function b(a, b) {
                    var c = document.createElementNS("http://www.w3.org/2000/svg", a);
                    for (var d in b) b.hasOwnProperty(d) && c.setAttribute(d, b[d]);
                    return c
                }
                var c = this._htOption,
                    d = this._el,
                    e = a.getModuleCount();
                Math.floor(c.width / e), Math.floor(c.height / e), this.clear();
                var f = b("svg", {
                    viewBox: "0 0 " + String(e) + " " + String(e),
                    width: "100%",
                    height: "100%",
                    fill: c.colorLight
                });
                f.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), d.appendChild(f), f.appendChild(b("rect", {
                    fill: c.colorDark,
                    width: "1",
                    height: "1",
                    id: "template"
                }));
                for (var g = 0; e > g; g++)
                    for (var h = 0; e > h; h++)
                        if (a.isDark(g, h)) {
                            var i = b("use", {
                                x: String(g),
                                y: String(h)
                            });
                            i.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), f.appendChild(i)
                        }
            }, a.prototype.clear = function() {
                for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
            }, a
        }(),
        r = "svg" === document.documentElement.tagName.toLowerCase(),
        s = r ? q : f() ? function() {
            function a() {
                this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
            }

            function b(a, b) {
                var c = this;
                if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
                    var d = document.createElement("img"),
                        e = function() {
                            c._bSupportDataURI = !1, c._fFail && _fFail.call(c)
                        },
                        f = function() {
                            c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c)
                        };
                    return d.onabort = e, d.onerror = e, d.onload = f, void(d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                }
                c._bSupportDataURI === !0 && c._fSuccess ? c._fSuccess.call(c) : c._bSupportDataURI === !1 && c._fFail && c._fFail.call(c)
            }
            if (this._android && this._android <= 2.1) {
                var c = 1 / window.devicePixelRatio,
                    d = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function(a, b, e, f, g, h, i, j) {
                    if ("nodeName" in a && /img/i.test(a.nodeName))
                        for (var k = arguments.length - 1; k >= 1; k--) arguments[k] = arguments[k] * c;
                    else "undefined" == typeof j && (arguments[1] *= c, arguments[2] *= c, arguments[3] *= c, arguments[4] *= c);
                    d.apply(this, arguments)
                }
            }
            var e = function(a, b) {
                this._bIsPainted = !1, this._android = g(), this._htOption = b, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = b.width, this._elCanvas.height = b.height, a.appendChild(this._elCanvas), this._el = a, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
            };
            return e.prototype.draw = function(a) {
                var b = this._elImage,
                    c = this._oContext,
                    d = this._htOption,
                    e = a.getModuleCount(),
                    f = d.width / e,
                    g = d.height / e,
                    h = Math.round(f),
                    i = Math.round(g);
                b.style.display = "none", this.clear();
                for (var j = 0; e > j; j++)
                    for (var k = 0; e > k; k++) {
                        var l = a.isDark(j, k),
                            m = k * f,
                            n = j * g;
                        c.strokeStyle = l ? d.colorDark : d.colorLight, c.lineWidth = 1, c.fillStyle = l ? d.colorDark : d.colorLight, c.fillRect(m, n, f, g), c.strokeRect(Math.floor(m) + .5, Math.floor(n) + .5, h, i), c.strokeRect(Math.ceil(m) - .5, Math.ceil(n) - .5, h, i)
                    }
                this._bIsPainted = !0
            }, e.prototype.makeImage = function() {
                this._bIsPainted && b.call(this, a)
            }, e.prototype.isPainted = function() {
                return this._bIsPainted
            }, e.prototype.clear = function() {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
            }, e.prototype.round = function(a) {
                return a ? Math.floor(1e3 * a) / 1e3 : a
            }, e
        }() : function() {
            var a = function(a, b) {
                this._el = a, this._htOption = b
            };
            return a.prototype.draw = function(a) {
                for (var b = this._htOption, c = this._el, d = a.getModuleCount(), e = Math.floor(b.width / d), f = Math.floor(b.height / d), g = ['<table style="border:0;border-collapse:collapse;">'], h = 0; d > h; h++) {
                    g.push("<tr>");
                    for (var i = 0; d > i; i++) g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (a.isDark(h, i) ? b.colorDark : b.colorLight) + ';"></td>');
                    g.push("</tr>")
                }
                g.push("</table>"), c.innerHTML = g.join("");
                var j = c.childNodes[0],
                    k = (b.width - j.offsetWidth) / 2,
                    l = (b.height - j.offsetHeight) / 2;
                k > 0 && l > 0 && (j.style.margin = l + "px " + k + "px")
            }, a.prototype.clear = function() {
                this._el.innerHTML = ""
            }, a
        }();
    QRCode = function(a, b) {
        if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: k.H
            }, "string" == typeof b && (b = {
                text: b
            }), b)
            for (var c in b) this._htOption[c] = b[c];
        "string" == typeof a && (a = document.getElementById(a)), this._android = g(), this._el = a, this._oQRCode = null, this._oDrawing = new s(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, QRCode.prototype.makeCode = function(a) {
        this._oQRCode = new b(h(a, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(a), this._oQRCode.make(), this._el.title = a, this._oDrawing.draw(this._oQRCode), this.makeImage()
    }, QRCode.prototype.makeImage = function() {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    }, QRCode.prototype.clear = function() {
        this._oDrawing.clear()
    }, QRCode.CorrectLevel = k
}();