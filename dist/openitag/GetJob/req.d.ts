export interface GetJobRequest {
    /**
     * 租户id，可以通过ListTenantId租户列表查询的API来查询。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 任务id，可在iTAG的任务中心中获取。
     * @example `147***441221943296`
     */
    "JobId": string;
    /**
     * 任务类型，暂时只开放：DOWNLOWD_MARKRESULT_FLOW。
     * @example `DOWNLOWD_MARKRESULT_FLOW`
     */
    "JobType"?: string;
}
