import React, { useEffect, useMemo, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

import mainLogo from '../assets/image/main-logo.svg';
import metamaskLogo from '../assets/image/metamask.svg';
import discordLogo from '../assets/image/discord.svg';
import twitterLogo from '../assets/image/twitter.svg';
import bitKeepLogo from '../assets/image/bitkeep.svg';
import ontoLogo from '../assets/image/onto.svg';
import phantomLogo from '../assets/image/phantom.svg';
import martianLogo from '../assets/image/martian.svg';
import petraLogo from '../assets/image/petra.svg';
import gameStopLogo from '../assets/image/game_stop.svg';
import suiLogo from '../assets/image/sui.svg';
import suietLogo from '../assets/image/suiet.svg';
import walletConnectLogo from '../assets/image/wallet_connect.svg';
import closeLogo from '../assets/image/xbutton.svg';

const App = React.createContext({});

export function useGenContext() {
    return React.useContext(App);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload,
    };
}

const INIT_STATE = {
    user: null,
    auth: false
};

const colorLists = {
    success: {
        color: '#00A843',
    },
    warning: {
        color: '#FCA004',
    },
    danger: {
        color: '#A80000',
    }
}

export default function Provider({ children }) {

    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);
    const [authModal, setAuthModal] = useState(true);

    const authModalShow = () => {
        setAuthModal(!authModal);
    }

    useEffect(() => {

        (async () => {

        })();

    }, [])

    return (
        <App.Provider
            value={React.useMemo(
                () => [
                    state, { authModalShow }
                ],
                [
                    state,
                    dispatch,
                    authModalShow
                ]
            )}
        >
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            {
                authModal &&
                <div className="auth-modal-back">
                    <div className="relative w-full h-full happycenter p-[40px]">
                        <div className="auth-modal w-full sm:w-[450px] p-[40px] gap-y-[20px]">
                            <div className="flex flex-row gap-x-[11px] items-center">
                                <div className="w-[38px] h-[38px]">
                                    <img src={mainLogo} alt="main logo" />
                                </div>
                                <div className="text-white text-[22px]">Task On</div>
                            </div>
                            <div className="absolute right-[35px] cursor-pointer" onClick={()=>{setAuthModal(false)}}>
                                <img src={closeLogo} alt="close logo" />
                            </div>
                            <div styleName="">Please Select Sign-in Method</div>
                            <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                <div className="w-[25px]">
                                    <img src={metamaskLogo} alt="metamask logo" />
                                </div>
                                Metamask
                            </div>
                            <div className="flex flex-row gap-x-[15px] items-center">
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={twitterLogo} alt="twitter logo" />
                                    </div>
                                    Twitter
                                </div>
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={discordLogo} alt="discord logo" />
                                    </div>
                                    Discord
                                </div>
                            </div>

                            <div className="flex flex-row gap-x-[30px] items-center">
                                <div className="flex-1 h-[1px] bg-[#fffc]"></div>
                                <div>Or more options</div>
                                <div className="flex-1 h-[1px] bg-[#fffc]"></div>
                            </div>

                            <div className="flex flex-row gap-x-[15px] items-center">
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={bitKeepLogo} alt="bitkeep logo" />
                                    </div>
                                    BitKeep
                                </div>
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={ontoLogo} alt="onto logo" />
                                    </div>
                                    ONTO
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-[15px] items-center">
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={phantomLogo} alt="phantom logo" />
                                    </div>
                                    Phantom
                                </div>
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={martianLogo} alt="martian logo" />
                                    </div>
                                    Martian
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-[15px] items-center">
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={petraLogo} alt="petra logo" />
                                    </div>
                                    Petra Aptos
                                </div>
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={gameStopLogo} alt="gamestop logo" />
                                    </div>
                                    GameStop
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-[15px] items-center">
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={suiLogo} alt="sui logo" />
                                    </div>
                                    Sui Wallet
                                </div>
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={suietLogo} alt="suiet logo" />
                                    </div>
                                    Suiet
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-[15px] items-center">
                                <div className="cursor-pointer happycenter border border-[#ffffff33] h-[50px] rounded-lg text-white gap-x-[10px] w-full hover:bg-[#1d2123]">
                                    <div className="w-[25px]">
                                        <img src={walletConnectLogo} alt="walletconnect logo" />
                                    </div>
                                    WalletConnect
                                </div>
                                <div className="w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                children
            }
        </App.Provider>
    )
}