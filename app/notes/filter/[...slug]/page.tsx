import type { Metadata } from 'next';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug && resolvedParams.slug.length > 0 
    ? resolvedParams.slug[0] 
    : 'all';

  const title = `Notes - ${currentSlug.charAt(0).toUpperCase() + currentSlug.slice(1)}`;
  const pageUrl = `https://notehub.com{currentSlug}`;

  return {
    title,
    description: `Browse notes tagged with ${currentSlug}. NoteHub allows you to filter and view notes based on specific tags.`,
    openGraph: {
      title,
      description: `Browse notes tagged with ${currentSlug}.`,
      url: pageUrl,
      images: [
        {
          url: 'https://goit.global',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function FilterPage({ params }: Props) {
  const resolvedParams = await params;
  return <NotesClient params={resolvedParams} />;
}

