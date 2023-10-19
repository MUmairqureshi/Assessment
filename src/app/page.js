import Image from 'next/image'
import Gallery from './components/Gallery/index'
import Latestbulliten from './components/latest-bullitan/index'
import Hero from './components/hero/index'
import Catigory from './components/catigory/index'
import Event from './components/event/index'
import Bibleverses from './components/bibleverses'
import Ministeries from './components/ministeries'
import Footer from './components/footer/index'
export default function Home() {
  return (
<div><Hero/>
<Catigory/>
<Event/>
<Latestbulliten/>
<Gallery/>
<Bibleverses/>
<Ministeries/>
<Footer/>
</div>

  )
}
