import { Navbar } from "../../componentes/Navbar"

export const HomePage = () => {
    return (
        <>
        <Navbar/>
        <main className="min-h-dvh grid place-items-center bg-slate-50">

                <h1 className="text-3xl font-bold text-slate-800">
                    Home Page
                </h1>
        </main>
    </>
    )
}