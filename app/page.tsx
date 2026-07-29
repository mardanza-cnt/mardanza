import Hero from "@/components/hero";
import IntroEditorial from "@/components/intro-editorial";
import Manifiesto from "@/components/manifiesto";
import GallerySection from "@/components/gallery-section";
import ActivityCard from "@/components/activity-card";
import { getActividades } from "@/lib/data";

export const revalidate = 60;

export default async function Home() {
  const actividades = (await getActividades()).slice(0, 3);

  return (
    <main>
      {/* Acto I — Hero */}
      <Hero />

      {/* Acto II — Próximas actividades */}
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-12">
        <IntroEditorial />
        <p className="mb-4 text-xs tracking-wide text-tinta/60">PRÓXIMAS ACTIVIDADES</p>
        <div className="flex flex-col gap-3">
          {actividades.map((actividad) => (
            <ActivityCard key={actividad._id} actividad={actividad} />
          ))}
        </div>
      </section>

      {/* Manifiesto — Donde el mar se vuelve arena */}
      <Manifiesto />

      {/* Acto III — Galería DANZA (scroll horizontal tipo Apple) */}
      <GallerySection />
    </main>
  );
}
