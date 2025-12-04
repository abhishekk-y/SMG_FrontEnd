import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Wrench, Clock, Phone } from "lucide-react"

export default function ServiceCentersPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Service Centers</h1>
                    <p className="text-gray-500">Expert care for your SMG scooter, wherever you are.</p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                            placeholder="Enter your city or pincode"
                            className="pl-12 h-14 rounded-full text-lg shadow-sm border-gray-200 focus:border-[#FF4D00] focus:ring-[#FF4D00]"
                        />
                        <Button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#FF4D00] hover:bg-[#E04400]">
                            Search
                        </Button>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">SMG Care - {i === 1 ? "Downtown" : i === 2 ? "Westside" : "North Point"}</h3>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                                        Open Now
                                    </span>
                                </div>
                                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                                    <Wrench className="w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-start gap-3 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 text-[#FF4D00] mt-0.5 shrink-0" />
                                    <span>123 Service Lane, Auto District,<br />City Name, 110001</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Phone className="w-4 h-4 text-[#FF4D00] shrink-0" />
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Clock className="w-4 h-4 text-[#FF4D00] shrink-0" />
                                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button variant="outline" className="flex-1 rounded-xl border-gray-200 hover:border-[#FF4D00] hover:text-[#FF4D00]">
                                    Call
                                </Button>
                                <Button className="flex-1 rounded-xl bg-gray-900 text-white hover:bg-[#FF4D00]">
                                    Book Service
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
