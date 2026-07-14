import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "公式AI無料講座ガイド｜AIエージェントチャンネル",
  description: "OpenAIを前面に、5社の公式AI講座を学び始めるためのリンク集。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
