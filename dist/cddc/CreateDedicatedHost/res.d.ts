export interface CreateDedicatedHostResponse {
    /**
     * 订单ID。
     * @example `102565235`
     */
    OrderId: number;
    /**
     * 请求ID。
     * @example `C860658E-68A6-46C1-AF6E-3AE7C4D32375`
     */
    RequestId: string;
    /**
     * 集群名称。
     * @example `ca-2ze0x527ovq3y****`
     */
    ClusterName: string;
    DedicateHostList: {
        /**
         * 已创建完成的主机信息。
         */
        DedicateHostList: {
            /**
             * 已创建完成的主机ID。
             * @example ` ch-bp108dki3wdl6****`
             */
            DedicatedHostId: string;
        }[];
    };
}
