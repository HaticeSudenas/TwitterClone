import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import RightBar from "./rightBar";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals";
import { useAppearance } from "../../store/appearance/hooks";
import { useEffect } from "react";

export default function MainLayout() {
    const modal=useModal()
    const appearance=useAppearance()

    useEffect(() => {
      document.documentElement.style.setProperty("--background-primary",appearance.backGroundColor.primary)
      document.documentElement.style.setProperty("--background-primary-alpha",appearance.backGroundColor.primaryAlpha)
      document.documentElement.style.setProperty("--background-secondary",appearance.backGroundColor.secondary)
      document.documentElement.style.setProperty("--background-third",appearance.backGroundColor.third)
      document.documentElement.style.setProperty("--background-modal",appearance.backGroundColor.modal)

      document.documentElement.style.setProperty("--color-primary",appearance.color.primary)
      document.documentElement.style.setProperty("--color-secondary",appearance.color.secondary)
      document.documentElement.style.setProperty("--color-base",appearance.color.base)
      document.documentElement.style.setProperty("--color-base-secondary",appearance.color.baseSecondary)

      document.documentElement.style.setProperty("--font-size",appearance.fontSize+"px")
    }, [appearance])
    
    return (
        <div className="w-[1265px] mx-auto flex">
            {
                modal&&(<Modal/>)
            }
            <SideBar />
            <main className="flex-1 flex gap-[30px]">
                <main className="flex-1 max-w-[600px] border-x border-[color:var(--background -third)]">
                    <Outlet />
                </main>
                <RightBar />
            </main>

        </div>
    );
}