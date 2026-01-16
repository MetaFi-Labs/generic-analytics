import { DuneClient } from "@duneanalytics/client-sdk";

export const dune = new DuneClient(process.env.DUNE_API_PREVIEW_KEY!)
