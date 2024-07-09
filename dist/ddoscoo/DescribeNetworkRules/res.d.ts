export interface DescribeNetworkRulesResponse {
    /**
     * 端口转发规则总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8597F235-FA5E-4FC7-BAD9-E4C0B01BC771`
     */
    RequestId: string;
    /**
     * 端口转发规则信息。
     */
    NetworkRules: {
        /**
         * 转发端口。
         * @example `80`
         */
        FrontendPort: number;
        /**
         * 是否自动创建。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        IsAutoCreate: boolean;
        /**
         * DDoS高防实例ID。
         * @example `ddoscoo-cn-mp91j1ao****`
         */
        InstanceId: string;
        /**
         * 转发协议。取值：
         * - **tcp**
         * - **udp**
         * @example `tcp`
         */
        Protocol: string;
        /**
         * 源站端口。
         * @example `80`
         */
        BackendPort: number;
        /**
         * 源站IP地址列表。
         */
        RealServers: string[];
        /**
         * 端口转发规则的备注信息。
         * @example `测试`
         */
        Remark: string;
    }[];
}
