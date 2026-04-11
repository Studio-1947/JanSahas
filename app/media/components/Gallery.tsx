import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  {
    id: 1,
    image: "/media/gallery/1/IMG_20241028_115835.webp",
    title: "USHA Silai School",
  },
  {
    id: 2,
    image: "/media/gallery/2/Awareness Camp with LD Department.webp",
    title: "Migrants Resilience Collaborative (MRC)",
  },
  {
    id: 3,
    image: "/media/gallery/3/Anganwadi session.webp",
    title: "Sahaare ke Chotte Ishaare - Community Mental Health Programme",
  },
];

const Gallery = () => {
  return (
    <div className="pb-10 bg-white max-w-[1440px] mx-auto" id="photoGallery">
      <div className="text-2xl lg:text-4xl font-semibold text-background/80 text-center py-5">
        Photo Gallery
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {images.map((img) => (
          <Link key={img.id} href={`/media/gallery/${img.id}`}>
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              {/* Image */}
              <Image
                src={img.image}
                alt={img.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/70 transition duration-300 group-hover:bg-black/50" />

              {/* Title overlay */}
              <div className="absolute bottom-0 w-full p-3">
                <p className="text-white text-lg font-semibold drop-shadow-md">
                  {img.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
