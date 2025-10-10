import { useState } from "react"
import { Card } from "./componentes/Card"
import { Hello } from "./componentes/Hello"

// apagou-se tudo e copiou-se o que estava na lousa //
const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const inc = () => setCount(c => c + 1)

  const handleSubmit = event => {
    event.preventDefault() 

    console.log({ name,email, password })
    
    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <main className="place-items-center bg-blue-900">
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

    <button
      className="inline-block px-4 py-2 rounded-1g border hover:bg-amber-700 transition-all cursor-pointer focus:ring-2 focus:ring-blue-500"
        onClick={inc}
      >
        contador {count}
      </button>

      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col space-y-2 mb-2">
          <label htmlFor="name" className="font-medium">Digite seu nome </label>

        <input
          id="name"
          name="name"
          placeholder="Nome completo"
          className="py-2 px-4 border rounded-2xl w-full"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        </fieldset>

        <fieldset className="flex flex-col space-y-2 mb-2">
          <label htmlFor="email" className="font-medium">Digite seu email </label>

        <input
          id="email"
          name="email"
          placeholder="email"
          className="py-2 px-4 border rounded-2xl w-full"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
       
        </fieldset>

        <fieldset className="flex flex-col space-y-2 mb-2">
          <label htmlFor="password" className="font-medium">Digite sua senha </label>

        <input
          id="password"
          name="password"
          placeholder="password"
          type="password"
          className="py-2 px-4 border rounded-2xl w-full"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        </fieldset> 

        <button
        type="submit"
      className="inline-block px-4 py-2 rounded-1g border hover:bg-amber-700 transition-all cursor-pointer focus:ring-2 focus:ring-blue-500"
      >
        Enviar
      </button>
      </form>


    </main>
  )
}

export default App