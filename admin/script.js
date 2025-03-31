document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handling
    const loginForm = document.getElementById('loginForm');
    const adminDashboard = document.getElementById('adminDashboard');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple authentication (in real app, use secure authentication)
            if (username === 'admin' && password === 'admin6007') {
                loginForm.style.display = 'none';
                adminDashboard.style.display = 'flex';
            } else {
                alert('Invalid username or password');
            }
        });
    }
    
    // Logout Button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            adminDashboard.style.display = 'none';
            loginForm.style.display = 'block';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        });
    }
    
    // Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).style.display = 'block';
        });
    });
    
    // Image Upload Preview
    const heroImageInput = document.getElementById('heroImage');
    if (heroImageInput) {
        heroImageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const preview = document.getElementById('heroPreview');
                    preview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
                    
                    // Show crop tools (simplified for this example)
                    document.querySelector('.crop-tools').style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Event Management - Add New Event
    const addEventBtn = document.querySelector('.add-event-btn');
    if (addEventBtn) {
        addEventBtn.addEventListener('click', function() {
            alert('In a complete implementation, this would open a form to add a new event');
        });
    }
    
    // Gallery Management - Add New Images
    const addImageBtn = document.querySelector('.add-image-btn');
    const imageUploadModal = document.querySelector('.image-upload-modal');
    const cancelUploadBtn = document.querySelector('.cancel-upload');
    
    if (addImageBtn && imageUploadModal) {
        addImageBtn.addEventListener('click', function() {
            imageUploadModal.style.display = 'flex';
        });
        
        cancelUploadBtn.addEventListener('click', function() {
            imageUploadModal.style.display = 'none';
        });
    }
    
    // Gallery Image Upload Preview
    const galleryUpload = document.getElementById('galleryUpload');
    if (galleryUpload) {
        galleryUpload.addEventListener('change', function(e) {
            const files = e.target.files;
            const previewContainer = document.querySelector('.upload-preview');
            previewContainer.innerHTML = '';
            
            if (files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const previewItem = document.createElement('div');
                        previewItem.className = 'preview-item';
                        previewItem.innerHTML = `
                            <img src="${event.target.result}" alt="Preview">
                            <button class="remove-btn">&times;</button>
                        `;
                        previewContainer.appendChild(previewItem);
                        
                        // Add remove button functionality
                        previewItem.querySelector('.remove-btn').addEventListener('click', function() {
                            previewItem.remove();
                        });
                    }
                    reader.readAsDataURL(files[i]);
                }
            }
        });
    }
    
    // Confirm Upload Button
    const confirmUploadBtn = document.querySelector('.confirm-upload');
    if (confirmUploadBtn) {
        confirmUploadBtn.addEventListener('click', function() {
            alert('In a complete implementation, this would upload the selected images to the server');
            imageUploadModal.style.display = 'none';
        });
    }
    
    // Edit and Delete buttons in tables
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Edit functionality would be implemented here');
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this item?')) {
                this.closest('tr').remove();
            }
        });
    });
});
