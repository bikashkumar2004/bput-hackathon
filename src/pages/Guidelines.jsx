import Heading from '../components/typography/Heading';
import SubHeading from '../components/typography/SubHeading';
import ListItem from '../components/typography/ListItem';
import SubListItem from '../components/typography/SubListItem';
const Guidelines = () => {
    return (
        <div className='w-full md:max-w-7xl mx-auto my-14 p-2'>
            <Heading text={"Hackathon Guidelines"} />
            <div className="w-full py-4 md:py-">
                <div className="text-start text-base md:text-base">
                    <p className="text-gray-800">Please read the guidelines carefully before participating in the hackathon.</p>
                    <p className="text-gray-600">Make sure to follow all the rules and regulations to ensure a smooth experience for everyone.</p>
                    <div className='mt-8 mb-16 '>
                        <SubHeading text={"Team Composition and Eligibility"} />
                        <ListItem description='Minimum 3, Maximum 6 members' title='Team Size ' />

                        <div className='flex flex-col gap-2 mb-2'>
                            <ListItem title='Eligibility' />
                            <div className="ml-4">

                                {["All team members must be from a college affiliated to BPUT.",
                                    "Interdisciplinary participation is strongly encouraged (technical, management, design, etc.).",
                                    "Faculty mentors may accompany the teams (optional)."]?.map((item, index) => (
                                        <SubListItem key={index} text={item} />
                                    ))}
                            </div>
                        </div>
                        <p className='overflow-hidden flex gap-2 items-center my-6 border border-pink-500 rounded-md w-fit bg-pink-50'>
                            <span className='font-semibold bg-pink-500 text-white p-1 '>Note</span>
                            <span className="font-normal p-1">Teams must register with final composition; no changes allowed post-registration.</span>
                        </p>
                    </div>

                    <div className='mt-8 mb-16 '>
                        <SubHeading text={"Expected Deliverables and Outcomes"} />
                        {["Working prototype or MVP (Minimum Viable Product).",
                            "Pitch deck explaining the problem, solution, impact, and future scalability.",
                            "Technical documentation with architecture and design flow.",
                            " Demo video showcasing the solution (optional). "].map((item, index) => (

                                <ListItem key={index} description={item} />
                            ))}

                    </div>


                    <div className='mt-8 mb-16 '>
                        <SubHeading text={"Guidelines and Regulations"} />
                        {["Adherence to the timeline and format is mandatory.",
                            "Intellectual property rights of original solutions remain with the teams.",
                            "Plagiarism or copying from existing projects will lead to disqualification.",
                            "Teams are expected to maintain professionalism and ethical conduct."
                        ].map((item, index) => (

                            <ListItem key={index} description={item} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guidelines