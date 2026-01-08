import Image from "next/image";

export default async function Home() {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const res = await fetch(`${base}/health`, { cache: "no-store" });
  const json = await res.json();

  return (
    <main style={{ padding: 24 }}>
      <h1>Next → Nest check</h1>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </main>
  );
}

