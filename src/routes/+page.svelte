<script lang="ts">
    import {
        ConnectWalletButton,
        BrowserWalletState,
        connectWallet,
        disconnectWallet,
    } from "$lib";
</script>

<div class="bg-gray-900 w-full text-white text-center">
    <main class={`flex min-h-screen flex-col items-center justify-center p-24`}>
        <h1 class="text-6xl font-thin mb-20">
            <a href="https://meshjs.dev/" class="text-sky-600"> Mesh </a>{" "}
            SvelteKit
        </h1>

        <div class="mb-20">
            <ConnectWalletButton />
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-around"
        >
            <a
                href="https://meshjs.dev/apis"
                class="bg-gray-800 rounded-xl border border-white hover:scale-105 transition max-w-96 p-5 m-5"
            >
                <h2 class="text-2xl font-bold mb-2">Documentation</h2>
                <p class="text-gray-400">
                    Our documentation provide live demos and code samples; great
                    educational tool for learning how Cardano works.
                </p>
            </a>

            <a
                href="https://meshjs.dev/guides"
                class="bg-gray-800 rounded-xl border border-white hover:scale-105 transition max-w-96 p-5 m-5"
            >
                <h2 class="text-2xl font-bold mb-2">Guides</h2>
                <p class="text-gray-400">
                    Whether you are launching a new NFT project or ecommerce
                    store, these guides will help you get started.
                </p>
            </a>

            <a
                href="https://meshjs.dev/svelte"
                class="bg-gray-800 rounded-xl border border-white hover:scale-105 transition max-w-96 p-5 m-5 md:mx-auto lg:mx-5 md:col-span-2 lg:col-span-1"
            >
                <h2 class="text-2xl font-bold mb-2">Svelte components</h2>
                <p class="text-gray-400">
                    Useful Svelte UI components, seamlessly integrate them into
                    your app, and bring the user interface to life.
                </p>
            </a>
        </div>
    </main>
    <footer class="p-8 border-t border-gray-300 flex justify-center"></footer>
</div>
