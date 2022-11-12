import React from 'react';
import { BaseProps } from 'components/base/base';
import './section.css';

export interface SectionProps extends BaseProps {
  orientation: 'vertical' | 'horizontal',
  wrap?:boolean,
  fullscreen?: boolean,
  centerVertical?: boolean,
  centerHorizontal?: boolean,
  children?: React.ReactNode
}

export const Section : React.FC<SectionProps> = ({
  orientation,
  wrap = true,
  fullscreen = false,
  centerVertical = false,
  centerHorizontal = false,
  children,
  ...props
}) => {
  const localStyles = ['container'];
  localStyles.push(orientation === 'vertical' ? 'column' : 'row');
  localStyles.push(wrap ? 'wrap' : 'nowrap');
  localStyles.push(fullscreen ? 'full-screen' : '');
  localStyles.push(centerHorizontal ? 'center-horizontal' : '');
  localStyles.push(centerVertical ? 'center-vertical' : '');
  return (
    <section
      className={localStyles.join(' ')}
      {...props}
    >
      { children }
    </section>
  );
};
