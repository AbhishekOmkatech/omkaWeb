import React from 'react'
import { Helmet } from 'react-helmet';
import err from '../../images/404.png'
const Page404 = () => {
  return (
    <div>
       <Helmet>
        <title>404-Error</title>
        <meta
          name="description"
          content="We’re a website development company in Noida. Omka Tech offers SEO-friendly, mobile-responsive websites with 24/7 support. Open your online store with us."
        />
        <meta
          name="keywords"
          content="Web development company, Website Development Company, Web development, website development"
        />
      </Helmet>
    <div class="container">
      <div class="gif">
        <img src={err} alt="gif_ing" />
      </div>
     
    </div>


    </div>
  )
}

export default Page404
