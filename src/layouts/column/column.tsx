import React from 'react';
import { BaseProps } from 'components/base/base';
import './column.css';

export interface ColumnProps extends BaseProps {
  center?: boolean,
  children?: React.ReactNode,
  itemSpread?:string
}

export const Column:React.FC<ColumnProps> = ({
  children,
  center = false,
  itemSpread = 'center',
  ...props
}) => {
  const claxx = [];
  claxx.push('column-layout');
  claxx.push(center ? 'column-center' : '');
  return (
    <div className={claxx.join(' ')} style={{ justifyContent: { itemSpread } }} {...props}>
      {children}
    </div>
  );
};
