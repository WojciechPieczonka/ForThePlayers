document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');
	const menuBtn = document.querySelector('.navbar-toggler');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => {
			navList.classList.remove('show');
		})
	);

	function addShadowOnClick() {
		nav.classList.add('shadow-bg');
	}

	menuBtn.addEventListener('click', addShadowOnClick);
	window.addEventListener('scroll', addShadow);
});
