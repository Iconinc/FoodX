import Image from "next/image";

export default function Home() {
  return (
    <section className={'w-screen h-screen bg-slate-200 p-3 lg:p-4 gap-3 lg:gap-4 flex'}>
      <div className={'bg-slate-400 w-[35%] h-full rounded-2xl p-4'}>
        <h1>Page X</h1>
      </div>
      <div className={'bg-slate-400 w-[65%] h-full rounded-2xl p-4'}>
        <h1>Page X</h1>
      </div>
    </section>
  );
}
