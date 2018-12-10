import { Button } from "@libui/components/button";
import { Size, Theme } from "@libui/components/EnumValues";
import * as React from "react";

const styles = require("./modalContent.scss");

export interface IModalContentProps {
  header?: string;
  subheader?: string;
  leftButtonLabel?: string;
  leftButtonOnClick?: any;
  rightButtonLabel?: string;
  rightButtonOnClick?: any;
}

export class ModalContent extends React.Component<IModalContentProps, {}> {
  public render() {
    return (
      <div className={styles.notice}>
        {this.props.header && <header>{this.props.header}</header>}
        {this.props.subheader && <p>{this.props.subheader}</p>}
        <div
          className={`${styles.modalFooter} ${
            this.props.rightButtonLabel ? styles.twoBtnFooter : ""
          }`}
        >
          {this.props.leftButtonLabel && (
            <Button
              className={styles.modalButton}
              label={this.props.leftButtonLabel}
              onClick={this.props.leftButtonOnClick}
              size={Size.Large}
              theme={Theme.Ghost}
            />
          )}
          {this.props.rightButtonLabel && (
            <Button
              className={styles.modalButton}
              label={this.props.rightButtonLabel}
              onClick={this.props.rightButtonOnClick}
              size={Size.Large}
              theme={Theme.Primary}
            />
          )}
        </div>
      </div>
    );
  }
}
