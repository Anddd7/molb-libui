import * as React from "react";

export const Icon = (props: {
  type: string;
  category?: "licences";
  className?: string;
  size?: string;
  viewBox?: string;
}) => {
  if (props.category) {
    require(`./assets/${props.category}/${props.type}.svg`);
  } else {
    require(`./assets/${props.type}.svg`);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`dib v-mid ${props.className || ""}`}
      width={props.size || "24"}
      height={props.size || "24"}
      viewBox={props.viewBox || `0 0 24 24`}
    >
      <use xlinkHref={`#${props.type}`} />
    </svg>
  );
};
