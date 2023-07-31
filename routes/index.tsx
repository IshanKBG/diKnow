import Search from "../islands/Search.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>diKnow</title>
        <meta name="description" content="Learn about dinosaurs" />
      </Head>
      <main class="flex flex-col items-center justify-start my-10 w-full">
        <h1 class="md:(text-5xl) text-4xl font-bold text-center">
          diKnow
        </h1>
        <p class="mt-1 text-lg text-center">
          Get started by searching for a dinosaur!
        </p>
        <img src="./walk.png" class="h-20" alt="walking dinos" />
        <Search />
          Made By Ishan Jaiswal, XIIS
      </main>
    </div>
  );
}
