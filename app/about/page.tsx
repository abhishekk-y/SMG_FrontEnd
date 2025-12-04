"use client"

import Image from "next/image"
import { Zap, Shield, Users, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        Driving the <span className="text-[#FF4D00]">Future</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        SMG Motors is on a mission to revolutionize urban mobility with sustainable, high-performance electric vehicles designed for the modern world.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-gray-100 py-12"
                >
                    {[
                        { label: "Founded", value: "2020" },
                        { label: "Employees", value: "500+" },
                        { label: "Riders", value: "50k+" },
                        { label: "Countries", value: "12" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Mission Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1558981806-ec527fa84c3d?auto=format&fit=crop&q=80&w=800"
                            alt="Factory Floor"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            We believe that the future of transportation is electric, connected, and shared. Our scooters are not just vehicles; they are smart devices on wheels, integrated seamlessly into your digital life.
                        </p>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            From our state-of-the-art manufacturing facility to our global network of charging hubs, every aspect of SMG Motors is built with sustainability and quality in mind.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-orange-50 rounded-lg text-[#FF4D00]">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Innovation</h4>
                                    <p className="text-xs text-gray-500 mt-1">Pushing boundaries daily</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-orange-50 rounded-lg text-[#FF4D00]">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Safety</h4>
                                    <p className="text-xs text-gray-500 mt-1">Zero compromise</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
                    <p className="text-gray-500">Meet the minds behind the machine.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Sarah Chen", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
                        { name: "Marcus Rodriguez", role: "Head of Design", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
                        { name: "Aisha Patel", role: "Chief Engineer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                            <p className="text-[#FF4D00] font-medium text-sm">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

