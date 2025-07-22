import ComingSoon from '../components/coming-soon/ComingSoon'
import Heading from '../components/typography/Heading'

const ProblemStatements = () => {
    return (
        <div className='w-full md:max-w-7xl mx-auto my-14 p-2'>
            <Heading text={"Problem Statements"} />
            <div className="w-full py-4 md:py-">
                <ComingSoon />
            </div>
        </div>
    )
}

export default ProblemStatements