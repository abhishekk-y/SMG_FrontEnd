import { Shield, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WarrantyPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#FF4D00]">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Warranty Policy</h1>
                    <p className="text-gray-500">Complete peace of mind with every ride.</p>
                </div>

                <div className="space-y-12">
                    {/* Coverage Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Covered</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    Battery Pack
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    3 Years or 40,000 km (whichever comes first). Covers manufacturing defects and capacity degradation below 70%.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    Motor & Controller
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    3 Years coverage on the electric motor and main controller unit against manufacturing defects.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    Frame & Chassis
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    5 Years coverage on the main frame structure against cracking or structural failure under normal use.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    Charger
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    1 Year warranty on the portable charger provided with the vehicle.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Exclusions Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Exclusions</h2>
                        <div className="bg-white border border-gray-200 rounded-2xl p-8">
                            <ul className="space-y-4">
                                {[
                                    "Normal wear and tear parts (tyres, brake pads, grips)",
                                    "Damage due to accidents, misuse, or stunts",
                                    "Water damage due to deep wading above recommended levels",
                                    "Unauthorized modifications or repairs",
                                    "Commercial use (unless specified in purchase agreement)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <AlertCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Need to claim warranty?</h3>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Visit your nearest service center with your vehicle and purchase invoice. Our team will inspect and process your claim.
                        </p>
                        <Button className="bg-[#FF4D00] hover:bg-[#E04400] text-white rounded-full px-8 h-12">
                            Find Service Center
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
