import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Settings,
  CreditCard,
  BarChart,
  Store,
  Truck,
  Clock,
  Box
} from "lucide-react";

// export const Icons = {
//   Home,
//   Users,
//   Settings,
//   CreditCard,
//   Chart: BarChart,
//   Store,
//   Truck,
//   Clock,
//   Box,
// };

/* =======================
   DATA (EDIT THIS ONLY)
   ======================= */

const Icons = {
    CreditCard: (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect
      x="2"
      y="5"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M2 10h20"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
),

  Home: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 10.5 12 3l9 7.5V21a1.5 1.5 0 0 1-1.5 1.5H15v-6a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 16.5v6H4.5A1.5 1.5 0 0 1 3 21V10.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Chart: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 19V5m0 14h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 16l4-4 3 3 5-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Box: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3 4.5 7v10L12 21l7.5-4V7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 7 12 11l7.5-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 11v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Users: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 21a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Settings: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19.4 15a8.3 8.3 0 0 0 .1-2l2-1.2-2-3.4-2.3.6a8.2 8.2 0 0 0-1.7-1L13 4h-2L9.5 7.9a8.2 8.2 0 0 0-1.7 1L5.5 8.3l-2 3.4 2 1.2a8.3 8.3 0 0 0 .1 2l-2 1.2 2 3.4 2.3-.6c.5.4 1.1.7 1.7 1L11 20h2l1.5-3.9c.6-.3 1.2-.6 1.7-1l2.3.6 2-3.4-2-1.2Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Store: (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 9l2-5h14l2 5v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M3 9h18"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
),
Clock: (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M12 7v5l3 3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
),
Truck: (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 7h11v8H3V7Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M14 10h4l3 3v2h-7v-5Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="7.5" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="17.5" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
),

  Logout: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 17H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M20 12H10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export const SIDEBAR_NAV = [
  {
    title: "Analytics",
    items: [
      { label: "Dashboard Principal", path: "/analytics/dashboard", icon: Icons.Chart, disabled: false },
      { label: "Charts", path: "/analytics/charts", icon: Icons.Chart, disabled: false },
    ],
  },
  {
    title: "Stores",
    items: [
      { label: "Store Dashboard", path: "/stores/dashboard", icon: Icons.Store, disabled: false },
      { label: "Add Store", path: "/stores/add", icon: Icons.Store, disabled: false },
      { label: "Stores List", path: "/stores/list", icon: Icons.Store, disabled: false },
      { label: "Store Scoring (Soon)", path: "/stores/scoring", icon: Icons.Chart, disabled: true },
    ],
  },
  {
    title: "Users",
    items: [
      { label: "Users Dashboard", path: "/users/dashboard", icon: Icons.Users, disabled: false },
      { label: "Add User", path: "/users/add", icon: Icons.Users, disabled: false },
      { label: "Users List", path: "/users/list", icon: Icons.Users, disabled: false },
      { label: "Users History", path: "/users/history", icon: Icons.Clock, disabled: false },
    ],
  },
  {
    title: "Plans",
    items: [
      { label: "Plans Dashboard", path: "/plans/dashboard", icon: Icons.CreditCard, disabled: false },
      { label: "Add Plan", path: "/plans/add", icon: Icons.CreditCard, disabled: false },
      { label: "Plans List", path: "/plans/list", icon: Icons.CreditCard, disabled: false },
      { label: "Plans History", path: "/plans/history", icon: Icons.Clock, disabled: false },
    ],
  },
  {
    title: "Clients",
    items: [
      { label: "Clients Dashboard", path: "/clients/dashboard", icon: Icons.Users, disabled: false },
      { label: "Add Client", path: "/clients/add", icon: Icons.Users, disabled: false },
      { label: "Clients List", path: "/clients/list", icon: Icons.Users, disabled: false },
      { label: "Client Scoring", path: "/clients/scoring", icon: Icons.Chart, disabled: false },
    ],
  },
  {
    title: "Confirmation Agencies",
    items: [
      { label: "Confirmation Dashboard", path: "/confirmation/dashboard", icon: Icons.Box, disabled: false },
      { label: "Add Agency", path: "/confirmation/add", icon: Icons.Box, disabled: false },
      { label: "Agencies List", path: "/confirmation/list", icon: Icons.Box, disabled: false },
      { label: "Agency Scoring", path: "/confirmation/scoring", icon: Icons.Chart, disabled: false },
    ],
  },
  {
    title: "Integrations",
    items: [
      { label: "Integrations Dashboard", path: "/integrations/dashboard", icon: Icons.Settings, disabled: false },
      { label: "Add Integration", path: "/integrations/add", icon: Icons.Settings, disabled: false },
      { label: "Integrations List", path: "/integrations/list", icon: Icons.Settings, disabled: false },
    ],
  },
  {
    title: "Livraison",
    items: [
      { label: "Delivery Dashboard", path: "/livraison/dashboard", icon: Icons.Truck, disabled: false },
      { label: "Add Delivery Company", path: "/livraison/add", icon: Icons.Truck, disabled: false },
      { label: "Delivery Companies List", path: "/livraison/list", icon: Icons.Truck, disabled: false },
    ],
  },
];


export function flattenRoutes(groups) {
  return groups.flatMap((g) => g.items.map((it) => ({ label: it.label, path: it.path })));
}

/* =======================
   SIDEBAR ONLY
   ======================= */

export function Sidebar({
  groups = SIDEBAR_NAV,
  activePath,
  onNavigate,
    collapsed,
  setCollapsed,
}) {
  const [mobileOpen, setMobileOpen] = useState(false); // mobile overlay
  // const [collapsed, setCollapsed] = useState(false);  // desktop collapse
  const [openGroups, setOpenGroups] = useState(() => {
    const initial = {};
    groups.forEach((g, i) => (initial[g.title] = i === 0));
    return initial;
  });

  const sidebarWidth = collapsed ? "w-20" : "w-72";

  const toggleGroup = (title) =>
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));

  const handleNavigate = (path) => {
    onNavigate?.(path);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile open button (optional) */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 rounded-xl bg-indigo-600 px-3 py-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Open sidebar"
      >
        ☰
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <button
          aria-label="Close sidebar overlay"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          ${sidebarWidth}
          bg-white shadow-sm ring-1 ring-slate-200
          transition-[width,transform] duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        aria-label="Sidebar navigation"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-slate-200 p-4">
            {!collapsed && (
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-white shadow-sm">
                <span className="text-sm font-bold">SA</span>
            </div>
            )}


            {!collapsed && (
              <div className="min-w-0">
                <p className="text-xs text-slate-500">Compte</p>
                <p className="truncate text-sm font-semibold">Super Admin</p>
              </div>
            )}

            {/* Desktop collapse toggle */}
            <button
              onClick={() => setCollapsed((v) => !v)}
              className="ml-auto hidden md:inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-pressed={collapsed}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d={
                    collapsed
                      ? "M10 6h10M10 12h10M10 18h10M4 6h2M4 12h2M4 18h2"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Mobile close */}
            <button
              onClick={() => setMobileOpen(false)}
              className="ml-auto md:hidden inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close sidebar"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto p-3">
            <div className="space-y-2">
              {groups.map((group) => (
                <SidebarGroup
                  key={group.title}
                  title={group.title}
                  open={!collapsed && !!openGroups[group.title]}
                  canShowLabel={!collapsed}
                  onToggle={() => toggleGroup(group.title)}
                >
                  {group.items.map((item) => (
                    <Link to={item.path}>
                    <SidebarItem
                      key={item.path}
                      item={item}
                      active={activePath === item.path}
                      collapsed={collapsed}
                      onClick={() => handleNavigate(item.path)}
                    /></Link>

                  ))}
                </SidebarGroup>
                
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-slate-200 p-3">
            <SidebarItem
              item={{ label: "Logout", path: "/logout", icon: Icons.Logout }}
              active={false}
              collapsed={collapsed}
              danger
              onClick={async () =>{
                    try {
                  await fetch("https://auth.teqaconnect.com/auth/logout/", {
                    method: "POST",
                    credentials: "include", 
                  });
                } catch (err) {
                  console.log("Logout error:", err);
                }
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = "/login";
              }}
            />
          </div>
        </div>
      </aside>
    </>
  );
}

/* =======================
   SUB COMPONENTS
   ======================= */

function SidebarGroup({ title, open, canShowLabel, onToggle, children }) {
  return (
    <section className="rounded-2xl">
      {/* Group header (hidden when collapsed) */}
      <button
        type="button"
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between
          rounded-xl px-3 py-2
          text-xs font-semibold uppercase tracking-wide
          text-slate-500 hover:text-slate-700 hover:bg-slate-50
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          ${!canShowLabel ? "sr-only" : ""}
        `}
        aria-expanded={open}
      >
        <span>{title}</span>
        <Chevron
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Collapsible content */}
      <div
        className={`
          grid transition-[grid-template-rows,opacity] duration-300
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="mt-1 space-y-1">{children}</div>
        </div>
      </div>
    </section>
  );
}

function SidebarItem({ item, active, collapsed, onClick, danger = false }) {
  const Icon = item.icon;
  const isDisabled = item.disabled;

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={() => {
          if (isDisabled) {
            alert("🚀 Marketplace Livreur coming soon!");
            return;
          }
          onClick?.();
        }}
        disabled={isDisabled}
        className={`
          w-full flex items-center gap-3
          rounded-xl px-3 py-2
          text-sm font-medium
          transition duration-200
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          ${collapsed ? "justify-center" : "justify-start"}
          ${
            isDisabled
              ? "text-slate-400 cursor-not-allowed"
              : danger
              ? "text-rose-600 hover:bg-rose-50"
              : active
              ? "bg-indigo-50 text-indigo-700"
              : "text-slate-700 hover:bg-slate-50"
          }
        `}
      >
        <Icon className={`h-5 w-5 ${isDisabled ? "text-slate-400" : ""}`} />

        {!collapsed && (
          <span className="truncate flex items-center gap-2">
            {item.label}
            {isDisabled && (
              <span className="text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">
                Soon
              </span>
            )}
          </span>
        )}
      </button>
    </div>
  );
}

function Chevron({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
 export default Sidebar;

