modules = {
    application {
        resource url:'css/style.css'
        
        resource url:'js/application.js'
        resource url:'js/main.js'
    }
    
    jquery {
        resource url:[dir: 'js', file: 'jquery-1.8.3.min.js']
    }
    
    'bootstrap-gallery' {
        defaultBundle 'gallery'
        dependsOn 'jquery, bootstrap'
        
        resource url:[dir: 'css', file: 'bootstrap-ie6.min.css'], disposition: 'head', wrapper: { s -> "<!--[if lt IE 7]>$s<![endif]-->" }
        resource url:[dir: 'css', file: (dev ? 'bootstrap-image-gallery.css' : 'bootstrap-image-gallery.min.css')], disposition: 'head'
        
        resource url:[dir: 'js', file: 'load-image.min.js']
        resource url:[dir: 'js', file: (dev ? 'bootstrap-image-gallery.js' : 'bootstrap-image-gallery.min.js')]
    }
    
    'nailthumb' {
        defaultBundle 'photo'
        dependsOn 'jquery'
        
        resource url:[dir: 'css', file: (dev ? 'jquery.nailthumb.1.1.css' : 'jquery.nailthumb.1.1.min.css')], disposition: 'head'
        
        resource url:[dir: 'js', file: (dev ? 'jquery.nailthumb.1.1.js' : 'jquery.nailthumb.1.1.min.js')]
    }
}