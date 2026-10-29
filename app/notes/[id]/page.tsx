import type { Metadata } from 'next';
import { fetchNoteById } from '@/lib/api';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const note = await fetchNoteById(id);
    const pageUrl = `https://notehub.com{id}`;
    
    return {
      title: note.title || 'Note Details',
      description: note.content ? note.content.slice(0, 150) : 'View note details.',
      openGraph: {
        title: note.title || 'Note Details',
        description: note.content || 'View note details.',
        url: pageUrl,
        images: [
          {
            url: 'https://goit.global',
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  } catch {
    return { title: 'Note Details | NoteHub' };
  }
}

export default async function NotePage({ params }: Props) {
 
}
