import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomePageProjects from '@site/src/components/HomePageProjects';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <img src={'img/logo.svg'} alt={'Infinite Red Logo'} className={styles.logo}/>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Docs for Open Source Projects from Infinite Red, including Reactotron, react-native-mlkit, gluegun and more">
      <HomepageHeader />
      <main>
        <HomePageProjects />
      </main>
    </Layout>
  );
}
