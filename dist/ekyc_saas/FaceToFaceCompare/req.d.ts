export interface FaceToFaceCompareRequest {
    /**
     * Body参数。
     */
    "body"?: {
        /**
         * 图片数据(base64)，第一张人脸自拍照片，
         * 与portraitImageUrl1之间必须上传一个参数。
         * @example `/9j/4AAQSkZJRgABAQEAXgBeAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
        HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL******`
         */
        portraitImageData1: string;
        /**
         * 图片数据(base64)，第二张人脸自拍照片，
         * 与portraitImageUrl2之间必须上传一个参数。
         * @example `/9j/4AAQSkZJRgABAQEAXgBeAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
        HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL******`
         */
        portraitImageData2: string;
        /**
         * 用来指明传入的portraitImageData1/portraitImageUrl1图片类型，是正常的图片还是pdf，默认为pic。
         * @example `pic`
         */
        portraitImageType1: string;
        /**
         * 用来指明传入的portraitImageData2/portraitImageUrl2图片类型，是正常的图片还是pdf，默认为pic。
         * @example `pic`
         */
        portraitImageType2: string;
        /**
         * 图片网址链接，第一张人脸自拍照片，
         * 与portraitImageData1之间必须上传一个参数。
         * @example `https://your_test_image.jpg`
         */
        portraitImageUrl1: string;
        /**
         * 图片网址链接，第二张人脸自拍照片，
         * 与portraitImageData2之间必须上传一个参数。
         * @example `https://your_test_image.jpg`
         */
        portraitImageUrl2: string;
        /**
         * 图片质量控制，可选参数，默认为NONE；
         * 若图片质量不满足要求，则返回结果中会提示质量检测失败。
         * @example `NONE`
         */
        qualityControl: string;
    };
}
