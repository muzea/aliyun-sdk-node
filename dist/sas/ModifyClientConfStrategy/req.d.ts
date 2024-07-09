export interface ModifyClientConfStrategyRequest {
    /**
     * 要查询的资产的UUID。
     * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
     */
    "Uuid"?: string;
    /**
     * 客户端配置标签。
     * @example `machineResource`
     */
    "Tag": string;
    /**
     * 客户端标签值。
     * - major
     * - advanced
     * - basic
     * @example `advanced`
     */
    "TagValue": string;
    /**
     * 扩展标签。
     * @example `auto`
     */
    "TagExt"?: string;
    /**
     * 资产实例的UUID列表。单次最多不超过500。
     */
    "Uuids"?: string[];
}
