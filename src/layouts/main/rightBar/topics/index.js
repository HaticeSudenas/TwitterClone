import { topics } from "../../../../utils/consts"
import Topic from "./topic"
import RightBarSection from "../../../../components/rightbar-section"

export default function Topics() {
    return (
        <RightBarSection title="İlgini Çekebilecek Gündemler" more="/trends">
            {topics.map((topic, index) => <Topic item={topic} key={index} />)}
        </RightBarSection>

    )
}