import React, { FunctionComponent } from 'react';
import './neomorphic.css';
import { BaseProps } from 'components/base/base';

export interface NeomorphicProps extends BaseProps {
  active?: boolean
}

export const Neomorphic: FunctionComponent<NeomorphicProps> = ({
  children,
  active = false,
  ...props
}) => (
  <div className={active ? 'neomorhpic-active' : 'neomorhpic'} {...props}>
    {children}
  </div>
);
