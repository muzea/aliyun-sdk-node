export interface CancelUrlUploadJobsResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4D5C-3C3D-D7393642****`
     */
    RequestId: string;
    /**
     * 取消成功的任务列表。
     */
    CanceledJobs: string[];
    /**
     * 不存在的任务列表。
     */
    NonExists: string[];
}
