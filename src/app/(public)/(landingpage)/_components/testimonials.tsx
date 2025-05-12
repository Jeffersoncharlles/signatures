const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucas Andrade",
      title: "Advogado",
      text: "O Signature salvou meu dia várias vezes! Simples, direto ao ponto e com validade jurídica — exatamente o que eu precisava.",
    },
    {
      name: "Fernanda Costa",
      title: "Freelancer de Marketing",
      text: "Consigo assinar contratos em minutos, direto do celular. Nunca mais precisei imprimir nada!",
    },
    {
      name: "Carlos Meireles",
      title: "Pequeno Empresário",
      text: "Paguei os $10 com o pé nas costas. A economia de tempo e papel compensa muito. Plataforma intuitiva e rápida.",
    },
    {
      name: "Juliana Rocha",
      title: "Professora Universitária",
      text: "Uso o plano gratuito para documentos acadêmicos e funciona perfeitamente. Recomendo para qualquer profissional.",
    },
  ];

  return (
    <section className="bg-muted py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          O que estão dizendo
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md text-left"
            >
              <p className="text-gray-700 italic mb-4">“{item.text}”</p>
              <div className="font-semibold text-gray-900">{item.name}</div>
              <div className="text-sm text-gray-500">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
