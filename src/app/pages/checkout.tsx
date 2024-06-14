import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { BsCreditCard } from "react-icons/bs";
import { FaPix } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { MdVerified } from "react-icons/md";

export function Checkout(){
  return(
    <div className="grid justify-center items-center h-screen">
        <div className=" bg-zinc-900 bg-gradient-to-l from-zinc-950/80 w-[490px] p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <span className=" font-semibold text-lg tracking-tight">Escolha seu Plano</span>
            <GrClose className=" cursor-pointer"/>
          </div>

          <p className="text-xs mb-3 text-muted-foreground">Escolha a melhor oferta de acordo com a sua necessidade!</p>

          <div className="grid grid-cols-2 gap-3">
              <div className="bg-none h-20 rounded-lg border border-muted-foreground flex justify-between p-2 flex-col">
                <div className="flex flex-row justify-between">
                  <p></p>
                  <MdVerified className=" items-end"/>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold tracking-tight">Pro</span>
                  <span className="text-sm">Kroma The One + Aulas</span>
                </div>
              </div>

              <div className="bg-none h-20 rounded-lg border border-muted text-muted cursor-pointer flex justify-between p-2 flex-col hover:text-muted-foreground hover:border-muted-foreground hover:transition-all">
                <div className="flex flex-row justify-between">
                  <p></p>
                  <MdVerified className="invisible"/>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold tracking-tight">Starter</span>
                  <span className="text-sm">Kroma The One</span>
                </div>
              </div>
          </div>

          <form className="mt-3">
            <div>
              <Label htmlFor="name" className="font-semibold">Nome</Label>
              <Input id="name" placeholder="Seu Nome" type="text"/>
            </div>
            <div className="mt-2">
              <Label htmlFor="email" className="font-semibold">E-mail</Label>
              <Input id="email" placeholder="m@example.com" type="email"/>
            </div>
            <div className="flex justify-between">
              <div className="mt-2">
                <Label htmlFor="cpf" className="font-semibold">Cpf</Label>
                <Input id="cpf" placeholder="000.000.000-00" type="text"/>
              </div>
              <div className="mt-2">
                <Label htmlFor="number" className="font-semibold">Telefone</Label>
                <Input id="number" placeholder="+55(00)00000-0000" type="text"/>
              </div>
            </div>

          </form>

          <div className="flex justify-between gap-2 mt-3">
            <Button variant="secondary" className="w-full h-12">
              <FaPix/>
            </Button>
            <Button variant="ghost" className="border w-full h-12">
              <BsCreditCard/>
            </Button>
          </div>

          <div className="text-muted-foreground flex justify-between mt-3">
            <span>Subtotal</span><span className="">R$149.99</span>
          </div>
          <div className="text-muted-foreground flex justify-between mt-3">
            <span>Descontos</span><span className="">R$100.00</span>
          </div>

          <div className="text-muted-foreground flex justify-between mt-5 items-center ">
            <span className="text-3xl font-bold text-white">Total</span><span className="text-white text-2xl">R$49.99</span>
          </div>

          <Button className="w-full h-10 mt-5 mb-5">Continuar para o pagamento</Button>
      </div>
    </div>
  )
}