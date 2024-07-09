export interface ListBandwidthackagesResponse {
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `4B6DBBB0-2D01-4C6A-A384-4129266E6B78`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 带宽包详情。
     */
    BandwidthPackages: {
        /**
         * 带宽包ID。
         * @example `gbwp-bp1sgzldyj6b4q7cx****`
         */
        BandwidthPackageId: string;
        /**
         * 带宽包的带宽值，单位为Mbps。
         * @example `2`
         */
        Bandwidth: number;
        /**
         * 带宽包的描述。
         * @example `testDescription`
         */
        Description: string;
        /**
         * 带宽包到期时间的时间戳。
         * @example `1578966918000`
         */
        ExpiredTime: string;
        /**
         * 带宽包的状态。
         * - **init**：初始化。
         * - **active**：可用。
         * - **binded**：已绑定。
         * - **binding**：绑定中。
         * - **unbinding**：解绑中。
         * - **updating**：更新中。
         * - **finacialLocked**：欠费锁定。
         * - **locked**：已锁定。
         * @example `active`
         */
        State: string;
        /**
         * 带宽包创建时间的时间戳。
         * @example `1578966918000`
         */
        CreateTime: string;
        /**
         * 付费类型。
         * - **PREPAY**（默认值）：预付费，即包年包月。
         * - **POSTPAY**：后付费，即按量付费。
         * @example `PREPAY`
         */
        ChargeType: string;
        /**
         * 带宽包绑定的全球加速实例ID。
         */
        Accelerators: string[];
        /**
         * 全球加速实例的名称。
         * @example `Accelerator`
         */
        Name: string;
        /**
         * 请求ID。
         * @example `DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6`
         */
        RegionId: string;
        /**
         * 资源组ID。
         * @example `rg-aekzzwgr7vz2liy`
         */
        ResourceGroupId: string;
        /**
         * 资源标签。
         */
        Tags: {
            /**
             * 标签键。
             * @example `tag-key`
             */
            Key: string;
            /**
             * 标签值。
             * @example `tag-value`
             */
            Value: string;
        }[];
    }[];
}
