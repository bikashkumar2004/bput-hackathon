import { Users, Monitor, Trophy, Rocket } from 'lucide-react';




export const hackathonDate = "7th November, 2025";

export const navItems = [
    // { name: 'Home', href: '#home' },
    // { name: 'About', href: '#about' },
    { name: 'Problem Statements', href: '/problem-statements' },
    { name: 'Guidelines', href: '/guidelines' },
    { name: 'Event Format', href: '/event-format' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Prizes', href: '/prizes' },
    { name: 'Contact Us', href: '/contact-us' },
];


export const scheduleData = [
    {
        phase: 'Phase 1',
        title: 'Launch & Registration',
        icon: Rocket,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50',
        borderColor: 'border-blue-200',
        startDate: '2025-10-01',
        endDate: '2025-10-15',
        items: [
            'Notification Release: [TBA]',
            'Registration Portal: https://hackathon.bput.ac.in',
        ]
    },
    {
        phase: 'Phase 2',
        title: 'College-Level Screening',
        icon: Users,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50',
        borderColor: 'border-purple-200',
        startDate: '2025-10-16',
        endDate: '2025-10-30',
        items: [
            'Each college will conduct an internal screening of submissions',
            'Maximum of 3 teams per college will be forwarded to the university-level pool'
        ]
    },
    {
        phase: 'Phase 3',
        title: 'University-Led Mid-Level Evaluations (Virtual)',
        icon: Monitor,
        color: 'from-green-500 to-teal-500',
        bgColor: 'from-green-50 to-teal-50',
        borderColor: 'border-green-200',
        startDate: '2025-11-01',
        endDate: '2025-11-15',
        items: [
            'Round 1: Initial concept and problem understanding',
            'Round 2: Prototype development, progress validation, and mentor feedback',
            'Conducted online via video presentations and documentation'
        ]
    },
    {
        phase: 'Phase 4',
        title: 'Grand Finale at BPUT Campus',
        icon: Trophy,
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50',
        borderColor: 'border-orange-200',
        startDate: '2025-11-07',
        endDate: '2025-11-09',
        items: [

            'Location: BPUT Main Campus, Rourkela',
            'Duration: 36 to 48 hours of on-site development, mentorship, and judging',
            'Facilities provided for uninterrupted development'
        ]
    }
];