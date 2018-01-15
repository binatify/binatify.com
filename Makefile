deploy:
	rm _site/assets/*.js
	rm _site/assets/*.css
	jekyll build
	cd _site && git add . && git commit -m "page update" && git push origin master
