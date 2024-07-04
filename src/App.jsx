import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Book, MessageSquare, BarChart2 } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Conversations from "./pages/Conversations.jsx";
import Knowledge from "./pages/Knowledge.jsx";
import Analytics from "./pages/Analytics.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Knowledge",
    to: "/knowledge",
    icon: <Book className="h-4 w-4" />,
  },
  {
    title: "Conversations",
    to: "/conversations",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart2 className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="knowledge" element={<Knowledge />} />
              <Route path="conversations" element={<Conversations />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;