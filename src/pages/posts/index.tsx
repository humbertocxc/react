import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.type', 'publication.content'],
    pageSize: 25,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {

    }
  }
}