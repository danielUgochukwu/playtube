import { HydrateClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import PageClient from "./client";
import { Suspense } from "react";


const HomePage = async () => {
  void trpc.hello.prefetch({ text: "Daniel Ugochukwu " });

  return <HydrateClient>
    
   <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <PageClient />
      </ErrorBoundary>
    </Suspense>
  </HydrateClient>;
};
 
export default HomePage;
