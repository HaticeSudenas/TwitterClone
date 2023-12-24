export default function Footer({bgHover,textHover,svg,watch}) {
    return (
        <div className="flex-1 group flex items-center gap-px">
            <div className={`w-[2.172rem] h-[2.172rem] flex items-center justify-center text-[color:var(--color-base-secondary) group-hover:bg-[${bgHover}] rounded-full group-hover:text-[${textHover}]`}>
                <svg viewBox="0 0 24 24" className="h-[1.172rem]">
                    <path
                        fill="currentColor"
                        d={svg}
                    />
                </svg>
            </div>
            <span className="text-[0.813rem] text-[color:var(--color-base-secondary)] group-hover:text-[#1d9bf0]">{watch}</span>
        </div>
    )
}
