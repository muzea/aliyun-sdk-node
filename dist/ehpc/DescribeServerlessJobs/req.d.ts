export interface DescribeServerlessJobsRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * Serverless作业ID或子任务ID（数组作业）列表。
     * > - 当Serverless作业为数组作业时，仅支持传入子任务ID。子任务ID格式为：<数组作业ID>\_<子任务索引>。例如：10\_3表示ID为10的数组作业中索引为3的子任务。
     * > - 该列表当前仅支持传入一个元素。
     */
    "JobIds": string[];
}
