import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signinApi } from "../../apis/authApis"
import { useDispatch } from "react-redux"
import { mainUser } from "../../global/globalState"
const SigninScreen = () => {

    const navigate = useNavigate()

    const AuthSchema = yup.object({
        email: yup.string().required(),
        password: yup.string().required()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(AuthSchema)
    })

    const dispatch = useDispatch()
    const onHandleSubmit = handleSubmit(async (data) => {
        const { email, password } = data
        signinApi({ email, password }).then((res) => {
            dispatch(mainUser(res))
            navigate("/")
            console.log("This is res:", res)
        })
    })

    return (
        <div className="w-full h-screen bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 flex items-center justify-center">
            <form onSubmit={onHandleSubmit} className=" w-[90%] flex items-center max-md:flex-col max-md:items-center">
                <div>
                    <div className="text-6xl my-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-black  to-white w-full max-md:text-center">TalkIt</div>
                    <div className="max-md:text-center max-md:my-4 font-medium">Welcome to Talkit, Ajegunle's premier social platform tailored for our vibrant community. Dive into connections, storytelling, and the celebration of our diverse cultures. Join our inclusive space and be a part of amplifying every voice, fostering empowerment and unity!</div>
                </div>
                <div className="ml-2 min-w-[300px] rounded-md bg-white h-[230px] flex flex-col items-center">
                    <div className="font-semibold text-xl  mt-[2px]">Signin</div>

                    <label
                        htmlFor="Email"
                        className="relative w-[90%] my-3 h-[40px] block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <input
                            type="text"
                            id="Email"
                            {...register("email")}
                            className="peer w-full h-full pl-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                            placeholder="Email"
                        />

                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Email
                        </span>
                    </label>
                    <label
                        htmlFor="Password"
                        className="relative w-[90%] my-1 h-[40px] block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <input
                            type="text"
                            id="Password"
                            {...register("password")}
                            className="peer w-full h-full pl-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                            placeholder="Password"
                        />

                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Password
                        </span>
                    </label>
                    <div className="text-[14px] w-[90%] flex justify-end my-2">Don't have an account?
                        <Link to="/auth"><span className="ml-1 hover:underline transition-all duration-300 hover:cursor-pointer hover:text-[red] text-[purple] ">Signup</span></Link></div>
                    <div className="w-[90%] h-[45px]">
                        <button className="bg-purple-600 h-full w-full rounded-md flex items-center justify-center text-white" type="submit">Signin</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SigninScreen