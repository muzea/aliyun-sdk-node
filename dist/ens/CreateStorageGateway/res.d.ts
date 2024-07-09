export interface CreateStorageGatewayResponse {
    /**
     * 请求ID。
     * @example `EA3758E0-8899-17D3-9526-5F62CF33A586`
     */
    RequestId: string;
    /**
     * 创建成功的节点列表。
     */
    AllocationId: {
        /**
         * 实例ID。
         * @example `e426409223`
         */
        InstanceId: string;
        /**
         * 所在的节点ID。
         * @example `cn-chengdu-telecom-4`
         */
        EnsRegionId: string;
    }[];
    /**
     * 成功的状态码。
     * - **PartSuccess**：部分成功。
     * - **AllSuccess**：全部成功。
     * @example `AllSuccess`
     */
    BizStatusCode: string;
    /**
     * 未创建成功的节点列表。
     */
    UnAllocationId: {
        /**
         * 实例ID。
         * @example `e426409258`
         */
        InstanceId: string;
        /**
         * 所在的节点ID。
         * @example `cn-chengdu-26`
         */
        EnsRegionId: string;
    }[];
}
