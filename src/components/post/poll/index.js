import { useState } from "react"

export default function Poll({ poll: pollData }) {
    const [poll, setPoll] = useState(pollData)
    return (
        <div className="mt-3 grid gap-1">
            {
                poll.answers.map(answer => (
                    <button
                        onClick={() =>{setPoll({...poll,votes:poll.votes+1,answers:poll.answers.map((a)=>{
                            if(a.id===answer.id){
                                return{
                                    ...a,
                                    votes:a.votes+1
                                }
                            }
                            return a
                        })})}}
                        key={answer.id}
                        className="h-8 border border-[color:(var(--color-primary))] rounded-full text-[color:var(--color-primary)] font-bold hover:bg-[color:var(--background-primary-alpha)] transition-colors">
                        {answer.text}
                    </button>
                ))
            }
            <div className="text-[color:var(--color-base-secondary)] mt-2">{poll.votes} oy . 6 gün kaldı</div>
        </div>
    )
}