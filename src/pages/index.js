import { Helmet } from 'react-helmet';
import styles from 'styles/App.module.scss';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';
import FeatureList from 'components/FeatureList';

import { products } from 'data/products';

export default function Home() {
  const { metadata } = useSite();
  const { siteName } = metadata;

  return (
    <Layout>
      <Helmet>
        <title>{siteName}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.css"
        />
        <script>
          {`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-156374155-2', 'auto');
            ga('send', 'pageview');
          `}
        </script>
      </Helmet>

      <Section className={styles.homeHeader}>
        <Container>
          <h1 className={styles.homeTitle}>{siteName}</h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul className={styles.productGrid}>
            {products.map((product) => {
              return (
                <li key={product.id}>
                  <img src={product.image} />
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <Button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-description={product.description}
                    data-item-image={product.image}
                    data-item-name={product.name}
                    data-item-url="/"
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </Button>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.js"
      />
      <div
        hidden
        id="snipcart"
        data-api-key="ZDEyOWMzZmItYjE0My00YmU5LTg5NGQtZDQ5MTA0YWE0NDdhNjM3NDMyNjQ2NDgxMTY5OTE4"
      />
    </Layout>
  );
}
