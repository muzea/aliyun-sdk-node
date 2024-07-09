export interface ListFirewallRulesResponse {
    /**
     * 防火墙规则的总条数。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 防火墙规则列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 由防火墙规则信息组成的数组。
     */
    FirewallRules: {
        /**
         * 防火墙规则的备注。
         * @example `test-MySQL服务器默认端口`
         */
        Remark: string;
        /**
         * 端口范围。
         * @example `3306`
         */
        Port: string;
        /**
         * 防火墙规则ID。
         * @example `eeea34d9867b4d55a4ff8d5fcfbd****`
         */
        RuleId: string;
        /**
         * 传输层协议。可能值：
         * - TCP：TCP协议。
         * - UDP：UDP协议。
         * - TCP+UDP：TCP和UDP协议。
         * @example `TCP`
         */
        RuleProtocol: string;
        /**
         * 防火墙策略。
         * - accept：允许。
         * - drop：拒绝。
         * @example `accept`
         */
        Policy: string;
        /**
         * 防火墙规则的标签列表。
         */
        Tags: {
            /**
             * 防火墙规则的标签键。
             * @example `TestKey`
             */
            Key: string;
            /**
             * 防火墙规则的标签值。
             * @example `TestValue`
             */
            Value: string;
        }[];
        /**
         * 源IP段。
         * @example `0.0.0.0/0`
         */
        SourceCidrIp: string;
    }[];
}
