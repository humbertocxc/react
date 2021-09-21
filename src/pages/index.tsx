/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from './home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';
import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe';


interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, bem vinde</span>
          <h1>Noticias sobre o mundo <span>Ract</span></h1>
          <p>
            Tenha acesso a todas as publicacoes <br />
            <span>por {product.amount} por mês.</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1JbwyvGFJ1kmmEDHelyUGxn6')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    }
  }
}