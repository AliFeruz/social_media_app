import { sidebarLinks } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { INavLink } from "@/types";
import { Link, NavLink } from "react-router-dom";


const LeftSidebar = () => {
  const { user } = useUserContext();

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
      <Link to="/"><h1 className="text-6xl text-[#01F9C6] 
        w-[170] h-[36] p-2">FriendS</h1></Link>
        <Link to={`/profile/${user.id}`} className="gap-3 flex items-center">
            <img src='/assets/icons/profile-placeholder.svg' alt="profile"
            className="h-14 w-14 rounded-full" />
            <div className="flex flex-col">
              <p className="body-bold">{user.name}Username</p>
              <p className="small-regular text-light-3">@username{user.username}</p>
            </div>
          </Link>
          <ul className="flex flex-col gap-6">
            {sidebarLinks.map((link: INavLink) => {
              return (
                <li key={link.label} className="leftsidebar-link">
                <NavLink to={link.route}
                className="flex gap-4 items-center p-4">
                  <img src={link.imgURL} alt={link.label}
                  className="group-hover:invert-white" />
                  {link.label}
                </NavLink>
                </li>
               
              )
            })}
          </ul>
      </div>
    </nav>
  )
}

export default LeftSidebar;
