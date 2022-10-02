import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import prisma from '../lib/prisma'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await prisma.user.findFirst({
    where: {
      email: 'example@test.com'
    }
  })

  return {
    props: {
      user
    }
  }
}
