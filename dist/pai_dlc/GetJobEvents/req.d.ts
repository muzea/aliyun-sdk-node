export interface GetJobEventsRequest {
    /**
     * 任务ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlc-20210126170216-*******`
     */
    "JobId": string;
    /**
     * 获取事件的最大数目，默认值：2000。
     * @example `100`
     */
    "MaxEventsNum"?: number;
    /**
     * 查询事件的时间区间的起始时间（UTC），默认值是7天前。
     * @example `2020-11-08T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询事件的时间区间的截止时间（UTC），默认值是当前。
     * @example `2020-11-08T18:00:00Z`
     */
    "EndTime"?: string;
}
