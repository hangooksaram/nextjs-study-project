import layoutcss from "../styles/layout.module.css"

const Layout = ({children}) => {
    return <div className = {layoutcss.container}>this is rendring by layout{children}</div>
}

export default Layout;