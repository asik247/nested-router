import React, { Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import axios from 'axios';
import MyBarChart from '../ReChartComp/MyBarChart';


const Root = () => {
    const promiseAxios = axios.get("Marks.json")
    console.log(promiseAxios);
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-screen'>
                <Outlet>
                    <Suspense fallback={<h1>Loaddin..</h1>}>
                        <MyBarChart promiseAxios={promiseAxios}></MyBarChart>
                    </Suspense>
                </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;