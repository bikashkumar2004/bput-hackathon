import { ChevronRight } from "lucide-react"

const SubListItem = ({ text }) => {
    return (
        <p className='flex gap-2 items-center m-0.5'>
            <ChevronRight className='text-pink-600' size={20} />
            <span className='font-normal'>{text}</span>
        </p>
    )
}

export default SubListItem