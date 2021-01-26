$(document).ready(function() {




    $("#filter .sort_posts_filter").change(function() {

        let sort_posts = $(this).attr('data-spec-sort');
        $("#filter #misha_order_by option:selected").val(sort_posts);
    });


    $('.nav-list li:has(ul)').doubleTapToGo();

    $.ionTabs("#why-us", {
        type: "none",
        hash: 'none'
    });

    $('.beefup').beefup({
        openSingle: true,
        // stayOpen: 'last'
    });

    $('.open-popup').magnificPopup({
        // type: 'inline',
        closeBtnInside: false,
        midClick: true,
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }

    });

    $(".menu-item-type-custom a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 20
        }, { duration: 700, easing: "swing" });
        return false;
    });


    //Fixed nav         



    // WP POSTS FILTER -------------------------------------------
    var myFunction = function() {
        var filter = $('#filter');
        $.ajax({
            url: filter.attr('action'),
            data: filter.serialize(),
            type: filter.attr('method'),
            beforeSend: function(xhr) {
                $('#response').css('opacity', '0');
                filter.find('button').text('...').css('display', 'none');
                $('.wrapper').css('display', 'inline-block');
            },
            success: function(data) {
                setTimeout(function() {
                    $('.wrapper').css('display', 'none');
                    filter.find('button').text('Застосувати фільтр').css('display', 'block');
                    $('#response').css('opacity', '1');
                    $('#response').html(data);


                    $("#response .tabs-inner-wrapper").slice(0, 2).show();
                    $('.open-popup').magnificPopup({
                        // type: 'inline',
                        closeBtnInside: false,
                        midClick: true,
                        removalDelay: 500, //delay removal by X to allow out-animation
                        callbacks: {
                            beforeOpen: function() {
                                this.st.mainClass = this.st.el.attr('data-effect');
                            }
                        }

                    });








                }, 300);
            }
        });
        return false;
    }

    // __________


    $(".form-row-1").click(function() {
        $(".group-wrapper-2").addClass('hidden');
    });

    $(".btn-test-1").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-2").addClass('can-see-you');
        $(".form-row-1").addClass('hidden');
    });


    $(".group-wrapper-2").click(function() {
        $(".group-wrapper-3").addClass('hidden');
    });
    $(".btn-test-2").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-3").addClass('can-see-you');
        $(".form-row-2").addClass('hidden');
    });


    $(".group-wrapper-3").click(function() {
        $(".group-wrapper-4").addClass('hidden');
    });
    $(".btn-test-3").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-4").addClass('can-see-you');
        $(".form-row-3").addClass('hidden');
    });

    $(".group-wrapper-4").click(function() {
        $(".group-wrapper-5").addClass('hidden');
    });

    $(".btn-test-4").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-5").addClass('can-see-you');
        $(".form-row-4").addClass('hidden');
    });


    $(".group-wrapper-5").click(function() {
        $(".group-wrapper-6").addClass('hidden');
    });

    $(".btn-test-5").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-6").addClass('can-see-you');
        $(".form-row-5").addClass('hidden');
    });
    $(".group-wrapper-6").click(function() {
        $(".group-wrapper-7").addClass('hidden');
    });

    $(".btn-test-6").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-7").addClass('can-see-you');
        $(".form-row-6").addClass('hidden');
    });


    $(".btn-test-7").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-8").addClass('can-see-you');
        $(".form-row-7").addClass('hidden');
    });





    $(".btn-prev-2").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-2").removeClass('can-see-you');
        $(".form-row-1").removeClass('hidden');
    });

    $(".btn-prev-3").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-3").removeClass('can-see-you');
        $(".form-row-2").removeClass('hidden');
    });

    $(".btn-prev-4").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-4").removeClass('can-see-you');
        $(".form-row-3").removeClass('hidden');
    });

    $(".btn-prev-5").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-5").removeClass('can-see-you');
        $(".form-row-4").removeClass('hidden');
    });


    $(".btn-prev-6").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-6").removeClass('can-see-you');
        $(".form-row-5").removeClass('hidden');
    });

    $(".btn-prev-7").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-7").removeClass('can-see-you');
        $(".form-row-6").removeClass('hidden');
    });

    $(".btn-prev-8").click(function(event) {
        event.preventDefault();
        $(".group-wrapper-8").removeClass('can-see-you');
        $(".form-row-7").removeClass('hidden');
    });
    $(".group-wrapper-1,.group-wrapper-2,.group-wrapper-3,.group-wrapper-4,.group-wrapper-5,.group-wrapper-6,.group-wrapper-7,.group-wrapper-8").addClass('hidden');






});