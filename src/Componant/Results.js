import React from 'react';


class Results extends React.Component {
    constructor(props){
        super(props);
        this.state={
           
            historyResponse : '',
            historyHeder : '' ,
          
        }
    }

    data = e  =>{
      let i = e.target.id;
      let historyHeder = JSON.stringify(JSON.parse(localStorage.getItem('Header'))[i] , null ,2);     
      let historyResponse =JSON.stringify(JSON.parse(localStorage.getItem('Result'))[i], null ,2);
      let urlClicked =JSON.stringify(JSON.parse(localStorage.getItem('Url'))[i], null ,2);
      document.getElementById('inputUrl').value = urlClicked;
      this.props.historyClik(historyResponse,historyHeder);
    }
    historyClik(historyResponse, historyHeder){
        this.setState({historyResponse, historyHeder});
     }
    render() {

        return (
            <div id="main">

                
                <div className={`loading-${this.props.loading}`}>
                    
                    <div className="lds-hourglass"></div>
                </div>
                <div id="box">
                    <div id="left">
                        {this.props.mainHistory.map((e, i) => {
                            return (
                                <button className="historyButton" id={i} key={i} onClick={this.data}>{e}</button>
                            )
                        })}

                    </div>

                    <div id="right">
                        <div >
                            "Headers":
                      <pre>
                                {this.props.header}
                            </pre>
                        </div>

                        <div>
                            "Responce":
                  <pre>
                                {this.props.result}
                            </pre>
                        </div>
                    </div>



                </div>
            </div>
        )
    }

}
export default Results;
