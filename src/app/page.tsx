import HeroBanner from "@/components/home/HeroBanner/HeroBanner";
import HeroKeyPoints from "@/components/home/HeroKeyPoints/HeroKeyPoints";
import HeroTabs from "@/components/home/HeroTabs/HeroTabs";
import Platforms from "@/components/home/Platforms/Platforms";
import Testimonials from "@/components/home/Testimonials/Testimonials";


export default function Home() {
  return (
   <>
    <HeroBanner/>
    <HeroKeyPoints/>
    <HeroTabs/>
    <Testimonials/>
    <Platforms/>
   </>
  );
}
