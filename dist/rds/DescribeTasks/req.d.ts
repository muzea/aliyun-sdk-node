export interface DescribeTasksRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 查询开始时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2020-11-20T01:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，必须晚于查询开始时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2020-11-20T02:00Z`
     */
    "EndTime"?: string;
    /**
     * 每页可展示的记录数，取值： **30~100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 任务状态。参数无效。
     * @example `2`
     */
    "Status"?: string;
    /**
     * 任务所使用的的API接口。
     * @example `CreateInstance`
     */
    "TaskAction"?: string;
}
