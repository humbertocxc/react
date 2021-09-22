import Head from 'next/head';

import styles from './styles.module.scss';


export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março</time>
            <strong>Creating a Monorepo with lorem & Yarn Workspace</strong>
            <p>In this guide you will learn how to create Monorepo to manage multiple package with a shared build, test and related process.</p>
          </a>
          <a href="#">
            <time>12 de março</time>
            <strong>Creating a Monorepo with lorem & Yarn Workspace</strong>
            <p>In this guide you will learn how to create Monorepo to manage multiple package with a shared build, test and related process.</p>
          </a>
          <a href="#">
            <time>12 de março</time>
            <strong>Creating a Monorepo with lorem & Yarn Workspace</strong>
            <p>In this guide you will learn how to create Monorepo to manage multiple package with a shared build, test and related process.</p>
          </a>
        </div>
      </main>
    </>
  )
}