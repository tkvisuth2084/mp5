"use client"

import createNewLink from "@/lib/createNewLink";
import { useState } from "react";
import { LinkProps } from "@/types";
import { Button, TextField } from "@mui/material";

export default function Shorten({ append }: { append: (newLink: LinkProps) => void }) {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");

    return (
        <form
            style={{ width: "400px", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
            onSubmit={(e) => {
                e.preventDefault();
                createNewLink(url, alias)
                    .then((link) => {
                        if (!link) {
                            setError("Invalid URL or alias already taken!");
                            return;
                        }
                        setError("");
                        setUrl("");
                        setAlias("");
                        append(link);
                    })
                    .catch((err) => console.error(err));
            }}
        >
            <TextField
                variant="outlined"
                sx={{ width: "100%" }}
                label="URL (https://...)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <TextField
                variant="outlined"
                sx={{ width: "100%" }}
                label="Alias (e.g. my-link)"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            {error && <p style={{ color: "red", fontSize: "0.875rem" }}>{error}</p>}
            <Button type="submit" variant="contained"
                    sx={{ backgroundColor: "#ec4899", "&:hover": { backgroundColor: "#db2777" } }}>
                Shorten!
            </Button>
        </form>
    );
}
