import React, { FC } from 'react';
import { Input, Space, Button } from 'antd';
import { CompactLabel } from './components/CompactLabel';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = () => {
  return (
    <div className={'Hello'}>
      <h1>Ant Design Space.Compact Demo</h1>
      <Space.Compact block>
        <CompactLabel>aaa</CompactLabel>
        <CompactLabel>bbb</CompactLabel>
        <Input placeholder="Enter your username" />
        <Button type="primary">Submit</Button>
      </Space.Compact>
    </div>
  );
}
