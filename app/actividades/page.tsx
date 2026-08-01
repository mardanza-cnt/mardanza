import IntroEditorial from "@/components/intro-editorial";
import DisciplineFilter from "@/components/discipline-filter";
import { getActividades } from "@/lib/data";

export const revalidate = 60;

export default async function ActividadesPage() {
  const actividades = await getActividades();

  return (
    <main className="mx-auto max-w-2xl px-6 pt-28 pb-12 md:px-12">
      <IntroEditorial />
      <DisciplineFilter actividades={actividades} />
    </main>
  );
}
