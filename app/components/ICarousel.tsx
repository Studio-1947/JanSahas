"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mx-auto mt-4 px-3">
      <div
        className="relative w-full h-full"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          key={currentIndex} // Forces re-render for animation
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          fill
          className={`object-cover rounded-xl transition-all duration-700 ease-in-out
            ${
              direction === "right" ? "animate-slideLeft" : "animate-slideRight"
            }`}
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
