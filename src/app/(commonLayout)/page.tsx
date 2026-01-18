import Banne from "@/components/home/Banne";
import { userService } from "@/services/user.service";

export default async function Home() {

  const { data } = await userService.getSession();

  console.log(data);


  return (
    <div>
      <Banne />
    </div>
  );
}