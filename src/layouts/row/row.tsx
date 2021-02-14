import React from 'react';
import { BaseProps } from 'components/base/base';
import './row.css';

export interface RowProps extends BaseProps {
  center?: boolean,
  wrap?: 'reverse' | undefined,
  permenet?: boolean,
  children?: React.ReactNode
}

export const Row:React.FC<RowProps> = ({
  children,
  center = false,
  wrap,
  permenet = false,
  ...props
}) => {
  const claxx = [];
  claxx.push('row-layout');
  claxx.push(center ? 'row-center' : '');
  if (wrap !== undefined) {
    claxx.push('reverse-wrap');
  }
  if (permenet) {
    claxx.push('permenet');
  }
  return (
    <div className={claxx.join(' ')} {...props}>
      {children}
    </div>
  );
};
