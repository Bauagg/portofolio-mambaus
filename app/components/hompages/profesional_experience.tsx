'use client';

import { useLanguageStore } from "@/app/store/language";
import { useState } from "react";
import Image from 'next/image';
import ImageMBAFounder from '@/app/asets/images/mba-founder.jpeg';
import ImageEduwork from '@/app/asets/images/sertification-full-stack-developer-eduwork.jpeg';
import ImageDataAnalys from '@/app/asets/images/data-analisis.jpeg';
import ImageDevops from '@/app/asets/images/devops.jpeg';
import ImageCodingStudio from '@/app/asets/images/sertificate-full-stack-developer-coding-studio.jpeg';

export default function ProfesionalExperience() {
    const { language } = useLanguageStore();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const experiences = [
        {
            id: 1,
            company: "PT. Sarana Abadi Makmur Bersama Group",
            position_eng: "Full Stack Developer - Full Time",
            position_idn: "Full Stack Developer - Full Time",
            period_eng: "Nov 2024 - Now",
            period_idn: "Nov 2024 - Sekarang",
            link: "https://samb.co.id/",
            description_eng: "Architected and delivered a comprehensive ERP system that transformed distributor operations by unifying inventory, sales, finance, and logistics into one powerful platform. Built with microservices architecture using Golang and Echo, featuring real-time analytics dashboards with React.js and Material UI, and integrated RabbitMQ for seamless cross-module synchronization. The result? Streamlined operations, reduced manual errors, and accelerated data-driven decision-making across all departments—empowering teams to work smarter, not harder.",
            description_idn: "Merancang dan mengembangkan sistem ERP komprehensif yang mentransformasi operasional distributor dengan menyatukan inventori, penjualan, keuangan, dan logistik dalam satu platform powerful. Dibangun dengan arsitektur microservices menggunakan Golang dan Echo, dilengkapi dashboard analitik real-time dengan React.js dan Material UI, serta terintegrasi RabbitMQ untuk sinkronisasi antar-modul yang seamless. Hasilnya? Operasional yang lebih efisien, pengurangan error manual, dan percepatan pengambilan keputusan berbasis data di seluruh departemen—memberdayakan tim untuk bekerja lebih cerdas, bukan lebih keras."
        },
        {
            id: 2,
            company: "Tani Verse",
            position_eng: "Business Development - Freelance",
            position_idn: "Business Development - Freelance",
            period_eng: "Jan 2025 - Jan 2026",
            period_idn: "Jan 2025 - Jan 2026",
            link: "https://taniverse.id/",
            description_eng: "Spearheaded strategic initiatives to digitalize and transform the agriculture sector through data-driven innovation. Architected comprehensive business strategies focused on sustainability and long-term growth across the entire agricultural value chain, while leading cross-functional teams to achieve organizational synergy. Drove market research and strategic planning that maximized operational efficiency and profitability, introduced cutting-edge technology solutions to boost productivity, and championed industry transformation through resource optimization and environmental impact reduction—creating lasting social impact beyond profit.",
            description_idn: "Memimpin inisiatif strategis untuk mendigitalisasi dan mentransformasi sektor pertanian melalui inovasi berbasis data. Merancang strategi bisnis komprehensif yang berfokus pada keberlanjutan dan pertumbuhan jangka panjang di seluruh rantai nilai pertanian, sambil memimpin tim lintas divisi untuk mencapai sinergi organisasi. Mendorong riset pasar dan perencanaan strategis yang memaksimalkan efisiensi operasional dan profitabilitas, memperkenalkan solusi teknologi mutakhir untuk meningkatkan produktivitas, serta memperjuangkan transformasi industri melalui optimalisasi sumber daya dan pengurangan dampak lingkungan—menciptakan dampak sosial yang berkelanjutan di luar keuntungan semata."
        },
        {
            id: 3,
            company: "PT. Kreasindo Karya Abadi",
            position_eng: "Backend Developer - Full Time",
            position_idn: "Backend Developer - Full Time",
            period_eng: "Apr 2024 - Sep 2024",
            period_idn: "Apr 2024 - Sep 2024",
            link: "",
            description_eng: "Engineered high-performance backend systems powering critical business operations with an impressive 100% feature completion rate and 1-week average delivery cycle. Built and shipped 20+ scalable features monthly using Node.js and Golang, architecting robust APIs and managing data seamlessly across MongoDB and PostgreSQL with optimized database structures. Collaborated cross-functionally with design and marketing teams to align technical solutions with business promotion needs, ensuring data integrity through expertly implemented relational databases—delivering reliable infrastructure that drives business growth and exceptional user satisfaction.",
            description_idn: "Membangun sistem backend berkinerja tinggi yang mendukung operasional bisnis kritis dengan tingkat penyelesaian fitur 100% dan siklus pengiriman rata-rata 1 minggu. Mengembangkan dan meluncurkan 20+ fitur scalable per bulan menggunakan Node.js dan Golang, merancang API yang robust dan mengelola data secara seamless di MongoDB dan PostgreSQL dengan struktur database yang optimal. Berkolaborasi lintas fungsi dengan tim desain dan marketing untuk menyelaraskan solusi teknis dengan kebutuhan promosi bisnis, memastikan integritas data melalui implementasi database relasional yang ahli—menghadirkan infrastruktur andal yang mendorong pertumbuhan bisnis dan kepuasan pengguna yang luar biasa."
        },
        {
            id: 4,
            company: "ASMI Fragrance",
            position_eng: "Business Development & Full Stack Developer - Freelance",
            position_idn: "Business Development & Full Stack Developer - Freelance",
            period_eng: "Des 2025 - Now",
            period_idn: "Des 2025 - Sekarang",
            link: "https://www.asmifragrance.com/",
            description_eng: "Pioneered digital transformation for a local fragrance UMKM by architecting and developing a comprehensive e-commerce platform from the ground up. Spearheaded dual roles as Full Stack Developer and Business Development strategist—building a modern, user-centric website with seamless shopping experience while crafting growth strategies to expand market reach and brand visibility. Engineered the complete digital infrastructure using cutting-edge web technologies, implemented secure payment systems, and optimized the customer journey for maximum conversion. Simultaneously drove business development initiatives including market positioning, digital marketing strategy, and customer acquisition campaigns—transforming a traditional UMKM into a digitally-empowered brand ready to compete in the modern marketplace.",
            description_idn: "Mempelopori transformasi digital untuk UMKM parfum lokal dengan merancang dan mengembangkan platform e-commerce komprehensif dari awal. Memimpin peran ganda sebagai Full Stack Developer dan strategis Business Development—membangun website modern dan user-centric dengan pengalaman berbelanja yang seamless sambil merancang strategi pertumbuhan untuk memperluas jangkauan pasar dan visibilitas brand. Membangun infrastruktur digital lengkap menggunakan teknologi web terkini, mengimplementasikan sistem pembayaran yang aman, dan mengoptimalkan customer journey untuk konversi maksimal. Secara bersamaan mendorong inisiatif pengembangan bisnis termasuk positioning pasar, strategi digital marketing, dan kampanye akuisisi pelanggan—mentransformasi UMKM tradisional menjadi brand yang diberdayakan secara digital dan siap bersaing di pasar modern."
        }
    ];

    const Sertifikasi = [
        {
            id: 1,
            image: ImageMBAFounder,
        },
        {
            id: 2,
            image: ImageEduwork,
        },
        {
            id: 3,
            image: ImageDataAnalys,
        },
        {
            id: 4,
            image: ImageDevops,
        },
        {
            id: 5,
            image: ImageCodingStudio,
        },
    ]

    return (
        <section className="bg-white dark:bg-black pt-12 md:pt-10">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="flex justify-center">
                    <div className="rounded-full flex items-center justify-center h-7 py-4 border border-[#CED4DA] w-fit px-3 gap-2">
                        {language === 'ENG' ? (
                            <span className="text-sm text-[#212529]">Profesional Experience</span>
                        ) : (
                            <span className="text-sm text-[#212529]">Pengalaman Profesional</span>
                        )}
                        <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.75" y1="0.75" x2="31.25" y2="0.75" stroke="#495057" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl text-center mt-5 lg:text-6xl font-bold text-[#212529] dark:text-white leading-tight">
                    {language === 'ENG'
                        ? "What I've Worked On" : "Pengalaman yang Memberikan Nilai"}
                </h1>

                {/* Experience Accordion */}
                <div className="mt-12 mx-auto space-y-4">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="space-y-0">
                            {/* Header Card */}
                            <div
                                className="border-2 border-[#212529] rounded-lg overflow-hidden"
                                style={{ boxShadow: '4px 4px 0px #212529' }}
                            >
                                <div
                                    className="flex items-center gap-4 p-4 md:p-6 cursor-pointer hover:bg-gray-50 transition-all duration-300"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    {/* Number Badge */}
                                    <div className="w-12 h-12 bg-[#212529] text-white rounded flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        {index + 1}
                                    </div>

                                    {/* Company Info */}
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-bold text-[#212529]">
                                            {exp.company}
                                        </h3>
                                        <p className="text-sm md:text-base text-[#495057]">
                                            {language === 'ENG' ? exp.position_eng : exp.position_idn}
                                        </p>
                                        <p className="text-xs md:text-sm text-[#6C757D] mt-1">
                                            {language === 'ENG' ? exp.period_eng : exp.period_idn}
                                        </p>
                                    </div>

                                    {/* Toggle Icon */}
                                    <div className="flex-shrink-0 border-2" style={{ boxShadow: '2px 2px 0px #212529' }}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                        >
                                            <path
                                                d="M6 9L12 15L18 9"
                                                stroke="#212529"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Description Card - Separate */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[1000px] mt-4' : 'max-h-0'
                                    }`}
                            >
                                <div className="mx-2 md:mx-4 border-2 border-[#212529] rounded-lg p-4 md:p-6 mb-2 bg-white" style={{ boxShadow: '4px 4px 0px #212529' }}>
                                    <p className="text-[#495057] leading-relaxed text-sm md:text-base">
                                        {language === 'ENG' ? exp.description_eng : exp.description_idn}
                                    </p>

                                    {exp.link && (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#212529] text-white rounded-lg hover:bg-[#495057] transition-all duration-300 text-sm font-medium"
                                        >
                                            {language === 'ENG' ? 'Visit Website' : 'Kunjungi Website'}
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-40">
                    <div className="rounded-full flex items-center justify-center h-7 py-4 border border-[#CED4DA] w-fit px-3 gap-2">
                        {language === 'ENG' ? (
                            <span className="text-sm text-[#212529]">All of Certification</span>
                        ) : (
                            <span className="text-sm text-[#212529]">Sertifikasi yang Diperoleh</span>
                        )}
                        <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.75" y1="0.75" x2="31.25" y2="0.75" stroke="#495057" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl text-center mt-5 lg:text-6xl font-bold text-[#212529] dark:text-white leading-tight">
                    {language === 'ENG'
                        ? "Professional Certifications" : "Setifikasi Profesional"}
                </h1>

                <p className="text-lg md:text-xl text-[#495057] dark:text-gray-300 leading-relaxed text-center mt-4 max-w-4xl mx-auto">
                    {language === 'ENG'
                        ? "My certifications reflect a commitment to continuous learning and staying relevant in both technology and business."
                        : 'Sertifikasi ini menjadi bukti komitmen saya untuk terus belajar dan berkembang agar tetap relevan di dunia teknologi dan bisnis yang terus berubah.'}
                </p>

                {/* Certification Images - Desktop Grid, Mobile/Tablet Horizontal Scroll */}
                <div className="mt-12">
                    {/* Mobile & Tablet: Horizontal Scroll - Hide Scrollbar */}
                    <div className="lg:hidden">
                        <div
                            className="overflow-x-auto pb-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style jsx>{`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            <div className="flex gap-4 min-w-max px-2">
                                {Sertifikasi.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className="border-2 border-[#212529] rounded-lg overflow-hidden w-[280px] md:w-[350px] flex-shrink-0"
                                        style={{ boxShadow: '4px 4px 0px #212529' }}
                                    >
                                        <Image
                                            src={cert.image}
                                            alt={`Certification ${cert.id}`}
                                            className="w-full h-auto object-cover"
                                            quality={100}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Flex Layout with Center Alignment for Last Row */}
                    <div className="hidden lg:flex lg:flex-wrap lg:justify-center gap-6">
                        {Sertifikasi.map((cert) => (
                            <div
                                key={cert.id}
                                className="border-2 border-[#212529] rounded-lg overflow-hidden w-full lg:w-[calc(33.333%-1rem)]"
                                style={{ boxShadow: '4px 4px 0px #212529' }}
                            >
                                <Image
                                    src={cert.image}
                                    alt={`Certification ${cert.id}`}
                                    className="w-full h-auto object-cover"
                                    quality={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}