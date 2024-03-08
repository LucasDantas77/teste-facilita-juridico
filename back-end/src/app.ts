import express, { Application, json } from "express";
import { startDataBase } from "./database";
import { deleteClientById, getClients, getCordenates, postClients } from "./logic";
import cors from "cors";

const app: Application = express();
app.use(json());
app.use(cors());

app.get("/clientes", getClients);
app.get("/coordenadas", getCordenates);
app.post("/clientes", postClients);
app.delete("/clientes/:id", deleteClientById);
const PORT: number = 3000;
const runningMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, async () => {
  await startDataBase();
  console.log(runningMsg);
});
