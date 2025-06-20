import React from 'react'
import type { PageProps } from 'gatsby'

import { Layout, Title } from '@components';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout
      title='Свадьба Агнеты и Жени'
      description='Свадьба Агнеты и Жени'
      keywords='Свадьба Агнеты и Жени'
      image='/preview/og-image.png'
    >
      <Title size='h1'>404. Page not found</Title>
    </Layout>
  )
}

export default NotFoundPage;
