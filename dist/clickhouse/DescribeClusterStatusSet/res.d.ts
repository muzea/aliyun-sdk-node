export interface DescribeClusterStatusSetResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 集群的状态，取值说明：
         * - **OrderPreparing**：订单确认中。
         * - **Creating**：创建中。
         * - **Running**：运行中。
         * - **ResourceChanging**：资源变配中。
         * - **ResourceChangingInReadonly**：资源变配中（实例写入锁定）。
         * - **Deleting**：删除中。
         * @example `Running`
         */
        Value: string;
        /**
         * 集群状态的描述。
         * @example `运行中`
         */
        Desc: string;
    }[];
    /**
     * 请求ID。
     * @example `F5178C10-1407-4987-9133-DE4DC9119F75`
     */
    RequestId: string;
}
