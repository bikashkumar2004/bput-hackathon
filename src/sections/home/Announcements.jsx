import React, { useRef, useEffect, useState } from 'react';
import { Trophy, Users, Calendar, FileText, Map, Home, Award, Megaphone, Sparkles } from 'lucide-react';

// Dynamic color gradients for buttons
const gradientClasses = [
    'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
    'bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600',
    'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600',
    'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600',
    'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
    'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
    'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    'bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600',
    'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
    'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600',
    'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600',
    'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600'
];

const hackathonItems = [
    { name: 'Final Result of Hackathon', href: '#', icon: Trophy },
    { name: 'Hackathon Day Schedule 4th & 5th Jan 2025', href: '#', icon: Calendar },
    { name: 'Instruction For Participants', href: '#', icon: FileText },
    { name: 'BPUT Map For Hackathon 2025', href: '#', icon: Map },
    { name: 'Accommodation Arrangements', href: '#', icon: Home },
    { name: 'BPUT Hackathon Inauguration Ceremony Agenda', href: '#', icon: Megaphone }
];

const notices = [
    { date: "01-01-2025", text: 'Final round date announced - Check your emails for detailed schedule', isNew: true },
    { date: "02-01-2025", text: 'Mentorship session this Saturday at 2 PM - Join the Discord channel', isNew: false },
    { date: "03-01-2025", text: 'Join our official Discord channel for real-time updates and networking', isNew: true },
    { date: "04-01-2025", text: 'Submission portal opens soon - Prepare your project documentation', isNew: false },
    { date: "05-01-2025", text: 'Venue details updated - New parking arrangements available', isNew: true },
    { date: "06-01-2025", text: 'Team formation deadline extended by 2 days', isNew: true },
    { date: "07-01-2025", text: 'Workshop on AI/ML tools scheduled for tomorrow', isNew: false },
    { date: "08-01-2025", text: 'Lunch arrangements confirmed for both hackathon days', isNew: false },
    { date: "09-01-2025", text: 'Prize distribution ceremony details announced', isNew: true },
    { date: "10-01-2025", text: 'Technical support team contact information shared', isNew: false }
];

// Shuffle function to randomize colors
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const MacBookWindow = ({ title, children, className = "" }) => {
    return (
        <div className={`bg-gray-900 rounded-xl shadow-2xl h-fit ${className}`}>
            {/* MacBook Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 rounded-t-xl border-b border-gray-700">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <div className="text-gray-300 text-sm font-medium">{title}</div>
                <div className="w-16"></div>
            </div>

            {/* Window Content */}
            <div className="bg-white rounded-b-xl">
                {children}
            </div>
        </div>
    );
};

const NoticeBoard = () => {

    const formatDayMonth = (dateString) => {
        const [day, month, _] = dateString.split('-');
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        return `${day}\n${monthNames[parseInt(month) - 1]}`;
    };

    const formatYear = (dateString) => {
        const [_, __, year] = dateString.split('-');
        return year;
    };


    return (
        <div

            className="relative h-fit bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 overflow-hidden"
        >
            {/* Decorative Header */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500 z-20"></div>



            {/* Notice Content Container */}
            <div
                className="pt-4 px-6 h-full overflow-hidden relative scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div
                    className="space-y-2 py-8"
                >
                    {/* Render notices only once */}
                    {notices?.slice(0, 5)?.map((notice, i) => (
                        <div key={i} className="group bg-white rounded-lg px-3 shadow-sm border border-purple-100 hover:shadow-md hover:border-purple-300 transition-all duration-300">
                            <div className="flex items-start gap-3 p-1">
                                <div className="px-2 py-1 rounded-xl mt-2 flex-shrink-0 bg-green-500 text-white text-center leading-tight shadow-sm font-semibold">
                                    <div className="text-sm">{formatDayMonth(notice?.date)}</div>
                                    {/* <div className="text-xs opacity-90">{formatYear(notice?.date)}</div> */}
                                </div>

                                <div className="flex items-center">
                                    <a href='#' className="text-gray-800 text-sm leading-relaxed hover:text-purple-600 transition-colors">
                                        {notice.text}
                                    </a>
                                    <div className="flex items-center gap-2 ml-3">
                                        {notice?.isNew && (
                                            <span className="text-xs bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-0.5 rounded-full font-semibold">
                                                NEW
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mb-2 flex justify-end items-center">
                        <a
                            href="/notices"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-1 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-purple-200"
                        >
                            View All {">"}
                        </a>
                    </div>
                </div>
            </div>

            {/* Gradient Masks for smooth fade effect */}
            <div className="absolute top-2 left-0 right-0 h-12 bg-gradient-to-b from-purple-50 via-purple-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-pink-50 via-pink-50 to-transparent pointer-events-none z-10"></div>
        </div>
    );
};

const Announcements = () => {
    // Randomize colors for each render
    const randomizedColors = React.useMemo(() => shuffleArray(gradientClasses), []);

    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Quick Access MacBook Window */}
                    <MacBookWindow title="Quick Access" className="transform hover:scale-[1.02] transition-transform duration-300 col-span-1 md:col-span-2">
                        <div className="p-8">
                            {/* Dynamic Grid Layout */}
                            <div className="flex flex-wrap gap-3">
                                {hackathonItems?.map((item, i) => {
                                    const IconComponent = item.icon;
                                    const randomColor = randomizedColors[i % randomizedColors.length];

                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={`group inline-flex items-center gap-2 px-4 py-3 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${randomColor} max-w-fit`}
                                            style={{
                                                minWidth: 'fit-content',
                                                maxWidth: '100%'
                                            }}
                                        >
                                            <div className="flex-shrink-0">
                                                <IconComponent className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm leading-tight">{item.name}</span>
                                            <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </MacBookWindow>

                    {/* Notice Board MacBook Window */}
                    <MacBookWindow title="Latest Announcements" className="transform hover:scale-[1.02] transition-transform duration-300 col-span-1 md:col-span-3">
                        <div className="p-3 h-full">

                            {/* Enhanced Notice Board */}
                            <NoticeBoard />

                            {/* Live Indicator */}
                            <div className="flex items-center justify-center mt-4 gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-500 font-medium tracking-wider">LIVE UPDATES</span>
                            </div>
                        </div>
                    </MacBookWindow>
                </div>
            </div>
        </section>
    );
};

export default Announcements;