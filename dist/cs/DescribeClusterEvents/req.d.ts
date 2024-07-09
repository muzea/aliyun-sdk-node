export interface DescribeClusterEventsRequest {
    /**
     * 集群ID。
     * @example `c82e6987e2961451182edacd74faf****`
     */
    "ClusterId": string;
    /**
     * 每页大小，取值范围1-50。
     * 默认值：50。
     * @example `50`
     */
    "page_size"?: number;
    /**
     * 分页页数。
     * @example `1`
     */
    "page_number"?: number;
    /**
     * 查询的任务ID。
     * @example `T-xascadasd*****`
     */
    "task_id"?: string;
}
