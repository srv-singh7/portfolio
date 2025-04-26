import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Sourav Singh
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who likes crafting clean and scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a seamless user experience .
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-red-500 to-yellow-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-yellow-500/50 text-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-yellow-500/10"
            >
              Contact Me
            </a>
          </div>
          {/* Second row: Download Resume */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/drive/folders/1M-QjzVH3pVOVMu78GuAKHPYUPYNkQC5m?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-500 to-yellow-400 text-white py-3 px-6 rounded-3xl font-medium transition hover:bg-orange-600 hover:-translate-y-0.9 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};