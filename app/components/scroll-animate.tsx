"use client";

import { useEffect } from "react";

/**
 * 滚动进入动画组件
 *
 * 给子元素中的 .animate-on-scroll 元素注册 IntersectionObserver，
 * 当元素进入视口时添加 .is-visible class 触发 CSS 过渡动画。
 */
export function ScrollAnimator({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
