import Image from "next/image";

const HOBBIES = [
   "Playing Games 🎮",
   "Training 🏋️‍♂️",
   "Traveling and Exploring New Places 🌍",
];

function IntroductionSection() {
   return (
      <div className="flex flex-col md:flex-row items-center space-y-4">
         <div className="mx-auto w-4/5 md:w-4/10 text-text-primary">
            <p>
               Hi everyone! I’m Ryan HERCULE from Paris, France.<br />
               I’m a passionate and curious developer who loves turning ideas into functional applications.
            </p>

            <p className="mt-4 mb-2">Outside of coding, I love engaging in activities that help me refresh my mind and keep growing personally:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
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
         <div className="mx-auto md:-ml-8">
            <Image
               src="/about.png"
               alt="about image"
               width={300}
               height={300}
            />
         </div>
      </div>
   );
}

export default IntroductionSection;