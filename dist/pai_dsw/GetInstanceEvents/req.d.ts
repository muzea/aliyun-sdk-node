export interface GetInstanceEventsRequest {
    /**
     * 实例ID。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 获取事件的最大数目，默认值：2000。
     * @example `2000`
     */
    "MaxEventsNum"?: number;
    /**
     * 查询的起始时间。
     * @example `2020-11-08T15:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询的结束时间。
     * @example `2020-11-08T15:00:00Z`
     */
    "EndTime"?: string;
}
