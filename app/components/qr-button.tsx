"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const QrCameraButton = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const toggleCamera = async () => {
    if (open) {
      // 🚫 Apagar cámara
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream)
          .getTracks()
          .forEach((track) => track.stop());
      }
      setOpen(false);
      return;
    }

    try {
      // ✅ Encender cámara
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setOpen(true);
    } catch (err: any) {
      setError("No se pudo acceder a la cámara: " + err.message);
    }
  };

  return (
      <button
        onClick={toggleCamera}
        className="p-3 bg-primary rounded-full hover:bg-primary/80 transition-colors"
      >
        <Image
          src="/icons/qr-icon.svg"
          alt="qr"
          width={25}
          height={25}
        />
      </button>
  );
};

export default QrCameraButton;
