import Content from "../../components/Tab/content"
import Item from "../../components/Tab/item"
import Items from "../../components/Tab/items"
import PropTypes from 'prop-types';
import { TabContext } from "./context";
import { useState } from "react";
import StickyHeader from "../stick-header";
export default function Tab({children,activeTab}){
    
    const [active,setActive]=useState(activeTab)
    const data={active,setActive}

    const contents=children.filter(c=>c.type===Content)
    const stickyHeader=children.filter(c=>c.type===StickyHeader)
    const items=stickyHeader[0]

    const content=contents.find(c=>c.props.id===active)

    
    return(
        <TabContext.Provider value={data}>
            {items} 
           {content}
        </TabContext.Provider>
    )
}
Tab.Items=Items
Tab.Item=Item
Tab.Content=Content

Tab.propTypes={
    children:PropTypes.arrayOf(PropTypes.node),
    activeTab:PropTypes.string.isRequired
}