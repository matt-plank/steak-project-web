export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-5 p-5">
        <div className="h-8"></div>

        <img
          src="logo.jpg"
          alt="Logo"
          className="rounded-3xl overflow-hidden w-40"
        />

        <div className="flex flex-col gap-2">
          <h1 className="font-black text-gray-800 text-4xl text-center">
            The Steak Project
          </h1>

          <h2 className="font-bold text-gray-500 text-xl text-center">
            Steak Cooked Precisely
          </h2>
        </div>
      </div>
    </div>
  );
}
