import type { Metadata } from 'next';
import NoteForm from '@/components/NoteForm/NoteForm';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import css from './CreateNote.module.css';

export const metadata: Metadata = {
  title: 'Create New Note | NoteHub',
  description: 'Quickly create a new note in NoteHub - the efficient app for organizing your thoughts and ideas.',
  openGraph: {
    title: 'Create New Note | NoteHub',
    description: 'Quickly create a new note in NoteHub - the efficient app for organizing your thoughts and ideas.',
    url: 'https://notehub.com',
    images: [
      {
        url: 'https://goit.global',
        width: 1200,
        height: 630,
        alt: 'Create New Note',
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div>
        <h1>Create note</h1>
        {/* Оборачиваем NoteForm в TanStackProvider для использования React Query */}
        <TanStackProvider>
          <NoteForm />
        </TanStackProvider>
      </div>
    </main>
  );
}
