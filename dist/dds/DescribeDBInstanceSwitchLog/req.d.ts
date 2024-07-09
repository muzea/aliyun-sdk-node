export interface DescribeDBInstanceSwitchLogRequest {
    /**
     * 查询开始时间，格式为<i>yyyy-mm-dd</i>T<i>hh:mm</i>Z（UTC时间）。
     * @example `2023-05-27T02:46Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-mm-dd</i>T<i>hh:mm</i>Z（UTC时间）。
     * @example `2023-05-28T02:00Z`
     */
    "EndTime"?: string;
    /**
     * 页码，取值为大于0且不超过integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值：**30、50、100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 实例ID。
     * @example `dds-uf68f1b5a57exxxx`
     */
    "DBInstanceId"?: string;
}
