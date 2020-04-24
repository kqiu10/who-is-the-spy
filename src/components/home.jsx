import React from "react";
import Room from "./room";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class Home extends React.Component {
  //go to Room
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.location.reload();
  }
  render() {

      return (
        <div>
          <div className="text-center">
            <h1>Who is the spy</h1>
          </div>

          <br></br>
          <br></br>

          <div className="text-center">
            <div
              className="btn-group-vertical btn-group-lg"
              style={{ minWidth: "90%" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal" data-target="#CreateRoom"
              >
                Create Room
              </button>
              {/* <!-- Modal --> */}
  <div className="modal fade" id="CreateRoom" tabIndex="-1" role="dialog" aria-labelledby="CreateRoomTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="CreateRoomTitle">Create Room</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          people required
          <input></input>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={() => { this.handleClick() }}><Router><Link to="/234">Attend Room</Link></Router></button>
        </div>
      </div>
    </div>
  </div>

              <button type="button" className="btn btn-success">
                Enter Room
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#AddPair"
              >
                Add New Words
              </button>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="AddPair"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="AddPairLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog  modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                    Add New Words
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body"></div>
                    first word<input></input>
                    <br></br>
                    econd word<input></input>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary"  data-dismiss="modal" >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Home;
