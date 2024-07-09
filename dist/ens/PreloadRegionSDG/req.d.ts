export interface PreloadRegionSDGRequest {
    /**
     * 期望预加载数据的SDG ID。
     * @example `sdg-xxxx`
     */
    "SDGId": string;
    /**
     * 目的节点列表。
     */
    "DestinationRegionIds": string[];
    /**
     * 命名空间列表
     */
    "Namespaces"?: string[];
    /**
     * 冗余数量，以支持快速部署
     * @example `2`
     */
    "RedundantNum": number;
}
