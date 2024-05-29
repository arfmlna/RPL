import Image from "next/image";
import BKI from "../../public/next.svg"

export default function Home() {
  const row = []
  for (let i = 0; i < 12; i++) {
    row.push(
      <div key={i} className="bg-green-700">
        <div className="bg-green-300 px-2 py-3">title</div>
        <div className="px-2">
          <Image src={BKI} alt="book image" className="h-52" />
        </div>
        <div className="bg-green-50 px-2 py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quos?
        </div>
      </div>
    )
    
  }
  return (
    <main className="flex min-h-screen">
      <div className="w-full p-5 m-10 bg-cyan-100 mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          { row }
        </div>
      </div>
    </main>
  );
}
