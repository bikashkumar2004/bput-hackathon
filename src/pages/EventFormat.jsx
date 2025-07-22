import { ChevronRight, ChevronsRight } from 'lucide-react';
import Heading from '../components/typography/Heading';
import SubHeading from '../components/typography/SubHeading';
import ListItem from '../components/typography/ListItem';
import SubListItem from '../components/typography/SubListItem';
const EventFormat = () => {
    return (
        <div className='w-full md:max-w-7xl mx-auto my-14 p-2'>
            <Heading text={"Event Format"} />
            <div className="w-full py-4 md:py-">
                <div className="text-start text-base md:text-base">
                    <p className="text-gray-800">Please read the event format carefully before participating in the hackathon.</p>
                    <div className='mt-8 mb-16 '>
                        <SubHeading text={"Evaluation Process and Criteria"} />
                        <p className="text-gray-800 my-4">The evaluation process will consist of multiple rounds, focusing on different aspects of the projects.</p>

                        <ListItem title='College-Level Review' description='(by internal faculty panels)' />
                        <div className='flex flex-col gap-2 mb-2'>
                            <ListItem title='University-Level Virtual Evaluations' />
                            <div className="ml-4">

                                {["Round 1: Ideation and Relevance (20%)",
                                    "Round 2: Prototype and Execution (30%)",
                                ]?.map((item, index) => (
                                    <SubListItem key={index} text={item} />
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mb-2'>
                            <ListItem title='Finale Evaluation' />
                            <div className="ml-4">

                                {["Innovation & Originality (20%)",
                                    "Technical Complexity (20%)",
                                    "Impact & Use Case Relevance (15%)",
                                    "UI/UX and Design (10%)",
                                    "Communication and Presentation (5%)",
                                ]?.map((item, index) => (
                                    <SubListItem key={index} text={item} />
                                ))}
                            </div>
                        </div>
                        <div className="my-16">

                            <SubHeading text={"Accommodation, Hospitality, and Facilities"} />
                            <p className="text-gray-800 my-4">For all finalists attending the finale :</p>
                            {["Free accommodation in university hostels or guesthouses.",
                                "Meals provided during the event.",
                                "Emergency medical support and security arrangements.",
                                "Round-the-clock access to internet, charging stations, and utilities."
                            ].map((item, index) => (
                                <ListItem key={index} description={item} />
                            ))}

                        </div>
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



                </div>
            </div>
        </div>
    )
}

export default EventFormat