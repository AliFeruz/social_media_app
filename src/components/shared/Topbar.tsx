import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";


const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  },[isSuccess])

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/"><h1 className="text-6xl text-[#01F9C6] 
        w-[130] h-[325] p-2">FriendS</h1></Link>
        <div className="flex gap-4">
          <Button variant="ghost" className="shad-button_ghost" onClick={() => signOut}>
            <img src="/assets/icons/logout.svg" alt="logout"/>
          </Button>
          <Link to={`/profile/${user.id}`} className="gap-3 flex items-center">
            <img src='/assets/icons/profile-placeholder.svg' alt="profile"
            className="h-8 w-8 rounded-full" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Topbar;