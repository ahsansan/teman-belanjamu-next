import Head from "next/head";

function App() {
  const links = [
    {
      link: "https://shope.ee/6KPdimoIhU",
      judul: "Bel Anti Air Wireless",
    },
    {
      link: "https://shope.ee/7KIBEZUzBY",
      judul: "Penutup Stop Kontak",
    },
  ];
  return (
    <div>
      <Head>
        <title>Link Teman Belanjamu - Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/temanbelanjamu.ico" />
      </Head>

      <div className="flex w-[350px] justify-center items-center flex-col my-10 border shadow-lg mx-auto rounded">
        <h2 className="max-w-sm rounded p-1 m-6 text-2xl font-bold underline drop-shadow-lg">
          🛒 Link{" "}
          <span className="font-bold text-orange-500">Teman Belanjamu</span>
        </h2>
        {links.map((link, index) => (
          <div
            key={index}
            className="container w-[90%] border border-black rounded m-1 bg-orange-300 text-black hover:bg-orange-400 hover:text-white"
          >
            <a href={link.link} target="_blank" rel="noreferrer">
              <p className="text-sm block p-3">
                {index + 1}. {link.judul}
              </p>
            </a>
          </div>
        ))}
        <div className="m-6">
          <p className="text-xs text-slate-400 italic">Created by A-san</p>
        </div>
      </div>
    </div>
  );
}

export default App;
