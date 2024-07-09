export interface DescribeInstanceExtRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-i7m25564****`
     */
    "InstanceId"?: string;
    /**
     * 分页查询请求时返回的页码。例如，查询第一页的返回结果，则填写**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时，设置每页包含实例的数量。
     * @example `10`
     */
    "PageSize"?: string;
}
