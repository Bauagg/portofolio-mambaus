export default function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "A. Mambaus Sholihin",
        alternateName: "Mambaus",
        url: "https://portofolio-mambaus.vercel.app/",
        image: "https://mambaus.com/profile.jpg",
        jobTitle: "Freelance Full Stack Developer & Business Consultant",
        worksFor: {
            "@type": "Organization",
            name: "PT. Sarana Abadi Makmur Bersama Group"
        },
        address: {
            "@type": "PostalAddress",
            addressCountry: "ID"
        },
        sameAs: [
            "https://www.linkedin.com/in/a-mambaus-sholihin-786606294/",
            "https://github.com/Bauagg",
            "https://www.instagram.com/s_mambaus",
            "https://www.facebook.com/profile.php?id=100009365827821"
        ],
        knowsAbout: [
            "Full Stack Development",
            "Web Development",
            "Business Strategy",
            "Technical Consulting",
            "React Development",
            "Next.js Development",
            "TypeScript",
            "Node.js",
            "Software Architecture",
            "Product Development",
            "Freelance Services"
        ],
        email: "mambaus.jobs@gmail.com",
        telephone: "+6285730839962",
        offers: {
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: "Web Development & Consulting Services",
                description: "Professional web development, business consulting, and technical services for startups and businesses"
            }
        }
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Mambaus - Jasa Web Development & Business Solutions",
        description: "Freelance web developer untuk UMKM, startup, dan bisnis. Jasa pembuatan website, aplikasi bisnis, e-commerce, dan konsultasi digital. Solusi IT terjangkau dengan teknologi modern.",
        provider: {
            "@type": "Person",
            name: "A. Mambaus Sholihin"
        },
        areaServed: {
            "@type": "Country",
            name: "Indonesia"
        },
        availableLanguage: ["English", "Indonesian"],
        priceRange: "$$",
        serviceType: [
            "Web Development",
            "Software Development",
            "Business Consulting",
            "UMKM Digital Solutions",
            "E-commerce Development",
            "Business Website Development",
            "Technical Consulting",
            "Product Development",
            "Freelance Programming Services"
        ],
        makesOffer: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Jasa Pembuatan Website UMKM",
                    description: "Website profesional untuk UMKM dengan harga terjangkau"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Aplikasi Bisnis Custom",
                    description: "Pengembangan aplikasi web sesuai kebutuhan bisnis"
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Konsultasi Digital & IT",
                    description: "Konsultasi strategi digital dan solusi teknologi untuk bisnis"
                }
            }
        ]
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [personSchema, professionalServiceSchema]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
