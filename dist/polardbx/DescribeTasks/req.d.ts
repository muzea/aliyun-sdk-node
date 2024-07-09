export interface DescribeTasksRequest {
    /**
     * 实例名称。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceId": string;
    /**
     * 任务开始时间。
     * @example `2021-11-01`
     */
    "StartTime": string;
    /**
     * 任务结束时间。
     * @example `2021-11-04`
     */
    "EndTime": string;
    /**
     * 分页每页大小，取值范围为：5~1000。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页页数。
     * @example `30`
     */
    "PageNumber"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
