"use client"

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import * as motion from "motion/react-client";
import { AllCategories } from "@/lib/allCategories";
import { formatToHyphenated } from "@/lib/utils";
import { Share } from "lucide-react";

export default function BlogDetail() {
  
 const params = useParams()
 const slug = params?.slug as string;
  const categories = AllCategories.find(
    (post) => formatToHyphenated(post.name) === slug
  );
  if (!categories) return notFound();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="p-6 sm:p-10 mx-auto bg-background rounded-xl shadow-md transition-all duration-300 hover:shadow-xl w-full">
        <h1 className="text-2xl sm:text-5xl font-extrabold mb-6 leading-tight text-foreground">
          {categories.name} {categories.icon}
        </h1>

        <Image
          src={categories.image}
          alt={categories.name}
          width={800}
          height={400}
          className="rounded-lg mb-8 w-full object-cover h-[500px]"
        />

        <div className="mb-6 flex items-center gap-4 text-gray-500 text-sm">
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        <p className="text-muted-foreground">
          In a world flooded with content, writing that truly resonates requires
          more than just technical skill — it demands empathy, clarity, and
          intent. Whether discussing cutting-edge design principles, emerging
          tech trends, or creative storytelling, the goal remains the same: to
          spark curiosity and inspire action. This post explores how digital
          craftsmanship blends creativity with precision, resulting in writing
          that not only informs but also connects on a deeper level.
        </p>

        <div className="flex items-center justify-between mt-8">
          <div className="text-sm text-gray-400">
            Written by{" "}
            <span className="font-medium text-gray-600">Digital Craftsman</span>
          </div>

          <div className="space-x-2">
          <button className="text-blue-600 font-bold text-2xl font-sans hover:text-blue-500 transition-all duration-200 cursor-pointer border-2 p-1.5 
            flex items-center gap-2 rounded-[10px]">
              <Share/> Share
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
