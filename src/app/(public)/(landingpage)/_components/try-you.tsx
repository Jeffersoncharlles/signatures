import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TryYouSection = () => {
  return (
    <section className="bg-muted ">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-700 mb-6">
          Fácil de usar
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-left w-full ">
          <Card className="">
            <CardHeader>Envie seu PDF</CardHeader>
            <CardContent>
              Ao fazer o upload do seu PDF na plataforma, ele será salvo na
              nuvem e ficará disponível para assinatura. Nossa IA identificará
              automaticamente os campos onde a assinatura deve ser inserida —
              depois, é só seguir para o próximo passo.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Assine com 1 clique</CardHeader>
            <CardContent>
              <p>
                Assim que o PDF estiver na plataforma, você verá o botão
                &quot;Assinar&quot;. Ao clicar, será aberta uma caixa para você
                fazer sua assinatura — usando o mouse ou o toque na tela.
                Depois, é só clicar em &quot;Salvar&quot; e pronto!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Baixe o documento assinado</CardHeader>
            <CardContent>
              Assim que o documento for assinado, ele estará pronto para
              download e também pode ser compartilhado por e-mail com apenas um
              clique.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default TryYouSection;
