import PricingSection from "../sections/PricingSection"


const Plans = () => {
  return (
    <div className="max-sm:py-10 sm:pt-20">
      <PricingSection/>

      <p className="text-center text-gray-400 max-w-md text-sm my-14 mx-auto px-12">
        Create stunning images for just <span className="text-pink-400 font-medium">10 credits</span> and generate immersive videos for <span className="text-pink-400 font-medium"> 20 credits.</span>
      </p>
    </div>
  )
}

export default Plans