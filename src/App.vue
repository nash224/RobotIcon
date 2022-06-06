<template>
	<div class="app">
		<sidebar />
		<router-view></router-view>
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'


</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--black: #000000;
	--silver: #c0c0c0;
	--dark-gray: #3c3a39;
	--smoke: #696969;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
	
}
body {
	background: #fff;
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1250px) {
		padding-left: 6rem;
		}
	}
}

</style>
