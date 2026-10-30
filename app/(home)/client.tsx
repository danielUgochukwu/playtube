"use client";

import { trpc } from "@/trpc/client";

const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({ text: "This from tRPC" });

  return <div>Page clien: {data.greeting}</div>;
};

export default PageClient;
