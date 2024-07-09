export interface ListInterveneRulesResponse {
    /**
     * 请求唯一标识
     * @example `DA021073-17CE-5CCF-9FEB-93226C766887`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 数量
         * @example `1`
         */
        Count: number;
        /**
         * 页号
         * @example `1`
         */
        PageIndex: number;
        /**
         * 页尺寸
         * @example `10`
         */
        PageSize: number;
        /**
         * 规则列表
         */
        InterveneRuleList: {
            /**
             * 规则id
             * @example `mr-iuo9pi9w555phfbb`
             */
            RuleId: number;
            /**
             * 规则名字
             * @example `ruletest`
             */
            RuleName: string;
            /**
             * 干预类型
             * @example `0`
             */
            InterveneType: number;
            /**
             * 命名空间列表
             */
            NamespaceList: string[];
            /**
             * 答案配置
             */
            AnswerConfig: {
                /**
                 * 答案类型
                 * @example `0`
                 */
                AnswerType: number;
                /**
                 * 命名空间
                 * @example `namespace_qa_query`
                 */
                Namespace: string;
                /**
                 * 答案内容
                 * @example `抱歉我无法回答`
                 */
                Message: string;
            }[];
            /**
             * 创建时间
             * @example `2023-06-05 15:17:01`
             */
            CreateTime: string;
            /**
             * 生效时间
             * @example `2023-04-03 02:42:01`
             */
            EffectTime: string;
        }[];
    };
}
