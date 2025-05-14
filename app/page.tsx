"use client"

import Image from "next/image"
import { Clock, MapPin, Smartphone, Tablet, Wrench, Mail, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const servicos = [
    {
      id: 1,
      titulo: "Troca de tela LCD/OLED",
      imagem: "/images/servico-tela-lcd.jpg",
      descricao: `A troca de tela é um dos reparos mais comuns em smartphones. Quando a tela do seu dispositivo está quebrada, com manchas, ou não responde ao toque, é necessário realizar a substituição.

      Realizamos a troca de tela para diversos modelos de smartphones, incluindo iPhone e Android. Utilizamos peças de alta qualidade para garantir o melhor desempenho do seu aparelho.
      
      Tempo: O serviço geralmente é realizado em 1-2 horas, dependendo do modelo do dispositivo.
      
      Garantia: Oferecemos garantia de 90 dias para este serviço.
      
      Observação: Em alguns modelos, é necessário trocar o conjunto completo (LCD + touch), enquanto em outros é possível trocar apenas o vidro, o que pode reduzir o custo do reparo.`,
    },
    {
      id: 2,
      titulo: "Troca de vidro traseiro",
      imagem: "/images/servico-vidro-traseiro.jpg",
      descricao: `O vidro traseiro dos smartphones modernos é uma peça delicada que pode quebrar facilmente em caso de queda. Realizamos a substituição do vidro traseiro para diversos modelos.

      Nossa equipe utiliza técnicas especiais para remover o vidro quebrado e instalar o novo, garantindo um acabamento perfeito.
      
      Tempo: O serviço geralmente é realizado em 1 hora.
      
      Garantia: Oferecemos garantia de 90 dias para este serviço.
      
      Observação: Em alguns modelos, a troca do vidro traseiro pode afetar a impermeabilidade do aparelho. Consulte nossos técnicos para mais informações.`,
    },
    {
      id: 5,
      titulo: "Troca de bateria (iPhone)",
      imagem: "/images/servico-bateria-iphone.jpg",
      descricao: `A bateria do iPhone tende a perder capacidade com o tempo. Quando a duração da bateria diminui significativamente, é recomendável fazer a substituição.

      Utilizamos baterias de alta qualidade, compatíveis com o seu modelo de iPhone.
      
      Tempo: O serviço geralmente é realizado em 30 minutos a 1 hora.
      
      Garantia: Oferecemos garantia de 90 dias para este serviço.
      
      Observação: Após a troca da bateria, é normal que o dispositivo precise de alguns ciclos de carga para calibrar a nova bateria.`,
    },
    {
      id: 8,
      titulo: "Troca de chip",
      imagem: "/images/servico-chip.jpg",
      descricao: `A troca de chips (processadores, memória, etc.) é um reparo avançado que realizamos para problemas específicos de hardware.

      Utilizamos equipamentos de precisão e técnicas avançadas de soldagem para realizar este tipo de reparo.
      
      Tempo: O serviço pode levar de 2 a 4 horas, dependendo da complexidade.
      
      Garantia: Oferecemos garantia de 90 dias para este serviço.
      
      Observação: Este é um reparo complexo que requer habilidades técnicas avançadas. Nossa equipe é especializada neste tipo de serviço.`,
    },
    {
      id: 9,
      titulo: "Troca de bateria e Conector",
      imagem: "/images/servico-bateria-conector.jpg",
      descricao: `Problemas com a bateria ou com o conector de carga são comuns em smartphones. Realizamos a substituição destes componentes para diversos modelos.

      Utilizamos peças de qualidade para garantir o funcionamento adequado do seu dispositivo.
      
      Tempo: O serviço geralmente é realizado em 1-2 horas.
      
      Garantia: Oferecemos garantia de 90 dias para este serviço.
      
      Observação: Em alguns casos, problemas de carga podem estar relacionados à placa-mãe, o que pode requerer um reparo mais complexo.`,
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/70"></div>
        <Image src="/images/background.jpeg" alt="CELL FIX BRASIL" fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-green-500/20">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="CELL FIX BRASIL" width={150} height={50} className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-green-500 transition">
                Início
              </a>
              <a href="#servicos" className="text-white hover:text-green-500 transition">
                Serviços
              </a>
              <a href="#servicos-detalhados" className="text-white hover:text-green-500 transition">
                Serviços Detalhados
              </a>
              <a href="#sobre" className="text-white hover:text-green-500 transition">
                Sobre
              </a>
              <a href="#quem-somos" className="text-white hover:text-green-500 transition">
                Quem Somos
              </a>
            </nav>
            <div className="md:hidden">
              <button className="text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="inicio" className="pt-36 pb-20 md:pt-48 md:pb-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-green-500">Assistência Técnica</span> em Smartphones
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Consertos rápidos e de qualidade para seu dispositivo. Garantia em todos os serviços.
            </p>
            <div className="flex justify-center">
              <Button
                variant="green"
                size="rounded"
                onClick={() => window.open("https://wa.me/5573999931621", "_blank")}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  FALE CONOSCO
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className="py-20 bg-black/60 backdrop-blur-sm border-y border-green-500/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Nossos <span className="text-green-500">Diferenciais</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                O que nos diferencia e nos torna a melhor escolha para o reparo do seu dispositivo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-500/20 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Agilidade</h3>
                <p className="text-gray-300 text-center">
                  Entendemos que os clientes na grande maioria trabalha com esses equipamentos no dia a dia, por isso
                  efetuamos os reparos com agendamento e tempo de reparo recorde.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-500/20 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Confiança</h3>
                <p className="text-gray-300 text-center">
                  Efetuamos um acompanhamento de contato com cliente pós reparo para entender se o aparelho está
                  funcionando como deveria.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-500/20 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Delivery</h3>
                <p className="text-gray-300 text-center">
                  Atendimento de retirada e entrega no conforto da sua casa, com portador de confiança. Efetuamos a
                  manutenção em nossa Loja Física.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-500/20 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Técnicos Especializados</h3>
                <p className="text-gray-300 text-center">
                  Nosso time de profissionais é altamente qualificado e cuidadoso com cada aparelho que passa pelas mãos
                  deles.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <Button
                variant="green"
                size="rounded"
                onClick={() => window.open("https://wa.me/5573999931621", "_blank")}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  FALE CONOSCO
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-black/60 backdrop-blur-sm border-y border-green-500/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Nossos <span className="text-green-500">Serviços</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Oferecemos uma ampla gama de serviços de reparo para seus dispositivos eletrônicos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <Smartphone className="text-green-500 h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Reparo de Smartphones</h3>
                <p className="text-gray-300">Conserto de telas, baterias, conectores e outros componentes.</p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <Tablet className="text-green-500 h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Reparo de Tablets</h3>
                <p className="text-gray-300">Soluções para problemas de hardware e software em tablets.</p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <Wrench className="text-green-500 h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Assistência Técnica</h3>
                <p className="text-gray-300">Suporte técnico especializado para todos os seus dispositivos.</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button
                variant="green"
                size="rounded"
                onClick={() => window.open("https://wa.me/5573999931621", "_blank")}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  FALE CONOSCO
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section id="servicos-detalhados" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Serviços <span className="text-green-500">Detalhado</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Conheça mais sobre nossos serviços.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicos.map((servico) => (
                <div
                  key={servico.id}
                  className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105"
                >
                  <Image
                    src={servico.imagem || "/placeholder.svg"}
                    alt={servico.titulo}
                    width={600}
                    height={400}
                    className="rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{servico.titulo}</h3>
                  <p className="text-gray-300">{servico.descricao}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                variant="green"
                size="rounded"
                onClick={() => window.open("https://wa.me/5573999931621", "_blank")}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  FALE CONOSCO
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="sobre" className="py-20 bg-black/60 backdrop-blur-sm border-y border-green-500/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Sobre a <span className="text-green-500">Empresa</span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">Conheça nossa história, missão e valores.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/images/placeholders/placeholder-about-600x400.png"
                  alt="Sobre a Cell Fix Brasil"
                  width={600}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Nossa História</h3>
                <p className="text-gray-300 mb-4">
                  A Cell Fix Brasil nasceu da paixão por tecnologia e do desejo de oferecer soluções de reparo de alta
                  qualidade para dispositivos eletrônicos.
                </p>
                <p className="text-gray-300 mb-4">
                  Com anos de experiência no mercado, nossa equipe se dedica a fornecer um serviço rápido, confiável e
                  com garantia.
                </p>
                <p className="text-gray-300">
                  Nosso compromisso é superar as expectativas dos nossos clientes, oferecendo um atendimento
                  personalizado e soluções eficientes para cada problema.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button
                variant="green"
                size="rounded"
                onClick={() => window.open("https://wa.me/5573999931621", "_blank")}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  FALE CONOSCO
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="quem-somos" className="py-20 bg-black/60 backdrop-blur-sm border-y border-green-500/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Quem <span className="text-green-500">Somos</span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">Conheça nossa equipe e nossa filosofia de trabalho.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <Image
                  src="/images/placeholders/placeholder-team-300x300.png"
                  alt="Membro da Equipe 1"
                  width={300}
                  height={300}
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">Nome do Membro 1</h3>
                <p className="text-gray-300">Cargo e breve descrição.</p>
              </div>
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <Image
                  src="/images/placeholders/placeholder-team-300x300.png"
                  alt="Membro da Equipe 2"
                  width={300}
                  height={300}
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">Nome do Membro 2</h3>
                <p className="text-gray-300">Cargo e breve descrição.</p>
              </div>
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <Image
                  src="/images/placeholders/placeholder-team-300x300.png"
                  alt="Membro da Equipe 3"
                  width={300}
                  height={300}
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">Nome do Membro 3</h3>
                <p className="text-gray-300">Cargo e breve descrição.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Endereço e Informações */}
        <section className="py-10 bg-black/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">ENDEREÇO</h2>
              <div className="flex items-center justify-center mt-4 text-gray-300">
                <MapPin className="text-green-500 h-5 w-5 mr-2" />
                <p>Calçada dos Cravos, 280 - 1 andar - Centro Comercial Alphaville - Barueri Sp</p>
              </div>
            </div>

            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden mb-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1225486987287!2d-46.85383492392726!3d-23.52999717884761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf02e9c7494501%3A0x84d0d5a2a0b5e718!2sAv.%20Cal%C3%A7ada%20dos%20Cravos%2C%20280%20-%20Alphaville%20Comercial%2C%20Barueri%20-%20SP%2C%2006453-053!5e0!3m2!1spt-BR!2sbr!4v1715644800000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-green-500/20 pt-10">
              {/* Horário de Funcionamento */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-4">HORÁRIO DE FUNCIONAMENTO:</h3>
                <div className="flex items-center mb-2">
                  <Clock className="text-green-500 h-5 w-5 mr-2" />
                  <p className="text-gray-300">Segunda a sexta das 9:30h às 18h</p>
                </div>
                <div className="flex items-center">
                  <Clock className="text-green-500 h-5 w-5 mr-2" />
                  <p className="text-gray-300">Sábado das 9h às 13h</p>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">REDES SOCIAIS</h3>
                <div className="flex items-center justify-center mb-2">
                  <Instagram className="text-green-500 h-5 w-5 mr-2" />
                  <a
                    href="https://instagram.com/cellfixbrasil"
                    className="text-gray-300 hover:text-green-500 transition"
                  >
                    cellfixbrasil
                  </a>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Facebook className="text-green-500 h-5 w-5 mr-2" />
                  <a
                    href="https://facebook.com/cellfixbrasil"
                    className="text-gray-300 hover:text-green-500 transition"
                  >
                    cellfixbrasil
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="text-green-500 h-5 w-5 mr-2" />
                  <a
                    href="mailto:cellfix.assistencia@gmail.com"
                    className="text-gray-300 hover:text-green-500 transition"
                  >
                    cellfix.assistencia@gmail.com
                  </a>
                </div>
              </div>

              {/* Formas de Pagamento */}
              <div className="text-center md:text-right">
                <h3 className="text-xl font-bold text-white mb-4">FORMAS DE PAGAMENTO</h3>
                <div className="flex justify-center md:justify-end items-center mt-2">
                  <Image 
                    src="/images/payment/forma de pagamento.jpg" 
                    alt="Formas de Pagamento Aceitas" 
                    width={320} 
                    height={40} 
                    className="rounded-md"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-6 border-t border-green-500/20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Cell Fix Brasil. Todos os direitos reservados.</p>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed bottom-6 right-6 w-[60px] h-[60px] rounded-full p-0 bg-[#25D366] hover:bg-[#22c35e] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all transform hover:scale-110 z-50 border-none"
          onClick={() => window.open("https://wa.me/5573999931621", "_blank")}
        >
          <Image
            src="/images/WhatsApp.svg.png"
            alt="WhatsApp"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Button>
      </div>
    </div>
  )
}
