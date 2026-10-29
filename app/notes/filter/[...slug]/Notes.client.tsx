'use client';

import { useState, useEffect } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import Link from 'next/link';
import { fetchNotes } from '../../../../lib/api';
import SearchBox from '../../../../components/SearchBox/SearchBox';
import Pagination from '../../../../components/Pagination/Pagination';
import NoteList from '../../../../components/NoteList/NoteList';
import css from './NotesPage.module.css';

interface NotesClientProps {
  params: {
    slug?: string[];
  };
}

export default function NotesClient({ params }: NotesClientProps) {
  const tag = params.slug && params.slug.length > 0 ? params.slug[0] : 'all';

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [tag]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(handler);
  }, [search]);

  // Запрос данных
  const { data, isLoading } = useQuery({
    queryKey: ['notes', debouncedSearch, page, tag],
    queryFn: () => fetchNotes(debouncedSearch, page, tag),
    placeholderData: keepPreviousData,
  });

  const notesList = data?.notes || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div className={css.container}>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'center' }}>
        <SearchBox value={search} onChange={setSearch} />
        
        {}
        <Link href="/notes/action/create" className={css.addBtn}>
          Create note +
        </Link>
      </div>

      {isLoading && !data ? (
        <p>Loading, please wait...</p>
      ) : (
        <>
          {notesList.length > 0 ? (
            <NoteList notes={notesList} />
          ) : (
            <p>No notes found for this category.</p>
          )}
          
          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </div>
  );
}
