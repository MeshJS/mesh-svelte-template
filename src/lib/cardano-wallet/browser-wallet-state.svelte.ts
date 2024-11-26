import { type BrowserWallet, type Wallet } from '@meshsdk/core';
import { MeshSdkState } from '$lib/sdk.svelte.js';

let browserWallet: BrowserWallet | undefined = $state();
let wallet: Wallet | undefined = $state();
let walletName: string | undefined = $state();
let connecting: boolean = $state(false);
let lovelaceBalance: string | undefined = $state();

export const BrowserWalletState = {
	get wallet() {
		return wallet;
	},
	get walletName() {
		return walletName;
	},
	get connecting() {
		return connecting;
	},
	get lovelaceBalance() {
		return lovelaceBalance;
	},
	get browserWallet() {
		return browserWallet;
	},
	async connectWallet(w: Wallet) {
		connecting = true;
		if (MeshSdkState.meshSdk) {
			browserWallet = await MeshSdkState.meshSdk.BrowserWallet.enable(w.id);
			wallet = w;
			walletName = w.name
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join(' ');
			lovelaceBalance = await browserWallet.getLovelace();
		} else {
			throw Error('Mesh SDK is undefined. Wait until it is loaded.');
		}
		connecting = false;
	},
	disconnectWallet() {
		wallet = undefined;
		browserWallet = undefined;
		walletName = undefined;
		lovelaceBalance = undefined;
	}
};
