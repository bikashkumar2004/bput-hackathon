import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Globe, Github, Linkedin, Twitter, Terminal, Code, Database } from 'lucide-react';
import Heading from '../../components/typography/Heading';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="py-20 bg-white relative overflow-hidden">
            {/* Technical Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[Code, Terminal, Database].map((Icon, i) => (
                    <Icon
                        key={i}
                        className="absolute text-purple-200 animate-float-tech"
                        style={{
                            left: `${15 + (i * 25)}%`,
                            top: `${10 + (i * 20)}%`,
                            animationDelay: `${i * 2}s`,
                            animationDuration: '12s'
                        }}
                        size={20}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


                <div className="text-center mb-16">
                    <Heading text={'Contact Us'} />

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Have questions about the hackathon? Need technical support? We're here to help you succeed!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="relative group">
                            {/* Glowing border effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <div className="relative bg-white border border-purple-200 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                                {/* Terminal header for contact info */}
                                {/* <div className="flex justify-center mb-6">
                                    <div className="bg-gray-900 border border-purple-300 rounded-lg px-3 py-1 font-mono text-xs">
                                        <span className="text-green-400">info@hackfest:~$</span>
                                        <span className="text-white ml-2">./get_contact_details.sh</span>
                                    </div>
                                </div> */}


                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="relative group">
                                            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-all duration-300 group-hover:shadow-md">
                                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                    <item.icon className="text-white" size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-mono text-xs text-purple-600 uppercase tracking-wider mb-1">{item.label}</div>
                                                    <div className="text-gray-800 font-medium">{item.value}</div>
                                                    {item.subtext && (
                                                        <div className="text-gray-600 text-sm mt-1">{item.subtext}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="mt-8">
                                    <div className="text-gray-600 font-mono text-sm mb-4 text-center">// Follow us on social media</div>
                                    <div className="flex justify-center gap-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 p-3 rounded-lg hover:from-purple-200 hover:to-pink-200 hover:border-purple-300 hover:scale-110 transition-all duration-300 group"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <social.icon className="text-purple-600 group-hover:text-purple-700" size={20} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Quick Contact CTA */}
                <div className="mt-20 text-center">
                    <div className="relative group max-w-2xl mx-auto">
                        {/* Glowing border effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative bg-white rounded-2xl shadow-xl border border-purple-200 p-8">
                            {/* Terminal header for CTA */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-gray-900 border border-purple-300 rounded-lg px-3 py-1 font-mono text-xs">
                                    <span className="text-green-400">support@hackfest:~$</span>
                                    <span className="text-white ml-2">./quick_help.sh</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full shadow-lg">
                                    <Phone className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Immediate</span> Help?
                                </h3>
                            </div>

                            <p className="text-gray-600 mb-6 font-mono text-sm">
                // Our support team is available 24/7 during the hackathon
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="relative group text-white py-3 px-6 rounded-full bg-gradient-to-r from-green-600 to-blue-600 shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] font-semibold">
                                    <span className="flex items-center relative z-10">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Support
                                    </span>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 blur opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                </button>

                                <button className="bg-white/10 backdrop-blur-lg border border-purple-200 py-3 px-6 rounded-full text-gray-700 hover:bg-purple-50 hover:scale-105 hover:border-purple-400 transition-all font-semibold flex items-center justify-center">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Email Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'hackathon@bput.ac.in',
        subtext: 'We typically respond within 24 hours'
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 12345 67890',
        subtext: 'Available during business hours'
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'BPUT Main Campus',
        subtext: 'Rourkela, Odisha, India'
    },
    {
        icon: Globe,
        label: 'Website',
        value: 'hackathon.bput.ac.in',
        subtext: 'Official hackathon portal'
    }
];

const socialLinks = [
    {
        icon: Github,
        url: 'https://github.com/bput-hackathon',
        name: 'GitHub'
    },
    {
        icon: Linkedin,
        url: 'https://linkedin.com/company/bput',
        name: 'LinkedIn'
    },
    {
        icon: Twitter,
        url: 'https://twitter.com/bput_hackathon',
        name: 'Twitter'
    }
];

export default Contact;