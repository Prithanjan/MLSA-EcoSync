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
