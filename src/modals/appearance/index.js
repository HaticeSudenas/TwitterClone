import { Link } from "react-router-dom";
import Button from "../../components/button/index"
import classNames from "classnames";
import { useAppearance } from "../../store/appearance/hooks";
import { setBackGroundColor, setColor, setFontSize } from "../../store/appearance/action";
import { colors, fontSize } from "../../utils/consts";
export default function AppearanceModal({ close }) {
    const appearance = useAppearance();
    return (
        <div className="w-[600px]">
            <h3 className="mt-8 mb-3 text-[1.438rem] font-extrabold text-center leading-7">
                Görünümü Özelleştir
            </h3>
            <div className="p-8 pt-0 ">
                <p className="text-center text-[color:var(--color-base-secondary)] leading-5 text-[0.938rem] mb-5">
                    Bu ayarlar, bu tarayıcıdaki tüm X hespalarını etkiler
                </p>
                <div className="mx-8 mb-4">
                    <div className="border border-[color:var(--background-third)] px-4 py-3 gap-3 rounded-2xl flex">
                        <img className="w-10 h-10 rounded-full object-cover" src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg" />

                        <div className="flex-1 flex flex-col">
                            <header className="mb-0.5 leading-5 flex items-center">
                                <div className="font-bold flex items-center">
                                    x
                                    <svg viewBox="0 0 22 22" height={18.75} className="ml-0.5 text-[#1d9bf0]">
                                        <path
                                            fill="currentColor"
                                            d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-1 flex items-center text-[color:var(--color-base-secondary)]">@X . 31d</div>
                            </header>
                            <div className="text-[color:var(--color-base)] leading-5">At the heart of X are short messages called posts — just like this one — which can include photos, videos, links, text, hashtags, and mentions like <Link to="/x" className="hover:underline text-[#1d9bf0]">@X</Link></div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-3">
                <section>
                        <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 text-[13px] font-bold">Yazı Tipi</h6>
                        <div className="bg-[color:var(--background-secondary)] p-4 rounded-2xl flex items-center gap-5">
                            <div className="text-[0.813rem]">Aa</div>
                            <div className="h-1 bg-[color:var(--color-primary)] flex-1 rounded-full flex justify-between">
                                {fontSize.map(fs=>(
                                    <button
                                    onClick={()=>{
                                        setFontSize(fs)
                                    }}
                                    className="before:absolute before:inset-0 before:rounded-full before:hover:bg-[color:var(--color-primary)] before:opacity-10 w-8 h-8 rounded-full flex items-center justify-center relative -top-3.5 first:-ml-2 last:-mr-2">
                                        <div className={classNames("w-3 h-3 rounded-full bg-[color:var(--color-primary)]",{
                                            "w-4 h-4":appearance.fontSize===fs
                                        })}/>
                                    </button>
                                ))}
                            </div>
                            <div className="text-[1.25rem]">Aa</div>
                        </div>
                    </section>

                    <section>
                        <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 text-[13px] font-bold">Renk</h6>
                        <div className="bg-[color:var(--background-secondary)] py-2 rounded-2xl flex justify-around items-center">
                            {colors.map((color, index) => (
                                <button
                                    onClick={() => {
                                        setColor({
                                            ...appearance.color,
                                            primary: color
                                        })
                                    }}
                                    style={{ "--bg": color }} className="w-[40px] h-[40px] rounded-full bg-[color:var(--bg)] flex items-center justify-center">
                                    {color === appearance.color.primary && (
                                        <svg viewBox="0 0 24 24" width={25}>
                                            <path
                                                fill="currentColor"
                                                d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                                            />
                                        </svg>
                                    )}

                                </button>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 text-[13px]">Arka Plan</h6>
                        <div className="gap-1 py-2 px-4 mb-3 grid grid-cols-3 bg-[color:var(--background-secondary)] rounded-2xl">
                            <button
                                onClick={() => {
                                    setColor({
                                        ...appearance.color,
                                        base: "#0f1419",
                                        baseSecondary: "#8b98a5"
                                    })
                                    setBackGroundColor({
                                        name: "light",
                                        primary: "#fff",
                                        primaryAlpha:"#ffffffa6",
                                        secondary: "#f7f9f9",
                                        third: "#eff3f4",
                                        modal: "#00000066"
                                    })
                                }}
                                className={classNames("h-[62px] pr-3 pl-2 bg-white text-black border border-white/10 font-bold rounded group flex items-center gap-1.5", {
                                    "border-[color:var(--color-primary)] !border-2": appearance.backGroundColor.name === "light"
                                })}>
                                <div className="w-[40px] h-[40px] rounded-full flex-shrink-0 group-hover:bg-white/10 flex items-center justify-center">
                                    <div className={classNames("w-[20px] h-[20px] rounded-full border-2 border-[#3e4144]", {
                                        "border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white": appearance.backGroundColor.name === "light"
                                    })}>
                                        {
                                            appearance.backGroundColor.name === "light" && (
                                                <svg viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                                                    />
                                                </svg>
                                            )
                                        }

                                    </div>
                                </div>
                                Varsayılan
                            </button>
                            <button
                                onClick={() => {
                                    setColor({
                                        ...appearance.color,
                                        base: "#f7f9f9",
                                        baseSecondary: "#8b98a5",
                                    })
                                    setBackGroundColor({
                                        name: "dark",
                                        primary: "#15202b",
                                        primaryAlpha:"#15202ba6",
                                        secondary: "#1e2732",
                                        third: "#263340",
                                        modal: "#5b708366"
                                    })
                                }}
                                className={classNames("h-[62px] pr-3 pl-2 bg-[#15202b] text-[#f7f9f9] border border-white/10 font-bold rounded group flex items-center gap-1.5", {
                                    "border-[color:var(--color-primary)] !border-2": appearance.backGroundColor.name === "dark"
                                })}>
                                <div className="w-[40px] h-[40px] rounded-full flex-shrink-0 group-hover:bg-white/10 flex items-center justify-center">
                                    <div className={classNames("w-[20px] h-[20px] rounded-full border-2 border-[#3e4144]", {
                                        "border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white": appearance.backGroundColor.name === "dark"
                                    })}>
                                        {
                                            appearance.backGroundColor.name === "dark" && (
                                                <svg viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                                                    />
                                                </svg>
                                            )
                                        }

                                    </div>
                                </div>
                                Loş
                            </button>
                            <button
                                onClick={() => {
                                    setColor({
                                        ...appearance.color,
                                        base: "#e7e9ea",
                                        baseSecondary: "#71767b",
                                    })
                                    setBackGroundColor({
                                        name: "darker",
                                        primary: "#000",
                                        primaryAlpha:"#000000a6",
                                        secondary: "#16181c",
                                        third: "#273340",
                                        modal: "#5b708366"

                                    })
                                }}
                                className={classNames("h-[62px] pr-3 pl-2 bg-black text-white border border-white/10 font-bold rounded group flex items-center gap-1.5", {
                                    "border-[color:var(--color-primary)] !border-2": appearance.backGroundColor.name === "darker"
                                })}>
                                <div className="w-[40px] h-[40px] rounded-full flex-shrink-0 group-hover:bg-white/10 flex items-center justify-center">
                                    <div className={classNames("w-[20px] h-[20px] rounded-full border-2 border-[#3e4144]", {
                                        "border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white": appearance.backGroundColor.name === "darker"
                                    })}>
                                        {
                                            appearance.backGroundColor.name === "darker" && (
                                                <svg viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                                                    />
                                                </svg>
                                            )
                                        }

                                    </div>
                                </div>
                                <div className="truncate">Işıklar Kapalı</div>
                                
                            </button>
                        </div>
                    </section>
                </div>

                <div className="flex items-center justify-center pt-4">
                    <Button onClick={close}>Bitti</Button>
                </div>
            </div>
        </div>
    )
}

