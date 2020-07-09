import React from 'react';
import {Link,graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout';
import blogStyles from './blog.module.scss'
import Head from '../components/head'
 
const BlogPage=()=> {
    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost( sort:{ fields: publishDate, order:DESC } ){
          edges{
            node{
              slug
              publishDate(formatString:"MMMM Do, YYYY")
              title
            }
          }
        }
      }
    `) 
    // const data = useStaticQuery(graphql`
    // query{
    //     allMarkdownRemark{
    //         edges{
    //             node{
    //                 frontmatter{
    //                     title
    //                     date
    //                 }
    //                 fields{
    //                     slug
    //                 }
    //             }
    //         }
    //     }
    // }
    // `) 
    const listItems = data.allContentfulBlogPost.edges.map((edge)=>{
        return(<li className={blogStyles.post}><Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishDate}</p>
            </Link></li>)
        });
    if(listItems===null){
        return(
            <div>
                <Layout>
                <Head title='No posts'/>
                <h1>Blog</h1>
                <h2>Blogs will be posted soon</h2>
                </Layout>
            </div>
        )   
     }else{
        return (
                    
            <div>
                <Layout>
                    <Head title='Blogs'/>
                    <h1>Blogs</h1>
                    <ol className={blogStyles.posts}>
                    {listItems}
                    </ol>
                </Layout>
            </div>
        )   
    }
}
            
            export default BlogPage;