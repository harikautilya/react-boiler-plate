import React from 'react';
import { BaseProps } from 'components/base/base';
import { Neomorphic } from 'components/neomorphic/neomorphic';
import { Section } from 'layouts/section/section';
import { Row } from 'layouts/row/row';
import { Column } from 'layouts/column/column';

export interface HomeProps extends BaseProps{

}

export const Home: React.FC<HomeProps> = () => {
  const bodyContent = 'Remember sky is not the limit';
  const projectContent = 'Start the project';
  return (
    <Section style={{ background: 'var(--primary-color)' }} orientation="vertical" fullscreen centerVertical centerHorizontal>
      <Neomorphic active>
        <Column style={{ padding: '4rem' }} center>
          <p style={{ color: 'white', fontSize: '60px' }}>K</p>
          <p style={{ color: 'white', fontSize: '12px' }}>{ projectContent }</p>
          <p style={{ color: 'white', fontSize: '12px' }}>{ bodyContent }</p>
        </Column>
      </Neomorphic>
    </Section>
  );
};
