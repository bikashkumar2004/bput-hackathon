import Heading from '../../components/typography/Heading';
import { contactInfo, socialLinks } from '../../constants/constants';


const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Terminal Header */}
                {/* <div className="flex justify-center mb-8">
                    <div className="bg-gray-900 border border-purple-300 rounded-lg px-4 py-2 font-mono text-sm shadow-lg">
                        <span className="text-green-400">contact@hackfest:~$</span>
                        <span className="text-white ml-2">cat contact_info.json</span>
                        <span className="animate-pulse text-purple-400 ml-1">|</span>
                    </div>
                </div> */}

                <div className="text-center mb-16">
                    <Heading text={"Reach Us"} />

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Have questions about the hackathon? Need technical support? We're here to help you succeed!
                    </p>
                </div>

                {/* Single Contact Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative group">
                        {/* Glowing border effect */}
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div> */}
                        <div className="relative bg-white border border-purple-200 rounded-2xl  transition-all duration-300 overflow-hidden">

                            <div className="p-8">
                                {/* Contact Information Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:border-purple-300 transition-colors group">
                                            <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <item.icon className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <div className="font-mono text-xs text-purple-600 uppercase tracking-wider mb-1">{item.label}</div>
                                                <div className="text-gray-800 font-bold text-lg">{item.value}</div>
                                                {item.subtext && (
                                                    <div className="text-gray-600 text-sm">{item.subtext}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                                    <div className="text-purple-600 font-mono text-sm">Social Links</div>
                                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                                </div>

                                {/* Social Media Links */}
                                <div className="flex justify-center gap-6 mb-8">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className="relative group"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className={`bg-gradient-to-r ${social.gradient} p-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
                                                <social.icon className="text-white" size={24} />
                                            </div>

                                        </a>
                                    ))}
                                </div>

                                {/* Emergency Contact */}
                                {/* <div className="text-center">
                                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
                                        <div className="flex items-center justify-center gap-3 mb-4">
                                            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full shadow-lg animate-pulse">
                                                <Phone className="text-white" size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">
                                                Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Urgent</span> Help?
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 mb-4 font-mono text-sm">
                      // 24/7 support during hackathon hours
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] font-semibold flex items-center justify-center">
                                                <Phone className="w-4 h-4 mr-2" />
                                                Emergency: +91 98765 43210
                                            </button>

                                            <button className="bg-white border border-red-200 py-2 px-6 rounded-full text-gray-700 hover:bg-red-50 hover:scale-105 hover:border-red-400 transition-all font-semibold flex items-center justify-center">
                                                <Mail className="w-4 h-4 mr-2" />
                                                Quick Email
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Contact;