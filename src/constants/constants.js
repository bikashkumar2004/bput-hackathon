import { Users, Monitor, Trophy, Rocket, Linkedin } from 'lucide-react';

import { Mail, Phone, MapPin, Globe, Youtube, Instagram } from 'lucide-react';



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


export const faqData = [
    {
        question: "Can teams be cross-departmental?",
        answer: "Yes, interdisciplinary collaboration is encouraged."
    },
    {
        question: "Will we get any certificate of participation?",
        answer: "Yes, all finalists will receive certificates. College-level participants may also receive digital certificates."
    },
    {
        question: "Are pre-developed projects allowed?",
        answer: "No. All ideas and prototypes must be developed during the hackathon window."
    },
    {
        question: "Is there any registration fee?",
        answer: "No. The hackathon is free for all eligible BPUT students."
    },
    {
        question: "Can we participate virtually in the final round?",
        answer: "No. The grand finale is an in-person event at BPUT campus."
    }
];


export const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'hackathon@bput.ac.in',
        subtext: '24h response time',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 12345 67890',
        subtext: 'Business hours',
        gradient: 'from-green-500 to-teal-500'
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'BPUT, Chhend',
        subtext: 'Rourkela, Odisha',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: Globe,
        label: 'Website',
        value: 'bput.ac.in',
        subtext: 'Official portal',
        gradient: 'from-orange-500 to-red-500'
    }
];

export const socialLinks = [
    {
        icon: Youtube,
        url: 'https://www.youtube.com/bputodisha',
        name: 'YouTube',
        gradient: 'from-red-500 to-red-600'
    },
    {
        icon: Instagram,
        url: '#',
        name: 'Instagram',
        gradient: 'from-pink-500 to-purple-600'
    },
    {
        icon: Linkedin,
        url: 'https://www.linkedin.com/school/biju-patnaik-university-of-technology-odisha/',
        name: 'LinkedIn',
        gradient: 'from-blue-400 to-blue-600'
    }
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