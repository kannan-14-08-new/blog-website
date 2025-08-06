import Creative from "@/components/CategoriesPage/Creative/Categories";
import Design from "@/components/CategoriesPage/Design/Categories";
import Tech from "@/components/CategoriesPage/Tech/Categories";
import Digital from "@/components/CategoriesPage/Digital/categories";
import Innovation from "@/components/CategoriesPage/Innovation/categories";
import LifeStyle from "@/components/CategoriesPage/LifeStyle/categories";

 

export default function CategoriesPage() {
  return (
    <div>
      <h1
        className="text-4xl md:text-5xl lg-text-7xl font-sans font-bold text-foreground
            leading-tight mb-6 text-center mt-4 "
      >
        Explore
        <span className="text-primary italic"> Category</span>
      </h1>
      
       <Tech/>
       <Design/>
       <Creative/>
       <Digital/>
       <Innovation/>
       <LifeStyle/>

    </div>
  );
}
