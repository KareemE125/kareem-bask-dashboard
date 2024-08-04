"use client"

import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { useState, ReactNode } from 'react';

interface ReactQueryProviderProps {
  children: ReactNode;
}

export default function ReactQueryProvider ({ children }: ReactQueryProviderProps) {
    const queryClientConfig: QueryClientConfig = {
        defaultOptions:{ 
            queries: { staleTime: 1000 * 60 * 5 }
        }
    }

    const [queryClient] = useState(() => new QueryClient(queryClientConfig));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};