import Layout from "../Layout";
import ReactQuill from "react-quill";
import calendarImg from '../../assets/image/campaign/calendar.svg';
import uploadImg from '../../assets/image/campaign/upload.svg';
import downImg from '../../assets/image/campaign/arrow.svg';

import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

export default function Create() {

    const [step, curStep] = useState(0);
    const [status, setStatus] = useState(false);

    return (
        <Layout menuIdx={3}>
            <div className="flex flex-row md:px-[120px] mt-[30px] gap-x-[30px]">
                <div className="hidden xl:block">
                    <div className="w-[320px] h-[85vh] flex flex-col gap-y-[30px] border-r border-r-[#ffffff0f]">
                        <h1 className="text-[32px] text-white">Create Campaign</h1>

                    </div>
                </div>
                <div className="hidden sm:block xl:hidden">
                    <div className="w-fit h-[85vh] flex flex-col gap-y-[30px] border-r border-r-[#ffffff0f]">
                        {/* <h1 className="text-[32px] text-white">Create Campaign</h1> */}

                    </div>
                </div>
                {
                    step == 0 &&
                    <div className="flex flex-col items-start gap-y-[25px] flex-1">
                        <div className="flex flex-col gap-y-[15px] w-full sm:w-[600px] px-[15px]">
                            <div className="text-white">Campaign Name</div>
                            <input type="text" className="border border-[#ffffff18] hover:border-[#ffffff39] focus:border-[#00ffa34d] h-[44px] rounded-lg px-[20px] text-white text-[14px] leading-[18px] placeholder:text-[#ffffff18] outline-none bg-[#252a2c]" placeholder="enter a campaign name" />
                        </div>
                        <div className="flex flex-col gap-y-[15px] w-full sm:w-[600px] px-[15px]">
                            <div className="text-white">Campaign Period</div>
                            <div className="grid grid-cols-2 gap-[20px]">
                                <div className="relative flex flex-row items-center w-full h-[50px] border rounded-md border-[#ffffff18] px-[15px] pl-[35px] bg-[#252a2c]">
                                    <div className="w-[15px] absolute left-[10px]">
                                        <img src={calendarImg} alt="calendar image" />
                                    </div>
                                    <input type="text" className="bg-transparent outline-none w-full h-full cursor-pointer" />
                                </div>
                                <div className="relative flex flex-row items-center w-full h-[50px] border rounded-md border-[#ffffff18] px-[15px] pl-[35px] bg-[#252a2c]">
                                    <div className="w-[15px] absolute left-[10px]">
                                        <img src={calendarImg} alt="calendar image" />
                                    </div>
                                    <input type="text" className="bg-transparent outline-none w-full h-full cursor-pointer" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col gap-y-[15px] w-full sm:w-[600px] px-[15px]">
                            <div className="flex flex-row justify-between">
                                <div className="text-white">Campaign Cover Image</div>
                                <div className="text-[#54aeff] underline cursor-pointer text-[13px]">Cover Image Example</div>
                            </div>
                            <div className="w-full h-[180px] border border-[#ffffff18] hover:border-[#ffffff39] bg-[#252a2c] rounded-lg cursor-pointer flex flex-col justify-center items-center">
                                <div className="w-[22px]">
                                    <img src={uploadImg} alt="upload image" />
                                </div>
                                <div className="max-w-[300px] mt-[10px]">
                                    {"JPG, PNG, SVG, WEBP, GIF. Max 10mb."}
                                </div>
                                <div className="">
                                    {"The size of the cover image: 1360px*680px"}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[15px] w-full sm:w-[600px] px-[15px]">
                            <div className="text-white">Campaign Description</div>
                            <ReactQuill theme="snow" className="happyquill" />
                        </div>
                        <div className="row px-[15px] gap-x-[15px] w-full sm:w-[600px]">
                            <div className="w-[150px] h-[45px] rounded-md bg-white text-black cursor-pointer happycenter">Save as Draft</div>
                            <div className="flex-1 h-[45px] rounded-md bg-gradient-to-r from-[#cbff01] to-[#00ffa3] happycenter text-black cursor-pointer">Next</div>
                        </div>
                    </div>
                }
                {
                    step == 1 &&
                    <div className="flex flex-col items-start gap-y-[25px] flex-1 px-[15px]">
                        <div className="flex flex-col gap-y-[15px] w-full sm:w-[600px] relative">
                            <div className="text-white">Reward Type</div>
                            <div onClick={()=>setStatus(!status)} className="cursor-pointer w-full h-[50px] relative bg-[#252a2c] border border-[#ffffff18] hover:border-[#ffffff39] focus:border-[#00ffa3] flex flex-row items-center px-[30px] rounded-md">
                                <div className="w-[10px] absolute right-[30px]">
                                    <img src={downImg} alt="down image" />
                                </div>
                                <div>Please select a reward type</div>

                            </div>
                            <div className={`absolute w-full flex flex-col bg-[#343a3d] rounded-lg border border-[#ffffff18] top-[90px] overflow-hidden ${status ? "block" : "hidden"}`}>
                                <div className="text-white px-[15px] py-[12px] cursor-pointer hover:bg-[#424a4d]">WhiteList</div>
                                <div className="text-white px-[15px] py-[12px] cursor-pointer hover:bg-[#424a4d]">NFT</div>
                                <div className="text-white px-[15px] py-[12px] cursor-pointer hover:bg-[#424a4d]">Token</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    );
}