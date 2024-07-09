export interface ScanDocumentRequest {
    /**
     * Body参数。
     */
    "body"?: {
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
    };
}
