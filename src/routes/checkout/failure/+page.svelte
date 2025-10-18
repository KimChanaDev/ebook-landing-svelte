<script lang="ts">
	import { HeroSection, Button } from '$components';
	const textForPaymentFailure = `<p class="light-grey mb-s">
        We’re sorry, but it looks like there was an issue with your purchase. Don’t
        worry—these things happen, and we're here to help.Please double-check your
        payment details and try again.
    </p>
    <p class="light-grey mb-s">
        We apologize for any inconvenience this may have caused and appreciate your
        patience. We’re committed to ensuring that you get the guide you need to
        make your move to Spain as smooth as possible.
    </p>
    <p class="light-grey mb-m">
        If you’d like to try again, please click the button below to return to the
        checkout page.
    </p>`;
</script>

<HeroSection>
	<h1 class="red">ERROR</h1>
	<h1 class="mb-l">WHILE PURCHASING</h1>
	{@html textForPaymentFailure}
	<Button>Try again</Button>
</HeroSection>
