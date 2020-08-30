import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Swipe from "./drawer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fade from "react-reveal/Fade"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "mine.jpg" }) {
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
          style={{ overflow: "scroll" }}
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`green`}
        >
          <Fade left>
            <div
              style={{
                height: "100vh",
                marginLeft: "15%",
                marginTop: "70px",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                float: "left",
              }}
            >
              <div>
                <AniLink
                  style={{ textDecoration: "none" }}
                  cover
                  direction="right"
                  to="bio"
                >
                  <h1
                    style={{
                      textAlign: "left",
                      fontSize: "14vh",
                      textShadow: "2px 2px",
                      color: "#ffffff",
                      textShadow: "12px 12px #DA4859",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Bio
                  </h1>
                </AniLink>
                <AniLink style={{ textDecoration: "none" }} cover to="cc">
                  <h1
                    style={{
                      fontSize: "14vh",
                      textShadow: "12px 12px #DA4859",
                      fontWeight: "800",
                      textDecoration: "none",
                      fontFamily: "Montserrat",
                      color: "#ffffff",
                    }}
                  >
                    Projects
                  </h1>
                </AniLink>
                <h1
                  style={{
                    textAlign: "left",
                    fontSize: "14vh",
                    textShadow: "12px 12px #DA4859",
                    textDecoration: "none",
                    fontFamily: "Changa One",
                    color: "#ffffff",
                    fontFamily: "Montserrat",
                  }}
                >
                  Music
                </h1>
              </div>
              <div style={{ alignSelf: "flex-start" }}>
                <img
                  alt="svgImg"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjAiIGhlaWdodD0iNjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE3MmMtNDcuNDk2NDksMCAtODYsLTM4LjUwMzUxIC04NiwtODZ2MGMwLC00Ny40OTY0OSAzOC41MDM1MSwtODYgODYsLTg2djBjNDcuNDk2NDksMCA4NiwzOC41MDM1MSA4Niw4NnYwYzAsNDcuNDk2NDkgLTM4LjUwMzUxLDg2IC04Niw4NnoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48ZyBmaWxsPSIjMDAwMDAwIj48cGF0aCBkPSJNODYsMTkuOTUyYy0zNi40NTEyMSwwIC02Ni4wMDQ5MSwyOS41NTM3IC02Ni4wMDQ5MSw2Ni4wMDQ5MWMwLDMwLjkyODggMjEuMjk3NTgsNTYuODA4MjMgNTAuMDA5NzIsNjMuOTY5NzZjLTAuMzA4MDIsLTAuODkxMDcgLTAuNTA2MDQsLTEuOTI1MTQgLTAuNTA2MDQsLTMuMjA2NzR2LTExLjI4MTM0Yy0yLjY3ODcsMCAtNy4xNjcwMywwIC04LjI5NDYyLDBjLTQuNTE1ODQsMCAtOC41MzExMywtMS45NDE2NCAtMTAuNDc4MjgsLTUuNTQ5OTFjLTIuMTYxNjYsLTQuMDA5OCAtMi41MzU2OSwtMTAuMTQyNzUgLTcuODkzMDksLTEzLjg5NDAzYy0xLjU4OTYyLC0xLjI0ODU5IC0wLjM3OTUzLC0yLjY3MzIgMS40NTIxMSwtMi40ODA2OGMzLjM4Mjc1LDAuOTU3MDcgNi4xODc5NiwzLjI3ODI0IDguODI4MTYsNi43MjE1YzIuNjI5MiwzLjQ0ODc2IDMuODY2NzksNC4yMjk4MSA4Ljc3ODY1LDQuMjI5ODFjMi4zODE2OCwwIDUuOTQ1OTQsLTAuMTM3NTEgOS4zMDExOSwtMC42NjU1NWMxLjgwNDEzLC00LjU4MTg0IDQuOTIyODcsLTguODAwNjUgOC43MzQ2NSwtMTAuNzkxOGMtMjEuOTc5NjMsLTIuMjYwNjcgLTMyLjQ2ODkxLC0xMy4xOTU0OCAtMzIuNDY4OTEsLTI4LjA0MTA5YzAsLTYuMzkxNDggMi43MjI3LC0xMi41NzM5NCA3LjM0ODU1LC0xNy43ODI4MmMtMS41MTgxMSwtNS4xNzAzOCAtMy40MjY3NSwtMTUuNzE0NjcgMC41ODMwNCwtMTkuNzI5OTdjOS44ODk3NCwwIDE1Ljg2ODY4LDYuNDEzNDggMTcuMzA0MjksOC4xNDYxMWM0LjkyODM3LC0xLjY4ODYzIDEwLjM0MDc3LC0yLjY0NTcgMTYuMDI4MTksLTIuNjQ1N2M1LjY5ODQyLDAgMTEuMTMyODMsMC45NTcwNyAxNi4wNzIyLDIuNjU2N2MxLjQxOTExLC0xLjcyMTYzIDcuNDAzNTUsLTguMTU3MTEgMTcuMzE1MjksLTguMTU3MTFjNC4wMjYzLDQuMDIwOCAyLjA5NTY2LDE0LjYwOTA5IDAuNTYxMDQsMTkuNzY4NDdjNC41OTgzNCw1LjE5Nzg5IDcuMzA0NTQsMTEuMzYzODUgNy4zMDQ1NCwxNy43NDQzMmMwLDE0LjgzNDYgLTEwLjQ3Mjc4LDI1Ljc2MzkyIC0zMi40MTk0MSwyOC4wMzU1OWM2LjAzOTQ1LDMuMTUxNzMgMTAuNDQ1MjgsMTIuMDA3MzkgMTAuNDQ1MjgsMTguNjc5Mzl2MTUuMDM4MTJjMCwwLjU3MjA0IC0wLjEyNjUxLDAuOTg0NTcgLTAuMTkyNTEsMS40NzQxMWMyNS43MTk5MSwtOS4wMTUxNyA0NC4xOTU3OSwtMzMuNDM2OTkgNDQuMTk1NzksLTYyLjIzNzEzYzAsLTM2LjQ1MTIxIC0yOS41NTM3LC02Ni4wMDQ5MSAtNjYuMDA0OTEsLTY2LjAwNDkxeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                />
                <img
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjAiIGhlaWdodD0iNjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE3MmMtNDcuNDk2NDksMCAtODYsLTM4LjUwMzUxIC04NiwtODZ2MGMwLC00Ny40OTY0OSAzOC41MDM1MSwtODYgODYsLTg2djBjNDcuNDk2NDksMCA4NiwzOC41MDM1MSA4Niw4NnYwYzAsNDcuNDk2NDkgLTM4LjUwMzUxLDg2IC04Niw4NnoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48ZyBmaWxsPSIjMDAwMDAwIj48cGF0aCBkPSJNNjMuMDU3NzEsMzAuOTZjLTE3LjY5OTk1LDAgLTMyLjA5NzcxLDE0LjQxMTA5IC0zMi4wOTc3MSwzMi4xMTU2MnY0NS44NjY2N2MwLDE3LjY5OTk1IDE0LjQxMTA5LDMyLjA5NzcxIDMyLjExNTYyLDMyLjA5NzcxaDQ1Ljg2NjY3YzE3LjY5OTk1LDAgMzIuMDk3NzEsLTE0LjQxMTA5IDMyLjA5NzcxLC0zMi4xMTU2MnYtNDUuODY2NjdjMCwtMTcuNjk5OTUgLTE0LjQxMTA5LC0zMi4wOTc3MSAtMzIuMTE1NjIsLTMyLjA5Nzcxek0xMTguMTA2NjcsNDkuMzA2NjdjMi41MzE4NCwwIDQuNTg2NjcsMi4wNTQ4MyA0LjU4NjY3LDQuNTg2NjdjMCwyLjUzMTg0IC0yLjA1NDgzLDQuNTg2NjcgLTQuNTg2NjcsNC41ODY2N2MtMi41MzE4NCwwIC00LjU4NjY3LC0yLjA1NDgzIC00LjU4NjY3LC00LjU4NjY3YzAsLTIuNTMxODQgMi4wNTQ4MywtNC41ODY2NyA0LjU4NjY3LC00LjU4NjY3ek04Niw1OC40OGMxNS4xNzcyOCwwIDI3LjUyLDEyLjM0MjcyIDI3LjUyLDI3LjUyYzAsMTUuMTc3MjggLTEyLjM0MjcyLDI3LjUyIC0yNy41MiwyNy41MmMtMTUuMTc3MjgsMCAtMjcuNTIsLTEyLjM0MjcyIC0yNy41MiwtMjcuNTJjMCwtMTUuMTc3MjggMTIuMzQyNzIsLTI3LjUyIDI3LjUyLC0yNy41MnpNODYsNjcuNjUzMzNjLTEwLjEzMjU4LDAgLTE4LjM0NjY3LDguMjE0MDggLTE4LjM0NjY3LDE4LjM0NjY3YzAsMTAuMTMyNTggOC4yMTQwOCwxOC4zNDY2NyAxOC4zNDY2NywxOC4zNDY2N2MxMC4xMzI1OCwwIDE4LjM0NjY3LC04LjIxNDA4IDE4LjM0NjY3LC0xOC4zNDY2N2MwLC0xMC4xMzI1OCAtOC4yMTQwOCwtMTguMzQ2NjcgLTE4LjM0NjY3LC0xOC4zNDY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                />
                <img
                  alt="svgImg"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjAiIGhlaWdodD0iNjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTg2LDE3MmMtNDcuNDk2NDksMCAtODYsLTM4LjUwMzUxIC04NiwtODZ2MGMwLC00Ny40OTY0OSAzOC41MDM1MSwtODYgODYsLTg2djBjNDcuNDk2NDksMCA4NiwzOC41MDM1MSA4Niw4NnYwYzAsNDcuNDk2NDkgLTM4LjUwMzUxLDg2IC04Niw4NnoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48ZyBmaWxsPSIjMDAwMDAwIj48cGF0aCBkPSJNMTI3LjI4LDM1LjU0NjY3aC04Mi41NmMtNS4wNjgyNywwIC05LjE3MzMzLDQuMTA1MDcgLTkuMTczMzMsOS4xNzMzM3Y4Mi41NmMwLDUuMDY4MjcgNC4xMDUwNyw5LjE3MzMzIDkuMTczMzMsOS4xNzMzM2g4Mi41NmM1LjA2ODI3LDAgOS4xNzMzMywtNC4xMDUwNyA5LjE3MzMzLC05LjE3MzMzdi04Mi41NmMwLC01LjA2ODI3IC00LjEwNTA3LC05LjE3MzMzIC05LjE3MzMzLC05LjE3MzMzek02Ny40NDIzNSwxMTguMTA2NjdoLTEzLjUzMDY3di00My41MzY2NGgxMy41MzA2N3pNNjAuNTM5NDEsNjguMzQ1OTJjLTQuMzYxOTIsMCAtNy44ODkwNywtMy41MzYzMiAtNy44ODkwNywtNy44ODkwN2MwLC00LjM1Mjc1IDMuNTMxNzMsLTcuODg0NDggNy44ODkwNywtNy44ODQ0OGM0LjM0ODE2LDAgNy44ODQ0OCwzLjUzNjMyIDcuODg0NDgsNy44ODQ0OGMwLDQuMzUyNzUgLTMuNTM2MzIsNy44ODkwNyAtNy44ODQ0OCw3Ljg4OTA3ek0xMTguMTI1MDEsMTE4LjEwNjY3aC0xMy41MjE0OXYtMjEuMTcyMDVjMCwtNS4wNDk5MiAtMC4wOTE3MywtMTEuNTQ0NjQgLTcuMDMxMzYsLTExLjU0NDY0Yy03LjA0MDUzLDAgLTguMTIyOTksNS40OTk0MSAtOC4xMjI5OSwxMS4xNzc3MXYyMS41Mzg5OWgtMTMuNTIxNDl2LTQzLjUzNjY0aDEyLjk4MDI3djUuOTQ4OTFoMC4xODM0N2MxLjgwNzE1LC0zLjQyMTY1IDYuMjE5NTIsLTcuMDMxMzYgMTIuODAxMzksLTcuMDMxMzZjMTMuNzAwMzcsMCAxNi4yMzIyMSw5LjAxNzM5IDE2LjIzMjIxLDIwLjc0MDkxeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                />
              </div>
            </div>
          </Fade>
          <AniLink cover direction="up" to="music">
            Go to Page 4
          </AniLink>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;

  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
