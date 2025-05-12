const FinalCtaSection = () => {
  return (
    <section className="bg-muted py-16 px-6 md:px-12 text-zinc-600 text-center rounded-t-3xl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Comece agora. Assine seus documentos com segurança e praticidade.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="#"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition"
          >
            Criar Conta Grátis
          </a>
          <a
            href="#"
            className="border border-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-blue-600 transition"
          >
            Ver Planos
          </a>
        </div>
      </div>
    </section>
  );
};
export default FinalCtaSection;
