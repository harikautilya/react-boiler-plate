import React from 'react';

import 'main/App.css';
import { Neomorphic } from 'components/neomorphic/neomorphic';
import { Section } from 'layouts/section/section';
import { Row } from 'layouts/row/row';
import { Column } from 'layouts/column/column';

function App() {
  const bodyContent = 'Remember sky is not the limit';
  const projectContent = 'Start the project';
  return (
    <Section style={{ background: 'var(--primary-color)' }} orientation="vertical" fullscreen centerVertical centerHorizontal>
      <Row style={{ flexWrap: 'nowrap' }}>
        <Neomorphic>
          <Column style={{ padding: '4rem' }} center>
            <p style={{ color: 'white', fontSize: '60px' }}>K</p>
            <p style={{ color: 'white', fontSize: '12px' }}>{ projectContent }</p>
            <p style={{ color: 'white', fontSize: '12px' }}>{ bodyContent }</p>
          </Column>
        </Neomorphic>
        <Neomorphic style={{ margin: '0 3rem' }}>
          <Column style={{ padding: '4rem' }} center>
            <p style={{ color: 'white', fontSize: '60px' }}>K</p>
            <p style={{ color: 'white', fontSize: '12px' }}>{ projectContent }</p>
            <p style={{ color: 'white', fontSize: '12px' }}>{ bodyContent }</p>
          </Column>
        </Neomorphic>
        <Neomorphic style={{ margin: '0 3rem' }} active>
          <Column style={{ padding: '4rem' }} center>
            <p style={{ color: 'white', fontSize: '60px' }}>K</p>
            <p style={{ color: 'white', fontSize: '12px' }}>{ projectContent }</p>
            <p style={{ color: 'white', fontSize: '12px' }}>{ bodyContent }</p>
          </Column>
        </Neomorphic>
      </Row>
    </Section>
  );
}

export default App;
