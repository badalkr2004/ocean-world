import Characters from "@/components/Characters";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="h-[300vh]">
      <div className="py-10">
        <Hero />
        <Characters />
      </div>
    </main>
  );
}
