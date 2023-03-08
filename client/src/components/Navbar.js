// import useLocalStorage from "use-local-storage";


function Navbar() {

    // //prop
    // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
  
    // const switchTheme = () => {
    //   const newTheme = theme === "dark" ? "light" : "dark";
    //   setTheme(newTheme);
    // }
  

    return (
        <nav className="m-2 p-2">
            <div className="">mentorship</div>
            <div id="pancake" className=""></div>
        </nav>
    )
}

export default Navbar;