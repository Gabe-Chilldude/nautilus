<?php 

get_header();

echo "<div class='content'>";

do_action('get_content_container', 
    get_template_part('/parts/navbar')
);

echo "</div>";

get_footer();