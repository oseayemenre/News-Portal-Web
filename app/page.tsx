import Hero from "@/components/hero";
import Latestnews from "@/components/latest-news";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <main>
      <div className={`bg-[#030710] relative`}>
        <Navbar />
        <div className='bg-red-200 w-[30%] h-[20%] rounded-[100%] absolute -top-[100px] left-[800px] blur-[300px] max-sm:left-[100px] max-sm:-top-[450px]' />
        <Hero />
        <div className='bg-blue-400 w-[30%] h-[20%] rounded-[100%] absolute top-[1200px] blur-[300px] -left-[200px]' />
        <Latestnews />
        <CTA />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
