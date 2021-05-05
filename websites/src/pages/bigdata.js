import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Bigdata() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={'Bigdata'}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
    >
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}