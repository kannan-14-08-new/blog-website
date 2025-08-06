"use client";

import { notFound, useParams } from "next/navigation";
import { featuredPosts } from "@/lib/data";
import { formatToHyphenated } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion"


export default function BlogDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const blog = featuredPosts.find(
    (post) => formatToHyphenated(post.title) === slug
  );

  if (!blog) return notFound

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="p-6 sm:p-10 mx-auto bg-background rounded-xl shadow-md transition-all duration-300 hover:shadow-xl w-full ">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-foreground">
          {blog.title}
        </h1>

        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-lg mb-8 w-full object-cover h-[500px]"
        />

        <div className="mb-6 flex items-center gap-4 text-gray-500 text-sm">
          <span className="inline-block px-3 py-1 bg-gray-100 rounded-full font-medium">
            {blog.date}
          </span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        <p className="text-lg text-foreground font-sans leading-relaxed mb-4">
          {blog.excerpt}
        </p>

        <p className="text-muted-foreground">
          {blog.paragraph}
        </p>

        <div className="flex items-center justify-between mt-8">
          <div className="text-sm text-gray-400">
            Written by{" "}
            <span className="font-medium text-gray-600">Digital Craftsman</span>
          </div>

          <div className="space-x-2">
            <button className="text-blue-600 hover:text-blue-800 text-sm underline underline-offset-2 font-bold">
              Share
            </button>
            <button className="text-gray-600 hover:text-muted-foreground text-sm underline underline-offset-2 font-bold font-serif">
              Comment
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
