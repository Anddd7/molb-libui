var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
import classnames from "classnames";
import * as React from "react";
import { InputType, Size, TooltipsLocationTheme } from "../EnumValues";
import { Icon } from "../icons";
import { Tooltips } from "../tooltips";
import { addLocatedErrorClassname } from "../utils";
var styles = require("./input.scss");
var DEFAULT_MAX_LENGTH = 30;
var defaultChangesFilterRegexDict = (_a = {},
    _a[InputType.IntegerText] = /^-?(\d*)$/,
    _a[InputType.PositiveIntegerText] = /^(\d*)$/,
    _a[InputType.DecimalText] = /^-?([0-9]*|[0-9]+\.[0-9]*)$/,
    _a[InputType.PositiveDecimalText] = /^([0-9]*|[0-9]+\.[0-9]*)$/,
    _a);
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = function (event) {
            var _a = _this.props, type = _a.type, customizedChangesFilterRegex = _a.customizedChangesFilterRegex;
            var newValue = event.target.value;
            var defaultChangesFilterRegex = type && defaultChangesFilterRegexDict[type];
            // first check defaultChangesFilterRegex,
            // then check customizedChangesFilterRegex after.
            if ((defaultChangesFilterRegex &&
                !defaultChangesFilterRegex.test(newValue)) ||
                (customizedChangesFilterRegex &&
                    !customizedChangesFilterRegex.test(newValue))) {
                event.target.value = _this.state.previousValue;
                return;
            }
            if (_this.props.disabled ||
                newValue.length > (_this.props.maxLength || DEFAULT_MAX_LENGTH)) {
                event.target.value = _this.state.previousValue;
                return;
            }
            _this.props.onChange(event);
            _this.setState({
                characterCount: event.target.value.length,
                previousValue: event.target.value
            });
        };
        _this.getRawInputType = function (type) {
            if (type === InputType.Text || !type) {
                return "text";
            }
            else if (type === InputType.Email) {
                return "email";
            }
            else if (type === InputType.PositiveIntegerText) {
                return "tel";
            }
            else {
                return "number";
            }
        };
        _this.state = {
            characterCount: (_this.props.value || "").toString().length,
            previousValue: ""
        };
        return _this;
    }
    Input.prototype.render = function () {
        var _this = this;
        var _a;
        var size = styles["" + this.props.size];
        var rootContainerClassname = classnames(styles.rootContainer, (_a = {},
            _a[styles["disabled"]] = this.props.disabled,
            _a[styles["validationError"]] = this.props.showError,
            _a));
        var showFooterSection = this.props.showError ||
            this.props.helperMsg ||
            this.props.showCharacterCount;
        return (React.createElement("div", { className: rootContainerClassname, "data-scrollpoint": this.props.label ? true : false },
            this.props.label && (React.createElement("div", { className: styles.label },
                React.createElement("p", null, this.props.label),
                this.props.showTooltip && (React.createElement(Tooltips, { trigger: function (open) { return (React.createElement(Icon, { type: "help", size: "16", className: classnames(styles.labelIcon, open && styles.openTooltip) })); }, position: this.props.toolTipsPosition
                        ? this.props.toolTipsPosition
                        : TooltipsLocationTheme.BottomLeft, specializedPosition: true },
                    React.createElement("div", { className: styles.toolTipsContent }, this.props.toolTipsContent))))),
            React.createElement("div", { className: styles.inlineWrapper },
                React.createElement("div", { className: styles.inline },
                    React.createElement("input", { disabled: this.props.disabled, className: styles.field + " " + size + " " + this.props.className + " " + (this.props.showError ? styles.error : ""), value: this.props.value, type: this.getRawInputType(this.props.type), maxLength: this.props.maxLength, onChange: this.handleOnChange, onBlur: function () {
                            if (_this.props.onBlur) {
                                _this.props.onBlur();
                            }
                        }, onKeyPress: function (event) {
                            if (_this.props.onKeyPress) {
                                _this.props.onKeyPress(event);
                            }
                        }, placeholder: this.props.placeholder }),
                    this.getRightInlineElement()),
                this.props.inlineElement),
            showFooterSection && (React.createElement("div", { className: styles.footerSection },
                React.createElement("label", { className: (this.props.showError
                        ? addLocatedErrorClassname(styles.redMsg)
                        : styles.helperMsg) + " " + styles.isEmpty }, this.props.showError
                    ? this.props.errorMsg
                    : this.props.helperMsg),
                this.props.showCharacterCount && (React.createElement("div", { className: styles.countMsg }, this.state.characterCount + "/" + this.props.maxLength))))));
    };
    Input.prototype.getRightInlineElement = function () {
        var element = React.createElement(React.Fragment, null);
        var _a = this.props, showError = _a.showError, suffix = _a.suffix, iconSignifier = _a.iconSignifier;
        if (!(showError || suffix || iconSignifier)) {
            return React.createElement(React.Fragment, null);
        }
        if (iconSignifier) {
            element = iconSignifier;
        }
        if (suffix) {
            element = React.createElement("span", { className: styles.suffix }, suffix);
        }
        if (showError) {
            element = React.createElement(Icon, { className: styles.errorIcon, size: "16", type: "error" });
        }
        return React.createElement("div", { className: styles.rightInlineElementContainer }, element);
    };
    Input.defaultProps = {
        className: "",
        disabled: false,
        maxLength: DEFAULT_MAX_LENGTH,
        minLength: 0,
        placeholder: "",
        size: Size.Medium,
        type: InputType.Text,
        showCharacterCount: false,
        showTooltip: false,
        inlineElement: ""
    };
    return Input;
}(React.Component));
export { Input };
//# sourceMappingURL=Input.js.map