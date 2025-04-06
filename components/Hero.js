import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen bg-background">
      {/* Mobile Layout */}
      <div className="block md:hidden w-full h-full">
        <div className="relative flex flex-col h-full">
          <div className="relative flex-1">
            <Image
              src="/images/ricco-1.png" // Mobile-specific image
              alt="Ricco Hero 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/ricco-2.png" // Mobile-specific image
              alt="Ricco Hero 2"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/ricco-3.png" // Mobile-specific image
              alt="Ricco Hero 3"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full h-full justify-center items-center px-24">
        {/* Desktop Image: Ricco 4 combined image */}
        <div className="relative w-full h-full transform scale-90 translate-y-[-5%]">
          {" "}
          {/* Adjusted translation */}
          <Image
            src="/images/ricco-4.png" // Combined image for desktop
            alt="Ricco Combined Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
