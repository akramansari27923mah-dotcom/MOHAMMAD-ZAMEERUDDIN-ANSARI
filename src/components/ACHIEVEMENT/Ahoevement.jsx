import achiv from "../../data/achiv"
import AchivCard from "./AchivCard"

const Achievement = () => {
    return (
        <div id="Achievement" className="w-full min-h-screen flex flex-col justify-center items-center z-10 md:gap-y-15 gap-y-10">
            <div>
                <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent md:text-4xl text-2xl tracking-widest">ACHIEVEMENT AND AWARDS</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 justify-center items-center text-center">
                {
                    achiv.map(({ name }) => (
                        <AchivCard name={name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Achievement