import Banne from "@/components/home/Banne";
import { blogService } from "@/services/blog.service";

export default async function Home() {

  const { data } = await blogService.getBlogPost();

  console.log(data);


  return (
    <div>
      <Banne />
    </div>
  );
}