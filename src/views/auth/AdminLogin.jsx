import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { admin_login } from '../../redux/Reducers/authReducer';

const AdminLogin = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state));
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

                <img className='w-50 mb-5 mx-auto' src="/images/logo.png" alt="logo" />

                <h2 className="text-2xl font-medium mb-6 text-center">Quản Trị Viên</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name='email'
                            onChange={handleChange}
                            value={state.email}
                        />
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Mật Khẩu
                            </label>

                            <a
                                className="text-blue-500 hover:text-blue-700 text-sm"
                                href="/forgot-password"
                            >
                                Quên mật khẩu?
                            </a>
                        </div>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name='password'
                            onChange={handleChange}
                            value={state.password}
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            className="mr-2 leading-tight"
                            id="terms"
                            type="checkbox"
                        />
                        <label className="text-gray-700 text-sm" htmlFor="terms">
                            Ghi nhớ đăng nhập
                        </label>
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Đăng Ký
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <span className="text-gray-700 pr-2">Bạn chưa có tài khoản?</span>
                        <a
                            className="text-blue-500 hover:text-blue-700 text-sm"
                            href="/register"
                        >
                            Đăng ký ngay
                        </a>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default AdminLogin