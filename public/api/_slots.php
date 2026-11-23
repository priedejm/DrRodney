<?php
/**
 * Upload allow-list: the ONLY folders the admin may write to under /uploads.
 *
 * !! KEEP IN SYNC with MEDIA_SLOTS in src/content/media.ts.
 *
 *   single - one image; an upload replaces the previous upload
 *   video  - one mp4/webm video; an upload replaces the previous upload
 *   list   - a gallery of images (add / delete / hide originals / reorder)
 *   pool   - images referenced from text records (About page story photos)
 */
defined('CMS_OK') || exit;

return [
    'home-hero-video' => 'video',
    'home-podcast-photo' => 'single',
    'home-speaker-photo' => 'single',
    'about-hero-photo' => 'single',
    'podcast-hero-photo' => 'single',
    'speaking-hero-video' => 'video',
    'speaking-booking-photo' => 'single',
    'content' => 'pool',
];
