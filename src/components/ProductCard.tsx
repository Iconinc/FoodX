import { ShoppingBag } from "lucide-react";
import Image from "next/image";

interface ProductProps {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
        category: string;
    };
}

export default function ProductCard({ product }: ProductProps) {
    return (
        <div className={'w-full bg-gradient-to-tr from-slate-200 to-slate-100 h-[280px] md:h-[320px] lg:h-[482px] rounded-[27px] overflow-hidden relative shadow group'}>
            <Image
                src={product.image}
                alt={product.name}
                width={520}
                height={320}
                className={'left-0 top-0 h-full w-full object-cover relative z-10 duration-1000 group-hover:scale-[1.1]'}
            />
            <div className={'w-full absolute z-20 left-0 bottom-0 p-1'}>
                <div className={'bg-gradient-to-r from-slate-100/90 via-green-200/60 to-white/80 backdrop-blur-sm p-3 lg:p-4 rounded-[25px] flex-between !items-end'}>
                    <div className={'flex-start flex-col gap-1'}>
                        <h1 className={'text-sm font-medium'}>{product.name}</h1>
                        <p className={'uppercase text-slate-700 text-sm font-bold'}>
                            {product.price} <span className={'text-slate-800'}>rwf</span>
                        </p>
                    </div>
                    <div className={'bg-black text-white rounded-2xl p-2 duration-500 cursor-pointer hover:scale-125'}>
                        <ShoppingBag size={16} />
                    </div>
                </div>
            </div>
        </div>
    );
}