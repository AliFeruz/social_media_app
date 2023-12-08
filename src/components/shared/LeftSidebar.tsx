import { sidebarLinks } from "@/constants";
import { INITIAL_USER, useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { INavLink } from "@/types";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";


const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { mutate: signOut } = useSignOutAccount();
  const navigate = useNavigate();
  const { user, setIsAuthenticated, setUser } = useUserContext();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
      <Link to="/"><h1 className="text-6xl text-[#01F9C6] 
        w-[170] h-[36] p-2">FriendS</h1></Link>
        <Link to={`/profile/${user.id}`} className="gap-3 flex items-center">
            <img src={user.imageUrl || '/assets/icons/profile-placeholder.svg'} alt="profile"
            className="h-14 w-14 rounded-full" />
            <div className="flex flex-col">
              <p className="body-bold">{user.name}</p>
              <p className="small-regular text-light-3">@{user.username}</p>
            </div>
          </Link>
          <ul className="flex flex-col gap-6">
            {sidebarLinks.map((link: INavLink) => {
              const isActive = pathname === link.route;
              return (
                <li key={link.label} className={`leftsidebar-link group ${
                  isActive && "bg-[#93FFE8]"
                }`}>
                <NavLink to={link.route}
                className="flex gap-4 items-center p-4">
                  <img src={link.imgURL} alt={link.label}
                   className={`group-hover:invert-white ${
                    isActive && "invert-white"
                  }`} />
                  {link.label}
                </NavLink>
                </li>
               
              )
            })}
          </ul>
      </div>
      <Button variant="ghost" className="shad-button_ghost" onClick={(e) => handleSignOut(e)}>
      <img src="/assets/icons/logout.svg" alt="logout"/>
      <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  )
}

export default LeftSidebar;
