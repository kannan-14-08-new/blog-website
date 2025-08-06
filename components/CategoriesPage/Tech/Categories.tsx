import { Techcategories } from "@/lib/categories";
import CategorySection from "../CategorySection";

export default function Tech() {
  return (
    <CategorySection title="Tech Category" data={Techcategories} id="tech" />
  );
}
