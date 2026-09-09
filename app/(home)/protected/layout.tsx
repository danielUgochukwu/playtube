import { auth } from "@clerk/nextjs/server";


const layout = async ({ children }: { children: React.ReactNode }) => {
  await auth.protect();
  return <div>{children}</div>;
};

export default layout;
