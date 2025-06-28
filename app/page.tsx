import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-4 py-6 md:px-8 lg:px-20 xl:px-40">
        <h2 className="text-xl font-bold md:text-2xl">Olá, Gustavo</h2>
        <p className="text-sm md:text-base">Segunda-feira, 28 de junho</p>

        {/* Área da busca e banner */}
        <div className="mt-6 flex flex-col items-stretch gap-4 lg:flex-row">
          {/* Input + Botão */}
          <div className="flex flex-1 flex-row gap-2">
            <Input placeholder="Buscar..." className="flex-1" />
            <Button className="w-12 lg:w-14">
              <SearchIcon className="h-5 w-5" />
            </Button>
          </div>

          {/* Banner */}
          <div className="relative h-[150px] lg:h-auto lg:w-[250px]">
            <Image
              alt="Banner"
              src="/banner-01.png"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
