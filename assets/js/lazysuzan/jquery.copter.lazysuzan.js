<!--

(function($){

    $.fn.lazySuzan = function(options){

        // Extend the default options with any user-supplied options
        var o = $.extend($.fn.lazySuzan.defaults, options);

        // Return the object for chainability
        return this.each(function(){

            // Get all the list items
            var slides = $(this).children('li');

            // Set the position classes
            slides
                .attr('class', 'off')
                .eq(0)
                    .removeClass('off')
                    .attr('class', 'pos2')
                    .end()
                .eq(1)
                    .removeClass('off')
                    .attr('class', 'pos3')
                    .end()
                .eq(-1)
                    .removeClass('off')
                    .attr('class', 'pos1');

            // Store the next item index for both left and right spin
            $(this).data({
                    'current_main' : 0,
                    'current_left' : 1,
                    'current_right' : slides.eq(-1).index(),
                    'max_index' : slides.eq(-1).index(),
                    'spin_left' : 2,
                    'spin_right' : slides.eq(-2).index()
                })

            // Bind a function to the click event that changes locations
                .find('.pos1')
                    .bind('click', function(event){

                            // Stop the link from firing
                            event.preventDefault();

                            $.fn.lazySuzan.spin_right(this);

                        })
                    .end()
                .find('.pos3')
                    .bind('click', function(event){

                            // Stop the link from firing
                            event.preventDefault();

                            $.fn.lazySuzan.spin_left(this);

                        });

        });

    };

    $.fn.lazySuzan.spin_left = function(el) {

                // Store element data
                var index = $(el).index(),
                    parent = $(el).parent(),
                    data = parent.data(),
                    newMain = index,
                    newLeft, newRight;

                // Get the new left index
                newLeft = index==data.max_index ? newLeft = 0 : newLeft = index+1;

                // Determine the new right index
                newRight = index==0 ? parent.find('li:eq(-1)').index() : index-1;

                $.fn.lazySuzan.update_elements(parent, newMain, newLeft, newRight);

            };

    $.fn.lazySuzan.spin_right = function(el) {

                // Store element data
                var index = $(el).index(),
                    parent = $(el).parent(),
                    data = parent.data(),
                    newMain = index,
                    newLeft, newRight;

                // Get the new left index
                newLeft = index==data.max_index ? 0 : index+1;

                // Determine the new right index
                newRight = index==0 ? parent.find('li:eq(-1)').index() : index-1;

                console.log('------------------------------------------------');
                console.log('New Left: '+newLeft);
                console.log('New Right: '+newRight);

                $.fn.lazySuzan.update_elements(parent, newMain, newLeft, newRight);

            };

    $.fn.lazySuzan.update_elements = function(parent, main, left, right) {
                parent
                    .find('li')
                        .unbind()
                        .removeClass()
                        .addClass('off')
                        .eq(right)
                            .removeClass('off')
                            .addClass('pos1')
                            .bind('click', function(event){

                                    // Stop the link from firing
                                    event.preventDefault();

                                    $.fn.lazySuzan.spin_right(this);

                                })
                            .end()
                        .eq(main)
                            .removeClass('off')
                            .addClass('pos2')
                            .end()
                        .eq(left)
                            .removeClass('off')
                            .addClass('pos3')
                            .bind('click', function(event){

                                    // Stop the link from firing
                                    event.preventDefault();

                                    $.fn.lazySuzan.spin_left(this);

                                });
            };

    $.fn.lazySuzan.defaults = {

            };

})(jQuery)

-->