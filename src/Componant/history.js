import React from 'react';

class History extends React.Component {
    constructor(props){
        super(props);
        this.state={
           
            historyResponse : '',
            historyHeder : '' ,
        }
    }

    data = e => {
        let i = e.target.id;
        let historyHeder = JSON.stringify(JSON.parse(localStorage.getItem('Header'))[i], null, 2);
        let historyResponse = JSON.stringify(JSON.parse(localStorage.getItem('Result'))[i], null, 2);
        this.historyClik(historyResponse, historyHeder);
    }

    historyClik(historyResponse, historyHeder){
       this.setState({historyResponse, historyHeder});
    }

    render() {

        return (
            <div id="main">
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
                                {this.state.historyHeder}
                            </pre>
                        </div>

                        <div>
                            "Responce":
                  <pre>
                                {this.state.historyResponse}
                            </pre>
                        </div>
                    </div>



                </div>
            </div>
        )
    }

}
export default History;
