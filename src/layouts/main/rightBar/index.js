


import Search from "./search";
import Topics from "./topics";
import Premium from "./premium";
import WhoFollow from "./who-follow";
import Footer from "./footer";
export default function RightBar() {
    return (
        <aside className="w-[350px] mr-2.5">
                <Search/>
                <Premium/>
                <Topics/>
                <WhoFollow/>
                <Footer/>
        </aside>
    );
}