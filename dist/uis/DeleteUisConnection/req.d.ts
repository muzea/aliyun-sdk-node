interface DeleteUisConnectionRequest {
    "RegionId"?: string;
    /**
    * 要删除的隧道连接ID。
    * @example `UISCONN-xxxblu51boe75a1eb****`
    */ "UisConnectionId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
    /**
    * 节点ID。
    * @example `UISNODE-xxxcp0zr5m2avmn2r****`
    */ "UisNodeId"?: string;
}
export { DeleteUisConnectionRequest };