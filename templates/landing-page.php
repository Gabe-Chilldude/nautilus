<?php 

get_header();

do_action('get_content_container', 
    get_template_part('/parts/navbar')
);

get_footer();