// the component function
const NavBar = (props) => {
    const name = props.name
    //The Components Returned JSX
    return ( <nav className="nav"> <a href="https://github.com/JoyBoyCr7?tab=repositories">GitHub</a>
   {'\n'}
    <a href="www.linkedin.com/in/ronard-nyongkah">linkedin</a>
    </nav>)
}

// export the component
export default NavBar
