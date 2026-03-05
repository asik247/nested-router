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
    const chartData = students.flatMap(student =>
        student.subjects.map(sub => ({
            student: student.name,
            book: sub.subject,
            mark: sub.obtained_marks
        }))
    );

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