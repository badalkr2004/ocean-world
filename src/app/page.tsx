import GameCharacterIntroduction from "@/components/CharacterInro";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="h-[300vh]">
      <div className="py-10">
        <Hero />
        <div className="max-w-7xl mx-auto mt-40">
          <GameCharacterIntroduction />
        </div>
      </div>
    </main>
  );
}
