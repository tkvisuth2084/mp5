"use client";

import { LinkProps } from "@/types";
import { useState } from "react";
import Shorten from "./shorten";

export default function DisplayLink() {
    const [links, setLinks] = useState<LinkProps[]>([]);

    function append(newLink: LinkProps) {
        setLinks([newLink, ...links]);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <Shorten append={append} />
            {links.map((link) => (
                <div key={link.alias} style={{ width: "400px", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
                    <p style={{ color: "#ec4899", marginBottom: "0.5rem" }}>/{link.alias}</p>
                    <button
                        onClick={() => navigator.clipboard.writeText(`${window.location.origin}/${link.alias}`)}
                        style={{ cursor: "pointer", color: "#ec4899" }}
                    >
                        Copy URL
                    </button>
                </div>
            ))}
        </div>
    );
}

