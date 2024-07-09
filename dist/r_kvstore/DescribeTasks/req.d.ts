export interface DescribeTasksRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)接口获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 每页可展示的记录数，取值： **30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2020-11-20T01:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2020-11-26T01:00Z`
     */
    "EndTime": string;
    /**
     * 任务状态，传入多个值时使用英文逗号（,）分隔，取值：
     * * **0**：等待中。
     * * **1**：执行中。
     * * **2**：已结束。
     * * **4**：已关闭。
     * * **7**：暂停。
     * * **8**：中断。
     * @example `2`
     */
    "Status": string;
}
