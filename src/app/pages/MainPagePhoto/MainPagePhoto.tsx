import { memo } from 'react'
import pic1 from './mainphoto.png'

function MainPagePhoto() {
  return <img src={pic1} alt="" />
}

export default memo(MainPagePhoto)
