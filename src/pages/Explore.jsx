import Layout from "./Layout";
import ExploreItem from "../components/ExploreItem";
import { useState } from "react";
import searchImg from '../assets/image/explore/magnifier.svg';
export default function Explore() {

    const [curTab, setCurTab] = useState(0);   // 0: ongoing, 1:upcoming 2:expired

    return (
        <Layout menuIdx={1}>

            <div className="flex flex-col px-[20px] md:px-[50px] 2xl:px-[120px] gap-y-[30px]">

                <div className="row justify-between">
                    <div className="row gap-x-[30px]">
                        <div onClick={() => setCurTab(0)} className={`${curTab == 0 ? "text-white border-b-2 border-b-[#67c23a]" : "text-[#ffffffb3]"} cursor-pointer py-[7px] px-[3px]`}>Ongoing</div>
                        <div onClick={() => setCurTab(1)} className={`${curTab == 1 ? "text-white border-b-2 border-b-[#67c23a]" : "text-[#ffffffb3]"} cursor-pointer py-[7px] px-[3px]`}>Upcoming</div>
                        <div onClick={() => setCurTab(2)} className={`${curTab == 2 ? "text-white border-b-2 border-b-[#67c23a]" : "text-[#ffffffb3]"} cursor-pointer py-[7px] px-[3px]`}>Expired</div>
                    </div>
                    <div className="flex flex-row items-center relative">
                        <input type="text" className="bg-[#ffffff0f] outline-none w-[280px] focus:w-[500px] transition-all h-[50px] border border-[#ffffff10] rounded-lg pl-[42px] pr-[24px] text-white placeholder:text-[#ffffff40]" placeholder="Search Campaign" />
                        <div className="absolute w-[20px] left-[15px]">
                            <img src={searchImg} alt="search image" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                    <ExploreItem />
                    <ExploreItem />
                    <ExploreItem />
                    <ExploreItem />
                </div>

            </div>

        </Layout>
    );
}