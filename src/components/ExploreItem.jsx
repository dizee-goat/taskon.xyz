import img from '../assets/image/explore/picture.png';
import chainImg from '../assets/image/explore/chain.png';

export default function ExploreItem(props) {

    return (
        <div className='campaign-item-view'>
            <img src={img} className='back-image' alt="" />

            <div className="z-20 p-[6px] flex flex-col">
                <div className="w-full relative">
                    <img src={img} className='rounded-xl' alt="" />
                    <div className="absolute w-[15%] right-[3.73%] bottom-[-20.9%]">
                        <img src={chainImg} alt="chain image" className='rounded-full' />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-y-[10px] p-[15px]">
                    <div className="row gap-x-[5px]">
                        <div>Nearity</div>
                    </div>
                    <div className="text-white text-[16px]">AMA | Nearity x Orderly...</div>
                    <div className="row gap-x-[10px]">
                        <div className="happycenter bg-[#cbff01] w-[100px] h-[40px] rounded-md text-black">50 USDC</div>
                        <div className="happycenter border border-[#00ffa3] w-[100px] h-[40px] rounded-md text-[#00ffa3]">10 EXP</div>
                    </div>
                </div>


            </div>
        </div>
    );
}