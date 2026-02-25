"use client";

import { useState, FormEvent } from "react";

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

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      setStatus("error");
      setErrorMsg("Configuration error. Please try again later.");
      return;
    }

    try {
      const res = await fetch(
        `${supabaseUrl}/functions/v1/waiting-list-signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${supabaseKey}`,
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            name: name.trim() || null,
          }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        let message = "Something went wrong. Please try again.";
        try {
          const data = JSON.parse(text);
          if (data.message) message = data.message;
        } catch {
          // response wasn't JSON
        }
        setStatus("error");
        setErrorMsg(message);
        return;
      }

      setStatus("success");
      setEmail("");
      setName("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-surface border border-status-green/30 rounded-xl p-6 sm:p-8 text-center max-w-md mx-auto">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-text-secondary text-xs sm:text-sm">
          Check your inbox for a welcome email. We&apos;ll notify you when TITAN
          is ready.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-accent text-xs sm:text-sm underline underline-offset-2"
        >
          Sign up another email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface border border-divider rounded-xl p-5 sm:p-8 max-w-md mx-auto"
    >
      <div className="space-y-3 sm:space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 text-text-secondary"
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
            className="w-full bg-surface2 border border-divider rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-xs sm:text-sm font-medium mb-1 sm:mb-1.5 text-text-secondary"
          >
            Name (optional)
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-surface2 border border-divider rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-xs sm:text-sm mt-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-5 sm:mt-6 bg-accent text-background font-semibold py-3 sm:py-3.5 rounded-xl text-sm sm:text-base hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Join the Waiting List"}
      </button>
    </form>
  );
}
