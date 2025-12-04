import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-black text-gray-100 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
                <p className="text-gray-500 mb-8">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Button asChild className="bg-[#FF4D00] hover:bg-[#E04400] rounded-full px-8 h-12">
                    <Link href="/">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    )
}
