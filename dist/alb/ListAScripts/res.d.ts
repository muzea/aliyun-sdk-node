export interface ListAScriptsResponse {
    /**
     * 本次请求条件下返回的总数据记录数。
     * > 此参数为可选，默认可不返回。
     * @example `1000`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `2CA81429-F160-593A-8AB5-A2A9617845B9`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 可编程脚本信息列表。
     */
    AScripts: {
        /**
         * 可编程脚本ID。
         * @example `as-aznwocxofkakf7****`
         */
        AScriptId: string;
        /**
         * 可编程脚本名称。
         * @example `test`
         */
        AScriptName: string;
        /**
         * 可编程脚本是否启用。取值：
         * - **true**：启用。
         * - **false**：不启用。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 可编程脚本内容。
         * @example `{test}`
         */
        ScriptContent: string;
        /**
         * 可编程脚本状态。取值：
         * - **Creating**：表示创建中。
         * - **Available**：表示创建或变配成功。
         * - **Configuring**：表示变配中。
         * - **Deleting**：表示删除中。
         * @example `Available`
         */
        AScriptStatus: string;
        /**
         * 监听ID。
         * @example `lsn-t0w1m9r6suiwmc****`
         */
        ListenerId: string;
        /**
         * 应用型负载均衡实例的ID。
         * @example `alb-vv9rg2ub31tyec****`
         */
        LoadBalancerId: string;
    }[];
}
