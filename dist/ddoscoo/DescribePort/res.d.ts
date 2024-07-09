export interface DescribePortResponse {
    /**
     * 返回的端口转发规则的数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `39499F01-19D9-4EA4-A0E9-C6014BA5CDBE`
     */
    RequestId: string;
    /**
     * 端口转发规则配置列表。
     */
    NetworkRules: {
        /**
         * 转发端口。
         * @example `55`
         */
        FrontendPort: number;
        /**
         * 该规则是否由DDoS高防自动生成。取值：
         * - **true**：表示由DDoS高防自动生成。
         * - **false**：表示由您手动创建。
         * @example `false`
         */
        IsAutoCreate: boolean;
        /**
         * 转发规则所属的DDoS高防实例的ID。
         * @example `ddoscoo-cn-7e225i41****`
         */
        InstanceId: string;
        /**
         * 转发协议类型。取值：
         * - **tcp**：表示TCP协议。
         * - **udp**：表示UDP协议。
         * @example `tcp`
         */
        FrontendProtocol: string;
        /**
         * 源站端口。
         * @example `55`
         */
        BackendPort: number;
        /**
         * 源站IP地址列表。
         */
        RealServers: string[];
    }[];
}
