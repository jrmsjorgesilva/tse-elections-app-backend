import mongoose, { Schema } from "mongoose";

interface IZonas {
  numero: String;
  endereco: String;
  bairro: String;
  cidade: String;
  email: String;
}

const zonasSchema = new Schema({
  numero: String,
  endereco: String,
  bairro: String,
  cidade: String,
  email: String,
});

export const Zona = mongoose.model<IZonas>("TseElectionAppZona", zonasSchema);
