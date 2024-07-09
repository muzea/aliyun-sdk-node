export interface DescribeCenGeographicSpanRemainingBandwidthRequest {
    /**
     * 查询页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值为**10**，取值范围：**1**~**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 带宽包实例绑定的云企业网实例ID。
     * @example `cen-nh98vzx8gfhlwn****`
     */
    "CenId": string;
    /**
     * 带宽包实例的一个互通区域ID，取值：
     * - **China**：中国内地。
     * - **North-America**：北美。
     * - **Asia-Pacific**：亚太。
     * - **Europe**：欧洲。
     * - **Australia**：澳洲。
     * @example `China`
     */
    "GeographicRegionAId": string;
    /**
     * 带宽包实例的另一个互通区域ID。取值：
     * - **China**：中国内地。
     * - **North-America**：北美。
     * - **Asia-Pacific**：亚太。
     * - **Europe**：欧洲。
     * - **Australia**：澳洲。
     * @example `North-America`
     */
    "GeographicRegionBId": string;
}
