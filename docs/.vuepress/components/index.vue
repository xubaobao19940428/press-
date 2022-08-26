<!--  -->
<template>
	<div class="love">
		<div class="content_days">
			<div class="content_days_1">爸爸和妈妈️❤️已经</div>
			<div class="content_days_2">
				<span>{{ content + '天' + hours + '小时' + minutes + '小时' + seconds + '秒' }}</span>
			</div>
			<div class="content_days_3">2013-11-24</div>

			<div class="content_days_1">宥宥小宝已经</div>
			<div class="content_days_2">
				<span>{{ content1 + '天' + hours1+ '小时' + minutes1 + '小时' + seconds1 + '秒' }}</span>
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
		}
	},

	components: {},

	computed: {},

	mounted() {
		this.getDiffTime()
	},

	methods: {
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
.content_days {
	width: 100%;
	height: 300rpx;
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
    margin-top:20px;
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
</style>
