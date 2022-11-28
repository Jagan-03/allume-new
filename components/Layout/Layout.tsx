import React, { ReactNode, useEffect } from 'react'
import Header from '../Header';

interface LayoutProps 
{
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {

    useEffect(() => {
        document.body.style.height = '100%';
    }, [])

  return (
    <div id="mainContainer">
        <Header />
        {props.children}
    </div>
  )
}

export default Layout;
