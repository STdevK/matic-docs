---
id: is-aproved
title: isApproved
keywords:
- 'plasma client, erc721, isApproved, polygon, sdk'
description: 'Empieza con Matic.js'
---

# isApproved {#isapproved}

El método `isApproved` comprueba si el token está aprobado para la ID de token especificada. Devuelve el valor booleano.

```
const erc721Token = plasmaClient.erc721(<token address>, true);

const result = await erc721Token.isApproved(<tokenId>);

```
