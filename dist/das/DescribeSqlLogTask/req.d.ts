export interface DescribeSqlLogTaskRequest {
    /**
     * 数据库实例ID。
     * @example `r-bp1nti25tc7bq5****
    `
     */
    "InstanceId"?: string;
    /**
     * 任务ID。
     * @example `a4f5c4494dbd6713185d87a97aa53e8
    `
     */
    "TaskId"?: string;
    /**
     * 分页查询的页码，从1开始，默认为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页查询每页最大记录数，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
}
