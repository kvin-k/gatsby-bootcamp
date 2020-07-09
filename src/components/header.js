import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'
import headerStyles from './header.module.scss'

const Header = ()=>{
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return(
        <header className={headerStyles.header}>
        <Link  to='/' className={headerStyles.title}><h1>{data.site.siteMetadata.title}</h1></Link>
            <nav className={headerStyles.link}>
                <ul className={headerStyles.navList}> 
                    
                    <li><Link to='/' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link></li>
                    <li><Link to='/about' className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem}>About</Link></li>
                    <li><Link to='/blog' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
                    <li><Link to='/contact' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;