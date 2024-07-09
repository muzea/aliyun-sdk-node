export interface DescibeImportsFromDatabaseRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz*******`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp*****`
     */
    "DBInstanceId": string;
    /**
     * 数据库类型。取值：**MySQL**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 迁移任务的ID。
     * @example `123`
     */
    "ImportId"?: number;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2023-06-11T15:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2023-06-11T16:00Z`
     */
    "EndTime": string;
    /**
     * 每页记录数。取值：
     * * **30**
     * * **50**
     * * **100**
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
