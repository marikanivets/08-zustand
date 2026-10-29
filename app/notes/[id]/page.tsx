import type { Metadata } from 'next';
import { fetchNoteById } from '@/lib/api';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const note = await fetchNoteById(id);
    return {
      title: note.title,
      description: note.content.slice(0, 150),
      openGraph: {
        title: note.title,
        description: note.content,
        url: `https://notehub.com{id}`,
        images: [{ url: 'https://goit.global', width: 1200, height: 630 }],
      },
    };
  } catch {
    return { title: 'Note Details | NoteHub' };
  }
}

export default async function NotePage({ params }: Props) {
  
}
