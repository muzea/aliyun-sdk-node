interface AddUisNodeIpRequest {
    /**
    * UIS实例所在地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 指定增加节点ip地址的个数。受整体地址个数的限制（默认不超过10个）。
    * @example `2`
    */ "IpAddrsNum": number;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-001****`
    */ "ClientToken"?: string;
    /**
    * 指定UIS节点的ID。
    * @example `UISNODE-xxx4i1kged5xd3dk8****`
    */ "UisNodeId": string;
}
export { AddUisNodeIpRequest };