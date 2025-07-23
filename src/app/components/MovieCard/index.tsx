import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  title: string;
  rating: number;
  imageUrl: string;
}

export default function MovieCard({ title, rating, imageUrl }: MovieCardProps) {
  return (
    <Link href={`/movies/${title.toLowerCase().replace(/\s/g, "-")}`}>
      <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative w-full h-64">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold mt-2">{title}</h2>
          <p className="text-gray-600">⭐ {rating} / 5</p>
        </div>
      </div>
    </Link>
  );
}