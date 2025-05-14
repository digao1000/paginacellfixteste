"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Trash2, Upload, Save, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [images, setImages] = useState<{ id: string; path: string; alt: string }[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [newImage, setNewImage] = useState<File | null>(null)
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null)

  // Senha secreta para acessar a página de administração
  const SECRET_PASSWORD = "admin123"

  useEffect(() => {
    // Carregar todas as imagens do site
    if (isAuthenticated) {
      fetchImages()
    }
  }, [isAuthenticated])

  const fetchImages = () => {
    // Em um ambiente real, isso seria uma chamada de API para buscar todas as imagens
    // Aqui estamos simulando com dados estáticos
    const siteImages = [
      { id: "1", path: "/images/logo.png", alt: "Logo" },
      { id: "2", path: "/images/background.jpeg", alt: "Background" },
      { id: "3", path: "/images/servico-tela-lcd.jpg", alt: "Serviço Tela LCD" },
      { id: "4", path: "/images/servico-vidro-traseiro.jpg", alt: "Serviço Vidro Traseiro" },
      { id: "5", path: "/images/servico-vidro-lcd-iphone.jpg", alt: "Serviço Vidro LCD iPhone" },
      { id: "6", path: "/images/servico-cabo-mic.jpg", alt: "Serviço Cabo MIC" },
      { id: "7", path: "/images/servico-bateria-iphone.jpg", alt: "Serviço Bateria iPhone" },
      { id: "8", path: "/images/servico-vidro-touch.jpg", alt: "Serviço Vidro Touch" },
      { id: "9", path: "/images/servico-cabo-mic-android.jpg", alt: "Serviço Cabo MIC Android" },
      { id: "10", path: "/images/servico-chip.jpg", alt: "Serviço Chip" },
      { id: "11", path: "/images/servico-bateria-conector.jpg", alt: "Serviço Bateria Conector" },
      { id: "12", path: "/images/about-us.jpg", alt: "Sobre Nós" },
      { id: "13", path: "/images/team-member-1.jpg", alt: "Membro da Equipe 1" },
      { id: "14", path: "/images/team-member-2.jpg", alt: "Membro da Equipe 2" },
      { id: "15", path: "/images/team-member-3.jpg", alt: "Membro da Equipe 3" },
      { id: "16", path: "/images/amex.png", alt: "American Express" },
      { id: "17", path: "/images/visa.png", alt: "Visa" },
      { id: "18", path: "/images/mastercard.png", alt: "Mastercard" },
      { id: "19", path: "/images/elo.png", alt: "Elo" },
      { id: "20", path: "/images/pix.png", alt: "Pix" },
    ]
    setImages(siteImages)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Senha incorreta. Tente novamente.")
    }
  }

  const handleImageSelect = (imageId: string) => {
    setSelectedImage(imageId)
    setNewImage(null)
    setNewImagePreview(null)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setNewImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageUpdate = () => {
    if (!selectedImage || !newImage) return

    // Em um ambiente real, isso seria uma chamada de API para atualizar a imagem
    // Aqui estamos apenas simulando a atualização
    alert(`Imagem ${selectedImage} atualizada com sucesso!`)

    // Atualizar a lista de imagens (simulação)
    setImages((prevImages) =>
      prevImages.map((img) => (img.id === selectedImage ? { ...img, path: URL.createObjectURL(newImage) } : img)),
    )

    setNewImage(null)
    setNewImagePreview(null)
  }

  const handleImageDelete = (imageId: string) => {
    // Em um ambiente real, isso seria uma chamada de API para excluir a imagem
    // Aqui estamos apenas simulando a exclusão
    const confirmDelete = window.confirm("Tem certeza que deseja excluir esta imagem?")
    if (confirmDelete) {
      setImages((prevImages) => prevImages.filter((img) => img.id !== imageId))
      if (selectedImage === imageId) {
        setSelectedImage(null)
        setNewImage(null)
        setNewImagePreview(null)
      }
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 w-full max-w-md">
          <div className="text-center mb-6">
            <Lock className="h-12 w-12 text-green-500 mx-auto" />
            <h1 className="text-2xl font-bold text-white mt-4">Área Administrativa</h1>
            <p className="text-gray-400 mt-2">Digite a senha para acessar</p>
          </div>

          {error && <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-md mb-4">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-300 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/60 border border-green-500/30 rounded-md p-3 text-white focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <Button
              type="submit"
              variant="green"
              className="w-full"
            >
              Entrar
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="bg-black/80 backdrop-blur-sm border-b border-green-500/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Painel Administrativo</h1>
            <Button
              onClick={() => setIsAuthenticated(false)}
              variant="destructive"
            >
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-white mb-4">Imagens do Site</h2>
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 h-[70vh] overflow-y-auto">
              <div className="space-y-4">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${
                      selectedImage === image.id ? "bg-green-500/20 border border-green-500" : "hover:bg-black/40"
                    }`}
                    onClick={() => handleImageSelect(image.id)}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 relative rounded-md overflow-hidden">
                        <Image src={image.path || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                      <span className="ml-3 text-gray-300">{image.alt}</span>
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleImageDelete(image.id)
                      }}
                      variant="ghost"
                      className="text-red-500 hover:text-red-400 p-0 h-auto"
                      size="icon"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">Editar Imagem</h2>
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              {selectedImage ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {images.find((img) => img.id === selectedImage)?.alt}
                    </h3>
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={newImagePreview || images.find((img) => img.id === selectedImage)?.path || ""}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Carregar Nova Imagem</label>
                      <div className="flex items-center">
                        <label className="flex-1">
                          <div className="border border-green-500/30 rounded-md p-4 text-center cursor-pointer hover:bg-green-500/10 transition-all">
                            <Upload className="h-6 w-6 text-green-500 mx-auto mb-2" />
                            <span className="text-gray-300">Clique para selecionar um arquivo</span>
                          </div>
                          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                        </label>
                      </div>
                    </div>

                    {newImage && (
                      <Button
                        onClick={handleImageUpdate}
                        variant="green"
                        className="w-full flex items-center justify-center"
                      >
                        <Save className="h-5 w-5 mr-2" />
                        Salvar Alterações
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="border border-green-500/30 rounded-full p-4 inline-block mb-4 hover:bg-green-500/10 transition-all">
                    <Image src="/images/logo.png" alt="Logo" width={80} height={80} className="opacity-50" />
                  </div>
                  <p className="text-gray-400">Selecione uma imagem para editar</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
