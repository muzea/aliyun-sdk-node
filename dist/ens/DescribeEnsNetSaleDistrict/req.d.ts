export interface DescribeEnsNetSaleDistrictRequest {
    /**
     * 网络层级。取值：
     * - **Big**：大区。
     * - **Middle**：省份。
     * - **Small**：城市。
     * @example `Big`
     */
    "NetLevelCode": string;
    /**
     * 地域代码。
     * - 如果该参数为空，则只查询NetLevelCode（网络层级）下的节点。
     * - 如果该参数不为空，则只查询NetDistrictCode（地域代码）下的子节点。
     * @example `100105`
     */
    "NetDistrictCode"?: string;
}
