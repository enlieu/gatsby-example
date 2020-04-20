import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
    </div>
  )
}

export default Header

// import React from "react"
// import Layout from "../components/Layout"
// import { useStaticQuery, graphql } from "gatsby"

// const Header = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           author
//           data
//           description
//           person {
//             age
//             name
//           }
//           title
//         }
//       }
//     }
//   `)
//   return (
//     <Layout>
//       <h1>{data.site.siteMetadata.person.age}</h1>
//     </Layout>
//   )
// }

// export default Header
