---
id: withdraw-confirm-faster
title: আরও দ্রুত উইথড্র চ্যালেঞ্জ
keywords:
- 'pos client, erc20, withdrawConfirmFaster, polygon, sdk'
description: 'MATICJS দিয়ে শুরু করুন'
---

# withdrawConfirmFaster {#withdrawconfirmfaster}

Plasma উইথড্র প্রক্রিয়ায় `withdrawConfirmFaster` পদ্ধতিটি হলো দ্বিতীয় ধাপ। এই ধাপে আপনার বার্ন লেনদেন (প্রথম লেনদেন)-এর প্রমাণ জমা দেওয়া হয় এবং একটি erc721 টোকেনের সমান ভ্যালু তৈরি হয়।

এই প্রক্রিয়াটি সফল হওয়ার পরে, চ্যালেঞ্জের সময়কাল শুরু হয় এবং চ্যালেঞ্জের সময়কাল শেষ হওয়ার পরে, ব্যবহারকারী রুট চেইনে তাদের অ্যাকাউন্টে উইথড্র করা পরিমাণ ফেরত পেতে পারেন।

মেইননেটের জন্য চ্যালেঞ্জ সময়সীমা 7 দিন।

<div class="highlight mb-20px mt-20px">
এটি দ্রুত কারণ এটি ব্যাকএন্ডে প্রমাণ তৈরি করে। আপনাকে [setProofAPI](/docs/develop/ethereum-polygon/matic-js/set-proof-api) কনফিগার করতে হবে।
</div>

**দ্রষ্টব্য**- withdrawStart উইথড্র চ্যালেঞ্জ করার জন্য অবশ্যই লেনদেন চেকপয়েন্ট পার হতে হবে।

```
import { setProofApi } from '@maticnetwork/maticjs'

setProofApi("https://apis.matic.network/");

const erc20Token = plasmaClient.erc20(<token address>, true);

// start withdraw process for 100 amount
const result = await erc20Token.withdrawConfirmFaster(<burn tx hash>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```

একবার চ্যালেঞ্জের সময়সীমা শেষ হলে  `withdrawExit` কল করে উইথড্র প্রক্রিয়া থেকে বের হওয়া যাবে এবং উইথড্রকৃত পরিমাণ ফিরে পাওয়া যাবে।
