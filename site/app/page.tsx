import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "公式AI講座｜最初の一歩キット",
  description: "AIエージェントチャンネルの公式AI無料講座リンク集。",
};

export default function Home() {
  return (
    <main className="academy-guide-shell">
      <iframe
        className="academy-guide-frame"
        src="/present.html"
        title="公式AI講座・最初の一歩キット"
      />
    </main>
  );
}
