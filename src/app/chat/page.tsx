"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SendHorizontal, Bot, User, Loader2, MapPin } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

const QUICK_PROMPTS = [
  "How do I set up Alipay as a foreigner?",
  "What apps do I need before arriving in China?",
  "How does WeChat Pay work for tourists?",
  "Best way to get a SIM card in China?",
  "How to use DiDi (Chinese Uber)?",
  "Plan a 5-day Shanghai itinerary for me",
];

function ChatInner() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";

  const [input, setInput] = useState(initialQ);
  const { messages, sendMessage, status, error } = useChat({
    transport: new TextStreamChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (initialQ) inputRef.current?.focus();
  }, [initialQ]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input.trim();
    setInput("");
    sendMessage({ text });
  };

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto">
        {isEmpty ? (
          /* Welcome screen */
          <div className="flex flex-col items-center justify-center h-full px-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mb-5 glow-teal-sm">
              <MapPin className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">ChinaPass AI Guide</h1>
            <p className="text-gray-400 text-sm max-w-sm mb-10">
              Your expert on Chinese apps, payments, transport, food, and travel tips. Ask me anything.
            </p>

            {/* Quick prompts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl w-full">
              {QUICK_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => handleQuickPrompt(p)}
                  className="text-left px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#00d4ff]/20 text-sm text-gray-300 hover:text-white transition-all"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Messages */
          <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col gap-6">
            {messages.map((msg) => {
              const textContent = msg.parts
                .filter((p): p is { type: "text"; text: string } => p.type === "text")
                .map((p) => p.text)
                .join("");

              return (
                <div
                  key={msg.id}
                  className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "flex-row")}
                >
                  {/* Avatar */}
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center",
                      msg.role === "user"
                        ? "bg-[#00d4ff]/10 border border-[#00d4ff]/20"
                        : "bg-white/5 border border-white/10"
                    )}
                  >
                    {msg.role === "user" ? (
                      <User className="w-4 h-4 text-[#00d4ff]" />
                    ) : (
                      <Bot className="w-4 h-4 text-gray-400" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-white rounded-tr-sm"
                        : "bg-white/[0.04] border border-white/8 text-gray-100 rounded-tl-sm"
                    )}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-black/30 prose-pre:border prose-pre:border-white/10 prose-code:text-[#00d4ff] prose-code:bg-[#00d4ff]/10 prose-code:px-1 prose-code:rounded prose-a:text-[#00d4ff] prose-strong:text-white">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {textContent}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap">{textContent}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-gray-400" />
                </div>
                <div className="bg-white/[0.04] border border-white/8 rounded-2xl rounded-tl-sm px-4 py-3">
                  <Loader2 className="w-4 h-4 text-[#00d4ff] animate-spin" />
                </div>
              </div>
            )}

            {error && (
              <div className="px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-sm">
                Something went wrong. Make sure your ANTHROPIC_API_KEY is set in .env.local
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="border-t border-white/5 bg-[#0a0f1e]/90 backdrop-blur-sm px-4 py-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about traveling in China…"
                rows={1}
                className="w-full resize-none rounded-xl bg-white/[0.05] border border-white/10 focus:border-[#00d4ff]/40 focus:outline-none px-4 py-3 text-sm text-white placeholder:text-gray-500 max-h-32 overflow-y-auto transition-colors"
                style={{ minHeight: "46px" }}
              />
            </div>
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#00d4ff] text-[#0a0f1e] flex items-center justify-center hover:bg-[#00d4ff]/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <SendHorizontal className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-gray-600 text-xs mt-2 text-center">
            Enter to send · Shift+Enter for new line
          </p>
        </form>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-[calc(100vh-56px)]">
        <Loader2 className="w-6 h-6 text-[#00d4ff] animate-spin" />
      </div>
    }>
      <ChatInner />
    </Suspense>
  );
}
