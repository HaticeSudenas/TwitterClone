import { Popover } from "@headlessui/react";
import { useAccount } from "../../../../../store/auth/hooks";
import More from "./more";


export default function Account(){
    const account=useAccount()
    return(
        <div className="mt-auto">
            <Popover className="relative">
                <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center outline-none">
                     <img src={account.avatar} className="w-10 h-10 rounded-full"/>
                     <div className="mx-3 text-[15px]">
                        <h6 className="font-bold">{account.fullName}</h6>
                        <div className="text-[color:var(--color-base-secondary)]">@{account.username}</div>
                     </div>
                </Popover.Button>
                <Popover.Panel className="absolute bottom-full w-[300px] py-3 left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-2xl overflow-hidden">
                    <More/>
                </Popover.Panel>
            </Popover>
          </div>
    )
}