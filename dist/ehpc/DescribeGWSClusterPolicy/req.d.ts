export interface DescribeGWSClusterPolicyRequest {
    /**
     * 可视化服务集群ID。
     * @example `gws-rhz99q8rc****`
     */
    "ClusterId": string;
    /**
     * 任务ID。只有AsyncMode取值为true时有效，您可以通过调用[DescribeClusterConnections](~~187347~~)接口查询任务的执行状态。
     * @example `t-****`
     */
    "TaskId"?: string;
    /**
     * 是否支持异步调用模式：
     * - false：不支持，当本次请求调用完成后，才返回结果。
     * - true：支持，无需等待本次请求调用完成，立即返回结果。
     * 默认值：false
     * @example `true`
     */
    "AsyncMode"?: boolean;
}
