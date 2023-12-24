import { createElement } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
export default function Button({size,variant,className,children,...props}){
    return createElement('button',{
        className:classNames(" rounded-full justify-center flex items-center font-bold transition-colors",{
            "px-4 h-8": size==="small",
            "px-4 h-9": size==="normal",
            "px-4 text-[17px] w-full h-[52px]": size==="large",
            "bg-[color:var(--color-primary)] hover:bg-[#1a8cd8] text-white":variant==="primary",
            "bg-[#eff3f4] hover:bg-[#d7dbdc] text-black":variant==="white",
            "border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]":variant==="white-outline",
            [className]:true
        }),
        ...props
    },children)
}
Button.propTypes={
    size:PropTypes.oneOf(["small","normal","large"]),
    variant:PropTypes.oneOf(["white","primary","white-outline"]),
    className:PropTypes.string
}
Button.defaultProps={
    size:"normal",
    variant:"primary"
}