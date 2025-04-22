import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTA(){
    return(
        <section className="py-16 lg:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                            Ready to Save <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Hours</span> of Reading Time?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Transform lengthy documents into clear, actionable insights with our AI-powered summarizer
                        </p>
                    </div>
                    <div>
                        <Button 
                            size="lg" 
                            className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-sm hover:shadow transition-all duration-300"
                        >
                            <Link href="/#pricing" className="flex items-center gap-2">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}