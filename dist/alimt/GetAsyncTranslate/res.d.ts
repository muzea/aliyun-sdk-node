export interface GetAsyncTranslateResponse {
    /**
     * 请求的唯一id，用于后续排查问题使用
     * @example `DC2DCCC9-C3DF-4F59-8D8E-78185729F16D`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `ok`
     */
    Message: string;
    /**
     * 数据内容
     */
    Data: {
        /**
         * 任务状态
         * @example `ready`
         */
        Status: string;
        /**
         * 翻译内容
         * @example `hello`
         */
        TranslatedText: string;
        /**
         * 原文的字符数
         * @example `2`
         */
        WordCount: string;
        /**
         * 源语言传入auto时，语种识别后的源语言代码
         * @example `zh`
         */
        DetectedLanguage: string;
    };
}
