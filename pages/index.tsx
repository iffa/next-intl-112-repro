import type { GetStaticPropsContext, NextPage } from "next";
import { useTranslations } from "next-intl";
import styles from "../styles/Home.module.css";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

const Home: NextPage = () => {
  const t = useTranslations("Index");

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{t("title")}</h1>
      </main>
    </div>
  );
};

export default Home;
