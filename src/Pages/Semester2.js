
import { useState } from "react";
import Circular from "../Components/Circular";
import Footer from "../Components/Footer";


function Semester2(props) {
    // Set Data
    let [course1, setCourse1] = useState(0)
    let [course2, setCourse2] = useState(0)
    let [course3, setCourse3] = useState(0)
    let [course4, setCourse4] = useState(0)
    let [course5, setCourse5] = useState(0)
    let [course6, setCourse6] = useState(0)
    let [course7, setCourse7] = useState(0)
    let [course8, setCourse8] = useState(0)
    let [course9, setCourse9] = useState(0)

    // dgree convert to grade funcution
    let convDgreeToGrade = function (dgree) {
        if (dgree >= 97) return 4.0;    // A+
        if (dgree >= 93) return 4.0;    // A
        if (dgree >= 89) return 3.7;    // A-
        if (dgree >= 84) return 3.3;    // B+
        if (dgree >= 80) return 3.0;    // B
        if (dgree >= 76) return 2.7;    // B-
        if (dgree >= 73) return 2.3;    // C+
        if (dgree >= 70) return 2.0;    // C
        if (dgree >= 67) return 1.7;    // C-
        if (dgree >= 64) return 1.3;    // D+
        if (dgree >= 60) return 1.0;    // D
        return 0.0;                     // F
    }

    let course1ByGrade = convDgreeToGrade(course1)
    let course2ByGrade = convDgreeToGrade(course2)
    let course3ByGrade = convDgreeToGrade(course3)
    let course4ByGrade = convDgreeToGrade(course4)
    let course5ByGrade = convDgreeToGrade(course5)
    let course6ByGrade = convDgreeToGrade(course6)
    let course7ByGrade = convDgreeToGrade(course7)
    let course8ByGrade = convDgreeToGrade(course8)
    let course9ByGrade = convDgreeToGrade(course9)
    console.log(course1ByGrade)


    let humanAnatomy2 = course1ByGrade * 3
    let physiology2 = course2ByGrade * 3
    let biochemistry1 = course3ByGrade * 3
    let histology2 = course4ByGrade * 2
    let pathology1 = course5ByGrade * 3
    let kinesiology = course6ByGrade * 2
    let molcularBiology = course7ByGrade * 1
    let electiveCourse1 = course8ByGrade * 2
    let electiveCourse2 = course9ByGrade * 2

    let GPA = (humanAnatomy2 + physiology2 + biochemistry1 + histology2 + pathology1 + kinesiology + molcularBiology + electiveCourse1 + electiveCourse2) / 21


    let dgreeSum = (+course1 + +course2 + +course3 + +course4 + +course5 + +course6 + +course7 + +course8 + +course9) / 9



    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row mt-3 ">
                <div id="course" className=" w-full md:w-2/3 flex flex-col space-y-3 py-3  rounded-lg border border-slate-400">
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2  ">
                        <div className="  text-slate-400">#</div>
                        <div className="  text-slate-400 ">Course Name</div>
                        <div className="  text-slate-400 w-20 mr-8 md:mr-16 text-center">Degree</div>

                    </div>
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2 bg-green-200 rounded-lg shadow-lg">
                        <div className=" text-sm font-bold text-green-950">1</div>
                        <div className=" text-sm font-bold text-green-950">Human Anatomy 2</div>
                        <input onChange={(e) => { setCourse1(e.target.value) }} placeholder="99" type="number" min="0" max="100" className=" w-20 mr-8 md:mr-16 rounded-2xl text-center shadow-lg "></input>
                    </div>
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2 bg-green-200 rounded-lg shadow-lg">
                        <div className=" text-sm font-bold text-green-950">2</div>
                        <div className=" text-sm font-bold text-green-950">Physiology 2</div>
                        <input onChange={(e) => { setCourse2(e.target.value) }} placeholder="99" type="number" min="0" max="100" className=" w-20 mr-8 md:mr-16 rounded-2xl text-center shadow-lg"></input>
                    </div>
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2 bg-green-200 rounded-lg shadow-lg">
                        <div className=" text-sm font-bold text-green-950">3</div>
                        <div className=" text-sm font-bold text-green-950">Biochemistry 1</div>
                        <input onChange={(e) => { setCourse3(e.target.value) }} placeholder="99" type="number" min="0" max="100" className=" w-20 mr-8 md:mr-16 rounded-2xl text-center shadow-lg"></input>
                    </div>
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2 bg-green-200 rounded-lg shadow-lg">
                        <div className=" text-sm font-bold text-green-950">4</div>
                        <div className=" text-sm font-bold text-green-950">Histology 2</div>
                        <input onChange={(e) => { setCourse4(e.target.value) }} placeholder="99" type="number" min="0" max="100" className=" w-20 mr-8 md:mr-16 rounded-2xl text-center shadow-lg"></input>
                    </div>
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2 bg-green-200 rounded-lg shadow-lg">
                        <div className=" text-sm font-bold text-green-950">5</div>
                        <div className=" text-sm font-bold text-green-950">Pathology 1</div>
                        <input onChange={(e) => { setCourse5(e.target.value) }} placeholder="99" type="number" min="0" max="100" className=" w-20 mr-8 md:mr-16 rounded-2xl text-center shadow-lg"></input>
                    </div>
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2 bg-green-200 rounded-lg shadow-lg">
                        <div className=" text-sm font-bold text-green-950">6</div>
                        <div className=" text-sm font-bold text-green-950">Kinesiology</div>
                        <input onChange={(e) => { setCourse6(e.target.value) }} placeholder="99" type="number" min="0" max="100" className=" w-20 mr-8 md:mr-16 rounded-2xl text-center shadow-lg"></input>
                    </div>
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2 bg-green-200 rounded-lg shadow-lg">
                        <div className=" text-sm font-bold text-green-950">7</div>
                        <div className=" text-sm font-bold text-green-950">Molcular Biology</div>
                        <input onChange={(e) => { setCourse7(e.target.value) }} placeholder="99" type="number" min="0" max="100" className=" w-20 mr-8 md:mr-16 rounded-2xl text-center shadow-lg"></input>
                    </div>
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2 bg-green-200 rounded-lg shadow-lg">
                        <div className=" text-sm font-bold  text-green-950">8</div>
                        <div className=" text-sm font-bold text-green-950">Elective Course 1</div>
                        <input onChange={(e) => { setCourse8(e.target.value) }} placeholder="99" type="number" min="0" max="100" className=" w-20 mr-8 md:mr-16 rounded-2xl text-center shadow-lg"></input>
                    </div>
                    <div className=" flex flex-row justify-between mx-1 py-2 px-2 bg-green-200 rounded-lg shadow-lg">
                        <div className=" text-sm font-bold  text-green-950">9</div>
                        <div className=" text-sm font-bold text-green-950">Elective Course 2</div>
                        <input onChange={(e) => { setCourse9(e.target.value) }} placeholder="99" type="number" min="0" max="100" className=" w-20 mr-8 md:mr-16 rounded-2xl text-center shadow-lg"></input>
                    </div>
                </div>

                <div id="circ" className="bg-gradient-to-t from-green-200 w-full md:w-1/3 py-3  flex flex-col items-center justify-center space-x-4 space-y-10">
                    <div className=" w-52 flex ">
                        <Circular finalDegree={dgreeSum} finalGPA={GPA} />
                    </div>
                    <div className=" font-bold text-green-950 text-2xl">Your GPA: {GPA.toFixed(3)}</div>
                </div>

            </div>
            <Footer/>
        </>

    )
}

export default Semester2