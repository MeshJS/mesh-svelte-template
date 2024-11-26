import type * as MeshSdk from '@meshsdk/core';

let meshSdk: typeof MeshSdk | undefined = $state();

export const MeshSdkState = {
	async loadMeshSdk() {
		import('@meshsdk/core').then((s) => {
			meshSdk = s;
		});
	},
	get meshSdk() {
		return meshSdk;
	}
};
