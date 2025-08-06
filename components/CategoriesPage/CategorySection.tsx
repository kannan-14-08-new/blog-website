"use client";

import { motion } from "framer-motion"; // ✅ correct import
import Link from "next/link";
import Image from "next/image";
import { formatToHyphenated } from "@/lib/utils";

type Category = {
  slug: string;
  name: string;
  image: string;
  icon: string;
};

type Props = {
  title: string;
  data: Category[];
  id: string;
};

export default function CategorySection({ title, data, id }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="px-4 py-10 max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">{title}</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${formatToHyphenated(cat.name)}`}
          >
            <div
              className="rounded-xl overflow-hidden shadow-lg group hover:scale-105 transition h-80"
              id={id}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={500}
                height={160}
                className="h-40 w-full object-cover mb-8"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">
                  {cat.icon} {cat.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1 capitalize">
                  {cat.slug.replace("-", " ")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <hr />
    </motion.section>
  );
}
