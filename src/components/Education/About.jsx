import Card from "./Card"
import EducationHead from "./EducationHead"
import education from "../../data/education"

const Education = () => {
    return (
        <div
            id='Education'
            className='w-full min-h-screen flex flex-col justify-center items-center px-20'>

            {/* heading */}
            <EducationHead />

            <div
                className="grid md:grid-cols-3 justify-center items-center gap-x-30 gap-y-10 flex-wrap">
                {
                    education
                        .map(({
                            UniversityName,
                            degree,
                            date,
                            grade,
                            idx }) => (

                            <Card
                                key={idx}
                                UniversityName={UniversityName}
                                degree={degree}
                                date={date}
                                grade={grade} />
                        ))
                }

            </div>
        </div>
    )
}

export default Education