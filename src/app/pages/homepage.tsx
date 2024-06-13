import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { HiOutlineSquares2X2 } from "react-icons/hi2"
import { FaDownload, FaUser } from "react-icons/fa6"
import { RiArchiveDrawerFill } from "react-icons/ri"
import { BsFillCameraVideoFill, BsSearch } from "react-icons/bs"
import { FaStar, FaUserAlt } from "react-icons/fa"
import { RiSettings4Fill } from "react-icons/ri"
import { GrHelp, GrUser } from "react-icons/gr"
import { MdExitToApp, MdHelpOutline } from "react-icons/md"

export function Homepage(){
  return(
    <div className="grid justify-center items-center h-screen w-auto font">
      <div className="flex">
        <div className="h-screen flex flex-col p-6 ">
          <div className="flex gap-2 p-3 rounded-lg w-72 items-center justify-center bg-zinc-900 bg-gradient-to-l from-zinc-950">
            <Avatar className=" w-12 h-12">
              <AvatarImage src="https://i.pinimg.com/564x/65/c0/76/65c076b5ab3d89dabc95481e01e18772.jpg" />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
            <div>
              <span className="text-1xl tracking-tighter font-semibold flex">Matheus Medeiros</span>
              <div className="flex items-center gap-1">
                <span className=" text-sm">@medeirxs</span>
                <Badge className=" text-xs rounded-xl h-4 justify-center">pro</Badge>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between border-b mt-10 p-1 text-muted-foreground">
              <span>Menu</span>
              <HiOutlineSquares2X2/>
            </div>
            <div className="text-muted-foreground flex flex-col gap-2 mt-3">
            <Button variant="ghost" className="flex items-center justify-start gap-2 w-full bg-gradient-to-l from-zinc-950">
                <FaStar className="w-4 h-4"/>
                <span>Lançamentos</span>
              </Button>

              <Button variant="secondary" className="flex items-center justify-start gap-2 w-full bg-zinc-900 bg-gradient-to-l from-zinc-950">
                <RiArchiveDrawerFill className="w-4 h-4"/>
                <span>Packs</span>
              </Button>

              <Button variant="ghost" className="flex items-center justify-start gap-2 w-full">
                <FaDownload className="w-4 h-4"/>
                <span>Softwares</span>
              </Button>

              <Button variant="ghost" className="flex items-center justify-start gap-2 w-full">
                <BsFillCameraVideoFill className="w-4 h-4"/>
                <span>Aulas</span>
              </Button>
            </div>
          </div>

          <div>
            <div className="flex justify-between border-b mt-10 p-1 text-muted-foreground">
              <span>Conta</span>
              <GrUser className="w-4 h-4"/>
            </div>
            <div className="text-muted-foreground flex flex-col gap-2 mt-3">
              <Button variant="ghost" className="flex items-center justify-start gap-2">
                  <FaUser className="w-4 h-4"/>
                  <span>Perfil</span>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start gap-2">
                <RiSettings4Fill className="w-5 h-5"/>
                <span>Configuração</span>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start gap-2">
                <MdHelpOutline className="w-5 h-5"/>
                <span>Suporte</span>
              </Button>
              <Button variant="ghost" className="flex items-center justify-start gap-2">
                <MdExitToApp className="w-5 h-5"/>
                <span>Sair</span>
              </Button>
            </div>
          </div>



          <Button variant="secondary" className="flex items-center w-full mt-12 bg-zinc-900 bg-gradient-to-l from-zinc-950">
              <span>Kroma Producer &copy; 2024</span>
            </Button>
        </div>

        <div className="pt-6">
          <div className="bg-zinc-900 bg-gradient-to-t rounded-xl from-zinc-950 pt-3 pl-8 pr-8 w-[1024px] h-screen">
            <div className="flex flex-row justify-between border-b p-2">
              <span className="text-muted-foreground cursor-pointer">Kroma/<span className="text-white">Packs</span></span>
              <BsSearch/>
            </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-4 h-72 space-x-4 pt-4">
                    <div className="bg-zinc-800/40 drop-shadow-xl rounded-xl hover:scale-105 transition-all">
                      <div className="p-3 space-y-2">
                        <img className="rounded-lg"
                          src="https://cdn.discordapp.com/attachments/1200954794563612724/1203094654933799012/image.png?ex=666c11f6&is=666ac076&hm=ed98fe076fe44e42793916331dcf54200a84f735591b4f85d2e36c268cce9809&" alt="" />
                        <div>
                          <Badge className="text-center rounded-xl text-xs h-6 bg-muted text-muted-foreground">Photoshop</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Avatar className=" w-5 h-5">
                            <AvatarImage src="https://i.pinimg.com/564x/65/c0/76/65c076b5ab3d89dabc95481e01e18772.jpg" />
                            <AvatarFallback>MM</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="text-xs text-muted-foreground">Autor/<span className="text-white">Matheus Medeiros</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-800/40 drop-shadow-xl rounded-xl hover:scale-105 transition-all">
                      <div className="p-3 space-y-2">
                        <img className="rounded-lg"
                          src="https://cdn.discordapp.com/attachments/1200954794563612724/1203094654933799012/image.png?ex=666c11f6&is=666ac076&hm=ed98fe076fe44e42793916331dcf54200a84f735591b4f85d2e36c268cce9809&" alt="" />
                        <div>
                          <Badge className="text-center rounded-xl text-xs h-6 bg-muted text-muted-foreground">Photoshop</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Avatar className=" w-5 h-5">
                            <AvatarImage src="https://i.pinimg.com/564x/65/c0/76/65c076b5ab3d89dabc95481e01e18772.jpg" />
                            <AvatarFallback>MM</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="text-xs text-muted-foreground">Autor/<span className="text-white">Matheus Medeiros</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-800/40 drop-shadow-xl rounded-xl hover:scale-105 transition-all">
                      <div className="p-3 space-y-2">
                        <img className="rounded-lg"
                          src="https://cdn.discordapp.com/attachments/1200954794563612724/1203094654933799012/image.png?ex=666c11f6&is=666ac076&hm=ed98fe076fe44e42793916331dcf54200a84f735591b4f85d2e36c268cce9809&" alt="" />
                        <div>
                          <Badge className="text-center rounded-xl text-xs h-6 bg-muted text-muted-foreground">Photoshop</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Avatar className=" w-5 h-5">
                            <AvatarImage src="https://i.pinimg.com/564x/65/c0/76/65c076b5ab3d89dabc95481e01e18772.jpg" />
                            <AvatarFallback>MM</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="text-xs text-muted-foreground">Autor/<span className="text-white">Matheus Medeiros</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-800/40 drop-shadow-xl rounded-xl hover:scale-105 transition-all">
                      <div className="p-3 space-y-2">
                        <img className="rounded-lg"
                          src="https://cdn.discordapp.com/attachments/1200954794563612724/1203094654933799012/image.png?ex=666c11f6&is=666ac076&hm=ed98fe076fe44e42793916331dcf54200a84f735591b4f85d2e36c268cce9809&" alt="" />
                        <div>
                          <Badge className="text-center rounded-xl text-xs h-6 bg-muted text-muted-foreground">Photoshop</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Avatar className=" w-5 h-5">
                            <AvatarImage src="https://i.pinimg.com/564x/65/c0/76/65c076b5ab3d89dabc95481e01e18772.jpg" />
                            <AvatarFallback>MM</AvatarFallback>
                          </Avatar>
                          <div>
                            <span className="text-xs text-muted-foreground">Autor/<span className="text-white">Matheus Medeiros</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}