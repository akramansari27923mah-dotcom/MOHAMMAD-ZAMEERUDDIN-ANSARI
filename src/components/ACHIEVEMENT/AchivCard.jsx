
const AchivCard = ({name}) => {
    return (
        <div className="text-black md:text-[20px]">
            <p className="p-3 border border-gray-400 bg-black/20 backdrop-blur-md rounded-lg">{name}</p>
        </div>
    )
}

export default AchivCard