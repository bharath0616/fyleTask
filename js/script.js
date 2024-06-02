function changeImage(imagePath) {
    document.getElementById('projectImage').src = imagePath;
}

$(document).ready(function() {
    $('.list-group-item').on('click', function(e) {
        e.preventDefault();
        var newImage = $(this).data('image');
        $('#projectImage').attr('src', newImage);
        
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
    });
});
$(document).ready(function() {
    // Floating label effect
    $('.floating-label').on('focus', function() {
        $(this).addClass('active');
    }).on('blur', function() {
        if ($(this).val() === '') {
            $(this).removeClass('active');
        }
    });
});
