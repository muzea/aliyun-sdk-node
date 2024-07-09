export interface DescribeSQLCollectorPolicyResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * SQL洞察（SQL审计）开启情况，取值：
     * * **Enable**：开启
     * * **Disabled**：关闭
     * @example `Enable`
     */
    SQLCollectorStatus: string;
    /**
     * 预留参数。
     * @example `0`
     */
    StoragePeriod: number;
}
