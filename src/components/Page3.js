import React, { Component } from 'react'

export default class Page3 extends Component {
  render() {
    return (
        <div className="container page2">
        <div className="row">
          <div className="col s12 m6">
          <div className="row">
                <h1 >
                  <div style={{ color: "#b388ff", fontSize: "30px" }}> ▞▞▞▞▞▖ </div>
                  <div style={{ padding:"30px"}}></div>
                  <div style={{ color: "#29b6f6", fontSize: "60px" }}>Who  </div>
                  <div style={{ color: "#29b6f6", fontSize: "60px" }}>Am I?</div>
                  <div style={{ padding:"30px"}}></div>
                  <div style={{ color: "#b388ff", fontSize: "30px" }}>▝▞▞▞▞▞</div>
                </h1>
            </div>
          </div>
          <div className="col s12 m6">
          <p>
          As a software developer with a Master's degree in computer science, I have a passion for designing, developing, and exploring new technologies. 
          I love building websites and am enthusiastic about creating innovative solutions.
          </p>
          <p>
              I have worked as a developer mainly in front-end/full-stack in various Javascript fields.
          </p>
          <p>
              Built more apps in Javascript, React, Node, Angular and .Net applications. Some of my works are:
          </p>
          <div class="d-grid gap-4 col-3 mx-auto" style={{margin: "30px 0px"}}>
              <button type="button" class="btn btn-outline-info btn-sm">
                <a href="../../../Projects">
                  View My Work
                </a>
              </button>
            </div>
          <p>
              Strong can-do attitude, balancing the workload and challenging risks.
          </p>
          <p>
          For more details 
              <button type="button" class="btn btn-link btn-sm linkbtn">
                <a href="../../../About">
                  Click here
                </a>
              </button>
          
          </p>
          <p>
          Other details 
              <button type="button" class="btn btn-link btn-sm linkbtn">
                <a href="../../../Contact">
                  Click here
                </a>
              </button>
          
          </p>
          </div>
        </div>
      </div>
    )
  }
}
