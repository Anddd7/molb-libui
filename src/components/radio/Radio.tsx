import classNames from "classnames";
import * as React from "react";
import { Icon } from "../icons";
import { addLocatedErrorClassname } from "../utils";

const styles = require("./radio.scss");

export interface IRadioProps {
  className?: string;
  text?: string;
  optionList: IOptionValue[];
  value?: string;
  onChange: (e: string) => void;
  disabled?: boolean;
  showError?: boolean;
  errorMsg?: string;
  id?: string;
  disableWidth?: boolean;
  radioTextStyleOverride?: string;
  labelStyleOverride?: string;
  subsequentQuestion?: React.ReactNode | string;
  verticalDisplay?: boolean;
}

export interface IOptionValue {
  value: string;
  label: string;
  disabled?: boolean;
}

const getOptionIcon = (optionValue: IOptionValue, props: IRadioProps) => {
  if (optionValue.value === props.value) {
    return <Icon type="radioSelected" />;
  } else {
    if (props.disabled || optionValue.disabled) {
      return <Icon type="radioDisabledUnselected" />;
    }
    return <Icon type="radioEnabledUnselected" />;
  }
};

const getOptionComponents = (props: IRadioProps) => {
  const radioTextClass = classNames(
    props.labelStyleOverride || "",
    styles.optionText
  );
  const optionComponents = props.optionList.map(optionValue => {
    const isDisabled = props.disabled || optionValue.disabled;
    const isSelected = optionValue.value === props.value;
    const radioClassString = classNames(styles.checkBoxIcon, {
      [styles.radioContentDisabled]: isDisabled,
      [styles.radioWrapperDisabled]: isDisabled,
      [styles.radioWrapperEnable]: !isDisabled,
      [styles.radioWrapperSelected]: isSelected,
      [styles.radioWrapperUnselected]: !isSelected,
      [styles.widthDisabled]: props.disableWidth || props.verticalDisplay
    });

    const optionIcon = getOptionIcon(optionValue, props);

    const onRadioClick = (event: React.SyntheticEvent<HTMLInputElement>) => {
      if (isDisabled || props.value === event.currentTarget.value) {
        return;
      }
      props.onChange(event.currentTarget.value);
    };

    return (
      <>
        <label className={radioClassString} key={optionValue.value.toString()}>
          <span>{optionIcon}</span>
          <input
            type="radio"
            value={optionValue.value}
            disabled={isDisabled}
            onClick={onRadioClick}
          />
          <span className={radioTextClass}>{optionValue.label}</span>
        </label>
        {isSelected && props.subsequentQuestion}
      </>
    );
  });
  return optionComponents;
};

export const Radio = (props: IRadioProps) => {
  const optionComponents = getOptionComponents(props);
  const radioClass = classNames(
    props.className ? props.className : "",
    styles.radioWrapper
  );
  const radioTextClass = classNames(
    props.disabled ? styles.radioContentDisabled : "",
    props.radioTextStyleOverride || "",
    styles.radioText
  );
  const radioLabelClass = classNames(
    styles.radioLabel,
    props.verticalDisplay ? styles.verticalOptions : ""
  );
  return (
    <div id={props.id} className={radioClass}>
      {props.text && <div className={radioTextClass}>{props.text}</div>}
      <div className={radioLabelClass}>{optionComponents}</div>
      {props.showError && (
        <div className={addLocatedErrorClassname(styles.errorMsg)}>
          {props.errorMsg}
        </div>
      )}
    </div>
  );
};
