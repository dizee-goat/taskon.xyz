import { useNavigate } from "react-router-dom";

import mainLogo from '../assets/image/main-logo.svg';
import questionLogo from '../assets/image/question.svg';
import notiLogo from '../assets/image/notification.svg';
import avatarLogo from '../assets/image/avatar.svg';

export default function Layout(props) {
    const { menuIdx, children } = props;
    const navigation = useNavigate();

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center px-[30px] xl:px-[70px] py-[20px]">
                <div className="flex flex-row items-center gap-x-[10px]">
                    <div className="happycenter gap-x-[7px] cursor-pointer mr-[15px]" onClick={() => navigation('/')}>
                        <div className="w-[30px]">
                            <img src={mainLogo} alt="main logo" />
                        </div>
                        <div className="text-[16px] text-white gradient">TaskOn</div>
                    </div>
                    <div onClick={()=>navigation('/explore')} className={`${menuIdx == 1 ? "text-white" : ""} bg-transparent hover:bg-[#ffffff1a] p-[12px] rounded-lg cursor-pointer`}>Campaign</div>
                    <div onClick={()=>navigation('/')} className={`${menuIdx == 2 ? "text-white" : ""} bg-transparent hover:bg-[#ffffff1a] p-[12px] rounded-lg cursor-pointer`}>Space</div>
                    <div onClick={()=>navigation('/campaign/create')} className={`${menuIdx == 3 ? "text-white" : ""} bg-transparent hover:bg-[#ffffff1a] p-[12px] rounded-lg cursor-pointer`}>Create</div>
                </div>
                <div className="row gap-x-[15px]">
                    <div className="w-[34px] h-[34px] bg-[#ffffff36] happycenter cursor-pointer rounded-full">
                        <div className="w-[10px]">
                            <img src={questionLogo} alt="question logo" />
                        </div>
                    </div>
                    <div className="w-[34px] h-[34px] bg-[#ffffff36] happycenter cursor-pointer rounded-full">
                        <div className="w-[16px]">
                            <img src={notiLogo} alt="noti logo" />
                        </div>
                    </div>
                    <div className="w-[34px] h-[34px] bg-[#ffffff36] happycenter cursor-pointer rounded-full">
                        <img src={avatarLogo} alt="avatar logo" />
                    </div>
                </div>
            </div>
            {
                children
            }
        </div>
    );
}