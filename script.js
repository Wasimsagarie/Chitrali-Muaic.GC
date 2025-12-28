// Function to Play Video in Modal
function playVideo(videoId) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubeFrame');
    
    // Set the YouTube Embed URL with Autoplay
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    
    // Show the modal
    modal.style.display = 'flex';
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

// Function to Close Player
function closePlayer() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubeFrame');
    
    // Stop the video by clearing the src
    iframe.src = "";
    
    // Hide the modal
    modal.style.display = 'none';
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}

// Close modal if user clicks outside the video box
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closePlayer();
    }
}