import { useRouter } from "next/router";

export default function NotFoundPage(): JSX.Element {
  const router = useRouter();
  return (
    <div className="">
      <div className="container  w-screen h-screen overflow-hidden">
        <img
          src="/images/vectors/404-hero.svg"
          alt="404 hero"
          className="absolute left-0 bottom-0 w-3/4 sm:w-3/4 md:w-1/2 pointer-events-none"
        />
        <img
          src="/images/vectors/404-polygon.svg"
          alt="404 vector"
          className="absolute right-0 top-0 w-1/2 sm:w-1/3 pointer-events-none"
        />
        <div className="fixed right-8 sm:right-32 lg:right-96 top-40 md:top-56">
          <h3 className="text-2xl font-light text-white leading-loose pr-1 mb-2">
            Hey! You seem to be lost :(
          </h3>
          <h1 className="font-bold text-2xl md:text-1xl text-gray-200 leading-none">
            404. <br /> Not Found.
          </h1>
          <div className="mt-6">
            <button
              onClick={() => router.push("/")}
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Back To Home{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
