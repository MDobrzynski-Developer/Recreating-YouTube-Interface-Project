
// Import necessary data modules
import { videoList } from '../../data/video-list.js';
import { shortsList } from '../../data/shorts-list.js';

// Select video and shorts containers
const videoContainers = document.querySelectorAll('.videos-container');
const shortsContainer = document.querySelector('.shorts-container');

// Function to create a verified artist badge
const createBadge = (badgeImage, tooltip) => `
    <div class="verified-artist-badge"><img loading="lazy" src="assets/svgs/${badgeImage}" alt="${tooltip} Icon"><div class="tooltip">${tooltip}</div></div>`;

// Function to create HTML for a video item
const createVideoItemHTML = (video) => {
    // Badge conditions for the video
    const badgeConditions = [
        [video.channel.isVerified, 'bird.svg', 'Zweryfikowano'],
        [video.channel.isMusicChannel, 'tune-gray.svg', 'Oficjalny kanał wykonawcy']
    ];
    
    // Filter and create badges based on conditions
    const badges = badgeConditions
        .filter(([condition]) => condition)
        .map(([_, badgeImage, tooltip]) => createBadge(badgeImage, tooltip))
        .join('');

    // Construct HTML for video item
    return `
        <a class="video-item" href="${video.url}" target="_blank"><div class="video-thumbnail"><img loading="lazy" src="${video.thumbnailUrl}" alt="${video.thumbnailName}"><div class="video-duration">${video.duration}</div></div><div class="video-details"><div class="video-meta"><div class="channel-avatar"><img loading="lazy" src="${video.channel.avatarUrl}" alt="${video.channel.name}" title="${video.channel.name}"></div></div><div class="video-description"><div class="video-title clamp-two-lines" title="${video.title}">${video.title} </div><div class="video-author" title="${video.channel.name}"><div class="author-name">${video.channel.name} <div class="tooltip">${video.channel.name}</div></div>${badges} </div><div class="video-stats">${video.viewStats} </div></div></div></a>
    `;
};

// Function to create HTML for a shorts item
const createShortsItemHTML = (shorts) => `
    <a class="short-item" href="${shorts.url}" target="_blank"><div class="short-thumbnail"><img loading="lazy" src="${shorts.thumbnailUrl}" alt="${shorts.thumbnailName}"></div><div class="short-details"><div class="short-description"><div class="short-title clamp-two-lines" title="${shorts.title}">${shorts.title}</div><div class="short-stats">${shorts.viewStats}</div></div></div></a>
`;

// Function to insert items into a container
const insertItems = (container, itemsHTML, startIndex, endIndex) => {
    itemsHTML.slice(startIndex, endIndex).forEach((itemHTML) => {
        container.insertAdjacentHTML('beforeend', itemHTML);
    });
};

// Generate HTML for video items and shorts items
const videoItemsHTML = videoList.map(createVideoItemHTML);
const shortsItemsHTML = shortsList.map(createShortsItemHTML);

// Insert video items into video containers
insertItems(videoContainers[0], videoItemsHTML, 0, 10);
insertItems(videoContainers[1], videoItemsHTML, 10, 15);

// Insert shorts items into shorts container
shortsItemsHTML.forEach((shortsItemHTML) => {
    shortsContainer.insertAdjacentHTML('beforeend', shortsItemHTML);
});

// Select filter items and shorts section
const filterItems = document.querySelectorAll('.filter-item');
const shortsSection = document.querySelector('.shorts-section');
const initialShortsSectionHTML = shortsSection.innerHTML;

// Add click event listeners to filter items
filterItems.forEach((filterItem) => {
    filterItem.addEventListener('click', () => {
        // Reset active class for filter items
        filterItems.forEach((item) => item.classList.remove('active'));
        filterItem.classList.add('active');
        
        // Get selected category
        const category = filterItem.textContent.trim();
        
        // Clear video containers
        videoContainers.forEach((container) => container.innerHTML = '');
        
        // Filter videos based on category
        const filteredVideos = videoList.filter((video) => video.keywords.includes(category));

        if (category === 'Wszystko') {
            // Show all videos and restore shorts section
            insertItems(videoContainers[0], videoItemsHTML, 0, 10);
            insertItems(videoContainers[1], videoItemsHTML, 10, 15);
            shortsSection.style.display = 'block';
            shortsSection.innerHTML = initialShortsSectionHTML;
        } else {
            // Hide shorts section and display filtered videos
            shortsSection.style.display = 'none';
            filteredVideos.forEach((video) => {
                const videoElement = createVideoItemHTML(video);
                videoContainers[0].insertAdjacentHTML('beforeend', videoElement);
            });
        }
    });
});
