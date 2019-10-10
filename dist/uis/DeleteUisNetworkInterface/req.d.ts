interface DeleteUisNetworkInterfaceRequest {
    "RegionId"?: string;
    /**
    * Uis节点ID
    * @example `UISNODE-xxx2d6jni60ifs7tzrxaj`
    */ "UisNodeId": string;
    /**
    * Uis弹性网卡ID
    * @example `UISENI-xxxg3rqds52gz7sbxdhsc`
    */ "UisEniId": string;
    "OwnerId"?: number;
}
export { DeleteUisNetworkInterfaceRequest };