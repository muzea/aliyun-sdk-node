export interface CreateClusterResponse {
    /**
     * 请求ID。
     * @example `F6757FA4-8FED-4602-B7F5-3550C084****`
     */
    RequestId: string;
    /**
     * 任务ID。
     * >由于CreateCluster是异步操作，请求成功就会立即返回结果，不会等待节点创建成功。您可以调用[ListTasks](~~268225~~)查询任务运行结果。
     * @example `F6757FA4-8FED-4602-B7F5-3550C084****`
     */
    TaskId: string;
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    ClusterId: string;
}
