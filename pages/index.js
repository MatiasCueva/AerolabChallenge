import Head from "next/head";
import Products from "../components/Products/Products";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import { getHistory, getProducts, getUser } from "../services/api";
import styles from "../styles/Global.module.scss";
import useAppContext  from "../context/context";
import { useEffect } from "react";

export default function Home({ products, user, history }) {
  const { variableState, setVariableState } = useAppContext();

  useEffect(()=>{
    if(!variableState.products || !variableState.user ){
      setVariableState({...variableState,products, user, history});
    }
    },[variableState]);

    if(!variableState.products || !variableState.user) return <></>

  return (

        <div className={styles.bodyBg}>
          <Head>
            <title>Electronics</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="Aerolab Challenge"/>
            <link rel="icon" type="image/png" href="../public/icons/aerolab-logo.svg" />
          </Head>

          <main>
            <Nav user={variableState.user} history={variableState.history} />
            <Header />
            <Products
              products={variableState.products}
              userPoints={variableState.user.points}
            />
          </main>


          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
     )
}

export async function getServerSideProps() {
  return {
    props: {
      products: await getProducts(),
      user: await getUser(),
      history: await getHistory(),
    },
  };
}
