export interface RecognizeQrCodeResponse {
    /**
     * 请求ID。
     * @example `A53DC437-F883-4968-86D5-EB21FB044692`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 识别返回的元素信息。
         */
        Elements: {
            /**
             * 对应请求中的图像URL地址。
             * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeQrCode/RecognizeQrCode6.jpg`
             */
            ImageURL: string;
            /**
             * 该检测任务的ID。
             * @example `img5iGtwVIxQzc4Nqy$L84yHd-1v****`
             */
            TaskId: string;
            /**
             * 返回结果。调用成功时返回结果中包含一个或多个元素。
             */
            Results: {
                /**
                 * 建议您执行的操作，取值包括：
                 * - pass：图片正常，无需进行其余操作。
                 * - review：检测结果不确定，需要进行人工审核。
                 * - block：图片违规，建议执行进一步操作（如直接删除或做限制处理）。
                 * @example `review`
                 */
                Suggestion: string;
                /**
                 * 1
                 */
                QrCodesData: string[];
                /**
                 * 检测结果的分类，取值包括：
                 * - normal：正常图片。
                 * - qrcode：含二维码的图片。
                 * - programCode：含小程序码的图片。
                 * > 默认不识别小程序码。如果需要识别，请通过钉钉群（23109592）联系我们。
                 * @example `qrcode`
                 */
                Label: string;
                /**
                 * 结果为该分类的概率，取值范围为`[0.00-100.00]`。值越高，表示属于该分类的概率越大。
                 * @example `99.91`
                 */
                Rate: number;
            }[];
        }[];
    };
}
