'use client';

export default function Footer() {
    const dataSocialMedia = [
        {
            id: 1,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/a-mambaus-sholihin-786606294/',
        },
        {
            id: 2,
            name: 'Instagram',
            url: 'https://www.instagram.com/s_mambaus?igsh=cXN0cWo5bzljMmk4',
        },
        {
            id: 3,
            name: 'Facebook',
            url: 'https://www.facebook.com/profile.php?id=100009365827821&locale=id_ID',
        },
        {
            id: 4,
            name: 'GitHub',
            url: 'https://github.com/Bauagg',
        }
    ];

    return (
        <footer className="bg-[#212529] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Follow on my socials */}
                <div className="text-center">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">Follow on my socials</h2>

                    {/* Social Media Links */}
                    {/* Mobile & Tablet: 2 Columns Grid */}
                    <div className="lg:hidden mb-12">
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                            {dataSocialMedia.map((social) => (
                                <div key={social.id} className="flex justify-center">
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center justify-between gap-2 border-b-2 border-white pb-1"
                                    >
                                        <span className="text-white text-sm whitespace-nowrap">{social.name}</span>
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                        >
                                            <path d="M11.2503 0.625V8.75C11.2503 8.91576 11.1845 9.07473 11.0673 9.19194C10.9501 9.30915 10.7911 9.375 10.6253 9.375C10.4596 9.375 10.3006 9.30915 10.1834 9.19194C10.0662 9.07473 10.0003 8.91576 10.0003 8.75V2.13359L1.06754 11.0672C0.95026 11.1845 0.7912 11.2503 0.625347 11.2503C0.459495 11.2503 0.300435 11.1845 0.18316 11.0672C0.0658846 10.9499 0 10.7909 0 10.625C0 10.4591 0.0658846 10.3001 0.18316 10.1828L9.11675 1.25H2.50035C2.33459 1.25 2.17562 1.18415 2.05841 1.06694C1.9412 0.949731 1.87535 0.79076 1.87535 0.625C1.87535 0.45924 1.9412 0.300269 2.05841 0.183058C2.17562 0.0658481 2.33459 0 2.50035 0H10.6253C10.7911 0 10.9501 0.0658481 11.0673 0.183058C11.1845 0.300269 11.2503 0.45924 11.2503 0.625Z" fill="#F8F9FA" />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Flex Wrap Layout */}
                    <div className="hidden lg:flex lg:flex-wrap lg:justify-center gap-6 mb-12">
                        {dataSocialMedia.map((social) => (
                            <a
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 border-b-2 border-white pb-1"
                            >
                                <span className="text-white text-base">{social.name}</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                >
                                    <path d="M11.2503 0.625V8.75C11.2503 8.91576 11.1845 9.07473 11.0673 9.19194C10.9501 9.30915 10.7911 9.375 10.6253 9.375C10.4596 9.375 10.3006 9.30915 10.1834 9.19194C10.0662 9.07473 10.0003 8.91576 10.0003 8.75V2.13359L1.06754 11.0672C0.95026 11.1845 0.7912 11.2503 0.625347 11.2503C0.459495 11.2503 0.300435 11.1845 0.18316 11.0672C0.0658846 10.9499 0 10.7909 0 10.625C0 10.4591 0.0658846 10.3001 0.18316 10.1828L9.11675 1.25H2.50035C2.33459 1.25 2.17562 1.18415 2.05841 1.06694C1.9412 0.949731 1.87535 0.79076 1.87535 0.625C1.87535 0.45924 1.9412 0.300269 2.05841 0.183058C2.17562 0.0658481 2.33459 0 2.50035 0H10.6253C10.7911 0 10.9501 0.0658481 11.0673 0.183058C11.1845 0.300269 11.2503 0.45924 11.2503 0.625Z" fill="#F8F9FA" />
                                </svg>
                            </a>
                        ))}
                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-white/10 mb-6"></div>

                    {/* Copyright */}
                    <p className="text-white/60 text-sm">
                        ©{new Date().getFullYear()} | Made with Coffee
                    </p>
                </div>
            </div>
        </footer>
    );
}