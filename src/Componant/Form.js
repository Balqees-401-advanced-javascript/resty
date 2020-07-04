import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: [],
            methodArr: [],
            resultArr:[],
            headerArr:[],
            words:[],
            method : ''
        }

    }

    handleClick = async e => {
        // e.preventDefault();
        this.props.toggleLoading();
        let URL = document.getElementById('inputUrl').value;
        this.state.url.push(URL);
        this.state.methodArr.push(this.state.method);
        this.state.words.push(` ${this.state.method}     ${URL}`);

      fetch(`${URL}`, {method :this.state.method }).then(async (raw)=>{

          let header = (raw.headers.get('Content-Type'));
          this.state.headerArr.push(header);
          let data = await raw.json();
          let result = JSON.stringify(data, null, 2);
          this.state.resultArr.push(data);
          localStorage.setItem('Header', JSON.stringify(this.state.headerArr));
          localStorage.setItem('Url', JSON.stringify(this.state.url));
          localStorage.setItem('Method', JSON.stringify(this.state.methodArr));
          localStorage.setItem('Result',JSON.stringify(this.state.resultArr));
          this.props.resultTransform(result, this.state.words, header);
          this.props.show(true);
          setTimeout(() => {
              this.props.toggleLoading();
          }, 1000);
        }).catch(() =>{
            let header = null;
            this.state.headerArr.push(header);
            let result = JSON.stringify({ERR:'ERROR YOU DONT HAVE ACESS'}, null, 2);
            this.state.resultArr.push({ERR:'ERROR YOU DONT HAVE ACESS'});
            localStorage.setItem('Header', JSON.stringify(this.state.headerArr));
            localStorage.setItem('Url', JSON.stringify(this.state.url));
            localStorage.setItem('Method', JSON.stringify(this.state.methodArr));
            localStorage.setItem('Result',JSON.stringify(this.state.resultArr));
            this.props.resultTransform(result, this.state.words, header);
            setTimeout(() => {
                this.props.toggleLoading();
            }, 1000);
        })
    }

    get = e => {
        e.preventDefault();
        this.setState({ method: 'GET' });
    }

    post = e => {
        e.preventDefault();
        this.setState({ method: 'POST' });

    }

    update = e => {
        e.preventDefault();
        this.setState({ method: 'PUT' });

    }

    delete = e => {
        e.preventDefault();
        this.setState({ method: 'DELETE' });

    }

    render() {
        return (
            <div id="main">
                <div id="input">
                    <label id="URL">URL : </label>
                    <input id="inputUrl" />
                    <button id="gobutton" onClick={this.handleClick}>GO !</button>
                </div>
                <div id="allButton">
                    <button id="allOtherButton" onClick={this.get}>GET</button>
                    <button id="allOtherButton" onClick={this.post} >POST</button>
                    <button id="allOtherButton" onClick={this.update} >UPDATE</button>
                    <button id="allOtherButton" onClick={this.delete}>DELETE</button>
                </div>

            </div>


        )
    }
}

export default Form;