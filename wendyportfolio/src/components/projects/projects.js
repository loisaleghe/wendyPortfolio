import React from "react";
import "./style.css";

function Projects() {
  return (
    <div className="projectpg">
      <h1 className="projecttitle"> My Projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5  col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="card projectcard">
              <img
                src={require("./demo.png")}
                className="card-img-top"
                alt="image of the burger"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  EAT-DA-BURGER
                </h5>
                <p className="card-text">
                  This project follows the MVC design pattern.It is a fun app
                  that allows you to enter any burger you want and keep track of
                  which ones you have devoured and which ones you are yet to
                  eat.
                </p>
                <button>
                  <a
                    href="https://github.com/loisaleghe/burgers"
                    className="card-link"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </button>
                <button>
                  <a
                    href="https://loisaleghe-burger.herokuapp.com/"
                    className="card-link"
                    target="_blank"
                  >
                    Deployed App
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-5  col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="card projectcard">
              <img
                src={require("./noteTaker.jpeg")}
                className="card-img-top"
                alt="image of the notetaker"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  {" "}
                  NOTE-TAKER
                </h5>
                <p className="card-text">
                  This project uses express to create API routes to GET, POST
                  and DELETE an object, which essentially follows the CRUD
                  method.The purpose of this app is to write, save, retrieve and
                  delete note data from a JSON file.
                </p>
                <button>
                  <a
                    href="https://github.com/loisaleghe/Note-Taker"
                    className="card-link"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </button>
                <button>
                  <a
                    href="https://damp-island-49467.herokuapp.com/"
                    className="card-link"
                    target="_blank"
                  >
                    Deployed App
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-5  col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="card projectcard">
              <img
                src={require("./Taskit.jpeg")}
                className="card-img-top"
                alt="image of the notetaker"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  {" "}
                  TASK.IT
                </h5>
                <p className="card-text">
                  The purpose of this project is to help users become more
                  organized with their ideas, activities and tasks. The app to
                  add,edit, delete, update and save tasks, such that when
                  reloaded the tasks still exists.
                </p>
                <button>
                  <a
                    href="https://github.com/loisaleghe/Project2"
                    className="card-link"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </button>
                <button>
                  <a
                    href="https://sleepy-earth-90670.herokuapp.com/"
                    className="card-link"
                    target="_blank"
                  >
                    Deployed App
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-5  col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="card projectcard">
              <img
                src={require("./vocabulary.jpeg")}
                className="card-img-top"
                alt="image of the notetaker"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  {" "}
                  VOCABULARY BUILDER
                </h5>
                <p className="card-text">
                  The purpose of this project is to help improve an individual's
                  vocabulary by providing various definitions of an inserted
                  word along side at most ten synonyms for better understanding.
                  The app consists of both frontend and backend with at least
                  two APIs used
                </p>
                <button>
                  <a
                    href="https://github.com/loisaleghe/project1"
                    className="card-link"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </button>
                <button>
                  <a
                    href="https://loisaleghe.github.io/project1/"
                    className="card-link"
                    target="_blank"
                  >
                    Deployed App
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-5  col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="card projectcard">
              <img
                src={require("./scheduler.png")}
                className="card-img-top"
                alt="image of the notetaker"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  {" "}
                  WORK DAY SCHEDULER
                </h5>
                <p className="card-text">
                  This app is a simple calendar application that allows the user to
                  save events for each hour of the day. The Scheduler app will run in the
                  browser and feature dynamically updated HTML and CSS powered
                  by jQuery. It heps keep user organized between 9am - 9pm.
                </p>
                <button>
                  <a
                    href="https://github.com/loisaleghe/workdayScheduler"
                    className="card-link"
                    target="_blank"
                  >
                    Github Link
                  </a>
                </button>
                <button>
                  <a
                    href="https://loisaleghe.github.io/workdayScheduler/"
                    className="card-link"
                    target="_blank"
                  >
                    Deployed App
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
