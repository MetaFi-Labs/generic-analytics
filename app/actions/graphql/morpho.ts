'use server'

export async function fetchMorphoVaultV1(vaultAddress: string) {
  return fetch('https://api.morpho.org/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
      query {
        vaultByAddress(
          address: "${vaultAddress}"
          chainId: 1
        ) {
          address
          state {
            avgNetApy
          }
          liquidity {
            underlying
          }
        }
      }`
    }),
  })
  .then(res => res.json())
}
