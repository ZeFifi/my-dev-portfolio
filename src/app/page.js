import Card from "./components/Card";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col p-24 gap-5 w-9/12"
      style={{ margin: "0 auto" }}
    >
      <div className="flex w-full gap-5">
        <Card
          className="bg-white w-9/12"
          content="Bonjour, je suis Philippe, un développeur front-end basé en
            Ile-de-France. J'ai commencé ma carrière en 2018 et me suis
            spécialisé sur React/Next et TailwindCSS. Envie d'en savoir plus ?
            Découvrez mon blog, consultez mon portfolio et contactez-moi si vous
            désirez que nous travaillions ensemble !"
        />
        <Card className="bg-white w-3/12" content="Blog" />
      </div>
      <div className="flex w-full gap-5">
        <Card className="bg-white w-3/12" content="Dispo" />
        <Card className="bg-white w-3/12" content="Réseaux" />
        <Card className="bg-white w-1/2" content="Portfolio" />
      </div>
      <div className="flex w-full gap-5">
        <Card className="bg-white w-1/2" content="Contact" />
        <Card className="bg-white w-1/2" content="Newsletter" />
      </div>
    </main>
  );
}
