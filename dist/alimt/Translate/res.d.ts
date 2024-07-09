export interface TranslateResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `86D18195-D89C-4C8C-9DC4-5FCE789CE6D5`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 翻译结果
         * @example `Hello`
         */
        Translated: string;
        /**
         * 总单词数
         * @example `10`
         */
        WordCount: string;
        /**
         * 源语言传入auto时，语种识别后的源语言代码
         * @example `zh`
         */
        DetectedLanguage: string;
    };
}
