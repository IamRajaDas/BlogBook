
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

function Help() {
    const data = useLoaderData()
    const mail=()=>{}
  return (
    <div className='flex justify-around m-10 p-5 items-center'>
      <div>
        <button className="bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg" onClick={mail}>Email: equationraja2001@gmail.com</button>
      </div>
      <div >
        <Card name="Github" followers={data.followers} image={data.avatar_url} url="https://github.com/IamRajaDas"/>
      </div>  
      <div>
        <button className='bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg'>Contact: 9083741993</button>
      </div>
 
    </div>
  )
}

export default Help

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}