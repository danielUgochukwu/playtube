import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />; 
};

export default Page;
