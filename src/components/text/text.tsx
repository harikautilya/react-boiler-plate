import React from 'react';
import { BaseProps } from 'components/base/base';
import './text.css';

export interface TextProps extends BaseProps{
  text: string,
  mode: 'c1' | 'c2',
  align?: 'start' | 'center' | 'end'
}

type SingleLineProps = {
  singleText : string
};

const SingleLineText:React.FC<SingleLineProps> = ({ singleText }) => <p>{ singleText }</p>;
export const Text: React.FC<TextProps> = ({
  text,
  mode,
  align = 'start',
  ...props
}) => {
  const claxx = [];
  claxx.push(mode);
  claxx.push(`text-aligin-${align}`);
  const lines = text.toString().split('\n');
  const divLines = lines.map((str, item) => <SingleLineText singleText={str} />);
  return (
    <div className={claxx.join(' ')} {...props}>
      { divLines }
    </div>
  );
};
