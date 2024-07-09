export interface CheckModifyVirtualWareHouseResourceResponse {
    /**
     * 预检查的结果。
     */
    Data: {
        /**
         * 变配时集群的状态，预期结果为ResourceChanging：资源变配中。
         * @example `ResourceChanging`
         */
        ExpectedDBClusterStatus: string;
        /**
         * 变配时计算组的状态，预期结果为ResourceChanging：资源变配中。
         * @example `ResourceChanging`
         */
        ExpectedTargetVirtualWareHouseStatus: string;
        /**
         * 变配计算组需要的时间，单位：秒。
         * @example `60`
         */
        ExpectedOrderFinishSeconds: number;
    };
    /**
     * 请求ID。
     * @example `05321590-BB65-4720-8CB6-8218E041CDD0`
     */
    RequestId: string;
}
