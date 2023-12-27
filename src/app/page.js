export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5 w-9/12">
      <div className="flex w-full gap-5">
        <div className="welcome bg-slate-500 rounded-md w-9/12">Welcome</div>
        <div className="blog bg-orange-500 rounded-md w-3/12">Blog</div>
      </div>
      <div className="flex w-full gap-5">
        <div className="welcome bg-slate-500 rounded-md w-3/12">Dispo</div>
        <div className="blog bg-orange-500 rounded-md w-3/12">Réseaux</div>
        <div className="blog bg-orange-500 rounded-md w-1/2">Portfolio</div>
      </div>
      <div className="flex w-full gap-5">
        <div className="welcome bg-slate-500 rounded-md w-1/2">Contact</div>
        <div className="blog bg-orange-500 rounded-md w-1/2">Newsletter</div>
      </div>
    </main>
  );
}
