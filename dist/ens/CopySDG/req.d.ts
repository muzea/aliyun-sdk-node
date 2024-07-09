export interface CopySDGRequest {
    /**
     * 待复制的SDG的ID。
     * @example `sdg-xxx`
     */
    "SDGId": string;
    /**
     * 目的节点列表。
     */
    "DestinationRegionIds": string[];
}
