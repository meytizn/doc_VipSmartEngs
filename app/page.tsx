
import Image from "next/image";

export default function Home() {
  return (
    <div className={`   `}>
        

<Image
          className="dark:invert"
          src="/images/vedavski.jpg"   //it refers to public/
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

    </div>
  );
}
