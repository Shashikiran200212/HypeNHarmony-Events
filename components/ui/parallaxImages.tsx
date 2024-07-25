"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";

export function ParallaxScrollDemo() {
  return <ParallaxScroll items={items} />;
}

const items = [
  { src: "/parallax/1.jpg", link: "https://www.instagram.com/p/C4YDNroPT55/?hl=en" },
  { src: "/parallax/2.jpeg", link: "https://example.com/link3" },
  { src: "/parallax/3.png", link: "https://example.com/link4" },
  { src: "/parallax/4.jpg", link: "https://example.com/link5" },
  { src: "/parallax/5.jpg", link: "https://example.com/link6" },
  { src: "/parallax/6.jpg", link: "https://example.com/link7" },
  { src: "/parallax/7.jpg", link: "https://example.com/link8" },
  { src: "/parallax/8.jpeg", link: "https://example.com/link9" },
  { src: "/parallax/9.webp", link: "https://example.com/link10" },
  { src: "/parallax/1.jpg", link: "https://example.com/link12" },
  { src: "/parallax/2.jpeg", link: "https://example.com/link13" },
  { src: "/parallax/3.png", link: "https://example.com/link14" },
  { src: "/parallax/4.jpg", link: "https://example.com/link15" },
];
