import Layout from "@/components/Layout"
import Link from "next/link"
import {FaExclamationTriangle} from 'react-icons/fa'

import styles from "@/styles/404.module.css"

export default function PageNotFoundPage() {
  return (
    <Layout>
      <div className={styles.error}>
        <h1><FaExclamationTriangle/> 404</h1>
        <h4>Sorry, nothing in here</h4>
        <Link href="/">Go back to home</Link>
      </div>
    </Layout>
  );
}
