import Hero from "@/components/hero";
import ActivityCard from "@/components/activity-card";
import { getActividades } from "@/lib/data";

export default async function Home() {
  const actividades = (await getActividades()).slice(0, 3);

  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-2xl px-6 py-12 md:px-12">
        <p className="mb-4 text-xs tracking-wide text-tinta/60">PRÓXIMAS ACTIVIDADES</p>
        <div className="flex flex-col gap-3">
          {actividades.map((actividad) => (
            <ActivityCard key={actividad._id} actividad={actividad} />
          ))}
        </div>
      </section>
    </main>
  );
}
