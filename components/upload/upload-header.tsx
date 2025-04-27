"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Animation variants for the upload animation container
const uploadContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// Animation for the PDF document
const pdfVariants = {
  initial: { y: 20, opacity: 0, rotate: -5 },
  animate: {
    y: -20,
    opacity: 1,
    rotate: 5,
    transition: {
      y: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      rotate: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      opacity: { duration: 0.5 },
    },
  },
};

// Animation for the upload arrow
const arrowVariants = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: -30,
    opacity: [0, 1, 0],
    transition: {
      y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
      opacity: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

// Animation for the scanning effect on the PDF
const scanVariants = {
  initial: { x: "-100%" },
  animate: {
    x: "100%",
    transition: {
      x: { duration: 1.5, repeat: Infinity, ease: "linear" },
    },
  },
};

// Animation for the floating particles
const particleVariants = (delay: number) => ({
  initial: { y: 0, opacity: 0 },
  animate: {
    y: -50,
    opacity: [0, 1, 0],
    transition: {
      y: { duration: 2, repeat: Infinity, ease: "easeOut", delay },
      opacity: { duration: 2, repeat: Infinity, ease: "easeOut", delay },
    },
  },
});

// Animation for the pulsing background circle
const pulseVariants = {
  initial: { scale: 1, opacity: 0.2 },
  animate: {
    scale: 1.2,
    opacity: 0.4,
    transition: {
      scale: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      opacity: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

// Animation variants for the heading
const headingVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation variants for the subheading
const subheadingVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
  },
};

export default function UploadHeader() {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure animations only run after mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      {/* Upload Animation */}
      {isMounted ? (
        <motion.div
          variants={uploadContainerVariants}
          initial="initial"
          animate="animate"
          className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center"
        >
          {/* Pulsing Background Circle */}
          <motion.div
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-rose-200/20 rounded-full"
          />

          {/* Floating Particles */}
          <motion.div
            variants={particleVariants(0)}
            initial="initial"
            animate="animate"
            className="absolute top-0 left-0 w-3 h-3 bg-rose-300 rounded-full"
          />
          <motion.div
            variants={particleVariants(0.5)}
            initial="initial"
            animate="animate"
            className="absolute top-2 right-2 w-2 h-2 bg-rose-400 rounded-full"
          />
          <motion.div
            variants={particleVariants(1)}
            initial="initial"
            animate="animate"
            className="absolute bottom-2 left-4 w-2 h-2 bg-rose-500 rounded-full"
          />

          {/* PDF Document Representation */}
          <motion.div
            variants={pdfVariants}
            initial="initial"
            animate="animate"
            className="relative w-12 h-16 sm:w-16 sm:h-20 bg-white border-2 border-rose-300 rounded-md shadow-lg overflow-hidden"
          >
            {/* Lines to represent text on the PDF */}
            <div className="absolute top-2 left-2 right-2 h-1 bg-rose-200 rounded" />
            <div className="absolute top-5 left-2 right-2 h-1 bg-rose-200 rounded" />
            <div className="absolute top-8 left-2 right-2 h-1 bg-rose-200 rounded" />
            {/* Scanning Effect */}
            <motion.div
              variants={scanVariants}
              initial="initial"
              animate="animate"
              className="absolute top-0 left-0 right-0 h-1 bg-rose-400/50 shadow-[0_0_10px_rgba(244,113,141,0.8)]"
            />
          </motion.div>

          {/* Upload Arrow */}
          <motion.div
            variants={arrowVariants}
            initial="initial"
            animate="animate"
            className="absolute right-2 w-6 h-6 sm:w-8 sm:h-8 text-rose-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(244,113,141,0.3)]" />
        </motion.div>
      ) : (
        // Fallback for SSR: Render a static placeholder
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-sm">Loading...</span>
        </div>
      )}

      {/* Main heading */}
      <motion.h1
        variants={isMounted ? headingVariants : {}}
        initial="initial"
        animate={isMounted ? "animate" : undefined}
        className="capitalize text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
      >
        Upload & Enhance
        <span className="relative inline-block">
          <span className="relative z-10 px-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-600 shadow-[0_0_10px_rgba(244,113,141,0.3)]">
            Your PDFs
          </span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-rose-200/30 to-rose-300/30 rotate-1 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>
        with AI
      </motion.h1>

      {/* Subheading */}
      <motion.p
        variants={isMounted ? subheadingVariants : {}}
        initial="initial"
        animate={isMounted ? "animate" : undefined}
        className="mt-2 text-lg sm:text-xl leading-relaxed text-gray-600 max-w-2xl font-medium"
      >
        Harness the power of artificial intelligence to transform your
        PDFs—extract insights, summarize content, and unlock productivity.
      </motion.p>
    </div>
  );
}
