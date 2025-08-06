import * as motion from "motion/react-client";
import { categories } from "@/lib/data";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function CategoriesSection() {
  const allCategories = categories;
  return (
    <section className="py-20 px-4 sm:px-6 lg-px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center flex flex-col gap-2.5"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground ">
            Explore Topics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto ">
            Dive into the subjects that spark curiosity and drive innovation in
            our digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
          {allCategories.map((categories, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={categories.name}
            >
              <Link href={`categories/${categories.slug}`}>
              <div className="group cursor-pointer">
                <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50">
                  <div className="mb-4">
                    <div
                      dangerouslySetInnerHTML={{ __html: categories.icon }}
                      className="w-8 h-8 mx-auto text-primary group-hover:scale-110 transition-transform duration-300"
                    ></div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {categories.name}
                  </h3>
                  <Badge variant={"outline"} className="text-xs">
                    {categories.count} Posts
                  </Badge>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
