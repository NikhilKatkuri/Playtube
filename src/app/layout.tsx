import type { Metadata } from "next";
import "./globals.css"; 
import { AppContextProvider } from "@/context/AppContext";
 
export const metadata: Metadata = {
  title: "Playtube",
  description: "developed with Youtube. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className="font-nunito antialiased">
        <AppContextProvider>
        {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
