import { AuthGate } from "../components/AuthGate/AuthGate";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AuthGate>{children}</AuthGate>
      </body>
    </html>
  );
}
