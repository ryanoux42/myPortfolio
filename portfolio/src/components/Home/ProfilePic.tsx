import Image from "next/image";

function ProfilePic() {
   return (
      <Image
         src="/professional_pic.jpg"
         alt="My Professional Profile Picture"
         width={300}
         height={300}
         className="rounded-lg shadow-md"
      />
   );
}

export default ProfilePic;