import React from "react"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class Room extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      Pair: [["apple", "orange"]],
      description: { "A": [],"B":[],"C":[],"D":[]},
      Spy: false,
      NextRound: false,
      ShowDescription:false
    }
    this.ChangeWords = this.ChangeWords.bind(this)
    this.BackHome = this.BackHome.bind(this)
    this.FindSpy = this.FindSpy.bind(this)
    this.Choose = this.Choose.bind(this)
    this.GetDescription = this.GetDescription.bind(this)
    this.Submit = this.Submit.bind(this)
    this.NextRound = this.NextRound.bind(this)
  }
  ChangeWords() {
    this.setState({Pair:[["basketball","football"]],Spy: false,
    NextRound: false,
    ShowDescription:false})
  }
  BackHome() {
    window.location.reload();
  }
  GetDescription(e) {
    let id = e.target.id;
    let value = e.target.value
    this.setState(prevState => {
      let description = Object.assign({}, prevState.description);
      description[id] = value;                     // update the name property, assign a new value
      return { description };
    })

  }
  FindSpy() {
    if (this.state.id === "B") {
      this.setState({Spy:true})
    }else{this.setState({NextRound:true})}

  }
  Choose(e) {
    const id = e.target.id
    this.setState({id:id})
  }
  Submit() {
    this.setState({ ShowDescription: true }, () => {
      document.getElementById('A').value = '';
      document.getElementById('B').value = '';
      document.getElementById('C').value = '';
      document.getElementById('D').value = '';
    })
  }
  NextRound() {
    this.setState({NextRound:false})
  }
  render() {
    return (
      <React.Fragment>
        <h1>You're word:{this.state.Pair[0][0]}</h1>
        <br></br>
        <h1>Spy word:{this.state.Pair[0][1]}</h1>
        <br></br>
        <br></br>
        <br></br>
        A:<input id="A" onChange={this.GetDescription}></input>
        B:<input id="B" onChange={this.GetDescription}></input>
        C:<input id="C" onChange={this.GetDescription}></input>
        D:<input id="D" onChange={this.GetDescription}></input>
        <button type="button" className="btn btn-primary ml-4" onClick={this.Submit}>Submit</button>
        <br></br>
        <br></br>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">A</th>
      <th scope="col">B</th>
      <th scope="col">C</th>
      <th scope="col">D</th>
    </tr>
  </thead>
  <tbody>

            {this.state.ShowDescription === true ?
               <tr>
               <th scope="row">1st Round</th>
                <td>{this.state.description.A}</td>
      <td>{this.state.description.B}</td>
      <td>{this.state.description.C}</td>
                <td>{this.state.description.D}</td>
              </tr>

      : null}
  </tbody>
        </table>
        <br></br>
        <br></br>
      VOTE
      <div className="btn-group btn-group-toggle mr-4" data-toggle="buttons">
      <label className="btn btn-secondary">
            <input type="radio" name="options" id="A" onClick={this.Choose} /> A
  </label>
  <label className="btn btn-secondary">
            <input type="radio" name="options" id="B"onClick={this.Choose}  /> B
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="C" onClick={this.Choose} /> C
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="D" onClick={this.Choose} /> D
  </label>

        </div>
        <button type="button" className="btn btn-primary ml-4" onClick={this.FindSpy}>Check</button>
        {this.state.NextRound === false ? null : <button type="button" className="btn btn-primary ml-4" onClick={this.NextRound}>Next Round</button>}
        <br></br>
        <br></br>
        {this.state.NextRound===false?null:<h3>Sorry,   {this.state.id} isn't spy </h3>}
          {this.state.Spy===false?null:<h3>congratulations, B is spy!</h3>}
        <br></br>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={this.ChangeWords}>Change Words</button>
        <br></br>
        <br></br>
        <button type="button" className="btn btn-secondary" onClick={() => { this.BackHome()}}><Router><Link to="/">Home Page</Link></Router></button>
    </React.Fragment>
    )
  }
}
export default Room
