export interface GetJobRequest {
    /**
     * 任务ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlc*******`
     */
    "JobId": string;
    /**
     * 是否返回作业详情信息，默认为true
     * @example `true`
     */
    "NeedDetail"?: boolean;
}
