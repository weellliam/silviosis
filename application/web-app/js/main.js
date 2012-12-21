/*
 * Bootstrap Image Gallery JS Example 1.0
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global window, document, $ */

$(function () {
    'use strict';

    // Start slideshow button:
    $('#start-slideshow').button().click(function () {
        var options = $(this).data(),
            modal = $(options.target),
            data = modal.data('modal');
        if (data) {
            $.extend(data.options, options);
        } else {
            options = $.extend(modal.data(), options);
        }
        modal.find('.modal-slideshow').find('i')
            .removeClass('icon-play')
            .addClass('icon-pause');
        modal.modal(options);
    });

    // Toggle fullscreen button:
    $('#toggle-fullscreen').button().click(function () {
        var button = $(this),
            root = document.documentElement;
        if (!button.hasClass('active')) {
            $('#modal-gallery').addClass('modal-fullscreen');
            if (root.webkitRequestFullScreen) {
                root.webkitRequestFullScreen(
                    window.Element.ALLOW_KEYBOARD_INPUT
                );
            } else if (root.mozRequestFullScreen) {
                root.mozRequestFullScreen();
            }
        } else {
            $('#modal-gallery').removeClass('modal-fullscreen');
            (document.webkitCancelFullScreen ||
                document.mozCancelFullScreen ||
                $.noop).apply(document);
        }
    });

    // Get photoset: Life Abroad
    $.ajax({
        url: 'http://api.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.photosets.getPhotos',
            api_key: '11be2a1d4f5adffc96d0bec40f5d465d', //Silvia
            photoset_id: '72157627239512191'
            
        },
	    dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (data) {
        var gallery = $('#gallery'),
            url;
        $('<div>Photoset: Life Abroad</div>').appendTo(gallery);
        $.each(data.photoset.photo, function (index, photo) {
            url = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            $('<a rel="gallery"/>')
                .append($('<img>').prop('src', url + '_s.jpg'))
                .prop('href', url + '_b.jpg')
                .prop('title', photo.title)
                .appendTo(gallery);
        });
        $('<br/><br/>').appendTo(gallery);
    });
    
    // Get photoset: conexión cabeza-ojo-corazón 
    $.ajax({
        url: 'http://api.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.photosets.getPhotos',
            api_key: '11be2a1d4f5adffc96d0bec40f5d465d', //Silvia
            photoset_id: '72157627363883396'
            
        },
	    dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (data) {
        var gallery = $('#gallery'),
            url;
        $('<div>Photoset: conexión cabeza-ojo-corazón</div>').appendTo(gallery);
        $.each(data.photoset.photo, function (index, photo) {
            url = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            $('<a rel="gallery"/>')
                .append($('<img>').prop('src', url + '_s.jpg'))
                .prop('href', url + '_b.jpg')
                .prop('title', photo.title)
                .appendTo(gallery);
        });
        $('<br/><br/>').appendTo(gallery);
    });
    
    // Get Favorites
    $.ajax({
        url: 'http://api.flickr.com/services/rest/',
        data: {
            //user_id: '52219389@N06', //Silvia
            user_id: '23591401@N08', //Me
            format: 'json',
            method: 'flickr.favorites.getPublicList',
            //method: 'flickr.interestingness.getList',
            //api_key: '0953a567eecb704c7f78aafb541f1ace' //Mine
            api_key: '11be2a1d4f5adffc96d0bec40f5d465d' //Silvia
            //api_key: '7617adae70159d09ba78cfec73c13be3' //Original
        },
	    dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (data) {
        var gallery = $('#gallery'),
            url;
        $('<div>Favorites</div>').appendTo(gallery);
        $.each(data.photos.photo, function (index, photo) {
            url = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            $('<a rel="gallery"/>')
                .append($('<img>').prop('src', url + '_s.jpg'))
                .prop('href', url + '_b.jpg')
                .prop('title', photo.title)
                .appendTo(gallery);
        });
        $('<br/><br/>').appendTo(gallery);
    });
});