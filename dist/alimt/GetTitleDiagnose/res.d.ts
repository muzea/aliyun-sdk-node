export interface GetTitleDiagnoseResponse {
    /**
     * 状态码，正常请求返回200
     * @example `200`
     */
    Code: number;
    /**
     * 状态信息
     * @example `ok`
     */
    Message: string;
    /**
     * 请求ID
     * @example `DC2DCCC9-C3DF-4F59-8D8E-78185729F16D`
     */
    RequestId: string;
    /**
     * 返回具体内容
     */
    Data: {
        /**
         * 重复单词（包括单复数）
         * @example `hi`
         */
        DuplicateWords: string;
        /**
         * 是否包含类目主词
         * @example `true`
         */
        ContainCoreClasses: string;
        /**
         * 总单词数
         * @example `10`
         */
        WordCount: string;
        /**
         * 语言质量分
         * @example `2`
         */
        LanguageQualityScore: string;
        /**
         * 全部大写的单词
         * @example `Boy`
         */
        AllUppercaseWords: string;
        /**
         * 长度限制
         * @example `100`
         */
        OverLengthLimit: string;
        /**
         * 敏感词
         * @example `baba`
         */
        DisableWords: string;
        /**
         * 首字母未大写单词
         * @example `no`
         */
        NoFirstUppercaseList: string;
        /**
         * 总分数
         * @example `3`
         */
        TotalScore: string;
        /**
         * 拼写错误单词
         * @example `ahk`
         */
        WordSpelledCorrectError: string;
    };
}
