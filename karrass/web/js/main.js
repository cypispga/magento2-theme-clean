$(document).ready(function () {

    // for cart

    $("#qty_up").click(function(){
        var qty=$("#qty").val();
        qty++;

        $("#qty").val(qty);
        $('#qty-preview').html('x ' + qty);
    });

    $("#qty_down").click(function(){
        var qty=$("#qty").val();
        if(qty > 1) {
            qty--;

            $("#qty").val(qty);
            $('#qty-preview').html('x ' + qty);
        }
    });

    // for video player
    $("video").on('click', function() {
      if (this.paused) {
        this.play();
      } else {
        this.pause();
      }
    });

    // for testimonials

    if($('.testimonials').length){
      $('.load-more > a').on('click', function(){
        $('.carret').show();
        $('.load-more').hide();

        return false;
      });
    }

    // for logos filter

    if($('.filter').length){

        var filter_active = false;
        function filterLogos(category){

            $('.logo').hide();

            $('.filter li').removeClass('active');
            $('#filter-select').val('');


            if(category == filter_active){
                $('.logo').show();
            } else {
                $(".logo[data-filter='" + category + "']").show();

                $("li[data-filter='" + category + "']").addClass('active');
                $('#filter-select').val(category);

                filter_active = category;
            }

            console.log(filter_active);
        }


        $('#filter-list > li').on('click', function () {
            console.log(this.innerHTML);
            filterLogos(this.innerHTML);
        });
        $('#filter-select').on('change', function () {
            console.log(this.value);
            filterLogos(this.value);
        });
    }

});