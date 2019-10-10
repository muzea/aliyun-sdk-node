interface DeleteUisNodeRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
    /**
    * 节点所属的实例ID。
    * @example `UIS-xxxbtfk761c670ok9****`
    */ "UisId"?: string;
    /**
    * 要删除的节点实例的ID。
    * @example `UISNODE-xxxc4dacp9wal2jx6****`
    */ "UisNodeId"?: string;
}
export { DeleteUisNodeRequest };