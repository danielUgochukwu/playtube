import Image from "next/image";


const HomePage = () => {
  return <div>
I will load videos in the future, but for now, I will just show a placeholder image.
    <Image src="/images/placeholder.png" alt="Placeholder" width={800} height={600} />
  </div>
};

export default HomePage;
 