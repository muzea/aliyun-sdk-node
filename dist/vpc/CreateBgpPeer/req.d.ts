interface CreateBgpPeerRequest {
    /**
    * BGP组所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  BGP组的ID。
    * @example `bgpg-wz9f62v4fbgxxxxxxxx`
    */ "BgpGroupId": string;
    "OwnerId"?: number;
    /**
    * BGP邻居的IP地址。
    * @example `116.62.xx.xx`
    */ "PeerIpAddress"?: string;
    /**
    * 是否开启BFD功能，取值：
    * - **true**：开启BFD功能。
    * - **false**：不开启BFD功能。
    * @example `true`
    */ "EnableBfd"?: boolean;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `02fb3da4-130e-11e9-8e44-001xxxxxxxx`
    */ "ClientToken"?: string;
}
export { CreateBgpPeerRequest };