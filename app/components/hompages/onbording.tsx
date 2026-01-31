'use client';

import { useLanguageStore } from '@/app/store/language';
import Image from 'next/image';
import ImageProfile from '@/app/asets/images/profile.svg';

export default function Onbording() {
    const { language } = useLanguageStore();

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv-ats-mambaus.pdf';
        link.download = 'CV-Mambaus-Solihin.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const dataList = [
        {
            id: 1,
            title: 'Fullstack Developer',
            value: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.3574 17.084L41.1055 4.33594L46.0557 9.28613L33.0557 22.2861H52V29.2861H32.999L45.3105 41.5977L40.3604 46.5479L28.3574 34.5449V52H21.3574V33.9844L9.28613 46.0557L4.33594 41.1055L16.1553 29.2861H0V22.2861H16.0986L3.59082 9.77832L8.54102 4.82812L21.3574 17.6445V0H28.3574V17.084Z" fill="#F8F9FA" />
            </svg>,
        },
        {
            id: 2,
            title: 'Business Development',
            value: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.3574 17.084L41.1055 4.33594L46.0557 9.28613L33.0557 22.2861H52V29.2861H32.999L45.3105 41.5977L40.3604 46.5479L28.3574 34.5449V52H21.3574V33.9844L9.28613 46.0557L4.33594 41.1055L16.1553 29.2861H0V22.2861H16.0986L3.59082 9.77832L8.54102 4.82812L21.3574 17.6445V0H28.3574V17.084Z" fill="#F8F9FA" />
            </svg>,
        },
        {
            id: 3,
            title: 'Project Management ',
            value: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.3574 17.084L41.1055 4.33594L46.0557 9.28613L33.0557 22.2861H52V29.2861H32.999L45.3105 41.5977L40.3604 46.5479L28.3574 34.5449V52H21.3574V33.9844L9.28613 46.0557L4.33594 41.1055L16.1553 29.2861H0V22.2861H16.0986L3.59082 9.77832L8.54102 4.82812L21.3574 17.6445V0H28.3574V17.084Z" fill="#F8F9FA" />
            </svg>,
        }
    ]

    return (
        <section className="min-h-screen bg-white dark:bg-black pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                        <div className='rounded-full flex items-center justify-center h-7 py-4 border border-[#CED4DA] w-fit px-3'>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3.5" cy="3.5" r="3.5" fill="#048C51" />
                            </svg>
                            {language === 'ENG' ?
                                <span className="ml-2 text-sm text-[#212529]">Available for Work</span>
                                :
                                <span className="ml-2 text-sm text-[#212529]">Terbuka untuk Bekerja</span>
                            }
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#212529] dark:text-white leading-tight">
                            {language === 'ENG'
                                ? 'Hello, I am Mambaus Solihin'
                                : 'Halo, Saya Mambaus Solihin'}
                        </h1>
                        <p className="text-lg md:text-xl text-[#495057] dark:text-gray-300 leading-relaxed">
                            {language === 'ENG'
                                ? 'Programmer & Business Development professional helping your business transform ideas into high-impact digital products.'
                                : 'Programmer & Business Development profesional yang membantu perusahaan Anda dalam mengubah ide menjadi produk digital berdampak tinggi.'}
                        </p>
                        <div className="flex flex-row gap-4 mt-4">
                            <button
                                onClick={handleDownloadCV}
                                className="px-8 py-3 bg-[#212529] border-white text-white font-medium border-2 rounde rounded flex justify-between items-center gap-3 cursor-pointer"
                                style={{ boxShadow: '4px 4px 0px #212529' }}>
                                {language === 'ENG' ? 'Download CV' : 'Unduh CV'}

                                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.2806 5.46938L11.0306 0.219375C10.9609 0.149749 10.8782 0.094539 10.7871 0.0568979C10.6961 0.0192569 10.5985 -7.72394e-05 10.5 2.31899e-07H1.5C1.10218 2.31899e-07 0.720644 0.158035 0.43934 0.43934C0.158035 0.720645 0 1.10218 0 1.5V18C0 18.3978 0.158035 18.7794 0.43934 19.0607C0.720644 19.342 1.10218 19.5 1.5 19.5H15C15.3978 19.5 15.7794 19.342 16.0607 19.0607C16.342 18.7794 16.5 18.3978 16.5 18V6C16.5001 5.90148 16.4807 5.80391 16.4431 5.71286C16.4055 5.62182 16.3503 5.53908 16.2806 5.46938ZM11.25 2.56031L13.9397 5.25H11.25V2.56031ZM15 18H1.5V1.5H9.75V6C9.75 6.19891 9.82902 6.38968 9.96967 6.53033C10.1103 6.67098 10.3011 6.75 10.5 6.75H15V18ZM11.0306 12.2194C11.1004 12.289 11.1557 12.3717 11.1934 12.4628C11.2312 12.5538 11.2506 12.6514 11.2506 12.75C11.2506 12.8486 11.2312 12.9462 11.1934 13.0372C11.1557 13.1283 11.1004 13.211 11.0306 13.2806L8.78063 15.5306C8.71097 15.6004 8.62825 15.6557 8.5372 15.6934C8.44616 15.7312 8.34856 15.7506 8.25 15.7506C8.15144 15.7506 8.05384 15.7312 7.96279 15.6934C7.87175 15.6557 7.78903 15.6004 7.71937 15.5306L5.46937 13.2806C5.32864 13.1399 5.24958 12.949 5.24958 12.75C5.24958 12.551 5.32864 12.3601 5.46937 12.2194C5.61011 12.0786 5.80098 11.9996 6 11.9996C6.19902 11.9996 6.38989 12.0786 6.53063 12.2194L7.5 13.1897V9C7.5 8.80109 7.57902 8.61032 7.71967 8.46967C7.86032 8.32902 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.32902 8.78033 8.46967C8.92098 8.61032 9 8.80109 9 9V13.1897L9.96937 12.2194C10.039 12.1496 10.1217 12.0943 10.2128 12.0566C10.3038 12.0188 10.4014 11.9994 10.5 11.9994C10.5986 11.9994 10.6962 12.0188 10.7872 12.0566C10.8783 12.0943 10.961 12.1496 11.0306 12.2194Z" fill="#F8F9FA" />
                                </svg>

                            </button>
                            <button className="px-8 py-3 bg-white border-[#212529] text-[#212529] font-medium border-2 rounde rounded flex justify-between items-center gap-3 cursor-pointer"
                                style={{ boxShadow: '4px 4px 0px #212529' }}>
                                {language === 'ENG' ? 'Get in Touch' : 'Hubungi Saya'}

                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.735 1.42007C18.7128 1.05438 18.5575 0.709462 18.2984 0.450401C18.0394 0.191339 17.6945 0.0360463 17.3288 0.0138229C16.1494 -0.0564896 13.1353 0.0513228 10.6341 2.55164L10.1888 3.00257H4.72033C4.52259 3.00146 4.3266 3.03967 4.14377 3.115C3.96093 3.19032 3.7949 3.30125 3.65533 3.44132L0.439701 6.65882C0.242496 6.85589 0.104115 7.10402 0.0400901 7.37537C-0.0239351 7.64671 -0.0110716 7.93053 0.0772373 8.19497C0.165546 8.45941 0.325805 8.69401 0.540029 8.87243C0.754253 9.05085 1.01396 9.16604 1.29001 9.20507L4.89658 9.70851L9.04126 13.8532L9.5447 17.4616C9.58342 17.7377 9.69858 17.9974 9.87717 18.2115C10.0558 18.4255 10.2907 18.5853 10.5553 18.6729C10.7095 18.7244 10.8709 18.7507 11.0335 18.7507C11.2302 18.7511 11.4252 18.7125 11.607 18.6372C11.7888 18.5619 11.9539 18.4513 12.0928 18.3119L15.3103 15.0963C15.4504 14.9567 15.5613 14.7907 15.6367 14.6079C15.712 14.425 15.7502 14.2291 15.7491 14.0313V8.56288L16.1963 8.1157C18.6975 5.61445 18.8053 2.60039 18.735 1.42007ZM4.72033 4.50257H8.68876L4.98283 8.20757L1.49908 7.72195L4.72033 4.50257ZM11.6963 3.61664C12.4169 2.89151 13.2841 2.32852 14.2397 1.96525C15.1953 1.60198 16.2174 1.4468 17.2378 1.51007C17.3035 2.53099 17.15 3.55415 16.7874 4.51079C16.4249 5.46743 15.8618 6.33538 15.136 7.05632L9.74908 12.4413L6.31033 9.00257L11.6963 3.61664ZM14.2491 14.0313L11.0306 17.2526L10.5441 13.7679L14.2491 10.0629V14.0313ZM7.29658 14.9219C6.8747 15.8463 5.46376 18.0026 1.49908 18.0026C1.30016 18.0026 1.1094 17.9236 0.968746 17.7829C0.828094 17.6423 0.749076 17.4515 0.749076 17.2526C0.749076 13.2879 2.90533 11.8769 3.8297 11.4541C3.91933 11.4133 4.01613 11.3904 4.11458 11.387C4.21302 11.3835 4.31119 11.3995 4.40346 11.4339C4.49574 11.4684 4.58033 11.5207 4.65239 11.5879C4.72445 11.6551 4.78258 11.7358 4.82345 11.8254C4.86433 11.915 4.88715 12.0118 4.89061 12.1103C4.89407 12.2087 4.87811 12.3069 4.84364 12.3991C4.80917 12.4914 4.75685 12.576 4.68969 12.6481C4.62253 12.7201 4.54183 12.7783 4.4522 12.8191C3.84939 13.0938 2.51908 13.9779 2.2847 16.4669C4.77376 16.2326 5.6597 14.9023 5.93251 14.2994C5.97339 14.2098 6.03152 14.1291 6.10358 14.062C6.17564 13.9948 6.26022 13.9425 6.3525 13.908C6.44478 13.8735 6.54294 13.8576 6.64139 13.861C6.73984 13.8645 6.83664 13.8873 6.92626 13.9282C7.01589 13.9691 7.09659 14.0272 7.16375 14.0993C7.23092 14.1713 7.28323 14.2559 7.3177 14.3482C7.35217 14.4405 7.36814 14.5386 7.36467 14.6371C7.36121 14.7355 7.33839 14.8323 7.29751 14.9219H7.29658Z" fill="#212529" />
                                </svg>

                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image/Visual */}
                    <div className="flex items-center justify-center md:justify-end">
                        <div
                            className="inline-block rounded-2xl border-2 border-black overflow-hidden"
                            style={{ boxShadow: '8px 8px 0px #212529' }}
                        >
                            <Image
                                src={ImageProfile}
                                alt="Profile Image"
                                className="block rounded-2xl"
                                width={500}
                                height={500}
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-black py-5 overflow-hidden'>
                <div className='flex animate-scroll gap-8'>
                    {/* First set of items */}
                    {dataList.map((item) => (
                        <div
                            key={`second-${item.id}`}
                            className='flex-shrink-0 flex items-center gap-4 px-8 py-6'
                        >
                            <div>
                                {item.value}
                            </div>
                            <h1 className='text-[40px] font-semibold text-white'>{item.title}</h1>
                        </div>
                    ))}
                    {/* Duplicate set for continuous scroll */}
                    {dataList.map((item) => (
                        <div
                            key={`second-${item.id}`}
                            className='flex-shrink-0 flex items-center gap-4 px-8 py-6'
                        >
                            <div>
                                {item.value}
                            </div>
                            <h1 className='text-[40px] font-semibold text-white'>{item.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
