export interface CountNodesByNodeGroupIdRequest {
    /**
     * 节点分组ID。
     * @example `123`
     */
    "NodeGroupId": string;
    /**
     * 模糊匹配节点的DevEUI。
     * @example `0000000000000000`
     */
    "FuzzyDevEui"?: string;
}
