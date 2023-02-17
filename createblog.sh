cp blog_template.html blogs/$1.html
sed -i '17 i <a href="'$1'.html">'$2'</a>' blogs/index.html;
echo "done"
echo "opening nano"
nano blogs/$1.html
