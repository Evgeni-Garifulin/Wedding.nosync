import React from 'react'
import type { PageProps } from 'gatsby'

import { Layout, Title } from '@components';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout
      title='Mokka'
      description='Mokka is a Gatsby starter for building a personal blog.'
      keywords='gatsby, starter, blog'
      image='/preview/og-image.png'
    >
      <Title size='h1'>404. Page not found</Title>
    </Layout>
  )
}

export default NotFoundPage;
