export interface ListTasksResponse {
    /**
     * 本页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `89A1AC0F-4A6C-4F3D-98F9-BEF9A823****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 任务列表条目总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 任务信息列表。
     */
    Tasks: {
        /**
         * 任务运行状态。可能值：
         * - Processing：运行中
         * - Success：运行成功
         * - Fail：运行失败
         * - PartialFail：部分运行失败
         * @example `Processing`
         */
        Status: string;
        /**
         * 任务类型。可能值：
         * - CreateCluster：创建集群，对应的API为[CreateCluster](~~87100~~)
         * - StartCluster：启动集群，对应的API为[StartCluster](~~200345~~)
         * - StopCluster：停止集群，对应的API为[StopCluster](~~200346~~)
         * - DeleteCluster：释放集群，对应的API为[DeleteCluster](~~87110~~)
         * - AddComputes：添加节点到集群，对应的API为[AddNodes](~~87147~~)
         * - StartComputes：启动节点，对应的API为[StartNodes](~~87159~~)
         * - ResetComputes：重置节点，对应的API为[ResetNodes](~~87158~~)
         * - StopComputes：停止节点，对应的API为[StopNodes](~~87160~~)
         * - DeleteComputes：删除节点，对应的API为[DeleteNodes](~~87155~~)
         * @example `StopCluster`
         */
        TaskType: string;
        /**
         * 任务总操作步数。
         * @example `35`
         */
        TotalSteps: number;
        /**
         * 任务当前操作步数。
         * @example `16`
         */
        CurrentStep: number;
        /**
         * 任务运行结果。可能值：
         * - 当TaskType为CreateCluster和AddComputes时，格式为`{\"Instances\":[]}`，表示加入到集群的节点信息。
         * - 当TaskType为除CreateCluster和AddComputes的其他值时，格式为`{}`。
         * @example `{\"Instances\":[{\"InstanceId\":\"i-bp1inb1j2xz8pnoi****\",\"Ip\":\"192.168.*.*\",\"Hostname\":\"login0\",\"role\":\"login\"}]}`
         */
        Result: string;
        /**
         * 任务运行错误信息列表。
         * <props="china">您可以在[错误中心](https://error-center.aliyun.com/status/product/EHPC)查看错误信息及对应的解决方案。</props>
         * <props="intl">您可以在[错误中心](https://error-center.alibabacloud.com/status/product/EHPC)查看错误信息及对应的解决方案。</props>
         * @example `[]`
         */
        Errors: string;
        /**
         * 任务ID。
         * @example `B745C159-3155-4B94-95D0-4B73D4D2****`
         */
        TaskId: string;
        /**
         * 任务的请求参数信息，格式为JSON字符串。
         * @example `{\"requestId\":\"0A6CA33E-BFBF-4F92-BDAE-4E8860DA****\",\"uid\":\"160998252992****\",\"bid\":\"268**\",\"clusterId\":\"ehpc-hz-ysQtcZ****\"}`
         */
        Request: string;
        /**
         * 集群ID。
         * @example `ehpc-hz-FYUr32****`
         */
        ClusterId: string;
    }[];
}
