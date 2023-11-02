"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PhotosGallery from "@/components/PhotosGallery";
import QuestionAnsware from "@/components/QuestionAnsware";
import Heading from "@/utils/Heading";
import { Application } from '@splinetool/runtime';
import React, { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/yjRX9ZYyhqAmCXh1/scene.splinecode')
      .then(() => {
        console.log('dcmm')
        document.body.style.overflow = 'auto'
      });
  }, []);
  // The empty dependency array ensures this runs after component mount

  // dampen scroll speed


  return (
    <div>
      <Heading
        title="Minh Anh + Gia Khiem"
        description="Marrying on Dec 24th, 2023, in Hanoi, Vietnam.
       Friends and families must come ヾ(・ω・*)"
        kyeword="love "
      />
      <canvas id="canvas3d"></canvas>
      <Hero />
      <PhotosGallery />
      <QuestionAnsware />
      <Footer />
    </div>
  );
}
