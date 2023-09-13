import { Link } from "react-router-dom";

const LoginPage = ()=>{

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e);
        const formData = new FormData(e.target);
        console.log(formData)
        // const {username, password} = Object.fromEntries(formData);
        // console.log(`${username} ${password}`)
    }
    return(
        <div className="bg-primary-gray flex items-center justify-center h-screen">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[400px] sm:mx-3">
                <h1 className="text-3xl font-semibold mb-4 text-center font-roboto">
                    Log In
                </h1>
                <form onClick={handleSubmit}>
                    <div className="mb-4">
                        <label for="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="userName" name="username" className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"/>
                    </div>
                    <div className="mb-4">
                        <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="passWord" name="password" className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"/>
                    </div>
                    <div className="flex justify-between items-center my-4 p-2">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" />
                            <label for="remember" className="ml-2">Remember Me</label>
                        </div>
                        <a href="#" className="text-primary-blue font-semibold hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full bg-secondary-blue text-white py-2 rounded-md hover:bg-hover-blue">
                    Log In
                    </button>
                    <div className="my-4 text-center">
                        <span>Not an admin?
                            <a href="src/pages/login/register.html"className="text-secondary-blue font-semibold hover:text-hover-blue hover:underline">Sign Up</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;