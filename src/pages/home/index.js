import Tab from "../../components/Tab";
import StickyHeader from "../../components/stick-header";
import ForYou from "./for-you";

export default function Home() {
    return (
        <>

            <Tab activeTab="for-you">
                <StickyHeader title="Ana Sayfa" >
                    <Tab.Items>
                        <Tab.Item id="for-you">
                            Sana Özel
                        </Tab.Item>
                        <Tab.Item id="followings">
                            Takip Edilenler
                        </Tab.Item>
                    </Tab.Items>
                </StickyHeader>
                <Tab.Content id="for-you">
                    <ForYou/>
                </Tab.Content>
                <Tab.Content id="followings">
                    2.Tab
                </Tab.Content>
            </Tab>

        </>
    );
}