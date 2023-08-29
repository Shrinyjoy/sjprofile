import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container submenu">
        <h1 class="center-align" style={{color:"#26c6da" }}>Contact</h1>
        <div className="container" style={{ marginTop: "40px" }}>
          <div className="row">
            <div className="col s12 m6">
              <div className="row">
                <form>
                  <div class="row">
                    <div class="input-field col s6">
                      <input
                        id="first_name"
                        type="text"
                        class="validate"
                      />
                      <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                      <input id="last_name" type="text" class="validate" />
                      <label for="last_name">Last Name</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea
                        id="textarea1"
                        class="materialize-textarea"
                      ></textarea>
                      <label for="textarea1">Message</label>
                    </div>
                  </div>
                  <div class="row">
                    {/* <p style={{backgroundColor:"#03a9f4"}}> */}
                    {/* <input class="btn btn-secondary" type="submit" value="Submit" /> */}
                    <a className="btn-small waves-effect waves-light contact_btn" 
                    href="mailto:shrinyjoy@gmail.com?first_name=,last_name=,email=,&textarea1=?">Send Mail</a>
                    {/* </p> */}
                  </div>
                </form>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="row">
              <div className="col">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.40912051325!2d152.887903875271!3d-27.612506822805667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b914b8bdab820d3%3A0xb8231c5b2552b510!2sAlbert%20St%2C%20Goodna%20QLD%204300!5e1!3m2!1sen!2sau!4v1693236359676!5m2!1sen!2sau" 
            width="100%" 
            height="500" 
            style={{ border: 0, opacity: 0.3}} 
            allowfullscreen="" 
            loading="lazy" 
            title="titlemap"
            allowtransparency="true"
            />
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
