// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return ( <div className="Projects"> 
        <div className="project1">
            <div className="image1"> </div>
            <ul>
                <li className="title"> NBA Trivia</li>
                <li> My first Project can be found <a href="https://sportsflash.onrender.com/"> here</a> </li> 
                <li>Link to my<a href="https://sportsflash.onrender.com/"> GitHub</a> for this project</li> 
            </ul>
        </div>
        <div className="project2">
            <div className="image2"> </div>
            <ul>
                <li className="title"> NBA Trivia</li>
                <li> My first Project can be found <a href="https://sportsflash.onrender.com/"> here</a> </li> 
                <li>Link to my<a href="https://sportsflash.onrender.com/"> GitHub</a> for this project</li> 
            </ul>
        </div>
    </div> )
}

// export the component
export default Projects
