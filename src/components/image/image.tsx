import React from 'react';
import './image.css';
import { Text } from '../text/text';
import { BaseProps } from '../base/base';

export interface ImageViewProps extends BaseProps{
  src?:string,
  staticIUrl?:string,
  text?:string,
  subtitle?:string
}

export const ImageView:React.FC<ImageViewProps> = ({
  src = '',
  text = '',
  subtitle = '',
  staticIUrl = '',
  ...props
}) => {
  let data = src;
  if (staticIUrl !== '') {
    data = `${process.env.PUBLIC_URL}/${staticIUrl}`;
  }
  return (
    <div className="container-img item" {...props}>
      <div className="img-body item">
        <img loading="lazy" src={data} alt="" />
        { text !== '' ? <Text mode="c1" text={text} /> : ''}
        { subtitle !== '' ? <Text mode="c2" text={subtitle} style={{ fontStyle: 'italic' }} /> : ''}
      </div>
    </div>
  );
};
