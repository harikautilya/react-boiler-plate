import React, { FunctionComponent } from 'react';
import { BaseProps } from 'components/base/base';

export interface EditTextProps extends BaseProps {
  text?:string
}

const EditText:FunctionComponent<EditTextProps> = ({ text }) => {
  const onTextChange = (event:any) => {
    const valueEmitted = event.target.value;
  };
  return (<input type="text" value={text} onChange={onTextChange} />);
};
