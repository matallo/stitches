import { global } from '../stitches.config';
import type { AppProps } from 'next/app';
import NextLink from 'next/link';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from '../stitches.config';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Avatar,
  Container,
  Flex,
  Footer,
  Icon,
  Link,
  Nav,
  NavItem,
  PageLayout,
  Separator,
  Text,
} from '../components';
import { ThemeToggle } from '../components/ThemeToggle';

const globalStyles = global({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  body: {
    padding: 0,
    margin: 0,
    backgroundColor: '$loContrast',
    color: '$hiContrast',
    fontFamily: '$base',
    fontSize: '$3',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontWeight: 400,
    lineHeight: '26.25px',
  },
  'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
    margin: 0,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  strong: {
    fontWeight: '600',
  },
  em: {
    fontStyle: 'italic',
  },
  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },
  'pre, code': { fontFamily: '$mono' },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const router = useRouter();
  const today = new Date();

  const isHome = router.pathname === '/';
  const isAboutPage = router.pathname === '/about';
  const isUsesThisPage = router.pathname === '/usesthis';
  const isWorkPage = router.pathname === '/work';
  const isPost = router.pathname.includes('/post/');
  const isStory = router.pathname.includes('/stories/');

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Container size="2">
        <Nav>
          <NavItem>
            <NextLink href="/" passHref>
              <Link variant="gray">Carlos Matallín</Link>
            </NextLink>
          </NavItem>
          <NavItem>
            <NextLink href="/" passHref>
              <Link variant="gray">About</Link>
            </NextLink>
          </NavItem>
          <NavItem>
            <NextLink href="/" passHref>
              <Link variant="gray">Work</Link>
            </NextLink>
          </NavItem>
          <NavItem>
            <ThemeToggle />
          </NavItem>
        </Nav>
      </Container>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator />
      </Flex>

      {isAboutPage || isUsesThisPage || isWorkPage ? (
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      ) : (
        // ) : isPost ? (
        //   <PostLayout>
        //     <Component {...pageProps} />
        //   </PostLayout>
        // ) : isStory ? (
        //   <StoryLayout>
        //     <Component {...pageProps} />
        //   </StoryLayout>
        <Component {...pageProps} />
      )}

      <Flex css={{ justifyContent: 'center' }}>
        <Separator />
      </Flex>

      {isHome ? (
        <Footer>
          <Container size="2">
            <Text variant="gray" css={{ ta: 'center' }}>
              © Copyright {today.getFullYear()} Carlos Matallín — Designed and
              built with{' '}
              <Icon size="16">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path
                    fill="#DD2E44"
                    d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
                  />
                </svg>
              </Icon>{' '}
              from Toronto
            </Text>
          </Container>
        </Footer>
      ) : (
        <Footer>
          <Avatar />
        </Footer>
      )}
    </ThemeProvider>
  );
}
export default MyApp;
