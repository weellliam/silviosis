<html>
  <head>
    <meta name="layout" content="main">

    <title>Gallery</title>
    
    <r:require modules="bootstrap-gallery"/>
    
  </head>

  <body>
    
    <div class="container-fluid">
      <header>
        <h1>Silviosis Image Gallery</h1>
        <blockquote>
          <p>Welcome to my gallery.</p>
        </blockquote>
        <p>
          <button id="start-slideshow" class="btn btn-large btn-success" data-slideshow="5000" data-target="#modal-gallery" data-selector="#gallery a[rel=gallery]">Start Slideshow</button>
          <button id="toggle-fullscreen" class="btn btn-large btn-primary" data-toggle="button">Toggle Fullscreen</button>
        </p>
      </header>
    
      <div id="gallery" data-toggle="modal-gallery" data-target="#modal-gallery"></div>
    
      <br>
      
      <%--
      <div id="gallery" data-toggle="modal-gallery" data-target="#modal-gallery">
        <a href="${resource(dir:'gallery',file:'1.png')}" title="One" rel="gallery">One</a>
        <a href="${resource(dir:'gallery',file:'2.png')}" title="Two" rel="gallery">Two</a>
        <a href="${resource(dir:'gallery',file:'3.png')}" title="Three" rel="gallery">Three</a>
        <a href="${resource(dir:'gallery',file:'4.png')}" title="Four" rel="gallery">Four</a>
      </div>
      --%>
    </div>
    
    <!-- modal-gallery is the modal dialog used for the image gallery -->
    <div id="modal-gallery" class="modal modal-gallery hide fade" tabindex="-1">
      <div class="modal-header">
        <a class="close" data-dismiss="modal">&times;</a>
        <h3 class="modal-title"></h3>
      </div>
      <div class="modal-body"><div class="modal-image"></div></div>
      <div class="modal-footer">
        <a class="btn btn-primary modal-next">Next <i class="icon-arrow-right icon-white"></i></a>
        <a class="btn btn-info modal-prev"><i class="icon-arrow-left icon-white"></i> Previous</a>
        <a class="btn btn-success modal-play modal-slideshow" data-slideshow="5000"><i class="icon-play icon-white"></i> Slideshow</a>
        <a class="btn modal-download" target="_blank"><i class="icon-download"></i> Download</a>
      </div>
    </div>
  </body>
</html>
