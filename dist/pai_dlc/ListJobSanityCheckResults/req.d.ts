export interface ListJobSanityCheckResultsRequest {
    /**
     * 任务ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlc-20210114104214-xxxx`
     */
    "JobId": string;
    /**
     * 排列顺序：
     * - desc：降序。
     * - asc：升序。
     * @example `desc`
     */
    "Order"?: string;
}
