import Student from './Student';
import { useState } from 'react';

export default function StudentList({ studentList, darkmode }){
    const [comments, setComments] = useState([]);

    return (
        <ul>
            {studentList.map((student, index)=>{
                return (
                    <li key={ student.id }>
                        <Student student={ student } comments={ comments } setComments={ setComments } darkmode={ darkmode }/>
                    </li>
                )
            })}
        </ul>
    )
}