import { Button } from "@/components/ui/button";

const PricingPlansSection = () => {
  return (
    <section className="bg-muted py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Escolha o plano ideal
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Plano Free */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Free
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">$0</p>
              <p className="text-gray-600 mb-4">5 assinaturas por mês</p>
              <p className="text-sm text-gray-500 mb-6">
                Comece sem compromisso
              </p>
            </div>
            <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
              Criar conta grátis
            </button>
          </div>

          {/* Plano Pro */}
          <div className="border-2 border-green-600 rounded-2xl p-8 shadow-lg flex flex-col justify-between relative bg-blue-50">
            {/* Selo "Mais popular" */}
            <span className="absolute top-0 right-0 -mt-4 mr-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              Mais popular
            </span>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pro</h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">$10/mês</p>
              <p className="text-gray-600 mb-4">200 assinaturas por mês</p>
              <p className="text-sm text-gray-500 mb-6">
                Ideal para profissionais
              </p>
            </div>
            <Button className="py-3">Assinar agora</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingPlansSection;
