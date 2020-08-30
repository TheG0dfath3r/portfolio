import React from "react"
import ReactDOM from "react-dom"
import { UserCard } from "react-ui-cards"
import Card from "../components/Card/index"
import srcc from "../images/kalooory.png"
import { motion } from "framer-motion"
import "./project.css"
function Cardf() {
  return (
    <>
      {typeof window !== "undefined" && (
        <div
          style={{
            display: "flex",

            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#ade8f4",
          }}
        >
          <h1
            style={{
              textAlign: "left",
              fontSize: "130px",
              textShadow: "2px 2px",
              color: "#ffffff",
              textShadow: "12px 12px #DA4859",
              fontFamily: "Montserrat",
            }}
          >
            Build.Epic.Shit
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              whileHover={{ y: -15 }}
              class="card"
              style={{ width: "400px" }}
            >
              <div class="card-header">
                <img src={srcc} alt="rover" />
              </div>
              <div class="card-body">
                <span class="tag tag-teal">React</span>
                <h3>Kaloory</h3>
                <p>
                  Developed the fontend for an EdTech startup based in India
                  from scratch. The web app hosts features like hosting live
                  classes, conducting tests, giving assignments, student
                  analytics for teachers, and much more
                </p>
                <div class="user">
                  <img src="./images/user-1.jpg" alt="user 1" />
                  <div class="user-info">
                    <h5>Carrie Brewer</h5>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -15 }}
              class="card"
              style={{ width: "400px" }}
            >
              <div class="card-header">
                <img src={srcc} alt="rover" />
              </div>
              <div class="card-body">
                <span class="tag tag-teal">React</span>
                <h3>Pathware-Electron</h3>
                <p>An exploration into the truck's polarising design.</p>
                <div class="user">
                  <img src="./images/user-1.jpg" alt="user 1" />
                  <div class="user-info">
                    <h5>Carrie Brewer</h5>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -15 }}
              class="card"
              style={{ width: "400px" }}
            >
              <div class="card-header">
                <img src={srcc} alt="rover" />
              </div>
              <div class="card-body">
                <span class="tag tag-teal">React</span>
                <h3>Webinar Flow</h3>
                <p>
                  A webapp that serves as management dashboard for conducting
                  online webinars.Includes features like reminder emails,
                  registration form generation, and viewer statistics.
                </p>
                <div class="user">
                  <img src="./images/user-1.jpg" alt="user 1" />
                  <div class="user-info">
                    <h5>Carrie Brewer</h5>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cardf
