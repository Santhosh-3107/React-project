import React from 'react'


const Login = () => {


  const [state,Settate] = useState('Sign Up')

  const [email, SetEmail] = useState('')
  const [pasword, SetPassword] = useState('')
  const [Name, SetName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()


  }

  return (
   <form className='min-h-[80vh] flex items-center' >
    <div clasName='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-zinc-600 text-sm hadow-lg'>
      <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
      <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
      {
        state === "Sign Up" && <div className='w-full'>
        <p>Full Name</p>
        <input claName='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
      </div>
      }
      
      <div className='w-full'>
        <p>Email</p>
        <input  claName='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.name)} value={email} required/>
      </div>

      <div className='w-full'>
        <p>password</p>
        <input  claName='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.name)} value={password} required/>
      </div>

      <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
    {
      state === "Sign Up"
      ? <p>Already have an account? <span onClick={()=>setState('Login')} clasName='text-primary underline cursor-pointer'>Login here</span></p>
      : <p>Create a new account? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
    }
    </div>
   </form>
  )
}

export default Login