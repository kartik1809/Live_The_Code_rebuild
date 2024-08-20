'use client';
import React, { useEffect, useRef } from 'react';
import './index.css';

const TimeLine = () => {
    const timelineRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = timelineRef.current.indexOf(entry.target);
                    console.log('Timeline Item:', index, 'is intersecting:', entry.isIntersecting);

                    if (index % 2 === 0) {
                        entry.target.classList.add('show-left');
                    } else {
                        entry.target.classList.add('show-right');
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        timelineRef.current.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="container">
            <h2 className='text-4xl md:text-7xl text-white text-center mb-12 font-semibold'>Timeline</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline">
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-300"></div>
                            <div className="timeline" ref={(el) => timelineRef.current[0] = el}>
                                <a href="#" className="timeline-content">
                                    <div className="timeline-year bg-blue-500 text-white rounded-full w-48 h-12 lg:w-[250px] flex items-center justify-center">10 August 2024</div>
                                    <h3 className="title text-xl font-semibold">Registration Begins</h3>
                                    <p className="description text-gray-600 lg:text-xl">
                                        Kickstart your journey! Register now to secure your spot and be part of an exhilarating hackathon adventure.
                                    </p>
                                </a>
                            </div>
                            <div className="timeline" ref={(el) => timelineRef.current[1] = el}>
                                <a href="#" className="timeline-content">
                                    <div className="timeline-year bg-blue-500 text-white rounded-full lg:w-[250px] w-48 h-12 flex items-center justify-center">04 September 2024</div>
                                    <h3 className="title text-xl font-semibold">Speaker Session</h3>
                                    <p className="description text-gray-600">
                                        Get inspired by industry leaders! Join our speaker session for insights and tips to enhance your hackathon experience.
                                    </p>
                                </a>
                            </div>
                            <div className="timeline" ref={(el) => timelineRef.current[2] = el}>
                                <a href="#" className="timeline-content">
                                    <div className="timeline-year bg-blue-500 text-white rounded-full lg:w-[250px] w-48 h-12 flex items-center justify-center">11 September 2024</div>
                                    <h3 className="title text-xl font-semibold">Orientation</h3>
                                    <p className="description text-gray-600">
                                        Prepare for the challenge ahead! Attend the orientation to understand the event details and meet fellow participants.
                                    </p>
                                </a>
                            </div>
                            <div className="timeline" ref={(el) => timelineRef.current[3] = el}>
                                <a href="#" className="timeline-content">
                                    <div className="timeline-year bg-blue-500 text-white rounded-full lg:w-[250px] w-48 h-12 flex items-center justify-center">13 September 2024</div>
                                    <h3 className="title text-xl font-semibold">24 Hour Coding Period</h3>
                                    <p className="description text-gray-600">
                                        Dive into the coding marathon! Collaborate, innovate, and create your project in a thrilling 24-hour coding session.
                                    </p>
                                </a>
                            </div>
                            <div className="timeline" ref={(el) => timelineRef.current[4] = el}>
                                <a href="#" className="timeline-content">
                                    <div className="timeline-year bg-blue-500 text-white rounded-full lg:w-[250px] w-48 h-12 flex items-center justify-center">17 September 2024</div>
                                    <h3 className="title text-xl font-semibold">Pitch</h3>
                                    <p className="description text-gray-600">
                                        Showcase your hard work! Present your project to the judges and make an impression with your innovative solutions.
                                    </p>
                                </a>
                            </div>
                            <div className="timeline" ref={(el) => timelineRef.current[5] = el}>
                                <a href="#" className="timeline-content">
                                    <div className="timeline-year bg-green-500 text-white rounded-full lg:w-[250px] w-48 h-12 flex items-center justify-center">19 September 2024</div>
                                    <h3 className="title text-xl font-semibold">Result Declaration</h3>
                                    <p className="description text-gray-600">
                                        The moment of truth! Celebrate achievements as we announce the winners and recognize outstanding contributions.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;
