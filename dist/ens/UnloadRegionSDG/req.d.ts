export interface UnloadRegionSDGRequest {
    /**
     * 删除预加载数据的SDG ID。
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
}
