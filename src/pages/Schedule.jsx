import React from 'react'
import Heading from '../components/typography/Heading'
import ComingSoon from '../components/coming-soon/ComingSoon'

const Schedule = () => {
    return (
        <div className='w-full md:max-w-7xl mx-auto my-14 p-2'>
            <Heading text={" Schedule"} />
            <div className="w-full py-4 md:py-">
                <ComingSoon />
            </div>
        </div>
    )
}

export default Schedule