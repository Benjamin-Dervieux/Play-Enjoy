import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout.js";
import { CirculeChoice } from "@/components/CirculeChoice.js";

export default function Home() {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.h1}>PLAY & ENJOY</h1>
        </div>

        <div>
          <CirculeChoice />
        </div>
      </div>
    </Layout>
  );
}
