import React from 'react';

import { Container, Separator } from './styles';

import { ServerButton } from '../ServerButton';

export const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3}/>
      <ServerButton />
    </Container>
  );
}