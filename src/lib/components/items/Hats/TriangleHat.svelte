<div class="triangle-hat">
	<div class="dot" />
</div>

<style>
	.triangle-hat {
		position: relative;
		transform: scale(var(--ggs, 1));
		width: 115px;
		height: 140px;
		border-left: 3px solid transparent;
		border-bottom: 3px solid;
	}

	.triangle-hat,
	.triangle-hat::before {
		display: block;
		box-sizing: border-box;
		border-right: 3px solid transparent;
	}

	.triangle-hat::before {
		content: '';
		position: absolute;
		width: 100px;
		height: 100px;
		border-left: 3px solid;
		border-top: 3px solid;
		border-bottom: 3px solid transparent;
		transform: rotate(45deg) skew(10deg, 10deg);
		left: 5px;
		bottom: -52px;
	}
	.dot {
    top: 43px;
    left: 47px;
		box-sizing: border-box;
		position: relative;
		display: block;
		transform: scale(var(--ggs, 1));
		width: 16px;
		height: 16px;
		border: 3px solid;
		border-radius: 100px;
	}
</style>
