export interface DescribeAccessPointsResponse {
    /**
     * 请求ID。
     * @example `3E85D803-C7CF-4BCD-9CFE-6DBA1DFFA027`
     */
    RequestId: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表条条目数。
     * @example `5`
     */
    TotalCount: number;
    AccessPointSet: {
        /**
         * 查询到的接入点信息。
         */
        AccessPointType: {
            /**
             * 物理专线的接入点状态。
             * - **recommended** ：表示接入点状态良好，推荐接入。
             * - **hot** ：表示接入的物理专线较多，状态正常。
             * - **full** ：表示接入物理专线已满，不允许新增接入。
             * - **disabled** ：表示接入点不可用。
             * @example `recommended`
             */
            Status: string;
            /**
             * 物理专线的网络类型。默认值：**VPC**。
             * @example `VPC`
             */
            Type: string;
            /**
             * 接入点所属的运营商。
             * @example `中国电信`
             */
            HostOperator: string;
            /**
             * 接入点描述信息。
             * @example `接入点描述信息`
             */
            Description: string;
            /**
             * 接入点所在的地域ID。
             * @example `cn-hangzhou`
             */
            AttachedRegionNo: string;
            /**
             * 接入点名称。
             * @example `杭州-余杭-C`
             */
            Name: string;
            /**
             * 接入点ID。
             * @example `ap-cn-hangzhou-****`
             */
            AccessPointId: string;
            /**
             * 接入点的位置。
             * @example `杭州`
             */
            Location: string;
            AccessPointFeatureModels: {
                /**
                 * 查询到的接入点特征模型。
                 */
                AccessPointFeatureModel: {
                    /**
                     * 接入点特性值。
                     * @example `true`
                     */
                    FeatureValue: string;
                    /**
                     * 接入点特性。
                     * @example `AP_Support_VbrBandwidthLimit`
                     */
                    FeatureKey: string;
                }[];
            };
        }[];
    };
}
