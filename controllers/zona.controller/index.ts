import { Zona } from "../../models/zonas.model";
import { Response, Request } from "express";
import axios from "axios";

// @FETCH zona eleitoral pela API do TSE
const endPointZona = `https://apps.tre-rj.jus.br/api-dados-abertos/zonas`;
export const fetchZona = async () => {
  try {
    const result = await axios.get(endPointZona).then((res) => res.data);
    // console.log("resultado: ", ...result);
    return result;
  } catch (err) {
    console.error(err);
    console.log("Não foi possível buscar dados da API devido a erro");
  }
};
fetchZona();

// @GET requisition
export const getZonas = async (_: Request, res: Response) => {
  try {
    const result = await Zona.find();
    return res
      .status(201)
      .json({ msg: `Zonas Eleitorais encontradas com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a erro");
  }
};

// @POST requisition
export const addZona = async (req: Request, res: Response) => {
  try {
    const newZonas = fetchZona();
    console.log("Zonas->>> ", { ...newZonas });
    const result = await Zona.create({ ...newZonas });
    return res
      .status(201)
      .json({ msg: `Zona elitoral inserida com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a erro");
  }
};

// @GET requisition by id
export const getZonaById = async (req: Request, res: Response) => {
  try {
    const { zona_id } = req.params;
    const result = await Zona.findById(zona_id);
    return res
      .status(201)
      .json({ msg: `Zona eleitoral encontrada com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a erro");
  }
};

// @PUT requisition
export const updateZona = async (req: Request, res: Response) => {
  try {
    const { zona_id } = req.params;
    const newZona = req.body;
    const result = await Zona.findByIdAndUpdate(zona_id, newZona);
    return res
      .status(201)
      .json({ msg: `Zona eleitoral atualizada com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a erro");
  }
};

// @PATCH requisition
export const patchZona = async (req: Request, res: Response) => {
  try {
    const { zona_id } = req.params;
    const newZona = req.body;
    const result = await Zona.findByIdAndUpdate(zona_id, newZona);
    return res
      .status(201)
      .json({ msg: `Zona eleitoral atualizada com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a erro");
  }
};

// @DELETE requisition
export const deleteZona = async (req: Request, res: Response) => {
  try {
    const { zona_id } = req.params;
    const result = await Zona.findByIdAndDelete(zona_id);
    return res
      .status(201)
      .json({ msg: `Zona eleitoral deletada com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a erro");
  }
};
