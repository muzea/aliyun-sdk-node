export interface FuzzyMatchDomainSensitiveWordResponse {
    /**
     * 域名是否包含敏感词。取值：
     * - **true**：含敏感词。
     * - **false**：不含敏感词。
     * @example `true`
     */
    Exist: boolean;
    /**
     * 请求ID。
     * @example `D15F91FD-0B34-4E48-8CBF-EFA5D2A31586`
     */
    RequestId: string;
    /**
     * 传入的域名关键字。
     * @example `xxx**`
     */
    Keyword: string;
    MatchedSentiveWords: {
        /**
         * 匹配到域名中包含敏感词的结果详情。当**Exist**参数的取值为**false**时，匹配结果为空。
         */
        MatchedSensitiveWord: {
            /**
             * 匹配到域名中包含的敏感词。
             * @example `xxx`
             */
            Word: string;
        }[];
    };
}
