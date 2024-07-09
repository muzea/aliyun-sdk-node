export interface DescribeInstanceAntiBruteForceRulesRequest {
    /**
     * 访问源的IP地址。
     * @example `115.238.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 指定要查询的服务器UUID列表。
     * > 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     */
    "UuidList"?: string[];
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的资产的数量。默认值为**10000**，表示每页显示10000条资产信息。
     * @example `20`
     */
    "PageSize"?: number;
}
