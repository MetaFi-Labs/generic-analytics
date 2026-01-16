'use server'

import { dune } from './client'

export async function fetchDune(queryId: number, mapper: (row: any) => any) {
  const response = await dune.getLatestResult({queryId});
  const data = response.result?.rows.map(mapper) || [];
  const executionEndedAt = response.execution_ended_at;
  return { data, executionEndedAt };
}
