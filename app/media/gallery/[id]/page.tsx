// app/media/gallery/[id]/page.tsx

import Image from "next/image";
import { galleries } from "../data/galleries";
import BackButton from "@/app/components/Back";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const gallery = galleries.find((g) => g.id === id);

  if (!gallery) return <div className="p-4">Gallery not found</div>;

  return (
    <div className="py-10 bg-white max-w-[1440px] mx-auto">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center py-6 text-background/80">
        {gallery.title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {gallery.images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={img}
              alt={`${gallery.title} photo ${idx + 1}`}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
      <div className="pt-6 flex justify-center items-center">
        <BackButton />
      </div>
    </div>
  );
}
