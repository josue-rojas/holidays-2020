import React from "react";

type IconProps = {
  size?: number;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Icon = ({ size, style, ...restDivProps }: IconProps) => {
  const _size = size || 32;
  const _styles: React.CSSProperties = {
    ...style,
    height: `${_size}px`,
    width: `${_size}px`,
  };

  return (
    <div {...restDivProps} style={_styles}>
      Icon
    </div>
  );
};

export default Icon;
