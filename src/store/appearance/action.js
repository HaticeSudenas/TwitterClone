import { _removeModal, _setBackGroundColor, _setColor, _setFontSize, _setModal } from ".";
import store from "..";

export const setBackGroundColor=(data)=>store.dispatch(_setBackGroundColor(data));
export const setColor=data=>store.dispatch(_setColor(data));
export const setFontSize=data=>store.dispatch(_setFontSize(data));