import data from "@/data/HomePage.json";

export default function Home() {
  return (
    <section className="flex justify-center items-center h-[500px]">
      <p className="text-8xl text-accent">{data.homePageContent}</p>
    </section>
  );
}
