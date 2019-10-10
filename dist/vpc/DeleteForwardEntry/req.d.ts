interface DeleteForwardEntryRequest {
    /**
    * NAT网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  DNAT列表ID。
    * @example `ftb-8vbx8xu2lqj9qb334h0ow`
    */ "ForwardTableId": string;
    /**
    *  DNAT条目ID。
    * @example `fwd-8vbn3bc8roygjp0gy3xk7`
    */ "ForwardEntryId": string;
    "OwnerId"?: number;
}
export { DeleteForwardEntryRequest };