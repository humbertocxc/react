import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { useGetStaticProps } from 'next-slicezone/hooks';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

type Post = {
  slug: string,
  title: string,
  except: string,
  updatedAt: string,
};

interface PostProps {
  posts: Post[],
}

export default function Posts({ posts }: PostProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          { posts.map(post => (
            <a href="#" key={post.slug}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.except}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  console.log(JSON.stringify(prismic, null, 2))

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 40,
    }
)

  console.log('o response é esse\n', JSON.stringify(response, null, 2))

  const posts = response.results.map( post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      except: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-br', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  })

  return {
    props: {
      posts
    }
  }
}