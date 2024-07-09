export interface GetInterveneRuleDetailResponse {
    /**
     * 请求唯一标识
     * @example `428DCC0D-3C63-5306-BD1B-124396AB97BE`
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
         * 规则详情结构
         */
        InterveneRuleDetail: {
            /**
             * 规则id
             * @example `100418`
             */
            RuleId: number;
            /**
             * 规则名字
             * @example `规则001`
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
             * 答案信息配置
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
                 * @example `早上好`
                 */
                Message: string;
            }[];
            /**
             * 生效配置
             */
            EffectConfig: {
                /**
                 * 生效类型
                 * @example `0`
                 */
                EffectType: number;
                /**
                 * 开始时间
                 * @example `2023-11-25 14:21:15`
                 */
                StartTime: string;
                /**
                 * 结束时间
                 * @example `2023-11-25 14:21:15`
                 */
                EndTime: string;
            };
        };
    };
}
