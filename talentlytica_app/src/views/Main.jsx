import { useEffect, useState } from "react"
import "./Main.css"
import Selections from "../components/Selections"
import studentsGrade from "../stores/students"
export default function Main() {
    // const [students, setStudents] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [students, setStudents] = useState(studentsGrade)
    const [output, setOutput] = useState()
    function formSubmit() {

        let blueprint = { aspek_penilaian_1: {}, aspek_penilaian_2: {}, aspek_penilaian_3: {}, aspek_penilaian_4: {} }

        students.forEach((elemen, index) => {
            let studentNumber = `mahasiswa_${index + 1}`
            for (let key in elemen[studentNumber]) {
                blueprint[key][studentNumber] = elemen[studentNumber][key]

            }
        })

        let converted = JSON.stringify(blueprint, null, 2)
        setOutput(converted)

    }
    console.log(output);
    useEffect(() => {

    }, [])

    return (


        <div >
            <div id="header"  >
                <h2 >Aspek Penilaian Mahasiswa</h2>
            </div>
            <div id="content" >
                <div>
                    <div id="block-penilaian" style={{ display: "flex" }}>
                        <h3>Aspek Penilaian 1</h3>
                        <h3>Aspek Penilaian 2</h3>
                        <h3>Aspek Penilaian 3</h3>
                        <h3>Aspek Penilaian 4</h3>
                    </div>
                    <div>
                        <form action="" onSubmit={(e) => { e.preventDefault(); formSubmit() }}>
                            {
                                students.map((el, index) =>
                                    <div key={index} className="student-row" >
                                        <label>Mahasiswa {index + 1}</label>
                                        <Selections student={el} setStudents={setStudents} students={students} index={index} ></Selections>
                                    </div>
                                )
                            }
                            <div id="button-section">
                                <button type="submit" >Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {output ?
                <div id="json-output">
                    <h2>Output</h2>
                    {output}
                </div> : ""
            }
        </div>
    )
}