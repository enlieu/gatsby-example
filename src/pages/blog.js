import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page!</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum
          atque dicta vero temporibus? Est dolorum minus odit excepturi. Odio
          aperiam distinctio molestiae temporibus optio.
        </p>
      </div>
    </Layout>
  )
}

export default blog
