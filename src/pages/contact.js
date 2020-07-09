import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
 
const ContactPage=()=> {
    return (
        <div>
        <Layout>
            <Head title='Contact Us'/>
        <h1>Contact</h1>
        <p><a href="mailto:vineeth.windiws@gmail.com">Send email</a></p>
        <p><a href='https://twitter.com/explore' target='_blank' rel="noreferrer">Twitter </a></p>
        </Layout>
        </div>
        )   
    }
    
    export default ContactPage;