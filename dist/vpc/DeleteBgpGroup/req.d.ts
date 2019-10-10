interface DeleteBgpGroupRequest {
    /**
    * BGP组所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  BGP组的ID。
    * @example `bgpg-wz9f62v4fbg2gxxxxxxxx`
    */ "BgpGroupId": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
}
export { DeleteBgpGroupRequest };