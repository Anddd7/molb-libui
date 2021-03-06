import classNames from "classnames";
import React from "react";
import { AppAlertAlignmentTheme, AppAlertTheme } from "../EnumValues";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";
import style from "./appAlert.scss";

type AppAlertProps = {
  text: string;
  textToBold?: string;
  theme: AppAlertTheme;
  alignment?: AppAlertAlignmentTheme;
  showIcon?: boolean;
};

export const AppAlert = (props: AppAlertProps) => {
  const { theme, text, textToBold, alignment, showIcon } = props;

  const iconType = {
    [AppAlertTheme.Error]: "notification-error",
    [AppAlertTheme.Warning]: "alert",
    [AppAlertTheme.Informational]: "informational"
  };

  const appAlertClassName = classNames(style.appAlert, style[`${alignment}`], {
    [addLocatedErrorClassname("")]: theme === AppAlertTheme.Error
  });

  const renderText = () => {
    if (textToBold) {
      const splitText = text.split(new RegExp(`(${textToBold})`, "gi"));
      return (
        <div className={style.appAlertText}>
          {splitText.map((part, i) =>
            part.toLowerCase() === textToBold.toLowerCase() ? (
              <span className={style.appAlertTextBold} key={i}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </div>
      );
    }
    return <div className={style.appAlertText}>{text}</div>;
  };

  return (
    <div className={style[`${theme}`]}>
      <div className={appAlertClassName}>
        {showIcon && (
          <Icon
            className={style.appAlertIcon}
            type={iconType[theme]}
            size="24"
          />
        )}
        {renderText()}
      </div>
    </div>
  );
};

AppAlert.defaultProps = {
  alignment: AppAlertAlignmentTheme.LEFT,
  showIcon: true
};
