import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import ReactJkMusicPlayer from "react-jinke-music-player";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Player from '../components/player'
import audio from '../I_ll_Follow_You.mp3'
import ReactPlayer from "react-player"

import '../animate.css'

import BackgroundImage from 'gatsby-background-image'


const audioList1 = [
  {
    name: '高尚',
    singer: '薛之谦',
    cover: '//cdn.lijinke.cn/nande.jpg',
    musicSrc: '//cdn.lijinke.cn/gaoshang.mp3',
    
  }]




const Music= ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "musicman.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          style={{ overflow: "hide" }}
          Tag="section"
          className={className}
          fluid={imageData}
        >
          <div style={{ height: "100vh", width: "100vw" }}>
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://soundcloud.com/kunal-singh-92/y2matecom-dripreport-skechers-clean-lyrics-jkbwu2ifowo"
            />
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const Music1= styled(Music)`
  width: 100%;

  background-position:center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default Music