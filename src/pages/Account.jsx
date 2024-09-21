import React from 'react'
import Card from '../components/Card'
import { SOCIAL_MEDIA_URLS } from '../conf/url'

function Account() {
  return (
    <div className='flex justify-center py-8 mt-5 pt-5'>
        <Card name="Linkedin" followers={SOCIAL_MEDIA_URLS.linkedinFollower} image={SOCIAL_MEDIA_URLS.linkedinPhoto} url={SOCIAL_MEDIA_URLS.linkedin}/>
        <Card name="X" followers={SOCIAL_MEDIA_URLS.twitterFollower} image={SOCIAL_MEDIA_URLS.twitterPhoto} url={SOCIAL_MEDIA_URLS.twitter}/>
        <Card name="facebook" followers={SOCIAL_MEDIA_URLS.facebookFollower} image={SOCIAL_MEDIA_URLS.facebookPhoto} url={SOCIAL_MEDIA_URLS.facebook}/>
    </div>
  )
}

export default Account