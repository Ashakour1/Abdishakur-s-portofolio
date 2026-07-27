"use client";

import Link from "next/link";
import posthog from "posthog-js";

type ProductLinkProps = {
  href: string;
  productName: string;
  productStatus: string;
  children: React.ReactNode;
};

export function ProductLink({ href, productName, productStatus, children }: ProductLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block"
      onClick={() =>
        posthog.capture("product_visited", {
          product_name: productName,
          product_status: productStatus,
        })
      }
    >
      {children}
    </Link>
  );
}
