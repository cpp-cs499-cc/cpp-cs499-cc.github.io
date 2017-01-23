(function () {
    'use strict';

    angular
        .module('app')
        .constant('ENDPOINT_NAMES', {
            GENERIC_UPLOAD: "uploadFile",
            DOCUMENT_UPLOAD: "documentUpload",
            PICTURE_UPLOAD: "pictureUpload",
            ALL_DOCUMENTS: "allFiles",
            TRASH_FILES: "trashFiles",
            THUMBNAIL: 'thumbnail'
        })
    ;
})();
