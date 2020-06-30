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
            words: '',
            header: ''
        }
        this.method = '';
    }
    
     handleClick = async e => {
        e.preventDefault();
        let URL=document.getElementById('inputUrl').value;
        // let words = this.method + URL ;  
        let raw = await fetch(`${URL}`);
        let header =(raw.headers.get('Content-Type'));  
        let data = await raw.json();  
        let result = JSON.stringify(data ,null,2);
        this.setState({words: result});
        this.setState({header:header});
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

                      <div>
                      "Headers":
                      <pre>
                     {this.state.header}
                  </pre>
                      </div>

                  <div>
                  "Responce":
                  <pre>
                  {this.state.words}
                  </pre>
                  </div>
                 
                
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