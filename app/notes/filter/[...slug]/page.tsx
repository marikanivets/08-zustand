import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = `Notes - ${slug.charAt(0).toUpperCase() + slug.slice(1)}`;

  return {
    title,
    description: `Browse notes tagged with ${slug}. NoteHub allows you to filter and view notes based on specific tags for better organization.`,
    openGraph: {
      title,
      description: `Browse notes tagged with ${slug}.`,
      url: `https://notehub.com{slug}`,
      images: [{ url: 'https://goit.global', width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function FilterPage({ params }: Props) {
  // Код вашей страницы...
}
