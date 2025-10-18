<script lang="ts">
	import autherPic from '$assets/profile_pic.jpg';
</script>

<section class="landing-page-section">
	<h2 class="mb-l">About the auther</h2>
	<div class="author-container">
		<div class="author-text">
			<p class="mb-xs">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio similique quidem
				temporibus eligendi adipisci id at error reprehenderit? Delectus numquam iusto saepe esse
				perferendis deleniti, quo quae adipisci architecto?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio similique quidem
				temporibus eligendi adipisci id at error reprehenderit? Delectus numquam iusto saepe esse
				perferendis deleniti, quo quae adipisci architecto?
			</p>
		</div>
		<img src={autherPic} alt="Author cosplayer" />
	</div>
</section>

<style>
	.author-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.author-container img {
		width: 40%;
		border: 6px solid black;
		box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.5);
	}

	.author-text {
		width: 55%;
	}
</style>
