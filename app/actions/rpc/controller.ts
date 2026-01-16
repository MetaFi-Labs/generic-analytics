'use server'

import { client } from './client'
import { controllerAbi } from '../../../public/abi/Controller.abi'

interface ControlledVaultSettings {
  controller: `0x${string}`;
  vault: `0x${string}`;
}

export async function fetchVaultSettings(settings: ControlledVaultSettings) {
    return client.readContract({
      address: settings.controller,
      abi: controllerAbi,
      functionName: 'vaultSettings',
      args: [settings.vault],
    }).then(res => ({
      maxCapacity: Number(res[0]) / 10 ** 18,
      minProportionality: res[1] / 100,
      maxProportionality: res[2] / 100,
    }))
}
