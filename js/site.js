    // Set an explicit height/width on the images to prevent the rounded borders from being broken
    $('.images .img').each(function() {
      var img = $(this).find("img");
      $(this).css({background: 'url('+img.attr('src')+')', height: img.height(), width: img.width()});
      img.hide();
    });

    // This function finds the top image and puts it on the bottom
    var num_images = $('.img').length;
    function rotate_images() { 
        // increment the z-index for all images by 1
        $('.img').each(function(i, el) { $(el).css('z-index', parseInt($(el).css("z-index"), 10)+1);});

        // decrement the z-index for the top image to the lowest value
        var top_image = find_top_element('.img');
        top_image.css('z-index', parseInt(top_image.css('z-index'), 10)-num_images);
    }

    // Return the last element with the highest z-index
    function find_top_element(items) { 
        var max_z_index, top_element;
        $(items).each(function() {
            var z_index = parseInt($(this).css('z-index'), 10);
            if (!top_element || max_z_index <= z_index) {
                max_z_index = z_index;
                top_element = this;
            }
        });
        return $(top_element)
    }

    // Every few seconds rotate the images
    setInterval(rotate_images, 4000);

