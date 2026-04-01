"use client";

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export default function Notes() {
    const [data, setData] = useState<any[]>([]);
    const supabase = createClient();

    useEffect(() => {
        const fetchNotes = async () => {
            const { data, error } = await supabase.from('notes').select('*');
            console.log(data, error);
            if (data) setData(data);
        };
        fetchNotes();
    }, []);

    console.log(data);
    return (
        <form action="">
            <label htmlFor="">notes</label>
            <input type="text" />
            {
                data?.map((note: any, index: number) => (
                    <div key={index}>{note.content}</div>
                ))
            }
        </form>
    )
}