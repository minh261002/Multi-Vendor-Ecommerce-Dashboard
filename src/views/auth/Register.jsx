import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng Ký</h2>
                <form>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Họ Và Tên
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Mật Khẩu
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                            Xác Nhận Mật Khẩu
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirm-password"
                            type="password"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            className="mr-2 leading-tight"
                            id="terms"
                            type="checkbox"
                        />
                        <label className="text-gray-700 text-sm" htmlFor="terms">
                            Tôi đồng ý với các điều khoản sử dụng
                        </label>
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Đăng Ký
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <span className="text-gray-700 pr-2">Bạn đã có tài khoản?</span>
                        <a
                            className="text-blue-500 hover:text-blue-700 text-sm"
                            href="/login"
                        >
                            Đăng nhập ngay
                        </a>
                    </div>

                    <div className="w-full flex items-center justify-center mt-4 gap-3">
                        <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                        <div className="w-[10%] flex items-center justify-center">
                            <span className="text-gray-700 pb-1">Hoặc</span>
                        </div>
                        <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-4">
                        <div className="w-[135px] h-[35px] flex items-center justify-center cursor-pointer overflow-hidden rounded-md bg-[#e94335] shadow-lg py-5">
                            <FaGoogle className="text-white text-2xl" />
                        </div>

                        <div className="w-[135px] h-[35px] flex items-center justify-center cursor-pointer overflow-hidden rounded-md bg-[#3b5998] shadow-lg py-5">
                            <FaFacebook className="text-white text-2xl" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register