export interface IdDetectOcrCompareFacesRequest {
    /**
     * Body参数。
     */
    "body"?: {
        /**
         * 是否执行证件类型检测及防伪识别，默认为false。
         * @example `false`
         */
        cardDetect: boolean;
        /**
         * 卡证的国家/地区缩写，遵循Alpha-3 code(ISO 3166)规则。
         * @example `JPN`
         */
        countryCode: string;
        /**
         * 卡证类型。
         * @example `IDENTITY_CARD`
         */
        documentType: string;
        /**
         * 是否执行人证比对，默认为false。
         * @example `false`
         */
        faceCompare: boolean;
        /**
         * 用来指明传入的imageDataA/imageUrlA图片类型，是正常的图片还是pdf，默认为pic。
         * @example `pic`
         */
        imageAType: string;
        /**
         * 用来指明传入的imageDataB/imageUrlB图片类型，是正常的图片还是pdf，默认为pic。
         * @example `pic`
         */
        imageBType: string;
        /**
         * 图片数据(base64)，卡证正面照片，
         * 与imageUrlA之间必须上传一个参数。
         * @example `/9j/4AAQSkZJRgABAQEAXgBeAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
        HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL******`
         */
        imageDataA: string;
        /**
         * 图片数据(base64)，卡证背面照片。
         * @example `/9j/4AAQSkZJRgABAQEAXgBeAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
        HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL******`
         */
        imageDataB: string;
        /**
         * 图片网址链接，卡证正面照片，
         * 与imageDataA之间必须上传一个参数。
         * @example `https://your_test_image.jpg`
         */
        imageUrlA: string;
        /**
         * 图片网址链接，卡证背面照片。
         * @example `https://your_test_image.jpg`
         */
        imageUrlB: string;
        /**
         * 是否执行卡证OCR，默认为false。
         * @example `false`
         */
        OCR: boolean;
        /**
         * 图片数据(base64)，人脸自拍照片；
         * faceCompare=true时，与portraitImageUrl之间必须上传一个参数。
         * @example `/9j/4AAQSkZJRgABAQEAXgBeAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
        HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL******`
         */
        portraitImageData: string;
        /**
         * 图片网址链接，人脸自拍照片；
         * faceCompare=true时，与portraitImageData之间必须上传一个参数。
         * @example `https://your_test_image.jpg`
         */
        portraitImageUrl: string;
        /**
         * 图片质量控制，可选参数，默认为NONE；
         * 若图片质量不满足要求，则返回结果中会提示质量检测失败。
         * @example `NONE`
         */
        qualityControl: string;
        /**
         * 是否对portraitImage和证件图片进行人脸去重，避免用户的重复注册，默认为false。
         * @example `false`
         */
        Unrepeat: boolean;
    };
}
