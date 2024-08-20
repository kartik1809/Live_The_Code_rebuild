'use client';
import React, { useState, useEffect } from 'react';
import { TypewriterEffectSmoothDemo } from './TypeWriterEffect';
import { SparklesCore } from './ui/sparkles';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { LinkPreview } from './ui/link-preview';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "./ui/animated-modal";
import {
    IconExternalLink,
} from "@tabler/icons-react";

const HeroSection = () => {
    const targetDate = new Date('2024-09-12T23:59:59');

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='hero mt-16 sm:mt-32 text-white flex flex-col-reverse h-[100vh] lg:items-center lg:flex-row  lg:mt-[20px] lg:w-full lg:pl-32'>
            <div className='h-[50%] lg:justify-center lg:w-[50%] flex gap-1 flex-col lg:items-start items-center'>
                <h4 className=' text-2xl sm:text-3xl lg:text-4xl uppercase'>
                    <span className='text-[#059d58] font-semibold'>GFG</span> ADGIPS Chapter
                </h4>
                <p>PRESENTS</p>
                <h1 className='text-5xl font-semibold'>
                    <TypewriterEffectSmoothDemo />
                </h1>
                <p className='mt-[-10px]  text-sm text-gray-300 text-center lg:text-start px-6 lg:px-0'>
                    The 3rd iteration of GFG ADGIPS, LIVE THE CODE 3.0 welcomes you!
                </p>
                <LinkPreview url="https://devfolio.co/home/" className="font-bold">
                    <a className="mt-5 inline-block cursor-pointer bg-orange-600 hover:bg-white text-white   font-semibold rounded-md transition duration-300 ease-in-out" href='https://live-the-code-3.devfolio.co/'>
                    <Modal>
                    <ModalTrigger className=" px-12 py-3 text-white  flex justify-center group/modal-btn">
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                            Register Now!
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <IconExternalLink className="h-[80%] w-[80%] text-black dark:text-neutral-300" />
                        </div>
                    </ModalTrigger>
                </Modal>
                    </a>
                </LinkPreview>
                
            </div>
            <div className='h-[50%] lg:w-[50%] flex items-center justify-center' style={{ backgroundImage: 'url(/hero_banner.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
                    ? <span>Time&apos;s up!</span>
                    : (
                        <div className='mt-[-40px]'>
                            <div className="flex justify-center items-center gap-2">
                                <div className="text-center flex flex-col">
                                    <div className="text-4xl lg:text-5xl 3xl:text-6xl ">{timeLeft.days.toString().padStart(2, '0')}</div>
                                </div>
                                <div className="text-3xl font-bold">:</div>
                                <div className="text-center flex flex-col">
                                    <div className="text-4xl lg:text-5xl 3xl:text-6xl ">{timeLeft.hours.toString().padStart(2, '0')}</div>
                                </div>
                                <div className="text-3xl font-bold">:</div>
                                <div className="text-center flex flex-col">
                                    <div className="text-4xl lg:text-5xl 3xl:text-6xl">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                                </div>
                                <div className="text-3xl font-bold">:</div>
                                <div className="text-center flex flex-col">
                                    <div className="text-4xl lg:text-5xl 3xl:text-6xl">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <div className="text-center flex flex-col">
                                    <div className="text-sm lg:text-lg 3xl:text-xl  text-gray-500">Days</div>
                                </div>
                                <div className="text-3xl font-bold ">&nbsp;</div>
                                <div className="text-center flex flex-col">
                                    <div className="text-sm lg:text-lg 3xl:text-xl  text-gray-500">Hours</div>
                                </div>
                                <div className="text-3xl font-bold">&nbsp;</div>
                                <div className="text-center flex flex-col">
                                    <div className="text-sm lg:text-lg 3xl:text-xl  text-gray-500">Minutes</div>
                                </div>
                                <div className="text-3xl font-bold">&nbsp;</div>
                                <div className="text-center flex flex-col">
                                    <div className="text-sm lg:text-lg 3xl:text-xl  text-gray-500">Seconds</div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default HeroSection;
