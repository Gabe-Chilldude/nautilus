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

// ? adicionar estilos ao tema 

add_action('wp_enqueue_style', 'enqueue_multiple_styles', 10, 2);

define('STYLES_PATH', get_template_directory_uri() . '/assets/css');

$stylesheets = [
    ['style', get_stylesheet_uri()],
    ['reset', STYLES_PATH . '/reset.css'],
    ['css', STYLES_PATH . '/css.css'],
    ['resposive', STYLES_PATH . '/responsive.css']
]; 

function enqueue_multiple_styles(array $sheets, $version = false)  {

    foreach ($sheets as $sheet)  {
    
        wp_enqueue_style($sheet[0], $sheet[1], false, $version);

    }
}

do_action('wp_enqueue_style', $stylesheets, false);

wp_enqueue_script('script', get_template_directory_uri() . '/assets/scripts/script.js', false, false);

// ? Montar div de conteúdo

add_action('get_content_cotainer', 'get_content_container', 10, 1 );

function get_content_cotainer($contents)  {
    echo '<div class="content">';

    echo $contents;

    echo'</div>';
}