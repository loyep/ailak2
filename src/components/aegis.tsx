"use client";

import { useEffect, useRef } from "react";
import type IAegisWebSdk from "aegis-web-sdk";

export default function Aegis() {
  if (process.env.NODE_ENV !== "production") return null;

  const aegis = useRef<IAegisWebSdk>();

  const loadAegis = () => {
    import("aegis-web-sdk")
      .then(({ default: AegisWebSdk }) => {
        aegis.current = new AegisWebSdk({
          id: "5GqWoSe7v7obG10O1y", // 上报 id
          reportApiSpeed: true, // 接口测速
          reportAssetSpeed: true, // 静态资源测速
          spa: true, // spa 应用页面跳转的时候开启 pv 计算
        });
      })
      .catch((error) => {
        console.error("Error loading Aegis:", error);
      });
  };

  useEffect(() => {
    loadAegis();
  }, []);


  return null;
}
