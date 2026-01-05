import "./globals.css";

export const metadata = {
  title: "Codex MVP",
  description: "Upload content, craft a book, export a full publishing package."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
