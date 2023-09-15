import { Link } from "react-router-dom"



function SemesterBtn(props) {
    return(
        <>
        <div className="container mx-auto mb-16 md:mb-0 px-3 py-4 flex flex-wrap items-center justify-center space-x-2 space-y-4 h-20">
            <Link to="/semester1" className="bg-green-900 shadow-lg px-2 py-1 text-white rounded-full  hover:px-3 hover:py-2 hover:text-green-200 transition-all ">Semester 1</Link>
            <Link to="/semester2" className="bg-green-900 shadow-lg px-2 py-1 text-white rounded-full  hover:px-3 hover:py-2 hover:text-green-200 transition-all ">Semester 2</Link>
            <Link to="/semester3" className="bg-green-900 shadow-lg px-2 py-1 text-white rounded-full  hover:px-3 hover:py-2 hover:text-green-200 transition-all ">Semester 3</Link>
            <Link to="/semester4" className="bg-green-900 shadow-lg px-2 py-1 text-white rounded-full  hover:px-3 hover:py-2 hover:text-green-200 transition-all ">Semester 4</Link>
            <Link to="/semester5" className="bg-green-900 shadow-lg px-2 py-1 text-white rounded-full  hover:px-3 hover:py-2 hover:text-green-200 transition-all ">Semester 5</Link>
        </div>
            
        </>
    )
}

export default SemesterBtn