export const dynamic = "force-dynamic"
export default async function AboutPage() {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    return (
        <div>
            <h1 className="text-2xl text-black dark:text-[#00baff]">This is about page here...</h1>
        </div>
    )
}
