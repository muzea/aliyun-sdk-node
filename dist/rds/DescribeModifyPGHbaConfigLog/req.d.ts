export interface DescribeModifyPGHbaConfigLogRequest {
    /**
     * 预留参数，无需配置。
     * @example `1`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp1lymyn1v3i****`
     */
    "DBInstanceId": string;
    /**
     * 查询开始时间。格式：yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2021-11-25T05:00:40Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间。格式：yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2021-11-25T06:00:40Z`
     */
    "EndTime"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
