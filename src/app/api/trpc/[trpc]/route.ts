import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/trpc';
import { createContext } from '@/trpc/trpc';
import { NextRequest } from 'next/server';

const handler = (req: NextRequest) =>
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: () => createContext({ req }),
    });

export { handler as GET, handler as POST };