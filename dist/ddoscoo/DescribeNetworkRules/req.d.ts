export interface DescribeNetworkRulesRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 转发协议。取值：
     * - **tcp**
     * - **udp**
     * @example `tcp`
     */
    "ForwardProtocol"?: string;
    /**
     * 转发端口。
     * @example `80`
     */
    "FrontendPort"?: number;
    /**
     * 分页查询请求时返回的页码。例如，查询第一页的返回结果，则填写**1**。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 页面显示的记录数量。
     * @example `10`
     */
    "PageSize": number;
}
