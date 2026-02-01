import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Mambaus - Business Consultant & Digital Solutions | Strategi Bisnis & UMKM';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#212529',
                    padding: '60px',
                }}
            >
                {/* Top decorative line */}
                <div
                    style={{
                        position: 'absolute',
                        top: '40px',
                        left: '60px',
                        right: '60px',
                        height: '4px',
                        backgroundColor: '#F8F9FA',
                        display: 'flex',
                    }}
                />

                {/* Bottom decorative line */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '60px',
                        right: '60px',
                        height: '4px',
                        backgroundColor: '#F8F9FA',
                        display: 'flex',
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    {/* Name */}
                    <div
                        style={{
                            fontSize: '72px',
                            fontWeight: 'bold',
                            color: '#F8F9FA',
                            letterSpacing: '-2px',
                            display: 'flex',
                        }}
                    >
                        Mambaus
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            width: '120px',
                            height: '4px',
                            backgroundColor: '#ADB5BD',
                            display: 'flex',
                        }}
                    />

                    {/* Title */}
                    <div
                        style={{
                            fontSize: '28px',
                            color: '#ADB5BD',
                            textAlign: 'center',
                            display: 'flex',
                        }}
                    >
                        Business Consultant & Full Stack Developer
                    </div>

                    {/* Services */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginTop: '20px',
                        }}
                    >
                        <div
                            style={{
                                padding: '10px 24px',
                                border: '2px solid #6C757D',
                                borderRadius: '100px',
                                color: '#CED4DA',
                                fontSize: '18px',
                                display: 'flex',
                            }}
                        >
                            Business Strategy
                        </div>
                        <div
                            style={{
                                padding: '10px 24px',
                                border: '2px solid #6C757D',
                                borderRadius: '100px',
                                color: '#CED4DA',
                                fontSize: '18px',
                                display: 'flex',
                            }}
                        >
                            UMKM Solutions
                        </div>
                        <div
                            style={{
                                padding: '10px 24px',
                                border: '2px solid #6C757D',
                                borderRadius: '100px',
                                color: '#CED4DA',
                                fontSize: '18px',
                                display: 'flex',
                            }}
                        >
                            Digital Growth
                        </div>
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: '16px',
                            color: '#6C757D',
                            marginTop: '8px',
                            display: 'flex',
                        }}
                    >
                        Solusi Bisnis Digital untuk UMKM, Startup & Enterprise
                    </div>

                    {/* URL */}
                    <div
                        style={{
                            fontSize: '18px',
                            color: '#6C757D',
                            marginTop: '20px',
                            display: 'flex',
                        }}
                    >
                        portofolio-mambaus.vercel.app
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
