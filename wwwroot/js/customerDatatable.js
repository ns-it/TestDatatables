$(document).ready(function () {
    $("#customerDatatable").DataTable({
        language: {
            //url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json'
            url: '/lib/datatables/i18n/Arabic.json',
            //"processing": '<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>'


        },
        //responsive: true,
        scrollY: 420,
        //deferRender: true,
        //scroller: true,
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/api/customer",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable": false
        },
            {
                targets: 5,
                render: $.fn.dataTable.render.moment('YYYY-MM-DDTHH:mm:ss', 'YYYY/MM/DD')
            },
           
        ],
        "columns": [
            { "data": "id", "name": "Id", "autoWidth": true },
            { "data": "firstName", "name": "FirstName", "autoWidth": true },
            { "data": "lastName", "name": "LastName", "autoWidth": true },
            { "data": "contact", "name": "Contact", "autoWidth": true },
            { "data": "email", "name": "Email", "autoWidth": true },
            { "data": "dateOfBirth", "name": "DateOfBirth", "autoWidth": true , 'type':'date' },
            {
                data: null,
                "render": function (data, row) {
                    return "<a href='#' class='btn btn-danger btn-sm' onclick=DeleteCustomer('" + row.id + "'); >Delete</a>";
                },
                 "orderable": false
            },
        ]
    });
});  