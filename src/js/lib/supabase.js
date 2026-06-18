// ============================================================
// lib/supabase.js — SATU pintu akses client Supabase.
// Memakai supabase-js global (window.supabase) yang di-load via CDN di index.html.
// Kredensial diambil dari ../config.js (publishable key — aman di client).
//
// Client dibuat sekali lalu dipakai ulang (singleton).
// ============================================================

import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "../config.js";

let client = null;

export function getClient() {
  if (client) return client;
  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    throw new Error("Library Supabase belum termuat.");
  }
  client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  return client;
}
