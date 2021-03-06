/**
 * Created by Urthur on 2017/7/14.
 */
BI.DateTimeCombo = BI.inherit(BI.Single, {
    constants: {
        popupHeight: 290,
        popupWidth: 270,
        comboAdjustHeight: 1,
        border: 1,
        DATE_MIN_VALUE: "1900-01-01",
        DATE_MAX_VALUE: "2099-12-31"
    },
    _defaultConfig: function () {
        return BI.extend(BI.DateTimeCombo.superclass._defaultConfig.apply(this, arguments), {
            baseCls: "bi-date-time-combo bi-border",
            width: 200,
            height: 24
        });
    },
    _init: function () {
        BI.DateTimeCombo.superclass._init.apply(this, arguments);
        var self = this, opts = this.options;
        var date = Date.getDate();
        this.storeValue = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        this.trigger = BI.createWidget({
            type: "bi.date_time_trigger",
            min: this.constants.DATE_MIN_VALUE,
            max: this.constants.DATE_MAX_VALUE
        });

        this.popup = BI.createWidget({
            type: "bi.date_time_popup",
            min: this.constants.DATE_MIN_VALUE,
            max: this.constants.DATE_MAX_VALUE
        });
        self.setValue(this.storeValue);

        this.popup.on(BI.DateTimePopup.BUTTON_CANCEL_EVENT_CHANGE, function () {
            self.setValue(self.storeValue);
            self.hidePopupView();
            self.fireEvent(BI.DateTimeCombo.EVENT_CANCEL);
        });
        this.popup.on(BI.DateTimePopup.BUTTON_OK_EVENT_CHANGE, function () {
            self.storeValue = self.popup.getValue();
            self.setValue(self.storeValue);
            self.hidePopupView();
            self.fireEvent(BI.DateTimeCombo.EVENT_CONFIRM);
        });
        this.popup.on(BI.DateTimePopup.CALENDAR_EVENT_CHANGE, function () {
            self.trigger.setValue(self.popup.getValue());
            self.fireEvent(BI.DateTimeCombo.EVENT_CHANGE);
        });
        this.combo = BI.createWidget({
            type: "bi.combo",
            toggle: false,
            isNeedAdjustHeight: false,
            isNeedAdjustWidth: false,
            el: this.trigger,
            adjustLength: this.constants.comboAdjustHeight,
            popup: {
                el: this.popup,
                maxHeight: this.constants.popupHeight,
                width: this.constants.popupWidth,
                stopPropagation: false
            }
        });
        this.combo.on(BI.Combo.EVENT_BEFORE_POPUPVIEW, function () {
            self.popup.setValue(self.storeValue);
            self.fireEvent(BI.DateTimeCombo.EVENT_BEFORE_POPUPVIEW);
        });

        var triggerBtn = BI.createWidget({
            type: "bi.icon_button",
            cls: "bi-trigger-icon-button date-font bi-border-right",
            width: 24,
            height: 24
        });
        triggerBtn.on(BI.TriggerIconButton.EVENT_CHANGE, function () {
            if (self.combo.isViewVisible()) {
                self.combo.hideView();
            } else {
                self.combo.showView();
            }
        });

        BI.createWidget({
            type: "bi.htape",
            element: this,
            items: [{
                type: "bi.absolute",
                items: [{
                    el: this.combo,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }, {
                    el: triggerBtn,
                    top: 0,
                    left: 0
                }]
            }]
        });
    },

    setValue: function (v) {
        this.storeValue = v;
        this.popup.setValue(v);
        this.trigger.setValue(v);
    },
    getValue: function () {
        return this.storeValue;
    },

    hidePopupView: function () {
        this.combo.hideView();
    }
});

BI.DateTimeCombo.EVENT_CANCEL = "EVENT_CANCEL";
BI.DateTimeCombo.EVENT_CONFIRM = "EVENT_CONFIRM";
BI.DateTimeCombo.EVENT_CHANGE = "EVENT_CHANGE";
BI.DateTimeCombo.EVENT_BEFORE_POPUPVIEW = "BI.DateTimeCombo.EVENT_BEFORE_POPUPVIEW";
BI.shortcut("bi.date_time_combo", BI.DateTimeCombo);
