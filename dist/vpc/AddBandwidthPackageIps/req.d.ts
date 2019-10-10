interface AddBandwidthPackageIpsRequest {
    /**
    *  NAT带宽包所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  NAT带宽包的ID。
    * @example `bwp-s6lmotmkkxxxxxxxx`
    */ "BandwidthPackageId": string;
    /**
    *  NAT带宽包中的公网IP数量，取值范围：1-50。
    * @example `2`
    */ "IpCount": string;
    /**
    * @example `123`
    */ "OwnerId"?: number;
    /**
    *  客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
}
export { AddBandwidthPackageIpsRequest };