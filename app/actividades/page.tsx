import DisciplineFilter from "@/components/discipline-filter";
import { getActividades } from "@/lib/data";

export const revalidate = 60;

export default async function ActividadesPage() {
  const actividades = await getActividades();

  return (
    <main className="mx-auto max-w-2xl px-6 py-12 md:px-12">
      <h1 className="mb-6 font-display text-2xl text-tinta">ACTIVIDADES</h1>
      <DisciplineFilter actividades={actividades} />
    </main>
  );
}
