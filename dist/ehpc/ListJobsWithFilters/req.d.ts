export interface ListJobsWithFiltersRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 当前页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 执行作业的用户列表信息。
     */
    "Users"?: string[];
    /**
     * 执行作业的队列列表信息。
     */
    "Queues"?: string[];
    /**
     * 执行作业的计算节点列表信息。
     */
    "Nodes"?: string[];
    /**
     * 作业名称。支持模糊查询。
     * @example `job1`
     */
    "JobName"?: string;
    /**
     * 作业状态。取值范围：
     * - all：所有状态。
     * - finished：已完成。
     * - notfinish：未完成。
     * 默认值：all。
     * @example `finished`
     */
    "JobStatus"?: string;
    /**
     * 按照作业执行时间进行排序。取值范围：
     * - asc：升序。
     * - desc：降序。
     * @example `asc`
     */
    "ExecuteOrder"?: string;
    /**
     * 按照作业提交时间进行排序。取值范围：
     * - asc：升序。
     * - desc：降序。
     * @example `asc`
     */
    "SubmitOrder"?: string;
    /**
     * 按照作业排队时间进行排序。取值范围：
     * - asc：升序。
     * - desc：降序。
     * @example `desc`
     */
    "PendOrder"?: string;
    /**
     * 地域ID。
     * 您可以调用[ListRegions](~~188593~~)查询可以使用E-HPC的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 作业最早提交时间。格式为Unix时间戳，表示从1970-01-01T00:00:00Z起所经过的秒数。
     * @example `1647427667`
     */
    "CreateTimeStart"?: string;
    /**
     * 作业最晚提交时间。格式为Unix时间戳，表示从1970-01-01T00:00:00Z起所经过的秒数。
     * @example `1647428667`
     */
    "CreateTimeEnd"?: string;
    /**
     * 是否异步查询。
     * @example `false`
     */
    "Async"?: boolean;
}
