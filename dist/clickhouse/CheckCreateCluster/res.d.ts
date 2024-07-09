export interface CheckCreateClusterResponse {
    /**
     * 预检查的结果。
     */
    Data: {
        /**
         * 创建时集群的状态，预期结果为Creating：创建中。
         * @example `Creating`
         */
        ExpectedDBClusterStatus: string;
        /**
         * 创建时计算组的状态，预期结果为Creating：创建中。
         * @example `Creating`
         */
        ExpectedTargetVirtualWareHouseStatus: string;
        /**
         * 创建云原生版集群所需的时间，单位：秒。
         * @example `60`
         */
        ExpectedOrderFinishSeconds: number;
    };
    /**
     * 请求ID。
     * @example `9A23C87D-87DF-4DA0-A50E-CB13F4F7923D`
     */
    RequestId: string;
}
