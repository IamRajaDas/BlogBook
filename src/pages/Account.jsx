import React from 'react'
import Card from '../components/Card'

function Account() {
  return (
    <div className='flex justify-center py-8 mt-5 pt-5'>
        <Card name="Linkedin" followers={244} image="https://media.licdn.com/dms/image/D4D03AQG89ICdQafpAQ/profile-displayphoto-shrink_800_800/0/1697563490953?e=1728518400&v=beta&t=yRIvd-05jMnJU8MEi8k0f1ksiu9gHwzNk45cS2xCP1s" url="https://www.linkedin.com/in/raja-das-854a13296/"/>
        <Card name="X" followers={20} image="https://pbs.twimg.com/profile_images/1348868649436598277/l2onND9Y_400x400.jpg" url="https://x.com/Das__Raja"/>
        <Card name="facebook" followers={689} image="https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-1/386495393_1070884274088265_3049329810613745056_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=itmJvwC7r8EQ7kNvgGR3RYr&_nc_ht=scontent-maa2-2.xx&oh=00_AYA-cf9YRfBr7uLhnSEvraYA39Nf5PcIq6ltfNI8b__DbA&oe=66B67AC7" url="https://www.facebook.com/profile.php?id=100035001068049"/>
    </div>
  )
}

export default Account