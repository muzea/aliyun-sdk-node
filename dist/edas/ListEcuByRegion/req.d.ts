export interface ListEcuByRegionRequest {
    /**
     * 命名空间ID：
     * - 自定义命名空间ID格式为：`地域ID:命名空间标示符`，例如：cn-beijing:tdy218。
     * - 默认命名空间ID格式为：`地域ID`，例如：cn-beijing。
     * @example `cn-beijing 或 cn-beijing:tdy218`
     */
    "LogicalRegionId"?: string;
    /**
     * 固定值为`pop-query`。
     * @example `pop-query`
     */
    "Act": string;
}
