import Head from "next/head";
import Products from "../components/Products/Products";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import { getProducts, getUser } from "../services/api";
import styles from "../styles/Global.module.scss";
import { AppContextProvider, useAppContext } from "../services/context/context";
import { useEffect, useState } from "react";

export default function Home({ items, user }) {

  return (
    <AppContextProvider>
        <div className={styles.bodyBg}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Nav user={user} />
            <Header />
            <Products
              items={items}
              userPoints={user.points}
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
    </AppContextProvider>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      items: await getProducts(),
      user: await getUser(),
    },
  };
}
