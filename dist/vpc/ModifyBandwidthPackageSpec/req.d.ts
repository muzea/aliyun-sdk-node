interface ModifyBandwidthPackageSpecRequest {
    /**
    * NAT带宽包所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  NAT带宽包的ID。
    * @example `bwp-s6lmotmkkxxxxxxxx`
    */ "BandwidthPackageId": string;
    /**
    *  NAT带宽包的带宽。取值范围：5-1000。
    * @example `5`
    */ "Bandwidth": string;
    /**
    * @example `123`
    */ "OwnerId"?: number;
}
export { ModifyBandwidthPackageSpecRequest };