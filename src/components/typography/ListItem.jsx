import { ChevronsRight } from "lucide-react"


const ListItem = ({ title = "", description = "" }) => {
    return (
        <p className='flex gap-2 items-start mb-2'>
            <ChevronsRight className='text-pink-600 min-w-fit mt-1 md:mt-0' size={25} />
            {title?.length > 0 && <span className='font-semibold'>{title} : </span>}
            {description?.length > 0 && <span className="font-normal">{description}</span>}
        </p>
    )
}

export default ListItem
