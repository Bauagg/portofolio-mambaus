'use client';

import { useLanguageStore } from "@/app/store/language";
import { useForm } from "react-hook-form";
import { useState } from 'react';

interface ContactFormData {
    fullName: string;
    phoneNumber: string;
    subject: string;
    message: string;
}

interface ToastState {
    show: boolean;
    type: 'success' | 'error';
    message: string;
}

export default function Contact() {
    const { language } = useLanguageStore();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
    const [toast, setToast] = useState<ToastState>({ show: false, type: 'success', message: '' });

    const onSubmit = (data: ContactFormData) => {
        // Format message untuk WhatsApp
        const waMessage = `*New Contact from Portfolio*\n\n` +
            `*Name:* ${data.fullName}\n` +
            `*Phone:* ${data.phoneNumber}\n` +
            `*Subject:* ${data.subject}\n\n` +
            `*Message:*\n${data.message}`;

        // Encode message untuk URL
        const encodedMessage = encodeURIComponent(waMessage);

        // WhatsApp number
        const waNumber = '6285730839962';

        // Buka WhatsApp dengan message yang sudah diformat
        window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');

        // Reset form dan tampilkan toast
        reset();
        setToast({
            show: true,
            type: 'success',
            message: language === 'ENG'
                ? 'Redirecting to WhatsApp...'
                : 'Mengarahkan ke WhatsApp...'
        });

        setTimeout(() => {
            setToast({ show: false, type: 'success', message: '' });
        }, 3000);
    };

    return (
        <section className="bg-white dark:bg-black pt-12 md:pt-10">
            {/* Toast Notification */}
            {toast.show && (
                <div className="fixed top-6 right-6 z-50 animate-slide-in">
                    <div className={`flex items-center gap-3 px-6 py-4 rounded-lg border-2 shadow-lg ${toast.type === 'success'
                        ? 'bg-white border-green-500'
                        : 'bg-white border-red-500'
                        }`} style={{ boxShadow: '4px 4px 0px #212529' }}>
                        {toast.type === 'success' ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" fill="#22C55E" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" fill="#EF4444" />
                                <path d="M15 9L9 15M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                        <p className="text-[#212529] font-semibold">{toast.message}</p>
                        <button
                            onClick={() => setToast({ show: false, type: 'success', message: '' })}
                            className="ml-2 text-[#6C757D] hover:text-[#212529] transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                        <div className='rounded-full flex items-center justify-center h-7 py-4 border border-[#CED4DA] w-fit px-3 gap-2'>
                            {language === 'ENG' ?
                                <span className="ml-2 text-sm text-[#212529]">Get in Touch</span>
                                :
                                <span className="ml-2 text-sm text-[#212529]">Mari Terhubung</span>
                            }
                            <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.75" y1="0.75" x2="31.25" y2="0.75" stroke="#495057" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#212529] dark:text-white leading-tight">
                            {language === 'ENG'
                                ? "Let’s Work Together !"
                                : 'Mari Berkolaborasi !'}
                        </h1>
                        <p className="text-lg md:text-xl text-[#495057] dark:text-gray-300 leading-relaxed">
                            {language === 'ENG'
                                ? 'Whether you’re starting from scratch or refining an existing product, feel free to reach out and let’s see how we can work together.'
                                : 'Baik memulai dari nol maupun mengembangkan produk yang sudah ada, jangan ragu untuk menghubungi saya dan mari kita diskusikan kemungkinan kerja sama.'}
                        </p>

                        {/* Email and Phone Buttons */}
                        <div className="flex flex-col lg:flex-row gap-4 w-full">
                            {/* Email Button */}
                            <div className="flex flex-col gap-2 border-2 border-[#212529] px-4 py-3 w-full lg:w-1/2" style={{ boxShadow: '3px 3px 0px #212529' }}>
                                <div className="flex justify-between items-center">
                                    <p className="text-[#6C757D] text-[16px]">Email</p>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5004 0.75V10.5C13.5004 10.6989 13.4214 10.8897 13.2807 11.0303C13.1401 11.171 12.9493 11.25 12.7504 11.25C12.5515 11.25 12.3607 11.171 12.2201 11.0303C12.0794 10.8897 12.0004 10.6989 12.0004 10.5V2.56031L1.28104 13.2806C1.14031 13.4214 0.94944 13.5004 0.750417 13.5004C0.551394 13.5004 0.360523 13.4214 0.219792 13.2806C0.0790615 13.1399 0 12.949 0 12.75C0 12.551 0.0790615 12.3601 0.219792 12.2194L10.9401 1.5H3.00042C2.8015 1.5 2.61074 1.42098 2.47009 1.28033C2.32943 1.13968 2.25042 0.948912 2.25042 0.75C2.25042 0.551088 2.32943 0.360322 2.47009 0.21967C2.61074 0.0790178 2.8015 0 3.00042 0H12.7504C12.9493 0 13.1401 0.0790178 13.2807 0.21967C13.4214 0.360322 13.5004 0.551088 13.5004 0.75Z" fill="#212529" />
                                    </svg>
                                </div>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mambaus.jobs@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-left"
                                >
                                    <span className="text-[16px] font-bold">mambaus.jobs@gmail.com</span>
                                </a>
                            </div>

                            {/* Phone Button */}
                            <div className="flex flex-col gap-2 border-2 border-[#212529] px-4 py-3 w-full lg:w-1/2" style={{ boxShadow: '3px 3px 0px #212529' }}>
                                <div className="flex justify-between items-center">
                                    <p className="text-[#6C757D] text-[16px]">Phone Number</p>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5004 0.75V10.5C13.5004 10.6989 13.4214 10.8897 13.2807 11.0303C13.1401 11.171 12.9493 11.25 12.7504 11.25C12.5515 11.25 12.3607 11.171 12.2201 11.0303C12.0794 10.8897 12.0004 10.6989 12.0004 10.5V2.56031L1.28104 13.2806C1.14031 13.4214 0.94944 13.5004 0.750417 13.5004C0.551394 13.5004 0.360523 13.4214 0.219792 13.2806C0.0790615 13.1399 0 12.949 0 12.75C0 12.551 0.0790615 12.3601 0.219792 12.2194L10.9401 1.5H3.00042C2.8015 1.5 2.61074 1.42098 2.47009 1.28033C2.32943 1.13968 2.25042 0.948912 2.25042 0.75C2.25042 0.551088 2.32943 0.360322 2.47009 0.21967C2.61074 0.0790178 2.8015 0 3.00042 0H12.7504C12.9493 0 13.1401 0.0790178 13.2807 0.21967C13.4214 0.360322 13.5004 0.551088 13.5004 0.75Z" fill="#212529" />
                                    </svg>
                                </div>
                                <a
                                    href="https://wa.me/6285730839962"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-left"
                                >
                                    <span className="text-[16px] font-bold">+62 857 3083 9962</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:justify-end flex justify-center">
                        <div className="w-full border-2 border-[#212529] rounded-lg p-6 md:p-8 bg-white" style={{ boxShadow: '6px 6px 0px #212529' }}>
                            <h2 className="text-2xl font-bold text-[#212529] mb-2">
                                {language === 'ENG' ? 'Leave a Message' : 'Kirim Pesan'}
                            </h2>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                {/* Full Name */}
                                <div>
                                    <label className="block font-bold text-sm text-[#212529] mb-2">
                                        {language === 'ENG' ? 'Full Name' : 'Nama Lengkap'}
                                    </label>
                                    <input
                                        type="text"
                                        {...register('fullName', {
                                            required: language === 'ENG' ? 'Full name is required' : 'Nama lengkap wajib diisi'
                                        })}
                                        placeholder={language === 'ENG' ? 'Input full name' : 'Masukkan nama lengkap'}
                                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-1 transition-all ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[#DEE2E6] focus:ring-[#212529]'
                                            }`}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                                    )}
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-sm font-bold text-[#212529] mb-2">
                                        {language === 'ENG' ? 'Phone Number' : 'Nomor Telepon'}
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('phoneNumber', {
                                            required: language === 'ENG' ? 'Phone number is required' : 'Nomor telepon wajib diisi',
                                            pattern: {
                                                value: /^[0-9+\-\s()]*$/,
                                                message: language === 'ENG' ? 'Invalid phone number format' : 'Format nomor telepon tidak valid'
                                            }
                                        })}
                                        placeholder={language === 'ENG' ? 'Input phone number' : 'Masukkan nomor telepon'}
                                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-1 transition-all ${errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-[#DEE2E6] focus:ring-[#212529]'
                                            }`}
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                                    )}
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-bold text-[#212529] mb-2">
                                        {language === 'ENG' ? 'Subject' : 'Subjek'}
                                    </label>
                                    <input
                                        type="text"
                                        {...register('subject', {
                                            required: language === 'ENG' ? 'Subject is required' : 'Subjek wajib diisi'
                                        })}
                                        placeholder={language === 'ENG' ? "Input message's subject" : 'Masukkan subjek pesan'}
                                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-1 transition-all ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-[#DEE2E6] focus:ring-[#212529]'
                                            }`}
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-bold text-[#212529] mb-2">
                                        {language === 'ENG' ? 'Message' : 'Pesan'}
                                    </label>
                                    <textarea
                                        rows={5}
                                        {...register('message', {
                                            required: language === 'ENG' ? 'Message is required' : 'Pesan wajib diisi',
                                            minLength: {
                                                value: 10,
                                                message: language === 'ENG' ? 'Message must be at least 10 characters' : 'Pesan minimal 10 karakter'
                                            }
                                        })}
                                        placeholder={language === 'ENG' ? 'Input message' : 'Masukkan pesan'}
                                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-1 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[#DEE2E6] focus:ring-[#212529]'
                                            }`}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#212529] text-white font-bold py-3 px-6 border-2 border-white flex items-center justify-center gap-2 hover:bg-[#495057] transition-all duration-300 cursor-pointer"
                                    style={{ boxShadow: '4px 4px 0px #212529' }}
                                >
                                    <span>{language === 'ENG' ? 'Send to WhatsApp' : 'Kirim ke WhatsApp'}</span>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.7081 0.20514C20.5919 0.104798 20.4505 0.0380637 20.2992 0.0121272C20.1479 -0.0138094 19.9923 0.00203484 19.8494 0.0579529L0.849978 7.49327C0.580714 7.59797 0.35275 7.78731 0.200407 8.03279C0.0480643 8.27826 -0.0204126 8.56658 0.00528593 8.85434C0.0309844 9.1421 0.149467 9.41373 0.342897 9.62832C0.536327 9.84292 0.794234 9.98887 1.07779 10.0442L6.0006 11.0108V16.4998C5.99963 16.7988 6.08848 17.0912 6.25564 17.3391C6.4228 17.587 6.66056 17.779 6.9381 17.8901C7.21522 18.0033 7.51997 18.0305 7.81274 17.9681C8.1055 17.9057 8.37272 17.7567 8.57967 17.5405L10.9534 15.0786L14.7194 18.3748C14.9911 18.6158 15.3415 18.7492 15.7047 18.7498C15.8638 18.7497 16.022 18.7247 16.1734 18.6758C16.4209 18.5972 16.6434 18.4553 16.8189 18.264C16.9944 18.0727 17.1168 17.8387 17.1737 17.5855L20.979 1.03108C21.0131 0.88178 21.0058 0.726034 20.9581 0.580534C20.9104 0.435035 20.824 0.305267 20.7081 0.20514ZM14.9762 3.58014L6.57717 9.59514L1.92717 8.68295L14.9762 3.58014ZM7.5006 16.4998V12.0486L9.82467 14.0867L7.5006 16.4998ZM15.7065 17.2498L7.95529 10.453L19.1115 2.45702L15.7065 17.2498Z" fill="#F8F9FA" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}