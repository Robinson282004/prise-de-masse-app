import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function App() {
  const [weight, setWeight] = useState(60);
  const [currentDay, setCurrentDay] = useState("lundi");

  const trainingPlan = {
    lundi: [
      "Développé couché avec haltères – 4x10-12",
      "Élévations latérales – 4x12-15",
      "Pompes lestées – 4 séries",
      "Développé militaire haltères – 3x10-12",
      "Gainage 1 min + Superman – 3x"
    ],
    mardi: [
      "Squats haltères – 4x10",
      "Fentes marchées – 3x12/jambe",
      "Soulevé de terre jambes tendues – 3x10",
      "Planche inclinée crunchs – 3x20",
      "Gainage latéral – 3x30s"
    ],
    mercredi: [
      "Tractions – 4x max",
      "Rowing haltères – 4x10",
      "Curl biceps – 3x12",
      "Pompes inversées – 3x max",
      "Gainage dynamique – 3x"
    ],
    jeudi: [
      "HIIT 20min (burpees, jumping jacks, mountain climbers)",
      "Crunchs inclinés – 4x20",
      "Relevés de jambes – 3x15",
      "Planche dynamique – 3x45s"
    ],
    vendredi: [
      "Circuit full-body (squat + pompe + rowing) – 3 tours",
      "Soulevé de terre haltères – 3x10",
      "Curl + développé épaule combiné – 3x12",
      "Gainage 1min – 3x"
    ],
    samedi: [
      "Développé couché – 4x10",
      "Élévations latérales – 4x15",
      "Curl biceps – 3x12",
      "Pompes lestées – 3x max",
      "Superman + gainage – 3x"
    ],
    dimanche: [
      "Repos / étirements / mobilité douce"
    ]
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Programme prise de masse – 60kg</h1>

      <Tabs defaultValue="entrainement">
        <TabsList className="mb-4">
          <TabsTrigger value="entrainement">Entraînement</TabsTrigger>
          <TabsTrigger value="poids">Suivi poids</TabsTrigger>
        </TabsList>

        <TabsContent value="entrainement">
          <div className="mb-4">
            <select
              className="border p-2 rounded"
              value={currentDay}
              onChange={(e) => setCurrentDay(e.target.value)}
            >
              {Object.keys(trainingPlan).map((day) => (
                <option key={day} value={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</option>
              ))}
            </select>
          </div>

          <Card>
            <CardContent className="space-y-2 py-4">
              {trainingPlan[currentDay].map((ex, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>{ex}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="poids">
          <div className="space-y-4">
            <p>Poids actuel : <strong>{weight} kg</strong></p>
            <div className="flex gap-2">
              <Button onClick={() => setWeight(weight - 1)}>-</Button>
              <Button onClick={() => setWeight(weight + 1)}>+</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
