export interface TranslateECommerceResponse {
    /**
     * 状态码，200 表示正常
     * @example `200`
     */
    Code: number;
    /**
     * 请求错误信息，如果正确则空
     * @example `An error occurred while translating.`
     */
    Message: string;
    /**
     * 请求唯一串，方便后期排查定位问题
     * @example `CC93BB5C-EAB5-579B-AA44-F61528F48FF8`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 翻译结果
         * @example `你好`
         */
        Translated: string;
        /**
         * 原文的字符数
         * @example `10`
         */
        WordCount: string;
        DetectedLanguage: string;
    };
}
