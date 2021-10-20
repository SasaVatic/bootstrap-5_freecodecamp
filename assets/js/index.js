import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "/node_modules/glightbox/dist/js/glightbox.min.js";

const lightbox = GLightbox({
    'href': 'https://www.youtube.com/embed/J9lS14nM1xg',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
    'autoPlayVideos': true
});