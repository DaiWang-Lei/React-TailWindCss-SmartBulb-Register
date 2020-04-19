import React, { useRef } from "react";
import "./App.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SpaIcon from '@material-ui/icons/Spa';

const login: React.FC = () => {
    const handleLogin = () => {
        account.current.value === 'admin' && password.current.value === 'admin'
            ?
            alert('登陆成功') : alert('账号或者密码错误')

    }
    const account = useRef(null)
    const password = useRef(null)
    return (
        <div className='h-screen w-screen'>
            <div className='text-center font-bold text-2xl' style={{ top: '11%' }}>
                <SpaIcon className='mr-4 ' style={{ height: 50, width: 50, color: 'orange' }} />
                 Smart Bulb
            </div>
            <div style={{ top: '14%', left: '14%' }}>
                <input
                    className=' pl-5 focus:outline-none focus:shadow-outline bg-gray-200 opacity-75 w-9/12 h-14 rounded-full mb-3 outline-none py-4'
                    type="text"
                    placeholder='请输入账号'
                    ref={account}
                />
                <input
                    className='pl-5 focus:outline-none focus:shadow-outline bg-gray-200 opacity-75  rounded-full w-9/12 h-14 outline-none py-4'
                    type="password"
                    placeholder='请输入密码'
                    ref={password}
                />
            </div>
            <div style={{ top: '25%' }}>
                <div
                    className='flex justify-center items-center bg-blue-400 w-16 rounded-full h-16 text-white font-bold m-auto text-xl'
                    onClick={handleLogin}
                >
                    <ArrowForwardIcon />
                </div>
            </div>
            <div className='flex justify-around text-xs font-bold' style={{ top: '50%' }}>
                <span >忘记密码</span>
                <span className='opacity-50'>｜</span>
                <span >用户注册</span>
            </div>
        </div>
    );
};

export default login;