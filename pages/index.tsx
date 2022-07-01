import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Title } from '../src/styled-components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  // console.log(solution)

  return (
    <Container className="h-screen flex flex-col justify-center items-center">
      <Head>
        <title>DAA| Differential Eevolution Optimization</title>
        <meta name="description" content="visiual implementation of Differential Eevolution Optimization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 flex flex-col justify-center items-center">

        <Button href='/start/1' variant='outlined' className="absolute right-5 top-5">
          start
        </Button>

        <Title className={styles.title}>
          Welcome to the visiual implementation of Differential Eevolution Optimization!
        </Title>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ObaidQatan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with ❤️ by{" "}<strong className='text-blue-600 pl-1'>Obaid Qatan</strong>
        </a>
      </footer>
    </Container>
  )
}

export default Home
