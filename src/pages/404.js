import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = ()=>{
    return(
        <Layout>
            <Head title='Page Not Found'/>
            <h1>Page does not exist</h1>
            <p><Link to='/'>Head home</Link></p>
        </Layout>
    )
}

export default NotFound;