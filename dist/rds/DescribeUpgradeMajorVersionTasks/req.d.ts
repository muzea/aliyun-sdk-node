export interface DescribeUpgradeMajorVersionTasksRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp1gm3yh0ht1****`
     */
    "DBInstanceId": string;
    /**
     * 每页记录数。
     * 取值：**30**~**100**。
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * 取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 升级后的大版本号。取值：
     * * **10.0**
     * * **11.0**
     * * **12.0**
     * * **13.0**
     * * **14.0**
     * * **15.0**
     * @example `12.0`
     */
    "TargetMajorVersion"?: string;
    /**
     * 预留参数，无需配置。
     * @example `417450000`
     */
    "TaskId"?: number;
}
