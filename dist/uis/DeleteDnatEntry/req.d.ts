interface DeleteDnatEntryRequest {
    "RegionId"?: string;
    /**
    * DNAT规则所属的UIS节点ID。
    * @example `UISNODE-xxxpucur6tfhpzok5****`
    */ "UisNodeId": string;
    /**
    * 要删除的DNAT规则ID。
    * @example `UISDNAT-xxx58s0dxe3418dqu****`
    */ "UisDnatId": string;
    "OwnerId"?: number;
}
export { DeleteDnatEntryRequest };