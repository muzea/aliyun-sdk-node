export interface DescribeBinlogFilesRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 查询开始时间。
     * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）
     * @example `2011-06-01T15:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，大于查询开始时间。
     * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）
     * @example `2011-06-20T15:00:00Z`
     */
    "EndTime": string;
    /**
     * 每页记录数。
     * 取值：**30**~**100**
     * 默认值：**30**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**
     * @example `1`
     */
    "PageNumber"?: number;
}
