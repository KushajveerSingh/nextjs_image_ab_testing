'use client';

import type { PropsWithChildren } from 'react';

import { ClerkProvider, useAuth } from '@clerk/nextjs';

import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';

import { NextThemeProvider } from './theme-provider';

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string,
);

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk
        client={convex}
        useAuth={useAuth}
      >
        <NextThemeProvider>{children}</NextThemeProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
