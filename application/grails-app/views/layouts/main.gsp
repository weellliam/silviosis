<!DOCTYPE html>
<!--[if lt IE 7 ]> 
<html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    
<html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    
<html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    
<html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> 
<html lang="en" class="no-js">
<!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <title><g:layoutTitle default="Silviosis"/></title>
                
    <r:require modules="application, bootstrap"/>
                
    <g:layoutHead/>
    <r:layoutResources />
  </head>
  <body>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </a>
          <a class="brand" href="${request.contextPath}">Silviosis</a>
            <ul class="nav">
              <li <%= request.forwardURI == "${createLink(uri: '/')}" ? ' class="active"' : '' %>>
                <a href="#">Home</a>
              </li>
              <li <%='about'== controllerName ? ' class="active"' : '' %>>
                <a href="#">About</a>
              </li>
              <li <%='gallery'== controllerName ? ' class="active"' : '' %>>
                <a href="#">Gallery</a>
              </li>
              <li <%='blog'== controllerName ? ' class="active"' : '' %>>
                <a href="#">Blog</a>
              </li>
              <li <%='contact'== controllerName ? ' class="active"' : '' %>>
                <a href="#">Contact</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
    
    <g:layoutBody/>
    
    <r:layoutResources />
  </body>
</html>
