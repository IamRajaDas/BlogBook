
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

function Help() {
    const data = useLoaderData()
    const mail=()=>{}
  return (
    <div className='flex justify-around m-10 p-5 items-center'>
      <div >
        <Card name="Github" followers={data.followers} image={data.avatar_url} url="https://github.com/IamRajaDas"/>
      </div>  
    </div>
  )
}

export default Help

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/IamRajaDas')
    return response.json()
}

// import { useLoaderData } from 'react-router-dom';
// import Card from '../components/Card';
// import { SOCIAL_MEDIA_URLS } from '../conf/url';

// function Help() {
//     const data = useLoaderData();
//     const mail = () => {
//       window.location.href = `mailto:${SOCIAL_MEDIA_URLS.email}`;
//     };

//     return (
//       <div className='flex justify-around m-10 p-5 items-center'>
//         <div>
//           <button 
//             className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
//             onClick={mail}
//           >
//             {SOCIAL_MEDIA_URLS.email}
//           </button>
//         </div>
//         <div>
//           <Card 
//             name="GitHub" 
//             followers={data.followers} 
//             image={data.avatar_url} 
//             url={SOCIAL_MEDIA_URLS.github}
//           />
//         </div>  
//         <div>
//           <a 
//             href="tel:9083741993" 
//             className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'
//           >
//             Contact: {SOCIAL_MEDIA_URLS.contactNumber}
//           </a>
//         </div>
//       </div>
//     );
// }

// export default Help;

// export const githubInfoLoader = async () => {
//     try {
//       const response = await fetch(SOCIAL_MEDIA_URLS.githubAPI);
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Error fetching GitHub data:', error);
//       return { followers: 0, avatar_url: '' };
//     }
// };
