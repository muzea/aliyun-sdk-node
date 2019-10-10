interface DeleteBgpNetworkRequest {
    /**
    * BGP组所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 需要和IDC互联的VPC或交换机的网段。
    * @example `10.110.192.12/32`
    */ "DstCidrBlock": string;
    /**
    * 边界路由器ID。
    * @example `vrt-bp1lhl0taikrteen80oxx`
    */ "RouterId": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
}
export { DeleteBgpNetworkRequest };