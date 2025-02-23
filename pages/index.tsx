"use client"
import Navbar from '../components/Navbar';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="w-full h-screen">
        <Spline
          scene="https://prod.spline.design/JHr8q38Fbg9Otdbe/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </main>
      {/* <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Welcome to CyberBear</h1>
      </div> */}
    </div>
  );
}
