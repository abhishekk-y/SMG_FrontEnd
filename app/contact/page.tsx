"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Get in Touch</h1>
                    <p className="text-gray-500">We'd love to hear from you. Our team is always here to chat.</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {[
                            { icon: Mail, title: "Chat to sales", desc: "Speak to our friendly team.", link: "mailto:sales@smgmotors.com", linkText: "sales@smgmotors.com" },
                            { icon: MapPin, title: "Visit us", desc: "Visit our office HQ.", link: "#", linkText: "100 Innovation Drive, Tech City" },
                            { icon: Phone, title: "Call us", desc: "Mon-Fri from 8am to 5pm.", link: "tel:+15550000000", linkText: "+1 (555) 000-0000" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF4D00] mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                                <a href={item.link} className="text-[#FF4D00] font-medium hover:underline">{item.linkText}</a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">First name</label>
                                        <Input placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Last name</label>
                                        <Input placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <Input type="email" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Phone number</label>
                                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Message</label>
                                    <Textarea placeholder="Tell us how we can help..." className="min-h-[150px]" />
                                </div>

                                <Button className="w-full bg-[#FF4D00] hover:bg-[#E04400] text-white h-12 text-lg rounded-xl">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
