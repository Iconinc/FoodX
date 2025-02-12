import Image from "next/image";
import {ShoppingBag} from "lucide-react"


export default function ProductCard() {
    return (
        <div className={'w-full bg-red-300 h-[280px] md:h-[320px] lg:h-[482px] rounded-[27px] overflow-hidden relative shadow group'}>
            <Image src={'/asset/GrilledMeat.jpg'} alt={'Grilled Meat'} width={520} height={320}
                   className={'left-0 top-0 h-full w-full object-cover relative z-10 duration-1000 group-hover:scale-[1.1]'}/>
            <div className={'w-full absolute z-20 left-0 bottom-0 p-1'}>
                <div className={'bg-gradient-to-r from-slate-100/90 via-green-200/60 to-white/80 backdrop-blur-sm p-3 lg:p-4 rounded-[25px] flex-between !items-end'}>
                    <div className={'flex-start flex-col gap-1'}>
                        <h1 className={'text-sm font-medium'}>Italian Pizza </h1>
                        <p className={'uppercase text-slate-700 text-sm font-bold'}>56 <span className={'text-slate-800'}>rwf</span></p>
                    </div>
                    <div className={'bg-black text-white rounded-2xl p-2 duration-500 cursor-pointer hover:scale-125'}>
                        <ShoppingBag size={16}/>
                    </div>
                </div>
            </div>
        </div>
    );
}