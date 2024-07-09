export interface BatchFuzzyMatchDomainSensitiveWordResponse {
    /**
     * 请求ID。
     * @example `C560A803-B975-481D-A66B-A4395EA863A1`
     */
    RequestId: string;
    SensitiveWordMatchResultList: {
        /**
         * 批量匹配结果列表。
         */
        SensitiveWordMatchResult: {
            /**
             * 传入的域名关键字。
             * @example `example.com,aliyundoc.com`
             */
            Keyword: string;
            /**
             * 域名是否包含敏感词。取值：
             * - **true**：含敏感词。
             * - **false**：不含敏感词。
             * @example `true`
             */
            Exist: boolean;
            MatchedSentiveWords: {
                /**
                 * 匹配结果详情。当**Exist**参数的取值为**false**时，匹配结果为空。
                 */
                MatchedSensitiveWord: {
                    /**
                     * 匹配到的敏感词。
                     * @example `xxx`
                     */
                    Word: string;
                }[];
            };
        }[];
    };
}
