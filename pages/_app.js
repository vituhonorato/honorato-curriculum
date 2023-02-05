import React from "react";
import App from 'next/app'
import '../styles/global.css'
import Layout from "../components/layout";


class MyApp extends App {
    render() {
        const {Component, pageProps } = this.props
        return (
            <React.Fragment>
                <style jsx global>
                    {`
                     @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');
                     
                    `}
                  
                  </style>
                  <div className="bg-[url('/images/spacebg.jpg')]">
                  <Layout>

                    <Component {...pageProps} />
                  </Layout>
                  </div>
            </React.Fragment>
        
        ) 
    }
}
export default MyApp