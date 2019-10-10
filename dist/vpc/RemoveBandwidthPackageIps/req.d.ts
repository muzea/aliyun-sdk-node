interface RemoveBandwidthPackageIpsRequest {
    /**
    * NAT带宽包所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 待删除的公网IP的所属的NAT带宽包ID。
    * @example `bwp-s6lmotmkkxxxxxxxx`
    */ "BandwidthPackageId": string;
    "RemovedIpAddresses": string[];
    /**
    * @example `123`
    */ "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不能超过64个ASCII字符。
    * 更多关于幂等性的信息，请参考[如何保证幂等性](~~36569~~)。
    * @example `SHAww112344jhsxxxx`
    */ "ClientToken"?: string;
}
export { RemoveBandwidthPackageIpsRequest };