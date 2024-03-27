import { useState } from "react";
import { NavLink,useNavigate } from 'react-router-dom'
import { UseAdmin } from "../Context/Authentications";

export default function AdminLogin() {
  const [usernamee, setusername] = useState('')
  const [passwordd, setpassword] = useState('')
  const navigate = useNavigate()
  const {username,password, setAllowedfunction} = UseAdmin()

  function HandleClick(event){
    event.preventDefault()
    if(username===usernamee && password === passwordd){
      setAllowedfunction(true)
      navigate('databaseinfo')
    }
    else{
      alert('Please Enter Valid Credentials')
    }
  }
  
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Please Enter Your Admin Credentials
              </h2>

              <form className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label for="" className="text-base font-medium text-gray-900">
                      {" "}
                      UserName{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Enter Your UserName"
                        onChange={(e) => setusername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label for="" className="text-base font-medium text-gray-900">
                        {" "}
                        Password{" "}
                      </label>

                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <NavLink
                      onClick={HandleClick} 
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Login
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}