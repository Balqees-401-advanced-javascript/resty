import React from 'react';
import '../style.scss';
import { Route } from 'react-router-dom';
import { IfRenderer, Then, Else } from './if';
import Form from './Form';
import Results from './Results';
import History from './history';

// Main 
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: '',
            header: '',
            clicked: false,
            loading: false,
            mainHistory : [],
          
        }


    }

    toggleLoading = () => {
    
        this.setState({ loading: !this.state.loading });
     
    }

    resultTransform = (result, mainHistory, header) => {
        this.setState({ result, mainHistory, header })
    }

    toggleModal = (clicked) => {
        this.setState({ clicked });

    }

    historyClik = (result, header) => {    
        this.setState({ result, header });
    }

    render() {
        return (
            <>
                <Route path="/" exact>
                    <Form resultTransform={this.resultTransform} show={this.toggleModal} toggleLoading={this.toggleLoading} ></Form>

                    <IfRenderer condition={this.state.clicked} >
                        <Then>
                            <Results result={this.state.result} header={this.state.header} mainHistory={this.state.mainHistory} historyClik={this.historyClik} loading={this.state.loading} ></Results>
                        </Then>
                        <Else>
                            <div id='content'></div>
                        </Else>
                    </IfRenderer>
                </Route>

                <Route path="/History" exact>
                    <History  mainHistory={this.state.mainHistory}  />
                </Route>

            </>)
    }



}

export default Main;