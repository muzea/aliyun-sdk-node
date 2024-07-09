export interface DescribeEnsNetDistrictRequest {
    /**
     * 地域层级。
     * - **Big**：大区。
     * - **Middle**：省份。
     * - **Small**：城市。
     * @example `Big`
     */
    "NetLevelCode": string;
    /**
     * 地域代码。
     * 如果该参数为空，则只查询NetLevelCode下的节点。
     * 如果该参数不为空，则只查询NetDistrictCode下的子节点。
     * @example `100106`
     */
    "NetDistrictCode"?: string;
}
