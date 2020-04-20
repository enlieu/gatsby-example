import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import img from "../images/image3.jpeg"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image1.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: { eq: "image4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log("DATA", data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" />
        <h3>placeholder text</h3>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h3>placeholder text</h3>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </div>
        <Image fluid={data.example.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
