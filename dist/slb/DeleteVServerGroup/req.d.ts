interface DeleteVServerGroupRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 服务器组ID。
    * > 如果服务器组被引用，将无法删除。
    * @example `rsp-cige6j5e7p`
    */ "VServerGroupId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { DeleteVServerGroupRequest };