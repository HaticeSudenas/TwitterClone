import Button from "../../../../components/button";
import RightBarSection from "../../../../components/rightbar-section";
import UserCard from "../../../../components/userCard";
import { WhoFollowsUser } from "../../../../mock";
import { useAccount } from "../../../../store/auth/hooks";

export default function WhoFollow(){
    const account=useAccount()
    return(
       <RightBarSection title="Kimi Takip Etmeli" more={`connect_people?user_id=${account.id}`}>
        {
          WhoFollowsUser.map(user=>(<UserCard user={user} key={user.id}/>))  
        }
       </RightBarSection>
    )
}