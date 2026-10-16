import Image from "next/image";
import Link from "next/link";
import type { HomeServiceItem } from "@/data/homeServicesData";

/**
 * Navy scrim, not black: keeps the cards inside the brand palette and
 * stops the photographs going muddy. A gradient rather than a flat fill, so the
 * top of the frame stays a photograph and only the text end is opaque enough to
 * carry type.
 */
const SCRIM =
  "linear-gradient(to top, rgba(10,37,64,0.96) 0%, rgba(10,37,64,0.85) 45%, rgba(10,37,64,0.25) 75%, rgba(10,37,64,0) 100%)";

const SIZES =
  "(min-width: 1200px) 380px, (min-width: 992px) 304px, (min-width: 575px) 50vw, 100vw";

const TAG = "#8fb9de";
const TITLE = "#f4f8fc";
const LINE = "#b6cade";

const slugToHref: Record<string, string> = {
  "data-center": "/solutions/data-centre-cloud",
  "ict-infrastructure": "/solutions/data-centre-cloud",
  "cybersecurity": "/solutions/cybersecurity",
  "telecom-networks": "/solutions/resource-management",
  "cloud-engineering": "/solutions/infrastructure-management",
  "noc-operations": "/solutions/ai-solutions",
};

export default function ServiceCard({ slug, category, title, description, image, alt }: HomeServiceItem) {
  const targetHref = slugToHref[slug] || `/solutions/services#${slug}`;

  return (
    <Link
      href={targetHref}
      className="group relative aspect-[16/11] overflow-hidden rounded-2xl block focus:outline-none focus:ring-2 focus:ring-purple-600"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes={SIZES}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      <div aria-hidden className="absolute inset-0" style={{ background: SCRIM }} />
      {/* Second pass of the same gradient, faded in on hover */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-40"
        style={{ background: SCRIM }}
      />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span aria-hidden className="mb-2 block h-[2px] w-6 sm:w-7 bg-cta" />
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: TAG }}>
          {category}
        </p>
        <h3 className="mt-0.5 sm:mt-1 text-base sm:text-[17px] font-medium leading-snug" style={{ color: TITLE }}>
          {title}
        </h3>
        <p className="mt-1 sm:mt-1.5 text-xs sm:text-[13px] leading-[1.4] sm:leading-[1.5]" style={{ color: LINE }}>
          {description}
        </p>
      </div>
    </Link>
  );
}
