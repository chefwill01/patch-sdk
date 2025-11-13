import type { ReactNode } from "react";
import { PatchClientProvider } from "../client/PatchClientProvider";

interface PatchProviderProps {
    children: ReactNode;
    organizationId: string;
    token: string;
}

export async function PatchProvider({ children, organizationId, token }: PatchProviderProps) {
    if (typeof window !== "undefined") {
        throw new Error("PatchProvider must be used in a server component. It cannot be used in client components.")
    }

    const response = await fetch('https://elegant-starling-928.convex.site/verifyjwt', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizationId, token }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`JWT validation failed: ${error.error}`);
    }

    const { sessionToken } = await response.json();

    return (
        <PatchClientProvider sessionToken={sessionToken}>
            {children}
        </PatchClientProvider>
    )
}