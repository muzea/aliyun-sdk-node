export interface DescribeServiceMeshUpgradeStatusResponse {
    /**
     * 请求ID
     * @example `11fd0027-c27e-41bb-a565-75583054****`
     */
    RequestId: string;
    /**
     * 升级状态结果
     */
    UpgradeDetail: {
        /**
         * 升级完成的网关数目
         * @example `1`
         */
        FinishedGatewaysNum: number;
        /**
         * ASM实例状态，取值：
         * - running：运行中
         * - `upgrading`：升级中
         * - `upgrading_failed`：升级失败
         * @example `running`
         */
        MeshStatus: string;
        /**
         * 所有的网关数目
         * @example `2`
         */
        TotalGatewaysNum: number;
        /**
         * ASM网关状态记录
         */
        GatewayStatusRecord: any;
    };
}
