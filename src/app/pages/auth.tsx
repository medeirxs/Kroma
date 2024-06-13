'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobepremierepro, SiBehance, SiCinema4D, SiDavinciresolve } from "react-icons/si";
import { GrGoogle, GrTwitter } from "react-icons/gr";

export function Auth(){
  return(
    <div className="grid justify-center items-center h-screen">
      <div>

        <div className="w-[350px] flex flex-col items-center gap-1">
          <h1 className="text-4xl font-semibold tracking-tight">Kroma The One</h1>
          <p className="text-sm">Plataforma de Designers para Designers.</p>
            <div className="flex flex-row gap-3 mt-1">
              <SiAdobeaftereffects className="h-5 w-5"/>
              <SiAdobepremierepro className="h-5 w-5"/>
              <SiAdobephotoshop className="h-5 w-5"/>
              <SiDavinciresolve className="h-5 w-5"/>
              <SiCinema4D className="h-5 w-5"/>
            </div>
        </div>

        <div className="flex flex-col gap-2 mt-5">
            <form className="w-full">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </form>

            <form className="w-full">
              <Label htmlFor="password">Sua senha</Label>
              <Input id="password" type="password" placeholder="Senha" />
            </form>

            <Button className="w-full mt-5 hover:bg-zinc-400">Acessar</Button>
        </div>

        <div className="flex items-center justify-center mt-5">
          <Button variant='ghost'>
            <GrGoogle className="w-5 h-5"/>
          </Button>
          <Button variant='ghost'>
            <GrTwitter className="w-5 h-5"/>
          </Button>
          <Button variant='ghost'>
            <SiBehance className="w-5 h-5"/>
          </Button>
        </div>
      </div>
    </div>
  )
}