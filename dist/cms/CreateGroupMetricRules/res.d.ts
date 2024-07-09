export interface CreateGroupMetricRulesResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 报错信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `461CF2CD-2FC3-4B26-8645-7BD27E7D0F1D`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Resources: {
        /**
         * 报警规则列表。
         */
        AlertResult: {
            /**
             * 新创建报警规则的状态码。
             * >200表示成功。
             * @example `200`
             */
            Code: number;
            /**
             * 新创建报警规则的错误信息。
             * @example `Metric not found.`
             */
            Message: string;
            /**
             * 新创建报警规则是否成功。取值：
             * - true：成功。
             * - false：失败。
             * @example `true`
             */
            Success: boolean;
            /**
             * 新创建报警规则的名称。
             * @example `ECS_Rule1`
             */
            RuleName: string;
            /**
             * 新创建报警规则的ID。
             * @example `456789`
             */
            RuleId: string;
        }[];
    };
}
