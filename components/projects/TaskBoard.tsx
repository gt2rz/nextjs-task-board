'use client';

import { taskBoardMock } from '@/mocks/taskBoard';
import { useState } from 'react';
import TasksPool from './TasksPool';

export default function TaskBoard() {
    
    const [pools, setPools] = useState<Pool[]>(taskBoardMock);

    return (
        <section className="w-full h-full flex gap-4 overflow-auto">
            {pools.map((pool) => (
                <TasksPool key={`pool-${pool.id}`} pool={pool} />
            ))}
        </section>
    );
}