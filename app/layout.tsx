import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/components/ReduxProvider";
import BackgroundWrapper from "@/components/BackgroundWrapper";
// import { Bitcount_Grid_Double } from 'next/font/google';



// const bitcountPropDouble = Bitcount_Grid_Double({
//     subsets: ['latin'],
//     weight: ['200', '300', '400', '500', '600', '700', '800', '900'], 
//     variable: '--font-bitcount', 
//     display: 'swap',
// });
import { Bitcount_Grid_Double } from 'next/font/google'; 

const bitcountPropDouble = Bitcount_Grid_Double({ 
    subsets: ['latin'],
    // weight: ['200', '300', '400', '500', '600', '700', '800', '900'], 
    variable: '--font-bitcount', 
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Rick and Morty",
    description: "Rick and Morty next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${bitcountPropDouble.className}`}>
                <ReduxProvider>
                    <BackgroundWrapper>
                        {children}
                    </BackgroundWrapper>
                </ReduxProvider>
            </body>
        </html>
    );
}
