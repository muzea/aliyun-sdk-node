export interface ListFunctionTasksRequest {
    /**
     * 应用名称
     * @example `app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `ctr`
     */
    "functionName": string;
    /**
     * 实例名称
     * @example `test_model_2`
     */
    "instanceName": string;
    /**
     * 任务状态：
     * - success
     * - failed
     * - running
     * @example `success`
     */
    "status"?: string;
    /**
     * 起始时间大于设定时间，单位毫秒
     * @example `1582214400`
     */
    "startTime"?: number;
    /**
     * 结束时间小于设定时间，单位毫秒
     * @example `1582646399`
     */
    "endTime"?: number;
    /**
     * 页码（默认为1）
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页大小（默认为1）
     * @example `10`
     */
    "pageSize"?: number;
}
