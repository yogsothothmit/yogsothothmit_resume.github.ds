// loading_script.js
document.addEventListener('DOMContentLoaded', function() {
    var loader = document.querySelector('.loading-container');
    var content = document.getElementById('content');
    
    if (loader && content) {
        window.addEventListener('load', function() {
            loader.style.display = 'none';
            content.style.display = 'block';
        });
    } else {
        console.error("Loader or content element not found");
    }
});
