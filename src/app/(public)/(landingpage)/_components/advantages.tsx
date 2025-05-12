const AdvantagesSection = () => {
  return (
    <section className="bg-muted py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Por que usar o Signature?
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 text-left">
          <li className="flex items-start gap-4">
            <span className="text-green-500 text-xl">✅</span>
            <p className="text-lg text-gray-800">
              Assinatura legalmente válida
            </p>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-green-500 text-xl">✅</span>
            <p className="text-lg text-gray-800">Interface rápida e simples</p>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-green-500 text-xl">✅</span>
            <p className="text-lg text-gray-800">
              Funciona em qualquer dispositivo
            </p>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-green-500 text-xl">✅</span>
            <p className="text-lg text-gray-800">
              Sem necessidade de instalar nada
            </p>
          </li>

          <li className="flex items-start gap-4">
            <span className="text-green-500 text-xl">✅</span>
            <p className="text-lg text-gray-800">Privacidade garantida</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default AdvantagesSection;
