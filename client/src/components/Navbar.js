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
        <nav className="m-2 p-2 d-flex justify-content-between">
            <div className="">
                <h1>mentorship</h1>
            </div>
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    menu
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">profile</a>
    <a className="dropdown-item" href="#">notifications</a>
    <a className="dropdown-item" href="#">job search</a>
    <a className="dropdown-item" href="#">posts</a>
  </div>
</div>
        </nav>
    )
}

export default Navbar;