export interface ListTasksRequest {
    /**
     * 待查询的集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 显示的页码，起始值为1，取值范围：1~999。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数。取值范围：1~50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 任务ID。您可以调用以下异步API获取对应的TaskId。
     * - [CreateCluster](~~87100~~)
     * - [StartCluster](~~200345~~)
     * - [StopCluster](~~200346~~)
     * - [DeleteCluster](~~87110~~)
     * - [AddNodes](~~87147~~)
     * - [StartNodes](~~87159~~)
     * - [ResetNodes](~~87158~~)
     * - [StopNodes](~~87160~~)
     * - [DeleteNodes](~~87155~~)
     * @example `B745C159-3155-4B94-95D0-4B73D4D2****`
     */
    "TaskId"?: string;
    /**
     * 是否显示已运行的异步API的历史返回结果。取值范围：
     * - true：显示正在运行和历史运行的任务返回结果。
     * - false：仅显示正在运行的任务返回结果，当没有正在运行的任务时，task返回为`[]`。
     * 默认值：false。
     * >当您配置了TaskId参数时，此参数无效。
     * @example `false`
     */
    "Archived"?: boolean;
}
