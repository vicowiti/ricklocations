import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
    currentPage: number
    total: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
export default function Pagination(props: Props) {


    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
                <span
                    onClick={() => {
                        if (props.currentPage > 1)
                            props.setCurrentPage(props.currentPage - 1)
                    }}
                    className="inline-flex items-center cursor-pointer border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                    <FaArrowLeft className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                </span>
            </div>
            <div className="hidden md:-mt-px md:flex">
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >

                </a>
                {/* Current: "border-green-500 text-green-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                <a
                    href="#"
                    className="inline-flex items-center border-t-2  px-4 pt-4 text-sm font-medium text-green-600"
                    aria-current="page"
                >

                </a>
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >

                </a>
                <span className="inline-flex items-center border-t-2 border-green-500 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                    {props.currentPage}
                </span>
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >

                </a>
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >

                </a>
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >

                </a>
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <span
                    onClick={() => props.setCurrentPage(props.currentPage + 1)}
                    className="inline-flex cursor-pointer items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                    Next
                    <FaArrowRight className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
            </div>
        </nav>
    )
}
