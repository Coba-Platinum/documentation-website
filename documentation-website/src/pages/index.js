import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Projects from "../components/Projects";

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">📋{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Here you can view all of the available official documentation for any of the projects created by Coba Platinum! This website will be slowly updated over time as projects are developed! If there is anything missing, please be patient as I should eventually get to it! 😀</p>
        <br></br>
        <div class="alert alert--warning" role="alert">
          This documentation website is still 
          <strong> under construction</strong>
          ! Please expect there to be missing information and potentially broken web pages!
        </div>
        <br></br>
        <br></br>
        <h2>Available Documentation Categories</h2>
        <Projects />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
