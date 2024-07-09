export interface ListTasksRequest {
    /**
     * 实例ID
     * @example `ha-cn-ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 日程开始时间。
     * @example `1718846192`
     */
    "start"?: number;
    /**
     * 日程结束时间。
     * @example `1718846192`
     */
    "end"?: number;
}
