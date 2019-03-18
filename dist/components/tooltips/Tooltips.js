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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import classnames from "classnames";
import * as React from "react";
import Popup from "reactjs-popup";
import { TooltipsLocationTheme } from "..";
import { Link } from "../link";
var styles = require("./tooltips.scss");
var OFFSET = 11;
var ARROW_OFFSET = "20px";
var TEXT_COLOR_2 = "#313840";
var Tooltips = /** @class */ (function (_super) {
    __extends(Tooltips, _super);
    function Tooltips(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false
        };
        _this.openPopup = _this.openPopup.bind(_this);
        _this.closePopup = _this.closePopup.bind(_this);
        return _this;
    }
    Tooltips.prototype.render = function () {
        var _this = this;
        var _a, _b;
        var _c = this.props, trigger = _c.trigger, height = _c.height, width = _c.width, position = _c.position, linkLabel = _c.linkLabel, childrenClassname = _c.childrenClassname, specializedPosition = _c.specializedPosition;
        var specializedStyle = this.calculateSpecializedStyle();
        var desktopContentStyle = {
            border: "none",
            zIndex: "300",
            borderRadius: 5,
            boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.03), 0 7px 25px 0 rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.03)",
            width: width,
            height: height,
            padding: 0
        };
        var arrowStyle = this.props.arrowStyle || {
            boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 1px",
            backgroundColor: TEXT_COLOR_2
        };
        if (specializedPosition && specializedStyle.direction !== "") {
            arrowStyle = __assign({}, arrowStyle, (_a = {}, _a["" + specializedStyle.overwrite] = "inherent", _a["" + specializedStyle.direction] = specializedStyle.arrowOffset, _a));
        }
        var childrenClassNames = classnames(styles.childrenContainer, (_b = {},
            _b["" + childrenClassname] = childrenClassname,
            _b["" + styles.withLabelChildren] = linkLabel,
            _b));
        var tooltipContent = this.getTooltipContent(this.props);
        var show = this.state.show;
        return (React.createElement("div", { className: styles.tooltipsContainer, onClick: show ? function () { return _this.closePopup(); } : function () { return _this.openPopup(); } },
            React.createElement(Popup, { arrowStyle: arrowStyle, trigger: trigger, position: position, children: React.createElement("div", { className: childrenClassNames }, tooltipContent), open: show, contentStyle: desktopContentStyle, closeOnDocumentClick: true, onClose: function () { return _this.closePopup(); }, offsetX: specializedStyle.offsetX })));
    };
    Tooltips.prototype.openPopup = function () {
        this.setState({ show: true });
    };
    Tooltips.prototype.getTooltipContent = function (props) {
        var children = props.children, linkLabel = props.linkLabel, linkUrl = props.linkUrl, linkTarget = props.linkTarget, linkIcon = props.linkIcon;
        if (!linkLabel) {
            return children;
        }
        return (React.createElement("div", null,
            children,
            React.createElement("div", { className: styles.linkContainer },
                React.createElement(Link, { label: linkLabel, icon: linkIcon || "arrowNext", onClick: function () {
                        return;
                    }, link: linkUrl, target: linkTarget }))));
    };
    Tooltips.prototype.closePopup = function () {
        this.setState({ show: false });
    };
    /**
     * use magic number 22px to fit UX design.
     * You can use tooltip with specializedPosition={false}
     * or just delete this magic calculate logic directly.
     * Or need some help can find Wu Yifan.
     */
    Tooltips.prototype.calculateSpecializedStyle = function () {
        var _a = this.props, specializedPosition = _a.specializedPosition, position = _a.position;
        // director is
        var specializedStyle = {
            direction: "",
            offsetX: 0,
            arrowOffset: "",
            overwrite: ""
        };
        if (!specializedPosition) {
            return specializedStyle;
        }
        switch (position) {
            case TooltipsLocationTheme.BottomLeft: {
                specializedStyle.direction = "left";
                specializedStyle.offsetX = -OFFSET;
                specializedStyle.arrowOffset = ARROW_OFFSET;
                break;
            }
            case TooltipsLocationTheme.BottomRight: {
                specializedStyle.direction = "right";
                specializedStyle.offsetX = OFFSET;
                specializedStyle.arrowOffset = ARROW_OFFSET;
                specializedStyle.overwrite = "left";
                break;
            }
            case TooltipsLocationTheme.BottomCenter: {
                break;
            }
        }
        return specializedStyle;
    };
    return Tooltips;
}(React.Component));
export { Tooltips };
//# sourceMappingURL=Tooltips.js.map