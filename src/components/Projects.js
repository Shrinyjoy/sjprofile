import React, { Component } from "react";
import reactecom from "../../src/images/ecomnew.png"
import game from "../../src/images/game.png"
import quiz from "../../src/images/quiz.png"
import weather from "../../src/images/weather.png"
import calculator from "../../src/images/calculator.png"
import todolist from "../../src/images/todolist.png"
import mypro from "../../src/images/cgptdep.png"
import userproangular from "../../src/images/userproangular.png"
import sjprofile from "../../src/images/sjprofile.png"

export default class Projects extends Component {
  render() {
    return (
      <div className="container submenu">
        <h1 class="center-align" style={{color:"#26c6da" }}>Projects</h1>
        <div className="container" style={{marginTop: "40px"}}>
         <div className="row">
        <div className="card cardfull">
            <img src={weather} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Weather app</h5>
              <p className="card-text">
                Weather app with react and API.
              </p>
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn btn-sm" style={{backgroundColor:"#117380"}}><a href="https://shrinyjoy.github.io/weatherapp/" target="_blank" rel="noreferrer">More</a></button>
              </div>
            </div>
        </div>
        <div className="card cardfull">
            <img src={reactecom} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">React Ecommerce</h5>
              <p className="card-text">
              Shopping cart app with admin and third party libraries.
              </p>
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-danger btn-sm"><a href="https://ecommerce-app-frontend-brown.vercel.app/" target="_blank" rel="noreferrer">More</a></button>
              </div>
            </div>
        </div>
        <div className="card cardfull">
            <img src={mypro} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">ChatGPT app</h5>
              <p className="card-text">
               ChatGPT clone with react API implementation
              </p>
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn btn-sm" style={{backgroundColor:"#ad1fad"}}><a href="https://fluffy-crostata-8daadb.netlify.app/" target="_blank" rel="noreferrer">More</a></button>
              </div>
            </div>
        </div>
        </div>
        <div className="row">
            <div className="card cardfull">
            <img src={calculator} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Calculator App</h5>
              <p className="card-text">
                Simple calculator app with react.
              </p>
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn btn-sm" style={{backgroundColor:"#ad1fad"}}><a href="https://calculator-lovat-xi.vercel.app/" target="_blank" rel="noreferrer">More</a></button>
              </div>
            </div>
        </div>
        <div className="card cardfull">
            <img src={todolist} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Todolist App</h5>
              <p className="card-text">
                Basic todolist app with react.
              </p>
            
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn btn-sm" style={{backgroundColor:"#26d6ed"}}><a href="https://todolistapp-jet.vercel.app/" target="_blank" rel="noreferrer">More</a></button>
              </div>
            </div>
         
        </div>
        <div className="card cardfull">
        <img src={sjprofile} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">React Portfolio</h5>
              <p className="card-text">
              React single page app with front end frameworks.
              </p>
            
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn btn-sm" style={{backgroundColor:"#99cc00"}}><a href="https://sjprofile.vercel.app/" target="_blank" rel="noreferrer">More</a></button>
              </div>
            </div>
         
        </div>
        </div>
        <div className="row">
        <div className="card cardfull">
            <img src={quiz} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Quiz app</h5>
              <p className="card-text">
                Quiz app with plain javascript.
              </p>
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-secondary btn-sm"><a href="https://shrinyjoy.github.io/quiz-app/" target="_blank" rel="noreferrer">More</a></button>
              </div>
            </div>
        </div>
        <div className="card cardfull">
            <img src={game} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">Game App</h5>
              <p className="card-text">
                A Simple javascript game application.
              </p>
            
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn btn-sm" style={{backgroundColor:"#ad1fad"}}><a href="https://shrinyjoy.github.io/colorgame" target="_blank" rel="noreferrer">More</a></button>
              </div>
            </div>        
        </div>
        <div className="card cardfull">
            <img src={userproangular} class="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title">User Profile</h5>
              <p className="card-text">
                Angular4 SPA with API and authentication using local storage.
              </p>
             
              <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-danger btn-sm"><a href="upon maintenance" target="_blank" rel="noreferrer">More</a></button>
              </div>
            </div>  
        </div>
        </div>
        </div>
      </div>
    );
  }
}
