export interface DescribeCenBandwidthPackagesResponse {
    /**
     * 每页包含的条目数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `9D7E2400-2755-4AF5-9B73-12565E4F73A0`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `2`
     */
    TotalCount: number;
    CenBandwidthPackages: {
        /**
         * 带宽包的详细信息。
         */
        CenBandwidthPackage: {
            /**
             * 临时升配到期时间。
             * @example `2021-08-30T16:00Z`
             */
            ReservationActiveTime: string;
            /**
             * 带宽包是否已绑定云企业网实例。
             * - **Idle**：未绑定。
             * - **InUse**：已绑定。
             * @example `InUse`
             */
            Status: string;
            /**
             * 带宽包的创建时间，采用ISO8601格式表示，格式为：YYYY-MM-DDThh:mmZ。
             * @example `2021-02-01T11:14Z`
             */
            CreationTime: string;
            /**
             * 续费变配方式。
             * - **TEMP_UPGRADE**：短时升配。
             * - **UPGRADE**：升配。
             * @example `UPGRADE`
             */
            ReservationOrderType: string;
            /**
             * 带宽包的计费方式。
             *
             * @example `PREPAY`
             */
            BandwidthPackageChargeType: string;
            /**
             * 带宽包的ID。
             * @example `cenbwp-4c2zaavbvh5x****`
             */
            CenBandwidthPackageId: string;
            /**
             * 变配之后的计费方式。
             * @example `PREPAY`
             */
            ReservationInternetChargeType: string;
            /**
             * 要查询的区域ID。取值：
             * - **china**：中国内地。
             * - **asia-pacific**：亚太。
             * - **europe**：欧洲。
             * - **australia**：澳洲。
             * - **north-america**：北美。
             * @example `china`
             */
            GeographicRegionAId: string;
            /**
             * 带宽包的峰值带宽。
             * @example `2`
             */
            Bandwidth: number;
            /**
             * 带宽包描述。
             * @example `cen`
             */
            Description: string;
            /**
             * 带宽包超时时间。
             * @example `2021-09-08T16:00Z`
             */
            ExpiredTime: string;
            /**
             * 临时升配结束后恢复的带宽。
             * @example `10`
             */
            ReservationBandwidth: string;
            /**
             * 区域对应的ID。
             * @example `north-america_china`
             */
            GeographicSpanId: string;
            /**
             * 带宽包实例的另一个互通区域ID。取值：
             * - **china**：中国内地。
             * - **asia-pacific**：亚太。
             * - **europe**：欧洲。
             * - **australia**：澳洲。
             * - **north-america**：北美。
             * @example `north-america`
             */
            GeographicRegionBId: string;
            /**
             * 资源组ID。
             * @example `rg-aekzoyr5k36****`
             */
            ResourceGroupId: string;
            /**
             * 是否是跨境带宽包。
             * - **false**：不是跨境带宽包。
             * - **true**：是跨境带宽包。
             * @example `false`
             */
            IsCrossBorder: boolean;
            /**
             * 带宽包的状态。
             * - **Normal**：正常。
             * - **FinancialLocked**：欠费锁定。
             * - **SecurityLocked**：安全风控锁定。
             * @example `Normal`
             */
            BusinessStatus: string;
            /**
             * 带宽包的名称。
             * @example `test`
             */
            Name: string;
            /**
             * 是否有续费数据。
             * - **true**：有续费数据。
             * - **false**：没有续费数据。
             * >仅入参**IncludeReservationData**取值为**true**，且有未生效订购数据时才会为**true**。
             * @example `false`
             */
            HasReservationData: string;
            OrginInterRegionBandwidthLimits: {
                /**
                 * 互通地域的详细信息。
                 */
                OrginInterRegionBandwidthLimit: {
                    /**
                     * 互通地域间的带宽峰值。
                     * @example `1`
                     */
                    BandwidthLimit: string;
                    /**
                     * 对端地域ID。
                     * @example `us-west-1`
                     */
                    OppositeRegionId: string;
                    /**
                     * 互通地域。
                     * @example `north-america_china`
                     */
                    GeographicSpanId: string;
                    /**
                     * 本端地域ID。
                     * @example `cn-hangzhou`
                     */
                    LocalRegionId: string;
                }[];
            };
            Tags: {
                /**
                 * 带宽包的标签信息。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `TagKey`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `TagValue`
                     */
                    Value: string;
                }[];
            };
            CenIds: {
                /**
                 * 带宽包对应的云企业网实例的列表。
                 */
                CenId: string[];
            };
        }[];
    };
}
