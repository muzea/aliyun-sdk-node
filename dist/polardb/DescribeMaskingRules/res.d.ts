export interface DescribeMaskingRulesResponse {
    /**
     * 请求ID。
     * @example `2F83D131-1C18-4599-889D-729A9D******`
     */
    RequestId: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求结果。取值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果集。
     */
    Data: {
        /**
         * 脱敏规则详情。
         */
        RuleList: string[];
        /**
         * 脱敏规则版本, 取值v1、v2, 默认值 v1
         * @example `v1`
         */
        RuleVersion: string;
    };
    /**
     * 集群ID。
     * @example `pc-bp1s826a1up******`
     */
    DBClusterId: string;
}
