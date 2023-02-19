$.ajax({
    url : "http://127.0.0.1:5000/list-files",
    success : function(response) {
        $.each(response, function(key, item) {
            $('#listFiles').append('<iframe src="' + item['embedLink'] + '" frameborder="0"></iframe>')
        });
    }
});