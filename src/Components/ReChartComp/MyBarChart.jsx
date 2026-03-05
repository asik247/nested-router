import { use } from "react";
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";

const MyBarChart = ({ promiseAxios }) => {

    const promiseData = use(promiseAxios);
    const students = promiseData.data;

    // nested array flatten করে এক লেভেলে নিয়ে আসলাম
    // const chartData = students.flatMap(student =>
    //     student.subjects.map(sub => ({
    //         student: student.name,
    //         book: sub.subject,
    //         mark: sub.obtained_marks
    //     }))
    // );
    const chartData = [];
    students.forEach(student=>{
        // console.log(student);
        student.subjects.forEach(sub=>{
            chartData.push({
                book:sub.subject,
                mark:sub.obtained_marks
            })
        })
    })


    return (
       <div>
            <h2>Student Marks Chart</h2>
            <BarChart width={700} height={400} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="book" />   {/* subject name */}
                <YAxis />
                <Tooltip />
                <Bar dataKey="mark" />
            </BarChart>
        </div>
    );
};

export default MyBarChart;


/**
 * [
  {
    "employee_id": "EMP001",
    "name": "Alice",
    "department": "Engineering",
    "skills": [
      { "skill": "JavaScript", "level": "Advanced" },
      { "skill": "React", "level": "Intermediate" }
    ]
  },
  {
    "employee_id": "EMP002",
    "name": "Bob",
    "department": "Design",
    "skills": [
      { "skill": "Photoshop", "level": "Advanced" },
      { "skill": "Illustrator", "level": "Intermediate" }
    ]
  }
]










const skillData = [];

employees.forEach(employee => {
  employee.skills.forEach(skill => {
    skillData.push({
      employeeName: employee.name,
      department: employee.department,
      skill: skill.skill,
      level: skill.level
    });
  });
});

console.log(skillData);
 */