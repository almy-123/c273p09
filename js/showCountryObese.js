$(document).ready(function () {
    $("#idCountry").change(function () {
        var id = $(this).val();
        $.ajax({
            type: "GET",
            url: "getCountryDetails.php",
            data: "id=" + id,
            cache: false,
            dataType: "JSON",
            success: function (response) {
                console.log("inside success");
                
                var message = "<thead><tr><th>Population</th><th>Obese</th></tr></thead>";
                message += "<tbody>";

                message += "<tr><td>" + response.population + "</td>"
                        + "<td>" + response.obese + "</td></tr>";
                
                message += "</tbody>";
                $("#obeseTable").html(message);

            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    })

});
