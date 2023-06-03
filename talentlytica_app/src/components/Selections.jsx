import { useEffect, useState } from "react"

export default function Selections({ student, setStudents, students, index }) {
    const [numbers, setNumbers] = useState([0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    // const data = useState(student)
    function formHandler(e) {

        students.forEach((elemen, i) => {
            if (index == i) {

                let newStudents = [...students]
                let studentNumber = `mahasiswa_${i + 1}`
                let newStudent = elemen[studentNumber]
                newStudent[e.target.name] = +e.target.value
                let output = { [studentNumber]: newStudent }

                newStudents[i] = output
                setStudents([...newStudents])

            }
        })

    }

    return (
        <>
            <select name="aspek_penilaian_1" value={student.aspek_penilaian_1} onChange={formHandler} >
                {numbers.map(el =>

                    <option value={el} >{el}</option>
                )}

            </select>

            <select name="aspek_penilaian_2" value={student.aspek_penilaian_2} onChange={formHandler}>
                {numbers.map(el =>

                    <option value={el} >{el}</option>
                )}

            </select>

            <select name="aspek_penilaian_3" value={student.aspek_penilaian_3} onChange={formHandler}>
                {numbers.map(el =>

                    <option value={el} >{el}</option>
                )}

            </select>
            <select name="aspek_penilaian_4" value={student.aspek_penilaian_4} onChange={formHandler}>
                {numbers.map(el =>

                    <option value={el} >{el}</option>
                )}

            </select>
        </>
    )
}