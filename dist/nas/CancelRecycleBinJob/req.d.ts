export interface CancelRecycleBinJobRequest {
    /**
     * 待取消任务ID。
     * 您可以通过调用[ListRecycleBinJobs](~~2412172~~)接口查询JobId信息。
     * @example `rb-15****ed-r-1625****2441`
     */
    "JobId": string;
}
