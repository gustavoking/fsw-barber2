import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Gustavo</h2>
        <p>Segunda-feira, 28 de junho</p>
        <div className="mt-6 flex flex-row justify-between gap-2 p-5">
          <Input placeholder="Buscar..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende FSWBARBER"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <Card className="mt-6">
          <CardContent className="flex">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge>Confirmado</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
