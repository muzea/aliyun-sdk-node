export interface ApplyMetricRuleTemplateResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3F897F3C-020A-4993-95B4-63ABB84F83E6`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 报警规则影响的资源。
     */
    Resource: {
        /**
         * 应用分组ID。
         * @example `123456`
         */
        GroupId: number;
        /**
         * 生成报警规则的详细结果。
         */
        AlertResults: {
            /**
             * 状态码。
             * >200表示成功。
             * @example `200`
             */
            Code: string;
            /**
             * 返回信息。
             * @example `alert rule is creating, please wait a few minutes.`
             */
            Message: string;
            /**
             * 操作是否成功。取值：
             * - true：成功。
             * - false：失败。
             * @example `true`
             */
            Success: boolean;
            /**
             * 报警规则名称。
             * @example `test123`
             */
            RuleName: string;
            /**
             * 报警规则ID。
             * @example `applyTemplate8ab74c6b-9f27-47ab-8841-de01dc08****`
             */
            RuleId: string;
        }[];
    };
}
