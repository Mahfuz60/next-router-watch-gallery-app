import Navbar from "@/components/Shared/Navbar";
import "./globals.css";

export const metadata = {
  title: "Watch Gallery",
  description: "Generated Next Js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
