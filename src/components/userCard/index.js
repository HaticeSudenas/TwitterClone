import { useState } from "react";
import Button from "../button";

export default function UserCard({user}){
    const [following,setFollowing] =useState(false);
    return(
        <button className="py-3 px-4 gap-3 flex">
             <img src={user.avatar} className="w-10 h-10 rounded-full object-cover"/>
             <div className="flex-1 flex flex-col text-left">
                 <div className="text-[15px] font-bold">{user.fullName}</div>
                 <div className="text-[15px] text-[color:var(--color-base-secondary)]">@{user.username}</div>
             </div>
             <div>
                {
                    following
                    ?<Button onClick={()=>setFollowing(false)} className="whitespace-nowrap group" size="small" variant="white-outline">
                        <div className="flex group-hover:hidden">Takip Ediliyor</div>
                        <div className="hidden group-hover:flex">Takibi bırak</div>
                    </Button>
                    :<Button onClick={()=>setFollowing(true)} size="small" variant="white">Takip Et</Button>
                }
                 
             </div>
            </button>
    )
}