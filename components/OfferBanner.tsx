


// import React from 'react';
// import Banner from '@/public/banner.jpg';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';

// const OfferBanner: React.FC = () => {
//     return (
//         <div className="w-full max-w-[2000px] mx-auto p-2 md:p-4 space-y-4">
//             {/* Main Banner */}
//             <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden group">
//                 <Image
//                     src={Banner}
//                     alt="Main promotional banner"
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     priority
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
//                     quality={90}
//                 />

//                 {/* Overlay Content */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
//                     <div className="relative h-full flex flex-col justify-center p-6 md:p-10 lg:p-16 text-white">
//                         <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 opacity-0 translate-y-8 animate-fade-slide-up">
//                             Special Offer
//                         </h2>
//                         <p className="max-w-md text-sm md:text-base lg:text-lg mb-6 opacity-0 translate-y-8 animate-fade-slide-up animation-delay-200">
//                             Discover amazing deals on our latest collection. Limited time offer.
//                         </p>
//                         <button className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-full w-fit 
//                             hover:bg-black hover:text-white transition-colors duration-300
//                             opacity-0 translate-y-8 animate-fade-slide-up animation-delay-400">
//                             <span>Shop Now</span>
//                             <ArrowRight className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Secondary Banners - Hidden on Mobile */}
//             <div className="hidden md:grid grid-cols-2 gap-4">
//                 {/* Left Banner */}
//                 <div className="relative aspect-[16/7] rounded-xl overflow-hidden group">
//                     <Image
//                         src={Banner}
//                         alt="Secondary promotional banner 1"
//                         fill
//                         className="object-cover transition-transform duration-700 group-hover:scale-105"
//                         sizes="50vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent 
//                         transition-opacity duration-300 group-hover:opacity-80">
//                         <div className="relative h-full flex flex-col justify-center p-6 text-white">
//                             <h3 className="text-xl md:text-2xl font-semibold mb-2">New Arrivals</h3>
//                             <p className="text-sm md:text-base mb-4">Check out our latest collection</p>
//                             <button className="flex items-center space-x-2 text-sm group/btn">
//                                 <span>Explore</span>
//                                 <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Banner */}
//                 <div className="relative aspect-[16/7] rounded-xl overflow-hidden group">
//                     <Image
//                         src={Banner}
//                         alt="Secondary promotional banner 2"
//                         fill
//                         className="object-cover transition-transform duration-700 group-hover:scale-105"
//                         sizes="50vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent 
//                         transition-opacity duration-300 group-hover:opacity-80">
//                         <div className="relative h-full flex flex-col justify-center p-6 text-white">
//                             <h3 className="text-xl md:text-2xl font-semibold mb-2">Special Deals</h3>
//                             <p className="text-sm md:text-base mb-4">Up to 50% off on selected items</p>
//                             <button className="flex items-center space-x-2 text-sm group/btn">
//                                 <span>Shop Now</span>
//                                 <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OfferBanner;




import React from 'react';
import Banner from '@/public/banner.jpg';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const OfferBanner: React.FC = () => {
    return (
        <div className="w-full max-w-[2000px] mx-auto p-4 space-y-6 bg-[#fafaff]">
            {/* Main Banner */}
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden group shadow-lg">
                <Image
                    src={Banner}
                    alt="Main promotional banner"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    quality={90}
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                    <div className="relative h-full flex flex-col justify-center p-6 md:p-10 lg:p-16 text-white">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 opacity-0 translate-y-8 animate-fade-slide-up">
                            Special Offer
                        </h2>
                        <p className="max-w-md text-sm md:text-base lg:text-lg mb-6 opacity-0 translate-y-8 animate-fade-slide-up animation-delay-200">
                            Discover amazing deals on our latest collection. Limited time offer.
                        </p>
                        <Button className="flex items-center space-x-2 bg-white text-[#2f3b69] px-6 py-2 rounded-full w-fit 
                            hover:bg-[#2f3b69] hover:text-white transition-colors duration-300
                            opacity-0 translate-y-8 animate-fade-slide-up animation-delay-400">
                            <span>Shop Now</span>
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Secondary Banners - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-2 gap-4">
                {/* Left Banner */}
                <div className="relative aspect-[16/7] rounded-xl overflow-hidden group shadow-md">
                    <Image
                        src={Banner}
                        alt="Secondary promotional banner 1"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent 
                        transition-opacity duration-300 group-hover:opacity-80">
                        <div className="relative h-full flex flex-col justify-center p-6 text-white">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">New Arrivals</h3>
                            <p className="text-sm md:text-base mb-4">Check out our latest collection</p>
                            <Button className="flex items-center space-x-2 text-sm group/btn">
                                <span>Explore</span>
                                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Banner */}
                <div className="relative aspect-[16/7] rounded-xl overflow-hidden group shadow-md">
                    <Image
                        src={Banner}
                        alt="Secondary promotional banner 2"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent 
                        transition-opacity duration-300 group-hover:opacity-80">
                        <div className="relative h-full flex flex-col justify-center p-6 text-white">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">Special Deals</h3>
                            <p className="text-sm md:text-base mb-4">Up to 50% off on selected items</p>
                            <Button className="flex items-center space-x-2 text-sm group/btn">
                                <span>Shop Now</span>
                                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition -transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferBanner;