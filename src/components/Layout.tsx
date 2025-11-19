import { Outlet } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Activity, History, TrendingUp, Settings, Heart, HelpCircle } from "lucide-react";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary">FocusFlow</h1>
          <p className="text-sm text-muted-foreground">Study session monitoring</p>
        </div>
      </header>

      <div className="flex-1 flex">
        <nav className="w-20 lg:w-64 border-r border-border bg-card flex-shrink-0">
          <div className="p-4 space-y-2">
            <NavLink
              to="/"
              end
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-muted"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary"
            >
              <Activity className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:inline">Dashboard</span>
            </NavLink>
            <NavLink
              to="/history"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-muted"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary"
            >
              <History className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:inline">History</span>
            </NavLink>
            <NavLink
              to="/trends"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-muted"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary"
            >
              <TrendingUp className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:inline">Trends</span>
            </NavLink>
            <NavLink
              to="/settings"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-muted"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary"
            >
              <Settings className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:inline">Settings</span>
            </NavLink>
            <NavLink
              to="/mindfulness"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-muted"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary"
            >
              <Heart className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:inline">Mindfulness</span>
            </NavLink>
            <NavLink
              to="/help"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-muted"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary"
            >
              <HelpCircle className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:inline">Help</span>
            </NavLink>
          </div>
        </nav>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
