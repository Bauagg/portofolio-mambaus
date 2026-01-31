'use client';

import { useLanguageStore } from "@/app/store/language";

export default function Service() {
    const { language } = useLanguageStore();

    const service = [
        {
            id: 1,
            title: "Software Development",
            description_eng: "I develop web and system solutions with clean, maintainable code—focused on performance, scalability, and long-term usability, not just short-term delivery.",
            description_idn: "Saya membangun solusi web dan sistem yang andal dengan clean code dan scalable, dirancang untuk performa tinggi dan keberlanjutan jangka panjang.",
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.63994 11.7688L3.56244 16L8.63994 20.2313C8.74375 20.3144 8.82994 20.4173 8.89347 20.5342C8.95701 20.651 8.9966 20.7793 9.00995 20.9116C9.02329 21.0439 9.01012 21.1775 8.9712 21.3047C8.93228 21.4318 8.86839 21.5499 8.78327 21.6521C8.69815 21.7542 8.59352 21.8384 8.47548 21.8996C8.35745 21.9609 8.22839 21.9979 8.09585 22.0087C7.96332 22.0194 7.82997 22.0036 7.70361 21.9622C7.57725 21.9208 7.46041 21.8546 7.35994 21.7675L1.35994 16.7675C1.24736 16.6737 1.15678 16.5562 1.09462 16.4235C1.03246 16.2908 1.00024 16.146 1.00024 15.9994C1.00024 15.8528 1.03246 15.7081 1.09462 15.5753C1.15678 15.4426 1.24736 15.3251 1.35994 15.2313L7.35994 10.2313C7.56383 10.0615 7.82679 9.97975 8.09098 10.0039C8.35518 10.028 8.59896 10.1561 8.76869 10.36C8.93843 10.5639 9.02023 10.8269 8.99608 11.0911C8.97194 11.3553 8.84383 11.599 8.63994 11.7688ZM30.6399 15.2313L24.6399 10.2313C24.539 10.1472 24.4225 10.0839 24.297 10.0449C24.1716 10.0059 24.0397 9.99194 23.9089 10.0039C23.7781 10.0159 23.6509 10.0535 23.5346 10.1146C23.4183 10.1757 23.3152 10.2591 23.2312 10.36C23.0615 10.5639 22.9797 10.8269 23.0038 11.0911C23.028 11.3553 23.1561 11.599 23.3599 11.7688L28.4374 16L23.3599 20.2313C23.2561 20.3144 23.1699 20.4173 23.1064 20.5342C23.0429 20.651 23.0033 20.7793 22.9899 20.9116C22.9766 21.0439 22.9898 21.1775 23.0287 21.3047C23.0676 21.4318 23.1315 21.5499 23.2166 21.6521C23.3017 21.7542 23.4064 21.8384 23.5244 21.8996C23.6424 21.9609 23.7715 21.9979 23.904 22.0087C24.0366 22.0194 24.1699 22.0036 24.2963 21.9622C24.4226 21.9208 24.5395 21.8546 24.6399 21.7675L30.6399 16.7675C30.7525 16.6737 30.8431 16.5562 30.9053 16.4235C30.9674 16.2908 30.9996 16.146 30.9996 15.9994C30.9996 15.8528 30.9674 15.7081 30.9053 15.5753C30.8431 15.4426 30.7525 15.3251 30.6399 15.2313ZM20.3412 4.06003C20.2178 4.01522 20.0867 3.99515 19.9555 4.00099C19.8243 4.00682 19.6955 4.03844 19.5766 4.09404C19.4576 4.14964 19.3507 4.22813 19.2621 4.32503C19.1734 4.42193 19.1048 4.53534 19.0599 4.65878L11.0599 26.6588C11.0149 26.7823 10.9947 26.9135 11.0005 27.0448C11.0062 27.1761 11.0378 27.3051 11.0934 27.4242C11.149 27.5433 11.2276 27.6503 11.3246 27.739C11.4216 27.8277 11.5351 27.8965 11.6587 27.9413C11.7683 27.9802 11.8837 28.0001 11.9999 28C12.2053 28 12.4057 27.9368 12.5739 27.819C12.742 27.7011 12.8699 27.5343 12.9399 27.3413L20.9399 5.34128C20.9848 5.21784 21.0048 5.08678 20.999 4.95558C20.9932 4.82439 20.9615 4.69562 20.9059 4.57665C20.8503 4.45767 20.7718 4.35081 20.6749 4.26217C20.578 4.17353 20.4646 4.10484 20.3412 4.06003Z" fill="#F8F9FA" />
            </svg>,
        },
        {
            id: 2,
            title: "Business Development & Strategy",
            description_eng: "Beyond development, I help shape product direction, define priorities, and align technical decisions with business objectives, market needs, and growth opportunities.",
            description_idn: "Lebih dari sekadar pengembangan, saya membantu mengarahkan strategi produk dan memastikan setiap keputusan teknis mendukung tujuan bisnis & pertumbuhan.",
            icon: <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4H19V3C19 2.20435 18.6839 1.44129 18.1213 0.87868C17.5587 0.316071 16.7956 0 16 0H10C9.20435 0 8.44129 0.316071 7.87868 0.87868C7.31607 1.44129 7 2.20435 7 3V4H2C1.46957 4 0.960859 4.21071 0.585786 4.58579C0.210714 4.96086 0 5.46957 0 6V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H24C24.5304 24 25.0391 23.7893 25.4142 23.4142C25.7893 23.0391 26 22.5304 26 22V6C26 5.46957 25.7893 4.96086 25.4142 4.58579C25.0391 4.21071 24.5304 4 24 4ZM9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V4H9V3ZM24 6V11.2013C20.6247 13.0385 16.8429 14.0007 13 14C9.15725 14.0007 5.37553 13.0389 2 11.2025V6H24ZM24 22H2V13.455C5.42491 15.1302 9.18733 16.0007 13 16C16.8127 16.0001 20.5751 15.1292 24 13.4538V22ZM10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10H15C15.2652 10 15.5196 10.1054 15.7071 10.2929C15.8946 10.4804 16 10.7348 16 11C16 11.2652 15.8946 11.5196 15.7071 11.7071C15.5196 11.8946 15.2652 12 15 12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11Z" fill="#F8F9FA" />
            </svg>,
        },
        {
            id: 3,
            title: "Product & Technical Consulting",
            description_eng: "Whether you are starting from scratch or refining an existing product, I provide clear technical insights, feasibility analysis, and practical recommendations to move your product forward with confidence.",
            description_idn: "Dari ide awal hingga pengembangan lanjutan, saya membantu produk Anda berkembang dengan arah yang jelas dan terukur.",
            icon: <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 21C26 21.2652 25.8946 21.5196 25.7071 21.7071C25.5196 21.8946 25.2652 22 25 22H1C0.734784 22 0.48043 21.8946 0.292893 21.7071C0.105357 21.5196 0 21.2652 0 21V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0C1.26522 0 1.51957 0.105357 1.70711 0.292893C1.89464 0.48043 2 0.734784 2 1V14.5863L8.2925 8.2925C8.38537 8.19952 8.49566 8.12576 8.61706 8.07544C8.73846 8.02512 8.86858 7.99921 9 7.99921C9.13142 7.99921 9.26154 8.02512 9.38294 8.07544C9.50434 8.12576 9.61463 8.19952 9.7075 8.2925L13 11.5863L19.5863 5H17C16.7348 5 16.4804 4.89464 16.2929 4.70711C16.1054 4.51957 16 4.26522 16 4C16 3.73478 16.1054 3.48043 16.2929 3.29289C16.4804 3.10536 16.7348 3 17 3H22C22.2652 3 22.5196 3.10536 22.7071 3.29289C22.8946 3.48043 23 3.73478 23 4V9C23 9.26522 22.8946 9.51957 22.7071 9.70711C22.5196 9.89464 22.2652 10 22 10C21.7348 10 21.4804 9.89464 21.2929 9.70711C21.1054 9.51957 21 9.26522 21 9V6.41375L13.7075 13.7075C13.6146 13.8005 13.5043 13.8742 13.3829 13.9246C13.2615 13.9749 13.1314 14.0008 13 14.0008C12.8686 14.0008 12.7385 13.9749 12.6171 13.9246C12.4957 13.8742 12.3854 13.8005 12.2925 13.7075L9 10.4137L2 17.4137V20H25C25.2652 20 25.5196 20.1054 25.7071 20.2929C25.8946 20.4804 26 20.7348 26 21Z" fill="#F8F9FA" />
            </svg>
            ,
        }
    ]

    return (
        <section className="bg-white dark:bg-black pt-12 md:pt-10">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="flex justify-center">
                    <div className="rounded-full flex items-center justify-center h-7 py-4 border border-[#CED4DA] w-fit px-3 gap-2">
                        {language === 'ENG' ? (
                            <span className="text-sm text-[#212529]">Services Provided</span>
                        ) : (
                            <span className="text-sm text-[#212529]">Layanan yang Terbaik</span>
                        )}
                        <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.75" y1="0.75" x2="31.25" y2="0.75" stroke="#495057" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl text-center mt-5 lg:text-6xl font-bold text-[#212529] dark:text-white leading-tight">
                    {language === 'ENG'
                        ? "What I Can Help You Build" : "Apa yang Dapat Saya Bantu"}
                </h1>
                <p className="text-lg md:text-xl text-[#495057] dark:text-gray-300 leading-relaxed text-center mt-4 max-w-4xl mx-auto">
                    {language === 'ENG'
                        ? "I help individuals, startups, and teams build digital products that are technically solid, strategically aligned, and ready to grow."
                        : 'Saya membantu individu, startup, dan tim menciptakan produk digital yang andal secara teknis, terarah secara strategis, dan dirancang untuk pertumbuhan berkelanjutan.'}
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                    {service.map((item) => (
                        <div
                            key={item.id}
                            className="border-2 border-[#212529] rounded-lg p-6 hover:bg-[#212529] hover:text-white transition-all duration-300 group"
                            style={{ boxShadow: '4px 4px 0px #212529' }}
                        >
                            <div className="w-16 h-16 bg-[#212529] group-hover:bg-white rounded-lg flex items-center justify-center mb-4 transition-all duration-300">
                                <div className="[&>svg>path]:fill-white group-hover:[&>svg>path]:fill-[#212529] transition-all duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#212529] group-hover:text-white mb-3 transition-all duration-300">
                                {item.title}
                            </h3>
                            <p className="text-[#495057] group-hover:text-gray-200 leading-relaxed transition-all duration-300">
                                {language === 'ENG' ? item.description_eng : item.description_idn}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 