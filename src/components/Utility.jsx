import { motion as Motion } from "motion/react"

export function SepareteContent({ children }) {
    return (
        <div className="border-b border-neutral-800">
            {children}
        </div>
    )
}

export function SectionTitle({ children }) {
    return (
        <Motion.h2
            variants={slideYMotion(-100,0)}
            initial={"hidden"}
            whileInView={"visible"}
            className="text-3xl sm:text-4xl lg:text-5xl text-center">
            {children}
        </Motion.h2>
    )
}

export function SectionContainer({ children }) {
    return (
        <SepareteContent>
            <div className="flex flex-col lg:flex-row items-center gap-10">
                {children}
            </div>
        </SepareteContent>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function slideXMotion(xInit, delay) {
    return {
        "hidden": {opacity:0, x:xInit},
        "visible": {opacity:1, x:0, transition:{duration:1.5, delay:delay}}

    }
}


// eslint-disable-next-line react-refresh/only-export-components
export function slideYMotion(yInit, delay) {
    return {
        "hidden": {opacity:0, y:yInit},
        "visible": {opacity:1, y:0, transition:{duration:1.5, delay:delay}}

    }
}

