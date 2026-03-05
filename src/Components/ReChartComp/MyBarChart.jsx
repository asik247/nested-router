import { use } from "react";


const MyBarChart = ({promiseAxios}) => {
    // console.log(promiseAxios);
    const promiseData = use(promiseAxios);
    console.log(promiseData);
    const myAllData = promiseData.data
   
    
    return (
        <div>
            {/* <h1>bar chart here</h1> */}
            {
                myAllData.map(singleData=>{
                    const chartData={
                        sub:singleData.subject,
                        // Bangla:singleData.subject,
                        // Mathematics:singleData.subject,
                        // Science:singleData.subject,
                        mark:singleData.full_marks,



                    }
                })
            }
        </div>
    );
};
/**
 * 
    "student_id": "STU1001",
    "name": "Rahim Ahmed",
    "class": "10",
    "section": "A",
    "roll_number": 1,
    "subjects": [
      { "subject": "English", "full_marks": 100, "obtained_marks": 85 },
      { "subject": "Bangla", "full_marks": 100, "obtained_marks": 78 },
      { "subject": "Mathematics", "full_marks": 100, "obtained_marks": 92 },
      { "subject": "Science", "full_marks": 100, "obtained_marks": 88 }
 */

export default MyBarChart;