<?php

// Theme functions here

add_action('after_setup_theme', function () {
    
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    register_nav_menus(array(
        'header_menu' => 'Header Menu',
        'footer_menu' => 'Footer Menu',
        'menu_mobile' => 'Menu Mobile'
    ));
});


define('STYLES_PATH', get_template_directory_uri() . '/assets/css');

$stylesheets = [
    ['style', get_stylesheet_uri()],
    ['css', STYLES_PATH],
    ['resposive', STYLES_PATH]
]; 

foreach ($stylesheets as $sheet)  {

    wp_enqueue_style($sheet[0], $sheet[1] . '/' . $sheet[0] . '.css');

}

