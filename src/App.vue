<template>
	<div class="app">
		<sidebar />
		<router-view class="router-view"></router-view>
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'


</script>

<style lang="scss">
body {
	background: #fff;
	overflow: hidden;
	height: 100%;
	width: 100%;
	position:absolute;
	display: flex;
}
#app{
	flex:1;
	display: flex;
}
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


button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	flex:1;
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1250px) {
		padding-left: 6rem;
		}
	}
}
.contents{
  position: relative;
  width: 900px;
  min-height: 0px;
  margin: 45px auto 0;

  .title{
    overflow: hidden;
    width: 100%;
    height: 2rem;
    margin-bottom: 3rem;

    h2{
      display: inline-block;
      height: 30px;
      margin-top: 0px;
      color: var(--black);
      font-size: 27px;
      letter-spacing: -1px;
    }
  }
}
.router-view{
	overflow-y: scroll;
}
</style>
