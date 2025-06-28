
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

const rangsor = [
  { ticker: "AMD", score: 9.8, status: "zöld", comment: "Rally beindító, erős technikai és AI alap" },
  { ticker: "TSLA", score: 7.0, status: "piros", comment: "Dilúciós kockázat, gyenge momentum" },
  { ticker: "NU", score: 9.1, status: "zöld", comment: "Fintech breakout, stabilizálódik" },
  { ticker: "SMCI", score: 9.7, status: "sárga", comment: "AI szerver, korrekció után érdemes figyelni" },
  { ticker: "PLTR", score: 9.3, status: "sárga", comment: "Túlértékelt, korrekcióban, de hosszú távon ígéretes" }
];

const portfolio = [
  { ticker: "AMD", amount: 3, buyPrice: 131.43, currentPrice: 143.80 },
  { ticker: "SMCI", amount: 36, buyPrice: 46.75, currentPrice: 47.58 },
  { ticker: "VRT", amount: 8, buyPrice: 121.16, currentPrice: 127.10 },
  { ticker: "APLD", amount: 50, buyPrice: 10.76, currentPrice: 10.38 },
  { ticker: "SOFI", amount: 30, buyPrice: 15.60, currentPrice: 17.18 },
  { ticker: "NU", amount: 50, buyPrice: 13.21, currentPrice: 13.25 }
];

const statusColor = {
  zöld: "bg-green-500",
  sárga: "bg-yellow-400",
  narancs: "bg-orange-500",
  piros: "bg-red-500"
};

export default function TomiTradeDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">TomiTrade AI Forge – Demo Ranglista</h1>

      {rangsor.map((stock) => (
        <Card key={stock.ticker} className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <span className={`w-4 h-4 rounded-full ${statusColor[stock.status]}`}></span>
            <div>
              <h2 className="font-semibold text-lg">{stock.ticker} <span className="text-sm text-muted">({stock.score}/10)</span></h2>
              <p className="text-sm text-gray-500">{stock.comment}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {stock.status === "zöld" && <TrendingUp className="text-green-500" />} 
            {stock.status === "piros" && <TrendingDown className="text-red-500" />} 
            {stock.status === "sárga" && <AlertTriangle className="text-yellow-500" />} 
            <Button variant="secondary">Részletek</Button>
          </div>
        </Card>
      ))}

      <h2 className="text-xl font-bold pt-6">📦 Saját Portfólió</h2>
      {portfolio.map((pos) => {
        const value = pos.amount * pos.currentPrice;
        const pnl = (pos.currentPrice - pos.buyPrice) * pos.amount;
        const pnlColor = pnl > 0 ? "text-green-600" : pnl < 0 ? "text-red-600" : "text-gray-600";

        return (
          <Card key={pos.ticker} className="p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">{pos.ticker}</h3>
                <p className="text-sm text-muted">{pos.amount} db @ ${pos.buyPrice.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p>Jelenlegi ár: ${pos.currentPrice.toFixed(2)}</p>
                <p>Érték: ${value.toFixed(2)}</p>
                <p className={pnlColor}>P/L: {pnl > 0 ? "+" : ""}{pnl.toFixed(2)} USD</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
