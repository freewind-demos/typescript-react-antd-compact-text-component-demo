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
  const { borderRadius } = theme.useToken().token;

  const sizeHeight = {
    small: '24px',
    middle: '32px',
    large: '40px'
  };

  const sizePadding = {
    small: '0 7px',
    middle: '4px 11px',
    large: '6px 15px'
  };

  const baseStyle: CSSProperties = {
    padding: sizePadding[size],
    border: '1px solid #d9d9d9',
    borderRight: 0,
    backgroundColor: '#fafafa',
    height: sizeHeight[size],
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: 1.5,
    transition: 'all 0.3s',
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