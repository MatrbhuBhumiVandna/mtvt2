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
    
    // Image Upload Preview with Cropping
    const heroImageInput = document.getElementById('heroImage');
    if (heroImageInput) {
        heroImageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const preview = document.getElementById('heroPreview');
                    preview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
                    
                    // Show crop tools
                    const cropTools = document.querySelector('.crop-tools');
                    cropTools.style.display = 'block';
                    
                    // Initialize cropper (simplified example)
                    const img = preview.querySelector('img');
                    img.onload = function() {
                        // In a real implementation, you would initialize a cropper library here
                        console.log('Image loaded, ready for cropping');
                    };
                    
                    // Crop button functionality
                    document.querySelector('.crop-btn').addEventListener('click', function() {
                        alert('In a complete implementation, this would crop the image');
                        cropTools.style.display = 'none';
                    });
                    
                    // Cancel button functionality
                    document.querySelector('.cancel-btn').addEventListener('click', function() {
                        preview.innerHTML = '';
                        heroImageInput.value = '';
                        cropTools.style.display = 'none';
                    });
                }
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Event Management - Add New Event
    const addEventBtn = document.querySelector('.add-event-btn');
    if (addEventBtn) {
        addEventBtn.addEventListener('click', function() {
            // Create modal for adding new event
            const modal = document.createElement('div');
            modal.className = 'admin-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <h3>Add New Event</h3>
                    <form id="newEventForm">
                        <div class="form-group">
                            <label>Event Name</label>
                            <input type="text" required>
                        </div>
                        <div class="form-group">
                            <label>Event Date</label>
                            <input type="date" required>
                        </div>
                        <div class="form-group">
                            <label>Event Description</label>
                            <textarea required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Event Image</label>
                            <input type="file" accept="image/*">
                        </div>
                        <div class="modal-actions">
                            <button type="button" class="cancel-btn">Cancel</button>
                            <button type="submit" class="save-btn">Save Event</button>
                        </div>
                    </form>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal when clicking cancel
            modal.querySelector('.cancel-btn').addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            // Handle form submission
            modal.querySelector('form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('In a complete implementation, this would save the new event');
                document.body.removeChild(modal);
            });
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
            document.querySelector('.upload-preview').innerHTML = '';
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
            // In a real implementation, this would upload to server
            const previewItems = document.querySelectorAll('.preview-item');
            if (previewItems.length > 0) {
                alert(`${previewItems.length} images would be uploaded to the server`);
                imageUploadModal.style.display = 'none';
                document.querySelector('.upload-preview').innerHTML = '';
            } else {
                alert('Please select images to upload');
            }
        });
    }
    
    // Edit and Delete buttons in tables
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const cells = row.querySelectorAll('td');
            
            // Create modal for editing
            const modal = document.createElement('div');
            modal.className = 'admin-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <h3>Edit Event</h3>
                    <form id="editEventForm">
                        <div class="form-group">
                            <label>Event Name</label>
                            <input type="text" value="${cells[0].textContent}" required>
                        </div>
                        <div class="form-group">
                            <label>Event Date</label>
                            <input type="text" value="${cells[1].textContent}" required>
                        </div>
                        <div class="form-group">
                            <label>Status</label>
                            <select>
                                <option ${cells[2].querySelector('.upcoming') ? 'selected' : ''}>Upcoming</option>
                                <option ${cells[2].querySelector('.completed') ? 'selected' : ''}>Completed</option>
                            </select>
                        </div>
                        <div class="modal-actions">
                            <button type="button" class="cancel-btn">Cancel</button>
                            <button type="submit" class="save-btn">Save Changes</button>
                        </div>
                    </form>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Close modal when clicking cancel
            modal.querySelector('.cancel-btn').addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            // Handle form submission
            modal.querySelector('form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('In a complete implementation, this would save the changes');
                document.body.removeChild(modal);
            });
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this item?')) {
                this.closest('tr').remove();
            }
        });
    });
    
    // Content Save Functionality
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Content changes would be saved to the database');
            // In a real implementation, this would send data to server
        });
    });
});
