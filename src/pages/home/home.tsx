import React from 'react';
import { BaseProps, Neomorphic } from 'components';
import { Section, Row, Column } from 'layouts';

export interface HomeProps extends BaseProps {

}

export const Home: React.FC<HomeProps> = () => {
  const bodyContent = 'Remember sky is not the limit';
  const projectContent = 'Start the project';
  return (
    <Section style={{ background: 'var(--primary-color)' }} orientation="vertical" fullscreen centerVertical centerHorizontal>
      <Neomorphic active>
        <Column style={{ padding: '4rem' }} center>
          <p style={{ color: 'white', fontSize: '60px' }}>K</p>
          <p style={{ color: 'white', fontSize: '12px' }}>{projectContent}</p>
          <p style={{ color: 'white', fontSize: '12px' }}>{bodyContent}</p>
        </Column>
      </Neomorphic>
    </Section>
  );
};
