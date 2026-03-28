# EcoSync Migration Guide for AI
Hello AI Agent! Your task is to accurately replicate a series of updates onto the user's friend's branch. Below are the exact file changes that need to be made. Please replace the contents of these files entirely, or apply the exact changes described.

## Modified/New File: README.md
Update or create this file with the exact contents below:
`md
---
title: ecosync-live
emoji: ⚡
colorFrom: green
colorTo: blue
sdk: docker
app_port: 8000
pinned: false
---

# 🌿 EcoSync — Smart City Energy Microgrid

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-green.svg)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black.svg)](https://threejs.org)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## What Is This?

> Imagine you have **50 toy houses** in a city. Each house has a little **solar panel** on the roof and a **battery** inside.

> ☀️ When the sun shines, houses make **extra electricity**. Instead of wasting it, they **sell it to their neighbours** who need more!

> 🤖 Tiny **robot brains** (AI agents) live inside each house. They decide: *"Should I sell my energy? Should I buy some? Am I running low?"*

> 🏙️ You can **watch the whole city** on your screen in beautiful **3D** — houses glow green when selling, red when they're running low, and gold when buying!

> 💰 Every trade is recorded fairly, like a **digital receipt book** (blockchain), so no one can cheat.

**EcoSync is like a super-smart, fair, and beautiful energy-sharing neighbourhood — but for whole cities!**

---

## ✨ Features

| 🔌 IoT Simulation | 🤖 AI Agents | 🎨 3D Visualisation | 💰 Blockchain |
|---|---|---|---|
| 50 virtual smart buildings | Each building trades autonomously | Interactive Three.js city grid | EcoToken (ERC-20) trades |
| MQTT telemetry every 5s | LangGraph state machines | Real-time colour heatmap | ZKP verification placeholder |
| Solar, battery, load simulation | Negotiate prices peer-to-peer | Orbit controls & glow effects | Oracle-based validation |
| Grid events (clouds, failures) | Live thought logs visible | 360° camera exploration | Transparent settlement |

---
## <br>Live Website with demo: https://ecosync-nu.vercel.app/<br/>
## 🚀 Start Everything — One Command

> **This is the only command you need.** It starts the backend AND frontend together automatically.

### Option A — Single terminal (recommended)
```powershell
# From the root project folder:
npm start
```
Both services launch in the same terminal with colour-coded output.

### Option B — Separate windows
```powershell
# From the root project folder:
.\start.ps1
```
Opens two dedicated PowerShell windows (one per service) and waits for the backend to boot before starting the frontend.

### Option C — Frontend only (backend auto-starts)
```powershell
cd app
npm run dev
```
The Vite dev server automatically spawns the Python backend in the background. Stopping Vite also stops the backend.

### Option D — Backend only (API + AI auto-start)
```powershell
cd backend
.\venv\Scripts\python.exe main.py --buildings 50
```
The API server and AI agents start automatically — no extra flags needed.

---

## 🌐 Access Links (once running)

| Service | URL |
|---|---|
| **Frontend** (3D dashboard) | http://localhost:5173 |
| **Backend API** | http://localhost:8000 |
| **API Docs** (Swagger) | http://localhost:8000/docs |
| **WebSocket** (live updates) | ws://localhost:8000/ws |

---

## 🏗️ How It's Built

```
┌─────────────────────────────────────────────────────────────────┐
│           FRONTEND  (React + Three.js)  → localhost:5173         │
│  3D City  │  Analytics Charts  │  Live Agent Terminal Feed       │
└─────────────────────────┬───────────────────────────────────────┘
                          │  WebSocket / HTTP
┌─────────────────────────▼───────────────────────────────────────┐
│           BACKEND  (FastAPI)  → localhost:8000                   │
│  REST API  │  WebSocket Hub  │  MQTT Bridge                     │
└─────────────────────────┬───────────────────────────────────────┘
                          │  MQTT
┌─────────────────────────▼───────────────────────────────────────┐
│           IoT SIMULATOR  (Python / paho-mqtt)                    │
│  50 Building Simulators  │  Grid Events  │  MQTT Publisher       │
└─────────────────────────┬───────────────────────────────────────┘
                          │  Agent Messages
┌─────────────────────────▼───────────────────────────────────────┐
│           AI TRADING AGENTS  (LangGraph)                         │
│  Building Agents  │  State Machine  │  P2P Negotiation Engine    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📦 First-Time Setup

### Prerequisites
- **Python 3.9+**
- **Node.js 18+**
- **MQTT Broker** (Mosquitto via Docker is easiest)

### 1. Start an MQTT Broker
```bash
docker run -d -p 1883:1883 eclipse-mosquitto:2
```

### 2. Set Up the Backend
```bash
cd backend
python -m venv venv
.\venv\Scripts\pip install -r requirements.txt
```

### 3. Set Up the Frontend
```bash
cd app
npm install
```

### 4. Install Root Tooling
```bash
# Back in the project root:
npm install
```

Now you're ready — just run `npm start` from the root! 🎉

---

## 📁 Project Structure

```
/EcoSync/
├── 📄 package.json          ← Root: npm start launches everything
├── 📄 start.ps1             ← PowerShell: separate window per service
├── 📄 docker-compose.yml    ← Full Docker stack (alternative)
│
├── app/                     ← React Frontend (Three.js + Recharts)
│   ├── src/components/      ← UI components
│   ├── vite.config.ts       ← Auto-spawns backend on npm run dev
│   └── package.json
│
├── backend/                 ← Python Backend
│   ├── main.py              ← Entry point (API + AI start automatically)
│   ├── api/main.py          ← FastAPI server + WebSocket hub
│   ├── iot_simulator/       ← 50-building simulation
│   ├── ai_orchestration/    ← LangGraph AI trading agents
│   ├── contracts/           ← Solidity smart contracts
│   └── requirements.txt
│
└── config/                  ← Docker / Nginx / Mosquitto configs
```

---

## 📡 API Quick Reference

| Endpoint | Method | What It Does |
|---|---|---|
| `/api/buildings` | GET | All 50 buildings' live data |
| `/api/buildings/{id}` | GET | One building's data |
| `/api/market/status` | GET | Price, sellers, buyers, critical count |
| `/api/grid/events` | GET | Recent grid events |
| `/api/grid/event` | POST | Trigger cloud cover / grid failure |
| `/api/trade` | POST | Execute a manual P2P trade |
| `/api/analytics/summary` | GET | Grid efficiency summary |
| `/api/agents/logs` | GET | AI agent thought logs |
| `/api/trades` | GET | Recent completed trades |
| `/ws` | WebSocket | Real-time stream of everything above |

---

## 🎮 Demo Tips (Hackathon Ready!)

1. Open the **3D city** — buildings animate in real-time 🏙️
2. Watch the **terminal feed** — AI agents negotiate live 🤖
3. Trigger a **cloud cover** event and watch solar output drop ☁️
4. See **critical buildings** (red) get rescued by their neighbours ❤️
5. Check **analytics** — compare EcoSync efficiency vs. a traditional grid 📊

```bash
# Trigger cloud cover (80% solar reduction for 30s)
curl -X POST http://localhost:8000/api/grid/event \
  -H "Content-Type: application/json" \
  -d '{"event_type": "cloud_cover", "intensity": 0.8, "duration": 30}'
```

---

## 🔮 What's Next?

- [ ] Real Raspberry Pi + sensor hardware integration
- [ ] ML price prediction
- [ ] Full ZKP energy proof implementation
- [ ] Mobile app for building managers
- [ ] Carbon credit tracking
- [ ] Support for 1,000+ buildings
- [ ] Live weather API integration

---

## 📄 License

MIT — see [LICENSE](LICENSE)

---

<p align="center">
  <strong>🌿 EcoSync — Sharing Energy, Powering the Future</strong><br/>
  <a href="./BACKEND_README.md">Backend Docs</a> •
  <a href="./docker-compose.yml">Docker Setup</a> •
  <a href="http://localhost:8000/docs">API Docs (local)</a>
</p>

`

## Modified/New File: app/package.json
Update or create this file with the exact contents below:
`json
{
  "name": "my-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.562.0",
    "maplibre-gl": "^5.21.1",
    "next-themes": "^0.4.6",
    "react": "^19.2.0",
    "react-day-picker": "^9.13.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.70.0",
    "react-resizable-panels": "^4.2.2",
    "react-router-dom": "^7.13.1",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "three": "^0.183.2",
    "vaul": "^1.1.2",
    "zod": "^4.3.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.19",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.4",
    "vite": "^7.2.4"
  }
}

`

## Modified/New File: app/src/App.tsx
Update or create this file with the exact contents below:
`tsx
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { 
  Zap, 
  Activity, 
  TrendingUp, 
  Battery, 
  Sun, 
  Cloud, 
  AlertTriangle,
  Server,
  Cpu,
  Menu,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { CityGrid } from '@/components/threejs/CityGrid';
import { AnalyticsDashboard } from '@/components/dashboard/AnalyticsDashboard';
import { LogTerminal } from '@/components/terminal/LogTerminal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useWeather } from '@/hooks/useWeather';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useLocation } from 'react-router-dom';
import type { 
  BuildingTelemetry, 
  AgentLog, 
  AnalyticsSummary, 
  MarketStatus,
  GridEvent 
} from '@/types';
import './App.css';

// WebSocket connection hook
function useWebSocket(url: string) {
  const [connected, setConnected]     = useState(false);
  const [buildings, setBuildings]     = useState<BuildingTelemetry[]>([]);
  const [logs, setLogs]               = useState<AgentLog[]>([]);
  const [gridEvents, setGridEvents]   = useState<GridEvent[]>([]);
  const wsRef                         = useRef<WebSocket | null>(null);

  // --- Batched building-update buffer ----------------------------------------
  // We accumulate telemetry updates in a ref and flush them at most once per
  // animation frame via requestAnimationFrame.  This prevents a React re-render
  // for every single MQTT packet (which can arrive many times per second).
  const pendingUpdatesRef = useRef<Map<number, BuildingTelemetry>>(new Map());
  const rafPendingRef     = useRef<number | null>(null);

  const flushBuildingUpdates = useCallback(() => {
    rafPendingRef.current = null;
    const updates = pendingUpdatesRef.current;
    if (updates.size === 0) return;
    pendingUpdatesRef.current = new Map();
    setBuildings(prev => {
      const next = [...prev];
      updates.forEach((data, id) => {
        const idx = next.findIndex(b => b.building_id === id);
        if (idx >= 0) next[idx] = data;
        else next.push(data);
      });
      return next;
    });
  }, []);

  const scheduleFlush = useCallback(() => {
    if (rafPendingRef.current === null) {
      rafPendingRef.current = requestAnimationFrame(flushBuildingUpdates);
    }
  }, [flushBuildingUpdates]);
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const connect = () => {
      const ws = new WebSocket(url);
      
      ws.onopen = () => {
        console.log('WebSocket connected');
        setConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          
          switch (data.type) {
            case 'telemetry':
              // Buffer update; flush once per animation frame
              pendingUpdatesRef.current.set(data.data.building_id, data.data);
              scheduleFlush();
              break;
            
            case 'agent_log':
              // Cap logs at 200 entries to prevent runaway memory growth
              setLogs(prev => prev.length >= 200
                ? [...prev.slice(-199), data.data]
                : [...prev, data.data]
              );
              break;
            
            case 'grid_event':
              setGridEvents(prev => [...prev, data.data]);
              break;
            
            case 'buildings_list':
              setBuildings(data.data);
              break;
          }
        } catch (e) {
          console.error('WebSocket message error:', e);
        }
      };

      ws.onclose = () => {
        console.log('WebSocket disconnected');
        setConnected(false);
        // Reconnect after 3 seconds
        setTimeout(connect, 3000);
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      wsRef.current = ws;
    };

    connect();

    return () => {
      // Cancel any pending animation frame flush
      if (rafPendingRef.current !== null) {
        cancelAnimationFrame(rafPendingRef.current);
      }
      wsRef.current?.close();
    };
  }, [url, scheduleFlush]);

  const sendMessage = useCallback((message: object) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
    }
  }, []);

  return { connected, buildings, logs, gridEvents, sendMessage };
}

// Global Fallback URLs
const API_URL = import.meta.env.VITE_API_URL || (typeof window !== 'undefined' && window.location.hostname.includes('vercel') ? 'https://ryanblad3-ecosync-live.hf.space' : '');

// API polling hook for analytics
function useAnalyticsPolling(interval: number = 5000) {
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [marketStatus, setMarketStatus] = useState<MarketStatus | null>(null);
  const [history, setHistory] = useState<{ time: string; load: number; generation: number; efficiency: number; traditional: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch market status FIRST to include in history
        let currentMarketPrice = 0.15;
        const marketRes = await fetch(`${API_URL}/api/market/status`);
        if (marketRes.ok) {
          const marketData = await marketRes.json();
          setMarketStatus(marketData);
          currentMarketPrice = marketData.current_price;
        }

        // Fetch analytics
        const analyticsRes = await fetch(`${API_URL}/api/analytics/summary`);
        if (analyticsRes.ok) {
          const analyticsData = await analyticsRes.json();
          setAnalytics(analyticsData);
          
          // Update history
          setHistory(prev => {
            const newPoint = {
              time: new Date().toLocaleTimeString(),
              load: analyticsData.total_load,
              generation: analyticsData.total_generation,
              efficiency: analyticsData.grid_efficiency,
              traditional: 65, // Traditional grid baseline
              price: currentMarketPrice
            };
            const updated = [...prev, newPoint];
            return updated.slice(-50); // Keep last 50 points
          });
        }
      } catch (e) {
        console.error('API fetch error:', e);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, interval);
    return () => clearInterval(intervalId);
  }, [interval]);

  return { analytics, marketStatus, history };
}

// Main App Component
function App() {
  const location = useLocation();
  const geoBuildings = location.state?.buildings || [];
  const searchLocation = location.state?.pincode || location.state?.regionName || 'New York';
  const defaultWsUrl = typeof window !== 'undefined' && window.location.hostname.includes('vercel') 
    ? 'wss://ryanblad3-ecosync-live.hf.space/ws' 
    : 'ws://localhost:8000/ws';
  const wsUrl = import.meta.env.VITE_WS_URL || defaultWsUrl;
  const { connected, buildings, logs, gridEvents } = useWebSocket(wsUrl);
  const { analytics, marketStatus, history } = useAnalyticsPolling(5000);
  const [selectedBuilding, setSelectedBuilding] = useState<BuildingTelemetry | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [terminalExpanded, setTerminalExpanded] = useState(false);
  const [activePowerSources, setActivePowerSources] = useState<Record<string, boolean>>({
    solar: true,
    wind: false,
    hydro: false,
    gas: false,
  });

  const { weatherData } = useWeather(searchLocation);

  const togglePowerSource = useCallback((source: string) => {
    setActivePowerSources(prev => ({ ...prev, [source]: !prev[source] }));
  }, []);

  // Get active grid events (memoized — only recomputes when gridEvents changes)
  const activeEvents    = useMemo(() => gridEvents.filter(e => e.active), [gridEvents]);
  const hasCloudCover   = useMemo(() => activeEvents.some(e => e.type === 'cloud_cover'),  [activeEvents]);
  const hasGridFailure  = useMemo(() => activeEvents.some(e => e.type === 'grid_failure'), [activeEvents]);
  
  const activeWeatherEvent = useMemo(() => activeEvents.find(e => e.type === 'weather_change' && e.weather), [activeEvents]);
  const activeWeather = activeWeatherEvent ? activeWeatherEvent.weather : 'CLEAR';

  const triggerEvent = async (type: string, payload: any = {}) => {
    try {
      await fetch(`${API_URL}/api/grid/event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_type: type, ...payload })
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (weatherData && weatherData.gridCondition && activeWeather !== weatherData.gridCondition) {
      // Small timeout to prevent immediate spam on mount
      const t = setTimeout(() => {
        triggerEvent('weather_change', { weather: weatherData.gridCondition });
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [weatherData?.gridCondition, activeWeather]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/40 backdrop-blur-xl border-b border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-emerald-500/30 rounded-lg blur-sm animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                EcoSync
              </h1>
              <p className="text-xs text-slate-400">Smart Energy Microgrid</p>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="hidden md:flex items-center gap-4">
            <StatusBadge 
              icon={Server} 
              label="API" 
              active={connected} 
              activeColor="text-emerald-400"
            />
            <StatusBadge 
              icon={Cpu} 
              label="AI Agents" 
              active={buildings.length > 0} 
              activeColor="text-cyan-400"
            />
            <StatusBadge 
              icon={Sun} 
              label="Solar" 
              active={!hasCloudCover} 
              activeColor="text-amber-400"
            />
            <StatusBadge 
              icon={Activity} 
              label="Grid" 
              active={!hasGridFailure} 
              activeColor="text-green-400"
            />
            
            {/* Market Control (Legacy buttons removed in favor of GodModePanel) */}
          </div>

          {/* Mobile Menu */}
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-slate-900 border-emerald-500/30">
              <SheetHeader>
                <SheetTitle className="text-emerald-400">System Status</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <MobileStatusItem 
                  icon={Server} 
                  label="WebSocket" 
                  value={connected ? 'Connected' : 'Disconnected'}
                  status={connected ? 'good' : 'bad'}
                />
                <MobileStatusItem 
                  icon={Cpu} 
                  label="Active Buildings" 
                  value={buildings.length.toString()}
                  status="good"
                />
                <MobileStatusItem 
                  icon={TrendingUp} 
                  label="Grid Efficiency" 
                  value={`${analytics?.grid_efficiency.toFixed(1) || 0}%`}
                  status={analytics && analytics.grid_efficiency > 70 ? 'good' : 'warning'}
                />
                <MobileStatusItem 
                  icon={Battery} 
                  label="Avg Battery SoC" 
                  value={`${analytics?.avg_battery_soc.toFixed(1) || 0}%`}
                  status={analytics && analytics.avg_battery_soc > 30 ? 'good' : 'warning'}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Alert Banner */}
        {(hasCloudCover || hasGridFailure) && (
          <div className={`px-4 py-2 flex items-center gap-2 ${
            hasGridFailure ? 'bg-red-500/20 border-b border-red-500/50' : 'bg-amber-500/20 border-b border-amber-500/50'
          }`}>
            <AlertTriangle className={`w-4 h-4 ${hasGridFailure ? 'text-red-400' : 'text-amber-400'}`} />
            <span className={`text-sm ${hasGridFailure ? 'text-red-300' : 'text-amber-300'}`}>
              {hasGridFailure 
                ? '⚠️ GRID FAILURE DETECTED - Buildings operating in island mode'
                : '☁️ Cloud cover event - Solar generation reduced by 80%'
              }
            </span>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          {/* 3D City View */}
          <div className="flex-1 relative">
            <CityGrid 
              buildings={buildings}
              geoBuildings={geoBuildings}
              onBuildingClick={setSelectedBuilding}
              activeWeather={activeWeather}
              activeEvents={activeEvents}
              activePowerSources={activePowerSources}
            />
            
            {/* Building Info Overlay */}
            {selectedBuilding && (
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 rounded-lg p-4 max-w-xs">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-emerald-400">
                    Building #{selectedBuilding.building_id}
                  </h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={() => setSelectedBuilding(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Type:</span>
                    <span className="capitalize">{selectedBuilding.building_type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Load:</span>
                    <span>{selectedBuilding.load.toFixed(1)} kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Solar:</span>
                    <span className="text-green-400">{selectedBuilding.solar_generation.toFixed(1)} kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Battery:</span>
                    <span className={selectedBuilding.battery_soc < 30 ? 'text-red-400' : 'text-emerald-400'}>
                      {selectedBuilding.battery_soc.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <Badge 
                      variant="outline"
                      className={`
                        ${selectedBuilding.is_selling ? 'border-green-500 text-green-400' : ''}
                        ${selectedBuilding.is_buying ? 'border-amber-500 text-amber-400' : ''}
                        ${selectedBuilding.is_critical ? 'border-red-500 text-red-400' : ''}
                        ${!selectedBuilding.is_selling && !selectedBuilding.is_buying && !selectedBuilding.is_critical ? 'border-blue-500 text-blue-400' : ''}
                      `}
                    >
                      {selectedBuilding.is_selling && 'Selling'}
                      {selectedBuilding.is_buying && 'Buying'}
                      {selectedBuilding.is_critical && 'Critical'}
                      {!selectedBuilding.is_selling && !selectedBuilding.is_buying && !selectedBuilding.is_critical && 'Balanced'}
                    </Badge>
                  </div>
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 rounded-lg p-3">
              <h4 className="text-xs font-bold text-slate-400 mb-2">Legend</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-green-500" />
                  <span>Selling Energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-amber-500" />
                  <span>Buying Energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-red-500 animate-pulse" />
                  <span>Critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-purple-500" />
                  <span>Priority Building</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-blue-500" />
                  <span>Balanced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Analytics */}
          <div className="hidden lg:flex lg:flex-col w-96 bg-slate-900/50 border-l border-emerald-500/30 overflow-y-auto overflow-x-hidden">
            <div className="p-4 min-w-0">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-emerald-500/20">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-emerald-400 leading-none">Analytics</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Real-time grid dashboard</p>
                </div>
              </div>
              <AnalyticsDashboard 
                buildings={buildings}
                analytics={analytics}
                marketStatus={marketStatus}
                history={history}
                onBuildingSelect={setSelectedBuilding}
                onTriggerEvent={triggerEvent}
                activeWeather={activeWeather}
                activePowerSources={activePowerSources}
                onTogglePowerSource={togglePowerSource}
                weatherData={weatherData}
              />
            </div>
          </div>
        </div>

        {/* Terminal Section */}
        <div 
          className={`border-t border-emerald-500/30 bg-slate-950 transition-all duration-300 ${
            terminalExpanded ? 'h-96' : 'h-48'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-emerald-500/30">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">AI Agent Logs</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setTerminalExpanded(!terminalExpanded)}
            >
              {terminalExpanded ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </Button>
          </div>
          <div className="h-[calc(100%-2.5rem)]">
            <LogTerminal logs={logs} />
          </div>
        </div>
      </main>
    </div>
  );
}

// Status Badge Component
function StatusBadge({ 
  icon: Icon, 
  label, 
  active, 
  activeColor 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
  activeColor: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <Icon className={`w-4 h-4 ${active ? activeColor : 'text-slate-500'}`} />
      <span className={active ? 'text-slate-300' : 'text-slate-500'}>{label}</span>
      <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500' : 'bg-red-500'}`} />
    </div>
  );
}

// Mobile Status Item
function MobileStatusItem({ 
  icon: Icon, 
  label, 
  value, 
  status 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  status: 'good' | 'warning' | 'bad';
}) {
  const statusColors = {
    good: 'text-green-400',
    warning: 'text-amber-400',
    bad: 'text-red-400'
  };

  return (
    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-slate-400" />
        <span className="text-sm text-slate-300">{label}</span>
      </div>
      <span className={`text-sm font-medium ${statusColors[status]}`}>{value}</span>
    </div>
  );
}

export default App;

`

## Modified/New File: app/src/components/dashboard/AnalyticsDashboard.tsx
Update or create this file with the exact contents below:
`tsx
import { useMemo, memo } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Minus, Zap, Battery, Activity, DollarSign, ShoppingCart, Store, AlertCircle, Sun, Cloud } from 'lucide-react';
import type { BuildingTelemetry, AnalyticsSummary, MarketStatus } from '@/types';
import type { WeatherData } from '@/hooks/useWeather';

interface AnalyticsDashboardProps {
  buildings: BuildingTelemetry[];
  analytics: AnalyticsSummary | null;
  marketStatus: MarketStatus | null;
  history: { time: string; load: number; generation: number; efficiency: number; price?: number }[];
  onBuildingSelect?: (building: BuildingTelemetry) => void;
  onTriggerEvent?: (type: string, payload?: any) => void;
  activeWeather?: string;
  activePowerSources?: Record<string, boolean>;
  onTogglePowerSource?: (source: string) => void;
  weatherData?: WeatherData | null;
}

const COLORS = {
  green:  '#22c55e',
  amber:  '#f59e0b',
  red:    '#ef4444',
  blue:   '#3b82f6',
  purple: '#a855f7',
  cyan:   '#06b6d4',
  emerald:'#10b981',
};

// ─── Tooltip Styles ──────────────────────────────────────────────────────────
const tooltipStyle = {
  contentStyle: {
    backgroundColor: '#0f172a',
    border: '1px solid rgba(16,185,129,0.4)',
    borderRadius: '8px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
    fontSize: '11px',
    padding: '8px 12px',
  },
  labelStyle: { color: '#94a3b8', marginBottom: 2 },
};

// ─── Metric Card ─────────────────────────────────────────────────────────────
interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  color: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  description?: string;
  glowColor?: string;
}

const MetricCard = memo(function MetricCard({
  label, value, unit, trend = 'stable', color, icon: Icon, description, glowColor,
}: MetricCardProps) {
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const trendColor = trend === 'up' ? '#22c55e' : trend === 'down' ? '#f59e0b' : '#64748b';

  return (
    <div
      className="group relative flex flex-col gap-2 rounded-xl p-4 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-default"
      style={{
        background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(2,44,34,0.3) 100%)',
        border: `1px solid ${color}30`,
        boxShadow: `0 0 0 0 ${color}00`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${glowColor || color}25, inset 0 0 20px ${color}08`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}70`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 0 transparent';
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}30`;
      }}
      title={description}
    >
      {/* Background glow orb */}
      <div
        className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
        style={{ background: color }}
      />

      {/* Header row: label + icon */}
      <div className="flex items-center justify-between gap-2 relative z-10">
        <span className="text-xs font-medium text-slate-400 leading-tight">{label}</span>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color }} />
        </div>
      </div>

      {/* Value row */}
      <div className="flex items-end gap-1.5 relative z-10 min-w-0">
        <span
          className="text-2xl font-black leading-none tracking-tight truncate"
          style={{ color }}
        >
          {value}
        </span>
        {unit && (
          <span className="text-sm font-semibold text-slate-400 leading-none mb-0.5 flex-shrink-0">
            {unit}
          </span>
        )}
      </div>

      {/* Trend row */}
      <div className="flex items-center gap-1 relative z-10">
        <TrendIcon className="w-3 h-3 flex-shrink-0" style={{ color: trendColor }} />
        <span className="text-xs font-medium" style={{ color: trendColor }}>
          {trend === 'up' ? 'Rising' : trend === 'down' ? 'Falling' : 'Stable'}
        </span>
      </div>
    </div>
  );
});

// ─── Market Stat Card ─────────────────────────────────────────────────────────
interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  color: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  description?: string;
}

const StatCard = memo(function StatCard({ label, value, sub, color, icon: Icon, description }: StatCardProps) {
  return (
    <div
      className="flex flex-col gap-2 rounded-xl p-3.5 transition-all duration-200 cursor-default"
      style={{
        background: 'rgba(15,23,42,0.8)',
        border: `1px solid ${color}25`,
      }}
      title={description}
    >
      <div className="flex items-center gap-2">
        <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
        <span className="text-xs text-slate-400 font-medium">{label}</span>
      </div>
      <div className="text-xl font-black truncate" style={{ color }}>
        {value}
      </div>
      {sub && (
        <div className="text-xs text-slate-500 truncate">{sub}</div>
      )}
    </div>
  );
});

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ title, accent = false }: { title: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      {accent && <div className="w-1 h-4 rounded-full bg-emerald-400" />}
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{title}</h3>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
import { GodModePanel } from './GodModePanel';

export function AnalyticsDashboard({
  buildings,
  analytics,
  marketStatus,
  history,
  onBuildingSelect,
  onTriggerEvent,
  activeWeather = 'CLEAR',
  activePowerSources = {},
  onTogglePowerSource,
  weatherData,
}: AnalyticsDashboardProps) {

  const statusDistribution = useMemo(() => [
    { name: 'Selling',  value: buildings.filter(b => b.is_selling).length,                                             color: COLORS.green  },
    { name: 'Buying',   value: buildings.filter(b => b.is_buying).length,                                              color: COLORS.amber  },
    { name: 'Critical', value: buildings.filter(b => b.is_critical).length,                                            color: COLORS.red    },
    { name: 'Balanced', value: buildings.filter(b => !b.is_selling && !b.is_buying && !b.is_critical).length,           color: COLORS.blue   },
  ], [buildings]);

  const batteryDistribution = useMemo(() =>
    buildings
      .map(b => ({ id: b.building_id, soc: b.battery_soc, type: b.building_type }))
      .sort((a, b) => b.soc - a.soc)
      .slice(0, 15),
    [buildings]
  );

  const buyingPower  = useMemo(() => buildings.filter(b => b.is_buying).reduce((s, b)  => s + Math.max(0, b.load - b.solar_generation), 0), [buildings]);
  const sellingPower = useMemo(() => buildings.filter(b => b.is_selling).reduce((s, b) => s + Math.max(0, b.solar_generation - b.load), 0),  [buildings]);
  const criticalBuildings = useMemo(() => buildings.filter(b => b.is_critical), [buildings]);
  const netGridFlow = analytics?.net_grid_flow ?? 0;
  const gridEff = analytics?.grid_efficiency ?? 0;

  return (
    <div className="space-y-5 pb-4">

      {/* ── Section 1: Key Metrics ── */}
      <div>
        <SectionHeader title="Grid Metrics" accent />
        <div className="grid grid-cols-2 gap-3">
          <MetricCard
            label="Grid Efficiency"
            value={`${gridEff.toFixed(1)}%`}
            trend={gridEff > 70 ? 'up' : 'down'}
            color={COLORS.emerald}
            glowColor={COLORS.emerald}
            icon={Activity}
            description="% of generated solar consumed locally rather than exported"
          />
          <MetricCard
            label="Total Generation"
            value={(analytics?.total_generation ?? 0).toFixed(0)}
            unit="kW"
            trend="up"
            color={COLORS.cyan}
            icon={Zap}
            description="Instantaneous total solar power across all buildings"
          />
          <MetricCard
            label="Net Grid Flow"
            value={Math.abs(netGridFlow).toFixed(0)}
            unit="kW"
            trend={netGridFlow < 0 ? 'down' : 'up'}
            color={netGridFlow < 0 ? COLORS.green : COLORS.amber}
            icon={TrendingUp}
            description="Net power drawn from the traditional grid. Negative = microgrid exporting."
          />
          <MetricCard
            label="Avg Battery SoC"
            value={`${(analytics?.avg_battery_soc ?? 0).toFixed(1)}%`}
            trend="stable"
            color={COLORS.purple}
            icon={Battery}
            description="Average battery state-of-charge across the entire grid"
          />
        </div>
      </div>

      {/* ── Section 1b: Live Weather ── */}
      {weatherData && (
        <div>
          <SectionHeader title={`Weather in ${weatherData.city}`} accent />
          <div className="grid grid-cols-2 gap-3">
             <MetricCard
               label="Temperature"
               value={`${weatherData.temp}`}
               unit="°C"
               color={COLORS.amber}
               icon={Sun}
               description="Real-world temperature at selected location"
               glowColor={COLORS.amber}
             />
             <MetricCard
               label="Conditions"
               value={weatherData.description}
               color={COLORS.cyan}
               icon={Cloud}
               description={`Live weather maps to Grid Event: ${weatherData.gridCondition}`}
               glowColor={COLORS.cyan}
             />
          </div>
        </div>
      )}

      {/* ── Section: God Mode Control Panel ── */}
      {onTriggerEvent && (
        <div className="mt-6 mb-2">
          <SectionHeader title="Simulation Controls" accent />
          <div
            className="rounded-xl p-4"
            style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.3)' }}
          >
            <GodModePanel 
              onTriggerEvent={onTriggerEvent} 
              activeWeather={activeWeather}
              activePowerSources={activePowerSources}
              onTogglePowerSource={onTogglePowerSource || (() => {})}
            />
          </div>
        </div>
      )}

      {/* ── Section 2: Market Stats ── */}
      {marketStatus && (
        <div>
          <SectionHeader title="Market Status" accent />
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              label="Market Price"
              value={`$${marketStatus.current_price.toFixed(3)}`}
              sub="per kWh"
              color={COLORS.emerald}
              icon={DollarSign}
              description="Current AI-negotiated dynamic price per kWh"
            />
            <StatCard
              label="Trades Today"
              value={marketStatus.trades_today.toString()}
              sub={`Vol: ${marketStatus.total_volume.toFixed(1)} kWh`}
              color={COLORS.cyan}
              icon={Activity}
              description="Number of P2P energy trades executed today"
            />
            <StatCard
              label="Active Sellers"
              value={marketStatus.active_sellers.toString()}
              sub={`${sellingPower.toFixed(1)} kW surplus`}
              color={COLORS.green}
              icon={Store}
              description="Buildings with excess energy selling on the P2P market"
            />
            <StatCard
              label="Active Buyers"
              value={marketStatus.active_buyers.toString()}
              sub={`${buyingPower.toFixed(1)} kW needed`}
              color={COLORS.amber}
              icon={ShoppingCart}
              description="Buildings with energy deficits buying on the P2P market"
            />
          </div>
        </div>
      )}

      {/* ── Critical Buildings Alert ── */}
      {criticalBuildings.length > 0 && (
        <div
          className="rounded-xl p-3.5 space-y-2.5"
          style={{
            background: 'rgba(127,29,29,0.15)',
            border: '1px solid rgba(239,68,68,0.35)',
          }}
        >
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              {criticalBuildings.length} Critical Building{criticalBuildings.length > 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {criticalBuildings.map(b => (
              <Button
                key={b.building_id}
                variant="outline"
                size="sm"
                className="h-7 text-xs font-mono border-red-500/40 bg-red-500/10 hover:bg-red-500/25 text-red-300 transition-all"
                onClick={() => onBuildingSelect?.(b)}
              >
                #{b.building_id} — {b.battery_soc.toFixed(1)}%
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* ── Section 3: Grid Performance Chart ── */}
      <div>
        <SectionHeader title="Grid Performance vs Traditional" accent />
        <div
          className="rounded-xl p-4"
          style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <div className="w-full" style={{ height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={history} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradEff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={COLORS.emerald} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={COLORS.emerald} stopOpacity={0}    />
                  </linearGradient>
                  <linearGradient id="gradTrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={COLORS.red} stopOpacity={0.25} />
                    <stop offset="95%" stopColor={COLORS.red} stopOpacity={0}    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.6)" />
                <XAxis
                  dataKey="time"
                  stroke="#475569"
                  tick={{ fontSize: 9, fill: '#64748b' }}
                  tickFormatter={v => v.split(':').slice(1).join(':')}
                  tickLine={false}
                />
                <YAxis stroke="#475569" tick={{ fontSize: 9, fill: '#64748b' }} tickLine={false} />
                <Tooltip {...tooltipStyle} />
                <Area type="monotone" dataKey="efficiency"  name="EcoSync"      stroke={COLORS.emerald} strokeWidth={2} fill="url(#gradEff)"  />
                <Area type="monotone" dataKey="traditional" name="Traditional"  stroke={COLORS.red}     strokeWidth={1.5} fill="url(#gradTrad)" strokeDasharray="4 3" />
                <Legend wrapperStyle={{ fontSize: 10, paddingTop: 8 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Section 4: Load vs Generation ── */}
      <div>
        <SectionHeader title="Load vs Generation — Live" accent />
        <div
          className="rounded-xl p-4"
          style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <div className="w-full" style={{ height: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={history.slice(-20)} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.6)" />
                <XAxis
                  dataKey="time"
                  stroke="#475569"
                  tick={{ fontSize: 9, fill: '#64748b' }}
                  tickFormatter={v => v.split(':').slice(1).join(':')}
                  tickLine={false}
                />
                <YAxis stroke="#475569" tick={{ fontSize: 9, fill: '#64748b' }} tickLine={false} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="load"       name="Load"       stroke={COLORS.amber}   strokeWidth={2} dot={false} activeDot={{ r: 3 }} />
                <Line type="monotone" dataKey="generation" name="Generation" stroke={COLORS.green}   strokeWidth={2} dot={false} activeDot={{ r: 3 }} />
                <Legend wrapperStyle={{ fontSize: 10, paddingTop: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Section 5: Building Status Pie ── */}
      <div>
        <SectionHeader title="Building Status Distribution" accent />
        <div
          className="rounded-xl p-4"
          style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <div className="w-full" style={{ height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="45%"
                  innerRadius={48}
                  outerRadius={72}
                  paddingAngle={3}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {statusDistribution.map((entry, i) => (
                    <Cell key={i} fill={entry.color} opacity={entry.value === 0 ? 0.25 : 1} />
                  ))}
                </Pie>
                <Tooltip {...tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 10, paddingTop: 4 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Section 6: Battery Levels ── */}
      <div>
        <SectionHeader title="Top Battery Levels" accent />
        <div
          className="rounded-xl p-4"
          style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <div className="w-full" style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={batteryDistribution}
                layout="vertical"
                margin={{ top: 0, right: 4, left: 4, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.6)" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} stroke="#475569" tick={{ fontSize: 9, fill: '#64748b' }} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="id"
                  stroke="#475569"
                  tick={{ fontSize: 9, fill: '#64748b' }}
                  tickLine={false}
                  width={24}
                  tickFormatter={v => `#${v}`}
                />
                <Tooltip
                  {...tooltipStyle}
                  formatter={(val: number) => [`${val.toFixed(1)}%`, 'Battery SoC']}
                />
                <Bar
                  dataKey="soc"
                  radius={[0, 4, 4, 0]}
                  cursor="pointer"
                  onClick={data => {
                    const b = buildings.find(bld => bld.building_id === data.id);
                    if (b && onBuildingSelect) onBuildingSelect(b);
                  }}
                >
                  {batteryDistribution.map((entry, i) => (
                    <Cell
                      key={i}
                      fill={entry.soc > 80 ? COLORS.green : entry.soc > 30 ? COLORS.amber : COLORS.red}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Section 7: Market Price History ── */}
      <div>
        <SectionHeader title="Market Price History" accent />
        <div
          className="rounded-xl p-4"
          style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <div className="w-full" style={{ height: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={history} margin={{ top: 4, right: 4, left: -8, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={COLORS.amber} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={COLORS.amber} stopOpacity={0}   />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(51,65,85,0.6)" />
                <XAxis
                  dataKey="time"
                  stroke="#475569"
                  tick={{ fontSize: 9, fill: '#64748b' }}
                  tickFormatter={v => v.split(':').slice(1).join(':')}
                  tickLine={false}
                />
                <YAxis
                  stroke="#475569"
                  tick={{ fontSize: 9, fill: '#64748b' }}
                  tickLine={false}
                  tickFormatter={v => `$${Number(v).toFixed(2)}`}
                  domain={['dataMin - 0.02', 'dataMax + 0.02']}
                  width={42}
                />
                <Tooltip
                  {...tooltipStyle}
                  formatter={(val: number) => [`$${val.toFixed(3)}`, 'Market Price']}
                />
                <Area
                  type="stepAfter"
                  dataKey="price"
                  name="Market Price"
                  stroke={COLORS.amber}
                  strokeWidth={2}
                  fill="url(#gradPrice)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
}

`

## Modified/New File: app/src/components/dashboard/GodModePanel.tsx
Update or create this file with the exact contents below:
`tsx
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ShieldAlert, DollarSign, Cloud, CloudLightning, Sun, Wind, Snowflake, Flame,
  Zap, Droplets, Fuel
} from 'lucide-react';

interface GodModePanelProps {
  onTriggerEvent: (type: string, payload?: any) => void;
  activeWeather: string;
  activePowerSources: Record<string, boolean>;
  onTogglePowerSource: (source: string) => void;
}

const WEATHER_MODES = [
  { id: 'CLEAR',      label: 'Clear Sky',  icon: Sun,            color: 'text-amber-400',  bg: 'bg-amber-500',      borderColor: 'border-amber-500' },
  { id: 'OVERCAST',   label: 'Overcast',   icon: Cloud,          color: 'text-slate-400',  bg: 'bg-slate-500',      borderColor: 'border-slate-500' },
  { id: 'STORM',      label: 'Storm',      icon: CloudLightning, color: 'text-indigo-400', bg: 'bg-indigo-500',     borderColor: 'border-indigo-500' },
  { id: 'HEAT_WAVE',  label: 'Heat Wave',  icon: Flame,          color: 'text-orange-500', bg: 'bg-orange-500',     borderColor: 'border-orange-500' },
  { id: 'BLIZZARD',   label: 'Blizzard',   icon: Snowflake,      color: 'text-cyan-200',   bg: 'bg-cyan-400',       borderColor: 'border-cyan-400' },
  { id: 'HIGH_WIND',  label: 'High Wind',  icon: Wind,           color: 'text-blue-400',   bg: 'bg-blue-500',       borderColor: 'border-blue-500' },
];

const POWER_SOURCES = [
  { id: 'solar', label: 'Solar',  icon: Sun,      color: 'text-yellow-400',  bg: 'bg-yellow-500', borderColor: 'border-yellow-500' },
  { id: 'wind',  label: 'Wind',   icon: Wind,     color: 'text-cyan-400',    bg: 'bg-cyan-500',   borderColor: 'border-cyan-500' },
  { id: 'hydro', label: 'Hydro',  icon: Droplets, color: 'text-blue-400',    bg: 'bg-blue-500',   borderColor: 'border-blue-500' },
  { id: 'gas',   label: 'Gas',    icon: Fuel,     color: 'text-orange-400',  bg: 'bg-orange-500', borderColor: 'border-orange-500' },
];

export const GodModePanel = memo(function GodModePanel({ onTriggerEvent, activeWeather, activePowerSources, onTogglePowerSource }: GodModePanelProps) {
  
  return (
    <div className="space-y-4">
      {/* Weather Controls */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <CloudLightning className="w-4 h-4 text-indigo-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Weather Control</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {WEATHER_MODES.map(mode => {
            const isActive = activeWeather === mode.id;
            return (
              <Button
                key={mode.id}
                variant="outline"
                size="sm"
                className={`h-9 flex items-center justify-start gap-2 transition-all duration-300 ${
                  isActive 
                    ? `${mode.borderColor}/50 ${mode.bg}/10 ${mode.color} shadow-lg shadow-black/40` 
                    : 'border-slate-700/50 bg-slate-800/30 text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
                }`}
                onClick={() => onTriggerEvent('weather_change', { weather: mode.id, active: mode.id !== 'CLEAR' })}
              >
                <mode.icon className={`w-3.5 h-3.5 ${isActive ? mode.color.replace('text-', 'fill-') + ' opacity-50' : ''}`} />
                <span className="text-[10px] font-bold tracking-wider">{mode.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Power Sources */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Power Sources</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {POWER_SOURCES.map(src => {
            const isActive = activePowerSources[src.id];
            return (
              <Button
                key={src.id}
                variant="outline"
                size="sm"
                className={`h-9 flex items-center justify-start gap-2 transition-all duration-300 ${
                  isActive 
                    ? `${src.borderColor}/50 ${src.bg}/10 ${src.color} shadow-lg shadow-black/40` 
                    : 'border-slate-700/50 bg-slate-800/30 text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
                }`}
                onClick={() => onTogglePowerSource(src.id)}
              >
                <src.icon className={`w-3.5 h-3.5 ${isActive ? src.color : ''}`} />
                <span className="text-[10px] font-bold tracking-wider">{src.label}</span>
                <span className={`ml-auto text-[8px] font-bold px-1.5 py-0.5 rounded ${isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700/30 text-slate-500'}`}>
                  {isActive ? 'ON' : 'OFF'}
                </span>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Grid Events */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <ShieldAlert className="w-4 h-4 text-red-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Chaos Injection</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 border-red-500/50 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold tracking-widest text-[10px] uppercase"
            onClick={() => onTriggerEvent('grid_failure', { duration: 60, active: true })}
          >
            <ShieldAlert className="w-3.5 h-3.5 mr-2" />
            Grid Failure
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 border-green-500/50 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-bold tracking-widest text-[10px] uppercase"
            onClick={() => onTriggerEvent('grid_failure', { duration: 0, active: false })}
          >
            Restore Grid
          </Button>

          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-bold tracking-widest text-[10px] uppercase"
            onClick={() => onTriggerEvent('price_update', { price: +(Math.random() * 0.8 + 0.3).toFixed(2) })}
          >
            <DollarSign className="w-3.5 h-3.5 mr-2" />
            Spike Price
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold tracking-widest text-[10px] uppercase"
            onClick={() => onTriggerEvent('price_update', { price: 0.15 })}
          >
            Reset Price
          </Button>
        </div>
      </div>
    </div>
  );
});

`

## Modified/New File: app/src/components/threejs/Building.tsx
Update or create this file with the exact contents below:
`tsx
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';
import type { BuildingTelemetry } from '@/types';

interface BuildingProps {
  data: BuildingTelemetry;
  position: [number, number, number];
  geoScaleY?: number;
  geoShape?: THREE.Shape;
  onClick?: (data: BuildingTelemetry) => void;
}

export function Building({ data, position, geoScaleY, geoShape, onClick }: BuildingProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Group>(null);

  // Determine building color based on state
  const { color, emissive, height, scaleY } = useMemo(() => {
    let color = '#3b82f6'; // Default blue
    let emissive = '#1e40af';
    let height = 1;
    let scaleY = 1;

    if (data.is_critical) {
      color = '#ef4444'; // Red for critical
      emissive = '#dc2626';
      height = 1.5;
    } else if (data.is_selling) {
      color = '#22c55e'; // Green for selling
      emissive = '#16a34a';
      height = 1.2 + (data.battery_soc / 100) * 0.4;
      scaleY = 1 + (data.battery_soc / 100) * 0.3;
    } else if (data.is_buying) {
      color = '#f59e0b'; // Amber for buying
      emissive = '#d97706';
      height = 0.9;
    } else if (data.is_priority) {
      color = '#a855f7'; // Purple for priority buildings
      emissive = '#7c3aed';
      height = 1.6;
    }

    // Adjust height based on building type
    switch (data.building_type) {
      case 'hospital':
        height *= 2;
        break;
      case 'datacenter':
        height *= 1.8;
        break;
      case 'commercial':
        height *= 1.4;
        break;
      case 'residential':
        height *= 0.9;
        break;
      default:
        height *= 1.1;
    }
    
    // Apply geospatial scale if provided
    if (geoScaleY !== undefined) {
      height *= geoScaleY;
    }

    return { color, emissive, height, scaleY };
  }, [data, geoScaleY]);

  // Generate procedural window texture
  const windowTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    if (context) {
      context.fillStyle = '#0f172a'; // Dark base
      context.fillRect(0, 0, 128, 128);
      
      // Determine window color based on building status
      const winColor = data.is_critical ? '#ef4444' : 
                      (data.is_selling ? '#4ade80' : 
                      (data.is_buying ? '#fcd34d' : '#38bdf8'));
      
      context.fillStyle = winColor;
      
      // Draw grid of windows
      for(let x=8; x<128; x+=24) {
        for(let y=8; y<128; y+=28) {
          // Randomly turn off some windows for realism
          if (Math.random() > 0.2) {
            context.fillRect(x, y, 12, 16);
            // Add a brighter core to the window
            context.fillStyle = '#ffffff';
            context.fillRect(x+2, y+2, 8, 12);
            context.fillStyle = winColor;
          }
        }
      }
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, height * scaleY * 1.5);
    return tex;
  }, [data.is_critical, data.is_selling, data.is_buying, height, scaleY]);

  // Animate the building
  useFrame((state) => {
    if (meshRef.current) {
      if (data.is_critical) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 6) * 0.02;
        meshRef.current.scale.setScalar(pulse);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }

    if (glowRef.current) {
      glowRef.current.rotation.y += 0.02;
      glowRef.current.position.y = ((height * scaleY) / 2) + Math.sin(state.clock.elapsedTime * 2 + data.building_id) * 0.02;
    }
  });

  return (
    <group position={position}>
      {/* Main Building Base - using extrude topology if provided */}
      <mesh
        ref={meshRef}
        position={geoShape ? [0, 0, 0] : [0, (height * scaleY) / 2, 0]}
        rotation={geoShape ? [-Math.PI / 2, 0, 0] : [0, 0, 0]}
        onClick={() => onClick?.(data)}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        {geoShape ? (
          <extrudeGeometry args={[geoShape, { depth: height * scaleY, bevelEnabled: false }]} />
        ) : (
          <boxGeometry args={[0.8, height * scaleY, 0.8]} />
        )}
        <meshStandardMaterial
          color={color}
          map={windowTexture}
          emissive={emissive}
          emissiveIntensity={0.6}
          emissiveMap={windowTexture}
          roughness={0.2}
          metalness={0.9}
        />
        <Edges scale={1.01} color={emissive} />
      </mesh>

      {/* Holographic rings for active buildings */}
      {(data.is_selling || data.is_buying || data.is_critical) && (
        <group ref={glowRef} position={[0, (height * scaleY) / 2, 0]}>
          <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.7, 0.02, 16, 32]} />
            <meshBasicMaterial color={color} transparent opacity={0.8} />
          </mesh>
          <mesh position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.9, 0.01, 16, 32]} />
            <meshBasicMaterial color={color} transparent opacity={0.4} />
          </mesh>
        </group>
      )}

      {/* Ground Projection / Base Plate */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.2, 1.2]} />
        <meshBasicMaterial color={emissive} transparent opacity={data.is_critical ? 0.6 : 0.2} />
      </mesh>
      
      {/* Sub-grid lines for base plate */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.0, 1.0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

`

## Modified/New File: app/src/components/threejs/CityGrid.tsx
Update or create this file with the exact contents below:
`tsx
import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Building } from './Building';
import { WeatherEffects } from './WeatherEffects';
import { NeuralWires, POWER_SOURCE_POSITIONS } from './NeuralWires';
import { Particles } from './Particles';
import { WindTurbine, SolarPlant, ThermalPlant, HydroPlant } from './PowerPlants';
import type { BuildingTelemetry } from '@/types';

// Convert WGS84 coordinates to EPSG:3857 Web Mercator to flawlessly map the flat raster floor tile distortions
function latLngToMercator(lng: number, lat: number) {
  const R = 6378137;
  const x = R * (lng * Math.PI / 180);
  const y = R * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI / 180) / 2));
  return { x, y };
}

interface CityGridProps {
  buildings: BuildingTelemetry[];
  geoBuildings?: any[];
  onBuildingClick?: (data: BuildingTelemetry) => void;
  activeWeather?: string;
  activeEvents?: { type: string }[];
  activePowerSources?: Record<string, boolean>;
}

// Animated energy particles flowing between buildings
function EnergyParticles({ activeWeather, activeEvents }: { activeWeather?: string, activeEvents?: { type: string }[] }) {
  const pointsRef    = useRef<THREE.Points>(null);
  const particleCount = 50;           // was 100 — halved for performance
  const frameRef     = useRef(0);     // for throttling drift calculation

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Green for energy flow
      colors[i * 3] = 0.13;
      colors[i * 3 + 1] = 0.77;
      colors[i * 3 + 2] = 0.37;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      frameRef.current++;
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const computeDrift = frameRef.current % 2 === 0; // drift only every other frame
      
      for (let i = 0; i < particleCount; i++) {
        // Slow down based on grid conditions
        const hasGridFailure = activeEvents?.some(e => e.type === 'grid_failure');
        const speedMultiplier = hasGridFailure ? 0.1 : (activeWeather === 'STORM' ? 0.5 : (activeWeather === 'HEAT_WAVE' ? 0.2 : 1.0));
        
        // Animate particles flowing upward
        positions[i * 3 + 1] += 0.02 * speedMultiplier;
        
        // Reset if too high
        if (positions[i * 3 + 1] > 5) {
          positions[i * 3 + 1] = 0;
        }

        // Slight horizontal drift (throttled — sin/cos every other frame)
        if (computeDrift) {
          const t = state.clock.elapsedTime;
          positions[i * 3]     += Math.sin(t + i) * 0.002;
          positions[i * 3 + 2] += Math.cos(t + i) * 0.002;
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function GridFloor() {
  return (
    <group position={[0, -0.05, 0]}>
      {/* Underlying dark plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#020617" />
      </mesh>
      {/* Glowing cyber grid - evenly spaced uniform bottom */}
      <gridHelper args={[100, 50, '#10b981', '#065f46']} position={[0, 0.01, 0]} />
    </group>
  );
}

// Scene content
function Scene({ buildings, geoBuildings, onBuildingClick, activeWeather = 'CLEAR', activeEvents = [], activePowerSources = {} }: CityGridProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Arrange buildings uniformly on synth grid, keeping external geoShapes
  const { layout: buildingLayout, bgBuildings } = useMemo(() => {
    const layout: { [key: number]: { position: [number, number, number], scaleY: number, geoShape?: THREE.Shape } } = {};
    const bgBuildings: { position: [number, number, number], scaleY: number, geoShape?: THREE.Shape }[] = [];
    
    // Geospatial layout
    if (geoBuildings && geoBuildings.length > 0 && buildings.length > 0) {
      const cols = 10;
      const spacing = 3;
      const offsetX = ((cols - 1) * spacing) / 2;
      const offsetZ = ((Math.ceil(buildings.length / cols) - 1) * spacing) / 2;
      const localScale = 0.05; // Base map scale multiplier for shapes (1 meter = 0.05 units)
      
      const geoCenters = geoBuildings.map(f => {
        const geom = f.geometry;
        let rings: any[] = [];
        
        if (geom?.type === 'Polygon') {
          rings = geom.coordinates;
        } else if (geom?.type === 'MultiPolygon') {
          rings = geom.coordinates[0];
        }
        
        return { height: f.properties?.render_height || f.properties?.height || 10, rings };
      });
      
      // Evenly spread across a synthetic grid via row/col math
      geoCenters.forEach((geo, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const x = col * spacing - offsetX;
        const z = row * spacing - offsetZ;
        const scaleY = Math.max(0.5, Math.min(5, geo.height / 10)); // Height extrusion limit
        
        let geoShape: THREE.Shape | undefined = undefined;
        if (geo.rings && geo.rings.length > 0) {
          geoShape = new THREE.Shape();
          const ring = geo.rings[0];
          
          let minM_X = Infinity, maxM_X = -Infinity, minM_Y = Infinity, maxM_Y = -Infinity;
          const mercatorPoints = ring.map((coord: number[]) => {
             const vM = latLngToMercator(coord[0], coord[1]);
             minM_X = Math.min(minM_X, vM.x);
             maxM_X = Math.max(maxM_X, vM.x);
             minM_Y = Math.min(minM_Y, vM.y);
             maxM_Y = Math.max(maxM_Y, vM.y);
             return vM;
          });
          
          const centerM_X = minM_X + (maxM_X - minM_X) / 2;
          const centerM_Y = minM_Y + (maxM_Y - minM_Y) / 2;
          
          mercatorPoints.forEach((vM: any, i: number) => {
             const localX = (vM.x - centerM_X) * localScale;
             const localY = -((vM.y - centerM_Y) * localScale); // Reverse Y for shape projection
             if (i === 0) geoShape!.moveTo(localX, localY);
             else geoShape!.lineTo(localX, localY);
          });
        }
        
        // Associate to API buildings sequentially
        if (index < buildings.length) {
          layout[buildings[index].building_id] = { position: [x, 0, z], scaleY, geoShape };
        } else {
          bgBuildings.push({ position: [x, 0, z], scaleY, geoShape });
        }
      });
      
      // Fill missing layout spots if GeoJSON returned < 50 buildings
      for (let i = geoCenters.length; i < buildings.length; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        layout[buildings[i].building_id] = { position: [col * spacing - offsetX, 0, row * spacing - offsetZ], scaleY: 1 };
      }
      
      return { layout, bgBuildings };
    }
    
    // Fallback grid pattern if GeoJSON fails
    const cols = 10;
    const spacing = 3;
    const offsetX = ((cols - 1) * spacing) / 2;
    const offsetZ = ((Math.ceil(buildings.length / cols) - 1) * spacing) / 2;

    buildings.forEach((building, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      layout[building.building_id] = {
        position: [col * spacing - offsetX, 0, row * spacing - offsetZ],
        scaleY: 1
      };
    });

    return { layout, bgBuildings };
  }, [buildings, geoBuildings]);

  const buildingPositions = useMemo(() => {
    const posRecord: Record<number, [number, number, number]> = {};
    Object.keys(buildingLayout).forEach(k => {
      posRecord[Number(k)] = buildingLayout[Number(k)].position;
    });
    return posRecord;
  }, [buildingLayout]);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation of the entire city
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <GridFloor />
      <WeatherEffects weather={activeWeather} />
      <EnergyParticles activeWeather={activeWeather} activeEvents={activeEvents} />
      <Particles />
      
      {/* Background GeoJSON Buildings */}
      {bgBuildings.map((b, i) => (
         <group key={`bg-${i}`} position={b.position}>
            {/* Base rotation aligns extruded shapes vertically to snap to the floor plane */}
            <mesh position={b.geoShape ? [0, 0, 0] : [0, b.scaleY / 2, 0]} rotation={b.geoShape ? [-Math.PI / 2, 0, 0] : [0, 0, 0]}>
               {b.geoShape ? (
                  <extrudeGeometry args={[b.geoShape, { depth: b.scaleY, bevelEnabled: false }]} />
               ) : (
                  <boxGeometry args={[0.8, b.scaleY, 0.8]} />
               )}
               {/* Extremely subtle dark styling for ambient background surroundings */}
               <meshStandardMaterial color="#0f172a" roughness={0.8} metalness={0.2} transparent opacity={0.6} />
            </mesh>
         </group>
      ))}

      {/* Simulated Focus Buildings */}
      {buildings.map((building) => {
        const layout = buildingLayout[building.building_id] || { position: [0,0,0], scaleY: 1 };
        return (
          <Building
            key={building.building_id}
            data={building}
            position={layout.position}
            geoScaleY={layout.scaleY}
            geoShape={layout.geoShape}
            onClick={onBuildingClick}
          />
        );
      })}

      {/* External Power Plants visual representations */}
      {Object.entries(POWER_SOURCE_POSITIONS).map(([sourceType, pos]) => {
        if (!activePowerSources[sourceType]) return null;
        
        switch (sourceType) {
          case 'wind': return <WindTurbine key={sourceType} position={pos as [number,number,number]} />;
          case 'solar': return <SolarPlant key={sourceType} position={pos as [number,number,number]} />;
          case 'gas': return <ThermalPlant key={sourceType} position={pos as [number,number,number]} />;
          case 'hydro': return <HydroPlant key={sourceType} position={pos as [number,number,number]} />;
          default: return null;
        }
      })}

      {/* Live Glowing Energy Paths */}
      <NeuralWires 
        buildings={buildings} 
        buildingPositions={buildingPositions}
        activePowerSources={activePowerSources}
      />

      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={0.5}
        color="#ffffff"
      />
      <pointLight position={[0, 10, 0]} intensity={0.3} color="#00ff00" />
      
      {/* Stars background */}
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
    </group>
  );
}

// Main CityGrid component
export function CityGrid({ buildings, geoBuildings, onBuildingClick, activeWeather, activeEvents, activePowerSources }: CityGridProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [25, 20, 25], fov: 45 }}
        style={{ background: 'linear-gradient(to bottom, #0f172a, #1e293b)' }}
        dpr={[1, 1.5]}                          // cap pixel ratio for performance
        performance={{ min: 0.5 }}              // auto scale-down on slow GPU
      >
        <Suspense fallback={null}>
          <Scene 
            buildings={buildings} 
            geoBuildings={geoBuildings} 
            onBuildingClick={onBuildingClick} 
            activeWeather={activeWeather} 
            activeEvents={activeEvents}
            activePowerSources={activePowerSources} 
          />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={40}
          maxPolarAngle={Math.PI / 2 - 0.1}
        />
      </Canvas>
    </div>
  );
}

`

## Modified/New File: app/src/components/threejs/NeuralWires.tsx
Update or create this file with the exact contents below:
`tsx
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { BuildingTelemetry } from '@/types';

// Map power themes to neon glow colors
const SOURCE_COLORS: Record<string, { base: number[], glow: number[] }> = {
  solar:  { base: [0.6, 0.5, 0.0], glow: [1.0, 0.85, 0.0] },
  wind:   { base: [0.0, 0.4, 0.6], glow: [0.0, 0.83, 1.0] },
  hydro:  { base: [0.0, 0.2, 0.6], glow: [0.0, 0.4, 1.0] },
  gas:    { base: [0.6, 0.25, 0.0], glow: [1.0, 0.42, 0.0] },
  trade:  { base: [0.0, 0.8, 0.2], glow: [0.0, 1.0, 0.4] },
};

interface EnergyWireProps {
  source: [number, number, number];
  target: [number, number, number];
  colorTheme: string;
  active: boolean;
  intensity: number;
  radius: number;
  reverseDirection?: boolean;
  maxHeight?: number;
}

function EnergyWire({ source, target, colorTheme, active, intensity, radius, reverseDirection = false, maxHeight = 0.4 }: EnergyWireProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const colors = SOURCE_COLORS[colorTheme] || SOURCE_COLORS.trade;

  const geometry = useMemo(() => {
    const start = new THREE.Vector3(...source);
    start.y = 0.5;
    const end = new THREE.Vector3(...target);
    end.y = 0.5;

    const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
    mid.y = maxHeight + start.distanceTo(end) * 0.1;

    const curve = new THREE.CatmullRomCurve3([start, mid, end], false, 'catmullrom', 0.5);
    return new THREE.TubeGeometry(curve, 32, radius, 8, false);
  }, [source, target, radius, maxHeight]);

  const uniforms = useMemo(() => ({
    uTime: { value: Math.random() * 10 },
    uBaseColor: { value: new THREE.Vector3(...colors.base) },
    uGlowColor: { value: new THREE.Vector3(...colors.glow) },
    uIntensity: { value: intensity },
    uActive: { value: active ? 1.0 : 0.0 },
    uDirection: { value: reverseDirection ? -1.0 : 1.0 }
  }), [colors, intensity, active, reverseDirection]);

  useFrame((_state, delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += delta;
      
      matRef.current.uniforms.uActive.value = THREE.MathUtils.lerp(
        matRef.current.uniforms.uActive.value,
        active ? 1.0 : 0.0,
        0.05
      );
      matRef.current.uniforms.uIntensity.value = THREE.MathUtils.lerp(
        matRef.current.uniforms.uIntensity.value,
        intensity,
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uBaseColor;
          uniform vec3 uGlowColor;
          uniform float uIntensity;
          uniform float uActive;
          uniform float uDirection;
          varying vec2 vUv;

          void main() {
            float pulse = sin((vUv.x * uDirection) * 8.0 - uTime * 2.0);
            float glow = smoothstep(0.3, 0.7, pulse) * uIntensity;
            
            vec3 color = mix(uBaseColor * 0.3, uGlowColor, glow);
            
            float baseAlpha = mix(0.08, 0.6, uActive); 
            float alpha = baseAlpha + glow * 0.4 * uActive;
            
            gl_FragColor = vec4(color, alpha);
          }
        `}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Map configuration for External Power Sources
export const POWER_SOURCE_POSITIONS: Record<string, [number, number, number]> = {
  solar: [-25, 0, -25],
  wind:  [25, 0, -25],
  hydro: [-25, 0, 25],
  gas:   [25, 0, 25],
};

interface NeuralWiresProps {
  buildings: BuildingTelemetry[];
  buildingPositions: Record<number, [number, number, number]>;
  activePowerSources: Record<string, boolean>;
}

export function NeuralWires({ buildings, buildingPositions, activePowerSources }: NeuralWiresProps) {
  
  // Create Neural Wires connecting Power Plants to the grid
  const trunkWires = useMemo(() => {
    const wires: { id: string; sourceType: string; source: [number, number, number]; target: [number, number, number] }[] = [];
    const priorityBuildings = buildings.filter(b => b.is_priority || b.is_critical);
    
    Object.keys(POWER_SOURCE_POSITIONS).forEach((sourceType) => {
      if (!activePowerSources[sourceType]) return;
      
      const sourcePos = POWER_SOURCE_POSITIONS[sourceType];
      
      const targets = priorityBuildings
        .map(b => {
          const p = buildingPositions[b.building_id] || [0, 0, 0] as [number, number, number];
          const dist = Math.sqrt(Math.pow(p[0] - sourcePos[0], 2) + Math.pow(p[2] - sourcePos[2], 2));
          return { id: b.building_id, pos: p as [number, number, number], dist };
        })
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 3);
        
      targets.forEach(t => {
        wires.push({
          id: `trunk-${sourceType}-${t.id}`,
          sourceType,
          source: sourcePos,
          target: t.pos
        });
      });
    });
    return wires;
  }, [buildings, buildingPositions, activePowerSources]);

  // Create P2P Neural Wires connecting Sellers directly to Buyers dynamically
  const tradeWires = useMemo(() => {
    const wires: { id: string; source: [number, number, number]; target: [number, number, number] }[] = [];
    const sellers = buildings.filter(b => b.is_selling);
    const buyers = buildings.filter(b => b.is_buying);

    sellers.forEach((seller) => {
      const sPos = buildingPositions[seller.building_id];
      if (!sPos) return;

      let closestBuyerId: number | null = null;
      let minDist = Infinity;

      buyers.forEach(buyer => {
        const bPos = buildingPositions[buyer.building_id];
        if (!bPos) return;
        const dist = Math.sqrt(Math.pow(sPos[0] - bPos[0], 2) + Math.pow(sPos[2] - bPos[2], 2));
        if (dist < minDist) {
          minDist = dist;
          closestBuyerId = buyer.building_id;
        }
      });

      if (closestBuyerId !== null) {
        const targetPos = buildingPositions[closestBuyerId];
        if (targetPos) {
          wires.push({
            id: `trade-${seller.building_id}-${closestBuyerId}`,
            source: sPos,
            target: targetPos,
          });
        }
      }
    });
    return wires;
  }, [buildings, buildingPositions]);

  return (
    <group>
      {/* 1. External Grid TRUNK WIRES */}
      {trunkWires.map(({ id, sourceType, source, target }) => (
        <EnergyWire
          key={id}
          source={source}
          target={target}
          colorTheme={sourceType}
          active={true}
          intensity={0.8}
          radius={0.06}
          maxHeight={1.5}
        />
      ))}

      {/* 2. P2P TRADE WIRES */}
      {tradeWires.map(({ id, source, target }) => (
        <EnergyWire
          key={id}
          source={source}
          target={target}
          colorTheme="trade"
          active={true}
          intensity={0.6}
          radius={0.03}
          maxHeight={1.0}
        />
      ))}
    </group>
  );
}

`

## Modified/New File: app/src/components/threejs/Particles.tsx
Update or create this file with the exact contents below:
`tsx
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 40;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = 0.2 + Math.random() * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const palette = [
      [0, 0.83, 1],    // cyan
      [0, 0.96, 0.63],  // green
      [1, 0.84, 0],     // gold
      [0, 0.4, 1],      // blue
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[i % palette.length];
      col[i * 3] = c[0];
      col[i * 3 + 1] = c[1];
      col[i * 3 + 2] = c[2];
    }
    return col;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      // Gentle floating motion
      pos[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.005;
      pos[i * 3 + 1] += 0.008;
      pos[i * 3 + 2] += Math.cos(state.clock.elapsedTime + i * 0.5) * 0.005;

      // Reset when too high
      if (pos[i * 3 + 1] > 5) {
        pos[i * 3 + 1] = 0.2;
        pos[i * 3] = (Math.random() - 0.5) * 30;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        transparent
        opacity={0.5}
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

`

## Modified/New File: app/src/components/threejs/PowerPlants.tsx
Update or create this file with the exact contents below:
`tsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PlantProps {
  position: [number, number, number];
}

export function WindTurbine({ position }: PlantProps) {
  const bladesRef = useRef<THREE.Group>(null);
  
  // Animate the spinning blades continuously
  useFrame(() => {
    if (bladesRef.current) {
      bladesRef.current.rotation.z -= 0.04; 
    }
  });

  return (
    <group position={position} scale={0.7}>
      {/* Tower Mast */}
      <mesh position={[0, 4, 0]}>
        <cylinderGeometry args={[0.15, 0.35, 8, 16]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.6} metalness={0.2} />
      </mesh>
      
      {/* Generator Hub Nacelle */}
      <mesh position={[0, 8, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.25, 1.2, 16, 16]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0284c7" emissiveIntensity={0.2} roughness={0.5} />
      </mesh>
      
      {/* Rotor Assembly */}
      <group ref={bladesRef} position={[0, 8, 0.9]}>
        {/* Hub */}
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.4} />
        </mesh>
        
        {/* Three Blades spaced 120 degrees */}
        {[0, 1, 2].map((i) => (
          <group key={i} rotation={[0, 0, (i * Math.PI * 2) / 3]}>
            <mesh position={[0, 2.5, 0]}>
              <boxGeometry args={[0.1, 5, 0.02]} />
              <meshStandardMaterial color="#f1f5f9" roughness={0.3} />
            </mesh>
          </group>
        ))}
      </group>
      
      {/* Ground Pad */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 32]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export function SolarPlant({ position }: PlantProps) {
  return (
    <group position={position} scale={0.8}>
      {/* Base Foundation */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      
      {/* Grid of Solar Arrays */}
      {[-3.5, -1.5, 0.5, 2.5].map((z, rowI) => (
        <group key={rowI} position={[0, 0, z]}>
          {[-3, -1, 1, 3].map((x, colI) => (
            <group key={colI} position={[x, 0.5, 0]}>
              {/* Tilted Solar Panel */}
              <mesh rotation={[Math.PI / 6, 0, 0]}>
                <boxGeometry args={[1.8, 0.05, 1.6]} />
                <meshStandardMaterial 
                  color="#0284c7" 
                  emissive="#0369a1" 
                  emissiveIntensity={0.3} 
                  roughness={0.1} 
                  metalness={0.9} 
                />
              </mesh>
              {/* Support column */}
              <mesh position={[0, -0.25, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.5]} />
                <meshStandardMaterial color="#475569" />
              </mesh>
            </group>
          ))}
        </group>
      ))}

      {/* Cybernetic Ground Glow */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial color="#eab308" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export function ThermalPlant({ position }: PlantProps) {
  // Simple upward drifting smoke particles
  const smokeRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (smokeRef.current) {
      smokeRef.current.position.y = 8 + Math.sin(state.clock.elapsedTime) * 0.2;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      smokeRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position} scale={0.7}>
      {/* Main Generator Block */}
      <mesh position={[0, 1.5, -1]}>
        <boxGeometry args={[5, 3, 4]} />
        <meshStandardMaterial color="#334155" roughness={0.8} metalness={0.3} />
      </mesh>
      
      {/* Primary Cooling Tower */}
      <mesh position={[-2, 3, 2]}>
        {/* Cooling towers are classically hyperboloid, but a cylinder works fine for distance view */}
        <cylinderGeometry args={[0.7, 1.2, 6, 16]} />
        <meshStandardMaterial color="#64748b" roughness={0.9} />
      </mesh>
      
      {/* Secondary Cooling Tower */}
      <mesh position={[2, 3, 2]}>
        <cylinderGeometry args={[0.7, 1.2, 6, 16]} />
        <meshStandardMaterial color="#64748b" roughness={0.9} />
      </mesh>
      
      {/* Exhaust Chimney Stack */}
      <mesh position={[0, 4, -2]}>
        <cylinderGeometry args={[0.3, 0.4, 8, 12]} />
        <meshStandardMaterial color="#475569" roughness={0.7} />
      </mesh>
      
      {/* Emissive Warning Light on Stack */}
      <mesh position={[0, 8.1, -2]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      {/* Pulsing Smoke/Exhaust representation */}
      <group ref={smokeRef} position={[0, 8, -2]}>
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshBasicMaterial color="#ef4444" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
        </mesh>
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
        </mesh>
      </group>

      {/* Industrial Base Aura */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color="#dc2626" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export function HydroPlant({ position }: PlantProps) {
  const waterRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (waterRef.current && waterRef.current.material) {
      const mat = waterRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
    }
  });

  return (
    <group position={position} scale={0.7}>
      {/* Concrete Dam Arc */}
      <mesh position={[0, 2, 0]} rotation={[0, Math.PI, 0]}>
        {/* Cut cylinder for dam arc */}
        <cylinderGeometry args={[4, 5, 4, 32, 1, false, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
      </mesh>
      
      {/* Left buttress */}
      <mesh position={[-3.5, 2, -1]}>
        <boxGeometry args={[1.5, 4, 3]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      
      {/* Right buttress */}
      <mesh position={[0, 2, 2.5]}>
        <boxGeometry args={[3, 4, 1.5]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      
      {/* Glowing Water Output Spillage */}
      <mesh ref={waterRef} position={[-1.7, 1, 0.7]} rotation={[0, -Math.PI / 4, 0]}>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshStandardMaterial color="#3b82f6" emissive="#60a5fa" emissiveIntensity={0.5} transparent opacity={0.8} />
      </mesh>

      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

`

## Modified/New File: app/src/components/threejs/WeatherEffects.tsx
Update or create this file with the exact contents below:
`tsx
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Precipitation particles
function Precipitation({ type }: { type: 'rain' | 'snow' }) {
  const count = type === 'rain' ? 800 : 400;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 40,
        y: Math.random() * 20,
        z: (Math.random() - 0.5) * 40,
        speed: type === 'rain' ? 0.3 + Math.random() * 0.2 : 0.05 + Math.random() * 0.05,
        drift: type === 'snow' ? (Math.random() - 0.5) * 0.02 : (Math.random() - 0.5) * 0.01,
      });
    }
    return temp;
  }, [count, type]);

  useFrame(() => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.y -= p.speed;
      p.x += p.drift;
      if (p.y < 0) {
        p.y = 20;
        p.x = (Math.random() - 0.5) * 40;
      }
      dummy.position.set(p.x, p.y, p.z);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const geo = type === 'rain' 
    ? new THREE.CylinderGeometry(0.01, 0.01, 0.4, 4)
    : new THREE.SphereGeometry(0.05, 4, 4);

  return (
    <instancedMesh ref={meshRef} args={[geo, undefined, count]}>
      <meshBasicMaterial 
        color={type === 'rain' ? '#94a3b8' : '#ffffff'} 
        transparent 
        opacity={type === 'rain' ? 0.6 : 0.8} 
      />
    </instancedMesh>
  );
}

// Wind lines
function HighWind() {
  const count = 100;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 40,
        y: Math.random() * 10,
        z: (Math.random() - 0.5) * 40,
        speed: 0.5 + Math.random() * 0.5,
      });
    }
    return temp;
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.x += p.speed;
      if (p.x > 20) {
        p.x = -20;
        p.y = Math.random() * 10;
        p.z = (Math.random() - 0.5) * 40;
      }
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.z = Math.PI / 2;
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[new THREE.CylinderGeometry(0.01, 0.01, 2, 4), undefined, count]}>
      <meshBasicMaterial color="#cbd5e1" transparent opacity={0.3} />
    </instancedMesh>
  );
}

// Heat wave distortion
function HeatWave() {
  const count = 200;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 30,
        y: Math.random() * 3,
        z: (Math.random() - 0.5) * 30,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.y += 0.01 + Math.sin(state.clock.elapsedTime * 2 + p.phase) * 0.005;
      if (p.y > 4) {
        p.y = 0;
      }
      dummy.position.set(p.x, p.y, p.z);
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3 + p.phase) * 0.5;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[new THREE.SphereGeometry(0.3, 8, 8), undefined, count]}>
      <meshBasicMaterial color="#fb923c" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
    </instancedMesh>
  );
}

export function WeatherEffects({ weather }: { weather: string }) {
  return (
    <group>
      {/* Fog and ambient lighting changes based on weather */}
      {weather === 'OVERCAST' && (
        <>
          <fog attach="fog" args={['#475569', 5, 30]} />
          <ambientLight intensity={0.1} />
        </>
      )}
      {weather === 'STORM' && (
        <>
          <fog attach="fog" args={['#1e1b4b', 3, 20]} />
          <ambientLight intensity={0.05} />
          <Precipitation type="rain" />
        </>
      )}
      {weather === 'BLIZZARD' && (
        <>
          <fog attach="fog" args={['#e2e8f0', 2, 15]} />
          <ambientLight intensity={0.4} />
          <Precipitation type="snow" />
        </>
      )}
      {weather === 'HEAT_WAVE' && (
        <>
          <fog attach="fog" args={['#9a3412', 10, 40]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 10, 0]} color="#ea580c" intensity={2} />
          <HeatWave />
        </>
      )}
      {weather === 'HIGH_WIND' && (
        <>
          <HighWind />
        </>
      )}
      {(weather === 'CLEAR' || !['OVERCAST', 'STORM', 'BLIZZARD', 'HEAT_WAVE'].includes(weather)) && (
        <fog attach="fog" args={['#0f172a', 15, 50]} />
      )}
    </group>
  );
}

`

## Modified/New File: app/src/hooks/useWeather.ts
Update or create this file with the exact contents below:
`ts
import { useState, useCallback, useEffect, useRef } from 'react';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '4d8fb5b93d4af21d66a2948710284366';

// Mapping OpenWeatherMap conditions to EcoSync Grid Events
// 'OVERCAST', 'STORM', 'HEAT_WAVE', 'BLIZZARD', 'CLEAR'
export function mapWeatherCondition(description: string, temp: number): string {
  const lower = description.toLowerCase();
  if (temp > 35) return 'HEAT_WAVE';
  if (lower.includes('snow') || lower.includes('blizzard')) return 'BLIZZARD';
  if (lower.includes('storm') || lower.includes('thunder')) return 'STORM';
  if (lower.includes('rain') || lower.includes('drizzle')) return 'OVERCAST'; 
  if (lower.includes('cloud') && !lower.includes('few')) return 'OVERCAST';
  return 'CLEAR';
}

export interface WeatherData {
  temp: number;
  clouds: number;
  wind_speed: number;
  city: string;
  description: string;
  humidity: number;
  gridCondition: string; // The translated string for backend
}

const MOCK_DATA: WeatherData = { 
  temp: 28, 
  clouds: 40, 
  wind_speed: 5, 
  city: 'Demo City', 
  description: 'partly cloudy', 
  humidity: 65,
  gridCondition: 'CLEAR'
};

export function useWeather(initialQuery: string) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const hasFetched = useRef(false);

  const fetchWeather = useCallback(async (query: string) => {
    if (!query) return;
    setLoading(true);
    hasFetched.current = true;
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`);
      const data = await res.json();
      
      if (data.cod !== 200) throw new Error(data.message);
      
      const description = data.weather[0]?.description || 'clear';
      const temp = Math.round(data.main.temp);
      
      const formatted = {
        temp,
        clouds: data.clouds.all,
        wind_speed: data.wind.speed,
        city: data.name,
        description,
        humidity: data.main.humidity,
        gridCondition: mapWeatherCondition(description, temp)
      };
      
      console.log('[Weather] Loaded Live OpenWeather Data:', formatted);
      setWeatherData(formatted);
    } catch (err: any) {
      console.log('[Weather] API failed, using fallback mock data:', err.message);
      setWeatherData(MOCK_DATA);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialQuery && !hasFetched.current) {
      fetchWeather(initialQuery);
    }
  }, [initialQuery, fetchWeather]);

  return { fetchWeather, weatherData, loading };
}

`

## Modified/New File: app/src/main.tsx
Update or create this file with the exact contents below:
`tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import LandingPage from './pages/LandingPage.tsx'
import StartScreen from './pages/StartScreen.tsx'
import PostalMapView from './pages/PostalMapView.tsx'
import { ErrorBoundary } from './components/ErrorBoundary'

try {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/start" element={<StartScreen />} />
            <Route path="/map" element={<PostalMapView />} />
            <Route path="/dashboard" element={<App />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>,
  )
} catch (err: any) {
  const root = document.getElementById('root')
  if (root) {
    root.style.cssText = 'padding:2rem;color:#ef4444;font-family:monospace;background:#0f172a;min-height:100vh'
    root.innerHTML = `<h2>EcoSync Mount Error</h2><pre>${err?.stack || err}</pre>`
  }
  console.error('Mount error:', err)
}

`

## Modified/New File: app/src/pages/LandingPage.tsx
Update or create this file with the exact contents below:
`tsx
import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Zap, Sun, Activity, ArrowRight, Cpu, Globe,
  TrendingUp, ShieldCheck, ChevronDown, Wifi, Battery
} from 'lucide-react';
import {
  LiveBlockchainFeed,
  EnergyFlowDiagram,
  P2PNetworkVisualization,
} from '@/components/landing/TechVisualizations';

/* ─────────────────────────────────────────────
   Animated Canvas Background
   Draws a subtle flowing grid + drifting nodes
───────────────────────────────────────────── */
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width  = window.innerWidth;
    let height = window.innerHeight;
    canvas.width  = width;
    canvas.height = height;

    const onResize = () => {
      width  = window.innerWidth;
      height = window.innerHeight;
      canvas.width  = width;
      canvas.height = height;
    };
    window.addEventListener('resize', onResize);

    // Node type
    interface Node { x: number; y: number; vx: number; vy: number; r: number; opacity: number }

    const COUNT   = 55;
    const CONNECT = 130;   // max distance to draw a line between nodes

    const nodes: Node[] = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * width,
      y:  Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  1.5 + Math.random() * 1.5,
      opacity: 0.3 + Math.random() * 0.5,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.004;

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width)  n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT) {
            const alpha = (1 - dist / CONNECT) * 0.12;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(16,185,129,${alpha})`;
            ctx.lineWidth   = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + n.x * 0.01);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (0.8 + 0.4 * pulse), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16,185,129,${n.opacity * pulse})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
}

/* ─────────────────────────────────────────────
   useInView hook
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─────────────────────────────────────────────
   Animated Counter
───────────────────────────────────────────── */
function Counter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView }   = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step  = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─────────────────────────────────────────────
   Feature Card
───────────────────────────────────────────── */
function FeatureCard({
  icon: Icon, title, desc, accent, delay,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string; desc: string; accent: string; delay: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col gap-4 p-6 rounded-2xl
        border border-white/8 bg-slate-900/60 backdrop-blur-md
        hover:border-emerald-500/40 hover:bg-slate-800/60
        transition-all duration-700 cursor-default
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Subtle top-edge glow line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
        style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
      >
        <Icon className="w-5 h-5" style={{ color: accent }} />
      </div>
      <div>
        <h3 className="text-base font-bold text-white mb-1.5">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Step Row
───────────────────────────────────────────── */
function StepRow({
  num, title, desc, accentGrad, isLeft, delay,
}: {
  num: string; title: string; desc: string; accentGrad: string; isLeft: boolean; delay: number;
}) {
  const { ref, inView } = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex items-center gap-6 md:gap-10 transition-all duration-700
        ${inView ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-16' : 'translate-x-16'}`}
        ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div
        className={`flex-1 p-5 rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-md
          hover:border-emerald-500/30 transition-colors duration-300 ${isLeft ? 'text-left' : 'text-right'}`}
      >
        <h3 className="text-lg font-bold text-white mb-1.5">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
      {/* Step bubble */}
      <div
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center
          text-xl md:text-2xl font-black text-white shadow-xl shrink-0 ring-4 ring-white/8
          bg-gradient-to-br ${accentGrad}`}
      >
        {num}
      </div>
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Divider / section separator
───────────────────────────────────────────── */
function Separator() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN LANDING PAGE
───────────────────────────────────────────── */
export default function LandingPage() {
  const navigate = useNavigate();
  const [scrollY, setScrollY]       = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.2);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 120);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToFeatures = useCallback(() => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* ── Persistent animated canvas background ── */}
      <AnimatedBackground />

      {/* ── Radial gradient overlay to give depth ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(16,185,129,0.08) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 60% 40% at 80% 80%, rgba(5,150,105,0.05) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrollY > 60
            ? 'bg-slate-950/85 backdrop-blur-2xl border-b border-white/8 shadow-xl shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 select-none">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Zap className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="absolute -inset-1.5 bg-emerald-500/15 rounded-xl blur-md" />
            </div>
            <span className="text-lg font-black bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent tracking-tight">
              EcoSync
            </span>
          </div>

          {/* Nav links only — no launch button */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            <a href="#features" className="hover:text-emerald-400 transition-colors duration-200">Features</a>
            <a href="#how"      className="hover:text-emerald-400 transition-colors duration-200">How It Works</a>
            <a href="#stats"    className="hover:text-emerald-400 transition-colors duration-200">Stats</a>
          </div>

          {/* Subtle scroll-down prompt instead of CTA */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-emerald-500" />
            Scroll to explore
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6" style={{ zIndex: 1 }}>
        {/* Static orbs for hero depth (layered behind canvas) */}
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-[400px] h-[400px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none"  />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16,185,129,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.6) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Hero content */}
        <div
          className={`relative z-10 text-center max-w-5xl transition-all duration-1000 ease-out ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/8 text-emerald-400 text-sm font-semibold mb-10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Live AI-Powered Energy Trading — 50 Buildings Active
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] tracking-tight">
            <span className="block text-white">Smart Energy</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent py-1">
              Microgrid
            </span>
            <span className="block text-slate-300">for the Future</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
            50 AI-powered smart buildings trade energy peer-to-peer in real time.
            Watch your city breathe, adapt, and thrive — in stunning 3D.
          </p>

          {/* Single scroll CTA — no navigate button here */}
          <button
            onClick={scrollToFeatures}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl
              border border-emerald-500/30 bg-emerald-500/8 text-emerald-300 font-semibold text-sm
              hover:border-emerald-500/60 hover:bg-emerald-500/15 hover:text-emerald-200
              transition-all duration-300 backdrop-blur-md"
          >
            Discover how it works
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform animate-bounce" />
          </button>
        </div>

        {/* Scroll indicator mouse */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
            <div className="w-5 h-8 border border-slate-700 rounded-full flex justify-center pt-1.5">
              <div className="w-0.5 h-2 bg-emerald-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="stats" className="relative py-20" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-transparent to-emerald-950/20 pointer-events-none" />
        <Separator />
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Smart Buildings',   target: 50,   suffix: '' },
            { label: 'P2P Trades Daily',  target: 1200, suffix: '+' },
            { label: 'Grid Efficiency',   target: 94,   suffix: '%' },
            { label: 'CO₂ Saved (kg/d)',  target: 3400, suffix: '' },
          ].map(({ label, target, suffix }) => (
            <div key={label} className="space-y-2 group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-b from-emerald-400 to-green-500 bg-clip-text text-transparent tabular-nums">
                <Counter target={target} suffix={suffix} />
              </div>
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
        <Separator />
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tag="Technology"
            title={<>Powered by <em className="not-italic text-white">Cutting-Edge</em> Tech</>}
            sub="Four pillars of the smartest energy grid ever simulated."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            <FeatureCard icon={Sun}        title="Virtual IoT Layer"     accent="#f59e0b" delay={0}
              desc="50 simulated buildings with solar panels, batteries, and realistic load patterns updated every 5 s." />
            <FeatureCard icon={Cpu}        title="AI Trading Agents"     accent="#a855f7" delay={100}
              desc="Each building runs its own LangGraph AI agent that autonomously decides when to buy or sell energy." />
            <FeatureCard icon={Globe}      title="3D Digital Twin"       accent="#10b981" delay={200}
              desc="A live Three.js city that colour-codes every building's real-time energy state. Watch the grid breathe." />
            <FeatureCard icon={ShieldCheck} title="Blockchain Settlement" accent="#3b82f6" delay={300}
              desc="Every P2P trade is settled via EcoToken (ERC-20) smart contracts — transparent and tamper-proof." />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <SectionHeading tag="Process" title="How It Works" sub="Four steps, zero waste, infinite possibility." />
          <div className="space-y-10 mt-14">
            <StepRow num="1" isLeft accentGrad="from-emerald-500 to-green-600" delay={0}
              title="Buildings Sense & Simulate"
              desc="Each of the 50 virtual buildings continuously measures its solar generation, battery state-of-charge, and current load — publishing live data via MQTT every 5 seconds." />
            <StepRow num="2" isLeft={false} accentGrad="from-purple-500 to-violet-600" delay={100}
              title="AI Agents Decide"
              desc="A LangGraph AI agent analyses each building's state and negotiates P2P energy trades — buying from surplus neighbours, selling to those in need." />
            <StepRow num="3" isLeft accentGrad="from-blue-500 to-cyan-600" delay={200}
              title="FastAPI Bridges Everything"
              desc="The Python backend relays MQTT telemetry to the frontend over WebSocket in real time — keeping your 3D city perfectly in sync with the simulation." />
            <StepRow num="4" isLeft={false} accentGrad="from-amber-500 to-orange-600" delay={300}
              title="You See It All in 3D"
              desc="The React + Three.js dashboard renders every building's live status as a glowing colour in the city grid — green for selling, amber for buying, red for critical." />
          </div>
        </div>
      </section>

      {/* ── LIVE TECH IN ACTION ── */}
      <section id="live-tech" className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <Separator />
        <div className="max-w-6xl mx-auto pt-16">
          <SectionHeading
            tag="Live Simulation"
            title={<>See the Tech <em className="not-italic text-white">in Action</em></>}
            sub="Watch real-time blockchain settlements, energy flows, and P2P trades — all animated live."
          />

          {/* Row 1: Blockchain Feed + Energy Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            <LiveBlockchainFeed />
            <EnergyFlowDiagram />
          </div>

          {/* Row 2: Full-width P2P Network */}
          <div className="mt-6">
            <P2PNetworkVisualization />
          </div>
        </div>
      </section>

      {/* ── COLOUR LEGEND ── */}
      <section className="relative py-24 px-6" style={{ zIndex: 1 }}>
        <Separator />
        <div className="max-w-3xl mx-auto pt-16">
          <SectionHeading tag="Guide" title="Read the City at a Glance" sub="" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
            {[
              { hex: '#22c55e', label: 'Selling Energy'    },
              { hex: '#f59e0b', label: 'Buying Energy'     },
              { hex: '#ef4444', label: 'Critical / Low'    },
              { hex: '#a855f7', label: 'Priority Building' },
              { hex: '#3b82f6', label: 'Balanced'          },
            ].map(({ hex, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/8 bg-slate-900/50 backdrop-blur-sm"
              >
                <div
                  className="w-9 h-9 rounded-full shadow-lg animate-pulse"
                  style={{ background: hex, boxShadow: `0 0 16px ${hex}60` }}
                />
                <span className="text-[11px] text-slate-400 text-center font-medium leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16"><Separator /></div>
      </section>

      {/* ── FINAL CTA (only navigate button on the page) ── */}
      <section className="relative py-36 px-6 overflow-hidden" style={{ zIndex: 1 }}>
        {/* Glowing radial behind CTA */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-emerald-500/8 rounded-full blur-2xl" />
        </div>

        <div
          ref={ctaRef}
          className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
            ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Pre-heading */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-semibold mb-8 uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5" />
                Live & Operational
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">Ready to see</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
                  the future?
                </span>
              </h2>

              <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Dive into the live 3D city, trigger grid events, and watch 50 AI agents
                balance the microgrid in real time.
              </p>

              {/* THE only navigate-to-dashboard button */}
              <button
                onClick={() => navigate('/start')}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl
                  bg-gradient-to-r from-emerald-500 to-green-500
                  text-white font-black text-xl
                  hover:from-emerald-400 hover:to-green-400
                  transition-all duration-300
                  shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60
                  hover:scale-105 active:scale-95"
              >
                {/* Shimmer overlay */}
                <span
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                    backgroundSize: '200% 100%',
                  }}
                />
                <Zap className="w-6 h-6 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Launch EcoSync Dashboard</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              </button>

              {/* Trust indicators */}
              <div className="mt-8 flex items-center justify-center gap-6 text-slate-500 text-sm flex-wrap">
                <span className="flex items-center gap-1.5">
                  <TrendingUp  className="w-3.5 h-3.5 text-emerald-500" /> Real-time data
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Blockchain-settled
                </span>
                <span className="flex items-center gap-1.5">
                  <Battery     className="w-3.5 h-3.5 text-emerald-500" /> 50 buildings live
                </span>
                <span className="flex items-center gap-1.5">
                  <Wifi        className="w-3.5 h-3.5 text-emerald-500" /> WebSocket streaming
                </span>
              </div>
            </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative border-t border-white/6 py-8 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-emerald-400 text-sm">EcoSync</span>
            <span className="text-slate-600 text-sm">— Smart City Energy Microgrid</span>
          </div>
          <span className="text-slate-700 text-xs">
            Built with ♥ for a sustainable future · MIT License
          </span>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section Heading helper
───────────────────────────────────────────── */
function SectionHeading({ tag, title, sub }: { tag: string; title: React.ReactNode; sub: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/4 text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">
        {tag}
      </div>
      <h2 className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {sub && <p className="text-slate-400 text-base max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}

`

## Modified/New File: app/src/pages/PostalMapView.tsx
Update or create this file with the exact contents below:
`tsx
import { useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Zap,
  MapPin,
  ArrowRight,
  Search,
  ArrowLeft,
  Layers,
  Navigation,
  Building2,
} from 'lucide-react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface LocationState {
  coords: { lat: number; lng: number };
  country: string;
  continent: string;
}

interface PostalRegion {
  pincode: string;
  name: string;
  bounds: [number, number, number, number]; // [minLng, minLat, maxLng, maxLat]
  center: [number, number]; // [lng, lat]
}

/* ─────────────────────────────────────────────
   MAIN PostalMapView Component
───────────────────────────────────────────── */
export default function PostalMapView() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  const [pincode, setPincode] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<PostalRegion | null>(null);
  const [showUI, setShowUI] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [mapReady, setMapReady] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [selectedBuildings, setSelectedBuildings] = useState<any[]>([]);

  const GEOAPIFY_KEY = import.meta.env.VITE_GEOAPIFY_KEY || '4c14b4dce95a40ee80535cd3f8888adf';

  // Default coords fallback to India
  const coords = state?.coords ?? { lat: 20.5937, lng: 78.9629 };
  const countryName = state?.country ?? 'India';

  /* ─── Initialize Map ─── */
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: `https://maps.geoapify.com/v1/styles/maptiler-3d/style.json?apiKey=${GEOAPIFY_KEY}`,
      center: [coords.lng, coords.lat],
      zoom: 15,
      pitch: 45,
      bearing: -15,
    });

    map.addControl(new maplibregl.NavigationControl(), 'bottom-right');

    map.on('load', () => {
      setMapReady(true);

      // Add a source for postal code regions
      map.addSource('postal-regions', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      });

      // Fill layer for postal regions
      map.addLayer({
        id: 'postal-regions-fill',
        type: 'fill',
        source: 'postal-regions',
        paint: {
          'fill-opacity': 0 // Hidden tracking layer
        },
      });

      // Border layer for postal regions
      map.addLayer({
        id: 'postal-regions-border',
        type: 'line',
        source: 'postal-regions',
        paint: {
          'line-opacity': 0 // Hidden tracking layer
        },
      });

      // Label layer for regions
      map.addLayer({
        id: 'postal-regions-label',
        type: 'symbol',
        source: 'postal-regions',
        layout: {
          'text-field': ['get', 'postcode'],
          'text-size': 11,
          'text-anchor': 'center',
          'text-allow-overlap': false,
        },
        paint: {
          'text-color': '#34d399',
          'text-halo-color': '#0f172a',
          'text-halo-width': 1.5,
        },
      });

      // Click handler
      map.on('click', 'postal-regions-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const props = feature.properties;
          const geometry = feature.geometry;

          let center: [number, number] = [coords.lng, coords.lat];
          if (geometry.type === 'Polygon') {
            // Calculate centroid
            const coords2d = (geometry as any).coordinates[0] as [number, number][];
            let lngSum = 0, latSum = 0;
            for (const [lng, lat] of coords2d) {
              lngSum += lng;
              latSum += lat;
            }
            center = [lngSum / coords2d.length, latSum / coords2d.length];
          }

          setSelectedRegion({
            pincode: props?.postcode || props?.name || 'Unknown',
            name: props?.name || props?.postcode || 'Selected Region',
            bounds: [0, 0, 0, 0],
            center,
          });
          setPincode(props?.postcode || '');

          highlightNearbyBuildings(center[0], center[1]);

          // Clear previous selection state
          const source = map.getSource('postal-regions') as maplibregl.GeoJSONSource;
          if (source) {
            // Set selected state on all features
            map.querySourceFeatures('postal-regions').forEach((f) => {
              if (f.id !== undefined) {
                map.setFeatureState(
                  { source: 'postal-regions', id: f.id },
                  { selected: f.id === feature.id }
                );
              }
            });
          }
        }
      });

      // Hover handler
      map.on('mousemove', 'postal-regions-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer';
        if (e.features && e.features.length > 0) {
          const id = e.features[0].id?.toString() ?? null;
          if (hoveredFeature !== id) {
            if (hoveredFeature) {
              map.setFeatureState(
                { source: 'postal-regions', id: Number(hoveredFeature) },
                { hover: false }
              );
            }
            if (id) {
              map.setFeatureState(
                { source: 'postal-regions', id: Number(id) },
                { hover: true }
              );
            }
            setHoveredFeature(id);
          }
        }
      });

      map.on('mouseleave', 'postal-regions-fill', () => {
        map.getCanvas().style.cursor = '';
        if (hoveredFeature) {
          map.setFeatureState(
            { source: 'postal-regions', id: Number(hoveredFeature) },
            { hover: false }
          );
          setHoveredFeature(null);
        }
      });

      // Load postal regions for the area
      loadPostalRegions(map, coords.lat, coords.lng);
      
      // Auto highlight buildings at start position after a short delay
      setTimeout(() => {
        highlightNearbyBuildings(coords.lng, coords.lat);
      }, 2000);
    });

    mapRef.current = map;
    setTimeout(() => setShowUI(true), 400);

    // Force resize after mount in case container dimensions weren't ready
    setTimeout(() => {
      map.resize();
    }, 100);
    setTimeout(() => {
      map.resize();
    }, 500);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ─── Load postal regions from Geoapify ─── */
  const loadPostalRegions = useCallback(
    async (map: maplibregl.Map, lat: number, lng: number) => {
      try {
        // Use Geoapify places API to get postal codes in the bounding area
        const radius = 10000; // 10km radius
        const url = `https://api.geoapify.com/v2/places?categories=postal_code&filter=circle:${lng},${lat},${radius}&limit=40&apiKey=${GEOAPIFY_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.features && data.features.length > 0) {
          // Generate rectangular bounds for each postal code
          const features = data.features.map((f: any, i: number) => {
            const [fLng, fLat] = f.geometry.coordinates;
            // Create small rectangular regions around each point
            const size = 0.005 + Math.random() * 0.003;
            return {
              type: 'Feature',
              id: i,
              properties: {
                postcode: f.properties.postcode || f.properties.name || `Zone-${i + 1}`,
                name: f.properties.name || f.properties.address_line1 || `Area ${i + 1}`,
              },
              geometry: {
                type: 'Polygon',
                coordinates: [[
                  [fLng - size, fLat - size],
                  [fLng + size, fLat - size],
                  [fLng + size, fLat + size],
                  [fLng - size, fLat + size],
                  [fLng - size, fLat - size],
                ]],
              },
            };
          });

          const source = map.getSource('postal-regions') as maplibregl.GeoJSONSource;
          if (source) {
            source.setData({
              type: 'FeatureCollection',
              features,
            });
          }
        } else {
          // Fallback: generate a grid of synthetic postal regions
          generateSyntheticGrid(map, lat, lng);
        }
      } catch (e) {
        console.error('Failed to load postal regions:', e);
        generateSyntheticGrid(map, lat, lng);
      }
    },
    [GEOAPIFY_KEY]
  );

  /* ─── Fallback grid generation ─── */
  const generateSyntheticGrid = (map: maplibregl.Map, lat: number, lng: number) => {
    const features = [];
    const gridSize = 6;
    const cellSize = 0.008;
    const startLat = lat - (gridSize * cellSize) / 2;
    const startLng = lng - (gridSize * cellSize) / 2;

    let id = 0;
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cLat = startLat + row * cellSize;
        const cLng = startLng + col * cellSize;
        const gap = 0.0005;
        features.push({
          type: 'Feature' as const,
          id: id++,
          properties: {
            postcode: `${Math.floor(100000 + Math.random() * 899999)}`,
            name: `Sector ${row * gridSize + col + 1}`,
          },
          geometry: {
            type: 'Polygon' as const,
            coordinates: [[
              [cLng + gap, cLat + gap],
              [cLng + cellSize - gap, cLat + gap],
              [cLng + cellSize - gap, cLat + cellSize - gap],
              [cLng + gap, cLat + cellSize - gap],
              [cLng + gap, cLat + gap],
            ]],
          },
        });
      }
    }

    const source = map.getSource('postal-regions') as maplibregl.GeoJSONSource;
    if (source) {
      source.setData({ type: 'FeatureCollection', features } as any);
    }
  };

  /* ─── Highlight 50 Nearby Buildings ─── */
  const highlightNearbyBuildings = useCallback((lng: number, lat: number) => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    
    // Find the building layer. Typically named 'buildings', '3d-buildings', or 'building-3d'
    const layers = map.getStyle().layers || [];
    const buildingLayer = layers.find(l => 
      (l.id.includes('building') || (l as any).sourceLayer?.includes('building')) && 
      l.type === 'fill-extrusion'
    );
    const layerId = buildingLayer ? buildingLayer.id : null;
    
    if (!layerId) return;

    try {
      const features = map.queryRenderedFeatures({ layers: [layerId] });
      
      // Calculate distances radiating outward from the center
      const featuresWithDist = features.map(f => {
        const geom = f.geometry;
        let bLng = lng, bLat = lat;
        if (geom.type === 'Polygon') {
          bLng = (geom as any).coordinates[0][0][0];
          bLat = (geom as any).coordinates[0][0][1];
        } else if (geom.type === 'MultiPolygon') {
          bLng = (geom as any).coordinates[0][0][0][0];
          bLat = (geom as any).coordinates[0][0][0][1];
        }
        const dist = Math.sqrt(Math.pow(bLng - lng, 2) + Math.pow(bLat - lat, 2));
        return { feature: f, dist };
      });
      
      // Select nearest 50 buildings and deep clone to pure GeoJSON
      featuresWithDist.sort((a, b) => a.dist - b.dist);
      const top50 = featuresWithDist.slice(0, 50).map(item => ({
        type: 'Feature' as const,
        geometry: JSON.parse(JSON.stringify(item.feature.geometry)),
        properties: JSON.parse(JSON.stringify(item.feature.properties || {}))
      }));
      
      setSelectedBuildings(top50);
      
      const sourceId = 'selected-buildings-source';
      const existingSource = map.getSource(sourceId) as maplibregl.GeoJSONSource;
      
      if (existingSource) {
        existingSource.setData({
          type: 'FeatureCollection',
          features: top50 as any
        });
      } else {
        map.addSource(sourceId, {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: top50 as any
          }
        });
        
        // Add a glowing emerald highlight layer over the selected 50 buildings
        map.addLayer({
          id: 'selected-buildings-highlight',
          type: 'fill-extrusion',
          source: sourceId,
          paint: {
            'fill-extrusion-color': '#10b981', // Emerald 500
            'fill-extrusion-height': ['+', ['coalesce', ['get', 'render_height'], ['get', 'height'], 20], 0.5],
            'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], ['get', 'min_height'], 0],
            'fill-extrusion-opacity': 0.85
          }
        });
      }
    } catch (e) {
      console.warn("Could not highlight 50 buildings:", e);
    }
  }, []);

  /* ─── Search by pincode ─── */
  const handlePincodeSearch = useCallback(async () => {
    if (!pincode.trim()) {
      setError('Please enter a postal code');
      return;
    }
    setError('');
    setIsLoading(true);

    try {
      let searchParams = `text=${encodeURIComponent(pincode.trim())}`;
      if (countryName && countryName.toLowerCase() !== 'india' && !pincode.toLowerCase().includes(countryName.toLowerCase())) {
        searchParams = `text=${encodeURIComponent(`${pincode.trim()}, ${countryName}`)}`;
      }

      const res = await fetch(
        `https://api.geoapify.com/v1/geocode/search?${searchParams}&type=postcode&bias=proximity:${coords.lng},${coords.lat}&limit=1&apiKey=${GEOAPIFY_KEY}`
      );
      const data = await res.json();

      if (data.features && data.features.length > 0) {
        const feature = data.features[0];
        const [lng, lat] = feature.geometry.coordinates;
        const props = feature.properties;

        setSelectedRegion({
          pincode: pincode.trim(),
          name: props.formatted || props.name || pincode.trim(),
          bounds: props.bbox || [lng - 0.01, lat - 0.01, lng + 0.01, lat + 0.01],
          center: [lng, lat],
        });

        // Fly to the location
        if (mapRef.current) {
          mapRef.current.flyTo({
            center: [lng, lat],
            zoom: 15, // Better zoom for 3D buildings
            pitch: 45,
            bearing: -15,
            duration: 2000,
          });

          // Reload postal regions for the new area
          setTimeout(() => {
            if (mapRef.current) {
              loadPostalRegions(mapRef.current, lat, lng);
              highlightNearbyBuildings(lng, lat);
            }
          }, 2500);
        }
      } else {
        setError('Postal code not found. Please try a different code.');
      }
    } catch (e) {
      console.error('Pincode search failed:', e);
      setError('Search failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [pincode, countryName, GEOAPIFY_KEY, loadPostalRegions]);

  /* ─── Start Simulation ─── */
  const handleStartSimulation = useCallback(() => {
    navigate('/dashboard', {
      state: {
        coords: selectedRegion
          ? { lat: selectedRegion.center[1], lng: selectedRegion.center[0] }
          : coords,
        pincode: selectedRegion?.pincode || pincode || '',
        regionName: selectedRegion?.name || countryName,
        buildings: selectedBuildings
      },
    });
  }, [navigate, selectedRegion, coords, pincode, countryName, selectedBuildings]);

  return (
    <div className="fixed inset-0 bg-slate-950 overflow-hidden">
      {/* Inline styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(16,185,129,0.3), 0 0 20px rgba(16,185,129,0.1); }
          50% { box-shadow: 0 0 20px rgba(16,185,129,0.5), 0 0 40px rgba(16,185,129,0.2); }
        }
        .maplibregl-ctrl-group {
          background: rgba(15,23,42,0.9) !important;
          border: 1px solid rgba(16,185,129,0.2) !important;
          border-radius: 8px !important;
          backdrop-filter: blur(10px) !important;
        }
        .maplibregl-ctrl-group button {
          border-bottom: 1px solid rgba(16,185,129,0.1) !important;
        }
        .maplibregl-ctrl-group button:hover {
          background: rgba(16,185,129,0.15) !important;
        }
        .maplibregl-ctrl-group button + button {
          border-top: none !important;
        }
        .maplibregl-ctrl-attrib {
          background: rgba(15,23,42,0.7) !important;
          color: rgba(148,163,184,0.5) !important;
          font-size: 9px !important;
        }
        .maplibregl-ctrl-attrib a {
          color: rgba(16,185,129,0.5) !important;
        }
      `}</style>

      {/* Map container - CSS invert ensures dark mode on standard MapTiler style */}
      <div 
        ref={mapContainerRef} 
        className="absolute inset-0" 
        style={{ 
          width: '100%', 
          height: '100%', 
          zIndex: 1,
          filter: 'invert(0.95) hue-rotate(180deg) saturate(1.2)' 
        }} 
      />

      {/* Top vignette */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,0.8), transparent)' }}
      />

      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          showUI ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo + Back */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/start')}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Globe
            </button>
            <div className="w-px h-5 bg-slate-700/50" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  EcoSync
                </h1>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest">
                  Area Selection
                </p>
              </div>
            </div>
          </div>

          {/* Country label */}
          <div className="hidden md:flex items-center gap-3 text-xs text-slate-500">
            <Navigation className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300 font-medium capitalize">{countryName}</span>
            <span className="text-slate-600">|</span>
            <span>
              {coords.lat.toFixed(4)}°, {coords.lng.toFixed(4)}°
            </span>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </header>

      {/* Side Panel */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-40 w-[360px] flex flex-col transition-all duration-700 ${
          showUI ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.88) 100%)',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(16,185,129,0.15)',
        }}
      >
        <div className="flex-1 flex flex-col px-6 py-20 overflow-y-auto">
          {/* Section header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] text-emerald-400 uppercase tracking-[0.2em] font-semibold">
                Postal Zone Selection
              </span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              Select Area
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                for Simulation
              </span>
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Click a postal zone on the map or enter a pincode below to select
              your simulation area. 3D buildings will render from real geospatial data.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-emerald-500/20 to-transparent mb-5" />

          {/* Pincode Search */}
          <div className="mb-5">
            <label className="block text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-2">
              Enter Postal Code
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => { setPincode(e.target.value); setError(''); }}
                  onKeyDown={(e) => e.key === 'Enter' && handlePincodeSearch()}
                  placeholder="e.g. 400001, 10115..."
                  className="w-full bg-slate-800/60 border border-slate-700/50 rounded-lg pl-9 pr-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              </div>
              <button
                onClick={handlePincodeSearch}
                disabled={isLoading}
                className="px-4 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all text-sm font-medium disabled:opacity-50"
              >
                {isLoading ? '...' : 'Go'}
              </button>
            </div>
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
          </div>

          {/* Selected Region Info */}
          {selectedRegion && (
            <div className="mb-5 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  Selected Zone
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Pincode:</span>
                  <span className="text-white font-mono font-bold">{selectedRegion.pincode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Area:</span>
                  <span className="text-white text-right text-xs max-w-[180px] truncate">
                    {selectedRegion.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Coords:</span>
                  <span className="text-slate-300 font-mono text-xs">
                    {selectedRegion.center[1].toFixed(4)}, {selectedRegion.center[0].toFixed(4)}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="h-px bg-gradient-to-r from-emerald-500/20 to-transparent mb-5" />

          {/* Simulation Info */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { label: 'Buildings', value: '50', icon: Building2 },
              { label: 'Agents', value: '50', icon: Zap },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="p-3 rounded-lg border border-slate-700/30 bg-slate-800/30"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</span>
                </div>
                <span className="text-lg font-bold text-white">{value}</span>
              </div>
            ))}
          </div>

          {/* Start Simulation Button */}
          <button
            onClick={handleStartSimulation}
            className="group w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-400 hover:to-green-400 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}
          >
            <Zap className="w-4 h-4" />
            Start Simulation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Helper text */}
          <p className="text-[10px] text-slate-600 text-center mt-3">
            Select a zone or enter a pincode, then start the simulation
          </p>
        </div>

        {/* Bottom edge glow */}
        <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0" />
      </div>

      {/* Bottom HUD */}
      <div
        className={`fixed bottom-0 left-0 right-[360px] z-40 transition-all duration-700 delay-200 ${
          showUI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div
          className="flex items-center justify-between px-6 py-2.5 text-xs text-slate-600"
          style={{
            background: 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.6))',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span>Geoapify Dark-Matter Tiles · Real-world Infrastructure</span>
          <div className="flex items-center gap-4">
            <span className={`transition-colors ${mapReady ? 'text-emerald-400' : 'text-slate-600'}`}>
              {mapReady ? '● Map Ready' : '○ Loading...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

`

## Modified/New File: app/src/pages/StartScreen.tsx
Update or create this file with the exact contents below:
`tsx
import { useRef, useState, useMemo, useCallback, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import {
  Zap,
  Globe,
  MapPin,
  ArrowRight,
  Search,
  ChevronDown,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Country → Lat/Lng lookup (commonly used)
───────────────────────────────────────────── */
const COUNTRY_COORDS: Record<string, { lat: number; lng: number }> = {
  'india':          { lat: 20.5937, lng: 78.9629 },
  'united states':  { lat: 37.0902, lng: -95.7129 },
  'united kingdom': { lat: 55.3781, lng: -3.4360 },
  'germany':        { lat: 51.1657, lng: 10.4515 },
  'france':         { lat: 46.2276, lng: 2.2137 },
  'japan':          { lat: 36.2048, lng: 138.2529 },
  'australia':      { lat: -25.2744, lng: 133.7751 },
  'brazil':         { lat: -14.2350, lng: -51.9253 },
  'canada':         { lat: 56.1304, lng: -106.3468 },
  'china':          { lat: 35.8617, lng: 104.1954 },
  'south korea':    { lat: 35.9078, lng: 127.7669 },
  'singapore':      { lat: 1.3521, lng: 103.8198 },
  'uae':            { lat: 23.4241, lng: 53.8478 },
  'south africa':   { lat: -30.5595, lng: 22.9375 },
  'mexico':         { lat: 23.6345, lng: -102.5528 },
  'italy':          { lat: 41.8719, lng: 12.5674 },
  'spain':          { lat: 40.4637, lng: -3.7492 },
  'russia':         { lat: 61.5240, lng: 105.3188 },
  'nigeria':        { lat: 9.0820, lng: 8.6753 },
  'indonesia':      { lat: -0.7893, lng: 113.9213 },
};

const CONTINENTS = [
  'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania',
];

/* ─────────────────────────────────────────────
   Helper: lat/lng → sphere position
───────────────────────────────────────────── */
function latLngToSphere(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

/* ─────────────────────────────────────────────
   Atmosphere glow shell
───────────────────────────────────────────── */
function Atmosphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.15}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial
        color="#10b981"
        transparent
        opacity={0.06}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/* ─────────────────────────────────────────────
   Globe mesh – wireframe earth
───────────────────────────────────────────── */
function GlobeMesh({ isAnimating }: { isAnimating: boolean }) {
  const globeRef = useRef<THREE.Group>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  
  // Load precise geographical topological representation of the continents
  const earthTexture = useLoader(THREE.TextureLoader, 'https://unpkg.com/three-globe/example/img/earth-night.jpg');

  useFrame((state) => {
    if (globeRef.current && !isAnimating) {
      globeRef.current.rotation.y += 0.002;
    }
    if (wireRef.current) {
      const pulse = 0.08 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
      (wireRef.current.material as THREE.MeshBasicMaterial).opacity = pulse;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Solid dark core with exact topological night map */}
      <mesh ref={innerRef} rotation={[0, -Math.PI / 2, 0]}>
        <sphereGeometry args={[1.98, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          color="#ffffff"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={wireRef}>
        <sphereGeometry args={[2, 48, 48]} />
        <meshBasicMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Grid lines – latitude */}
      {[-60, -30, 0, 30, 60].map((lat) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const r = 2.02 * Math.sin(phi);
        const y = 2.02 * Math.cos(phi);
        return (
          <mesh key={`lat-${lat}`} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[r - 0.003, r + 0.003, 128]} />
            <meshBasicMaterial color="#10b981" transparent opacity={0.15} side={THREE.DoubleSide} />
          </mesh>
        );
      })}

      {/* Grid lines – longitude */}
      {Array.from({ length: 12 }, (_, i) => i * 30).map((lng) => {
        const theta = lng * (Math.PI / 180);
        return (
          <mesh key={`lng-${lng}`} rotation={[0, theta, 0]}>
            <ringGeometry args={[1.99, 2.03, 128]} />
            <meshBasicMaterial color="#10b981" transparent opacity={0.08} side={THREE.DoubleSide} />
          </mesh>
        );
      })}

      <Atmosphere />
    </group>
  );
}

/* ─────────────────────────────────────────────
   Orbital particles
───────────────────────────────────────────── */
function OrbitalParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#34d399"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* ─────────────────────────────────────────────
   Connection arcs between random points
───────────────────────────────────────────── */
function ConnectionArcs() {
  const arcs = useMemo(() => {
    const result: THREE.BufferGeometry[] = [];
    const pairs = [
      { from: { lat: 20, lng: 78 }, to: { lat: 37, lng: -95 } },
      { from: { lat: 51, lng: 10 }, to: { lat: 35, lng: 139 } },
      { from: { lat: -33, lng: 151 }, to: { lat: 1, lng: 103 } },
      { from: { lat: 40, lng: -3 }, to: { lat: -14, lng: -51 } },
      { from: { lat: 55, lng: 37 }, to: { lat: 23, lng: 53 } },
    ];

    for (const { from, to } of pairs) {
      const start = latLngToSphere(from.lat, from.lng, 2.02);
      const end = latLngToSphere(to.lat, to.lng, 2.02);
      const mid = start.clone().add(end).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(3.2);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(50);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      result.push(geo);
    }
    return result;
  }, []);

  return (
    <group>
      {arcs.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial
            color="#10b981"
            transparent
            opacity={0.25}
            linewidth={1}
          />
        </line>
      ))}
    </group>
  );
}

/* ─────────────────────────────────────────────
   Location pin marker on globe
───────────────────────────────────────────── */
function LocationPin({ lat, lng }: { lat: number; lng: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const pos = useMemo(() => latLngToSphere(lat, lng, 2.05), [lat, lng]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.2);
    }
  });

  return (
    <mesh ref={ref} position={pos}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshBasicMaterial color="#10b981" />
    </mesh>
  );
}

/* ─────────────────────────────────────────────
   Camera fly-to animation controller
───────────────────────────────────────────── */
function CameraAnimator({
  target,
  isAnimating,
  onComplete,
}: {
  target: THREE.Vector3 | null;
  isAnimating: boolean;
  onComplete: () => void;
}) {
  const { camera } = useThree();
  const progressRef = useRef(0);
  const startPosRef = useRef(new THREE.Vector3());
  const startedRef = useRef(false);

  useEffect(() => {
    if (isAnimating && target) {
      startPosRef.current.copy(camera.position);
      progressRef.current = 0;
      startedRef.current = true;
    }
  }, [isAnimating, target, camera]);

  useFrame(() => {
    if (!startedRef.current || !target || !isAnimating) return;

    progressRef.current += 0.008;
    const t = Math.min(progressRef.current, 1);
    // Ease-in-out cubic
    const ease = t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const targetPos = target.clone().normalize().multiplyScalar(4);
    camera.position.lerpVectors(startPosRef.current, targetPos, ease);
    camera.lookAt(0, 0, 0);

    if (t >= 1) {
      startedRef.current = false;
      onComplete();
    }
  });

  return null;
}

/* ─────────────────────────────────────────────
   Globe Scene
───────────────────────────────────────────── */
function GlobeScene({
  targetCoords,
  isAnimating,
  onAnimationComplete,
}: {
  targetCoords: { lat: number; lng: number } | null;
  isAnimating: boolean;
  onAnimationComplete: () => void;
}) {
  const targetVec = useMemo(() => {
    if (!targetCoords) return null;
    return latLngToSphere(targetCoords.lat, targetCoords.lng, 2);
  }, [targetCoords]);

  return (
    <>
      <Suspense fallback={null}>
        <GlobeMesh isAnimating={isAnimating} />
      </Suspense>
      <OrbitalParticles />
      <ConnectionArcs />

      {targetCoords && (
        <LocationPin lat={targetCoords.lat} lng={targetCoords.lng} />
      )}

      <CameraAnimator
        target={targetVec}
        isAnimating={isAnimating}
        onComplete={onAnimationComplete}
      />

      {/* Lights */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 3, 5]} intensity={0.4} color="#e2e8f0" />
      <pointLight position={[-5, -3, -5]} intensity={0.2} color="#10b981" />

      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={3}
        saturation={0}
        fade
        speed={0.3}
      />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={!isAnimating}
        minDistance={3.5}
        maxDistance={12}
        autoRotate={!isAnimating}
        autoRotateSpeed={0.3}
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   Scanning radar line CSS animation
───────────────────────────────────────────── */
const scanlineStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  background: 'linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.03) 50%, transparent 100%)',
  backgroundSize: '100% 200%',
  animation: 'scanlineMove 4s linear infinite',
};

/* ─────────────────────────────────────────────
   MAIN StartScreen Component
───────────────────────────────────────────── */
export default function StartScreen() {
  const navigate = useNavigate();
  const [continent, setContinent] = useState('');
  const [country, setCountry] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetCoords, setTargetCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [showUI, setShowUI] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => setShowUI(true), 300);
  }, []);

  const handleExplore = useCallback(async () => {
    if (!country.trim()) {
      setError('Please enter a country name');
      return;
    }
    setError('');

    const key = country.trim().toLowerCase();
    let coords = COUNTRY_COORDS[key];

    // If not in local lookup, try Geoapify geocoding
    if (!coords) {
      try {
        const apiKey = import.meta.env.VITE_GEOAPIFY_KEY || '4c14b4dce95a40ee80535cd3f8888adf';
        const q = encodeURIComponent(`${country}, ${continent}`);
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${q}&limit=1&apiKey=${apiKey}`
        );
        const data = await res.json();
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].geometry.coordinates;
          coords = { lat, lng };
        }
      } catch (e) {
        console.error('Geocoding failed:', e);
      }
    }

    if (!coords) {
      setError('Country not found. Please check the name and try again.');
      return;
    }

    setTargetCoords(coords);
    setIsAnimating(true);
  }, [country, continent]);

  const handleAnimationComplete = useCallback(() => {
    // After fly-to completes, transition to postal map view
    setTimeout(() => {
      navigate('/map', {
        state: {
          coords: targetCoords,
          country: country.trim(),
          continent: continent,
        },
      });
    }, 800);
  }, [navigate, targetCoords, country, continent]);

  return (
    <div className="fixed inset-0 bg-slate-950 overflow-hidden">
      {/* Inject scanline animation */}
      <style>{`
        @keyframes scanlineMove {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 200%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(16,185,129,0.3), 0 0 20px rgba(16,185,129,0.1); }
          50% { box-shadow: 0 0 20px rgba(16,185,129,0.5), 0 0 40px rgba(16,185,129,0.2); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(16,185,129,0.2); }
          50% { border-color: rgba(16,185,129,0.5); }
        }
      `}</style>

      {/* Background grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Scanline overlay */}
      <div style={scanlineStyle} />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 60% 50%, rgba(16,185,129,0.04) 0%, transparent 70%)',
        }}
      />

      {/* 3D Globe Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          style={{ background: 'transparent' }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
        >
          <GlobeScene
            targetCoords={targetCoords}
            isAnimating={isAnimating}
            onAnimationComplete={handleAnimationComplete}
          />
        </Canvas>
      </div>

      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          showUI ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-emerald-500/20 rounded-lg blur-sm animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                EcoSync
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                Global Command
              </p>
            </div>
          </div>

          {/* Status bar */}
          <div className="hidden md:flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 font-medium">LIVE</span>
            </div>
            <span className="text-slate-600">|</span>
            <span>Global Overview</span>
            <span className="text-slate-600">|</span>
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </header>

      {/* Side Panel */}
      <div
        className={`fixed left-0 top-0 bottom-0 z-40 w-[380px] flex flex-col transition-all duration-700 ${
          showUI ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 100%)',
          backdropFilter: 'blur(20px)',
          borderRight: '1px solid rgba(16,185,129,0.15)',
        }}
      >
        {/* Panel content with padding to account for header */}
        <div className="flex-1 flex flex-col justify-center px-8 py-20">
          {/* Section title */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] text-emerald-400 uppercase tracking-[0.2em] font-semibold">
                Select Location
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Global Energy
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Grid Explorer
              </span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Choose a region to explore its energy infrastructure. The simulation
              will generate a real-world area model using live geospatial data.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-emerald-500/20 to-transparent mb-6" />

          {/* Form */}
          <div className="space-y-4">
            {/* Continent Dropdown */}
            <div>
              <label className="block text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-2">
                Continent
              </label>
              <div className="relative">
                <select
                  value={continent}
                  onChange={(e) => setContinent(e.target.value)}
                  className="w-full bg-slate-800/60 border border-slate-700/50 rounded-lg px-4 py-3 text-sm text-slate-200 appearance-none cursor-pointer focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-200"
                  style={{ animation: 'borderGlow 3s ease-in-out infinite' }}
                >
                  <option value="">Select continent...</option>
                  {CONTINENTS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>
            </div>

            {/* Country Input */}
            <div>
              <label className="block text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-2">
                Country
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={country}
                  onChange={(e) => { setCountry(e.target.value); setError(''); }}
                  onKeyDown={(e) => e.key === 'Enter' && handleExplore()}
                  placeholder="e.g. India, Germany, Japan..."
                  className="w-full bg-slate-800/60 border border-slate-700/50 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-xs">{error}</p>
            )}

            {/* Explore Button */}
            <button
              onClick={handleExplore}
              disabled={isAnimating}
              className={`group w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                isAnimating
                  ? 'bg-emerald-500/20 text-emerald-300/50 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-400 hover:to-green-400 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95'
              }`}
              style={!isAnimating ? { animation: 'pulseGlow 3s ease-in-out infinite' } : undefined}
            >
              {isAnimating ? (
                <>
                  <div className="w-4 h-4 border-2 border-emerald-300/30 border-t-emerald-300 rounded-full animate-spin" />
                  Navigating...
                </>
              ) : (
                <>
                  <MapPin className="w-4 h-4" />
                  Explore Region
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-emerald-500/20 to-transparent mt-6 mb-6" />

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Regions', value: '195+', icon: Globe },
              { label: 'Grid Nodes', value: '50', icon: Zap },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="p-3 rounded-lg border border-slate-700/30 bg-slate-800/30"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</span>
                </div>
                <span className="text-lg font-bold text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom edge glow */}
        <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0" />
      </div>

      {/* Bottom HUD bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-700 delay-200 ${
          showUI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div
          className="flex items-center justify-between px-6 py-3 text-xs text-slate-600"
          style={{
            background: 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.7))',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span>EcoSync v2.0 — Intelligent Energy Grid Balancer</span>
          <div className="flex items-center gap-4">
            <span>Lat: {targetCoords?.lat.toFixed(2) ?? '—'}</span>
            <span>Lng: {targetCoords?.lng.toFixed(2) ?? '—'}</span>
            <span className="text-emerald-400">● System Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}

`

## Modified/New File: app/src/types/index.ts
Update or create this file with the exact contents below:
`ts
// EcoSync Type Definitions

export interface BuildingTelemetry {
  building_id: number;
  load: number;
  solar_generation: number;
  battery_soc: number;
  grid_frequency: number;
  is_selling: boolean;
  is_buying: boolean;
  is_critical: boolean;
  is_priority: boolean;
  building_type: string;
  net_energy: number;
  timestamp: string;
}

export interface AgentLog {
  agent_id: number;
  building_type: string;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'critical' | 'negotiation';
  state: string;
  battery_soc: number;
  net_energy: number;
}

export interface GridEvent {
  type: 'cloud_cover' | 'grid_failure' | 'price_update' | 'weather_change';
  active: boolean;
  intensity?: number;
  price?: number;
  weather?: string;
  duration?: number;
  timestamp: string;
}

export interface MarketStatus {
  current_price: number;
  trades_today: number;
  total_volume: number;
  grid_stability: number;
  active_sellers: number;
  active_buyers: number;
  critical_buildings: number;
}

export interface AnalyticsSummary {
  total_load: number;
  total_generation: number;
  net_grid_flow: number;
  avg_battery_soc: number;
  grid_efficiency: number;
  building_count: number;
  timestamp: string;
}

export interface Trade {
  buyer_id: number;
  seller_id: number;
  amount: number;
  price: number;
  total_cost: number;
  timestamp: string;
}

export interface AgentStatus {
  agent_id: number;
  building_type: string;
  state: string;
  balance: number;
  reputation: number;
  battery_soc: number;
  net_energy: number;
  is_selling: boolean;
  is_buying: boolean;
  trades_completed: number;
  recent_logs: AgentLog[];
}

`

## Modified/New File: app/test_puppet.mjs
Update or create this file with the exact contents below:
`mjs
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173/map', {waitUntil: 'networkidle0'});
  
  // Wait a bit and search
  await new Promise(r => setTimeout(r, 2000));
  await page.type('input[placeholder="e.g., 400001"]', '400001');
  await page.click('button.bg-emerald-600'); // Go button is probably this, or text/Go
  
  // Quick specific click on Go
  await page.evaluate(() => {
     const btns = Array.from(document.querySelectorAll('button'));
     const goBtn = btns.find(b => b.textContent && b.textContent.includes('Go'));
     if (goBtn) goBtn.click();
  });
  
  // Wait 8s for map
  await new Promise(r => setTimeout(r, 8000));
  
  // Click Start Simulation
  await page.evaluate(() => {
     const btns = Array.from(document.querySelectorAll('button'));
     const startBtn = btns.find(b => b.textContent && b.textContent.includes('Start Simulation'));
     if (startBtn) startBtn.click();
  });
  
  // Wait for Dashboard
  await new Promise(r => setTimeout(r, 5000));
  
  // Extract state
  const data = await page.evaluate(() => {
     return {
         path: window.location.pathname,
         buildingsLength: window.history.state.usr?.buildings?.length,
         firstBuildingType: window.history.state.usr?.buildings?.[0]?.geometry?.type,
         firstBuildingCoords: window.history.state.usr?.buildings?.[0]?.geometry?.coordinates
     };
  });
  
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();

`

## Modified/New File: app/vercel.json
Update or create this file with the exact contents below:
`json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "https://ryanblad3-ecosync-live.hf.space/api/$1" },
    { "source": "/ws", "destination": "https://ryanblad3-ecosync-live.hf.space/ws" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

`

## Modified/New File: backend/api/main.py
Update or create this file with the exact contents below:
`py
"""
EcoSync FastAPI Backend
Real-time API with WebSocket support for the EcoSync system
"""
import json
import asyncio
import time
from collections import deque
from datetime import datetime
from typing import Dict, List, Optional, Any
from contextlib import asynccontextmanager

import paho.mqtt.client as mqtt
from fastapi import FastAPI, BackgroundTasks, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os

from config.settings import mqtt_config, api_config

# ── In-memory storage (O(1) bounded with deque) ──────────────────────────────
building_data: Dict[int, dict] = {}
grid_events: deque  = deque(maxlen=100)
agent_logs:  deque  = deque(maxlen=500)
trades:      deque  = deque(maxlen=100)

market_data = {
    "current_price":  0.15,
    "trades_today":   0,
    "total_volume":   0.0,
    "grid_stability": 100.0,
}

# ── Analytics cache (5-second TTL) ───────────────────────────────────────────
_analytics_cache: Optional[dict] = None
_analytics_cache_ts: float = 0.0
_ANALYTICS_TTL: float = 5.0          # seconds


def _build_analytics() -> dict:
    """Compute analytics summary from current building data."""
    if not building_data:
        return {
            "total_load": 0, "total_generation": 0, "net_grid_flow": 0,
            "avg_battery_soc": 0, "grid_efficiency": 0, "building_count": 0,
            "timestamp": datetime.now().isoformat(),
        }
    values = list(building_data.values())
    total_load = sum(b.get("load", 0) for b in values)
    total_gen  = sum(b.get("solar_generation", 0) for b in values)
    avg_soc    = sum(b.get("battery_soc", 0) for b in values) / len(values)
    local_consumption = sum(
        min(b.get("load", 0), b.get("solar_generation", 0)) for b in values
    )
    efficiency = (local_consumption / total_gen * 100) if total_gen > 0 else 0
    return {
        "total_load":       round(total_load, 2),
        "total_generation": round(total_gen, 2),
        "net_grid_flow":    round(total_load - total_gen, 2),
        "avg_battery_soc":  round(avg_soc, 2),
        "grid_efficiency":  round(efficiency, 2),
        "building_count":   len(values),
        "timestamp":        datetime.now().isoformat(),
    }


# ── WebSocket connection manager ──────────────────────────────────────────────
class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        print(f"🔌 WebSocket client connected. Total: {len(self.active_connections)}")

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
            print(f"🔌 WebSocket client disconnected. Total: {len(self.active_connections)}")

    async def broadcast(self, message: dict):
        """Broadcast concurrently — one slow/dead client won't block others."""
        if not self.active_connections:
            return

        async def _send(ws: WebSocket):
            try:
                await ws.send_json(message)
            except Exception:
                self.disconnect(ws)

        await asyncio.gather(*[_send(ws) for ws in list(self.active_connections)],
                             return_exceptions=True)


manager = ConnectionManager()
main_loop: Optional[asyncio.AbstractEventLoop] = None


def broadcast_safe(msg: dict):
    """Thread-safe bridge: schedule a broadcast from a sync thread."""
    if main_loop and main_loop.is_running():
        asyncio.run_coroutine_threadsafe(manager.broadcast(msg), main_loop)


# ── MQTT Client ────────────────────────────────────────────────────────────────
mqtt_client = mqtt.Client(
    client_id="fastapi_bridge",
    callback_api_version=mqtt.CallbackAPIVersion.VERSION1,
)


def on_mqtt_connect(client, userdata, flags, rc):
    if rc == 0:
        print("✅ MQTT Bridge: Connected to broker")
        client.subscribe("ecosync/building/+/telemetry")
        client.subscribe("ecosync/grid/events")
        client.subscribe("ecosync/agents/+/logs")
        client.subscribe("ecosync/market/trades")
        print("📡 MQTT Bridge: Subscribed to all topics")
    else:
        print(f"❌ MQTT Bridge: Connection failed with code {rc}")


def on_mqtt_message(client, userdata, msg):
    global _analytics_cache, _analytics_cache_ts
    try:
        topic   = msg.topic
        payload = json.loads(msg.payload.decode())

        if "telemetry" in topic:
            building_id = int(topic.split("/")[2])
            if "timestamp" not in payload:
                payload["timestamp"] = datetime.now().isoformat()
            building_data[building_id] = payload
            # Invalidate analytics cache on new telemetry
            _analytics_cache_ts = 0.0
            broadcast_safe({"type": "telemetry", "data": payload})

        elif "grid/events" in topic:
            event_data = {"timestamp": datetime.now().isoformat(), "event": payload}
            grid_events.append(event_data)           # deque auto-trims
            if payload.get("type") == "price_update":
                market_data["current_price"] = payload.get("price", 0.15)
            broadcast_safe({"type": "grid_event", "data": payload})

        elif "agents" in topic and "logs" in topic:
            agent_logs.append(payload)               # deque auto-trims
            broadcast_safe({"type": "agent_log", "data": payload})

        elif "market/trades" in topic:
            trades.append(payload)                   # deque auto-trims
            market_data["trades_today"]  += 1
            market_data["total_volume"]  += payload.get("amount", 0)
            broadcast_safe({"type": "trade", "data": payload})

    except Exception as e:
        print(f"⚠️ Error processing MQTT message: {e}")


# ── Pydantic models ───────────────────────────────────────────────────────────
class BuildingTelemetry(BaseModel):
    building_id:      int
    load:             float
    solar_generation: float
    battery_soc:      float
    grid_frequency:   float
    is_selling:       bool
    is_buying:        bool
    is_critical:      bool
    is_priority:      bool
    building_type:    str
    net_energy:       float
    timestamp:        str


class GridEventModel(BaseModel):
    type:      str
    active:    bool
    intensity: Optional[float] = None
    price:     Optional[float] = None
    timestamp: str


class MarketStatus(BaseModel):
    current_price:      float
    trades_today:       int
    total_volume:       float
    grid_stability:     float
    active_sellers:     int
    active_buyers:      int
    critical_buildings: int


class TradeRequest(BaseModel):
    buyer_id:  int
    seller_id: int
    amount:    float   # kWh
    price:     float   # $/kWh


class GridEventTrigger(BaseModel):
    event_type: str               # cloud_cover, grid_failure, price_update, weather_change
    intensity:  Optional[float] = 0.8
    duration:   int = 30
    price:      Optional[float] = None
    weather:    Optional[str] = None


# ── Lifespan ──────────────────────────────────────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    global main_loop
    main_loop = asyncio.get_running_loop()
    print("\n" + "="*70)
    print("  🚀 EcoSync FastAPI Backend Starting...")
    print("="*70 + "\n")

    mqtt_client.on_connect = on_mqtt_connect
    mqtt_client.on_message = on_mqtt_message
    try:
        mqtt_client.connect(mqtt_config.broker_host, mqtt_config.broker_port, 60)
        mqtt_client.loop_start()
        print(f"✅ Connected to MQTT at {mqtt_config.broker_host}:{mqtt_config.broker_port}")
    except Exception as e:
        print(f"⚠️ MQTT connection failed: {e}")

    yield

    print("\n" + "="*70)
    print("  🛑 EcoSync FastAPI Backend Shutting down...")
    print("="*70 + "\n")
    mqtt_client.loop_stop()
    mqtt_client.disconnect()


# ── FastAPI app ───────────────────────────────────────────────────────────────
app = FastAPI(
    title="EcoSync API",
    description="Smart City Energy Microgrid API — Real-time P2P energy trading with AI agents",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=api_config.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Endpoints ─────────────────────────────────────────────────────────────────
@app.get("/api/health")
async def root():
    return {
        "name": "EcoSync API", "version": "1.0.0", "status": "operational",
        "features": [
            "Real-time building telemetry", "AI agent orchestration",
            "P2P energy trading", "Grid event management", "WebSocket streaming",
        ],
    }


@app.get("/api/buildings", response_model=List[dict])
async def get_all_buildings():
    return list(building_data.values())


@app.get("/api/buildings/{building_id}")
async def get_building(building_id: int):
    if building_id not in building_data:
        raise HTTPException(status_code=404, detail="Building not found")
    return building_data[building_id]


@app.get("/api/market/status")
async def get_market_status():
    values = list(building_data.values())
    return {
        "current_price":      market_data["current_price"],
        "trades_today":       market_data["trades_today"],
        "total_volume":       round(market_data["total_volume"], 2),
        "grid_stability":     market_data["grid_stability"],
        "active_sellers":     sum(1 for b in values if b.get("is_selling")),
        "active_buyers":      sum(1 for b in values if b.get("is_buying")),
        "critical_buildings": sum(1 for b in values if b.get("is_critical")),
    }


@app.get("/api/grid/events")
async def get_grid_events(limit: int = 10):
    events = list(grid_events)
    return events[-limit:]


@app.post("/api/grid/event")
async def trigger_grid_event(event: GridEventTrigger, background_tasks: BackgroundTasks):
    """
    Trigger a grid event.

    FIX: previously called `await asyncio.sleep(duration)` inside the handler,
    blocking the entire event loop for 30–60 s.  Now the deactivation is
    scheduled as a BackgroundTask so the response returns immediately.
    """
    event_payload = {
        "type":      event.event_type,
        "active":    True,
        "timestamp": datetime.now().isoformat(),
    }

    if event.event_type == "cloud_cover":
        event_payload["intensity"] = event.intensity
    elif event.event_type == "price_update":
        event_payload["price"] = event.price or market_data["current_price"]
    elif event.event_type == "weather_change":
        event_payload["weather"] = event.weather

    mqtt_client.publish("ecosync/grid/events", json.dumps(event_payload))

    # Schedule deactivation as a background task (non-blocking)
    if event.duration > 0:
        async def _deactivate(payload: dict, delay: int):
            await asyncio.sleep(delay)
            payload = {**payload, "active": False, "timestamp": datetime.now().isoformat()}
            mqtt_client.publish("ecosync/grid/events", json.dumps(payload))
            await manager.broadcast({"type": "grid_event", "data": payload})

        background_tasks.add_task(_deactivate, event_payload, event.duration)

    return {"status": "success", "event": event_payload}


@app.post("/api/trade")
async def execute_trade(trade: TradeRequest):
    if trade.buyer_id not in building_data:
        raise HTTPException(status_code=404, detail="Buyer building not found")
    if trade.seller_id not in building_data:
        raise HTTPException(status_code=404, detail="Seller building not found")

    market_data["trades_today"] += 1
    market_data["total_volume"] += trade.amount

    trade_msg = {
        "type":       "trade_executed",
        "buyer_id":   trade.buyer_id,
        "seller_id":  trade.seller_id,
        "amount":     trade.amount,
        "price":      trade.price,
        "total_cost": trade.amount * trade.price,
        "timestamp":  datetime.now().isoformat(),
    }
    mqtt_client.publish("ecosync/market/trades", json.dumps(trade_msg))
    mqtt_client.publish(
        f"ecosync/building/{trade.seller_id}/commands",
        json.dumps({"command": "trade_completed", "role": "seller", "amount": trade.amount}),
    )
    mqtt_client.publish(
        f"ecosync/building/{trade.buyer_id}/commands",
        json.dumps({"command": "trade_completed", "role": "buyer", "amount": trade.amount}),
    )
    await manager.broadcast({"type": "trade", "data": trade_msg})
    return {"status": "success", "trade": trade_msg}


@app.get("/api/analytics/summary")
async def get_analytics_summary():
    """Return grid analytics.  Cached for 5 s to avoid recomputing on every poll."""
    global _analytics_cache, _analytics_cache_ts
    now = time.monotonic()
    if _analytics_cache is None or (now - _analytics_cache_ts) > _ANALYTICS_TTL:
        _analytics_cache    = _build_analytics()
        _analytics_cache_ts = now
    return _analytics_cache


@app.get("/api/agents/logs")
async def get_agent_logs(limit: int = 100):
    logs = list(agent_logs)
    return logs[-limit:]


@app.get("/api/trades")
async def get_trades(limit: int = 20):
    t = list(trades)
    return t[-limit:]


# ── WebSocket endpoint ────────────────────────────────────────────────────────
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        # Send current snapshot to new client
        await websocket.send_json({
            "type": "buildings_list",
            "data": list(building_data.values()),
        })

        while True:
            data = await websocket.receive_text()
            try:
                msg    = json.loads(data)
                action = msg.get("action")

                if action == "get_buildings":
                    await websocket.send_json({
                        "type": "buildings_list",
                        "data": list(building_data.values()),
                    })
                elif action == "get_logs":
                    limit = msg.get("limit", 100)
                    logs  = list(agent_logs)
                    await websocket.send_json({
                        "type": "logs_list",
                        "data": logs[-limit:],
                    })
            except json.JSONDecodeError:
                pass

    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception as e:
        print(f"WebSocket error: {e}")
        manager.disconnect(websocket)

# ── React SPA Serving Removed (Decoupled Frontend) ───────────────────────────
# The frontend is now meant to be hosted separately (e.g. on Vercel)
# while this FastAPI server acts solely as the backend data and WebSocket provider.


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=api_config.host, port=api_config.port, log_level="info")

`

## Modified/New File: backend/iot_simulator/building.py
Update or create this file with the exact contents below:
`py
"""
EcoSync Smart Building Simulator
Individual building MQTT client with realistic energy simulation
"""
import json
import random
import time
import threading
import numpy as np
from datetime import datetime
from typing import Dict, Optional, Callable
import paho.mqtt.client as mqtt

from config.settings import mqtt_config


class SmartBuilding:
    """
    Simulates a smart building with solar generation, battery storage,
    and dynamic energy consumption patterns.
    """
    
    def __init__(
        self,
        building_id: int,
        mqtt_broker: str = None,
        mqtt_port: int = None,
        base_load: float = 50.0,  # kW
        solar_capacity: float = 100.0,  # kW
        battery_capacity: float = 200.0,  # kWh
        building_type: str = "residential"
    ):
        self.building_id = building_id
        self.mqtt_broker = mqtt_broker or mqtt_config.broker_host
        self.mqtt_port = mqtt_port or mqtt_config.broker_port
        
        # Building characteristics
        self.building_type = building_type
        self.base_load = base_load
        self.solar_capacity = solar_capacity
        self.battery_capacity = battery_capacity
        
        # Current state
        self.current_load = base_load
        self.solar_generation = 0.0
        self.battery_soc = random.uniform(30.0, 80.0)  # Start with random charge
        self.grid_frequency = 50.0  # Hz
        self.temperature = 22.0  # Celsius
        
        # Status flags
        self.is_selling = False
        self.is_buying = False
        self.is_critical = False
        self.cloud_cover_active = False
        self.grid_failure = False
        
        # MQTT client
        self.client = mqtt.Client(
            client_id=f"building_{building_id}",
            callback_api_version=mqtt.CallbackAPIVersion.VERSION1
        )
        self.client.on_connect = self._on_connect
        self.client.on_message = self._on_message
        self.client.on_disconnect = self._on_disconnect
        
        # Simulation thread
        self.running = False
        self._stop_event = threading.Event()          # ← fast-wakeup on stop
        self.thread: Optional[threading.Thread] = None
        self.telemetry_callback: Optional[Callable] = None
        
        # Priority buildings (hospitals, data centers)
        self.is_priority = building_type in ["hospital", "datacenter", "emergency"]
        
        # Statistics
        self.total_energy_generated = 0.0
        self.total_energy_consumed = 0.0
        self.trades_completed = 0

        # Track previous status string so we only log on change
        self._last_status: str = ""
        self._mqtt_connected: bool = False
        
    def _on_connect(self, client, userdata, flags, rc):
        """Callback when connected to MQTT broker"""
        if rc == 0:
            self._mqtt_connected = True
            # Subscribe to global grid events
            self.client.subscribe("ecosync/grid/events")
            # Subscribe to individual building commands
            self.client.subscribe(f"ecosync/building/{self.building_id}/commands")
        else:
            self._mqtt_connected = False
    
    def _on_disconnect(self, client, userdata, rc):
        """Callback when disconnected from MQTT broker"""
        self._mqtt_connected = False
    
    def _on_message(self, client, userdata, msg):
        """Handle incoming MQTT messages"""
        try:
            topic = msg.topic
            payload = json.loads(msg.payload.decode())
            
            if topic == "ecosync/grid/events":
                self._handle_grid_event(payload)
            elif topic == f"ecosync/building/{self.building_id}/commands":
                self._handle_command(payload)
        except Exception as e:
            print(f"⚠️ Building {self.building_id}: Error processing message - {e}")
    
    def _handle_grid_event(self, event: Dict):
        """Process global grid events"""
        event_type = event.get("type")
        
        if event_type == "cloud_cover":
            self.cloud_cover_active = event.get("active", False)
            intensity = event.get("intensity", 0.8)
            if self.cloud_cover_active:
                print(f"☁️  Building {self.building_id}: Cloud cover - solar reduced by {intensity*100:.0f}%")
        
        elif event_type == "grid_failure":
            self.grid_failure = event.get("active", False)
            if self.grid_failure:
                print(f"🚨 Building {self.building_id}: GRID FAILURE - Island mode activated")
                self.grid_frequency = 0.0
            else:
                print(f"✅ Building {self.building_id}: Grid restored")
                self.grid_frequency = 50.0
        
        elif event_type == "price_update":
            self.current_price = event.get("price", 0.15)
            
        elif event_type == "weather_change":
            weather = event.get("weather", "CLEAR")
            self.current_weather = weather
            if weather == "OVERCAST":
                self.cloud_cover_active = True
                self.cloud_intensity = 0.6
                print(f"☁️  Building {self.building_id}: Weather changed to OVERCAST")
            elif weather == "STORM":
                self.cloud_cover_active = True
                self.cloud_intensity = 0.95
                print(f"⛈️ Building {self.building_id}: Weather changed to STORM")
            elif weather == "HEAT_WAVE":
                self.cloud_cover_active = False
                print(f"🌊 Building {self.building_id}: Weather changed to HEAT_WAVE (High AC Load)")
            elif weather == "BLIZZARD":
                self.cloud_cover_active = True
                self.cloud_intensity = 0.99
                print(f"❄️ Building {self.building_id}: Weather changed to BLIZZARD (High Heating Load, No Solar)")
            else: # CLEAR
                self.cloud_cover_active = False
                self.cloud_intensity = 0.0
                print(f"☀️ Building {self.building_id}: Weather changed to CLEAR")
    
    def _handle_command(self, command: Dict):
        """Process individual building commands"""
        cmd_type = command.get("command")
        
        if cmd_type == "force_discharge":
            amount = command.get("amount", 50.0)
            self._discharge_battery(amount)
            print(f"🔋 Building {self.building_id}: Force discharged {amount}kWh")
        elif cmd_type == "force_charge":
            amount = command.get("amount", 50.0)
            self._charge_battery(amount)
            print(f"🔌 Building {self.building_id}: Force charged {amount}kWh")
        elif cmd_type == "emergency_mode":
            self.is_critical = True
            print(f"🚨 Building {self.building_id}: EMERGENCY MODE ACTIVATED")
        elif cmd_type == "trade_completed":
            self.trades_completed += 1
            amount = command.get("amount", 0)
            if command.get("role") == "seller":
                self._discharge_battery(amount)
            else:
                self._charge_battery(amount)
    
    def _calculate_solar_generation(self) -> float:
        """Calculate solar generation with time-of-day and weather effects"""
        hour = datetime.now().hour
        
        # Solar curve based on time of day (peak at noon)
        if 6 <= hour <= 18:
            # Parabolic curve peaking at noon
            time_factor = 1 - ((hour - 12) / 6) ** 2
            time_factor = max(0, time_factor)
        else:
            time_factor = 0
        
        # Add some randomness (clouds, weather)
        weather_noise = np.random.normal(0, 0.1)
        time_factor = max(0, min(1, time_factor + weather_noise))
        
        generation = self.solar_capacity * time_factor
        
        # Apply cloud cover reduction
        if hasattr(self, 'current_weather') and self.current_weather in ["OVERCAST", "STORM", "BLIZZARD"]:
            intensity = getattr(self, 'cloud_intensity', 0.8)
            generation *= (1.0 - intensity)
        elif self.cloud_cover_active:
            generation *= 0.2  # 80% reduction legacy
        
        return max(0, generation)
    
    def _calculate_load(self) -> float:
        """Calculate current energy demand with realistic patterns"""
        hour = datetime.now().hour
        
        # Base load variation by hour
        if self.building_type == "residential":
            # Morning and evening peaks
            if 7 <= hour <= 9 or 18 <= hour <= 22:
                load_factor = 1.5
            elif 0 <= hour <= 5:
                load_factor = 0.3
            else:
                load_factor = 0.8
        elif self.building_type == "commercial":
            # Business hours peak
            if 9 <= hour <= 17:
                load_factor = 1.8
            else:
                load_factor = 0.2
        elif self.building_type == "hospital":
            # Constant high load
            load_factor = 1.2 + np.random.normal(0, 0.1)
        elif self.building_type == "datacenter":
            # High constant load with cooling variations
            load_factor = 2.0 + 0.3 * np.sin(hour * np.pi / 12)
        elif self.building_type == "emergency":
            load_factor = 1.0 + np.random.normal(0, 0.05)
        else:
            load_factor = 1.0
        
        # Weather modifiers for load
        weather_load_multiplier = 1.0
        if hasattr(self, 'current_weather'):
            if self.current_weather == "HEAT_WAVE":
                weather_load_multiplier = 2.0  # Massive AC demand
            elif self.current_weather == "BLIZZARD":
                weather_load_multiplier = 1.8  # Heating demand
            elif self.current_weather == "STORM":
                weather_load_multiplier = 1.1

        # Add Gaussian noise for realism
        noise = np.random.normal(0, self.base_load * 0.05)
        load = (self.base_load * load_factor * weather_load_multiplier) + noise
        
        # In grid failure, some non-priority buildings shed load
        if self.grid_failure and not self.is_priority:
            load *= 0.4
            
        return max(10, load)  # Minimum 10kW load
    
    def _update_battery(self, net_energy: float, time_delta: float = 2.5):
        """
        Update battery state of charge based on net energy
        net_energy: positive = charging, negative = discharging
        """
        # Convert kW * seconds to kWh
        energy_kwh = net_energy * (time_delta / 3600)
        
        # Battery efficiency (90% round-trip)
        efficiency = 0.95 if net_energy > 0 else 0.95
        
        # Update SoC
        soc_change = (energy_kwh * efficiency / self.battery_capacity) * 100
        self.battery_soc = max(0, min(100, self.battery_soc + soc_change))
        
        # Determine status
        critical_threshold = 30 if self.is_priority else 15
        self.is_critical = self.battery_soc < critical_threshold
        
        if self.battery_soc > 80 and net_energy > 0:
            self.is_selling = True
            self.is_buying = False
        elif self.battery_soc < 30 and net_energy < 0:
            self.is_selling = False
            self.is_buying = True
        else:
            self.is_selling = False
            self.is_buying = False
    
    def _discharge_battery(self, amount: float):
        """Force discharge battery by specified amount"""
        discharge_kwh = min(amount, self.battery_soc / 100 * self.battery_capacity)
        self.battery_soc -= (discharge_kwh / self.battery_capacity) * 100
    
    def _charge_battery(self, amount: float):
        """Force charge battery by specified amount"""
        charge_kwh = min(amount, (100 - self.battery_soc) / 100 * self.battery_capacity)
        self.battery_soc += (charge_kwh / self.battery_capacity) * 100
    
    def _publish_telemetry(self):
        """Publish current state to MQTT topic"""
        telemetry = {
            "building_id": self.building_id,
            "timestamp": datetime.now().isoformat(),
            "load": float(round(self.current_load, 2)),
            "solar_generation": float(round(self.solar_generation, 2)),
            "battery_soc": float(round(self.battery_soc, 2)),
            "grid_frequency": float(round(self.grid_frequency, 2)),
            "is_selling": bool(self.is_selling),
            "is_buying": bool(self.is_buying),
            "is_critical": bool(self.is_critical),
            "is_priority": bool(self.is_priority),
            "building_type": self.building_type,
            "net_energy": float(round(self.solar_generation - self.current_load, 2))
        }
        
        topic = f"ecosync/building/{self.building_id}/telemetry"
        # Only publish over MQTT if we have an active connection
        if self._mqtt_connected:
            self.client.publish(topic, json.dumps(telemetry), qos=1)
        
        # Call telemetry callback if set
        if self.telemetry_callback:
            self.telemetry_callback(telemetry)
        
        return telemetry
    
    def _simulation_loop(self):
        """Main simulation loop running every 2.5 seconds"""
        while self.running:
            try:
                # Update solar generation
                self.solar_generation = self._calculate_solar_generation()
                
                # Update load
                self.current_load = self._calculate_load()
                
                # Calculate net energy
                net_energy = self.solar_generation - self.current_load
                
                # Update battery
                self._update_battery(net_energy)
                
                # Update statistics
                self.total_energy_generated += max(0, self.solar_generation * (2.5/3600))
                self.total_energy_consumed += max(0, self.current_load * (2.5/3600))
                
                # Publish telemetry
                self._publish_telemetry()
                
                # Only log on status change — avoids 10 prints/sec flood with 50 buildings
                status = "CRITICAL" if self.is_critical else (
                    "SELLING" if self.is_selling else (
                        "BUYING" if self.is_buying else "BALANCED"
                    )
                )
                if status != self._last_status:
                    self._last_status = status
                    emoji = {"CRITICAL": "🚨", "SELLING": "💚", "BUYING": "🔵", "BALANCED": "⚪"}.get(status, "")
                    print(f"{emoji} Building {self.building_id:02d} → {status} "
                          f"(SoC: {self.battery_soc:.1f}%, "
                          f"Load: {self.current_load:.1f}kW, Solar: {self.solar_generation:.1f}kW)")
                
                # Use Event.wait instead of time.sleep so stop() wakes us immediately
                self._stop_event.wait(2.5)
                
            except Exception as e:
                print(f"⚠️ Building {self.building_id}: Simulation error - {e}")
                self._stop_event.wait(2.5)
    
    def connect(self):
        """Connect to MQTT broker"""
        try:
            self.client.connect(self.mqtt_broker, self.mqtt_port, 60)
            self.client.loop_start()
        except Exception as e:
            print(f"❌ Building {self.building_id}: Failed to connect - {e}")
    
    def start(self):
        """Start the simulation"""
        self.connect()
        self.running = True
        self.thread = threading.Thread(target=self._simulation_loop, daemon=True)
        self.thread.start()
        print(f"▶️  Building {self.building_id}: Simulation started")
    
    def stop(self):
        """Stop the simulation"""
        self.running = False
        self._stop_event.set()          # Wake up the sleeping thread immediately
        if self.thread:
            self.thread.join(timeout=2)
        self.client.loop_stop()
        self.client.disconnect()
    
    def get_state(self) -> Dict:
        """Get current building state"""
        return {
            "building_id": self.building_id,
            "building_type": self.building_type,
            "is_priority": bool(self.is_priority),
            "current_load": float(round(self.current_load, 2)),
            "solar_generation": float(round(self.solar_generation, 2)),
            "battery_soc": float(round(self.battery_soc, 2)),
            "grid_frequency": float(round(self.grid_frequency, 2)),
            "is_selling": bool(self.is_selling),
            "is_buying": bool(self.is_buying),
            "is_critical": bool(self.is_critical),
            "cloud_cover": bool(self.cloud_cover_active),
            "grid_failure": bool(self.grid_failure),
            "weather": getattr(self, 'current_weather', 'CLEAR'),
            "total_generated": float(round(self.total_energy_generated, 2)),
            "total_consumed": float(round(self.total_energy_consumed, 2)),
            "trades_completed": self.trades_completed
        }
    
    def set_telemetry_callback(self, callback: Callable):
        """Set callback for telemetry updates"""
        self.telemetry_callback = callback

`

## Modified/New File: branches.txt
Update or create this file with the exact contents below:
`txt
﻿* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
  remotes/origin/railway/code-change-B8nQBm
  remotes/origin/railway/code-change-qnBl8V
  remotes/origin/railway/code-change-xVks0B

`

## Modified/New File: find_recent_files.py
Update or create this file with the exact contents below:
`py
import os
import time

current_time = time.time()
two_hours_ago = current_time - (2 * 3600)

with open("recent_files.txt", "w", encoding="utf-8") as f:
    for root, dirs, files in os.walk("."):
        if ".git" in root or "node_modules" in root or "__pycache__" in root or ".venv" in root:
            continue
        for file in files:
            filepath = os.path.join(root, file)
            try:
                mtime = os.path.getmtime(filepath)
                if mtime > two_hours_ago:
                    f.write(f"{filepath} - {time.ctime(mtime)}\n")
            except Exception:
                pass

`

## Could not read file friend_repo_tmp: [Errno 13] Permission denied: 'friend_repo_tmp'

## Modified/New File: friend_src_components_NeuralWire.jsx
Update or create this file with the exact contents below:
`jsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useEcoStore from '../store/useEcoStore';

const SOURCE_POSITIONS = {
  solar: [-18, 0, -10],
  wind: [18, 0, -10],
  hydro: [-18, 0, 10],
  gas: [18, 0, 10],
};

const SOURCE_COLORS = {
  solar: { base: [0.6, 0.5, 0.0], glow: [1.0, 0.85, 0.0] },
  wind: { base: [0.0, 0.4, 0.6], glow: [0.0, 0.83, 1.0] },
  hydro: { base: [0.0, 0.2, 0.6], glow: [0.0, 0.4, 1.0] },
  gas: { base: [0.6, 0.25, 0.0], glow: [1.0, 0.42, 0.0] },
  branch: { base: [0.0, 0.4, 0.6], glow: [0.0, 0.83, 1.0] },
  backup: { base: [0.0, 0.6, 0.4], glow: [0.0, 1.0, 0.63] }
};

function dist(p1, p2) {
  const dx = p1[0] - p2[0];
  const dz = p1[2] - p2[2];
  return Math.sqrt(dx * dx + dz * dz);
}

function EnergyWire({ source, target, colorTheme, active, intensity, radius, reverseDirection = false, maxHeight = 0.4 }) {
  const meshRef = useRef();
  const matRef = useRef();

  const colors = SOURCE_COLORS[colorTheme] || SOURCE_COLORS.branch;

  const { geometry } = useMemo(() => {
    const start = new THREE.Vector3(...source);
    start.y = 0.15;
    const end = new THREE.Vector3(...target);
    end.y = 0.15;

    const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
    mid.y = maxHeight; 

    const c = new THREE.CatmullRomCurve3([start, mid, end], false, 'catmullrom', 0.5);
    return { geometry: new THREE.TubeGeometry(c, 24, radius, 5, false) };
  }, [source[0], source[2], target[0], target[2], radius, maxHeight]);

  const uniforms = useMemo(() => ({
    uTime: { value: Math.random() * 10 },
    uBaseColor: { value: new THREE.Vector3(...colors.base) },
    uGlowColor: { value: new THREE.Vector3(...colors.glow) },
    uIntensity: { value: intensity },
    uActive: { value: active ? 1.0 : 0.0 },
    uDirection: { value: reverseDirection ? -1.0 : 1.0 }
  }), [colors, reverseDirection]);

  useFrame((state, delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += delta;
      
      matRef.current.uniforms.uActive.value = THREE.MathUtils.lerp(
        matRef.current.uniforms.uActive.value,
        active ? 1.0 : 0.0,
        0.05
      );
      matRef.current.uniforms.uIntensity.value = THREE.MathUtils.lerp(
        matRef.current.uniforms.uIntensity.value,
        intensity,
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uBaseColor;
          uniform vec3 uGlowColor;
          uniform float uIntensity;
          uniform float uActive;
          uniform float uDirection;
          varying vec2 vUv;

          void main() {
            // Very slow, calm pulse
            float pulse = sin((vUv.x * uDirection) * 8.0 - uTime * 0.4);
            float glow = smoothstep(0.3, 0.7, pulse) * uIntensity;
            
            vec3 color = mix(uBaseColor * 0.3, uGlowColor, glow);
            
            // Fade to 0.08 on toggle off
            float baseAlpha = mix(0.08, 0.6, uActive); 
            float alpha = baseAlpha + glow * 0.3 * uActive;
            
            gl_FragColor = vec4(color, alpha);
          }
        `}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function NeuralWires() {
  const buildings = useEcoStore((s) => s.buildings);
  const powerSources = useEcoStore((s) => s.powerSources);
  const connections = useEcoStore((s) => s.connections);

  const buildingMap = useMemo(() => {
    const map = new Map();
    buildings.forEach(b => map.set(b.id, b));
    return map;
  }, [buildings]);

  const activeBuildings = useMemo(() => buildings.filter(b => b.active), [buildings]);

  // 1. Trunk mapping: Each power node targets its 3-4 nearest active buildings dynamically
  const trunkWires = useMemo(() => {
    const wires = [];
    Object.keys(SOURCE_POSITIONS).forEach((sourceType) => {
      const sourcePos = SOURCE_POSITIONS[sourceType];
      
      // Calculate distances from source to all active buildings
      const targets = activeBuildings
        .map(b => ({ id: b.id, pos: b.position, dist: dist(sourcePos, b.position) }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 3); // top 3 nearest active buildings
        
      targets.forEach(t => {
        wires.push({
          id: `trunk-${sourceType}-${t.id}`,
          sourceType,
          source: sourcePos,
          target: t.pos
        });
      });
    });
    return wires;
  }, [activeBuildings]);

  // 2. Branch mapping: From dynamic connection graph
  const branchWires = useMemo(() => {
    return connections.filter(c => buildingMap.has(c.fromId) && buildingMap.has(c.toId)).map(c => {
      const b1 = buildingMap.get(c.fromId);
      const b2 = buildingMap.get(c.toId);
      return {
        id: `branch-${c.key}`,
        source: b1.position,
        target: b2.position,
        active: b1.active && b2.active
      };
    });
  }, [connections, buildingMap]);

  // 3. Backup Blockchain Routing
  const backupWires = useMemo(() => {
    const wires = [];
    buildings.forEach(b => {
      if (!b.active && b.blockchainBackupActive && b.backupNode && b.backupNode !== "SYSTEM-GRID") {
         // find the backup node
         const backupSource = buildings.find(x => x.code === b.backupNode);
         if (backupSource) {
            wires.push({
               id: `backup-${b.id}`,
               source: backupSource.position,
               target: b.position
            });
         }
      }
    });
    return wires;
  }, [buildings]);

  return (
    <group>
      {/* 1. Trunk Wires */}
      {trunkWires.map(({ id, sourceType, source, target }) => {
        const ps = powerSources[sourceType];
        return (
          <EnergyWire
            key={id}
            source={source}
            target={target}
            colorTheme={sourceType}
            active={ps.active && ps.output_kw > 0}
            intensity={ps.active ? ps.output_kw / (ps.max_kw || 1) : 0}
            radius={0.07}
            maxHeight={0.8}
          />
        );
      })}

      {/* 2. Branch Wires */}
      {branchWires.map(({ id, source, target, active }) => (
        <EnergyWire
          key={id}
          source={source}
          target={target}
          colorTheme="branch"
          active={active}
          intensity={active ? 0.6 : 0}
          radius={0.025}
          maxHeight={0.4}
        />
      ))}

      {/* 3. Backup Wires (Reverse flow) */}
      {backupWires.map(({ id, source, target }) => (
        <EnergyWire
          key={id}
          source={source} // source is the nearest active building
          target={target} // target is the offline building
          colorTheme="backup"
          active={true}
          intensity={0.8}
          radius={0.03}
          maxHeight={0.5}
          reverseDirection={false} // flow goes FROM backupSource TO offline
        />
      ))}
    </group>
  );
}

`

## Modified/New File: friend_src_components_Particles.jsx
Update or create this file with the exact contents below:
`jsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useEcoStore from '../store/useEcoStore';

export default function Particles() {
  const tradeLog = useEcoStore((s) => s.tradeLog);
  const pointsRef = useRef();
  const count = 40;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = 0.2 + Math.random() * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const palette = [
      [0, 0.83, 1],    // cyan
      [0, 0.96, 0.63],  // green
      [1, 0.84, 0],     // gold
      [0, 0.4, 1],      // blue
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[i % palette.length];
      col[i * 3] = c[0];
      col[i * 3 + 1] = c[1];
      col[i * 3 + 2] = c[2];
    }
    return col;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      // Gentle floating motion
      pos[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.005;
      pos[i * 3 + 1] += 0.008;
      pos[i * 3 + 2] += Math.cos(state.clock.elapsedTime + i * 0.5) * 0.005;

      // Reset when too high
      if (pos[i * 3 + 1] > 5) {
        pos[i * 3 + 1] = 0.2;
        pos[i * 3] = (Math.random() - 0.5) * 30;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        transparent
        opacity={0.5}
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

`

## Modified/New File: friend_src_components_WeatherEffects.jsx
Update or create this file with the exact contents below:
`jsx
import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useEcoStore from '../store/useEcoStore';

function CloudLayer() {
  const meshRef1 = useRef();
  const meshRef2 = useRef();

  useFrame((state, delta) => {
    if (meshRef1.current) {
      meshRef1.current.position.x -= delta * 0.5;
      if (meshRef1.current.position.x < -150) meshRef1.current.position.x = 150;
    }
    if (meshRef2.current) {
       meshRef2.current.position.x -= delta * 0.3;
       if (meshRef2.current.position.x < -150) meshRef2.current.position.x = 150;
    }
  });

  return (
    <group position={[0, 25, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh ref={meshRef1} position={[0, 0, -1]}>
         <planeGeometry args={[150, 150, 1, 1]} />
         <meshBasicMaterial color="#111522" transparent opacity={0.35} depthWrite={false} />
      </mesh>
      <mesh ref={meshRef2} position={[50, 20, -2]}>
         <planeGeometry args={[100, 100, 1, 1]} />
         <meshBasicMaterial color="#0b0e1a" transparent opacity={0.35} depthWrite={false} />
      </mesh>
    </group>
  );
}

function RainSystem() {
  const pointsRef = useRef();
  const count = 600;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = Math.random() * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 1; i < pos.length; i += 3) {
      pos[i] -= delta * 15; // Fast falling rain
      // Adding wind effect
      pos[i - 1] -= delta * 3.0; 
      
      if (pos[i] < 0) {
        pos[i] = 40;
        pos[i - 1] = (Math.random() - 0.5) * 60;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#88aacc" size={0.15} transparent opacity={0.6} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function SnowSystem() {
  const pointsRef = useRef();
  const count = 800;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = Math.random() * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      pos[idx + 1] -= delta * 6.0;
      pos[idx] += Math.sin(t + i) * 0.05 - (delta * 2); // Windy snow
      pos[idx + 2] += Math.cos(t + i) * 0.05;
      
      if (pos[idx + 1] < 0) {
        pos[idx + 1] = 40;
        pos[idx] = (Math.random() - 0.5) * 80 + 20; 
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.2} transparent opacity={0.8} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function Lightning() {
  const flashMesh = useRef();
  const flashLight = useRef();
  const lightningTimer = useRef(0);
  const nextFlash = useRef(3 + Math.random() * 5);

  useFrame((_, delta) => {
    lightningTimer.current += delta;
    if (lightningTimer.current > nextFlash.current) {
      if (flashMesh.current && flashLight.current) {
          flashMesh.current.visible = true;
          flashLight.current.intensity = 2.0;
          setTimeout(() => {
            if (flashMesh.current && flashLight.current) {
              flashMesh.current.visible = false;
              flashLight.current.intensity = 0.0;
            }
          }, 120);
      }
      lightningTimer.current = 0;
      nextFlash.current = 3 + Math.random() * 5;
    }
  });

  return (
    <group>
        <mesh ref={flashMesh} position={[(Math.random()-0.5)*30, 10, (Math.random()-0.5)*30]} visible={false}>
            <planeGeometry args={[1, 20]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.9} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>
        <ambientLight ref={flashLight} intensity={0} color="#ffffff" />
    </group>
  );
}

function WindStreaks() {
  const pointsRef = useRef();
  const count = 300;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = Math.random() * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) {
      pos[i] += delta * 60; // Fast horizontal movement
      
      if (pos[i] > 40) {
        pos[i] = -40;
        pos[i + 1] = Math.random() * 20;
        pos[i + 2] = (Math.random() - 0.5) * 80;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.3} transparent opacity={0.15} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

// Ambient floating particles
function AmbientParticles() {
  const pointsRef = useRef();
  const count = 40;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = 0.2 + Math.random() * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const palette = [
      [0, 0.83, 1],    // cyan
      [0, 0.96, 0.63],  // green
      [1, 0.84, 0],     // gold
      [0, 0.4, 1],      // blue
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[i % palette.length];
      col[i * 3] = c[0];
      col[i * 3 + 1] = c[1];
      col[i * 3 + 2] = c[2];
    }
    return col;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      pos[idx] += Math.sin(t + i) * 0.005;
      pos[idx + 1] += delta * 0.4;
      pos[idx + 2] += Math.cos(t + i * 0.5) * 0.005;

      if (pos[idx + 1] > 5) {
        pos[idx + 1] = 0.2;
        pos[idx] = (Math.random() - 0.5) * 30;
        pos[idx + 2] = (Math.random() - 0.5) * 20;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} transparent opacity={0.5} depthWrite={false} vertexColors blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function WeatherEffects() {
  const weatherOverride = useEcoStore((s) => s.weatherOverride);
  const showAmbient = weatherOverride !== 'THUNDERSTORM' && weatherOverride !== 'BLIZZARD';

  return (
    <>
      {showAmbient && <AmbientParticles />}

      {weatherOverride === 'OVERCAST' && (
        <CloudLayer />
      )}

      {weatherOverride === 'THUNDERSTORM' && (
        <>
          <CloudLayer />
          <RainSystem />
          <Lightning />
        </>
      )}

      {weatherOverride === 'BLIZZARD' && (
        <>
          <CloudLayer />
          <SnowSystem />
        </>
      )}

      {weatherOverride === 'PERFECT_WIND' && (
        <WindStreaks />
      )}
    </>
  );
}

`

## Modified/New File: friend_src_hooks_useWeather.js
Update or create this file with the exact contents below:
`js
import { useEffect, useCallback } from 'react';
import axios from 'axios';
import useEcoStore from '../store/useEcoStore';

const API_KEY = '4d8fb5b93d4af21d66a2948710284366'; // Free tier demo key
const MOCK_DATA = { temp: 28, clouds: 40, wind_speed: 5, city: 'Demo City', description: 'partly cloudy', humidity: 65 };

export function useWeather() {
  const setWeatherData = useEcoStore((s) => s.setWeatherData);
  const pincode = useEcoStore((s) => s.pincode);
  const weatherData = useEcoStore((s) => s.weatherData);

  const fetchWeather = useCallback(async (query) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      const data = {
        temp: Math.round(res.data.main.temp),
        clouds: res.data.clouds.all,
        wind_speed: res.data.wind.speed,
        city: res.data.name,
        description: res.data.weather[0]?.description || 'clear',
        humidity: res.data.main.humidity,
      };
      console.log('[Weather] Loaded:', data);
      setWeatherData(data);
    } catch (err) {
      console.log('[Weather] API failed, using mock data:', err.message);
      setWeatherData(MOCK_DATA);
    }
  }, [setWeatherData]);

  useEffect(() => {
    fetchWeather(pincode);
  }, []);

  return { fetchWeather, weatherData };
}

export default useWeather;

`

## Modified/New File: friend_src_store_useEcoStore.js
Update or create this file with the exact contents below:
`js
import { create } from 'zustand';

// Generate realistic building names based on type
function generateName(type) {
  const hospitalNames = ["St. Mary's", "City General", "Apollo Med", "Mercy Hospital", "Central Clinic"];
  const commercialNames = ["TechPark Tower", "Metro Plaza", "City Mall", "Nexus Hub", "Apex Center", "Pinnacle Suites"];
  const residentialNames = ["Oak Lane", "Sunrise Apts", "River View", "Maple Row", "Cedar Heights", "Pine Condos"];

  switch (type) {
    case 'hospital': return hospitalNames[Math.floor(Math.random() * hospitalNames.length)];
    case 'commercial': return commercialNames[Math.floor(Math.random() * commercialNames.length)];
    default: return residentialNames[Math.floor(Math.random() * residentialNames.length)];
  }
}

// Organic scatter algorithm
function generateBuildings() {
  const buildings = [];
  const types = [];

  // 5 hospitals, 20 commercial, 25 residential
  for (let i = 0; i < 5; i++) types.push('hospital');
  for (let i = 0; i < 20; i++) types.push('commercial');
  for (let i = 0; i < 25; i++) types.push('residential');

  // Shuffle
  for (let i = types.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [types[i], types[j]] = [types[j], types[i]];
  }

  const hospCount = { count: 0 };
  const commCount = { count: 0 };
  const resCount = { count: 0 };

  const positions = [];
  const minDist = 2.5;
  let attempts = 0;
  
  while (positions.length < 50 && attempts < 2000) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 14 * Math.sqrt(Math.random());
    const x = Math.cos(angle) * radius * 1.3;
    const z = Math.sin(angle) * radius;
    
    const tooClose = positions.some(p => 
      Math.sqrt((p.x - x) ** 2 + (p.z - z) ** 2) < minDist
    );
    
    if (!tooClose) positions.push({ x, z });
    attempts++;
  }

  for (let i = 0; i < positions.length; i++) {
    const type = types[i];
    let code, height, consumption;

    const name = generateName(type);

    switch (type) {
      case 'hospital':
        hospCount.count++;
        code = `HOSP-${hospCount.count}`;
        height = 4 + Math.random() * 2;
        consumption = 8 + Math.random() * 6;
        break;
      case 'commercial':
        commCount.count++;
        code = `COMM-${commCount.count}`;
        height = 2 + Math.random() * 2;
        consumption = 3 + Math.random() * 4;
        break;
      case 'residential':
      default:
        resCount.count++;
        code = `H${resCount.count}`;
        height = 1 + Math.random() * 1.5;
        consumption = 1.5 + Math.random() * 2;
        break;
    }

    buildings.push({
      id: `building-${i}`,
      code,
      name: `${name} ${code.split('-')[1] || ''}`.trim(),
      type,
      active: true,
      consumption_kw: parseFloat(consumption.toFixed(1)),
      battery_soc: Math.floor(40 + Math.random() * 60),
      height,
      position: [positions[i].x, 0, positions[i].z],
      rotationY: Math.floor(Math.random() * 4) * (Math.PI / 4), // 0, 45, 90, 135
      tilt: [(Math.random() - 0.5) * 0.04, 0, (Math.random() - 0.5) * 0.04], // max ~2deg
      status: 'online',
      blockchainBackupActive: false,
      backupNode: null,
      txHash: null,
      blockNum: null,
    });
  }

  return buildings;
}

// Distance helper
function distance(b1, b2) {
  const dx = b1.position[0] - b2.position[0];
  const dz = b1.position[2] - b2.position[2];
  return Math.sqrt(dx * dx + dz * dz);
}

// Mesh Connection Logic: Each node connects to 2-3 nearest neighbors
function buildMeshConnections(buildings) {
  const connections = [];
  buildings.forEach((b, i) => {
    // find 2 nearest neighbors
    const distances = buildings
      .map((other, j) => ({ j, d: distance(b, other) }))
      .filter(x => x.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
      
    distances.forEach(({ j }) => {
      // avoid duplicates
      const key = [Math.min(i, j), Math.max(i, j)].join('-');
      if (!connections.find(c => c.key === key)) {
        connections.push({ key, fromId: buildings[i].id, toId: buildings[j].id });
      }
    });
  });
  return connections;
}

const initialBuildings = generateBuildings();
const initialConnections = buildMeshConnections(initialBuildings);

const useEcoStore = create((set, get) => ({
  buildings: initialBuildings,
  connections: initialConnections,

  powerSources: {
    solar: { active: true, output_kw: 30, max_kw: 50, history: [30, 32, 28, 35, 30, 29, 33, 31, 34, 30] },
    wind: { active: true, output_kw: 12, max_kw: 60, history: [12, 15, 10, 14, 12, 13, 11, 16, 12, 14] },
    hydro: { active: true, output_kw: 40, max_kw: 45, history: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40] },
    gas: { active: true, output_kw: 30, max_kw: 70, history: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30] },
  },

  weatherData: {
    temp: 28,
    clouds: 40,
    wind_speed: 5,
    city: 'Demo City',
    description: 'partly cloudy',
    humidity: 65,
  },
  
  weatherOverride: null, // "OVERCAST", "THUNDERSTORM", "HEAT_WAVE", "BLIZZARD", "PERFECT_WIND"

  gridStatus: {
    balance: 0,
    status: 'OPTIMIZED',
    efficiency: 85,
  },

  selectedBuilding: null,
  tradeLog: [],
  pincode: '400001',
  sidePanelOpen: false,

  // Actions
  setSidePanelOpen: (isOpen) => set({ sidePanelOpen: isOpen }),
  setWeatherOverride: (mode) => set({ weatherOverride: mode }),
  
  setWeatherData: (data) => set({ weatherData: data }),
  setPincode: (pin) => set({ pincode: pin }),

  selectBuilding: (building) => set({ selectedBuilding: building }),
  clearSelection: () => set({ selectedBuilding: null }),

  toggleBuilding: (id) => set((state) => {
    let activeBuildings = state.buildings.filter(b => b.active && b.id !== id);
    if (!state.buildings.find(b => b.id === id).active) {
       // if we are turning it back ON, it will be considered active
       activeBuildings = state.buildings.filter(b => b.active || b.id === id);
    }
    
    const buildings = state.buildings.map((b) => {
      if (b.id === id) {
        const isTurningOff = b.active;
        const newActive = !b.active;
        
        // Mock blockchain logic
        let blockchainBackupActive = false;
        let backupNode = null;
        let txHash = null;
        let blockNum = null;

        if (isTurningOff) {
           blockchainBackupActive = true;
           // Find nearest active building for backup display
           let nearestActive = null;
           let minDist = Infinity;
           activeBuildings.forEach((other) => {
             const d = distance(b, other);
             if (d < minDist) {
                minDist = d;
                nearestActive = other;
             }
           });
           
           if (nearestActive) {
             backupNode = nearestActive.code;
           } else {
             backupNode = "SYSTEM-GRID";
           }
           
           txHash = '0x' + Math.random().toString(16).substr(2, 12) + '...a1f2';
           blockNum = `1,${Math.floor(Math.random() * 800) + 100},${Math.floor(Math.random() * 800) + 100}`;
        }

        return { 
          ...b, 
          active: newActive, 
          status: newActive ? 'online' : 'offline',
          blockchainBackupActive,
          backupNode,
          txHash,
          blockNum
        };
      }
      return b;
    });

    // Update selectedBuilding reference if it is the toggled one
    const newSelected = state.selectedBuilding?.id === id 
        ? buildings.find(b => b.id === id) 
        : state.selectedBuilding;

    return { buildings, selectedBuilding: newSelected };
  }),

  // Power toggles
  togglePowerSource: (source) => set((state) => {
    const ps = { ...state.powerSources };
    const isActive = !ps[source].active;
    ps[source] = {
      ...ps[source],
      active: isActive,
      output_kw: !isActive ? 0 : (source === 'gas' ? 30 : ps[source].max_kw * 0.6),
    };
    return { powerSources: ps };
  }),

  updatePowerOutput: (source, kw) => set((state) => {
    const ps = { ...state.powerSources };
    const hist = [...ps[source].history.slice(1), kw];
    ps[source] = { ...ps[source], output_kw: parseFloat(kw.toFixed(1)), history: hist };
    return { powerSources: ps };
  }),

  updateGridStatus: (status) => set({ gridStatus: status }),

  addTradeLog: (entry) => set((state) => ({
    tradeLog: [entry, ...state.tradeLog].slice(0, 20),
  })),

  setGasActive: (active) => set((state) => {
    const ps = { ...state.powerSources };
    ps.gas = { ...ps.gas, active, output_kw: active ? 30 : 0 };
    return { powerSources: ps };
  }),
}));

export default useEcoStore;

`

## Modified/New File: friend_src_ui_SidePanel.jsx
Update or create this file with the exact contents below:
`jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEcoStore from '../store/useEcoStore';
import useWeather from '../hooks/useWeather';
import PowerCards from './PowerCards';
import TradeLog from './TradeLog';

const WEATHER_ICONS = {
  'clear sky': '☀️',
  'few clouds': '🌤️',
  'scattered clouds': '⛅',
  'broken clouds': '☁️',
  'overcast clouds': '☁️',
  'shower rain': '🌧️',
  'rain': '🌧️',
  'thunderstorm': '⛈️',
  'snow': '❄️',
  'mist': '🌫️',
  'partly cloudy': '⛅',
  'haze': '🌫️',
};

function getWeatherIcon(desc) {
  const lower = (desc || '').toLowerCase();
  return WEATHER_ICONS[lower] || '🌤️';
}

function GodModePanel() {
  const [expanded, setExpanded] = useState(false);
  const weatherOverride = useEcoStore(s => s.weatherOverride);
  const setWeatherOverride = useEcoStore(s => s.setWeatherOverride);

  const setWeather = (mode) => {
    setWeatherOverride(weatherOverride === mode ? null : mode);
  };

  return (
    <div className="px-4 pb-4">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors border border-white/5 bg-white/5 hover:bg-white/10"
      >
        <span className="text-[11px] font-bold text-cyan-400 tracking-[0.1em]">⚡ GOD MODE</span>
        <span className="text-white/50 text-[10px]">{expanded ? '▲' : '▼'}</span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button 
                className={`weather-btn ${weatherOverride === 'OVERCAST' ? 'active shadow-[0_0_10px_rgba(100,100,100,0.5)]' : ''}`}
                onClick={() => setWeather('OVERCAST')}
              >
                ☁️ Overcast
              </button>
              <button 
                className={`weather-btn ${weatherOverride === 'THUNDERSTORM' ? 'active shadow-[0_0_10px_rgba(200,200,255,0.5)]' : ''}`}
                onClick={() => setWeather('THUNDERSTORM')}
              >
                ⛈️ Storm
              </button>
              <button 
                className={`weather-btn ${weatherOverride === 'HEAT_WAVE' ? 'active shadow-[0_0_10px_rgba(255,100,0,0.5)]' : ''}`}
                onClick={() => setWeather('HEAT_WAVE')}
              >
                🌊 Heat Wave
              </button>
              <button 
                className={`weather-btn ${weatherOverride === 'BLIZZARD' ? 'active shadow-[0_0_10px_rgba(200,255,255,0.5)]' : ''}`}
                onClick={() => setWeather('BLIZZARD')}
              >
                ❄️ Blizzard
              </button>
              <button 
                className={`weather-btn ${weatherOverride === 'PERFECT_WIND' ? 'active shadow-[0_0_10px_rgba(0,212,255,0.5)]' : ''}`}
                onClick={() => setWeather('PERFECT_WIND')}
              >
                🌬️ High Wind
              </button>
              <button 
                className="weather-btn text-gray-400 hover:text-white"
                onClick={() => setWeatherOverride(null)}
              >
                ☀️ Clear
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function SidePanel() {
  const weatherData = useEcoStore((s) => s.weatherData);
  const buildings = useEcoStore((s) => s.buildings);
  const totalSupply = useEcoStore((s) => Object.values(s.powerSources).reduce((acc, ps) => acc + (ps.active ? ps.output_kw : 0), 0));
  
  const sidePanelOpen = useEcoStore((s) => s.sidePanelOpen);

  const [pinInput, setPinInput] = useState('');
  const { fetchWeather } = useWeather();
  
  const handleLoadCity = () => {
    if (pinInput.trim()) {
      fetchWeather(pinInput.trim());
      setPinInput('');
    }
  };

  const totalDemand = buildings.reduce((acc, b) => acc + (b.active ? b.consumption_kw : 0), 0);
  const activeBuildings = buildings.filter(b => b.active).length;
  const efficiency = totalDemand > 0 ? Math.min(100, Math.round((totalSupply / totalDemand) * 100)) : 100;

  return (
    <AnimatePresence>
      {sidePanelOpen && (
        <motion.div
          initial={{ x: 320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 320, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="glass-panel fixed right-0 top-0 h-full w-[320px] z-[500] flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
          id="side-panel"
        >
          <div className="flex-1 overflow-y-auto pt-16 pb-4 space-y-6">
            
            {/* Weather & Location */}
            <div className="px-4">
              <div className="flex gap-1.5 mb-3">
                <input
                  type="text"
                  placeholder="City or Pincode..."
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLoadCity()}
                  className="flex-1 bg-gray-900/50 border border-gray-700/50 rounded-md px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50"
                />
                <button
                  onClick={handleLoadCity}
                  className="px-3 py-1.5 rounded-md text-xs font-medium transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 245, 160, 0.2))',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    color: '#00D4FF',
                  }}
                >
                  Load
                </button>
              </div>

              <div className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-white/5 border border-white/5">
                <span className="text-lg leading-none">{getWeatherIcon(weatherData.description)}</span>
                <span className="text-xs text-gray-300 font-medium">{weatherData.city}</span>
                <span className="text-white/20">|</span>
                <span className="text-xs text-white font-mono tabular-nums">{weatherData.temp}°C</span>
                <span className="text-white/20">|</span>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest tabular-nums">☁ {weatherData.clouds}%</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mx-4" />

            {/* Power Source Toggles */}
            <PowerCards />

            {/* Divider */}
            <div className="h-px bg-white/10 mx-4" />

            {/* Note: Building List has been removed in favor of direct 3D interaction + BuildingPopup */}
            <GodModePanel />

            <TradeLog />
            
          </div>

          {/* Stats Footer */}
          <div className="p-4 border-t border-white/10 bg-black/40 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px]">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 tracking-[0.05em]">PRODUCTION</span>
                <span className="font-mono tabular-nums font-bold text-green-400">{totalSupply.toFixed(1)} kW</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 tracking-[0.05em]">CONSUMPTION</span>
                <span className="font-mono tabular-nums font-bold text-orange-400">{totalDemand.toFixed(1)} kW</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 tracking-[0.05em]">ACTIVE</span>
                <span className="font-mono tabular-nums font-bold text-cyan-400">{activeBuildings}/50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 tracking-[0.05em]">EFFICIENCY</span>
                <span className="font-mono tabular-nums font-bold" style={{ color: efficiency > 80 ? '#00F5A0' : efficiency > 50 ? '#FFD700' : '#FF3333' }}>
                  {efficiency}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

`

## Modified/New File: hackathon_features.txt
Update or create this file with the exact contents below:
`txt
ECOSYNC HACKATHON: HIGH-IMPACT "WOW" FEATURES LIST
===================================================

1. THE "GOD MODE" CHAOS INJECTOR (Live Judge Interaction)
- What: A dashboard panel with buttons like "Trigger Hurricane", "Cyberattack", or "Solar Flare".
- IRL Impact: Judges physically click these during your pitch.
- Wow Factor: The simulation immediately reacts. Power spikes, solar drops to 0, and the AI agents visibly scramble to re-route power to essential buildings (hospitals) while sacrificing non-essentials.

2. PHYSICAL HARDWARE SYNC (IoT / Desk Demonstration)
- What: A cheap $5 ESP32/Arduino microcontroller connected via USB/WiFi, featuring an LED and a light sensor/mini solar panel.
- IRL Impact: Bridges the digital simulation with the real physical world.
- Wow Factor: Cover the physical light sensor with your hand, and the corresponding building on the live React dashboard instantly loses power and starts buying from the grid.

3. MULTIPLAYER "JOIN THE GRID" (QR Code for Judges)
- What: A giant QR code on your presentation screen.
- IRL Impact: Judges scan it with their smartphones to enter a mobile web app where they become "Building #51".
- Wow Factor: When a judge taps "Turn on AC" on their phone, the main projection screen shows their node light up bright red, and they can watch the city's AI agents negotiate to sell them power in real-time.

4. LIVE AGENT "THOUGHT" STREAM (Matrix-Style Feed)
- What: A scrolling text terminal on the UI translating agent actions into thrilling English narratives.
- IRL Impact: Demystifies AI and proves your system is actually "thinking".
- Wow Factor: "Timestamp 10:42:01 | Hospital AI: Voltage dropping. Life-support critical. Executing emergency buy order for 100kWh at premium."

5. LIVE CARBON CREDIT TOKENIZATION (Web3 / Blockchain)
- What: Every time the grid saves fossil fuel energy through peer-to-peer sharing, a smart contract mints a token.
- IRL Impact: Gives the project a massive real-world business and ESG model.
- Wow Factor: Show a live transaction hash on a testnet (e.g., Polygon) proving the simulated carbon offset was permanently recorded on an immutable ledger.

6. PREDICTIVE WEATHER & EV FLEET ROUTING
- What: Integrate a live Weather API. If a storm is approaching, the AI agents preemptively command a fleet of Electric Vehicles (EVs) to act as mobile batteries.
- IRL Impact: Demonstrates forward-thinking infrastructure and Vehicle-to-Grid (V2G) technology.
- Wow Factor: The dashboard shows cars driving to hospitals to discharge their batteries right before the hurricane hits.

7. VR/AR DIGITAL TWIN VIEW (Unreal Engine / WebXR)
- What: A 3D view of the city that can be explored in the browser using Three.js or run natively in Unreal Engine.
- IRL Impact: Immersive spatial computing.
- Wow Factor: A judge puts on a Meta Quest headset (or just uses their mouse) to fly through the virtual city, watching energy beams shooting between buildings as trades happen.

8. VOICE COMMAND INTERFACE (Siri / Alexa Integration)
- What: Use the Web Speech API or an LLM to let you talk to the grid.
- IRL Impact: Hands-free command center experience.
- Wow Factor: Say "EcoSync, cut power to sector 4 to save the hospital" into your mic, and watch the dashboard instantly execute the blackout and stabilize the grid.

9. AI-DRIVEN CYBERSECURITY & AUTO-HEALING
- What: Simulate a rogue building that starts draining power or submitting fake energy bids (a DDoS attack on the energy grid).
- IRL Impact: Tackles the massive real-world problem of smart grid security.
- Wow Factor: The AI agents detect the anomaly, automatically isolate the rogue node, and firewall it out of the trading pool live on screen.

10. LIVE "FINANCIAL ROI" DASHBOARD
- What: A counter that shows real dollars saved vs. buying from the traditional utility monopoly.
- IRL Impact: Proves the project is commercially viable for investors.
- Wow Factor: The counter ticks up every second. By the end of your 3-minute pitch, it shows exactly how much money and how many pounds of CO2 the city saved during that exact 180-second window.

`

## Could not read file log.txt: 'utf-8' codec can't decode byte 0xff in position 0: invalid start byte

## Modified/New File: recent_files.txt
Update or create this file with the exact contents below:
`txt
.\branches.txt - Sat Mar 28 10:25:29 2026
.\find_recent_files.py - Sat Mar 28 10:51:50 2026
.\git_branches_sorted.txt - Sat Mar 28 10:50:07 2026
.\git_diff_space.txt - Sat Mar 28 10:51:22 2026
.\git_files_changed.txt - Sat Mar 28 10:47:50 2026
.\git_log.txt - Sat Mar 28 10:45:12 2026
.\git_remotes.txt - Sat Mar 28 10:49:14 2026
.\git_status.txt - Sat Mar 28 10:45:12 2026
.\log.txt - Sat Mar 28 10:13:34 2026
.\recent_files.txt - Sat Mar 28 10:52:30 2026
.\test_git.py - Sat Mar 28 10:47:22 2026
.\test_git_branches.py - Sat Mar 28 10:49:52 2026
.\test_git_remotes.py - Sat Mar 28 10:48:58 2026
.\test_git_space.py - Sat Mar 28 10:50:30 2026
.\app\src\components\threejs\CityGrid.tsx - Sat Mar 28 10:05:53 2026
.\backend\iot_simulator\building.py - Sat Mar 28 10:05:37 2026

`

## Modified/New File: test_git.py
Update or create this file with the exact contents below:
`py
import subprocess

with open("git_files_changed.txt", "w", encoding="utf-8") as f:
    try:
        # Show all files changed in the commits that are in origin/main but not in our main
        # Wait, if friend pushed to the repo and our HEAD is ahead or behind...
        # Let's just do git log -n 5 origin/main --stat
        out = subprocess.check_output(['git', 'log', 'origin/main', '-n', '5', '--stat']).decode('utf-8', errors='ignore')
        f.write("LOG:\n" + out + "\n")
        
        # Git diff between current HEAD and origin/main
        out_diff = subprocess.check_output(['git', 'diff', 'HEAD', 'origin/main', '--name-status']).decode('utf-8', errors='ignore')
        f.write("DIFF:\n" + out_diff + "\n")
    except Exception as e:
        f.write(str(e))

`

## Modified/New File: test_git_branches.py
Update or create this file with the exact contents below:
`py
import subprocess

with open("git_branches_sorted.txt", "w", encoding="utf-8") as f:
    out = subprocess.check_output(['git', 'for-each-ref', '--sort=-committerdate', 'refs/remotes/']).decode('utf-8', errors='ignore')
    f.write(out)

`

## Modified/New File: test_git_friend.py
Update or create this file with the exact contents below:
`py
import subprocess

with open("git_diff_friend.txt", "w", encoding="utf-8") as f:
    try:
        f.write("LOG FRIEND/MAIN RECENT COMMITS:\n")
        f.write(subprocess.check_output(['git', 'log', '-n', '10', 'friend/main', '--oneline']).decode('utf-8', errors='ignore'))
        f.write("\n\nFILES DIFFERENT (HEAD vs friend/main):\n")
        f.write(subprocess.check_output(['git', 'diff', 'HEAD', 'friend/main', '--name-status']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write("Error: " + str(e))

`

## Modified/New File: test_git_local.py
Update or create this file with the exact contents below:
`py
import subprocess

with open("git_log_local.txt", "w", encoding="utf-8") as f:
    try:
        f.write("LOCAL LOG:\n")
        f.write(subprocess.check_output(['git', 'log', '-n', '10', '--oneline']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write(str(e))

`

## Modified/New File: test_git_ls_remote.py
Update or create this file with the exact contents below:
`py
import subprocess

with open("git_ls_remote.txt", "w", encoding="utf-8") as f:
    try:
        f.write("LS REMOTE:\n")
        f.write(subprocess.check_output(['git', 'ls-remote', 'origin']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write(str(e))

`

## Modified/New File: test_git_remotes.py
Update or create this file with the exact contents below:
`py
import subprocess

with open("git_remotes.txt", "w", encoding="utf-8") as f:
    try:
        f.write("REMOTES:\n")
        f.write(subprocess.check_output(['git', 'remote', '-v']).decode('utf-8', errors='ignore'))
        f.write("\nBRANCHES:\n")
        f.write(subprocess.check_output(['git', 'branch', '-a']).decode('utf-8', errors='ignore'))
        f.write("\nLOG OF ALL BRANCHES RECENT:\n")
        f.write(subprocess.check_output(['git', 'log', '--all', '--oneline', '-n', '15']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write(str(e))

`

## Modified/New File: test_git_space.py
Update or create this file with the exact contents below:
`py
import subprocess

with open("git_diff_space.txt", "w", encoding="utf-8") as f:
    try:
        f.write("DIFF HEAD vs space/main:\n")
        f.write(subprocess.check_output(['git', 'diff', '--name-status', 'HEAD', 'space/main']).decode('utf-8', errors='ignore'))
        f.write("\nLOG OF space/main:\n")
        f.write(subprocess.check_output(['git', 'log', '-n', '5', 'space/main']).decode('utf-8', errors='ignore'))
    except Exception as e:
        f.write(str(e))

`

