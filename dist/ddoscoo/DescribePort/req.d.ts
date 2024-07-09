export interface DescribePortRequest {
    /**
     * 要查询的DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID。
     * @example `ddoscoo-cn-7e225i41****`
     */
    "InstanceId": string;
    /**
     * 要查询的转发协议类型。取值：
     * - **tcp**：表示TCP协议。
     * - **udp**：表示UDP协议。
     * @example `tcp`
     */
    "FrontendProtocol"?: string;
    /**
     * 要查询的转发端口。取值范围：**0**~**65535**。
     * @example `55`
     */
    "FrontendPort"?: number;
    /**
     * 分页查询时返回的页码。例如，查询第一页的返回结果，则设置**1**。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询时每页包含的记录数量。
     * @example `10`
     */
    "PageSize": number;
}
