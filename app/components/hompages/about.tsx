'use client';

import { useLanguageStore } from "@/app/store/language";

export default function About() {
    const { language } = useLanguageStore();

    const dataList = [
        {
            id: 1,
            title_eng: 'Years of Experience',
            title_id: 'Pengalaman Bekerja',
            value: '10+',
        },
        {
            id: 2,
            title_eng: 'Projects Handled',
            title_id: 'Projek Terselesaikan',
            value: '10+',
        },
        {
            id: 3,
            title_eng: 'Happy Client',
            title_id: 'Klien',
            value: '100+',
        },
    ]

    return (
        <section className="bg-white dark:bg-black pt-12 md:pt-10">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                        <div className='rounded-full flex items-center justify-center h-7 py-4 border border-[#CED4DA] w-fit px-3 gap-2'>
                            {language === 'ENG' ?
                                <span className="ml-2 text-sm text-[#212529]">Who am I</span>
                                :
                                <span className="ml-2 text-sm text-[#212529]">Tentang Saya</span>
                            }
                            <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.75" y1="0.75" x2="31.25" y2="0.75" stroke="#495057" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#212529] dark:text-white leading-tight">
                            {language === 'ENG'
                                ? (<span>Get to Know<br />About Me</span>)
                                : (<span>Kenali Saya<br />Lebih Dekat</span>)}
                        </h1>
                    </div>

                    {/* Right Column - Image/Visual */}
                    <div className="md:justify-end">
                        <p className="text-lg md:text-xl text-[#495057] dark:text-gray-300 leading-relaxed text-justify">
                            {language === 'ENG'
                                ? "I'm a Programmer with a background in Business Development, focused on building digital products that balance clean technology with clear business goals. My work sits at the intersection of code and strategy—turning ideas into scalable, practical solutions that align with user needs, market realities, and long-term growth. I believe technology should do more than function well; it should create real impact, support decision-making, and help businesses move forward with confidence."
                                : 'Saya adalah seorang Programmer dengan latar belakang Business Development, berfokus pada pengembangan produk digital yang menyeimbangkan kualitas teknologi dengan tujuan bisnis yang jelas. Pekerjaan saya berada di antara pengembangan teknis dan strategi, yaitu mengubah ide menjadi solusi yang scalable, praktis, serta selaras dengan kebutuhan pengguna, dinamika pasar, dan pertumbuhan jangka panjang. Saya meyakini bahwa teknologi tidak hanya harus berfungsi dengan baik, tetapi juga mampu memberikan dampak nyata, mendukung pengambilan keputusan, dan membantu bisnis bergerak maju dengan percaya diri.'}
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-stretch mt-8">
                            {dataList.map((data) => (
                                <div
                                    key={data.id}
                                    className="border-2 border-[#212529] rounded-lg px-4 py-6 flex flex-col items-center justify-center text-center hover:bg-[#212529] hover:text-white transition-all duration-300 min-h-35"
                                    style={{ boxShadow: '4px 4px 0px #212529' }}
                                >
                                    <h4 className="text-3xl md:text-4xl font-bold mb-2">{data.value}</h4>
                                    <p className="text-sm md:text-base font-medium">
                                        {language === "ENG" ? data.title_eng : data.title_id}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}