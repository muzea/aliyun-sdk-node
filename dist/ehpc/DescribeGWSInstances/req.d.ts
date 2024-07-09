export interface DescribeGWSInstancesRequest {
    /**
     * 可视化集群ID。
     * @example `gws-rhz99q8rc****`
     */
    "ClusterId"?: string;
    /**
     * 可视化实例ID。
     * @example `i-bp1bzqq1ddeemuddn****`
     */
    "InstanceId"?: string;
    /**
     * 当前页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数。取值范围：1~50
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 列出分配给指定用户ID的所有实例。
     * >如果此参数未指定，则列出所有用户的实例。
     * @example `1234567890`
     */
    "UserUid"?: number;
    /**
     * 列出分配给指定用户名称的所有实例。
     * > 如果此参数未指定，则列出所有用户的实例。
     * @example `testuser`
     */
    "UserName"?: string;
}
