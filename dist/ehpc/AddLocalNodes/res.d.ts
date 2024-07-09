export interface AddLocalNodesResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    InstanceIds: {
        /**
         * 集群中本地计算节点的信息列表。
         */
        InstanceId: string[];
    };
}
