// import useLocalStorage from "use-local-storage";
import Menu from './Menu.js';


function Navbar() {

    // //prop
    // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
  
    // const switchTheme = () => {
    //   const newTheme = theme === "dark" ? "light" : "dark";
    //   setTheme(newTheme);
    // }
  

    return (
        <nav className=" p-2 d-flex justify-content-between ">
            <div className="">
                <h1 className="">mentorship</h1>
            </div>
            <Menu></Menu>
        </nav>
    )
}

export default Navbar;