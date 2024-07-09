export interface DescribeInstancesRequest {
    /**
     * 当前页数。
     * @example `2`
     */
    "PageIndex"?: number;
    /**
     * 分页查询时设置的每页行数，最大值为100行。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 订单实例ID。
     * @example `f-cn-wwo36qj4g06`
     */
    "InstanceId"?: string;
    /**
     * 地域ID。
     * @example `cn-shenzhen`
     */
    "Region": string;
    /**
     * 付款类型
     * @example `PRE`
     */
    "ChargeType"?: string;
    /**
     * 实例的标签集合。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `test`
         */
        Key: string;
        /**
         * 标签的值。
         * 长度限制为 64 Unicode 字符。
         * @example `ys`
         */
        Value: string;
    }[];
    "ResourceGroupId"?: string;
    "ArchitectureType"?: string;
}
