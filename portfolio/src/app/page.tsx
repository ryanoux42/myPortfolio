import ProfilePic from "@/components/Home/ProfilePic";
import ReachMeSection from "@/components/Home/ReachMeSection";

function Home() {
  return (
    <div className="flex justify-start space-x-36 items-center"> 
      <div className="space-y-4">
        <h1
          className={
            "text-[2.5rem] font-extrabold leading-tight text-slate-700 md:text-7xl md:leading-snug dark:text-slate-300"
          }
        >
          {"Hi, I'm Ryan HERCULE."}
        </h1>
        <p
          className={
            "mt-4 text-lg text-slate-600 md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px] dark:text-slate-400"
          }
        >
          {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 1500."}
        </p>
        <ReachMeSection />
      </div>
      <ProfilePic />
    </div>
  );
}

export default Home;
