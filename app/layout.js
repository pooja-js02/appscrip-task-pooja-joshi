import "./globals.css";
import { SearchProvider } from "./context/SearchContext";

export const metadata = {
  title: "STYLORE",
  description: "Your fashion destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
