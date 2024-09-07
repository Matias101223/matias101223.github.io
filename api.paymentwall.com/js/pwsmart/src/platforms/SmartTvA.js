var PWSmartPlatform = {
    useNumpad: true,
    name: 'SmartTvA',
    _eventHandlerKeyDown: null,
    _eventHandlerKeyUp: null,
    _eventHandlerOnMouseOver: null,
    _eventHandlerOnClick: null,

    generateUserId: function() {
        var cookiesName = 'uid_' + this.name.toLowerCase();
        return PWSmartHelper.getUserIdSmartTvA(cookiesName);
    },
    replaceEventHandler: function() {
        this._eventHandlerKeyDown = document.body.onkeydown;
        this._eventHandlerKeyUp = document.body.onkeyup;
        this._eventHandlerOnMouseOver = document.body.onmouseover;
        this._eventHandlerOnClick = document.body.onclick;
        document.body.onkeydown = this.pwEventHandlerKeyDown;
        document.body.onkeyup = this.pwEventHandlerKeyUp;
        document.body.onmouseover = this.pwEventHandlerOnMouseOver;
        document.body.onclick = this.pwEventHandlerOnClick;
    },
    releaseEventHandler: function() {
        document.body.onkeydown = this._eventHandlerKeyDown;
        document.body.onkeyup = this._eventHandlerKeyUp;
        document.body.onmouseover = this._eventHandlerOnMouseOver;
        document.body.onclick = this._eventHandlerOnClick;
    },
    pwEventHandlerOnMouseOver: function(e) {
        var targetId = e.target.id;
        var oldFocus = PWSmartGateway._focusedElement;

        switch (targetId) {
            case PWSmartGateway.CC_NUMBER:
            case PWSmartGateway.CC_EXP_MONTH:
            case PWSmartGateway.CC_EXP_YEAR:
            case PWSmartGateway.CC_CVV:
            case PWSmartGateway.CC_PAY_BUTTON:
            case PWSmartGateway.SUCCESS_BUTTON:
            case PWSmartGateway.OPTION_CHECKBOX:
            case PWSmartGateway.BACK_BUTTON:
            case PWSmartGateway.ALREADY_PAID_BEFORE_BUTTON:
            case PWSmartGateway.OPTION_MOBILE:
            case PWSmartGateway.OPTION_LOCAL:
            case PWSmartGateway.OPTION_PREPAID:
            case PWSmartGateway.INPUT_REMOTE:
            case PWSmartGateway.INPUT_QR:
            case PWSmartGateway.INPUT_LINK:
            case PWSmartGateway.INPUT_RECOVER_PAYMENT:
            case PWSmartGateway.MINT_FIRST_INPUT:
            case PWSmartGateway.MINT_SECOND_INPUT:
            case PWSmartGateway.MINT_THIRD_INPUT:
            case PWSmartGateway.MINT_FOURTH_INPUT:
            case PWSmartGateway.MINT_PAY_BUTTON:
            case PWSmartGateway.RECOVER_PAYMENT_CONTINUE_BUTTON:
            case PWSmartGateway.SAVED_CC_ADD_NEW_BUTTON:
            case PWSmartGateway.SAVED_CC_PAY_NOW_BUTTON:
            case PWSmartGateway.SUBSCRIPTION_KEEP:
            case PWSmartGateway.SUBSCRIPTION_CANCEL:
                PWSmartGateway.removeFocus(oldFocus);
                PWSmartGateway.setFocus(targetId);
                break;
        }
    },
    pwEventHandlerOnClick: function(e) {
        var targetId = e.target.id;

        switch (targetId) {
            case PWSmartGateway.CC_NUMBER:
            case PWSmartGateway.CC_EXP_MONTH:
            case PWSmartGateway.CC_EXP_YEAR:
            case PWSmartGateway.CC_CVV:
            case PWSmartGateway.CC_PAY_BUTTON:
            case PWSmartGateway.SUCCESS_BUTTON:
            case PWSmartGateway.OPTION_CHECKBOX:
            case PWSmartGateway.BACK_BUTTON:
            case PWSmartGateway.ALREADY_PAID_BEFORE_BUTTON:
            case PWSmartGateway.OPTION_MOBILE:
            case PWSmartGateway.OPTION_LOCAL:
            case PWSmartGateway.OPTION_PREPAID:
            case PWSmartGateway.INPUT_REMOTE:
            case PWSmartGateway.INPUT_QR:
            case PWSmartGateway.INPUT_LINK:
            case PWSmartGateway.INPUT_RECOVER_PAYMENT:
            case PWSmartGateway.MINT_FIRST_INPUT:
            case PWSmartGateway.MINT_SECOND_INPUT:
            case PWSmartGateway.MINT_THIRD_INPUT:
            case PWSmartGateway.MINT_FOURTH_INPUT:
            case PWSmartGateway.MINT_PAY_BUTTON:
            case PWSmartGateway.RECOVER_PAYMENT_CONTINUE_BUTTON:
            case PWSmartGateway.SAVED_CC_ADD_NEW_BUTTON:
            case PWSmartGateway.SAVED_CC_PAY_NOW_BUTTON:
            case PWSmartGateway.SUBSCRIPTION_KEEP:
            case PWSmartGateway.SUBSCRIPTION_CANCEL:
                if (PWNumPad.isVisible) {
                    PWNumPad.close();
                }
                e.preventDefault();
                PWSmartGateway.onSelect();
                break;
            default:
                if (PWNumPad.isVisible) {
                    PWNumPad.close();
                }
                break;
        }
    },
    pwEventHandlerKeyUp: function(a) {
        var b = a.keyCode;
        switch (b) {
            case 8:
                a.preventDefault();
                PWSmartGateway.onReturn();
                break;
            case 13:
                a.preventDefault();
                PWSmartGateway.onSelect();
                break;
        }
    },
    pwEventHandlerKeyDown: function(a) {
        var b = a.keyCode;
        switch (b) {
            case 8:
                a.preventDefault();
                break;
            case 13:
                a.preventDefault();
                break;
            case 37:
                PWSmartGateway.onMoveLeft();
                break;
            case 39:
                PWSmartGateway.onMoveRight();
                break;
            case 38:
                PWSmartGateway.onMoveUp();
                break;
            case 40:
                PWSmartGateway.onMoveDown();
                break;
            case 49:
                PWSmartGateway.onNumber(1);
                PWSmartGateway.onText(a, b);
                break;
            case 50:
                PWSmartGateway.onNumber(2);
                PWSmartGateway.onText(a, b);
                break;
            case 51:
                PWSmartGateway.onNumber(3);
                PWSmartGateway.onText(a, b);
                break;
            case 52:
                PWSmartGateway.onNumber(4);
                PWSmartGateway.onText(a, b);
                break;
            case 53:
                PWSmartGateway.onNumber(5);
                PWSmartGateway.onText(a, b);
                break;
            case 54:
                PWSmartGateway.onNumber(6);
                PWSmartGateway.onText(a, b);
                break;
            case 55:
                PWSmartGateway.onNumber(7);
                PWSmartGateway.onText(a, b);
                break;
            case 56:
                PWSmartGateway.onNumber(8);
                PWSmartGateway.onText(a, b);
                break;
            case 57:
                PWSmartGateway.onNumber(9);
                PWSmartGateway.onText(a, b);
                break;
            case 48:
                PWSmartGateway.onNumber(0);
                PWSmartGateway.onText(a, b);
                break;
            default:
                PWSmartGateway.onText(a, b);
                break;
        }

        return false;
    }
};
window.PWSmartPlatform = PWSmartPlatform;