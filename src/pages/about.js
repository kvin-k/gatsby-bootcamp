import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'; 
import Head from '../components/head'

const AboutPage=()=> {
    return (
        <div>
        <Layout>
            <Head title='About Us'/>
        <h1>About</h1>
        <p>My hobby is to build things and sharpen my skills.</p>
        <Link to='/contact'>Contact Me</Link>
        </Layout >
        </div>
        )   
    }
    
    export default AboutPage;