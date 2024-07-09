export interface ListJobsRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 运行作业的用户。
     * 您可以通过调用[ListUsers](~~188572~~)获取该集群中的用户ID。
     * @example `user1`
     */
    "Owner"?: string;
    /**
     * 作业状态。取值范围：
     * - all：所有状态。
     * - finished：已完成。
     * - notfinish：未完成。
     * @example `finished`
     */
    "State"?: string;
    /**
     * 是否支持重新运行作业。取值范围：
     * - true：支持。
     * - false：不支持。
     * 默认值：false。
     * @example `false`
     */
    "Rerunable"?: string;
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
}
