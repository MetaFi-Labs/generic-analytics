'use server'

import { DuneClient } from "@duneanalytics/client-sdk";

import { DUNE_QUERIES } from '../../config/constants'

const dune = new DuneClient(process.env.DUNE_API_PREVIEW_KEY!);

export async function fetchUnitsInTime() {
  const unitsInTimeResponse = await dune.getLatestResult({queryId: DUNE_QUERIES.unitsInTime});
  const unitsInTime = unitsInTimeResponse.result?.rows.map(row => ({
    x: new Date(String(row.time)).toLocaleDateString(),
    y: (Number(row.cum) / 1e18).toFixed(0), // Unit has 18 decimals
  })) || [];
  const unitsExecutionEndedAt = unitsInTimeResponse.execution_ended_at;
  return { unitsInTime, unitsExecutionEndedAt };
}

export async function fetchDepositsInTime() {
  const depositsInTimeResponse = await dune.getLatestResult({queryId: DUNE_QUERIES.depositsInTime});
  const depositsInTime = depositsInTimeResponse.result?.rows.map(row => ({
    time: new Date(String(row.time)).toLocaleDateString(),
    usdc: (Number(row.usdc) / 1e6).toFixed(0), // USDC has 6 decimals
    usdt: (Number(row.usdt) / 1e6).toFixed(0), // USDT has 6 decimals
    usds: (Number(row.usds) / 1e18).toFixed(0), // USDS has 18 decimals
  })) || [];
  const depositsExecutionEndedAt = depositsInTimeResponse.execution_ended_at;
  return { depositsInTime, depositsExecutionEndedAt };
}
