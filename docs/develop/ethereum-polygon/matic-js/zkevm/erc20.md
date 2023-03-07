---
id: hermez-client-erc20
title: ERC20 Methods
sidebar_label: ERC20 Methods
description: Utilize the ERC20 methods on the Polygon zkEVM network.
keywords:
  - docs
  - maticjs
  - polygon
  - hermez client
image: https://wiki.polygon.technology/img/polygon-logo.png
---

:::tip

See the [<ins>MaticJS SDK examples</ins>](https://github.com/maticnetwork/matic.js/tree/master/examples/hermez/erc20) on our official Github repo to interact with ERC20 tokens on the zkEVM network..

:::

## Calling ERC20 Method

`HermezClient` provides `erc20` method which helps you to interact with an **ERC20** token on the zkEVM network. The method returns an object which has various other methods.

```js
const erc20token = hermezClient.erc20(<token address> , <isRoot>);
```

Passing second argument for `isRoot` is optional.

### For Child Token

Token on the zkEVM network can be initiated by using this syntax:

```js
const childERC20Token = hermezClient.erc20(<child token address>);
```

### For Root Token

Token on ethereum can be initiated by providing the **second parameter value as `true`**.

```js
const rootERC20Token = hermezClient.erc20(<root token address>, true);
```

## Check Balance

You can use the `getBalance` method to get the balance of a user account. It is available for both child and root token.

```js
// get balance of user
const balance = await erc20Token.getBalance(<user Address>);
```

## Approve Methods

### approve

`approve` method can be used to approve required amount on the root token. It is required in order to deposit amount on the zkEVM network.

```js
const erc20Token = hermezClient.erc20(<root token address>, true); // root token

// approve 1000 amount
const result = await erc20Token.approve(1000);

const txHash = await result.getTransactionHash();
const receipt = await result.getReceipt();
```

#### spenderAddress

The address on which approval is given is called the `spenderAddress`. It is a third-party user or a smart contract which can transfer your token on your behalf.

By default `spenderAddress` value is an ERC20 predicate address. You can specify `spenderAddress` value manually.

```js
// approve 1000 amount
const result = await erc20Token.approve(1000, {
    spenderAddress: <spender address value>
});
```

### approveMax

`approveMax` method can be used to approve maximum amount on the root token.

```js
const erc20Token = hermezClient.erc20(<root token address>, true); // root token

const result = await erc20Token.approveMax();

const txHash = await result.getTransactionHash();
const receipt = await result.getReceipt();
```

#### spenderAddress

You can specify `spenderAddress` value manually.

```js
// approve 100 amount
const result = await erc20Token.approveMax({
    spenderAddress: <spender address value>
});
```

### isApprovalNeeded

`isApprovalNeeded` checks if an approval is needed for the root token.

```js
const erc20Token = hermezClient.erc20(<token address>, true); // root token

const result = await erc20Token.isApprovalNeeded();
```

### getAllowance

`getAllowance` method can be used to get the approved amount for the user.

```js
const erc20Token = hermezClient.erc20(<token address>, true); // root token

const result = await erc20Token.getAllowance(<user address>);
```

#### spenderAddress

You can specify spender address value manually.

```js
const result = await erc20Token.getAllowance(<user Address>, {
    spenderAddress: <spender address value>
});
```

## Transfer Method

The `transfer` method can be used to transfer amount from one address to another.

```js
const erc20Token = hermezClient.erc20(<token address>);

const result = await erc20Token.transfer(<amount>, <to>);

const txHash = await result.getTransactionHash();
const receipt = await result.getReceipt();
```

## Deposit Methods

### deposit

`deposit` method can be used to deposit the required amount from root token to child token.

```js
const erc20Token = hermezClient.erc20(<root token address>, true); // root token

//deposit 100 to user address
const result = await erc20Token.deposit(100, <user address>);

const txHash = await result.getTransactionHash();
const receipt = await result.getReceipt();
```

### depositEther

`depositEther` method can be used to deposit required amount of **ether** from ethereum to polygon.

```js
// ether address = 0x0000000000000000000000000000000000000000
const etherToken = hermezClient.erc20(<ether address>, true);

const result = await etherToken.deposit(<amount>, <user Address>);

const txHash = await result.getTransactionHash();
const receipt = await result.getReceipt();
```

### depositWithPermit

```js
const erc20Token = hermezClient.erc20(<root token address>, true); // root token

const result = await erc20Token.depositWithPermit(<amount>, <user address>);

const txHash = await result.getTransactionHash();
const receipt = await result.getReceipt();
```

### depositClaim

`depositClaim` method is used for child tokens to claim their ERC20 token deposits.

```js
const erc20Token = hermezClient.erc20(<child token address>); // child token

const result = await erc20Token.depositClaim(<transaction hash);

const txHash = await result.getTransactionHash();
const receipt = await result.getReceipt();
```

## Token Withdrawal Methods

### withdraw

`withdraw` method can be used to initiate the withdrawal process which burns the specified amount on the zkEVM network.

```js
const erc20Token = hermezClient.erc20(<child token address>); // child token

const result = await erc20Token.withdraw(<amount>, <user address);

const txHash = await result.getTransactionHash();
const receipt = await result.getReceipt();
```

The received transaction hash will be used to exit the withdraw process. So we recommend to store it.

### withdrawExit

`withdrawExit` method can be used to exit the withdrawal process by using the transaction hash from `withdraw` method. Note that `withdraw` transaction must be checkpointed in order to exit the withdrawal process.

```js
const erc20Token = hermezClient.erc20(<root token address>, true); // root token

const result = await erc20Token.withdrawExit(<transaction hash>);

const txHash = await result.getTransactionHash();
const receipt = await result.getReceipt();
```

