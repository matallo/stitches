import NextLink from 'next/link';
import React from 'react';
import { Avatar, Box, Container, Link, Paragraph, Text } from '../components';
import Layout from '../components/PageLayout';
import { differenceInCalendarYears } from 'date-fns';

export default function Home() {
  return (
    <Layout>
      <Box css={{ py: '$16' }}>
        <Container size="2">
          <Avatar size="lg" />

          <Box css={{ mt: '$10', mb: '$12' }}>
            <Text
              as="h1"
              size="8"
              css={{
                fontWeight: '800',
                mb: '$2',
              }}
            >
              Hi, I&apos;m Carlos Matallín
            </Text>
            <Text variant="gray" size="5">
              Code, design, and mountains
            </Text>
          </Box>

          <Box>
            <Paragraph size="4">
              I&apos;m a{' '}
              {differenceInCalendarYears(
                new Date(),
                new Date('February 2, 88'),
              )}{' '}
              year old explorer from Valencia living in Toronto. I&apos;m a web
              enthusiast, passionate about technology, design, and building
              digital products. I climb mountains, too.
            </Paragraph>
            <Paragraph size="4">
              I&apos;m a product oriented Frontend developer and Interaction
              designer. Currently, I work as Senior Web Developer at{' '}
              <NextLink href="https://www.shopify.com/" passHref>
                <Link>Shopify</Link>
              </NextLink>{' '}
              , making commerce better for everyone.
            </Paragraph>
            <Paragraph size="4">
              This is{' '}
              {
                <NextLink href="/usesthis/" passHref>
                  <Link>what I use</Link>
                </NextLink>
              }{' '}
              to get stuff done.
            </Paragraph>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
