export interface DescribeCenInterRegionBandwidthLimitsResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `7A30C665-8766-5AAA-9274-C97380E2D850`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    CenInterRegionBandwidthLimits: {
        /**
         * 跨地域互通带宽信息列表。
         */
        CenInterRegionBandwidthLimit: {
            /**
             * 跨地域互通带宽的状态。取值：
             * - **Active**：运行中。
             * - **Modifying**：修改中。
             * @example `Active`
             */
            Status: string;
            /**
             * 带宽包实例ID。
             * @example `cenbwp-uenczwb592fnvv****`
             */
            BandwidthPackageId: string;
            /**
             * 对端地域ID。
             * @example `cn-hangzhou`
             */
            OppositeRegionId: string;
            /**
             * 互通地域ID。
             * @example `china_china`
             */
            GeographicSpanId: string;
            /**
             * 云企业网实例ID。
             * @example `cen-pfa6ugf3xl0qsd****`
             */
            CenId: string;
            /**
             * 本端地域ID。
             * 您可以调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID对应的地域信息。
             * @example `ccn-cn-shanghai`
             */
            LocalRegionId: string;
            /**
             * 两个地域间的跨地域互通带宽。单位：Mbps。
             * @example `1`
             */
            BandwidthLimit: number;
            /**
             * 带宽的分配方式。取值：
             * - **BandwidthPackage**：从带宽包中分配带宽。
             * - **DataTransfer**：不为跨地域连接分配带宽，按使用流量计费。
             * @example `BandwidthPackage`
             */
            BandwidthType: string;
        }[];
    };
}
