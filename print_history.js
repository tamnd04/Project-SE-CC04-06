$(document).ready(function() {
    $('#example').DataTable({
        paging: true,  // Enable pagination
        searching: true,  // Enable search
        ordering: true,  // Enable column sorting
        responsive: true,  // Enable responsive behavior
        lengthChange: false,  // Disable the "entries per page" dropdown
        language: {
            info: "",       // This removes the "Showing x to y of z entries" text
            search: "Tìm kiếm"  
        }
    });
});
