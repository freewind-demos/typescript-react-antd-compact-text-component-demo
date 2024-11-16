import React, { FC, useState } from 'react';
import { Input, Space, Button, Radio } from 'antd';
import { CompactLabel } from './components/CompactLabel';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = () => {
  const [size, setSize] = useState<SizeType>('middle');

  return (
    <div className={'Hello'}>
      <h1>Ant Design Space.Compact Demo</h1>
      
      <Radio.Group 
        value={size} 
        onChange={(e) => setSize(e.target.value)}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>

      <Space.Compact block size={size}>
        <CompactLabel size={size}>aaa</CompactLabel>
        <CompactLabel size={size}>bbb</CompactLabel>
        <Input placeholder="Enter your username" />
        <Button type="primary">Submit</Button>
      </Space.Compact>
    </div>
  );
}
