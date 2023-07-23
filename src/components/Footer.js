// the component function
const Footer = (props) => {
    const name = props.name
    //The Components Returned JSX
    return <div className="footer">
            <h1> Thank you for visiting</h1>
            <div className="socials">
                <img src="instagram.png" className="footerimg"/>
                <img src="facebook.png" className="footerimg"/>
            </div>
         </div>
}

// export the component
export default Footer
