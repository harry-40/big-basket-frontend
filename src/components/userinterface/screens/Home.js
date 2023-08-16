import Header from "../usercomponents/Header"
import MainSlider from "../usercomponents/MainSlider"
import DealsSlider from "../usercomponents/DealsSlider"
import Spacer from "../usercomponents/Spacer"
import Trending from "../usercomponents/Trending"
import Footer from "../usercomponents/Footer"
import ExploreCategory from "../usercomponents/ExploreCategory"
import BestDeals from "../usercomponents/BestDeals"
import TrendingProducts from "../usercomponents/TrendingProducts"

export default function Home(props)
{ 
    return(<div>
    <div style={{width:'100%'}}>

    </div>
<Header/>
<div style={{display:'flex' ,justifyContent:'center',flexDirection:'column',margin:10}}>
<div style={{width:'100%'}}>
<MainSlider />

</div>
<Spacer/>
<div style={{width:'100%'}}>
<DealsSlider />

</div>
<Spacer/>
<div style={{width:'100%'}}>
    <Trending/> 
    </div>
<Spacer/>
<div style={{width:'100%'}}>
    <ExploreCategory/>
</div>

<Spacer/>
<div style={{width:'100%'}}>
    <BestDeals/>
</div>

<Spacer/>
<div style={{width:'100%'}}>
    <TrendingProducts/>
</div>


<div >
    <Footer/>
</div>

</div>

</div>)}