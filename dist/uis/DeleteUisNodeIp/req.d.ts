interface DeleteUisNodeIpRequest {
    /**
    * Uis实例所在的地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 指定需要删除的IP地址
    * @example `43.98.22.122`
    */ "UisNodeIpAddress": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    /**
    * 指定Uis节点ID
    * @example `UISNODE-xxx0gdclomnwvxs6mlhq9`
    */ "UisNodeId": string;
}
export { DeleteUisNodeIpRequest };