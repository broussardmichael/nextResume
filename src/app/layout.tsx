import '../styles/globals.css'
import {Roboto} from "next/font/google"

const domoArigatoMrRoboto = Roboto({
    style: ["normal"],
    display: "auto",
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ["latin"]
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`${domoArigatoMrRoboto.className}`} lang="en">
        <body className="flex bg-background">
        {children}
        </body>
        </html>
    );
}
