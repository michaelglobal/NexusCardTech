"use client";

import { useState, FormEvent } from "react";
import { getSupabase } from "@/lib/supabase";

export default function WaitingListForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const { error } = await getSupabase().from("waiting_list_sign_up").upsert(
      {
        email: email.trim().toLowerCase(),
        name: name.trim() || null,
        source: "website",
      },
      { onConflict: "email" }
    );

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setEmail("");
    setName("");
  }

  if (status === "success") {
    return (
      <div className="bg-surface border border-status-green/30 rounded-xl p-8 text-center max-w-md mx-auto">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-semibold mb-2">You&apos;re on the list!</h3>
        <p className="text-text-secondary text-sm">
          We&apos;ll notify you when TITAN is ready. Thank you for your
          interest.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-accent text-sm underline underline-offset-2"
        >
          Sign up another email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface border border-divider rounded-xl p-8 max-w-md mx-auto"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1.5 text-text-secondary"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-surface2 border border-divider rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1.5 text-text-secondary"
          >
            Name (optional)
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-surface2 border border-divider rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm mt-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-6 bg-accent text-background font-semibold py-3.5 rounded-xl text-base hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Join the Waiting List"}
      </button>
    </form>
  );
}
