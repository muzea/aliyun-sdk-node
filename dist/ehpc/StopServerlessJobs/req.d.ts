export interface StopServerlessJobsRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * Serverless作业ID或子任务ID（数组作业）列表。
     * > - 当传入数组作业的作业ID时，会停止该数组作业下的所有子任务。
     * > - 当传入数组作业下的子任务ID时，仅停止该子任务。
     */
    "JobIds": string[];
}
