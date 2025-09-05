'use client';

import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Thermometer, Droplets, Zap, Settings, 
  History, AlertTriangle, Heater, LineChart
} from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { TooltipProps } from "recharts";

type SensorData = {
  temperature: number;
  humidity: number;
  power: number;
  target: number;
  mode: 'eco' | 'comfort' | 'frost';
  timestamp: number;
};

type HeatingMode = {
  name: string;
  targetTemp: number;
  color: string;
  chartColor: string;
};

const HEATING_MODES: Record<'eco' | 'comfort' | 'frost', HeatingMode> = {
  eco: { 
    name: 'Éco', 
    targetTemp: 18, 
    color: 'bg-blue-500',
    chartColor: '#3b82f6'
  },
  comfort: { 
    name: 'Confort', 
    targetTemp: 21, 
    color: 'bg-green-500',
    chartColor: '#10b981'
  },
  frost: { 
    name: 'Hors-gel', 
    targetTemp: 7, 
    color: 'bg-gray-500',
    chartColor: '#6b7280'
  }
};

class SimulatedHeaterAPI {
  private isOn = false;
  private targetTemp = 21;
  private currentMode: 'eco' | 'comfort' | 'frost' = 'comfort';

  turnOn(target: number) {
    this.isOn = true;
    this.targetTemp = target;
    return { targetTemp: target, isOn: true };
  }

  turnOff() {
    this.isOn = false;
    return { isOn: false };
  }

  setMode(mode: 'eco' | 'comfort' | 'frost') {
    this.currentMode = mode;
    this.targetTemp = HEATING_MODES[mode].targetTemp;
    return { 
      targetTemp: this.targetTemp, 
      mode: this.currentMode,
      isOn: this.isOn
    };
  }

  getStatus() {
    return { 
      isOn: this.isOn, 
      targetTemp: this.targetTemp,
      mode: this.currentMode
    };
  }
}

export const IoTSimulator = () => {
  const [sensorData, setSensorData] = useState<SensorData>({
    temperature: 19,
    humidity: 45,
    power: 0,
    target: 21,
    mode: 'comfort',
    timestamp: Date.now()
  });

  const [heater] = useState(new SimulatedHeaterAPI());
  const [history, setHistory] = useState<SensorData[]>([]);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isAutoControl, setIsAutoControl] = useState(true);
  const [selectedChart, setSelectedChart] = useState<'temperature' | 'humidity' | 'power'>('temperature');
  
  
  const sensorDataRef = useRef(sensorData);
  sensorDataRef.current = sensorData;

  
  useEffect(() => {
    const interval = setInterval(() => {
      const { isOn, targetTemp, mode } = heater.getStatus();
      let newTemp = sensorDataRef.current.temperature; // Utilise la ref

      
      if (isOn) {
        if (newTemp < targetTemp) {
          newTemp += 0.2 * (1 + Math.random() * 0.3);
        } else if (newTemp > targetTemp + 0.5) {
          newTemp -= 0.1; // Refroidit un peu si trop chaud
        }
      } else {
        
        if (newTemp > 17) {
          newTemp -= 0.1 * (1 + Math.random() * 0.2);
        } else if (newTemp < 17) {
          newTemp += 0.05; // 
        }
      }

      
      newTemp += (Math.random() - 0.5) * 0.05;

      const newData: SensorData = {
        temperature: Math.round(newTemp * 10) / 10,
        humidity: Math.round(40 + Math.random() * 20),
        power: isOn ? 1500 + Math.random() * 500 : 0,
        target: targetTemp,
        mode,
        timestamp: Date.now()
      };

      setSensorData(newData);
      setHistory((prev) => [...prev.slice(-29), newData]);

    }, 2000);

    return () => clearInterval(interval);
  }, [heater]); 

  
  useEffect(() => {
    if (!isAutoControl) return;

    const { isOn, targetTemp } = heater.getStatus();
    
    if (sensorData.temperature < targetTemp - 1 && !isOn) {
      heater.turnOn(targetTemp);
      setSensorData(prev => ({ ...prev, power: 1500 }));
      setAlerts(prev => [...prev, `🔄 Allumage auto (${sensorData.temperature}°C < ${targetTemp}°C)`]);
    }
    
    if (sensorData.temperature > targetTemp + 1 && isOn) {
      heater.turnOff();
      setSensorData(prev => ({ ...prev, power: 0 }));
      setAlerts(prev => [...prev, `🔄 Extinction auto (${sensorData.temperature}°C > ${targetTemp}°C)`]);
    }

    setTimeout(() => {
      setAlerts(prev => prev.slice(-5));
    }, 10000);

  }, [sensorData.temperature, isAutoControl]);

  const toggleHeater = () => {
    const status = heater.getStatus();
    if (status.isOn) {
      heater.turnOff();
      setSensorData(prev => ({ 
        ...prev, 
        power: 0,
        timestamp: Date.now() 
      }));
      setAlerts(prev => [...prev, '⏹️ Radiateur éteint manuellement']);
    } else {
      heater.turnOn(status.targetTemp);
      setSensorData(prev => ({ 
        ...prev, 
        power: 1500,
        timestamp: Date.now() 
      }));
      setAlerts(prev => [...prev, '▶️ Radiateur allumé manuellement']);
    }
  };

  const changeMode = (mode: 'eco' | 'comfort' | 'frost') => {
    const result = heater.setMode(mode);
    setSensorData(prev => ({ 
      ...prev, 
      target: result.targetTemp, 
      mode: result.mode,
      timestamp: Date.now() 
    }));
    setAlerts(prev => [...prev, `📋 Mode ${HEATING_MODES[mode].name} activé (${result.targetTemp}°C)`]);
  };

  const getEnergyColor = (power: number) => {
    if (power === 0) return 'bg-gray-100 text-gray-700';
    if (power < 1000) return 'bg-green-100 text-green-700';
    if (power < 1800) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  
  const chartData = history.map((data, index) => ({
    time: new Date(data.timestamp).toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    }),
    temperature: data.temperature,
    humidity: data.humidity,
    power: data.power,
    target: data.target,
    index
  }));

  const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-800">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: <strong>{entry.value}</strong>
            {entry.name === 'temperature'
              ? '°C'
              : entry.name === 'humidity'
              ? '%'
              : 'W'}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

  return (
    <div className="space-y-6 p-4 max-w-7xl mx-auto">
      {/* En-tête */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
          <Heater className="w-8 h-8" />
          Système de Gestion Thermique Intelligent
        </h2>
        <p className="text-muted-foreground">Monitoring temps réel avec analyse graphique</p>
      </div>

      
      {alerts.length > 0 && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800">Journal des événements</h3>
            </div>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {alerts.slice().reverse().map((alert, index) => (
                <div key={index} className="text-sm text-blue-700 p-2 bg-blue-100 rounded">
                  {alert}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Carte Capteurs */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Thermometer className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Capteurs Environnement</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <span className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4" />
                  Température
                </span>
                <span className="font-bold text-lg text-blue-600">{sensorData.temperature}°C</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                <span className="flex items-center gap-2">
                  <Droplets className="w-4 h-4" />
                  Humidité
                </span>
                <span className="font-bold text-lg text-green-600">{sensorData.humidity.toFixed(1)}%</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Puissance
                </span>
                <span className="font-bold text-lg text-purple-600">{sensorData.power}W</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                <span className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Consigne
                </span>
                <span className="font-bold text-lg text-orange-600">{sensorData.target}°C</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>Mode</span>
                <Badge className={HEATING_MODES[sensorData.mode].color}>
                  {HEATING_MODES[sensorData.mode].name}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Contrôle Radiateur</h3>
            </div>

            <div className="space-y-4">
              <div className="text-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                <Badge className={heater.getStatus().isOn ? "bg-green-500 text-white px-3 py-1" : "bg-red-500 text-white px-3 py-1"}>
                  {heater.getStatus().isOn ? "🟢 EN MARCHE" : "🔴 ARRÊTÉ"}
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  Mode: <span className="font-semibold">{HEATING_MODES[heater.getStatus().mode].name}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Consigne: <span className="font-semibold">{heater.getStatus().targetTemp}°C</span>
                </p>
              </div>

              <Button 
                onClick={toggleHeater} 
                className="w-full text-lg py-3 font-semibold"
                variant={heater.getStatus().isOn ? "destructive" : "default"}
              >
                <Zap className="w-5 h-5 mr-2" />
                {heater.getStatus().isOn ? "Éteindre le radiateur" : "Allumer le radiateur"}
              </Button>

              <div className="space-y-3">
                <h4 className="font-medium text-center">Modes de chauffage</h4>
                <div className="grid grid-cols-3 gap-2">
                  {(['eco', 'comfort', 'frost'] as const).map((mode) => (
                    <Button
                      key={mode}
                      variant={heater.getStatus().mode === mode ? "default" : "outline"}
                      className={`${HEATING_MODES[mode].color} font-semibold`}
                      onClick={() => changeMode(mode)}
                      size="sm"
                    >
                      {HEATING_MODES[mode].name}
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Éco: 18°C • Confort: 21°C • Hors-gel: 7°C
                </p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <span className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Contrôle automatique
                </span>
                <Button
                  variant={isAutoControl ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsAutoControl(!isAutoControl)}
                  className="min-w-20"
                >
                  {isAutoControl ? "ON" : "OFF"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <LineChart className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Vue d&apos;ensemble</h3>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData.slice(-10)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis 
                    dataKey="time" 
                    tick={{ fontSize: 10 }}
                    angle={-45}
                    textAnchor="end"
                    height={40}
                  />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="temperature" 
                    stroke="#3b82f6" 
                    fill="#3b82f6" 
                    fillOpacity={0.2}
                    name="Température"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="target" 
                    stroke="#10b981" 
                    fill="#10b981" 
                    fillOpacity={0.2}
                    name="Consigne"
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex gap-2 mt-3">
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                📊 {chartData.length} points
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                ⏱️ 1 minute
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <LineChart className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Analyse Graphique Détaillée</h3>
          </div>

          <div className="flex gap-4 mb-6">
            <Button
              variant={selectedChart === 'temperature' ? "default" : "outline"}
              onClick={() => setSelectedChart('temperature')}
            >
              🌡️ Température
            </Button>
            <Button
              variant={selectedChart === 'humidity' ? "default" : "outline"}
              onClick={() => setSelectedChart('humidity')}
            >
              💧 Humidité
            </Button>
            <Button
              variant={selectedChart === 'power' ? "default" : "outline"}
              onClick={() => setSelectedChart('power')}
            >
              ⚡ Puissance
            </Button>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 10 }}
                  angle={-45}
                  textAnchor="end"
                  height={40}
                />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                
                {selectedChart === 'temperature' && (
                  <>
                    <Line 
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6 }}
                      name="Température (°C)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="target" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                      name="Consigne (°C)"
                    />
                  </>
                )}
                
                {selectedChart === 'humidity' && (
                  <Line 
                    type="monotone" 
                    dataKey="humidity" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6 }}
                    name="Humidité (%)"
                  />
                )}
                
                {selectedChart === 'power' && (
                  <Line 
                    type="monotone" 
                    dataKey="power" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6 }}
                    name="Puissance (W)"
                  />
                )}
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600">Min</p>
              <p className="font-bold text-lg">
                {chartData.length > 0 ? Math.min(...chartData.map(d => selectedChart === 'temperature' ? d.temperature : selectedChart === 'humidity' ? d.humidity : d.power)).toFixed(1) : '0'}
                {selectedChart === 'temperature' ? '°C' : selectedChart === 'humidity' ? '%' : 'W'}
              </p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600">Moyenne</p>
              <p className="font-bold text-lg">
                {chartData.length > 0 ? (chartData.reduce((sum, d) => sum + (selectedChart === 'temperature' ? d.temperature : selectedChart === 'humidity' ? d.humidity : d.power), 0) / chartData.length).toFixed(1) : '0'}
                {selectedChart === 'temperature' ? '°C' : selectedChart === 'humidity' ? '%' : 'W'}
              </p>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <p className="text-sm text-red-600">Max</p>
              <p className="font-bold text-lg">
                {chartData.length > 0 ? Math.max(...chartData.map(d => selectedChart === 'temperature' ? d.temperature : selectedChart === 'humidity' ? d.humidity : d.power)).toFixed(1) : '0'}
                {selectedChart === 'temperature' ? '°C' : selectedChart === 'humidity' ? '%' : 'W'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};