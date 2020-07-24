const getNumber = () => {
    let number = $("#number").val();
    if (number == '') {
        alert("Enter number");
    } else {
        $("#number").val('');
        let num = number;
        let tableRow = "";
        let _break = 0;
        let num1 = Math.ceil(Math.random() * num * num);
        let num2 = Math.ceil(Math.random() * num * num);
        tableRow += "<tr>"
        for (let i = 1; i <= num * num; i++) {
            _break++;
            tableRow += "<td>";
            if (i == num1) {
                tableRow += "<button type='button' class='active'>" + i + "</button>";
            } else if (i == num2) {
                tableRow += "<button type='button' class='active'>" + i + "</button>";
            }
            else {
                tableRow += "<button type='button' disabled>" + i + "</button>"
            }
            tableRow += "</td>";

            if (_break == num) {
                tableRow += "</tr>"
            }
            if (_break >= num) {
                _break = 0
            }
        }
        $("table").html(tableRow);
        $('table tr td').each(function (i, j) {
            $(this).find(".active").click(function () {
                $('table tr td').find('button').not(".active").attr("disabled", false).addClass("activee")
            })
        })
    }
}