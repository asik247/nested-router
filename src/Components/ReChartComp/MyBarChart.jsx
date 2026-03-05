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
                myAllData.map(singleData=>console.log(singleData))
            }
        </div>
    );
};

export default MyBarChart;