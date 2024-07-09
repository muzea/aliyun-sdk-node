export interface CheckDeleteVirtualWareHouseResponse {
    /**
     * 预检查的结果。
     */
    Data: {
        /**
         * 删除时集群的状态，预期结果为ResourceChanging：资源变配中。
         * @example `ResourceChanging`
         */
        ExpectedDBClusterStatus: string;
        /**
         * 删除时计算组的状态，预期结果为Deleting：删除中。
         * @example `Deleting`
         */
        ExpectedTargetVirtualWareHouseStatus: string;
        /**
         * 删除计算组所需的时间，单位：秒。
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
