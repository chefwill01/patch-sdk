// ============================================================================
// PATCH SDK - Main Entry Point
// ============================================================================
// This file exports all Patch SDK functionality.
// 
// IMPORT PATTERNS:
// - Client components: import { PatchProvider, useThreads, ... } from 'patch-sdk'
// - Server components: import { PatchAuthHandler } from 'patch-sdk'
// ============================================================================

// ----------------------------------------------------------------------------
// CLIENT EXPORTS
// ----------------------------------------------------------------------------
// These are safe to use in client components (React components that run in the browser)

// Main provider component - automatically fetches JWT and handles authentication
export { PatchProvider } from "./package/src/PatchProvider";

// Client infrastructure
export * from "./package/src/client/PatchClient"
export * from "./package/src/client/PatchClientProvider"

// Hooks
export * from "./package/src/client/hooks/useThreads"
export * from "./package/src/client/hooks/useMessages"
export * from "./package/src/client/hooks/useOrganization"
export * from "./package/src/client/hooks/useSendMessage"

// ----------------------------------------------------------------------------
// SERVER EXPORTS
// ----------------------------------------------------------------------------
// These should only be used in server-side code (API routes, server components, etc.)

// Server-side auth handler - generates JWTs for Patch authentication
// Use this in your API route: /api/patch/auth
export { PatchAuthHandler } from "./package/src/server/PatchAuthHandler"
