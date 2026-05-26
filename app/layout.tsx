export const metadata = {
  title: "RapidDev Conversion Plan",
  description: "Homepage optimization strategy with analytics and action items",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
