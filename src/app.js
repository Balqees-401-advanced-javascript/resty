import React from 'react';
import './style.scss';
import './header.scss';
import './footer.scss';

const Header = () => {
    return (
        <header>
            <h1>RESTy</h1>
        </header>
    )
};

const Footer = () => <footer>&copy;2020 Balqees</footer>;

// Main 
class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            words: ''
        }
        this.method = '';
    }
    
    handleClick = e => {
        e.preventDefault();
        let words = this.method + document.getElementById('inputUrl').value;
        this.setState({words}); // re-render 
    }

  get = e => {
    e.preventDefault();
     this.method = 'GET   ';
  }

  post = e => {
    e.preventDefault(); 
     this.method = 'POST   ';
  }

  update = e => {
    e.preventDefault(); 
     this.method = 'UPDATE   ';
  }

  delete = e => {
    e.preventDefault(); 
     this.method = 'DELETE   ';
  }

    render() {
        return (
            <div id="main">
                <div id= "input">
                <label id="URL">URL : </label>
                <input id="inputUrl"   />
                <button id= "gobutton" onClick={this.handleClick}>GO !</button>
                </div>
               <div id="allButton">   
                <button id="allOtherButton" onClick={this.get}>GET</button>
                <button id="allOtherButton" onClick={this.post} >POST</button>
                <button id="allOtherButton" onClick={this.update} >UPDATE</button>
                <button id="allOtherButton" onClick={this.delete}>DELETE</button>
                </div>
              <div id= "box">
                <h3>{this.state.words}</h3>
              </div>
            </div>
        )
    }
}

//class App
class App extends React.Component {
    render() {
        return (
            // I will add Header, Main, Footer
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;