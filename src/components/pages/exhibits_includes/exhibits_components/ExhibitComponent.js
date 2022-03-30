import React, {useEffect} from 'react'

import fetchBannerData from '../../home_includes/Home'

export default function ExhibitComponent() {
    const [exhibit, setExhibit] = useEffect([])

    useEffect(() => {
        fetchBannerData().then(exhibit =>{
            setExhibit(exhibit)
        })
    })
    

  return (
    <div>
        <img src={exhibit.dowload_url} alt="" />
    </div>
  )
}
