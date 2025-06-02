import { RoomCard } from "@/components/room-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BedDouble, Check, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReservationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/placeholder.jpg?height=800&width=1920"
          alt="Grand Hotel Room"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Reservas
          </h1>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Rooms</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Choose from our selection of comfortable and luxurious rooms
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoomCard
              title="Standard Room"
              description="Comfortable room with all basic amenities"
              price={99}
              image="/placeholder.jpg?height=300&width=400"
              features={["Queen Bed", "Free Wi-Fi", "TV", "Air Conditioning"]}
              slug="standard-room"
            />
            <RoomCard
              title="Deluxe Room"
              description="Spacious room with premium amenities"
              price={149}
              image="/placeholder.jpg?height=300&width=400"
              features={["King Bed", "Free Wi-Fi", "Smart TV", "Mini Bar"]}
              slug="deluxe-room"
            />
            <RoomCard
              title="Suite"
              description="Luxury suite with separate living area"
              price={249}
              image="/placeholder.jpg?height=300&width=400"
              features={["King Bed", "Living Room", "Jacuzzi", "Ocean View"]}
              slug="suite"
            />
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      {/* <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Reserve su Estancia</h2>
            <p className="mt-4 text-lg text-gray-600">
              Disfrute de tarifas exclusivas y beneficios adicionales al reservar directamente con nosotros.
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <Tabs defaultValue="habitacion" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="habitacion">Habitación</TabsTrigger>
                  <TabsTrigger value="paquete">Paquete</TabsTrigger>
                </TabsList>
                <TabsContent value="habitacion">
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="check-in">Fecha de llegada</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Seleccionar fecha</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" locale={es} fromDate={new Date()} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="check-out">Fecha de salida</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Seleccionar fecha</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" locale={es} fromDate={new Date()} />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="adults">Adultos</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="children">Niños</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="room-type">Tipo de habitación</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Habitación Estándar</SelectItem>
                          <SelectItem value="deluxe">Habitación Deluxe</SelectItem>
                          <SelectItem value="suite">Suite Ejecutiva</SelectItem>
                          <SelectItem value="presidential">Suite Presidencial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="promo">Código promocional (opcional)</Label>
                      <Input id="promo" placeholder="Ingrese su código" />
                    </div>

                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Verificar Disponibilidad
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="paquete">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="package">Seleccione un paquete</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="romantic">Escapada Romántica</SelectItem>
                          <SelectItem value="wellness">Bienestar & Spa</SelectItem>
                          <SelectItem value="gourmet">Experiencia Gourmet</SelectItem>
                          <SelectItem value="family">Vacaciones Familiares</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="check-in-package">Fecha de llegada</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Seleccionar fecha</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" locale={es} fromDate={new Date()} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nights">Noches</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="adults-package">Adultos</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="children-package">Niños</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Verificar Disponibilidad
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Room Types Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
            Nuestras Habitaciones
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.jpg?height=400&width=600"
                  alt="Habitación Deluxe"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Habitación Deluxe</h3>
                  <p className="text-amber-500 font-bold">Desde $250/noche</p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <BedDouble className="mr-1 h-4 w-4" />
                  <span className="mr-4">Cama King</span>
                  <Users className="mr-1 h-4 w-4" />
                  <span>2 Personas</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Nuestras habitaciones Deluxe ofrecen un espacio elegante y
                  confortable con vistas impresionantes. Disfrute de amenidades
                  premium y un servicio excepcional.
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    <span>Wi-Fi gratuito</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    <span>Minibar</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    <span>TV de pantalla plana</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    <span>Baño de lujo</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.jpg?height=400&width=600"
                  alt="Suite Ejecutiva"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Suite Ejecutiva</h3>
                  <p className="text-amber-500 font-bold">Desde $450/noche</p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <BedDouble className="mr-1 h-4 w-4" />
                  <span className="mr-4">Cama King</span>
                  <Users className="mr-1 h-4 w-4" />
                  <span>2-3 Personas</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Experimente el lujo definitivo en nuestras espaciosas Suites
                  Ejecutivas, con sala de estar separada y amenidades exclusivas
                  para una estancia inolvidable.
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    <span>Sala de estar</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    <span>Bañera de hidromasaje</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    <span>Servicio de mayordomo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    <span>Desayuno incluido</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-50"
            >
              Ver Todas las Habitaciones
            </Button>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
            Políticas de Reserva
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold">Check-in / Check-out</h3>
              <p className="mt-2 text-gray-600">
                El horario de check-in es a partir de las 15:00 horas. El
                check-out debe realizarse antes de las 12:00 horas. Consulte
                sobre la posibilidad de early check-in o late check-out (sujeto
                a disponibilidad y cargo adicional).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Cancelaciones</h3>
              <p className="mt-2 text-gray-600">
                Las cancelaciones realizadas con más de 48 horas de antelación
                recibirán un reembolso completo. Las cancelaciones dentro de las
                48 horas previas a la llegada están sujetas a un cargo
                equivalente a una noche de estancia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Depósito</h3>
              <p className="mt-2 text-gray-600">
                Se requiere un depósito equivalente al costo de una noche al
                momento de la reserva para garantizarla. Este depósito se
                aplicará al costo total de su estancia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mascotas</h3>
              <p className="mt-2 text-gray-600">
                Grand Hotel es pet-friendly en habitaciones seleccionadas. Se
                aplica un cargo adicional por mascota. Por favor, infórmenos al
                momento de su reserva si viajará con mascotas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
