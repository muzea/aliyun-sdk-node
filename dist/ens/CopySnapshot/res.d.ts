export interface CopySnapshotResponse {
    /**
     * 请求ID。
     * @example `EA3758E0-8899-17D3-9526-5F62CF33A586`
     */
    RequestId: string;
    /**
     * 创建成功的快照列表。
     */
    AllocationId: {
        /**
         * 所在的节点ID。
         * @example `cn-hangzhou-27`
         */
        EnsRegionId: string;
        /**
         * 实例ID数组。
         */
        InstanceId: string[];
    }[];
    /**
     * 成功的状态码。
     * - **PartSuccess**：部分成功。
     * - **AllSuccess**：全部成功。
     * @example `PartSuccess`
     */
    BizStatusCode: string;
    /**
     * 未创建成功的节点列表。
     */
    UnAllocationId: {
        /**
         * 所在的节点ID。
         * @example `cn-chengdu-26`
         */
        EnsRegionId: string;
    }[];
}
