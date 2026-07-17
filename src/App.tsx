import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const LazyIndex = lazy(() => import("./pages/Index"));
const LazyGeladeira = lazy(() => import("./pages/Geladeira"));
const LazyLavaESeca = lazy(() => import("./pages/LavaESeca"));
const LazyNotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SpeedInsights />
      <Analytics />
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen w-full flex flex-col items-center justify-center bg-primary text-primary-foreground gap-3">
            <span className="w-10 h-10 rounded-full border-4 border-accent border-t-transparent animate-spin" />
            <p className="text-sm font-semibold tracking-wide">Carregando...</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<LazyIndex />} />
            <Route path="/geladeira" element={<LazyGeladeira />} />
            <Route path="/lava-e-seca" element={<LazyLavaESeca />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<LazyNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
