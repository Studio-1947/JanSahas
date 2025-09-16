import Image from "next/image";
import Link from "next/link";

export type MediaCardProps = {
  href: string;
  title: string;
  coverSrc: string;
  coverAlt: string;
  tag?: string;
  ctaLabel?: string;
};

export default function MediaCard({
  href,
  title,
  coverSrc,
  coverAlt,
  tag,
  ctaLabel = "View details",
}: MediaCardProps) {
  return (
    <Link
      href={href}
      className="relative block overflow-hidden rounded-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
      aria-label={`${title} - open`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={coverSrc}
          alt={coverAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105 object-top"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/70 transition-colors group-hover:bg-black/50" />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex h-48 sm:h-56 lg:h-64 xl:h-72 flex-col justify-end p-5 text-white">
        {tag ? (
          <div className="text-xs sm:text-sm text-white/80">{tag}</div>
        ) : null}
        <h3 className="mt-2 text-xl sm:text-2xl font-semibold leading-snug">
          {title}
        </h3>
        <span className="mt-4 text-sm sm:text-base underline underline-offset-4 decoration-white/60 group-hover:decoration-white">
          {ctaLabel}
        </span>
      </div>
    </Link>
  );
}
