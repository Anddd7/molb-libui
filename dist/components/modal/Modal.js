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
import * as React from "react";
import { createPortal } from "react-dom";
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import classNames from "classnames";
import { Icon } from "../icons";
var styles = require("./modal.scss");
export var ModalTheme;
(function (ModalTheme) {
    ModalTheme[ModalTheme["Basic"] = 0] = "Basic";
    ModalTheme[ModalTheme["Large"] = 1] = "Large";
    ModalTheme[ModalTheme["Full"] = 2] = "Full";
})(ModalTheme || (ModalTheme = {}));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.onClose = function () {
            clearAllBodyScrollLocks();
            document.body.style.overflow = "auto";
            _this.props.onClose();
        };
        _this.controlBodyScrollable = function (show) {
            if (show) {
                _this.disableBodyScroll();
            }
            else {
                _this.enableBodyScroll();
            }
        };
        _this.disableBodyScroll = function () {
            disableBodyScroll(document.body);
        };
        _this.enableBodyScroll = function () {
            enableBodyScroll(document.body);
        };
        _this.onClickAway = function (e) {
            if ((_this.modalNode && _this.modalNode.contains(e.target)) ||
                (_this.footer && _this.footer.contains(e.target)) ||
                _this.props.hideCloseButton) {
                return;
            }
            _this.onClose();
        };
        _this.el = document.createElement("div");
        _this.modalRoot = document.body;
        _this.setUpModalContentRef = function (element) {
            return (_this.modalNode = element);
        };
        _this.setFooter = function (element) { return (_this.footer = element); };
        return _this;
    }
    Modal.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.show !== nextProps.show) {
            this.controlBodyScrollable(nextProps.show);
        }
    };
    Modal.prototype.componentDidMount = function () {
        this.modalRoot.appendChild(this.el);
    };
    Modal.prototype.componentWillUnmount = function () {
        clearAllBodyScrollLocks();
        document.body.style.overflow = "auto";
        this.modalRoot.removeChild(this.el);
    };
    Modal.prototype.render = function () {
        var _a;
        var modalStyle = classNames(styles.modal, (_a = {},
            _a[styles.block] = this.props.show,
            _a[styles.none] = !this.props.show,
            _a[styles.largeTheme] = this.props.theme === ModalTheme.Large,
            _a[styles.fullTheme] = this.props.theme === ModalTheme.Full,
            _a));
        var modalContent = (React.createElement("div", { className: modalStyle, onClick: this.onClickAway },
            React.createElement("section", { className: styles.modalContent, ref: this.setUpModalContentRef },
                !this.props.hideCloseButton && (React.createElement("div", { className: styles.close, onClick: this.onClose },
                    React.createElement(Icon, { type: "close" }))),
                React.createElement("div", { className: styles.content }, this.props.children)),
            this.props.footer && (React.createElement("section", { ref: this.setFooter, className: styles.footer }, this.props.footer))));
        return createPortal(modalContent, this.el);
    };
    Modal.defaultProps = {
        show: false,
        theme: ModalTheme.Basic
    };
    return Modal;
}(React.Component));
export { Modal };
//# sourceMappingURL=Modal.js.map