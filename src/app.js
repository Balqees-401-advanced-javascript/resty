import React from 'react';
import Header from './Componant/header';
import Footer from './Componant/footer';
import Routes from './Componant/Routs'


//class App
class App extends React.Component {
    render() {
        return (
            // I will add Header, Routes, Footer
            <React.Fragment>
                <Header />
                <Routes />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;