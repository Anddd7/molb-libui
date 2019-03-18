import React from "react";
import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Button } from "../../components/button";
import { Modal, ModalTheme } from "../../components/modal";
import { ModalContent } from "../../components/modalContent";
import { CategoryName, wInfo } from "../utils";
var styles = require("./modal.stories.scss");
var store1 = new Store({
    show: false
});
var store2 = new Store({
    show: false
});
var store3 = new Store({
    show: false
});
var store4 = new Store({
    show: false
});
storiesOf(CategoryName.Modal, module).addWithJSX("Modal", wInfo("")(function () { return (React.createElement("div", null,
    React.createElement("div", { className: styles.container },
        React.createElement(State, { store: store1 },
            React.createElement(Modal, { key: "modal-1", theme: ModalTheme.Basic, show: !!store1.get("show"), onClose: function () { return store1.set({ show: false }); } },
                React.createElement(ModalContent, { header: "This is Header of Modal Content.", subheader: "This is Sub Header of Modal Content", leftButtonLabel: "Left Button", leftButtonOnClick: action("left-button-click"), rightButtonLabel: "Right Button", rightButtonOnClick: action("left-button-click") }))),
        React.createElement(Button, { label: "Basic Modal", onClick: function () { return store1.set({ show: true }); }, key: "modal-button1" })),
    React.createElement("div", { className: styles.container },
        React.createElement(State, { store: store2 },
            React.createElement(Modal, { key: "modal-2", theme: ModalTheme.Large, show: !!store2.get("show"), onClose: function () { return store2.set({ show: false }); } },
                React.createElement("div", { style: {
                        width: "750px"
                    } },
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra")))),
        React.createElement(Button, { label: "Large Modal", onClick: function () { return store2.set({ show: true }); }, key: "modal-button2" })),
    React.createElement("div", { className: styles.container },
        React.createElement(State, { store: store3 },
            React.createElement(Modal, { key: "modal-3", theme: ModalTheme.Full, show: !!store3.get("show"), onClose: function () { return store3.set({ show: false }); }, footer: React.createElement("div", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "750px"
                    } },
                    React.createElement("label", null, "label"),
                    React.createElement(Button, { label: "Apply Now", onClick: function () { return ({}); } })) },
                React.createElement("div", null,
                    React.createElement("h4", null, "Something need to show "),
                    React.createElement("p", null, "abracadabra a long list.....abracadabra abracadabra abracadabra abracadabra abracadabra abracadabra asldfk alskdfjlasdkf asdalsdkfjals asldfkasldfkjalskdfjl alsdkfjalskdj"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "abracadabra"),
                    React.createElement("p", null, "xxxxxxxxxxxxxxx"),
                    React.createElement("p", null, "xxxxxxxxxxxx"),
                    React.createElement("p", null, "xxxxxxxxxxxx"),
                    React.createElement("p", null, "xxxxxxxxxx")))),
        React.createElement(Button, { label: "Full Modal", onClick: function () { return store3.set({ show: true }); }, key: "modal-button3" })),
    React.createElement("div", { className: styles.container },
        React.createElement(State, { store: store4 },
            React.createElement(Modal, { key: "modal-4", theme: ModalTheme.Basic, show: !!store4.get("show"), onClose: function () { return store4.set({ show: false }); }, hideCloseButton: true },
                React.createElement(ModalContent, { header: "This is Header of Modal Content.", subheader: "This is Sub Header of Modal Content", leftButtonLabel: "close", leftButtonOnClick: function () {
                        store4.set({ show: false });
                        action("left-button-click");
                    }, rightButtonLabel: "Right Button", rightButtonOnClick: action("right-button-click") }))),
        React.createElement(Button, { label: "Basic Modal without close icon", onClick: function () { return store4.set({ show: true }); }, key: "modal-button1" })))); }));
//# sourceMappingURL=Modal.stories.js.map