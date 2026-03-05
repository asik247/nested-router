import React, { use } from 'react';

const MyBarChart = ({promiseAxios}) => {
    console.log(promiseAxios);
    const promiseData = use(promiseAxios)
    console.log(promiseData);
    return (
        <div>
            <h1>bar chart here</h1>
        </div>
    );
};

export default MyBarChart;