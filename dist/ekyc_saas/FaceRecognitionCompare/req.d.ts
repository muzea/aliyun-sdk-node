export interface FaceRecognitionCompareRequest {
    /**
     * Body参数。
     */
    "body"?: {
        /**
         * 图片数据(base64)，卡证正面照片，
         * 与idCardImageUrl之间必须上传一个参数。
         * @example `/9j/4AAQSkZJRgABAQEAXgBeAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
        HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL******`
         */
        idCardImageData: string;
        /**
         * 用来指明传入的idCardImageData/idCardImageUrl图片类型，是正常的图片还是pdf，默认为pic。
         * @example `pic`
         */
        idCardImageType: string;
        /**
         * 图片网址链接，卡证正面照片，
         * 与idCardImageData之间必须上传一个参数。
         * @example `https://your_test_image.jpg`
         */
        idCardImageUrl: string;
        /**
         * 图片数据(base64)，人脸自拍照片，
         * 与portraitImageUrl之间必须上传一个参数。
         * @example `/9j/4AAQSkZJRgABAQEAXgBeAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
        HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL******`
         */
        portraitImageData: string;
        /**
         * 用来指明传入的portraitImageData/portraitImageUrl图片类型，是正常的图片还是pdf，默认为pic。
         * @example `pic`
         */
        portraitImageType: string;
        /**
         * 图片网址链接，人脸自拍照片，
         * 与portraitImageData之间必须上传一个参数。
         * @example `https://your_test_image.jpg`
         */
        portraitImageUrl: string;
        /**
         * 图片质量控制，可选参数，默认为NONE；
         * 若图片质量不满足要求，则返回结果中会提示质量检测失败。
         * @example `NONE`
         */
        qualityControl: string;
    };
}
