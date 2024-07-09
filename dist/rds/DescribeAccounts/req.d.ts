export interface DescribeAccountsRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * >暂不支持SQL Server 2017集群系列实例。
     * @example `rm-bp1v6z81ho9******`
     */
    "DBInstanceId": string;
    /**
     * 数据库账号名称。
     * @example `zhttest`
     */
    "AccountName"?: string;
    /**
     * 每页记录数，取值：**30~200**。默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码。默认值：**1**。取值为大于0且不超过Integer的最大值。
     * @example `1`
     */
    "PageNumber"?: number;
}
