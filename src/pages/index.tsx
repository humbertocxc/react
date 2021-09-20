/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from './home.module.scss';


export default function Home() {
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
            <span>por R$9,90 por mês.</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
