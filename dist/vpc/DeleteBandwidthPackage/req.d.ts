interface DeleteBandwidthPackageRequest {
    /**
    *  NAT网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  NAT带宽包的ID。
    * @example `bwp-bp1arsrmca9kpxxxxxxxx`
    */ "BandwidthPackageId": string;
    /**
    * @example `123`
    */ "OwnerId"?: number;
    /**
    * 是否强制删除带宽包。
    * @example `false`
    */ "Force"?: boolean;
}
export { DeleteBandwidthPackageRequest };