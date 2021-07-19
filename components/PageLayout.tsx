import React from 'react';

interface PageLayoutProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <>{children}</>;
};

export default PageLayout;
