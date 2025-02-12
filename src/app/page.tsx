import ProductCard from "@/components/ProductCard";

export default function Home() {
    return (
        <section
            className={'w-screen h-screen bg-fixed p-0 md:p-3 lg:p-4 gap-3 lg:gap-4 flex flex-col lg:flex-row'}>

            <div
                className={'background lg:fixed lg:h-[97vh] bg-no-repeat bg-cover w-full lg:w-[35%] h-full rounded-t-none md:rounded-[30px] md:border-2 border-white shadow shadow-slate-300'}>
                <div
                    className={'p-8 flex-between flex-col h-full bg-gradient-to-tr from-black/90 via-purple-600/50 to-black/50 rounded-t-none md:rounded-[28px] text-white'}>

                    {/*Head*/}
                    <div className={'flex-start flex-col gap-4'}>
                        <div className={'bg-white w-10 md:w-14 h-10 md:h-14 flex-center rounded-2xl border-2 border-slate-500'}>
                            <h1 className={'text-xs text-slate-500/90 uppercase font-black scale-75 -rotate-45'}>Logo</h1>
                        </div>
                        <div className={'flex-start flex-col gap-1'}>
                            <h3 className={'text-xl font-black text-white'}>Food X</h3>
                            <p className={'text-sm font-medium'}>Enjoy, Cosmo, Love it</p>
                        </div>
                    </div>

                    {/*Bottom*/}
                    <div className={'flex-start flex-col gap-4'}>
                        <h3 className={'mt-32 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200'}>
                            Inside<br/>
                            Health<br/>
                            Kitchen</h3>
                        <p className={'font-medium'}>Let's build Healthier community together.</p>
                    </div>

                </div>
            </div>

            <div className={'w-full lg:absolute right-0  lg:w-[65%] px-2 lg:px-6 pb-6 rounded-[30px]  grid grid-cols-2 md:grid-cols-3 gap-2'}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    );
}
