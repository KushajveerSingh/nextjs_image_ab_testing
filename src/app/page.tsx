'use client';

import { SignInButton, SignOutButton, useSession } from '@clerk/nextjs';

import { useMutation, useQuery } from 'convex/react';
import { api } from '@convex/_generated/api';

export default function Home() {
  const { isSignedIn } = useSession();

  const createImage = useMutation(api.images.createImage);
  const images = useQuery(api.images.getImagesForUser);

  return (
    <main>
      {isSignedIn ?
        <SignOutButton />
      : <SignInButton />}

      {isSignedIn && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const title = formData.get('title') as string;
            await createImage({ title });
            form.reset();
          }}
        >
          <label>Title</label>
          <input name='title' />
        </form>
      )}

      {images?.map((image) => {
        return <div key={image._id}>{image.title}</div>;
      })}
    </main>
  );
}
