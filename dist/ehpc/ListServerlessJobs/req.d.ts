export interface ListServerlessJobsRequest {
    /**
     * 地域ID。
     * 您可以调用[ListRegions](~~188593~~)查询可以使用E-HPC的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 页码。起始值：1，默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示条数。最大值：100，默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * Serverless作业ID或子任务ID（数组作业）列表。
     */
    "JobIds"?: string[];
    /**
     * Serverless作业名列表。
     */
    "JobNames"?: string[];
    /**
     * Serverless作业状态。取值范围：
     * - All：所有状态。
     * - Pending: 排队中。
     * - Running：运行中。
     * - Succeeded：已完成。
     * - Canceled：已取消。
     * - Failed：运行失败。
     * 默认值：All。
     * @example `Running`
     */
    "State"?: string;
    /**
     * 按照Serverless作业启动时间进行排序。取值范围：
     * - Asc：升序。
     * - Desc：降序。
     * @example `Asc`
     */
    "StartOrder"?: string;
    /**
     * 按照Serverless作业提交时间进行排序。取值范围：
     * - Asc：升序。
     * - Desc：降序。
     * @example `Asc`
     */
    "SubmitOrder"?: string;
    /**
     * 最早的作业提交时间戳。
     * > 用于按照Serverless作业的提交时间范围查询作业列表。
     * @example `1647427667`
     */
    "SubmitTimeStart"?: string;
    /**
     * 最晚的作业提交时间戳。
     * > 用于按照Serverless作业的提交时间范围查询作业列表。
     * @example `1659521430`
     */
    "SubmitTimeEnd"?: string;
}
