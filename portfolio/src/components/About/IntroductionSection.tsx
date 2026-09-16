import Image from "next/image";

const HOBBIES = [
   "Playing Games 🎮",
   "Training 🏋️‍♂️",
   "Traveling and Exploring New Places 🌍",
];

function IntroductionSection() {
   return (
      <div className="mx-auto flex w-4/5 max-w-3xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12">
         <div className="w-full max-w-md text-text-primary">
            <p className="text-lg leading-relaxed">
               Hi everyone! I’m <span className="font-semibold text-blue-primary">Ryan HERCULE</span> from Paris, France.<br />
               I’m a passionate and curious developer who loves turning ideas into functional applications.
            </p>

            <p className="mt-6 mb-3 text-lg leading-relaxed">Outside of coding, I love engaging in activities that help me refresh my mind and keep growing personally:</p>
            <ul className="flex flex-wrap gap-2">
               {HOBBIES.map((hobby) => (
                  <li
                     key={hobby}
                     className="rounded-full border border-border-primary px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 hover:scale-105 hover:border-transparent hover:bg-blue-secondary hover:text-blue-primary"
                  >
                     {hobby}
                  </li>
               ))}
            </ul>
         </div>
         <div className="overflow-hidden rounded-3xl border border-border-primary shadow-sm">
            <Image
               src="/about.jpg"
               alt="about image"
               width={300}
               height={300}
            />
         </div>
      </div>
   );
}

export default IntroductionSection;