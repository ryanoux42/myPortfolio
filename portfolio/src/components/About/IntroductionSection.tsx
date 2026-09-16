import Image from "next/image";

const HOBBIES = [
   "Playing Games 🎮",
   "Training 🏋️‍♂️",
   "Traveling and Exploring New Places 🌍",
];

function IntroductionSection() {
   return (
      <div className="mx-auto flex w-4/5 flex-col items-center gap-8 md:w-full md:flex-row md:items-center md:justify-center md:gap-12">
         <div className="w-full max-w-md text-text-primary md:w-4/10">
            <p className="text-lg leading-relaxed">
               Hi everyone! I’m Ryan HERCULE from Paris, France.<br />
               I’m a passionate and curious developer who loves turning ideas into functional applications.
            </p>

            <p className="mt-4 mb-2 text-lg leading-relaxed">Outside of coding, I love engaging in activities that help me refresh my mind and keep growing personally:</p>
            <ul className="ml-4 list-inside list-disc space-y-2 text-text-secondary">
               {HOBBIES.map((hobby) => (
                  <li
                     key={hobby}
                     className="gap-2"
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