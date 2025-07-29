"use client"

import { useState, useEffect } from "react"

export default function SamAsghariLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const carouselItems = [
    {
      image: "/images/sam1.jpg",
      title: "Editorial Fashion",
      subtitle: "Vogue Magazine Feature",
    },
    {
      image: "/images/sam2.jpg",
      title: "Luxury Campaign",
      subtitle: "International Brand",
    },
    {
      image: "/images/sam3.jpg",
      title: "Artistic Portrait",
      subtitle: "Fine Art Collection",
    },
    {
      image: "/images/sam4.jpg",
      title: "Fashion Week",
      subtitle: "Milan Runway",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [carouselItems.length])

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-[#141f1991] backdrop-blur-md border-b border-white/10 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold tracking-tight text-white">
              Sam <span className="font-light text-gray-300">Asghari</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium text-white hover:text-gray-300 transition-all duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-white hover:text-gray-300 transition-all duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-sm font-medium text-white hover:text-gray-300 transition-all duration-300 relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-white hover:text-gray-300 transition-all duration-300 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-white hover:text-gray-300 transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-6 border-t border-white/20 mt-4 pt-6">
              <div className="flex flex-col space-y-6">
                <button
                  onClick={() => {
                    scrollToSection('home')
                    setIsMenuOpen(false)
                  }}
                  className="text-lg font-medium text-white hover:text-gray-300 transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection('about')
                    setIsMenuOpen(false)
                  }}
                  className="text-lg font-medium text-white hover:text-gray-300 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToSection('portfolio')
                    setIsMenuOpen(false)
                  }}
                  className="text-lg font-medium text-white hover:text-gray-300 transition-colors text-left"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => {
                    scrollToSection('services')
                    setIsMenuOpen(false)
                  }}
                  className="text-lg font-medium text-white hover:text-gray-300 transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact')
                    setIsMenuOpen(false)
                  }}
                  className="text-lg font-medium text-white hover:text-gray-300 transition-colors text-left"
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact')
                    setIsMenuOpen(false)
                  }}
                  className="bg-white text-black px-6 py-3 text-center font-medium hover:bg-gray-200 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section id="home" className="h-screen relative overflow-hidden">
        <div className="relative h-full w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full min-w-full">
                <div className="relative h-full w-full">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-16 md:bottom-20 left-4 md:left-8 lg:left-16 text-white max-w-xs md:max-w-2xl">
                    <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">{item.title}</h3>
                    <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-8">{item.subtitle}</p>
                    <button
                      onClick={() => scrollToSection('portfolio')}
                      className="inline-flex items-center bg-white text-black px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      View Portfolio
                      <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white w-6 md:w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Carousel Navigation */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselItems.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="pt-32 lg:pt-40 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-medium tracking-wider uppercase text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                    Professional Model
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
                  Sam
                  <br />
                  <span className="text-gray-400 font-light">Asghari</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed">
                  Crafting visual stories through elegance, sophistication, and artistic expression
                </p>
              </div>

              <div className="space-y-8">
                <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
                  Award-winning model specializing in high-fashion editorial, luxury brand campaigns, and artistic
                  collaborations. Every frame tells a story of passion, professionalism, and creative excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('portfolio')}
                    className="group bg-black text-white px-8 py-4 text-center font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="flex items-center justify-center">
                      View Portfolio
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group border-2 border-black px-8 py-4 text-center font-medium hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center">
                      Let&apos;s Collaborate
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-gray-600 text-sm uppercase tracking-wider">Projects</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2">25+</h3>
                  <p className="text-gray-600 text-sm uppercase tracking-wider">Brands</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2">5+</h3>
                  <p className="text-gray-600 text-sm uppercase tracking-wider">Years</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/images/sam5.jpg"
                    alt="Sam Asghari - Professional Model"
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-black rounded-full opacity-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-300 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-medium tracking-wider uppercase text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                    About Me
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Passion Meets
                  <br />
                  <span className="text-gray-400">Professionalism</span>
                </h2>
                <div className="w-24 h-1 bg-black rounded-full"></div>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  With over 5 years of experience in the modeling industry, I have collaborated with world-renowned
                  photographers, fashion designers, and luxury brands to create compelling visual narratives that
                  resonate globally.
                </p>
                <p className="text-lg leading-relaxed">
                  My approach seamlessly blends technical precision with creative intuition, ensuring every project
                  delivers exceptional results that exceed expectations and push creative boundaries.
                </p>
                <p className="text-lg leading-relaxed">
                  Based internationally, I work with clients worldwide and am always excited to embark on new creative
                  journeys that challenge conventional perspectives.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-gray-600 font-medium">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-3xl font-bold mb-2">25+</h3>
                  <p className="text-gray-600 font-medium">Brand Collaborations</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="/images/sam6.jpg"
                    alt="Sam Asghari modeling"
                    className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
                  />
                </div>
                <div className="aspect-square bg-gray-200 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="/images/sam7.jpg"
                    alt="Sam Asghari artistic shot"
                    className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square bg-gray-200 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="/images/sam8.jpg"
                    alt="Sam Asghari commercial"
                    className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
                  />
                </div>
                <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="/images/sam9.jpg"
                    alt="Sam Asghari full body"
                    className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-wider uppercase text-gray-500 bg-white px-4 py-2 rounded-full">
                Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gray-400">Work</span>
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated selection of my recent work showcasing versatility, artistic vision, and collaborative
              excellence across various creative disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={`/images/sam${item}.jpg`}
                    alt={`Portfolio image ${item}`}
                    className="object-cover group-hover:scale-110 transition-transform duration-700 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-lg font-bold mb-1">Project {item}</h3>
                    <p className="text-sm text-gray-200">Editorial Collection</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              View Full Portfolio
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium tracking-wider uppercase text-gray-400 bg-white/10 px-4 py-2 rounded-full">
                Services
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Creative <span className="text-gray-400">Services</span>
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional modeling services tailored to bring your creative vision to life with precision, artistry,
              and uncompromising quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center space-y-6 p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-colors duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Fashion Modeling</h3>
              <p className="text-gray-300 leading-relaxed">
                High-fashion editorial shoots, runway shows, and luxury brand campaigns with a focus on elegance,
                sophistication, and cutting-edge style direction.
              </p>
            </div>

            <div className="group text-center space-y-6 p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-colors duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Commercial Work</h3>
              <p className="text-gray-300 leading-relaxed">
                Product photography, advertising campaigns, and brand representation across diverse industries with
                strategic marketing focus and commercial appeal.
              </p>
            </div>

            <div className="group text-center space-y-6 p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-colors duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Artistic Projects</h3>
              <p className="text-gray-300 leading-relaxed">
                Creative collaborations, fine art photography, and experimental visual storytelling that pushes
                boundaries and explores new artistic territories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-medium tracking-wider uppercase text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Let&apos;s Create
                  <br />
                  <span className="text-gray-400">Together</span>
                </h2>
                <div className="w-24 h-1 bg-black rounded-full"></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to bring your creative vision to life? Let&apos;s discuss your next project and explore the
                  possibilities of exceptional visual storytelling.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-gray-600">ali.asghari@email.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Location</p>
                    <p className="text-gray-600">Available Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6 pt-8">
                <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">
                  Instagram
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">
                  LinkedIn
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">
                  Behance
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl">
              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-3">
                    Project Type
                  </label>
                  <select
                    id="project"
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-300"
                  >
                    <option>Fashion Modeling</option>
                    <option>Commercial Work</option>
                    <option>Artistic Project</option>
                    <option>Brand Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 resize-none"
                    placeholder="Tell me about your project vision, timeline, and requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold mb-2">
                Sam <span className="font-light text-gray-400">Asghari</span>
              </div>
              <p className="text-gray-400">Professional Model & Creative Artist</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Behance
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="text-gray-400">© {new Date().getFullYear()} Sam Asghari. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
