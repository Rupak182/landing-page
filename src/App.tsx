import Blogs from "./components/Blogs"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Impact from "./components/Impact"
import Inpact from './components/Impact'
export default function App() {
  return (
    <div className="flex flex-col gap-3 bg-[#f4f6f9] !scroll-smooth ">
        <div className="c1 min-h-screen">
        <Header/>
        <Hero/>
        </div>
      <Impact/>
      <Blogs/>

      <Features/>
      <Footer/>
    </div>
  )
}


