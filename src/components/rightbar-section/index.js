import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export default function RightBarSection({ title, children, more }) {
    return (
        <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
            <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center">{title}</h5>
            <div className="grid">
                {children}
            </div>
            {
                more && (
                    <Link to={more} className="rounded-b-2xl h-[52px] flex items-center px-4 text-[15px] text-[color:var(--color-primary)] transition-colors hover:bg-white/[0.03]">
                        Daha Fazla Göster
                    </Link>
                )
            }
        </section>
    )
} 
RightBarSection.propTypes={
    title:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
    more:PropTypes.oneOfType([PropTypes.bool,PropTypes.string])
}
RightBarSection.defaultProps={
    more:false
}
