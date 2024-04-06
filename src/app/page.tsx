'use client';

import { SignInButton, SignOutButton, useSession } from '@clerk/nextjs';

import { useAction, useMutation, useQuery } from 'convex/react';
import { api } from '@convex/_generated/api';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isSignedIn } = useSession();

  // @ts-ignore
  const pay = useAction(api.stripe.pay);
  const router = useRouter();

  async function handleUpgradeClick() {
    const url = await pay();

    router.push(url);
  }

  // const createImage = useMutation(api.images.createImage);
  // const images = useQuery(api.images.getImagesForUser);

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
            // await createImage({ title });
            form.reset();
          }}
        >
          <label>Title</label>
          <input name='title' />
        </form>
      )}

      {isSignedIn && <Button onClick={handleUpgradeClick}>Upgrade</Button>}
      {/* {images?.map((image) => {
        return <div key={image._id}>{image.title}</div>;
      })} */}
    </main>
  );
}
