import React from "react"
import ReactDOM from "react-dom"
import "./project.css"
import anime from "../images/react.gif"
import guitar from "../images/guitar.gif"
import strat from "../images/strat.gif"
import html from "../images/html.gif"
import css from "../images/css.gif"
import js from "../images/js.gif"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
function Bio() {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      style={{ backgroundColor: "#ade8f4" }}
    >
      <Masonry>
        <div style={{ color: "#da4859" }}>
          <h1
            style={{
              fontSize: "12vh",
              fontFamily: "Russo One",
              fontFamily: "Montserrat",
            }}
          >
            Developer
          </h1>
          <h1 style={{ fontSize: "10vh", fontFamily: "Montserrat" }}>
            Student
          </h1>
          <h1 style={{ fontSize: "11vh", fontFamily: "Montserrat" }}>
            Musician
          </h1>
          <h1 style={{ fontSize: "11vh", fontFamily: "Montserrat" }}>
            President
          </h1>
          <h1 style={{ fontSize: "2vh", fontFamily: "Montserrat" }}>
            CodeChef-VIT
          </h1>
        </div>
        <div>
          <img src={anime} style={{ height: "200", width: "200px" }}></img>
          <img src={html} style={{ height: "200", width: "200px" }}></img>
          <img src={css} style={{ height: "200", width: "200px" }}></img>
          <img src={js} style={{ height: "200", width: "200px" }}></img>
          <img src={guitar} style={{ height: "200", width: "200px" }}></img>
        </div>

        <div style={{ fontFamily: "Lato", fontSize: "30px", color: "#da4859" }}>
          Curious geek who loves to 'think different', has a passion for
          innovation and building beautiful products.
          <h1
            style={{
              textAlign: "left",
              fontSize: "80px",
              display: "inline",

              fontFamily: "Montserrat",
            }}
          >
            Frontend
          </h1>{" "}
          is my weapon of choice,after all, looks do matter.I believe in “doing”
          over “thinking”.I love working in collaborative environments and tend
          to function as a{" "}
          <h1
            style={{
              textAlign: "left",
              fontSize: "80px",
              display: "inline",

              fontFamily: "Montserrat",
            }}
          >
            Leader
          </h1>
          .I love challenges and working outside my comfort zone.
          <h1 style={{ fontSize: "80px", fontFamily: "Montserrat" }}>
            “Man is made by his belief. As he believes, so he is” ― Bhagavad
            Gita{" "}
          </h1>
        </div>
        <div>
          <h1
            style={{
              fontSize: "60px",
              display: "inline",
              color: "#da4859",
              fontFamily: "Russo One",
            }}
          >
            Vellore Institute of Technology '22
          </h1>
          <br></br>
          <br></br>
          <h1
            style={{
              fontSize: "60px",
              fontFamily: "Russo One",
              color: "#da4859",
            }}
          >
            RSM International '22
          </h1>
        </div>
        <div>lOREM iPSUM</div>
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default Bio
