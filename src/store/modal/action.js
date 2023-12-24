import { _removeModal, _setModal } from ".";
import store from "..";

export const setModal=(name,data=false)=>store.dispatch(_setModal({name,data}));
export const removeModal=data=>store.dispatch(_removeModal());