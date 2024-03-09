'use client';

import ButtonAccount from '@/components/ButtonAccount';
import FileUpload from './components/FileUpload';

export default async function Dashboard() {
  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <ButtonAccount />
        <h1 className="text-4xl">Upload a new deck</h1>
        <FileUpload onUploadSuccess={() => {}} />
      </section>
    </main>
  );
}
