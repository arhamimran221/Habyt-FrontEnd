import Hero from '../components/Hero'
import Cards from '../components/Cards'
import HowItWorks from '../components/HowItWorks'
import HowWeDo from '../components/HowWeDo'
import WhyHabyt from '../components/Whyhabyt'
import Ready from '../components/Ready'
import End from '../components/End'


const Home = () => {
  return (
    <div className='habyt-container'>
      <Hero />
      <Cards />
      <HowItWorks />
      <WhyHabyt />
      <Ready />
      <HowWeDo />
      <End />
    </div>
  )
}

export default Home
