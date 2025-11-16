import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  image: string;
  position?: "center" | "left" | "right" | "top" | "bottom";
  align?: "center" | "left" | "right"; // NEW
}

export function PageHeader({
  title,
  image,
  position = "center",
  align = "center",
}: PageHeaderProps) {
  const textAlign =
    align === "left"
      ? "text-left md:pl-16"
      : align === "right"
      ? "text-right md:pr-16"
      : "text-center";

  const justify =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <section className="relative h-[320px] md:h-[420px] flex items-center overflow-hidden rounded-2xl shadow-xl">
      {/* Background Image */}
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover object-${position}`}
      />

      {/* Gradient Overlay — Modern Middle Eastern Gold + Sand */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#FEA537]/60 to-black/80" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FEA537]/10 to-transparent mix-blend-overlay" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 px-6 w-full ${textAlign} flex ${justify}`}
      >
        <h1
          className="
            font-extrabold
            text-4xl md:text-6xl
            text-white drop-shadow-[0_6px_15px_rgba(0,0,0,0.6)]
            tracking-wide
          "
          style={{ fontFamily: "var(--font-arabic, 'Cairo', sans-serif)" }}
        >
          {title}
        </h1>
      </motion.div>
    </section>
  );
}
