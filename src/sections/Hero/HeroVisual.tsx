import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import {
  Sparkles,
  Bot,
  TrendingUp,
  ShieldCheck,
  Palette,
  Award,
  BookOpen,
  Compass,
  Zap,
} from 'lucide-react';
import { useTheme } from '@/context/useTheme';

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { actualTheme } = useTheme();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // 3D Three.js WebGL Scene Initialization
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Core Geometries
    const isDark = actualTheme === 'dark';
    const coreColor = isDark ? 0x8b5cf6 : 0x5b36f5;
    const outerColor = isDark ? 0xffb84d : 0xd97706;

    // Inner Glossy 3D Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.0, 2);
    const coreMat = new THREE.MeshPhongMaterial({
      color: coreColor,
      emissive: isDark ? 0x2e1065 : 0x1e1b4b,
      shininess: 90,
      flatShading: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Outer 3D Wireframe Cage
    const outerGeo = new THREE.IcosahedronGeometry(1.45, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: outerColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.35 : 0.45,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerMesh);

    // 3D Orbiting Particle Ring
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.9 + Math.random() * 0.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.6;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: isDark ? 0xa78bfa : 0x4c1d95,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 3D Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, isDark ? 1.5 : 2.2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x60a5fa, isDark ? 0.8 : 1.2);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // Mouse Parallax Track
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      coreMesh.rotation.x += 0.005;
      coreMesh.rotation.y += 0.008;

      outerMesh.rotation.x -= 0.003;
      outerMesh.rotation.y -= 0.006;

      particleSystem.rotation.y += 0.002;

      scene.rotation.x = mouseY * 0.4;
      scene.rotation.y = mouseX * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      coreGeo.dispose();
      coreMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [actualTheme]);

  const getNodeIcon = (label: string) => {
    switch (label) {
      case 'AI Learning':
        return <Bot className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Growth':
        return <TrendingUp className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'Confidence':
        return <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Creativity':
        return <Palette className="w-4 h-4 text-pink-600 dark:text-pink-400" />;
      case 'Future Skills':
        return <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'Progress':
        return <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'Learning':
        return <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Guidance':
        return <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    }
  };

  const nodePositions = [
    { label: 'AI Learning', pos: 'top-0 left-1 sm:top-2 sm:left-4', color: 'from-purple-600 to-indigo-700' },
    { label: 'Growth', pos: 'top-0 right-1 sm:top-4 sm:right-4', color: 'from-amber-600 to-orange-600' },
    { label: 'Confidence', pos: 'top-1/2 right-0 sm:-right-4 transform -translate-y-1/2', color: 'from-emerald-600 to-teal-600' },
    { label: 'Creativity', pos: 'top-1/2 left-0 sm:-left-4 transform -translate-y-1/2', color: 'from-pink-600 to-rose-600' },
    { label: 'Future Skills', pos: 'bottom-0 left-1 sm:bottom-4 sm:left-6', color: 'from-cyan-600 to-blue-700' },
    { label: 'Progress', pos: 'bottom-0 right-1 sm:bottom-4 sm:right-6', color: 'from-violet-600 to-purple-700' },
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg sm:max-w-xl mx-auto flex items-center justify-center p-2 sm:p-4">
      {/* 3D WebGL Canvas Backdrop */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Central Interactive Core Node */}
      <motion.div
        whileHover={{ scale: 1.06, rotateZ: 2 }}
        className="relative z-20 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-purple-700 via-indigo-700 to-purple-900 p-1 shadow-[0_20px_50px_rgba(91,54,245,0.35)] cursor-pointer flex flex-col items-center justify-center text-center group"
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 p-4 flex flex-col items-center justify-center border-2 border-purple-400/60 dark:border-purple-500/40 shadow-inner">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 p-2 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 shadow-md border-2 border-amber-400/50">
            <img
              src="https://cdn.studytainment.in/images/favicon(1).png"
              alt="Studytainment Favicon Symbol"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-400">
            STUDYTAINMENT
          </span>
          <span className="text-sm sm:text-base font-black text-slate-950 dark:text-white tracking-tight leading-none mt-0.5">
            Connected Growth
          </span>
          <span className="text-[10px] text-slate-800 dark:text-slate-300 font-extrabold mt-1">
            {activeNode ? `${activeNode}` : 'Human-Centered Hub'}
          </span>
        </div>
      </motion.div>

      {/* Floating Concept Nodes with 3D Depth Shadows */}
      {nodePositions.map((node, index) => {
        const isHovered = activeNode === node.label;
        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: isHovered ? 1.1 : 1,
              y: [0, index % 2 === 0 ? -10 : 10, 0],
            }}
            transition={{
              y: {
                duration: 3.5 + (index % 3),
                repeat: Infinity,
                ease: 'easeInOut',
              },
              scale: { duration: 0.2 },
            }}
            onMouseEnter={() => setActiveNode(node.label)}
            onMouseLeave={() => setActiveNode(null)}
            className={`absolute ${node.pos} z-30 cursor-pointer`}
          >
            <div className="bg-white dark:bg-slate-900 px-2.5 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 shadow-[0_15px_35px_-5px_rgba(15,23,42,0.18)] dark:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6)] border-2 border-slate-300 dark:border-slate-800 hover:border-purple-600 transition-all duration-300">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                {getNodeIcon(node.label)}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-black text-slate-950 dark:text-white tracking-tight whitespace-nowrap">
                  {node.label}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
