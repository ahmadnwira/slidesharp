import ButtonAccount from "@/components/ButtonAccount";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <ButtonAccount />
        <h1 className="text-3xl md:text-4xl font-extrabold">Uploaded decks</h1>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Upload a new deck
        </h2>
      </section>
    </main>
  );
}
