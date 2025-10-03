import { Card } from "./componentes/Card"
import { Hello } from "./componentes/Hello"

// apagou-se tudo e copiou-se o que estava na lousa //
const App = () => {
  return (
    <main className="min-h-dvh place-items-center bg-blue-900">
      <h1 className="text-3xl font-bold text-slate-800">
        Hello Tailwind + React!
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Card A">
          <p> Filho de José </p>
        </Card>
         <Card title="Card B">
          <p> Filho de Maria</p>
        </Card>
         <Card title="Card C">
          <p> Filho de João </p>
        </Card>
    </div>

    <a className="inline-block px-4 py-2 rounded-1g border hover:bg-amber-700 transition-all cursor-pointer focus:ring-2 focus:ring-blue-500">
      Link com foco
    </a>

    <Hello  name="Isabel" />
    </main>
  )
}

export default App