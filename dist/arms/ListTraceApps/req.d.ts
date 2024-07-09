export interface ListTraceAppsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID，您可以通过**资源管理**控制台获取。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签的键（key）。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签的值（value）。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 地域。
     * @example `cn-shenzhen`
     */
    "Region"?: string;
    /**
     * 报警规则关联应用的类型：
     * - `TRACE`：应用监控。
     * - `EBPF`：eBPF监控。
     * @example `TRACE`
     */
    "AppType"?: string;
}
