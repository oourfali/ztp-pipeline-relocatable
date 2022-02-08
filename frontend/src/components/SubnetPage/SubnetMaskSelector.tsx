import React from 'react';
import { Stack, StackItem, Title } from '@patternfly/react-core';

import { IpSelector } from '../IpSelector';

export const SubnetMaskSelector: React.FC = () => {
  const [mask, setMask] = React.useState('            ');

  return (
    <Stack className="wizard-content" hasGutter>
      <StackItem>
        <Title headingLevel="h1">Subnet mask</Title>
      </StackItem>
      <StackItem>What is your subnet mask address?</StackItem>
      <StackItem isFilled>
        <IpSelector address={mask} setAddress={setMask} />
      </StackItem>
    </Stack>
  );
};
