import React, { FC, CSSProperties, useContext } from 'react';
import { Typography, theme } from 'antd';
import { SpaceCompactItemContext } from 'antd/es/space/Compact';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

interface CompactLabelProps {
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
  size?: SizeType;
}

export const CompactLabel: FC<CompactLabelProps> = ({ 
  children, 
  style,
  className,
  size = 'middle'
}) => {
  const compactItemContext = useContext(SpaceCompactItemContext);
  const isFirstItem = compactItemContext?.isFirstItem;
  const { 
    borderRadius,
    controlHeightSM,
    controlHeight,
    controlHeightLG,
    paddingContentHorizontalSM,
    paddingContentHorizontal,
    paddingContentHorizontalLG,
    paddingXXS,
    paddingXS,
    padding,
    colorBorder,
    colorBgContainer,
    lineHeight,
    motionDurationMid,
  } = theme.useToken().token;

  const sizeHeight = {
    small: controlHeightSM,
    middle: controlHeight,
    large: controlHeightLG
  };

  const sizePadding = {
    small: `${paddingXXS}px ${paddingContentHorizontalSM}px`,
    middle: `${paddingXS}px ${paddingContentHorizontal}px`,
    large: `${padding}px ${paddingContentHorizontalLG}px`
  };

  const baseStyle: CSSProperties = {
    padding: sizePadding[size],
    border: `1px solid ${colorBorder}`,
    borderRight: 0,
    backgroundColor: colorBgContainer,
    height: sizeHeight[size],
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: lineHeight,
    transition: `all ${motionDurationMid}`,
    whiteSpace: 'nowrap',
    flex: 'none',
    ...(isFirstItem && {
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius
    })
  };

  return (
    <Typography.Text
      className={className}
      style={{
        ...baseStyle,
        ...style
      }}
    >
      {children}
    </Typography.Text>
  );
}; 