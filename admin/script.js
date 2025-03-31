// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    const loginContainer = document.getElementById('loginContainer');
    const adminContainer = document.getElementById('adminContainer');
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple authentication (in a real app, this would be server-side)
            if (username === 'admin' && password === 'admin6007') {
                loginContainer.style.display = 'none';
                adminContainer.style.display = 'flex';
                
                // Store login state (in a real app, use proper session management)
                sessionStorage.setItem('adminLoggedIn', 'true');
            } else {
                alert('Invalid username or password');
            }
        });
    }
    
    // Check if already logged in
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        loginContainer.style.display = 'none';
        adminContainer.style.display = 'flex';
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sessionStorage.removeItem('adminLoggedIn');
            window.location.reload();
        });
    }
    
    // Mobile menu toggle for admin panel
    const adminHamburger = document.getElementById('adminHamburger');
    const sidebar = document.querySelector('.sidebar');
    
    if (adminHamburger) {
        adminHamburger.addEventListener('click', function() {
            adminHamburger.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
    }
    
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}Tab`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Image upload preview (simplified - in a real app, you'd have proper upload handling)
    const bgUpload = document.getElementById('bgUpload');
    if (bgUpload) {
        bgUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const preview = document.querySelector('.image-preview img');
                    if (preview) {
                        preview.src = event.target.result;
                        
                        // Show crop tool (simplified)
                        const cropTool = document.querySelector('.image-crop-tool');
                        if (cropTool) {
                            cropTool.style.display = 'block';
                            // In a real app, you'd initialize a crop tool here
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Content editor save button
    const saveBtn = document.querySelector('.btn-save');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            // In a real app, this would save to a database
            alert('Changes saved successfully!');
        });
    }
    
    // Page editor functionality
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, this would open an editor for the specific page
            alert('Opening editor for this page');
        });
    });
    
    // Preview buttons
    const previewButtons = document.querySelectorAll('.btn-preview');
    previewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, this would open a preview window
            alert('Opening preview for this page');
        });
    });
});
