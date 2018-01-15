deploy:
	rm _site/assets/*.js
	rm _site/assets/*.css
	jekyll build
	tar -cvzf web.tar.gz _site/*
