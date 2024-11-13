// Components
import Logo from "./Logo"
import NavLink from "./NavLink"

function Navigation(){
    return(
        <>
           <div className="h-full w-full  flex flex-row justify-between px-6 items-end">
                <Logo />
                <NavLink />
           </div>
        </>
    )
}

export default Navigation