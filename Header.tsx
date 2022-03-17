import React from 'react';
import { Hero, Container, Title } from 'rbx';

export default () => (
  <Hero>
    <Hero.Body>
      <Container>
        <Title>Hero title</Title>
        <Title as="h2" subtitle>
          Hero Subtitle
        </Title>
      </Container>
    </Hero.Body>
  </Hero>
);
