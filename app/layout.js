import './globals.css';

export const metadata = {
  title: 'BBV Capital',
  description: 'Independent fee-only investment adviser',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
