<!--  -->
<template>
	<div class="love">
		<div class="buttons">
			<button class="btn-hover color-1">BUTTON</button>
		</div>
		<div class="love_content">
			<div class="love_content_item">
				<p class="item_title">我媳妇</p>
				<div class="item_desc">我媳妇是个很可爱的小孩，没有脾气呢</div>
			</div>
			<div class="love_content_item">
				<p class="item_title">{{ years }}周年快乐</p>
				<div class="item_desc">和我媳妇{{ years }}周年了，11月24日，加油。</div>
			</div>
			<div class="love_content_item">
				<p class="item_title">不离不弃</p>
				<div class="item_desc">希望宝贝永远快乐，健健康康，没有烦恼，当然我还会给你带去烦恼的。</div>
			</div>
		</div>
		<div class="icon-large icon-clock">
			<div class="clock">
				<ol>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ol>
				<div id="hour"></div>
				<div id="min"></div>
				<div id="sec"></div>
			</div>
		</div>
		<div class="content_days">
			<div class="content_days_1">爸爸和妈妈️❤️已经</div>
			<div class="content_days_2">
				<span>{{ content + '天' + hours + '小时' + minutes + '小时' + seconds + '秒' }}</span>
			</div>
			<div class="content_days_3">2013-11-24</div>

			<div class="content_days_1">宥宥小宝已经</div>
			<div class="content_days_2">
				<span>{{ content1 + '天' + hours1 + '小时' + minutes1 + '小时' + seconds1 + '秒' }}</span>
			</div>
			<div class="content_days_3">2021-08-18</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			content: '',
			hours: '',
			minutes: '',
			seconds: '',
			content1: '',
			hours1: '',
			minutes1: '',
			seconds1: '',
			timer: null,
			years: 6,
		}
	},

	components: {},

	computed: {},

	mounted() {
		this.years = new Date().getFullYear() - 2013
		this.getDiffTime()
		window.requestAnimationFrame = (function () {
			return (
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function (callback) {
					window.setTimeout(callback, 1000 / 60)
				}
			)
		})()
		this.clock()
	},

	methods: {
		clock() {
			var hour = document.getElementById('hour')
			var min = document.getElementById('min')
			var sec = document.getElementById('sec')
			;(function loop() {
				requestAnimationFrame(loop)
				draw()
			})()
			function draw() {
				var now = new Date()
				var then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
				var diffInMil = now.getTime() - then.getTime()
				var h = diffInMil / (1000 * 60 * 60)
				var m = h * 60
				var s = m * 60
				sec.style.transform = 'rotate(' + s * 60 + 'deg)'
				hour.style.transform = 'rotate(' + (h * 60 + h / 2) + 'deg)'
				min.style.transform = 'rotate(' + m * 6 + 'deg)'
			}
		},

		getDiffTime() {
			this.timer = window.setInterval(() => {
				let date = new Date('2013-11-24').getTime()
				let newDate = new Date().getTime()
				let diffTime = newDate - date
				this.content = Math.floor(diffTime / (1000 * 60 * 60 * 24)) < 10 ? '0' + Math.floor(diffTime / (1000 * 60 * 60 * 24)) : Math.floor(diffTime / (1000 * 60 * 60 * 24)) //计算天数
				this.hours =
					Math.floor((diffTime / (1000 * 60 * 60)) % ((Number(this.content) <= 0 ? 1 : Number(this.content)) * 24)) < 10
						? '0' + Math.floor((diffTime / (1000 * 60 * 60)) % ((Number(this.content) <= 0 ? 1 : Number(this.content)) * 24))
						: Math.floor((diffTime / (1000 * 60 * 60)) % ((Number(this.content) <= 0 ? 1 : Number(this.content)) * 24)) //计算小时数
				this.minutes = Math.floor((diffTime / (1000 * 60)) % 60) < 10 ? '0' + Math.floor((diffTime / (1000 * 60)) % 60) : Math.floor((diffTime / (1000 * 60)) % 60) //计算分钟数
				this.seconds = Math.floor((diffTime / 1000) % 60) < 10 ? '0' + Math.floor((diffTime / 1000) % 60) : Math.floor((diffTime / 1000) % 60) //计算秒数
				//宥宥
				let date1 = new Date('2021-08-18').getTime()
				let newDate1 = new Date().getTime()
				let diffTime1 = newDate - date1
				this.content1 = Math.floor(diffTime1 / (1000 * 60 * 60 * 24)) < 10 ? '0' + Math.floor(diffTime1 / (1000 * 60 * 60 * 24)) : Math.floor(diffTime1 / (1000 * 60 * 60 * 24)) //计算天数
				this.hours1 =
					Math.floor((diffTime1 / (1000 * 60 * 60)) % ((Number(this.content1) <= 0 ? 1 : Number(this.content1)) * 24)) < 10
						? '0' + Math.floor((diffTime1 / (1000 * 60 * 60)) % ((Number(this.content1) <= 0 ? 1 : Number(this.content1)) * 24))
						: Math.floor((diffTime1 / (1000 * 60 * 60)) % ((Number(this.content1) <= 0 ? 1 : Number(this.content1)) * 24)) //计算小时数
				this.minutes1 = Math.floor((diffTime1 / (1000 * 60)) % 60) < 10 ? '0' + Math.floor((diffTime1 / (1000 * 60)) % 60) : Math.floor((diffTime1 / (1000 * 60)) % 60) //计算分钟数
				this.seconds1 = Math.floor((diffTime1 / 1000) % 60) < 10 ? '0' + Math.floor((diffTime1 / 1000) % 60) : Math.floor((diffTime1 / 1000) % 60) //计算秒数
			}, 1000)
		},
	},
	beforeDestroy() {
		window.clearInterval(this.timer)
		this.timer = null
	},
}
</script>
<style>
.buttons {
	text-align: center;
}

.btn-hover {
	width: 200px;
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	cursor: pointer;
	margin: 20px;
	height: 55px;
	text-align: center;
	border: none;
	background-size: 300% 100%;

	border-radius: 50px;
	-moz-transition: all 0.4s ease-in-out;
	-o-transition: all 0.4s ease-in-out;
	-webkit-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
}
.btn-hover:hover {
	background-position: 100% 0;
	-moz-transition: all 0.4s ease-in-out;
	-o-transition: all 0.4s ease-in-out;
	-webkit-transition: all 0.4s ease-in-out;
	transition: all 0.4s ease-in-out;
}
.btn-hover:active {
	transform: scale(.9);
}

.btn-hover:focus {
	outline: none;
}

.btn-hover.color-1 {
	background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
	box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}
.content_days {
	width: 100%;
	height: 300px;
	display: flex;
	padding: 20px;
	box-sizing: border-box;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 20px;
	background-color: #ffffff;
}
.content_days_1 {
	color: rgb(228, 87, 67);
	font-size: 12.6px;
	line-height: 1.2;
	margin-top: 20px;
}
.content_days_2 span:first-child {
	margin-top: 10px;
	font-size: 35px;
	color: rgb(228, 87, 67);
	font-weight: 700;
}
/* .content_days_2 span:last-child {
	font-size: 12px;
	color: rgb(228, 87, 67);
} */
.content_days_3 {
	margin-top: 10px;
	color: rgb(228, 87, 67);
	font-size: 12px;
	line-height: 1.2;
}
.love {
	position: relative;
}
.love_content {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 20px;
	border-bottom: 1px solid #f5f5f5;
	border-top: 1px solid #f5f5f5;
	margin-bottom: 20px;
}
.love_content .love_content_item {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.love_content .love_content_item .item_title {
	font-size: 20px;
	font-weight: 500;
}
.love_content .love_content_item .item_desc {
	font-size: 16px;
	text-align: center;
	line-height: 2;
}
.icon-large {
	width: 220px;
	height: 220px;
	border-radius: 38px;
	position: absolute;
	/* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */
}
.icon-clock {
	overflow: hidden;
	background-color: #000;
}
.clock {
	width: 192px;
	height: 192px;
	border-radius: 50%;
	background: #f1f1f1;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.clock ol {
	list-style-type: none;
	width: 100%;
	height: 100%;
	position: relative;
	margin: 0;
	padding: 0;
}
.clock ol li {
	counter-increment: lableCounter;
	position: absolute;
	font-size: 1.25em;
}
.clock ol li:before {
	font-family: 'Helvetica';
	content: counter(lableCounter) '';
}
.clock ol li:nth-child(1) {
	right: 55px;
	top: 20px;
}
.clock ol li:nth-child(2) {
	right: 25px;
	top: 50px;
}
.clock ol li:nth-child(3) {
	right: 12px;
	top: 85px;
}
.clock ol li:nth-child(4) {
	right: 25px;
	top: 125px;
}
.clock ol li:nth-child(5) {
	right: 55px;
	top: 150px;
}
.clock ol li:nth-child(6) {
	right: 90px;
	top: 150px;
}
.clock ol li:nth-child(7) {
	right: 125px;
	top: 150px;
}
.clock ol li:nth-child(8) {
	right: 155px;
	top: 125px;
}
.clock ol li:nth-child(9) {
	right: 165px;
	top: 85px;
}
.clock ol li:nth-child(10) {
	right: 150px;
	top: 50px;
}
.clock ol li:nth-child(11) {
	right: 120px;
	top: 20px;
}
.clock ol li:nth-child(12) {
	right: 85px;
	top: 10px;
}
#hour {
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #303030;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: -7px;
	margin-left: -7px;
}
#hour:after,
#hour:before,
#min:after,
#min:before,
#sec:after,
#sec:before {
	content: '';
	display: block;
	position: absolute;
}
#hour:before {
	width: 8px;
	height: 65px;
	border-radius: 4px;
	background-color: #303030;
	position: absolute;
	bottom: 2px;
	left: 50%;
	transform: translate(-50%, 0);
}
#min {
	width: 0;
	height: 0;
	border-radius: 50%;
	background: #303030;
	position: absolute;
	left: 50%;
	top: 50%;
}
#min:before {
	width: 6px;
	height: 90px;
	border-radius: 4px;
	background-color: #303030;
	position: absolute;
	bottom: 2px;
	left: 50%;
	transform: translate(-50%, 0);
}
#sec {
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: #dd3e1c;
	border: 2px solid #e13e1b;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: -4px;
	margin-bottom: -4px;
}
#sec:before {
	width: 2px;
	height: 105px;
	border-radius: 4px;
	background-color: #e13e1b;
	position: absolute;
	bottom: -12px;
	left: 50%;
	transform: translate(-50%, 0);
}
</style>
