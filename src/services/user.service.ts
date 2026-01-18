import { cookies } from "next/headers";

export const userService = {
    getSession: async function () {
        const cookieStore = await cookies();
        try {

            const res = await fetch("http://localhost:5000/api/auth/get-session", {
                headers: {
                    Cookie: cookieStore.toString(),
                },
                cache: "no-store",
            });

            const session = res.ok ? await res.json() : null;


            if(!session){
                return {data:null, error:{message:"Session is missing.."}}
            }
            return { data: session, error: null };

        }

        catch (err) {
            console.error(err)
            return { data: null, error: { message: "Something Went Wrong" } }
        }
    },
}