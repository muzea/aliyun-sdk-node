export interface TranslateGeneralResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `86D18195-D89C-4C8C-9DC4-5FCE789CE6D5`
     */
    RequestId: string;
    /**
     * 翻译结果
     */
    Data: {
        /**
         * 翻译后的结果
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
