export interface GetImageTranslateTaskResponse {
    /**
     * 状态码，200 表示正常
     * @example `200`
     */
    Code: number;
    /**
     * 错误的时候，返回的错误信息
     * @example `ok`
     */
    Message: string;
    /**
     * 请求的唯一串
     * @example `xxxxxxx`
     */
    RequestId: string;
    /**
     * 返回的数据内容
     */
    Data: {
        /**
         * - 图片翻译结构化数据
         * ```
         * [
         *   {
         *     "errorCode": "200",
         *     "sourceUrl": "https://img.alicdn.com/imgextra/i3/2838892713/O1CN01AJHAFq1Vub9eKog8t_!!2838892713.jpg",
         *     "success": true,
         *     "topRequestId": "of8hp0d9ne81",
         *     "url": "https://ae01.alicdn.com/kf/H86dc34f146e1488aa55a0435ebd1775cu.jpeg"
         *   },
         *   {
         *     "errorCode": "200",
         *     "sourceUrl": "https://img.alicdn.com/imgextra/i2/2838892713/O1CN01Ko5Mxu1Vub9Y85K6p_!!2838892713.jpg",
         *     "success": true,
         *     "topRequestId": "of8hp0d9ne81",
         *     "url": "https://ae01.alicdn.com/kf/H1cc74cbdfc554b278dfaa8b2ede33f48D.jpeg"
         *   }
         * ]
         * ```
         * - sourceURL 原始图片地址
         * - URL翻译后的图片地址
         * @example `[{xxxxxx}]`
         */
        ImageData: string;
    };
}
