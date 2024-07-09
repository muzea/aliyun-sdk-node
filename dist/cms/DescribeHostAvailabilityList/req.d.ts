export interface DescribeHostAvailabilityListRequest {
    /**
     * 单个可用性监控任务ID。
     * @example `123456`
     */
    "Id"?: number;
    /**
     * 多个可用性监控任务ID。多个可用性监控任务ID之间用半角逗号（,）分隔。
     * @example `123456,345678`
     */
    "Ids"?: string;
    /**
     * 可用性监控任务名称。
     * @example `ecs_instance`
     */
    "TaskName"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 应用分组ID。
     * @example `12345`
     */
    "GroupId"?: number;
}
