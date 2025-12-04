import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h1>
                    <p className="text-gray-500">Everything you need to know about SMG Motors.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border border-gray-100 rounded-2xl px-6">
                        <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FF4D00] hover:no-underline py-6">
                            How long does the battery last?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-500 leading-relaxed pb-6">
                            Our batteries are designed to last for over 1,000 charge cycles, which typically translates to 5-7 years of daily use. We offer a standard 3-year warranty on all battery packs, extendable to 5 years.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-gray-100 rounded-2xl px-6">
                        <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FF4D00] hover:no-underline py-6">
                            Where can I charge my scooter?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-500 leading-relaxed pb-6">
                            You can charge your SMG scooter at any standard home outlet using the provided portable charger. Additionally, you have access to our growing network of SMG Fast Hubs located in major cities.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-gray-100 rounded-2xl px-6">
                        <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FF4D00] hover:no-underline py-6">
                            What is the top speed and range?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-500 leading-relaxed pb-6">
                            Performance varies by model. The SMG Sprint offers 80 km/h top speed and 120 km range. The SMG Blaze hits 100 km/h with 150 km range. Our flagship Volt Pro reaches 120 km/h and delivers an impressive 195 km range on a single charge.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-gray-100 rounded-2xl px-6">
                        <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FF4D00] hover:no-underline py-6">
                            Do I need a license to ride?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-500 leading-relaxed pb-6">
                            Yes, all our current models (Sprint, Blaze, Volt Pro) are classified as high-speed electric two-wheelers and require a valid driving license and registration to operate on public roads.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-gray-100 rounded-2xl px-6">
                        <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FF4D00] hover:no-underline py-6">
                            How do I book a test ride?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-500 leading-relaxed pb-6">
                            Booking a test ride is easy! Simply visit our "Dealer" page, locate your nearest showroom, and click "Book Test Ride". You can also walk into any of our experience centers.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
